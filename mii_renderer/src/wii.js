import {vecPlane} from './vec.js';
// NitroForge reader for the Wii face resource (RFL_Res.dat, big-endian, no magic).
// It exposes the same interface as the Wii U reader in ffra.js (texture(cat,i) / shape(cat,i)),
// so the renderer works with either file. Format worked out by our own analysis of a real file.
//
// Layout: u16 N(=18), u16 925, N section offsets. Each section: u16 count, u16 maxsize,
// i32[count] file offsets (relative to the end of the section header), i32 section size.
// Sections (1-based): 1 beard, 2 eye tex, 3 brow tex, 4 face shapes, 5 face-feature tex, 6 forehead,
// 7 glasses shape, 8 glasses tex, 9 hair, 10 mask shapes, 11 mole tex, 12 mouth tex, 13 mustache tex,
// 14 nose, 15 nose-line shape, 16 nose-line tex, 17 cap shapes, 18 cap tex.
export const WII_SECTION = {
  beardShape:1, eye:2, brow:3, faceline:4, facemakeTex:5, forehead:6, glassShape:7, glass:8, hair:9, mask:10,
  mole:11, mouth:12, mustache:13, nose:14, noselineShape:15, noseline:16, capShape:17, capTex:18
};

export const WII_FEATURE_FILE = [0,1,2,3,4,5,6,7,8,9,10,11]; // feature number = picture number
// per feature: a = strongest opacity, c = colour of line pictures, k = colour function for painted (makeup) pictures
export const WII_FEATURE_STYLE = {
  1: {a: 0.115, c: SR => [SR, 136, 68]},
  2: {a: 0.19, c: () => [250, 170, 150], alt: {a: 0.26, c: () => [64, 240, 210]}},
  3: {a: 0.24, c: () => [17, 0, 0]},
  7: {a: 0.245}, 8: {a: 0.146, c: SR => [SR*0.4, 0, 0]},
  9: {a: 0.21, c: () => [85, 102, 102]},
};
export const WII_SMOOTH = {level: 3, alpha: 0.75};
export const WII_TUNE = {eye: {}, line: {}, nose: {}, mouth: {}};
const T = k => Object.assign({}, WII_TUNE[k], (globalThis.__WT || {})[k]);
export function isWiiResource(u8){
  if (u8.length < 80) return false;
  const dv = new DataView(u8.buffer, u8.byteOffset, u8.byteLength);
  const n = dv.getUint16(0);
  if (n !== 18) return false;
  const first = dv.getInt32(4);
  return first >= 4 + 4 * n && first < u8.length && String.fromCharCode(...u8.subarray(0, 4)) !== 'FFRA';
}

// ---- GX texture decoding (only the formats this file uses) ----
const c5 = v => (v << 3) | (v >> 2), c4 = v => v * 17;
function decodeBTI(f){
  const dv = new DataView(f.buffer, f.byteOffset, f.byteLength);
  const fmt = dv.getUint8(0), w = dv.getUint16(2), h = dv.getUint16(4), io = dv.getUint32(0x1c);
  const out = new Uint8Array(w * h * 4); let p = io;
  const bw = fmt === 0 ? 8 : fmt === 2 ? 8 : 4, bh = fmt === 0 ? 8 : 4;
  const bx = Math.ceil(w / bw), by = Math.ceil(h / bh);
  const put = (x, y, r, g, b, a) => { if (x < w && y < h) { const o = (y * w + x) * 4; out[o] = r; out[o+1] = g; out[o+2] = b; out[o+3] = a; } };
  for (let yb = 0; yb < by; yb++) for (let xb = 0; xb < bx; xb++) {
    if (fmt === 0) { // I4
      for (let y = 0; y < 8; y++) for (let x = 0; x < 4; x++) { const b = f[p++]; const a = c4(b >> 4), c = c4(b & 15);
        put(xb*8+x*2, yb*8+y, a, a, a, a); put(xb*8+x*2+1, yb*8+y, c, c, c, c); }
    } else if (fmt === 2) { // IA4
      for (let y = 0; y < 4; y++) for (let x = 0; x < 8; x++) { const b = f[p++]; const i = c4(b & 15), a = c4(b >> 4); put(xb*8+x, yb*4+y, i, i, i, a); }
    } else if (fmt === 5) { // RGB5A3
      for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) { const v = (f[p] << 8) | f[p+1]; p += 2;
        if (v & 0x8000) put(xb*4+x, yb*4+y, c5((v>>10)&31), c5((v>>5)&31), c5(v&31), 255);
        else put(xb*4+x, yb*4+y, c4((v>>8)&15), c4((v>>4)&15), c4(v&15), Math.round(((v>>12)&7) * 255 / 7)); }
    } else throw new Error('Unsupported Wii texture format ' + fmt);
  }
  return {w, h, rgba: out, fmt};
}


// ---- smooth upscaling (the Wii pictures are 4x smaller than the Wii U ones) ----
function cr(t){ // Catmull-Rom weights for 4 taps
  const t2=t*t,t3=t2*t; return [(-t3+2*t2-t)/2,(3*t3-5*t2+2)/2,(-3*t3+4*t2+t)/2,(t3-t2)/2];
}
function blurPlane(pl, W, H, sg){
  if (!(sg > 0.2)) return pl; const r = Math.ceil(sg*3), kern = []; let ks = 0;
  for (let i = -r; i <= r; i++) { const v = Math.exp(-i*i/(2*sg*sg)); kern.push(v); ks += v; }
  const tmp = new Float32Array(W*H), out = new Float32Array(W*H);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { let v = 0; for (let i = -r; i <= r; i++) { const xx = Math.min(W-1, Math.max(0, x+i)); v += pl[y*W+xx]*kern[i+r]; } tmp[y*W+x] = v/ks; }
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { let v = 0; for (let i = -r; i <= r; i++) { const yy = Math.min(H-1, Math.max(0, y+i)); v += tmp[yy*W+x]*kern[i+r]; } out[y*W+x] = v/ks; }
  return out;
}

