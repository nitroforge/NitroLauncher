import * as THREE from './node_modules/three/build/three.module.js';
import {Res} from './ffra.js';
import {shapeGeometry} from './geo.js';

export const CAM={K:4.8117, D:300, CY:33.373, CX:-0.0357};
export const SKIN_REL=[[1,1,1],[1,.878,.671],[.883,.623,.467],[1,.828,.835],[.709,.455,.343],[.445,.3,.258]];

export function makeLut(b64){
  const bin=atob(b64), n=bin.length, d=new Uint8Array(n); for(let i=0;i<n;i++) d[i]=bin.charCodeAt(i);
  const G=Math.round(Math.sqrt(n/4));
  const t=new THREE.DataTexture(d,G,G,THREE.RGBAFormat,THREE.UnsignedByteType);
  t.magFilter=THREE.LinearFilter; t.minFilter=THREE.LinearFilter; t.needsUpdate=true; t.flipY=false;
  return t;
}
export const DXU={value:0};
const DXF=`uniform float uDx;
vec3 dx(vec3 c, vec3 n, float kind){ if(uDx<0.001) return c;
 // glossy "bubble" look: only ADDS light (colours never get darker than the original shading)
 vec3 V=vec3(0.0,0.0,1.0); vec3 R=2.0*n.z*n-V;
 float fr=pow(1.0-clamp(n.z,0.0,1.0),2.4);
 float gl=kind>1.5?0.55:(kind>0.5?0.85:1.0);
 // soft box (top left) and a smaller cool box (lower right) mirrored on the surface
 float a1=dot(R,normalize(vec3(-0.50,0.62,0.60)));
 float soft=smoothstep(0.70,0.93,a1);
 float core=smoothstep(0.965,0.993,a1);
 float a2=dot(R,normalize(vec3(0.62,-0.30,0.72)));
 float soft2=smoothstep(0.82,0.96,a2);
 // sky/ground reflection band
 float sky=smoothstep(0.1,0.9,R.y)*0.06;
 vec3 refl=vec3(1.0,0.98,0.95)*(soft*0.18+core*0.50*(kind>1.5?1.0:0.0))+vec3(0.60,0.78,1.0)*soft2*0.14+vec3(0.75,0.85,1.0)*sky;
 // edge light (fresnel), cool on the right, warm on the left
 vec3 rim=(vec3(0.55,0.75,1.0)*max(n.x+0.30,0.0)+vec3(1.0,0.70,0.45)*max(-n.x,0.0)*0.7)*fr*0.38;
 // warm bounce from below
 vec3 bounce=vec3(0.10,0.06,0.04)*clamp(-n.y,0.0,1.0)*(kind<0.5?1.0:0.7);
 float lum=dot(c,vec3(0.299,0.587,0.114)); refl*=(1.0-0.55*lum);
 float km=kind<0.5?1.0:(kind<1.5?0.0:3.0); // skin 15%, hair 0%, cloth 45% (uDx is the 15% base)
 return clamp(c+((refl+rim)*gl+bounce)*uDx*km,0.0,1.0); }
`;
const VS=`varying vec3 vN; varying vec2 vUv; void main(){ vN=normalize(normalMatrix*normal); vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }`;
const FS=`precision highp float; ${DXF} uniform float kindU; uniform sampler2D lut; uniform vec3 albedo; uniform sampler2D map; uniform bool useMap; varying vec3 vN; varying vec2 vUv;
void main(){ vec3 n=normalize(vN); if(!gl_FrontFacing) n=-n; vec2 q=n.xy*0.5+0.5; vec4 t=texture2D(lut,q);
 vec3 L=t.rgb*(320.0/255.0); float Sp=(t.a*96.0-32.0)/255.0;
 vec3 base=albedo; float a=1.0;
 if(useMap){ vec4 m=texture2D(map,vUv); base=mix(albedo,m.rgb,m.a); }
 gl_FragColor=vec4(dx(clamp(base*L+vec3(Sp),0.0,1.0),n,kindU),1.0); }`;
