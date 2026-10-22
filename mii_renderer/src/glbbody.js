// NitroForge Mii renderer - skinned body from the standard Mii body models (.glb), own loader + skinning code.
// The .glb files are data (geometry + skeleton); everything else here is our own implementation.
import * as THREE from './node_modules/three/build/three.module.js';

const CT={5126:Float32Array,5123:Uint16Array,5125:Uint32Array,5121:Uint8Array,5120:Int8Array,5122:Int16Array};
const NC={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT4:16};

export function parseGLB(buf){
  const dv=new DataView(buf); if(dv.getUint32(0,true)!==0x46546C67) throw new Error('not a GLB');
  const jl=dv.getUint32(12,true); const j=JSON.parse(new TextDecoder().decode(new Uint8Array(buf,20,jl)));
  const bo=20+jl, bl=dv.getUint32(bo,true), bin=buf.slice(bo+8,bo+8+bl);
  const acc=(i)=>{ const a=j.accessors[i], bv=j.bufferViews[a.bufferView], n=NC[a.type], T=CT[a.componentType];
    const off=(bv.byteOffset||0)+(a.byteOffset||0), stride=bv.byteStride||0, out=new T(a.count*n);
    if(!stride||stride===n*T.BYTES_PER_ELEMENT){ out.set(new T(bin,off,a.count*n)); }
    else { for(let k=0;k<a.count;k++) out.set(new T(bin.slice(off+k*stride,off+k*stride+n*T.BYTES_PER_ELEMENT)),k*n); }
    return out; };
  const nodes=j.nodes.map(n=>({name:n.name,t:n.translation||[0,0,0],r:n.rotation||[0,0,0,1],s:n.scale||[1,1,1],ch:n.children||[],parent:-1}));
  nodes.forEach((n,i)=>n.ch.forEach(c=>nodes[c].parent=i));
  // rest pose = first frame of the first animation clip
  const A=j.animations&&j.animations[0];
  if(A) for(const c of A.channels){ const s=A.samplers[c.sampler], v=acc(s.output), p=c.target.path, n=nodes[c.target.node], k={translation:3,rotation:4,scale:3}[p];
    if(p==='translation') n.t=Array.from(v.slice(0,3)); else if(p==='rotation') n.r=Array.from(v.slice(0,4)); else if(p==='scale') n.s=Array.from(v.slice(0,3)); }
  const sk=j.skins[0], joints=sk.joints, ibm=acc(sk.inverseBindMatrices);
  const prims=[]; for(const m of j.meshes) for(const p of m.primitives){ const a=p.attributes;
    prims.push({pos:acc(a.POSITION),nrm:acc(a.NORMAL),jt:acc(a.JOINTS_0),wt:acc(a.WEIGHTS_0),idx:acc(p.indices),mat:p.material,
      col:a.COLOR_0!==undefined?acc(a.COLOR_0):null}); }
  return {nodes,joints,ibm,prims,names:Object.fromEntries(nodes.map((n,i)=>[n.name,i]))};
}

const _m=new THREE.Matrix4(), _q=new THREE.Quaternion(), _p=new THREE.Vector3(), _s=new THREE.Vector3();
// scales: {boneName:[sx,sy,sz]} multiplied into the bone's local scale
export function skinBody(B,scales){
  const N=B.nodes.length, W=new Array(N);
  const local=(i)=>{ const n=B.nodes[i], sc=scales&&scales[n.name]||[1,1,1];
    _q.set(n.r[0],n.r[1],n.r[2],n.r[3]); _p.set(n.t[0],n.t[1],n.t[2]); _s.set(n.s[0]*sc[0],n.s[1]*sc[1],n.s[2]*sc[2]); return new THREE.Matrix4().compose(_p,_q,_s); };
  const world=(i)=>{ if(W[i]) return W[i]; const L=local(i), p=B.nodes[i].parent; W[i]=p>=0?new THREE.Matrix4().multiplyMatrices(world(p),L):L; return W[i]; };
  for(let i=0;i<N;i++) world(i);
  const JM=B.joints.map((jn,k)=>{ const ib=new THREE.Matrix4().fromArray(B.ibm,k*16); return new THREE.Matrix4().multiplyMatrices(W[jn],ib); });
  const NM=JM.map(m=>new THREE.Matrix3().setFromMatrix4(m).invert().transpose());
  return B.prims.map(pr=>{
    const n=pr.pos.length/3, P=new Float32Array(n*3), Nn=new Float32Array(n*3), v=new THREE.Vector3(), nv=new THREE.Vector3(), a=new THREE.Vector3(), b=new THREE.Vector3();
    for(let i=0;i<n;i++){ v.set(pr.pos[i*3],pr.pos[i*3+1],pr.pos[i*3+2]); nv.set(pr.nrm[i*3],pr.nrm[i*3+1],pr.nrm[i*3+2]); a.set(0,0,0); b.set(0,0,0);
      for(let k=0;k<4;k++){ const w=pr.wt[i*4+k]; if(w<=0) continue; const jj=pr.jt[i*4+k]; a.addScaledVector(v.clone().applyMatrix4(JM[jj]),w); b.addScaledVector(nv.clone().applyMatrix3(NM[jj]),w); }
      b.normalize(); P.set([a.x,a.y,a.z],i*3); Nn.set([b.x,b.y,b.z],i*3); }
    return {pos:P,nrm:Nn,idx:pr.idx,mat:pr.mat,col:pr.col};
  });
}
export function bodyGeometry(sp){
  const g=new THREE.BufferGeometry(); g.setAttribute('position',new THREE.BufferAttribute(sp.pos,3)); g.setAttribute('normal',new THREE.BufferAttribute(sp.nrm,3)); g.setIndex(new THREE.BufferAttribute(sp.idx,1)); return g;
}

