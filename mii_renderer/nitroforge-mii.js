var En={gender:[1,1],birthMonth:[2,4],birthday:[6,5],favoriteColor:[11,4],favorited:[15,1],height:[176,8],weight:[184,8],faceType:[256,3],faceColor:[259,3],feature:[262,4],mingleBit:[269,1],hairType:[272,7],hairColor:[279,3],hairFlipped:[282,1],eyebrowType:[288,5],eyebrowRotation:[294,4],eyebrowColor:[304,3],eyebrowSize:[307,4],eyebrowY:[311,5],eyebrowDistanceApart:[316,4],eyeType:[320,6],eyeRotation:[328,3],eyeYPosition:[331,5],eyeColor:[336,3],eyeSize:[340,3],eyeDistanceApart:[343,4],noseType:[352,4],noseSize:[356,4],noseYPosition:[360,5],mouthType:[368,5],mouthColor:[373,2],mouthSize:[375,4],mouthYPosition:[379,5],glassesType:[384,4],glassesColor:[388,3],glassesSize:[392,3],glassesYPosition:[395,5],mustacheType:[400,2],beardType:[402,2],beardColor:[404,3],mustacheSize:[407,4],mustacheYPosition:[411,5],moleOn:[416,1],moleSize:[417,4],moleYPosition:[421,5],moleXPosition:[426,5]},Si={gender:[0,1],favoriteColor:[0,11],height:[0,127],weight:[0,127],faceType:[0,7],faceColor:[0,5],feature:[0,11],hairType:[0,71],hairColor:[0,7],hairFlipped:[0,1],eyebrowType:[0,23],eyebrowRotation:[0,11],eyebrowColor:[0,7],eyebrowSize:[0,8],eyebrowY:[3,18],eyebrowDistanceApart:[0,12],eyeType:[0,47],eyeRotation:[0,7],eyeYPosition:[0,18],eyeColor:[0,5],eyeSize:[0,7],eyeDistanceApart:[0,12],noseType:[0,11],noseSize:[0,8],noseYPosition:[0,18],mouthType:[0,23],mouthColor:[0,2],mouthSize:[0,8],mouthYPosition:[0,18],glassesType:[0,8],glassesColor:[0,5],glassesSize:[0,7],glassesYPosition:[0,20],mustacheType:[0,3],beardType:[0,3],beardColor:[0,7],mustacheSize:[0,8],mustacheYPosition:[0,16],moleOn:[0,1],moleSize:[0,8],moleYPosition:[0,30],moleXPosition:[0,16],birthMonth:[0,12],birthday:[0,31]},Pl=[0,194,266,267,268,270,283,284,285,286,287,293,298,299,300,301,302,303,326,327,339,347,348,349,350,351,365,366,367,431],nr=[0,1,2,3,4,5,6,7,0,4,3,5,4,4,6,2,0,6,4,3,2,2,7,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,4,4,4,4,4,4,4,0,0,4,4,4,4,4,4,0,0,0,4,4,4,4,4,4,5,5,5,4,4,4,4,4,4,4,5,7,5,7,7,7,7,7,6,7,7,7,7,7,3,7,7,7,7,7,0,4,4,4,4],Ll=[0,2,2,2,1,3,2,3,0,1,2,3,4,5,2,2,4,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,4,4,4,4,4,4,4,1,0,4,4,4,4,4,4,4,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,3,3,3,3,3,3,3,3,2,2,3,3,3,3,2,2,2,2,2,1,1,1,1,1,1],Cl=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,2,0,0,0,2,0,0,0,0,0,0,1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],Nl=[0,1,1,1,5,1,1,4,0,5,1,1,3,5,1,2,3,4,5,4,2,2,4,4,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,5,5,5,5,5,5,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,1,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5],Rl=[0,1,2,3,4,5,0,1,5,5],ir=i=>i===0?8:i,Il=i=>8+i,zl=i=>19+i,Ul=i=>i===0?8:13+i,Ol=[[0,0],[0,1],[0,6],[0,9],[5,0],[2,0],[3,0],[7,0],[8,0],[0,10],[9,0],[11,0]],Bl=["0","6",5,6,"6",4,7,7,8,10,"6",11],Fl=[0,1,1,2,1,1,2,2,2,3,9,9];function kl(i,t){let e=Bl[i],n=Fl[t],s=Number(e),r=Number(n);return typeof e!="string"?Number.isFinite(s)?s:0:r>0?r:Number.isFinite(s)?s:0}var Xi={hairColor:[nr,ir],eyebrowColor:[nr,ir],beardColor:[nr,ir],eyeColor:[Ll,Il],mouthColor:[Cl,zl,2],glassesColor:[Nl,Ul],faceColor:[Rl,i=>i]},ar={RCD:"rcd"},Ze=(i,t,e)=>{let n=0;for(let s=t;s<t+e;s++)n=n<<1|i[s>>3]>>7-(s&7)&1;return n},Tn=(i,t,e,n)=>{for(let s=0;s<e;s++){let r=t+s,o=n>>e-1-s&1,a=128>>(r&7);i[r>>3]=i[r>>3]&~a|(o?a:0)}};function sr(i,t){let e="";for(let n=0;n<10;n++){let s=i[t+n*2]<<8|i[t+n*2+1];if(!s)break;e+=String.fromCharCode(s)}return e}function rr(i,t,e){for(let s=0;s<20;s++)i[t+s]=0;let n=Math.min(10,e.length);for(let s=0;s<n;s++){let r=e.charCodeAt(s);i[t+s*2]=r>>8,i[t+s*2+1]=r&255}}var Zi=class i{constructor(t){this.raw=t,this.ff=0,this.mk=0,this.featDirty=!1,[this.ff,this.mk]=Ol[Ze(t,262,4)],this.permCopying=void 0}static fromBytes(t){if(t instanceof Uint8Array||(t=new Uint8Array(t)),t.length<74)throw new Error("Could not find any decodeable formats: ");let e=t.slice(0,74);for(let[s,[r,o]]of Object.entries(En)){if(s==="mingleBit")continue;let a=Si[s];if(!a)continue;let c=Ze(e,r,o);if(c<a[0]||c>a[1])throw new Error("Could not find any decodeable formats: ")}if(Ze(e,391,1))throw new Error("Could not find any decodeable formats: ");let n=Ze(e,192,3);for(let s of Pl)Tn(e,s,1,0);Tn(e,192,3,n===2?2:n===6?6:4);for(let s of[2,54]){let r=sr(e,s);rr(e,s,r)}return new i(e)}_chk(t,e){let n=Si[t];if(n&&(!Number.isInteger(e)||e<n[0]||e>n[1]))throw new RangeError(t+" out of range: "+e)}get(t){let e=this.raw;t=String(t);let n=t.lastIndexOf(".");if((t.startsWith("general.")||t.startsWith("meta.")||t.startsWith("perms."))&&(t=t.slice(n+1)),t==="name")return sr(e,2);if(t==="creatorName")return sr(e,54);if(t==="mingle")return!Ze(e,269,1);if(t==="copying")return this.permCopying;if(t==="faceFeature")return this.ff;if(t==="makeup")return this.mk;if(t==="mole.on"&&(t="moleOn"),t==="eyebrowYPosition")return Ze(e,311,5)-3;let s=En[t];if(!s)return;let r=Ze(e,s[0],s[1]);return Xi[t]?Xi[t][1](r):t==="hairFlipped"||t==="moleOn"||t==="favorited"?!!r:r}set(t,e){let n=this.raw;if(t=String(t),(t.startsWith("general.")||t.startsWith("meta.")||t.startsWith("perms."))&&(t=t.slice(t.lastIndexOf(".")+1)),t==="name"){rr(n,2,String(e));return}if(t==="creatorName"){rr(n,54,String(e));return}if(t==="mingle"){Tn(n,269,1,e?0:1);return}if(t==="copying"){this.permCopying=!!e;return}if(t==="faceFeature"){this.ff=Number(e),this._chk("feature",this.ff),this._syncFeat();return}if(t==="makeup"){this.mk=Number(e),this._chk("feature",this.mk),this._syncFeat();return}if(t==="mole.on"&&(t="moleOn"),t==="eyebrowYPosition"){let o=Number(e)+3;this._chk("eyebrowY",o),Tn(n,311,5,o);return}let s=En[t];if(!s)return;let r=e;if(typeof r=="boolean"?r=r?1:0:r=Number(r),Xi[t]){let[o,,a]=Xi[t],c=o[r];if(c===void 0)throw new RangeError(t+" out of range");a!==void 0&&c>a&&(c=0),r=c}this._chk(t,r),Tn(n,s[0],s[1],r)}_syncFeat(){Tn(this.raw,262,4,kl(this.ff,this.mk))}bytes(){let t=this.raw.slice();return Ze(t,192,3)===2&&Tn(t,269,1,1),t}params(){let t=n=>Ze(this.raw,En[n][0],En[n][1]),e={};return e.gender=t("gender"),e.favColor=t("favoriteColor"),e.height=t("height"),e.weight=t("weight"),e.faceType=t("faceType"),e.faceColor=t("faceColor"),e.feature=t("feature"),e.hairType=t("hairType"),e.hairColor=t("hairColor"),e.hairFlip=t("hairFlipped"),e.browType=t("eyebrowType"),e.browRot=t("eyebrowRotation"),e.browColor=t("eyebrowColor"),e.browSize=t("eyebrowSize"),e.browY=t("eyebrowY"),e.browDist=t("eyebrowDistanceApart"),e.eyeType=t("eyeType"),e.eyeRot=t("eyeRotation"),e.eyeY=t("eyeYPosition"),e.eyeColor=t("eyeColor"),e.eyeSize=t("eyeSize"),e.eyeDist=t("eyeDistanceApart"),e.noseType=t("noseType"),e.noseSize=t("noseSize"),e.noseY=t("noseYPosition"),e.mouthType=t("mouthType"),e.mouthColor=t("mouthColor"),e.mouthSize=t("mouthSize"),e.mouthY=t("mouthYPosition"),e.glassType=t("glassesType"),e.glassColor=t("glassesColor"),e.glassSize=t("glassesSize"),e.glassY=t("glassesYPosition"),e.mustType=t("mustacheType"),e.beardType=t("beardType"),e.beardColor=t("beardColor"),e.mustSize=t("mustacheSize"),e.mustY=t("mustacheYPosition"),e.moleOn=t("moleOn"),e.moleSize=t("moleSize"),e.moleY=t("moleYPosition"),e.moleX=t("moleXPosition"),e}};var Hl=0,Ka=1,ql=2;var pc=1,Gl=2,rn=3,xn=0,De=1,re=2;var gn=0,hi=1,Va=2,Ya=3,ja=4,Wl=5,Rn=100,Ql=101,Kl=102,Ja=103,Xa=104,Vl=200,Yl=201,jl=202,Jl=203,Br=204,Fr=205,Xl=206,Zl=207,$l=208,th=209,eh=210,nh=211,ih=212,sh=213,rh=214,ah=0,oh=1,ch=2,_s=3,lh=4,hh=5,uh=6,dh=7,mc=0,Ah=1,fh=2,yn=0,ph=1,mh=2,gh=3,yh=4,xh=5,Mh=6;var gc=300,Ai=301,fi=302,kr=303,Hr=304,Qs=306,Ri=1e3,ke=1001,pi=1002,pe=1003,Za=1004;var or=1005;var Se=1006,vh=1007;var Ii=1008;var je=1009,_h=1010,wh=1011,xa=1012,yc=1013,pn=1014,mn=1015,zi=1016,xc=1017,Mc=1018,zn=1020,bh=1021,Ne=1023,Sh=1024,Th=1025,Un=1026,mi=1027,Eh=1028,vc=1029,Dh=1030,_c=1031,wc=1033,cr=33776,lr=33777,hr=33778,ur=33779,$a=35840,to=35841,eo=35842,no=35843,bc=36196,io=37492,so=37496,ro=37808,ao=37809,oo=37810,co=37811,lo=37812,ho=37813,uo=37814,Ao=37815,fo=37816,po=37817,mo=37818,go=37819,yo=37820,xo=37821,dr=36492,Mo=36494,vo=36495,Ph=36283,_o=36284,wo=36285,bo=36286;var ws=2300,bs=2301,Ar=2302,So=2400,To=2401,Eo=2402;var Sc=3e3,On=3001,Lh=3200,Ch=3201,Tc=0,Nh=1,fe="",me="srgb",qe="srgb-linear",Ma="display-p3",Ks="display-p3-linear",Ss="linear",Jt="srgb",Ts="rec709",Es="p3";var Qn=7680;var Do=519,Rh=512,Ih=513,zh=514,Ec=515,Uh=516,Oh=517,Bh=518,Fh=519,Po=35044;var Lo="300 es",qr=1035,on=2e3,Ds=2001,Mn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var fr=Math.PI/180,Gr=180/Math.PI;function Hi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xe[i&255]+xe[i>>8&255]+xe[i>>16&255]+xe[i>>24&255]+"-"+xe[t&255]+xe[t>>8&255]+"-"+xe[t>>16&15|64]+xe[t>>24&255]+"-"+xe[e&63|128]+xe[e>>8&255]+"-"+xe[e>>16&255]+xe[e>>24&255]+xe[n&255]+xe[n>>8&255]+xe[n>>16&255]+xe[n>>24&255]).toLowerCase()}function Ee(i,t,e){return Math.max(t,Math.min(e,i))}function kh(i,t){return(i%t+t)%t}function pr(i,t,e){return(1-e)*i+e*t}function Co(i){return(i&i-1)===0&&i!==0}function Wr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ti(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Qt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ut=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],A=n[2],p=n[5],g=n[8],x=s[0],f=s[3],u=s[6],v=s[1],m=s[4],w=s[7],D=s[2],E=s[5],T=s[8];return r[0]=o*x+a*v+c*D,r[3]=o*f+a*m+c*E,r[6]=o*u+a*w+c*T,r[1]=l*x+h*v+d*D,r[4]=l*f+h*m+d*E,r[7]=l*u+h*w+d*T,r[2]=A*x+p*v+g*D,r[5]=A*f+p*m+g*E,r[8]=A*u+p*w+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,A=a*c-h*r,p=l*r-o*c,g=e*d+n*A+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=A*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=p*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(mr.makeScale(t,e)),this}rotate(t){return this.premultiply(mr.makeRotation(-t)),this}translate(t,e){return this.premultiply(mr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},mr=new Ut;function Dc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ps(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hh(){let i=Ps("canvas");return i.style.display="block",i}var No={};function Ci(i){i in No||(No[i]=!0,console.warn(i))}var Ro=new Ut().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Io=new Ut().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$i={[qe]:{transfer:Ss,primaries:Ts,toReference:i=>i,fromReference:i=>i},[me]:{transfer:Jt,primaries:Ts,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ks]:{transfer:Ss,primaries:Es,toReference:i=>i.applyMatrix3(Io),fromReference:i=>i.applyMatrix3(Ro)},[Ma]:{transfer:Jt,primaries:Es,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Io),fromReference:i=>i.applyMatrix3(Ro).convertLinearToSRGB()}},qh=new Set([qe,Ks]),Kt={enabled:!0,_workingColorSpace:qe,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!qh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=$i[t].toReference,s=$i[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return $i[i].primaries},getTransfer:function(i){return i===fe?Ss:$i[i].transfer}};function ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Kn,Ls=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Kn===void 0&&(Kn=Ps("canvas")),Kn.width=t.width,Kn.height=t.height;let n=Kn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Kn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ps("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ui(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ui(e[n]/255)*255):e[n]=ui(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Gh=0,Cs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=Hi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(yr(s[o].image)):r.push(yr(s[o]))}else r=yr(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function yr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ls.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Wh=0,Re=class i extends Mn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ke,s=ke,r=Se,o=Ii,a=Ne,c=je,l=i.DEFAULT_ANISOTROPY,h=fe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=Hi(),this.name="",this.source=new Cs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Qt(0,0),this.repeat=new Qt(1,1),this.center=new Qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ci("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===On?me:fe),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ri:t.x=t.x-Math.floor(t.x);break;case ke:t.x=t.x<0?0:1;break;case pi:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ri:t.y=t.y-Math.floor(t.y);break;case ke:t.y=t.y<0?0:1;break;case pi:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ci("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===me?On:Sc}set encoding(t){Ci("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===On?me:fe}};Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=gc;Re.DEFAULT_ANISOTROPY=1;var ge=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],A=c[1],p=c[5],g=c[9],x=c[2],f=c[6],u=c[10];if(Math.abs(h-A)<.01&&Math.abs(d-x)<.01&&Math.abs(g-f)<.01){if(Math.abs(h+A)<.1&&Math.abs(d+x)<.1&&Math.abs(g+f)<.1&&Math.abs(l+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let m=(l+1)/2,w=(p+1)/2,D=(u+1)/2,E=(h+A)/4,T=(d+x)/4,F=(g+f)/4;return m>w&&m>D?m<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(m),s=E/n,r=T/n):w>D?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=E/s,r=F/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=T/r,s=F/r),this.set(n,s,r,e),this}let v=Math.sqrt((f-g)*(f-g)+(d-x)*(d-x)+(A-h)*(A-h));return Math.abs(v)<.001&&(v=1),this.x=(f-g)/v,this.y=(d-x)/v,this.z=(A-h)/v,this.w=Math.acos((l+p+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qr=class extends Mn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(Ci("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===On?me:fe),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Se,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Re(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Cs(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},cn=class extends Qr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ns=class extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pe,this.minFilter=pe,this.wrapR=ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kr=class extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pe,this.minFilter=pe,this.wrapR=ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ge=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],A=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=A,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(d!==x||c!==A||l!==p||h!==g){let f=1-a,u=c*A+l*p+h*g+d*x,v=u>=0?1:-1,m=1-u*u;if(m>Number.EPSILON){let D=Math.sqrt(m),E=Math.atan2(D,u*v);f=Math.sin(f*E)/D,a=Math.sin(a*E)/D}let w=a*v;if(c=c*f+A*w,l=l*f+p*w,h=h*f+g*w,d=d*f+x*w,f===1-a){let D=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=D,l*=D,h*=D,d*=D}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],A=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*d+c*p-l*A,t[e+1]=c*g+h*A+l*d-a*p,t[e+2]=l*g+h*p+a*A-c*d,t[e+3]=h*g-a*d-c*A-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),A=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=A*h*d+l*p*g,this._y=l*p*d-A*h*g,this._z=l*h*g+A*p*d,this._w=l*h*d-A*p*g;break;case"YXZ":this._x=A*h*d+l*p*g,this._y=l*p*d-A*h*g,this._z=l*h*g-A*p*d,this._w=l*h*d+A*p*g;break;case"ZXY":this._x=A*h*d-l*p*g,this._y=l*p*d+A*h*g,this._z=l*h*g+A*p*d,this._w=l*h*d-A*p*g;break;case"ZYX":this._x=A*h*d-l*p*g,this._y=l*p*d+A*h*g,this._z=l*h*g-A*p*d,this._w=l*h*d+A*p*g;break;case"YZX":this._x=A*h*d+l*p*g,this._y=l*p*d+A*h*g,this._z=l*h*g-A*p*d,this._w=l*h*d-A*p*g;break;case"XZY":this._x=A*h*d-l*p*g,this._y=l*p*d-A*h*g,this._z=l*h*g+A*p*d,this._w=l*h*d+A*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],A=n+a+d;if(A>0){let p=.5/Math.sqrt(A+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>d){let p=2*Math.sqrt(1+n-a-d);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>d){let p=2*Math.sqrt(1+a-n-d);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,A=Math.sin(e*h)/l;return this._w=o*d+this._w*A,this._x=n*d+this._x*A,this._y=s*d+this._y*A,this._z=r*d+this._z*A,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zo.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xr.copy(this).projectOnVector(t),this.sub(xr)}reflect(t){return this.sub(xr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xr=new R,zo=new Ge,Bn=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Oe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Oe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Oe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Oe):Oe.fromBufferAttribute(r,o),Oe.applyMatrix4(t.matrixWorld),this.expandByPoint(Oe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ts.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ts.copy(n.boundingBox)),ts.applyMatrix4(t.matrixWorld),this.union(ts)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Oe),Oe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ei),es.subVectors(this.max,Ei),Vn.subVectors(t.a,Ei),Yn.subVectors(t.b,Ei),jn.subVectors(t.c,Ei),hn.subVectors(Yn,Vn),un.subVectors(jn,Yn),Dn.subVectors(Vn,jn);let e=[0,-hn.z,hn.y,0,-un.z,un.y,0,-Dn.z,Dn.y,hn.z,0,-hn.x,un.z,0,-un.x,Dn.z,0,-Dn.x,-hn.y,hn.x,0,-un.y,un.x,0,-Dn.y,Dn.x,0];return!Mr(e,Vn,Yn,jn,es)||(e=[1,0,0,0,1,0,0,0,1],!Mr(e,Vn,Yn,jn,es))?!1:(ns.crossVectors(hn,un),e=[ns.x,ns.y,ns.z],Mr(e,Vn,Yn,jn,es))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Oe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Oe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($e[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$e[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$e[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$e[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$e[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$e[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$e[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$e[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($e),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},$e=[new R,new R,new R,new R,new R,new R,new R,new R],Oe=new R,ts=new Bn,Vn=new R,Yn=new R,jn=new R,hn=new R,un=new R,Dn=new R,Ei=new R,es=new R,ns=new R,Pn=new R;function Mr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Pn.fromArray(i,r);let a=s.x*Math.abs(Pn.x)+s.y*Math.abs(Pn.y)+s.z*Math.abs(Pn.z),c=t.dot(Pn),l=e.dot(Pn),h=n.dot(Pn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Qh=new Bn,Di=new R,vr=new R,Ui=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Qh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Di.subVectors(t,this.center);let e=Di.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Di,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Di.copy(t.center).add(vr)),this.expandByPoint(Di.copy(t.center).sub(vr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},tn=new R,_r=new R,is=new R,dn=new R,wr=new R,ss=new R,br=new R,Vr=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(tn.copy(this.origin).addScaledVector(this.direction,e),tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){_r.copy(t).add(e).multiplyScalar(.5),is.copy(e).sub(t).normalize(),dn.copy(this.origin).sub(_r);let r=t.distanceTo(e)*.5,o=-this.direction.dot(is),a=dn.dot(this.direction),c=-dn.dot(is),l=dn.lengthSq(),h=Math.abs(1-o*o),d,A,p,g;if(h>0)if(d=o*c-a,A=o*a-c,g=r*h,d>=0)if(A>=-g)if(A<=g){let x=1/h;d*=x,A*=x,p=d*(d+o*A+2*a)+A*(o*d+A+2*c)+l}else A=r,d=Math.max(0,-(o*A+a)),p=-d*d+A*(A+2*c)+l;else A=-r,d=Math.max(0,-(o*A+a)),p=-d*d+A*(A+2*c)+l;else A<=-g?(d=Math.max(0,-(-o*r+a)),A=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+A*(A+2*c)+l):A<=g?(d=0,A=Math.min(Math.max(-r,-c),r),p=A*(A+2*c)+l):(d=Math.max(0,-(o*r+a)),A=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+A*(A+2*c)+l);else A=o>0?-r:r,d=Math.max(0,-(o*A+a)),p=-d*d+A*(A+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(_r).addScaledVector(is,A),p}intersectSphere(t,e){tn.subVectors(t.center,this.origin);let n=tn.dot(this.direction),s=tn.dot(tn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,A=this.origin;return l>=0?(n=(t.min.x-A.x)*l,s=(t.max.x-A.x)*l):(n=(t.max.x-A.x)*l,s=(t.min.x-A.x)*l),h>=0?(r=(t.min.y-A.y)*h,o=(t.max.y-A.y)*h):(r=(t.max.y-A.y)*h,o=(t.min.y-A.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-A.z)*d,c=(t.max.z-A.z)*d):(a=(t.max.z-A.z)*d,c=(t.min.z-A.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,tn)!==null}intersectTriangle(t,e,n,s,r){wr.subVectors(e,t),ss.subVectors(n,t),br.crossVectors(wr,ss);let o=this.direction.dot(br),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;dn.subVectors(this.origin,t);let c=a*this.direction.dot(ss.crossVectors(dn,ss));if(c<0)return null;let l=a*this.direction.dot(wr.cross(dn));if(l<0||c+l>o)return null;let h=-a*dn.dot(br);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$t=class i{constructor(t,e,n,s,r,o,a,c,l,h,d,A,p,g,x,f){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,d,A,p,g,x,f)}set(t,e,n,s,r,o,a,c,l,h,d,A,p,g,x,f){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=A,u[3]=p,u[7]=g,u[11]=x,u[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Jn.setFromMatrixColumn(t,0).length(),r=1/Jn.setFromMatrixColumn(t,1).length(),o=1/Jn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let A=o*h,p=o*d,g=a*h,x=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=p+g*l,e[5]=A-x*l,e[9]=-a*c,e[2]=x-A*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){let A=c*h,p=c*d,g=l*h,x=l*d;e[0]=A+x*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=x+A*a,e[10]=o*c}else if(t.order==="ZXY"){let A=c*h,p=c*d,g=l*h,x=l*d;e[0]=A-x*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=x-A*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let A=o*h,p=o*d,g=a*h,x=a*d;e[0]=c*h,e[4]=g*l-p,e[8]=A*l+x,e[1]=c*d,e[5]=x*l+A,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let A=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-A*d,e[8]=g*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*d+g,e[10]=A-x*d}else if(t.order==="XZY"){let A=o*c,p=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=A*d+x,e[5]=o*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*h,e[10]=x*d+A}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kh,t,Vh)}lookAt(t,e,n){let s=this.elements;return Le.subVectors(t,e),Le.lengthSq()===0&&(Le.z=1),Le.normalize(),An.crossVectors(n,Le),An.lengthSq()===0&&(Math.abs(n.z)===1?Le.x+=1e-4:Le.z+=1e-4,Le.normalize(),An.crossVectors(n,Le)),An.normalize(),rs.crossVectors(Le,An),s[0]=An.x,s[4]=rs.x,s[8]=Le.x,s[1]=An.y,s[5]=rs.y,s[9]=Le.y,s[2]=An.z,s[6]=rs.z,s[10]=Le.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],A=n[9],p=n[13],g=n[2],x=n[6],f=n[10],u=n[14],v=n[3],m=n[7],w=n[11],D=n[15],E=s[0],T=s[4],F=s[8],_=s[12],S=s[1],O=s[5],Y=s[9],it=s[13],C=s[2],N=s[6],W=s[10],J=s[14],K=s[3],Q=s[7],X=s[11],$=s[15];return r[0]=o*E+a*S+c*C+l*K,r[4]=o*T+a*O+c*N+l*Q,r[8]=o*F+a*Y+c*W+l*X,r[12]=o*_+a*it+c*J+l*$,r[1]=h*E+d*S+A*C+p*K,r[5]=h*T+d*O+A*N+p*Q,r[9]=h*F+d*Y+A*W+p*X,r[13]=h*_+d*it+A*J+p*$,r[2]=g*E+x*S+f*C+u*K,r[6]=g*T+x*O+f*N+u*Q,r[10]=g*F+x*Y+f*W+u*X,r[14]=g*_+x*it+f*J+u*$,r[3]=v*E+m*S+w*C+D*K,r[7]=v*T+m*O+w*N+D*Q,r[11]=v*F+m*Y+w*W+D*X,r[15]=v*_+m*it+w*J+D*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],A=t[10],p=t[14],g=t[3],x=t[7],f=t[11],u=t[15];return g*(+r*c*d-s*l*d-r*a*A+n*l*A+s*a*p-n*c*p)+x*(+e*c*p-e*l*A+r*o*A-s*o*p+s*l*h-r*c*h)+f*(+e*l*d-e*a*p-r*o*d+n*o*p+r*a*h-n*l*h)+u*(-s*a*h-e*c*d+e*a*A+s*o*d-n*o*A+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],A=t[10],p=t[11],g=t[12],x=t[13],f=t[14],u=t[15],v=d*f*l-x*A*l+x*c*p-a*f*p-d*c*u+a*A*u,m=g*A*l-h*f*l-g*c*p+o*f*p+h*c*u-o*A*u,w=h*x*l-g*d*l+g*a*p-o*x*p-h*a*u+o*d*u,D=g*d*c-h*x*c-g*a*A+o*x*A+h*a*f-o*d*f,E=e*v+n*m+s*w+r*D;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return t[0]=v*T,t[1]=(x*A*r-d*f*r-x*s*p+n*f*p+d*s*u-n*A*u)*T,t[2]=(a*f*r-x*c*r+x*s*l-n*f*l-a*s*u+n*c*u)*T,t[3]=(d*c*r-a*A*r-d*s*l+n*A*l+a*s*p-n*c*p)*T,t[4]=m*T,t[5]=(h*f*r-g*A*r+g*s*p-e*f*p-h*s*u+e*A*u)*T,t[6]=(g*c*r-o*f*r-g*s*l+e*f*l+o*s*u-e*c*u)*T,t[7]=(o*A*r-h*c*r+h*s*l-e*A*l-o*s*p+e*c*p)*T,t[8]=w*T,t[9]=(g*d*r-h*x*r-g*n*p+e*x*p+h*n*u-e*d*u)*T,t[10]=(o*x*r-g*a*r+g*n*l-e*x*l-o*n*u+e*a*u)*T,t[11]=(h*a*r-o*d*r-h*n*l+e*d*l+o*n*p-e*a*p)*T,t[12]=D*T,t[13]=(h*x*s-g*d*s+g*n*A-e*x*A-h*n*f+e*d*f)*T,t[14]=(g*a*s-o*x*s-g*n*c+e*x*c+o*n*f-e*a*f)*T,t[15]=(o*d*s-h*a*s+h*n*c-e*d*c-o*n*A+e*a*A)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,A=r*l,p=r*h,g=r*d,x=o*h,f=o*d,u=a*d,v=c*l,m=c*h,w=c*d,D=n.x,E=n.y,T=n.z;return s[0]=(1-(x+u))*D,s[1]=(p+w)*D,s[2]=(g-m)*D,s[3]=0,s[4]=(p-w)*E,s[5]=(1-(A+u))*E,s[6]=(f+v)*E,s[7]=0,s[8]=(g+m)*T,s[9]=(f-v)*T,s[10]=(1-(A+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Jn.set(s[0],s[1],s[2]).length(),o=Jn.set(s[4],s[5],s[6]).length(),a=Jn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Be.copy(this);let l=1/r,h=1/o,d=1/a;return Be.elements[0]*=l,Be.elements[1]*=l,Be.elements[2]*=l,Be.elements[4]*=h,Be.elements[5]*=h,Be.elements[6]*=h,Be.elements[8]*=d,Be.elements[9]*=d,Be.elements[10]*=d,e.setFromRotationMatrix(Be),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=on){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),A=(n+s)/(n-s),p,g;if(a===on)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ds)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=A,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=on){let c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(o-r),A=(e+t)*l,p=(n+s)*h,g,x;if(a===on)g=(o+r)*d,x=-2*d;else if(a===Ds)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-A,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Jn=new R,Be=new $t,Kh=new R(0,0,0),Vh=new R(1,1,1),An=new R,rs=new R,Le=new R,Uo=new $t,Oo=new Ge,Rs=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],A=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(A,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(A,-1,1)),Math.abs(A)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(A,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ee(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(A,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Uo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Oo.setFromEuler(this),this.setFromQuaternion(Oo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rs.DEFAULT_ORDER="XYZ";var Is=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Yh=0,Bo=new R,Xn=new Ge,en=new $t,as=new R,Pi=new R,jh=new R,Jh=new Ge,Fo=new R(1,0,0),ko=new R(0,1,0),Ho=new R(0,0,1),Xh={type:"added"},Zh={type:"removed"},We=class i extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new Rs,n=new Ge,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $t},normalMatrix:{value:new Ut}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Is,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xn.setFromAxisAngle(t,e),this.quaternion.multiply(Xn),this}rotateOnWorldAxis(t,e){return Xn.setFromAxisAngle(t,e),this.quaternion.premultiply(Xn),this}rotateX(t){return this.rotateOnAxis(Fo,t)}rotateY(t){return this.rotateOnAxis(ko,t)}rotateZ(t){return this.rotateOnAxis(Ho,t)}translateOnAxis(t,e){return Bo.copy(t).applyQuaternion(this.quaternion),this.position.add(Bo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fo,t)}translateY(t){return this.translateOnAxis(ko,t)}translateZ(t){return this.translateOnAxis(Ho,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?as.copy(t):as.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(Pi,as,this.up):en.lookAt(as,Pi,this.up),this.quaternion.setFromRotationMatrix(en),s&&(en.extractRotation(s.matrixWorld),Xn.setFromRotationMatrix(en),this.quaternion.premultiply(Xn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Xh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zh)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),en.multiply(t.parent.matrixWorld)),t.applyMatrix4(en),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,t,jh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,Jh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),A=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),A.length>0&&(n.skeletons=A),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};We.DEFAULT_UP=new R(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fe=new R,nn=new R,Sr=new R,sn=new R,Zn=new R,$n=new R,qo=new R,Tr=new R,Er=new R,Dr=new R,os=!1,oi=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Fe.subVectors(t,e),s.cross(Fe);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Fe.subVectors(s,e),nn.subVectors(n,e),Sr.subVectors(t,e);let o=Fe.dot(Fe),a=Fe.dot(nn),c=Fe.dot(Sr),l=nn.dot(nn),h=nn.dot(Sr),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let A=1/d,p=(l*c-a*h)*A,g=(o*h-a*c)*A;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,sn)===null?!1:sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getUV(t,e,n,s,r,o,a,c){return os===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),os=!0),this.getInterpolation(t,e,n,s,r,o,a,c)}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,sn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,sn.x),c.addScaledVector(o,sn.y),c.addScaledVector(a,sn.z),c)}static isFrontFacing(t,e,n,s){return Fe.subVectors(n,e),nn.subVectors(t,e),Fe.cross(nn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fe.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),Fe.cross(nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return os===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),os=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Zn.subVectors(s,n),$n.subVectors(r,n),Tr.subVectors(t,n);let c=Zn.dot(Tr),l=$n.dot(Tr);if(c<=0&&l<=0)return e.copy(n);Er.subVectors(t,s);let h=Zn.dot(Er),d=$n.dot(Er);if(h>=0&&d<=h)return e.copy(s);let A=c*d-h*l;if(A<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Zn,o);Dr.subVectors(t,r);let p=Zn.dot(Dr),g=$n.dot(Dr);if(g>=0&&p<=g)return e.copy(r);let x=p*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector($n,a);let f=h*g-p*d;if(f<=0&&d-h>=0&&p-g>=0)return qo.subVectors(r,s),a=(d-h)/(d-h+(p-g)),e.copy(s).addScaledVector(qo,a);let u=1/(f+x+A);return o=x*u,a=A*u,e.copy(n).addScaledVector(Zn,o).addScaledVector($n,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Pc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fn={h:0,s:0,l:0},cs={h:0,s:0,l:0};function Pr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Kt.workingColorSpace){if(t=kh(t,1),e=Ee(e,0,1),n=Ee(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Pr(o,r,t+1/3),this.g=Pr(o,r,t),this.b=Pr(o,r,t-1/3)}return Kt.toWorkingColorSpace(this,s),this}setStyle(t,e=me){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=me){let n=Pc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}copyLinearToSRGB(t){return this.r=gr(t.r),this.g=gr(t.g),this.b=gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=me){return Kt.fromWorkingColorSpace(Me.copy(this),t),Math.round(Ee(Me.r*255,0,255))*65536+Math.round(Ee(Me.g*255,0,255))*256+Math.round(Ee(Me.b*255,0,255))}getHexString(t=me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Me.copy(this),e);let n=Me.r,s=Me.g,r=Me.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=me){Kt.fromWorkingColorSpace(Me.copy(this),t);let e=Me.r,n=Me.g,s=Me.b;return t!==me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(fn),this.setHSL(fn.h+t,fn.s+e,fn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fn),t.getHSL(cs);let n=pr(fn.h,cs.h,e),s=pr(fn.s,cs.s,e),r=pr(fn.l,cs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Me=new qt;qt.NAMES=Pc;var $h=0,Fn=class extends Mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=hi,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Br,this.blendDst=Fr,this.blendEquation=Rn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Do,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hi&&(n.blending=this.blending),this.side!==xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Br&&(n.blendSrc=this.blendSrc),this.blendDst!==Fr&&(n.blendDst=this.blendDst),this.blendEquation!==Rn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Do&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},zs=class extends Fn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ce=new R,ls=new Qt,te=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Po,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ls.fromBufferAttribute(this,e),ls.applyMatrix3(t),this.setXY(e,ls.x,ls.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix3(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix4(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyNormalMatrix(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.transformDirection(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ti(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ti(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ti(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ti(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ti(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array),r=Te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Po&&(t.usage=this.usage),t}};var Us=class extends te{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Os=class extends te{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var He=class extends te{constructor(t,e,n){super(new Float32Array(t),e,n)}};var tu=0,Ue=new $t,Lr=new We,ti=new R,Ce=new Bn,Li=new Bn,Ae=new R,Ie=class i extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dc(t)?Os:Us)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ue.makeRotationFromQuaternion(t),this.applyMatrix4(Ue),this}rotateX(t){return Ue.makeRotationX(t),this.applyMatrix4(Ue),this}rotateY(t){return Ue.makeRotationY(t),this.applyMatrix4(Ue),this}rotateZ(t){return Ue.makeRotationZ(t),this.applyMatrix4(Ue),this}translate(t,e,n){return Ue.makeTranslation(t,e,n),this.applyMatrix4(Ue),this}scale(t,e,n){return Ue.makeScale(t,e,n),this.applyMatrix4(Ue),this}lookAt(t){return Lr.lookAt(t),Lr.updateMatrix(),this.applyMatrix4(Lr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ti).negate(),this.translate(ti.x,ti.y,ti.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new He(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ce.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,Ce.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,Ce.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(Ce.min),this.boundingBox.expandByPoint(Ce.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(Ce.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Li.setFromBufferAttribute(a),this.morphTargetsRelative?(Ae.addVectors(Ce.min,Li.min),Ce.expandByPoint(Ae),Ae.addVectors(Ce.max,Li.max),Ce.expandByPoint(Ae)):(Ce.expandByPoint(Li.min),Ce.expandByPoint(Li.max))}Ce.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ae.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ae));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ae.fromBufferAttribute(a,l),c&&(ti.fromBufferAttribute(t,l),Ae.add(ti)),s=Math.max(s,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new te(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let S=0;S<a;S++)l[S]=new R,h[S]=new R;let d=new R,A=new R,p=new R,g=new Qt,x=new Qt,f=new Qt,u=new R,v=new R;function m(S,O,Y){d.fromArray(s,S*3),A.fromArray(s,O*3),p.fromArray(s,Y*3),g.fromArray(o,S*2),x.fromArray(o,O*2),f.fromArray(o,Y*2),A.sub(d),p.sub(d),x.sub(g),f.sub(g);let it=1/(x.x*f.y-f.x*x.y);isFinite(it)&&(u.copy(A).multiplyScalar(f.y).addScaledVector(p,-x.y).multiplyScalar(it),v.copy(p).multiplyScalar(x.x).addScaledVector(A,-f.x).multiplyScalar(it),l[S].add(u),l[O].add(u),l[Y].add(u),h[S].add(v),h[O].add(v),h[Y].add(v))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let S=0,O=w.length;S<O;++S){let Y=w[S],it=Y.start,C=Y.count;for(let N=it,W=it+C;N<W;N+=3)m(n[N+0],n[N+1],n[N+2])}let D=new R,E=new R,T=new R,F=new R;function _(S){T.fromArray(r,S*3),F.copy(T);let O=l[S];D.copy(O),D.sub(T.multiplyScalar(T.dot(O))).normalize(),E.crossVectors(F,O);let it=E.dot(h[S])<0?-1:1;c[S*4]=D.x,c[S*4+1]=D.y,c[S*4+2]=D.z,c[S*4+3]=it}for(let S=0,O=w.length;S<O;++S){let Y=w[S],it=Y.start,C=Y.count;for(let N=it,W=it+C;N<W;N+=3)_(n[N+0]),_(n[N+1]),_(n[N+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new te(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let A=0,p=n.count;A<p;A++)n.setXYZ(A,0,0,0);let s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,d=new R;if(t)for(let A=0,p=t.count;A<p;A+=3){let g=t.getX(A+0),x=t.getX(A+1),f=t.getX(A+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,f),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,f),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let A=0,p=e.count;A<p;A+=3)s.fromBufferAttribute(e,A+0),r.fromBufferAttribute(e,A+1),o.fromBufferAttribute(e,A+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(A+0,h.x,h.y,h.z),n.setXYZ(A+1,h.x,h.y,h.z),n.setXYZ(A+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,d=a.normalized,A=new l.constructor(c.length*h),p=0,g=0;for(let x=0,f=c.length;x<f;x++){a.isInterleavedBufferAttribute?p=c[x]*a.data.stride+a.offset:p=c[x]*h;for(let u=0;u<h;u++)A[g++]=l[p++]}return new te(A,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let A=l[h],p=t(A,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,A=l.length;d<A;d++){let p=l[d];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let A=0,p=d.length;A<p;A++)h.push(d[A].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Go=new $t,Ln=new Vr,hs=new Ui,Wo=new R,ei=new R,ni=new R,ii=new R,Cr=new R,us=new R,ds=new Qt,As=new Qt,fs=new Qt,Qo=new R,Ko=new R,Vo=new R,ps=new R,ms=new R,Wt=class extends We{constructor(t=new Ie,e=new zs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){us.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(Cr.fromBufferAttribute(d,t),o?us.addScaledVector(Cr,h):us.addScaledVector(Cr.sub(e),h))}e.add(us)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere),hs.applyMatrix4(r),Ln.copy(t.ray).recast(t.near),!(hs.containsPoint(Ln.origin)===!1&&(Ln.intersectSphere(hs,Wo)===null||Ln.origin.distanceToSquared(Wo)>(t.far-t.near)**2))&&(Go.copy(r).invert(),Ln.copy(t.ray).applyMatrix4(Go),!(n.boundingBox!==null&&Ln.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ln)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,A=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=A.length;g<x;g++){let f=A[g],u=o[f.materialIndex],v=Math.max(f.start,p.start),m=Math.min(a.count,Math.min(f.start+f.count,p.start+p.count));for(let w=v,D=m;w<D;w+=3){let E=a.getX(w),T=a.getX(w+1),F=a.getX(w+2);s=gs(this,u,t,n,l,h,d,E,T,F),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let f=g,u=x;f<u;f+=3){let v=a.getX(f),m=a.getX(f+1),w=a.getX(f+2);s=gs(this,o,t,n,l,h,d,v,m,w),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=A.length;g<x;g++){let f=A[g],u=o[f.materialIndex],v=Math.max(f.start,p.start),m=Math.min(c.count,Math.min(f.start+f.count,p.start+p.count));for(let w=v,D=m;w<D;w+=3){let E=w,T=w+1,F=w+2;s=gs(this,u,t,n,l,h,d,E,T,F),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let f=g,u=x;f<u;f+=3){let v=f,m=f+1,w=f+2;s=gs(this,o,t,n,l,h,d,v,m,w),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}};function eu(i,t,e,n,s,r,o,a){let c;if(t.side===De?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===xn,a),c===null)return null;ms.copy(a),ms.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ms);return l<e.near||l>e.far?null:{distance:l,point:ms.clone(),object:i}}function gs(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,ei),i.getVertexPosition(c,ni),i.getVertexPosition(l,ii);let h=eu(i,t,e,n,ei,ni,ii,ps);if(h){s&&(ds.fromBufferAttribute(s,a),As.fromBufferAttribute(s,c),fs.fromBufferAttribute(s,l),h.uv=oi.getInterpolation(ps,ei,ni,ii,ds,As,fs,new Qt)),r&&(ds.fromBufferAttribute(r,a),As.fromBufferAttribute(r,c),fs.fromBufferAttribute(r,l),h.uv1=oi.getInterpolation(ps,ei,ni,ii,ds,As,fs,new Qt),h.uv2=h.uv1),o&&(Qo.fromBufferAttribute(o,a),Ko.fromBufferAttribute(o,c),Vo.fromBufferAttribute(o,l),h.normal=oi.getInterpolation(ps,ei,ni,ii,Qo,Ko,Vo,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new R,materialIndex:0};oi.getNormal(ei,ni,ii,d.normal),h.face=d}return h}var Oi=class i extends Ie{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],A=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new He(l,3)),this.setAttribute("normal",new He(h,3)),this.setAttribute("uv",new He(d,2));function g(x,f,u,v,m,w,D,E,T,F,_){let S=w/T,O=D/F,Y=w/2,it=D/2,C=E/2,N=T+1,W=F+1,J=0,K=0,Q=new R;for(let X=0;X<W;X++){let $=X*O-it;for(let ct=0;ct<N;ct++){let q=ct*S-Y;Q[x]=q*v,Q[f]=$*m,Q[u]=C,l.push(Q.x,Q.y,Q.z),Q[x]=0,Q[f]=0,Q[u]=E>0?1:-1,h.push(Q.x,Q.y,Q.z),d.push(ct/T),d.push(1-X/F),J+=1}}for(let X=0;X<F;X++)for(let $=0;$<T;$++){let ct=A+$+N*X,q=A+$+N*(X+1),tt=A+($+1)+N*(X+1),lt=A+($+1)+N*X;c.push(ct,q,lt),c.push(q,tt,lt),K+=6}a.addGroup(p,K,_),p+=K,A+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function gi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function be(i){let t={};for(let e=0;e<i.length;e++){let n=gi(i[e]);for(let s in n)t[s]=n[s]}return t}function nu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Lc(i){return i.getRenderTarget()===null?i.outputColorSpace:Kt.workingColorSpace}var iu={clone:gi,merge:be},su=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ru=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ae=class extends Fn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=su,this.fragmentShader=ru,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gi(t.uniforms),this.uniformsGroups=nu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Bs=class extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=on}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ve=class extends Bs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Gr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gr*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(fr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},si=-90,ri=1,Yr=class extends We{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ve(si,ri,t,e);s.layers=this.layers,this.add(s);let r=new ve(si,ri,t,e);r.layers=this.layers,this.add(r);let o=new ve(si,ri,t,e);o.layers=this.layers,this.add(o);let a=new ve(si,ri,t,e);a.layers=this.layers,this.add(a);let c=new ve(si,ri,t,e);c.layers=this.layers,this.add(c);let l=new ve(si,ri,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===on)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),A=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,A,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Fs=class extends Re{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ai,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},jr=class extends cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(Ci("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===On?me:fe),this.texture=new Fs(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Se}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Oi(5,5,5),r=new ae({name:"CubemapFromEquirect",uniforms:gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:gn});r.uniforms.tEquirect.value=e;let o=new Wt(s,r),a=e.minFilter;return e.minFilter===Ii&&(e.minFilter=Se),new Yr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Nr=new R,au=new R,ou=new Ut,an=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Nr.subVectors(n,e).cross(au.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Nr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ou.getNormalMatrix(t),s=this.coplanarPoint(Nr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Cn=new Ui,ys=new R,ks=class{constructor(t=new an,e=new an,n=new an,s=new an,r=new an,o=new an){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=on){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],d=s[6],A=s[7],p=s[8],g=s[9],x=s[10],f=s[11],u=s[12],v=s[13],m=s[14],w=s[15];if(n[0].setComponents(c-r,A-l,f-p,w-u).normalize(),n[1].setComponents(c+r,A+l,f+p,w+u).normalize(),n[2].setComponents(c+o,A+h,f+g,w+v).normalize(),n[3].setComponents(c-o,A-h,f-g,w-v).normalize(),n[4].setComponents(c-a,A-d,f-x,w-m).normalize(),e===on)n[5].setComponents(c+a,A+d,f+x,w+m).normalize();else if(e===Ds)n[5].setComponents(a,d,x,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Cn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cn)}intersectsSprite(t){return Cn.center.set(0,0,0),Cn.radius=.7071067811865476,Cn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ys.x=s.normal.x>0?t.max.x:t.min.x,ys.y=s.normal.y>0?t.max.y:t.min.y,ys.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ys)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Cc(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function cu(i,t){let e=t.isWebGL2,n=new WeakMap;function s(l,h){let d=l.array,A=l.usage,p=d.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,d,A),l.onUploadCallback();let x;if(d instanceof Float32Array)x=i.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=i.SHORT;else if(d instanceof Uint32Array)x=i.UNSIGNED_INT;else if(d instanceof Int32Array)x=i.INT;else if(d instanceof Int8Array)x=i.BYTE;else if(d instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,h,d){let A=h.array,p=h._updateRange,g=h.updateRanges;if(i.bindBuffer(d,l),p.count===-1&&g.length===0&&i.bufferSubData(d,0,A),g.length!==0){for(let x=0,f=g.length;x<f;x++){let u=g[x];e?i.bufferSubData(d,u.start*A.BYTES_PER_ELEMENT,A,u.start,u.count):i.bufferSubData(d,u.start*A.BYTES_PER_ELEMENT,A.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}p.count!==-1&&(e?i.bufferSubData(d,p.offset*A.BYTES_PER_ELEMENT,A,p.offset,p.count):i.bufferSubData(d,p.offset*A.BYTES_PER_ELEMENT,A.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let A=n.get(l);(!A||A.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let d=n.get(l);if(d===void 0)n.set(l,s(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,l,h),d.version=l.version}}return{get:o,remove:a,update:c}}var Jr=class i extends Ie{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=t/a,A=e/c,p=[],g=[],x=[],f=[];for(let u=0;u<h;u++){let v=u*A-o;for(let m=0;m<l;m++){let w=m*d-r;g.push(w,-v,0),x.push(0,0,1),f.push(m/a),f.push(1-u/c)}}for(let u=0;u<c;u++)for(let v=0;v<a;v++){let m=v+l*u,w=v+l*(u+1),D=v+1+l*(u+1),E=v+1+l*u;p.push(m,w,E),p.push(w,D,E)}this.setIndex(p),this.setAttribute("position",new He(g,3)),this.setAttribute("normal",new He(x,3)),this.setAttribute("uv",new He(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},lu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,du=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Au=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,fu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,xu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_u=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Su=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Eu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Du=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Cu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Nu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ru=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Iu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ou=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fu="gl_FragColor = linearToOutputTexel( gl_FragColor );",ku=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Hu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ku=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ju=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ju=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$u=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,td=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ed=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,nd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,id=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ad=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,od=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ld=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ud=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ad=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,pd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,md=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Md=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_d=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,bd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Sd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Td=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ed=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ld=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Nd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Id=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ud=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Od=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Qd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Kd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$d=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,oA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,mA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_A=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,EA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,PA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,LA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,RA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,OA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zt={alphahash_fragment:lu,alphahash_pars_fragment:hu,alphamap_fragment:uu,alphamap_pars_fragment:du,alphatest_fragment:Au,alphatest_pars_fragment:fu,aomap_fragment:pu,aomap_pars_fragment:mu,batching_pars_vertex:gu,batching_vertex:yu,begin_vertex:xu,beginnormal_vertex:Mu,bsdfs:vu,iridescence_fragment:_u,bumpmap_pars_fragment:wu,clipping_planes_fragment:bu,clipping_planes_pars_fragment:Su,clipping_planes_pars_vertex:Tu,clipping_planes_vertex:Eu,color_fragment:Du,color_pars_fragment:Pu,color_pars_vertex:Lu,color_vertex:Cu,common:Nu,cube_uv_reflection_fragment:Ru,defaultnormal_vertex:Iu,displacementmap_pars_vertex:zu,displacementmap_vertex:Uu,emissivemap_fragment:Ou,emissivemap_pars_fragment:Bu,colorspace_fragment:Fu,colorspace_pars_fragment:ku,envmap_fragment:Hu,envmap_common_pars_fragment:qu,envmap_pars_fragment:Gu,envmap_pars_vertex:Wu,envmap_physical_pars_fragment:nd,envmap_vertex:Qu,fog_vertex:Ku,fog_pars_vertex:Vu,fog_fragment:Yu,fog_pars_fragment:ju,gradientmap_pars_fragment:Ju,lightmap_fragment:Xu,lightmap_pars_fragment:Zu,lights_lambert_fragment:$u,lights_lambert_pars_fragment:td,lights_pars_begin:ed,lights_toon_fragment:id,lights_toon_pars_fragment:sd,lights_phong_fragment:rd,lights_phong_pars_fragment:ad,lights_physical_fragment:od,lights_physical_pars_fragment:cd,lights_fragment_begin:ld,lights_fragment_maps:hd,lights_fragment_end:ud,logdepthbuf_fragment:dd,logdepthbuf_pars_fragment:Ad,logdepthbuf_pars_vertex:fd,logdepthbuf_vertex:pd,map_fragment:md,map_pars_fragment:gd,map_particle_fragment:yd,map_particle_pars_fragment:xd,metalnessmap_fragment:Md,metalnessmap_pars_fragment:vd,morphcolor_vertex:_d,morphnormal_vertex:wd,morphtarget_pars_vertex:bd,morphtarget_vertex:Sd,normal_fragment_begin:Td,normal_fragment_maps:Ed,normal_pars_fragment:Dd,normal_pars_vertex:Pd,normal_vertex:Ld,normalmap_pars_fragment:Cd,clearcoat_normal_fragment_begin:Nd,clearcoat_normal_fragment_maps:Rd,clearcoat_pars_fragment:Id,iridescence_pars_fragment:zd,opaque_fragment:Ud,packing:Od,premultiplied_alpha_fragment:Bd,project_vertex:Fd,dithering_fragment:kd,dithering_pars_fragment:Hd,roughnessmap_fragment:qd,roughnessmap_pars_fragment:Gd,shadowmap_pars_fragment:Wd,shadowmap_pars_vertex:Qd,shadowmap_vertex:Kd,shadowmask_pars_fragment:Vd,skinbase_vertex:Yd,skinning_pars_vertex:jd,skinning_vertex:Jd,skinnormal_vertex:Xd,specularmap_fragment:Zd,specularmap_pars_fragment:$d,tonemapping_fragment:tA,tonemapping_pars_fragment:eA,transmission_fragment:nA,transmission_pars_fragment:iA,uv_pars_fragment:sA,uv_pars_vertex:rA,uv_vertex:aA,worldpos_vertex:oA,background_vert:cA,background_frag:lA,backgroundCube_vert:hA,backgroundCube_frag:uA,cube_vert:dA,cube_frag:AA,depth_vert:fA,depth_frag:pA,distanceRGBA_vert:mA,distanceRGBA_frag:gA,equirect_vert:yA,equirect_frag:xA,linedashed_vert:MA,linedashed_frag:vA,meshbasic_vert:_A,meshbasic_frag:wA,meshlambert_vert:bA,meshlambert_frag:SA,meshmatcap_vert:TA,meshmatcap_frag:EA,meshnormal_vert:DA,meshnormal_frag:PA,meshphong_vert:LA,meshphong_frag:CA,meshphysical_vert:NA,meshphysical_frag:RA,meshtoon_vert:IA,meshtoon_frag:zA,points_vert:UA,points_frag:OA,shadow_vert:BA,shadow_frag:FA,sprite_vert:kA,sprite_frag:HA},at={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new Qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},Ve={basic:{uniforms:be([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:be([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new qt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:be([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:be([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:be([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new qt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:be([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:be([at.points,at.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:be([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:be([at.common,at.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:be([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:be([at.sprite,at.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:be([at.common,at.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:be([at.lights,at.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Ve.physical={uniforms:be([Ve.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new Qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new Qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new Qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};var xs={r:0,b:0,g:0};function qA(i,t,e,n,s,r,o){let a=new qt(0),c=r===!0?0:1,l,h,d=null,A=0,p=null;function g(f,u){let v=!1,m=u.isScene===!0?u.background:null;m&&m.isTexture&&(m=(u.backgroundBlurriness>0?e:t).get(m)),m===null?x(a,c):m&&m.isColor&&(x(m,1),v=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),m&&(m.isCubeTexture||m.mapping===Qs)?(h===void 0&&(h=new Wt(new Oi(1,1,1),new ae({name:"BackgroundCubeMaterial",uniforms:gi(Ve.backgroundCube.uniforms),vertexShader:Ve.backgroundCube.vertexShader,fragmentShader:Ve.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=m,h.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=Kt.getTransfer(m.colorSpace)!==Jt,(d!==m||A!==m.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=m,A=m.version,p=i.toneMapping),h.layers.enableAll(),f.unshift(h,h.geometry,h.material,0,0,null)):m&&m.isTexture&&(l===void 0&&(l=new Wt(new Jr(2,2),new ae({name:"BackgroundMaterial",uniforms:gi(Ve.background.uniforms),vertexShader:Ve.background.vertexShader,fragmentShader:Ve.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=m,l.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(m.colorSpace)!==Jt,m.matrixAutoUpdate===!0&&m.updateMatrix(),l.material.uniforms.uvTransform.value.copy(m.matrix),(d!==m||A!==m.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=m,A=m.version,p=i.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function x(f,u){f.getRGB(xs,Lc(i)),n.buffers.color.setClear(xs.r,xs.g,xs.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(f,u=1){a.set(f),c=u,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,x(a,c)},render:g}}function GA(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=f(null),l=c,h=!1;function d(C,N,W,J,K){let Q=!1;if(o){let X=x(J,W,N);l!==X&&(l=X,p(l.object)),Q=u(C,J,W,K),Q&&v(C,J,W,K)}else{let X=N.wireframe===!0;(l.geometry!==J.id||l.program!==W.id||l.wireframe!==X)&&(l.geometry=J.id,l.program=W.id,l.wireframe=X,Q=!0)}K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(Q||h)&&(h=!1,F(C,N,W,J),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function A(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(C){return n.isWebGL2?i.bindVertexArray(C):r.bindVertexArrayOES(C)}function g(C){return n.isWebGL2?i.deleteVertexArray(C):r.deleteVertexArrayOES(C)}function x(C,N,W){let J=W.wireframe===!0,K=a[C.id];K===void 0&&(K={},a[C.id]=K);let Q=K[N.id];Q===void 0&&(Q={},K[N.id]=Q);let X=Q[J];return X===void 0&&(X=f(A()),Q[J]=X),X}function f(C){let N=[],W=[],J=[];for(let K=0;K<s;K++)N[K]=0,W[K]=0,J[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:W,attributeDivisors:J,object:C,attributes:{},index:null}}function u(C,N,W,J){let K=l.attributes,Q=N.attributes,X=0,$=W.getAttributes();for(let ct in $)if($[ct].location>=0){let tt=K[ct],lt=Q[ct];if(lt===void 0&&(ct==="instanceMatrix"&&C.instanceMatrix&&(lt=C.instanceMatrix),ct==="instanceColor"&&C.instanceColor&&(lt=C.instanceColor)),tt===void 0||tt.attribute!==lt||lt&&tt.data!==lt.data)return!0;X++}return l.attributesNum!==X||l.index!==J}function v(C,N,W,J){let K={},Q=N.attributes,X=0,$=W.getAttributes();for(let ct in $)if($[ct].location>=0){let tt=Q[ct];tt===void 0&&(ct==="instanceMatrix"&&C.instanceMatrix&&(tt=C.instanceMatrix),ct==="instanceColor"&&C.instanceColor&&(tt=C.instanceColor));let lt={};lt.attribute=tt,tt&&tt.data&&(lt.data=tt.data),K[ct]=lt,X++}l.attributes=K,l.attributesNum=X,l.index=J}function m(){let C=l.newAttributes;for(let N=0,W=C.length;N<W;N++)C[N]=0}function w(C){D(C,0)}function D(C,N){let W=l.newAttributes,J=l.enabledAttributes,K=l.attributeDivisors;W[C]=1,J[C]===0&&(i.enableVertexAttribArray(C),J[C]=1),K[C]!==N&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,N),K[C]=N)}function E(){let C=l.newAttributes,N=l.enabledAttributes;for(let W=0,J=N.length;W<J;W++)N[W]!==C[W]&&(i.disableVertexAttribArray(W),N[W]=0)}function T(C,N,W,J,K,Q,X){X===!0?i.vertexAttribIPointer(C,N,W,K,Q):i.vertexAttribPointer(C,N,W,J,K,Q)}function F(C,N,W,J){if(n.isWebGL2===!1&&(C.isInstancedMesh||J.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;m();let K=J.attributes,Q=W.getAttributes(),X=N.defaultAttributeValues;for(let $ in Q){let ct=Q[$];if(ct.location>=0){let q=K[$];if(q===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(q=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(q=C.instanceColor)),q!==void 0){let tt=q.normalized,lt=q.itemSize,gt=e.get(q);if(gt===void 0)continue;let dt=gt.buffer,yt=gt.type,Dt=gt.bytesPerElement,vt=n.isWebGL2===!0&&(yt===i.INT||yt===i.UNSIGNED_INT||q.gpuType===yc);if(q.isInterleavedBufferAttribute){let Ot=q.data,z=Ot.stride,Xt=q.offset;if(Ot.isInstancedInterleavedBuffer){for(let xt=0;xt<ct.locationSize;xt++)D(ct.location+xt,Ot.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Ot.meshPerAttribute*Ot.count)}else for(let xt=0;xt<ct.locationSize;xt++)w(ct.location+xt);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let xt=0;xt<ct.locationSize;xt++)T(ct.location+xt,lt/ct.locationSize,yt,tt,z*Dt,(Xt+lt/ct.locationSize*xt)*Dt,vt)}else{if(q.isInstancedBufferAttribute){for(let Ot=0;Ot<ct.locationSize;Ot++)D(ct.location+Ot,q.meshPerAttribute);C.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Ot=0;Ot<ct.locationSize;Ot++)w(ct.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let Ot=0;Ot<ct.locationSize;Ot++)T(ct.location+Ot,lt/ct.locationSize,yt,tt,lt*Dt,lt/ct.locationSize*Ot*Dt,vt)}}else if(X!==void 0){let tt=X[$];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(ct.location,tt);break;case 3:i.vertexAttrib3fv(ct.location,tt);break;case 4:i.vertexAttrib4fv(ct.location,tt);break;default:i.vertexAttrib1fv(ct.location,tt)}}}}E()}function _(){Y();for(let C in a){let N=a[C];for(let W in N){let J=N[W];for(let K in J)g(J[K].object),delete J[K];delete N[W]}delete a[C]}}function S(C){if(a[C.id]===void 0)return;let N=a[C.id];for(let W in N){let J=N[W];for(let K in J)g(J[K].object),delete J[K];delete N[W]}delete a[C.id]}function O(C){for(let N in a){let W=a[N];if(W[C.id]===void 0)continue;let J=W[C.id];for(let K in J)g(J[K].object),delete J[K];delete W[C.id]}}function Y(){it(),h=!0,l!==c&&(l=c,p(l.object))}function it(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:it,dispose:_,releaseStatesOfGeometry:S,releaseStatesOfProgram:O,initAttributes:m,enableAttribute:w,disableUnusedAttributes:E}}function WA(i,t,e,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,d){i.drawArrays(r,h,d),e.update(d,r,1)}function c(h,d,A){if(A===0)return;let p,g;if(s)p=i,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,d,A),e.update(d,r,A)}function l(h,d,A){if(A===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<A;g++)this.render(h[g],d[g]);else{p.multiDrawArraysWEBGL(r,h,0,d,0,A);let g=0;for(let x=0;x<A;x++)g+=d[x];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function QA(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),m=A>0,w=o||t.has("OES_texture_float"),D=m&&w,E=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:A,maxTextureSize:p,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:f,maxVaryings:u,maxFragmentUniforms:v,vertexTextures:m,floatFragmentTextures:w,floatVertexTextures:D,maxSamples:E}}function KA(i){let t=this,e=null,n=0,s=!1,r=!1,o=new an,a=new Ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,A){let p=d.length!==0||A||n!==0||s;return s=A,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,A){e=h(d,A,0)},this.setState=function(d,A,p){let g=d.clippingPlanes,x=d.clipIntersection,f=d.clipShadows,u=i.get(d);if(!s||g===null||g.length===0||r&&!f)r?h(null):l();else{let v=r?0:n,m=v*4,w=u.clippingState||null;c.value=w,w=h(g,A,m,p);for(let D=0;D!==m;++D)w[D]=e[D];u.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,A,p,g){let x=d!==null?d.length:0,f=null;if(x!==0){if(f=c.value,g!==!0||f===null){let u=p+x*4,v=A.matrixWorldInverse;a.getNormalMatrix(v),(f===null||f.length<u)&&(f=new Float32Array(u));for(let m=0,w=p;m!==x;++m,w+=4)o.copy(d[m]).applyMatrix4(v,a),o.normal.toArray(f,w),f[w+3]=o.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,f}}function VA(i){let t=new WeakMap;function e(o,a){return a===kr?o.mapping=Ai:a===Hr&&(o.mapping=fi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===kr||a===Hr)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new jr(c.height/2);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Xr=class extends Bs{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ci=4,Yo=[.125,.215,.35,.446,.526,.582],In=20,Rr=new Xr,jo=new qt,Ir=null,zr=0,Ur=0,Nn=(1+Math.sqrt(5))/2,ai=1/Nn,Jo=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Nn,ai),new R(0,Nn,-ai),new R(ai,0,Nn),new R(-ai,0,Nn),new R(Nn,ai,0),new R(-Nn,ai,0)],Hs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ir=this._renderer.getRenderTarget(),zr=this._renderer.getActiveCubeFace(),Ur=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$o(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ir,zr,Ur),t.scissorTest=!1,Ms(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ai||t.mapping===fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ir=this._renderer.getRenderTarget(),zr=this._renderer.getActiveCubeFace(),Ur=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Se,minFilter:Se,generateMipmaps:!1,type:zi,format:Ne,colorSpace:qe,depthBuffer:!1},s=Xo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xo(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YA(r)),this._blurMaterial=jA(r,t,e)}return s}_compileMaterial(t){let e=new Wt(this._lodPlanes[0],t);this._renderer.compile(e,Rr)}_sceneToCubeUV(t,e,n,s){let a=new ve(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,A=h.toneMapping;h.getClearColor(jo),h.toneMapping=yn,h.autoClear=!1;let p=new zs({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),g=new Wt(new Oi,p),x=!1,f=t.background;f?f.isColor&&(p.color.copy(f),t.background=null,x=!0):(p.color.copy(jo),x=!0);for(let u=0;u<6;u++){let v=u%3;v===0?(a.up.set(0,c[u],0),a.lookAt(l[u],0,0)):v===1?(a.up.set(0,0,c[u]),a.lookAt(0,l[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,l[u]));let m=this._cubeSize;Ms(s,v*m,u>2?m:0,m,m),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=A,h.autoClear=d,t.background=f}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ai||t.mapping===fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$o()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zo());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Wt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Ms(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Rr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Jo[(s-1)%Jo.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Wt(this._lodPlanes[s],l),A=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*In-1),x=r/g,f=isFinite(r)?1+Math.floor(h*x):In;f>In&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${In}`);let u=[],v=0;for(let T=0;T<In;++T){let F=T/x,_=Math.exp(-F*F/2);u.push(_),T===0?v+=_:T<f&&(v+=2*_)}for(let T=0;T<u.length;T++)u[T]=u[T]/v;A.envMap.value=t.texture,A.samples.value=f,A.weights.value=u,A.latitudinal.value=o==="latitudinal",a&&(A.poleAxis.value=a);let{_lodMax:m}=this;A.dTheta.value=g,A.mipInt.value=m-n;let w=this._sizeLods[s],D=3*w*(s>m-ci?s-m+ci:0),E=4*(this._cubeSize-w);Ms(e,D,E,3*w,2*w),c.setRenderTarget(e),c.render(d,Rr)}};function YA(i){let t=[],e=[],n=[],s=i,r=i-ci+1+Yo.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ci?c=Yo[o-i+ci-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,d=1+l,A=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,x=3,f=2,u=1,v=new Float32Array(x*g*p),m=new Float32Array(f*g*p),w=new Float32Array(u*g*p);for(let E=0;E<p;E++){let T=E%3*2/3-1,F=E>2?0:-1,_=[T,F,0,T+2/3,F,0,T+2/3,F+1,0,T,F,0,T+2/3,F+1,0,T,F+1,0];v.set(_,x*g*E),m.set(A,f*g*E);let S=[E,E,E,E,E,E];w.set(S,u*g*E)}let D=new Ie;D.setAttribute("position",new te(v,x)),D.setAttribute("uv",new te(m,f)),D.setAttribute("faceIndex",new te(w,u)),t.push(D),s>ci&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Xo(i,t,e){let n=new cn(i,t,e);return n.texture.mapping=Qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ms(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function jA(i,t,e){let n=new Float32Array(In),s=new R(0,1,0);return new ae({name:"SphericalGaussianBlur",defines:{n:In,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Zo(){return new ae({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function $o(){return new ae({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function va(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function JA(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===kr||c===Hr,h=c===Ai||c===fi;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=t.get(a);return e===null&&(e=new Hs(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),t.set(a,d),d.texture}else{if(t.has(a))return t.get(a).texture;{let d=a.image;if(l&&d&&d.height>0||h&&d&&s(d)){e===null&&(e=new Hs(i));let A=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,A),a.addEventListener("dispose",r),A.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function XA(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ZA(i,t,e,n){let s={},r=new WeakMap;function o(d){let A=d.target;A.index!==null&&t.remove(A.index);for(let g in A.attributes)t.remove(A.attributes[g]);for(let g in A.morphAttributes){let x=A.morphAttributes[g];for(let f=0,u=x.length;f<u;f++)t.remove(x[f])}A.removeEventListener("dispose",o),delete s[A.id];let p=r.get(A);p&&(t.remove(p),r.delete(A)),n.releaseStatesOfGeometry(A),A.isInstancedBufferGeometry===!0&&delete A._maxInstanceCount,e.memory.geometries--}function a(d,A){return s[A.id]===!0||(A.addEventListener("dispose",o),s[A.id]=!0,e.memory.geometries++),A}function c(d){let A=d.attributes;for(let g in A)t.update(A[g],i.ARRAY_BUFFER);let p=d.morphAttributes;for(let g in p){let x=p[g];for(let f=0,u=x.length;f<u;f++)t.update(x[f],i.ARRAY_BUFFER)}}function l(d){let A=[],p=d.index,g=d.attributes.position,x=0;if(p!==null){let v=p.array;x=p.version;for(let m=0,w=v.length;m<w;m+=3){let D=v[m+0],E=v[m+1],T=v[m+2];A.push(D,E,E,T,T,D)}}else if(g!==void 0){let v=g.array;x=g.version;for(let m=0,w=v.length/3-1;m<w;m+=3){let D=m+0,E=m+1,T=m+2;A.push(D,E,E,T,T,D)}}else return;let f=new(Dc(A)?Os:Us)(A,1);f.version=x;let u=r.get(d);u&&t.remove(u),r.set(d,f)}function h(d){let A=r.get(d);if(A){let p=d.index;p!==null&&A.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function $A(i,t,e,n){let s=n.isWebGL2,r;function o(p){r=p}let a,c;function l(p){a=p.type,c=p.bytesPerElement}function h(p,g){i.drawElements(r,g,a,p*c),e.update(g,r,1)}function d(p,g,x){if(x===0)return;let f,u;if(s)f=i,u="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[u](r,g,a,p*c,x),e.update(g,r,x)}function A(p,g,x){if(x===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let u=0;u<x;u++)this.render(p[u]/c,g[u]);else{f.multiDrawElementsWEBGL(r,g,0,a,p,0,x);let u=0;for(let v=0;v<x;v++)u+=g[v];e.update(u,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=A}function tf(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ef(i,t){return i[0]-t[0]}function nf(i,t){return Math.abs(t[1])-Math.abs(i[1])}function sf(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new ge,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,d){let A=l.morphTargetInfluences;if(t.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,x=r.get(h);if(x===void 0||x.count!==g){let C=function(){Y.dispose(),r.delete(h),h.removeEventListener("dispose",C)};x!==void 0&&x.texture.dispose();let v=h.morphAttributes.position!==void 0,m=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,D=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],T=h.morphAttributes.color||[],F=0;v===!0&&(F=1),m===!0&&(F=2),w===!0&&(F=3);let _=h.attributes.position.count*F,S=1;_>t.maxTextureSize&&(S=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let O=new Float32Array(_*S*4*g),Y=new Ns(O,_,S,g);Y.type=mn,Y.needsUpdate=!0;let it=F*4;for(let N=0;N<g;N++){let W=D[N],J=E[N],K=T[N],Q=_*S*4*N;for(let X=0;X<W.count;X++){let $=X*it;v===!0&&(o.fromBufferAttribute(W,X),O[Q+$+0]=o.x,O[Q+$+1]=o.y,O[Q+$+2]=o.z,O[Q+$+3]=0),m===!0&&(o.fromBufferAttribute(J,X),O[Q+$+4]=o.x,O[Q+$+5]=o.y,O[Q+$+6]=o.z,O[Q+$+7]=0),w===!0&&(o.fromBufferAttribute(K,X),O[Q+$+8]=o.x,O[Q+$+9]=o.y,O[Q+$+10]=o.z,O[Q+$+11]=K.itemSize===4?o.w:1)}}x={count:g,texture:Y,size:new Qt(_,S)},r.set(h,x),h.addEventListener("dispose",C)}let f=0;for(let v=0;v<A.length;v++)f+=A[v];let u=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(i,"morphTargetBaseInfluence",u),d.getUniforms().setValue(i,"morphTargetInfluences",A),d.getUniforms().setValue(i,"morphTargetsTexture",x.texture,e),d.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let p=A===void 0?0:A.length,g=n[h.id];if(g===void 0||g.length!==p){g=[];for(let m=0;m<p;m++)g[m]=[m,0];n[h.id]=g}for(let m=0;m<p;m++){let w=g[m];w[0]=m,w[1]=A[m]}g.sort(nf);for(let m=0;m<8;m++)m<p&&g[m][1]?(a[m][0]=g[m][0],a[m][1]=g[m][1]):(a[m][0]=Number.MAX_SAFE_INTEGER,a[m][1]=0);a.sort(ef);let x=h.morphAttributes.position,f=h.morphAttributes.normal,u=0;for(let m=0;m<8;m++){let w=a[m],D=w[0],E=w[1];D!==Number.MAX_SAFE_INTEGER&&E?(x&&h.getAttribute("morphTarget"+m)!==x[D]&&h.setAttribute("morphTarget"+m,x[D]),f&&h.getAttribute("morphNormal"+m)!==f[D]&&h.setAttribute("morphNormal"+m,f[D]),s[m]=E,u+=E):(x&&h.hasAttribute("morphTarget"+m)===!0&&h.deleteAttribute("morphTarget"+m),f&&h.hasAttribute("morphNormal"+m)===!0&&h.deleteAttribute("morphNormal"+m),s[m]=0)}let v=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(i,"morphTargetBaseInfluence",v),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function rf(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let A=c.skeleton;s.get(A)!==l&&(A.update(),s.set(A,l))}return d}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var qs=class extends Re{constructor(t,e,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:Un,h!==Un&&h!==mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Un&&(n=pn),n===void 0&&h===mi&&(n=zn),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:pe,this.minFilter=c!==void 0?c:pe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Nc=new Re,Rc=new qs(1,1);Rc.compareFunction=Ec;var Ic=new Ns,zc=new Kr,Uc=new Fs,tc=[],ec=[],nc=new Float32Array(16),ic=new Float32Array(9),sc=new Float32Array(4);function xi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=tc[s];if(r===void 0&&(r=new Float32Array(s),tc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function le(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function he(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Vs(i,t){let e=ec[t];e===void 0&&(e=new Int32Array(t),ec[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function af(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function of(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;i.uniform2fv(this.addr,t),he(e,t)}}function cf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(le(e,t))return;i.uniform3fv(this.addr,t),he(e,t)}}function lf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;i.uniform4fv(this.addr,t),he(e,t)}}function hf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),he(e,t)}else{if(le(e,n))return;sc.set(n),i.uniformMatrix2fv(this.addr,!1,sc),he(e,n)}}function uf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),he(e,t)}else{if(le(e,n))return;ic.set(n),i.uniformMatrix3fv(this.addr,!1,ic),he(e,n)}}function df(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(le(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),he(e,t)}else{if(le(e,n))return;nc.set(n),i.uniformMatrix4fv(this.addr,!1,nc),he(e,n)}}function Af(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ff(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;i.uniform2iv(this.addr,t),he(e,t)}}function pf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;i.uniform3iv(this.addr,t),he(e,t)}}function mf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;i.uniform4iv(this.addr,t),he(e,t)}}function gf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function yf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;i.uniform2uiv(this.addr,t),he(e,t)}}function xf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;i.uniform3uiv(this.addr,t),he(e,t)}}function Mf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;i.uniform4uiv(this.addr,t),he(e,t)}}function vf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Rc:Nc;e.setTexture2D(t||r,s)}function _f(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||zc,s)}function wf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Uc,s)}function bf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ic,s)}function Sf(i){switch(i){case 5126:return af;case 35664:return of;case 35665:return cf;case 35666:return lf;case 35674:return hf;case 35675:return uf;case 35676:return df;case 5124:case 35670:return Af;case 35667:case 35671:return ff;case 35668:case 35672:return pf;case 35669:case 35673:return mf;case 5125:return gf;case 36294:return yf;case 36295:return xf;case 36296:return Mf;case 35678:case 36198:case 36298:case 36306:case 35682:return vf;case 35679:case 36299:case 36307:return _f;case 35680:case 36300:case 36308:case 36293:return wf;case 36289:case 36303:case 36311:case 36292:return bf}}function Tf(i,t){i.uniform1fv(this.addr,t)}function Ef(i,t){let e=xi(t,this.size,2);i.uniform2fv(this.addr,e)}function Df(i,t){let e=xi(t,this.size,3);i.uniform3fv(this.addr,e)}function Pf(i,t){let e=xi(t,this.size,4);i.uniform4fv(this.addr,e)}function Lf(i,t){let e=xi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Cf(i,t){let e=xi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Nf(i,t){let e=xi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Rf(i,t){i.uniform1iv(this.addr,t)}function If(i,t){i.uniform2iv(this.addr,t)}function zf(i,t){i.uniform3iv(this.addr,t)}function Uf(i,t){i.uniform4iv(this.addr,t)}function Of(i,t){i.uniform1uiv(this.addr,t)}function Bf(i,t){i.uniform2uiv(this.addr,t)}function Ff(i,t){i.uniform3uiv(this.addr,t)}function kf(i,t){i.uniform4uiv(this.addr,t)}function Hf(i,t,e){let n=this.cache,s=t.length,r=Vs(e,s);le(n,r)||(i.uniform1iv(this.addr,r),he(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Nc,r[o])}function qf(i,t,e){let n=this.cache,s=t.length,r=Vs(e,s);le(n,r)||(i.uniform1iv(this.addr,r),he(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||zc,r[o])}function Gf(i,t,e){let n=this.cache,s=t.length,r=Vs(e,s);le(n,r)||(i.uniform1iv(this.addr,r),he(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Uc,r[o])}function Wf(i,t,e){let n=this.cache,s=t.length,r=Vs(e,s);le(n,r)||(i.uniform1iv(this.addr,r),he(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ic,r[o])}function Qf(i){switch(i){case 5126:return Tf;case 35664:return Ef;case 35665:return Df;case 35666:return Pf;case 35674:return Lf;case 35675:return Cf;case 35676:return Nf;case 5124:case 35670:return Rf;case 35667:case 35671:return If;case 35668:case 35672:return zf;case 35669:case 35673:return Uf;case 5125:return Of;case 36294:return Bf;case 36295:return Ff;case 36296:return kf;case 35678:case 36198:case 36298:case 36306:case 35682:return Hf;case 35679:case 36299:case 36307:return qf;case 35680:case 36300:case 36308:case 36293:return Gf;case 36289:case 36303:case 36311:case 36292:return Wf}}var Zr=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Sf(e.type)}},$r=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qf(e.type)}},ta=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Or=/(\w+)(\])?(\[|\.)?/g;function rc(i,t){i.seq.push(t),i.map[t.id]=t}function Kf(i,t,e){let n=i.name,s=n.length;for(Or.lastIndex=0;;){let r=Or.exec(n),o=Or.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){rc(e,l===void 0?new Zr(a,i,t):new $r(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new ta(a),rc(e,d)),e=d}}}var di=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Kf(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function ac(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Vf=37297,Yf=0;function jf(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Jf(i){let t=Kt.getPrimaries(Kt.workingColorSpace),e=Kt.getPrimaries(i),n;switch(t===e?n="":t===Es&&e===Ts?n="LinearDisplayP3ToLinearSRGB":t===Ts&&e===Es&&(n="LinearSRGBToLinearDisplayP3"),i){case qe:case Ks:return[n,"LinearTransferOETF"];case me:case Ma:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function oc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+jf(i.getShaderSource(t),o)}else return s}function Xf(i,t){let e=Jf(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Zf(i,t){let e;switch(t){case ph:e="Linear";break;case mh:e="Reinhard";break;case gh:e="OptimizedCineon";break;case yh:e="ACESFilmic";break;case Mh:e="AgX";break;case xh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function $f(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(li).join(`
`)}function tp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(li).join(`
`)}function ep(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function np(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function li(i){return i!==""}function cc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ip=/^[ \t]*#include +<([\w\d./]+)>/gm;function ea(i){return i.replace(ip,rp)}var sp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function rp(i,t){let e=zt[t];if(e===void 0){let n=sp.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ea(e)}var ap=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hc(i){return i.replace(ap,op)}function op(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uc(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function cp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===pc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Gl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===rn&&(t="SHADOWMAP_TYPE_VSM"),t}function lp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ai:case fi:t="ENVMAP_TYPE_CUBE";break;case Qs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function hp(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===fi&&(t="ENVMAP_MODE_REFRACTION"),t}function up(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case mc:t="ENVMAP_BLENDING_MULTIPLY";break;case Ah:t="ENVMAP_BLENDING_MIX";break;case fh:t="ENVMAP_BLENDING_ADD";break}return t}function dp(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ap(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=cp(e),l=lp(e),h=hp(e),d=up(e),A=dp(e),p=e.isWebGL2?"":$f(e),g=tp(e),x=ep(r),f=s.createProgram(),u,v,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(li).join(`
`),u.length>0&&(u+=`
`),v=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(li).join(`
`),v.length>0&&(v+=`
`)):(u=[uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(li).join(`
`),v=[p,uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",A?"#define CUBEUV_TEXEL_WIDTH "+A.texelWidth:"",A?"#define CUBEUV_TEXEL_HEIGHT "+A.texelHeight:"",A?"#define CUBEUV_MAX_MIP "+A.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yn?"#define TONE_MAPPING":"",e.toneMapping!==yn?zt.tonemapping_pars_fragment:"",e.toneMapping!==yn?Zf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,Xf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(li).join(`
`)),o=ea(o),o=cc(o,e),o=lc(o,e),a=ea(a),a=cc(a,e),a=lc(a,e),o=hc(o),a=hc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Lo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let w=m+u+o,D=m+v+a,E=ac(s,s.VERTEX_SHADER,w),T=ac(s,s.FRAGMENT_SHADER,D);s.attachShader(f,E),s.attachShader(f,T),e.index0AttributeName!==void 0?s.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function F(Y){if(i.debug.checkShaderErrors){let it=s.getProgramInfoLog(f).trim(),C=s.getShaderInfoLog(E).trim(),N=s.getShaderInfoLog(T).trim(),W=!0,J=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,f,E,T);else{let K=oc(s,E,"vertex"),Q=oc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Program Info Log: `+it+`
`+K+`
`+Q)}else it!==""?console.warn("THREE.WebGLProgram: Program Info Log:",it):(C===""||N==="")&&(J=!1);J&&(Y.diagnostics={runnable:W,programLog:it,vertexShader:{log:C,prefix:u},fragmentShader:{log:N,prefix:v}})}s.deleteShader(E),s.deleteShader(T),_=new di(s,f),S=np(s,f)}let _;this.getUniforms=function(){return _===void 0&&F(this),_};let S;this.getAttributes=function(){return S===void 0&&F(this),S};let O=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(f,Vf)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Yf++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=E,this.fragmentShader=T,this}var fp=0,na=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ia(t),e.set(t,n)),n}},ia=class{constructor(t){this.id=fp++,this.code=t,this.usedTimes=0}};function pp(i,t,e,n,s,r,o){let a=new Is,c=new na,l=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,A=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return _===0?"uv":`uv${_}`}function f(_,S,O,Y,it){let C=Y.fog,N=it.geometry,W=_.isMeshStandardMaterial?Y.environment:null,J=(_.isMeshStandardMaterial?e:t).get(_.envMap||W),K=J&&J.mapping===Qs?J.image.height:null,Q=g[_.type];_.precision!==null&&(p=s.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));let X=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,$=X!==void 0?X.length:0,ct=0;N.morphAttributes.position!==void 0&&(ct=1),N.morphAttributes.normal!==void 0&&(ct=2),N.morphAttributes.color!==void 0&&(ct=3);let q,tt,lt,gt;if(Q){let _e=Ve[Q];q=_e.vertexShader,tt=_e.fragmentShader}else q=_.vertexShader,tt=_.fragmentShader,c.update(_),lt=c.getVertexShaderID(_),gt=c.getFragmentShaderID(_);let dt=i.getRenderTarget(),yt=it.isInstancedMesh===!0,Dt=it.isBatchedMesh===!0,vt=!!_.map,Ot=!!_.matcap,z=!!J,Xt=!!_.aoMap,xt=!!_.lightMap,bt=!!_.bumpMap,ft=!!_.normalMap,Z=!!_.displacementMap,j=!!_.emissiveMap,M=!!_.metalnessMap,y=!!_.roughnessMap,L=_.anisotropy>0,G=_.clearcoat>0,H=_.iridescence>0,V=_.sheen>0,ot=_.transmission>0,nt=L&&!!_.anisotropyMap,st=G&&!!_.clearcoatMap,mt=G&&!!_.clearcoatNormalMap,St=G&&!!_.clearcoatRoughnessMap,et=H&&!!_.iridescenceMap,Ht=H&&!!_.iridescenceThicknessMap,Ct=V&&!!_.sheenColorMap,Tt=V&&!!_.sheenRoughnessMap,_t=!!_.specularMap,pt=!!_.specularColorMap,It=!!_.specularIntensityMap,Gt=ot&&!!_.transmissionMap,ie=ot&&!!_.thicknessMap,Ft=!!_.gradientMap,rt=!!_.alphaMap,P=_.alphaTest>0,ht=!!_.alphaHash,ut=!!_.extensions,Pt=!!N.attributes.uv1,wt=!!N.attributes.uv2,Vt=!!N.attributes.uv3,Yt=yn;return _.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Yt=i.toneMapping),{isWebGL2:h,shaderID:Q,shaderType:_.type,shaderName:_.name,vertexShader:q,fragmentShader:tt,defines:_.defines,customVertexShaderID:lt,customFragmentShaderID:gt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:Dt,instancing:yt,instancingColor:yt&&it.instanceColor!==null,supportsVertexTextures:A,outputColorSpace:dt===null?i.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:qe,map:vt,matcap:Ot,envMap:z,envMapMode:z&&J.mapping,envMapCubeUVHeight:K,aoMap:Xt,lightMap:xt,bumpMap:bt,normalMap:ft,displacementMap:A&&Z,emissiveMap:j,normalMapObjectSpace:ft&&_.normalMapType===Nh,normalMapTangentSpace:ft&&_.normalMapType===Tc,metalnessMap:M,roughnessMap:y,anisotropy:L,anisotropyMap:nt,clearcoat:G,clearcoatMap:st,clearcoatNormalMap:mt,clearcoatRoughnessMap:St,iridescence:H,iridescenceMap:et,iridescenceThicknessMap:Ht,sheen:V,sheenColorMap:Ct,sheenRoughnessMap:Tt,specularMap:_t,specularColorMap:pt,specularIntensityMap:It,transmission:ot,transmissionMap:Gt,thicknessMap:ie,gradientMap:Ft,opaque:_.transparent===!1&&_.blending===hi,alphaMap:rt,alphaTest:P,alphaHash:ht,combine:_.combine,mapUv:vt&&x(_.map.channel),aoMapUv:Xt&&x(_.aoMap.channel),lightMapUv:xt&&x(_.lightMap.channel),bumpMapUv:bt&&x(_.bumpMap.channel),normalMapUv:ft&&x(_.normalMap.channel),displacementMapUv:Z&&x(_.displacementMap.channel),emissiveMapUv:j&&x(_.emissiveMap.channel),metalnessMapUv:M&&x(_.metalnessMap.channel),roughnessMapUv:y&&x(_.roughnessMap.channel),anisotropyMapUv:nt&&x(_.anisotropyMap.channel),clearcoatMapUv:st&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:mt&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&x(_.sheenRoughnessMap.channel),specularMapUv:_t&&x(_.specularMap.channel),specularColorMapUv:pt&&x(_.specularColorMap.channel),specularIntensityMapUv:It&&x(_.specularIntensityMap.channel),transmissionMapUv:Gt&&x(_.transmissionMap.channel),thicknessMapUv:ie&&x(_.thicknessMap.channel),alphaMapUv:rt&&x(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ft||L),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Pt,vertexUv2s:wt,vertexUv3s:Vt,pointsUvs:it.isPoints===!0&&!!N.attributes.uv&&(vt||rt),fog:!!C,useFog:_.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:it.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:ct,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:Yt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:vt&&_.map.isVideoTexture===!0&&Kt.getTransfer(_.map.colorSpace)===Jt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===re,flipSided:_.side===De,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:ut&&_.extensions.derivatives===!0,extensionFragDepth:ut&&_.extensions.fragDepth===!0,extensionDrawBuffers:ut&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:ut&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ut&&_.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()}}function u(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let O in _.defines)S.push(O),S.push(_.defines[O]);return _.isRawShaderMaterial===!1&&(v(S,_),m(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function v(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function m(_,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),_.push(a.mask)}function w(_){let S=g[_.type],O;if(S){let Y=Ve[S];O=iu.clone(Y.uniforms)}else O=_.uniforms;return O}function D(_,S){let O;for(let Y=0,it=l.length;Y<it;Y++){let C=l[Y];if(C.cacheKey===S){O=C,++O.usedTimes;break}}return O===void 0&&(O=new Ap(i,S,_,r),l.push(O)),O}function E(_){if(--_.usedTimes===0){let S=l.indexOf(_);l[S]=l[l.length-1],l.pop(),_.destroy()}}function T(_){c.remove(_)}function F(){c.dispose()}return{getParameters:f,getProgramCacheKey:u,getUniforms:w,acquireProgram:D,releaseProgram:E,releaseShaderCache:T,programs:l,dispose:F}}function mp(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function gp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function dc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ac(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,A,p,g,x,f){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:A,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:f},i[t]=u):(u.id=d.id,u.object=d,u.geometry=A,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=x,u.group=f),t++,u}function a(d,A,p,g,x,f){let u=o(d,A,p,g,x,f);p.transmission>0?n.push(u):p.transparent===!0?s.push(u):e.push(u)}function c(d,A,p,g,x,f){let u=o(d,A,p,g,x,f);p.transmission>0?n.unshift(u):p.transparent===!0?s.unshift(u):e.unshift(u)}function l(d,A){e.length>1&&e.sort(d||gp),n.length>1&&n.sort(A||dc),s.length>1&&s.sort(A||dc)}function h(){for(let d=t,A=i.length;d<A;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function yp(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Ac,i.set(n,[o])):s>=r.length?(o=new Ac,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function xp(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new qt};break;case"SpotLight":e={position:new R,direction:new R,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function Mp(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var vp=0;function _p(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function wp(i,t){let e=new xp,n=Mp(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new R);let r=new R,o=new $t,a=new $t;function c(h,d){let A=0,p=0,g=0;for(let Y=0;Y<9;Y++)s.probe[Y].set(0,0,0);let x=0,f=0,u=0,v=0,m=0,w=0,D=0,E=0,T=0,F=0,_=0;h.sort(_p);let S=d===!0?Math.PI:1;for(let Y=0,it=h.length;Y<it;Y++){let C=h[Y],N=C.color,W=C.intensity,J=C.distance,K=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)A+=N.r*W*S,p+=N.g*W*S,g+=N.b*W*S;else if(C.isLightProbe){for(let Q=0;Q<9;Q++)s.probe[Q].addScaledVector(C.sh.coefficients[Q],W);_++}else if(C.isDirectionalLight){let Q=e.get(C);if(Q.color.copy(C.color).multiplyScalar(C.intensity*S),C.castShadow){let X=C.shadow,$=n.get(C);$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,s.directionalShadow[x]=$,s.directionalShadowMap[x]=K,s.directionalShadowMatrix[x]=C.shadow.matrix,w++}s.directional[x]=Q,x++}else if(C.isSpotLight){let Q=e.get(C);Q.position.setFromMatrixPosition(C.matrixWorld),Q.color.copy(N).multiplyScalar(W*S),Q.distance=J,Q.coneCos=Math.cos(C.angle),Q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Q.decay=C.decay,s.spot[u]=Q;let X=C.shadow;if(C.map&&(s.spotLightMap[T]=C.map,T++,X.updateMatrices(C),C.castShadow&&F++),s.spotLightMatrix[u]=X.matrix,C.castShadow){let $=n.get(C);$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,s.spotShadow[u]=$,s.spotShadowMap[u]=K,E++}u++}else if(C.isRectAreaLight){let Q=e.get(C);Q.color.copy(N).multiplyScalar(W),Q.halfWidth.set(C.width*.5,0,0),Q.halfHeight.set(0,C.height*.5,0),s.rectArea[v]=Q,v++}else if(C.isPointLight){let Q=e.get(C);if(Q.color.copy(C.color).multiplyScalar(C.intensity*S),Q.distance=C.distance,Q.decay=C.decay,C.castShadow){let X=C.shadow,$=n.get(C);$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,$.shadowCameraNear=X.camera.near,$.shadowCameraFar=X.camera.far,s.pointShadow[f]=$,s.pointShadowMap[f]=K,s.pointShadowMatrix[f]=C.shadow.matrix,D++}s.point[f]=Q,f++}else if(C.isHemisphereLight){let Q=e.get(C);Q.skyColor.copy(C.color).multiplyScalar(W*S),Q.groundColor.copy(C.groundColor).multiplyScalar(W*S),s.hemi[m]=Q,m++}}v>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=at.LTC_FLOAT_1,s.rectAreaLTC2=at.LTC_FLOAT_2):(s.rectAreaLTC1=at.LTC_HALF_1,s.rectAreaLTC2=at.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=at.LTC_FLOAT_1,s.rectAreaLTC2=at.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=at.LTC_HALF_1,s.rectAreaLTC2=at.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=A,s.ambient[1]=p,s.ambient[2]=g;let O=s.hash;(O.directionalLength!==x||O.pointLength!==f||O.spotLength!==u||O.rectAreaLength!==v||O.hemiLength!==m||O.numDirectionalShadows!==w||O.numPointShadows!==D||O.numSpotShadows!==E||O.numSpotMaps!==T||O.numLightProbes!==_)&&(s.directional.length=x,s.spot.length=u,s.rectArea.length=v,s.point.length=f,s.hemi.length=m,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=E+T-F,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=_,O.directionalLength=x,O.pointLength=f,O.spotLength=u,O.rectAreaLength=v,O.hemiLength=m,O.numDirectionalShadows=w,O.numPointShadows=D,O.numSpotShadows=E,O.numSpotMaps=T,O.numLightProbes=_,s.version=vp++)}function l(h,d){let A=0,p=0,g=0,x=0,f=0,u=d.matrixWorldInverse;for(let v=0,m=h.length;v<m;v++){let w=h[v];if(w.isDirectionalLight){let D=s.directional[A];D.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(u),A++}else if(w.isSpotLight){let D=s.spot[g];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(u),D.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(u),g++}else if(w.isRectAreaLight){let D=s.rectArea[x];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(u),a.identity(),o.copy(w.matrixWorld),o.premultiply(u),a.extractRotation(o),D.halfWidth.set(w.width*.5,0,0),D.halfHeight.set(0,w.height*.5,0),D.halfWidth.applyMatrix4(a),D.halfHeight.applyMatrix4(a),x++}else if(w.isPointLight){let D=s.point[p];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(u),p++}else if(w.isHemisphereLight){let D=s.hemi[f];D.direction.setFromMatrixPosition(w.matrixWorld),D.direction.transformDirection(u),f++}}}return{setup:c,setupView:l,state:s}}function fc(i,t){let e=new wp(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(d){n.push(d)}function a(d){s.push(d)}function c(d){e.setup(n,d)}function l(d){e.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function bp(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),c;return a===void 0?(c=new fc(i,t),e.set(r,[c])):o>=a.length?(c=new fc(i,t),a.push(c)):c=a[o],c}function s(){e=new WeakMap}return{get:n,dispose:s}}var sa=class extends Fn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ra=class extends Fn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Sp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ep(i,t,e){let n=new ks,s=new Qt,r=new Qt,o=new ge,a=new sa({depthPacking:Ch}),c=new ra,l={},h=e.maxTextureSize,d={[xn]:De,[De]:xn,[re]:re},A=new ae({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qt},radius:{value:4}},vertexShader:Sp,fragmentShader:Tp}),p=A.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ie;g.setAttribute("position",new te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Wt(g,A),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pc;let u=this.type;this.render=function(E,T,F){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||E.length===0)return;let _=i.getRenderTarget(),S=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(gn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let it=u!==rn&&this.type===rn,C=u===rn&&this.type!==rn;for(let N=0,W=E.length;N<W;N++){let J=E[N],K=J.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let Q=K.getFrameExtents();if(s.multiply(Q),r.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,K.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,K.mapSize.y=r.y)),K.map===null||it===!0||C===!0){let $=this.type!==rn?{minFilter:pe,magFilter:pe}:{};K.map!==null&&K.map.dispose(),K.map=new cn(s.x,s.y,$),K.map.texture.name=J.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();let X=K.getViewportCount();for(let $=0;$<X;$++){let ct=K.getViewport($);o.set(r.x*ct.x,r.y*ct.y,r.x*ct.z,r.y*ct.w),Y.viewport(o),K.updateMatrices(J,$),n=K.getFrustum(),w(T,F,K.camera,J,this.type)}K.isPointLightShadow!==!0&&this.type===rn&&v(K,F),K.needsUpdate=!1}u=this.type,f.needsUpdate=!1,i.setRenderTarget(_,S,O)};function v(E,T){let F=t.update(x);A.defines.VSM_SAMPLES!==E.blurSamples&&(A.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,A.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new cn(s.x,s.y)),A.uniforms.shadow_pass.value=E.map.texture,A.uniforms.resolution.value=E.mapSize,A.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,F,A,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,F,p,x,null)}function m(E,T,F,_){let S=null,O=F.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(O!==void 0)S=O;else if(S=F.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let Y=S.uuid,it=T.uuid,C=l[Y];C===void 0&&(C={},l[Y]=C);let N=C[it];N===void 0&&(N=S.clone(),C[it]=N,T.addEventListener("dispose",D)),S=N}if(S.visible=T.visible,S.wireframe=T.wireframe,_===rn?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:d[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,F.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let Y=i.properties.get(S);Y.light=F}return S}function w(E,T,F,_,S){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===rn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,E.matrixWorld);let it=t.update(E),C=E.material;if(Array.isArray(C)){let N=it.groups;for(let W=0,J=N.length;W<J;W++){let K=N[W],Q=C[K.materialIndex];if(Q&&Q.visible){let X=m(E,Q,_,S);E.onBeforeShadow(i,E,T,F,it,X,K),i.renderBufferDirect(F,null,it,X,E,K),E.onAfterShadow(i,E,T,F,it,X,K)}}}else if(C.visible){let N=m(E,C,_,S);E.onBeforeShadow(i,E,T,F,it,N,null),i.renderBufferDirect(F,null,it,N,E,null),E.onAfterShadow(i,E,T,F,it,N,null)}}let Y=E.children;for(let it=0,C=Y.length;it<C;it++)w(Y[it],T,F,_,S)}function D(E){E.target.removeEventListener("dispose",D);for(let F in l){let _=l[F],S=E.target.uuid;S in _&&(_[S].dispose(),delete _[S])}}}function Dp(i,t,e){let n=e.isWebGL2;function s(){let P=!1,ht=new ge,ut=null,Pt=new ge(0,0,0,0);return{setMask:function(wt){ut!==wt&&!P&&(i.colorMask(wt,wt,wt,wt),ut=wt)},setLocked:function(wt){P=wt},setClear:function(wt,Vt,Yt,ue,_e){_e===!0&&(wt*=ue,Vt*=ue,Yt*=ue),ht.set(wt,Vt,Yt,ue),Pt.equals(ht)===!1&&(i.clearColor(wt,Vt,Yt,ue),Pt.copy(ht))},reset:function(){P=!1,ut=null,Pt.set(-1,0,0,0)}}}function r(){let P=!1,ht=null,ut=null,Pt=null;return{setTest:function(wt){wt?Dt(i.DEPTH_TEST):vt(i.DEPTH_TEST)},setMask:function(wt){ht!==wt&&!P&&(i.depthMask(wt),ht=wt)},setFunc:function(wt){if(ut!==wt){switch(wt){case ah:i.depthFunc(i.NEVER);break;case oh:i.depthFunc(i.ALWAYS);break;case ch:i.depthFunc(i.LESS);break;case _s:i.depthFunc(i.LEQUAL);break;case lh:i.depthFunc(i.EQUAL);break;case hh:i.depthFunc(i.GEQUAL);break;case uh:i.depthFunc(i.GREATER);break;case dh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ut=wt}},setLocked:function(wt){P=wt},setClear:function(wt){Pt!==wt&&(i.clearDepth(wt),Pt=wt)},reset:function(){P=!1,ht=null,ut=null,Pt=null}}}function o(){let P=!1,ht=null,ut=null,Pt=null,wt=null,Vt=null,Yt=null,ue=null,_e=null;return{setTest:function(jt){P||(jt?Dt(i.STENCIL_TEST):vt(i.STENCIL_TEST))},setMask:function(jt){ht!==jt&&!P&&(i.stencilMask(jt),ht=jt)},setFunc:function(jt,we,Ke){(ut!==jt||Pt!==we||wt!==Ke)&&(i.stencilFunc(jt,we,Ke),ut=jt,Pt=we,wt=Ke)},setOp:function(jt,we,Ke){(Vt!==jt||Yt!==we||ue!==Ke)&&(i.stencilOp(jt,we,Ke),Vt=jt,Yt=we,ue=Ke)},setLocked:function(jt){P=jt},setClear:function(jt){_e!==jt&&(i.clearStencil(jt),_e=jt)},reset:function(){P=!1,ht=null,ut=null,Pt=null,wt=null,Vt=null,Yt=null,ue=null,_e=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,d=new WeakMap,A={},p={},g=new WeakMap,x=[],f=null,u=!1,v=null,m=null,w=null,D=null,E=null,T=null,F=null,_=new qt(0,0,0),S=0,O=!1,Y=null,it=null,C=null,N=null,W=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,Q=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(X)[1]),K=Q>=1):X.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),K=Q>=2);let $=null,ct={},q=i.getParameter(i.SCISSOR_BOX),tt=i.getParameter(i.VIEWPORT),lt=new ge().fromArray(q),gt=new ge().fromArray(tt);function dt(P,ht,ut,Pt){let wt=new Uint8Array(4),Vt=i.createTexture();i.bindTexture(P,Vt),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<ut;Yt++)n&&(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)?i.texImage3D(ht,0,i.RGBA,1,1,Pt,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(ht+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return Vt}let yt={};yt[i.TEXTURE_2D]=dt(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=dt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(yt[i.TEXTURE_2D_ARRAY]=dt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=dt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Dt(i.DEPTH_TEST),c.setFunc(_s),j(!1),M(Ka),Dt(i.CULL_FACE),ft(gn);function Dt(P){A[P]!==!0&&(i.enable(P),A[P]=!0)}function vt(P){A[P]!==!1&&(i.disable(P),A[P]=!1)}function Ot(P,ht){return p[P]!==ht?(i.bindFramebuffer(P,ht),p[P]=ht,n&&(P===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ht),P===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ht)),!0):!1}function z(P,ht){let ut=x,Pt=!1;if(P)if(ut=g.get(ht),ut===void 0&&(ut=[],g.set(ht,ut)),P.isWebGLMultipleRenderTargets){let wt=P.texture;if(ut.length!==wt.length||ut[0]!==i.COLOR_ATTACHMENT0){for(let Vt=0,Yt=wt.length;Vt<Yt;Vt++)ut[Vt]=i.COLOR_ATTACHMENT0+Vt;ut.length=wt.length,Pt=!0}}else ut[0]!==i.COLOR_ATTACHMENT0&&(ut[0]=i.COLOR_ATTACHMENT0,Pt=!0);else ut[0]!==i.BACK&&(ut[0]=i.BACK,Pt=!0);Pt&&(e.isWebGL2?i.drawBuffers(ut):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ut))}function Xt(P){return f!==P?(i.useProgram(P),f=P,!0):!1}let xt={[Rn]:i.FUNC_ADD,[Ql]:i.FUNC_SUBTRACT,[Kl]:i.FUNC_REVERSE_SUBTRACT};if(n)xt[Ja]=i.MIN,xt[Xa]=i.MAX;else{let P=t.get("EXT_blend_minmax");P!==null&&(xt[Ja]=P.MIN_EXT,xt[Xa]=P.MAX_EXT)}let bt={[Vl]:i.ZERO,[Yl]:i.ONE,[jl]:i.SRC_COLOR,[Br]:i.SRC_ALPHA,[eh]:i.SRC_ALPHA_SATURATE,[$l]:i.DST_COLOR,[Xl]:i.DST_ALPHA,[Jl]:i.ONE_MINUS_SRC_COLOR,[Fr]:i.ONE_MINUS_SRC_ALPHA,[th]:i.ONE_MINUS_DST_COLOR,[Zl]:i.ONE_MINUS_DST_ALPHA,[nh]:i.CONSTANT_COLOR,[ih]:i.ONE_MINUS_CONSTANT_COLOR,[sh]:i.CONSTANT_ALPHA,[rh]:i.ONE_MINUS_CONSTANT_ALPHA};function ft(P,ht,ut,Pt,wt,Vt,Yt,ue,_e,jt){if(P===gn){u===!0&&(vt(i.BLEND),u=!1);return}if(u===!1&&(Dt(i.BLEND),u=!0),P!==Wl){if(P!==v||jt!==O){if((m!==Rn||E!==Rn)&&(i.blendEquation(i.FUNC_ADD),m=Rn,E=Rn),jt)switch(P){case hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Va:i.blendFunc(i.ONE,i.ONE);break;case Ya:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ja:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Va:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ya:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ja:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}w=null,D=null,T=null,F=null,_.set(0,0,0),S=0,v=P,O=jt}return}wt=wt||ht,Vt=Vt||ut,Yt=Yt||Pt,(ht!==m||wt!==E)&&(i.blendEquationSeparate(xt[ht],xt[wt]),m=ht,E=wt),(ut!==w||Pt!==D||Vt!==T||Yt!==F)&&(i.blendFuncSeparate(bt[ut],bt[Pt],bt[Vt],bt[Yt]),w=ut,D=Pt,T=Vt,F=Yt),(ue.equals(_)===!1||_e!==S)&&(i.blendColor(ue.r,ue.g,ue.b,_e),_.copy(ue),S=_e),v=P,O=!1}function Z(P,ht){P.side===re?vt(i.CULL_FACE):Dt(i.CULL_FACE);let ut=P.side===De;ht&&(ut=!ut),j(ut),P.blending===hi&&P.transparent===!1?ft(gn):ft(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),a.setMask(P.colorWrite);let Pt=P.stencilWrite;l.setTest(Pt),Pt&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),L(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Dt(i.SAMPLE_ALPHA_TO_COVERAGE):vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function j(P){Y!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),Y=P)}function M(P){P!==Hl?(Dt(i.CULL_FACE),P!==it&&(P===Ka?i.cullFace(i.BACK):P===ql?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):vt(i.CULL_FACE),it=P}function y(P){P!==C&&(K&&i.lineWidth(P),C=P)}function L(P,ht,ut){P?(Dt(i.POLYGON_OFFSET_FILL),(N!==ht||W!==ut)&&(i.polygonOffset(ht,ut),N=ht,W=ut)):vt(i.POLYGON_OFFSET_FILL)}function G(P){P?Dt(i.SCISSOR_TEST):vt(i.SCISSOR_TEST)}function H(P){P===void 0&&(P=i.TEXTURE0+J-1),$!==P&&(i.activeTexture(P),$=P)}function V(P,ht,ut){ut===void 0&&($===null?ut=i.TEXTURE0+J-1:ut=$);let Pt=ct[ut];Pt===void 0&&(Pt={type:void 0,texture:void 0},ct[ut]=Pt),(Pt.type!==P||Pt.texture!==ht)&&($!==ut&&(i.activeTexture(ut),$=ut),i.bindTexture(P,ht||yt[P]),Pt.type=P,Pt.texture=ht)}function ot(){let P=ct[$];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function nt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function st(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function mt(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function St(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function et(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ht(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ct(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Tt(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pt(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function It(P){lt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),lt.copy(P))}function Gt(P){gt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),gt.copy(P))}function ie(P,ht){let ut=d.get(ht);ut===void 0&&(ut=new WeakMap,d.set(ht,ut));let Pt=ut.get(P);Pt===void 0&&(Pt=i.getUniformBlockIndex(ht,P.name),ut.set(P,Pt))}function Ft(P,ht){let Pt=d.get(ht).get(P);h.get(ht)!==Pt&&(i.uniformBlockBinding(ht,Pt,P.__bindingPointIndex),h.set(ht,Pt))}function rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),A={},$=null,ct={},p={},g=new WeakMap,x=[],f=null,u=!1,v=null,m=null,w=null,D=null,E=null,T=null,F=null,_=new qt(0,0,0),S=0,O=!1,Y=null,it=null,C=null,N=null,W=null,lt.set(0,0,i.canvas.width,i.canvas.height),gt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Dt,disable:vt,bindFramebuffer:Ot,drawBuffers:z,useProgram:Xt,setBlending:ft,setMaterial:Z,setFlipSided:j,setCullFace:M,setLineWidth:y,setPolygonOffset:L,setScissorTest:G,activeTexture:H,bindTexture:V,unbindTexture:ot,compressedTexImage2D:nt,compressedTexImage3D:st,texImage2D:_t,texImage3D:pt,updateUBOMapping:ie,uniformBlockBinding:Ft,texStorage2D:Ct,texStorage3D:Tt,texSubImage2D:mt,texSubImage3D:St,compressedTexSubImage2D:et,compressedTexSubImage3D:Ht,scissor:It,viewport:Gt,reset:rt}}function Pp(i,t,e,n,s,r,o){let a=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,A=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,y){return p?new OffscreenCanvas(M,y):Ps("canvas")}function x(M,y,L,G){let H=1;if((M.width>G||M.height>G)&&(H=G/Math.max(M.width,M.height)),H<1||y===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){let V=y?Wr:Math.floor,ot=V(H*M.width),nt=V(H*M.height);d===void 0&&(d=g(ot,nt));let st=L?g(ot,nt):d;return st.width=ot,st.height=nt,st.getContext("2d").drawImage(M,0,0,ot,nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+ot+"x"+nt+")."),st}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function f(M){return Co(M.width)&&Co(M.height)}function u(M){return a?!1:M.wrapS!==ke||M.wrapT!==ke||M.minFilter!==pe&&M.minFilter!==Se}function v(M,y){return M.generateMipmaps&&y&&M.minFilter!==pe&&M.minFilter!==Se}function m(M){i.generateMipmap(M)}function w(M,y,L,G,H=!1){if(a===!1)return y;if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let V=y;if(y===i.RED&&(L===i.FLOAT&&(V=i.R32F),L===i.HALF_FLOAT&&(V=i.R16F),L===i.UNSIGNED_BYTE&&(V=i.R8)),y===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(V=i.R8UI),L===i.UNSIGNED_SHORT&&(V=i.R16UI),L===i.UNSIGNED_INT&&(V=i.R32UI),L===i.BYTE&&(V=i.R8I),L===i.SHORT&&(V=i.R16I),L===i.INT&&(V=i.R32I)),y===i.RG&&(L===i.FLOAT&&(V=i.RG32F),L===i.HALF_FLOAT&&(V=i.RG16F),L===i.UNSIGNED_BYTE&&(V=i.RG8)),y===i.RGBA){let ot=H?Ss:Kt.getTransfer(G);L===i.FLOAT&&(V=i.RGBA32F),L===i.HALF_FLOAT&&(V=i.RGBA16F),L===i.UNSIGNED_BYTE&&(V=ot===Jt?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function D(M,y,L){return v(M,L)===!0||M.isFramebufferTexture&&M.minFilter!==pe&&M.minFilter!==Se?Math.log2(Math.max(y.width,y.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?y.mipmaps.length:1}function E(M){return M===pe||M===Za||M===or?i.NEAREST:i.LINEAR}function T(M){let y=M.target;y.removeEventListener("dispose",T),_(y),y.isVideoTexture&&h.delete(y)}function F(M){let y=M.target;y.removeEventListener("dispose",F),O(y)}function _(M){let y=n.get(M);if(y.__webglInit===void 0)return;let L=M.source,G=A.get(L);if(G){let H=G[y.__cacheKey];H.usedTimes--,H.usedTimes===0&&S(M),Object.keys(G).length===0&&A.delete(L)}n.remove(M)}function S(M){let y=n.get(M);i.deleteTexture(y.__webglTexture);let L=M.source,G=A.get(L);delete G[y.__cacheKey],o.memory.textures--}function O(M){let y=M.texture,L=n.get(M),G=n.get(y);if(G.__webglTexture!==void 0&&(i.deleteTexture(G.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(L.__webglFramebuffer[H]))for(let V=0;V<L.__webglFramebuffer[H].length;V++)i.deleteFramebuffer(L.__webglFramebuffer[H][V]);else i.deleteFramebuffer(L.__webglFramebuffer[H]);L.__webglDepthbuffer&&i.deleteRenderbuffer(L.__webglDepthbuffer[H])}else{if(Array.isArray(L.__webglFramebuffer))for(let H=0;H<L.__webglFramebuffer.length;H++)i.deleteFramebuffer(L.__webglFramebuffer[H]);else i.deleteFramebuffer(L.__webglFramebuffer);if(L.__webglDepthbuffer&&i.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&i.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let H=0;H<L.__webglColorRenderbuffer.length;H++)L.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(L.__webglColorRenderbuffer[H]);L.__webglDepthRenderbuffer&&i.deleteRenderbuffer(L.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let H=0,V=y.length;H<V;H++){let ot=n.get(y[H]);ot.__webglTexture&&(i.deleteTexture(ot.__webglTexture),o.memory.textures--),n.remove(y[H])}n.remove(y),n.remove(M)}let Y=0;function it(){Y=0}function C(){let M=Y;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),Y+=1,M}function N(M){let y=[];return y.push(M.wrapS),y.push(M.wrapT),y.push(M.wrapR||0),y.push(M.magFilter),y.push(M.minFilter),y.push(M.anisotropy),y.push(M.internalFormat),y.push(M.format),y.push(M.type),y.push(M.generateMipmaps),y.push(M.premultiplyAlpha),y.push(M.flipY),y.push(M.unpackAlignment),y.push(M.colorSpace),y.join()}function W(M,y){let L=n.get(M);if(M.isVideoTexture&&Z(M),M.isRenderTargetTexture===!1&&M.version>0&&L.__version!==M.version){let G=M.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(L,M,y);return}}e.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+y)}function J(M,y){let L=n.get(M);if(M.version>0&&L.__version!==M.version){lt(L,M,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+y)}function K(M,y){let L=n.get(M);if(M.version>0&&L.__version!==M.version){lt(L,M,y);return}e.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+y)}function Q(M,y){let L=n.get(M);if(M.version>0&&L.__version!==M.version){gt(L,M,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+y)}let X={[Ri]:i.REPEAT,[ke]:i.CLAMP_TO_EDGE,[pi]:i.MIRRORED_REPEAT},$={[pe]:i.NEAREST,[Za]:i.NEAREST_MIPMAP_NEAREST,[or]:i.NEAREST_MIPMAP_LINEAR,[Se]:i.LINEAR,[vh]:i.LINEAR_MIPMAP_NEAREST,[Ii]:i.LINEAR_MIPMAP_LINEAR},ct={[Rh]:i.NEVER,[Fh]:i.ALWAYS,[Ih]:i.LESS,[Ec]:i.LEQUAL,[zh]:i.EQUAL,[Bh]:i.GEQUAL,[Uh]:i.GREATER,[Oh]:i.NOTEQUAL};function q(M,y,L){if(L?(i.texParameteri(M,i.TEXTURE_WRAP_S,X[y.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,X[y.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,X[y.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,$[y.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,$[y.minFilter])):(i.texParameteri(M,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(M,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(y.wrapS!==ke||y.wrapT!==ke)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(M,i.TEXTURE_MAG_FILTER,E(y.magFilter)),i.texParameteri(M,i.TEXTURE_MIN_FILTER,E(y.minFilter)),y.minFilter!==pe&&y.minFilter!==Se&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,ct[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let G=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===pe||y.minFilter!==or&&y.minFilter!==Ii||y.type===mn&&t.has("OES_texture_float_linear")===!1||a===!1&&y.type===zi&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(i.texParameterf(M,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function tt(M,y){let L=!1;M.__webglInit===void 0&&(M.__webglInit=!0,y.addEventListener("dispose",T));let G=y.source,H=A.get(G);H===void 0&&(H={},A.set(G,H));let V=N(y);if(V!==M.__cacheKey){H[V]===void 0&&(H[V]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,L=!0),H[V].usedTimes++;let ot=H[M.__cacheKey];ot!==void 0&&(H[M.__cacheKey].usedTimes--,ot.usedTimes===0&&S(y)),M.__cacheKey=V,M.__webglTexture=H[V].texture}return L}function lt(M,y,L){let G=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(G=i.TEXTURE_3D);let H=tt(M,y),V=y.source;e.bindTexture(G,M.__webglTexture,i.TEXTURE0+L);let ot=n.get(V);if(V.version!==ot.__version||H===!0){e.activeTexture(i.TEXTURE0+L);let nt=Kt.getPrimaries(Kt.workingColorSpace),st=y.colorSpace===fe?null:Kt.getPrimaries(y.colorSpace),mt=y.colorSpace===fe||nt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let St=u(y)&&f(y.image)===!1,et=x(y.image,St,!1,s.maxTextureSize);et=j(y,et);let Ht=f(et)||a,Ct=r.convert(y.format,y.colorSpace),Tt=r.convert(y.type),_t=w(y.internalFormat,Ct,Tt,y.colorSpace,y.isVideoTexture);q(G,y,Ht);let pt,It=y.mipmaps,Gt=a&&y.isVideoTexture!==!0&&_t!==bc,ie=ot.__version===void 0||H===!0,Ft=D(y,et,Ht);if(y.isDepthTexture)_t=i.DEPTH_COMPONENT,a?y.type===mn?_t=i.DEPTH_COMPONENT32F:y.type===pn?_t=i.DEPTH_COMPONENT24:y.type===zn?_t=i.DEPTH24_STENCIL8:_t=i.DEPTH_COMPONENT16:y.type===mn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Un&&_t===i.DEPTH_COMPONENT&&y.type!==xa&&y.type!==pn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=pn,Tt=r.convert(y.type)),y.format===mi&&_t===i.DEPTH_COMPONENT&&(_t=i.DEPTH_STENCIL,y.type!==zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=zn,Tt=r.convert(y.type))),ie&&(Gt?e.texStorage2D(i.TEXTURE_2D,1,_t,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,_t,et.width,et.height,0,Ct,Tt,null));else if(y.isDataTexture)if(It.length>0&&Ht){Gt&&ie&&e.texStorage2D(i.TEXTURE_2D,Ft,_t,It[0].width,It[0].height);for(let rt=0,P=It.length;rt<P;rt++)pt=It[rt],Gt?e.texSubImage2D(i.TEXTURE_2D,rt,0,0,pt.width,pt.height,Ct,Tt,pt.data):e.texImage2D(i.TEXTURE_2D,rt,_t,pt.width,pt.height,0,Ct,Tt,pt.data);y.generateMipmaps=!1}else Gt?(ie&&e.texStorage2D(i.TEXTURE_2D,Ft,_t,et.width,et.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,Ct,Tt,et.data)):e.texImage2D(i.TEXTURE_2D,0,_t,et.width,et.height,0,Ct,Tt,et.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Gt&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ft,_t,It[0].width,It[0].height,et.depth);for(let rt=0,P=It.length;rt<P;rt++)pt=It[rt],y.format!==Ne?Ct!==null?Gt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,pt.width,pt.height,et.depth,Ct,pt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,_t,pt.width,pt.height,et.depth,0,pt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,pt.width,pt.height,et.depth,Ct,Tt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,_t,pt.width,pt.height,et.depth,0,Ct,Tt,pt.data)}else{Gt&&ie&&e.texStorage2D(i.TEXTURE_2D,Ft,_t,It[0].width,It[0].height);for(let rt=0,P=It.length;rt<P;rt++)pt=It[rt],y.format!==Ne?Ct!==null?Gt?e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,pt.width,pt.height,Ct,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,_t,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?e.texSubImage2D(i.TEXTURE_2D,rt,0,0,pt.width,pt.height,Ct,Tt,pt.data):e.texImage2D(i.TEXTURE_2D,rt,_t,pt.width,pt.height,0,Ct,Tt,pt.data)}else if(y.isDataArrayTexture)Gt?(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ft,_t,et.width,et.height,et.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,Ct,Tt,et.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,_t,et.width,et.height,et.depth,0,Ct,Tt,et.data);else if(y.isData3DTexture)Gt?(ie&&e.texStorage3D(i.TEXTURE_3D,Ft,_t,et.width,et.height,et.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,Ct,Tt,et.data)):e.texImage3D(i.TEXTURE_3D,0,_t,et.width,et.height,et.depth,0,Ct,Tt,et.data);else if(y.isFramebufferTexture){if(ie)if(Gt)e.texStorage2D(i.TEXTURE_2D,Ft,_t,et.width,et.height);else{let rt=et.width,P=et.height;for(let ht=0;ht<Ft;ht++)e.texImage2D(i.TEXTURE_2D,ht,_t,rt,P,0,Ct,Tt,null),rt>>=1,P>>=1}}else if(It.length>0&&Ht){Gt&&ie&&e.texStorage2D(i.TEXTURE_2D,Ft,_t,It[0].width,It[0].height);for(let rt=0,P=It.length;rt<P;rt++)pt=It[rt],Gt?e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Ct,Tt,pt):e.texImage2D(i.TEXTURE_2D,rt,_t,Ct,Tt,pt);y.generateMipmaps=!1}else Gt?(ie&&e.texStorage2D(i.TEXTURE_2D,Ft,_t,et.width,et.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,Tt,et)):e.texImage2D(i.TEXTURE_2D,0,_t,Ct,Tt,et);v(y,Ht)&&m(G),ot.__version=V.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function gt(M,y,L){if(y.image.length!==6)return;let G=tt(M,y),H=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+L);let V=n.get(H);if(H.version!==V.__version||G===!0){e.activeTexture(i.TEXTURE0+L);let ot=Kt.getPrimaries(Kt.workingColorSpace),nt=y.colorSpace===fe?null:Kt.getPrimaries(y.colorSpace),st=y.colorSpace===fe||ot===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let mt=y.isCompressedTexture||y.image[0].isCompressedTexture,St=y.image[0]&&y.image[0].isDataTexture,et=[];for(let rt=0;rt<6;rt++)!mt&&!St?et[rt]=x(y.image[rt],!1,!0,s.maxCubemapSize):et[rt]=St?y.image[rt].image:y.image[rt],et[rt]=j(y,et[rt]);let Ht=et[0],Ct=f(Ht)||a,Tt=r.convert(y.format,y.colorSpace),_t=r.convert(y.type),pt=w(y.internalFormat,Tt,_t,y.colorSpace),It=a&&y.isVideoTexture!==!0,Gt=V.__version===void 0||G===!0,ie=D(y,Ht,Ct);q(i.TEXTURE_CUBE_MAP,y,Ct);let Ft;if(mt){It&&Gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ie,pt,Ht.width,Ht.height);for(let rt=0;rt<6;rt++){Ft=et[rt].mipmaps;for(let P=0;P<Ft.length;P++){let ht=Ft[P];y.format!==Ne?Tt!==null?It?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,P,0,0,ht.width,ht.height,Tt,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,P,pt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,P,0,0,ht.width,ht.height,Tt,_t,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,P,pt,ht.width,ht.height,0,Tt,_t,ht.data)}}}else{Ft=y.mipmaps,It&&Gt&&(Ft.length>0&&ie++,e.texStorage2D(i.TEXTURE_CUBE_MAP,ie,pt,et[0].width,et[0].height));for(let rt=0;rt<6;rt++)if(St){It?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,et[rt].width,et[rt].height,Tt,_t,et[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,pt,et[rt].width,et[rt].height,0,Tt,_t,et[rt].data);for(let P=0;P<Ft.length;P++){let ut=Ft[P].image[rt].image;It?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,P+1,0,0,ut.width,ut.height,Tt,_t,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,P+1,pt,ut.width,ut.height,0,Tt,_t,ut.data)}}else{It?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Tt,_t,et[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,pt,Tt,_t,et[rt]);for(let P=0;P<Ft.length;P++){let ht=Ft[P];It?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,P+1,0,0,Tt,_t,ht.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,P+1,pt,Tt,_t,ht.image[rt])}}}v(y,Ct)&&m(i.TEXTURE_CUBE_MAP),V.__version=H.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function dt(M,y,L,G,H,V){let ot=r.convert(L.format,L.colorSpace),nt=r.convert(L.type),st=w(L.internalFormat,ot,nt,L.colorSpace);if(!n.get(y).__hasExternalTextures){let St=Math.max(1,y.width>>V),et=Math.max(1,y.height>>V);H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?e.texImage3D(H,V,st,St,et,y.depth,0,ot,nt,null):e.texImage2D(H,V,st,St,et,0,ot,nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,M),ft(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,H,n.get(L).__webglTexture,0,bt(y)):(H===i.TEXTURE_2D||H>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,H,n.get(L).__webglTexture,V),e.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(M,y,L){if(i.bindRenderbuffer(i.RENDERBUFFER,M),y.depthBuffer&&!y.stencilBuffer){let G=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(L||ft(y)){let H=y.depthTexture;H&&H.isDepthTexture&&(H.type===mn?G=i.DEPTH_COMPONENT32F:H.type===pn&&(G=i.DEPTH_COMPONENT24));let V=bt(y);ft(y)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,V,G,y.width,y.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,V,G,y.width,y.height)}else i.renderbufferStorage(i.RENDERBUFFER,G,y.width,y.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,M)}else if(y.depthBuffer&&y.stencilBuffer){let G=bt(y);L&&ft(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,G,i.DEPTH24_STENCIL8,y.width,y.height):ft(y)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,G,i.DEPTH24_STENCIL8,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,M)}else{let G=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let H=0;H<G.length;H++){let V=G[H],ot=r.convert(V.format,V.colorSpace),nt=r.convert(V.type),st=w(V.internalFormat,ot,nt,V.colorSpace),mt=bt(y);L&&ft(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,st,y.width,y.height):ft(y)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,st,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,st,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(M,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,M),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W(y.depthTexture,0);let G=n.get(y.depthTexture).__webglTexture,H=bt(y);if(y.depthTexture.format===Un)ft(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,G,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,G,0);else if(y.depthTexture.format===mi)ft(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,G,0,H):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function vt(M){let y=n.get(M),L=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!y.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");Dt(y.__webglFramebuffer,M)}else if(L){y.__webglDepthbuffer=[];for(let G=0;G<6;G++)e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[G]),y.__webglDepthbuffer[G]=i.createRenderbuffer(),yt(y.__webglDepthbuffer[G],M,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),yt(y.__webglDepthbuffer,M,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(M,y,L){let G=n.get(M);y!==void 0&&dt(G.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&vt(M)}function z(M){let y=M.texture,L=n.get(M),G=n.get(y);M.addEventListener("dispose",F),M.isWebGLMultipleRenderTargets!==!0&&(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=y.version,o.memory.textures++);let H=M.isWebGLCubeRenderTarget===!0,V=M.isWebGLMultipleRenderTargets===!0,ot=f(M)||a;if(H){L.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(a&&y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer[nt]=[];for(let st=0;st<y.mipmaps.length;st++)L.__webglFramebuffer[nt][st]=i.createFramebuffer()}else L.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer=[];for(let nt=0;nt<y.mipmaps.length;nt++)L.__webglFramebuffer[nt]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(V)if(s.drawBuffers){let nt=M.texture;for(let st=0,mt=nt.length;st<mt;st++){let St=n.get(nt[st]);St.__webglTexture===void 0&&(St.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&ft(M)===!1){let nt=V?y:[y];L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let st=0;st<nt.length;st++){let mt=nt[st];L.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[st]);let St=r.convert(mt.format,mt.colorSpace),et=r.convert(mt.type),Ht=w(mt.internalFormat,St,et,mt.colorSpace,M.isXRRenderTarget===!0),Ct=bt(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,Ht,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,L.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),yt(L.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(H){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),q(i.TEXTURE_CUBE_MAP,y,ot);for(let nt=0;nt<6;nt++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let st=0;st<y.mipmaps.length;st++)dt(L.__webglFramebuffer[nt][st],M,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,st);else dt(L.__webglFramebuffer[nt],M,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);v(y,ot)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(V){let nt=M.texture;for(let st=0,mt=nt.length;st<mt;st++){let St=nt[st],et=n.get(St);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),q(i.TEXTURE_2D,St,ot),dt(L.__webglFramebuffer,M,St,i.COLOR_ATTACHMENT0+st,i.TEXTURE_2D,0),v(St,ot)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let nt=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?nt=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(nt,G.__webglTexture),q(nt,y,ot),a&&y.mipmaps&&y.mipmaps.length>0)for(let st=0;st<y.mipmaps.length;st++)dt(L.__webglFramebuffer[st],M,y,i.COLOR_ATTACHMENT0,nt,st);else dt(L.__webglFramebuffer,M,y,i.COLOR_ATTACHMENT0,nt,0);v(y,ot)&&m(nt),e.unbindTexture()}M.depthBuffer&&vt(M)}function Xt(M){let y=f(M)||a,L=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let G=0,H=L.length;G<H;G++){let V=L[G];if(v(V,y)){let ot=M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,nt=n.get(V).__webglTexture;e.bindTexture(ot,nt),m(ot),e.unbindTexture()}}}function xt(M){if(a&&M.samples>0&&ft(M)===!1){let y=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],L=M.width,G=M.height,H=i.COLOR_BUFFER_BIT,V=[],ot=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=n.get(M),st=M.isWebGLMultipleRenderTargets===!0;if(st)for(let mt=0;mt<y.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,nt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,nt.__webglFramebuffer);for(let mt=0;mt<y.length;mt++){V.push(i.COLOR_ATTACHMENT0+mt),M.depthBuffer&&V.push(ot);let St=nt.__ignoreDepthValues!==void 0?nt.__ignoreDepthValues:!1;if(St===!1&&(M.depthBuffer&&(H|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&(H|=i.STENCIL_BUFFER_BIT)),st&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,nt.__webglColorRenderbuffer[mt]),St===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ot]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ot])),st){let et=n.get(y[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,L,G,0,0,L,G,H,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,V)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let mt=0;mt<y.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,nt.__webglColorRenderbuffer[mt]);let St=n.get(y[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,St,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,nt.__webglMultisampledFramebuffer)}}function bt(M){return Math.min(s.maxSamples,M.samples)}function ft(M){let y=n.get(M);return a&&M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Z(M){let y=o.render.frame;h.get(M)!==y&&(h.set(M,y),M.update())}function j(M,y){let L=M.colorSpace,G=M.format,H=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===qr||L!==qe&&L!==fe&&(Kt.getTransfer(L)===Jt?a===!1?t.has("EXT_sRGB")===!0&&G===Ne?(M.format=qr,M.minFilter=Se,M.generateMipmaps=!1):y=Ls.sRGBToLinear(y):(G!==Ne||H!==je)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),y}this.allocateTextureUnit=C,this.resetTextureUnits=it,this.setTexture2D=W,this.setTexture2DArray=J,this.setTexture3D=K,this.setTextureCube=Q,this.rebindTextures=Ot,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=ft}function Lp(i,t,e){let n=e.isWebGL2;function s(r,o=fe){let a,c=Kt.getTransfer(o);if(r===je)return i.UNSIGNED_BYTE;if(r===xc)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Mc)return i.UNSIGNED_SHORT_5_5_5_1;if(r===_h)return i.BYTE;if(r===wh)return i.SHORT;if(r===xa)return i.UNSIGNED_SHORT;if(r===yc)return i.INT;if(r===pn)return i.UNSIGNED_INT;if(r===mn)return i.FLOAT;if(r===zi)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===bh)return i.ALPHA;if(r===Ne)return i.RGBA;if(r===Sh)return i.LUMINANCE;if(r===Th)return i.LUMINANCE_ALPHA;if(r===Un)return i.DEPTH_COMPONENT;if(r===mi)return i.DEPTH_STENCIL;if(r===qr)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Eh)return i.RED;if(r===vc)return i.RED_INTEGER;if(r===Dh)return i.RG;if(r===_c)return i.RG_INTEGER;if(r===wc)return i.RGBA_INTEGER;if(r===cr||r===lr||r===hr||r===ur)if(c===Jt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===cr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===lr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===hr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ur)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===cr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===lr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===hr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ur)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===$a||r===to||r===eo||r===no)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===$a)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===to)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===eo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===no)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===bc)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===io||r===so)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===io)return c===Jt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===so)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ro||r===ao||r===oo||r===co||r===lo||r===ho||r===uo||r===Ao||r===fo||r===po||r===mo||r===go||r===yo||r===xo)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ro)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ao)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===oo)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===co)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===lo)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ho)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===uo)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ao)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fo)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===po)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===mo)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===go)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===yo)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===xo)return c===Jt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===dr||r===Mo||r===vo)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===dr)return c===Jt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Mo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===vo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ph||r===_o||r===wo||r===bo)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===dr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===_o)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===wo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===bo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zn?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var aa=class extends ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ye=class extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cp={type:"move"},Ni=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let f=e.getJointPose(x,n),u=this._getHandJoint(l,x);f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=f.radius),u.visible=f!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],A=h.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&A>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&A<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cp)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ye;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},oa=class extends Mn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,A=null,p=null,g=null,x=e.getContextAttributes(),f=null,u=null,v=[],m=[],w=new Qt,D=null,E=new ve;E.layers.enable(1),E.viewport=new ge;let T=new ve;T.layers.enable(2),T.viewport=new ge;let F=[E,T],_=new aa;_.layers.enable(1),_.layers.enable(2);let S=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let tt=v[q];return tt===void 0&&(tt=new Ni,v[q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(q){let tt=v[q];return tt===void 0&&(tt=new Ni,v[q]=tt),tt.getGripSpace()},this.getHand=function(q){let tt=v[q];return tt===void 0&&(tt=new Ni,v[q]=tt),tt.getHandSpace()};function Y(q){let tt=m.indexOf(q.inputSource);if(tt===-1)return;let lt=v[tt];lt!==void 0&&(lt.update(q.inputSource,q.frame,l||o),lt.dispatchEvent({type:q.type,data:q.inputSource}))}function it(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",it),s.removeEventListener("inputsourceschange",C);for(let q=0;q<v.length;q++){let tt=m[q];tt!==null&&(m[q]=null,v[q].disconnect(tt))}S=null,O=null,t.setRenderTarget(f),p=null,A=null,d=null,s=null,u=null,ct.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return A!==null?A:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",it),s.addEventListener("inputsourceschange",C),x.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(w),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let tt={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),u=new cn(p.framebufferWidth,p.framebufferHeight,{format:Ne,type:je,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let tt=null,lt=null,gt=null;x.depth&&(gt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=x.stencil?mi:Un,lt=x.stencil?zn:pn);let dt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};d=new XRWebGLBinding(s,e),A=d.createProjectionLayer(dt),s.updateRenderState({layers:[A]}),t.setPixelRatio(1),t.setSize(A.textureWidth,A.textureHeight,!1),u=new cn(A.textureWidth,A.textureHeight,{format:Ne,type:je,depthTexture:new qs(A.textureWidth,A.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let yt=t.properties.get(u);yt.__ignoreDepthValues=A.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ct.setContext(s),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function C(q){for(let tt=0;tt<q.removed.length;tt++){let lt=q.removed[tt],gt=m.indexOf(lt);gt>=0&&(m[gt]=null,v[gt].disconnect(lt))}for(let tt=0;tt<q.added.length;tt++){let lt=q.added[tt],gt=m.indexOf(lt);if(gt===-1){for(let yt=0;yt<v.length;yt++)if(yt>=m.length){m.push(lt),gt=yt;break}else if(m[yt]===null){m[yt]=lt,gt=yt;break}if(gt===-1)break}let dt=v[gt];dt&&dt.connect(lt)}}let N=new R,W=new R;function J(q,tt,lt){N.setFromMatrixPosition(tt.matrixWorld),W.setFromMatrixPosition(lt.matrixWorld);let gt=N.distanceTo(W),dt=tt.projectionMatrix.elements,yt=lt.projectionMatrix.elements,Dt=dt[14]/(dt[10]-1),vt=dt[14]/(dt[10]+1),Ot=(dt[9]+1)/dt[5],z=(dt[9]-1)/dt[5],Xt=(dt[8]-1)/dt[0],xt=(yt[8]+1)/yt[0],bt=Dt*Xt,ft=Dt*xt,Z=gt/(-Xt+xt),j=Z*-Xt;tt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(j),q.translateZ(Z),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();let M=Dt+Z,y=vt+Z,L=bt-j,G=ft+(gt-j),H=Ot*vt/y*M,V=z*vt/y*M;q.projectionMatrix.makePerspective(L,G,H,V,M,y),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function K(q,tt){tt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(tt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;_.near=T.near=E.near=q.near,_.far=T.far=E.far=q.far,(S!==_.near||O!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),S=_.near,O=_.far);let tt=q.parent,lt=_.cameras;K(_,tt);for(let gt=0;gt<lt.length;gt++)K(lt[gt],tt);lt.length===2?J(_,E,T):_.projectionMatrix.copy(E.projectionMatrix),Q(q,_,tt)};function Q(q,tt,lt){lt===null?q.matrix.copy(tt.matrixWorld):(q.matrix.copy(lt.matrixWorld),q.matrix.invert(),q.matrix.multiply(tt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Gr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(A===null&&p===null))return c},this.setFoveation=function(q){c=q,A!==null&&(A.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)};let X=null;function $(q,tt){if(h=tt.getViewerPose(l||o),g=tt,h!==null){let lt=h.views;p!==null&&(t.setRenderTargetFramebuffer(u,p.framebuffer),t.setRenderTarget(u));let gt=!1;lt.length!==_.cameras.length&&(_.cameras.length=0,gt=!0);for(let dt=0;dt<lt.length;dt++){let yt=lt[dt],Dt=null;if(p!==null)Dt=p.getViewport(yt);else{let Ot=d.getViewSubImage(A,yt);Dt=Ot.viewport,dt===0&&(t.setRenderTargetTextures(u,Ot.colorTexture,A.ignoreDepthValues?void 0:Ot.depthStencilTexture),t.setRenderTarget(u))}let vt=F[dt];vt===void 0&&(vt=new ve,vt.layers.enable(dt),vt.viewport=new ge,F[dt]=vt),vt.matrix.fromArray(yt.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(yt.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),dt===0&&(_.matrix.copy(vt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),gt===!0&&_.cameras.push(vt)}}for(let lt=0;lt<v.length;lt++){let gt=m[lt],dt=v[lt];gt!==null&&dt!==void 0&&dt.update(gt,tt,l||o)}X&&X(q,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),g=null}let ct=new Cc;ct.setAnimationLoop($),this.setAnimationLoop=function(q){X=q},this.dispose=function(){}}};function Np(i,t){function e(f,u){f.matrixAutoUpdate===!0&&f.updateMatrix(),u.value.copy(f.matrix)}function n(f,u){u.color.getRGB(f.fogColor.value,Lc(i)),u.isFog?(f.fogNear.value=u.near,f.fogFar.value=u.far):u.isFogExp2&&(f.fogDensity.value=u.density)}function s(f,u,v,m,w){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(f,u):u.isMeshToonMaterial?(r(f,u),d(f,u)):u.isMeshPhongMaterial?(r(f,u),h(f,u)):u.isMeshStandardMaterial?(r(f,u),A(f,u),u.isMeshPhysicalMaterial&&p(f,u,w)):u.isMeshMatcapMaterial?(r(f,u),g(f,u)):u.isMeshDepthMaterial?r(f,u):u.isMeshDistanceMaterial?(r(f,u),x(f,u)):u.isMeshNormalMaterial?r(f,u):u.isLineBasicMaterial?(o(f,u),u.isLineDashedMaterial&&a(f,u)):u.isPointsMaterial?c(f,u,v,m):u.isSpriteMaterial?l(f,u):u.isShadowMaterial?(f.color.value.copy(u.color),f.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(f,u){f.opacity.value=u.opacity,u.color&&f.diffuse.value.copy(u.color),u.emissive&&f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(f.map.value=u.map,e(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,e(u.alphaMap,f.alphaMapTransform)),u.bumpMap&&(f.bumpMap.value=u.bumpMap,e(u.bumpMap,f.bumpMapTransform),f.bumpScale.value=u.bumpScale,u.side===De&&(f.bumpScale.value*=-1)),u.normalMap&&(f.normalMap.value=u.normalMap,e(u.normalMap,f.normalMapTransform),f.normalScale.value.copy(u.normalScale),u.side===De&&f.normalScale.value.negate()),u.displacementMap&&(f.displacementMap.value=u.displacementMap,e(u.displacementMap,f.displacementMapTransform),f.displacementScale.value=u.displacementScale,f.displacementBias.value=u.displacementBias),u.emissiveMap&&(f.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,f.emissiveMapTransform)),u.specularMap&&(f.specularMap.value=u.specularMap,e(u.specularMap,f.specularMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest);let v=t.get(u).envMap;if(v&&(f.envMap.value=v,f.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=u.reflectivity,f.ior.value=u.ior,f.refractionRatio.value=u.refractionRatio),u.lightMap){f.lightMap.value=u.lightMap;let m=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=u.lightMapIntensity*m,e(u.lightMap,f.lightMapTransform)}u.aoMap&&(f.aoMap.value=u.aoMap,f.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,f.aoMapTransform))}function o(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,u.map&&(f.map.value=u.map,e(u.map,f.mapTransform))}function a(f,u){f.dashSize.value=u.dashSize,f.totalSize.value=u.dashSize+u.gapSize,f.scale.value=u.scale}function c(f,u,v,m){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.size.value=u.size*v,f.scale.value=m*.5,u.map&&(f.map.value=u.map,e(u.map,f.uvTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,e(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function l(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.rotation.value=u.rotation,u.map&&(f.map.value=u.map,e(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,e(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function h(f,u){f.specular.value.copy(u.specular),f.shininess.value=Math.max(u.shininess,1e-4)}function d(f,u){u.gradientMap&&(f.gradientMap.value=u.gradientMap)}function A(f,u){f.metalness.value=u.metalness,u.metalnessMap&&(f.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,f.metalnessMapTransform)),f.roughness.value=u.roughness,u.roughnessMap&&(f.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,f.roughnessMapTransform)),t.get(u).envMap&&(f.envMapIntensity.value=u.envMapIntensity)}function p(f,u,v){f.ior.value=u.ior,u.sheen>0&&(f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),f.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(f.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,f.sheenColorMapTransform)),u.sheenRoughnessMap&&(f.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,f.sheenRoughnessMapTransform))),u.clearcoat>0&&(f.clearcoat.value=u.clearcoat,f.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(f.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,f.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(f.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===De&&f.clearcoatNormalScale.value.negate())),u.iridescence>0&&(f.iridescence.value=u.iridescence,f.iridescenceIOR.value=u.iridescenceIOR,f.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(f.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,f.iridescenceMapTransform)),u.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),u.transmission>0&&(f.transmission.value=u.transmission,f.transmissionSamplerMap.value=v.texture,f.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(f.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,f.transmissionMapTransform)),f.thickness.value=u.thickness,u.thicknessMap&&(f.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=u.attenuationDistance,f.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(f.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(f.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=u.specularIntensity,f.specularColor.value.copy(u.specularColor),u.specularColorMap&&(f.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,f.specularColorMapTransform)),u.specularIntensityMap&&(f.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,u){u.matcap&&(f.matcap.value=u.matcap)}function x(f,u){let v=t.get(u).light;f.referencePosition.value.setFromMatrixPosition(v.matrixWorld),f.nearDistance.value=v.shadow.camera.near,f.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Rp(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,m){let w=m.program;n.uniformBlockBinding(v,w)}function l(v,m){let w=s[v.id];w===void 0&&(g(v),w=h(v),s[v.id]=w,v.addEventListener("dispose",f));let D=m.program;n.updateUBOMapping(v,D);let E=t.render.frame;r[v.id]!==E&&(A(v),r[v.id]=E)}function h(v){let m=d();v.__bindingPointIndex=m;let w=i.createBuffer(),D=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,D,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,m,w),w}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function A(v){let m=s[v.id],w=v.uniforms,D=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,m);for(let E=0,T=w.length;E<T;E++){let F=Array.isArray(w[E])?w[E]:[w[E]];for(let _=0,S=F.length;_<S;_++){let O=F[_];if(p(O,E,_,D)===!0){let Y=O.__offset,it=Array.isArray(O.value)?O.value:[O.value],C=0;for(let N=0;N<it.length;N++){let W=it[N],J=x(W);typeof W=="number"||typeof W=="boolean"?(O.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,Y+C,O.__data)):W.isMatrix3?(O.__data[0]=W.elements[0],O.__data[1]=W.elements[1],O.__data[2]=W.elements[2],O.__data[3]=0,O.__data[4]=W.elements[3],O.__data[5]=W.elements[4],O.__data[6]=W.elements[5],O.__data[7]=0,O.__data[8]=W.elements[6],O.__data[9]=W.elements[7],O.__data[10]=W.elements[8],O.__data[11]=0):(W.toArray(O.__data,C),C+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,m,w,D){let E=v.value,T=m+"_"+w;if(D[T]===void 0)return typeof E=="number"||typeof E=="boolean"?D[T]=E:D[T]=E.clone(),!0;{let F=D[T];if(typeof E=="number"||typeof E=="boolean"){if(F!==E)return D[T]=E,!0}else if(F.equals(E)===!1)return F.copy(E),!0}return!1}function g(v){let m=v.uniforms,w=0,D=16;for(let T=0,F=m.length;T<F;T++){let _=Array.isArray(m[T])?m[T]:[m[T]];for(let S=0,O=_.length;S<O;S++){let Y=_[S],it=Array.isArray(Y.value)?Y.value:[Y.value];for(let C=0,N=it.length;C<N;C++){let W=it[C],J=x(W),K=w%D;K!==0&&D-K<J.boundary&&(w+=D-K),Y.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=w,w+=J.storage}}}let E=w%D;return E>0&&(w+=D-E),v.__size=w,v.__cache={},this}function x(v){let m={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(m.boundary=4,m.storage=4):v.isVector2?(m.boundary=8,m.storage=8):v.isVector3||v.isColor?(m.boundary=16,m.storage=12):v.isVector4?(m.boundary=16,m.storage=16):v.isMatrix3?(m.boundary=48,m.storage=48):v.isMatrix4?(m.boundary=64,m.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),m}function f(v){let m=v.target;m.removeEventListener("dispose",f);let w=o.indexOf(m.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[m.id]),delete s[m.id],delete r[m.id]}function u(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:u}}var Bi=class{constructor(t={}){let{canvas:e=Hh(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let A;n!==null?A=n.getContextAttributes().alpha:A=o;let p=new Uint32Array(4),g=new Int32Array(4),x=null,f=null,u=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=me,this._useLegacyLights=!1,this.toneMapping=yn,this.toneMappingExposure=1;let m=this,w=!1,D=0,E=0,T=null,F=-1,_=null,S=new ge,O=new ge,Y=null,it=new qt(0),C=0,N=e.width,W=e.height,J=1,K=null,Q=null,X=new ge(0,0,N,W),$=new ge(0,0,N,W),ct=!1,q=new ks,tt=!1,lt=!1,gt=null,dt=new $t,yt=new Qt,Dt=new R,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ot(){return T===null?J:1}let z=n;function Xt(b,I){for(let B=0;B<b.length;B++){let k=b[B],U=e.getContext(k,I);if(U!==null)return U}return null}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",P,!1),e.addEventListener("webglcontextcreationerror",ht,!1),z===null){let I=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&I.shift(),z=Xt(I,b),z===null)throw Xt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let xt,bt,ft,Z,j,M,y,L,G,H,V,ot,nt,st,mt,St,et,Ht,Ct,Tt,_t,pt,It,Gt;function ie(){xt=new XA(z),bt=new QA(z,xt,t),xt.init(bt),pt=new Lp(z,xt,bt),ft=new Dp(z,xt,bt),Z=new tf(z),j=new mp,M=new Pp(z,xt,ft,j,bt,pt,Z),y=new VA(m),L=new JA(m),G=new cu(z,bt),It=new GA(z,xt,G,bt),H=new ZA(z,G,Z,It),V=new rf(z,H,G,Z),Ct=new sf(z,bt,M),St=new KA(j),ot=new pp(m,y,L,xt,bt,It,St),nt=new Np(m,j),st=new yp,mt=new bp(xt,bt),Ht=new qA(m,y,L,ft,V,A,c),et=new Ep(m,V,bt),Gt=new Rp(z,Z,bt,ft),Tt=new WA(z,xt,Z,bt),_t=new $A(z,xt,Z,bt),Z.programs=ot.programs,m.capabilities=bt,m.extensions=xt,m.properties=j,m.renderLists=st,m.shadowMap=et,m.state=ft,m.info=Z}ie();let Ft=new oa(m,z);this.xr=Ft,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let b=xt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=xt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(b){b!==void 0&&(J=b,this.setSize(N,W,!1))},this.getSize=function(b){return b.set(N,W)},this.setSize=function(b,I,B=!0){if(Ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=b,W=I,e.width=Math.floor(b*J),e.height=Math.floor(I*J),B===!0&&(e.style.width=b+"px",e.style.height=I+"px"),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(N*J,W*J).floor()},this.setDrawingBufferSize=function(b,I,B){N=b,W=I,J=B,e.width=Math.floor(b*B),e.height=Math.floor(I*B),this.setViewport(0,0,b,I)},this.getCurrentViewport=function(b){return b.copy(S)},this.getViewport=function(b){return b.copy(X)},this.setViewport=function(b,I,B,k){b.isVector4?X.set(b.x,b.y,b.z,b.w):X.set(b,I,B,k),ft.viewport(S.copy(X).multiplyScalar(J).floor())},this.getScissor=function(b){return b.copy($)},this.setScissor=function(b,I,B,k){b.isVector4?$.set(b.x,b.y,b.z,b.w):$.set(b,I,B,k),ft.scissor(O.copy($).multiplyScalar(J).floor())},this.getScissorTest=function(){return ct},this.setScissorTest=function(b){ft.setScissorTest(ct=b)},this.setOpaqueSort=function(b){K=b},this.setTransparentSort=function(b){Q=b},this.getClearColor=function(b){return b.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(b=!0,I=!0,B=!0){let k=0;if(b){let U=!1;if(T!==null){let At=T.texture.format;U=At===wc||At===_c||At===vc}if(U){let At=T.texture.type,Mt=At===je||At===pn||At===xa||At===zn||At===xc||At===Mc,Et=Ht.getClearColor(),Lt=Ht.getClearAlpha(),Bt=Et.r,Nt=Et.g,Rt=Et.b;Mt?(p[0]=Bt,p[1]=Nt,p[2]=Rt,p[3]=Lt,z.clearBufferuiv(z.COLOR,0,p)):(g[0]=Bt,g[1]=Nt,g[2]=Rt,g[3]=Lt,z.clearBufferiv(z.COLOR,0,g))}else k|=z.COLOR_BUFFER_BIT}I&&(k|=z.DEPTH_BUFFER_BIT),B&&(k|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",P,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),st.dispose(),mt.dispose(),j.dispose(),y.dispose(),L.dispose(),V.dispose(),It.dispose(),Gt.dispose(),ot.dispose(),Ft.dispose(),Ft.removeEventListener("sessionstart",_e),Ft.removeEventListener("sessionend",jt),gt&&(gt.dispose(),gt=null),we.stop()};function rt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let b=Z.autoReset,I=et.enabled,B=et.autoUpdate,k=et.needsUpdate,U=et.type;ie(),Z.autoReset=b,et.enabled=I,et.autoUpdate=B,et.needsUpdate=k,et.type=U}function ht(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ut(b){let I=b.target;I.removeEventListener("dispose",ut),Pt(I)}function Pt(b){wt(b),j.remove(b)}function wt(b){let I=j.get(b).programs;I!==void 0&&(I.forEach(function(B){ot.releaseProgram(B)}),b.isShaderMaterial&&ot.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,B,k,U,At){I===null&&(I=vt);let Mt=U.isMesh&&U.matrixWorld.determinant()<0,Et=Sl(b,I,B,k,U);ft.setMaterial(k,Mt);let Lt=B.index,Bt=1;if(k.wireframe===!0){if(Lt=H.getWireframeAttribute(B),Lt===void 0)return;Bt=2}let Nt=B.drawRange,Rt=B.attributes.position,oe=Nt.start*Bt,Pe=(Nt.start+Nt.count)*Bt;At!==null&&(oe=Math.max(oe,At.start*Bt),Pe=Math.min(Pe,(At.start+At.count)*Bt)),Lt!==null?(oe=Math.max(oe,0),Pe=Math.min(Pe,Lt.count)):Rt!=null&&(oe=Math.max(oe,0),Pe=Math.min(Pe,Rt.count));let de=Pe-oe;if(de<0||de===1/0)return;It.setup(U,k,Et,B,Lt);let Xe,ne=Tt;if(Lt!==null&&(Xe=G.get(Lt),ne=_t,ne.setIndex(Xe)),U.isMesh)k.wireframe===!0?(ft.setLineWidth(k.wireframeLinewidth*Ot()),ne.setMode(z.LINES)):ne.setMode(z.TRIANGLES);else if(U.isLine){let kt=k.linewidth;kt===void 0&&(kt=1),ft.setLineWidth(kt*Ot()),U.isLineSegments?ne.setMode(z.LINES):U.isLineLoop?ne.setMode(z.LINE_LOOP):ne.setMode(z.LINE_STRIP)}else U.isPoints?ne.setMode(z.POINTS):U.isSprite&&ne.setMode(z.TRIANGLES);if(U.isBatchedMesh)ne.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else if(U.isInstancedMesh)ne.renderInstances(oe,de,U.count);else if(B.isInstancedBufferGeometry){let kt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Zs=Math.min(B.instanceCount,kt);ne.renderInstances(oe,de,Zs)}else ne.render(oe,de)};function Vt(b,I,B){b.transparent===!0&&b.side===re&&b.forceSinglePass===!1?(b.side=De,b.needsUpdate=!0,Ji(b,I,B),b.side=xn,b.needsUpdate=!0,Ji(b,I,B),b.side=re):Ji(b,I,B)}this.compile=function(b,I,B=null){B===null&&(B=b),f=mt.get(B),f.init(),v.push(f),B.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),b!==B&&b.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights(m._useLegacyLights);let k=new Set;return b.traverse(function(U){let At=U.material;if(At)if(Array.isArray(At))for(let Mt=0;Mt<At.length;Mt++){let Et=At[Mt];Vt(Et,B,U),k.add(Et)}else Vt(At,B,U),k.add(At)}),v.pop(),f=null,k},this.compileAsync=function(b,I,B=null){let k=this.compile(b,I,B);return new Promise(U=>{function At(){if(k.forEach(function(Mt){j.get(Mt).currentProgram.isReady()&&k.delete(Mt)}),k.size===0){U(b);return}setTimeout(At,10)}xt.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Yt=null;function ue(b){Yt&&Yt(b)}function _e(){we.stop()}function jt(){we.start()}let we=new Cc;we.setAnimationLoop(ue),typeof self<"u"&&we.setContext(self),this.setAnimationLoop=function(b){Yt=b,Ft.setAnimationLoop(b),b===null?we.stop():we.start()},Ft.addEventListener("sessionstart",_e),Ft.addEventListener("sessionend",jt),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Ft.enabled===!0&&Ft.isPresenting===!0&&(Ft.cameraAutoUpdate===!0&&Ft.updateCamera(I),I=Ft.getCamera()),b.isScene===!0&&b.onBeforeRender(m,b,I,T),f=mt.get(b,v.length),f.init(),v.push(f),dt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),q.setFromProjectionMatrix(dt),lt=this.localClippingEnabled,tt=St.init(this.clippingPlanes,lt),x=st.get(b,u.length),x.init(),u.push(x),Ke(b,I,0,m.sortObjects),x.finish(),m.sortObjects===!0&&x.sort(K,Q),this.info.render.frame++,tt===!0&&St.beginShadows();let B=f.state.shadowsArray;if(et.render(B,b,I),tt===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ht.render(x,b),f.setupLights(m._useLegacyLights),I.isArrayCamera){let k=I.cameras;for(let U=0,At=k.length;U<At;U++){let Mt=k[U];ka(x,b,Mt,Mt.viewport)}}else ka(x,b,I);T!==null&&(M.updateMultisampleRenderTarget(T),M.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(m,b,I),It.resetDefaultState(),F=-1,_=null,v.pop(),v.length>0?f=v[v.length-1]:f=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function Ke(b,I,B,k){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||q.intersectsSprite(b)){k&&Dt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(dt);let Mt=V.update(b),Et=b.material;Et.visible&&x.push(b,Mt,Et,B,Dt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||q.intersectsObject(b))){let Mt=V.update(b),Et=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Dt.copy(b.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Dt.copy(Mt.boundingSphere.center)),Dt.applyMatrix4(b.matrixWorld).applyMatrix4(dt)),Array.isArray(Et)){let Lt=Mt.groups;for(let Bt=0,Nt=Lt.length;Bt<Nt;Bt++){let Rt=Lt[Bt],oe=Et[Rt.materialIndex];oe&&oe.visible&&x.push(b,Mt,oe,B,Dt.z,Rt)}}else Et.visible&&x.push(b,Mt,Et,B,Dt.z,null)}}let At=b.children;for(let Mt=0,Et=At.length;Mt<Et;Mt++)Ke(At[Mt],I,B,k)}function ka(b,I,B,k){let U=b.opaque,At=b.transmissive,Mt=b.transparent;f.setupLightsView(B),tt===!0&&St.setGlobalState(m.clippingPlanes,B),At.length>0&&bl(U,At,I,B),k&&ft.viewport(S.copy(k)),U.length>0&&ji(U,I,B),At.length>0&&ji(At,I,B),Mt.length>0&&ji(Mt,I,B),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function bl(b,I,B,k){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;let At=bt.isWebGL2;gt===null&&(gt=new cn(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")?zi:je,minFilter:Ii,samples:At?4:0})),m.getDrawingBufferSize(yt),At?gt.setSize(yt.x,yt.y):gt.setSize(Wr(yt.x),Wr(yt.y));let Mt=m.getRenderTarget();m.setRenderTarget(gt),m.getClearColor(it),C=m.getClearAlpha(),C<1&&m.setClearColor(16777215,.5),m.clear();let Et=m.toneMapping;m.toneMapping=yn,ji(b,B,k),M.updateMultisampleRenderTarget(gt),M.updateRenderTargetMipmap(gt);let Lt=!1;for(let Bt=0,Nt=I.length;Bt<Nt;Bt++){let Rt=I[Bt],oe=Rt.object,Pe=Rt.geometry,de=Rt.material,Xe=Rt.group;if(de.side===re&&oe.layers.test(k.layers)){let ne=de.side;de.side=De,de.needsUpdate=!0,Ha(oe,B,k,Pe,de,Xe),de.side=ne,de.needsUpdate=!0,Lt=!0}}Lt===!0&&(M.updateMultisampleRenderTarget(gt),M.updateRenderTargetMipmap(gt)),m.setRenderTarget(Mt),m.setClearColor(it,C),m.toneMapping=Et}function ji(b,I,B){let k=I.isScene===!0?I.overrideMaterial:null;for(let U=0,At=b.length;U<At;U++){let Mt=b[U],Et=Mt.object,Lt=Mt.geometry,Bt=k===null?Mt.material:k,Nt=Mt.group;Et.layers.test(B.layers)&&Ha(Et,I,B,Lt,Bt,Nt)}}function Ha(b,I,B,k,U,At){b.onBeforeRender(m,I,B,k,U,At),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),U.onBeforeRender(m,I,B,k,b,At),U.transparent===!0&&U.side===re&&U.forceSinglePass===!1?(U.side=De,U.needsUpdate=!0,m.renderBufferDirect(B,I,k,U,b,At),U.side=xn,U.needsUpdate=!0,m.renderBufferDirect(B,I,k,U,b,At),U.side=re):m.renderBufferDirect(B,I,k,U,b,At),b.onAfterRender(m,I,B,k,U,At)}function Ji(b,I,B){I.isScene!==!0&&(I=vt);let k=j.get(b),U=f.state.lights,At=f.state.shadowsArray,Mt=U.state.version,Et=ot.getParameters(b,U.state,At,I,B),Lt=ot.getProgramCacheKey(Et),Bt=k.programs;k.environment=b.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(b.isMeshStandardMaterial?L:y).get(b.envMap||k.environment),Bt===void 0&&(b.addEventListener("dispose",ut),Bt=new Map,k.programs=Bt);let Nt=Bt.get(Lt);if(Nt!==void 0){if(k.currentProgram===Nt&&k.lightsStateVersion===Mt)return Ga(b,Et),Nt}else Et.uniforms=ot.getUniforms(b),b.onBuild(B,Et,m),b.onBeforeCompile(Et,m),Nt=ot.acquireProgram(Et,Lt),Bt.set(Lt,Nt),k.uniforms=Et.uniforms;let Rt=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Rt.clippingPlanes=St.uniform),Ga(b,Et),k.needsLights=El(b),k.lightsStateVersion=Mt,k.needsLights&&(Rt.ambientLightColor.value=U.state.ambient,Rt.lightProbe.value=U.state.probe,Rt.directionalLights.value=U.state.directional,Rt.directionalLightShadows.value=U.state.directionalShadow,Rt.spotLights.value=U.state.spot,Rt.spotLightShadows.value=U.state.spotShadow,Rt.rectAreaLights.value=U.state.rectArea,Rt.ltc_1.value=U.state.rectAreaLTC1,Rt.ltc_2.value=U.state.rectAreaLTC2,Rt.pointLights.value=U.state.point,Rt.pointLightShadows.value=U.state.pointShadow,Rt.hemisphereLights.value=U.state.hemi,Rt.directionalShadowMap.value=U.state.directionalShadowMap,Rt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Rt.spotShadowMap.value=U.state.spotShadowMap,Rt.spotLightMatrix.value=U.state.spotLightMatrix,Rt.spotLightMap.value=U.state.spotLightMap,Rt.pointShadowMap.value=U.state.pointShadowMap,Rt.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=Nt,k.uniformsList=null,Nt}function qa(b){if(b.uniformsList===null){let I=b.currentProgram.getUniforms();b.uniformsList=di.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function Ga(b,I){let B=j.get(b);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function Sl(b,I,B,k,U){I.isScene!==!0&&(I=vt),M.resetTextureUnits();let At=I.fog,Mt=k.isMeshStandardMaterial?I.environment:null,Et=T===null?m.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:qe,Lt=(k.isMeshStandardMaterial?L:y).get(k.envMap||Mt),Bt=k.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Nt=!!B.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Rt=!!B.morphAttributes.position,oe=!!B.morphAttributes.normal,Pe=!!B.morphAttributes.color,de=yn;k.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(de=m.toneMapping);let Xe=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ne=Xe!==void 0?Xe.length:0,kt=j.get(k),Zs=f.state.lights;if(tt===!0&&(lt===!0||b!==_)){let ze=b===_&&k.id===F;St.setState(k,b,ze)}let se=!1;k.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Zs.state.version||kt.outputColorSpace!==Et||U.isBatchedMesh&&kt.batching===!1||!U.isBatchedMesh&&kt.batching===!0||U.isInstancedMesh&&kt.instancing===!1||!U.isInstancedMesh&&kt.instancing===!0||U.isSkinnedMesh&&kt.skinning===!1||!U.isSkinnedMesh&&kt.skinning===!0||U.isInstancedMesh&&kt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&kt.instancingColor===!1&&U.instanceColor!==null||kt.envMap!==Lt||k.fog===!0&&kt.fog!==At||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==St.numPlanes||kt.numIntersection!==St.numIntersection)||kt.vertexAlphas!==Bt||kt.vertexTangents!==Nt||kt.morphTargets!==Rt||kt.morphNormals!==oe||kt.morphColors!==Pe||kt.toneMapping!==de||bt.isWebGL2===!0&&kt.morphTargetsCount!==ne)&&(se=!0):(se=!0,kt.__version=k.version);let bn=kt.currentProgram;se===!0&&(bn=Ji(k,I,U));let Wa=!1,bi=!1,$s=!1,ye=bn.getUniforms(),Sn=kt.uniforms;if(ft.useProgram(bn.program)&&(Wa=!0,bi=!0,$s=!0),k.id!==F&&(F=k.id,bi=!0),Wa||_!==b){ye.setValue(z,"projectionMatrix",b.projectionMatrix),ye.setValue(z,"viewMatrix",b.matrixWorldInverse);let ze=ye.map.cameraPosition;ze!==void 0&&ze.setValue(z,Dt.setFromMatrixPosition(b.matrixWorld)),bt.logarithmicDepthBuffer&&ye.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ye.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),_!==b&&(_=b,bi=!0,$s=!0)}if(U.isSkinnedMesh){ye.setOptional(z,U,"bindMatrix"),ye.setOptional(z,U,"bindMatrixInverse");let ze=U.skeleton;ze&&(bt.floatVertexTextures?(ze.boneTexture===null&&ze.computeBoneTexture(),ye.setValue(z,"boneTexture",ze.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}U.isBatchedMesh&&(ye.setOptional(z,U,"batchingTexture"),ye.setValue(z,"batchingTexture",U._matricesTexture,M));let tr=B.morphAttributes;if((tr.position!==void 0||tr.normal!==void 0||tr.color!==void 0&&bt.isWebGL2===!0)&&Ct.update(U,B,bn),(bi||kt.receiveShadow!==U.receiveShadow)&&(kt.receiveShadow=U.receiveShadow,ye.setValue(z,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Sn.envMap.value=Lt,Sn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),bi&&(ye.setValue(z,"toneMappingExposure",m.toneMappingExposure),kt.needsLights&&Tl(Sn,$s),At&&k.fog===!0&&nt.refreshFogUniforms(Sn,At),nt.refreshMaterialUniforms(Sn,k,J,W,gt),di.upload(z,qa(kt),Sn,M)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(di.upload(z,qa(kt),Sn,M),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ye.setValue(z,"center",U.center),ye.setValue(z,"modelViewMatrix",U.modelViewMatrix),ye.setValue(z,"normalMatrix",U.normalMatrix),ye.setValue(z,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let ze=k.uniformsGroups;for(let er=0,Dl=ze.length;er<Dl;er++)if(bt.isWebGL2){let Qa=ze[er];Gt.update(Qa,bn),Gt.bind(Qa,bn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return bn}function Tl(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function El(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,I,B){j.get(b.texture).__webglTexture=I,j.get(b.depthTexture).__webglTexture=B;let k=j.get(b);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=B===void 0,k.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,I){let B=j.get(b);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,B=0){T=b,D=I,E=B;let k=!0,U=null,At=!1,Mt=!1;if(b){let Lt=j.get(b);Lt.__useDefaultFramebuffer!==void 0?(ft.bindFramebuffer(z.FRAMEBUFFER,null),k=!1):Lt.__webglFramebuffer===void 0?M.setupRenderTarget(b):Lt.__hasExternalTextures&&M.rebindTextures(b,j.get(b.texture).__webglTexture,j.get(b.depthTexture).__webglTexture);let Bt=b.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Mt=!0);let Nt=j.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Nt[I])?U=Nt[I][B]:U=Nt[I],At=!0):bt.isWebGL2&&b.samples>0&&M.useMultisampledRTT(b)===!1?U=j.get(b).__webglMultisampledFramebuffer:Array.isArray(Nt)?U=Nt[B]:U=Nt,S.copy(b.viewport),O.copy(b.scissor),Y=b.scissorTest}else S.copy(X).multiplyScalar(J).floor(),O.copy($).multiplyScalar(J).floor(),Y=ct;if(ft.bindFramebuffer(z.FRAMEBUFFER,U)&&bt.drawBuffers&&k&&ft.drawBuffers(b,U),ft.viewport(S),ft.scissor(O),ft.setScissorTest(Y),At){let Lt=j.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+I,Lt.__webglTexture,B)}else if(Mt){let Lt=j.get(b.texture),Bt=I||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Lt.__webglTexture,B||0,Bt)}F=-1},this.readRenderTargetPixels=function(b,I,B,k,U,At,Mt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=j.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Mt!==void 0&&(Et=Et[Mt]),Et){ft.bindFramebuffer(z.FRAMEBUFFER,Et);try{let Lt=b.texture,Bt=Lt.format,Nt=Lt.type;if(Bt!==Ne&&pt.convert(Bt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Rt=Nt===zi&&(xt.has("EXT_color_buffer_half_float")||bt.isWebGL2&&xt.has("EXT_color_buffer_float"));if(Nt!==je&&pt.convert(Nt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Nt===mn&&(bt.isWebGL2||xt.has("OES_texture_float")||xt.has("WEBGL_color_buffer_float")))&&!Rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-k&&B>=0&&B<=b.height-U&&z.readPixels(I,B,k,U,pt.convert(Bt),pt.convert(Nt),At)}finally{let Lt=T!==null?j.get(T).__webglFramebuffer:null;ft.bindFramebuffer(z.FRAMEBUFFER,Lt)}}},this.copyFramebufferToTexture=function(b,I,B=0){let k=Math.pow(2,-B),U=Math.floor(I.image.width*k),At=Math.floor(I.image.height*k);M.setTexture2D(I,0),z.copyTexSubImage2D(z.TEXTURE_2D,B,0,0,b.x,b.y,U,At),ft.unbindTexture()},this.copyTextureToTexture=function(b,I,B,k=0){let U=I.image.width,At=I.image.height,Mt=pt.convert(B.format),Et=pt.convert(B.type);M.setTexture2D(B,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,B.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,B.unpackAlignment),I.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,k,b.x,b.y,U,At,Mt,Et,I.image.data):I.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,k,b.x,b.y,I.mipmaps[0].width,I.mipmaps[0].height,Mt,I.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,k,b.x,b.y,Mt,Et,I.image),k===0&&B.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),ft.unbindTexture()},this.copyTextureToTexture3D=function(b,I,B,k,U=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let At=b.max.x-b.min.x+1,Mt=b.max.y-b.min.y+1,Et=b.max.z-b.min.z+1,Lt=pt.convert(k.format),Bt=pt.convert(k.type),Nt;if(k.isData3DTexture)M.setTexture3D(k,0),Nt=z.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)M.setTexture2DArray(k,0),Nt=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,k.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,k.unpackAlignment);let Rt=z.getParameter(z.UNPACK_ROW_LENGTH),oe=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Pe=z.getParameter(z.UNPACK_SKIP_PIXELS),de=z.getParameter(z.UNPACK_SKIP_ROWS),Xe=z.getParameter(z.UNPACK_SKIP_IMAGES),ne=B.isCompressedTexture?B.mipmaps[U]:B.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,ne.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ne.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,b.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,b.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,b.min.z),B.isDataTexture||B.isData3DTexture?z.texSubImage3D(Nt,U,I.x,I.y,I.z,At,Mt,Et,Lt,Bt,ne.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Nt,U,I.x,I.y,I.z,At,Mt,Et,Lt,ne.data)):z.texSubImage3D(Nt,U,I.x,I.y,I.z,At,Mt,Et,Lt,Bt,ne),z.pixelStorei(z.UNPACK_ROW_LENGTH,Rt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,oe),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Pe),z.pixelStorei(z.UNPACK_SKIP_ROWS,de),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Xe),U===0&&k.generateMipmaps&&z.generateMipmap(Nt),ft.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?M.setTextureCube(b,0):b.isData3DTexture?M.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?M.setTexture2DArray(b,0):M.setTexture2D(b,0),ft.unbindTexture()},this.resetState=function(){D=0,E=0,T=null,ft.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Ma?"display-p3":"srgb",e.unpackColorSpace=Kt.workingColorSpace===Ks?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===me?On:Sc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===On?me:qe}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},ca=class extends Bi{};ca.prototype.isWebGL1Renderer=!0;var Fi=class extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Gs=class extends Re{constructor(t=null,e=1,n=1,s,r,o,a,c,l=pe,h=pe,d,A){super(null,o,a,c,l,h,s,r,d,A),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vn=class extends Re{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ws=class extends Fn{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new Qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};function vs(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ip(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var yi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},la=class extends yi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:So,endingEnd:So}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case To:r=t,a=2*e-n;break;case Eo:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case To:o=t,c=2*n-e;break;case Eo:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,A=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),x=g*g,f=x*g,u=-A*f+2*A*x-A*g,v=(1+A)*f+(-1.5-2*A)*x+(-.5+A)*g+1,m=(-1-p)*f+(1.5+p)*x+.5*g,w=p*f-p*x;for(let D=0;D!==a;++D)r[D]=u*o[h+D]+v*o[l+D]+m*o[c+D]+w*o[d+D];return r}},ha=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),d=1-h;for(let A=0;A!==a;++A)r[A]=o[l+A]*d+o[c+A]*h;return r}},ua=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Qe=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=vs(e,this.TimeBufferType),this.values=vs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:vs(t.times,Array),values:vs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new la(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ws:e=this.InterpolantFactoryMethodDiscrete;break;case bs:e=this.InterpolantFactoryMethodLinear;break;case Ar:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ws;case this.InterpolantFactoryMethodLinear:return bs;case this.InterpolantFactoryMethodSmooth:return Ar}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Ip(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ar,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let d=a*n,A=d-n,p=d+n;for(let g=0;g!==n;++g){let x=e[d+g];if(x!==e[A+g]||x!==e[p+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,A=o*n;for(let p=0;p!==n;++p)e[A+p]=e[d+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Qe.prototype.TimeBufferType=Float32Array;Qe.prototype.ValueBufferType=Float32Array;Qe.prototype.DefaultInterpolation=bs;var kn=class extends Qe{};kn.prototype.ValueTypeName="bool";kn.prototype.ValueBufferType=Array;kn.prototype.DefaultInterpolation=ws;kn.prototype.InterpolantFactoryMethodLinear=void 0;kn.prototype.InterpolantFactoryMethodSmooth=void 0;var da=class extends Qe{};da.prototype.ValueTypeName="color";var Aa=class extends Qe{};Aa.prototype.ValueTypeName="number";var fa=class extends yi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)Ge.slerpFlat(r,0,o,l-a,o,l,c);return r}},ki=class extends Qe{InterpolantFactoryMethodLinear(t){return new fa(this.times,this.values,this.getValueSize(),t)}};ki.prototype.ValueTypeName="quaternion";ki.prototype.DefaultInterpolation=bs;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Hn=class extends Qe{};Hn.prototype.ValueTypeName="string";Hn.prototype.ValueBufferType=Array;Hn.prototype.DefaultInterpolation=ws;Hn.prototype.InterpolantFactoryMethodLinear=void 0;Hn.prototype.InterpolantFactoryMethodSmooth=void 0;var pa=class extends Qe{};pa.prototype.ValueTypeName="vector";var ma=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,A=l.length;d<A;d+=2){let p=l[d],g=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},zp=new ma,ga=class{constructor(t){this.manager=t!==void 0?t:zp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ga.DEFAULT_MATERIAL_NAME="__DEFAULT";var _a="\\[\\]\\.:\\/",Up=new RegExp("["+_a+"]","g"),wa="[^"+_a+"]",Op="[^"+_a.replace("\\.","")+"]",Bp=/((?:WC+[\/:])*)/.source.replace("WC",wa),Fp=/(WCOD+)?/.source.replace("WCOD",Op),kp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wa),Hp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wa),qp=new RegExp("^"+Bp+Fp+kp+Hp+"$"),Gp=["material","materials","bones","map"],ya=class{constructor(t,e,n){let s=n||Zt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Zt=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Up,"")}static parseTrackName(t){let e=qp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Gp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Zt.Composite=ya;Zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Zt.prototype.GetterByBindingType=[Zt.prototype._getValue_direct,Zt.prototype._getValue_array,Zt.prototype._getValue_arrayElement,Zt.prototype._getValue_toArray];Zt.prototype.SetterByBindingTypeAndVersioning=[[Zt.prototype._setValue_direct,Zt.prototype._setValue_direct_setNeedsUpdate,Zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_array,Zt.prototype._setValue_array_setNeedsUpdate,Zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_arrayElement,Zt.prototype._setValue_arrayElement_setNeedsUpdate,Zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_fromArray,Zt.prototype._setValue_fromArray_setNeedsUpdate,Zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Um=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Wp={beard:[0,3],cap:[3,132],eye:[135,80],brow:[215,29],faceline:[244,12],facemake:[256,12],glass:[268,20],mole:[288,1],mouth:[289,53],mustache:[342,5],noseline:[347,17]},Qp={beard:[0,3],cap:[3,132],caphat:[135,132],faceline:[267,12],glass:[279,1],mask:[280,12],noseline:[292,18],nose:[310,18],hair:[328,132],hairhat:[460,132],forehead:[592,132],foreheadhat:[724,132]};async function Kp(i){let t=new DecompressionStream("deflate"),e=t.writable.getWriter();return e.write(i),e.close(),new Uint8Array(await new Response(t.readable).arrayBuffer())}var Ys=class{constructor(t){if(this.u8=t instanceof Uint8Array?t:new Uint8Array(t),this.dv=new DataView(this.u8.buffer,this.u8.byteOffset,this.u8.byteLength),String.fromCharCode(...this.u8.subarray(0,4))!=="FFRA")throw new Error("Not a face resource file");this.trecs=this._recs(64,364),this.srecs=this._recs(5968,856),this._cache=new Map}_recs(t,e){let n=[];for(let s=0;s<e;s++){let r=t+s*16;n.push({pos:this.dv.getUint32(r),usize:this.dv.getUint32(r+4),csize:this.dv.getUint32(r+8)})}return n}async _blob(t,e){if(!e.pos)return null;if(this._cache.has(t))return this._cache.get(t);let n=this.u8.subarray(e.pos,e.pos+(e.csize||e.usize)),s=e.csize?await Kp(n):n.slice();return this._cache.set(t,s),s}async texture(t,e){let[n,s]=Wp[t];if(e<0||e>=s)return null;let r=await this._blob("t"+(n+e),this.trecs[n+e]);if(!r)return null;let o=new DataView(r.buffer,r.byteOffset,r.byteLength),a=r.length,c=o.getUint16(a-8),l=o.getUint16(a-6),h=o.getUint8(a-4),d=o.getUint8(a-3);return{w:c,h:l,mips:h,fmt:d,data:r.subarray(0,a-12)}}async shape(t,e){let[n,s]=Qp[t];if(e<0||e>=s)return null;let r=await this._blob("s"+(n+e),this.srecs[n+e]);if(!r)return null;let o=new DataView(r.buffer,r.byteOffset,r.byteLength),a=o.getUint32(0),c=[];for(let v=0;v<a/4;v++)c.push(o.getUint32(v*4));let l=(v,m)=>{let w=new Float32Array(m);for(let D=0;D<m;D++)w[D]=o.getFloat32(v+D*4);return w},h=c[6]/16,d=l(c[0],h*4),A=c[8]?l(c[2],h*2):null,p=r.subarray(c[1],c[1]+c[7]),g=c[10]?r.subarray(c[4],c[4]+c[10]):null,x=c[9]?r.subarray(c[3],c[3]+c[9]):null,f=new Uint16Array(c[11]);for(let v=0;v<c[11];v++)f[v]=o.getUint16(c[5]+v*2);let u=[];for(let v=12;v<a/4;v++)u.push(o.getFloat32(v*4));return{nv:h,pos:d,uv:A,nrm:p,col:g,tan:x,idx:f,header:c,bounds:u.slice(0,6),extra:u}}};function Oc(i){let t=i.length/4,e=new Float32Array(t*3);for(let n=0;n<t;n++){let s=(i[n*4]<<24|i[n*4+1]<<16|i[n*4+2]<<8|i[n*4+3])>>>0,r=h=>(h=h&1023,h>=512&&(h-=1024),Math.max(-1,h/511)),o=r(s),a=r(s>>>10),c=r(s>>>20),l=Math.hypot(o,a,c)||1;e[n*3]=o/l,e[n*3+1]=a/l,e[n*3+2]=c/l}return e}function Bc(i){let t=new Ie,e=new Float32Array(i.nv*3);for(let n=0;n<i.nv;n++)e[n*3]=i.pos[n*4],e[n*3+1]=i.pos[n*4+1],e[n*3+2]=i.pos[n*4+2];if(t.setAttribute("position",new te(e,3)),t.setAttribute("normal",new te(Oc(i.nrm),3)),i.uv&&t.setAttribute("uv",new te(i.uv,2)),i.col&&i.col.length>=i.nv*4){let n=new Float32Array(i.nv*4);for(let s=0;s<i.nv*4;s++)n[s]=i.col[s]/255;t.setAttribute("vcol",new te(n,4))}else{let n=new Float32Array(i.nv*4),s=i.col&&i.col.length>=4?[i.col[0]/255,i.col[1]/255,i.col[2]/255,i.col[3]/255]:[1,1,0,1];for(let r=0;r<i.nv;r++)n[r*4]=s[0],n[r*4+1]=s[1],n[r*4+2]=s[2],n[r*4+3]=s[3];t.setAttribute("vcol",new te(n,4))}return i.tan&&i.tan.length>=i.nv*4&&t.setAttribute("tan",new te(new Float32Array(Oc(i.tan)),3)),t.setIndex(new te(i.idx,1)),t}var qn={K:4.8117,D:300,CY:33.373,CX:-.0357},ba=[[1,1,1],[1,.878,.671],[.883,.623,.467],[1,.828,.835],[.709,.455,.343],[.445,.3,.258]];function Gn(i){let t=atob(i),e=t.length,n=new Uint8Array(e);for(let o=0;o<e;o++)n[o]=t.charCodeAt(o);let s=Math.round(Math.sqrt(e/4)),r=new Gs(n,s,s,Ne,je);return r.magFilter=Se,r.minFilter=Se,r.needsUpdate=!0,r.flipY=!1,r}var Je="varying vec3 vN; varying vec2 vUv; void main(){ vN=normalize(normalMatrix*normal); vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",Vp=`precision highp float; uniform sampler2D lut; uniform vec3 albedo; uniform sampler2D map; uniform bool useMap; varying vec3 vN; varying vec2 vUv;
void main(){ vec3 n=normalize(vN); if(!gl_FrontFacing) n=-n; vec2 q=n.xy*0.5+0.5; vec4 t=texture2D(lut,q);
 vec3 L=t.rgb*(320.0/255.0); float Sp=(t.a*96.0-32.0)/255.0;
 vec3 base=albedo; float a=1.0;
 if(useMap){ vec4 m=texture2D(map,vUv); base=mix(albedo,m.rgb,m.a); }
 gl_FragColor=vec4(clamp(base*L+vec3(Sp),0.0,1.0),1.0); }`;function Mi(i,t,e){return new ae({vertexShader:Je,fragmentShader:Vp,side:re,uniforms:{lut:{value:i},albedo:{value:new R(...t)},map:{value:e||null},useMap:{value:!!e}}})}var Sa=1.12,Yp=`precision highp float; uniform sampler2D lut; uniform sampler2D map; varying vec3 vN; varying vec2 vUv;
void main(){ vec3 n=normalize(vN); if(!gl_FrontFacing) n=-n; vec2 q=n.xy*0.5+0.5; float F=texture2D(lut,q).r*2.55; vec4 m=texture2D(map,vUv); if(m.a<0.002) discard;
 gl_FragColor=vec4(clamp(m.rgb*F*${Sa.toFixed(2)},0.0,1.0),m.a); }`;function Fc(i,t){return new ae({vertexShader:Je,fragmentShader:Yp,side:re,transparent:!0,depthWrite:!1,uniforms:{lut:{value:i},map:{value:t}}})}var jp=`precision highp float; uniform sampler2D lut; uniform sampler2D map; uniform vec3 tint; varying vec3 vN; varying vec2 vUv;
void main(){ vec3 n=normalize(vN); if(!gl_FrontFacing) n=-n; vec2 q=n.xy*0.5+0.5; vec4 t=texture2D(lut,q);
 vec3 L=t.rgb*(320.0/255.0); float Sp=(t.a*96.0-32.0)/255.0; float a=texture2D(map,vUv).r; if(a<0.002) discard;
 gl_FragColor=vec4(clamp(tint*L+vec3(Sp),0.0,1.0),a); }`;function kc(i,t,e){return new ae({vertexShader:Je,fragmentShader:jp,side:re,transparent:!0,depthWrite:!1,uniforms:{lut:{value:i},map:{value:t},tint:{value:new R(...e)}}})}function Hc(i,t=qn.K,e=qn.CX,n=qn.CY){let s=t*i/512,r=2*Math.atan(i/2/s/qn.D)*180/Math.PI,o=new ve(r,1,10,2e3);return o.position.set(e,n,qn.D),o.lookAt(e,n,0),o.updateMatrixWorld(),o}function qc(i){let t=new Bi({antialias:!0,preserveDrawingBuffer:!0,alpha:!0,premultipliedAlpha:!1});return t.setSize(i,i,!1),t.setClearColor(0,0),t.outputColorSpace=qe,t.autoClear=!0,t}var Gc="attribute vec4 vcol; varying vec3 vN; varying float vCls; void main(){ vN=normalize(normalMatrix*normal); vCls=vcol.r>0.5?1.0:0.0; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",Jp=`precision highp float; uniform sampler2D lutA; uniform sampler2D lutB; uniform vec3 albedo; varying vec3 vN; varying float vCls;
void main(){ vec3 n=normalize(vN); if(!gl_FrontFacing) n=-n; vec2 q=n.xy*0.5+0.5; vec4 t=vCls>0.5?texture2D(lutB,q):texture2D(lutA,q);
 vec3 L=t.rgb*(320.0/255.0); float Sp=(t.a*96.0-32.0)/255.0; gl_FragColor=vec4(clamp(albedo*L+vec3(Sp),0.0,1.0),1.0); }`;function Ta(i,t,e){return new ae({vertexShader:Gc,fragmentShader:Jp,side:re,uniforms:{lutA:{value:i},lutB:{value:t},albedo:{value:new R(...e)}}})}var Gi=[[.344,.371,.371],[1.276,.875,.623],[1.684,.749,.529],[2.15,1.284,.686],[2.092,2.258,2.383],[1.48,1.346,.623],[2.325,1.755,.749],[3.372,2.887,1.535]],Xp=`precision highp float; uniform sampler2D map; uniform vec3 tint; uniform float lo; uniform float kk; varying vec2 vUv; varying vec3 vN;
void main(){ vec4 t=texture2D(map,vUv); float a=t.r; vec3 c=tint;
 if(lo>0.0){ float fr=smoothstep(lo,lo+0.06,t.r); a=t.r*(1.0-fr)*kk+fr; c=mix(tint,vec3(0.0),fr); }
 if(a<0.002) discard; gl_FragColor=vec4(c,a); }`;function Wc(i,t,e=0,n=1){return new ae({vertexShader:Je,fragmentShader:Xp,side:re,transparent:!0,depthWrite:!1,depthTest:!1,uniforms:{map:{value:i},tint:{value:new R(...t)},lo:{value:e},kk:{value:n}}})}var Zp=`precision highp float; uniform sampler2D lut; uniform vec3 col; uniform float ng; varying vec3 vN;
void main(){ vec3 n=normalize(vN); if(!gl_FrontFacing) n=-n; vec4 t=texture2D(lut,n.xy*ng*0.5+0.5); vec4 t0=texture2D(lut,vec2(0.5));
 vec3 L=t.rgb/max(t0.rgb,vec3(0.01)); float Sp=((t.a-t0.a)*96.0)/255.0; gl_FragColor=vec4(clamp(col*L+vec3(Sp),0.0,1.0),1.0); }`;function Ea(i,t,e=1){return new ae({vertexShader:Je,fragmentShader:Zp,side:re,uniforms:{lut:{value:i},ng:{value:e},col:{value:new R(t[0]/255,t[1]/255,t[2]/255)}}})}function Qc(i,t,e,n=0){let s=t*i/1024*(1024/i)*1,r=t*i/1024,o=2*Math.atan(i/2/r/qn.D)*180/Math.PI,a=new ve(o,1,10,2e3);return a.position.set(n,e,qn.D),a.lookAt(n,e,0),a.updateMatrixWorld(),a}var $p=`precision highp float; uniform sampler2D lut; uniform sampler2D map; uniform vec3 col; varying vec3 vN; varying vec2 vUv;
void main(){ vec3 n=normalize(vN); if(!gl_FrontFacing) n=-n; vec4 t=texture2D(lut,n.xy*0.5+0.5); vec4 t0=texture2D(lut,vec2(0.5));
 vec3 L=t.rgb/max(t0.rgb,vec3(0.01)); float Sp=((t.a-t0.a)*96.0)/255.0; float uw=smoothstep(-0.15,-0.55,n.y); L=mix(L,vec3(0.22),uw); Sp=mix(Sp,0.2,uw); float p=texture2D(map,vUv).r; gl_FragColor=vec4(clamp(col*p*L+vec3(Sp),0.0,1.0),1.0); }`;function Kc(i,t,e){return new ae({vertexShader:Je,fragmentShader:$p,side:re,uniforms:{lut:{value:i},map:{value:e},col:{value:new R(t[0]/255,t[1]/255,t[2]/255)}}})}var tm="precision highp float; uniform float mk; varying vec3 vN; void main(){ vec3 n=normalize(vN); if(!gl_FrontFacing) n=-n; gl_FragColor=vec4(n.xy*0.5+0.5,mk,1.0); }";function Da(i=0){return new ae({vertexShader:Je,fragmentShader:tm,side:re,uniforms:{mk:{value:i}}})}var em="precision highp float; uniform float ch; varying vec2 vUv; void main(){ float x=(ch<0.5?vUv.x:vUv.y); float v=clamp(x,0.0,0.99999)*255.0; float hi=floor(v); gl_FragColor=vec4(hi/255.0,fract(v),0.0,1.0); }";function Vc(i){return new ae({vertexShader:Je,fragmentShader:em,side:re,uniforms:{ch:{value:i}}})}var nm="precision highp float; varying vec3 vN; varying float vCls; void main(){ vec3 n=normalize(vN); if(!gl_FrontFacing) n=-n; gl_FragColor=vec4(n.xy*0.5+0.5,vCls,1.0); }";function Pa(){return new ae({vertexShader:Gc,fragmentShader:nm,side:re})}var im=`precision highp float; uniform sampler2D lut; uniform sampler2D map; uniform vec3 col; varying vec3 vN; varying vec2 vUv;
void main(){ vec3 n=normalize(vN); if(!gl_FrontFacing) n=-n; vec4 t=texture2D(lut,n.xy*0.5+0.5);
 vec3 L=t.rgb*(320.0/255.0); float Sp=(t.a*96.0-32.0)/255.0;
 float p=texture2D(map,vUv).r; gl_FragColor=vec4(clamp(col*p*L+vec3(Sp),0.0,1.0),1.0); }`;function Yc(i,t,e){return new ae({vertexShader:Je,fragmentShader:im,side:re,uniforms:{lut:{value:i},map:{value:e},col:{value:new R(t[0]/255,t[1]/255,t[2]/255)}}})}var sm="precision highp float; uniform sampler2D map; varying vec3 vN; varying vec2 vUv; void main(){ vec3 n=normalize(vN); if(!gl_FrontFacing) n=-n; gl_FragColor=vec4(n.xy*0.5+0.5,texture2D(map,vUv).r,1.0); }";function jc(i){return new ae({vertexShader:Je,fragmentShader:sm,side:re,uniforms:{map:{value:i}}})}var Vi=-.25,ee=6.152,Ki=571,rm=512,ln=[[230,58,49],[255,135,54],[255,236,60],[144,230,60],[30,144,76],[39,98,202],[87,192,242],[255,116,149],[140,68,195],[98,83,53],[243,243,243],[53,53,49]],Na=[88,96,104],am=3,om=0,cm=[13.4,18.62,23.89,29.02,34.07],lm=[20.31,28.3,36.41,44.36,52.28],hm=[[20.45,22.11,23.76],[27.86,29.92,31.97],[35.27,37.87,40.47],[42.7,45.66,48.61],[49.93,53.57,57]],js=[0,32,64,96,127];function Wn(i,t,e){if(e<=i[0])return t[0];for(let n=1;n<i.length;n++)if(e<=i[n]){let s=(e-i[n-1])/(i[n]-i[n-1]);return t[n-1]+s*(t[n]-t[n-1])}return t[t.length-1]}function Ra(i,t){let e=38.96+.4425*i,n=e*(1+64e-5*(t-64)),s=n/67.45,r=(.686+.00482*i)*(.715+.00449*t),o=(.657+.00543*i)*(.784+.00336*t),a=(.694+.00445*i)*(.612+.00555*t),c=(.806+.00303*i)*Wn([0,64,127],[.52,1,1.55],t),l=(.686+.00482*i)*Wn([0,64,127],[.61,1,1.376],t),h=Wn(js,cm,i),d=Wn(js,lm,i),A=Wn(js,js.map((p,g)=>Wn([0,64,127],hm[g],t)),i);return{B:n,sy:s,kT:r,kT2:l,kA:o,kL:a,rA:c,hem:h,crotch:d,hand:A}}var La=[0,32,64,96,127],um=[7.238,6.819,6.152,5.41,4.667],dm={0:[28.05,26.53,25.14],32:[19.94,18.04,16.28],64:[11.87,9.59,7.31],96:[3.7,1.11,-1.48],127:[-4.07,-7.07,-10.07]};function Ca(i,t,e){if(e<=i[0])return t[0];for(let n=1;n<i.length;n++)if(e<=i[n]){let s=(e-i[n-1])/(i[n]-i[n-1]);return t[n-1]+s*(t[n]-t[n-1])}return t[t.length-1]}function Zc(i,t){let e=Ca(La,um,i),n=Ca(La,La.map(s=>Ca([0,64,127],dm[s],t)),i);return{c:e,yc:n}}var Js=i=>(i-rm)/ee,Jc=i=>(i-Ki)/ee;function Xs(i,t=20,e=!1,n=2){if(e){let c=(m,w)=>{let D=[w[0]-m[0],w[1]-m[1],w[2]-m[2]],E=Math.hypot(...D)||1;return D.map(T=>T/E)},l=i[0],h=i[1],d=i[i.length-1],A=i[i.length-2],p=c(h,l),g=c(A,d),x=[],f=5;for(let m=f;m>=1;m--){let w=m/f,D=w*Math.PI/2,E=Math.sin(Math.PI/2-D)*1,T=(1-Math.cos(Math.PI/2-D))*0,F=Math.cos(D),_=Math.sin(D)*l[3];x.push([l[0]+p[0]*_,l[1]+p[1]*_,l[2]+p[2]*_,Math.max(l[3]*F,.001),Math.max(l[4]*F,.001)])}let u=i.map(m=>m.slice()),v=[];for(let m=1;m<=f;m++){let w=m/f*Math.PI/2,D=Math.cos(w),E=Math.sin(w)*d[3];v.push([d[0]+g[0]*E,d[1]+g[1]*E,d[2]+g[2]*E,Math.max(d[3]*D,.001),Math.max(d[4]*D,.001)])}i=[...x,...u,...v]}let s=[],r=[],o=i.length;for(let c=0;c<o;c++){let l=i[c],h=i[Math.max(0,c-1)],d=i[Math.min(o-1,c+1)],A=new R(d[0]-h[0],d[1]-h[1],d[2]-h[2]).normalize(),p=Math.abs(A.z)<.9?new R(0,0,1):new R(1,0,0),g=new R().crossVectors(A,p).normalize(),x=new R().crossVectors(A,g).normalize();for(let f=0;f<t;f++){let u=f/t*Math.PI*2,v=Math.cos(u),m=Math.sin(u);n!==2&&(v=Math.sign(v)*Math.pow(Math.abs(v),2/n),m=Math.sign(m)*Math.pow(Math.abs(m),2/n)),s.push(l[0]+g.x*v*l[3]+x.x*m*l[4],l[1]+g.y*v*l[3]+x.y*m*l[4],l[2]+g.z*v*l[3]+x.z*m*l[4])}}for(let c=0;c<o-1;c++)for(let l=0;l<t;l++){let h=c*t+l,d=c*t+(l+1)%t,A=(c+1)*t+l,p=(c+1)*t+(l+1)%t;r.push(h,A,d,d,A,p)}let a=new Ie;return a.setAttribute("position",new He(s,3)),a.setIndex(r),a.computeVertexNormals(),a}function Xc(i,t,e,n,s,r,o=16){let a=[];for(let c=0;c<=o;c++){let l=-Math.PI/2+Math.PI*c/o;a.push([i,t+Math.sin(l)*s,e,Math.cos(l)*n+.001,Math.cos(l)*r+.001])}return a[0][3]=a[0][4]=.001,Xs(a,24)}var Am=[[567,20,44],[580,37,54.5],[592,53,56],[604,64,56],[630,60.5,56],[650,58.5,55.5],[700,59],[716,59]],fm=[[716,59],[740,62],[765,62],[782,54],[794,30],[797,6]],pm=[[567,20],[575,31],[583,47.5],[592,56],[602,63],[660,66],[716,74],[760,80],[794,87]],mm=[[463,612,14.2],[432,690,14.6],[418,742,14.6]],Wi=[408,777,27],gm=[[478.5,790,25.5],[478.5,815,24.5],[480,860,21],[481,905,17],[481.5,947,15.5]],Qi=[479.5,966,24,20,30];function $c(i,t){let e=Ra(i.height,i.weight),{kT:n,kT2:s,kA:r,kL:o,rA:a}=e,c=new Ye,l=(716-Ki)/ee,h=(797-Ki)/ee,d=(985-Ki)/ee,A=(804-Ki)/ee,p=[0,l,h,d],g=[0,e.hem+(l-23.89),e.crotch+(h-36.41),e.B+(d-67.45)],x=T=>Wn(p,g,T),f=T=>T*(e.hand+(A-37.87))/A,u=T=>Vi-x(Jc(T)),v=T=>Vi-f(Jc(T)),m=.95,w=(g[3]-g[2])/(p[3]-p[2]),D=T=>{let F=[];for(let _=0;_<T.length-1;_++){let S=T[Math.max(0,_-1)],O=T[_],Y=T[_+1],it=T[Math.min(T.length-1,_+2)];for(let C=0;C<1;C+=.25){let N=C*C,W=N*C,J=(K,Q,X,$)=>.5*(2*Q+(-K+X)*C+(2*K-5*Q+4*X-$)*N+(-K+3*Q-3*X+$)*W);F.push([J(S[0],O[0],Y[0],it[0]),J(S[1],O[1],Y[1],it[1])])}}return F.push(T[T.length-1]),F},E=(T,F,_,S)=>{let O=T.map(([Y,it,C])=>{let N=S===void 0?0:Math.min(1,Math.max(0,(Y-600)/100)),W=_+(S===void 0?0:S-_)*N,J=Math.max(it/ee*W,.001);return[0,u(Y),0,J,C!==void 0?Math.max(C/ee*W,.001):J*m]});c.add(new Wt(Xs(O,64,!1,am),F))};i.gender===1?E(pm,t.shirt,n,s):(E(Am,t.shirt,n,s),i.dbgHide!=="pelvis"&&E(fm,t.pants,s));for(let T of[1,-1]){let F=mm.map(([S,O,Y])=>[T*Math.abs(Js(S))*r,v(O),om,Y*1.2/ee*a,Y*1.2/ee*a]);c.add(new Wt(Xs(F,32,!0),t.shirt)),c.add(new Wt(Xc(T*Math.abs(Js(Wi[0]))*r,v(Wi[1]),0,Wi[2]*1.06/ee*a,Wi[2]*1.06/ee*a,Wi[2]*1.06/ee*a),t.shirt));let _=gm.map(([S,O,Y])=>[T*Math.abs(Js(S))*o,u(O),0,Y/ee*o,Y/ee*o*.9]);c.add(new Wt(Xs(_,32,!0),t.pants)),c.add(new Wt(Xc(T*Math.abs(Js(Qi[0]))*o,u(Qi[1]),1.5*o,Qi[2]/ee*o,Qi[3]/ee*w,Qi[4]/ee*o),t.pants))}return c}var ym={5126:Float32Array,5123:Uint16Array,5125:Uint32Array,5121:Uint8Array,5120:Int8Array,5122:Int16Array},xm={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT4:16};function rl(i){let t=new DataView(i);if(t.getUint32(0,!0)!==1179937895)throw new Error("not a GLB");let e=t.getUint32(12,!0),n=JSON.parse(new TextDecoder().decode(new Uint8Array(i,20,e))),s=20+e,r=t.getUint32(s,!0),o=i.slice(s+8,s+8+r),a=g=>{let x=n.accessors[g],f=n.bufferViews[x.bufferView],u=xm[x.type],v=ym[x.componentType],m=(f.byteOffset||0)+(x.byteOffset||0),w=f.byteStride||0,D=new v(x.count*u);if(!w||w===u*v.BYTES_PER_ELEMENT)D.set(new v(o,m,x.count*u));else for(let E=0;E<x.count;E++)D.set(new v(o.slice(m+E*w,m+E*w+u*v.BYTES_PER_ELEMENT)),E*u);return D},c=n.nodes.map(g=>({name:g.name,t:g.translation||[0,0,0],r:g.rotation||[0,0,0,1],s:g.scale||[1,1,1],ch:g.children||[],parent:-1}));c.forEach((g,x)=>g.ch.forEach(f=>c[f].parent=x));let l=n.animations&&n.animations[0];if(l)for(let g of l.channels){let x=l.samplers[g.sampler],f=a(x.output),u=g.target.path,v=c[g.target.node],m={translation:3,rotation:4,scale:3}[u];u==="translation"?v.t=Array.from(f.slice(0,3)):u==="rotation"?v.r=Array.from(f.slice(0,4)):u==="scale"&&(v.s=Array.from(f.slice(0,3)))}let h=n.skins[0],d=h.joints,A=a(h.inverseBindMatrices),p=[];for(let g of n.meshes)for(let x of g.primitives){let f=x.attributes;p.push({pos:a(f.POSITION),nrm:a(f.NORMAL),jt:a(f.JOINTS_0),wt:a(f.WEIGHTS_0),idx:a(x.indices),mat:x.material,col:f.COLOR_0!==void 0?a(f.COLOR_0):null})}return{nodes:c,joints:d,ibm:A,prims:p,names:Object.fromEntries(c.map((g,x)=>[g.name,x]))}}var Qm=new $t,tl=new Ge,el=new R,nl=new R;function Mm(i,t){let e=i.nodes.length,n=new Array(e),s=c=>{let l=i.nodes[c],h=t&&t[l.name]||[1,1,1];return tl.set(l.r[0],l.r[1],l.r[2],l.r[3]),el.set(l.t[0],l.t[1],l.t[2]),nl.set(l.s[0]*h[0],l.s[1]*h[1],l.s[2]*h[2]),new $t().compose(el,tl,nl)},r=c=>{if(n[c])return n[c];let l=s(c),h=i.nodes[c].parent;return n[c]=h>=0?new $t().multiplyMatrices(r(h),l):l,n[c]};for(let c=0;c<e;c++)r(c);let o=i.joints.map((c,l)=>{let h=new $t().fromArray(i.ibm,l*16);return new $t().multiplyMatrices(n[c],h)}),a=o.map(c=>new Ut().setFromMatrix4(c).invert().transpose());return i.prims.map(c=>{let l=c.pos.length/3,h=new Float32Array(l*3),d=new Float32Array(l*3),A=new R,p=new R,g=new R,x=new R;for(let f=0;f<l;f++){A.set(c.pos[f*3],c.pos[f*3+1],c.pos[f*3+2]),p.set(c.nrm[f*3],c.nrm[f*3+1],c.nrm[f*3+2]),g.set(0,0,0),x.set(0,0,0);for(let u=0;u<4;u++){let v=c.wt[f*4+u];if(v<=0)continue;let m=c.jt[f*4+u];g.addScaledVector(A.clone().applyMatrix4(o[m]),v),x.addScaledVector(p.clone().applyMatrix3(a[m]),v)}x.normalize(),h.set([g.x,g.y,g.z],f*3),d.set([x.x,x.y,x.z],f*3)}return{pos:h,nrm:d,idx:c.idx,mat:c.mat,col:c.col}})}function al(i){let t=new Ie;return t.setAttribute("position",new te(i.pos,3)),t.setAttribute("normal",new te(i.nrm,3)),t.setIndex(new te(i.idx,1)),t}var _n=6,ol=i=>{_n=i},vm=[10.85,7.05,4.92,-.007],Yi=[0,145/ee,226/ee,414/ee],il=233/ee;function cl(i,t,e){if(e<=i[0])return t[0]+(e-i[0])*(t[1]-t[0])/(i[1]-i[0]);for(let s=1;s<i.length;s++)if(e<=i[s]){let r=(e-i[s-1])/(i[s]-i[s-1]);return t[s-1]+r*(t[s]-t[s-1])}let n=i.length-1;return t[n]+(e-i[n])*(t[n]-t[n-1])/(i[n]-i[n-1])}var sl=(i,t,e)=>Math.min(e,Math.max(t,i));function ll(i){let t=Mm(i,null),e=i.nodes.map(l=>l.name),n=l=>/^(arm_|shoulder_|elbow_|wrist_)/.test(l),s=l=>/^(foot_|ankle_|knee_)/.test(l),r=l=>l==="hip",o=t.map((l,h)=>{let d=i.prims[h],A=l.pos.length/3,p=new Float32Array(A),g=new Float32Array(A),x=new Float32Array(A),f=new Float32Array(A);for(let u=0;u<A;u++)for(let v=0;v<4;v++){let m=d.wt[u*4+v];if(m<=0)continue;let w=e[i.joints[d.jt[u*4+v]]];n(w)?(p[u]+=m,f[u]+=(/_l/.test(w)?1:-1)*m):s(w)?g[u]+=m:r(w)&&(x[u]+=m)}return{wa:p,wl:g,wh:x,side:f}}),a=l=>{let h=(()=>{let d=i.nodes.length,A=new Array(d),p=g=>{if(A[g])return A[g];let x=i.nodes[g],f=new $t().compose(new R(...x.t),new Ge(...x.r),new R(...x.s));return A[g]=x.parent>=0?new $t().multiplyMatrices(p(x.parent),f):f,A[g]};return p(i.names[l])})();return new R().setFromMatrixPosition(h)},c={};for(let l of["l","r"]){let h=a("arm_"+l+"1"),d=a("elbow_"+l),A=a("wrist_"+l),p=new R,g=0;t.forEach((x,f)=>{let u=i.prims[f];for(let v=0;v<x.pos.length/3;v++){let m=0,w=-1;for(let D=0;D<4;D++)u.wt[v*4+D]>w&&(w=u.wt[v*4+D],m=D);e[i.joints[u.jt[v*4+m]]]==="wrist_"+l&&(p.x+=x.pos[v*3],p.y+=x.pos[v*3+1],p.z+=x.pos[v*3+2],g++)}}),p.multiplyScalar(1/Math.max(g,1)),c[l]=[h,d,A,p]}return{B:i,base:t,info:o,lines:c}}var Ia=i=>cl(vm.slice().reverse(),Yi.slice().reverse(),i);function hl(i,t,e){let n=Ra(t,e),{kT:s,kT2:r,kA:o,kL:a,rA:c}=n,l=Yi[1],h=Yi[2],d=Yi[3],A=[0,n.hem+(l-23.89),n.crotch+(h-36.41),n.B+(d-67.45)],p=v=>cl(Yi,A,v),g=v=>v*(n.hand+(il-37.87))/il,x=v=>Vi-p(Ia(v)),f=v=>Vi-g(Ia(v)),u=v=>{let m=sl((571+ee*v-600)/100,0,1);return s+(r-s)*m};return i.base.map((v,m)=>{let w=v.pos.length/3,D=new Float32Array(w*3),E=new Float32Array(w*3),T=i.info[m];for(let F=0;F<w;F++){let _=v.pos[F*3],S=v.pos[F*3+1],O=v.pos[F*3+2],Y=v.nrm[F*3],it=v.nrm[F*3+1],C=v.nrm[F*3+2],N=T.wa[F],W=T.wl[F],J=T.wh[F],K=Math.max(0,1-N-W-J),Q=Ia(S),X=u(Q),$=K*X+J*r+W*a,ct=_*_n*$,q=O*_n*$,tt=x(S),lt=ct,gt=tt,dt=q,yt=Y/$,Dt=it,vt=C/$;if(N>.001){let z=T.side[F]>=0?"l":"r",Xt=i.lines[z],xt=new R(_,S,O),bt=1e9,ft=0,Z=0,j=null;for(let st=0;st<3;st++){let mt=Xt[st],St=Xt[st+1],et=St.clone().sub(mt),Ht=sl(xt.clone().sub(mt).dot(et)/et.lengthSq(),0,1),Ct=mt.clone().addScaledVector(et,Ht),Tt=Ct.distanceToSquared(xt);Tt<bt&&(bt=Tt,ft=Ht,Z=st,j=Ct)}let M=st=>new R(Math.sign(st.x||1)*Math.abs(st.x)*_n*o,f(st.y),st.z*_n*o*0),y=M(Xt[Z]),L=M(Xt[Z+1]),G=y.clone().lerp(L,ft),H=xt.clone().sub(j).multiplyScalar(_n*c),V=G.x+H.x,ot=G.y+H.y,nt=G.z+H.z+j.z*_n*o*0;lt=ct*(1-N)+V*N,gt=tt*(1-N)+ot*N,dt=q*(1-N)+(nt+j.z*_n)*N*1,yt=Y,Dt=it,vt=C}D[F*3]=lt,D[F*3+1]=gt,D[F*3+2]=dt;let Ot=Math.hypot(yt,Dt,vt)||1;E[F*3]=yt/Ot,E[F*3+1]=Dt/Ot,E[F*3+2]=vt/Ot}return{pos:D,nrm:E,idx:v.idx,mat:v.mat}})}var vi={eye:{cat:"eye",pivot:"edge",hx:79.383,hy:-3.038,px0:254.352,pxStep:7.006,pyRef:252.053,yRef:12,pyStep:8.436,sk:.247,sz0:1,szK:.4,th0:2.137,rRef:4,rStep:11.263},brow:{cat:"brow",pivot:"edge",hx:73.887,hy:1.404,px0:254.352,pxStep:7.006,pyRef:218.89,yRef:7,pyStep:8.436,sk:.247,sz0:1,szK:.4,th0:-.3,rRef:6,rStep:11.3},mouth:{cat:"mouth",pivot:"center",hx:0,hy:0,px0:256,pxStep:0,pyRef:345.4,yRef:13,pyStep:8.436,sk:.247,sz0:1,szK:.4,th0:0,rRef:0,rStep:0}};function za(i,t,e,n,s){let r=i.sLin?i.sLin[0]+i.sLin[1]*n:i.sk*(i.szK*n+i.sz0),o=i.th0+i.rStep*(i.rRef-s),a=i.px0+i.pxStep*t,c=i.pyRef+i.pyStep*(e-i.yRef);return{px:a,py:c,s:r,th:o}}var ul=[...Array(48)].map((i,t)=>[0,4,8,13,14,18,19,21,23,24,26,29,33,34,35,38,39,40,43,44,45,46,47].includes(t)?-11.25:0),dl=[0,0,-1,1,0,1,0,1,-2,1,0,2,-1,-1,0,0,1,1,0,0,-1,0,1,0].map(i=>i*11.25);var wn=1024,_m={},Ua=new Set([34,57]);function _i(i,t){let e=document.createElement("canvas");e.width=i.w,e.height=i.h;let n=e.getContext("2d"),s=n.createImageData(i.w,i.h),r=[1,2,4][i.fmt];for(let o=0;o<i.h;o++)for(let a=0;a<i.w;a++){let c=(o*i.w+a)*r,l=i.data[c],h=r>1?i.data[c+1]:0,d=r>2?i.data[c+2]:0,A=r>3?i.data[c+3]:255,p=t(l,h,d,A),g=(o*i.w+a)*4;s.data[g]=p[0],s.data[g+1]=p[1],s.data[g+2]=p[2],s.data[g+3]=p[3]}return n.putImageData(s,0,0),e}function wm(i,t,e,n,s,r,o,a,c){let l=wn/512;i.save(),c<0&&(i.translate(512*l,0),i.scale(-1,1)),i.translate(e*l,n*l),i.rotate(a*Math.PI/180),i.scale(o*l,o*l),i.translate(s,r),i.scale(-1,1),i.drawImage(t,-t.width/2,-t.height/2),i.restore()}var wi=async i=>await(await fetch(i,{cache:"force-cache"})).text(),Al=null;function bm(){return Al||(Al=qc(512))}async function fl(i,t="./",e={}){let n=new Ys(i),s=typeof t=="object"?t:{skin:await wi(t+"lut_skin.b64"),feat:await wi(t+"lut_feat.b64"),hair0:await wi(t+"lut_hair0.b64"),hair1:await wi(t+"lut_hair1.b64"),body:await wi(t+"lut_body.b64").catch(()=>null),cap:await wi(t+"lut_cap.b64").catch(()=>null)},r=Gn(s.skin),o=Gn(s.feat),a=s.body?Gn(s.body):null,c=s.cap?Gn(s.cap):null,l=Gn(s.hair0),h=Gn(s.hair1),d={shape:new Map,tex:new Map},A=async(m,w)=>{let D=m+":"+w;if(!d.shape.has(D)){let E=await n.shape(m,w),T=null;E&&E.nv&&(T=Bc(E),T.userData.extra=E.extra),d.shape.set(D,T)}return d.shape.get(D)},p=async(m,w)=>{let D=m+":"+w;return d.tex.has(D)||d.tex.set(D,await n.texture(m,w)),d.tex.get(D)};async function g(m,w,D){return _i(await p(m,w),D)}let x={},f=async m=>{if(x[m]!==void 0)return x[m];let w=null;try{let D=e.glb&&e.glb[m]||(typeof t=="string"?t:"./")+(m===1?"miiFemaleBody.glb":"miiMaleBody.glb"),E=await(await fetch(D,{cache:"force-cache"})).arrayBuffer();w=ll(rl(E))}catch{w=null}return x[m]=w,w},u=bm();async function v(m,w={}){let D=w.size||512;wn=Math.min(2048,w.maskRes||1024),u.setSize(D,D,!1);let E=new Fi,T=ba[m.faceColor]||ba[0],F=w.colors,_=document.createElement("canvas");_.width=wn,_.height=wn;let S=_.getContext("2d");S.imageSmoothingQuality="high";let O=F.eye[m.eyeColor]||[20,20,20],Y=F.brow[m.browColor],it=F.mouth[m.mouthColor]||[200,80,80],C=F.mouthUp[m.mouthColor]||[100,40,40],N=1/Sa,W=w.eyeWhite??F.eyeWhite??1,J=await g("eye",m.eyeType,(Z,j,M,y)=>[(j*W+M*O[0]/255)*N,(j*W+M*O[1]/255)*N,(j*W+M*O[2]/255)*N,y]),K=await g("brow",m.browType,(Z,j,M,y)=>[Y[0]*N,Y[1]*N,Y[2]*N,Z]),Q=w.mouthMode,X=await g("mouth",m.mouthType,(Z,j,M,y)=>Q==="R"?[Z,Z,Z,y]:Q==="G"?[j,j,j,y]:Q==="A"?[255,255,255,y]:Q==="RA"?[Z,Z,Z,255]:Q==="GA"?[j,j,j,255]:[(Z*it[0]+j*C[0])/255*N+M*N,(Z*it[1]+j*C[1])/255*N+M*N,(Z*it[2]+j*C[2])/255*N+M*N,y]),$=(Z,j,M,y,L,G,H,V=0)=>{let ot=za(Z,M,y,L,G);wm(S,j,ot.px,ot.py,Z.hx,Z.hy,ot.s,ot.th+V,H)};{let j=[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]][m.feature]||[0,0],M=w.wrIdx??j[0],y=w.mkIdx??j[1],L=wn/512,G=async(H,V,ot,nt)=>{for(let st of[1,-1])S.save(),st<0&&(S.translate(512*L,0),S.scale(-1,1)),S.translate(ot*L,nt*L),S.scale(V*L,V*L),S.drawImage(H,0,0),S.restore()};if(y&&w.makeup!==!1&&await G(await g("facemake",y,(H,V,ot,nt)=>[H*N,V*N,ot*N,nt]),w.mkS??.49,w.mkX??269,w.mkY??190),M&&w.wrinkle!==!1){let H=w.wrCol??[110,80,70];await G(await g("faceline",M,V=>[H[0]*N,H[1]*N,H[2]*N,V*(w.wrA??.6)]),w.wrS??.82,w.wrX??141.5,w.wrY??3)}}{let Z=ul[m.eyeType]||0;$(vi.eye,J,m.eyeDist,m.eyeY,m.eyeSize,m.eyeRot,1,Z),$(vi.eye,J,m.eyeDist,m.eyeY,m.eyeSize,m.eyeRot,-1,Z)}{let Z=dl[m.browType]||0;$(vi.brow,K,m.browDist,m.browY-3,m.browSize,m.browRot,1,Z),$(vi.brow,K,m.browDist,m.browY-3,m.browSize,m.browRot,-1,Z)}{let Z=za(vi.mouth,0,m.mouthY,m.mouthSize,0),j=wn/512;S.save(),S.translate(256*j,Z.py*j),S.scale(Z.s*j,Z.s*j),S.drawImage(X,-X.width/2,-X.height/2),S.restore()}if(m.mustType>=1&&m.mustType<=3){let Z=[.218,.285,.365,.52,.671,.772,.873,.97,1.07],j=[-2.9,-4.2,-5.5,-4.8,0,.6,.8,.9,1],M=F.brow[m.beardColor]||F.brow[0],y=await g("mustache",m.mustType-1,V=>[M[0]*N,M[1]*N,M[2]*N,V]),L=Z[m.mustSize]??.671,G=339.8+j[m.mustSize]+8.436*(m.mustY-10),H=wn/512;for(let V of[1,-1])S.save(),S.translate((256+V*64*L)*H,G*H),S.scale(-V*L*H,L*H),S.drawImage(y,-y.width/2,-y.height/2),S.restore()}if(m.moleOn){let Z=await g("mole",0,G=>[20*N,17*N,17*N,G]),j=.12+.0463*m.moleSize,M=256+13.96*(m.moleX-8),y=146.05+8.44*m.moleY,L=wn/512;S.save(),S.translate(M*L,y*L),S.scale(j*L,j*L),S.drawImage(Z,-Z.width/2,-Z.height/2),S.restore()}let ct=_m[m.hairType]??m.hairType,q=m.hairFlip?-1:1,tt=async(Z,j,M,y=1)=>{let L=await A(Z,j);if(!L)return;let G=new Wt(L,M);return G.scale.x=y,E.add(G),G},lt=Mi(r,T),gt=await A("faceline",m.faceType),dt=gt.userData.extra,yt=[dt[6],dt[7],dt[8]],Dt=[dt[9],dt[10],dt[11]],vt=[dt[12],dt[13],dt[14]],Ot=[[0,0],[0,1],[0,5],[0,8],[4,0],[1,0],[2,0],[6,0],[7,0],[0,9],[8,0],[10,0]],z=lt;{let[Z,j]=Ot[m.feature]||[0,0];if(w.featureOverlay!==!1&&(Z!==0||j!==0||w.flMk||w.flWr)){let M=document.createElement("canvas");M.width=256,M.height=512;let y=M.getContext("2d"),L=w.flMk??j,G=w.flWr??Z,H=st=>{for(let mt of w.flMirror==="only"?[-1]:w.flMirror===!0?[1,-1]:[1])y.save(),mt<0&&(y.translate(256+(w.flMx??0),0),y.scale(-1,1)),y.translate(w.flX??3,w.flY??1.5),y.scale(w.flS??.99,w.flS??.99),y.drawImage(st,0,0),y.restore()},V={1:.45,2:.5,3:.45,4:.45,5:1,6:.5,7:.5,8:.9,9:.78,10:.78},ot=Math.round(T[0]<=1.001?T[0]*255:T[0]);if(L){let st=await p("facemake",L),mt=w.mkGain??V[L]??.5,St=L===1||L===3||L===4;H(_i(st,(et,Ht,Ct,Tt)=>[St?ot:et,Ht,Ct,Tt*mt]))}if(G){let st=await p("faceline",G),mt=w.wrinkleGain??(G===6?.93:.98);H(_i(st,St=>G===7?[w.w7r??ot*.4,0,0,St*mt]:[0,0,0,St*mt]))}let nt=new vn(M);nt.flipY=!1,nt.colorSpace=fe,w.flWrap!==!1&&(nt.wrapS=pi),z=Mi(r,T,nt)}}if(E.add(new Wt(gt,z)),!w.dbgPieces){let Z=await tt(Ua.has(ct)?"foreheadhat":"forehead",ct,lt,q);Z&&Z.position.set(yt[0],yt[1],yt[2])}let Xt=new vn(_);Xt.flipY=!1,Xt.colorSpace=fe;let xt=await A("mask",m.faceType),bt=new Wt(xt,Fc(o,Xt));bt.renderOrder=2,E.add(bt);{let Z=36.3-1.473*m.noseY+(Dt[1]-24.5),j=.1717*m.noseSize+.387,M=Dt[2],y=await A("nose",m.noseType);if(y){let H=new Wt(y,lt);H.position.set(0,Z,M),H.scale.set(j,j,j),E.add(H)}let L=await A("noseline",m.noseType),G=await p("noseline",m.noseType);if(L){let H=_i(G,nt=>[nt,0,0,255]),V=new vn(H);V.flipY=!1,V.colorSpace=fe;let ot=new Wt(L,kc(r,V,[0,0,0]));ot.position.set(0,Z,M+.5),ot.scale.set(j,j,1),ot.renderOrder=3,E.add(ot)}}if(w.dbgPieces){let Z=[[1,0,0],[0,1,0],[0,0,1],[1,1,0],[1,0,1],[0,1,1]],j=0;for(let M of w.dbgPieces){let[y,L]=M.split(":"),G=await A(y,+L);if(!G){console.log("empty",M);continue}let H=new Wt(G,new Ws);H.material=Mi(r,Z[j++%6]),E.add(H)}}if(!w.dbgPieces){let Z=await A(Ua.has(ct)?"hairhat":"hair",ct);if(Z){let j=new Wt(Z,w.dbgNormal==="hair"?Pa():Ta(l,h,Gi[F.hairIndex(m.hairColor)]||Gi[0]));j.userData.hair=!0,j.scale.x=q,j.position.set(yt[0],yt[1],yt[2]),E.add(j)}}if(Ua.has(ct)&&!w.dbgPieces){let Z=await A("cap",ct),j=await p("cap",ct);if(Z&&j){let M=_i(j,G=>[G,G,G,255]),y=new vn(M);y.flipY=!1,y.wrapS=y.wrapT=Ri,y.colorSpace=fe;let L=new Wt(Z,w.dbgNormal==="cap"?jc(y):(c||a)&&!w.oldCap?Yc(c||a,ln[m.favColor]||ln[0],y):Kc(r,ln[m.favColor]||ln[0],y));L.userData.cap=!0,L.scale.x=q,L.position.set(yt[0],yt[1],yt[2]),E.add(L)}}if(m.beardType>=1&&m.beardType<=3){let Z=await A("beard",m.beardType-1);if(Z){let j=new Wt(Z,w.dbgNormal==="beard"?Pa():Ta(l,h,Gi[F.hairIndex(m.beardColor)]||Gi[0]));j.userData.hair=!0,j.position.set(vt[0],vt[1],vt[2]),E.add(j)}}if(m.glassType>0){let Z=await A("glass",0),j=await p("glass",m.glassType-1);if(Z&&j){let M=_i(j,(mt,St)=>[mt,St,0,255]),y=new vn(M);y.flipY=!1,y.wrapS=pi,y.colorSpace=fe,y.anisotropy=4;let L=F.glass[m.glassColor]||[0,0,0],G=m.glassType>=6,H=new Wt(Z,Wc(y,[L[0]/255,L[1]/255,L[2]/255],G?w.frameLo??.93:0,w.lensK??1)),V=.4+.15*m.glassSize,ot=w.glassZ??46,nt=(300-ot)/278,st=45.9-1.5*m.glassY+yt[1];H.material.depthTest=ot>22,H.scale.set(V*nt,V*nt,1),H.position.set(0,33.3+(st-33.3)*nt,ot),H.renderOrder=10,E.add(H)}}if(w.body!==!1){let Z=G=>G.map(H=>H/255),j=a&&!w.oldBody?{shirt:Mi(a,Z(ln[m.favColor]||ln[0])),pants:Mi(a,Z(Na))}:{shirt:Ea(r,ln[m.favColor]||ln[0],w.bodyNg??.5),pants:Ea(r,Na,w.bodyNg??.5)},M=w.oldProcBody?null:await f(m.gender===1?1:0),y=w.dbgNormal?{shirt:Da(0),pants:Da(.5)}:j,L;if(M){w.gu&&ol(w.gu),L=new Ye;for(let G of hl(M,m.height,m.weight))L.add(new Wt(al(G),G.mat===0?y.shirt:y.pants))}else L=$c(m,y);L.userData.body=!0,E.add(L)}if(w.dbgNormal){let Z=w.dbgNormal;E.children.forEach(j=>{j.visible=Z==="head"?!j.userData.body:Z==="cap"?!!j.userData.cap:Z==="hair"||Z==="beard"?!!j.userData.hair:!!j.userData.body})}let ft;if(w.full){let Z=Zc(m.height,m.weight);ft=Qc(D,Z.c,Z.yc)}else ft=Hc(D,w.camK,w.camCX,w.camCY);if(w.dbgUV){let[Z,j]=w.dbgUV,M=new Fi,y=Z==="faceline"||Z==="mask"?m.faceType:0,L=await A(Z,y);M.add(new Wt(L,Vc(j))),u.setClearColor(0,0);let G=u.getClearAlpha();return u.render(M,ft),u.domElement}return u.render(E,ft),u.domElement}return{render:v,res:n}}var pl={eye:[[0,0,0],[118,122,122],[111,66,48],[105,103,53],[77,92,183],[61,122,96]],mouth:[[207,78,8],[230,11,8],[234,69,69]],mouthUp:[[125,46,23],[116,11,11],[131,31,39]],brow:[[0,0,0],[67,34,17],[97,26,11],[130,61,22],[126,126,134],[82,65,17],[142,92,26],[217,167,78]],glass:[[0,0,0],[102,59,17],[178,17,8],[34,51,110],[178,102,0],[127,119,110]],hairBrow(i){return this.brow[i]},eyeWhite:1.2,hairIndex:i=>i};var ml="qIJtdaiBbXWogW11qIFtdaiBbXWogW11qIFtdaiBbXWogW10qIFtcKmCbWapgm5hqYJtXqiBbVqngWxYp4FsV6eBbFengWxWqIFtU6iBbU+ogW1OqIJtTqiCbU6ogm1OqIJtTqiCbU6pgm1LqoNuQqyFcDSthnAvrYZwLqyFcC+qg24vqYJtMKmCbTClf2o3nHdkRpZyYFGUcV5UlHBeVJRwXlSUcF5UlHBeVJRwXlSUcF5VlHBeWJRwXlyUcF5dlHBeXZRwXl6TcF5gk3BeZpNwXmiTcF5slHBedJRwX3iUcF94lHBfeJRwX3iUcF94lHBfeJRwX3iUcF94lHBeeamCbnWpgm11qIFtdaiBbXWogW11qIFtdaiBbXWogW11qIFtdKiBbXCpgm1mqYJuYamCbV+ogW1bp4FsWKeBbFengWxXp4FsVqiBbVOogW1PqIFtTqiCbU6ogm1OqIJtTqiCbU6ogm1OqYJtSKuEbzqthXAxrYZwLq2GcC6shXAvqoNuL6mCbTCpgm0wp4BsM6F7aD2YdGFNlHFfU5RwXlSUcF5UlHBeVJRwXlSUcF5UlHBeVZRwXliUcF5clHBeXZRwXl6UcF5ek3BeYZNwXmaTcF5ok3BebJRwXnSUcF94lHBfeJRwX3iUcF94lHBfeJRwX3iUcF95lHBeeZRwXnqrg251qoNudamCbXWogW11qIFtdaiBbXWogW11qIFtdaiBbXWogW1xqYJtaKmCbmKpgm1gqYJtXaiBbFmngWxYp4FsV6eBbFaogW1TqIFtT6iBbU6ogm1OqIJtTqiCbU6ogm1OqIJtTamDbkashW82rYZwL62GcC6thnAurIVwL6qDbi+pgm0wqYJtMKiBbTGjfWk5mXViS5RxX1OUcF5UlHBeVJRwXlSUcF5UlHBeVJRwXlWUcF5YlHBeXJRwXl2UcF5elHBeYJNwXmSTcF5nk3BeaZNwXm6UcF51lHBfeJRwX3iUcF94lHBfeJRwX3iUcF95lHBeeZRwXnqUcF57rIVwdKuEb3Wqg251qYJtdaiBbXWogW11qIFtdaiBbXWogW11qIFtc6mCbW2pgm1kqYJuYamCbV6ogW1ap4FsWKeBbFengWxWqIFtU6iBbU+ogW1OqIJtTqiCbU6ogm1OqIJtTqiCbU2qg25GrIVwNq2GcC+thnAurYZwLqyFcC+qg24vqYJtMKmCbTCogm0xpH5qOZl1YkuUcV9TlHBeVJRwXlSUcF5UlHBeVJRwXlSUcF5VlHBeWJRwXlyUcF5dlHBeXpNwXmCTcF5lk3BeaJNwXmuUcF5ylHBfd5RwX3iUcF94lHBfeJRwX3iUcF95lHBeeZRwXnqTcF57k3Bee62GcXSshXB0q4RvdaqDbnWpgm11qIFtdaiBbXWogW11qIFtdaiBbXSogW1wqYJtZqmCbmGpgm1fqIFtW6eBbFingWxXp4FsVqiBbVOogW1PqIFtTqiCbU6ogm1OqIJtTqiCbU6pgm1Lq4RvQq2FcDSthnAvrYZwLq2GcC6shXAvqoNuL6mCbTCpgm0wqYJtMKV+ajebd2RGlXJfUZRxXlSUcF5UlHBeVJRwXlSUcF5UlHBeVZRwXliUcF5clHBeXZRwXl6TcF5hk3BeZpNwXmiTcF5slHBedJRwX3iUcF94lHBfeJRwX3iUcF95lHBeeZRwXnqTcF57k3Bee5NwXnuuh3F2roZxdayFcHSrhG91qoNudamCbXWogW11qIFtdaiBbXWogW11qIFtcamCbWipgm5iqYJtYKmCbV2ogWxZp4FsV6eBbFaogW1TqIFtT6iBbU6ogm1OqIJtTqiCbU6ogm1NqoNuR66GcTmuhnEwrYZwLq2GcC6thnAurIVwL6qDbi+pgm0wqYJtMKmCbTCngGwzoHtnPZh0YU2UcV9TlHBeVJRwXlSUcF5UlHBeVJRwXlWUcF5YlHBeXJRwXl6UcF5gk3BeZJNwXmeTcF5pk3BebpRwXnWUcF94lHBfeJRwX3iUcF95lHBeeZRwXnqTcF57k3Bee5NwXnyUcF58r4dyeK6HcXeuhnF1rIVwdKuEb3Wqg251qYJtdaiBbXWogW11qIFtdaiBbXOpgm1tqYJtZamCbmGpgm1eqIFtWqeBbFingWxWqIFtU6iBbU+ogW1OqIJtTqiCbU6ogm1OqYJtS6yFcEGwiHIzr4dxLq2GcC6thnAurYZwLqyFcC+qg24vqYJtMKmCbTCpgm0wqIFtMaR+aTebdmNHlXJfUZRxXlSUcF5UlHBeVJRwXlSUcF5VlHBeWJRwXlyUcF5elHBeYJNwXmWTcF5ok3Bea5RwXnKUcF93lHBfeJRwX3iUcF95lHBeeZRwXnqTcF57k3Bee5NwXnyUcF58lHBefa+Hcnivh3J4rodxd66GcXWshXB0q4RvdaqDbnWpgm11qIFtdaiBbXWogW10qIJtcKmCbWepgm5hqYJtX6mCbVuogW1Yp4FsVqiBbVKogW1PqIJtTqiCbU6ogm1OqIJtTauEb0eviHI4sop0LrCIci2uhnEurYZwLq2GcC6shXAvqoNuL6mCbTCpgm0wqYJtMKiBbTCmf2szoHtnPZh0YU2UcV9TlHBeVJRwXlSUcF5UlHBeVZRwXliUcF5clHBeXpRwXmGTcF5mk3BeaZRwXm2UcF51lHBfeJRwX3iUcF95lHBeeZRwXnqTcF57k3Bee5NwXnyUcF58lHBefZRwXn2vh3J4r4dyeK+Hcniuh3F3roZxdayFcHSrhG91qoNudamCbXWogW11qIFtdaiCbXKpgm1qqYJuY6mDbl+pgm1bqYJtV6iBbVaogW1SqIJtTqiCbU6ogm1OqYJtTaqDbkuthnBAsop0MrOLdSyxiXMsr4dxLa2GcC6thnAurIVwL6qDbi+pgm0wqYJtMKmCbTCogWwwp4BsMaN9aTebdmNGlXJfUZRxXlOUcF5UlHBeVJRwXlSUcF5XlHBeXJRwXl2UcF5hk3BeZpNwXmqUcF5vlHBedpRwX3iUcF95lHBeeZRwXnqTcF57k3Bee5NwXnyUcF58lHBefZRwXn2UcF59r4dyeK+Hcnivh3J4r4dyeK6HcXeuhnF1rIVwdKuEb3Wqg251qYJtdaiBbXWpgm1yqYJuaqqDbmKqg25fqoNuWquEb1OrhG9Pq4RvTKuEb0urhG9Jq4RvSayEb0euh3FBs4p0NbSMdS20i3Ursop0LK+Hci2thnAurYZwLqyFcC+qg24vqYJtMKmCbTCogm0wqIFsMKeAbDCmf2syoHtnO5p1YkeVcl9OlHFeUJRwXlCUcF5Rk3BeU5NwXlaTcF5alHBeX5NwXmaUcF5plHBecJRwXnaUcF94lHBeeZRwXnqTcF57k3Bee5NwXnyUcF58lHBefZRwXn2UcF59lHBefbGJc3iwiHN3r4hyeK+Hcnivh3J4rodxd66GcXWshXB0q4RvdaqDbnWpgm10qYJtcqqDbmmshXBfrYZwWK6GcVKvh3FNr4dySK+IckSwiHJCsYlzP7GJcz6yinQ7tYx2M7eOdyy2jXYqtIx1K7OKdCuwiHItroZxLq2GcC6shXAuqoNuL6mCbTCpgm0wqIFtMKeBbDCngGwwp4BrMKV+ajKfemY6mHRhQ5RxX0eUcV5IlHBeSpRwX0uUcF9OlHBfU5RwXliTcF5glHBfZZRwXm6UcF52lHBeeJRwXnqTcF57k3Bee5NwXnyUcF58lHBefZRwXn2UcF59lHBefZRwXn61jHZ4s4t1drGJc3awiHJ3r4hyeK+Hcniuh3F3roZxda2FcHSrhG90q4Rvc62FcGmvh3JesIhzVrKJc0+yinRJs4t0RLKKdEK0i3U9tIt1OrSLdTq1jHY4to13M7iPeCy5j3kpt454KbWMdiq0i3UrsopzLK+Hci2uhnEurYZwLquEby6pgm4vqYJuL6iBbS+ngWwwp4BsMKaAazCmf2swonxpM5t2YzuWcmBBlHFfQ5RxXkSUcV5GlHBeS5RwXk6UcF5SlHBeV5RwXl6TcF5mlHBebpRwXniTcF56k3Bee5NwXnyUcF58lHBefZRwXnyUcF58lHBefJRwXnyUcF5/t413ebaNdni0jHV1s4t0dLGJc3WwiHJ3r4hyd6+HcXauhnF0roZxca+IcmixiXNes4t0VrSMdU61jXZIt453QreOdz63jnc7to12OraOdze3jnc2uI94M7qQeS26kHkpupB5KLiPeCm2jXcqtIx1KrSLdSqyiXMrsIhyLK+IciythnEsrIVwLKuEby2pgm0uqIFsL6eBbC+ngGsvpn9rL6V/ajCge2c1mXViPJZyYECVcl9BlHFfRJRwXkaUcF5JlHBeTJRwXlGUcF5XlHBfXZRwXmWTcF5vk3BeeZNwXnuUcF58lHBefJRwXnyUcF57lHBeepRwXnuUcF5/k3BegbeOd3q3jnd5to13d7WMdnS0i3Vys4p0c7GJc3WwiHJ1sIhydbKJdGq0i3Vfto12VbeOd024j3hGuZB5QbqQeT26kXo5upB5OLqQeTW7knoxvJJ7L7yTey29k3spvJJ7KLuReii6kHkouI94KLeOdyi2jXcotYx2KLSLdSizinQpsIhzKa+Iciquh3EqrIRvLKqDbiypgm0tp4BsL6eAbC6mgGwuo35qMJ14ZTeZdWI6mHRhPJZyYECUcV9ClHBfRJNwXkiUcF9LlHBfUJRwX1aUcF5elHBeZ5NwXnKUcF56lHBeepRwXnqUcF55lHBeeZRwXnuTcF5+k3BegZNwXoK3jnd6t453ereOd3m2jXd3tY12c7WMdnG0i3Vxs4t0b7SLdWy2jXZguI94VbmQeU67kXpGvJJ7QL2Tezy+k3w4vpR8NL6UfTG+lHwwv5V9Lb+VfSy/lX0rv5V9KL6TfCe8knsnvJJ7JruReie5kHknuZB5JbiPeCa2jncmtY12J7OLdSeyinQosYlzKK+HcimshXArq4NuK6mCbSyngWwtp4FsLaV/ay+gemcznHdkNpt2YzeZdWI6lnJgPJRwXkCUcV9Dk3BeSJRwXkyUcF5Rk3BeWJRwXmCUcF5olHBfcpRwXnWUcF53lHBeeJRwXnqTcF5+k3BegZNwXoKTcF6Ct453ereOd3q3jnd6t453ebaNd3e2jXZyto12braNdm24j3hiupF6V7ySe069k3xGvpR9QMCVfTvAln43wZZ+M8KXfzDBl38uwpd/LMKXfyrCl38rwpd/K8GXfinAlX4nv5R9KL6UfCe+lHwnvJJ7J7ySeiW7kXoluZB5JbiPeCW2jnclto12JbSMdSWyiXMnsIhyKK6GcCmshW8qqoNuK6iCbSyngGwtpH5qL6B7ZzKeeWY0m3ZjN5l0YjmWcmA8lHFeQJRwXkSTcF5IlHBeTZNwXlOUcF5ZlHBeYZRwXmuUcF50lHBedZRwXnqTcF5+k3BegZNwXoKTcF6Ck3BegreOd3q3jnd6t453ereOd3q3jnd5t453dLiPeGy6kHlkvJJ7Wr6UfFDAlX1HwZZ+QMKXfzvDmIA3w5iAM8SZgS/EmYEuxZmBLMWagSzFmoEsxZqBLMSZgSzEmYAsw5iALMKYfyzCl38rwZd+K8CWfiq/lH0ovpR8J7ySeya7kXoluZB5JLiPeCO3jncjtYx2JbOLdCaxiXMnr4dxKK2GcCirhG8qqYJtK6eAbCykfmouoXxoMJ55ZjObdmM3mHRhOZVxXz2UcV5AlHBeRJRwXkmUcF5OlHBeU5RwXluUcF5klHBebpRwXnSTcF58k3BegJNwXoGTcF6Ck3BegpNwXoK5j3h4uY94eLmPeHi4j3h4uI94eLiPeHe7kXpqvZN8Xb+VfVPBl39Jw5iAQsSZgTzFmoE3xpqCM8ebgjDHnIMvyJyDL8icgy/InIMwyJyDMcecgzHHnIMyxpuCMsaagjLFmoExxJmBMcSZgDDDmIAvwpd/LcCWfiu/lX0qvpR8KL2TeyW7kXokuZB5I7eOdyS1jHYks4t1JbKKcyWwiHInrYZwKKuEbympgm0rp4BsLKR+ai6he2gwnnlmM5t2YzaYdGE6lXFfPZRxX0CTcF5GlHBeSpNwXlCUcF5WlHBeXpRwXmiUcF50k3Bef5RwXoCUcF6AlHBegJRwXoCUcF6AvJN7dLyTe3S8knt0u5J6c7uRenK7knpwvpR8YsGWflbDmIBMxZqBQ8abgj3HnIM4yJyDNMmdhDHJnoQxyp6FMsqehTLLnoU0yp+FNcqehTfJnoQ4yZ2EOMmcgznJnYQ4yJyDOMecgzfHm4I2xZqCNcSZgTPDmIAywpd/L8CWfi2/lX0rvpR8KLySeya6kHkluI54JLaNdiS0jHUksop0JbCIcieuhnAorIRvKamCbSqmgGsspH5qLqF7aDCeeWUzmnZjN5dzYTuVcV89lHBeQ5RwX0aUcF5LlHBeUZRwXliTcF5ik3BebpRwXnmUcF57lHBefJRwXn2UcF59lHBefb+VfXK/lX1yvpR8cr2UfHG+lHxuv5R9acGWflzEmYBQxpuCRsicgz/JnYQ5yp6FNcufhjPMn4Y0zKCGNc2ghjbNoYc4zaGHOs2hhzvMoIY9yZ6EPsSagT/FmoJAyZ2EP8qehT/KnoQ+yZ2EPcicgzzGm4I7xZqBOcSZgTbDmIAzwZd/MMCVfi6+lHwrvJJ7KLqReiW5j3gjt453I7WMdiSyinQlsIhyJ62GcCirhG8pqYJtKqaAay2kfmouoXtoMZ14ZTSadWM4l3NgO5RxX0CUcF5Dk3BeSJRwXk6UcF5UlHBeXZRwXmiTcF50lHBeeJRwXnqUcF57lHBefJRwXnzBln5ywJZ+cr+VfXG/lX1wv5V9b8KXf2LFmYFVx5yDSsmdhEHLn4U6zJ+GN82hhzXOoYc2zqKIOM+iiDrPo4k8z6OIPs+jiUHQo4lCzqKIRMidhEbInYRMyZ2ESMmdhEXMoIZEy5+GRMqfhUPKnoVCyZ2EQsicg0DGm4I9xZqBOsSZgDfCl380wJZ+ML+UfS29k3wpu5F6JrmPeCO2jncjtIt1JLGJcyauh3EnrYZwKKuEbympgm0qpn9rLaN9aS+ge2cxnHdkNpl1YjiWcmA9lHFfQJNwXkaTcF5LlHBeUZRwXliUcF5ilHBebZRwXnmUcF56lHBee5RwXnyUcF59wpd/csKXf3LBl35xwZZ+b8KXf2vFmYFcyJyDT8qehEbMn4Y+zaGHOM+iiDbQo4k40KOJOtGkij3SpIo/0qWKQdKli0TSpYpH0qWKStGkikzOoohNyZ6FTsqfhU/OoYdQz6KIT82hh0rMoIZIy5+FR8qehUfJnoRGyJ2EQ8ecg0DGmoE+xJmAOsKXfzXAln4xvpR9LLyTeym7kXomuZB5JLeOdyO1jHYksop0JbCIciethnAoq4RuKamCbSqmf2stonxpMJ96ZjOcd2Q3mHRiOpVxXz+UcF5Dk3BeSJRwXk6UcF5Uk3BeXpRwXmiTcF52lHBeeZRwXnyUcF59lHBefcOYf3HDmH9xw5h/ccKYf3DFmYFkyJyDV8qehUvMoIZCzqKIO9CjiTjRpIo50qWKPNOmiz7TpoxC1KeMRdSnjEjUp4xL1KeMTtSmjFHUp4xS06aLVNKli1XSpYpW0qSKV9GkilbQo4lVz6KIVM6iiFPNoYdRzKCHUMufhk3JnYRGx5yDQ8abgkLFmoE/w5iAOsGXfzW/lX0wvpN8LLySeyi6kHkkt453I7WMdiOyinQlsIhyJ62GcCirhG4qqIFsK6V/ay2hfGgynnlmNZp2YziYc2E8lXFfQJRwXkaUcF5LlHBeUpRwXlqUcF5klHBecJRwXnuUcF58lHBefJRwXnzEmYFuxJmBbsSZgW7FmoFsx5yDYMufhVLNoYdHz6KIP9GkijvSpYo706aLPdWnjEDVp41E1aiNR9aojUvWqI1O1qiOUtaojVXWqI1Y1qiNWtaojVzVp4xd1aeMXtSmjF7Tpote0qWKXtGkilzQo4lbz6OJWc6iiFbNoIdTy5+GUMqehUzInYRJx5yDRMWagUDEmYA8wpd/N8CWfjK+lHwtvJJ7KLmQeSW3jncjtYx2JLKKdCWvh3InrIVwKaqDbiungGwto35pMKB7ZzOdeGU2mnVjOpdzYD6UcV9DlHBfSJNwXlCUcF5Wk3BeYZRwXm2UcF54lHBeepRwXnqUcF56xpuCa8abgmvHm4Jqx5uDacqehVvNoYdOz6OJRNKkij3Tpos91aeMPtaojUHXqY5F16mOSNiqjkzYqo5R2aqPVNiqj1jYqo9b2KqPXtiqj2HYqo5i16mOZdepjmXWqI1m1aiNZdSnjGXTpotk0qWKYtGkimDQo4ldzqKIWs2hh1bMn4ZTyp6FT8mdhEvHnIJGxpqBQsSZgD3Cl384wJV9M76UfC28knoouZB5JbeOdyO0i3UksYlzJa+HcSishG8qqIJtLKZ/ay6ifWkxn3pmNJx3ZDiYdGE9lXFfQpRwXkeTcF5NlHBeVJRwXl6UcF5plHBedpRwXneUcF54lHBeeMmehGjJnYRnyZ2EZsqehWTNoIdW0KOJStKlikHUp4w91qiNP9epjkHYqo9F2KqPStqrkE3arJBR2qyQVtqskFvbrJBf2qyQYtqskGXaq5Bo2quQatmrkGvZq49s2KqPbdepjm3WqI1t06aLa82iiGfMoYhgzqOJWs2hh1vLoIZXyZ6EVMedhFPGnINRyJyDTcecg0jGmoJDxJmAPsKXfzjAlX0zvpN8LbuReim5j3glto13I7OLdSWxiXMmroZxKKuEbyqogWwtpH5qMKF8aDOeeWY2mnZjO5dzYT+UcV5FlHBeS5NwXlOTcF5bk3BeZpRwXnKUcF50lHBedZRwXnXMoIZnzJ+GZcyfhmPNoIZgz6KIU9KlikjUp4xA16mOPtiqjkHZq49F2qyQSduskU3crZFS3K2SV9ytkVzcrZJh3a6SZdyukmncrZFs3K2Rb9ytkXHcrZFy26yRdNqrkHXZq4902KqOdNKli3LMoohty6WLXcylilrFn4ZGy5h/RMedhEO6l39OxpuCTsabglPJnYRPyJyDScaagUTEmYA+wpd/OL+VfTK9k3wsu5F6J7iPeCO1jXYks4t0JbCIciethXApqoNuK6eAbC6kfmoxoHtnNJx3ZDmZdGI+lXFfRJRwXkqUcF5QlHBeWZRwXmOUcV9ulHBecZRwXnOTcF52zaGHaM2hh2bNoYdizqGIXdGkilHUp4xF1qiNQNiqj0Daq5BE26yRSNytkk3crpJT3a6SWN6vk13er5Ni3q+TZt+vk2vfsJNu3q+Tct6vk3XerpJ43a6SetyuknvbrZF726yRe9qrkHvWqY15zKKId8yli3TUqI1M6r+hSNmwnka7mH89upd/PLuXdVzInYRay5+FVMmdhE7InINJxZqCQ8SYgD3Bl383v5V9Mb2Teyu6kXkmt453JLSMdSWyinQlr4dxKKyFbyqogm0tpX9rMKJ8aDSfeWY3m3ZjPZdzYEKUcV5IlHBeT5NwXliUcF5hlHBfbJRwXnGUcF51k3Bed82hh2nNoYdpzqGHZ9CjiV3UpoxN1qiNRNiqj0Haq5BD3K2RR92ukkvdr5NR3q+TVt+wk13fsJRi4LCUZ+CwlGzgsZRw4LGUdOCwlHjfsJR73a+Tft2vk4Der5OB3a6Sgt2ukoHcrZGB2qyQf9apjn7UqI134baYW+/DpErvw6RJ2bCUSdCkiVbKn4ZizaGHX82gh1nLn4VUyZ2ETsecg0fFmoFBw5h/O8CWfjS9k3wvu5F6KbmPeCW2jXcjs4t1JbGJcyeuhnEpq4NuLKeBbC+kfmoyoHtnNpx3ZDyZdGJAlXFfR5RwXk6TcF5Wk3BeYZNwXmyTcF52k3Bed5NwXnjOoYdszqGHbM6iiGrSpYta1aeNTNiqj0Taq5BD3K2RRd2ukkrer5NP37CUVd+wlFzgsZRh4bKVZuGylWzhspVx4bGVdN+wlHjcr5N71a2Qgtqmio7cr5OE37CUhd+vk4fer5OG3a6Sh9ytkobbrJGE2qyRgN2vk3fou51d4LGVUdWskVTQpIpl0KSJaNCjiWTOoohfzaCGWMufhVLJnYRMxpuCRcOYgD6/lX03tIx2M7iPeCy3jngmtIx2JLSLdSWyinQnsIhyKKyFbyyogm0vpH9qMqF8aDaeeWU7mnVjQJZyYEeUcF5Ok3BeVZRwXl6UcF5rlHBedpRwXniUcF55zqKIbc+iiG3Poohr1KaMWNepjkvZqo9F262RRN2ukkjfsJRM4LCUUt+xlFjgq49n4LGVZOOzlmnjs5Zw47OWc96wk3fVq4980KmOgc2qjYrOq46O2q+Sit+wlInfr5OK37CUi96vk4zer5OK3a6SiNytkYbcrZGC3K6SfOCxlWvVq5Br1KeMbtOmi23RpIpp0KOJY86hh13MoIZXyp6EUMecg0nEmYFBv5V9OrmQeTW3jngwt453KbWMdiW0jHUls4p0JrGJciithnArqYJtLqB7ZzOifWk1n3pmOpt3ZD+Xc2FGlHBeTZRwXlWUcF5elHBeaZNwXniTcF55k3BeetCjiWzQo4ls0aSJadWnjFnYqY5M2qyRRdytkkbfsJNJ4LCUT+GylVXhspVc4bKWYeOzl2fltJdt5bSXcuOzl3bdsJN83bCTiNWliojVrZGN3LGUkOGylpDesJSQ1quQktqukpHbr5OR3a+Tjt2uk4zdrpKK3K2RiNutkYTarJB/2KqPedapjXbVp4xz06WLbNCjiWXPoohgzaGHWsufhVTJnYROx5uCRcSZgD7AlX05vZN8M7uReiy4jngnto12JbSLdSaxiXMorodxK6uEby2ngWwwpH5qNaF7aDmdeGU+mHRiRZVxX02UcF5VlHBeXpRwXmqTcF52k3BeeJNwXnnRpIlq0aSKaNOmi2PWqI1W2auPS9utkUXer5NG37CUS+GylVDis5ZW47OWXeS0l2PltJdq5bWYb+W1mHbltZh747SXgeCylYbgspWK47SXjeW1mJDktZeS37GVld2wlJvapomY3a+Tnd2vk5TfsJOS3q+Tj92uko3brZGJ2qyQhdmrj4DXqY581qiNd9SmjHHSpYtr0KOJZc2gh17Ln4VVxpuCT8icg0fGmoJBw5iAOsGWfjW+lHwuu5J6KLiPeCW2jXYms4p1J7CIciqthXAsqYJtMaV/azShfGg6nnlmPpp1YkSWcl9MlHBeVJRwXl6TcF5ok3BecZNwXnWTcF5306aLZNWnjGDWqI1c16mOV9qskEzcrZJG37CUR+CxlUvispZQ47OWVuS0l13ktJdj5bWYauW1mHHmtZh45raZfea2mYLmtpmH5rWYi+a2mY7mtZiS5bWYlOOzl5bfsZWX3bGUmN2wk5jgsZSW4LGUlN+wlJLer5OQ3a6SjdytkYnaq5CF2KqPgNepjnrUp4x006WLbdGkimfPoohhzaGHWcufhVLJnYRLx5uCRMWZgT3Cl382v5V9L7yTeyq6kHklt453JbOLdSiwiHMprYVwLamCbTGmgGs0onxoOp55Zj+adWNFlnJgTJRwXlaUcF5elHBeaJRwXmyTcF5vk3Bectepjl3Xqo5a2KqPWdiqj1fbrJFN3q+TR+CxlEjhspVN47OWU+S0l1jltZhd4rOWZd2xlG/dsZR25LSXeee2mX7nt5mD57aZiOe2mY3ot5qS57ealue3mZjmtpia5bWYm+S0l5zktJeb4rOWmuKylZnhsZSW4LCUk96vk5DcrpKM26yRiNmrkIPYqo5+1qmNeNWnjHLTpYts0aSKZc+iiF7NoIdWy56FTsicg0fGmoJAw5mAOcCWfjG9k3wrupF6J7eOdya0i3UosYlzKq2FcC6pg24xpoBsNaR+ajmgemc/m3dkRZdzYU2UcF5WlHBfX5RwXmiUcF5plHBeapRwXmzZq49Z2auPWdmrj1nZq5BX3K2RTt+wk0jhsZVK4rOWTuS0l1PltZha5raYYOS1mGjis5Zw5K2PfOa2mXvpuJqA6bibhum4m4zpuJuQ6biblOi4m5fot5qa57aZnOe2mZ3mtZie5bWYneS0l53js5ab4rKVmeCxlZfgsJST3q+Tj9ytkovbrJGG2quQgNipjnvWqI121KaMbtKli2bQo4lgzqKIWMyfhlHKnoVJx5yDQsWZgTvCl380v5V9LbySeyi5kHklto12KLKKdCqthnAuq4RvMaiCbTSlf2o5oXtoP5x3ZEaYdGFNlHFfV5RwX2CUcF5olHBeaZRwXmmUcF5p2auQWdmrkFnarJBY26yRVd2ukk/fsJRJ4bKVSuO0l07ltZhU5raZW+e3mWHnt5po5LaYcOW2mHfouJp96rmbguq5nIjquZuO6rmbkuq5m5XquJuZ6bianOi3mp3ot5qe57aZn+a1mJ/ltZie5LSXneKzlpvispaY4LGVlN+wlJDerpKM3K2RiNqskILZq49816mOdtWojW/Tpotp0qSKYs+jiVrNoIdTy56FS8idg0PGm4I8w5iANMCWfi69k3wpupF6JbeOeCe0i3UqsYhzLa2GcDGqg241poBrOqJ8aD+deGVGmXViT5VxX1iTcF5ilHBeZ5RwXmmUcF5plHBeadqskFjbrJFY3K2RV9ytklXdrpJS4LGUSuKylUrktJdN5raZUui3mVrot5pi6bibaeq5m2/quZt26rmcfOu6nILruZyJ67qcjeu6nJHruZyW6rmbmeq5m5zpuZud6bibn+i3mqDntpmg5rWYn+W1mJ7ktJeb47OWmeGylZbgsJSS36+Tjt6ukojbrZGD2quQftiqj3fWqY5w1KeMa9Oli2PQo4lbzqGHVMufhkzJnYRFxpuCPcSZgDbBln4vvpR8KruReia4j3gotYx2KrKKdC2uh3ExqoRvNaaAbDuifWlBnnllSZl1YlKVcV9ck3BeZpNwXmiTcF5pk3BeaZRwXmrcrZFZ3K2SWd2ukljdrpJY3a6SVuCxlEzis5ZK5LSXTea2mFHot5pY6bibYOq5m2fruZxv67qcdeu6nHzsup2C7LqdiOu6nY3supyS67qcluu6nJnruZyc6rmbnum4m5/puJuf6LeaoOe2mZ/mtZie5bSYnOSzl5nispWW4bGVkuCwlI7er5OJ3K2RhNuskX3Zq49316mOctWnjWvTpotk0aSJXc+iiFTMoIZNyp6FRcecgz3FmoE3wpd/ML+VfSq8knsnuZB5KLWNdiuyinQur4dxMquEbzengWw8on1pQ555ZUuZdWJUlXFfX5NwXmmTcF5rk3Bea5NwXmuTcF5s3a6SXN2uklzdrpJc3a6SXN2uklvgsZRP4rOWSuW1mEvmtplR6LeaV+m4m1/ruZxm67qcbOy7nXPsu5167LudgOy7nYftu52M7Ludke27nZTsu52Y67qcm+q6nJ3quZue6bibn+m4m5/ot5qe57aZneW1mJzktJeZ47OWluKylZLgsZWN36+Tid2ukoPbrZF+2auQeNiqjnHWqI1q1KaMZNKkil7Qo4lUzaGHTcufhUbInYM+xZqCN8OYgDDAln4rvZN7KLmQeSm2jXcss4t1L6+IcjOshG84qIFsPqN9aUWeeWZNmXViV5VxX2KUcF5uk3Beb5NwXm+TcF5vk3Beb92ukmHdrpJh3a6SYd2ukmHdrpJf4LCUVOKzlkvltZhL57aZT+i3mlXquZtd67qcZOu6nGvsu51y7budeO27nX/tvJ6E7bydi+27nZDtu52T7budluy7nZnrupyb67qcnOq5m53puJud6LibnOe2mZzmtpia5bWXmOOzl5Xis5aR4bGVjN+wlIjer5OC3K2SfdqskHfZq49w1qiNatSnjGPSpYpc0KOJVc6hh03Ln4ZGyZ2EPcebgjbEmIAxwZZ+K76TfCi6kXoqt453LLSLdTCwiHI0rIVvOaiBbUCjfWlHn3lmT5p1Y1mVcl9llHBecZRwXnOUcF5zlHBec5RwXnPcrZJm3K2SZtytkmbcrZJm3a2SZd+wlFjispZN5bWYS+e2mU7puJtS6rmbWuu6nGPsu51p7LudcO27nXftvJ597bydg+28nYjtvJ6N7byekO27npTtu52X7Lqdmeu6nJvrupyb6rmbm+m4mpvot5qa57aZmOa1mJbltJeS47OWj+KylYrgsZSG36+TgdyuknzbrJF22auPcNepjmrVp4xj0qWLXdGkilXOoohMzKCGRcmehT7Hm4I3xJmBMMGXfyu+lHwou5J6KbeOdy60i3UysYhyNq2FbzuogWxCpH5qSZ96ZlKadWJelXFfapRxXnaUcF53lHBed5RwXneUcF533K2RatytkWrcrZFq3K2RatytkmnfsJRd4rKWUeW1mEvntplN6biaUuq5m1jrupxg7LudZu27nW3tvJ5z7ryeeu68noDuvJ6F7ryeiu69no3tvJ6R7buelO27nZbsu52X67qcmOq5m5npuJqY6Leal+e3mZXmtZiT5bWYkOSzl4zispaI4bGUhN+wlH7drpJ6262RdNmrj27Yqo5n1aiNYdOmi1rRpIpSzqKIS8ygh0TKnoU9x5yDNsWagTDCl38rvpR8KbySeiu4j3gvtIx1M7GJczethXA+qYJtQ6R+akufemZVmnVjYZVyX26UcV96lHBfepRwX3uUcF97lHBfe9utkWvbrZFr262Ra9ytkmrdrpJn36+TYeGylVXktJdP5raZTui3mlHquZtX67qcXOy7nWPtu55p7ryecO68nnXuvJ58772egO68nobuvJ6K7r2eje28npDtu52S7LudlOu6nJXquZuV6biblem4mpTnt5qS5raZkOW1mI3ktJeJ47OWhOGxlYDfr5N93q6Td9ytkXHarJBr2KqOZtaojV7UpoxX0qSKUc+iiErMoIdDyp6FPMecgzXFmoEwwpd/LL+UfSq7kXotuI94MLWMdTWxiXM5roZwPaqDbkOkfmpNnnlmWpp1Y2WVcV9zlHFfeJRxX3uUcF98lHBffJRwX3zbrZFr262Ra9ytkmrcrpJo3q+TZN+wlF/hsZVa47OWVuW1mFLntplT6rmbWOy6nFzsu51g7budZu68nmvuvJ5x7ryeeO68nn3uvJ6D7ryeh+68noruvJ6N7bydjuy7nZDrupyR67mckeq5m5HpuJqQ57eZj+e2mYzltZiJ5bSXheOzloHhsZV937CUet6vk3TcrZFv2qyQaNiqj2LWqI1b1KaMVdKkik7Po4hIzaGHQcuehTvInIM1xZqBL8KXfyu+lHwsu5J6L7iPeDK1jHU3sop0Oa6HcT6pgm1JonxoVp14ZWKZdWJrlnJgcZVxX3aUcV95lHBfe5RwX3yUcF98262Ra9ytkmrcrpJo3q+TZd+wlGHgsZRe4bGVW+Kyllrjs5ZY5bWYV+m4mlnrupxc7LudX+27nWLtvJ5o7ryebe68nnLuvJ547ryefe68noLuvJ6F7byeiO28norsu52L7LqcjOu5nIzquZuM6bibi+i3morntpmI5rWYhOS0l4Lis5Z+4bKVeeCwlHXer5Nx3K2Ra9qskGbYqo9f1qiNWdSmjFLSpYpLz6OJRc2hhz/LnoU5x5yDM8SZgC7Cl38sv5R8LrySejG4j3g1tYx2N7KKdDuthXBHpH5qWZ96ZmScd2RqmnZjbJh0Ym+WcmBzlXFfdpRxX3mUcV97lHBffNytkmrcrpJo3q+TZd+vk2PgsJRg4bGVXuGxlV7ispVc4rKWWuS0l1fntplU6rmbWOu6nFvsu51f7budZO28nmjuvJ5t7r2ece68nnbuvZ567ryegO28noPtu52F7Ludhuy6nIfruZyH6rmbh+m4m4bot5qF57aZgua1mIDltJd947OWeeGylXTgsJRw3q+TbNytkmfarJBi2aqPXNaojVXUp4xP0qWKSc+iiEPNoYc9yp6FN8icgzHEmYEuwpd/Lb6UfDC8knozuI94N7WMdjywiHNEqoNuU6J8aWOeeWZrnXhlbZx3ZG+bdmNvmXRicZZyYHSVcV93lHFfepRxX3vdrpJo3q+TZt+vk2XfsJRk4LCUZOCxlGPgsZRj4LGUZOKyllrjs5dX5bWYUee3mlDpuJtT67qcWOy7nV7tu51h7byeZu68nmvuvJ5v7ryec+28nnjtvJ197budfuy7nYDsup2B67mcguq5m4LpuJqB6Leaf+e2mX3ltZh85bSXd+OzlnPhspVv4LCUa96vk2jcrZJj2qyQXtiqj1jWqI1R1KaMTNGkikXPoog/zaCHOcqehTTHm4Iww5iAL8GWfjC9lHw0u5J6N7iOeD6yinRHrYVwUaiBbFujfWlkoHpnapx3ZHSbd2R0m3djdJp2Y3WZdWJ1l3NgdpZyYHeVcV953q+TZt+wk2XfsJRm4LCUZuCwlGbgsJRn4LCUaOCwlGfhsZVh4rKWW+W1mE/mtplN6LiaTuq5nFPsupxW7LudXO27nV/tu55l7bydae28nm3tu51x7budde27nXfsupx667qce+u5nHzquZt66bibeui3mnnntpl35bWYdeS0l3Ljs5Zu4bKVauCwlGXerpNi3K2RXtqskFjYqo9T1qiNTtSmjEfRpIpCz6KIO8yfhjbJnYQyxpqBMMOYgDDAlX4zvZN7N7mQeT22jXdDsYlzTauEb1eogW1cpH5qZZ96ZnCcd2R3m3djeJt2Y3ebdmN3mnZjd5l1YnaYdGJ2l3Nhd9+wlGbgsJRm4LCUZ9+wlGjfsJNq36+TbN6vk2/er5Nv36+TbeGylWDktJdU5raZTei3mkzquJtP67mcU+u6nFfsu51a7LudX+y7nWPsu51m7Luda+y7nW3sup1v67qcceq6nHPquZtz6bibc+i3mnLnt5lx5raZcOW0mG7ktJdr4rKVaeCxlWTfsJNg3a6SXNutkVfZq5BT2KqOTdWojUjTpYtD0KOJPs6hhzjLn4Y1yJyEMcWagTHCl38zv5V9N7ySezu4j3hBtYx1R7GJc06shXBYp4FsYqJ9aW6deGV8m3dkfpt2Y36bdmN9m3Zje5t2Y3ibdmN3mnZjd5p1YnffsJRo37CTat+wk2zer5Nu3q6Sc92uknbdrpJ33a6Sd92uknjgsJRq4rOWXOW1mFLntplO6LeaTOm5m07quZxR67qcVeu6nFnsupxd7LqdYOy6nGTsupxn67qcaOu6nGrquZtr6ribbOm4mmzot5ps57aZaua1mGnktJdo47OWZeKylWLgsZRd3q+TWt2uklbbrJFS2KqPT9epjknVp4xE0qWKQNCjiTrNoYc2y5+FM8icgzLFmoEzwpd/N76UfDy7kXpBt453R7OLdE6viHJUq4RvXaZ/a2qge2d5m3Zjh5p2Y4eadmOHmnZjhpp2Y4OadmN+mnZjfJp2Y3ubdmN43q+Tbt6uknPdrpJ23a6Sd9ytknncrZJ73K2Se9ytknvdrpJ53a6TdeCxlWXjs5Zb5bWYUOa2mUzot5pM6biaTuq5m1DquZxU67mcV+u6nFrrupxd67qcX+q5m2LquZtk6bibZem4m2Tot5pl57aZZea1mGTltJhi5LSXYOKzll7hsZVc37CUWN2vk1XcrZFR2qyQTdiqjknWqI1F1KaMQdKkijzPoog4zKCGNcqehTPHm4I1xJmAOMGWfju9k3xBupB5R7aNdk6yiXNVrYZwXqiCbWmkfmpznnlmhJt3ZIiadWOKmnViipl1YoqadWKJmnVih5p1Y4aadmODmnZjft2uknfcrZJ53K2Se9ytknvcrZJ73K2Se9ytknvcrZJ63a6Sed2uknber5N04LCUaOKyllzktJdS5rWYTee3mkzouJpM6biaT+q4m1HquJtU6rmbVum5m1jpuJpb6bibXOi4ml7nt5lf57aZXua1mF7ltZhd5LSXW+OzllrispVZ4LCUV96vk1LdrpJP26yRTNmrj0nXqY5F1aeNQdOmiz3Ro4k6zqGHN8ufhTXJnYQ2xZqCOcOYgD2/lX1BvJJ7SLiPeE20jHVUsIhyXquEb2mmgGt2oXxogZ96ZoSceGWIm3Zjipp1Y4qZdWKLmXVii5l1YoqZdWKKmnViiZp1YofcrZJ73K2Se9ytknvcrZJ73K2Se9ytknvcrZJ63K6Sed2uknjdrpJ33a6Sdt6uk3TfsJRp4rKWXeS0l1XmtZlM5raZTOe3mUvot5pN6LiaT+i4mlHouJpT6LeaVei3mlbnt5lX57aZWOa1mFfktJdX5LSXVeOzllXispZT4LGVUt+wk1DdrpJN3K2RStqskEfYqo9E1qiNQNSnjD3SpYs60KOJOM2ghjfKnoU3x5yDO8WZgT7Bl39DvpR8SLqRek62jXdWsop0YK2GcGqpgm11pH5qgqJ8aIOge2eFnnlmh5x4ZIibdmOKmnVjipl1YouZdWKLmXVii5l1YouZdWKK3K2Se9ytknvcrZJ73K2Se9ytknvcrZJ63K6Sed2uknjdrpJ43a6Sd92uknfdrpJ23a6Sdd+vk2zhsZVg47OWV+S0l07ltZhL5raYSua2mUvntplN57aZTue2mU/mtplR5rWYUeW1mFHltJdQ47OXUOOzlk/ispVP4bGVTeCwlEzer5NK3K6SR9qskEXZq49C16mOQNWnjT3Tpos70KOJOc6hhzjLn4Y6yZ2EPMabgkDDmIBFwJV9S7ySelG4jnhZs4t1Yq+HcW2qg253poBrgaR+aoSjfWmFoXxohaB6Z4WeeWaHnHhkiJt2Y4qadWOKmXVii5l1YouZdWKLmXVii9ytknvcrZJ73K2Se9ytknvcrZJ63K6Sed2uknjdrpJ43a6Sd92uknfdrpJ33a6SeN2uknXer5Nw3q+TbeCwlGThspVa4rKWVOO0l03ktJdK5bWYSeW1mErltZhL5bWYSuS0l0vks5dM4rOWS+KylkrhsZVK4LGUSt+wlEner5NH3a6SRtuskUTZq5BB16mOP9WojT3Upos70aSKOs+iiDvNoIY9yp6FQMebgkTEmYBJwJZ+T72Te1W4j3hftYx2ZrGJc22thXB4qoNue6eAbIGlf2qEpH5phaN9aYWhfGiFoHpnhZ55ZoeceGSIm3Zjipp1Y4qZdWKLmXVii5l1YovcrZJ73K2Se9ytknvcrZJ63K6Sed2uknjdrpJ43a6Sd92uknfdrpJ33a6SeN2uknjdrpJ13a6Scd2ukm/drpJw37CTZ9+wlGDhsZVX4bKVUuKylU7ispZL47OWSOKylkjispVI4bKVR+GxlUfgsZVG37CURt6vk0XdrpJF3K2SRNuskEPZq49B16mOQNaojT3Tpow90qSKPs+jiEDMoIdCyp6FRcecg0nEmYFOwZZ+Vb2TfFu6kXphto13arKKdHOuh3F6rYVwequEb3yogW2Bpn9rhKV/aoWkfmmFo31phaF8aIWgemeFnnlmh5x4ZIibdmOKmnVjipl1YouZdWKL3K2Se9ytknvcrZJ63K6Sed2uknjdrpJ43a6Sd92uknfdrpJ33a6SeNyuknjdrpJ33a6Sc92uknHdrpJy3a6SctytkXLdrZJt3q6TZd6vk1/fr5NZ37CUU+CwlE7fsJRM4LGUSN+wlEffsJRF3q+TRt2ukkTcrZFD26yRQ9qrkELZq49B16mOQdWojUHTpotD0aSKRM+iiEfNoIdJyp6ETcecg1HEmYFVwpd/Wr6UfGG7kXpot453b7OLdHewiHJ9rodxfa2GcHyshXB8qoNufqeAbIKmf2uEpX5qhaR+aYWjfWmFoXxohaB6Z4WeeWaHnHhkiJt2Y4qadWOKmXVii9ytknvcrZJ63K6Sed2uknjdrpJ43a6Sd92uknfdrpJ33a6SeNytknjcrpJ43a6Sdd2uknLdrpJy3K2Sc9ytkXTcrZFz3K2RcduskHPbrJFt3K2RZtyukl/drpJa3a6SV92uklHdrpJO3K2RTtuskUzarJBK2auPStiqj0jXqY5I1qiNSNSnjEnSpYtL0aSKTM6iiE/MoIZSyp6FUsicg1fEmoFcwpd/Yb+VfWe8knttuI94dbSMdnuzinR7sIhzfq+Hcn6uh3F+rYZwfauEb32ogW2BpoBrg6Z/a4SlfmqFpH5phaN9aYWhfGiFoHpnhZ55ZoeceGSIm3Zjipp1Y4rcrZJ63K6Sed2uknjdrpJ43a6Sd92uknfdrpJ33a6SeNytknjcrZJ43a6Sd92uknTdrpJz3K2Sc9ytkXTcrZF026yRdduskHXaq5B02quQcdmrj3HZq49u2auQaNqrkGTaq5Bf2auQXNiqj1vYqo5Z16mOVtaojVXVp41U1KaMVNOli1TRpIpV0KOJV86hh1nLn4ZcyZ2EX8ecg2DFmoFjwpd/aL+VfW68knp1uZB5ebeOd3m1jHZ8s4t0frGJc3+wiHJ/r4dyfq6GcX6thXB9qoNuf6eAbIKmf2uEpn9rhKV+aoWkfmmFo31phaF8aIWgemeFnnlmh5x4ZYibdmOJ3a6Sed2uknjdrpJ43a6Sd92uknfdrpJ33a6SeNytknjcrZJ53K2SeNyuknbcrpJ03K2SdNytkXTcrZF03K2RdduskHXaq5B22quQddmrj3TZqo9y2KqPcNiqj23XqY5w1qiNbtaojWvVp41p1aeMZdSnjGPTpoti0qWKYtGkiWLQo4lizqGIY8yghmXLn4VmyZ2EacabgmzEmYFvwZd/c7+VfXa+lHx0u5J6d7mQeXq3jnh8tY12fbSLdX6yinR/sIhzf6+Icn+vh3J+roZxfqyFb36pgm2BpoBrhKZ/a4Smf2uEpX5qhaR+aYWjfWmFoXxohaB6Z4WeeWaHnXhliN2uknjdrpJ43a6Sd92uknfdrpJ33a6SeNytknjcrZJ53K2SeNytknfcrZJ13K2RdNytkXTcrZF03K2RdNuskXXaq5B22quQddmrj3XZqo902aqPc9iqj3LXqY5x1qmOcdaojXDVqI1t1aeMatSnjGjTpYtp0KOJcM+iiHDOoYdwzKCGcMufhXHJnYRzyZ6EbMicg2zGm4Juw5mAccGWfnW/lX13vpN8d7uSenm5kHl7uI94fLeOd320jHZ+s4t1frGJc3+wiHJ/r4hyf6+Hcn+uhnF+q4RvgKiBbYKmgGuEpn9rhKZ/a4SlfmqFpH5phaN9aYWhfGiFoHpnhZ96ZobdrpJ33a6Sd92uknfdrpJ33a6SeNytknjcrZJ53K2SedytknjcrZJ13K2RdNytkXTcrZF03K2RdNytkXXbrJB12quQdtqrkHXZqo902aqPdNiqj3PXqY5z1qmOc9aojXLWqI1w1aeNbtSnjGzTpYts0aSJb8+iiHLOoohyzaGHcsyghnLKnoVzyZ2EdMidhHLInINvxpqCb8OZgHLBln51v5R9eL6UfHm8knt5upB5e7iPeHy3jnh8tY12fbSLdX6yinR/sIhzf6+Icn+viHJ/r4dxf62GcX6rhG+Ap4Fsg6Z/a4Smf2uEpn9rhKV+aoWkfmmFo31phaF8aIWge2eF3a6Sd92uknfdrpJ33a6SeNytknjcrZJ53K2SedytknncrZJ33K2RddytkXTcrZF03K2RdNytkXTcrJF126yQdtqrkHbZq4912aqPdNmqj3TYqo9016mOc9apjnPWqI1y1qiNcNWnjW7Upoxt0aSKcM+jiXPPoohzzqKIc82hh3LMoIZzyp6FdMmdhHXInYR1x5yDc8WagnHDmYBywZZ+db+UfXi+lHx5vZN7erqQeXu4j3h8uI94fLeNd320jHZ+s4p0f7CJc3+wiHJ/r4hyf6+Icn+vh3F/rIVvf6iBbIKmf2uEpn9rhKZ/a4Slf2uEpX5qhaN9aYWifGiFoXxohA==";var gl="bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/awAA/2wAAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/aAAA/2oAAP9sAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2MAAP9iAAD/ZgAA/2gAAP9qAAD/bAAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/YwAA/2AAAP9dAAD/ZQAA/2YAAP9oAAD/agAA/2wAAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9jAAD/YAAA/1wAAP9ZAAD/ZgAA/2YAAP9mAAD/aAAA/2oAAP9sAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2MAAP9gAAD/XAAA/1kAAP9YAAD/agAA/2cAAP9mAAD/ZgAA/2gAAP9qAAD/bAAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/YwAA/2AAAP9cAAD/WQAA/1gAAP9YAAD/bAAA/2oAAP9nAAD/ZQAA/2YAAP9oAAD/agAA/2wAAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9jAAD/YAAA/1wAAP9ZAAD/WAAA/1gAAP9YAAD/bQAA/2sAAP9oAAD/ZgAA/2UAAP9mAAD/aAAA/2oAAP9sAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2MAAP9gAAD/XAAA/1kAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/2wAAP9qAAD/aAAA/2YAAP9lAAD/ZgAA/2gAAP9qAAD/bAAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/YwAA/2AAAP9cAAD/WQAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9sAAD/agAA/2cAAP9mAAD/ZQAA/2YAAP9oAAD/agAA/2wAAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9jAAD/YAAA/1wAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bAAA/2oAAP9nAAD/ZQAA/2UAAP9mAAD/aAAA/2oAAP9sAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2MAAP9gAAD/XAAA/1kAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/2sAAP9oAAD/ZgAA/2UAAP9lAAD/ZgAA/2gAAP9qAAD/bAAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/YwAA/2AAAP9cAAD/WQAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9qAAD/aAAA/2YAAP9lAAD/ZQAA/2YAAP9oAAD/agAA/2wAAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9jAAD/YAAA/1wAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/agAA/2cAAP9mAAD/ZQAA/2UAAP9mAAD/aAAA/2oAAP9sAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2MAAP9gAAD/XAAA/1kAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bAAA/2oAAP9nAAD/ZQAA/2UAAP9lAAD/ZgAA/2gAAP9qAAD/bAAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/YwAA/2AAAP9cAAD/WQAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2sAAP9oAAD/ZgAA/2UAAP9lAAD/ZQAA/2YAAP9oAAD/agAA/2wAAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2MAAP9iAAD/YAAA/1wAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9qAAD/aAAA/2YAAP9lAAD/ZQAA/2UAAP9mAAD/ZwAA/2oAAP9rAAD/bAAA/2wAAP9sAAD/awAA/2oAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/YgAA/2AAAP9dAAD/WgAA/1kAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/agAA/2gAAP9mAAD/ZQAA/2UAAP9lAAD/ZQAA/2YAAP9nAAD/aQAA/2oAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9hAAD/XgAA/1sAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bAAA/2oAAP9nAAD/ZgAA/2UAAP9lAAD/ZQAA/2QAAP9lAAD/ZgAA/2cAAP9pAAD/agAA/2oAAP9qAAD/aQAA/2gAAP9mAAD/ZAAA/2IAAP9eAAD/WwAA/1oAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9qAAD/ZwAA/2YAAP9lAAD/ZQAA/2QAAP9kAAD/ZAAA/2UAAP9nAAD/aQAA/2oAAP9pAAD/aAAA/2cAAP9kAAD/YAAA/10AAP9cAAD/WgAA/1kAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/agAA/2cAAP9mAAD/ZQAA/2QAAP9kAAD/ZAAA/2UAAP9mAAD/aAAA/2kAAP9pAAD/ZwAA/2QAAP9hAAD/XgAA/10AAP9cAAD/WwAA/1oAAP9ZAAD/WAAA/1gAAP9YAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/awAA/2oAAP9oAAD/ZwAA/2YAAP9mAAD/ZgAA/2cAAP9oAAD/aAAA/2kAAP9nAAD/ZAAA/2IAAP9hAAD/YAAA/18AAP9dAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9qAAD/aQAA/2kAAP9oAAD/aAAA/2gAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9fAAD/XgAA/10AAP9cAAD/WwAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/agAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9gAAD/YAAA/18AAP9dAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/";var yl="NTExqDUxMZ82MjKKNzMzajk1NTc6NjYgOjY2HTo2Nh06NjYdOjY2HTo2Nh06NjYcOjY2Gzo2Nhs6NjYbOjY2HDo1NRw6NTUcOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMSM0MDAjMy8vIzEtLSMvLCwkLywsJS8rKycuKysoLisrKC4rKyguKysoLisrKy0qKkkrKCiMKicnsSonJ8AqJyfGNTExqDUxMZ82MjKKNzMzbDg0NDo6NTUhOjY2HTo2Nh06NjYdOjY2HTo2Nh06NjYcOjY2Gzo2Nhs6NjYbOjY2HDo1NRw6NTUcOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMSM0MDAjMy8vIzEtLSMvLCwkLywsJS8rKycuKysoLisrKC4rKyguKysoLisrKy0qKkorKCiNKicnsSonJ8AqJyfGNTExqDUxMZ82MjKKNTExbzUxMUA4NDQkOjY2Hjo2Nh06NjYdOjY2HTo2Nh06NjYcOjY2Gzo2Nhs6NjYbOjY2HDo1NRw6NTUcOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMSM0MDAjMy8vIzEtLSMvLCwkLywsJS8rKycuKysoLisrKC4rKyguKysoLiorLS0pKU4rJyiOKicnsSonJ8AqJyfGNTExqDUxMZ82MjKLNTExcDMvL0M3MzMlOjY2Hjo2Nh06NjYdOjY2HTo2Nh06NjYcOjY2Gzo2Nhs6NjYbOjY2HDo1NRw6NTUcOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMSM0MDAjMy8vIzEtLSMvLCwkLywsJS8rKycuKysoLisrKC4rKyguKyspLSoqMSsoKFYqJyeSKicnsSonJ8AqJyfGNTExqDUxMZ82MjKLNTExcDMvL0Q3MzMlOjY2Hjo2Nh06NjYdOjY2HTo2Nh06NjYcOjY2Gzo2Nhs6NjYbOjY2HDo1NRw6NTUcOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMSM0MDAjMy8vIzEtLSMvLCwkLywsJS8rKycuKysoLisrKC4rKyguKyspLSoqMysoKFoqJyeUKicnsSonJ8AqJyfGNTExqDUxMZ82MjKLNTExcDMvL0Q3MzMmOjY2Hjo2Nh06NjYdOjY2HTo2Nh06NjYcOjY2Gzo2Nhs6NjYbOjY2HDo1NRw6NTUcOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMSM0MDAjMy8vIzEtLSMvLCwkLywsJS8rKycuKysoLisrKC4rKyguKyspLSoqMysoKFoqJyeUKicnsSonJ8AqJyfGNTExqDUxMZ82MjKLNTExcDIvL0U2MjIpOTU1Hzo2Nh06NjYdOjY2HTo2Nh06NjYcOjY2Gzo2Nhs6NjYbOjY2HDo1NRw6NTUcOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMSM0MDAjMy8vIzEtLSMvLCwkLywsJS8rKycuKysoLisrKC4rKyguKyspLSoqMysoKFsqJyeUKicnsSonJ8AqJyfGNTExqDUxMZ82MjKLNDEwcDEtLUgzLy8vODQ0Ijo2Nh46NjYdOjY2HTo2Nh06NjYcOjY2Gzo2Nhs6NjYbOjY2HDo1NRw6NTUcOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMSM0MDAjMy8vIzEtLSMvLCwkLywsJS8rKycuKysoLisrKC4rKyguKisrLSkpNysnJ1wqJyeUKicnsSonJ8AqJyfGNTExqDUxMZ82MjKLNDAwcTAtLUoxLi4yNzMzJDo2Nh46NjYdOjY2HTo2Nh06NjYcOjY2Gzo2Nhs6NjYbOjY2HDo1NRw6NTUcOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMSM0MDAjMy8vIzEtLSMvLCwkLywsJS8rKycuKysoLisrKC4rKyktKiovKygoQConJ2AqJyeVKicnsSonJ8AqJyfGNTExqDUxMZ82MjKLNDAwcTAtLUoxLS0yNzMzJDo2Nh46NjYdOjY2HTo2Nh06NjYcOjY2Gzo2Nhs6NjYbOjY2HDo1NRw6NTUcOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMSM0MDAjMy8vIzEtLSMvLCwkLywsJS8rKycuKysoLisrKC4rKyktKioxKygoQyonJ2IqJyeVKicnsSonJ8AqJyfGNTExqDUxMZ82MjKLNDAwcTAtLUoxLS0zNzMzJDo2Nh46NjYdOjY2HTo2Nh06NjYcOjY2Gzo2Nhs6NjYbOjY2HDo1NRw6NTUcOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMSM0MDAjMy8vIzEtLSMvLCwkLywsJS8rKycuKysoLisrKC4rKyktKioxKygoRConJ2IqJyeVKicnsSonJ8AqJyfGNTExqDUxMZ82MjKLNDAwcTAtLUoxLS00NzMzJjo2Nh86NjYdOjY2HTo2Nh06NjYcOjY2Gzo2Nhs6NjYbOjY2HDo1NRw6NTUcOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMSM0MDAjMy8vIzEtLSMvLCwkLywsJS8rKycuKysoLisrKC4rKyotKSk0KycnRSonJ2IqJyeVKicnsSonJ8AqJyfGNTExqDUxMZ82MjKLNDAwcTAtLUoxLS02NzMzKjo2NiE6NjYeOjY2HTo2Nh06NjYcOjY2Gzo2Nhs6NjYbOjY2HDo1NRw6NTUcOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMSM0MDAjMy8vIzEtLSMvLCwkLywsJS8rKycuKysoLisrKS4qKi0sKCg6KicnSConJ2MqJyeVKicnsSonJ8AqJyfGNTExqDUxMZ82MjKLNDAwcTAtLUoxLS02NzMzLDo2NiI6NjYeOjY2HTo2Nh06NjYcOjY2Gzo2Nhs6NjYbOjY2HDo1NRw6NTUcOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMSM0MDAjMy8vIzEtLSMvLCwkLywsJS8rKycuKysoLisrKS0qKi8rKCg9KicnSionJ2MqJyeVKicnsSonJ8AqJyfGNTExqDUxMZ82MjKLNDAwcTAtLUoxLS03NzMzLTo2NiQ6NjYeOjY2HTo2Nh06NjYcOjY2Gzo2Nhs6NjYbOjY2HDo2NR06NTUcOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMSM0MDAjMy8vIzEtLSMvLCwkLywsJS8rKycuKysoLisrKS0qKi8rKCg+KicnSionJ2MqJyeVKicnsSonJ8AqJyfGNTExqDUxMZ82MjKLNDAwcTAtLUoxLS03NzMzLzo2Nic6NjYgOjY2HTo2Nh06NjYcOjY2Gzo2Nhs6NjYcOjY2HTo2Nh06NTUcOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMSM0MDAjMy8vIzAtLSMvLCwkLywsJS8rKycuKysoLisrKi0qKjErKCg/KicnSionJ2MqJyeVKicnsSonJ8AqJyfGNTExqDUxMZ82MjKLNDAwcTAtLUoxLS03NzMzMDo1Nik6NjYhOjY2Hjo2Nh06NjYcOjY2Gzs2Nhs7NjYdOjY2HTo2Nh06NTUdOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMSM0MDAjMi8vIzAtLSMvLCwkLywsJS8rKycuKysoLioqLCwpKTUrKChBKicnSionJ2MqJyeVKicnsSonJ8AqJyfGNTExqDUxMZ82MjKLNDAwcTAtLUoxLS03NzMzMDo1Nik6NjYiOjY2Hjo2Nh06NjYcOjY2Gzs2Nhw7NjYdOzY2Hjo2Nh06NjUdOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMCM0MDAiMi4uIzAtLSMwLCwkLywsJS8rKycuKyspLSoqLiwpKTgrJyhCKicnSionJ2MqJyeVKicnsSonJ8AqJyfGNTExqDUxMZ82MjKLNDAwcTAtLUoxLS03NzMzMDo1Nis6NjYlOjY2IDo2Nh06NjYcOzY2HDs2Nh07NjYeOzY2Hjo2Nh46NjYdOjU1HTk1NRw5NTUcOTU0HDg0NBw4NDQdNzMzHTczMx03MzMeNjIyHzUyMiE1MTEiNTExIjQwMCIzLy8iMi4uIzEtLSQwLCwkLywsJS8rKycuKysqLSoqMSwpKTkrJydCKicnSionJ2MqJyeVKicnsSonJ8AqJyfGNTExqTUxMaA2MjKKNDExcTAtLUsxLi43NzMzMDo1Niw6NjYnOjY2Izo2Nh86NjYdOzY2HDs2Nh47NjYeOzY2Hjo2Nh86NjYfOjY2Hzo1NR45NTUfOTU1Hzg0NB84NDQfODQ0HzczMyA3MzMgNjIyITYyMiE1MTEiNTExIjQwMCIzLy8iMi4uIzEuLiQwLS0mLywsJi8rKykuKissLSoqMywoKDorJydCKicnSionJ2IqJyeTKicnsConJ8AqJyfGNTExsDYyMqE2MjKKNTExcjIvL1EzLy88ODQ0NDo2NjA6NjYsOzY2KDs2NiQ7NjYiOzY2IDs3NyE7NzchOzY2Ijs2NiM6NjYkOjY2JDo2NiU6NTUmOTU1Jzk1NSg4NDQoODQ0Jzg0NCg3MzMnNzIyJjYyMiY1MTElNTExJTQwMCQzLy8lMi8vJjIuLigxLS0qMCwsLC8rLC8uKyszLSoqOCwpKT8rKChGKicnTionJ2IqJyeOKicnrSonJ8AqJyfGNTIysDYyMqY3MzOKNzMzdTczM184MzNLOTU1Qjo2Nj07NjY5Ozc3Njs3NzI7NzcuOzc3LDs3Ny07NzctOzc3LTs3Ny47NjYvOzY2MDo2NjI6NjYzOjU1NDk1NTU5NTU1ODQ0NDg0NDQ4MzMzNzMzMTYyMjA2MjIvNTExLzQxMS80MDAwMy8vMzIuLjUxLi43MC0tOi8sLD4uKytCLSoqRiwpKUwrKChTKicnWyonJ2wqJyeOKicnqyonJ8AqJyfKNjIyyjczM684NDSTOTQ1fjk1NW06NjZfOzY2WDs3N1M7NzdPPDc3TDw3N0k8NzdFPDc3Qzw3N0M8NzdBPDc3QDs3N0E7NzdDOzc3RDs2NkQ6NjZGOjY2Rjo1Nkc5NTVIOTU1Rzg0NEY4NDRFNzMzQzczM0I2MjJBNjIyQDUxMUA0MDBDMzAwSDMvL0wyLi5NMS0tTzAsLFIvKytVLioqWSwpKV8rKChmKicnbionJ30qJyeTKicnrConJ8IqJyfQNjIy0zczM704NDSkOTU1kDo2NoI7NjZ4Ozc3cjs3N208NzdpPDg4ZTw4OGM8ODhiPDg4Yjw4OGE8ODhdPDg4Wjw3N1o8NzdcOzc3XTs3N147NzdfOzY2Xzo2NmA6NjZhOTU1YDk1NV84NDRdODQ0WzczM1k3MzNYNjIyVzUxMVg1MTFbNDAwYTMvL2YyLy9oMS4uaDAtLWgvLCxpLisrbC0pKXEsKCh4KicngConJ4wqJyebKicnrionJ8QqJyfRNjIy5zczM9I5NDS6OjU1qDo2Nps7NzeSOzc3jDw3N4c8ODiDPDg4fj04OHw9ODh9PTg4fj04OH09ODh6PTg4dzw4OHg8ODh6PDc4ezw3N3s7Nzd8Ozc3fTs2Nn06NjZ9OjY2fTk1NXw5NTV6ODQ0eDg0NHY3MzN0NzIzcjYyMnE1MTF0NDAweDQwMH0zLy9+Mi4ufTEtLXwwLCx9LisrgC0qKoQsKSmKKygokSonJ5sqJyenKicnuConJ88qJyffNzMz/zg0NOo5NTXTOjY2xDs2Nrc7NzevPDc3pzw4OKI9ODidPTg4mD04OJY9OTmWPTk5lj05OZU9ODiTPTg4kj04OJM9ODiUPDg4lDw4OJU8NzeVOzc3ljs3N5c7NjaXOjY2ljo1NZY5NTWUOTQ0kzg0NJA3MzOONzMzizYyMok2MjKKNTExjTQwMJEzLy+TMi4ukzEtLZIwLCyULysrly4qKpssKSmhKygoqConJ7AqJye7KicnySonJ90qJyfvNzMz/zg0NP85NTXtOjY23zs3N9Q8NzfLPDg4wj04OLs9ODi1PTk5rz05Oaw9OTmqPTk5qT05Oac9OTmmPTk5pT04OKY9ODinPTg4pzw4OKc8ODioPDc3qDs3N6k7NzepOzY2qDo2Nqg6NTWnOTU1pjg0NKU4NDSjNzMzoDczM542MjKdNTExnzQwMKMzLy+mMi4vqDEuLqkwLS2rLywsry4qKrUsKSm7KygowyonJ8wqJyfVKicn4ConJ+8qJyf7NzMz/zg0NP85NTX/OjY28Ds3N+M8NzfZPDg40D04OMg9OTnBPTk5uz45Obc+OTm0Pjk5sj45ObE+OTmwPTk5rz05Oa89OTmwPTg4sD04OLA8ODiwPDc4sTw3N7E7NzeyOzY2sjo2NrI6NTWyOTU1sjk0NLE4NDSxNzMzsDczM642MjKuNTExsDQxMbM0MDC3My8vuTIuLrswLS2+Lywswy4rK8ktKSnQKygo2ConJ+IqJyftKicn+SonJ/8qJyf/ODQ0/zg0NP85NTX/OjY28zs3N+U8NzfaPDg4zz04OMY9OTnAPjk5uj45ObY+OTmyPjk5rz45Oa0+OTmtPjk5rT45Oa09OTmtPTk5rT04OK49ODiuPDg4rjw3N687NzevOzc3sDo2NrE6NjayOTU1szk1NbQ4NDS1ODQ0tjczM7c2MjK4NTExujUxMb00MDDAMy8vwzIuLsYxLS3KMCwszy4rK9UtKirdLCko5SsnJ/AqJyf/Kicn/yonJ/8qJyf/ODQ0/zg0NP85NTX+OjY26zs3N908NzfRPTg4xj05Obs9OTm0Pjk5rj45Oag+OTmjPjo6oD46Op4+OTmePjk5nj45OZ4+OTmdPTk5nj05OZ89ODifPDg4oDw4OKA8NzegOzc3ojs2NqU6NjamOjU1qDk1Nas4NDSuODQ0sDczM7M2MjK2NjIyuTUxMbs0MDC+My8vwjIuLsgxLS3OMCws1C8rK9stKirkLCkp7isnJ/oqJyf/Kicn/yonJ/8qJyf/ODQ0/zg0NP05NTXrOjY22Ds3N8s8NzjBPDg4tj05Oao+OTmiPjk5mz45OZM+OjqNPjo6ij46Ook+OjqJPjk5iT45OYg+OTmHPjk5iT05OYo9ODiJPTg4ijw4OIs8NzeLOzc3jTs3N5A7NjaSOjY2lTk1NZk5NDScODQ0oDczM6Q3MzOoNjIyrDUxMbA0MDCzMy8vuTIuLsExLS3KMCws0i8rK9otKirkLCkp8CsnJ/wqJyf/Kicn/yonJ/8qJyf/ODQ07zg0NOc5NTXSOjY2vzs3N7M8ODiqPDg4oD04OJU+OTmLPjk5gz45Ono+OjpzPjo6cD46OnA+OjpvPjo6bj45OW4+OTluPjk5bz05OXE9OTlwPTg4cTw4OHI8ODhzPDc3dTs3N3g7NjZ5OjY2fTk1NYE5NTWEODQ0iDczM403MzOSNjIylzUxMZw0MDChMy8vpzIuLrExLS29MCwsyC8rK9MtKireLCkp6SsnJ/QqJyf/Kicn/yonJ/8qJyf/ODQ02jg0NNE5NTW7OjY2pzs3N5s8NzeRPDg4iT05OX0+OTlzPjk5aT46OmA+OjpaPjo6Vz46OlU+OjpUPjo6Uz46OlQ+OTlVPjk5Vj05OVY9OTlWPTg4Vzw4OFg8ODhZPDc3Wjs3N107NjZfOjY2YTo1NWY5NTVpODQ0bTgzM3E3MzN2NjIyfDUxMYM0MDCJMy8vkDIuLpsxLi6oMC0tti8rK8QtKirQLCgo2isnJ+QqJyfxKicn/yonJ/8qJyf/ODQ0uDk0NLQ5NTWoOjY2lzs2Nog8Nzd8PDg4cz04OGg+OTldPjk5Uz45Oks+OjpFPjo6Qj46Oj8+Ojo9Pjo6PT46Oj0+OTk+Pjk5Pz45OT49OTk+PTg4Pz04OEE8ODhBPDc3Qjs3N0U7NjZHOjY2SDo1NUw5NTVQODQ0Ujg0NFY3MzNaNjIyYDUxMWc0MDBuMy8vdzIuL4IxLS6QMCwsny8rK64tKiq7LCgoxSonJ9AqJyfeKicn6yonJ/YqJyf+OTQ0qDk0NKU5NTWfOjU1kTo2Nn87NzdwPDg4ZD04OFc9OTlNPjk5RD45OTw+Ojo3Pjo6Mj46Oi8+OjotPjo6LD45OSs+OTksPjk5LT45OS09OTktPTg4LT04OC88ODgvPDc3MTs3NzI7NjYzOjY2NTo1NTg5NTU7ODQ0PDg0ND83MzNDNjIySTUxMU80MDBXMy8vXzIuLmsxLS14MCwshi4rK5QtKSqiKygosConJ74qJyfPKicn3ConJ+gqJyfwOTU1oTk1NZ05NTWZOTU1kDo2Nn47NzdtPDc3Xj04OFA9OTlEPjk5PD45OTQ+OTkvPjo6Kj46Oic+OjokPjo6Iz45OSE+OTkhPjk5IT05OSE9OTkhPTg4IT04OCI8ODgiPDc3Izs3NyU7NjYmOjY2KDo1NSo5NTUsODQ0LTg0NDA3MzM0NjIyOTUxMT40MDBFMy8vTDIuLlYxLS1iLywsby4rK30tKSmPKygooSonJ7QqJyfHKicn0yonJ90qJyfmOTU1mjk1NZg5NTWVOTU1jzo2NoE7NjZwOzc3YDw4OFE9ODhEPTk5Oz45OTM+OTktPjk5KD45OSU+OTkiPjk5ID45OR4+OTkdPjk5HD05ORw9OTkcPTg4HDw4OBw8ODgcPDc3HTs3Nx47NjYgOjY2ITk1NSM5NTUkODQ0JjgzMyg3MzMsNjIyMTUxMTY0MDA7My8vQjIuLkowLS1WLywsYi4qKnIsKSmFKygomionJ60qJye8KicnyionJ9QqJyfaOTU1lzk1NZU5NTWROjU1iTo2NoA6NjZ1Ozc3Zzw3N1g8ODhKPTg4Pz05OTc+OTkwPjk5Kz45OSc+OTkkPjk5IT45OR8+OTkdPTk5HD05ORw9ODgcPTg4Gzw4OBs8NzccOzc3HDs3Nx06NjYeOjY2Hzk1NSE5NDQjODQ0JDczMyc2MjIrNjIyLzUxMTM0MDA5My8vPzEuLkgwLS1TLysrYS0qKnIsKSmIKygonionJ6wqJye3KicnwConJ8sqJyfSOTU1lTk1NZE6NTWKOjU2gzo2Nn46NjZ6OzY2czs3N2Q8NzdVPDg4SD04OD49OTk2PTk5MD45OSs+OTkoPjk5JT05OSI9OTkgPTk5Hz04OB49ODgePDg4HTw4OB08NzceOzc3Hjs2Nh86NjYgOjU1ITk1NSM4NDQlODQ0JzczMyk2MjItNTExMTQxMTYzMDA8Mi8vQzEtLkwwLCxYLisrZy0qKnsrKCiUKicnrConJ7kqJye9KicnvSonJ8IqJyfJOTU1kDk1NYo6NTWFOjY2gTo2NoE6NjaCOjY2fzo2NnQ7NzdkPDc3VTw4OEk9ODg/PTg4Nz05OTI9OTktPTk5Kj05OSc9ODklPTg4Iz04OCM8ODgiPDg4ITw3NyE7NzchOzc3Ijo2NiM6NjYkOTU1JTk1NSc4NDQpNzMzKzczMy42MjIyNTExNjQwMDwzLy9CMi4uSzEtLVUvLCxjLiordSwpKYsrKCieKycnrionJ7oqJyfBKicnwSonJ8EqJyfBOjU1iDo1NYY6NTWFOjU1hDo1NYU6NTWFOjU1hTo2Nn86NjZzOzc3ZTw3N1c8ODhLPDg4Qj04ODo9ODg1PTg4MT04OC09ODgrPDg4Kjw4OCg8ODgnPDc3Jzs3NyY7NzcnOzY2Jzo2Nig6NTUpOTU1Kzg0NCw4NDQvNzMzMTYyMjQ2MjI4NTExPjQwMEQzLy9MMS4uVjAsLGMvKyt0LSoqiCwpKZkrKCiiKygoqConJ7AqJye7KicnwionJ8MqJyfCOjU1hjo1NYY6NTWGOjU1hjo1NYY6NTWGOjU1hjo1NoM6NjZ8OjY2dDs2Nmk7NzdcPDc3Tzw4OEY8ODg/PDg4Ojw4ODY8ODgzPDg4MTw3NzA8NzcuOzc3Ljs3Ny07NjYtOjY2Ljo1NS85NTUwOTQ0MTg0NDQ3MzM3NzMzOjYyMj01MTFBNDAwSDMvL08yLi5ZMS0tZi8sLHUuKiqGLSkplywpKaAsKCijKygopCsoKKgqJyewKicnuyonJ8IqJyfEOjU1hjo1NYY6NTWGOjU1hjo1NYY6NTWGOjU1hjo1NoM6NjZ/OjY2fTo2Nng6NjZuOzY2YTs3N1Y7NzdNPDc3Rjw3N0E8Nzc9Ozc3Ozs3Nzg7Nzc3OzY2Njo2NjU6NjY1OjU1Njk1NTc5NDU4ODQ0OjczMz03MzNANjIyQzUxMUc0MTFNMzAwVTIvL18xLS1rMCwseS8rK4UuKiqQLCkpnSwpKaMsKSmjLCgooysoKKQrKCioKicnsConJ7sqJyfCOjU1hjo1NYY6NTWGOjU1hjo1NYY6NTWGOjU1hTo1NoI6NTaAOjU1gDo1NYA6NTV8OjY2czo2Nmk7NjZgOzY2Vzs2NlA7NjZKOzY2Rzs2NkQ6NjZCOjY2QDo1NT85NTU/OTU1QDk0NEE4NDRCNzMzRTczM0g2MjJMNTExUDUxMVY0MDBeMi8vaDEuLnMwLS1/LywsiC8rK40uKiuSLSkpmywpKaIsKSmjLCkpoywoKKMrKCikKygoqConJ7AqJye5OjU1hjo1NYY6NTWGOjU1hjo1NYY6NTWGOjU1hDo1NoE6NTWBOjU1gjk1NYM5NTWCOTU1fjk1NXs6NTV0OjU1bTo1NmU6NjZdOjY2WDo1NVQ6NTVROTU1Tjk1NU05NDRNODQ0TTg0NE83MzNRNzMzVDYyMlg1MTFdNDEwYzMwMGsyLy90MS4ufjAtLYcwLCyMLysrji8rK48uKyuQLioqliwpKZ8sKSmjLCkpoywpKaMsKCijKygopCsoKKgrJyesOjU1hjo1NYY6NTWGOjU1hjo1NYY6NTWFOjU1gjo1NYE6NTWCOTU1gzk1NYQ5NTWFOTU1hDk1NYM5NTWBOTU0gDk0NXo5NTVzOTQ1bjk0NGo4NDRlODQ0Yjg0NGE4MzNgNzMzYTczM2I2MjJlNjIyaDUxMW00MDB0My8vfDIvL4QxLi6KMS0tjjAsLJAwLCyQLywskC8rK5AvKyuQLisrky0qKpwsKSmiLCkppCwpKaQsKSmjLCgooysoKKQrKCimOjU1hjo1NYY6NTWGOjU1hjo1NYY6NTWEOjU1gjo1NYI5NTWDOTU1hDk1NYU5NTWGOTU1hzk0NIg4NDSIODQ0iDg0NIM4NDSAODQ0gDgzM343MzN6NzMzdjczM3Q3MzN1NjIyeTYyMns1MTF6NTExfDQwMIIzLy+JMi4ukDIuLpQxLS2UMS0tlDAsLZIwLCyRLywskC8rK5AvKyuQLysrkS4qKpcsKSmgLCkpoywpKaQsKSmkLCkpoywoKKMrKCijOjU1hjo1NYY6NTWGOjU1hjo1NYU6NTWDOjU1gjk1NYM5NTWEOTU1hTk1NYU5NTWGOTQ1iDg0NIo4NDSMODQ0ijg0NIY4MzSGNzMziDczM4U3MzOBNzMzfjczM3w2MjJ/NTExiTUxMYs1MTGFNDAwhDMwMIkzLy+QMi4ulzEuLpkxLS2WMS0tlTAtLZMwLCySLywskS8rK5AvKyuPLysrkC4rK5UtKSmfLCkpoywpKaQsKSmkLCkpoywpKaMsKCii";var xl="LysrOS4rKzsuKio9LSoqPiwpKUArKChEKicnRyonJ0gqJydHKygoRSwoKEIsKSlALCgpQyonJ0wqJydRKicnUisnJ0wrKChEKicnRionJ0cqJydIKicnSi0qKkkyLi5KMzAwSTAsLEkvKytJLCkpRSsoJ0YqJydIKicnTConJ1EqJydSKicnUSonJ04rKChIKygoRiwpKEUtKilCLioqPi0qKUArKChFKicnRysoKEUrKChCLCgoQSsoKEAqJydAMCwsNy8rKzkuKys7LSoqPS0qKj8sKSlBKygoRSonJ0cqJydIKicnRysoKEQsKClBLCgoQisnJ0kqJydPKicnUConJ0krKChBKicnQConJ0EqJydCKicnRCwpKUUxLi5JMy8vSC4rK0YsKSlEKygoQSonJ0ArKChBKygnRionJ00qJydPKicnTyonJ0wrKChILCkoRSwpKUMtKipALSoqQCwoKEQrJydGKygnRSsoKEMsKChBKygoQCsoKEArKCg/MC0tNTAsLDcvKys5LisrOy0qKj0tKik/LCkpQSsoKEUqJydHKicnSCsnJ0YrKChEKygoQisnJ0UqJydIKicnRyonJ0EqJyc8KicnOyonJzsqJyc8KicnPiwoKEIvLCxHMS0tRi0pKUMqJydAKicnPSonJzsqJyc6KicnPionJ0UqJydFKicnRyonJ0crKChFLCkpQi0qKkAtKilALCgoRCsoJ0YrKChFKygoQywoKEErKChAKygoQCsoKD8sKSk9MC0tNTAtLTUwLCw3LysrOS4rKzstKio9LSopPywpKUErKChFKicnRyonJ0YrKChDKygoQConJ0AqJydAKicnPSonJzkqJyc3KicnNionJzYqJyc3KicnOionJz4sKChCLCkpQisnJ0AqJyc9KicnOSonJzYqJyc1KicnNyonJzkqJyc6KicnPSonJz8rKChALCkpPy0qKUAsKChEKygnRisoKEUrKChDLCgoQSsoKEArKChAKygoPywpKTwtKio7MS0tNTAtLTUwLS01MCwsNy8rKzkuKys7LSoqPS0qKT8sKSlBKygoQysoKEEsKCg8KygoOisoKDkrJyc4KicnNionJzQqJyczKycoMSsnJzEqJyczKicnNionJzkqJyc9KicnPyonJz0qJyc4KicnNSonJzMqJycyKicnMionJzMqJyc0KicnNionJzkqJyc8KygoPSsoKEArJydEKygnRCsoKEMsKChBKygoQCsoKEArKCg/LCkpPC0qKjsuKio6MS0tNTEtLTUxLS01MC0tNTAsLDcvKys5LisrOy0qKj0tKSk9LCkpOy0qKjctKio0LSkpMiwpKTEsKSkxLCkpLywpKS4sKSktLCkpLSwoKC0rKCgvKycnMionJzUqJyc4KicnOionJzcqJyc0KicnMSonJzAqJycvKicnLyonJzAqJycxKicnMionJzQqJyc4KicnOionJzwqJyc+KygoQCsoKEErKChAKygoQCsoKD8sKSk8LSoqOy4qKjouKio6MS0tNDEtLTQxLS00MS0tNTAtLTUwLCw3LysrOS4rKzstKio6LioqNS8rKy8vKystLisrLS4qKiwuKioqLisrKS4rKyguKiooLSoqKS0pKSosKSksLCgoLisoKC8qJyczKicnNConJzIqJycwKicnLyonJy4qJyctKicnLSonJy0qJyctKicnLyonJzAqJyczKicnNionJzYrKCg4KygoPSsoKEArKChAKygoPywpKTwtKio7LSoqOi4rKzkwLCw3Mi4uMTIuLjIxLi4zMS0tNDEtLTUwLS01MCwsNy4rKzguKys1LywsLjAtLSowLS0pLywsKS8rKygwLCwlMCwsJC8sLCQvKyslLisrJi4qKictKiopLCkpKiwpKSwrKCguKicnLyonJy8qJycuKicnLSonJywqJycrKicnKyonJysqJycrKicnLConJy0qJycvKicnMSsoKDEsKSkyKygoOCsnJz0rKCg+LCkpPC0qKjstKio7LSoqOTAtLTU0MDAvMy8vMDMvLzAyLi4xMS4uMzEtLTQwLS00MCwsNS8rKzUvLCwwMS0tKTIuLiYxLS0mMC0tJjAtLSUxLi4iMS4uITAtLSIwLCwiLywsIy8rKyUuKysmLioqJy0qKiksKSkrKicnLSonJy0qJycsKicnKyonJyoqJycqKicnKSonJykqJycpKicnKSonJysqJyctKicnLionJy8rKCgvKicnMyonJzkrKCg8LCkpOywpKTssKSk6MCwsNTUxMS44NDQqMy8vMDMvLzAzLy8wMi4uMTEuLjIxLS0zMCwsNDAsLDExLi4pMy8vJDIvLyMyLi4kMS4uIzIuLiAzLy8eMi8vHjIuLh8xLS0gMS0tITAsLCIwLCwjLywsJC4rKyUtKionKygoKionJysqJycqKicnKSonJykrKCgnKygoJysoKCcrKCgnKygoJysoKCgqJycrKicnLSonJy0qJycuKicnMSonJzcrJyc7KygoOywpKTovLCw1NDAxLjg0NCo5NTUoMy8vMDMvLzAzLy8wMy8vMDIuLjExLi4yMS0tMTEuLiwzLy8kNDAwITMvLyIyLi4iMi4vITMvMB00MDAbMzAwHDMvLx0yLy4eMi4uHjIuLh8yLi4fMS4tIDAtLSIvKyskLCkpJysnJykrKCgoKygoJywoKCYsKSklLCkpJSwpKSUsKSklLCkpJSwoKCcqJycrKicnLConJywqJycsKicnLyonJzUqJyc6KygoOi8rKzU0MDAuODQ0Kjk1NSg5NTUoMy8vMDMvLzAzLy8wMy8vMDMvLzAyLi4wMi4uLjMwMCY0MTEgNDAwHzMvLyAzLy8hMy8vIDQwMBs1MTEaNDAwGjQwMBwzLy8cMy8vHDMvLxwzLy8cMy8vHTIvLx4xLS0gLSoqIywpKSUsKSklLCkpJCwpKSQsKSkkLCkpJC0pKSQtKiolLioqKi4qKi4sKSkwKicnLSonJysqJycrKicnLConJzErKCg3LysrNTQwMC44NDQqOTU1KDk1NSg5NTUoMy8vMDMvLzAzLy8wMy8vMDMvLzAzLy8wMy8vLDQwMCM1MTEeNTExHjQwMB8zMDAgNDAwHjUxMRo1MTIYNTExGTUxMRo0MDAaNDAwGzQwMBs0MDAbNDAwGzQwMBsyLi4dLisrIS0pKiMtKSkjLSkpIy0pKSMtKiojLSoqIi0qKiIuKysnMCwsMzEtLTwvLCs7KygoMSonJysqJycrKicnKysoKC4vKysxNDAwLjg0NCo5NTUoOTU1KDk1NSg5NTUoMy8vMDMvLzAzLy8wMy8vMDMvLzAzLy8uMzAwKTQwMCE1MTEeNTExHjQwMB40MDAfNDAwHTUxMRo2MjIYNjIyGDYyMhk1MTEZNDAxGjQwMBo0MDAaNDAwGjQwMBoyLy8cLysrIS0qKiMtKSojLSoqIy0qKiIuKiohLisrIC8rKyAvLCwiMC0tLDEuLjowLSw+LCkpMionJysqJycqKicnKiwpKSsxLi4rNzMzKjk1NSg5NTUoOTU1KDk1NSg5NTUoMy8vMDMvLzAzLy8wMy8vMDMvLy8zLy8sNDAwJTUxMR81MTEeNTExHjUxMR41MTEeNTExHDYyMhk3MjMXNzMzFzYyMhc2MjIYNTExGTUxMRk1MTEZNDAxGjQwMBoyLy8cLywsIC4qKiItKioiLiorIS8rKyAvLCwfLywsHi8sLB4wLCwfMCwsIjEtLSswLCw0LCkpLyonJysqJycqKicnKisoKCovLCwqNjIyKTk1NSg5NTUoOTU1KDk1NSg5NTUoMy8vMDMvLzAzLy8wMy8vMDMvLy4zMDApNDAwIjUxMR41MTEeNTExHjUxMR41MTEdNjIyGTczMxc3MzMXNzMzFzczMxc3MzMXNjMzFzYyMhc2MjIYNTExGTUxMRkzMDAbMS0tHi8sLB8vLCwfLywsHzAsLB4wLCweMCwsHjAsLB4wLCweMCwsHjAsLCEvKysnLCgoKionJyoqJycqKicnKionJyotKioqNDAwKTg0NCg5NTUoOTU1KDk1NSg5NTUoMy8vMDMvLzAzLy8wMy8vLzMvLyw0MDAlNTExHzUxMR41MTEeNTExHjUxMR41MTEcNjMyGDczMxc3MzMWNzMzFjczMxY3MzMWNzMzFjczMxY3MzMXNzMzFzYyMhc1MTEYMy8vGzEtLR0wLCweMCwsHjAsLB4wLCweMCwsHjAsLB4wLCweMCwsHjAsLB8vKyshLCkpJionJykqJycqKicnKionJyorKCgqMCwsKTYyMig5NTUoOTU1KDk1NSg5NTUoMy8vMDMvLzAzLy8wMy8vLzMvLys0MDAjNTExHjUxMR41MTEeNTExHjUxMR02MjIbNzMzGDczMxY3MzMWNzMzFjczMxY3MzMWNzMzFjczMxY3MzMWNzMzFjg0NBU3MzMVNTIyFzMvLxsxLS0dMC0tHjAsLB4wLCweMCwsHjAsLB4wLCweMCwsHjAsLB4vLCwfLioqIysoKCgqJycqKicnKionJyoqJycqLioqKjUxMSk5NTUoOTU1KDk1NSg5NTUoMy8vMDMvLy8zLy8vMy8vLjQwMCk1MTEhNTExHjUxMR41MTEeNTExHTYyMhs3MzMYNzMzFzczMxY3MzMWNzMzFjczMxY3MzMWNzMzFjczMxY4NDQVOTU1FDo1NhI6NTUSODQ0FDYyMhczLy8aMi4uHDEtLR0wLS0eMCwtHjAsLR4wLC0eMCwtHjAsLR4wLCweLysrISwpKSYqJycpKicnKionJyoqJycqLSoqKjQwMCk4NDQoOTU1KDk1NSg5NTUoNDAwLTUxMSo1MTEoNjIyJjYyMiA3MzMcNzMzGzczMxs3MzMbODQ0GTk1NRY5NTUVOTQ0FTg0NBU4NDQVODQ0FTg0NBU4NDQVODQ0FDk1NRQ6NjYSOjY2ETs3NxA6NjYROTU1EzgzNBQ2MjIWNTExGDMvLxsyLi4cMS4uHDEtLR0xLS0dMS0tHTEtLR0xLS0eMS0tHi8sLCEtKiolLCkpJywpKScsKSknLSoqJzEtLSY2MjImNzMzJjg0NCY5NDUnNzMzJDk1NR06NjYZOzY2GDs2NhY7NjYVOzc3FDs3NxQ7NzcUOzc3FDw4NxM8NzcSOzc3Ejs3NxI7NjYSOjY2Ezo2NhI7NzcROzc3ETs3NxE7NzcQOzc3EDs3NxA6NjYQOTU1Ejg0NBM4NDQUNzMzFTYyMhY1MTEXNDExGDMwMBoyLy8bMy8vGzMvLxszLy8cMi8vHTIuLh4xLS0gMC0tITAtLSEwLS0hMC0tITEuLiEzLzAgNDAwIDUxMSI3MzMkOzc3Fzw4OBQ9ODgSPTg4Ej04OBI9ODgRPTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPTg4ET04OBA8ODgQPDc3EDw4OBA8ODgQPDg4Dzw3NxA8NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU2MjIVNjIyFjUxMRg0MDAZNDAwGjQwMBszMDAcMy8vHDMvLx0yLy8eMi4vHjIuLx4yLi8eMi4vHjIvLx4zLy8eMy8vHjMvLx80MDAgPTg4Ej04OBE9ODgRPTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPTg4ET04OBA9ODgQPTg4Dzw4OA88ODgPPDg4Dzw3Nw88NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU3MzMVNjIyFjUxMRg1MTEZNDAwGjQwMBszMDAbMy8vHDMvLx0zLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4zLy8ePTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPTg4ET04OBA9ODgQPTg4Dzw4OA88ODgPPDg4Dzw3Nw88NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU3MzMVNjIyFjUxMRg1MTEZNDAwGjQwMBszMDAbMy8vHDMvLx0zLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4yLy8ePTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPTg4ET04OBA9ODgQPTg4Dzw4OA88ODgPPDg4Dzw3Nw88NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU3MzMVNjIyFjUxMRg1MTEZNDAwGjQwMBszMDAcMy8vHDMvLx0zLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4yLy8ePTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPTg4ETw4OBI8NzcTPDg4Ej04OBA9ODgQPTg4EDw4OA88ODgPPDg4Dzw3Nw88NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU3MzMVNjIyFjUxMRg1MTEZNDAwGjQwMBszMDAcMy8vHTMvLx0zLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4yLy8ePTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPDg4Ejo2NhU5NTUXOzc3Ez04OBE9ODgQPTg4EDw4OA88ODgPPDg4Dzw3Nw88NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU3MzMVNjIyFjUxMRg1MTEZNDAwGjQwMBszMC8cMy8vHTMvLx4zLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4yLy8ePTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPTg4ET04OBE8ODgSOjY2FTczMxo3MzIaOzY2FD04OBE9ODgQPTg4EDw4OA88ODgPPDg4Dzw3Nw88NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU3MzMVNjIyFjUxMRg1MTEZNDAwGjQwMBszLy8cMy8vHjMvLx4zLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4yLy8ePTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPTg4ET04OBE7NzcUNzMzGTUxMB02MjIbOzY2FD04OBE9ODgRPTg4EDw4OBA8ODgPPDg4Dzw3Nw88NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU3MzMVNjIyFjUxMRg1MTEZNDAwGzMwMBwzLy8dMy8vHjMvLx4zLy8eMy8vHjIvLx4yLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4yLy8ePTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPTg4ETw4OBI5NTUWNTExHDQwMB42MjIbOzY2FD04OBE9ODgRPTg4ED04OBA8ODgPPDg4Dzw3Nw88NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU3MzMVNjIyFjUxMRg1MTEZNDAwGzMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjIvLx4yLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4yLy8ePTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPTg4ETs3NxQ3MzMaNDAwHTQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBA8ODgQPDg4Dzw3Nw88NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU3MzMVNjIyFjUxMRg0MDAaNDAwGzMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4yLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4yLy8ePTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPDg4Ejk1NRY1MTEcNDAwHjQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBA8ODgQPDg4Dzw3Nw88NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU3MzMVNjIyFjUxMRg0MDAbMzAwHDMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4yLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4yLy8ePTg4ET04OBE9ODgRPTg4ET04OBE9ODgROzc3FDczMxo0MDAdMzAvHjQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBA8ODgQPDg4Dzw3Nw88NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU3MzMVNjIyFjUxMRg0MDAbMzAvHDMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4yLy8ePTg4ET04OBE9ODgRPTg4ET04OBE8ODgSOTU1FjUxMRw0MDAeMzAvHjQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBA8ODgQPDg4Dzw4Nw88NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU3MzMVNjIyFzUxMRk0MDAbMzAvHDMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4yLy8ePTg4ET04OBE9ODgRPTg4ET04OBE7NzcUNzMzGjQwMB0zMC8eMzAvHjQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBE9ODgQPDg4Dzw4Nw88NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU3MjMVNjIyFzQwMBo0MDAcMzAvHDMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjIvLx4yLy8eMi8vHjIvLx4yLy8ePTg4ET04OBE9ODgRPTg4ETw4OBI5NTUWNTExHDQwMB4zMC8eMzAvHzQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBE9ODgQPDg4EDw4Nw88NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU3MjMVNjIyFzQwMBszMC8cMzAvHDMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjIvLx4yLy8eMi8vHjIvLx4yLy8ePTg4ET04OBE9ODgRPTg4ETs3NxQ3MzMaNDAwHTMwLx4zMC8fMzAvHzQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBE9ODgQPDg4EDw4Nw88NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU3MjMVNjIyFzQwMBszMC8cMzAvHDMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4yLy8eMi8vHjIvLx4yLy8ePTg4ET04OBE9ODgRPDg4Ejk1NRY1MTEcNDAwHjMwLx4zMC8fMzAvHzQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBE9ODgQPDg4EDw4OBA8NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU3MjMVNjEyFzQwMBszMC8cMzAvHDMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4yLy8eMi8vHjIvLx4yLy8ePTg4ET04OBE9ODgROzc3FDczMxo0MDAdMzAvHjMwLx8zMC8fMzAvHzQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBE9ODgRPTg4EDw4OBA8NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU2MjIVNTExGDQwMBszMC8cMzAvHDMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMi8vHjIvLx4yLy8ePTg4ET04OBE8ODgSOTU1FjUxMRw0MDAeMzAvHjMwLx8zMC8fMzAvHzQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBE9ODgRPTg4EDw4OBA8NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU2MjIWNTExGTQwMBwzMC8cMzAvHDMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMi8vHjIvLx4yLy8ePTg4ET04OBE7NzcUNzMzGjQwMB0zMC8eMzAvHzMwLx8zMC8fMzAvHzQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBE9ODgRPTg4EDw4OBA8NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU2MjIWNDAwGjMwMBwzMC8cMzAvHDMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjIvLx4yLy8ePTg4ETw4OBI5NTUWNTExHDQwMB4zMC8eMzAvHzMwLx8zMC8fMzAvHzQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBE9ODgRPTg4EDw4OBA8NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU2MjIWNDAwGjMwLxwzMC8cMzAvHDMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjIvLx4yLy8ePTg4ETs3NxQ3MzMaNDAwHTMwLx4zMC8fMzAvHzMwLx8zMC8fMzAvHzQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBE9ODgRPTg4EDw4OBA8NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU2MjIWNDAwGjMwLxwzMC8cMzAvHDMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4yLy8ePDg4Ejk1NRY1MTEcNDAwHjMwLx4zMC8fMzAvHzMwLx8zMC8fMzAvHzQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBE9ODgRPTg4EDw4OBA8NzcQOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU2MjIXNDAwGzMwLxwzMC8cMzAvHDMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4yLy8eOzY2FDczMxo0MDAdMzAvHjMwLx8zMC8fMzAvHzMwLx8zMC8fMzAvHzQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBE9ODgRPTg4ETw4OBA8NzcQOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDYyMhY1MTEZNDAwGzMwLxwzMC8cMzAvHDMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eOTQ0FzUxMRw0MDAeMzAvHjMwLx8zMC8fMzAvHzMwLx8zMC8fMzAvHzQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBE9ODgRPTg4ETw4OBA8NzcQOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUNzMzFDYyMhY0MDAaMzAwHDMwLxwzMC8cMzAvHDMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eNTExHDQwMB4zMC8eMzAvHzMwLx8zMC8fMzAvHzMwLx8zMC8fMzAvHzQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBE9ODgRPTg4ETw4OBA8NzcQOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUNzMzFDYyMhc0MDAaMzAvHDMwLxwzMC8cMzAvHDMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eNDAwHjMwLx4zMC8eMzAvHzMwLx8zMC8fMzAvHzMwLx8zMC8fMzAvHzQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBE9ODgRPTg4ETw4OBA8NzcQOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUNzMzFDYyMhc0MDAaMzAvHDMwLxwzMC8cMzAvHDMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8e";var Ml="tbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU765uS2+ubklt7GxP7axsTS2sbE0trGxNLaxsTS2sbE0trGxNLaxsTS8trYbvLa2G7GsrECxrKxAsaysQLGsrECxrKxAsaysQLGsrECtqalHrampR62pqUeqpaVAqqWlQKqlpUCqpaVAqqWlQKqlpUCqpaVAw7++M8O/vjPDv74zw7++M766uUG+urlBvrq5Qb66uUG+urlBvrq5Qb66uUG5tLRNubS0Tbu2tjm6tbU9sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbWysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO+ubktvrm5JbexsT+2sbE0trGxNLaxsTS2sbE0trGxNLaxsTS2sbE0vLa2G7y2thuxrKxAsaysQLGsrECxrKxAsaysQLGsrECxrKxArampR62pqUetqalHqqWlQKqlpUCqpaVAqqWlQKqlpUCqpaVAqqWlQMO/vjPDv74zw7++M8O/vjO+urlBvrq5Qb66uUG+urlBvrq5Qb66uUG+urlBubS0Tbm0tE27trY5urW1PbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXW1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTvrm5Lb65uSW3sbE/trGxNLaxsTS2sbE0trGxNLaxsTS2sbE0vLa2G7y2thu8trYbsaysQLGsrECxrKxAsaysQLGsrECxrKxAsaysQK2pqUetqalHrampR6qlpUCqpaVAqqWlQKqlpUCqpaVAqqWlQKSfn1Gkn59Rw7++M8O/vjPDv74zvrq5Qb66uUG+urlBvrq5Qb66uUG+urlBvrq5Qbm0tE25tLRNu7a2Obq1tT2xrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11tbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU765uS2+ubklt7GxP7axsTS2sbE0trGxNLaxsTS2sbE0trGxNLy2thu8trYbvLa2G7GsrECxrKxAsaysQLGsrECxrKxAsaysQLGsrECtqalHrampR62pqUeqpaVAqqWlQKqlpUCqpaVAqqWlQKqlpUCkn59RpJ+fUcO/vjPDv74zw7++M8O/vjO+urlBvrq5Qb66uUG+urlBvrq5Qb66uUG5tLRNubS0Tbu2tjm6tbU9sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbWysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO+ubktvrm5JbexsT+2sbE0trGxNLaxsTS2sbE0trGxNLaxsTS8trYbvLa2G7y2thuxrKxAsaysQLGsrECxrKxAsaysQLGsrECxrKxArampR62pqUetqalHqqWlQKqlpUCqpaVAqqWlQKqlpUCqpaVApJ+fUaSfn1HDv74zw7++M8O/vjPDv74zvrq5Qb66uUG+urlBvrq5Qb66uUG+urlBubS0Tbm0tE27trY5urW1PbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXW1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTvrm5Lb65uSW3sbE/trGxNLaxsTS2sbE0trGxNLaxsTS2sbE0vLa2G7y2thu8trYbsaysQLGsrECxrKxAsaysQLGsrECxrKxAsaysQK2pqUetqalHrampR6qlpUCqpaVAqqWlQKqlpUCqpaVAqqWlQKSfn1Gkn59Rw7++M8O/vjPDv74zw7++M766uUG+urlBvrq5Qb66uUG+urlBvrq5Qbm0tE25tLRNu7a2Obq1tT2xrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11tbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU765uS2+ubklt7GxP7axsTS2sbE0trGxNLaxsTS2sbE0trGxNLy2thu8trYbvLa2G7GsrECxrKxAsaysQLGsrECxrKxAsaysQLGsrECtqalHrampR62pqUeqpaVAqqWlQKqlpUCqpaVAqqWlQKqlpUCkn59RpJ+fUcO/vjPDv74zw7++M8O/vjO+urlBvrq5Qb66uUG+urlBvrq5Qb66uUG5tLRNubS0Tbu2tjm6tbU9sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbWysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO+ubktvrm5JbexsT+2sbE0trGxNLaxsTS2sbE0trGxNLy2thu8trYbvLa2G7y2thuxrKxAsaysQLGsrECxrKxAsaysQLGsrECxrKxArampR62pqUetqalHqqWlQKqlpUCqpaVAqqWlQKqlpUCqpaVApJ+fUaSfn1HDv74zw7++M8O/vjPDv74zw7++M766uUG+urlBvrq5Qb66uUG+urlBubS0Tbm0tE27trY5urW1PbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXW1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTvrm5Lb65uSW3sbE/trGxNLaxsTS2sbE0trGxNLaxsTS8trYbvLa2G7y2thu8trYbsaysQLGsrECxrKxAsaysQLGsrECxrKxAsaysQK2pqUetqalHrampR6qlpUCqpaVAqqWlQKqlpUCqpaVApJ+fUaSfn1Gkn59Rvbm5KMO/vjPDv74zw7++M8O/vjO+urlBvrq5Qb66uUG+urlBvrq5Qbm0tE25tLRNu7a2Obq1tT2xrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11tbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU765uS2+ubklt7GxP7axsTS2sbE0trGxNLaxsTS2sbE0vLa2G7y2thu8trYbvLa2G7GsrECxrKxAsaysQLGsrECxrKxAsaysQLGsrECtqalHrampR62pqUeqpaVAqqWlQKqlpUCqpaVAqqWlQKSfn1Gkn59RpJ+fUb25uSjDv74zw7++M8O/vjPDv74zvrq5Qb66uUG+urlBvrq5Qb66uUG5tLRNubS0Tbu2tjm6tbU9sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbWysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO+ubktvrm5JbexsT+2sbE0trGxNLaxsTS2sbE0trGxNLy2thu8trYbvLa2G7y2thuxrKxAsaysQLGsrECxrKxAsaysQLGsrECxrKxArampR62pqUetqalHqqWlQKqlpUCqpaVAqqWlQKqlpUCkn59RpJ+fUaSfn1G9ubkow7++M8O/vjPDv74zw7++M766uUG+urlBvrq5Qb66uUG+urlBubS0Tbm0tE27trY5urW1PbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXW1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTvrm5Lb65uSW3sbE/trGxNLaxsTS2sbE0trGxNMG7uxa8trYbvLa2G7y2thu8trYbsaysQLGsrECxrKxAsaysQLGsrECxrKxAsaysQK2pqUetqalHrampR6qlpUCqpaVAqqWlQKqlpUCqpaVApJ+fUaSfn1Gkn59Rvbm5KMO/vjPDv74zw7++M8O/vjPDv74zvrq5Qb66uUG+urlBvrq5Qbm0tE25tLRNu7a2Obq1tT2xrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11tbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU765uS2+ubklt7GxP7axsTS2sbE0trGxNLaxsTTBu7sWvLa2G7y2thu8trYbvLa2G7GsrECxrKxAsaysQLGsrECxrKxAsaysQLGsrECtqalHrampR62pqUeqpaVAqqWlQKqlpUCqpaVAqqWlQKSfn1Gkn59RpJ+fUb25uSi9ubkow7++M8O/vjPDv74zw7++M766uUG+urlBvrq5Qb66uUG5tLRNubS0Tbu2tjm6tbU9sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbWysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO+ubktvrm5JbexsT+2sbE0trGxNLaxsTS2sbE0wbu7Fry2thu8trYbvLa2G7y2thuxrKxAsaysQLGsrECxrKxAsaysQLGsrECxrKxArampR62pqUetqalHqqWlQKqlpUCqpaVAqqWlQKqlpUCkn59RpJ+fUaSfn1G9ubkovbm5KMO/vjPDv74zw7++M8O/vjO+urlBvrq5Qb66uUG+urlBubS0Tbm0tE27trY5urW1PbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXW1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTvrm5Lb65uSW3sbE/trGxNLaxsTS2sbE0trGxNMG7uxa8trYbvLa2G7y2thu8trYbsaysQLGsrECxrKxAsaysQLGsrECxrKxAsaysQK2pqUetqalHrampR6qlpUCqpaVAqqWlQKqlpUCkn59RpJ+fUaSfn1Gkn59Rvbm5KL25uSjDv74zw7++M8O/vjPDv74zvrm5Lb66uUG+urlBvrq5Qbm0tE25tLRNu7a2Obq1tT2xrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11tbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU765uS2+ubklt7GxP7axsTS2sbE0trGxNMK9vRbBu7sWvLa2G7y2thu8trYbvLa2G765uBaxrKxAsaysQLGsrECxrKxAsaysQLGsrECtqalHrampR62pqUeqpaVAqqWlQKqlpUCqpaVApJ+fUaSfn1Gkn59RpJ+fUb25uSi9ubkov7u6KMO/vjPDv74zw7++M765uS2+urlBvrq5Qb66uUG5tLRNubS0Tbu2tjm6tbU9sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbWysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO+ubktvrm5JbexsT+2sbE0trGxNLaxsTTCvb0Wwbu7Fry2thu8trYbvLa2G8G8uxO+ubgWsaysQLGsrECxrKxAsaysQLGsrECxrKxArampR62pqUetqalHqqWlQKqlpUCqpaVAqqWlQKSfn1Gkn59RpJ+fUaSfn1G9ubkovbm5KL+7uijDv74zw7++M8O/vjO+ubktvrq5Qb66uUG+urlBubS0Tbm0tE27trY5urW1PbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXW1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTvrm5Lb65uSW3sbE/trGxNLaxsTTDvb0Zwr29FsG7uxa8trYbvLa2G7y2thvBvLsTvrm4FrGsrECxrKxAsaysQLGsrECxrKxAsaysQK2pqUetqalHrampR6qlpUCqpaVAqqWlQKqlpUCkn59RpJ+fUaSfn1Gkn59Rvbm5KL25uSi/u7oow7++M8O/vjPDv74zvrm5Lbu2tiq+urlBvrq5Qbm0tE25tLRNu7a2Obq1tT2xrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11tbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTubW0RLy3tzW9uLgwvLa2M7y3tjG2sbE0w729GcK9vRbBu7sWvLa2G7y2thvDvb0Swby7E765uBa+ubgWsaysQLGsrECxrKxAsaysQLGsrECtqalHrampR62pqUeqpaVAqqWlQKqlpUCqpaVApJ+fUaSfn1Gkn59RpJ+fUb25uSi9ubkov7u6KL65uSbDv74zw7++M765uS27trYqtrGxLLSvrz2yra1BubS0TbOvrz+2sbFJtLCwXrGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tda2qqrKtqqqytbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO+ubktvrm5Mb64uDK+ubkuwLu6KMK8vCHCvb0bwby8GsC7uhq8trYbw729EsG8uxO+ubgWvrm4FrGsrECwq6tAsaysQLGsrEC2srIttrKyLa2pqUesp6dDq6emQKqlpUCqpaVAs6+vL7GsrDWkn59RpJ+fUaSfn1G9ubkovbm5KL+7uii+ubkmu7a2KLy3ty26tbUstrGxLbKtrTKvqqo5ramoPqyop0CuqalAqKSkQLGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWtqqqyraqqsq2qqrKtqqqytbKxU7WysVO1srFTtbKxU7WysVO1srFTwby7McG8uzG+ubg0vri4ML65uS3Au7sowry8IsG8vB/Bu7sewry8G8O9vRjCvLwXwby7F765uBbBvLwXtbCwNaumpky1sbE5trKyLbaysi2tqKgurampR6qlpUCzr68vs6+vL7+8vDixrKw1saysNbGtrTukn59Rv7q6I7y3tye7t7YnurW1Kbizsyu2srEutbCwLbKtrS+uqak1raioO62pqT+sqKhCsq2tRaikpEChnZxUoZ2cVKGdnFShnZxUoZ2cVKGdnFShnZxUoZ2cVKGdnFSinp1nraqqsq2qqrKtqqqyraqqsq2qqrK9uLhOvbi4Tr24uE69uLhOvbi4TsO+vj+/u7s/w76+P724tza9uLgzvrm5ML24uDO/uropv7q6J8C7uyTBvLwhwry8HsK8vBvCvLwbwLq6H7y3tya7trUqtbGxOby2tiq2sbErsq2tLa2oqC6wrKwws66uL7Ovry+/vLw4wLy8LrezszG4tLMwura1Krq2tie5tLQouLOzKraxsS2zr68ysa2tNbCsrDWtqak3rampPa2pqEGtqKhEqKOjR6ahoUyhnJxRoZ2dVKGdnFShnZxUoZ2cVKGdnFShnZxUoZ2cVKKenWeinp1nop6dZ62qqrKtqqqyraqqsq2qqrKtqqqyraqqsr24uE69uLhOvbi4Tr24uE6+ublJv7q6R765uUm9uLg8vbi4Nb65uDO+ubkyvrm5ML64uDG+uLgvv7m5LL+6uijBu7skwby8IcG8uyDAu7ohv7q6Ir+6uiK/ubkivLa2Kq2oqC66tbU5raioLrOvry++urojvrq6LLy4uCu6trYrubW1Kri0sym2srIrtbCwLrOvrzOyrq44sKysPq+rq0Cvq6o/rqqqQK6qqkKtqalFq6enSammplChnJxRoZycUaGdnFShnZxUoZ2cVKGdnFShnZxUoZ2cVKKenWeinp1nop6dZ6KenWetqqqyraqqsq2qqrKtqqqyraqqsq2qqrK9uLhOvbi4Tr24uE69uLhPvbi4Tr65uUm9uLhMwLy8Rr65uTi/uro0wLq6M7+5uTW9uLc5vLe3N724uDK9uLgxvrm4Lr+5uSrAurolwbu7IsK8vB/Cvb0ewr29HcG8vB7Au7oivrm5KL66uSm/urolvrq6JL25uSW8t7clubW0Jbeysii0sK8ssq6tMrGtrTmxra0+sKysQa+rq0auqqpIraqpR6ypqEOsqKhAqKOjO6unp0irp6dOqKSjR6WjonChnZxUoZ2cVKGdnFShnZxUop6dZ6KenWeinp1nop6dZ6KenWeinp1nraqqsq2qqrKtqqqyraqqsq2qqrKtqqqyraqqsr24uE69uLhOvbi4Trq2tmO8t7dXvbi4T765uUbAu7tGv7q6Ob+6uje/ubk4vbi4Ob24uDW+uLgyvbi3NL23tzS+uLgwv7q6KsC7uybCvbwjw76+IMS/vx7Ev74ew729H8G8vCHBvLwiwLu7Ib+6uiC9uLgiu7a2I7izsyW1sLArsq6uMrGtrDmxra0+sa2tP7CsrD6uqqo/rqqqQ66pqUKsqKg/rKenPKynpz6oo6M1rampT6qnp1ulo6JwpaOicKWjonCmp6aRop2dY6KenWeinp1nop6dZ6KenWeinp1nop6dZ62qqrKtqqqyraqqsq2qqrKtqqqyraqqsq2qqrKtqqqyvbi4Tr24uE66trZjura2Y8C7u0fBvLtBv7q6Q765uEO+ubk/vrm4Pb65uTm/uroyv7q6L765uTK/ubk1wLu7MsG9vC7Cvr0qw76+J8S/vyTFwL8hxMC/IcS/vyDDvr4hwr29IcG8vCDAu7ohvrm5Iry3tyS6tbQnuLOzLLWxsDWzr687sq+uO7KtrTewrKs1r6qqN66qqTytqag+q6emPaqmpj6rp6dArampQa2pqUWyraw7paOicKGdnVahnZ1WpqemkaKdnWOinp1nop6dZ6KenWeinp1nop6dZ6KenWetqqqyraqqsq2qqrKtqqqyraqqsri1tYutqqqyx8PDVcvGxj7GwMBBxsDAQcTAv0LEwMBCxL6+PMG8vEDAu7pCwLu6Qb+6ukDAuro7wry8MsO+vS3Dvr4vw7++McTAvzDFwMAtxcHAKsXBwCfGwcAkxcDAJMTAvyTEv78kw76+JMK9vSTCvb0jwby8IsC7uyG/urkivbi4Jbu2tim5tbQtt7OzMbaysTC1sLAus66uLrGsrDCvqqo1raioOqqmpT2ppKRCpKCfQ6qmpj6ppKQ/pqGhPKKenlWhnZ1WoZ2dVqanppGinZ1jop6dZ6KenWeinp1nop6dZ6KenWeinp1nxMHBYMTBwWDEwcFgxMHBYMTBwWC/vLxxw8C/YcfDw1XLxsY+x8LBPcbBwT/GwcE+xcHARMXAwDzEv788xL+/O8XAvznFwL85xcDAN8bBwTPHwsIvx8LCL8fDwy7Iw8MsyMPDK8jDwynIw8Mnx8LCJ8XBwCjEv78qw76+KsK+vSrBvbwowLy8J8C8uyfBvLwkwLu7Ir+6uiG+ubkivbe3JLu2tia6tbUoubSzKbeysim1sLAqs66uLLCrqy+tqKg2qqWlP6qlpUCppKQ9pqKiP6Sgn0Sinp5VpKCgUaGdnVakoaFyop+fcaGenWyinp1nop6dZ6KenWeinp1nop6dZ8TBwWDEwcFgxMHBYMTBwWDEwcFgxMHBYMfDw1XKxcVFysXFP8nExD3HwsE9yMPDOsfCwj3GwsI+x8LCOsjDwzXKxcQyysXFMcrFxTPKxcUyysXFMcrFxTHKxcUwysbFLsrFxS3KxcUtyMTELMfCwizFwcEsxMC/LcO+vi/Cvr0uwb28K8C7uyq/uroqv7q6KL+6uie/urokv7q6Ir65uSK+ubgivLe3JLu2tiW6tbUlubS0JLezsiS2sbEjs66tKK+qqjGsqKc3qqWlOqeioj6loKBBpaCgRaWhoUuloaFWo6CgaaGennKdm5uFop6dZ6KenWeinp1nop6dZ6KenWfEwcFgxMHBYMTBwWDEwcFgxMHBYMTBwWDKxsVEysbFRMvGxj7LxsY4zMfGN8rGxTjJxMQ8ycXFOsvGxjXMx8cyzcjIMM3IyDHMx8czy8fHNcvHxzbLx8c3zMjHNsvHxzTLxsY0ycXFNcjExDXGw8IzxsLBMMTAwDDDv78ww7+/LsK+vivAvLwqv7u6Kb65uSm9ubgrvbm5K765uSm+ubkmvrm5Ir24uCG8t7chvLe2ILu2tiC6tbUiubS0H7eysh21sK8hsaysJ62pqDGqpaU5p6OiPKaioj+moqJFop+eUqSgoFqdm5uFnZubhZ2bm4Winp1nop6dZ6KenWeinp1noqOkl8jGxk/EwcFgxMHBYM7JyTzOyck8zsnJPM7IyC/OyMgvzsnIL87JyTHOyckzzcnINM7JyTLOysoxz8rKMc7KyjPOysk1zcnJOMzJyTzMyck/zMnIPsvIyDzKx8c6ycbGO8jFxTzHxMQ7xsPDOMbCwjXEwcAzxMDAMcTAwC7EwMAswr6+KsC8vCq/uroqvbm5Lb24uC68uLgtvLi3Kb24uCS9uLgivbe3ILy3tx68t7ccu7a2Hrq1tRy5tLQat7KyGrWvrx2xrKwlrqmpK6ynpy+rpqYzqqalNqmkpDWrpqY2nZubhZ2bm4Wdm5uFpKCgX6SgoF+koKBfpKCgX6KjpJeio6SXyMbGT8zJyUfMyclHzsnJPM7JyTzPy8ozz8rJKs/KyijQy8sr0MvLLtDLyzDQzMsx0MzMMtDMzDXPzMs4zsvLPM7Ly0DNy8pEzMrJRcvJyEPKyMhAycfGP8jGxUDIxsU/yMXFPMfExDvGw8M5xcLCNsTBwTLFwcEvxcHBLsPAvy3Cvr4swLy8K766uiy9ubksvbi4Kry3tyi8uLckvLe3I7y3tiO8trYgvLa2HLu2thu6tbQbubOzGbeyshm2sbAatK+vHLOurR+xrKwisKurJq+qqSqtqKgwq6amNqKenVKinp1SpKCgX6SgoF+koKBfpKCgX6aioXaio6SXoqOkl8jGxk/IxsZPzMnJR8zJyUfOyso2z8rKL8/KyirQy8so0MzLKtDMyy/PzMs1z8zLOM7MyzvNy8s+zcvLQszLy0XMy8pIy8rKS8rJyUrJychJycjIRsnHx0TIxsZEyMbGRMfFxULGxMNBxcPDP8TCwT3EwcA5xMHBNcXCwTPEwMAyw7+/L8G9vS6+urotvbm5K725uCm9uLgmvbi4I7y3tyK7trYiurW0Irm0tCC5tLMeuLOyHreysh23srEat7KxGbaxsRq1sLAcs66uHrGsrCGvqqonraioLqmkpDmloaBFop6dUqSgoF+koKBfpKCgX6aioXamoqF2oqOkl6KjpJeio6SXyMbGT8jGxk/Mycg+zsnJNc7JyS/NyckuzcjIL8zJyTLMyMg3y8jIQMrIyEXHxsZMw8LCVcHBwVvBwcJbwcLCXcHBwV7BwsJexMTEWcbHx1XHx8dSxsbFUsPDw1TBwMBVv76+Vr69vVO+vL1Pvby8S768vEe+vLxDvru8QL67uzy9ubo5u7e3N7q1tjO7trYuvbi4J724uCO7trYit7KyJLOurimxrKwrsKysLK+rqy2uqqosr6qqJ7KtrSGzrq4fsq2tILGsrCKvqqolraioKqunpi6ppKQ2pqGhQaSfn06jn55bpKCgX6aioXamoqF2iIaHiImQkPSio6SXoqOkl7i3uG7Gw8NNycbGQMvHxzjLx8c0ysbGNcjFxTnIxcU7x8XFQMbExEnEw8RRvr6/XbW3t22ytLV1s7W2dbS2tneztbZ6tLe3ebq8vXK/wsJqwcTEaMDCwmi9v79ruru8bLe4uW61trZus7S1a7Kys2mysrNks7KyXrSysli1srNQtrOzSLays0C2srM6uLS0Mrq2tiq7trYmuLOzJrGtrSyqpqc1p6OkOaaiozqloaI8o5+gPaSgoTiqpaYtrampJ62pqSetqKgorKenKqumpi6ppaUxqKOjNqahoT+jn59MoZ2dW5+am2ymoqF2iIaHiI6LjNCJkJD0rLGxsLO0tIK9vLxmxMLCUcfExETJxsY7ysfHN8vHxzfLyMg4y8jIOcvJyTzKyMhDx8fHTcLDw1m8vb5lubu8bbm8vHC5vLxzuLu8d7i8vHm7vr93vcLBdb/Dw3S/w8Nzv8PCcb7CwnC8v79wubu8cra3uHOztLVzsrKzbrOys2a2tLVbuLW2ULu3t0S9ubk5vrm5Mb24uSy9uLgou7a2JriztCW0r7Aor6usLa2pqS+sqKgwq6enMqmlpjSppaYyraipK6+rqyawq6skr6urJa6pqSmsp6ctqqWlMqikozimoaFAop6eS5+bm1ucmJhul5OUgYiGh4iOi4zQnKGhz66xsaS6u7t/wsLCY8jGxk/KyMdDzMnJPM3KyjjOy8s10M3MNNDOzTPRzs410M7OOc7NzULLzMxLycrKUsjJyVjHyclcxsnJYMXIyGTEyMhoxMjIbMTIyG7EychwxMnJb8XKyWzGyclqxcnIaMTHxmbCxMRlwcLCYsDAwF3BwMBUw8DASsTBwUDGwcE2x8LCLsfBwSfFwMAjw76+IMG8vB6/urocvbi4HLu2thy5tLQduLOzHraysiG1sLAktK+vJLSvryK0r68hs66uIbKtrSOwq6snrqmpLaynpzSppaU6p6KiQqSfn02hnZ1bnpqabpyYmIWalpehmZWWtYmQkPS3urqXwMLBesbGxmHKyclQzcvKRc7MzD3Qzcw50c7ONdLPzzLT0NAy09DQMtLQ0DXR0NA70NDQQs/Qz0jOz89OzM7OU8vOzljKzs1dyc3MYcjNzGXIzcxpyM3Ma8jNzGzIzcxryMzMacnMzGXJy8tgycvKXMnKylfKyclRysnISsvIyELMyMc7zMfHM8zGxivLxcUlycTEIMjCwhzGwMAYxL6+F8K8vBbAuroWvrm5F723txi7trYaurW0HLizsx63srIftrCwILSvryOyra0msKuqLK2oqDKrpqY5qaSkQKeiokiloKBSo56eX6GdnHCgnJuGoJubnKCcnKi5vr2eu7++ksHEw3vHx8dly8rJVM3My0jPzc0/0c7OOdLPzzTT0NAy09HQMtPR0TPT0dE10tHROtHR0UDQ0dBGztDQTc3Pz1PLzs5Zys7NXsnNzGPIzcxnyM3MasfNzG3Hzcxvx8zMbsfMzGvIzMtoyMvLZMnLy1/Ky8tYy8vLUczLykrMyclEzMjIPczHxzbMx8cuy8bGKMrExCLJw8Mdx8HBGcS/vxjCvb0XwLu7F7+5uRe9uLgYvLe2Gbu1tRu5tLQdt7KyILawsCK0r68lsq2sKa+qqi+tqKg1q6amPKmkpEOmoqFMpKCfV6OenmSinZ10oZ2diKKenZqinp2htLq5sbq/vpjAw8KDxsfGa8rKyVfNzMxJz83NP9HOzjjSz88z09DQMNPR0THT0dEz0tHQONHQ0D7Pz89Fzs/PS8zOzlHLzs5Yyc3NXsfMzGXFysprxMnJcMPJyHPDych1w8nIdsPJyHXDyMhyw8fHb8PHx2vEx8dnx8nJX8vLylXLyspOysfHSsjExEXIw8M+yMPDNcfCwi/HwcEoxsDAI8S/vx/Cvb0cwLu7G7+5uRq+ubgYvLe3Gbu2thq5tLQcuLOyH7axsSK1sLAktK+vJrKtrSmwq6surqmpNKunpjuppKRDp6KiTKSgoFijnp5mop2deaKdnY+inp6fo6Cfsra8uqm6v76YvsLBiMTGxXPJyclczMvLS87MzEHQzc060c/ONdLQzzLT0NAy0tDQNdDPzzzOzs1EzMzMS8rMzFHJzMxXyMvLXcfLy2PFyslqwsfHcsDGxXi/xcR7v8XEfb7Ew3y+w8N6vcPDd77CwnO+wsJwwMPDa8XHx2LKyspWy8rJT8jFxU7DwMBNwr6+RsO+vj7Cvb43wr29McG8vCvAu7smvrm6Ir24uCC8t7cdvLe3G7u2thu5tLQdt7KyILWwsCO0r68ms66uKLOuriizrq0rsaysL6+qqjWsqKc8qqWlRaijo06loKBZo56eaqKenYCinp6Top6eoKKenq+8v7+PvMC/jr/CwoTCxcR2x8fHX8rJyUzNy8tDz83NPdHPzjjS0M810tDQNNLQ0DfQz88+zc3NRsvMzEzKzMxSyszMV8nNzVzJzc1gyMzMZsbLymvEychww8nIdMHHxnfAxsV3wMXEdcDFxXLBxsVtw8bGaMXHx2PIyslby8vLU8zLykzKyMhIyMXFRMfDwz/GwcE5xL+/NMO+vjDDvb4pw729I8K8vB7Au7scv7q6Gr65uRm9uLcaurW1HbizsyC2sbEktK+vJ7Ouriqzrq4qs66tLLGsrDKvqqk4rKinP6qlpUiopKNQpqKhWqSgoG2jn5+Do6CfkaOfn5mgnJyavL+/j7y/v4/Bw8N6wsXEccbGxl3JyMhLzcvLQ9DOzjzSz88209DQM9PR0TLT0dE10dDQOtDQz0HPz89Hzc/PTc3Pz1LMz89XzM/PWsvPzl7Kzs1hyc7MZcjNzGnHzMttxsvKbcbLymvGy8ppx8vLZcnMzF/KzMxZy8zMVMzMzE7Ny8tIzcrKQc3JyTrNyMg0y8bGMMrExCvIw8Mnx8LCIsfBwR3FwL8aw769GcG8vBnAuroZvrm5G7y3tx26tbUguLOzI7eysiO2sbEktK+vJrOurSmwq6svrqmpN6unpj6qpaRGqKOjT6ejolimoaFqpaGhgKWiooqppqaKoJycmsHDwmzBw8JswsTEdMLExHLFxsZfysrJSc/NzT7Sz88309DQMtPQ0DHU0dEw1NHRMtPS0TfS0dE80dHRQtDR0UjP0dBOztDQVM3Q0FjM0M9by8/OXsrPzmHKzs1kyc7MaMjNzGnJzcxoyc3MZsrNzWLLzc1dzM3NV8zNzFLNzMxNzczLRs7Lyz7Oyso3zsnJMc3IyCvMxsYmy8XFIsnExB7IwsIbxsDAGcS+vhjCvLwZwLu6Gr+5uRy9uLgdvLa2H7q1tSC4s7Mgt7KyILWwsCKyra0nsKurLK6pqTKsp6c3q6amPqmkpEioo6NUpqKha6WhoYKmoqKHqaameqmmpnrIyclhyMnJYcTGxXHDxcVzvMHAl83MzEPRz88309DQMtPR0DLT0dAz09HRM9PR0TPT0tE209LSO9LS0kDQ0tFGz9HRTc7R0FPN0NBYzNDPW8vPzl/Kz85iys7NZcnOzWjIzcxqyM3MasnNzGfKzc1ky83NX8vNzVnMzcxTzczMTc3My0bOy8s+zsrKN87JyTHOyMgrzMfGJsvFxSHKxMQdyMLCG8bBwBnEv78Ywr29GMG7uxm/urkbvri4HLy3tx27tbUdubS0HreysiC1sLAis66tJrGsrCuvqqovrqmpMayopzeqpaVAqKSjTamkpD+koJ+DpKCgiaGdnZKhnZ2SyMnJYcjJyWHIyclhx8jIZMnKyVzSz8830tDPNNTR0THT0dEz09HRNdPR0TbT0tE309LRONLS0jvS0tI/0dLSRdDS0UzO0dFTzdHQWMzQz1zLz89gys/OZMnOzWjIzsxryM3MbcjNzGzJzcxpyc3NZcrNzWDLzc1by8zMVszMzFDNy8tJzsvKQM7KyjnOyckyzsjILM3HxybLxsUhysTEHcjDwhrHwcEZxb+/F8O9vRfBvLsYv7q6Gb65uBu8t7cdu7a2Hbm0tB64srIgtrGwI7Svryayra0rsaysLrCrqjCuqag1q6emPKumpkCnoqJYpJ+fdqSfn2GhnZ2SoZ2dksjJyWHKyspXysrKV8zLy1POzcxJ0M7OPtTS0TDU0dEx09HRNNPR0TfS0dE40tHROdLS0TrS0tI90tLSP9HS0kPQ0tFKz9HRUc3R0FfM0NBby9DPX8rPzmPJzs1nyM7Ma8jNzGzIzcxryc3MaMnNzGXKzc1hys3MXcvMzFnLzMtTzMvLS83KykPOysk7zsnJM87IyC3Nx8cny8bGIsrExB7Jw8Mbx8HBGcW/vxjDvr0Ywby8GcC6uhq+ubkdvbi3H7u2th+6tLQguLOzIbaxsSO1sK8ns66uLLGsrC+wq6sxrqmpNa6pqDmnoqJYpaGhX6Sgn2uinp58op6efKGdnZLKyspXysrKV8rKylfKyspXz87NRdDOzkLPzs5F1NLRMNTS0THS0dA70tHRO9LR0TvS0tI80tLSPtLS0j/S0tJC0NLRSM/R0U7O0dBSzdHQVc3Qz1rLz85eys/OY8nOzWbJzcxpyM3MacnNzGfJzcxlyc3MY8rMzF/KzMxay8vLVMzLyk3MyspEzcrJPM7JyTTNyMgtzcfHKMvGxSTKxMQgycPDHcfCwRvFwL8aw769G8G8vBzAu7oev7m5Ib24tyK7trYiubS0I7izsiS3sbElta+vKbOurS6xrKwysaysOK6pqDmuqag5qqWlQqaioVimoaFSop6efKKennyinp58ysrKV8rKylfKyspX0M7OQtDOzkLQz89Bz87ORc/OzkXQ0NBF0dHQP9LR0T3S0tE80tLSPNLS0j3S0tI/0dLSQtHS0UbQ0dFLz9HRTs7R0FHN0NBWzNDPWsvPzl7Kzs1iyc3MZsnNzGfIzcxnyc3MZ8nMzGTJzMxgyszMWsvLy1TLy8pNzMrKRM3JyTzNycg1zcjILszHxynLxsUkysTEIcjDwx7HwsEdxcDAHMO+vh3BvLwfwLu6Ib65uSS9t7cmu7W1Jrm0tCa3srIntrGxKbSvry2yra0zsaysNrKtrTeyra03qqWlQqmkpEuqpaVCpqGhUqahoVKinp58op6efMrKylfKyspX0M7OQtLQ0DnS0NA50dDPPNLQ0DnT0dA30tHQPNHQ0EDS0dA80tHRPdLS0TzS0tI90tLSQNHS0kPR0tFG0NHRSNDR0UvP0dBOztHQU83Qz1fMz85cys7NYcnNzGbJzcxoyM3MacjNzGjJzcxlyszMX8rMzFnLy8tSzMvLTMzKykTNysk8zcnINc3IyC/Mx8cpy8bFJMrExCDIw8Iex8HBHcXAvx3Dvr0fwby8IsC6uiW+ubgovLe2Kbq1tSm5tLQot7KyKbaxsCu0r64xsq2sN6+qqkCyra03qqalRqqmpUappKROp6OiV6ejolemoaFSpqGhUqKennzKyspX0tDQOdLQ0DnS0NA50tDQOdLQ0DnS0NA409HQN9LR0DzS0dA80dDQQdLR0T7T0tI609PSO9LS0kHR0tJD0dLRRNHS0UbQ0dFI0NHRS8/R0FDN0NBWzNDPXcrOzWTJzs1oyc3MacnNzGjJzcxnyc3MZMrNzF7LzMxYy8zLUszLy0vNyspDzcrJO83JyDTNyMcuzMfGKMvFxSPJxMMfyMLCHMbBwBvEv78cw729H8G8uyO/urknvbi3Kbu2tiq6tbUqubS0Krq1tSy3sbEns66uNLKtrDixrKw5raioPa2oqD2qpqVIqqalRqejoleno6JXp6OiV6ejolemoaFS0tDQOdLQ0DnS0NA50tDQOdLQ0DnT0dA309HQN9PR0DfT0dA3z8/PSM/Pz0jT0tI60tLRPdLS0j3T09M80dLRRNHS0kTR0tJD0dLSRdDS0knP0dFPzdHQVszQz17Kz85lyc7NaMnOzWjJzs1nyc3NZcrNzWPKzc1ey83MWMzMzFHMy8tKzcvKQs3KyjrNycgyzMfHLMvGxibKxcQhycPDHMfBwRnFv78Yw729GcG8vBzAurogvri4Jbu2tii6tbQqubSzLbm0tDKzrq4zs66uNbWwrzCxrKw5saysOa2oqD2tqKc/raioPaqmpUaqpqVGp6OiV6ejoleno6JXp6OiV9LQ0DnS0NA50tDQOdLQ0DnT0dA309HQN9PR0DfT0dA309HQN87Ozk/Ozs5P0NDPRs7Ozk/S0tE+0dHRQtDR0EbR0dFE0dLSQtHS0kPR0tJIz9LST87R0VbM0NBdy9DPZMrPzmfJz85oyc7NaMrOzWXKzs1iy87NXsvNzVjMzMxQzMvLR83Lyj/Nyso3zcnIMMzHxynLxsYjysTEHsjDwhrGwcEYxL++FsK9vBfAu7oavrm5Hry3tyK6tbUnuLOzLbaxsTS1sK84s66uObKtrDuwq6pBsKuqQbGsrDmtqKg9raioPa2oqD2tqKg9qqalRqqmpUano6JXp6OiV6ejolfS0NA50tDQOdLQ0DnT0dA309HQN9PR0DfT0dA309HQN87Ozk/Ozs5Pzs7OT87Ozk/R0NBA0dDQQdDQ0EXQ0NBF0dHRQdLS0j7S09NA0dPTRtDT0kzP0tFTzdHRW8zQ0GHL0M9lys/OaMrPzmjKz85lys7OYsvOzVzMzcxUzMzMTczLy0TNy8o8zcrJNM3JyC3NyMcmzMbGIMrExBvIw8IYx8HBFsW/vxbCvbwXwLu6Gb64uBy7trYiubS0KLeysjG0r687sq6tQbGsrEGwq6tBr6qqRK+qqkStqKg9raioPa2oqD2tqKg9raioPa2oqD2qpqVGqqalRqejoleno6JX0tDQOdLQ0DnT0dA309HQN9PR0DfT0dA309HQN9PR0DfOzs5Pzs7OT87Ozk/R0NA+0dDQPs/Pz0bQz89F0dDQQdLS0TzT09I609PTPNLT00LR09NJ0NPSUM7S0lfN0dFdzNHQYsvQz2XK0M9mys/PZcvPzmLMzs1Zzc3MTs3My0jNy8tDzcvKO87KyTHOycgpzcjHI8zGxh7KxcQaycPDF8fBwRbFv78Ww729F8C7uxm+uLgdu7a2Irm0tCm3sbEys66uPLGsrESvq6pJqqWlXa+qqkSvqqpEr6qqRK2oqD2tqKg9raioPa2oqD2tqKg9raioPaqmpUaqpqVGp6OiV9LQ0DnT0dA309HQN9PR0DfT0dA309HQN9PR0DfOzs5Pzs7OT87Ozk/R0NA+0dDQPszMzFTMzMxU0dDQQdLR0TzT0tI41NPTN9PT0znT1NM+0tPTRNDT00vP09JSztLSWM3S0V3M0dBhy9DQZMvQz2XL0NBly87NXdDNzTvNzMxIzMvKRM7MzEDOyckrz8nJJ87IxyHMxsYdy8XFGcnDwxfHwcEWxb+/F8O9vRjAu7sbvri4H7y2tiO5tLQptrGxMrOurjuxrKxCsKurPqqlpV2qpaVdr6qqRK+qqkStqKg9raioPa2oqD2tqKg9raioPa2oqD2tqKg9qqalRqqmpUbT0dA309HQN9PR0DfT0dA309HQN9PR0DfT0dA3zs7OT87Ozk/R0NA+0dDQPszMzFTMzMxU0dDQP9HQ0D/T0tE509LSN9TT0jbU09M409TTO9PU00DS09NF0NPTTM/T0lLO0tJYzdLRXc3S0lvL0NBly9DQZcvOzV3Qzc07zczMSMzLykTOzMxAzsnJK8/JyCLPycgizcfHHcrExBjIw8MXx8HBF8S/vxjCvLwbwLq6Hr65uCG8t7ckvbi4J7izsjGyra08sKurPrCrqz6wq6s+qqWlXaqlpV2vqqpEr6qqRK2oqD2tqKg9raioPa2oqD2tqKg9raioPa2oqD2qpqVG09HQN9PR0DfT0dA309HQN9PR0DfT0dA309HQN87Ozk/R0NA+0dDQPszMzFTMzMxU0dDQP9HQ0D/T0tI309LSN9TT0jbU09I21NPTNtTU0znT1NM909TTQNLT00XR09NL0dPTSc3S0lvN0tJby9DQZcvQ0GXL0NBl0M3NO83MzEjMy8pEzszMQM/JyCLPycgiz8nIIsvFxRjLxcUYyMLCF8bAwBjEvr4awby8HcC6uiC+ubkivbi4J724uCe4s7Ixsq2tPLCrqz6wq6s+sKurPrCrqz6qpaVdqqWlXa+qqkStqKg9raioPa2oqD2tqKg9raioPa2oqD2tqKg9raioPdPR0DfT0dA309HQN9PR0DfT0dA309HQN87Ozk/R0NA+0dDQPszMzFTMzMxU0dDQP9HQ0D/T0tI309LSN9PS0jfU09I21NPSNtTT0zbU1NQ509TTO9PU0z3S1NNB0tTTQdHT00nN0tJbzdLSW83S0lvL0NBly9DQZdDNzTvNzMxIzMvKRM7MzEDPycgiz8nIIsvFxRjLxcUYyMLCF8jCwhfGwcAYw729HMG8ux/Aurohv7q5I7+6uSO9uLgnvbi4J7KtrTywq6s+sKurPrCrqz6wq6s+sKurPqqlpV2qpaVdraioPa2oqD2tqKg9raioPa2oqD2tqKg9raioPa2oqD3T0dA309HQN9PR0DfT0dA309HQN9PR0DfR0NA+0dDQPszMzFTMzMxU0dDQP9HQ0D/T0tI309LSN9PS0jfT0tI31NPSNtTU0znU1NM51NTTOdPU0zrT1NM809TTPtLT00DS09NA0dPTSc3S0lvN0tJby9DQZcvQ0GXL0NBlzczMSMzLykTOzMxAz8nIIs/JyCLLxcUYyMLCF8jCwhfIwsIXxL6+HMK9vR7BvLsgwLq6Ir+5uSS/ubkkv7m5JL24uCeyra08sKurPrCrqz6wq6s+sKurPrCrqz6wq6s+qqWlXaqlpV2tqKg9raioPa2oqD2tqKg9raioPa2oqD2tqKg909HQN9PR0DfT0dA309HQN9PR0DfR0NA+0dDQPszMzFTMzMxU0dDQP9HQ0D/T0tI309LSN9PS0jfT0tI309LSN9TT0jbU1NM41NTTONTU0zjU1NM509PTOtPU0zvS09NA0tPTQNLT00DS09NAzdLSW83S0lvL0NBly9DQZc3MzEjMy8pEz8nIIs/JyCLLxcUYyMLCF8jCwhfIwsIXxL6+HMS+vhzEvr4cwbu7I8C6uiS/urkmv7q5Jr+6uSa/urkmv7q5JrCrqz6wq6s+sKurPrCrqz6wq6s+sKurPrCrqz6qpaVdraioPa2oqD2tqKg9raioPa2oqD2tqKg9raioPdPR0DfT0dA309HQN9PR0DfT0dA30dDQPszMzFTMzMxU0dDQP9HQ0D/T0tI309LSN9PS0jfT0tI309LSN9PS0jfU1NM41NTTONTU0zjU1NM41NTTONPT0znU09I31NPSN9LT00DS09NA0tPTQNLT00DN0tJby9DQZcvQ0GXNzMxIzMvKRM/JyCLPycgiyMLCF8jCwhfIwsIXxL6+HMS+vhy/ubkxv7m5McC6uim/ubkxv7q5Jr+6uSa/urkmv7q5Jr+6uSawq6s+sKurPrCrqz6wq6s+sKurPrCrqz6wq6s+sKurPqqlpV2tqKg9raioPa2oqD2tqKg9raioPa2oqD3T0dA309HQN9PR0DfT0dA30dDQPszMzFTMzMxU0dDQP9HQ0D/T0tI309LSN9PS0jfT0tI309LSN9PS0jfU1NM41NTTONTU0zjU1NM41NTTONTT0jfU09I31NPSN9TT0jfU09I31NPSN9LT00DS09NA0tPTQM3S0lvL0NBlzczMSMzLykTPycgiyMLCF8jCwhfIwsIXxL6+HL+5uTG/ubkxv7m5Mb+5uTG/ubkxv7m5Mb+5uTG/urkmv7q5Jr+6uSa/urkmv7q5JrCrqz6wq6s+sKurPrCrqz6wq6s+sKurPrCrqz6wq6s+raioPa2oqD2tqKg9raioPa2oqD2tqKg909HQN9PR0DfT0dA309HQN8zMzFTMzMxU0dDQP9HQ0D/T0tI309LSN9PS0jfT0tI309LSN9PS0jfU1NM41NTTONTU0zjU1NM41NTTONTT0jfU09I31NPSN9TT0jfU09I31NPSN9TT0jfU09I31NPSN9LT00DS09NAy9DQZcvQ0GXPycgiyMLCF8jCwhfIwsIXv7m5Mb+5uTG/ubkxv7m5Mb+5uTG/ubkxv7m5Mb+5uTG/ubkxv7m5Mb+6uSa/urkmv7q5Jr+6uSa/urkmsKurPrCrqz6wq6s+sKurPrCrqz6wq6s+sKurPrCrqz6tqKg9raioPa2oqD2tqKg9raioPQ==";var vl="GgAAshoAALIaAACyIQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/AQAAYQEAAGEBAABhAQAAYQEAAGEBAABhAQAAYQEAAGEmAAD/GwAA/wAAAFoAAABVCAAAyCUCAP8lAgD/JQIA/xsJAP8bCQD/GwkA/xsJAP8FAgDUBQIA1AAAAFUBAQB/DgkA/w8KAP8BAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAahoAALIaAACyGgAAsiEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/wEAAGEBAABhAQAAYQEAAGEBAABhAQAAYQEAAGEBAABhJgAA/xsAAP8AAABaAAAAVQgAAMglAgD/JQIA/yUCAP8bCQD/GwkA/xsJAP8bCQD/BQIA1AUCANQAAABVAQEAfw4JAP8PCgD/AQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoaAACyGgAAshoAALIhAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8BAABhAQAAYQEAAGEBAABhAQAAYQEAAGEBAABhAQAAYSYAAP8bAAD/AAAAWgAAAFUIAADIJQIA/yUCAP8lAgD/GwkA/xsJAP8bCQD/GwkA/wUCANQFAgDUAAAAVQEBAH8OCQD/DwoA/wAAAFwBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqGgAAshoAALIaAACyGgAAsiEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/AQAAYQEAAGEBAABhAQAAYQEAAGEBAABhAQAAYQAAAFgmAAD/GwAA/wAAAFoAAABVCAAAyCUCAP8lAgD/JQIA/xsJAP8bCQD/GwkA/xsJAP8FAgDUBQIA1AAAAFUBAQB/DgkA/w8KAP8AAABcAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAahoAALIaAACyGgAAshoAALIhAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/wEAAGEBAABhAQAAYQEAAGEBAABhAQAAYQEAAGEAAABYJgAA/xsAAP8AAABaAAAAVQgAAMglAgD/JQIA/yUCAP8bCQD/GwkA/xsJAP8bCQD/BQIA1AUCANQAAABVAQEAfw4JAP8PCgD/AAAAXAEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoaAACyGgAAshoAALIaAACyIQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8BAABhAQAAYQEAAGEBAABhAQAAYQEAAGEBAABhAAAAWCYAAP8bAAD/AAAAWgAAAFUIAADIJQIA/yUCAP8lAgD/GwkA/xsJAP8bCQD/GwkA/wUCANQFAgDUAAAAVQEBAH8OCQD/DwoA/wAAAFwBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqGgAAshoAALIaAACyGgAAshoAALIhAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/AQAAYQEAAGEBAABhAQAAYQEAAGEBAABhAQAAYQAAAFgmAAD/GwAA/wAAAFoAAABVCAAAyCUCAP8lAgD/JQIA/xsJAP8bCQD/GwkA/xsJAP8FAgDUBQIA1AAAAFUBAQB/DgkA/w8KAP8AAABcAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAahoAALIaAACyGgAAshoAALIaAACyIQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/wEAAGEBAABhAQAAYQEAAGEBAABhAQAAYQEAAGEAAABYJgAA/xsAAP8AAABaAAAAVQgAAMglAgD/JQIA/yUCAP8bCQD/GwkA/xsJAP8bCQD/BQIA1AUCANQAAABVAQEAfw4JAP8PCgD/AAAAXAEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoaAACyGgAAshoAALIaAACyGgAAsiEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8BAABhAQAAYQEAAGEBAABhAQAAYQEAAGEBAABhAAAAWCYAAP8bAAD/AAAAWgAAAFUIAADIJQIA/yUCAP8lAgD/GwkA/xsJAP8bCQD/GwkA/wUCANQFAgDUAAAAVQEBAH8OCQD/DwoA/wAAAFwBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGofBwD/GgAAshoAALIaAACyGgAAshoAALIaAACyIQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/AQAAYQEAAGEBAABhAQAAYQEAAGEBAABhAAAAVQAAAFgmAAD/GwAA/wAAAFoAAABVCAAAyCUCAP8lAgD/JQIA/xsJAP8bCQD/GwkA/xsJAP8FAgDUBQIA1AAAAFUBAQB/DgkA/w8KAP8AAABcAAAAVQEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqHwcA/xoAALIaAACyGgAAshoAALIaAACyGgAAsiEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/wEAAGEBAABhAQAAYQEAAGEBAABhAQAAYQAAAFUAAABYJgAA/xsAAP8AAABaAAAAVQgAAMglAgD/JQIA/yUCAP8bCQD/GwkA/xsJAP8bCQD/BQIA1AUCANQAAABVAQEAfw4JAP8PCgD/AAAAXAAAAFUBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqHwcA/x8HAP8aAACyGgAAshoAALIaAACyGgAAshoAALIhAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8BAABhAQAAYQEAAGEBAABhAQAAYQEAAGEAAABVAAAAWCYAAP8bAAD/AAAAWgAAAFUIAADIJQIA/yUCAP8lAgD/GwkA/xsJAP8bCQD/GwkA/wUCANQFAgDUAAAAVQEBAH8OCQD/DwoA/wAAAFwAAABVAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAah8HAP8fBwD/GgAAshoAALIaAACyGgAAshoAALIaAACyGgAAsiEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/AQAAYQEAAGEBAABhAQAAYQEAAGEBAABhAAAAVQAAAFgmAAD/GwAA/wAAAFoAAABVCAAAyCUCAP8lAgD/JQIA/xsJAP8bCQD/GwkA/xsJAP8FAgDUBQIA1AAAAFUBAQB/DgkA/w8KAP8AAABcAAAAVQEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAah8HAP8fBwD/HwcA/xoAALIaAACyGgAAshoAALIaAACyGgAAshoAALIhAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/wEAAGEBAABhAQAAYQEAAGEBAABhAQAAYQAAAFUAAABYJgAA/xsAAP8AAABaAAAAVQgAAMglAgD/JQIA/yUCAP8bCQD/GwkA/xsJAP8bCQD/BQIA1AUCANQAAABVAQEAfw4JAP8PCgD/AAAAXAAAAFUBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGofBwD/HwcA/x8HAP8aAACyGgAAshoAALIaAACyGgAAshoAALIaAACyIQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8BAABhAQAAYQEAAGEBAABhAQAAYQEAAGEAAABVAAAAWCYAAP8bAAD/AAAAWgAAAFUIAADIJQIA/yUCAP8lAgD/GwkA/xsJAP8bCQD/GwkA/wUCANQFAgDUAAAAVQEBAH8OCQD/DwoA/wAAAFwAAABVAAAAVQEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGofBwD/HwcA/x8HAP8fBwD/GgAAshoAALIaAACyGgAAshoAALIaAACyGgAAshoAALIhAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/AQAAYQEAAGEBAABhAQAAYQEAAGEAAABVAAAAVQAAAFgmAAD/GwAA/wAAAFoAAABVCAAAyCUCAP8lAgD/JQIA/xsJAP8bCQD/GwkA/xsJAP8FAgDUBQIA1AAAAFUBAQB/DgkA/w8KAP8AAABcAAAAVQAAAFUBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGofBwD/HwcA/x8HAP8fBwD/HwcA/xoAALIaAACyGgAAshoAALIaAACyGgAAshoAALIaAACyIQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/wEAAGEBAABhAQAAYQEAAGEBAABhAAAAVQAAAFUAAABYJgAA/xsAAP8AAABaAAAAVQgAAMglAgD/JQIA/yUCAP8bCQD/GwkA/xsJAP8bCQD/BQIA1AUCANQAAABVAQEAfw4JAP8PCgD/AAAAXAAAAFUAAABVAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqHwcA/x8HAP8fBwD/HwcA/x8HAP8aAACyGgAAshoAALIaAACyGgAAshoAALIaAACyGgAAsiEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8BAABhAQAAYQEAAGEBAABhAQAAYQAAAFUAAABVAAAAWCYAAP8bAAD/AAAAWgAAAFUIAADIJQIA/yUCAP8lAgD/GwkA/xsJAP8bCQD/GwkA/wUCANQFAgDUAAAAVQEBAH8OCQD/DwoA/wAAAFwAAABVAAAAVQEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqHwcA/x8HAP8fBwD/HwcA/x8HAP8fBwD/GgAAshoAALIaAACyGgAAshoAALIaAACyGgAAshoAALIaAACyIQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/AQAAYQEAAGEBAABhAQAAYQEAAGEAAABVAAAAVQAAAFgmAAD/GwAA/wAAAFoAAABVCAAAyCUCAP8lAgD/JQIA/xsJAP8bCQD/GwkA/xsJAP8FAgDUBQIA1AAAAFUBAQB/DgkA/w8KAP8AAABcAAAAVQAAAFUBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAah8HAP8fBwD/HwcA/x8HAP8fBwD/HwcA/xoAALIaAACyGgAAshoAALIaAACyGgAAshoAALIaAACyGgAAsiEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/wEAAGEBAABhAQAAYQEAAGEAAABVAAAAVQAAAFUAAABYJgAA/xsAAP8AAABaAAAAVQgAAMglAgD/JQIA/yUCAP8bCQD/GwkA/xsJAP8bCQD/BQIA1AUCANQAAABVAQEAfw4JAP8PCgD/AAAAXAAAAFUAAABVAAAAVQEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagAAAFgfBwD/HwcA/x8HAP8fBwD/HwcA/x8HAP8aAACyGgAAshoAALIaAACyGgAAshoAALIaAACyGgAAshoAALIhAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8BAABhAQAAYQEAAGEBAABhAAAAVQAAAFUAAABVAAAAWCYAAP8bAAD/AAAAWgAAAFUIAADIJQIA/yUCAP8lAgD/GwkA/xsJAP8bCQD/GwkA/wUCANQFAgDUAAAAVQEBAH8OCQD/DwoA/wAAAFwAAABVAAAAVQAAAFUBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagAAAFgfBwD/HwcA/x8HAP8fBwD/HwcA/x8HAP8fBwD/GgAAshoAALIaAACyGgAAshoAALIaAACyGgAAshoAALIaAACyHgAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/AQAAYQEAAGEBAABhAQAAYQAAAFUAAABVAAAAVQAAAFgmAAD/GwAA/wAAAFoAAABVCAAAyCUCAP8lAgD/JQIA/xsJAP8bCQD/GwkA/xsJAP8FAgDUBQIA1AAAAFUBAQB/DgkA/w8KAP8AAABcAAAAVQAAAFUAAABVAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAaiofAP8AAABYHwcA/x8HAP8fBwD/HwcA/x8HAP8fBwD/g39/dhoAALIaAACyGgAAshoAALIaAACyGgAAshoAALIaAACyGgAAsh4AAP8hAAD/IQAA/yEAAP8hAAD/IQAA/wEAAGEBAABhAQAAYQEAAGEAAABVAAAAVQAAAFUAAABYJgAA/xsAAP8AAABaAAAAVQgAAMglAgD/JQIA/yUCAP8bCQD/GwkA/xsJAP8bCQD/BQIA1AUCANQAAABVAQEAfw4JAP8PCgD/AAAAXAAAAFUAAABVAAAAVQAAAFUBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAaiofAP8AAABYAAAAWB8HAP8fBwD/HwcA/x8HAP8fBwD/HwcA/4N/f3YaAACyGgAAshoAALIaAACyGgAAshoAALIaAACyGgAAshoAALIeAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8BAABhAQAAYQEAAGEAAABVAAAAVQAAAFUAAABVAAAAWCYAAP8bAAD/AAAAWgAAAFUIAADIJQIA/yUCAP8lAgD/GwkA/xsJAP8bCQD/GwkA/wUCANQFAgDUAAAAVQEBAH8OCQD/DwoA/wAAAFwAAABVAAAAVQAAAFUAAABVAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAaiofAP8AAABYAAAAWB8HAP8fBwD/HwcA/x8HAP8fBwD/HwcA/x8HAP+Df392GgAAshoAALIaAACyGgAAshoAALIaAACyGgAAshoAALIaAACyHgAA/x4AAP8hAAD/IQAA/yEAAP8hAAD/AQAAYQEAAGEBAABhAAAAVQAAAFUAAABVAAAAVQAAAFgmAAD/GwAA/wAAAFoAAABVCAAAyCUCAP8lAgD/JQIA/xsJAP8bCQD/GwkA/xsJAP8FAgDUBQIA1AAAAFUBAQB/DgkA/w8KAP8AAABcAAAAVQAAAFUAAABVAAAAVQEAAGoBAABqAQAAagEAAGoBAABqAQAAaiofAP8qHwD/AAAAWAAAAFgfBwD/HwcA/x8HAP8fBwD/HwcA/x8HAP+Df3+Cg39/dsO+vlUaAACyGgAAshoAALIaAACyGgAAshoAALIaAACyGgAAsh4AAP8eAAD/IQAA/yEAAP8hAAD/IQAA/wEAAGEBAABhAAAAVwAAAFUAAABVAAAAVQAAAFUAAABYJgAA/xsAAP8AAABaAAAAVQgAAMglAgD/JQIA/yUCAP8bCQD/GwkA/xsJAP8bCQD/BQIA1AUCANQAAABVAQEAfw4JAP8PCgD/AAAAXAAAAFUAAABVAAAAVQAAAFUAAABYAQAAagEAAGoBAABqAQAAaiofAP8qHwD/AAAAWAAAAFgAAABYHwcA/x8HAP8fBwD/HwcA/x8HAP8fBwD/g39/goN/f3bDvr5VwLu6ZRoAALIaAACyGgAAshoAALIaAACyGgAAshoAALIeAAD/HgAA/x4AAP8hAAD/IQAA/yEAAP8BAABhAQAAYQAAAFcAAABVAAAAVQAAAFUAAABVAAAAWCYAAP8bAAD/AAAAWgAAAFUIAADIJQIA/yUCAP8lAgD/GwkA/xsJAP8bCQD/GwkA/wUCANQFAgDUAAAAVQEBAH8OCQD/DwoA/wAAAFwAAABVAAAAVQAAAFUAAABVAAAAWAEAAGoBAABqAQAAaiofAP8qHwD/HgAA/wAAAFgAAABYHwcA/x8HAP8fBwD/HwcA/x8HAP8fBwD/g39/c4N/f4KDf392w76+VcC7umXCvLxcGgAAshoAALIaAACyGgAAshoAALIaAACyHgAA/x4AAP8eAAD/IQAA/yEAAP8hAAD/AQAAYQAAAFgAAABXAAAAVQAAAFUAAABVAAAAVQAAAFgmAAD/GwAA/wAAAFoAAABVCAAAyCUCAP8lAgD/IgQA/xsJAP8bCQD/GwkA/xsJAP8WDAD/BQIA1AAAAFUBAQB/DgkA/w8KAP8AAABcAAAAVQAAAFUAAABVAAAAVQAAAFgAAABYAwEAmyofAP8qHwD/HgAA/wAAAFgAAABYAAAAWB8HAP8fBwD/HwcA/x8HAP8fBwD/HwcA/4N/f3ODf3+Cg39/dsO+vlXAu7plwry8XMS/v08aAACyGgAAshoAALIaAACyGgAAsh4AAP8eAAD/HgAA/z4PAP8+DwD/Pg8A/zocCf8TAACaEAAAjxMAAJcSAACWFQAA0xoAAP8iAAD/GAAA/xAAAP8VAAD/EAEA/yECAP8jAwD/IgQA/yIEAP8iBAD/GQoA/xkKAP8XCwD/FgwA/xELAP8IBwD/CAgA/wcGAP8KCQD/CQkA/wwGAP8UAADYFQAAnRUAAJ8UAACcFgAApRoAAP8iBwD/HgAA/x4AAP8AAABYAAAAWAAAAFgfBwD/HwcA/x8HAP8fBwD/HwcA/x8HAP+Df39zg39/goN/f3bDvr5VwLu6ZcK8vFzEv79PxcDAThoAALIaAACyGgAAshoAALIeAAD/HgAA/x4AAP8nAAD/JwAA/y0AAP8nAAD/FwAAthwDAJ0VAACeGwMAmxYAAKAXAACxGgAA/x8AAP8gAAD/HgAA/yIBAP8kAgD/IgQA/yAFAP8gBQD/HgcA/xkKAP8ZCgD/FwsA/x0UAP8ZEgD/GRUA/xIQAP8TDgD/GhAA/xUAAP8aAADBGAAApyQLAJwgBgCgFQAAnxgAANcyGgT/HQAA/x8AAMQaAACyAAAAWAAAAFgfBwD/HwcA/x8HAP8fBwD/HwcA/x8HAP+EgIBrg39/c4N/f4KDf392w76+VcC7umXCvLxcxL+/T8XAwE7GwcFJGgAAshoAALIaAACyHgAA/x4AAP8uAAD/LgAA/ycAAP8kAAD/IgAA/zoaB/ITAACZFQAAnhMAAJkSAACVEQAAkRUAAJ4WAACgFwAApRsAAP8jAAD/IwEA/yIEAP8gBQD/HgcA/x4HAP8bCQD/GwkA/xkKAP8XCwD/FwkA/xkDAP8XAADkGQAAsBYAAKEZAACsFgAAoxcAAKYXAAClFAAAnBMAAJkgBAD/Jw8A/x0AAP8dAAD/GgAAsgUAAGoFAABqHwcA/x8HAP8fBwD/HwcA/x8HAP+FgoFqhICAa4N/f3ODf3+Cg39/dsO+vlXAu7plwry8XMS/v0/FwMBOxsHBScjExELLxsY+xb68Ts7KyTwtAAD/LQAA/y4AAP8uAAD/LAAA/ysAAP8/FwD/IwAA/xUAALMQAACMEAAAjhMAAJcTAACYFQAAnBgAALwgAAD/IgAA/yAAAP8hAQD/IAUA/x8GAP8fBgD/GwkA/xsJAP8YCgD/GgcA/xwAAP8cAAD/GwAA/xUAAL0QAACOFgAAohYAAKIWAACiFwAApxIAALoSAwD/HxMA/xYLAP8XDAD/FwwA/wUAAGoFAABqBQAAah4IAP8eCAD/HwcA/x8HAP8fBwD/hYKBaoSAgGuDf39zg39/goN/f3bDvr5VwLu6ZcK8vFzEv79PxcDATsbBwUnIxMRCy8bGPsW+vE7Oysk8y8fGSS0AAP8uAAD/LgAA/y4AAP8vAAD/LwAA/zsHAP8vAAD/JQAA/xsAAP8cAAD/HQAA/x4AAP8gAAD/IQAA/yIAAP8fAAD/IQEA/yEBAP8iBAD/IgQA/725t30aCQD/GAsA/xkIAP8cAAD/GwAA/xwAAP8ZAAD/EwAA/xIDAP8RBgD/DwcA/xELAP8RDgD/ExAA/xcSAP8UDgD/FA4A/29sbDWWkpIql5KQP4iFhDaTj482HggA/x4IAP+IhIRVhYKBX4WCgWqEgIBrg39/c4N/f4KDf392w76+VcC7umXCvLxcxL+/T8XAwE7GwcFJyMTEQsvGxj7FvrxOzsrJPMvHxknFwL5dw7+9ZoR9eKZ/c2vQuLOvk62ln7aYiH37nI+F8o5/c/+Nf3P/l4l+/5WHev+YjYH/kod6/6KclNaTiX/0e2xf9ol+cf/ExMRttbKun7m1so69ubd9cWdS/3tyYP9wZlL/ZVZE/5qSirihmpOkiYN38356bP9/e23+hYF07YR/cvV1cWD/fXlq/315bsyIg3ySkYyEj4aCfWRvbGw1lpKSKpeSkD+IhYQ2k4+PNpCMizyLh4dJiISEVYWCgV+FgoFqhICAa4N/f3ODf3+Cg39/dsO+vlW5tLR/ubS0f8S/v0/FwMBOxsHBScjExELLxsY+xb68Ts7KyTzLx8ZJxcC+XcO/vWaEfXimf3Nr0Lizr5OtpZ+2mIh9+5yPhfKOf3P/DAAA2AwAANiVh3r/mI2B/0IcAP84DwD/Ti0O/041Fv8/JQP/PyUD/zUZAP81GQD/vbm3fRoJAP8ZCgD/GQoA/xkKAP+akoq4FA0A/xIMAP8WEwH/CQcA/wkHAP+Ef3L1dXFg/315av8TEhJYExISWJGMhI+Ggn1kb2xsNZaSkiqXkpA/iIWENpOPjzaQjIs8i4eHSYiEhFWFgoFfhYKBaoSAgGuDf392g39/j4N/f4+6tbV6urW1er+5uWa/ublmv7m5ZsbBwUnIxMRCy8bGPsW+vE7Oysk8y8fGScXAvl3Dv71mhH14pn9za9C4s6+TraWftpiIffsiISFRIiEhUQwAANgMAADYlYd6/0IcAP9CHAD/MAAA/y8AAP8vAAD/PyUD/z8lA/81GQD/NRkA/xoJAP8aCQD/GQoA/xkKAP8ZCgD/FA0A/xQNAP8SDAD/FhMB/wkHAP8JBwD/hH9y9XVxYP8TEhJYExISWAAAAFUAAABVAAAAVW9sbDWWkpIqIQYA/yEGAP8hBgD/IQYA/4uHh0mIhIRVhYKBX4WCgWqDf397g39/e4N/f46Df3+OubW1grm1tYK+ublsvrm5bMXAv1DFwL9QyMTEQsvGxj7FvrxOzsrJPMvHxklEGAD/RBgA/0QYAP9EGAD/RBgA/62ln7YiISFRIiEhUSIhIVEAAABVAAAAVQAAAFVCHAD/MAAA/zAAAP8vAAD/LwAA/z8lA/8jAwD/IwMA/yMDAP8jAwD/GgkA/xsJAP8bCQD/GwkA/xsJAP8UDQD/EAgA/xAIAP8AAABVAAAAVQAAAFUTEhJYAAAAVQAAAFUAAABVAAAAVQAAAFUAAABVIQYA/yEGAP8hBgD/IQYA/yEGAP+DgH9Wg4B/VoOAf1aDf399g39/fYN/f32Df3+Rg39/kbm1tYW5tbWFv7q6bMXAv1DFwL9QxcC/UMvFxD/LxcQ/y8XEP8vFxD9EGAD/RBgA/0QYAP9EGAD/RBgA/0QYAP9EGAD/IiEhUSIhIVEiISFRIyIiUCMiIlAjIiJQMQAA/zEAAP8xAAD/MQAA/0oeAP8kAwD/JAMA/yQDAP8kAwD/JAMA/xsJAP8bCQD/GwkA/xsJAP8bCQD/EAgA/xAIAP8QCAD/AAAAVQAAAFUAAABVAAAAVQAAAFUAAABVAAAAVQAAAFUAAABVAAAAVSEGAP8hBgD/IQYA/yEGAP8hBgD/g4B/VoOAf1aDgH9Wg4B/VoN/f3WDf3+Cg39/mIN/f5i5trWJuba1ib66unO+urpzxcC/UMXAv1DLxcQ/y8XEP8vFxD/LxcQ/y8XEP0QYAP9EGAD/RBgA/0QYAP9EGAD/RENDTkRDQ05EQ0NORENDTkRDQ04jIiJQIyIiUEUUAP9FFAD/RRQA/0oeAP9KHgD/Sh4A/yQDAP8kAwD/JAMA/yQDAP83JwT/NycE/zcnBP83JwT/NycE/xgLAP8YCwD/GAsA/wsFAP8LBQD/CwUA/wsFAP8AAABVAAAAVQAAAFUAAABVAAAAVQAAAFUiBQD/IgUA/yIFAP8iBQD/IgUA/4OAf1aDgH9Wg4B/VoOAf1aDf391g39/iIN/f5qDf3+auba1ibm2tYm8uLh+wr29ZcK9vWXFwcBZy8XEP8vFxD/LxcQ/y8XEP8TDwGrEw8BqLQAA/y0AAP8tAAD/LQAA/y0AAP9EQ0NORENDTkRDQ05EQ0NORENDTiMiIlBFFAD/RRQA/0UUAP9KHgD/Sh4A/yQCAP8kAgD/JAIA/yQCAP8kAgD/HAgA/xwIAP8cCAD/HAgA/xwIAP8YCwD/GAsA/xgLAP8LBQD/CwUA/wsFAP8LBQD/AAAAVQAAAFUAAABVAAAAVQAAAFUiBQD/IgUA/yIFAP8iBQD/IgUA/5OOjEODf39Zg39/WYN/f1mDf39Zg39/eIN/f46Df3+Og39/mrq4t4e6uLeHuri3h8G9vGvFwcBZxcHAWc/KyjfPyso3z8rKN8/KyjfEw8BqxMPAasTDwGotAAD/LQAA/y0AAP+JeWv/iXlr/wsAAL8LAAC/CwAAvwsAAL9DFAD/MgAA/zIAAP8yAAD/MgAA/zIAAP8kAgD/JAIA/yQCAP8kAgD/JAIA/xwIAP8cCAD/HAgA/xwIAP8cCAD/GAsA/xgLAP8YCwD/GAsA/xgLAP8YCwD/GAsA/wcDAPoHAwD6BwMA+gcDAPoHAwD6op2aQpCKh1uQiodbkIqHW5OOjEOTjoxDk46MQ4OAf1+DgH9fg39/bIN/f32Df3+Xg39/l4N/f5e6uLeJuri3ibq4t4m+u7t3xcHBW8XBwVvOysk3zsrJN87KyTfOysk3xMPAasTDwGrEw8BqvLm1hLy5tYS8ubWEiXlr/4l5a/+JeWv/CwAAvwsAAL9DFAD/QxQA/zIAAP8yAAD/MgAA/zIAAP8yAAD/JQEA/yUBAP8lAQD/JQEA/yUBAP8cCAD/HAgA/xwIAP8cCAD/HAgA/x0HAP8ZCgD/GQoA/xkKAP8ZCgD/GQoA/6qjn3cYCAD/GAgA/xgIAP8YCAD/op2aQqKdmkKRi4ddkYuHXZGLh12Ri4ddk46MQ4OAf2ODgH9jg4B/Y4N/f3CDf3+Eg39/mYN/f5mDf3+Zuri3ibq4t4m6uLeJvbq6f8TAwGDIxMNPyMTDT87JyTnOyck5zsnJOc7Pz0zOz89Mzs/PTMC+vHfAvrx3wL68d4l5a/+JeWv/iXlr/zgFAP9DFAD/QxQA/0MUAP85BAD/OQQA/1guEf9YLhH/MgAA/0coCv9HKAr/RygK/0coCv8rAAD/HQcA/x0HAP8dBwD/HQcA/x0HAP8dBwD/Sjwf/0o8H/8ZCgD/qqOfd6qjn3eqo593mpOOcpqTjnKak45yop2aQqKdmkKinZpCmZWVNpmVlTaZlZU2lpGRO5aRkTuWkZE7g39/Z4N/f2eDf391g39/kYN/f56Df3+eg39/nrq4t4m8urqEvLq6hLy6uoTCv79qyMTEUszHx0LOyck7zsnJO87JyTvOz89Mzs/PTM7Pz0zOz89Pzs/PT87Pz0/EzMp/xMzKf8TMyn/Dy8mEw8rJhsPKyYbDysmGOQQA/zkEAP8yAAD/MgAA/zIAAP/DyMeAw8jHgCYAAP8rAAD/KwAA/ysAAP8eBwD/HgcA/x0HAP8dBwD/HQcA/0o8H/9KPB//fnRj/6qjn3eqo593qqOfd66pqRyuqakcrqmpHKumph+rpqYfq6amH5mVlTaZlZU2mZWVNpaRkTuWkZE7hoKCZIaCgmSEgIBog39/fIN/f5aDf3+Wg39/noN/f567urqFu7q6hbu6uoW7urqFwL29dcXCwV/KxsVLzcjIP83IyD/NyMg/zcnJP8/Pz0rPz89Kz8/PSs/Pz0rPz89KyM7NccjOzXHIzs1xyM7NccPKyYbDysmGwMjGj8DIxo/AyMaPwMjGjsDIxo3AyMaNw8jHgMPIx4DDx8d9w8fGecPHxnnDx8Z5xcLCX8XCwl/FwcFYxcHBWMXBwVi/ubk6v7m5Or24uDa8trYxvLa2Mby2tjGuqakerqmpHq6pqR6rpqYgq6amIKumpiCZlZQ8mZWUPJmVlDyWkpJElpKSRIuHh1uGgoJkg39/c4N/f4eDf3+Yg39/mIN/f5iDf3+eu7q6hbu6uoW7urqFu7q6hb68vH3DwMBoycXFUczIyEPMyMhDzcnJP83JyT/Pz89Kz8/PSs/Pz0rPz89Kz8/PSsrPz2nKz89pys/PacrPz2nKz89mys/PZsDIxo/AyMaPwMjGj8TKyX7Eysl+wMjGjcPIx4DDyMeAxcjIdcXHx3LFx8dyxcfHcsfDw1XHw8NVx8LBTsfCwU7HwsFOv7m5Or+5uTq9uLgxvbi4Mby2tjG8trYxrqmoH66pqB+uqagfq6amIqumpiKrpqYimZSUQJmUlECZlJRAmZSUQI+Li1WLh4dbhYGBbYN/f3yDf3+Rg39/kYN/f5iDf3+Yg39/mLu6uoW7urqFvby7gL28u4C9vLuAwb+/ccfDw1vLx8dJzcnJP83JyT/Pyso6y8fGOtDPz0LQz89C0M/PQtDPz0LKz89pys/PacrPz2nKz89mys/PZsrPz2bAyMaPxszLdcbMy3XGzMt1xszLdcnMy2TGyMhqxsjIasbIyGrHx8dnx8fHZ8fHx2fHw8NQx8PDUMfCwkvHwsJLx8LCS7+6ujC/urowvri4Lr64uC6+uLguvLa2Ma6pqSGuqakhrqmpIaunpiSrp6Ykq6emJJiUlESYlJREmJSURJiUlESPi4tVioaGYoSAgHSDf3+Eg39/loN/f5aDf3+Wg39/mIN/f5i9vLuAvby7gL28u4C9vLuAvby7gL+9vXzEwcFnyMXFVM3JyELPyso6z8rKOsvHxjrQz84/0M/OP9DPzj/Qz84/0c7OO8zPz1/Mz89fzM/PX8zPz1/Mz89fzM/PX8jMzGvIzMxryMzMa8nMy2TJzMtkyczLZMjIyGTIyMhkyMjHYcjIx2HIyMdhyMPDScjDw0nHwsJGx8LCRsfCwka/ubkwv7m5ML24uCy9uLgsvbi4LL24uCytqagkramoJK2pqCStqagkq6emJKGcnDqblpZFm5aWRZeTk0qTj49QkIyMV4mFhWmEgIB7g39/kIN/f5CDf3+Wg39/loN/f5aDf3+Wvby7gL28u4C9vLuAvLy8hLy8vIS8vLyEwb+/csXDw2HKx8ZOzsrJP83JyTrLx8Y6y8fGOtHOzjvRzs470c7OO9HOzj3Nz89Xzc/PV83Pz1fNz89Xzc/PV87PzkzJzMxlyczMZcnMzGXJzMxlyczLZMnIyFzJyMhcycjIXMnIx1rJyMdaycjHWsjDw0XIw8NFx8LBQcfCwUHHwsFBv7m5Lb+5uS29t7cpvbe3Kb23tym0r64iraioKK2oqCitqKgoraioKKSgnzWhnJw6nZmZQZuWlkWXk5NMk4+PVI6KimGGg4J2g39/hoN/f5yDf3+cg39/nIN/f5aDf3+Wg39/lr28u4C8vLyEvLy8hLy8vIS8vLyEvLy8hL++vXzCwMBuxsTDX8vIx0nOyso9zcnJOc/LyznRzc050c7OO9HOzjvRzs490c7OPc7Pz1DOz89Qzs/PUM7PzkzOzs5Ozc3NUMrMzFzKzMxcyszLXcrMy13KzMtdysjIVcrIyFXKyMdTysjHU8rIx1PIwsJAyMLCQMfBwT3HwcE9x8HBPb65uSu+ubkrvbe3J723tye0r64itK+uIrSvriKuqakqrKenK6ynpyukoJ81oZycOp2ZmUGalpZIlpKSUpKOjV2Lh4ZuhYGBg4N/f5KDf3+Sg39/nIN/f5yDf3+cg39/nIN/f5a8vLyEvLy8hLy8vIS8vLyEvLy8hL++vXy/vr18wL+/d8PBwWvIxcVYzMjISM7Kyj3Py8s5zsrKOdHOzTnRzs470c7OPdHOzj3Qzs5Az8/OSs7PzkzOz85Mzs7OTs3NzVDNzc1RzMzMVMvMy1XLzMtVzMrKTMzJyUrLyMhOy8fHTMvHx0zJw8M7ycPDO8jCwjvGwcA4xsHAOMK9vC7Auroqvri4KLy3tia8t7YmtrGxI7SvriK0r64irqmpKqunpi6oo6MypJ+fOKCcm0CcmJhJmZSUU5WQkFyPi4toiISEeoSAgIuEgICLg39/koN/f5KDf3+cg39/nIN/f5yDf3+cvLy8hLy8vIS8vLyEvLy8hL++vXy/vr18wL+/d8C/v3fCwcBuxMLCacrGxlHMyMhHzsrKPcnGxTvPy8s50c7NOtHOzjzQzs4+0M7OQM3Ly0XPzs5Hzs7OTM7Ozk7Nzc1Qzc3NUczMzE/My8tOzMvKTszKykzMyclKzMjISMvHx0XLx8dFysTEOsnDwzvHwcE3xsDANMS+vjHCvbwuwLq6Kr64uCe7trUkuLOzI7axsSOzrq4lsaysKK6pqS2rpqYxp6OiNaOenj2fmppIm5eWU5eTk1uTj49li4eHeoeDg4mHg4OJhICAi4SAgIuDf3+Sg39/koN/f5yDf3+cg39/nLy8vIS8vLyEvLy8hL++vXy/vr18wL+/d8C/v3fCwcBuwsHAbsHAv3TFw8NkycbGU8zIyEbOyso+zMjIO8/LyzjRzc060M7NPNDOzj7Qzs0/0M7NQM/NzUPPzc1Ezs3MRc7MzEbOy8tFzsvLRc3KykXNyclEzcnIQ8zIx0HMx8ZAw729QcrExDrIw8I2xsHAM8W/vzDDvb0twby7Kr+5uSe9t7cmurW1JLiysiS1sLAms66tKLCrqyytqKgxqqWlNaahoTyhnZ1GnpmZUJiTk1uUkJBnj4uLd4mFhYyJhYWMh4ODiYeDg4mEgICLhICAi4N/f5KDf3+Sg39/nIN/f5y8vLyEvLy8hL++vXy/vr18wL+/d8C/v3fCwcBuwsHAbsHAv3TBwL90wL+/esbDw2HJxsZTzMjIR8fDw0LNyck90MzMONDNzTjQzc060M3NO8/MzDzQzc0+z83MQM/MzEDPzMtBzsvLQM7KykDOyspBzcnJQM3IxzvMx8Y5y8bFN8rFxDfCvLw5x8LBM8bAwDDEv74uwr28K8C7uim+ubgnvLe2Jrq0tCa3srIntK+vKrKtrC2uqqkypaCgO6ijozykn59Fn5qaTpyXl1yYk5Nnk4+Pc4yIiIKMiIiCiYWFjImFhYyHg4OJh4ODiYSAgIuEgICLg39/koN/f5KDf3+cvLy8hL++vXy/vr18wL+/d8C/v3fCwcBuwsHAbsHAv3TBwL90wL+/esC/v3rAv795xcPCY8jFxVTLx8dJzcnJQs/KyjvQy8s40MzLN8/LyzjJxcU7ycbFO8/MyzrPy8s7z8vLO87KyjvOyck6zsnJPM3IyDvMx8c2y8bFNMrExDPJw8Mxxb+/NsG7uzLFv78uw729K8G8uym/urkovLe3KLm0sym4s7MptbCwLLOuri+wq6szo5+ePaqlpT2moaFFoZ2cTZ6ZmVialZVnlZGRdJCMjH6QjIx+jIiIgoyIiIKJhYWMiYWFjIeDg4mHg4OJhICAi4SAgIuDf3+Sg39/kr++vXy/vr18wL+/d8C/v3fCwcBuwsHAbsHAv3TBwL90wL+/esC/v3rAv795wL+/ecC/vnjEwsFnx8TDXMnFxVHMyMdGzsnJPc/KyjjPy8o3zsrJN87JyTbPy8o2z8rKN8/KyjbMx8c3x8LCOM3IyDXNx8c2zMbGNLy3tze0r644x8LCLcfCwTDBu7sxtbCwMsG7uyvAuropvri4Kby2tiqxrKwvs66uMLSvrzOxrKw3rqmpOqumpkCoo6NIpJ+fT5+ammCblpZsl5OSdpKOjoOSjo6DkIyMfpCMjH6MiIiCjIiIgomFhYyJhYWMh4ODiYeDg4mEgICLhICAi4N/f5K/vr18wL+/d8C/v3fCwcBuwsHAbsHAv3TBwL90wL+/esC/v3rAv795wL+/ecC/vnjAv754vr29fcLAwG7FwsFjxsLCWMnFxU7Lx8ZEzcjIPM7JyTjMx8c3zsnJNc7JyTXOyMg0zsjIM83HxzLMx8YyzMbGMsvGxTLJw8Mux8HBLsbAwC3GwMAuxL++LcK9vSzAu7ssvrm5Lby3ty66tbQwt7KyMrWwrzeyra08r6qqQaynp0ioo6NRpJ+fW5+ammicl5dymJSTfJSQj4iUkI+Iko6Og5KOjoOQjIx+kIyMfoyIiIKMiIiCiYWFjImFhYyHg4OJh4ODiYSAgIuEgICLwL+/d8C/v3fCwcBuwsHAbsHAv3TBwL90wL+/esC/v3rAv795wL+/ecC/vnjAv754vr29fb69vX2+vb18wb++c8K/v23EwcBlx8PDVcnExEzKxcVFy8XFQcfCwj7MxsY3zMbGNcvGxTTLxcUzysTEMsrExDLKxMQyyMLCMcW/vzHDvb0wwLu6MMG7uzDAu7owvrm4M7y3tjW6tLQ4t7KyO7Svr0CyrKxFr6qqSqunplGoo6NZpJ+fY5+bm3CcmJh6mZWVgZmVlYGUkI+IlJCPiJSQj4iSjo6Dko6Og5CMjH6QjIx+jIiIgoyIiIKJhYWMiYWFjIeDg4mHg4OJhICAi8C/v3fCwcBuwsHAbsHAv3TBwL90wL+/esC/v3rAv795wL+/ecC/vnjAv754vr29fb69vX2+vb18vr29fMG/vnO+vLx7wL29dcG+vm3EwMBgxsHBWMbCwVLCvbxNycPDRsnDw0HIwsI+yMLCPMfBwTrGwcE4xcC/OcS/vjjDvr05wry8OsC7ujq+ubk7vLe3O7u2tj65tLNCt7KxRLSvr0mxrKxPrKenVKunplqoo6NhpKCfbKSgn2ydmJiDmpaWiJqWloiZlZWBlJCPiJSQj4iUkI+IlJCPiJKOjoOSjo6DkIyMfpCMjH6MiIiCjIiIgomFhYyJhYWMh4ODiYeDg4nCwcBuwsHAbsHAv3TBwL90wL+/esC/v3rAv795wL+/ecC/vnjAv754vr29fb69vX2+vb18vr29fL69vXy+vLx7vry8e7y6uoO8urqAvru7eMG9vWzCvr5kw7++Xru2tljFv79SxcC/TMS/v0rEvr5Hw76+RcO9vUTBvLtFwLq6Rr+5uUa9uLhHvLa2SLq0tEq4s7NMtrGwULSurlOxrKtYrqmpXaumpmWno6JtpJ+fdqCbm4KdmJiMm5eXjZuXl42alpaImpaWiJmVlYGUkI+IlJCPiJSQj4iUkI+Iko6Og5KOjoOQjIx+kIyMfoyIiIKMiIiCiYWFjImFhYyHg4OJwsHAbsHAv3TBwL90wL+/esC/v3rAv795wL+/ecC/vnjAv754vr29fb69vX2+vb18vr29fL69vXy+vLx7vry8e7y6uoO8urqDvLq6gL67u3jBvb1svbq5e766unW/u7tswby8Y8G8vF7Bu7tbwLu7V8C6ulW/urlUvrm4VL23t1S7trZVurW1Vrizs1i2sbFata+vXLKtrWCvq6plraioaqqlpXKmoaF8o56ehaOenoWgm5uCnZiYjJuXl42bl5eNm5eXjZqWloialpaIlJCPiJSQj4iUkI+IlJCPiJSQj4iSjo6Dko6Og5CMjH6QjIx+jIiIgoyIiIKJhYWMiYWFjMHAv3TBwL90wL+/esC/v3rAv795wL+/ecC/vnjAv754vr29fb69vX2+vb18vr29fL69vXy+vb18vry8e7y6uoO8urqDvLq6g7y6uoC+u7t4vbq5e726uXu5traIure2gru3t3q7t7d4vbi4bry3tm28trZou7a1Z7q1tWW5tLRluLOzZbaxsWe1r69qs66ua7GsrG+uqqlyq6amfKiko4CloaGIpaGhiKOenoWjnp6FoJubgp2YmIybl5eNm5eXjZuXl42bl5eNmpaWiJqWloiUkI+IlJCPiJSQj4iUkI+IlJCPiJKOjoOSjo6DkIyMfpCMjH6MiIiCjIiIgomFhYzBwL90wL+/esC/v3rAv795wL+/ecC/vnjAv754vr29fb69vX2+vb18vr29fL69vXy+vb18vry8e7y6uoO8urqDvLq6g7y6uoO8urqAvbq5e726uXu5traIuba2iLq3toK7t7d6u7e3eL24uG68t7Ztt7KyfraxsX22sLB8ta+vfLOurnyyra1+sKurgK+qqoGvqqqBrqqpcqumpnyopKOApaGhiKWhoYijnp6Fo56ehaOenoWdmJiMm5eXjZuXl42bl5eNm5eXjZuXl42alpaIlJCPiJSQj4iUkI+IlJCPiJSQj4iUkI+Iko6Og5KOjoOQjIx+kIyMfoyIiIKMiIiCwL+/esC/v3rAv795wL+/ecC/vnjAv754vr29fb69vX2+vb18vr29fL69vXy+vb18vr29fLy6uoO8urqDvLq6g7y6uoO8urqDvLq6gL26uXu5traIuba2iLm2toi6t7aCu7e3eru3t3i9uLhut7Kyfreysn62sbF9trCwfLWvr3yzrq58sq2tfrCrq4CvqqqBr6qqga6qqXKrpqZ8qKSjgKWhoYiloaGIpaGhiKOenoWjnp6FnZiYjJuXl42bl5eNm5eXjZuXl42bl5eNm5eXjZqWloiUkI+IlJCPiJSQj4iUkI+IlJCPiJSQj4iSjo6Dko6Og5CMjH6QjIx+jIiIgg==";var Cm=ar,Nm=Si,Rm={skin:ml,feat:gl,hair0:yl,hair1:xl,body:Ml,cap:vl},Ba={};try{Ba={0:new URL("./miiMaleBody.glb",import.meta.url).href,1:new URL("./miiFemaleBody.glb",import.meta.url).href}}catch{Ba={}}var _l=new WeakMap,wl=null,Oa=null;async function Im(i){if(!i)throw new Error("fflResBuffer is required");let t=i instanceof Uint8Array?i:new Uint8Array(i),e=_l.get(t);if(!e){let n=t.length+":"+t[4]+":"+t[1e3]+":"+t[t.length-1];Oa&&wl===n?e=Oa:(e=await fl(t,Rm,{glb:Ba}),wl=n,Oa=e),_l.set(t,e)}return e}var Fa=class i{constructor(t){this._d=t}static async create(t){return new i(Zi.fromBytes(t))}static async random(t=Math.random){let e=new Uint8Array(74),n=(r,o,a)=>{for(let c=0;c<o;c++){let l=r+c,h=a>>o-1-c&1,d=128>>(l&7);e[l>>3]=e[l>>3]&~d|(h?d:0)}};for(let[r,[o,a]]of Object.entries(Si)){let c=En[r];c&&n(c[0],c[1],o+Math.floor(t()*(a-o+1)))}n(192,3,4);let s="Mii";for(let r=0;r<s.length;r++)e[2+r*2]=0,e[3+r*2]=s.charCodeAt(r),e[54+r*2]=0,e[55+r*2]=s.charCodeAt(r);return i.create(e)}get(t){return this._d.get(t)}set(t,e){this._d.set(t,e)}async encode(t){if(t!==ar.RCD)throw new Error("Unsupported format: "+t);return this._d.bytes()}async render(t,e={}){let n=await Im(e.fflResBuffer),s=e.size||512,r=e.ss??2;for(;r>1&&s*r>3072;)r--;let o=await n.render(this._d.params(),{size:s*r,maskRes:e.maskRes?Math.min(2048,e.maskRes*(r>1,1)):void 0,full:!!t,colors:pl,...e.debug||{}});if(r>1){let a=document.createElement("canvas");a.width=a.height=s;let c=a.getContext("2d");c.imageSmoothingEnabled=!0,c.imageSmoothingQuality="high";let l=o,h=s*r;for(;h>s*2;){let d=document.createElement("canvas");h=Math.max(s,Math.round(h/2)),d.width=d.height=h;let A=d.getContext("2d");A.imageSmoothingQuality="high",A.drawImage(l,0,0,h,h),l=d}c.drawImage(l,0,0,s,s),o=a}return typeof e.onCanvas=="function"&&e.onCanvas(o),o}},xg={Mii:Fa,MiiFormats:Cm,MiiRanges:Nm};export{Fa as Mii,Cm as MiiFormats,Nm as MiiRanges,xg as default};
