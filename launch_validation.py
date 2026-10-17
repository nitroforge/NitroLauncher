"""Validate/stage the explicitly selected Riivolution profile before Play."""
import json
import os
import shutil
import tempfile
import xml.etree.ElementTree as ET


def _check_profile(xml_path, content_root, builtin):
    root = ET.parse(xml_path).getroot()
    if root.tag != 'wiidisc' or root.find('options/section/option/choice/patch') is None:
        raise ValueError('The selected XML is not a Riivolution game patch profile.')
    if not builtin:
        return
    loader = root.find("patch/memory[@valuefile]")
    if loader is None or not loader.get('valuefile', '').lower().endswith('/loader.pul'):
        raise ValueError('The Nitro profile does not reference its Loader.pul.')
    rel = loader.get('valuefile').replace('\\', '/').lstrip('/')
    if '..' in rel.split('/') or '{$' in rel:
        raise ValueError('The Nitro loader path cannot be resolved.')
    binaries = os.path.dirname(os.path.join(content_root, *rel.split('/')))
    for name in ('Loader.pul', 'Code.pul', 'ConfigRT.pul'):
        path = os.path.join(binaries, name)
        if not os.path.isfile(path) or os.path.getsize(path) == 0:
            raise ValueError('Required Nitro file is missing or empty: ' + name)
        with open(path, 'rb') as f:
            if f.read(128).startswith(b'version https://git-lfs.github.com/spec/v1'):
                raise ValueError('Nitro file is a download pointer, not the game data: ' + name)
    tracks = os.path.join(os.path.dirname(binaries), 'Tracks')
    if not os.path.isdir(tracks) or not any(n.lower().endswith('.szs') for n in os.listdir(tracks)):
        raise ValueError('The Nitro Tracks folder is missing or empty.')


def prepare_launch(mod, iso_path, user_dir, presets_dir, write_preset, my_stuff_mode='on'):
    """Return only a validated preset path; errors must stop the launch."""
    if not mod:
        raise ValueError('No mod is selected.')
    xml_path = os.path.abspath(mod.get('xml_path') or '')
    if not mod.get('xml_path') or not os.path.isfile(xml_path):
        raise ValueError('The selected mod profile is missing.')
    source = mod.get('content_root') or ''
    if not source:
        # A manually installed profile may already be in Load/Riivolution/riivolution.
        if os.path.basename(os.path.dirname(xml_path)).lower() != 'riivolution':
            raise ValueError('The mod content folder is not configured.')
        source = os.path.dirname(os.path.dirname(xml_path))
    source = os.path.abspath(source)
    if not os.path.isdir(source):
        raise ValueError('The mod content folder is missing.')
    _check_profile(xml_path, source, mod.get('builtin', False))
    destination = os.path.join(user_dir, 'Load', 'Riivolution')
    os.makedirs(destination, exist_ok=True)
    same_root = os.path.samefile(source, destination)
    try:
        nested_destination = os.path.commonpath([source, os.path.abspath(destination)]) == source
    except ValueError:
        nested_destination = False  # Different Windows drives cannot be nested.
    if not same_root and nested_destination:
        raise ValueError('The mod content folder cannot contain Dolphin’s Riivolution destination.')
    def preserve_saves(path, names):
        return ['save'] if os.path.normcase(os.path.abspath(path)) == os.path.normcase(os.path.join(source, 'riivolution')) and 'save' in names else []
    if not same_root:
        for name in os.listdir(source):
            src = os.path.join(source, name)
            if os.path.isdir(src):
                # Merge existing assets too; never silently retain an old pack.
                shutil.copytree(src, os.path.join(destination, name), dirs_exist_ok=True, ignore=preserve_saves)
    staged_xml = os.path.join(destination, 'riivolution', os.path.basename(xml_path))
    os.makedirs(os.path.dirname(staged_xml), exist_ok=True)
    if not (os.path.exists(staged_xml) and os.path.samefile(xml_path, staged_xml)):
        shutil.copy2(xml_path, staged_xml)
    # Other installed XMLs, including per-game config XMLs, are never selected.
    _check_profile(staged_xml, destination, mod.get('builtin', False))
    os.makedirs(presets_dir, exist_ok=True)
    fd, temporary = tempfile.mkstemp(prefix='nitro-', suffix='.json', dir=presets_dir)
    os.close(fd)
    preset_path = os.path.join(presets_dir, 'selected-mod.json')
    try:
        write_preset(iso_path=iso_path, xml_path=staged_xml, riivolution_root=destination,
                     display_name='Mario Kart Wii — ' + str(mod.get('name') or 'Selected mod'),
                     out_path=temporary, my_stuff_mode=my_stuff_mode)
        with open(temporary, encoding='utf-8') as f:
            preset = json.load(f)
        patches = preset.get('riivolution', {}).get('patches', [])
        if preset.get('type') != 'dolphin-game-mod-descriptor' or preset.get('base-file') != iso_path or not patches or patches[0].get('xml') != staged_xml or not patches[0].get('options'):
            raise ValueError('The generated mod preset is invalid.')
        os.replace(temporary, preset_path)
    finally:
        if os.path.exists(temporary):
            os.remove(temporary)
    return preset_path
