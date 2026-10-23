// Contour vectorizer: turns a soft mask plane into clean shapes (smooth curves, crisp corners) and draws them with the browser's anti-aliasing.
// Own implementation (marching squares + corner-aware smoothing + corner recovery).
function march(q, W, H, thr){
  const P = W + 2, at = (x, y) => (x < 0 || y < 0 || x >= W || y >= H) ? 0 : q[y*W+x];
  const segs = new Map(); // start key -> [end key, ...]
  const pt = new Map();
  const T = (x, y, va, vb) => { const k = 'h' + x + ',' + y; if (!pt.has(k)) pt.set(k, [x + (thr - va) / (vb - va), y]); return k; };
  const B = (x, y, vd, vc) => { const k = 'h' + x + ',' + (y+1); if (!pt.has(k)) pt.set(k, [x + (thr - vd) / (vc - vd), y + 1]); return k; };
  const L = (x, y, va, vd) => { const k = 'v' + x + ',' + y; if (!pt.has(k)) pt.set(k, [x, y + (thr - va) / (vd - va)]); return k; };
  const R = (x, y, vb, vc) => { const k = 'v' + (x+1) + ',' + y; if (!pt.has(k)) pt.set(k, [x + 1, y + (thr - vb) / (vc - vb)]); return k; };
  const add = (a, b) => { segs.set(a, b); };
  for (let y = -1; y < H; y++) for (let x = -1; x < W; x++) {
    const va = at(x, y), vb = at(x+1, y), vc = at(x+1, y+1), vd = at(x, y+1);
    const cs = (va >= thr ? 1 : 0) | (vb >= thr ? 2 : 0) | (vc >= thr ? 4 : 0) | (vd >= thr ? 8 : 0);
    if (cs === 0 || cs === 15) continue;
    const t = () => T(x, y, va, vb), r = () => R(x, y, vb, vc), b = () => B(x, y, vd, vc), l = () => L(x, y, va, vd);
    switch (cs) {
      case 1: add(t(), l()); break; case 2: add(r(), t()); break; case 4: add(b(), r()); break; case 8: add(l(), b()); break;
      case 3: add(r(), l()); break; case 6: add(b(), t()); break; case 12: add(l(), r()); break; case 9: add(t(), b()); break;
      case 7: add(b(), l()); break; case 11: add(r(), b()); break; case 13: add(t(), r()); break; case 14: add(l(), t()); break;
      case 5: case 10: { const cin = (va + vb + vc + vd) / 4 >= thr; if ((cs === 5) !== cin) { add(t(), l()); add(b(), r()); } else { add(r(), t()); add(l(), b()); } break; }
    }
  }
  const loops = [], seen = new Set();
  for (const s0 of segs.keys()) { if (seen.has(s0)) continue; const loop = []; let k = s0;
    while (k !== undefined && !seen.has(k)) { seen.add(k); loop.push(pt.get(k)); k = segs.get(k); }
    if (k === s0 && loop.length > 3) loops.push(loop); }
  return loops;
}
function resample(loop, sp){
  const n = loop.length, cum = [0]; for (let i = 0; i < n; i++) { const a = loop[i], b = loop[(i+1)%n]; cum.push(cum[i] + Math.hypot(b[0]-a[0], b[1]-a[1])); }
  const len = cum[n]; const m = Math.max(8, Math.round(len / sp)); const out = []; let j = 0;
  for (let i = 0; i < m; i++) { const d = len * i / m; while (cum[j+1] < d) j++; const a = loop[j], b = loop[(j+1)%n], t = (d - cum[j]) / ((cum[j+1] - cum[j]) || 1); out.push([a[0] + (b[0]-a[0])*t, a[1] + (b[1]-a[1])*t]); }
  return {pts: out, step: len / m};
}
function gsmooth(seg, sig, closed){ // seg: array of points, spacing 1 sample; gaussian, pinned ends when open (point-reflection)
  const n = seg.length; if (n < 3 || sig <= 0) return seg; const R = Math.ceil(sig * 3); const w = []; let sw = 0; for (let i = -R; i <= R; i++) { const v = Math.exp(-i*i/(2*sig*sig)); w.push(v); sw += v; }
  const get = i => { if (closed) return seg[((i % n) + n) % n]; if (i < 0) { const a = seg[0], b = seg[Math.min(n-1, -i)]; return [2*a[0]-b[0], 2*a[1]-b[1]]; } if (i >= n) { const a = seg[n-1], b = seg[Math.max(0, 2*(n-1)-i)]; return [2*a[0]-b[0], 2*a[1]-b[1]]; } return seg[i]; };
  const out = []; for (let i = 0; i < n; i++) { let x = 0, y = 0; for (let j = -R; j <= R; j++) { const p = get(i+j); x += p[0]*w[j+R]; y += p[1]*w[j+R]; } out.push([x/sw, y/sw]); }
  if (!closed) { out[0] = seg[0]; out[n-1] = seg[n-1]; } return out;
}
function fitLine(ps){ let cx = 0, cy = 0; for (const p of ps) { cx += p[0]; cy += p[1]; } cx /= ps.length; cy /= ps.length; let sxx = 0, sxy = 0, syy = 0; for (const p of ps) { const dx = p[0]-cx, dy = p[1]-cy; sxx += dx*dx; sxy += dx*dy; syy += dy*dy; }
  const th = 0.5 * Math.atan2(2*sxy, sxx - syy); return {p: [cx, cy], d: [Math.cos(th), Math.sin(th)]}; }
