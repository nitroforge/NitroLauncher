"""Patches: find Mario Kart Wii mods on GameBanana and install them into the
"Patches" folder inside the player's "My Stuff" folder.

Every installed patch lives in its own sub-folder with a small patch.json
next to its files. Enabled patches are merged into the modpack's "My Stuff"
folder on Play (see Api._sync_my_stuff in main.py). Files are only ever added
or refreshed there, never deleted.

Only the standard library is used, so the built exe does not grow.
"""
import json
import os
import re
from html.parser import HTMLParser
import shutil
import subprocess
import tempfile
import time
import urllib.error
import urllib.parse
import urllib.request
import zipfile


API = "https://gamebanana.com/apiv11"
GAME_NAME = "Mario Kart Wii"
DEFAULT_GAME_ID = 5896          # Mario Kart Wii on GameBanana; can be changed in config as "patches_game_id"
PER_PAGE = 20
META = "patch.json"
USER_AGENT = "MarioKartNitro-Launcher"

MAX_DOWNLOAD = 400 * 1024 * 1024        # compressed download
MAX_UNPACKED = 1024 * 1024 * 1024       # everything that gets written
MAX_ENTRIES = 6000
# Patches are for looks only. Anything that changes how the game plays (tracks, kart and
# driver values, item rules), anything that runs code, and anything the launcher can't
# identify is refused, so a patch can never be used to cheat online.
ALLOWED_DIRS = {"scene", "driver", "kart", "effect", "award", "demo", "title", "miigroup",
                "font", "sound", "thp", "mii"}                 # menus, models, textures, music
FORBIDDEN_DIRS = {"race", "boot", "rel", "code", "event", "enemy", "item", "bgm"}   # tracks, rules, code
ASSET_EXT = {".szs", ".brres", ".brstm", ".brsar", ".brwsd", ".brwar", ".brlyt", ".brlan", ".brctr",
             ".bti", ".tpl", ".arc", ".u8", ".bmg", ".bres", ".szp", ".rarc", ".thp", ".png", ".jpg"}
CODE_EXT = {".dol", ".rel", ".gct", ".ini", ".xml", ".asm", ".pnach", ".cht", ".bin", ".lua", ".py",
            ".kmp", ".kcl", ".cfg", ".json", ".yml", ".yaml", ".patch", ".diff"}
# Words that mark a mod as something other than a look change (shown in category or title).
BLOCK_CATEGORY_WORDS = ("track", "course", "arena", "code", "cheat", "gecko", "gameplay", "hack",
                        "speed", "stat", "item", "ctgp", "physic", "tool", "online", "unlock", "wiimmfi")
BLOCK_TITLE_WORDS = ("cheat", "gecko", "hack", "speedhack", "unlock all", "ctgp", "wiimmfi", "custom track",
                     "track pack", "item rain", "item fever", "stats", "op kart", "godmode", "god mode")

# Programs have no place in a patch for a game; they are never written.
BLOCKED_EXT = {".exe", ".dll", ".bat", ".cmd", ".com", ".scr", ".msi", ".ps1", ".vbs", ".vbe",
               ".js", ".jse", ".jar", ".lnk", ".reg", ".hta", ".cpl", ".sh", ".app"}
# Folders the game itself knows; used to tell a ready-made layout from a loose pile of files.
GAME_DIRS = {"race", "scene", "demo", "boot", "effect", "driver", "kart", "award", "miigroup",
             "title", "sound", "thp", "rel", "mii", "event", "font", "enemy", "item", "bgm", "strm"}
LOOSE_EXT = {".szs", ".brres", ".brsar", ".brstm", ".bres", ".kmp", ".kcl", ".arc", ".u8", ".bmg",
             ".bti", ".tpl", ".brlyt", ".brlan", ".bin", ".rarc", ".szp"}
# Pictures and texts that authors ship next to their files (previews, icons, readmes).
# Outside the game's folders they are simply left out instead of blocking the mod.
DOC_EXT = {".png", ".jpg", ".jpeg", ".gif", ".webp", ".bmp", ".ico", ".psd", ".xcf", ".txt", ".md",
           ".rtf", ".pdf", ".doc", ".docx", ".html", ".htm", ".url", ".nfo"}