// edge-directed smoothing: average along the edge direction only, so stair-steps and ripples from the small source
// pictures disappear while line thickness and sharp sides are kept
function orientPlane(pl, W, H, sg, iters, cpow){
  if (!(sg > 0.3)) return pl; const R = Math.ceil(sg * 2.2), kern = []; let ks = 0; cpow = cpow ?? 2;
  for (let i = -R; i <= R; i++) { const v = Math.exp(-i*i/(2*sg*sg)); kern.push(v); ks += v; }
  const at = (a, x, y) => { x = x < 0 ? 0 : x > W-1 ? W-1 : x; y = y < 0 ? 0 : y > H-1 ? H-1 : y;
    const x0 = Math.floor(x), y0 = Math.floor(y), x1 = Math.min(W-1, x0+1), y1 = Math.min(H-1, y0+1), fx = x-x0, fy = y-y0;
    return (a[y0*W+x0]*(1-fx) + a[y0*W+x1]*fx)*(1-fy) + (a[y1*W+x0]*(1-fx) + a[y1*W+x1]*fx)*fy; };
  for (let it = 0; it < iters; it++) {
    const g = blurPlane(pl, W, H, Math.max(1.0, sg * 0.35)); const n = W*H, out = new Float32Array(n);
    const jxx = new Float32Array(n), jyy = new Float32Array(n), jxy = new Float32Array(n);
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const gx = g[y*W+Math.min(W-1,x+1)] - g[y*W+Math.max(0,x-1)], gy = g[Math.min(H-1,y+1)*W+x] - g[Math.max(0,y-1)*W+x];
      const q = y*W+x; jxx[q] = gx*gx; jyy[q] = gy*gy; jxy[q] = gx*gy; }
    const ss = Math.max(1.5, sg * 0.8), Jxx = blurPlane(jxx, W, H, ss), Jyy = blurPlane(jyy, W, H, ss), Jxy = blurPlane(jxy, W, H, ss);
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { const q = y*W+x;
      const tr = Jxx[q] + Jyy[q]; if (tr < 1e-5) { out[q] = pl[q]; continue; }
      const dx = Jxx[q] - Jyy[q], d2 = Math.hypot(dx, 2*Jxy[q]), coh = d2 / tr;
      const th = 0.5 * Math.atan2(2*Jxy[q], dx); // dominant gradient direction
      const tx = -Math.sin(th), ty = Math.cos(th); let v = 0;
      for (let i = -R; i <= R; i++) v += at(pl, x + tx*i, y + ty*i) * kern[i+R];
      const wgt = Math.pow(Math.min(1, coh), cpow); out[q] = pl[q] + wgt * (v/ks - pl[q]); }
    pl = out;
  }
  return pl;
}

// total-variation super-resolution: find a sharp picture whose k x k block averages equal the small source picture and whose
// outlines are as short as possible. Straight edges stay straight, corners stay sharp, curves stay smooth.
// Only the blocks next to an edge are worked on (flat areas are already exact), which keeps it fast.
function tvSR(f, w, h, u0, k, W, H, iters, lam, inner){
  const n = W*H, kk = k*k; const u = Float32Array.from(u0);
  const act = new Uint8Array(w*h);
  for (let by = 0; by < h; by++) for (let bx = 0; bx < w; bx++) { let lo = 9, hi = -9;
    for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) { const yy = Math.min(h-1, Math.max(0, by+dy)), xx = Math.min(w-1, Math.max(0, bx+dx)); const v = f[yy*w+xx]; if (v < lo) lo = v; if (v > hi) hi = v; }
    act[by*w+bx] = hi - lo > 0.01 ? 1 : 0; }
  const blocks = []; for (let q = 0; q < w*h; q++) if (act[q]) blocks.push(q);
  const pix = []; // up-sampled pixels of the active blocks
  for (const q of blocks) { const by = (q / w) | 0, bx = q % w; for (let y = 0; y < k; y++) for (let x = 0; x < k; x++) pix.push((by*k+y)*W + bx*k + x); }
  // flat blocks take the source value exactly
  for (let by = 0; by < h; by++) for (let bx = 0; bx < w; bx++) if (!act[by*w+bx]) { const v = f[by*w+bx]; for (let y = 0; y < k; y++) for (let x = 0; x < k; x++) u[(by*k+y)*W + bx*k + x] = v; }
  const P = Int32Array.from(pix), m = P.length; if (!m) return u;
  const px = new Float32Array(n), py = new Float32Array(n), dv = new Float32Array(n), vv = new Float32Array(n), gx = new Float32Array(n), gy = new Float32Array(n);
  const sum = new Float32Array(w*h);
  for (let it = 0; it < iters; it++) {
    for (const q of blocks) sum[q] = 0;
    for (let i = 0; i < m; i++) { const p = P[i], y = (p / W) | 0, x = p - y*W; sum[((y / k) | 0)*w + ((x / k) | 0)] += u[p]; }
    for (let i = 0; i < m; i++) { const p = P[i], y = (p / W) | 0, x = p - y*W, q = ((y / k) | 0)*w + ((x / k) | 0); const v = u[p] + (f[q] - sum[q] / kk); u[p] = v < 0 ? 0 : v > 1 ? 1 : v; vv[p] = u[p]; px[p] = 0; py[p] = 0; }
    for (let r = 0; r < inner; r++) {
      for (let i = 0; i < m; i++) { const p = P[i], y = (p / W) | 0, x = p - y*W;
        dv[p] = (x < W-1 ? px[p] : 0) - (x > 0 ? px[p-1] : 0) + (y < H-1 ? py[p] : 0) - (y > 0 ? py[p-W] : 0); }
      for (let i = 0; i < m; i++) { const p = P[i], y = (p / W) | 0, x = p - y*W, a0 = dv[p] - vv[p] / lam;
        gx[p] = x < W-1 ? (dv[p+1] - vv[p+1] / lam) - a0 : 0; gy[p] = y < H-1 ? (dv[p+W] - vv[p+W] / lam) - a0 : 0; }
      for (let i = 0; i < m; i++) { const p = P[i], nm = 1 + 0.125 * Math.hypot(gx[p], gy[p]); px[p] = (px[p] + 0.125 * gx[p]) / nm; py[p] = (py[p] + 0.125 * gy[p]) / nm; }
    }
    for (let i = 0; i < m; i++) { const p = P[i], y = (p / W) | 0, x = p - y*W;
      const d = (x < W-1 ? px[p] : 0) - (x > 0 ? px[p-1] : 0) + (y < H-1 ? py[p] : 0) - (y > 0 ? py[p-W] : 0); const v = vv[p] - lam * d; u[p] = v < 0 ? 0 : v > 1 ? 1 : v; }
  }
  return u;
}

