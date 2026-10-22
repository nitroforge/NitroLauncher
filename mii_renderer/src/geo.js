import * as THREE from './node_modules/three/build/three.module.js';
export function decodeNormals(nrm){
  const n=nrm.length/4, out=new Float32Array(n*3);
  for(let i=0;i<n;i++){
    const u=((nrm[i*4]<<24)|(nrm[i*4+1]<<16)|(nrm[i*4+2]<<8)|nrm[i*4+3])>>>0;
    const f=v=>{v=v&1023; if(v>=512) v-=1024; return Math.max(-1,v/511);};
    const x=f(u), y=f(u>>>10), z=f(u>>>20);
    const l=Math.hypot(x,y,z)||1; out[i*3]=x/l; out[i*3+1]=y/l; out[i*3+2]=z/l;
  }
  return out;
}
export function shapeGeometry(s){
  const g=new THREE.BufferGeometry();
  const p=new Float32Array(s.nv*3); for(let i=0;i<s.nv;i++){p[i*3]=s.pos[i*4];p[i*3+1]=s.pos[i*4+1];p[i*3+2]=s.pos[i*4+2];}
  g.setAttribute('position',new THREE.BufferAttribute(p,3));
  g.setAttribute('normal',new THREE.BufferAttribute(decodeNormals(s.nrm),3));
  if(s.uv) g.setAttribute('uv',new THREE.BufferAttribute(s.uv,2));
  if(s.col&&s.col.length>=s.nv*4){ const c=new Float32Array(s.nv*4); for(let i=0;i<s.nv*4;i++) c[i]=s.col[i]/255; g.setAttribute('vcol',new THREE.BufferAttribute(c,4)); }
  else { const c=new Float32Array(s.nv*4); const v=s.col&&s.col.length>=4?[s.col[0]/255,s.col[1]/255,s.col[2]/255,s.col[3]/255]:[1,1,0,1]; for(let i=0;i<s.nv;i++){c[i*4]=v[0];c[i*4+1]=v[1];c[i*4+2]=v[2];c[i*4+3]=v[3];} g.setAttribute('vcol',new THREE.BufferAttribute(c,4)); }
  if(s.tan&&s.tan.length>=s.nv*4){ g.setAttribute('tan',new THREE.BufferAttribute(new Float32Array(decodeNormals(s.tan)),3)); }
  g.setIndex(new THREE.BufferAttribute(s.idx,1));
  return g;
}
