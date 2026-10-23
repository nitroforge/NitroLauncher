"""Offline regressions: python -m unittest discover -s tests -v"""
import ast
import hashlib
import os
from pathlib import Path
import shutil
import sys
import tempfile
import unittest
from unittest.mock import patch

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
import modpack_sync as sync

SAVE_PATHS = [
    'riivolution/save/NitroWFC/RMCP/rksys.dat',
    'riivolution/save/NitroWFC/RMCE/rksys.dat',
    'riivolution/riivolution/save/NitroWFC/RMCP/banner.bin',
    'RIIVOLUTION/SAVE/NitroWFC/RMCE/wc24dl.vff',
    'legacy/rksys.dat',
]

class SaveProtectionTests(unittest.TestCase):
    def test_plan_preserves_existing_and_never_installs_missing_saves(self):
        with tempfile.TemporaryDirectory() as d:
            for rel in SAVE_PATHS:
                p = Path(d, rel)
                p.parent.mkdir(parents=True, exist_ok=True)
                p.write_bytes(b'personal save')
            remote = {rel: ['wronghash', 999] for rel in SAVE_PATHS}
            state = {'dest': os.path.normcase(os.path.abspath(d)),
                     'files': {rel: [1, 1, 'old'] for rel in SAVE_PATHS}}
            plan = sync.make_plan(d, remote, state)
            self.assertEqual(plan['download'], [])
            self.assertEqual(sync.make_plan(d, {}, state)['delete'], [])
            self.assertEqual(sync.make_plan(d, {'new/rksys.dat': ['x', 3]}, {})['download'], [])
            for rel in SAVE_PATHS:
                self.assertEqual(Path(d, rel).read_bytes(), b'personal save')

    def test_stale_plan_cannot_write_or_delete_saves_but_updates_content(self):
        with tempfile.TemporaryDirectory() as d:
            rel = SAVE_PATHS[0]
            p = Path(d, rel)
            p.parent.mkdir(parents=True)
            p.write_bytes(b'personal save')
            plan = {'download': [(rel, 'x', 100)], 'delete': SAVE_PATHS, 'ok': {}}
            remote = {'files': {}, 'tree_sha': 'test'}
            with patch.object(sync, '_download_one', side_effect=AssertionError('save downloaded')):
                sync.run_sync('test/repo', 'main', d, remote, plan, {}, str(Path(d, 'state.json')))
            self.assertEqual(p.read_bytes(), b'personal save')
            data = b'updated track'
            sha = hashlib.sha1(b'blob %d\0' % len(data) + data).hexdigest()
            def download(repo, branch, dest, rel, sha, size, add_bytes, stop):
                target = Path(dest, rel)
                target.parent.mkdir(parents=True, exist_ok=True)
                target.write_bytes(data)
                return rel, [size, target.stat().st_mtime_ns, sha]
            plan = {'download': [('Tracks/1.szs', sha, len(data))], 'delete': [], 'ok': {}}
            with patch.object(sync, '_download_one', side_effect=download):
                sync.run_sync('test/repo', 'main', d, remote, plan, {}, str(Path(d, 'state.json')))
            self.assertEqual(Path(d, 'Tracks/1.szs').read_bytes(), data)

    def test_legacy_copy_excludes_saves_and_keeps_content(self):
        source = Path(__file__).resolve().parents[1] / 'main.py'
        tree = ast.parse(source.read_text())
        method = next(n for n in ast.walk(tree)
                      if isinstance(n, ast.FunctionDef) and n.name == '_link_or_copy_into')
        namespace = {'os': os, 'shutil': shutil}
        exec(compile(ast.fix_missing_locations(ast.Module(body=[method], type_ignores=[])),
                     str(source), 'exec'), namespace)
        with tempfile.TemporaryDirectory() as d:
            src, dst = Path(d, 'src'), Path(d, 'dst')
            for rel in SAVE_PATHS + ['Tracks/1.szs']:
                p = src / rel
                p.parent.mkdir(parents=True, exist_ok=True)
                p.write_bytes(b'content')
            namespace['_link_or_copy_into'](None, str(src), str(dst))
            self.assertTrue((dst / 'Tracks/1.szs').exists())
            for rel in SAVE_PATHS:
                self.assertFalse((dst / rel).exists(), rel)

if __name__ == '__main__':
    unittest.main()
