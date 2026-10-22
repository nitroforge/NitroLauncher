// Wii Mii record (RCD, 74 bytes): data model with the same get()/set() names the editor uses.
// Bit 0 is the most significant bit of byte 0.
export const FIELDS = {
  gender:[1,1], birthMonth:[2,4], birthday:[6,5], favoriteColor:[11,4], favorited:[15,1],
  height:[176,8], weight:[184,8],
  faceType:[256,3], faceColor:[259,3], feature:[262,4], mingleBit:[269,1],
  hairType:[272,7], hairColor:[279,3], hairFlipped:[282,1],
  eyebrowType:[288,5], eyebrowRotation:[294,4], eyebrowColor:[304,3], eyebrowSize:[307,4], eyebrowY:[311,5], eyebrowDistanceApart:[316,4],
  eyeType:[320,6], eyeRotation:[328,3], eyeYPosition:[331,5], eyeColor:[336,3], eyeSize:[340,3], eyeDistanceApart:[343,4],
  noseType:[352,4], noseSize:[356,4], noseYPosition:[360,5],
  mouthType:[368,5], mouthColor:[373,2], mouthSize:[375,4], mouthYPosition:[379,5],
  glassesType:[384,4], glassesColor:[388,3], glassesSize:[392,3], glassesYPosition:[395,5],
  mustacheType:[400,2], beardType:[402,2], beardColor:[404,3], mustacheSize:[407,4], mustacheYPosition:[411,5],
  moleOn:[416,1], moleSize:[417,4], moleYPosition:[421,5], moleXPosition:[426,5],
};
// valid raw ranges [min,max]
const RANGE = {gender:[0,1],favoriteColor:[0,11],height:[0,127],weight:[0,127],faceType:[0,7],faceColor:[0,5],feature:[0,11],hairType:[0,71],hairColor:[0,7],hairFlipped:[0,1],
 eyebrowType:[0,23],eyebrowRotation:[0,11],eyebrowColor:[0,7],eyebrowSize:[0,8],eyebrowY:[3,18],eyebrowDistanceApart:[0,12],
 eyeType:[0,47],eyeRotation:[0,7],eyeYPosition:[0,18],eyeColor:[0,5],eyeSize:[0,7],eyeDistanceApart:[0,12],
 noseType:[0,11],noseSize:[0,8],noseYPosition:[0,18],mouthType:[0,23],mouthColor:[0,2],mouthSize:[0,8],mouthYPosition:[0,18],
 glassesType:[0,8],glassesColor:[0,5],glassesSize:[0,7],glassesYPosition:[0,20],mustacheType:[0,3],beardType:[0,3],beardColor:[0,7],mustacheSize:[0,8],mustacheYPosition:[0,16],
 moleOn:[0,1],moleSize:[0,8],moleYPosition:[0,30],moleXPosition:[0,16],birthMonth:[0,12],birthday:[0,31]};