function upscale(src, w, h, k, sh){
  if (sh) { const sc = k / 4; sh = {...sh}; if (sh.sigma) sh.sigma *= sc; if (sh.ot) sh.ot *= sc; if (sh.us) sh.us = {r: sh.us.r * sc, amt: sh.us.amt}; if (sh.tv) sh.tv = {...sh.tv, lam: sh.tv.lam * sc}; } // parameters are written for a 4x enlargement
  // premultiplied float planes, separable bicubic, then optional edge sharpening of mask-like channels
  const W = w*k, H = h*k, n = w*h; let amaxSrc = 0; for (let i = 0; i < n; i++) amaxSrc = Math.max(amaxSrc, src[i*4+3]/255); amaxSrc = amaxSrc || 1;
  const P = [new Float32Array(n), new Float32Array(n), new Float32Array(n), new Float32Array(n)];
  for (let i = 0; i < n; i++) { const a = src[i*4+3]/255; P[0][i] = src[i*4]/255*a; P[1][i] = src[i*4+1]/255*a; P[2][i] = src[i*4+2]/255*a; P[3][i] = a; }
  const wx = [], wy = [];
  for (let X = 0; X < W; X++) { const f = (X+0.5)/k-0.5, x0 = Math.floor(f); wx.push([x0, cr(f-x0)]); }
  for (let Y = 0; Y < H; Y++) { const f = (Y+0.5)/k-0.5, y0 = Math.floor(f); wy.push([y0, cr(f-y0)]); }
  const cl = (v, m) => v < 0 ? 0 : v >= m ? m-1 : v;
  const out = new Uint8Array(W*H*4); const tmp = new Float32Array(W*h);
  const planes = [];
  const same = (A, B) => { for (let i = 0; i < A.length; i++) if (A[i] !== B[i]) return false; return true; };
  for (let c = 0; c < 4; c++) {
    let dup = -1; for (let c2 = 0; c2 < c; c2++) if (same(P[c], P[c2])) { dup = c2; break; }
    if (dup >= 0) { planes.push(planes[dup]); continue; }
    for (let y = 0; y < h; y++) for (let X = 0; X < W; X++) { const [x0, wt] = wx[X]; let v = 0;
      for (let j = 0; j < 4; j++) v += P[c][y*w+cl(x0-1+j, w)] * wt[j]; tmp[y*W+X] = v; }
    const pl = new Float32Array(W*H);
    for (let Y = 0; Y < H; Y++) { const [y0, wt] = wy[Y]; for (let X = 0; X < W; X++) { let v = 0;
      for (let j = 0; j < 4; j++) v += tmp[cl(y0-1+j, h)*W+X] * wt[j]; pl[Y*W+X] = v; } }
    { let q = pl; if (sh && sh.vec) { planes.push(q); continue; } if (sh && sh.tv) q = tvSR(P[c], w, h, q, k, W, H, sh.tv.it, sh.tv.lam, sh.tv.inner || 3); if (sh && sh.us) { const bl = blurPlane(q, W, H, sh.us.r), o2 = new Float32Array(W*H); for (let z = 0; z < W*H; z++) o2[z] = q[z] + sh.us.amt * (q[z] - bl[z]); q = o2; } if (sh && sh.ot) q = orientPlane(q, W, H, sh.ot, sh.oit || 2, sh.cp); planes.push(sh && sh.sigma ? blurPlane(q, W, H, sh.sigma) : q); }
  }
  if (sh && sh.vec) { // vector path: separate the soft planes, redraw each as a clean shape
    const N2 = W*H, fp = [new Float32Array(N2), new Float32Array(N2), new Float32Array(N2), new Float32Array(N2)];
    for (let i = 0; i < N2; i++) { const a = Math.max(0, Math.min(1, planes[3][i])); fp[3][i] = a / amaxSrc; for (let c = 0; c < 3; c++) fp[c][i] = Math.max(0, Math.min(1, planes[c][i] / amaxSrc)); }
    const VP = Object.assign({}, sh.vp, (globalThis.__WT || {}).vp); const cache = [];
    const rp = fp.map((q, c) => { for (let c2 = 0; c2 < c; c2++) { let eq = true; for (let i = 0; i < N2; i++) if (q[i] !== fp[c2][i]) { eq = false; break; } if (eq) return cache[c2]; } const th = c === 3 ? 0.5 : (c === 2 && sh.lob ? sh.lob : (sh.lo || 0.5)); const vm = (globalThis.__WT || {}).vm ?? 15; if (!((vm >> c) & 1)) { let o = new Float32Array(N2); const lo = sh.lo || 0.5, cc = sh.c || 0.2; for (let i = 0; i < N2; i++) { const t = Math.max(0, Math.min(1, (q[i] - (lo - cc)) / (2 * cc))); o[i] = t*t*(3-2*t); } cache[c] = o; return o; } const o = vecPlane(q, W, H, th, k, VP); cache[c] = o; return o; });
    for (let c = 0; c < 4; c++) if (!cache[c]) cache[c] = rp[c];
    for (let i = 0; i < N2; i++) { out[i*4] = rp[0][i]*255+.5; out[i*4+1] = rp[1][i]*255+.5; out[i*4+2] = rp[2][i]*255+.5; out[i*4+3] = rp[3][i]*amaxSrc*255+.5; }
    return {w: W, h: H, rgba: out};
  }
  const sm = (v, lo, hi) => { const t = Math.max(0, Math.min(1, (v-lo)/(hi-lo))); return t*t*(3-2*t); };
  for (let i = 0; i < W*H; i++) {
    let a = Math.max(0, Math.min(1, planes[3][i]));
    let r = planes[0][i], g = planes[1][i], b = planes[2][i];
    if (a > 1e-4) { r = r/a; g = g/a; b = b/a; } else { r = g = b = 0; }
    r = Math.max(0, Math.min(1, r)); g = Math.max(0, Math.min(1, g)); b = Math.max(0, Math.min(1, b));
    if (sh && sh.a) a = amaxSrc*sm(a/amaxSrc, sh.lo-sh.a, sh.lo+sh.a);
    if (sh && sh.c) { const l = sh.lo, lb = sh.lob ?? l; r = sm(r, l-sh.c, l+sh.c); g = sm(g, l-sh.c, l+sh.c); b = sm(b, lb-sh.c, lb+sh.c); }
    out[i*4] = r*255+.5; out[i*4+1] = g*255+.5; out[i*4+2] = b*255+.5; out[i*4+3] = a*255+.5;
  }
  return {w: W, h: H, rgba: out};
}