function intersect(A, B){ const det = A.d[0]*(-B.d[1]) - A.d[1]*(-B.d[0]); if (Math.abs(det) < 0.15) return null; const rx = B.p[0]-A.p[0], ry = B.p[1]-A.p[1]; const t = (rx*(-B.d[1]) - ry*(-B.d[0])) / det; return [A.p[0] + A.d[0]*t, A.p[1] + A.d[1]*t]; }
function clean(loop, u, P){
  const sp = 0.25 * u; const {pts, step} = resample(loop, sp); const n = pts.length; const u2 = u / step; // samples per source pixel
  if (n < 12) return pts;
  const m = Math.max(2, Math.round(P.cw * u2)); const ang = new Float32Array(n);
  for (let i = 0; i < n; i++) { const a = pts[(i-m+n*4)%n], b = pts[i], c = pts[(i+m)%n]; const v1x = b[0]-a[0], v1y = b[1]-a[1], v2x = c[0]-b[0], v2y = c[1]-b[1]; ang[i] = Math.abs(Math.atan2(v1x*v2y - v1y*v2x, v1x*v2x + v1y*v2y)); }
  const corners = []; for (let i = 0; i < n; i++) { if (ang[i] < P.ca) continue; let ok = true; for (let j = -m; j <= m; j++) if (j && ang[(i+j+n)%n] > ang[i] || (j < 0 && ang[(i+j+n)%n] === ang[i])) { ok = false; break; } if (ok) corners.push(i); }
  const sig = P.sig * u2;
  if (corners.length === 0) return gsmooth(pts, sig, true);
  const out = []; const nc = corners.length;
  const segs = [];
  for (let c = 0; c < nc; c++) { const i0 = corners[c], i1 = corners[(c+1)%nc]; const len = ((i1 - i0 + n) % n) || n; const seg = []; for (let j = 0; j <= len; j++) seg.push(pts[(i0+j)%n]); segs.push(seg); }
  const sm = segs.map(s => gsmooth(s, sig, false));
  const trim = P.tr * u2, fitA = P.fa * u2, fitB = P.fb * u2;
  const X = [];
  for (let c = 0; c < nc; c++) { // corner c sits between segment (c-1) end and segment c start
    const sPrev = sm[(c-1+nc)%nc], sNext = sm[c]; let res = null;
    if (sPrev.length > fitB + 2 && sNext.length > fitB + 2) {
      const pa = [], pb = []; for (let j = Math.round(fitA); j <= Math.round(fitB); j++) { pa.push(sPrev[sPrev.length-1-j]); pb.push(sNext[j]); }
      const A = fitLine(pa), Bl = fitLine(pb); const x = intersect(A, Bl); const cp = sNext[0];
      if (x && Math.hypot(x[0]-cp[0], x[1]-cp[1]) <= P.mx * u) res = x; }
    X.push(res);
  }
  for (let c = 0; c < nc; c++) { const s = sm[c]; const hasS = X[c], hasE = X[(c+1)%nc]; const a = hasS ? Math.round(trim) : 0, b = s.length - (hasE ? Math.round(trim) : 0);
    if (hasS) out.push(hasS); for (let j = Math.max(a, hasS ? 1 : 0); j < b - (hasE ? 0 : 1); j++) out.push(s[j]); if (!hasS && a === 0 && false) out.push(s[0]); }
  return out;
}
let _cv = null;
function mk(W, H){ if (typeof OffscreenCanvas !== 'undefined') return new OffscreenCanvas(W, H); const c = document.createElement('canvas'); c.width = W; c.height = H; return c; }
export const VEC_DEFAULT = {cw: 1.5, ca: 1.0, sig: 0.7, tr: 0.9, fa: 1.2, fb: 3.2, mx: 1.6};
export function vecPlane(q, W, H, thr, k, par){
  const P = Object.assign({}, VEC_DEFAULT, par || {}); let mn = 1e9, mxv = -1e9; for (let i = 0; i < W*H; i++) { if (q[i] < mn) mn = q[i]; if (q[i] > mxv) mxv = q[i]; }
  const out = new Float32Array(W*H); if (mxv < thr) return out; if (mn >= thr) { out.fill(1); return out; }
  const loops = march(q, W, H, thr); const cv = mk(W, H); const x = cv.getContext('2d'); x.fillStyle = '#000'; x.fillRect(0, 0, W, H); x.fillStyle = '#fff';
  const pa = new Path2D(); for (const lp of loops) { if (lp.length < 1.5 * k) continue; const poly = clean(lp.map(p => [p[0] + 0.5, p[1] + 0.5]), k, P); if (poly.length < 3) continue; pa.moveTo(poly[0][0], poly[0][1]); for (let i = 1; i < poly.length; i++) pa.lineTo(poly[i][0], poly[i][1]); pa.closePath(); }
  x.fill(pa, 'nonzero'); const d = x.getImageData(0, 0, W, H).data; for (let i = 0; i < W*H; i++) out[i] = d[i*4] / 255; return out;
}
