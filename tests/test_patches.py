import io, json, os, shutil, subprocess, sys, tempfile, threading, unittest, zipfile
from http.server import BaseHTTPRequestHandler, HTTPServer
sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))
import patches


def make_zip(entries):
    b = io.BytesIO()
    with zipfile.ZipFile(b, "w") as z:
        for name, data in entries.items():
            z.writestr(name, data)
    return b.getvalue()


ZIPS = {
    "/dl/1": make_zip({"MyMod/Scene/UI/a.szs": b"AAA", "MyMod/readme.txt": b"hi", "MyMod/evil.exe": b"MZ"}),
    "/dl/4": make_zip({"Race/Course/rBC1.szs": b"track", "Scene/UI/x.szs": b"ui"}),
    "/dl/5": make_zip({"Scene/UI/x.szs": b"ui", "Scene/codes.ini": b"[Gecko]"}),
    "/dl/6": make_zip({"Driver/Mario.szs": b"m", "Kart/k.szs": b"k", "Sound/strm/m.brstm": b"s", "notes.txt": b"n"}),
    "/dl/2": make_zip({"track.szs": b"T"}),
    "/dl/3": make_zip({"../../outside.txt": b"x", "ok/file.szs": b"1", "/abs.szs": b"2", "C:/win.szs": b"3"}),
}


def make_u8(names):
    """A tiny U8 archive that holds the given file names (empty files)."""
    pool = b"\0" + b"".join(n.encode() + b"\0" for n in names)
    nodes = [(1, 0, 0, len(names) + 1)]
    offset = 1
    for n in names:
        nodes.append((0, offset, 0, 0))
        offset += len(n) + 1
    table = b"".join(bytes([t]) + o.to_bytes(3, "big") + d.to_bytes(4, "big") + z.to_bytes(4, "big")
                     for t, o, d, z in nodes)
    header_size = len(table) + len(pool)
    data_offset = 0x20 + header_size
    return b"U\xaa8-" + (0x20).to_bytes(4, "big") + header_size.to_bytes(4, "big") + data_offset.to_bytes(4, "big") \
        + b"\0" * 16 + table + pool


def make_szs(names):
    """The same archive wrapped in Yaz0 (stored without compression, which the format allows)."""
    raw = make_u8(names)
    out = bytearray(b"Yaz0" + len(raw).to_bytes(4, "big") + b"\0" * 8)
    for i in range(0, len(raw), 8):
        chunk = raw[i:i + 8]
        out.append((0xFF << (8 - len(chunk))) & 0xFF if len(chunk) < 8 else 0xFF)
        out += chunk
    return bytes(out)


def make_7z(entries):
    """A real .7z built with bsdtar (None when this machine has no bsdtar)."""
    tool = shutil.which("bsdtar")
    if not tool:
        return None
    with tempfile.TemporaryDirectory() as d:
        src = os.path.join(d, "src")
        for name, data in entries.items():
            path = os.path.join(src, *name.split("/"))
            os.makedirs(os.path.dirname(path), exist_ok=True)
            with open(path, "wb") as f:
                f.write(data)
        out = os.path.join(d, "mod.7z")
        subprocess.run([tool, "--format", "7zip", "-cf", out, "-C", src, "."], check=True, capture_output=True)
        with open(out, "rb") as f:
            return f.read()