// ---- model decoding ----
function packN(x, y, z){
  const l = Math.hypot(x, y, z) || 1; const q = v => Math.round(Math.max(-1, Math.min(1, v / l)) * 511) & 1023;
  return ((q(z) << 20) | (q(y) << 10) | q(x)) >>> 0;
}
function parseModel(f, withUV, withFloats){
  const dv = new DataView(f.buffer, f.byteOffset, f.byteLength);
  let p = 4; const fl = [];
  if (withFloats) { for (let k = 0; k < 9; k++) fl.push(dv.getFloat32(4 + k * 4)); p = 40; }
  const nV = dv.getUint16(p); p += 2; const V = new Float32Array(nV * 3);
  for (let i = 0; i < nV * 3; i++) V[i] = dv.getInt16(p + i * 2) / 256; p += nV * 6;
  const nN = dv.getUint16(p); p += 2; const N = new Float32Array(nN * 3);
  for (let i = 0; i < nN * 3; i++) N[i] = dv.getInt16(p + i * 2) / (256 * 64); p += nN * 6;
  let UV = null;
  if (withUV) { const nU = dv.getUint16(p); p += 2; UV = new Float32Array(nU * 2);
    for (let i = 0; i < nU * 2; i++) UV[i] = dv.getInt16(p + i * 2) / 8192; p += nU * 4; }
  const nc = f[p++]; const W = withUV ? 3 : 2; const tris = [];
  for (let c = 0; c < nc; c++) {
    const n = f[p], t = f[p+1]; p += 2; const d = []; for (let i = 0; i < n; i++) { d.push(Array.from(f.subarray(p, p + W))); p += W; }
    if (t === 0x90) for (let i = 0; i + 2 < n; i += 3) tris.push([d[i], d[i+1], d[i+2]]);
    else if (t === 0x98) for (let i = 0; i + 2 < n; i++) tris.push(i % 2 === 0 ? [d[i], d[i+1], d[i+2]] : [d[i+1], d[i], d[i+2]]);
    else if (t === 0xA0) for (let i = 1; i + 1 < n; i++) tris.push([d[0], d[i], d[i+1]]);
    else if (t === 0x80) for (let i = 0; i + 3 < n; i += 4) { tris.push([d[i], d[i+1], d[i+2]]); tris.push([d[i], d[i+2], d[i+3]]); }
  }
  if (p !== f.length) throw new Error('model size mismatch '+p+' vs '+f.length);
  return {V, N, UV, tris, fl};
}
// expand to one vertex per unique (position, normal, uv) triple
function hairCol(nv){ const c = new Uint8Array(nv*4); for (let i = 0; i < nv; i++) { c[i*4] = 0; c[i*4+1] = 255; c[i*4+2] = 0; c[i*4+3] = 255; } return c; }
function toShape(m, withUV, withFloats){
  const map = new Map(), pos = [], nrm = [], uv = [], idx = [];
  for (const t of m.tris) for (const v of [t[0], t[2], t[1]]) { // swap to counter-clockwise order
    const key = v.join(','); let k = map.get(key);
    if (k === undefined) { k = pos.length / 4; map.set(key, k);
      pos.push(m.V[v[0]*3], m.V[v[0]*3+1], m.V[v[0]*3+2], 1);
      const nx = m.N[v[1]*3], ny = m.N[v[1]*3+1], nz = m.N[v[1]*3+2]; const u = packN(nx, ny, nz);
      nrm.push((u >>> 24) & 255, (u >>> 16) & 255, (u >>> 8) & 255, u & 255);
      if (withUV) { const ui = v[2]; uv.push(m.UV[ui*2], m.UV[ui*2+1]); } }
    idx.push(k);
  }
  const nv = pos.length / 4;
  // bounds: min/max of positions, then the three attachment points (hair, nose, beard)
  let mn = [1e9,1e9,1e9], mx = [-1e9,-1e9,-1e9];
  for (let i = 0; i < nv; i++) for (let a = 0; a < 3; a++) { mn[a] = Math.min(mn[a], pos[i*4+a]); mx[a] = Math.max(mx[a], pos[i*4+a]); }
  const extra = [...mn, ...mx];
  if (withFloats) { const f = m.fl; extra.push(f[6], f[7], f[8], f[0], f[1], f[2], f[3], f[4], f[5]); } // hair, nose, beard
  return {nv, pos: new Float32Array(pos), uv: withUV ? new Float32Array(uv) : null, nrm: new Uint8Array(nrm), col: hairCol(nv), tan: null,
    idx: new Uint16Array(idx), header: [], bounds: extra.slice(0, 6), extra};
}


