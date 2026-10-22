// Procedural Mii body (NitroForge own implementation). Coordinates: model units, y up, neck at y=NECK_Y.
// Reference geometry was measured (black-box silhouette fits) at height=64 weight=64, in pixels of a 1024 frame at 6.152 px/unit.
import * as THREE from './node_modules/three/build/three.module.js';

export const NECK_Y=-0.25, REF_C=6.152, REF_NECK_PX=571, REF_CX=512;
export const FAV=[[230,58,49],[255,135,54],[255,236,60],[144,230,60],[30,144,76],[39,98,202],[87,192,242],[255,116,149],[140,68,195],[98,83,53],[243,243,243],[53,53,49]];
export const PANTS=[88,96,104];
const TPW=3, ARMZ=0;

// scale laws (fitted)
const HEM=[13.4,18.62,23.89,29.02,34.07], CROTCH=[20.31,28.3,36.41,44.36,52.28];
const HANDT=[[20.45,22.11,23.76],[27.86,29.92,31.97],[35.27,37.87,40.47],[42.7,45.66,48.61],[49.93,53.57,57.0]];
const HK5=[0,32,64,96,127];
function lin(xs,ys,x){ if(x<=xs[0]) return ys[0]; for(let i=1;i<xs.length;i++) if(x<=xs[i]){const t=(x-xs[i-1])/(xs[i]-xs[i-1]); return ys[i-1]+t*(ys[i]-ys[i-1]);} return ys[ys.length-1]; }
export function bodyScales(h,w){
  const B64=38.96+0.4425*h, B=B64*(1+0.00064*(w-64));       // neck -> ground, units
  const sy=B/67.45;
  const kT=(0.686+0.00482*h)*(0.715+0.00449*w);              // torso x/z scale
  const kA=(0.657+0.00543*h)*(0.784+0.00336*w);              // arms + hands
  const kL=(0.694+0.00445*h)*(0.612+0.00555*w);              // pelvis + legs + shoes
  const rA=(0.806+0.00303*h)*lin([0,64,127],[0.52,1,1.55],w);       // arm / hand thickness
  const kT2=(0.686+0.00482*h)*lin([0,64,127],[0.61,1,1.376],w);    // waist-level torso scale
  const hem=lin(HK5,HEM,h), crotch=lin(HK5,CROTCH,h), hand=lin(HK5,HK5.map((_,i)=>lin([0,64,127],HANDT[i],w)),h);
  return {B,sy,kT,kT2,kA,kL,rA,hem,crotch,hand};
}
// camera tables (fitted from silhouettes)
const HK=[0,32,64,96,127], CK=[7.238,6.819,6.152,5.410,4.667];
const YC={0:[28.05,26.53,25.14],32:[19.94,18.04,16.28],64:[11.87,9.59,7.31],96:[3.70,1.11,-1.48],127:[-4.07,-7.07,-10.07]};
function interp(xs,ys,x){ if(x<=xs[0]) return ys[0]; for(let i=1;i<xs.length;i++) if(x<=xs[i]){const t=(x-xs[i-1])/(xs[i]-xs[i-1]); return ys[i-1]+t*(ys[i]-ys[i-1]);} return ys[ys.length-1]; }
export function fullCamera(h,w){
  const c=interp(HK,CK,h);
  const yc=interp(HK,HK.map(k=>interp([0,64,127],YC[k],w)),h);
  return {c,yc};
}

const px2u=(p)=>(p-REF_CX)/REF_C, py2d=(p)=>(p-REF_NECK_PX)/REF_C; // x offset units; depth below neck units (reference)