// ---- height/weight warp (laws fitted from reference renders; see body.js bodyScales) ----
import {bodyScales,NECK_Y,REF_C} from './body.js';
let GU=6.0; export const setGU=(v)=>{GU=v;};                        // mesh unit -> world units
const MY=[10.85,7.05,4.92,-0.007];   // mesh landmarks: neck, hem, crotch, ground
const MD=[0,(716-571)/REF_C,(797-571)/REF_C,(985-571)/REF_C]; // reference depth (world units) of those landmarks at h=64,w=64
const HAND_G=(804-571)/REF_C;
function lin(xs,ys,x){ if(x<=xs[0]) return ys[0]+(x-xs[0])*(ys[1]-ys[0])/(xs[1]-xs[0]); for(let i=1;i<xs.length;i++) if(x<=xs[i]){const t=(x-xs[i-1])/(xs[i]-xs[i-1]); return ys[i-1]+t*(ys[i]-ys[i-1]);} const n=xs.length-1; return ys[n]+(x-xs[n])*(ys[n]-ys[n-1])/(xs[n]-xs[n-1]); }
const clamp=(x,a,b)=>Math.min(b,Math.max(a,x));
export function prepareBody(B){
  const base=skinBody(B,null), nm=B.nodes.map(n=>n.name);
  const isArm=n=>/^(arm_|shoulder_|elbow_|wrist_)/.test(n), isLeg=n=>/^(foot_|ankle_|knee_)/.test(n), isHip=n=>n==='hip';
  const info=base.map((sp,pi)=>{ const pr=B.prims[pi], n=sp.pos.length/3, wa=new Float32Array(n), wl=new Float32Array(n), wh=new Float32Array(n), side=new Float32Array(n);
    for(let i=0;i<n;i++){ for(let k=0;k<4;k++){ const w=pr.wt[i*4+k]; if(w<=0) continue; const name=nm[B.joints[pr.jt[i*4+k]]];
        if(isArm(name)){ wa[i]+=w; side[i]+=(/_l/.test(name)?1:-1)*w; } else if(isLeg(name)) wl[i]+=w; else if(isHip(name)) wh[i]+=w; } }
    return {wa,wl,wh,side}; });
  // arm centre-lines (rest pose), world mesh coords: shoulder, elbow, wrist, hand centre
  const rest=(name)=>{ // joint position at rest = skinned origin of the joint
    const W=(()=>{const N=B.nodes.length,Ws=new Array(N),mk=(i)=>{ if(Ws[i]) return Ws[i]; const n=B.nodes[i]; const L=new THREE.Matrix4().compose(new THREE.Vector3(...n.t),new THREE.Quaternion(...n.r),new THREE.Vector3(...n.s)); Ws[i]=n.parent>=0?new THREE.Matrix4().multiplyMatrices(mk(n.parent),L):L; return Ws[i]; }; return mk(B.names[name]);})();
    return new THREE.Vector3().setFromMatrixPosition(W); };
  const lines={};
  for(const s of ['l','r']){ const sh=rest('arm_'+s+'1'), el=rest('elbow_'+s), wr=rest('wrist_'+s);
    // hand centre: mean of vertices dominated by wrist
    const hc=new THREE.Vector3(); let cnt=0; base.forEach((sp,pi)=>{ const pr=B.prims[pi]; for(let i=0;i<sp.pos.length/3;i++){ let bi=0,bw=-1; for(let k=0;k<4;k++){ if(pr.wt[i*4+k]>bw){bw=pr.wt[i*4+k];bi=k;} } if(nm[B.joints[pr.jt[i*4+bi]]]==='wrist_'+s){ hc.x+=sp.pos[i*3]; hc.y+=sp.pos[i*3+1]; hc.z+=sp.pos[i*3+2]; cnt++; } } });
    hc.multiplyScalar(1/Math.max(cnt,1)); lines[s]=[sh,el,wr,hc]; }
  return {B,base,info,lines};
}
const dRef=(y)=>lin(MY.slice().reverse(),MD.slice().reverse(),y);
export function warpBody(PB,h,w){
  const sc=bodyScales(h,w), {kT,kT2,kA,kL,rA}=sc;
  const hemG=MD[1], croG=MD[2], gndG=MD[3];
  const LN=[0,sc.hem+(hemG-23.89),sc.crotch+(croG-36.41),sc.B+(gndG-67.45)];
  const dBody=(d)=>lin(MD,LN,d), dArm=(d)=>d*(sc.hand+(HAND_G-37.87))/HAND_G;
  const yB=(y)=>NECK_Y-dBody(dRef(y)), yA=(y)=>NECK_Y-dArm(dRef(y));
  const kTorso=(d)=>{ const f=clamp(((571+REF_C*d)-600)/100,0,1); return kT+(kT2-kT)*f; };
  return PB.base.map((sp,pi)=>{
    const n=sp.pos.length/3, P=new Float32Array(n*3), N=new Float32Array(n*3), inf=PB.info[pi];
    for(let i=0;i<n;i++){
      const x=sp.pos[i*3], y=sp.pos[i*3+1], z=sp.pos[i*3+2], nx=sp.nrm[i*3], ny=sp.nrm[i*3+1], nz=sp.nrm[i*3+2];
      const wa=inf.wa[i], wl=inf.wl[i], wh=inf.wh[i], wt=Math.max(0,1-wa-wl-wh);
      const d=dRef(y); const ky=kTorso(d);
      // body (torso / pelvis / legs) part
      const kxz=wt*ky+wh*kT2+wl*kL; const bx=x*GU*kxz, bz=z*GU*kxz, by=yB(y);
      let X=bx,Y=by,Z=bz, NX=nx/kxz, NY=ny, NZ=nz/kxz;
      if(wa>0.001){
        const s=inf.side[i]>=0?'l':'r', L=PB.lines[s], p=new THREE.Vector3(x,y,z);
        // project onto polyline
        let bestD=1e9,bt=0,bs=0,cp=null; for(let k=0;k<3;k++){ const a=L[k],b=L[k+1],ab=b.clone().sub(a),t=clamp(p.clone().sub(a).dot(ab)/ab.lengthSq(),0,1),c=a.clone().addScaledVector(ab,t),dd=c.distanceToSquared(p); if(dd<bestD){bestD=dd;bt=t;bs=k;cp=c;} }
        const mapPt=(q)=>new THREE.Vector3(Math.sign(q.x||1)*Math.abs(q.x)*GU*kA,yA(q.y),q.z*GU*kA*0);
        const a2=mapPt(L[bs]), b2=mapPt(L[bs+1]); const c2=a2.clone().lerp(b2,bt);
        const r=p.clone().sub(cp).multiplyScalar(GU*rA);
        const AX=c2.x+r.x, AY=c2.y+r.y, AZ=c2.z+r.z+cp.z*GU*kA*0;
        X=bx*(1-wa)+AX*wa; Y=by*(1-wa)+AY*wa; Z=bz*(1-wa)+(AZ+ (cp.z*GU))*wa*1;
        NX=nx; NY=ny; NZ=nz;
      }
      P[i*3]=X; P[i*3+1]=Y; P[i*3+2]=Z; const nl=Math.hypot(NX,NY,NZ)||1; N[i*3]=NX/nl; N[i*3+1]=NY/nl; N[i*3+2]=NZ/nl;
    }
    return {pos:P,nrm:N,idx:sp.idx,mat:sp.mat};
  });
}