// ---- smoothing: 1-to-4 subdivision; edge midpoints are pulled onto the surface implied by the vertex normals (Phong tessellation).
// Edges where the neighbouring triangles disagree about the normals (hard creases) stay straight, so nothing tears open.
function unpackN(u8, i){ const u = ((u8[i*4] << 24) | (u8[i*4+1] << 16) | (u8[i*4+2] << 8) | u8[i*4+3]) >>> 0;
  const f = v => { v &= 1023; if (v >= 512) v -= 1024; return Math.max(-1, v/511); }; return [f(u), f(u >>> 10), f(u >>> 20)]; }
function subdivide(s, levels, alpha){
  for (let L = 0; L < levels; L++) {
    const nv = s.nv; const pos = Array.from(s.pos), uv = s.uv ? Array.from(s.uv) : null; const nrm = [], col = Array.from(s.col);
    const N = []; for (let i = 0; i < nv; i++) N.push(unpackN(s.nrm, i));
    const pk = i => pos[i*4].toFixed(3) + ',' + pos[i*4+1].toFixed(3) + ',' + pos[i*4+2].toFixed(3);
    // crease detection: key = ordered position pair -> list of [normal at a, normal at b] seen
    const ek = (a, b) => { const A = pk(a), B = pk(b); return A < B ? A + '|' + B : B + '|' + A; };
    const seen = new Map(); const idx = s.idx;
    const rec = (a, b) => { const k = ek(a, b); const flip = pk(a) > pk(b); const na = flip ? N[b] : N[a], nb = flip ? N[a] : N[b];
      const e = seen.get(k); if (!e) seen.set(k, {na, nb, ok: true}); else { const d = (x, y) => x[0]*y[0] + x[1]*y[1] + x[2]*y[2]; if (d(e.na, na) < 0.985 || d(e.nb, nb) < 0.985) e.ok = false; } };
    for (let t = 0; t < idx.length; t += 3) { rec(idx[t], idx[t+1]); rec(idx[t+1], idx[t+2]); rec(idx[t+2], idx[t]); }
    const mids = new Map(); const out = [];
    const mid = (a, b) => { const key = a < b ? a + '_' + b : b + '_' + a; let m = mids.get(key); if (m !== undefined) return m;
      m = pos.length / 4; mids.set(key, m);
      const pa = [pos[a*4], pos[a*4+1], pos[a*4+2]], pb = [pos[b*4], pos[b*4+1], pos[b*4+2]]; const md = [(pa[0]+pb[0])/2, (pa[1]+pb[1])/2, (pa[2]+pb[2])/2];
      let q = md; const e = seen.get(ek(a, b));
      if (e && e.ok) { const na = N[a], nb = N[b]; const proj = (p, n) => { const d = (md[0]-p[0])*n[0] + (md[1]-p[1])*n[1] + (md[2]-p[2])*n[2]; return [md[0]-d*n[0], md[1]-d*n[1], md[2]-d*n[2]]; };
        const qa = proj(pa, na), qb = proj(pb, nb); q = [0,1,2].map(k => md[k] + alpha*((qa[k]+qb[k])/2 - md[k])); }
      pos.push(q[0], q[1], q[2], 1);
      let nn = [N[a][0]+N[b][0], N[a][1]+N[b][1], N[a][2]+N[b][2]];
      if (e && e.ok && (globalThis.__WT || {}).pn === 1) { // curvature-aware normal at the new vertex (quadratic normal interpolation)
        const d = [pb[0]-pa[0], pb[1]-pa[1], pb[2]-pa[2]]; const dd = d[0]*d[0] + d[1]*d[1] + d[2]*d[2];
        if (dd > 1e-9) { const f = 2 * (d[0]*(N[b][0]-N[a][0]) + d[1]*(N[b][1]-N[a][1]) + d[2]*(N[b][2]-N[a][2])) / dd; nn = [nn[0]-f*d[0], nn[1]-f*d[1], nn[2]-f*d[2]]; } }
      const l = Math.hypot(nn[0], nn[1], nn[2]) || 1; N.push([nn[0]/l, nn[1]/l, nn[2]/l]);
      if (uv) uv.push((uv[a*2]+uv[b*2])/2, (uv[a*2+1]+uv[b*2+1])/2);
      for (let c = 0; c < 4; c++) col.push(col[a*4+c]);
      return m; };
    for (let t = 0; t < idx.length; t += 3) { const a = idx[t], b = idx[t+1], c = idx[t+2]; const ab = mid(a, b), bc = mid(b, c), ca = mid(c, a);
      out.push(a, ab, ca, ab, b, bc, ca, bc, c, ab, bc, ca); }
    if (pos.length / 4 > 65000) return s; // keep 16-bit indices valid: stop at the previous level
    const nn = pos.length / 4; const nr = new Uint8Array(nn*4);
    for (let i = 0; i < nn; i++) { const u = packN(N[i][0], N[i][1], N[i][2]); nr[i*4] = (u >>> 24) & 255; nr[i*4+1] = (u >>> 16) & 255; nr[i*4+2] = (u >>> 8) & 255; nr[i*4+3] = u & 255; }
    s = {...s, nv: nn, pos: new Float32Array(pos), uv: uv ? new Float32Array(uv) : null, nrm: nr, col: new Uint8Array(col), idx: new Uint16Array(out)};
  }
  return s;
}