# First bytes of the archive types the launcher can open besides .zip.
ARCHIVE_MAGIC = (b"Rar!\x1a\x07", b"7z\xbc\xaf\x27\x1c", b"\x1f\x8b", b"\xfd7zXZ\x00", b"BZh")
# Archives (.szs/.arc/.u8) are opened to see what they hold. Course, collision and rule files
# inside mean a track or a gameplay change, which patches may not do.
ARCHIVE_TYPES = {".szs", ".arc", ".u8", ".szp"}
INSIDE_FORBIDDEN_EXT = {".kmp", ".kcl", ".bin", ".pul", ".dol", ".rel", ".lua", ".gct", ".ini", ".xml"}
INSIDE_FORBIDDEN_NAMES = {"course_model.brres", "vrcorn_model.brres", "course.kmp", "course.kcl"}
MAX_ARCHIVE_HEAD = 4 * 1024 * 1024      # bytes of an archive's header the launcher will read
EXTRACT_TIMEOUT = 180                   # seconds an external unpacker may run
_NO_WINDOW = getattr(subprocess, "CREATE_NO_WINDOW", 0)   # no console flash on Windows


class PatchError(Exception):
    """An error whose text can be shown to the player as it is."""


# ---------------------------------------------------------------- network

def _open(url, timeout=20):
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT, "Accept": "application/json, */*"})
    return urllib.request.urlopen(req, timeout=timeout)


def _get_json(url, timeout=20):
    try:
        with _open(url, timeout) as r:
            return json.loads(r.read().decode("utf-8", "replace"))
    except urllib.error.HTTPError as e:
        raise PatchError("GameBanana answered with an error (%s)." % e.code)
    except (urllib.error.URLError, OSError, TimeoutError):
        raise PatchError("Can't reach GameBanana. Check your internet connection.")
    except ValueError:
        raise PatchError("GameBanana sent an answer that can't be read.")


def _is_gb_url(url):
    try:
        p = urllib.parse.urlparse(url)
    except ValueError:
        return False
    host = (p.hostname or "").lower()
    return p.scheme == "https" and (host == "gamebanana.com" or host.endswith(".gamebanana.com"))


def _thumb(rec):
    """Picture address of a record, or ''."""
    try:
        media = rec.get("_aPreviewMedia") or {}
        images = media.get("_aImages") or []
        if images:
            im = images[0]
            base = im.get("_sBaseUrl") or ""
            name = im.get("_sFile220") or im.get("_sFile") or ""
            if base and name:
                url = base.rstrip("/") + "/" + name
                if _is_gb_url(url):
                    return url
    except (AttributeError, TypeError, IndexError):
        pass
    return ""


def blocked_listing(it):
    """True for mods the launcher hides (tracks, gameplay or code changes)."""
    cat = (it.get("category") or "").lower()
    name = (it.get("name") or "").lower()
    return any(w in cat for w in BLOCK_CATEGORY_WORDS) or any(w in name for w in BLOCK_TITLE_WORDS)


def _item(rec):
    sub = rec.get("_aSubmitter") or {}
    cat = rec.get("_aRootCategory") or rec.get("_aCategory") or {}
    return {
        "mod_id": rec.get("_idRow"),
        "name": str(rec.get("_sName") or "").strip() or "Untitled",
        "author": str(sub.get("_sName") or "").strip(),
        "thumb": _thumb(rec),
        "likes": rec.get("_nLikeCount") or 0,
        "views": rec.get("_nViewCount") or 0,
        "downloads": rec.get("_nDownloadCount") or 0,
        "category": str(cat.get("_sName") or "").strip(),
        "url": rec.get("_sProfileUrl") if _is_gb_url(rec.get("_sProfileUrl") or "") else "",
        "added": rec.get("_tsDateAdded") or 0,
    }


def check_game(game_id):
    """True when the id really is Mario Kart Wii (so a wrong id can never list another game's files)."""
    data = _get_json("%s/Game/%d/ProfilePage" % (API, int(game_id)))
    return GAME_NAME.lower() in str(data.get("_sName") or "").lower()


_game_ok = {}


def _fetch(query, page, game_id):
    """One page of raw results. A search uses GameBanana's search; no text lists the newest mods."""
    if query:
        q = urllib.parse.urlencode({"_sSearchString": query[:80], "_idGameRow": game_id, "_sModelName": "Mod",
                                    "_nPage": page, "_nPerpage": PER_PAGE})
        data = _get_json("%s/Util/Search/Results?%s" % (API, q))
    else:
        q = urllib.parse.urlencode({"_nPage": page, "_nPerpage": PER_PAGE, "_aFilters[Generic_Game]": game_id})
        data = _get_json("%s/Mod/Index?%s" % (API, q))
    records = data.get("_aRecords") or []
    meta = data.get("_aMetadata") or {}
    items = [_item(r) for r in records if isinstance(r, dict) and r.get("_idRow")]
    if meta.get("_bIsComplete") is False:
        more = True
    elif isinstance(meta.get("_nRecordCount"), int):
        more = page * PER_PAGE < meta["_nRecordCount"]
    else:
        more = len(records) >= PER_PAGE
    return items, more


def _words(text):
    return [w for w in re.split(r"[^\w]+", (text or "").lower()) if len(w) >= 2]