ZIPS.update({
    "/dl/10": make_zip({"Icons/MKT_Icon_Daisy.png": b"png", "Icons/MKT_Map_Daisy.png": b"png", "Driver/Daisy.szs": b"d"}),
    "/dl/11": make_zip({"Icons/helper.szs": b"x", "Driver/Daisy.szs": b"d"}),
    "/dl/12": make_zip({"readme.txt": b"hi", "__MACOSX/._a": b"x", "Mod v2/Files/Driver/a.szs": b"a", "Mod v2/Files/Scene/UI/b.szs": b"b"}),
    "/dl/13": make_zip({"Version A/Driver/a.szs": b"a", "Version B/Driver/a.szs": b"b"}),
    "/dl/14": b"this is not an archive",
    "/dl/15": make_zip({"Mario-m.szs": b"not really an archive", "readme.txt": b"hi"}),
    "/dl/18": make_zip({"Earth.szs": make_szs(["blackBoard.brres", "galaxy.brres"]), "preview.png": b"p", "readme.txt": b"hi"}),
    "/dl/19": make_zip({"My Mod/Earth.szs": make_szs(["galaxy.brres"]), "My Mod/pic.jpg": b"p"}),
    "/dl/23": make_zip({"Menu.szs": make_szs(["ui.brlyt", "course.kmp"])}),
    "/dl/24": make_zip({"Common.szs": make_szs(["KartParam.bin"])}),
    "/dl/25": make_zip({"bike.brres": b"model", "song.brstm": b"music"}),
    "/dl/26": make_zip({"course.kmp": b"x"}),
    "/dl/28": make_zip({"Dry Bones v1.1/Misc/notes.xyz": b"x", "Dry Bones v1.1/Misc/sub/other.xyz": b"y"}),
    "/dl/27": make_zip({"Driver/Mario.szs": b"m", "Earth.szs": make_szs(["galaxy.brres"])}),
    "/dl/16": make_zip({"./Mod /Driver/Mario.szs": b"m", "Mod /Scene/UI/a.szs": b"a"}),
    "/dl/17": make_zip({"Driver/Mario.szs": b"m", ".git/config": b"x", ".DS_Store": b"x"}),
    "/dl/29": make_zip({
        "Dry Bones (Reindeer) v1.1/allkart/ka-allkart.szs": make_szs(["kart.brres"]),
        "Dry Bones (Reindeer) v1.1/icons/st_karon_32x32.tpl": b"tpl",
        "Dry Bones (Reindeer) v1.1/icons/tt_karon_64x64.tpl": b"tpl",
        "Dry Bones (Reindeer) v1.1/karts/sa_bike-ka.szs": make_szs(["bike.brres"]),
        "Dry Bones (Reindeer) v1.1/karts/sa_kart-ka.szs": make_szs(["kart.brres"]),
        "Dry Bones (Reindeer) v1.1/readme.txt": b"hi"}),
    "/dl/30": make_zip({"a/Mario.szs": make_szs(["m.brres"]), "b/Mario.szs": make_szs(["m.brres"])}),
    "/dl/31": make_zip({"a/ok.szs": make_szs(["m.brres"]), "b/course.kmp": b"x"}),
    "/dl/32": make_zip({"Driver/Kinopio.szs": b"k", "Icon/st_kinopio_32\u00d732.tpl": b"tpl",
                        "Icon/tt_kinopio_64\u00d764.tpl": b"tpl", "Icon/preview.png": b"p"}),
    "/dl/34": make_zip({"Race/Race.szs": make_szs(["kingboo.brres"]), "Driver/a.szs": b"d"}),
    "/dl/35": make_zip({"Race/Common.szs": make_szs(["kartParam.bin", "x.brres"]), "Driver/a.szs": b"d"}),
    "/dl/36": make_zip({"Race/Course/luigi.szs": make_szs(["x.brres"]), "Driver/a.szs": b"d"}),
    "/dl/33": make_zip({"Driver/a.szs": b"k", "Kinopio.szs": make_szs(["a.brres"]), "Icon/Kinopio.szs": make_szs(["b.brres"])}),
})
SEVEN_OK = make_7z({"Mod/Driver/a.szs": b"a", "Mod/Scene/b.szs": b"b", "Mod/evil.exe": b"MZ", "Mod/Icons/p.png": b"p"})
SEVEN_TRACK = make_7z({"Race/Course/x.szs": b"t", "Driver/a.szs": b"a"})
if SEVEN_OK:
    ZIPS["/dl/20"], ZIPS["/dl/21"] = SEVEN_OK, SEVEN_TRACK
ZIPS["/dl/22"] = b"Rar!\x1a\x07\x01\x00" + b"\0" * 20