export function litMaterial(lut,albedo,map,kind=0){
  return new THREE.ShaderMaterial({vertexShader:VS,fragmentShader:FS,side:THREE.DoubleSide,
    uniforms:{uDx:DXU,kindU:{value:kind},lut:{value:lut},albedo:{value:new THREE.Vector3(...albedo)},map:{value:map||null},useMap:{value:!!map}}});
}
// face-feature layer (eyes, brows, mouth ...): nearly flat colour, mild normal-dependent gain F(n)
export const FEAT_GAIN=1.12;
const FSM=`precision highp float; uniform sampler2D lut; uniform sampler2D map; varying vec3 vN; varying vec2 vUv;
void main(){ vec3 n=normalize(vN); if(!gl_FrontFacing) n=-n; vec2 q=n.xy*0.5+0.5; float F=texture2D(lut,q).r*2.55; vec4 m=texture2D(map,vUv); if(m.a<0.002) discard;
 gl_FragColor=vec4(clamp(m.rgb*F*${FEAT_GAIN.toFixed(2)},0.0,1.0),m.a); }`;
export function maskMaterial(lut,map){
  return new THREE.ShaderMaterial({vertexShader:VS,fragmentShader:FSM,side:THREE.DoubleSide,transparent:true,depthWrite:false,
    uniforms:{lut:{value:lut},map:{value:map}}});
}
const FSD=`precision highp float; uniform sampler2D lut; uniform sampler2D map; uniform vec3 tint; varying vec3 vN; varying vec2 vUv;
void main(){ vec3 n=normalize(vN); if(!gl_FrontFacing) n=-n; vec2 q=n.xy*0.5+0.5; vec4 t=texture2D(lut,q);
 vec3 L=t.rgb*(320.0/255.0); float Sp=(t.a*96.0-32.0)/255.0; float a=texture2D(map,vUv).r; if(a<0.002) discard;
 gl_FragColor=vec4(clamp(tint*L+vec3(Sp),0.0,1.0),a); }`;
// decal: single-channel (R) alpha texture, flat albedo tint
export function decalMaterial(lut,map,tint){
  return new THREE.ShaderMaterial({vertexShader:VS,fragmentShader:FSD,side:THREE.DoubleSide,transparent:true,depthWrite:false,
    uniforms:{lut:{value:lut},map:{value:map},tint:{value:new THREE.Vector3(...tint)}}});
}
export function makeCamera(size,K=CAM.K,cx=CAM.CX,cy=CAM.CY){
  const k=K*size/512, fov=2*Math.atan((size/2/k)/CAM.D)*180/Math.PI;
  const cam=new THREE.PerspectiveCamera(fov,1,10,2000); cam.position.set(cx,cy,CAM.D); cam.lookAt(cx,cy,0); cam.updateMatrixWorld();
  return cam;
}
export function makeRenderer(size){
  const r=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true,alpha:true,premultipliedAlpha:false});
  r.setSize(size,size,false); r.setClearColor(0x000000,0); r.outputColorSpace=THREE.LinearSRGBColorSpace; r.autoClear=true;
  return r;
}
// hair: two LUTs (dome / fringe class chosen by vertex colour R), albedo relative to hair colour 0
const VSH=`attribute vec4 vcol; varying vec3 vN; varying float vCls; void main(){ vN=normalize(normalMatrix*normal); vCls=vcol.r>0.5?1.0:0.0; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }`;
const FSH=`precision highp float; ${DXF} uniform sampler2D lutA; uniform sampler2D lutB; uniform vec3 albedo; varying vec3 vN; varying float vCls;
void main(){ vec3 n=normalize(vN); if(!gl_FrontFacing) n=-n; vec2 q=n.xy*0.5+0.5; vec4 t=vCls>0.5?texture2D(lutB,q):texture2D(lutA,q);
 vec3 L=t.rgb*(320.0/255.0); float Sp=(t.a*96.0-32.0)/255.0; gl_FragColor=vec4(dx(clamp(albedo*L+vec3(Sp),0.0,1.0),n,1.0),1.0); }`;