def _score(it, words):
    hay = " ".join([it.get("name") or "", it.get("author") or "", it.get("category") or ""]).lower()
    return sum(1 for w in words if w in hay)


def search(query, page=1, game_id=DEFAULT_GAME_ID, want=12, max_pages=4):
    """Newest mods, or search results, without the mods the launcher hides.

    Keeps reading pages until about `want` mods are left after hiding. A search that finds
    little is repeated word by word so a long or oddly spelled phrase still finds something.
    Returns {"items": [...], "has_more": bool, "page": last page read}."""
    game_id = int(game_id)
    page = max(1, int(page or 1))
    if game_id not in _game_ok:
        _game_ok[game_id] = check_game(game_id)
    if not _game_ok[game_id]:
        raise PatchError("The GameBanana game number doesn't match %s. Set \"patches_game_id\" in the config." % GAME_NAME)
    query = (query or "").strip()
    out, seen, more, last = [], set(), False, page - 1
    p = page
    while len(out) < want and p < page + max_pages:
        items, more = _fetch(query, p, game_id)
        last = p
        for it in items:
            if it["mod_id"] in seen or blocked_listing(it):
                continue
            seen.add(it["mod_id"])
            out.append(it)
        if not more:
            break
        p += 1
    words = _words(query)
    if query and page == 1 and len(out) < 6 and len(words) > 1:
        for w in words[:4]:                       # one more try for each word on its own
            try:
                items, _m = _fetch(w, 1, game_id)
            except PatchError:
                continue
            for it in items:
                if it["mod_id"] not in seen and not blocked_listing(it):
                    seen.add(it["mod_id"])
                    out.append(it)
        out.sort(key=lambda it: (-_score(it, words), -(it.get("likes") or 0)))
    return {"items": out, "has_more": bool(more), "page": last}


class _Text(HTMLParser):
    """Turns the HTML of a description into plain text."""
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.out = []
    def handle_starttag(self, tag, attrs):
        if tag in ("br", "p", "li", "div", "h1", "h2", "h3", "h4", "tr"):
            self.out.append("\n")
    def handle_data(self, d):
        self.out.append(d)


def plain_text(html, limit=3000):
    t = _Text()
    try:
        t.feed(str(html or ""))
    except Exception:
        return ""
    s = re.sub(r"[ \t]+", " ", "".join(t.out))
    s = re.sub(r"\n\s*\n+", "\n\n", s).strip()
    return s[:limit]


def _images(rec, limit=12):
    """Full-size preview pictures (only GameBanana addresses)."""
    out = []
    try:
        for im in ((rec.get("_aPreviewMedia") or {}).get("_aImages") or [])[:limit]:
            base = (im.get("_sBaseUrl") or "").rstrip("/")
            big = im.get("_sFile800") or im.get("_sFile530") or im.get("_sFile") or ""
            small = im.get("_sFile220") or im.get("_sFile100") or big
            if base and big and _is_gb_url(base + "/" + big):
                out.append({"full": base + "/" + big, "small": base + "/" + small})
    except (AttributeError, TypeError):
        pass
    return out


def mod_files(mod_id):
    """Details and downloadable files of one mod."""
    mod_id = int(mod_id)
    data = _get_json("%s/Mod/%d/ProfilePage" % (API, mod_id))
    files = []
    for f in data.get("_aFiles") or []:
        if not isinstance(f, dict):
            continue
        url = f.get("_sDownloadUrl") or ""
        if not _is_gb_url(url):
            continue
        files.append({"file_id": f.get("_idRow"), "name": str(f.get("_sFile") or "file"),
                      "size": f.get("_nFilesize") or 0, "url": url,
                      "info": str(f.get("_sDescription") or "")[:200]})
    item = _item(data) if data.get("_idRow") else {}
    desc = plain_text(data.get("_sText") or data.get("_sDescription") or "")
    return {"mod": item, "files": files, "images": _images(data), "description": desc}


# ---------------------------------------------------------------- folders

def slug(text):
    s = re.sub(r"[^A-Za-z0-9._ -]+", "", str(text)).strip(" .")
    s = re.sub(r"\s+", " ", s)
    return (s or "patch")[:60]


def _inside(base, path):
    base = os.path.normcase(os.path.realpath(base))
    path = os.path.normcase(os.path.realpath(path))
    return path == base or path.startswith(base + os.sep)


def _clean_parts(name):
    """Splits an archive path into safe folder/file names, or returns None when it must never be
    written (absolute paths, '..', drive letters). A leading './', doubled slashes and stray spaces
    or dots around a name are tidied up instead of dropping the file."""
    n = name.replace("\\", "/")
    if not n or n.startswith("/") or re.match(r"^[A-Za-z]:", n):
        return None
    parts = []
    for p in n.split("/"):
        if p in ("", "."):
            continue
        if p == ".." or ":" in p:
            return None
        p = p.strip().rstrip(". ") if p.strip(". ") else ""
        if not p:
            return None
        parts.append(p)
    return parts or None