// smooth the shading normals: Laplacian smoothing over the surface, but never across hard creases
function smoothNormals(s, iters, lam){
  const nv = s.nv, idx = s.idx; const N = []; for (let i = 0; i < nv; i++) N.push(unpackN(s.nrm, i));
  const gid = new Int32Array(nv), keyMap = new Map(); const members = [];
  for (let i = 0; i < nv; i++) { const k = s.pos[i*4].toFixed(3) + ',' + s.pos[i*4+1].toFixed(3) + ',' + s.pos[i*4+2].toFixed(3);
    let g = keyMap.get(k); if (g === undefined) { g = members.length; keyMap.set(k, g); members.push([]); } gid[i] = g; members[g].push(i); }
  const G = members.length, nbr = Array.from({length: G}, () => new Set()), crease = new Uint8Array(G), seen = new Map();
  const dot = (x, y) => x[0]*y[0] + x[1]*y[1] + x[2]*y[2];
  const rec = (a, b) => { const ga = gid[a], gb = gid[b]; if (ga === gb) return; nbr[ga].add(gb); nbr[gb].add(ga);
    const lo = ga < gb, k = lo ? ga + '_' + gb : gb + '_' + ga; const na = lo ? N[a] : N[b], nb = lo ? N[b] : N[a];
    const e = seen.get(k); if (!e) seen.set(k, {na, nb, ga, gb}); else if (dot(e.na, na) < 0.985 || dot(e.nb, nb) < 0.985) { crease[ga] = 1; crease[gb] = 1; } };
  for (let t = 0; t < idx.length; t += 3) { rec(idx[t], idx[t+1]); rec(idx[t+1], idx[t+2]); rec(idx[t+2], idx[t]); }
  let cur = new Array(G); for (let g = 0; g < G; g++) cur[g] = N[members[g][0]].slice();
  const nb = Array.from(nbr, set => Array.from(set));
  for (let it = 0; it < iters; it++) { const nxt = new Array(G);
    for (let g = 0; g < G; g++) { if (crease[g] || !nb[g].length) { nxt[g] = cur[g]; continue; }
      let x = 0, y = 0, z = 0; for (const h of nb[g]) { x += cur[h][0]; y += cur[h][1]; z += cur[h][2]; } const c = nb[g].length;
      x = cur[g][0] + lam * x / c; y = cur[g][1] + lam * y / c; z = cur[g][2] + lam * z / c; const l = Math.hypot(x, y, z) || 1; nxt[g] = [x/l, y/l, z/l]; }
    cur = nxt; }
  const nr = new Uint8Array(nv*4);
  for (let i = 0; i < nv; i++) { const n = crease[gid[i]] ? N[i] : cur[gid[i]]; const u = packN(n[0], n[1], n[2]); nr[i*4] = (u >>> 24) & 255; nr[i*4+1] = (u >>> 16) & 255; nr[i*4+2] = (u >>> 8) & 255; nr[i*4+3] = u & 255; }
  return {...s, nrm: nr};
}

// even out the outline of the hair: Taubin smoothing of the positions (no shrinking). Hard creases stay put,
// open borders (hairline, bottom edge) are smoothed along themselves only.
function smoothPositions(s, iters, lam, mu){
  const nv = s.nv, idx = s.idx; const N = []; for (let i = 0; i < nv; i++) N.push(unpackN(s.nrm, i));
  const gid = new Int32Array(nv), keyMap = new Map(), members = [];
  for (let i = 0; i < nv; i++) { const k = s.pos[i*4].toFixed(3) + ',' + s.pos[i*4+1].toFixed(3) + ',' + s.pos[i*4+2].toFixed(3);
    let g = keyMap.get(k); if (g === undefined) { g = members.length; keyMap.set(k, g); members.push([]); } gid[i] = g; members[g].push(i); }
  const G = members.length, nbr = Array.from({length: G}, () => new Set()), bnbr = Array.from({length: G}, () => new Set());
  const crease = new Uint8Array(G), edges = new Map(), dot = (x, y) => x[0]*y[0] + x[1]*y[1] + x[2]*y[2];
  const rec = (a, b) => { const ga = gid[a], gb = gid[b]; if (ga === gb) return; nbr[ga].add(gb); nbr[gb].add(ga);
    const lo = ga < gb, k = lo ? ga + '_' + gb : gb + '_' + ga; const na = lo ? N[a] : N[b], nb = lo ? N[b] : N[a];
    const e = edges.get(k); if (!e) edges.set(k, {na, nb, ga, gb, c: 1}); else { e.c++; if (dot(e.na, na) < 0.985 || dot(e.nb, nb) < 0.985) { crease[ga] = 1; crease[gb] = 1; } } };
  for (let t = 0; t < idx.length; t += 3) { rec(idx[t], idx[t+1]); rec(idx[t+1], idx[t+2]); rec(idx[t+2], idx[t]); }
  const border = new Uint8Array(G);
  for (const e of edges.values()) if (e.c === 1) { border[e.ga] = 1; border[e.gb] = 1; bnbr[e.ga].add(e.gb); bnbr[e.gb].add(e.ga); }
  let P = members.map(m => [s.pos[m[0]*4], s.pos[m[0]*4+1], s.pos[m[0]*4+2]]);
  const nb = Array.from(nbr, x => Array.from(x)), bb = Array.from(bnbr, x => Array.from(x));
  const step = f => { const out = P.map(p => p.slice());
    for (let g = 0; g < G; g++) { if (crease[g]) continue; const L = border[g] ? bb[g] : nb[g]; if (L.length < (border[g] ? 2 : 1)) continue;
      if (border[g] && L.length > 2) continue; // junction of borders: keep
      let x = 0, y = 0, z = 0; for (const h of L) { x += P[h][0]; y += P[h][1]; z += P[h][2]; } const c = L.length;
      out[g] = [P[g][0] + f * (x/c - P[g][0]), P[g][1] + f * (y/c - P[g][1]), P[g][2] + f * (z/c - P[g][2])]; }
    P = out; };
  for (let it = 0; it < iters; it++) { step(lam); step(mu); }
  const pos = new Float32Array(s.pos);
  for (let g = 0; g < G; g++) for (const i of members[g]) { pos[i*4] = P[g][0]; pos[i*4+1] = P[g][1]; pos[i*4+2] = P[g][2]; }
  return {...s, pos};
}