// bits the format does not carry; they are cleared on save
const UNUSED=[0,194,266,267,268,270,283,284,285,286,287,293,298,299,300,301,302,303,326,327,339,347,348,349,350,351,365,366,367,431];
// colour tables: renderer colour index (0..99) -> Wii colour index
const T_HAIR=[0,1,2,3,4,5,6,7,0,4,3,5,4,4,6,2,0,6,4,3,2,2,7,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,4,4,4,4,4,4,4,0,0,4,4,4,4,4,4,0,0,0,4,4,4,4,4,4,5,5,5,4,4,4,4,4,4,4,5,7,5,7,7,7,7,7,6,7,7,7,7,7,3,7,7,7,7,7,0,4,4,4,4];
const T_EYE=[0,2,2,2,1,3,2,3,0,1,2,3,4,5,2,2,4,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,4,4,4,4,4,4,4,1,0,4,4,4,4,4,4,4,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,3,3,3,3,3,3,3,3,2,2,3,3,3,3,2,2,2,2,2,1,1,1,1,1,1];
const T_MOUTH=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,2,0,0,0,2,0,0,0,0,0,0,1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const T_GLASS=[0,1,1,1,5,1,1,4,0,5,1,1,3,5,1,2,3,4,5,4,2,2,4,4,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,5,5,5,5,5,5,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,1,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5];
const T_FACE=[0,1,2,3,4,5,0,1,5,5];
// Wii colour index -> colour index reported by get()
const C_HAIR=v=>v===0?8:v, C_EYE=v=>8+v, C_MOUTH=v=>19+v, C_GLASS=v=>v===0?8:13+v;
// Wii face feature <-> (faceFeature, makeup)
const FEAT_PAIR=[[0,0],[0,1],[0,6],[0,9],[5,0],[2,0],[3,0],[7,0],[8,0],[0,10],[9,0],[11,0]];
const FT=['0','6',5,6,'6',4,7,7,8,10,'6',11], MT=[0,1,1,2,1,1,2,2,2,3,9,9];
function pairToFeature(ff,mk){
  const lf=FT[ff], lm=MT[mk]; const nf=Number(lf), nm=Number(lm);
  if(typeof lf!=='string') return Number.isFinite(nf)?nf:0;
  if(nm>0) return nm;
  return Number.isFinite(nf)?nf:0;
}
const COLOR_KEYS={hairColor:[T_HAIR,C_HAIR],eyebrowColor:[T_HAIR,C_HAIR],beardColor:[T_HAIR,C_HAIR],eyeColor:[T_EYE,C_EYE],mouthColor:[T_MOUTH,C_MOUTH,2],glassesColor:[T_GLASS,C_GLASS],faceColor:[T_FACE,v=>v]};
export const MiiFormats={RCD:'rcd'};
const getBits=(b,s,n)=>{let v=0;for(let i=s;i<s+n;i++)v=(v<<1)|((b[i>>3]>>(7-(i&7)))&1);return v;};
const putBits=(b,s,n,val)=>{for(let k=0;k<n;k++){const i=s+k,bit=(val>>(n-1-k))&1,m=0x80>>(i&7);b[i>>3]=(b[i>>3]&~m)|(bit?m:0);}};
function readName(b,off){let s='';for(let i=0;i<10;i++){const c=(b[off+i*2]<<8)|b[off+i*2+1]; if(!c)break; s+=String.fromCharCode(c);} return s;}
function writeName(b,off,str){for(let i=0;i<20;i++)b[off+i]=0; const n=Math.min(10,str.length); for(let i=0;i<n;i++){const c=str.charCodeAt(i);b[off+i*2]=c>>8;b[off+i*2+1]=c&255;}}
export class MiiData{
  constructor(raw){
    this.raw=raw;
    this.ff=0; this.mk=0; this.featDirty=false;
    [this.ff,this.mk]=FEAT_PAIR[getBits(raw,262,4)];
    this.permCopying=undefined;
  }
  static fromBytes(bytes){
    if(!(bytes instanceof Uint8Array)) bytes=new Uint8Array(bytes);
    if(bytes.length<74) throw new Error('Could not find any decodeable formats: ');
    const raw=bytes.slice(0,74);
    for(const [k,[s,n]] of Object.entries(FIELDS)){ if(k==='mingleBit') continue; const r=RANGE[k]; if(!r) continue; let v=getBits(raw,s,n); if(k==='eyebrowY'&&0) {} if(v<r[0]||v>r[1]) throw new Error('Could not find any decodeable formats: '); }
    if(getBits(raw,391,1)) throw new Error('Could not find any decodeable formats: ');
    const idt=getBits(raw,192,3);
    for(const i of UNUSED) putBits(raw,i,1,0);
    putBits(raw,192,3,idt===2?2:idt===6?6:4);
    // names end at the first NUL
    for(const off of [2,54]){ const s=readName(raw,off); writeName(raw,off,s); }
    return new MiiData(raw);
  }
  _chk(k,v){const r=RANGE[k]; if(r&&(!Number.isInteger(v)||v<r[0]||v>r[1])) throw new RangeError(k+' out of range: '+v);}
  get(path){
    const b=this.raw; path=String(path); const dot=path.lastIndexOf('.'); if(path.startsWith('general.')||path.startsWith('meta.')||path.startsWith('perms.')) path=path.slice(dot+1);
    if(path==='name') return readName(b,2); if(path==='creatorName') return readName(b,54);
    if(path==='mingle') return !getBits(b,269,1); if(path==='copying') return this.permCopying;
    if(path==='faceFeature') return this.ff; if(path==='makeup') return this.mk;
    if(path==='mole.on') path='moleOn';
    if(path==='eyebrowYPosition') return getBits(b,311,5)-3;
    const f=FIELDS[path]; if(!f) return undefined;
    const v=getBits(b,f[0],f[1]);
    if(COLOR_KEYS[path]) return COLOR_KEYS[path][1](v);
    if(path==='hairFlipped'||path==='moleOn'||path==='favorited') return !!v;
    return v;
  }
  set(path,value){
    const b=this.raw; path=String(path);
    if(path.startsWith('general.')||path.startsWith('meta.')||path.startsWith('perms.')) path=path.slice(path.lastIndexOf('.')+1);
    if(path==='name'){writeName(b,2,String(value));return;} if(path==='creatorName'){writeName(b,54,String(value));return;}
    if(path==='mingle'){putBits(b,269,1,value?0:1);return;} if(path==='copying'){this.permCopying=!!value;return;}
    if(path==='faceFeature'){this.ff=Number(value); this._chk('feature',this.ff); this._syncFeat();return;}
    if(path==='makeup'){this.mk=Number(value); this._chk('feature',this.mk); this._syncFeat();return;}
    if(path==='mole.on') path='moleOn';
    if(path==='eyebrowYPosition'){ const v=Number(value)+3; this._chk('eyebrowY',v); putBits(b,311,5,v); return; }
    const f=FIELDS[path]; if(!f) return;
    let v=value;
    if(typeof v==='boolean') v=v?1:0; else v=Number(v);
    if(COLOR_KEYS[path]){ const [T,,cl]=COLOR_KEYS[path]; let w=T[v]; if(w===undefined) throw new RangeError(path+' out of range'); if(cl!==undefined&&w>cl) w=0; v=w; }
    this._chk(path,v); putBits(b,f[0],f[1],v);
  }
  _syncFeat(){ putBits(this.raw,262,4,pairToFeature(this.ff,this.mk)); }
  bytes(){ const r=this.raw.slice(); if(getBits(r,192,3)===2) putBits(r,269,1,1); return r; }
  // renderer view: raw Wii values only
  params(){
    const g=k=>getBits(this.raw,FIELDS[k][0],FIELDS[k][1]), P={};
    P.gender=g('gender'); P.favColor=g('favoriteColor'); P.height=g('height'); P.weight=g('weight');
    P.faceType=g('faceType'); P.faceColor=g('faceColor'); P.feature=g('feature');
    P.hairType=g('hairType'); P.hairColor=g('hairColor'); P.hairFlip=g('hairFlipped');
    P.browType=g('eyebrowType'); P.browRot=g('eyebrowRotation'); P.browColor=g('eyebrowColor'); P.browSize=g('eyebrowSize'); P.browY=g('eyebrowY'); P.browDist=g('eyebrowDistanceApart');
    P.eyeType=g('eyeType'); P.eyeRot=g('eyeRotation'); P.eyeY=g('eyeYPosition'); P.eyeColor=g('eyeColor'); P.eyeSize=g('eyeSize'); P.eyeDist=g('eyeDistanceApart');
    P.noseType=g('noseType'); P.noseSize=g('noseSize'); P.noseY=g('noseYPosition');
    P.mouthType=g('mouthType'); P.mouthColor=g('mouthColor'); P.mouthSize=g('mouthSize'); P.mouthY=g('mouthYPosition');
    P.glassType=g('glassesType'); P.glassColor=g('glassesColor'); P.glassSize=g('glassesSize'); P.glassY=g('glassesYPosition');
    P.mustType=g('mustacheType'); P.beardType=g('beardType'); P.beardColor=g('beardColor'); P.mustSize=g('mustacheSize'); P.mustY=g('mustacheYPosition');
    P.moleOn=g('moleOn'); P.moleSize=g('moleSize'); P.moleY=g('moleYPosition'); P.moleX=g('moleXPosition');
    return P;
  }
}

export {RANGE};