class H(BaseHTTPRequestHandler):
    def log_message(self, *a): pass
    def do_GET(self):
        p = self.path
        if p.startswith("/Game/"):
            body = json.dumps({"_sName": "Mario Kart Wii"}).encode()
        elif p.startswith("/Mod/Index") or p.startswith("/Util/Search"):
            recs = [{"_idRow": 11, "_sName": "Cool Mod", "_aSubmitter": {"_sName": "Bob"}, "_nLikeCount": 5,
                     "_aPreviewMedia": {"_aImages": [{"_sBaseUrl": "https://images.gamebanana.com/img", "_sFile": "a.jpg"}]}},
                    {"_nope": 1}]
            body = json.dumps({"_aRecords": recs, "_aMetadata": {"_nRecordCount": 21}}).encode()
        elif p.startswith("/Mod/") and p.endswith("/ProfilePage"):
            body = json.dumps({"_idRow": 11, "_sName": "Cool Mod", "_aSubmitter": {"_sName": "Bob"},
                               "_sText": "<p>Nice <b>textures</b></p><script>x()</script><p>Line two</p>",
                               "_aPreviewMedia": {"_aImages": [{"_sBaseUrl": "https://images.gamebanana.com/img", "_sFile": "a.jpg", "_sFile220": "s.jpg"},
                                                               {"_sBaseUrl": "https://evil.example.com/i", "_sFile": "b.jpg"}]},
                               "_aFiles": [{"_idRow": 5, "_sFile": "cool.zip", "_nFilesize": 10, "_sDownloadUrl": "https://gamebanana.com/dl/1"}]}).encode()
        elif p in ZIPS:
            body = ZIPS[p]
        else:
            self.send_response(404); self.end_headers(); return
        self.send_response(200); self.send_header("Content-Length", str(len(body))); self.end_headers(); self.wfile.write(body)