export function hairMaterial(lutA,lutB,albedo){
  return new THREE.ShaderMaterial({vertexShader:VSH,fragmentShader:FSH,side:THREE.DoubleSide,uniforms:{uDx:DXU,lutA:{value:lutA},lutB:{value:lutB},albedo:{value:new THREE.Vector3(...albedo)}}});
}
export const HAIR_REL=[[0.344,0.371,0.371],[1.276,0.875,0.623],[1.684,0.749,0.529],[2.15,1.284,0.686],[2.092,2.258,2.383],[1.48,1.346,0.623],[2.325,1.755,0.749],[3.372,2.887,1.535]];

// glasses: flat (unlit) frame colour; alpha = R*G of the glass texture
const FSG=`precision highp float; uniform sampler2D map; uniform vec3 tint; uniform float lo; uniform float kk; varying vec2 vUv; varying vec3 vN;
void main(){ vec4 t=texture2D(map,vUv); float a=t.r; vec3 c=tint;
 if(lo>0.0){ float fr=smoothstep(lo,lo+0.06,t.r); a=t.r*(1.0-fr)*kk+fr; c=mix(tint,vec3(0.0),fr); }
 if(a<0.002) discard; gl_FragColor=vec4(c,a); }`;
export function glassMaterial(map,tint,lo=0,kk=1){
  return new THREE.ShaderMaterial({vertexShader:VS,fragmentShader:FSG,side:THREE.DoubleSide,transparent:true,depthWrite:false,depthTest:false,
    uniforms:{map:{value:map},tint:{value:new THREE.Vector3(...tint)},lo:{value:lo},kk:{value:kk}}});
}

// body: colour at the facing-camera normal, shaded by the skin LUT relative to its centre value
const FSB=`precision highp float; uniform sampler2D lut; uniform vec3 col; uniform float ng; varying vec3 vN;
void main(){ vec3 n=normalize(vN); if(!gl_FrontFacing) n=-n; vec4 t=texture2D(lut,n.xy*ng*0.5+0.5); vec4 t0=texture2D(lut,vec2(0.5));
 vec3 L=t.rgb/max(t0.rgb,vec3(0.01)); float Sp=((t.a-t0.a)*96.0)/255.0; gl_FragColor=vec4(clamp(col*L+vec3(Sp),0.0,1.0),1.0); }`;
export function bodyMaterial(lut,rgb255,ng=1){
  return new THREE.ShaderMaterial({vertexShader:VS,fragmentShader:FSB,side:THREE.DoubleSide,uniforms:{lut:{value:lut},ng:{value:ng},col:{value:new THREE.Vector3(rgb255[0]/255,rgb255[1]/255,rgb255[2]/255)}}});
}
export function makeCameraC(size,c,cy,cx=0){
  const k=c*size/1024*(1024/size)*1; // c is px/unit at the 1024 frame; scale to size
  const kk=c*size/1024, fov=2*Math.atan((size/2/kk)/CAM.D)*180/Math.PI;
  const cam=new THREE.PerspectiveCamera(fov,1,10,2000); cam.position.set(cx,cy,CAM.D); cam.lookAt(cx,cy,0); cam.updateMatrixWorld(); return cam;
}

// cap / hat cloth: body-style shading, colour multiplied by an R8 pattern texture
const FSC=`precision highp float; uniform sampler2D lut; uniform sampler2D map; uniform vec3 col; varying vec3 vN; varying vec2 vUv;
void main(){ vec3 n=normalize(vN); if(!gl_FrontFacing) n=-n; vec4 t=texture2D(lut,n.xy*0.5+0.5); vec4 t0=texture2D(lut,vec2(0.5));
 vec3 L=t.rgb/max(t0.rgb,vec3(0.01)); float Sp=((t.a-t0.a)*96.0)/255.0; float uw=smoothstep(-0.15,-0.55,n.y); L=mix(L,vec3(0.22),uw); Sp=mix(Sp,0.2,uw); float p=texture2D(map,vUv).r; gl_FragColor=vec4(clamp(col*p*L+vec3(Sp),0.0,1.0),1.0); }`;
export function capMaterial(lut,rgb255,map){
  return new THREE.ShaderMaterial({vertexShader:VS,fragmentShader:FSC,side:THREE.DoubleSide,uniforms:{lut:{value:lut},map:{value:map},col:{value:new THREE.Vector3(rgb255[0]/255,rgb255[1]/255,rgb255[2]/255)}}});
}