export class WiiRes {
  constructor(buf){
    this.u8 = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
    this.dv = new DataView(this.u8.buffer, this.u8.byteOffset, this.u8.byteLength);
    if (!isWiiResource(this.u8)) throw new Error('Not a Wii face resource file');
    this.isWii = true; this._s = new Map();
  }
  section(si){
    if (this._s.has(si)) return this._s.get(si);
    const n = this.dv.getUint16(0), o = this.dv.getInt32(4 + 4 * (si - 1));
    const cnt = this.dv.getUint16(o); const base = o + 4 + 4 * cnt + 4; const sz = this.dv.getInt32(o + 4 + 4 * cnt);
    const files = [];
    for (let i = 0; i < cnt; i++) { const a = base + this.dv.getInt32(o + 4 + 4 * i), b = base + (i + 1 < cnt ? this.dv.getInt32(o + 4 + 4 * (i + 1)) : sz); files.push(this.u8.subarray(a, b)); }
    this._s.set(si, files); return files;
  }
  async texture(cat, i){
    const map = { eye:['eye',0], brow:['brow',0], mouth:['mouth',0], mole:['mole',1], mustache:['mustache',1], noseline:['noseline',0], glass:['glass',1], cap:['capTex',0] };
    const m = map[cat]; if (!m) return null;
    const key = cat + ':' + i + (this.hq ? ':h' : ''); if (this._t && this._t.has(key)) return this._t.get(key);
    const files = this.section(WII_SECTION[m[0]]); const f = files[i + m[1]];
    let res = null;
    if (f && f.length >= 0x20) res = this._tex(cat, decodeBTI(f), i);
    if (!res && cat !== 'cap') { console.warn('Wii resource: missing picture', cat, i); res = {w: 1, h: 1, mips: 1, fmt: 2, data: new Uint8Array(4), wii: true}; }
    (this._t || (this._t = new Map())).set(key, res); return res;
  }
  _tex(cat, t, i){
    let {w, h, rgba} = t; let sh = null, k = 4;
    const n = w*h;
    if (cat === 'eye' && !((globalThis.__WT || {}).noiris)) { // close thin gaps inside the iris disc (squint-eye data leaves white slivers)
      const R = (globalThis.__WT || {}).irisR ?? 2; const B = new Float32Array(n), D = new Float32Array(n), E = new Float32Array(n);
      for (let p = 0; p < n; p++) B[p] = rgba[p*4+2] / 255;
      const pass = (src, dst, mx) => { for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) { let v = mx ? 0 : 1; for (let dy = -R; dy <= R; dy++) for (let dx = -R; dx <= R; dx++) { const xx = x+dx, yy = y+dy; if (xx < 0 || yy < 0 || xx >= w || yy >= h) continue; const q = src[yy*w+xx]; v = mx ? Math.max(v, q) : Math.min(v, q); } dst[y*w+x] = v; } };
      pass(B, D, true); pass(D, E, false);
      for (let p = 0; p < n; p++) { const b = Math.max(B[p], E[p]); if (b > B[p] + 0.02 && rgba[p*4] < 90 && rgba[p*4+1] > 40) { rgba[p*4+2] = b * 255; rgba[p*4+1] = Math.round(rgba[p*4+1] * (1 - b)); } }
    }
    if (cat === 'eye') { sh = Object.assign({a: 0.1, c: 0.3, lo: 0.5, sigma: 0.4, ot: 5, oit: 0, us: {r: 2.5, amt: 0.8}, tv: {it: 14, lam: 4}}, T('eye')); k = this.hq ? 8 : 4; }
    else if (cat === 'mouth') { sh = Object.assign({a: 0.08, c: 0.12, lo: 0.53, sigma: 0.5, ot: 5, oit: 1, us: {r: 2.5, amt: 0.8}, tv: {it: 14, lam: 4}}, T('mouth')); k = this.hq ? 8 : 4; }
    else if (cat === 'brow' || cat === 'mole' || cat === 'mustache') { sh = Object.assign({c: 0.3, lo: 0.5, sigma: 0.4, ot: 5, oit: 0, us: {r: 2.5, amt: 0.8}, tv: {it: 14, lam: 4}}, T('line')); k = this.hq ? 8 : 4; }
    else if (cat === 'noseline') { sh = Object.assign({c: 0.3, lo: 0.5, sigma: 0.4, ot: 5, oit: 0, us: {r: 2.5, amt: 0.8}, tv: {it: 14, lam: 3}}, T('nose')); k = 8; }
    else if (cat === 'cap') { k = (w === 32) ? 4 : 1; }
    else if (cat === 'glass') {
      // Wii: intensity+alpha. Wii U: R = frame/lens coverage. Types 6..9 have a dark frame and a light lens.
      const lens = (i + 1) >= 6; const o = new Uint8Array(n*4); const src0 = rgba;
      for (let p = 0; p < n; p++) { const ii = rgba[p*4]/255, a = rgba[p*4+3]/255;
        if (lens) { o[p*4] = a*(1-ii)*255; o[p*4+1] = a*255; o[p*4+2] = 0; o[p*4+3] = 255; } // R = frame, G = frame + lens
        else { o[p*4] = a*ii*255; o[p*4+1] = 255; o[p*4+2] = 0; o[p*4+3] = 255; } }
      rgba = o; sh = lens ? {c: 0.12, lo: 0.5, sigma: 0.8, ot: 5, oit: 1, tv: {it: 12, lam: 4}} : {c: 0.15, lo: 0.5, sigma: 0.8, ot: 5, oit: 1, tv: {it: 12, lam: 4}}; k = this.hq ? 8 : 4;
      let lensA = 0.84; if (lens) { const cnt = new Map(); for (let p = 0; p < n; p++) { const a8 = src0[p*4+3]; if (src0[p*4] > 200 && a8 > 80 && a8 < 250) cnt.set(a8, (cnt.get(a8) || 0) + 1); } let best = 0, bv = 0; for (const [v, c] of cnt) if (c > best) { best = c; bv = v; } if (bv) lensA = bv / 255 * 0.97; }
      if (lens) { // frame is solid, lens is see-through: two sharp shapes, combined with the lens strength measured on the Wii U picture
        const u = upscale(rgba, w, h, k, sh), d = u.rgba;
        for (let p = 0; p < u.w * u.h; p++) { const F = d[p*4] / 255, C = Math.max(F, d[p*4+1] / 255), r = F + (C - F) * lensA;
          d[p*4] = r*255 + .5; d[p*4+1] = 255; d[p*4+2] = 0; d[p*4+3] = 255; }
        return {w: u.w, h: u.h, mips: 1, fmt: 2, data: d, wii: true};
      }
    }
    if (cat === 'brow' || cat === 'mole' || cat === 'mustache' || cat === 'noseline') { // single channel: I4 intensity is the coverage
      const o = new Uint8Array(n*4); for (let p = 0; p < n; p++) { const v = rgba[p*4]; o[p*4] = v; o[p*4+1] = v; o[p*4+2] = v; o[p*4+3] = 255; } rgba = o;
    }
    if (sh && (globalThis.__WT || {}).vec !== 0 && cat !== 'glass') sh.vec = true;
    const u = k === 1 ? {w, h, rgba} : upscale(rgba, w, h, k, sh);
    return {w: u.w, h: u.h, mips: 1, fmt: 2, data: u.rgba, wii: true, ds: k / 4};
  }

  // Face-feature picture (makeup / wrinkle lines) as an RGBA picture the size of the Wii U one (256x512, un-premultiplied).
  // The Wii file stores wrinkle lines as a 5-level value in the green channel; colours and strength below were measured
  // against the Wii U renders so both files give the same look.
  feature(i, SR){
    const file = (WII_FEATURE_FILE[i] ?? i); const f = this.section(WII_SECTION.facemakeTex)[file]; if (!f || f.length < 0x420) return null;
    const dv = new DataView(f.buffer, f.byteOffset, f.byteLength), W = 64, H = 128, v16 = new Uint16Array(W*H); let p = 0x20;
    for (let yb = 0; yb < H/4; yb++) for (let xb = 0; xb < W/4; xb++) for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) { v16[(yb*4+y)*W+xb*4+x] = dv.getUint16(p); p += 2; }
    const rgba = new Uint8Array(W*H*4);
    // the green channel is a small integer "strength" (0..gmax); the other channels are constant tint codes
    let gmax4 = 0, gmax5 = 0;
    for (let q = 0; q < W*H; q++) { const v = v16[q]; if (v & 0x8000) gmax5 = Math.max(gmax5, (v>>5)&31); else gmax4 = Math.max(gmax4, (v>>4)&15); }
    const FC = WII_FEATURE_STYLE[i] || {};
    for (let q = 0; q < W*H; q++) { const v = v16[q]; let lvl, region;
      if (v & 0x8000) { lvl = gmax5 ? ((v>>5)&31) / gmax5 : 0; region = 1; } else { const aa = (v>>12)&7; lvl = (gmax4 && (aa || ((v>>8)&15) || (v&15))) ? ((v>>4)&15) / gmax4 : 0; region = 0; }
      const st = region ? (FC.alt || FC) : FC; const c = st.c ? st.c(SR) : [0, 0, 0];
      rgba[q*4] = c[0]; rgba[q*4+1] = c[1]; rgba[q*4+2] = c[2]; rgba[q*4+3] = Math.round(Math.max(0, Math.min(1, lvl * (st.a ?? 0.26))) * 255); }
    const isMask = true;
    const u = upscale(rgba, W, H, 4, isMask ? {a: 0.15, lo: 0.5, sigma: 1.5} : null);
    return {w: u.w, h: u.h, mips: 1, fmt: 2, data: u.rgba, wii: true};
  }
  async shape(cat, i){
    let si, withUV = false, withFloats = false, idx = i;
    switch (cat) {
      case 'faceline': si = WII_SECTION.faceline; withUV = true; withFloats = true; break;
      case 'mask': si = WII_SECTION.mask; withUV = true; break;
      case 'hair': case 'hairhat': si = WII_SECTION.hair; break;
      case 'forehead': case 'foreheadhat': si = WII_SECTION.forehead; break;
      case 'nose': si = WII_SECTION.nose; break;
      case 'noseline': si = WII_SECTION.noselineShape; withUV = true; break;
      case 'beard': si = WII_SECTION.beardShape; idx = i + 1; break;
      case 'glass': si = WII_SECTION.glassShape; withUV = true; break;
      case 'cap': case 'caphat': si = WII_SECTION.capShape; withUV = true; break;
      default: return null;
    }
    const f = this.section(si)[idx]; if (!f) return null;
    const sh = this._parse(f, withUV, withFloats, cat);
    // the mask sheet is mapped straight from the front: u = 0.5 + x/100, v = 0.8037 - y/100. Recompute it after smoothing
    // so the parts stay exactly where they belong (no bending from the moved points).
    if (cat === 'mask' && sh.nv && sh.uv) for (let k = 0; k < sh.nv; k++) { sh.uv[k*2] = 0.5 + 0.01*sh.pos[k*4]; sh.uv[k*2+1] = 0.8037 - 0.01*sh.pos[k*4+1]; }
    return sh;
  }
  _parse(f, withUV, withFloats, cat){
    if (f.length < 12) return {nv: 0};
    try { let sh = toShape(parseModel(f, withUV, withFloats), withUV, withFloats); const SM = Object.assign({}, WII_SMOOTH, (globalThis.__WT || {}).sm); const lv = SM.level; if (lv > 0 && this._smooth !== false) { sh = subdivide(sh, lv, SM.alpha); const NS = Object.assign({it: 0, lam: 0.6}, (globalThis.__WT || {}).ns); if (NS.it > 0 && (cat === 'hair' || cat === 'cap')) sh = smoothNormals(sh, NS.it, NS.lam); const PS = Object.assign({it: 30, lam: 0.5, mu: -0.53}, (globalThis.__WT || {}).ps); if (PS.it > 0 && cat === 'hair') sh = smoothPositions(sh, PS.it, PS.lam, PS.mu); } return sh; } catch (e) { return {nv: 0}; }
  }
}