def _bad_member(name):
    return _clean_parts(name) is None


def extract_zip(zip_path, out_dir):
    """Unpacks a zip into out_dir. Returns (files_written, bytes_written, skipped_programs)."""
    written = total = skipped = 0
    with zipfile.ZipFile(zip_path) as z:
        infos = z.infolist()
        if len(infos) > MAX_ENTRIES:
            raise PatchError("This archive has too many files.")
        for info in infos:
            name = info.filename
            if name.endswith("/") or info.is_dir():
                continue
            if _bad_member(name):
                continue
            if (info.external_attr >> 16) & 0o170000 == 0o120000:   # symbolic link
                continue
            ext = os.path.splitext(name)[1].lower()
            if ext in BLOCKED_EXT:
                skipped += 1
                continue
            total += info.file_size
            if total > MAX_UNPACKED:
                raise PatchError("This archive is too large once unpacked.")
            target = os.path.join(out_dir, *_clean_parts(name))
            if not _inside(out_dir, target):
                continue
            os.makedirs(os.path.dirname(target), exist_ok=True)
            with z.open(info) as src, open(target, "wb") as dst:
                shutil.copyfileobj(src, dst, 1024 * 256)
            written += 1
    return written, total, skipped


def _looks_like_archive(path):
    try:
        with open(path, "rb") as f:
            head = f.read(8)
    except OSError:
        return False
    return head.startswith(ARCHIVE_MAGIC)


def _find_unpacker():
    """Finds a program that can open .rar/.7z files. Windows 10 and 11 ship one (tar.exe,
    built on libarchive); 7-Zip is used when it is installed. Returns (kind, path) or None."""
    found = []
    if os.name == "nt":
        found.append(("tar", os.path.join(os.environ.get("SystemRoot", r"C:\Windows"), "System32", "tar.exe")))
        for var in ("ProgramFiles", "ProgramFiles(x86)"):
            if os.environ.get(var):
                found.append(("7z", os.path.join(os.environ[var], "7-Zip", "7z.exe")))
    found += [("tar", shutil.which("bsdtar")), ("tar", shutil.which("tar")),
              ("7z", shutil.which("7zz")), ("7z", shutil.which("7z"))]
    for kind, path in found:
        if not path or not os.path.isfile(path):
            continue
        if kind == "tar":
            try:
                out = subprocess.run([path, "--version"], capture_output=True, text=True, timeout=10,
                                     creationflags=_NO_WINDOW).stdout
            except (OSError, subprocess.SubprocessError):
                continue
            if "libarchive" not in out and "bsdtar" not in out:
                continue                   # a tar that can't open .rar/.7z
        return kind, path
    return None


def _dir_size(path):
    total = 0
    for root, _dirs, files in os.walk(path):
        for name in files:
            try:
                total += os.path.getsize(os.path.join(root, name))
            except OSError:
                pass
    return total


def extract_archive(archive, out_dir):
    """Unpacks a .rar/.7z (or other archive) into out_dir with an outside program, then goes
    through the result with the same rules as a zip. Returns (files_written, bytes_written, skipped_programs)."""
    tool = _find_unpacker()
    if not tool:
        raise PatchError("This mod comes as a .rar or .7z file and this PC has no program to open it. "
                         "Install 7-Zip, or open the mod on GameBanana to download it yourself.")
    kind, path = tool
    if kind == "tar":
        cmd = [path, "-xf", archive, "-C", out_dir]
    else:
        cmd = [path, "x", "-y", "-bd", "-o" + out_dir, archive]
    try:
        proc = subprocess.Popen(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, creationflags=_NO_WINDOW)
    except OSError:
        raise PatchError("The archive could not be opened.")
    started = time.time()
    checks = 0
    while proc.poll() is None:
        time.sleep(0.1)
        checks += 1
        if time.time() - started > EXTRACT_TIMEOUT or (checks % 5 == 0 and _dir_size(out_dir) > MAX_UNPACKED):
            proc.kill()
            proc.wait()
            raise PatchError("This archive is too large or takes too long to unpack.")
    if proc.returncode != 0:
        raise PatchError("The archive could not be opened (it may be damaged or password protected).")
    return _sanitize_tree(out_dir)