// glasses lens (types 6-8): translucent tint, alpha = G * k
const FSL=`precision highp float; uniform sampler2D map; uniform vec3 tint; uniform float k; varying vec2 vUv; varying vec3 vN;
void main(){ vec4 t=texture2D(map,vUv); float a=t.g*k; if(a<0.002) discard; gl_FragColor=vec4(tint,a); }`;
export function lensMaterial(map,tint,k){
  return new THREE.ShaderMaterial({vertexShader:VS,fragmentShader:FSL,side:THREE.DoubleSide,transparent:true,depthWrite:false,depthTest:false,
    uniforms:{map:{value:map},tint:{value:new THREE.Vector3(...tint)},k:{value:k}}});
}

// debug: body normal -> colour (xy in rg), used to fit the body LUT
const FSN=`precision highp float; uniform float mk; varying vec3 vN; void main(){ vec3 n=normalize(vN); if(!gl_FrontFacing) n=-n; gl_FragColor=vec4(n.xy*0.5+0.5,mk,1.0); }`;
export function normalMaterial(mk=0){ return new THREE.ShaderMaterial({vertexShader:VS,fragmentShader:FSN,side:THREE.DoubleSide,uniforms:{mk:{value:mk}}}); }

// debug: uv -> colour (hi/lo bytes of u or v), used to unproject screen images into texture space
const FSU=`precision highp float; uniform float ch; varying vec2 vUv; void main(){ float x=(ch<0.5?vUv.x:vUv.y); float v=clamp(x,0.0,0.99999)*255.0; float hi=floor(v); gl_FragColor=vec4(hi/255.0,fract(v),0.0,1.0); }`;
export function uvMaterial(ch){ return new THREE.ShaderMaterial({vertexShader:VS,fragmentShader:FSU,side:THREE.DoubleSide,uniforms:{ch:{value:ch}}}); }

// debug: hair normal + class -> colour
const FSHN=`precision highp float; varying vec3 vN; varying float vCls; void main(){ vec3 n=normalize(vN); if(!gl_FrontFacing) n=-n; gl_FragColor=vec4(n.xy*0.5+0.5,vCls,1.0); }`;
export function hairNormalMaterial(){ return new THREE.ShaderMaterial({vertexShader:VSH,fragmentShader:FSHN,side:THREE.DoubleSide}); }

// cap / hat cloth shaded by the body (cloth) LUT: colour * pattern * L(n) + Sp(n); underside is darker
const FSC2=`precision highp float; ${DXF} uniform sampler2D lut; uniform sampler2D map; uniform vec3 col; varying vec3 vN; varying vec2 vUv;
void main(){ vec3 n=normalize(vN); if(!gl_FrontFacing) n=-n; vec4 t=texture2D(lut,n.xy*0.5+0.5);
 vec3 L=t.rgb*(320.0/255.0); float Sp=(t.a*96.0-32.0)/255.0;
 float p=texture2D(map,vUv).r; gl_FragColor=vec4(dx(clamp(col*p*L+vec3(Sp),0.0,1.0),n,2.0),1.0); }`;
export function capMaterial2(lut,rgb255,map){
  return new THREE.ShaderMaterial({vertexShader:VS,fragmentShader:FSC2,side:THREE.DoubleSide,uniforms:{uDx:DXU,lut:{value:lut},map:{value:map},col:{value:new THREE.Vector3(rgb255[0]/255,rgb255[1]/255,rgb255[2]/255)}}});
}

// debug: cap normal + pattern -> colour
const FSCN=`precision highp float; uniform sampler2D map; varying vec3 vN; varying vec2 vUv; void main(){ vec3 n=normalize(vN); if(!gl_FrontFacing) n=-n; gl_FragColor=vec4(n.xy*0.5+0.5,texture2D(map,vUv).r,1.0); }`;
export function capNormalMaterial(map){ return new THREE.ShaderMaterial({vertexShader:VS,fragmentShader:FSCN,side:THREE.DoubleSide,uniforms:{map:{value:map}}}); }