class T(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.srv = HTTPServer(("127.0.0.1", 0), H)
        threading.Thread(target=cls.srv.serve_forever, daemon=True).start()
        cls.base = "http://127.0.0.1:%d" % cls.srv.server_port
        cls._api, cls._gb = patches.API, patches._is_gb_url
        cls._gbreal = staticmethod(cls._gb)
        patches.API = cls.base
        def rewrite_open(url, timeout=20, _o=patches._open):
            return _o(url.replace("https://gamebanana.com", cls.base), timeout)
        patches._open = rewrite_open
        patches._is_gb_url = lambda u: True

    @classmethod
    def tearDownClass(cls):
        cls.srv.shutdown(); patches.API = cls._api; patches._is_gb_url = cls._gb

    def test_search(self):
        r = patches.search("", 1, 5896)
        self.assertEqual(len(r["items"]), 1)
        self.assertEqual(r["items"][0]["name"], "Cool Mod")
        self.assertEqual(r["page"], 2)
        self.assertFalse(r["has_more"])
        self.assertTrue(patches.search("cool", 1, 5896)["items"])

    def test_install_flow(self):
        with tempfile.TemporaryDirectory() as d:
            info = patches.mod_files(11)
            rec = patches.install(d, info["mod"], info["files"][0])
            self.assertEqual(rec["layout"], "game")
            self.assertEqual(rec["skipped_programs"], 1)
            folder = os.path.join(d, rec["folder"])
            self.assertTrue(os.path.isfile(os.path.join(folder, "Scene", "UI", "a.szs")))
            self.assertFalse(os.path.exists(os.path.join(folder, "readme.txt")))
            self.assertFalse(os.path.exists(os.path.join(folder, "evil.exe")))
            self.assertEqual(len(patches.list_installed(d)), 1)
            dst = d + "_pack"
            self.assertEqual(patches.merge_enabled(d, dst)[0], 1)  # a.szs
            self.assertFalse(os.path.exists(os.path.join(dst, "patch.json")))
            patches.set_enabled(d, rec["folder"], False)
            self.assertEqual(patches.merge_enabled(d, d + "_pack2")[0], 0)
            patches.remove(d, rec["folder"])
            self.assertEqual(patches.list_installed(d), [])
            with self.assertRaises(patches.PatchError):
                patches.remove(d, "../x")

    def test_details(self):
        d = patches.mod_files(11)
        self.assertIn("Nice textures", d["description"])
        self.assertIn("Line two", d["description"])
        self.assertEqual(len(d["images"]), 2)
        saved = patches._is_gb_url
        patches._is_gb_url = self._gbreal
        try:
            imgs = patches._images({"_aPreviewMedia": {"_aImages": [
                {"_sBaseUrl": "https://images.gamebanana.com/img", "_sFile": "a.jpg"},
                {"_sBaseUrl": "https://evil.example.com/i", "_sFile": "b.jpg"}]}})
        finally:
            patches._is_gb_url = saved
        self.assertEqual(len(imgs), 1)
        self.assertTrue(imgs[0]["full"].startswith("https://images.gamebanana.com/"))

    def test_policy(self):
        with tempfile.TemporaryDirectory() as d:
            for mid, url in ((2, "2"), (3, "3"), (4, "4"), (5, "5")):   # loose, slip, track, code
                with self.assertRaises(patches.PatchError):
                    patches.install(d, {"mod_id": mid, "name": "Bad%d" % mid}, {"name": "x.zip", "url": "https://gamebanana.com/dl/" + url})
            self.assertEqual(patches.list_installed(d), [])
            self.assertEqual([e for e in os.listdir(d)], [])
            self.assertFalse(os.path.exists(os.path.join(os.path.dirname(d), "outside.txt")))
            rec = patches.install(d, {"mod_id": 6, "name": "Good"}, {"name": "g.zip", "url": "https://gamebanana.com/dl/6"})
            self.assertEqual(rec["files"], 3)
            self.assertFalse(os.path.exists(os.path.join(d, rec["folder"], "notes.txt")))

    def test_listing_filter(self):
        self.assertTrue(patches.blocked_listing({"name": "Item Fever", "category": ""}))
        self.assertTrue(patches.blocked_listing({"name": "x", "category": "Custom Tracks"}))
        self.assertTrue(patches.blocked_listing({"name": "Speed Boost Cheat", "category": "Skins"}))
        self.assertFalse(patches.blocked_listing({"name": "Luigi Skin", "category": "Skins"}))

    def _install(self, d, mod_id, url_id, name="x.zip"):
        return patches.install(d, {"mod_id": mod_id, "name": "Mod%d" % mod_id},
                               {"name": name, "url": "https://gamebanana.com/dl/%s" % url_id})

    def test_preview_folder_is_ignored(self):
        with tempfile.TemporaryDirectory() as d:
            rec = self._install(d, 30, 10)
            folder = os.path.join(d, rec["folder"])
            self.assertEqual(rec["files"], 1)
            self.assertTrue(os.path.isfile(os.path.join(folder, "Driver", "Daisy.szs")))
            self.assertFalse(os.path.exists(os.path.join(folder, "Icons")))

    def test_unknown_folder_with_game_files_is_refused(self):
        with tempfile.TemporaryDirectory() as d:
            with self.assertRaises(patches.PatchError) as ctx:
                self._install(d, 31, 11)
            self.assertIn("helper.szs", str(ctx.exception))
            self.assertEqual(os.listdir(d), [])

    def test_deep_wrapper_and_junk_folders(self):
        with tempfile.TemporaryDirectory() as d:
            rec = self._install(d, 32, 12)
            folder = os.path.join(d, rec["folder"])
            self.assertEqual(rec["files"], 2)
            self.assertTrue(os.path.isfile(os.path.join(folder, "Scene", "UI", "b.szs")))
            self.assertFalse(os.path.exists(os.path.join(folder, "Mod v2")))

    def test_side_by_side_versions_are_refused(self):
        with tempfile.TemporaryDirectory() as d:
            with self.assertRaises(patches.PatchError):
                self._install(d, 33, 13)

    def test_plain_files_install_as_they_are(self):
        with tempfile.TemporaryDirectory() as d:
            rec = self._install(d, 39, 18)
            folder = os.path.join(d, rec["folder"])
            self.assertEqual(rec["files"], 1)
            self.assertTrue(os.path.isfile(os.path.join(folder, "Earth.szs")))
            self.assertFalse(os.path.exists(os.path.join(folder, "preview.png")))
            self.assertFalse(os.path.exists(os.path.join(folder, "readme.txt")))
            self.assertEqual(patches.merge_enabled(d, d + "_pack")[0], 1)
            self.assertTrue(os.path.isfile(os.path.join(d + "_pack", "Earth.szs")))

    def test_plain_files_inside_a_wrapper(self):
        with tempfile.TemporaryDirectory() as d:
            rec = self._install(d, 43, 19)
            self.assertTrue(os.path.isfile(os.path.join(d, rec["folder"], "Earth.szs")))

    def test_plain_models_and_music(self):
        with tempfile.TemporaryDirectory() as d:
            self.assertEqual(self._install(d, 44, 25)["files"], 2)

    def test_course_file_inside_an_archive_is_refused(self):
        with tempfile.TemporaryDirectory() as d:
            for mod, dl in ((45, 23), (46, 24)):
                with self.assertRaises(patches.PatchError) as ctx:
                    self._install(d, mod, dl)
                self.assertIn("tracks, game rules or code", str(ctx.exception))
            self.assertEqual(os.listdir(d), [])

    def test_plain_course_data_is_refused(self):
        with tempfile.TemporaryDirectory() as d:
            with self.assertRaises(patches.PatchError):
                self._install(d, 47, 26)

    def test_unknown_layout_message_shows_real_paths(self):
        with tempfile.TemporaryDirectory() as d:
            with self.assertRaises(patches.PatchError) as ctx:
                self._install(d, 50, 28)
            self.assertIn("Misc/notes.xyz", str(ctx.exception))

    def test_unreadable_archive_is_refused(self):
        with tempfile.TemporaryDirectory() as d:
            with self.assertRaises(patches.PatchError) as ctx:
                self._install(d, 48, 15)
            self.assertIn("can't open Mario-m.szs", str(ctx.exception))

    def test_plain_file_next_to_game_folders_is_kept(self):
        with tempfile.TemporaryDirectory() as d:
            rec = self._install(d, 49, 27)
            self.assertEqual(rec["files"], 2)
            self.assertTrue(os.path.isfile(os.path.join(d, rec["folder"], "Earth.szs")))

    def test_odd_folder_names_are_tidied_not_dropped(self):
        with tempfile.TemporaryDirectory() as d:
            rec = self._install(d, 40, 16)
            folder = os.path.join(d, rec["folder"])
            self.assertEqual(rec["files"], 2)
            self.assertTrue(os.path.isfile(os.path.join(folder, "Driver", "Mario.szs")))
            self.assertTrue(os.path.isfile(os.path.join(folder, "Scene", "UI", "a.szs")))

    def test_files_sorted_into_author_folders_become_plain_files(self):
        with tempfile.TemporaryDirectory() as d:
            rec = self._install(d, 45, 29)
            folder = os.path.join(d, rec["folder"])
            self.assertEqual(rec["files"], 5)
            self.assertEqual(rec["layout"], "loose")
            for name in ("ka-allkart.szs", "sa_bike-ka.szs", "sa_kart-ka.szs", "st_karon_32x32.tpl", "tt_karon_64x64.tpl"):
                self.assertTrue(os.path.isfile(os.path.join(folder, name)), name)
            self.assertFalse(os.path.exists(os.path.join(folder, "karts")))
            self.assertEqual(patches.merge_enabled(d, d + "_pack")[0], 5)

    def test_game_files_in_an_extra_folder_next_to_game_folders_move_up(self):
        with tempfile.TemporaryDirectory() as d:
            rec = self._install(d, 48, 32)
            folder = os.path.join(d, rec["folder"])
            self.assertEqual(rec["files"], 3)
            self.assertEqual(rec["layout"], "game")
            self.assertTrue(os.path.isfile(os.path.join(folder, "Driver", "Kinopio.szs")))
            for name in ("st_kinopio_32\u00d732.tpl", "tt_kinopio_64\u00d764.tpl"):
                self.assertTrue(os.path.isfile(os.path.join(folder, name)), name)
            self.assertFalse(os.path.exists(os.path.join(folder, "Icon")))

    def test_extra_folder_file_with_a_taken_name_keeps_the_top_one(self):
        with tempfile.TemporaryDirectory() as d:
            rec = self._install(d, 49, 33)
            folder = os.path.join(d, rec["folder"])
            self.assertEqual(rec["files"], 2)
            self.assertFalse(os.path.exists(os.path.join(folder, "Icon")))
            with open(os.path.join(folder, "Kinopio.szs"), "rb") as f:
                self.assertEqual(f.read(), make_szs(["a.brres"]))

    def test_looks_only_file_in_the_race_folder_is_installed(self):
        with tempfile.TemporaryDirectory() as d:
            rec = self._install(d, 50, 34)
            self.assertEqual(rec["files"], 2)
            self.assertTrue(os.path.isfile(os.path.join(d, rec["folder"], "Race", "Race.szs")))

    def test_race_file_with_game_rules_inside_is_refused(self):
        with tempfile.TemporaryDirectory() as d:
            with self.assertRaises(patches.PatchError) as ctx:
                self._install(d, 51, 35)
            self.assertIn("tracks, game rules or code", str(ctx.exception))

    def test_tracks_in_the_race_folder_are_refused(self):
        with tempfile.TemporaryDirectory() as d:
            with self.assertRaises(patches.PatchError):
                self._install(d, 52, 36)

    def test_same_file_name_in_two_folders_installs_one_copy(self):
        with tempfile.TemporaryDirectory() as d:
            rec = self._install(d, 46, 30)
            folder = os.path.join(d, rec["folder"])
            self.assertEqual(rec["files"], 1)
            self.assertEqual([n for n in os.listdir(folder) if n.endswith(".szs")], ["Mario.szs"])

    def test_track_file_in_an_author_folder_is_still_refused(self):
        with tempfile.TemporaryDirectory() as d:
            with self.assertRaises(patches.PatchError) as ctx:
                self._install(d, 47, 31)
            self.assertIn("tracks, game rules or code", str(ctx.exception))

    def test_hidden_files_are_left_out(self):
        with tempfile.TemporaryDirectory() as d:
            rec = self._install(d, 41, 17)
            folder = os.path.join(d, rec["folder"])
            self.assertEqual(rec["files"], 1)
            self.assertFalse(os.path.exists(os.path.join(folder, ".git")))

    def test_side_by_side_message(self):
        with tempfile.TemporaryDirectory() as d:
            with self.assertRaises(patches.PatchError) as ctx:
                self._install(d, 42, 13)
            self.assertIn("several versions", str(ctx.exception))

    def test_unsafe_names(self):
        for bad in ("../x.szs", "/abs.szs", "C:/x.szs", "a/../../b.szs", "Driver/.."):
            self.assertTrue(patches._bad_member(bad), bad)

    def test_garbage_is_refused(self):
        with tempfile.TemporaryDirectory() as d:
            with self.assertRaises(patches.PatchError):
                self._install(d, 34, 14, "thing.bin")

    @unittest.skipUnless(SEVEN_OK, "needs bsdtar to build a .7z")
    def test_7z_install(self):
        with tempfile.TemporaryDirectory() as d:
            rec = self._install(d, 35, 20, "mod.7z")
            folder = os.path.join(d, rec["folder"])
            self.assertEqual(rec["files"], 2)
            self.assertEqual(rec["skipped_programs"], 1)
            self.assertTrue(os.path.isfile(os.path.join(folder, "Driver", "a.szs")))
            self.assertFalse(os.path.exists(os.path.join(folder, "Icons")))
            with self.assertRaises(patches.PatchError):
                self._install(d, 36, 21, "mod.7z")          # holds a track
            self.assertEqual(len(patches.list_installed(d)), 1)

    def test_archive_without_unpacker(self):
        saved = patches._find_unpacker
        patches._find_unpacker = lambda: None
        try:
            with tempfile.TemporaryDirectory() as d:
                with self.assertRaises(patches.PatchError) as ctx:
                    self._install(d, 37, 22, "mod.rar")
                self.assertIn("7-Zip", str(ctx.exception))
                self.assertEqual(os.listdir(d), [])
        finally:
            patches._find_unpacker = saved

    def test_damaged_rar(self):
        if not patches._find_unpacker():
            self.skipTest("no unpacker")
        with tempfile.TemporaryDirectory() as d:
            with self.assertRaises(patches.PatchError):
                self._install(d, 38, 22, "mod.rar")
            self.assertEqual(os.listdir(d), [])


if __name__ == "__main__":
    unittest.main()