def _sanitize_tree(out_dir):
    """Applies the zip rules to files an outside program wrote: no links, no programs,
    nothing outside the folder, and size limits."""
    written = total = skipped = 0
    for root, dirs, files in os.walk(out_dir):
        for d in list(dirs):
            full = os.path.join(root, d)
            if os.path.islink(full):
                os.remove(full)
                dirs.remove(d)
        for name in files:
            full = os.path.join(root, name)
            rel = os.path.relpath(full, out_dir).replace("\\", "/")
            ext = os.path.splitext(name)[1].lower()
            if os.path.islink(full) or _bad_member(rel) or not _inside(out_dir, full):
                os.remove(full)
            elif ext in BLOCKED_EXT:
                os.remove(full)
                skipped += 1
            else:
                written += 1
                total += os.path.getsize(full)
        if written > MAX_ENTRIES:
            raise PatchError("This archive has too many files.")
    if total > MAX_UNPACKED:
        raise PatchError("This archive is too large once unpacked.")
    return written, total, skipped


def _subdirs(base):
    return [e for e in os.listdir(base) if os.path.isdir(os.path.join(base, e))]


def _find_game_root(root, max_depth=4):
    """Looks down from root for the folder that holds the game's own folders (Driver, Scene...).
    Returns it, or None when there is none or when several versions of the mod sit side by side."""
    level = [root]
    for _ in range(max_depth + 1):
        found, deeper = [], []
        for base in level:
            names = _subdirs(base)
            if any(n.lower() in GAME_DIRS for n in names):
                found.append(base)
            else:
                deeper += [os.path.join(base, n) for n in names]
        if found:
            if len(found) > 1:
                raise PatchError("This archive holds several versions of the mod side by side, so the launcher "
                                 "can't tell which one to use. Open it on GameBanana and pick one.")
            return found[0]
        level = deeper
    return None


def _find_loose_root(root, max_depth=3):
    """Looks down from root for the one folder that holds game files directly (no Driver/Scene
    folders around them). Returns None when there is none or several."""
    level = [root]
    for _ in range(max_depth + 1):
        found, deeper = [], []
        for base in level:
            names = os.listdir(base)
            if any(os.path.isfile(os.path.join(base, n)) and os.path.splitext(n)[1].lower() in LOOSE_EXT for n in names):
                found.append(base)
            deeper += [os.path.join(base, n) for n in names if os.path.isdir(os.path.join(base, n))]
        if found:
            return found[0] if len(found) == 1 else None
        level = deeper
    return None


def _hoist(root, base):
    """Makes the content of base the new top level of root; everything else in root is dropped."""
    hold = tempfile.mkdtemp(prefix="hold_", dir=os.path.dirname(root))
    for e in os.listdir(base):
        shutil.move(os.path.join(base, e), os.path.join(hold, e))
    for e in os.listdir(root):
        full = os.path.join(root, e)
        shutil.rmtree(full) if os.path.isdir(full) else os.remove(full)
    for e in os.listdir(hold):
        shutil.move(os.path.join(hold, e), os.path.join(root, e))
    os.rmdir(hold)


def _one_per_name(root, paths):
    """When the same file name turns up in several folders (versions or variants of one mod),
    the copy closest to the top wins, then the first by name. The game only ever sees one."""
    def order(path):
        rel = os.path.relpath(path, root)
        return (rel.count(os.sep), rel.lower())
    chosen = {}
    for path in sorted(paths, key=order):
        chosen.setdefault(os.path.basename(path).lower(), path)
    return list(chosen.values())


def _flatten_loose(root, max_depth=5):
    """Some authors sort their plain game files into folders of their own (allkart, karts,
    icons ...). Those names mean nothing to the game: a plain file in My Stuff is found by its
    name. So every loose game file, wherever it sits, becomes a top-level file; everything else
    is left behind. Nothing happens when the mod holds no loose game files."""
    found = []
    for folder, dirs, names in os.walk(root):
        depth = 0 if folder == root else os.path.relpath(folder, root).count(os.sep) + 1
        if depth >= max_depth:
            dirs[:] = []
        for name in names:
            if not name.startswith(".") and os.path.splitext(name)[1].lower() in LOOSE_EXT:
                found.append(os.path.join(folder, name))
    if not found:
        return
    chosen = _one_per_name(root, found)
    hold = tempfile.mkdtemp(prefix="hold_", dir=os.path.dirname(root))
    for path in chosen:
        shutil.move(path, os.path.join(hold, os.path.basename(path)))
    for entry in os.listdir(root):
        full = os.path.join(root, entry)
        shutil.rmtree(full) if os.path.isdir(full) else os.remove(full)
    for entry in os.listdir(hold):
        shutil.move(os.path.join(hold, entry), os.path.join(root, entry))
    os.rmdir(hold)


