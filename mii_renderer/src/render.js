import * as THREE from './node_modules/three/build/three.module.js';
import {Res} from './ffra.js';
import {shapeGeometry} from './geo.js';
import {glassMaterial,FEAT_GAIN,makeLut,hairMaterial,HAIR_REL,litMaterial,maskMaterial,decalMaterial,makeCamera,makeCameraC,bodyMaterial,capMaterial2,capNormalMaterial,normalMaterial,uvMaterial,hairNormalMaterial,capMaterial,lensMaterial,makeRenderer,SKIN_REL} from './mii3d.js';
import {buildBody,fullCamera,FAV,PANTS} from './body.js';
import {parseGLB,prepareBody,warpBody,bodyGeometry,setGU} from './glbbody.js';
import {PART,partXform,EYE_BASE_ROT,BROW_BASE_ROT} from './tables.js';

let M=1024;
const HAIR_MAP={};
const CAPS=new Set([34,57]);
function texCanvas(t,fn){
  const c=document.createElement('canvas'); c.width=t.w; c.height=t.h; const x=c.getContext('2d'); const im=x.createImageData(t.w,t.h);
  const bpp=[1,2,4][t.fmt];
  for(let y=0;y<t.h;y++)for(let xx=0;xx<t.w;xx++){const p=(y*t.w+xx)*bpp; const r=t.data[p],g=bpp>1?t.data[p+1]:0,b=bpp>2?t.data[p+2]:0,a=bpp>3?t.data[p+3]:255;
    const o=fn(r,g,b,a); const q=(y*t.w+xx)*4; im.data[q]=o[0];im.data[q+1]=o[1];im.data[q+2]=o[2];im.data[q+3]=o[3];}
  x.putImageData(im,0,0); return c;
}
function drawPart(ctx,img,px,py,hx,hy,scale,rotDeg,side){
  const k=M/512; ctx.save(); if(side<0){ctx.translate(512*k,0); ctx.scale(-1,1);}
  ctx.translate(px*k,py*k); ctx.rotate(rotDeg*Math.PI/180); ctx.scale(scale*k,scale*k); ctx.translate(hx,hy);
  ctx.scale(-1,1); ctx.drawImage(img,-img.width/2,-img.height/2); ctx.restore();
}
const fetchText=async u=>await (await fetch(u,{cache:'force-cache'})).text();