// sweep a circular/elliptic tube along a polyline [[x,y,z,rx,rz]] (model units)
function sweep(path,ringN=20,cap=false,pw=2){
  if(cap){ const f=(a,b)=>{ const d=[b[0]-a[0],b[1]-a[1],b[2]-a[2]]; const L=Math.hypot(...d)||1; return d.map(x=>x/L); };
    const a0=path[0],a1=path[1],e0=path[path.length-1],e1=path[path.length-2]; const ds=f(a1,a0), de=f(e1,e0); const out=[];
    const NC=5; for(let i=NC;i>=1;i--){ const t=i/NC, ang=t*Math.PI/2, r=Math.sin(Math.PI/2-ang)*1, off=(1-Math.cos(Math.PI/2-ang))*0; const rr=Math.cos(ang); const dist=Math.sin(ang)*a0[3]; out.push([a0[0]+ds[0]*dist,a0[1]+ds[1]*dist,a0[2]+ds[2]*dist,Math.max(a0[3]*rr,1e-3),Math.max(a0[4]*rr,1e-3)]); }
    const mid=path.map(x=>x.slice()); const tail=[]; for(let i=1;i<=NC;i++){ const ang=i/NC*Math.PI/2, rr=Math.cos(ang), dist=Math.sin(ang)*e0[3]; tail.push([e0[0]+de[0]*dist,e0[1]+de[1]*dist,e0[2]+de[2]*dist,Math.max(e0[3]*rr,1e-3),Math.max(e0[4]*rr,1e-3)]); }
    path=[...out,...mid,...tail]; }
  const pos=[],idx=[]; const n=path.length;
  for(let i=0;i<n;i++){
    const p=path[i]; const a=path[Math.max(0,i-1)], b=path[Math.min(n-1,i+1)];
    let t=new THREE.Vector3(b[0]-a[0],b[1]-a[1],b[2]-a[2]).normalize();
    let up=Math.abs(t.z)<0.9?new THREE.Vector3(0,0,1):new THREE.Vector3(1,0,0);
    const u=new THREE.Vector3().crossVectors(t,up).normalize(), v=new THREE.Vector3().crossVectors(t,u).normalize();
    for(let j=0;j<ringN;j++){ const th=j/ringN*Math.PI*2; let cs=Math.cos(th), sn=Math.sin(th); if(pw!==2){ cs=Math.sign(cs)*Math.pow(Math.abs(cs),2/pw); sn=Math.sign(sn)*Math.pow(Math.abs(sn),2/pw); }
      pos.push(p[0]+u.x*cs*p[3]+v.x*sn*p[4], p[1]+u.y*cs*p[3]+v.y*sn*p[4], p[2]+u.z*cs*p[3]+v.z*sn*p[4]); }
  }
  for(let i=0;i<n-1;i++) for(let j=0;j<ringN;j++){ const a=i*ringN+j,b=i*ringN+(j+1)%ringN,c=(i+1)*ringN+j,d=(i+1)*ringN+(j+1)%ringN; idx.push(a,c,b,b,c,d); }
  const g=new THREE.BufferGeometry(); g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3)); g.setIndex(idx); g.computeVertexNormals(); return g;
}
function ellipsoid(cx,cy,cz,rx,ry,rz,N=16){ const path=[]; for(let i=0;i<=N;i++){ const a=-Math.PI/2+Math.PI*i/N; path.push([cx,cy+Math.sin(a)*ry,cz,Math.cos(a)*rx+1e-3,Math.cos(a)*rz+1e-3]); } path[0][3]=path[0][4]=1e-3; return sweep(path,24); }

// reference body definition in reference px; converted per (h,w)
// torso profile: [py, half-width px]; depth ratio
const TORSO_UP=[[567,20,44],[580,37,54.5],[592,53,56],[604,64,56],[630,60.5,56],[650,58.5,55.5],[700,59],[716,59]];
const TORSO_LO=[[716,59],[740,62],[765,62],[782,54],[794,30],[797,6]];
const DRESS=[[567,20],[575,31],[583,47.5],[592,56],[602,63],[660,66],[716,74],[760,80],[794,87]];
const ARM=[[463,612,14.2],[432,690,14.6],[418,742,14.6]]; // shoulder, elbow, wrist (px x,y, radius px)
const HAND=[408,777,27];
const LEG=[[478.5,790,25.5],[478.5,815,24.5],[480,860,21],[481,905,17],[481.5,947,15.5]];
const SHOE=[479.5,966,24,20,30];