def _gather_strays(root, max_depth=5):
    """A mod can hold the game's folders and, next to them, a folder of its own (Icon, extras ...)
    with plain game files inside. Those names mean nothing to the game either, so the plain files
    move up to the top level like in a loose mod. Game folders are never touched."""
    own = [e for e in os.listdir(root)
           if os.path.isdir(os.path.join(root, e)) and e.lower() not in GAME_DIRS and not e.startswith(".")]
    taken = {e.lower() for e in os.listdir(root)}
    found = []
    for folder in own:
        top = os.path.join(root, folder)
        for here, dirs, names in os.walk(top):
            if os.path.relpath(here, top).count(os.sep) + 1 >= max_depth:
                dirs[:] = []
            for name in names:
                if not name.startswith(".") and os.path.splitext(name)[1].lower() in LOOSE_EXT:
                    found.append(os.path.join(here, name))
    for path in _one_per_name(root, found):
        if os.path.basename(path).lower() not in taken:      # a file already at the top stays
            shutil.move(path, os.path.join(root, os.path.basename(path)))
    for folder in own:
        for here, _dirs, _names in os.walk(os.path.join(root, folder), topdown=False):
            if not os.listdir(here):
                os.rmdir(here)


def _strip_wrappers(root):
    """Moves the game's folders (or loose game files) up to the top, leaving readmes, previews
    and other wrapper content behind. Returns the layout kind."""
    base = _find_game_root(root) or _find_loose_root(root)
    if base is None:
        _flatten_loose(root)               # files spread over several author folders
    elif base != root:
        _hoist(root, base)
    if base is not None:
        _gather_strays(root)
    tops = [e for e in os.listdir(root) if e != META]
    if any(e.lower() in GAME_DIRS and os.path.isdir(os.path.join(root, e)) for e in tops):
        return "game"
    if any(os.path.isfile(os.path.join(root, e)) and os.path.splitext(e)[1].lower() in LOOSE_EXT for e in tops):
        return "loose"
    return "unknown"


def _yaz0_prefix(raw, want):
    """Decodes only the first `want` bytes of a Yaz0 stream (enough to read an archive's file list)."""
    out = bytearray()
    src, size = 16, len(raw)
    want = min(want, int.from_bytes(raw[4:8], "big"))
    while len(out) < want and src < size:
        code = raw[src]
        src += 1
        for bit in range(8):
            if len(out) >= want or src >= size:
                break
            if code & (0x80 >> bit):
                out.append(raw[src])
                src += 1
            else:
                b1, b2 = raw[src], raw[src + 1]
                src += 2
                dist = ((b1 & 0x0F) << 8 | b2) + 1
                length = b1 >> 4
                if length == 0:
                    length = raw[src] + 0x12
                    src += 1
                else:
                    length += 2
                for _ in range(length):
                    if len(out) >= want:
                        break
                    out.append(out[-dist])
    return bytes(out)


def _u8_file_names(buf):
    """Names of the files inside a U8 archive whose start (header, node table, names) is in buf."""
    root = int.from_bytes(buf[4:8], "big")
    count = int.from_bytes(buf[root + 8:root + 12], "big")
    pool = root + 12 * count
    names = []
    for i in range(1, count):
        node = root + 12 * i
        if buf[node] == 0:
            start = pool + int.from_bytes(buf[node + 1:node + 4], "big")
            names.append(buf[start:buf.index(b"\0", start)].decode("latin-1"))
    return names


def archive_file_names(path):
    """File names inside a .szs/.arc/.u8 archive. Raises ValueError when it can't be read."""
    try:
        with open(path, "rb") as f:
            head = f.read(16)
            if head[:4] == b"Yaz0":
                f.seek(0)
                raw = f.read(1024 * 64)
                first = _yaz0_prefix(raw, 0x20)
                need = int.from_bytes(first[4:8], "big") + int.from_bytes(first[8:12], "big")
                if first[:4] != b"U\xaa8-" or need > MAX_ARCHIVE_HEAD:
                    raise ValueError("not a readable archive")
                f.seek(0)
                return _u8_file_names(_yaz0_prefix(f.read(need * 2 + 4096), need))
            if head[:4] == b"U\xaa8-":
                need = int.from_bytes(head[4:8], "big") + int.from_bytes(head[8:12], "big")
                if need > MAX_ARCHIVE_HEAD:
                    raise ValueError("not a readable archive")
                f.seek(0)
                return _u8_file_names(f.read(need))
    except (OSError, IndexError):
        raise ValueError("not a readable archive")
    raise ValueError("not a readable archive")


def archive_problem(path):
    """Looks inside a plain game file. Returns None when it is looks-only, else a short reason."""
    name = os.path.basename(path)
    if os.path.splitext(name)[1].lower() not in ARCHIVE_TYPES:
        return None                        # models, textures, music: nothing inside to check
    try:
        inside = archive_file_names(path)
    except (ValueError, IndexError):
        return "can't read %s" % name
    for item in inside:
        low = item.lower()
        if os.path.splitext(low)[1] in INSIDE_FORBIDDEN_EXT or low in INSIDE_FORBIDDEN_NAMES:
            return "%s inside %s" % (item, name)
    return None


