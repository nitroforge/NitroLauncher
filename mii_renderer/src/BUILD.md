# NitroForge Mii renderer - source

Source of `../nitroforge-mii.js` (WebGL Mii renderer for Wii Mii records, built on three.js).
Covered by the NitroForge Source-Available License (see `LICENSE.txt` in the repository root).

Build (Node.js):

    npm install three@0.160.0 esbuild
    npx esbuild entry.js --bundle --format=esm --minify --loader:.b64=text --legal-comments=none --outfile=../nitroforge-mii.js

It needs a Mii face resource file (supplied by the launcher: the bundled `RFL_Res.dat` of the official release, or the file taken from the user's own game) and the two body models next to the bundle at runtime.