let _gl=null; function sharedGL(){ return _gl||(_gl=makeRenderer(512)); }
export async function createRenderer(resBuf, base='./', extra={}){
  const res=new Res(resBuf);
  const L=typeof base==='object'?base:{skin:await fetchText(base+'lut_skin.b64'),feat:await fetchText(base+'lut_feat.b64'),hair0:await fetchText(base+'lut_hair0.b64'),hair1:await fetchText(base+'lut_hair1.b64'),body:await fetchText(base+'lut_body.b64').catch(()=>null),cap:await fetchText(base+'lut_cap.b64').catch(()=>null)};
  const lutSkin=makeLut(L.skin); const lutFeat=makeLut(L.feat); const lutBody=L.body?makeLut(L.body):null; const lutCap=L.cap?makeLut(L.cap):null;
  const lutH0=makeLut(L.hair0), lutH1=makeLut(L.hair1);
  const cache={shape:new Map(),tex:new Map()};
  const shape=async(c,i)=>{const k=c+':'+i; if(!cache.shape.has(k)){const s=await res.shape(c,i); let g=null; if(s&&s.nv){g=shapeGeometry(s); g.userData.extra=s.extra;} cache.shape.set(k,g);} return cache.shape.get(k);};
  const tex=async(c,i)=>{const k=c+':'+i; if(!cache.tex.has(k)) cache.tex.set(k,await res.texture(c,i)); return cache.tex.get(k);};
  async function partImg(cat,type,fn){ return texCanvas(await tex(cat,type),fn); }
  const glbCache={};
  const getGLB=async(g)=>{ if(glbCache[g]!==undefined) return glbCache[g]; let r=null; try{ const u=(extra.glb&&extra.glb[g])||((typeof base==='string'?base:'./')+(g===1?'miiFemaleBody.glb':'miiMaleBody.glb')); const b=await (await fetch(u,{cache:'force-cache'})).arrayBuffer(); r=prepareBody(parseGLB(b)); }catch(e){ r=null; } glbCache[g]=r; return r; };
  const rdr=sharedGL();
  async function render(P,opts={}){
    const SIZE=opts.size||512; M=Math.min(2048,opts.maskRes||1024); rdr.setSize(SIZE,SIZE,false);
    const sc=new THREE.Scene(); const sk=SKIN_REL[P.faceColor]||SKIN_REL[0];
    const col=opts.colors; // colour tables (rgb 0..255 arrays)
    // ---- mask ----
    const mask=document.createElement('canvas'); mask.width=M; mask.height=M; const mctx=mask.getContext('2d'); mctx.imageSmoothingQuality='high';
    const IRIS=col.eye[P.eyeColor]||[20,20,20], BROW=col.brow[P.browColor], MOUTH=col.mouth[P.mouthColor]||[200,80,80], MOUTHU=col.mouthUp[P.mouthColor]||[100,40,40];
    const K=1/FEAT_GAIN, EW=opts.eyeWhite??col.eyeWhite??1; const eyeImg=await partImg('eye',P.eyeType,(r,g,b,a)=>[(g*EW+b*IRIS[0]/255)*K,(g*EW+b*IRIS[1]/255)*K,(g*EW+b*IRIS[2]/255)*K,a]);
    const browImg=await partImg('brow',P.browType,(r,g,b,a)=>[BROW[0]*K,BROW[1]*K,BROW[2]*K,r]);
    const mm=opts.mouthMode; const mouthImg=await partImg('mouth',P.mouthType,(r,g,b,a)=>mm==='R'?[r,r,r,a]:mm==='G'?[g,g,g,a]:mm==='A'?[255,255,255,a]:mm==='RA'?[r,r,r,255]:mm==='GA'?[g,g,g,255]:[(r*MOUTH[0]+g*MOUTHU[0])/255*K+b*K,(r*MOUTH[1]+g*MOUTHU[1])/255*K+b*K,(r*MOUTH[2]+g*MOUTHU[2])/255*K+b*K,a]);
    const place=(PP,img,d,y,size,rot,side,base=0)=>{const X=partXform(PP,d,y,size,rot); drawPart(mctx,img,X.px,X.py,PP.hx,PP.hy,X.s,X.th+base,side);};
    { const FP=[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]]; const pr=FP[P.feature]||[0,0]; const wr=opts.wrIdx??pr[0], mk=opts.mkIdx??pr[1], k=M/512;
      const lay=async(im,sc,ox,oy)=>{ for(const sg of [1,-1]){ mctx.save(); if(sg<0){mctx.translate(512*k,0); mctx.scale(-1,1);} mctx.translate(ox*k,oy*k); mctx.scale(sc*k,sc*k); mctx.drawImage(im,0,0); mctx.restore(); } };
      if(mk&&opts.makeup!==false){ await lay(await partImg('facemake',mk,(r,g,b,a)=>[r*K,g*K,b*K,a]),opts.mkS??.49,opts.mkX??269,opts.mkY??190); }
      if(wr&&opts.wrinkle!==false){ const WC=opts.wrCol??[110,80,70]; await lay(await partImg('faceline',wr,(r)=>[WC[0]*K,WC[1]*K,WC[2]*K,r*(opts.wrA??.6)]),opts.wrS??.82,opts.wrX??141.5,opts.wrY??3); } }
    {const eb=EYE_BASE_ROT[P.eyeType]||0; place(PART.eye,eyeImg,P.eyeDist,P.eyeY,P.eyeSize,P.eyeRot,1,eb); place(PART.eye,eyeImg,P.eyeDist,P.eyeY,P.eyeSize,P.eyeRot,-1,eb);}
    {const bb=BROW_BASE_ROT[P.browType]||0; place(PART.brow,browImg,P.browDist,P.browY-3,P.browSize,P.browRot,1,bb); place(PART.brow,browImg,P.browDist,P.browY-3,P.browSize,P.browRot,-1,bb);}
    { const X=partXform(PART.mouth,0,P.mouthY,P.mouthSize,0); const k=M/512; mctx.save(); mctx.translate(256*k,X.py*k); mctx.scale(X.s*k,X.s*k); mctx.drawImage(mouthImg,-mouthImg.width/2,-mouthImg.height/2); mctx.restore(); }
    if(P.mustType>=1&&P.mustType<=3){ // mustache: half texture mirrored about x=256, inner edge on the centre line
      const MS=[.218,.285,.365,.52,.671,.772,.873,.97,1.07], MCY=[-2.9,-4.2,-5.5,-4.8,0,.6,.8,.9,1.0];
      const BC=col.brow[P.beardColor]||col.brow[0]; const mimg=await partImg('mustache',P.mustType-1,(r)=>[BC[0]*K,BC[1]*K,BC[2]*K,r]);
      const s=MS[P.mustSize]??.671, cy=339.8+MCY[P.mustSize]+8.436*(P.mustY-10), k=M/512;
      for(const sg of [1,-1]){ mctx.save(); mctx.translate((256+sg*64*s)*k,cy*k); mctx.scale(-sg*s*k,s*k); mctx.drawImage(mimg,-mimg.width/2,-mimg.height/2); mctx.restore(); }
    }
    if(P.moleOn){ const mimg=await partImg('mole',0,(r)=>[20*K,17*K,17*K,r]); const s=.12+.0463*P.moleSize, px=256+13.96*(P.moleX-8), py=146.05+8.44*P.moleY, k=M/512;
      mctx.save(); mctx.translate(px*k,py*k); mctx.scale(s*k,s*k); mctx.drawImage(mimg,-mimg.width/2,-mimg.height/2); mctx.restore(); }
    // ---- scene ----
    const hairIdx=HAIR_MAP[P.hairType]??P.hairType, flip=P.hairFlip?-1:1;
    const addLit=async(c,i,mat,sx=1)=>{const g=await shape(c,i); if(!g) return; const m=new THREE.Mesh(g,mat); m.scale.x=sx; sc.add(m); return m;};
    const skinMat=litMaterial(lutSkin,sk);
    const fg=await shape('faceline',P.faceType); const FX=fg.userData.extra; const V1=[FX[6],FX[7],FX[8]],V2=[FX[9],FX[10],FX[11]],V3=[FX[12],FX[13],FX[14]];
    const FEAT_PAIR=[[0,0],[0,1],[0,5],[0,8],[4,0],[1,0],[2,0],[6,0],[7,0],[0,9],[8,0],[10,0]]; // wii 'feature' -> [wrinkle faceline tex, makeup facemake tex]
    let faceMat=skinMat; { const [wr,mk]=FEAT_PAIR[P.feature]||[0,0];
      if(opts.featureOverlay!==false&&(wr!==0||mk!==0||opts.flMk||opts.flWr)){ const cv=document.createElement('canvas'); cv.width=256; cv.height=512; const x=cv.getContext('2d');
        const fm=opts.flMk??mk, fw=opts.flWr??wr; const put=(img)=>{ for(const sg of (opts.flMirror==='only'?[-1]:opts.flMirror===true?[1,-1]:[1])){ x.save(); if(sg<0){x.translate(256+(opts.flMx??0),0); x.scale(-1,1);} x.translate(opts.flX??3,opts.flY??1.5); x.scale(opts.flS??.99,opts.flS??.99); x.drawImage(img,0,0); x.restore(); } };
        const MKG={1:.45,2:.5,3:.45,4:.45,5:1.0,6:.5,7:.5,8:.9,9:.78,10:.78}, SR=Math.round((sk[0]<=1.001?sk[0]*255:sk[0]));
        if(fm){ const t=await tex('facemake',fm); const gk=(opts.mkGain??MKG[fm]??.5), br=(fm===1||fm===3||fm===4); put(texCanvas(t,(r,g,b,a)=>[br?SR:r,g,b,a*gk])); }
        if(fw){ const t=await tex('faceline',fw); const wg=(opts.wrinkleGain??(fw===6?.93:.98)); put(texCanvas(t,(r)=>fw===7?[opts.w7r??SR*.4,0,0,r*wg]:[0,0,0,r*wg])); }
        const tx=new THREE.CanvasTexture(cv); tx.flipY=false; tx.colorSpace=THREE.NoColorSpace; if(opts.flWrap!==false){ tx.wrapS=THREE.MirroredRepeatWrapping; } faceMat=litMaterial(lutSkin,sk,tx); } }
    sc.add(new THREE.Mesh(fg,faceMat));
    if(!opts.dbgPieces) { const m=await addLit(CAPS.has(hairIdx)?'foreheadhat':'forehead',hairIdx,skinMat,flip); if(m) m.position.set(V1[0],V1[1],V1[2]); }
    const mt=new THREE.CanvasTexture(mask); mt.flipY=false; mt.colorSpace=THREE.NoColorSpace;
    const mg=await shape('mask',P.faceType); const mmesh=new THREE.Mesh(mg,maskMaterial(lutFeat,mt)); mmesh.renderOrder=2; sc.add(mmesh);
    { const ty=36.3-1.473*P.noseY+(V2[1]-24.5), sc3=0.1717*P.noseSize+0.387, tz=V2[2];
      const ng=await shape('nose',P.noseType); if(ng){const nm=new THREE.Mesh(ng,skinMat); nm.position.set(0,ty,tz); nm.scale.set(sc3,sc3,sc3); sc.add(nm);}
      const lg=await shape('noseline',P.noseType); const lt=await tex('noseline',P.noseType);
      if(lg){ const lc=texCanvas(lt,(r)=>[r,0,0,255]); const tx=new THREE.CanvasTexture(lc); tx.flipY=false; tx.colorSpace=THREE.NoColorSpace;
        const lm=new THREE.Mesh(lg,decalMaterial(lutSkin,tx,[0,0,0])); lm.position.set(0,ty,tz+0.5); lm.scale.set(sc3,sc3,1); lm.renderOrder=3; sc.add(lm); } }
    if(opts.dbgPieces){ const hues=[[1,0,0],[0,1,0],[0,0,1],[1,1,0],[1,0,1],[0,1,1]]; let k=0; for(const it of opts.dbgPieces){ const [c,i]=it.split(':'); const g=await shape(c,+i); if(!g){console.log('empty',it);continue;} const m=new THREE.Mesh(g,new THREE.MeshNormalMaterial()); m.material=litMaterial(lutSkin,hues[k++%6]); sc.add(m);} }
    // hair
    if(!opts.dbgPieces) { const hg=await shape(CAPS.has(hairIdx)?'hairhat':'hair',hairIdx); if(hg){ const hm=new THREE.Mesh(hg,opts.dbgNormal==='hair'?hairNormalMaterial():hairMaterial(lutH0,lutH1,HAIR_REL[col.hairIndex(P.hairColor)]||HAIR_REL[0])); hm.userData.hair=true; hm.scale.x=flip; hm.position.set(V1[0],V1[1],V1[2]); sc.add(hm);} }
    if(CAPS.has(hairIdx)&&!opts.dbgPieces){ const cg=await shape('cap',hairIdx); const ct=await tex('cap',hairIdx);
      if(cg&&ct){ const cc=texCanvas(ct,(r)=>[r,r,r,255]); const ctx_=new THREE.CanvasTexture(cc); ctx_.flipY=false; ctx_.wrapS=ctx_.wrapT=THREE.RepeatWrapping; ctx_.colorSpace=THREE.NoColorSpace;
        const cm=new THREE.Mesh(cg,opts.dbgNormal==='cap'?capNormalMaterial(ctx_):((lutCap||lutBody)&&!opts.oldCap?capMaterial2(lutCap||lutBody,FAV[P.favColor]||FAV[0],ctx_):capMaterial(lutSkin,FAV[P.favColor]||FAV[0],ctx_))); cm.userData.cap=true; cm.scale.x=flip; cm.position.set(V1[0],V1[1],V1[2]); sc.add(cm); } }
    // beard
    if(P.beardType>=1&&P.beardType<=3){ const bg=await shape('beard',P.beardType-1); if(bg){ const bm=new THREE.Mesh(bg,opts.dbgNormal==='beard'?hairNormalMaterial():hairMaterial(lutH0,lutH1,HAIR_REL[col.hairIndex(P.beardColor)]||HAIR_REL[0])); bm.userData.hair=true; bm.position.set(V3[0],V3[1],V3[2]); sc.add(bm);} }
    // glasses
    if(P.glassType>0){ const gg=await shape('glass',0); const gt=await tex('glass',P.glassType-1);
      if(gg&&gt){ const gc=texCanvas(gt,(r,g)=>[r,g,0,255]); const gtex=new THREE.CanvasTexture(gc); gtex.flipY=false; gtex.wrapS=THREE.MirroredRepeatWrapping; gtex.colorSpace=THREE.NoColorSpace; gtex.anisotropy=4;
        const C=col.glass[P.glassColor]||[0,0,0]; const lens=P.glassType>=6; const gm=new THREE.Mesh(gg,glassMaterial(gtex,[C[0]/255,C[1]/255,C[2]/255],lens?(opts.frameLo??0.93):0,opts.lensK??1)); const gs=0.4+0.15*P.glassSize;
        const GZ=opts.glassZ??46, kz=(300-GZ)/(300-22), gy=45.9-1.5*P.glassY+V1[1];
        gm.material.depthTest=GZ>22; gm.scale.set(gs*kz,gs*kz,1); gm.position.set(0,33.3+(gy-33.3)*kz,GZ); gm.renderOrder=10; sc.add(gm); } }
    if(opts.body!==false){ const f01=a=>a.map(x=>x/255); const mats=(lutBody&&!opts.oldBody)?{shirt:litMaterial(lutBody,f01(FAV[P.favColor]||FAV[0])),pants:litMaterial(lutBody,f01(PANTS))}:{shirt:bodyMaterial(lutSkin,FAV[P.favColor]||FAV[0],opts.bodyNg??0.5),pants:bodyMaterial(lutSkin,PANTS,opts.bodyNg??0.5)}; const gl2=opts.oldProcBody?null:await getGLB(P.gender===1?1:0); const mm=opts.dbgNormal?{shirt:normalMaterial(0),pants:normalMaterial(0.5)}:mats; let bg; if(gl2){ if(opts.gu) setGU(opts.gu); bg=new THREE.Group(); for(const sp of warpBody(gl2,P.height,P.weight)){ bg.add(new THREE.Mesh(bodyGeometry(sp),sp.mat===0?mm.shirt:mm.pants)); } } else bg=buildBody(P,mm); bg.userData.body=true; sc.add(bg); }
    if(opts.dbgNormal){ const dn=opts.dbgNormal; sc.children.forEach(c=>{c.visible=dn==='head'?!c.userData.body:dn==='cap'?!!c.userData.cap:(dn==='hair'||dn==='beard')?!!c.userData.hair:!!c.userData.body}); }
    let cam; if(opts.full){ const fc=fullCamera(P.height,P.weight); cam=makeCameraC(SIZE,fc.c,fc.yc); } else cam=makeCamera(SIZE,opts.camK,opts.camCX,opts.camCY);
    if(opts.dbgUV){ const [cat,ch]=opts.dbgUV; const s2=new THREE.Scene(); const idx=cat==='faceline'?P.faceType:(cat==='mask'?P.faceType:0); const g=await shape(cat,idx); s2.add(new THREE.Mesh(g,uvMaterial(ch))); rdr.setClearColor(0x000000,0); const sv=rdr.getClearAlpha(); rdr.render(s2,cam); return rdr.domElement; }
    rdr.render(sc,cam);
    return rdr.domElement;
  }
  return {render,res};
}
