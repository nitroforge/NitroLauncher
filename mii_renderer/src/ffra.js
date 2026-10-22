// NitroForge own reader for the FFRA face resource (RFL_Res.dat).
// Format worked out by our own analysis (big-endian, zlib blocks).
export const TEX_CATS = {
  beard:[0,3], cap:[3,132], eye:[135,80], brow:[215,29], faceline:[244,12], facemake:[256,12],
  glass:[268,20], mole:[288,1], mouth:[289,53], mustache:[342,5], noseline:[347,17]
};
export const SHAPE_CATS = {
  beard:[0,3], cap:[3,132], caphat:[135,132], faceline:[267,12], glass:[279,1], mask:[280,12],
  noseline:[292,18], nose:[310,18], hair:[328,132], hairhat:[460,132], forehead:[592,132], foreheadhat:[724,132]
};
async function inflate(u8){
  const ds = new DecompressionStream('deflate');
  const w = ds.writable.getWriter(); w.write(u8); w.close();
  return new Uint8Array(await new Response(ds.readable).arrayBuffer());
}
export class Res {
  constructor(buf){
    this.u8 = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
    this.dv = new DataView(this.u8.buffer, this.u8.byteOffset, this.u8.byteLength);
    const m = String.fromCharCode(...this.u8.subarray(0,4));
    if (m !== 'FFRA') throw new Error('Not a face resource file');
    this.trecs = this._recs(0x40, 364);
    this.srecs = this._recs(0x1750, 856);
    this._cache = new Map();
  }
  _recs(off, n){
    const a = [];
    for (let i=0;i<n;i++){ const o = off+i*16;
      a.push({pos:this.dv.getUint32(o), usize:this.dv.getUint32(o+4), csize:this.dv.getUint32(o+8)}); }
    return a;
  }
  async _blob(key, r){
    if (!r.pos) return null;
    if (this._cache.has(key)) return this._cache.get(key);
    const raw = this.u8.subarray(r.pos, r.pos + (r.csize || r.usize));
    const b = r.csize ? await inflate(raw) : raw.slice();
    this._cache.set(key, b); return b;
  }
  async texture(cat, i){
    const [a,c] = TEX_CATS[cat]; if (i<0||i>=c) return null;
    const b = await this._blob('t'+(a+i), this.trecs[a+i]); if (!b) return null;
    const dv = new DataView(b.buffer, b.byteOffset, b.byteLength), n=b.length;
    const w = dv.getUint16(n-8), h = dv.getUint16(n-6), mips = dv.getUint8(n-4), fmt = dv.getUint8(n-3);
    return {w,h,mips,fmt,data:b.subarray(0,n-12)};
  }
  async shape(cat, i){
    const [a,c] = SHAPE_CATS[cat]; if (i<0||i>=c) return null;
    const b = await this._blob('s'+(a+i), this.srecs[a+i]); if (!b) return null;
    const dv = new DataView(b.buffer, b.byteOffset, b.byteLength);
    const hs = dv.getUint32(0), H = [];
    for (let k=0;k<hs/4;k++) H.push(dv.getUint32(k*4));
    const f32 = (o,cnt)=>{ const r=new Float32Array(cnt); for(let k=0;k<cnt;k++) r[k]=dv.getFloat32(o+k*4); return r; };
    const nv = H[6]/16;
    const pos = f32(H[0], nv*4), uv = H[8] ? f32(H[2], nv*2) : null;
    const nrm = b.subarray(H[1], H[1]+H[7]);
    const col = H[10] ? b.subarray(H[4], H[4]+H[10]) : null;
    const tan = H[9] ? b.subarray(H[3], H[3]+H[9]) : null;
    const idx = new Uint16Array(H[11]); for (let k=0;k<H[11];k++) idx[k]=dv.getUint16(H[5]+k*2);
    const extra = []; for (let k=12;k<hs/4;k++) extra.push(dv.getFloat32(k*4));
    return {nv,pos,uv,nrm,col,tan,idx,header:H,bounds:extra.slice(0,6),extra};
  }
}
