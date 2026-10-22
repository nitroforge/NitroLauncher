// Part placement tables in mask-UV pixel units (reference T=512, centre x=256). Measured against the reference renderer.
export const PART={
  eye:  {cat:'eye',  pivot:'edge', hx:79.383,hy:-3.038, px0:256-1.648, pxStep:7.006, pyRef:252.053, yRef:12, pyStep:8.436, sk:0.247, sz0:1, szK:0.4,  th0:2.137, rRef:4, rStep:11.263},
  brow: {cat:'brow', pivot:'edge', hx:73.887,hy:1.404, px0:254.352, pxStep:7.006, pyRef:218.89, yRef:7, pyStep:8.436, sk:0.247, sz0:1, szK:0.4, th0:-0.3, rRef:6, rStep:11.3},
  mouth:{cat:'mouth',pivot:'center',hx:0,hy:0, px0:256, pxStep:0, pyRef:345.4, yRef:13, pyStep:8.436, sk:0.247, sz0:1, szK:0.4, th0:0, rRef:0, rStep:0},
};
export function partXform(P,d,y,size,rot){
  const s=P.sLin? P.sLin[0]+P.sLin[1]*size : P.sk*(P.szK*size+P.sz0);
  const th=P.th0+P.rStep*(P.rRef-rot);
  const px=P.px0+P.pxStep*d, py=P.pyRef+P.pyStep*(y-P.yRef);
  return {px,py,s,th};
}

// eye textures are authored with a base rotation of 0 or -11.25 degrees (measured per type)
export const EYE_BASE_ROT=[...Array(48)].map((_,i)=>[0,4,8,13,14,18,19,21,23,24,26,29,33,34,35,38,39,40,43,44,45,46,47].includes(i)?-11.25:0);

export const BROW_BASE_ROT=[0,0,-1,1,0,1,0,1,-2,1,0,2,-1,-1,0,0,1,1,0,0,-1,0,1,0].map(k=>k*11.25);