def _sample_paths(stage, limit=5):
    """The first few file paths in the stage folder, for messages that show what a mod holds."""
    found = []
    for root, dirs, files in os.walk(stage):
        dirs.sort()
        for name in sorted(files):
            if name != META:
                found.append(os.path.relpath(os.path.join(root, name), stage).replace("\\", "/"))
                if len(found) == limit:
                    return found
    return found


def _check_archive(full, rules, unreadable):
    """Looks inside one game file. Returns 1 when it can be kept, else notes why it can't."""
    problem = archive_problem(full)
    if problem is None:
        return 1
    if problem.startswith("can't read"):
        unreadable.append(problem[len("can't read "):])
    else:
        rules.append(problem)
    return 0


def enforce_policy(stage, layout):
    """Keeps only looks-only game files. Refuses the whole mod when it touches tracks, game
    rules or code, or when the launcher can't tell what its files are. Plain game files
    (no folders) are kept as they are: in My Stuff they replace the game's file of that name.
    Returns (files, bytes)."""
    if layout not in ("game", "loose"):
        seen = ", ".join(_sample_paths(stage)) or "nothing"
        raise PatchError("The files in this mod aren't inside the game's folders (like Driver or Scene), "
                         "so the launcher can't tell where they belong (it contains: %s). "
                         "Open it on GameBanana instead." % seen)
    rules, unreadable, keep = [], [], 0
    for root, _dirs, files in os.walk(stage):
        for name in files:
            full = os.path.join(root, name)
            rel = os.path.relpath(full, stage).replace("\\", "/")
            top = rel.split("/")[0].lower()
            ext = os.path.splitext(name)[1].lower()
            if top.startswith("."):
                os.remove(full)            # hidden files are never copied
            elif "/" not in rel:
                if ext in CODE_EXT:
                    rules.append(rel)
                elif ext in LOOSE_EXT:
                    keep += _check_archive(full, rules, unreadable)
                else:
                    os.remove(full)        # readmes and pictures next to the files stay out
            elif top == "race" and rel.count("/") == 1 and ext in ARCHIVE_TYPES:
                keep += _check_archive(full, rules, unreadable)    # race files are fine unless they hold tracks or rules
            elif top in FORBIDDEN_DIRS or ext in CODE_EXT:
                rules.append(rel)
            elif top not in ALLOWED_DIRS:
                os.remove(full)            # pictures, texts and spare copies outside the game's folders are left out
            elif ext in ASSET_EXT:
                keep += 1
            else:
                os.remove(full)            # readmes and other non-game files stay out
    if rules:
        raise PatchError("Not installed: this mod changes tracks, game rules or code (%s). Patches are for looks only." % ", ".join(rules[:2]))
    if unreadable:
        raise PatchError("Not installed: the launcher can't open %s to check it." % ", ".join(unreadable[:2]))
    if keep == 0:
        raise PatchError("There was nothing the launcher can install in this mod.")
    total = 0
    for root, dirs, files in os.walk(stage, topdown=False):
        for name in files:
            total += os.path.getsize(os.path.join(root, name))
        if not os.listdir(root) and root != stage:
            os.rmdir(root)                 # folders that only held left-out files
    return keep, total


def download(url, dest, progress=None):
    if not _is_gb_url(url):
        raise PatchError("This download address is not from GameBanana.")
    try:
        with _open(url, timeout=30) as r:
            if r.geturl() and not _is_gb_url(r.geturl()):
                raise PatchError("The download was sent to a different site.")
            length = int(r.headers.get("Content-Length") or 0)
            if length > MAX_DOWNLOAD:
                raise PatchError("This file is too large.")
            got = 0
            with open(dest, "wb") as f:
                while True:
                    chunk = r.read(1024 * 1024)
                    if not chunk:
                        break
                    got += len(chunk)
                    if got > MAX_DOWNLOAD:
                        raise PatchError("This file is too large.")
                    f.write(chunk)
                    if progress:
                        progress(got, length)
    except urllib.error.HTTPError as e:
        raise PatchError("The download failed (%s)." % e.code)
    except (urllib.error.URLError, OSError, TimeoutError) as e:
        if isinstance(e, PatchError):
            raise
        raise PatchError("The download failed. Check your internet connection.")


