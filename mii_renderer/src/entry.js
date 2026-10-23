// NitroForge Mii renderer: public API (drop-in for the editor).
//   const {Mii, MiiFormats} = await import('./nitroforge-mii.js');
//   const m = await Mii.create(bytes); m.set('hairType',3); m.get('hairType');
//   await m.render(full,{size,maskRes,fflResBuffer,onCanvas}); const rcd = await m.encode(MiiFormats.RCD);
import {MiiData, MiiFormats as MF, RANGE, FIELDS} from './mii-data.js';
import {createRenderer} from './render.js';
import {DXU} from './mii3d.js';
import {COLORS} from './colors.js';
import lutSkin from './lut_skin.b64';
import lutFeat from './lut_feat.b64';
import lutHair0 from './lut_hair0.b64';
import lutHair1 from './lut_hair1.b64';
import lutBody from './lut_body.b64';
import lutCap from './lut_cap.b64';

export const MiiFormats = MF;
export const MiiRanges = RANGE;
const LUTS={skin:lutSkin,feat:lutFeat,hair0:lutHair0,hair1:lutHair1,body:lutBody,cap:lutCap};
let GLBURL={}; try{ GLBURL={0:new URL('./miiMaleBody.glb',import.meta.url).href,1:new URL('./miiFemaleBody.glb',import.meta.url).href}; }catch(e){ GLBURL={}; }
const renderers=new WeakMap(); let lastKey=null,lastR=null;
async function rendererFor(buf){
  if(!buf) throw new Error('fflResBuffer is required');
  const u8=buf instanceof Uint8Array?buf:new Uint8Array(buf);
  let r=renderers.get(u8);
  if(!r){
    const key=u8.length+':'+u8[4]+':'+u8[1000]+':'+u8[u8.length-1];
    if(lastR&&lastKey===key) r=lastR; else { r=await createRenderer(u8,LUTS,{glb:GLBURL}); lastKey=key; lastR=r; }
    renderers.set(u8,r);
  }
  return r;
}
export class Mii{
  constructor(data){ this._d=data; }
  static async create(bytes){ return new Mii(MiiData.fromBytes(bytes)); }
  // random valid Mii (every field inside its legal range); handy for demos and tests
  static async random(rng=Math.random){
    const b=new Uint8Array(74); const put=(s,n,v)=>{for(let k=0;k<n;k++){const i=s+k,bit=(v>>(n-1-k))&1,m=0x80>>(i&7);b[i>>3]=(b[i>>3]&~m)|(bit?m:0);}};
    for(const [k,[lo,hi]] of Object.entries(RANGE)){ const f=FIELDS[k]; if(!f) continue; put(f[0],f[1],lo+Math.floor(rng()*(hi-lo+1))); }
    put(192,3,4); const nm='Mii'; for(let i=0;i<nm.length;i++){ b[2+i*2]=0; b[3+i*2]=nm.charCodeAt(i); b[54+i*2]=0; b[55+i*2]=nm.charCodeAt(i); }
    return Mii.create(b);
  }
  get(k){ return this._d.get(k); }
  set(k,v){ this._d.set(k,v); }
  async encode(fmt){ if(fmt!==MF.RCD) throw new Error('Unsupported format: '+fmt); return this._d.bytes(); }
  async render(full,opts={}){
    const r=await rendererFor(opts.fflResBuffer);
    { const d=opts.deluxe??globalThis.NF_DELUXE??true; DXU.value=d===true?0.15:(typeof d==='number'?d:0); }
    const size=opts.size||512; let ss=opts.ss??2; while(ss>1&&size*ss>3072) ss--;
    let cv=await r.render(this._d.params(),{size:size*ss,maskRes:opts.maskRes?Math.min(2048,opts.maskRes*(ss>1?1:1)):undefined,full:!!full,colors:COLORS,...(opts.debug||{})});
    if(ss>1){ // supersampled render, filtered down to the requested size (clean, sharp edges)
      const o=document.createElement('canvas'); o.width=o.height=size; const x=o.getContext('2d'); x.imageSmoothingEnabled=true; x.imageSmoothingQuality='high';
      let cur=cv, w=size*ss; while(w>size*2){ const t=document.createElement('canvas'); w=Math.max(size,Math.round(w/2)); t.width=t.height=w; const tx=t.getContext('2d'); tx.imageSmoothingQuality='high'; tx.drawImage(cur,0,0,w,w); cur=t; }
      x.drawImage(cur,0,0,size,size); cv=o; }
    if(typeof opts.onCanvas==='function') opts.onCanvas(cv);
    return cv;
  }
}
export default {Mii,MiiFormats,MiiRanges};