export function buildBody(P,mats){
  const sc=bodyScales(P.height,P.weight), {kT,kT2,kA,kL,rA}=sc, g=new THREE.Group();
  // vertical maps (reference depth below neck, units -> new depth)
  const hemG=(716-REF_NECK_PX)/REF_C, croG=(797-REF_NECK_PX)/REF_C, gndG=(985-REF_NECK_PX)/REF_C, handG=(804-REF_NECK_PX)/REF_C;
  const LM=[0,hemG,croG,gndG], LN=[0,sc.hem+(hemG-23.89),sc.crotch+(croG-36.41),sc.B+(gndG-67.45)];
  const dBody=(d)=>lin(LM,LN,d), dArm=(d)=>d*(sc.hand+(handG-37.87))/handG;
  const YB=(py)=>NECK_Y-dBody(py2d(py)), YA=(py)=>NECK_Y-dArm(py2d(py)), DZ=0.95;
  const legSy=(LN[3]-LN[2])/(LM[3]-LM[2]);
  const dens=(p)=>{ const o=[]; for(let i=0;i<p.length-1;i++){ const a=p[Math.max(0,i-1)],b=p[i],c=p[i+1],d=p[Math.min(p.length-1,i+2)]; for(let t=0;t<1;t+=0.25){ const t2=t*t,t3=t2*t; const f=(q0,q1,q2,q3)=>0.5*((2*q1)+(-q0+q2)*t+(2*q0-5*q1+4*q2-q3)*t2+(-q0+3*q1-3*q2+q3)*t3); o.push([f(a[0],b[0],c[0],d[0]),f(a[1],b[1],c[1],d[1])]); } } o.push(p[p.length-1]); return o; };
  const lathe=(prof,mat,k,k2)=>{ const path=prof.map(([py,hw,zz])=>{const f=k2===undefined?0:Math.min(1,Math.max(0,(py-600)/100)); const kk=k+(k2===undefined?0:(k2-k))*f; const r=Math.max(hw/REF_C*kk,1e-3); return [0,YB(py),0,r,(zz!==undefined?Math.max(zz/REF_C*kk,1e-3):r*DZ)];}); g.add(new THREE.Mesh(sweep(path,64,false,TPW),mat)); };
  if(P.gender===1) lathe(DRESS,mats.shirt,kT,kT2); else { lathe(TORSO_UP,mats.shirt,kT,kT2); if(P.dbgHide!=='pelvis') lathe(TORSO_LO,mats.pants,kT2); }
  for(const s of [1,-1]){
    const apath=ARM.map(([px,py,r])=>[s*Math.abs(px2u(px))*kA,YA(py),ARMZ,r*1.2/REF_C*rA,r*1.2/REF_C*rA]);
    g.add(new THREE.Mesh(sweep(apath,32,true),mats.shirt));
    g.add(new THREE.Mesh(ellipsoid(s*Math.abs(px2u(HAND[0]))*kA,YA(HAND[1]),0,HAND[2]*1.06/REF_C*rA,HAND[2]*1.06/REF_C*rA,HAND[2]*1.06/REF_C*rA),mats.shirt));
    const lpath=LEG.map(([px,py,r])=>[s*Math.abs(px2u(px))*kL,YB(py),0,r/REF_C*kL,r/REF_C*kL*0.9]);
    g.add(new THREE.Mesh(sweep(lpath,32,true),mats.pants));
    g.add(new THREE.Mesh(ellipsoid(s*Math.abs(px2u(SHOE[0]))*kL,YB(SHOE[1]),1.5*kL,SHOE[2]/REF_C*kL,SHOE[3]/REF_C*legSy,SHOE[4]/REF_C*kL),mats.pants));
  }
  return g;
}