def install(patches_dir, mod, file_info, progress=None):
    """Downloads one file of a mod and installs it as a patch. Returns the patch record."""
    name = str(file_info.get("name") or "file")
    ext = os.path.splitext(name)[1].lower()
    if ext in BLOCKED_EXT:
        raise PatchError("This file type is not allowed.")
    os.makedirs(patches_dir, exist_ok=True)
    folder = "%s [%s]" % (slug(mod.get("name")), mod.get("mod_id"))
    final = os.path.join(patches_dir, folder)
    if not _inside(patches_dir, final):
        raise PatchError("Bad patch name.")
    tmp_root = tempfile.mkdtemp(prefix="nitro_patch_", dir=patches_dir)
    try:
        dl = os.path.join(tmp_root, "download.bin")
        download(file_info.get("url") or "", dl, progress)
        stage = os.path.join(tmp_root, "files")
        os.makedirs(stage)
        skipped = 0
        if zipfile.is_zipfile(dl):
            count, size, skipped = extract_zip(dl, stage)
        elif _looks_like_archive(dl):
            count, size, skipped = extract_archive(dl, stage)
        elif ext in LOOSE_EXT:
            shutil.copy2(dl, os.path.join(stage, slug(os.path.splitext(name)[0]) + ext))
            count, size = 1, os.path.getsize(dl)
        else:
            raise PatchError("This file is not an archive and not a game file the launcher knows.")
        if count == 0:
            raise PatchError("There was nothing to install in this download.")
        layout = _strip_wrappers(stage)
        count, size = enforce_policy(stage, layout)
        record = {
            "mod_id": mod.get("mod_id"), "file_id": file_info.get("file_id"), "name": mod.get("name"),
            "author": mod.get("author"), "thumb": mod.get("thumb"), "url": mod.get("url"),
            "file": name, "files": count, "size": size, "layout": layout, "skipped_programs": skipped,
            "enabled": True, "installed_at": int(time.time()),
        }
        # replace an older install of the same mod, keeping its on/off choice
        if os.path.isdir(final):
            try:
                with open(os.path.join(final, META), "r", encoding="utf-8") as f:
                    record["enabled"] = bool(json.load(f).get("enabled", True))
            except (OSError, ValueError):
                pass
            shutil.rmtree(final)
        with open(os.path.join(stage, META), "w", encoding="utf-8") as f:
            json.dump(record, f, ensure_ascii=False, indent=1)
        shutil.move(stage, final)
        record["folder"] = folder
        return record
    finally:
        shutil.rmtree(tmp_root, ignore_errors=True)


def list_installed(patches_dir):
    out = []
    try:
        names = sorted(os.listdir(patches_dir), key=str.lower)
    except OSError:
        return out
    for n in names:
        p = os.path.join(patches_dir, n)
        if not os.path.isdir(p) or n.startswith("nitro_patch_"):
            continue
        try:
            with open(os.path.join(p, META), "r", encoding="utf-8") as f:
                rec = json.load(f)
        except (OSError, ValueError):
            rec = {"name": n, "enabled": True, "layout": "unknown", "files": sum(len(f) for _r, _d, f in os.walk(p))}
        rec["folder"] = n
        out.append(rec)
    return out


def _folder(patches_dir, folder):
    path = os.path.join(patches_dir, folder)
    if not folder or folder != os.path.basename(folder) or not os.path.isdir(path) or not _inside(patches_dir, path):
        raise PatchError("This patch was not found.")
    return path


def set_enabled(patches_dir, folder, enabled):
    path = _folder(patches_dir, folder)
    meta = os.path.join(path, META)
    try:
        with open(meta, "r", encoding="utf-8") as f:
            rec = json.load(f)
    except (OSError, ValueError):
        rec = {"name": folder}
    rec["enabled"] = bool(enabled)
    with open(meta, "w", encoding="utf-8") as f:
        json.dump(rec, f, ensure_ascii=False, indent=1)
    return rec


def remove(patches_dir, folder):
    """Deletes one patch folder (only inside the Patches folder, only on the player's click)."""
    shutil.rmtree(_folder(patches_dir, folder))


def merge_enabled(patches_dir, dst):
    """Copies the files of every enabled patch into dst (the modpack's My Stuff folder).
    Files are only added or refreshed. Returns (copied, skipped, failed, last_error)."""
    copied = skipped = failed = 0
    last = ""
    for rec in list_installed(patches_dir):
        if not rec.get("enabled", True):
            continue
        src = os.path.join(patches_dir, rec["folder"])
        for root, _dirs, files in os.walk(src):
            rel = os.path.relpath(root, src)
            out_dir = dst if rel == "." else os.path.join(dst, rel)
            for name in files:
                if rel == "." and name == META:
                    continue
                a, b = os.path.join(root, name), os.path.join(out_dir, name)
                try:
                    sa = os.stat(a)
                    if os.path.isfile(b):
                        sb = os.stat(b)
                        if sb.st_size == sa.st_size and sb.st_mtime_ns >= sa.st_mtime_ns:
                            skipped += 1
                            continue
                    os.makedirs(out_dir, exist_ok=True)
                    shutil.copy2(a, b)
                    copied += 1
                except OSError as e:
                    failed += 1
                    last = str(e)
    return copied, skipped, failed, last
