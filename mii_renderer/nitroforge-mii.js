var Pn={gender:[1,1],birthMonth:[2,4],birthday:[6,5],favoriteColor:[11,4],favorited:[15,1],height:[176,8],weight:[184,8],faceType:[256,3],faceColor:[259,3],feature:[262,4],mingleBit:[269,1],hairType:[272,7],hairColor:[279,3],hairFlipped:[282,1],eyebrowType:[288,5],eyebrowRotation:[294,4],eyebrowColor:[304,3],eyebrowSize:[307,4],eyebrowY:[311,5],eyebrowDistanceApart:[316,4],eyeType:[320,6],eyeRotation:[328,3],eyeYPosition:[331,5],eyeColor:[336,3],eyeSize:[340,3],eyeDistanceApart:[343,4],noseType:[352,4],noseSize:[356,4],noseYPosition:[360,5],mouthType:[368,5],mouthColor:[373,2],mouthSize:[375,4],mouthYPosition:[379,5],glassesType:[384,4],glassesColor:[388,3],glassesSize:[392,3],glassesYPosition:[395,5],mustacheType:[400,2],beardType:[402,2],beardColor:[404,3],mustacheSize:[407,4],mustacheYPosition:[411,5],moleOn:[416,1],moleSize:[417,4],moleYPosition:[421,5],moleXPosition:[426,5]},Di={gender:[0,1],favoriteColor:[0,11],height:[0,127],weight:[0,127],faceType:[0,7],faceColor:[0,5],feature:[0,11],hairType:[0,71],hairColor:[0,7],hairFlipped:[0,1],eyebrowType:[0,23],eyebrowRotation:[0,11],eyebrowColor:[0,7],eyebrowSize:[0,8],eyebrowY:[3,18],eyebrowDistanceApart:[0,12],eyeType:[0,47],eyeRotation:[0,7],eyeYPosition:[0,18],eyeColor:[0,5],eyeSize:[0,7],eyeDistanceApart:[0,12],noseType:[0,11],noseSize:[0,8],noseYPosition:[0,18],mouthType:[0,23],mouthColor:[0,2],mouthSize:[0,8],mouthYPosition:[0,18],glassesType:[0,8],glassesColor:[0,5],glassesSize:[0,7],glassesYPosition:[0,20],mustacheType:[0,3],beardType:[0,3],beardColor:[0,7],mustacheSize:[0,8],mustacheYPosition:[0,16],moleOn:[0,1],moleSize:[0,8],moleYPosition:[0,30],moleXPosition:[0,16],birthMonth:[0,12],birthday:[0,31]},Ql=[0,194,266,267,268,270,283,284,285,286,287,293,298,299,300,301,302,303,326,327,339,347,348,349,350,351,365,366,367,431],lr=[0,1,2,3,4,5,6,7,0,4,3,5,4,4,6,2,0,6,4,3,2,2,7,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,4,4,4,4,4,4,4,0,0,4,4,4,4,4,4,0,0,0,4,4,4,4,4,4,5,5,5,4,4,4,4,4,4,4,5,7,5,7,7,7,7,7,6,7,7,7,7,7,3,7,7,7,7,7,0,4,4,4,4],Vl=[0,2,2,2,1,3,2,3,0,1,2,3,4,5,2,2,4,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,4,4,4,4,4,4,4,1,0,4,4,4,4,4,4,4,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,3,3,3,3,3,3,3,3,2,2,3,3,3,3,2,2,2,2,2,1,1,1,1,1,1],Kl=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,2,0,0,0,2,0,0,0,0,0,0,1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],Yl=[0,1,1,1,5,1,1,4,0,5,1,1,3,5,1,2,3,4,5,4,2,2,4,4,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0,0,0,5,5,5,5,5,5,0,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,1,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5],jl=[0,1,2,3,4,5,0,1,5,5],hr=i=>i===0?8:i,Jl=i=>8+i,Xl=i=>19+i,Zl=i=>i===0?8:13+i,$l=[[0,0],[0,1],[0,6],[0,9],[5,0],[2,0],[3,0],[7,0],[8,0],[0,10],[9,0],[11,0]],th=["0","6",5,6,"6",4,7,7,8,10,"6",11],eh=[0,1,1,2,1,1,2,2,2,3,9,9];function nh(i,t){let e=th[i],n=eh[t],s=Number(e),r=Number(n);return typeof e!="string"?Number.isFinite(s)?s:0:r>0?r:Number.isFinite(s)?s:0}var es={hairColor:[lr,hr],eyebrowColor:[lr,hr],beardColor:[lr,hr],eyeColor:[Vl,Jl],mouthColor:[Kl,Xl,2],glassesColor:[Yl,Zl],faceColor:[jl,i=>i]},dr={RCD:"rcd"},$e=(i,t,e)=>{let n=0;for(let s=t;s<t+e;s++)n=n<<1|i[s>>3]>>7-(s&7)&1;return n},Dn=(i,t,e,n)=>{for(let s=0;s<e;s++){let r=t+s,a=n>>e-1-s&1,o=128>>(r&7);i[r>>3]=i[r>>3]&~o|(a?o:0)}};function ur(i,t){let e="";for(let n=0;n<10;n++){let s=i[t+n*2]<<8|i[t+n*2+1];if(!s)break;e+=String.fromCharCode(s)}return e}function fr(i,t,e){for(let s=0;s<20;s++)i[t+s]=0;let n=Math.min(10,e.length);for(let s=0;s<n;s++){let r=e.charCodeAt(s);i[t+s*2]=r>>8,i[t+s*2+1]=r&255}}var ns=class i{constructor(t){this.raw=t,this.ff=0,this.mk=0,this.featDirty=!1,[this.ff,this.mk]=$l[$e(t,262,4)],this.permCopying=void 0}static fromBytes(t){if(t instanceof Uint8Array||(t=new Uint8Array(t)),t.length<74)throw new Error("Could not find any decodeable formats: ");let e=t.slice(0,74);for(let[s,[r,a]]of Object.entries(Pn)){if(s==="mingleBit")continue;let o=Di[s];if(!o)continue;let c=$e(e,r,a);if(c<o[0]||c>o[1])throw new Error("Could not find any decodeable formats: ")}if($e(e,391,1))throw new Error("Could not find any decodeable formats: ");let n=$e(e,192,3);for(let s of Ql)Dn(e,s,1,0);Dn(e,192,3,n===2?2:n===6?6:4);for(let s of[2,54]){let r=ur(e,s);fr(e,s,r)}return new i(e)}_chk(t,e){let n=Di[t];if(n&&(!Number.isInteger(e)||e<n[0]||e>n[1]))throw new RangeError(t+" out of range: "+e)}get(t){let e=this.raw;t=String(t);let n=t.lastIndexOf(".");if((t.startsWith("general.")||t.startsWith("meta.")||t.startsWith("perms."))&&(t=t.slice(n+1)),t==="name")return ur(e,2);if(t==="creatorName")return ur(e,54);if(t==="mingle")return!$e(e,269,1);if(t==="copying")return this.permCopying;if(t==="faceFeature")return this.ff;if(t==="makeup")return this.mk;if(t==="mole.on"&&(t="moleOn"),t==="eyebrowYPosition")return $e(e,311,5)-3;let s=Pn[t];if(!s)return;let r=$e(e,s[0],s[1]);return es[t]?es[t][1](r):t==="hairFlipped"||t==="moleOn"||t==="favorited"?!!r:r}set(t,e){let n=this.raw;if(t=String(t),(t.startsWith("general.")||t.startsWith("meta.")||t.startsWith("perms."))&&(t=t.slice(t.lastIndexOf(".")+1)),t==="name"){fr(n,2,String(e));return}if(t==="creatorName"){fr(n,54,String(e));return}if(t==="mingle"){Dn(n,269,1,e?0:1);return}if(t==="copying"){this.permCopying=!!e;return}if(t==="faceFeature"){this.ff=Number(e),this._chk("feature",this.ff),this._syncFeat();return}if(t==="makeup"){this.mk=Number(e),this._chk("feature",this.mk),this._syncFeat();return}if(t==="mole.on"&&(t="moleOn"),t==="eyebrowYPosition"){let a=Number(e)+3;this._chk("eyebrowY",a),Dn(n,311,5,a);return}let s=Pn[t];if(!s)return;let r=e;if(typeof r=="boolean"?r=r?1:0:r=Number(r),es[t]){let[a,,o]=es[t],c=a[r];if(c===void 0)throw new RangeError(t+" out of range");o!==void 0&&c>o&&(c=0),r=c}this._chk(t,r),Dn(n,s[0],s[1],r)}_syncFeat(){Dn(this.raw,262,4,nh(this.ff,this.mk))}bytes(){let t=this.raw.slice();return $e(t,192,3)===2&&Dn(t,269,1,1),t}params(){let t=n=>$e(this.raw,Pn[n][0],Pn[n][1]),e={};return e.gender=t("gender"),e.favColor=t("favoriteColor"),e.height=t("height"),e.weight=t("weight"),e.faceType=t("faceType"),e.faceColor=t("faceColor"),e.feature=t("feature"),e.hairType=t("hairType"),e.hairColor=t("hairColor"),e.hairFlip=t("hairFlipped"),e.browType=t("eyebrowType"),e.browRot=t("eyebrowRotation"),e.browColor=t("eyebrowColor"),e.browSize=t("eyebrowSize"),e.browY=t("eyebrowY"),e.browDist=t("eyebrowDistanceApart"),e.eyeType=t("eyeType"),e.eyeRot=t("eyeRotation"),e.eyeY=t("eyeYPosition"),e.eyeColor=t("eyeColor"),e.eyeSize=t("eyeSize"),e.eyeDist=t("eyeDistanceApart"),e.noseType=t("noseType"),e.noseSize=t("noseSize"),e.noseY=t("noseYPosition"),e.mouthType=t("mouthType"),e.mouthColor=t("mouthColor"),e.mouthSize=t("mouthSize"),e.mouthY=t("mouthYPosition"),e.glassType=t("glassesType"),e.glassColor=t("glassesColor"),e.glassSize=t("glassesSize"),e.glassY=t("glassesYPosition"),e.mustType=t("mustacheType"),e.beardType=t("beardType"),e.beardColor=t("beardColor"),e.mustSize=t("mustacheSize"),e.mustY=t("mustacheYPosition"),e.moleOn=t("moleOn"),e.moleSize=t("moleSize"),e.moleY=t("moleYPosition"),e.moleX=t("moleXPosition"),e}};var ih=0,ra=1,sh=2;var Ec=1,rh=2,on=3,vn=0,De=1,re=2;var xn=0,pi=1,oa=2,aa=3,ca=4,oh=5,zn=100,ah=101,ch=102,la=103,ha=104,lh=200,hh=201,uh=202,fh=203,Qr=204,Vr=205,dh=206,Ah=207,ph=208,mh=209,gh=210,yh=211,xh=212,Mh=213,vh=214,_h=0,wh=1,bh=2,Ts=3,Sh=4,Th=5,Eh=6,Dh=7,Dc=0,Ph=1,Lh=2,Mn=0,Ch=1,Nh=2,Rh=3,Ih=4,zh=5,Uh=6;var Pc=300,yi=301,xi=302,Kr=303,Yr=304,js=306,Ui=1e3,ke=1001,_n=1002,pe=1003,ua=1004;var Ar=1005;var Se=1006,Oh=1007;var Oi=1008;var Je=1009,Bh=1010,Fh=1011,Eo=1012,Lc=1013,gn=1014,yn=1015,Bi=1016,Cc=1017,Nc=1018,On=1020,kh=1021,Ne=1023,qh=1024,Hh=1025,Bn=1026,Mi=1027,Gh=1028,Rc=1029,Wh=1030,Ic=1031,zc=1033,pr=33776,mr=33777,gr=33778,yr=33779,fa=35840,da=35841,Aa=35842,pa=35843,Uc=36196,ma=37492,ga=37496,ya=37808,xa=37809,Ma=37810,va=37811,_a=37812,wa=37813,ba=37814,Sa=37815,Ta=37816,Ea=37817,Da=37818,Pa=37819,La=37820,Ca=37821,xr=36492,Na=36494,Ra=36495,Qh=36283,Ia=36284,za=36285,Ua=36286;var Es=2300,Ds=2301,Mr=2302,Oa=2400,Ba=2401,Fa=2402;var Oc=3e3,Fn=3001,Vh=3200,Kh=3201,Bc=0,Yh=1,le="",me="srgb",He="srgb-linear",Do="display-p3",Js="display-p3-linear",Ps="linear",Jt="srgb",Ls="rec709",Cs="p3";var Jn=7680;var ka=519,jh=512,Jh=513,Xh=514,Fc=515,Zh=516,$h=517,tu=518,eu=519,qa=35044;var Ha="300 es",jr=1035,cn=2e3,Ns=2001,wn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var vr=Math.PI/180,Jr=180/Math.PI;function Wi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xe[i&255]+xe[i>>8&255]+xe[i>>16&255]+xe[i>>24&255]+"-"+xe[t&255]+xe[t>>8&255]+"-"+xe[t>>16&15|64]+xe[t>>24&255]+"-"+xe[e&63|128]+xe[e>>8&255]+"-"+xe[e>>16&255]+xe[e>>24&255]+xe[n&255]+xe[n>>8&255]+xe[n>>16&255]+xe[n>>24&255]).toLowerCase()}function Ee(i,t,e){return Math.max(t,Math.min(e,i))}function nu(i,t){return(i%t+t)%t}function _r(i,t,e){return(1-e)*i+e*t}function Ga(i){return(i&i-1)===0&&i!==0}function Xr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Pi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Qt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ot=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],A=n[7],d=n[2],p=n[5],x=n[8],g=s[0],f=s[3],h=s[6],m=s[1],y=s[4],w=s[7],v=s[2],S=s[5],_=s[8];return r[0]=a*g+o*m+c*v,r[3]=a*f+o*y+c*S,r[6]=a*h+o*w+c*_,r[1]=l*g+u*m+A*v,r[4]=l*f+u*y+A*S,r[7]=l*h+u*w+A*_,r[2]=d*g+p*m+x*v,r[5]=d*f+p*y+x*S,r[8]=d*h+p*w+x*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],A=u*a-o*l,d=o*c-u*r,p=l*r-a*c,x=e*A+n*d+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/x;return t[0]=A*g,t[1]=(s*l-u*n)*g,t[2]=(o*n-s*a)*g,t[3]=d*g,t[4]=(u*e-s*c)*g,t[5]=(s*r-o*e)*g,t[6]=p*g,t[7]=(n*c-l*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(wr.makeScale(t,e)),this}rotate(t){return this.premultiply(wr.makeRotation(-t)),this}translate(t,e){return this.premultiply(wr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},wr=new Ot;function kc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Rs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function iu(){let i=Rs("canvas");return i.style.display="block",i}var Wa={};function Ii(i){i in Wa||(Wa[i]=!0,console.warn(i))}var Qa=new Ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Va=new Ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),is={[He]:{transfer:Ps,primaries:Ls,toReference:i=>i,fromReference:i=>i},[me]:{transfer:Jt,primaries:Ls,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Js]:{transfer:Ps,primaries:Cs,toReference:i=>i.applyMatrix3(Va),fromReference:i=>i.applyMatrix3(Qa)},[Do]:{transfer:Jt,primaries:Cs,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Va),fromReference:i=>i.applyMatrix3(Qa).convertLinearToSRGB()}},su=new Set([He,Js]),Vt={enabled:!0,_workingColorSpace:He,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!su.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=is[t].toReference,s=is[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return is[i].primaries},getTransfer:function(i){return i===le?Ps:is[i].transfer}};function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function br(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Xn,Is=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xn===void 0&&(Xn=Rs("canvas")),Xn.width=t.width,Xn.height=t.height;let n=Xn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Xn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Rs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=mi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mi(e[n]/255)*255):e[n]=mi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ru=0,zs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ru++}),this.uuid=Wi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Sr(s[a].image)):r.push(Sr(s[a]))}else r=Sr(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Sr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Is.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ou=0,Re=class i extends wn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ke,s=ke,r=Se,a=Oi,o=Ne,c=Je,l=i.DEFAULT_ANISOTROPY,u=le){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=Wi(),this.name="",this.source=new zs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Qt(0,0),this.repeat=new Qt(1,1),this.center=new Qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Ii("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Fn?me:le),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ui:t.x=t.x-Math.floor(t.x);break;case ke:t.x=t.x<0?0:1;break;case _n:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ui:t.y=t.y-Math.floor(t.y);break;case ke:t.y=t.y<0?0:1;break;case _n:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ii("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===me?Fn:Oc}set encoding(t){Ii("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Fn?me:le}};Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=Pc;Re.DEFAULT_ANISOTROPY=1;var ge=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],A=c[8],d=c[1],p=c[5],x=c[9],g=c[2],f=c[6],h=c[10];if(Math.abs(u-d)<.01&&Math.abs(A-g)<.01&&Math.abs(x-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(A+g)<.1&&Math.abs(x+f)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,w=(p+1)/2,v=(h+1)/2,S=(u+d)/4,_=(A+g)/4,P=(x+f)/4;return y>w&&y>v?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=S/n,r=_/n):w>v?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=S/s,r=P/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=_/r,s=P/r),this.set(n,s,r,e),this}let m=Math.sqrt((f-x)*(f-x)+(A-g)*(A-g)+(d-u)*(d-u));return Math.abs(m)<.001&&(m=1),this.x=(f-x)/m,this.y=(A-g)/m,this.z=(d-u)/m,this.w=Math.acos((l+p+h-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zr=class extends wn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(Ii("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Fn?me:le),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Se,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Re(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new zs(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ln=class extends Zr{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Us=class extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pe,this.minFilter=pe,this.wrapR=ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $r=class extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pe,this.minFilter=pe,this.wrapR=ke,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ge=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],A=n[s+3],d=r[a+0],p=r[a+1],x=r[a+2],g=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=A;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=x,t[e+3]=g;return}if(A!==g||c!==d||l!==p||u!==x){let f=1-o,h=c*d+l*p+u*x+A*g,m=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){let v=Math.sqrt(y),S=Math.atan2(v,h*m);f=Math.sin(f*S)/v,o=Math.sin(o*S)/v}let w=o*m;if(c=c*f+d*w,l=l*f+p*w,u=u*f+x*w,A=A*f+g*w,f===1-o){let v=1/Math.sqrt(c*c+l*l+u*u+A*A);c*=v,l*=v,u*=v,A*=v}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=A}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],A=r[a],d=r[a+1],p=r[a+2],x=r[a+3];return t[e]=o*x+u*A+c*p-l*d,t[e+1]=c*x+u*d+l*A-o*p,t[e+2]=l*x+u*p+o*d-c*A,t[e+3]=u*x-o*A-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),A=o(r/2),d=c(n/2),p=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=d*u*A+l*p*x,this._y=l*p*A-d*u*x,this._z=l*u*x+d*p*A,this._w=l*u*A-d*p*x;break;case"YXZ":this._x=d*u*A+l*p*x,this._y=l*p*A-d*u*x,this._z=l*u*x-d*p*A,this._w=l*u*A+d*p*x;break;case"ZXY":this._x=d*u*A-l*p*x,this._y=l*p*A+d*u*x,this._z=l*u*x+d*p*A,this._w=l*u*A-d*p*x;break;case"ZYX":this._x=d*u*A-l*p*x,this._y=l*p*A+d*u*x,this._z=l*u*x-d*p*A,this._w=l*u*A+d*p*x;break;case"YZX":this._x=d*u*A+l*p*x,this._y=l*p*A+d*u*x,this._z=l*u*x-d*p*A,this._w=l*u*A-d*p*x;break;case"XZY":this._x=d*u*A-l*p*x,this._y=l*p*A-d*u*x,this._z=l*u*x+d*p*A,this._w=l*u*A+d*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],A=e[10],d=n+o+A;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>A){let p=2*Math.sqrt(1+n-o-A);this._w=(u-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>A){let p=2*Math.sqrt(1+o-n-A);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+A-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,o),A=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=a*A+this._w*d,this._x=n*A+this._x*d,this._y=s*A+this._y*d,this._z=r*A+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ka.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ka.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),A=2*(r*n-a*e);return this.x=e+c*l+a*A-o*u,this.y=n+c*u+o*l-r*A,this.z=s+c*A+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Tr.copy(this).projectOnVector(t),this.sub(Tr)}reflect(t){return this.sub(Tr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Tr=new U,Ka=new Ge,kn=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Oe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Oe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Oe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Oe):Oe.fromBufferAttribute(r,a),Oe.applyMatrix4(t.matrixWorld),this.expandByPoint(Oe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ss.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ss.copy(n.boundingBox)),ss.applyMatrix4(t.matrixWorld),this.union(ss)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Oe),Oe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Li),rs.subVectors(this.max,Li),Zn.subVectors(t.a,Li),$n.subVectors(t.b,Li),ti.subVectors(t.c,Li),fn.subVectors($n,Zn),dn.subVectors(ti,$n),Ln.subVectors(Zn,ti);let e=[0,-fn.z,fn.y,0,-dn.z,dn.y,0,-Ln.z,Ln.y,fn.z,0,-fn.x,dn.z,0,-dn.x,Ln.z,0,-Ln.x,-fn.y,fn.x,0,-dn.y,dn.x,0,-Ln.y,Ln.x,0];return!Er(e,Zn,$n,ti,rs)||(e=[1,0,0,0,1,0,0,0,1],!Er(e,Zn,$n,ti,rs))?!1:(os.crossVectors(fn,dn),e=[os.x,os.y,os.z],Er(e,Zn,$n,ti,rs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Oe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Oe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(tn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},tn=[new U,new U,new U,new U,new U,new U,new U,new U],Oe=new U,ss=new kn,Zn=new U,$n=new U,ti=new U,fn=new U,dn=new U,Ln=new U,Li=new U,rs=new U,os=new U,Cn=new U;function Er(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Cn.fromArray(i,r);let o=s.x*Math.abs(Cn.x)+s.y*Math.abs(Cn.y)+s.z*Math.abs(Cn.z),c=t.dot(Cn),l=e.dot(Cn),u=n.dot(Cn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var au=new kn,Ci=new U,Dr=new U,Fi=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):au.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ci.subVectors(t,this.center);let e=Ci.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ci,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Dr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ci.copy(t.center).add(Dr)),this.expandByPoint(Ci.copy(t.center).sub(Dr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},en=new U,Pr=new U,as=new U,An=new U,Lr=new U,cs=new U,Cr=new U,to=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,en)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=en.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(en.copy(this.origin).addScaledVector(this.direction,e),en.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Pr.copy(t).add(e).multiplyScalar(.5),as.copy(e).sub(t).normalize(),An.copy(this.origin).sub(Pr);let r=t.distanceTo(e)*.5,a=-this.direction.dot(as),o=An.dot(this.direction),c=-An.dot(as),l=An.lengthSq(),u=Math.abs(1-a*a),A,d,p,x;if(u>0)if(A=a*c-o,d=a*o-c,x=r*u,A>=0)if(d>=-x)if(d<=x){let g=1/u;A*=g,d*=g,p=A*(A+a*d+2*o)+d*(a*A+d+2*c)+l}else d=r,A=Math.max(0,-(a*d+o)),p=-A*A+d*(d+2*c)+l;else d=-r,A=Math.max(0,-(a*d+o)),p=-A*A+d*(d+2*c)+l;else d<=-x?(A=Math.max(0,-(-a*r+o)),d=A>0?-r:Math.min(Math.max(-r,-c),r),p=-A*A+d*(d+2*c)+l):d<=x?(A=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(A=Math.max(0,-(a*r+o)),d=A>0?r:Math.min(Math.max(-r,-c),r),p=-A*A+d*(d+2*c)+l);else d=a>0?-r:r,A=Math.max(0,-(a*d+o)),p=-A*A+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,A),s&&s.copy(Pr).addScaledVector(as,d),p}intersectSphere(t,e){en.subVectors(t.center,this.origin);let n=en.dot(this.direction),s=en.dot(en)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,A=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),A>=0?(o=(t.min.z-d.z)*A,c=(t.max.z-d.z)*A):(o=(t.max.z-d.z)*A,c=(t.min.z-d.z)*A),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,en)!==null}intersectTriangle(t,e,n,s,r){Lr.subVectors(e,t),cs.subVectors(n,t),Cr.crossVectors(Lr,cs);let a=this.direction.dot(Cr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;An.subVectors(this.origin,t);let c=o*this.direction.dot(cs.crossVectors(An,cs));if(c<0)return null;let l=o*this.direction.dot(Lr.cross(An));if(l<0||c+l>a)return null;let u=-o*An.dot(Cr);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zt=class i{constructor(t,e,n,s,r,a,o,c,l,u,A,d,p,x,g,f){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,A,d,p,x,g,f)}set(t,e,n,s,r,a,o,c,l,u,A,d,p,x,g,f){let h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=A,h[14]=d,h[3]=p,h[7]=x,h[11]=g,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ei.setFromMatrixColumn(t,0).length(),r=1/ei.setFromMatrixColumn(t,1).length(),a=1/ei.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),A=Math.sin(r);if(t.order==="XYZ"){let d=a*u,p=a*A,x=o*u,g=o*A;e[0]=c*u,e[4]=-c*A,e[8]=l,e[1]=p+x*l,e[5]=d-g*l,e[9]=-o*c,e[2]=g-d*l,e[6]=x+p*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*u,p=c*A,x=l*u,g=l*A;e[0]=d+g*o,e[4]=x*o-p,e[8]=a*l,e[1]=a*A,e[5]=a*u,e[9]=-o,e[2]=p*o-x,e[6]=g+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*u,p=c*A,x=l*u,g=l*A;e[0]=d-g*o,e[4]=-a*A,e[8]=x+p*o,e[1]=p+x*o,e[5]=a*u,e[9]=g-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*u,p=a*A,x=o*u,g=o*A;e[0]=c*u,e[4]=x*l-p,e[8]=d*l+g,e[1]=c*A,e[5]=g*l+d,e[9]=p*l-x,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,p=a*l,x=o*c,g=o*l;e[0]=c*u,e[4]=g-d*A,e[8]=x*A+p,e[1]=A,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=p*A+x,e[10]=d-g*A}else if(t.order==="XZY"){let d=a*c,p=a*l,x=o*c,g=o*l;e[0]=c*u,e[4]=-A,e[8]=l*u,e[1]=d*A+g,e[5]=a*u,e[9]=p*A-x,e[2]=x*A-p,e[6]=o*u,e[10]=g*A+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cu,t,lu)}lookAt(t,e,n){let s=this.elements;return Le.subVectors(t,e),Le.lengthSq()===0&&(Le.z=1),Le.normalize(),pn.crossVectors(n,Le),pn.lengthSq()===0&&(Math.abs(n.z)===1?Le.x+=1e-4:Le.z+=1e-4,Le.normalize(),pn.crossVectors(n,Le)),pn.normalize(),ls.crossVectors(Le,pn),s[0]=pn.x,s[4]=ls.x,s[8]=Le.x,s[1]=pn.y,s[5]=ls.y,s[9]=Le.y,s[2]=pn.z,s[6]=ls.z,s[10]=Le.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],A=n[5],d=n[9],p=n[13],x=n[2],g=n[6],f=n[10],h=n[14],m=n[3],y=n[7],w=n[11],v=n[15],S=s[0],_=s[4],P=s[8],M=s[12],T=s[1],R=s[5],C=s[9],q=s[13],L=s[2],I=s[6],V=s[10],F=s[14],J=s[3],j=s[7],X=s[11],$=s[15];return r[0]=a*S+o*T+c*L+l*J,r[4]=a*_+o*R+c*I+l*j,r[8]=a*P+o*C+c*V+l*X,r[12]=a*M+o*q+c*F+l*$,r[1]=u*S+A*T+d*L+p*J,r[5]=u*_+A*R+d*I+p*j,r[9]=u*P+A*C+d*V+p*X,r[13]=u*M+A*q+d*F+p*$,r[2]=x*S+g*T+f*L+h*J,r[6]=x*_+g*R+f*I+h*j,r[10]=x*P+g*C+f*V+h*X,r[14]=x*M+g*q+f*F+h*$,r[3]=m*S+y*T+w*L+v*J,r[7]=m*_+y*R+w*I+v*j,r[11]=m*P+y*C+w*V+v*X,r[15]=m*M+y*q+w*F+v*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],A=t[6],d=t[10],p=t[14],x=t[3],g=t[7],f=t[11],h=t[15];return x*(+r*c*A-s*l*A-r*o*d+n*l*d+s*o*p-n*c*p)+g*(+e*c*p-e*l*d+r*a*d-s*a*p+s*l*u-r*c*u)+f*(+e*l*A-e*o*p-r*a*A+n*a*p+r*o*u-n*l*u)+h*(-s*o*u-e*c*A+e*o*d+s*a*A-n*a*d+n*c*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],A=t[9],d=t[10],p=t[11],x=t[12],g=t[13],f=t[14],h=t[15],m=A*f*l-g*d*l+g*c*p-o*f*p-A*c*h+o*d*h,y=x*d*l-u*f*l-x*c*p+a*f*p+u*c*h-a*d*h,w=u*g*l-x*A*l+x*o*p-a*g*p-u*o*h+a*A*h,v=x*A*c-u*g*c-x*o*d+a*g*d+u*o*f-a*A*f,S=e*m+n*y+s*w+r*v;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let _=1/S;return t[0]=m*_,t[1]=(g*d*r-A*f*r-g*s*p+n*f*p+A*s*h-n*d*h)*_,t[2]=(o*f*r-g*c*r+g*s*l-n*f*l-o*s*h+n*c*h)*_,t[3]=(A*c*r-o*d*r-A*s*l+n*d*l+o*s*p-n*c*p)*_,t[4]=y*_,t[5]=(u*f*r-x*d*r+x*s*p-e*f*p-u*s*h+e*d*h)*_,t[6]=(x*c*r-a*f*r-x*s*l+e*f*l+a*s*h-e*c*h)*_,t[7]=(a*d*r-u*c*r+u*s*l-e*d*l-a*s*p+e*c*p)*_,t[8]=w*_,t[9]=(x*A*r-u*g*r-x*n*p+e*g*p+u*n*h-e*A*h)*_,t[10]=(a*g*r-x*o*r+x*n*l-e*g*l-a*n*h+e*o*h)*_,t[11]=(u*o*r-a*A*r-u*n*l+e*A*l+a*n*p-e*o*p)*_,t[12]=v*_,t[13]=(u*g*s-x*A*s+x*n*d-e*g*d-u*n*f+e*A*f)*_,t[14]=(x*o*s-a*g*s-x*n*c+e*g*c+a*n*f-e*o*f)*_,t[15]=(a*A*s-u*o*s+u*n*c-e*A*c-a*n*d+e*o*d)*_,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,A=o+o,d=r*l,p=r*u,x=r*A,g=a*u,f=a*A,h=o*A,m=c*l,y=c*u,w=c*A,v=n.x,S=n.y,_=n.z;return s[0]=(1-(g+h))*v,s[1]=(p+w)*v,s[2]=(x-y)*v,s[3]=0,s[4]=(p-w)*S,s[5]=(1-(d+h))*S,s[6]=(f+m)*S,s[7]=0,s[8]=(x+y)*_,s[9]=(f-m)*_,s[10]=(1-(d+g))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ei.set(s[0],s[1],s[2]).length(),a=ei.set(s[4],s[5],s[6]).length(),o=ei.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Be.copy(this);let l=1/r,u=1/a,A=1/o;return Be.elements[0]*=l,Be.elements[1]*=l,Be.elements[2]*=l,Be.elements[4]*=u,Be.elements[5]*=u,Be.elements[6]*=u,Be.elements[8]*=A,Be.elements[9]*=A,Be.elements[10]*=A,e.setFromRotationMatrix(Be),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=cn){let c=this.elements,l=2*r/(e-t),u=2*r/(n-s),A=(e+t)/(e-t),d=(n+s)/(n-s),p,x;if(o===cn)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ns)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=A,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=cn){let c=this.elements,l=1/(e-t),u=1/(n-s),A=1/(a-r),d=(e+t)*l,p=(n+s)*u,x,g;if(o===cn)x=(a+r)*A,g=-2*A;else if(o===Ns)x=r*A,g=-1*A;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ei=new U,Be=new Zt,cu=new U(0,0,0),lu=new U(1,1,1),pn=new U,ls=new U,Le=new U,Ya=new Zt,ja=new Ge,Os=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],A=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-A,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-A,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ee(A,-1,1)),Math.abs(A)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ee(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-A,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ya.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ya,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ja.setFromEuler(this),this.setFromQuaternion(ja,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Os.DEFAULT_ORDER="XYZ";var Bs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},hu=0,Ja=new U,ni=new Ge,nn=new Zt,hs=new U,Ni=new U,uu=new U,fu=new Ge,Xa=new U(1,0,0),Za=new U(0,1,0),$a=new U(0,0,1),du={type:"added"},Au={type:"removed"},We=class i extends wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new Os,n=new Ge,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Ot}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ni.setFromAxisAngle(t,e),this.quaternion.multiply(ni),this}rotateOnWorldAxis(t,e){return ni.setFromAxisAngle(t,e),this.quaternion.premultiply(ni),this}rotateX(t){return this.rotateOnAxis(Xa,t)}rotateY(t){return this.rotateOnAxis(Za,t)}rotateZ(t){return this.rotateOnAxis($a,t)}translateOnAxis(t,e){return Ja.copy(t).applyQuaternion(this.quaternion),this.position.add(Ja.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xa,t)}translateY(t){return this.translateOnAxis(Za,t)}translateZ(t){return this.translateOnAxis($a,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?hs.copy(t):hs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nn.lookAt(Ni,hs,this.up):nn.lookAt(hs,Ni,this.up),this.quaternion.setFromRotationMatrix(nn),s&&(nn.extractRotation(s.matrixWorld),ni.setFromRotationMatrix(nn),this.quaternion.premultiply(ni.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(du)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Au)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(nn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,t,uu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,fu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let A=c[l];r(t.shapes,A)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),A=a(t.shapes),d=a(t.skeletons),p=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),A.length>0&&(n.shapes=A),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};We.DEFAULT_UP=new U(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fe=new U,sn=new U,Nr=new U,rn=new U,ii=new U,si=new U,tc=new U,Rr=new U,Ir=new U,zr=new U,us=!1,fi=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Fe.subVectors(t,e),s.cross(Fe);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Fe.subVectors(s,e),sn.subVectors(n,e),Nr.subVectors(t,e);let a=Fe.dot(Fe),o=Fe.dot(sn),c=Fe.dot(Nr),l=sn.dot(sn),u=sn.dot(Nr),A=a*l-o*o;if(A===0)return r.set(0,0,0),null;let d=1/A,p=(l*c-o*u)*d,x=(a*u-o*c)*d;return r.set(1-p-x,x,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,rn)===null?!1:rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getUV(t,e,n,s,r,a,o,c){return us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),us=!0),this.getInterpolation(t,e,n,s,r,a,o,c)}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,rn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,rn.x),c.addScaledVector(a,rn.y),c.addScaledVector(o,rn.z),c)}static isFrontFacing(t,e,n,s){return Fe.subVectors(n,e),sn.subVectors(t,e),Fe.cross(sn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fe.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),Fe.cross(sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),us=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ii.subVectors(s,n),si.subVectors(r,n),Rr.subVectors(t,n);let c=ii.dot(Rr),l=si.dot(Rr);if(c<=0&&l<=0)return e.copy(n);Ir.subVectors(t,s);let u=ii.dot(Ir),A=si.dot(Ir);if(u>=0&&A<=u)return e.copy(s);let d=c*A-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(ii,a);zr.subVectors(t,r);let p=ii.dot(zr),x=si.dot(zr);if(x>=0&&p<=x)return e.copy(r);let g=p*l-c*x;if(g<=0&&l>=0&&x<=0)return o=l/(l-x),e.copy(n).addScaledVector(si,o);let f=u*x-p*A;if(f<=0&&A-u>=0&&p-x>=0)return tc.subVectors(r,s),o=(A-u)/(A-u+(p-x)),e.copy(s).addScaledVector(tc,o);let h=1/(f+g+d);return a=g*h,o=d*h,e.copy(n).addScaledVector(ii,a).addScaledVector(si,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},qc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mn={h:0,s:0,l:0},fs={h:0,s:0,l:0};function Ur(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ht=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Vt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Vt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Vt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Vt.workingColorSpace){if(t=nu(t,1),e=Ee(e,0,1),n=Ee(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ur(a,r,t+1/3),this.g=Ur(a,r,t),this.b=Ur(a,r,t-1/3)}return Vt.toWorkingColorSpace(this,s),this}setStyle(t,e=me){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=me){let n=qc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}copyLinearToSRGB(t){return this.r=br(t.r),this.g=br(t.g),this.b=br(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=me){return Vt.fromWorkingColorSpace(Me.copy(this),t),Math.round(Ee(Me.r*255,0,255))*65536+Math.round(Ee(Me.g*255,0,255))*256+Math.round(Ee(Me.b*255,0,255))}getHexString(t=me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Vt.workingColorSpace){Vt.fromWorkingColorSpace(Me.copy(this),e);let n=Me.r,s=Me.g,r=Me.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let A=a-o;switch(l=u<=.5?A/(a+o):A/(2-a-o),a){case n:c=(s-r)/A+(s<r?6:0);break;case s:c=(r-n)/A+2;break;case r:c=(n-s)/A+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Vt.workingColorSpace){return Vt.fromWorkingColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=me){Vt.fromWorkingColorSpace(Me.copy(this),t);let e=Me.r,n=Me.g,s=Me.b;return t!==me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(mn),this.setHSL(mn.h+t,mn.s+e,mn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mn),t.getHSL(fs);let n=_r(mn.h,fs.h,e),s=_r(mn.s,fs.s,e),r=_r(mn.l,fs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Me=new Ht;Ht.NAMES=qc;var pu=0,qn=class extends wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pu++}),this.uuid=Wi(),this.name="",this.type="Material",this.blending=pi,this.side=vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qr,this.blendDst=Vr,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ka,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jn,this.stencilZFail=Jn,this.stencilZPass=Jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(n.blending=this.blending),this.side!==vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qr&&(n.blendSrc=this.blendSrc),this.blendDst!==Vr&&(n.blendDst=this.blendDst),this.blendEquation!==zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ka&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Fs=class extends qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ce=new U,ds=new Qt,$t=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ds.fromBufferAttribute(this,e),ds.applyMatrix3(t),this.setXY(e,ds.x,ds.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix3(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix4(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyNormalMatrix(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.transformDirection(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Pi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),s=Te(s,this.array),r=Te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qa&&(t.usage=this.usage),t}};var ks=class extends $t{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var qs=class extends $t{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var qe=class extends $t{constructor(t,e,n){super(new Float32Array(t),e,n)}};var mu=0,Ue=new Zt,Or=new We,ri=new U,Ce=new kn,Ri=new kn,Ae=new U,Ie=class i extends wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kc(t)?qs:ks)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ue.makeRotationFromQuaternion(t),this.applyMatrix4(Ue),this}rotateX(t){return Ue.makeRotationX(t),this.applyMatrix4(Ue),this}rotateY(t){return Ue.makeRotationY(t),this.applyMatrix4(Ue),this}rotateZ(t){return Ue.makeRotationZ(t),this.applyMatrix4(Ue),this}translate(t,e,n){return Ue.makeTranslation(t,e,n),this.applyMatrix4(Ue),this}scale(t,e,n){return Ue.makeScale(t,e,n),this.applyMatrix4(Ue),this}lookAt(t){return Or.lookAt(t),Or.updateMatrix(),this.applyMatrix4(Or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ri).negate(),this.translate(ri.x,ri.y,ri.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new qe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ce.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,Ce.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,Ce.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(Ce.min),this.boundingBox.expandByPoint(Ce.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(Ce.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ri.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(Ce.min,Ri.min),Ce.expandByPoint(Ae),Ae.addVectors(Ce.max,Ri.max),Ce.expandByPoint(Ae)):(Ce.expandByPoint(Ri.min),Ce.expandByPoint(Ri.max))}Ce.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ae.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ae));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ae.fromBufferAttribute(o,l),c&&(ri.fromBufferAttribute(t,l),Ae.add(ri)),s=Math.max(s,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*o),4));let c=this.getAttribute("tangent").array,l=[],u=[];for(let T=0;T<o;T++)l[T]=new U,u[T]=new U;let A=new U,d=new U,p=new U,x=new Qt,g=new Qt,f=new Qt,h=new U,m=new U;function y(T,R,C){A.fromArray(s,T*3),d.fromArray(s,R*3),p.fromArray(s,C*3),x.fromArray(a,T*2),g.fromArray(a,R*2),f.fromArray(a,C*2),d.sub(A),p.sub(A),g.sub(x),f.sub(x);let q=1/(g.x*f.y-f.x*g.y);isFinite(q)&&(h.copy(d).multiplyScalar(f.y).addScaledVector(p,-g.y).multiplyScalar(q),m.copy(p).multiplyScalar(g.x).addScaledVector(d,-f.x).multiplyScalar(q),l[T].add(h),l[R].add(h),l[C].add(h),u[T].add(m),u[R].add(m),u[C].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let T=0,R=w.length;T<R;++T){let C=w[T],q=C.start,L=C.count;for(let I=q,V=q+L;I<V;I+=3)y(n[I+0],n[I+1],n[I+2])}let v=new U,S=new U,_=new U,P=new U;function M(T){_.fromArray(r,T*3),P.copy(_);let R=l[T];v.copy(R),v.sub(_.multiplyScalar(_.dot(R))).normalize(),S.crossVectors(P,R);let q=S.dot(u[T])<0?-1:1;c[T*4]=v.x,c[T*4+1]=v.y,c[T*4+2]=v.z,c[T*4+3]=q}for(let T=0,R=w.length;T<R;++T){let C=w[T],q=C.start,L=C.count;for(let I=q,V=q+L;I<V;I+=3)M(n[I+0]),M(n[I+1]),M(n[I+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $t(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new U,r=new U,a=new U,o=new U,c=new U,l=new U,u=new U,A=new U;if(t)for(let d=0,p=t.count;d<p;d+=3){let x=t.getX(d+0),g=t.getX(d+1),f=t.getX(d+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,f),u.subVectors(a,r),A.subVectors(s,r),u.cross(A),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,f),o.add(u),c.add(u),l.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),A.subVectors(s,r),u.cross(A),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,c){let l=o.array,u=o.itemSize,A=o.normalized,d=new l.constructor(c.length*u),p=0,x=0;for(let g=0,f=c.length;g<f;g++){o.isInterleavedBufferAttribute?p=c[g]*o.data.stride+o.offset:p=c[g]*u;for(let h=0;h<u;h++)d[x++]=l[p++]}return new $t(d,u,A)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,A=l.length;u<A;u++){let d=l[u],p=t(d,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let A=0,d=l.length;A<d;A++){let p=l[A];u.push(p.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],A=r[l];for(let d=0,p=A.length;d<p;d++)u.push(A[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,u=a.length;l<u;l++){let A=a[l];this.addGroup(A.start,A.count,A.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ec=new Zt,Nn=new to,As=new Fi,nc=new U,oi=new U,ai=new U,ci=new U,Br=new U,ps=new U,ms=new Qt,gs=new Qt,ys=new Qt,ic=new U,sc=new U,rc=new U,xs=new U,Ms=new U,Wt=class extends We{constructor(t=new Ie,e=new Fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ps.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],A=r[c];u!==0&&(Br.fromBufferAttribute(A,t),a?ps.addScaledVector(Br,u):ps.addScaledVector(Br.sub(e),u))}e.add(ps)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(r),Nn.copy(t.ray).recast(t.near),!(As.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(As,nc)===null||Nn.origin.distanceToSquared(nc)>(t.far-t.near)**2))&&(ec.copy(r).invert(),Nn.copy(t.ray).applyMatrix4(ec),!(n.boundingBox!==null&&Nn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Nn)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,A=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,g=d.length;x<g;x++){let f=d[x],h=a[f.materialIndex],m=Math.max(f.start,p.start),y=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));for(let w=m,v=y;w<v;w+=3){let S=o.getX(w),_=o.getX(w+1),P=o.getX(w+2);s=vs(this,h,t,n,l,u,A,S,_,P),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let f=x,h=g;f<h;f+=3){let m=o.getX(f),y=o.getX(f+1),w=o.getX(f+2);s=vs(this,a,t,n,l,u,A,m,y,w),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,g=d.length;x<g;x++){let f=d[x],h=a[f.materialIndex],m=Math.max(f.start,p.start),y=Math.min(c.count,Math.min(f.start+f.count,p.start+p.count));for(let w=m,v=y;w<v;w+=3){let S=w,_=w+1,P=w+2;s=vs(this,h,t,n,l,u,A,S,_,P),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{let x=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let f=x,h=g;f<h;f+=3){let m=f,y=f+1,w=f+2;s=vs(this,a,t,n,l,u,A,m,y,w),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}};function gu(i,t,e,n,s,r,a,o){let c;if(t.side===De?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===vn,o),c===null)return null;Ms.copy(o),Ms.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ms);return l<e.near||l>e.far?null:{distance:l,point:Ms.clone(),object:i}}function vs(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,oi),i.getVertexPosition(c,ai),i.getVertexPosition(l,ci);let u=gu(i,t,e,n,oi,ai,ci,xs);if(u){s&&(ms.fromBufferAttribute(s,o),gs.fromBufferAttribute(s,c),ys.fromBufferAttribute(s,l),u.uv=fi.getInterpolation(xs,oi,ai,ci,ms,gs,ys,new Qt)),r&&(ms.fromBufferAttribute(r,o),gs.fromBufferAttribute(r,c),ys.fromBufferAttribute(r,l),u.uv1=fi.getInterpolation(xs,oi,ai,ci,ms,gs,ys,new Qt),u.uv2=u.uv1),a&&(ic.fromBufferAttribute(a,o),sc.fromBufferAttribute(a,c),rc.fromBufferAttribute(a,l),u.normal=fi.getInterpolation(xs,oi,ai,ci,ic,sc,rc,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let A={a:o,b:c,c:l,normal:new U,materialIndex:0};fi.getNormal(oi,ai,ci,A.normal),u.face=A}return u}var ki=class i extends Ie{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],A=[],d=0,p=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new qe(l,3)),this.setAttribute("normal",new qe(u,3)),this.setAttribute("uv",new qe(A,2));function x(g,f,h,m,y,w,v,S,_,P,M){let T=w/_,R=v/P,C=w/2,q=v/2,L=S/2,I=_+1,V=P+1,F=0,J=0,j=new U;for(let X=0;X<V;X++){let $=X*R-q;for(let ot=0;ot<I;ot++){let Y=ot*T-C;j[g]=Y*m,j[f]=$*y,j[h]=L,l.push(j.x,j.y,j.z),j[g]=0,j[f]=0,j[h]=S>0?1:-1,u.push(j.x,j.y,j.z),A.push(ot/_),A.push(1-X/P),F+=1}}for(let X=0;X<P;X++)for(let $=0;$<_;$++){let ot=d+$+I*X,Y=d+$+I*(X+1),et=d+($+1)+I*(X+1),at=d+($+1)+I*X;c.push(ot,Y,at),c.push(Y,et,at),J+=6}o.addGroup(p,J,M),p+=J,d+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function vi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function be(i){let t={};for(let e=0;e<i.length;e++){let n=vi(i[e]);for(let s in n)t[s]=n[s]}return t}function yu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Hc(i){return i.getRenderTarget()===null?i.outputColorSpace:Vt.workingColorSpace}var xu={clone:vi,merge:be},Mu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,oe=class extends qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mu,this.fragmentShader=vu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vi(t.uniforms),this.uniformsGroups=yu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Hs=class extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=cn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ve=class extends Hs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Jr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jr*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(vr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},li=-90,hi=1,eo=class extends We{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ve(li,hi,t,e);s.layers=this.layers,this.add(s);let r=new ve(li,hi,t,e);r.layers=this.layers,this.add(r);let a=new ve(li,hi,t,e);a.layers=this.layers,this.add(a);let o=new ve(li,hi,t,e);o.layers=this.layers,this.add(o);let c=new ve(li,hi,t,e);c.layers=this.layers,this.add(c);let l=new ve(li,hi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,A=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(A,d,p),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Gs=class extends Re{constructor(t,e,n,s,r,a,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:yi,super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},no=class extends ln{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(Ii("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Fn?me:le),this.texture=new Gs(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Se}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ki(5,5,5),r=new oe({name:"CubemapFromEquirect",uniforms:vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:xn});r.uniforms.tEquirect.value=e;let a=new Wt(s,r),o=e.minFilter;return e.minFilter===Oi&&(e.minFilter=Se),new eo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Fr=new U,_u=new U,wu=new Ot,an=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Fr.subVectors(n,e).cross(_u.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Fr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||wu.getNormalMatrix(t),s=this.coplanarPoint(Fr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Rn=new Fi,_s=new U,Ws=class{constructor(t=new an,e=new an,n=new an,s=new an,r=new an,a=new an){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=cn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],u=s[5],A=s[6],d=s[7],p=s[8],x=s[9],g=s[10],f=s[11],h=s[12],m=s[13],y=s[14],w=s[15];if(n[0].setComponents(c-r,d-l,f-p,w-h).normalize(),n[1].setComponents(c+r,d+l,f+p,w+h).normalize(),n[2].setComponents(c+a,d+u,f+x,w+m).normalize(),n[3].setComponents(c-a,d-u,f-x,w-m).normalize(),n[4].setComponents(c-o,d-A,f-g,w-y).normalize(),e===cn)n[5].setComponents(c+o,d+A,f+g,w+y).normalize();else if(e===Ns)n[5].setComponents(o,A,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Rn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rn)}intersectsSprite(t){return Rn.center.set(0,0,0),Rn.radius=.7071067811865476,Rn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(_s.x=s.normal.x>0?t.max.x:t.min.x,_s.y=s.normal.y>0?t.max.y:t.min.y,_s.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(_s)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Gc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function bu(i,t){let e=t.isWebGL2,n=new WeakMap;function s(l,u){let A=l.array,d=l.usage,p=A.byteLength,x=i.createBuffer();i.bindBuffer(u,x),i.bufferData(u,A,d),l.onUploadCallback();let g;if(A instanceof Float32Array)g=i.FLOAT;else if(A instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(A instanceof Int16Array)g=i.SHORT;else if(A instanceof Uint32Array)g=i.UNSIGNED_INT;else if(A instanceof Int32Array)g=i.INT;else if(A instanceof Int8Array)g=i.BYTE;else if(A instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(A instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+A);return{buffer:x,type:g,bytesPerElement:A.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,u,A){let d=u.array,p=u._updateRange,x=u.updateRanges;if(i.bindBuffer(A,l),p.count===-1&&x.length===0&&i.bufferSubData(A,0,d),x.length!==0){for(let g=0,f=x.length;g<f;g++){let h=x[g];e?i.bufferSubData(A,h.start*d.BYTES_PER_ELEMENT,d,h.start,h.count):i.bufferSubData(A,h.start*d.BYTES_PER_ELEMENT,d.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}p.count!==-1&&(e?i.bufferSubData(A,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(A,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let A=n.get(l);if(A===void 0)n.set(l,s(l,u));else if(A.version<l.version){if(A.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(A.buffer,l,u),A.version=l.version}}return{get:a,remove:o,update:c}}var io=class i extends Ie{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,A=t/o,d=e/c,p=[],x=[],g=[],f=[];for(let h=0;h<u;h++){let m=h*d-a;for(let y=0;y<l;y++){let w=y*A-r;x.push(w,-m,0),g.push(0,0,1),f.push(y/o),f.push(1-h/c)}}for(let h=0;h<c;h++)for(let m=0;m<o;m++){let y=m+l*h,w=m+l*(h+1),v=m+1+l*(h+1),S=m+1+l*h;p.push(y,w,S),p.push(w,v,S)}this.setIndex(p),this.setAttribute("position",new qe(x,3)),this.setAttribute("normal",new qe(g,3)),this.setAttribute("uv",new qe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Su=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tu=`#ifdef USE_ALPHAHASH
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
#endif`,Eu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Du=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Lu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cu=`#ifdef USE_AOMAP
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
#endif`,Nu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ru=`#ifdef USE_BATCHING
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
#endif`,Iu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,zu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ou=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bu=`#ifdef USE_IRIDESCENCE
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
#endif`,Fu=`#ifdef USE_BUMPMAP
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
#endif`,ku=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Yu=`#define PI 3.141592653589793
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
} // validated`,ju=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ju=`vec3 transformedNormal = objectNormal;
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
#endif`,Xu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$u=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ef="gl_FragColor = linearToOutputTexel( gl_FragColor );",nf=`
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
}`,sf=`#ifdef USE_ENVMAP
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
#endif`,rf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,of=`#ifdef USE_ENVMAP
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
#endif`,af=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cf=`#ifdef USE_ENVMAP
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
#endif`,lf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ff=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,df=`#ifdef USE_GRADIENTMAP
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
}`,Af=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,pf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yf=`uniform bool receiveShadow;
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
#endif`,xf=`#ifdef USE_ENVMAP
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
#endif`,Mf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_f=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bf=`PhysicalMaterial material;
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
#endif`,Sf=`struct PhysicalMaterial {
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
}`,Tf=`
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
#endif`,Ef=`#if defined( RE_IndirectDiffuse )
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
#endif`,Df=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Nf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Rf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,If=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Uf=`#if defined( USE_POINTS_UV )
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
#endif`,Of=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ff=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kf=`#ifdef USE_MORPHNORMALS
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
#endif`,qf=`#ifdef USE_MORPHTARGETS
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
#endif`,Hf=`#ifdef USE_MORPHTARGETS
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
#endif`,Gf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yf=`#ifdef USE_NORMALMAP
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
#endif`,jf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$f=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,td=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ed=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,id=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,od=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ad=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ld=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hd=`float getShadowMask() {
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
}`,ud=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fd=`#ifdef USE_SKINNING
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
#endif`,dd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ad=`#ifdef USE_SKINNING
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
#endif`,pd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,md=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xd=`#ifdef USE_TRANSMISSION
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
#endif`,Md=`#ifdef USE_TRANSMISSION
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
#endif`,vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_d=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Td=`uniform sampler2D t2D;
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
}`,Ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ld=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cd=`#include <common>
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
}`,Nd=`#if DEPTH_PACKING == 3200
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
}`,Rd=`#define DISTANCE
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
}`,Id=`#define DISTANCE
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
}`,zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ud=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Od=`uniform float scale;
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
}`,Bd=`uniform vec3 diffuse;
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
}`,Fd=`#include <common>
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
}`,kd=`uniform vec3 diffuse;
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
}`,qd=`#define LAMBERT
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
}`,Hd=`#define LAMBERT
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
}`,Gd=`#define MATCAP
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
}`,Wd=`#define MATCAP
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
}`,Qd=`#define NORMAL
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
}`,Vd=`#define NORMAL
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
}`,Kd=`#define PHONG
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
}`,Yd=`#define PHONG
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
}`,jd=`#define STANDARD
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
}`,Jd=`#define STANDARD
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
}`,Xd=`#define TOON
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
}`,Zd=`#define TOON
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
}`,$d=`uniform float size;
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
}`,tA=`uniform vec3 diffuse;
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
}`,eA=`#include <common>
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
}`,nA=`uniform vec3 color;
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
}`,iA=`uniform float rotation;
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
}`,sA=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:Su,alphahash_pars_fragment:Tu,alphamap_fragment:Eu,alphamap_pars_fragment:Du,alphatest_fragment:Pu,alphatest_pars_fragment:Lu,aomap_fragment:Cu,aomap_pars_fragment:Nu,batching_pars_vertex:Ru,batching_vertex:Iu,begin_vertex:zu,beginnormal_vertex:Uu,bsdfs:Ou,iridescence_fragment:Bu,bumpmap_pars_fragment:Fu,clipping_planes_fragment:ku,clipping_planes_pars_fragment:qu,clipping_planes_pars_vertex:Hu,clipping_planes_vertex:Gu,color_fragment:Wu,color_pars_fragment:Qu,color_pars_vertex:Vu,color_vertex:Ku,common:Yu,cube_uv_reflection_fragment:ju,defaultnormal_vertex:Ju,displacementmap_pars_vertex:Xu,displacementmap_vertex:Zu,emissivemap_fragment:$u,emissivemap_pars_fragment:tf,colorspace_fragment:ef,colorspace_pars_fragment:nf,envmap_fragment:sf,envmap_common_pars_fragment:rf,envmap_pars_fragment:of,envmap_pars_vertex:af,envmap_physical_pars_fragment:xf,envmap_vertex:cf,fog_vertex:lf,fog_pars_vertex:hf,fog_fragment:uf,fog_pars_fragment:ff,gradientmap_pars_fragment:df,lightmap_fragment:Af,lightmap_pars_fragment:pf,lights_lambert_fragment:mf,lights_lambert_pars_fragment:gf,lights_pars_begin:yf,lights_toon_fragment:Mf,lights_toon_pars_fragment:vf,lights_phong_fragment:_f,lights_phong_pars_fragment:wf,lights_physical_fragment:bf,lights_physical_pars_fragment:Sf,lights_fragment_begin:Tf,lights_fragment_maps:Ef,lights_fragment_end:Df,logdepthbuf_fragment:Pf,logdepthbuf_pars_fragment:Lf,logdepthbuf_pars_vertex:Cf,logdepthbuf_vertex:Nf,map_fragment:Rf,map_pars_fragment:If,map_particle_fragment:zf,map_particle_pars_fragment:Uf,metalnessmap_fragment:Of,metalnessmap_pars_fragment:Bf,morphcolor_vertex:Ff,morphnormal_vertex:kf,morphtarget_pars_vertex:qf,morphtarget_vertex:Hf,normal_fragment_begin:Gf,normal_fragment_maps:Wf,normal_pars_fragment:Qf,normal_pars_vertex:Vf,normal_vertex:Kf,normalmap_pars_fragment:Yf,clearcoat_normal_fragment_begin:jf,clearcoat_normal_fragment_maps:Jf,clearcoat_pars_fragment:Xf,iridescence_pars_fragment:Zf,opaque_fragment:$f,packing:td,premultiplied_alpha_fragment:ed,project_vertex:nd,dithering_fragment:id,dithering_pars_fragment:sd,roughnessmap_fragment:rd,roughnessmap_pars_fragment:od,shadowmap_pars_fragment:ad,shadowmap_pars_vertex:cd,shadowmap_vertex:ld,shadowmask_pars_fragment:hd,skinbase_vertex:ud,skinning_pars_vertex:fd,skinning_vertex:dd,skinnormal_vertex:Ad,specularmap_fragment:pd,specularmap_pars_fragment:md,tonemapping_fragment:gd,tonemapping_pars_fragment:yd,transmission_fragment:xd,transmission_pars_fragment:Md,uv_pars_fragment:vd,uv_pars_vertex:_d,uv_vertex:wd,worldpos_vertex:bd,background_vert:Sd,background_frag:Td,backgroundCube_vert:Ed,backgroundCube_frag:Dd,cube_vert:Pd,cube_frag:Ld,depth_vert:Cd,depth_frag:Nd,distanceRGBA_vert:Rd,distanceRGBA_frag:Id,equirect_vert:zd,equirect_frag:Ud,linedashed_vert:Od,linedashed_frag:Bd,meshbasic_vert:Fd,meshbasic_frag:kd,meshlambert_vert:qd,meshlambert_frag:Hd,meshmatcap_vert:Gd,meshmatcap_frag:Wd,meshnormal_vert:Qd,meshnormal_frag:Vd,meshphong_vert:Kd,meshphong_frag:Yd,meshphysical_vert:jd,meshphysical_frag:Jd,meshtoon_vert:Xd,meshtoon_frag:Zd,points_vert:$d,points_frag:tA,shadow_vert:eA,shadow_frag:nA,sprite_vert:iA,sprite_frag:sA},rt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Ye={basic:{uniforms:be([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:be([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:be([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:be([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:be([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:be([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:be([rt.points,rt.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:be([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:be([rt.common,rt.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:be([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:be([rt.sprite,rt.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:be([rt.common,rt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:be([rt.lights,rt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};Ye.physical={uniforms:be([Ye.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};var ws={r:0,b:0,g:0};function rA(i,t,e,n,s,r,a){let o=new Ht(0),c=r===!0?0:1,l,u,A=null,d=0,p=null;function x(f,h){let m=!1,y=h.isScene===!0?h.background:null;y&&y.isTexture&&(y=(h.backgroundBlurriness>0?e:t).get(y)),y===null?g(o,c):y&&y.isColor&&(g(y,1),m=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||m)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===js)?(u===void 0&&(u=new Wt(new ki(1,1,1),new oe({name:"BackgroundCubeMaterial",uniforms:vi(Ye.backgroundCube.uniforms),vertexShader:Ye.backgroundCube.vertexShader,fragmentShader:Ye.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(v,S,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=Vt.getTransfer(y.colorSpace)!==Jt,(A!==y||d!==y.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,A=y,d=y.version,p=i.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Wt(new io(2,2),new oe({name:"BackgroundMaterial",uniforms:vi(Ye.background.uniforms),vertexShader:Ye.background.vertexShader,fragmentShader:Ye.background.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,l.material.toneMapped=Vt.getTransfer(y.colorSpace)!==Jt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(A!==y||d!==y.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,A=y,d=y.version,p=i.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null))}function g(f,h){f.getRGB(ws,Hc(i)),n.buffers.color.setClear(ws.r,ws.g,ws.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(f,h=1){o.set(f),c=h,g(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(f){c=f,g(o,c)},render:x}}function oA(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=f(null),l=c,u=!1;function A(L,I,V,F,J){let j=!1;if(a){let X=g(F,V,I);l!==X&&(l=X,p(l.object)),j=h(L,F,V,J),j&&m(L,F,V,J)}else{let X=I.wireframe===!0;(l.geometry!==F.id||l.program!==V.id||l.wireframe!==X)&&(l.geometry=F.id,l.program=V.id,l.wireframe=X,j=!0)}J!==null&&e.update(J,i.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,P(L,I,V,F),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(L){return n.isWebGL2?i.bindVertexArray(L):r.bindVertexArrayOES(L)}function x(L){return n.isWebGL2?i.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function g(L,I,V){let F=V.wireframe===!0,J=o[L.id];J===void 0&&(J={},o[L.id]=J);let j=J[I.id];j===void 0&&(j={},J[I.id]=j);let X=j[F];return X===void 0&&(X=f(d()),j[F]=X),X}function f(L){let I=[],V=[],F=[];for(let J=0;J<s;J++)I[J]=0,V[J]=0,F[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:F,object:L,attributes:{},index:null}}function h(L,I,V,F){let J=l.attributes,j=I.attributes,X=0,$=V.getAttributes();for(let ot in $)if($[ot].location>=0){let et=J[ot],at=j[ot];if(at===void 0&&(ot==="instanceMatrix"&&L.instanceMatrix&&(at=L.instanceMatrix),ot==="instanceColor"&&L.instanceColor&&(at=L.instanceColor)),et===void 0||et.attribute!==at||at&&et.data!==at.data)return!0;X++}return l.attributesNum!==X||l.index!==F}function m(L,I,V,F){let J={},j=I.attributes,X=0,$=V.getAttributes();for(let ot in $)if($[ot].location>=0){let et=j[ot];et===void 0&&(ot==="instanceMatrix"&&L.instanceMatrix&&(et=L.instanceMatrix),ot==="instanceColor"&&L.instanceColor&&(et=L.instanceColor));let at={};at.attribute=et,et&&et.data&&(at.data=et.data),J[ot]=at,X++}l.attributes=J,l.attributesNum=X,l.index=F}function y(){let L=l.newAttributes;for(let I=0,V=L.length;I<V;I++)L[I]=0}function w(L){v(L,0)}function v(L,I){let V=l.newAttributes,F=l.enabledAttributes,J=l.attributeDivisors;V[L]=1,F[L]===0&&(i.enableVertexAttribArray(L),F[L]=1),J[L]!==I&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,I),J[L]=I)}function S(){let L=l.newAttributes,I=l.enabledAttributes;for(let V=0,F=I.length;V<F;V++)I[V]!==L[V]&&(i.disableVertexAttribArray(V),I[V]=0)}function _(L,I,V,F,J,j,X){X===!0?i.vertexAttribIPointer(L,I,V,J,j):i.vertexAttribPointer(L,I,V,F,J,j)}function P(L,I,V,F){if(n.isWebGL2===!1&&(L.isInstancedMesh||F.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();let J=F.attributes,j=V.getAttributes(),X=I.defaultAttributeValues;for(let $ in j){let ot=j[$];if(ot.location>=0){let Y=J[$];if(Y===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(Y=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(Y=L.instanceColor)),Y!==void 0){let et=Y.normalized,at=Y.itemSize,mt=e.get(Y);if(mt===void 0)continue;let dt=mt.buffer,_t=mt.type,Mt=mt.bytesPerElement,At=n.isWebGL2===!0&&(_t===i.INT||_t===i.UNSIGNED_INT||Y.gpuType===Lc);if(Y.isInterleavedBufferAttribute){let It=Y.data,k=It.stride,ne=Y.offset;if(It.isInstancedInterleavedBuffer){for(let yt=0;yt<ot.locationSize;yt++)v(ot.location+yt,It.meshPerAttribute);L.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=It.meshPerAttribute*It.count)}else for(let yt=0;yt<ot.locationSize;yt++)w(ot.location+yt);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let yt=0;yt<ot.locationSize;yt++)_(ot.location+yt,at/ot.locationSize,_t,et,k*Mt,(ne+at/ot.locationSize*yt)*Mt,At)}else{if(Y.isInstancedBufferAttribute){for(let It=0;It<ot.locationSize;It++)v(ot.location+It,Y.meshPerAttribute);L.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let It=0;It<ot.locationSize;It++)w(ot.location+It);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let It=0;It<ot.locationSize;It++)_(ot.location+It,at/ot.locationSize,_t,et,at*Mt,at/ot.locationSize*It*Mt,At)}}else if(X!==void 0){let et=X[$];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(ot.location,et);break;case 3:i.vertexAttrib3fv(ot.location,et);break;case 4:i.vertexAttrib4fv(ot.location,et);break;default:i.vertexAttrib1fv(ot.location,et)}}}}S()}function M(){C();for(let L in o){let I=o[L];for(let V in I){let F=I[V];for(let J in F)x(F[J].object),delete F[J];delete I[V]}delete o[L]}}function T(L){if(o[L.id]===void 0)return;let I=o[L.id];for(let V in I){let F=I[V];for(let J in F)x(F[J].object),delete F[J];delete I[V]}delete o[L.id]}function R(L){for(let I in o){let V=o[I];if(V[L.id]===void 0)continue;let F=V[L.id];for(let J in F)x(F[J].object),delete F[J];delete V[L.id]}}function C(){q(),u=!0,l!==c&&(l=c,p(l.object))}function q(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:A,reset:C,resetDefaultState:q,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:w,disableUnusedAttributes:S}}function aA(i,t,e,n){let s=n.isWebGL2,r;function a(u){r=u}function o(u,A){i.drawArrays(r,u,A),e.update(A,r,1)}function c(u,A,d){if(d===0)return;let p,x;if(s)p=i,x="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[x](r,u,A,d),e.update(A,r,d)}function l(u,A,d){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<d;x++)this.render(u[x],A[x]);else{p.multiDrawArraysWEBGL(r,u,0,A,0,d);let x=0;for(let g=0;g<d;g++)x+=A[g];e.update(x,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function cA(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);let l=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,A=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),h=i.getParameter(i.MAX_VARYING_VECTORS),m=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,w=a||t.has("OES_texture_float"),v=y&&w,S=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:A,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:f,maxVaryings:h,maxFragmentUniforms:m,vertexTextures:y,floatFragmentTextures:w,floatVertexTextures:v,maxSamples:S}}function lA(i){let t=this,e=null,n=0,s=!1,r=!1,a=new an,o=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(A,d){let p=A.length!==0||d||n!==0||s;return s=d,n=A.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(A,d){e=u(A,d,0)},this.setState=function(A,d,p){let x=A.clippingPlanes,g=A.clipIntersection,f=A.clipShadows,h=i.get(A);if(!s||x===null||x.length===0||r&&!f)r?u(null):l();else{let m=r?0:n,y=m*4,w=h.clippingState||null;c.value=w,w=u(x,d,y,p);for(let v=0;v!==y;++v)w[v]=e[v];h.clippingState=w,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=m}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(A,d,p,x){let g=A!==null?A.length:0,f=null;if(g!==0){if(f=c.value,x!==!0||f===null){let h=p+g*4,m=d.matrixWorldInverse;o.getNormalMatrix(m),(f===null||f.length<h)&&(f=new Float32Array(h));for(let y=0,w=p;y!==g;++y,w+=4)a.copy(A[y]).applyMatrix4(m,o),a.normal.toArray(f,w),f[w+3]=a.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,f}}function hA(i){let t=new WeakMap;function e(a,o){return o===Kr?a.mapping=yi:o===Yr&&(a.mapping=xi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Kr||o===Yr)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new no(c.height/2);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var so=class extends Hs{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},di=4,oc=[.125,.215,.35,.446,.526,.582],Un=20,kr=new so,ac=new Ht,qr=null,Hr=0,Gr=0,In=(1+Math.sqrt(5))/2,ui=1/In,cc=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,In,ui),new U(0,In,-ui),new U(ui,0,In),new U(-ui,0,In),new U(In,ui,0),new U(-In,ui,0)],Qs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){qr=this._renderer.getRenderTarget(),Hr=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qr,Hr,Gr),t.scissorTest=!1,bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===yi||t.mapping===xi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qr=this._renderer.getRenderTarget(),Hr=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Se,minFilter:Se,generateMipmaps:!1,type:Bi,format:Ne,colorSpace:He,depthBuffer:!1},s=lc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uA(r)),this._blurMaterial=fA(r,t,e)}return s}_compileMaterial(t){let e=new Wt(this._lodPlanes[0],t);this._renderer.compile(e,kr)}_sceneToCubeUV(t,e,n,s){let o=new ve(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,A=u.autoClear,d=u.toneMapping;u.getClearColor(ac),u.toneMapping=Mn,u.autoClear=!1;let p=new Fs({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),x=new Wt(new ki,p),g=!1,f=t.background;f?f.isColor&&(p.color.copy(f),t.background=null,g=!0):(p.color.copy(ac),g=!0);for(let h=0;h<6;h++){let m=h%3;m===0?(o.up.set(0,c[h],0),o.lookAt(l[h],0,0)):m===1?(o.up.set(0,0,c[h]),o.lookAt(0,l[h],0)):(o.up.set(0,c[h],0),o.lookAt(0,0,l[h]));let y=this._cubeSize;bs(s,m*y,h>2?y:0,y,y),u.setRenderTarget(s),g&&u.render(x,o),u.render(t,o)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=d,u.autoClear=A,t.background=f}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===yi||t.mapping===xi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Wt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;bs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,kr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=cc[(s-1)%cc.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,A=new Wt(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Un-1),g=r/x,f=isFinite(r)?1+Math.floor(u*g):Un;f>Un&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Un}`);let h=[],m=0;for(let _=0;_<Un;++_){let P=_/g,M=Math.exp(-P*P/2);h.push(M),_===0?m+=M:_<f&&(m+=2*M)}for(let _=0;_<h.length;_++)h[_]=h[_]/m;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=x,d.mipInt.value=y-n;let w=this._sizeLods[s],v=3*w*(s>y-di?s-y+di:0),S=4*(this._cubeSize-w);bs(e,v,S,3*w,2*w),c.setRenderTarget(e),c.render(A,kr)}};function uA(i){let t=[],e=[],n=[],s=i,r=i-di+1+oc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-di?c=oc[a-i+di-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),u=-l,A=1+l,d=[u,u,A,u,A,A,u,u,A,A,u,A],p=6,x=6,g=3,f=2,h=1,m=new Float32Array(g*x*p),y=new Float32Array(f*x*p),w=new Float32Array(h*x*p);for(let S=0;S<p;S++){let _=S%3*2/3-1,P=S>2?0:-1,M=[_,P,0,_+2/3,P,0,_+2/3,P+1,0,_,P,0,_+2/3,P+1,0,_,P+1,0];m.set(M,g*x*S),y.set(d,f*x*S);let T=[S,S,S,S,S,S];w.set(T,h*x*S)}let v=new Ie;v.setAttribute("position",new $t(m,g)),v.setAttribute("uv",new $t(y,f)),v.setAttribute("faceIndex",new $t(w,h)),t.push(v),s>di&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function lc(i,t,e){let n=new ln(i,t,e);return n.texture.mapping=js,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function fA(i,t,e){let n=new Float32Array(Un),s=new U(0,1,0);return new oe({name:"SphericalGaussianBlur",defines:{n:Un,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Po(),fragmentShader:`

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
		`,blending:xn,depthTest:!1,depthWrite:!1})}function hc(){return new oe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Po(),fragmentShader:`

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
		`,blending:xn,depthTest:!1,depthWrite:!1})}function uc(){return new oe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Po(){return`

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
	`}function dA(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Kr||c===Yr,u=c===yi||c===xi;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let A=t.get(o);return e===null&&(e=new Qs(i)),A=l?e.fromEquirectangular(o,A):e.fromCubemap(o,A),t.set(o,A),A.texture}else{if(t.has(o))return t.get(o).texture;{let A=o.image;if(l&&A&&A.height>0||u&&A&&s(A)){e===null&&(e=new Qs(i));let d=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let c=0,l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function AA(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function pA(i,t,e,n){let s={},r=new WeakMap;function a(A){let d=A.target;d.index!==null&&t.remove(d.index);for(let x in d.attributes)t.remove(d.attributes[x]);for(let x in d.morphAttributes){let g=d.morphAttributes[x];for(let f=0,h=g.length;f<h;f++)t.remove(g[f])}d.removeEventListener("dispose",a),delete s[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(A,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(A){let d=A.attributes;for(let x in d)t.update(d[x],i.ARRAY_BUFFER);let p=A.morphAttributes;for(let x in p){let g=p[x];for(let f=0,h=g.length;f<h;f++)t.update(g[f],i.ARRAY_BUFFER)}}function l(A){let d=[],p=A.index,x=A.attributes.position,g=0;if(p!==null){let m=p.array;g=p.version;for(let y=0,w=m.length;y<w;y+=3){let v=m[y+0],S=m[y+1],_=m[y+2];d.push(v,S,S,_,_,v)}}else if(x!==void 0){let m=x.array;g=x.version;for(let y=0,w=m.length/3-1;y<w;y+=3){let v=y+0,S=y+1,_=y+2;d.push(v,S,S,_,_,v)}}else return;let f=new(kc(d)?qs:ks)(d,1);f.version=g;let h=r.get(A);h&&t.remove(h),r.set(A,f)}function u(A){let d=r.get(A);if(d){let p=A.index;p!==null&&d.version<p.version&&l(A)}else l(A);return r.get(A)}return{get:o,update:c,getWireframeAttribute:u}}function mA(i,t,e,n){let s=n.isWebGL2,r;function a(p){r=p}let o,c;function l(p){o=p.type,c=p.bytesPerElement}function u(p,x){i.drawElements(r,x,o,p*c),e.update(x,r,1)}function A(p,x,g){if(g===0)return;let f,h;if(s)f=i,h="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[h](r,x,o,p*c,g),e.update(x,r,g)}function d(p,x,g){if(g===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<g;h++)this.render(p[h]/c,x[h]);else{f.multiDrawElementsWEBGL(r,x,0,o,p,0,g);let h=0;for(let m=0;m<g;m++)h+=x[m];e.update(h,r,1)}}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=A,this.renderMultiDraw=d}function gA(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function yA(i,t){return i[0]-t[0]}function xA(i,t){return Math.abs(t[1])-Math.abs(i[1])}function MA(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,a=new ge,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,A){let d=l.morphTargetInfluences;if(t.isWebGL2===!0){let p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=p!==void 0?p.length:0,g=r.get(u);if(g===void 0||g.count!==x){let L=function(){C.dispose(),r.delete(u),u.removeEventListener("dispose",L)};g!==void 0&&g.texture.dispose();let m=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,v=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],_=u.morphAttributes.color||[],P=0;m===!0&&(P=1),y===!0&&(P=2),w===!0&&(P=3);let M=u.attributes.position.count*P,T=1;M>t.maxTextureSize&&(T=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let R=new Float32Array(M*T*4*x),C=new Us(R,M,T,x);C.type=yn,C.needsUpdate=!0;let q=P*4;for(let I=0;I<x;I++){let V=v[I],F=S[I],J=_[I],j=M*T*4*I;for(let X=0;X<V.count;X++){let $=X*q;m===!0&&(a.fromBufferAttribute(V,X),R[j+$+0]=a.x,R[j+$+1]=a.y,R[j+$+2]=a.z,R[j+$+3]=0),y===!0&&(a.fromBufferAttribute(F,X),R[j+$+4]=a.x,R[j+$+5]=a.y,R[j+$+6]=a.z,R[j+$+7]=0),w===!0&&(a.fromBufferAttribute(J,X),R[j+$+8]=a.x,R[j+$+9]=a.y,R[j+$+10]=a.z,R[j+$+11]=J.itemSize===4?a.w:1)}}g={count:x,texture:C,size:new Qt(M,T)},r.set(u,g),u.addEventListener("dispose",L)}let f=0;for(let m=0;m<d.length;m++)f+=d[m];let h=u.morphTargetsRelative?1:1-f;A.getUniforms().setValue(i,"morphTargetBaseInfluence",h),A.getUniforms().setValue(i,"morphTargetInfluences",d),A.getUniforms().setValue(i,"morphTargetsTexture",g.texture,e),A.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}else{let p=d===void 0?0:d.length,x=n[u.id];if(x===void 0||x.length!==p){x=[];for(let y=0;y<p;y++)x[y]=[y,0];n[u.id]=x}for(let y=0;y<p;y++){let w=x[y];w[0]=y,w[1]=d[y]}x.sort(xA);for(let y=0;y<8;y++)y<p&&x[y][1]?(o[y][0]=x[y][0],o[y][1]=x[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(yA);let g=u.morphAttributes.position,f=u.morphAttributes.normal,h=0;for(let y=0;y<8;y++){let w=o[y],v=w[0],S=w[1];v!==Number.MAX_SAFE_INTEGER&&S?(g&&u.getAttribute("morphTarget"+y)!==g[v]&&u.setAttribute("morphTarget"+y,g[v]),f&&u.getAttribute("morphNormal"+y)!==f[v]&&u.setAttribute("morphNormal"+y,f[v]),s[y]=S,h+=S):(g&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),f&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),s[y]=0)}let m=u.morphTargetsRelative?1:1-h;A.getUniforms().setValue(i,"morphTargetBaseInfluence",m),A.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function vA(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,A=t.get(c,u);if(s.get(A)!==l&&(t.update(A),s.set(A,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return A}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var Vs=class extends Re{constructor(t,e,n,s,r,a,o,c,l,u){if(u=u!==void 0?u:Bn,u!==Bn&&u!==Mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Bn&&(n=gn),n===void 0&&u===Mi&&(n=On),super(null,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:pe,this.minFilter=c!==void 0?c:pe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Wc=new Re,Qc=new Vs(1,1);Qc.compareFunction=Fc;var Vc=new Us,Kc=new $r,Yc=new Gs,fc=[],dc=[],Ac=new Float32Array(16),pc=new Float32Array(9),mc=new Float32Array(4);function wi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=fc[s];if(r===void 0&&(r=new Float32Array(s),fc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function he(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Xs(i,t){let e=dc[t];e===void 0&&(e=new Int32Array(t),dc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function _A(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function wA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2fv(this.addr,t),ue(e,t)}}function bA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(he(e,t))return;i.uniform3fv(this.addr,t),ue(e,t)}}function SA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4fv(this.addr,t),ue(e,t)}}function TA(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;mc.set(n),i.uniformMatrix2fv(this.addr,!1,mc),ue(e,n)}}function EA(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;pc.set(n),i.uniformMatrix3fv(this.addr,!1,pc),ue(e,n)}}function DA(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;Ac.set(n),i.uniformMatrix4fv(this.addr,!1,Ac),ue(e,n)}}function PA(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function LA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2iv(this.addr,t),ue(e,t)}}function CA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;i.uniform3iv(this.addr,t),ue(e,t)}}function NA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4iv(this.addr,t),ue(e,t)}}function RA(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function IA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2uiv(this.addr,t),ue(e,t)}}function zA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;i.uniform3uiv(this.addr,t),ue(e,t)}}function UA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4uiv(this.addr,t),ue(e,t)}}function OA(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Qc:Wc;e.setTexture2D(t||r,s)}function BA(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Kc,s)}function FA(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Yc,s)}function kA(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Vc,s)}function qA(i){switch(i){case 5126:return _A;case 35664:return wA;case 35665:return bA;case 35666:return SA;case 35674:return TA;case 35675:return EA;case 35676:return DA;case 5124:case 35670:return PA;case 35667:case 35671:return LA;case 35668:case 35672:return CA;case 35669:case 35673:return NA;case 5125:return RA;case 36294:return IA;case 36295:return zA;case 36296:return UA;case 35678:case 36198:case 36298:case 36306:case 35682:return OA;case 35679:case 36299:case 36307:return BA;case 35680:case 36300:case 36308:case 36293:return FA;case 36289:case 36303:case 36311:case 36292:return kA}}function HA(i,t){i.uniform1fv(this.addr,t)}function GA(i,t){let e=wi(t,this.size,2);i.uniform2fv(this.addr,e)}function WA(i,t){let e=wi(t,this.size,3);i.uniform3fv(this.addr,e)}function QA(i,t){let e=wi(t,this.size,4);i.uniform4fv(this.addr,e)}function VA(i,t){let e=wi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function KA(i,t){let e=wi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function YA(i,t){let e=wi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function jA(i,t){i.uniform1iv(this.addr,t)}function JA(i,t){i.uniform2iv(this.addr,t)}function XA(i,t){i.uniform3iv(this.addr,t)}function ZA(i,t){i.uniform4iv(this.addr,t)}function $A(i,t){i.uniform1uiv(this.addr,t)}function tp(i,t){i.uniform2uiv(this.addr,t)}function ep(i,t){i.uniform3uiv(this.addr,t)}function np(i,t){i.uniform4uiv(this.addr,t)}function ip(i,t,e){let n=this.cache,s=t.length,r=Xs(e,s);he(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Wc,r[a])}function sp(i,t,e){let n=this.cache,s=t.length,r=Xs(e,s);he(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Kc,r[a])}function rp(i,t,e){let n=this.cache,s=t.length,r=Xs(e,s);he(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Yc,r[a])}function op(i,t,e){let n=this.cache,s=t.length,r=Xs(e,s);he(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Vc,r[a])}function ap(i){switch(i){case 5126:return HA;case 35664:return GA;case 35665:return WA;case 35666:return QA;case 35674:return VA;case 35675:return KA;case 35676:return YA;case 5124:case 35670:return jA;case 35667:case 35671:return JA;case 35668:case 35672:return XA;case 35669:case 35673:return ZA;case 5125:return $A;case 36294:return tp;case 36295:return ep;case 36296:return np;case 35678:case 36198:case 36298:case 36306:case 35682:return ip;case 35679:case 36299:case 36307:return sp;case 35680:case 36300:case 36308:case 36293:return rp;case 36289:case 36303:case 36311:case 36292:return op}}var ro=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=qA(e.type)}},oo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ap(e.type)}},ao=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Wr=/(\w+)(\])?(\[|\.)?/g;function gc(i,t){i.seq.push(t),i.map[t.id]=t}function cp(i,t,e){let n=i.name,s=n.length;for(Wr.lastIndex=0;;){let r=Wr.exec(n),a=Wr.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){gc(e,l===void 0?new ro(o,i,t):new oo(o,i,t));break}else{let A=e.map[o];A===void 0&&(A=new ao(o),gc(e,A)),e=A}}}var gi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);cp(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function yc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var lp=37297,hp=0;function up(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function fp(i){let t=Vt.getPrimaries(Vt.workingColorSpace),e=Vt.getPrimaries(i),n;switch(t===e?n="":t===Cs&&e===Ls?n="LinearDisplayP3ToLinearSRGB":t===Ls&&e===Cs&&(n="LinearSRGBToLinearDisplayP3"),i){case He:case Js:return[n,"LinearTransferOETF"];case me:case Do:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function xc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+up(i.getShaderSource(t),a)}else return s}function dp(i,t){let e=fp(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Ap(i,t){let e;switch(t){case Ch:e="Linear";break;case Nh:e="Reinhard";break;case Rh:e="OptimizedCineon";break;case Ih:e="ACESFilmic";break;case Uh:e="AgX";break;case zh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function pp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ai).join(`
`)}function mp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ai).join(`
`)}function gp(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function yp(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ai(i){return i!==""}function Mc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var xp=/^[ \t]*#include +<([\w\d./]+)>/gm;function co(i){return i.replace(xp,vp)}var Mp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function vp(i,t){let e=Ut[t];if(e===void 0){let n=Mp.get(t);if(n!==void 0)e=Ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return co(e)}var _p=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _c(i){return i.replace(_p,wp)}function wp(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wc(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function bp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ec?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===rh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===on&&(t="SHADOWMAP_TYPE_VSM"),t}function Sp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case yi:case xi:t="ENVMAP_TYPE_CUBE";break;case js:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Tp(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===xi&&(t="ENVMAP_MODE_REFRACTION"),t}function Ep(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Dc:t="ENVMAP_BLENDING_MULTIPLY";break;case Ph:t="ENVMAP_BLENDING_MIX";break;case Lh:t="ENVMAP_BLENDING_ADD";break}return t}function Dp(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Pp(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=bp(e),l=Sp(e),u=Tp(e),A=Ep(e),d=Dp(e),p=e.isWebGL2?"":pp(e),x=mp(e),g=gp(r),f=s.createProgram(),h,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ai).join(`
`),h.length>0&&(h+=`
`),m=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ai).join(`
`),m.length>0&&(m+=`
`)):(h=[wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ai).join(`
`),m=[p,wc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+A:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mn?"#define TONE_MAPPING":"",e.toneMapping!==Mn?Ut.tonemapping_pars_fragment:"",e.toneMapping!==Mn?Ap("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,dp("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ai).join(`
`)),a=co(a),a=Mc(a,e),a=vc(a,e),o=co(o),o=Mc(o,e),o=vc(o,e),a=_c(a),o=_c(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,h=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,m=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ha?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ha?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=y+h+a,v=y+m+o,S=yc(s,s.VERTEX_SHADER,w),_=yc(s,s.FRAGMENT_SHADER,v);s.attachShader(f,S),s.attachShader(f,_),e.index0AttributeName!==void 0?s.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function P(C){if(i.debug.checkShaderErrors){let q=s.getProgramInfoLog(f).trim(),L=s.getShaderInfoLog(S).trim(),I=s.getShaderInfoLog(_).trim(),V=!0,F=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,f,S,_);else{let J=xc(s,S,"vertex"),j=xc(s,_,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+J+`
`+j)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(L===""||I==="")&&(F=!1);F&&(C.diagnostics={runnable:V,programLog:q,vertexShader:{log:L,prefix:h},fragmentShader:{log:I,prefix:m}})}s.deleteShader(S),s.deleteShader(_),M=new gi(s,f),T=yp(s,f)}let M;this.getUniforms=function(){return M===void 0&&P(this),M};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(f,lp)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hp++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=S,this.fragmentShader=_,this}var Lp=0,lo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ho(t),e.set(t,n)),n}},ho=class{constructor(t){this.id=Lp++,this.code=t,this.usedTimes=0}};function Cp(i,t,e,n,s,r,a){let o=new Bs,c=new lo,l=[],u=s.isWebGL2,A=s.logarithmicDepthBuffer,d=s.vertexTextures,p=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function f(M,T,R,C,q){let L=C.fog,I=q.geometry,V=M.isMeshStandardMaterial?C.environment:null,F=(M.isMeshStandardMaterial?e:t).get(M.envMap||V),J=F&&F.mapping===js?F.image.height:null,j=x[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let X=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,$=X!==void 0?X.length:0,ot=0;I.morphAttributes.position!==void 0&&(ot=1),I.morphAttributes.normal!==void 0&&(ot=2),I.morphAttributes.color!==void 0&&(ot=3);let Y,et,at,mt;if(j){let _e=Ye[j];Y=_e.vertexShader,et=_e.fragmentShader}else Y=M.vertexShader,et=M.fragmentShader,c.update(M),at=c.getVertexShaderID(M),mt=c.getFragmentShaderID(M);let dt=i.getRenderTarget(),_t=q.isInstancedMesh===!0,Mt=q.isBatchedMesh===!0,At=!!M.map,It=!!M.matcap,k=!!F,ne=!!M.aoMap,yt=!!M.lightMap,wt=!!M.bumpMap,pt=!!M.normalMap,qt=!!M.displacementMap,Et=!!M.emissiveMap,D=!!M.metalnessMap,b=!!M.roughnessMap,N=M.anisotropy>0,H=M.clearcoat>0,B=M.iridescence>0,G=M.sheen>0,it=M.transmission>0,Z=N&&!!M.anisotropyMap,nt=H&&!!M.clearcoatMap,ct=H&&!!M.clearcoatNormalMap,gt=H&&!!M.clearcoatRoughnessMap,tt=B&&!!M.iridescenceMap,zt=B&&!!M.iridescenceThicknessMap,Dt=G&&!!M.sheenColorMap,St=G&&!!M.sheenRoughnessMap,vt=!!M.specularMap,ft=!!M.specularColorMap,Ct=!!M.specularIntensityMap,Gt=it&&!!M.transmissionMap,ie=it&&!!M.thicknessMap,Ft=!!M.gradientMap,st=!!M.alphaMap,z=M.alphaTest>0,lt=!!M.alphaHash,ht=!!M.extensions,Pt=!!I.attributes.uv1,bt=!!I.attributes.uv2,Kt=!!I.attributes.uv3,Yt=Mn;return M.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(Yt=i.toneMapping),{isWebGL2:u,shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:Y,fragmentShader:et,defines:M.defines,customVertexShaderID:at,customFragmentShaderID:mt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Mt,instancing:_t,instancingColor:_t&&q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:dt===null?i.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:He,map:At,matcap:It,envMap:k,envMapMode:k&&F.mapping,envMapCubeUVHeight:J,aoMap:ne,lightMap:yt,bumpMap:wt,normalMap:pt,displacementMap:d&&qt,emissiveMap:Et,normalMapObjectSpace:pt&&M.normalMapType===Yh,normalMapTangentSpace:pt&&M.normalMapType===Bc,metalnessMap:D,roughnessMap:b,anisotropy:N,anisotropyMap:Z,clearcoat:H,clearcoatMap:nt,clearcoatNormalMap:ct,clearcoatRoughnessMap:gt,iridescence:B,iridescenceMap:tt,iridescenceThicknessMap:zt,sheen:G,sheenColorMap:Dt,sheenRoughnessMap:St,specularMap:vt,specularColorMap:ft,specularIntensityMap:Ct,transmission:it,transmissionMap:Gt,thicknessMap:ie,gradientMap:Ft,opaque:M.transparent===!1&&M.blending===pi,alphaMap:st,alphaTest:z,alphaHash:lt,combine:M.combine,mapUv:At&&g(M.map.channel),aoMapUv:ne&&g(M.aoMap.channel),lightMapUv:yt&&g(M.lightMap.channel),bumpMapUv:wt&&g(M.bumpMap.channel),normalMapUv:pt&&g(M.normalMap.channel),displacementMapUv:qt&&g(M.displacementMap.channel),emissiveMapUv:Et&&g(M.emissiveMap.channel),metalnessMapUv:D&&g(M.metalnessMap.channel),roughnessMapUv:b&&g(M.roughnessMap.channel),anisotropyMapUv:Z&&g(M.anisotropyMap.channel),clearcoatMapUv:nt&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:ct&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:St&&g(M.sheenRoughnessMap.channel),specularMapUv:vt&&g(M.specularMap.channel),specularColorMapUv:ft&&g(M.specularColorMap.channel),specularIntensityMapUv:Ct&&g(M.specularIntensityMap.channel),transmissionMapUv:Gt&&g(M.transmissionMap.channel),thicknessMapUv:ie&&g(M.thicknessMap.channel),alphaMapUv:st&&g(M.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(pt||N),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:Pt,vertexUv2s:bt,vertexUv3s:Kt,pointsUvs:q.isPoints===!0&&!!I.attributes.uv&&(At||st),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:A,skinning:q.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:ot,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Yt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:At&&M.map.isVideoTexture===!0&&Vt.getTransfer(M.map.colorSpace)===Jt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===re,flipSided:M.side===De,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ht&&M.extensions.derivatives===!0,extensionFragDepth:ht&&M.extensions.fragDepth===!0,extensionDrawBuffers:ht&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ht&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ht&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function h(M){let T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(let R in M.defines)T.push(R),T.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(m(T,M),y(T,M),T.push(i.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function m(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function y(M,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),M.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function w(M){let T=x[M.type],R;if(T){let C=Ye[T];R=xu.clone(C.uniforms)}else R=M.uniforms;return R}function v(M,T){let R;for(let C=0,q=l.length;C<q;C++){let L=l[C];if(L.cacheKey===T){R=L,++R.usedTimes;break}}return R===void 0&&(R=new Pp(i,T,M,r),l.push(R)),R}function S(M){if(--M.usedTimes===0){let T=l.indexOf(M);l[T]=l[l.length-1],l.pop(),M.destroy()}}function _(M){c.remove(M)}function P(){c.dispose()}return{getParameters:f,getProgramCacheKey:h,getUniforms:w,acquireProgram:v,releaseProgram:S,releaseShaderCache:_,programs:l,dispose:P}}function Np(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Rp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function bc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Sc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(A,d,p,x,g,f){let h=i[t];return h===void 0?(h={id:A.id,object:A,geometry:d,material:p,groupOrder:x,renderOrder:A.renderOrder,z:g,group:f},i[t]=h):(h.id=A.id,h.object=A,h.geometry=d,h.material=p,h.groupOrder=x,h.renderOrder=A.renderOrder,h.z=g,h.group=f),t++,h}function o(A,d,p,x,g,f){let h=a(A,d,p,x,g,f);p.transmission>0?n.push(h):p.transparent===!0?s.push(h):e.push(h)}function c(A,d,p,x,g,f){let h=a(A,d,p,x,g,f);p.transmission>0?n.unshift(h):p.transparent===!0?s.unshift(h):e.unshift(h)}function l(A,d){e.length>1&&e.sort(A||Rp),n.length>1&&n.sort(d||bc),s.length>1&&s.sort(d||bc)}function u(){for(let A=t,d=i.length;A<d;A++){let p=i[A];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function Ip(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Sc,i.set(n,[a])):s>=r.length?(a=new Sc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function zp(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Ht};break;case"SpotLight":e={position:new U,direction:new U,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Up(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Op=0;function Bp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Fp(i,t){let e=new zp,n=Up(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new U);let r=new U,a=new Zt,o=new Zt;function c(u,A){let d=0,p=0,x=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let g=0,f=0,h=0,m=0,y=0,w=0,v=0,S=0,_=0,P=0,M=0;u.sort(Bp);let T=A===!0?Math.PI:1;for(let C=0,q=u.length;C<q;C++){let L=u[C],I=L.color,V=L.intensity,F=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=I.r*V*T,p+=I.g*V*T,x+=I.b*V*T;else if(L.isLightProbe){for(let j=0;j<9;j++)s.probe[j].addScaledVector(L.sh.coefficients[j],V);M++}else if(L.isDirectionalLight){let j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity*T),L.castShadow){let X=L.shadow,$=n.get(L);$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,s.directionalShadow[g]=$,s.directionalShadowMap[g]=J,s.directionalShadowMatrix[g]=L.shadow.matrix,w++}s.directional[g]=j,g++}else if(L.isSpotLight){let j=e.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(I).multiplyScalar(V*T),j.distance=F,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,s.spot[h]=j;let X=L.shadow;if(L.map&&(s.spotLightMap[_]=L.map,_++,X.updateMatrices(L),L.castShadow&&P++),s.spotLightMatrix[h]=X.matrix,L.castShadow){let $=n.get(L);$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,s.spotShadow[h]=$,s.spotShadowMap[h]=J,S++}h++}else if(L.isRectAreaLight){let j=e.get(L);j.color.copy(I).multiplyScalar(V),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),s.rectArea[m]=j,m++}else if(L.isPointLight){let j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity*T),j.distance=L.distance,j.decay=L.decay,L.castShadow){let X=L.shadow,$=n.get(L);$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,$.shadowCameraNear=X.camera.near,$.shadowCameraFar=X.camera.far,s.pointShadow[f]=$,s.pointShadowMap[f]=J,s.pointShadowMatrix[f]=L.shadow.matrix,v++}s.point[f]=j,f++}else if(L.isHemisphereLight){let j=e.get(L);j.skyColor.copy(L.color).multiplyScalar(V*T),j.groundColor.copy(L.groundColor).multiplyScalar(V*T),s.hemi[y]=j,y++}}m>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=rt.LTC_FLOAT_1,s.rectAreaLTC2=rt.LTC_FLOAT_2):(s.rectAreaLTC1=rt.LTC_HALF_1,s.rectAreaLTC2=rt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=rt.LTC_FLOAT_1,s.rectAreaLTC2=rt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=rt.LTC_HALF_1,s.rectAreaLTC2=rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=x;let R=s.hash;(R.directionalLength!==g||R.pointLength!==f||R.spotLength!==h||R.rectAreaLength!==m||R.hemiLength!==y||R.numDirectionalShadows!==w||R.numPointShadows!==v||R.numSpotShadows!==S||R.numSpotMaps!==_||R.numLightProbes!==M)&&(s.directional.length=g,s.spot.length=h,s.rectArea.length=m,s.point.length=f,s.hemi.length=y,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=v,s.pointShadowMap.length=v,s.spotShadow.length=S,s.spotShadowMap.length=S,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=v,s.spotLightMatrix.length=S+_-P,s.spotLightMap.length=_,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=M,R.directionalLength=g,R.pointLength=f,R.spotLength=h,R.rectAreaLength=m,R.hemiLength=y,R.numDirectionalShadows=w,R.numPointShadows=v,R.numSpotShadows=S,R.numSpotMaps=_,R.numLightProbes=M,s.version=Op++)}function l(u,A){let d=0,p=0,x=0,g=0,f=0,h=A.matrixWorldInverse;for(let m=0,y=u.length;m<y;m++){let w=u[m];if(w.isDirectionalLight){let v=s.directional[d];v.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(h),d++}else if(w.isSpotLight){let v=s.spot[x];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(h),v.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(h),x++}else if(w.isRectAreaLight){let v=s.rectArea[g];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(h),o.identity(),a.copy(w.matrixWorld),a.premultiply(h),o.extractRotation(a),v.halfWidth.set(w.width*.5,0,0),v.halfHeight.set(0,w.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){let v=s.point[p];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(h),p++}else if(w.isHemisphereLight){let v=s.hemi[f];v.direction.setFromMatrixPosition(w.matrixWorld),v.direction.transformDirection(h),f++}}}return{setup:c,setupView:l,state:s}}function Tc(i,t){let e=new Fp(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(A){n.push(A)}function o(A){s.push(A)}function c(A){e.setup(n,A)}function l(A){e.setupView(n,A)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function kp(i,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),c;return o===void 0?(c=new Tc(i,t),e.set(r,[c])):a>=o.length?(c=new Tc(i,t),o.push(c)):c=o[a],c}function s(){e=new WeakMap}return{get:n,dispose:s}}var uo=class extends qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fo=class extends qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},qp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hp=`uniform sampler2D shadow_pass;
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
}`;function Gp(i,t,e){let n=new Ws,s=new Qt,r=new Qt,a=new ge,o=new uo({depthPacking:Kh}),c=new fo,l={},u=e.maxTextureSize,A={[vn]:De,[De]:vn,[re]:re},d=new oe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qt},radius:{value:4}},vertexShader:qp,fragmentShader:Hp}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let x=new Ie;x.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Wt(x,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ec;let h=this.type;this.render=function(S,_,P){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||S.length===0)return;let M=i.getRenderTarget(),T=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),C=i.state;C.setBlending(xn),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let q=h!==on&&this.type===on,L=h===on&&this.type!==on;for(let I=0,V=S.length;I<V;I++){let F=S[I],J=F.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let j=J.getFrameExtents();if(s.multiply(j),r.copy(J.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,J.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,J.mapSize.y=r.y)),J.map===null||q===!0||L===!0){let $=this.type!==on?{minFilter:pe,magFilter:pe}:{};J.map!==null&&J.map.dispose(),J.map=new ln(s.x,s.y,$),J.map.texture.name=F.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();let X=J.getViewportCount();for(let $=0;$<X;$++){let ot=J.getViewport($);a.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),C.viewport(a),J.updateMatrices(F,$),n=J.getFrustum(),w(_,P,J.camera,F,this.type)}J.isPointLightShadow!==!0&&this.type===on&&m(J,P),J.needsUpdate=!1}h=this.type,f.needsUpdate=!1,i.setRenderTarget(M,T,R)};function m(S,_){let P=t.update(g);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new ln(s.x,s.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(_,null,P,d,g,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(_,null,P,p,g,null)}function y(S,_,P,M){let T=null,R=P.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(R!==void 0)T=R;else if(T=P.isPointLight===!0?c:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0){let C=T.uuid,q=_.uuid,L=l[C];L===void 0&&(L={},l[C]=L);let I=L[q];I===void 0&&(I=T.clone(),L[q]=I,_.addEventListener("dispose",v)),T=I}if(T.visible=_.visible,T.wireframe=_.wireframe,M===on?T.side=_.shadowSide!==null?_.shadowSide:_.side:T.side=_.shadowSide!==null?_.shadowSide:A[_.side],T.alphaMap=_.alphaMap,T.alphaTest=_.alphaTest,T.map=_.map,T.clipShadows=_.clipShadows,T.clippingPlanes=_.clippingPlanes,T.clipIntersection=_.clipIntersection,T.displacementMap=_.displacementMap,T.displacementScale=_.displacementScale,T.displacementBias=_.displacementBias,T.wireframeLinewidth=_.wireframeLinewidth,T.linewidth=_.linewidth,P.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let C=i.properties.get(T);C.light=P}return T}function w(S,_,P,M,T){if(S.visible===!1)return;if(S.layers.test(_.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&T===on)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,S.matrixWorld);let q=t.update(S),L=S.material;if(Array.isArray(L)){let I=q.groups;for(let V=0,F=I.length;V<F;V++){let J=I[V],j=L[J.materialIndex];if(j&&j.visible){let X=y(S,j,M,T);S.onBeforeShadow(i,S,_,P,q,X,J),i.renderBufferDirect(P,null,q,X,S,J),S.onAfterShadow(i,S,_,P,q,X,J)}}}else if(L.visible){let I=y(S,L,M,T);S.onBeforeShadow(i,S,_,P,q,I,null),i.renderBufferDirect(P,null,q,I,S,null),S.onAfterShadow(i,S,_,P,q,I,null)}}let C=S.children;for(let q=0,L=C.length;q<L;q++)w(C[q],_,P,M,T)}function v(S){S.target.removeEventListener("dispose",v);for(let P in l){let M=l[P],T=S.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function Wp(i,t,e){let n=e.isWebGL2;function s(){let z=!1,lt=new ge,ht=null,Pt=new ge(0,0,0,0);return{setMask:function(bt){ht!==bt&&!z&&(i.colorMask(bt,bt,bt,bt),ht=bt)},setLocked:function(bt){z=bt},setClear:function(bt,Kt,Yt,fe,_e){_e===!0&&(bt*=fe,Kt*=fe,Yt*=fe),lt.set(bt,Kt,Yt,fe),Pt.equals(lt)===!1&&(i.clearColor(bt,Kt,Yt,fe),Pt.copy(lt))},reset:function(){z=!1,ht=null,Pt.set(-1,0,0,0)}}}function r(){let z=!1,lt=null,ht=null,Pt=null;return{setTest:function(bt){bt?Mt(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(bt){lt!==bt&&!z&&(i.depthMask(bt),lt=bt)},setFunc:function(bt){if(ht!==bt){switch(bt){case _h:i.depthFunc(i.NEVER);break;case wh:i.depthFunc(i.ALWAYS);break;case bh:i.depthFunc(i.LESS);break;case Ts:i.depthFunc(i.LEQUAL);break;case Sh:i.depthFunc(i.EQUAL);break;case Th:i.depthFunc(i.GEQUAL);break;case Eh:i.depthFunc(i.GREATER);break;case Dh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ht=bt}},setLocked:function(bt){z=bt},setClear:function(bt){Pt!==bt&&(i.clearDepth(bt),Pt=bt)},reset:function(){z=!1,lt=null,ht=null,Pt=null}}}function a(){let z=!1,lt=null,ht=null,Pt=null,bt=null,Kt=null,Yt=null,fe=null,_e=null;return{setTest:function(jt){z||(jt?Mt(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function(jt){lt!==jt&&!z&&(i.stencilMask(jt),lt=jt)},setFunc:function(jt,we,Ke){(ht!==jt||Pt!==we||bt!==Ke)&&(i.stencilFunc(jt,we,Ke),ht=jt,Pt=we,bt=Ke)},setOp:function(jt,we,Ke){(Kt!==jt||Yt!==we||fe!==Ke)&&(i.stencilOp(jt,we,Ke),Kt=jt,Yt=we,fe=Ke)},setLocked:function(jt){z=jt},setClear:function(jt){_e!==jt&&(i.clearStencil(jt),_e=jt)},reset:function(){z=!1,lt=null,ht=null,Pt=null,bt=null,Kt=null,Yt=null,fe=null,_e=null}}}let o=new s,c=new r,l=new a,u=new WeakMap,A=new WeakMap,d={},p={},x=new WeakMap,g=[],f=null,h=!1,m=null,y=null,w=null,v=null,S=null,_=null,P=null,M=new Ht(0,0,0),T=0,R=!1,C=null,q=null,L=null,I=null,V=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,j=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(X)[1]),J=j>=1):X.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),J=j>=2);let $=null,ot={},Y=i.getParameter(i.SCISSOR_BOX),et=i.getParameter(i.VIEWPORT),at=new ge().fromArray(Y),mt=new ge().fromArray(et);function dt(z,lt,ht,Pt){let bt=new Uint8Array(4),Kt=i.createTexture();i.bindTexture(z,Kt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<ht;Yt++)n&&(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)?i.texImage3D(lt,0,i.RGBA,1,1,Pt,0,i.RGBA,i.UNSIGNED_BYTE,bt):i.texImage2D(lt+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,bt);return Kt}let _t={};_t[i.TEXTURE_2D]=dt(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=dt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(_t[i.TEXTURE_2D_ARRAY]=dt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=dt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Mt(i.DEPTH_TEST),c.setFunc(Ts),Et(!1),D(ra),Mt(i.CULL_FACE),pt(xn);function Mt(z){d[z]!==!0&&(i.enable(z),d[z]=!0)}function At(z){d[z]!==!1&&(i.disable(z),d[z]=!1)}function It(z,lt){return p[z]!==lt?(i.bindFramebuffer(z,lt),p[z]=lt,n&&(z===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=lt),z===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=lt)),!0):!1}function k(z,lt){let ht=g,Pt=!1;if(z)if(ht=x.get(lt),ht===void 0&&(ht=[],x.set(lt,ht)),z.isWebGLMultipleRenderTargets){let bt=z.texture;if(ht.length!==bt.length||ht[0]!==i.COLOR_ATTACHMENT0){for(let Kt=0,Yt=bt.length;Kt<Yt;Kt++)ht[Kt]=i.COLOR_ATTACHMENT0+Kt;ht.length=bt.length,Pt=!0}}else ht[0]!==i.COLOR_ATTACHMENT0&&(ht[0]=i.COLOR_ATTACHMENT0,Pt=!0);else ht[0]!==i.BACK&&(ht[0]=i.BACK,Pt=!0);Pt&&(e.isWebGL2?i.drawBuffers(ht):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ht))}function ne(z){return f!==z?(i.useProgram(z),f=z,!0):!1}let yt={[zn]:i.FUNC_ADD,[ah]:i.FUNC_SUBTRACT,[ch]:i.FUNC_REVERSE_SUBTRACT};if(n)yt[la]=i.MIN,yt[ha]=i.MAX;else{let z=t.get("EXT_blend_minmax");z!==null&&(yt[la]=z.MIN_EXT,yt[ha]=z.MAX_EXT)}let wt={[lh]:i.ZERO,[hh]:i.ONE,[uh]:i.SRC_COLOR,[Qr]:i.SRC_ALPHA,[gh]:i.SRC_ALPHA_SATURATE,[ph]:i.DST_COLOR,[dh]:i.DST_ALPHA,[fh]:i.ONE_MINUS_SRC_COLOR,[Vr]:i.ONE_MINUS_SRC_ALPHA,[mh]:i.ONE_MINUS_DST_COLOR,[Ah]:i.ONE_MINUS_DST_ALPHA,[yh]:i.CONSTANT_COLOR,[xh]:i.ONE_MINUS_CONSTANT_COLOR,[Mh]:i.CONSTANT_ALPHA,[vh]:i.ONE_MINUS_CONSTANT_ALPHA};function pt(z,lt,ht,Pt,bt,Kt,Yt,fe,_e,jt){if(z===xn){h===!0&&(At(i.BLEND),h=!1);return}if(h===!1&&(Mt(i.BLEND),h=!0),z!==oh){if(z!==m||jt!==R){if((y!==zn||S!==zn)&&(i.blendEquation(i.FUNC_ADD),y=zn,S=zn),jt)switch(z){case pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oa:i.blendFunc(i.ONE,i.ONE);break;case aa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ca:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case aa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ca:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}w=null,v=null,_=null,P=null,M.set(0,0,0),T=0,m=z,R=jt}return}bt=bt||lt,Kt=Kt||ht,Yt=Yt||Pt,(lt!==y||bt!==S)&&(i.blendEquationSeparate(yt[lt],yt[bt]),y=lt,S=bt),(ht!==w||Pt!==v||Kt!==_||Yt!==P)&&(i.blendFuncSeparate(wt[ht],wt[Pt],wt[Kt],wt[Yt]),w=ht,v=Pt,_=Kt,P=Yt),(fe.equals(M)===!1||_e!==T)&&(i.blendColor(fe.r,fe.g,fe.b,_e),M.copy(fe),T=_e),m=z,R=!1}function qt(z,lt){z.side===re?At(i.CULL_FACE):Mt(i.CULL_FACE);let ht=z.side===De;lt&&(ht=!ht),Et(ht),z.blending===pi&&z.transparent===!1?pt(xn):pt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),c.setFunc(z.depthFunc),c.setTest(z.depthTest),c.setMask(z.depthWrite),o.setMask(z.colorWrite);let Pt=z.stencilWrite;l.setTest(Pt),Pt&&(l.setMask(z.stencilWriteMask),l.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),l.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),N(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Mt(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function Et(z){C!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),C=z)}function D(z){z!==ih?(Mt(i.CULL_FACE),z!==q&&(z===ra?i.cullFace(i.BACK):z===sh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),q=z}function b(z){z!==L&&(J&&i.lineWidth(z),L=z)}function N(z,lt,ht){z?(Mt(i.POLYGON_OFFSET_FILL),(I!==lt||V!==ht)&&(i.polygonOffset(lt,ht),I=lt,V=ht)):At(i.POLYGON_OFFSET_FILL)}function H(z){z?Mt(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function B(z){z===void 0&&(z=i.TEXTURE0+F-1),$!==z&&(i.activeTexture(z),$=z)}function G(z,lt,ht){ht===void 0&&($===null?ht=i.TEXTURE0+F-1:ht=$);let Pt=ot[ht];Pt===void 0&&(Pt={type:void 0,texture:void 0},ot[ht]=Pt),(Pt.type!==z||Pt.texture!==lt)&&($!==ht&&(i.activeTexture(ht),$=ht),i.bindTexture(z,lt||_t[z]),Pt.type=z,Pt.texture=lt)}function it(){let z=ot[$];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function nt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ct(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function gt(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function tt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function zt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Dt(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function St(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function vt(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ft(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ct(z){at.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),at.copy(z))}function Gt(z){mt.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),mt.copy(z))}function ie(z,lt){let ht=A.get(lt);ht===void 0&&(ht=new WeakMap,A.set(lt,ht));let Pt=ht.get(z);Pt===void 0&&(Pt=i.getUniformBlockIndex(lt,z.name),ht.set(z,Pt))}function Ft(z,lt){let Pt=A.get(lt).get(z);u.get(lt)!==Pt&&(i.uniformBlockBinding(lt,Pt,z.__bindingPointIndex),u.set(lt,Pt))}function st(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},$=null,ot={},p={},x=new WeakMap,g=[],f=null,h=!1,m=null,y=null,w=null,v=null,S=null,_=null,P=null,M=new Ht(0,0,0),T=0,R=!1,C=null,q=null,L=null,I=null,V=null,at.set(0,0,i.canvas.width,i.canvas.height),mt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Mt,disable:At,bindFramebuffer:It,drawBuffers:k,useProgram:ne,setBlending:pt,setMaterial:qt,setFlipSided:Et,setCullFace:D,setLineWidth:b,setPolygonOffset:N,setScissorTest:H,activeTexture:B,bindTexture:G,unbindTexture:it,compressedTexImage2D:Z,compressedTexImage3D:nt,texImage2D:vt,texImage3D:ft,updateUBOMapping:ie,uniformBlockBinding:Ft,texStorage2D:Dt,texStorage3D:St,texSubImage2D:ct,texSubImage3D:gt,compressedTexSubImage2D:tt,compressedTexSubImage3D:zt,scissor:Ct,viewport:Gt,reset:st}}function Qp(i,t,e,n,s,r,a){let o=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,A,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,b){return p?new OffscreenCanvas(D,b):Rs("canvas")}function g(D,b,N,H){let B=1;if((D.width>H||D.height>H)&&(B=H/Math.max(D.width,D.height)),B<1||b===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){let G=b?Xr:Math.floor,it=G(B*D.width),Z=G(B*D.height);A===void 0&&(A=x(it,Z));let nt=N?x(it,Z):A;return nt.width=it,nt.height=Z,nt.getContext("2d").drawImage(D,0,0,it,Z),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+it+"x"+Z+")."),nt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function f(D){return Ga(D.width)&&Ga(D.height)}function h(D){return o?!1:D.wrapS!==ke||D.wrapT!==ke||D.minFilter!==pe&&D.minFilter!==Se}function m(D,b){return D.generateMipmaps&&b&&D.minFilter!==pe&&D.minFilter!==Se}function y(D){i.generateMipmap(D)}function w(D,b,N,H,B=!1){if(o===!1)return b;if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let G=b;if(b===i.RED&&(N===i.FLOAT&&(G=i.R32F),N===i.HALF_FLOAT&&(G=i.R16F),N===i.UNSIGNED_BYTE&&(G=i.R8)),b===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(G=i.R8UI),N===i.UNSIGNED_SHORT&&(G=i.R16UI),N===i.UNSIGNED_INT&&(G=i.R32UI),N===i.BYTE&&(G=i.R8I),N===i.SHORT&&(G=i.R16I),N===i.INT&&(G=i.R32I)),b===i.RG&&(N===i.FLOAT&&(G=i.RG32F),N===i.HALF_FLOAT&&(G=i.RG16F),N===i.UNSIGNED_BYTE&&(G=i.RG8)),b===i.RGBA){let it=B?Ps:Vt.getTransfer(H);N===i.FLOAT&&(G=i.RGBA32F),N===i.HALF_FLOAT&&(G=i.RGBA16F),N===i.UNSIGNED_BYTE&&(G=it===Jt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(G=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(G=i.RGB5_A1)}return(G===i.R16F||G===i.R32F||G===i.RG16F||G===i.RG32F||G===i.RGBA16F||G===i.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function v(D,b,N){return m(D,N)===!0||D.isFramebufferTexture&&D.minFilter!==pe&&D.minFilter!==Se?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function S(D){return D===pe||D===ua||D===Ar?i.NEAREST:i.LINEAR}function _(D){let b=D.target;b.removeEventListener("dispose",_),M(b),b.isVideoTexture&&u.delete(b)}function P(D){let b=D.target;b.removeEventListener("dispose",P),R(b)}function M(D){let b=n.get(D);if(b.__webglInit===void 0)return;let N=D.source,H=d.get(N);if(H){let B=H[b.__cacheKey];B.usedTimes--,B.usedTimes===0&&T(D),Object.keys(H).length===0&&d.delete(N)}n.remove(D)}function T(D){let b=n.get(D);i.deleteTexture(b.__webglTexture);let N=D.source,H=d.get(N);delete H[b.__cacheKey],a.memory.textures--}function R(D){let b=D.texture,N=n.get(D),H=n.get(b);if(H.__webglTexture!==void 0&&(i.deleteTexture(H.__webglTexture),a.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(N.__webglFramebuffer[B]))for(let G=0;G<N.__webglFramebuffer[B].length;G++)i.deleteFramebuffer(N.__webglFramebuffer[B][G]);else i.deleteFramebuffer(N.__webglFramebuffer[B]);N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[B])}else{if(Array.isArray(N.__webglFramebuffer))for(let B=0;B<N.__webglFramebuffer.length;B++)i.deleteFramebuffer(N.__webglFramebuffer[B]);else i.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let B=0;B<N.__webglColorRenderbuffer.length;B++)N.__webglColorRenderbuffer[B]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[B]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let B=0,G=b.length;B<G;B++){let it=n.get(b[B]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),a.memory.textures--),n.remove(b[B])}n.remove(b),n.remove(D)}let C=0;function q(){C=0}function L(){let D=C;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),C+=1,D}function I(D){let b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function V(D,b){let N=n.get(D);if(D.isVideoTexture&&qt(D),D.isRenderTargetTexture===!1&&D.version>0&&N.__version!==D.version){let H=D.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(N,D,b);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+b)}function F(D,b){let N=n.get(D);if(D.version>0&&N.__version!==D.version){at(N,D,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+b)}function J(D,b){let N=n.get(D);if(D.version>0&&N.__version!==D.version){at(N,D,b);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+b)}function j(D,b){let N=n.get(D);if(D.version>0&&N.__version!==D.version){mt(N,D,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+b)}let X={[Ui]:i.REPEAT,[ke]:i.CLAMP_TO_EDGE,[_n]:i.MIRRORED_REPEAT},$={[pe]:i.NEAREST,[ua]:i.NEAREST_MIPMAP_NEAREST,[Ar]:i.NEAREST_MIPMAP_LINEAR,[Se]:i.LINEAR,[Oh]:i.LINEAR_MIPMAP_NEAREST,[Oi]:i.LINEAR_MIPMAP_LINEAR},ot={[jh]:i.NEVER,[eu]:i.ALWAYS,[Jh]:i.LESS,[Fc]:i.LEQUAL,[Xh]:i.EQUAL,[tu]:i.GEQUAL,[Zh]:i.GREATER,[$h]:i.NOTEQUAL};function Y(D,b,N){if(N?(i.texParameteri(D,i.TEXTURE_WRAP_S,X[b.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,X[b.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,X[b.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,$[b.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,$[b.minFilter])):(i.texParameteri(D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(b.wrapS!==ke||b.wrapT!==ke)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(D,i.TEXTURE_MAG_FILTER,S(b.magFilter)),i.texParameteri(D,i.TEXTURE_MIN_FILTER,S(b.minFilter)),b.minFilter!==pe&&b.minFilter!==Se&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,ot[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let H=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===pe||b.minFilter!==Ar&&b.minFilter!==Oi||b.type===yn&&t.has("OES_texture_float_linear")===!1||o===!1&&b.type===Bi&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(i.texParameterf(D,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function et(D,b){let N=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",_));let H=b.source,B=d.get(H);B===void 0&&(B={},d.set(H,B));let G=I(b);if(G!==D.__cacheKey){B[G]===void 0&&(B[G]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),B[G].usedTimes++;let it=B[D.__cacheKey];it!==void 0&&(B[D.__cacheKey].usedTimes--,it.usedTimes===0&&T(b)),D.__cacheKey=G,D.__webglTexture=B[G].texture}return N}function at(D,b,N){let H=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(H=i.TEXTURE_3D);let B=et(D,b),G=b.source;e.bindTexture(H,D.__webglTexture,i.TEXTURE0+N);let it=n.get(G);if(G.version!==it.__version||B===!0){e.activeTexture(i.TEXTURE0+N);let Z=Vt.getPrimaries(Vt.workingColorSpace),nt=b.colorSpace===le?null:Vt.getPrimaries(b.colorSpace),ct=b.colorSpace===le||Z===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let gt=h(b)&&f(b.image)===!1,tt=g(b.image,gt,!1,s.maxTextureSize);tt=Et(b,tt);let zt=f(tt)||o,Dt=r.convert(b.format,b.colorSpace),St=r.convert(b.type),vt=w(b.internalFormat,Dt,St,b.colorSpace,b.isVideoTexture);Y(H,b,zt);let ft,Ct=b.mipmaps,Gt=o&&b.isVideoTexture!==!0&&vt!==Uc,ie=it.__version===void 0||B===!0,Ft=v(b,tt,zt);if(b.isDepthTexture)vt=i.DEPTH_COMPONENT,o?b.type===yn?vt=i.DEPTH_COMPONENT32F:b.type===gn?vt=i.DEPTH_COMPONENT24:b.type===On?vt=i.DEPTH24_STENCIL8:vt=i.DEPTH_COMPONENT16:b.type===yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Bn&&vt===i.DEPTH_COMPONENT&&b.type!==Eo&&b.type!==gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=gn,St=r.convert(b.type)),b.format===Mi&&vt===i.DEPTH_COMPONENT&&(vt=i.DEPTH_STENCIL,b.type!==On&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=On,St=r.convert(b.type))),ie&&(Gt?e.texStorage2D(i.TEXTURE_2D,1,vt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,vt,tt.width,tt.height,0,Dt,St,null));else if(b.isDataTexture)if(Ct.length>0&&zt){Gt&&ie&&e.texStorage2D(i.TEXTURE_2D,Ft,vt,Ct[0].width,Ct[0].height);for(let st=0,z=Ct.length;st<z;st++)ft=Ct[st],Gt?e.texSubImage2D(i.TEXTURE_2D,st,0,0,ft.width,ft.height,Dt,St,ft.data):e.texImage2D(i.TEXTURE_2D,st,vt,ft.width,ft.height,0,Dt,St,ft.data);b.generateMipmaps=!1}else Gt?(ie&&e.texStorage2D(i.TEXTURE_2D,Ft,vt,tt.width,tt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt.width,tt.height,Dt,St,tt.data)):e.texImage2D(i.TEXTURE_2D,0,vt,tt.width,tt.height,0,Dt,St,tt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Gt&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ft,vt,Ct[0].width,Ct[0].height,tt.depth);for(let st=0,z=Ct.length;st<z;st++)ft=Ct[st],b.format!==Ne?Dt!==null?Gt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,ft.width,ft.height,tt.depth,Dt,ft.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,vt,ft.width,ft.height,tt.depth,0,ft.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,ft.width,ft.height,tt.depth,Dt,St,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,vt,ft.width,ft.height,tt.depth,0,Dt,St,ft.data)}else{Gt&&ie&&e.texStorage2D(i.TEXTURE_2D,Ft,vt,Ct[0].width,Ct[0].height);for(let st=0,z=Ct.length;st<z;st++)ft=Ct[st],b.format!==Ne?Dt!==null?Gt?e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,ft.width,ft.height,Dt,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,st,vt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?e.texSubImage2D(i.TEXTURE_2D,st,0,0,ft.width,ft.height,Dt,St,ft.data):e.texImage2D(i.TEXTURE_2D,st,vt,ft.width,ft.height,0,Dt,St,ft.data)}else if(b.isDataArrayTexture)Gt?(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ft,vt,tt.width,tt.height,tt.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,Dt,St,tt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,vt,tt.width,tt.height,tt.depth,0,Dt,St,tt.data);else if(b.isData3DTexture)Gt?(ie&&e.texStorage3D(i.TEXTURE_3D,Ft,vt,tt.width,tt.height,tt.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,Dt,St,tt.data)):e.texImage3D(i.TEXTURE_3D,0,vt,tt.width,tt.height,tt.depth,0,Dt,St,tt.data);else if(b.isFramebufferTexture){if(ie)if(Gt)e.texStorage2D(i.TEXTURE_2D,Ft,vt,tt.width,tt.height);else{let st=tt.width,z=tt.height;for(let lt=0;lt<Ft;lt++)e.texImage2D(i.TEXTURE_2D,lt,vt,st,z,0,Dt,St,null),st>>=1,z>>=1}}else if(Ct.length>0&&zt){Gt&&ie&&e.texStorage2D(i.TEXTURE_2D,Ft,vt,Ct[0].width,Ct[0].height);for(let st=0,z=Ct.length;st<z;st++)ft=Ct[st],Gt?e.texSubImage2D(i.TEXTURE_2D,st,0,0,Dt,St,ft):e.texImage2D(i.TEXTURE_2D,st,vt,Dt,St,ft);b.generateMipmaps=!1}else Gt?(ie&&e.texStorage2D(i.TEXTURE_2D,Ft,vt,tt.width,tt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Dt,St,tt)):e.texImage2D(i.TEXTURE_2D,0,vt,Dt,St,tt);m(b,zt)&&y(H),it.__version=G.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function mt(D,b,N){if(b.image.length!==6)return;let H=et(D,b),B=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+N);let G=n.get(B);if(B.version!==G.__version||H===!0){e.activeTexture(i.TEXTURE0+N);let it=Vt.getPrimaries(Vt.workingColorSpace),Z=b.colorSpace===le?null:Vt.getPrimaries(b.colorSpace),nt=b.colorSpace===le||it===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let ct=b.isCompressedTexture||b.image[0].isCompressedTexture,gt=b.image[0]&&b.image[0].isDataTexture,tt=[];for(let st=0;st<6;st++)!ct&&!gt?tt[st]=g(b.image[st],!1,!0,s.maxCubemapSize):tt[st]=gt?b.image[st].image:b.image[st],tt[st]=Et(b,tt[st]);let zt=tt[0],Dt=f(zt)||o,St=r.convert(b.format,b.colorSpace),vt=r.convert(b.type),ft=w(b.internalFormat,St,vt,b.colorSpace),Ct=o&&b.isVideoTexture!==!0,Gt=G.__version===void 0||H===!0,ie=v(b,zt,Dt);Y(i.TEXTURE_CUBE_MAP,b,Dt);let Ft;if(ct){Ct&&Gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ie,ft,zt.width,zt.height);for(let st=0;st<6;st++){Ft=tt[st].mipmaps;for(let z=0;z<Ft.length;z++){let lt=Ft[z];b.format!==Ne?St!==null?Ct?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,z,0,0,lt.width,lt.height,St,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,z,ft,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ct?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,z,0,0,lt.width,lt.height,St,vt,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,z,ft,lt.width,lt.height,0,St,vt,lt.data)}}}else{Ft=b.mipmaps,Ct&&Gt&&(Ft.length>0&&ie++,e.texStorage2D(i.TEXTURE_CUBE_MAP,ie,ft,tt[0].width,tt[0].height));for(let st=0;st<6;st++)if(gt){Ct?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,tt[st].width,tt[st].height,St,vt,tt[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,ft,tt[st].width,tt[st].height,0,St,vt,tt[st].data);for(let z=0;z<Ft.length;z++){let ht=Ft[z].image[st].image;Ct?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,z+1,0,0,ht.width,ht.height,St,vt,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,z+1,ft,ht.width,ht.height,0,St,vt,ht.data)}}else{Ct?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,St,vt,tt[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,ft,St,vt,tt[st]);for(let z=0;z<Ft.length;z++){let lt=Ft[z];Ct?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,z+1,0,0,St,vt,lt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,z+1,ft,St,vt,lt.image[st])}}}m(b,Dt)&&y(i.TEXTURE_CUBE_MAP),G.__version=B.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function dt(D,b,N,H,B,G){let it=r.convert(N.format,N.colorSpace),Z=r.convert(N.type),nt=w(N.internalFormat,it,Z,N.colorSpace);if(!n.get(b).__hasExternalTextures){let gt=Math.max(1,b.width>>G),tt=Math.max(1,b.height>>G);B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?e.texImage3D(B,G,nt,gt,tt,b.depth,0,it,Z,null):e.texImage2D(B,G,nt,gt,tt,0,it,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,D),pt(b)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,B,n.get(N).__webglTexture,0,wt(b)):(B===i.TEXTURE_2D||B>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,B,n.get(N).__webglTexture,G),e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(D,b,N){if(i.bindRenderbuffer(i.RENDERBUFFER,D),b.depthBuffer&&!b.stencilBuffer){let H=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(N||pt(b)){let B=b.depthTexture;B&&B.isDepthTexture&&(B.type===yn?H=i.DEPTH_COMPONENT32F:B.type===gn&&(H=i.DEPTH_COMPONENT24));let G=wt(b);pt(b)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,G,H,b.width,b.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,G,H,b.width,b.height)}else i.renderbufferStorage(i.RENDERBUFFER,H,b.width,b.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,D)}else if(b.depthBuffer&&b.stencilBuffer){let H=wt(b);N&&pt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,H,i.DEPTH24_STENCIL8,b.width,b.height):pt(b)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,H,i.DEPTH24_STENCIL8,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,D)}else{let H=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let B=0;B<H.length;B++){let G=H[B],it=r.convert(G.format,G.colorSpace),Z=r.convert(G.type),nt=w(G.internalFormat,it,Z,G.colorSpace),ct=wt(b);N&&pt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,nt,b.width,b.height):pt(b)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,nt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,nt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(D,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),V(b.depthTexture,0);let H=n.get(b.depthTexture).__webglTexture,B=wt(b);if(b.depthTexture.format===Bn)pt(b)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,H,0,B):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,H,0);else if(b.depthTexture.format===Mi)pt(b)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,H,0,B):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,H,0);else throw new Error("Unknown depthTexture format")}function At(D){let b=n.get(D),N=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!b.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Mt(b.__webglFramebuffer,D)}else if(N){b.__webglDepthbuffer=[];for(let H=0;H<6;H++)e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[H]),b.__webglDepthbuffer[H]=i.createRenderbuffer(),_t(b.__webglDepthbuffer[H],D,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=i.createRenderbuffer(),_t(b.__webglDepthbuffer,D,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(D,b,N){let H=n.get(D);b!==void 0&&dt(H.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&At(D)}function k(D){let b=D.texture,N=n.get(D),H=n.get(b);D.addEventListener("dispose",P),D.isWebGLMultipleRenderTargets!==!0&&(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=b.version,a.memory.textures++);let B=D.isWebGLCubeRenderTarget===!0,G=D.isWebGLMultipleRenderTargets===!0,it=f(D)||o;if(B){N.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(o&&b.mipmaps&&b.mipmaps.length>0){N.__webglFramebuffer[Z]=[];for(let nt=0;nt<b.mipmaps.length;nt++)N.__webglFramebuffer[Z][nt]=i.createFramebuffer()}else N.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){N.__webglFramebuffer=[];for(let Z=0;Z<b.mipmaps.length;Z++)N.__webglFramebuffer[Z]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(G)if(s.drawBuffers){let Z=D.texture;for(let nt=0,ct=Z.length;nt<ct;nt++){let gt=n.get(Z[nt]);gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&D.samples>0&&pt(D)===!1){let Z=G?b:[b];N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let nt=0;nt<Z.length;nt++){let ct=Z[nt];N.__webglColorRenderbuffer[nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[nt]);let gt=r.convert(ct.format,ct.colorSpace),tt=r.convert(ct.type),zt=w(ct.internalFormat,gt,tt,ct.colorSpace,D.isXRRenderTarget===!0),Dt=wt(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,zt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,N.__webglColorRenderbuffer[nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),_t(N.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(B){e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),Y(i.TEXTURE_CUBE_MAP,b,it);for(let Z=0;Z<6;Z++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let nt=0;nt<b.mipmaps.length;nt++)dt(N.__webglFramebuffer[Z][nt],D,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,nt);else dt(N.__webglFramebuffer[Z],D,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);m(b,it)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(G){let Z=D.texture;for(let nt=0,ct=Z.length;nt<ct;nt++){let gt=Z[nt],tt=n.get(gt);e.bindTexture(i.TEXTURE_2D,tt.__webglTexture),Y(i.TEXTURE_2D,gt,it),dt(N.__webglFramebuffer,D,gt,i.COLOR_ATTACHMENT0+nt,i.TEXTURE_2D,0),m(gt,it)&&y(i.TEXTURE_2D)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(o?Z=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(Z,H.__webglTexture),Y(Z,b,it),o&&b.mipmaps&&b.mipmaps.length>0)for(let nt=0;nt<b.mipmaps.length;nt++)dt(N.__webglFramebuffer[nt],D,b,i.COLOR_ATTACHMENT0,Z,nt);else dt(N.__webglFramebuffer,D,b,i.COLOR_ATTACHMENT0,Z,0);m(b,it)&&y(Z),e.unbindTexture()}D.depthBuffer&&At(D)}function ne(D){let b=f(D)||o,N=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let H=0,B=N.length;H<B;H++){let G=N[H];if(m(G,b)){let it=D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Z=n.get(G).__webglTexture;e.bindTexture(it,Z),y(it),e.unbindTexture()}}}function yt(D){if(o&&D.samples>0&&pt(D)===!1){let b=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],N=D.width,H=D.height,B=i.COLOR_BUFFER_BIT,G=[],it=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=n.get(D),nt=D.isWebGLMultipleRenderTargets===!0;if(nt)for(let ct=0;ct<b.length;ct++)e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Z.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Z.__webglFramebuffer);for(let ct=0;ct<b.length;ct++){G.push(i.COLOR_ATTACHMENT0+ct),D.depthBuffer&&G.push(it);let gt=Z.__ignoreDepthValues!==void 0?Z.__ignoreDepthValues:!1;if(gt===!1&&(D.depthBuffer&&(B|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&(B|=i.STENCIL_BUFFER_BIT)),nt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Z.__webglColorRenderbuffer[ct]),gt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[it]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[it])),nt){let tt=n.get(b[ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,tt,0)}i.blitFramebuffer(0,0,N,H,0,0,N,H,B,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,G)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),nt)for(let ct=0;ct<b.length;ct++){e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,Z.__webglColorRenderbuffer[ct]);let gt=n.get(b[ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Z.__webglMultisampledFramebuffer)}}function wt(D){return Math.min(s.maxSamples,D.samples)}function pt(D){let b=n.get(D);return o&&D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function qt(D){let b=a.render.frame;u.get(D)!==b&&(u.set(D,b),D.update())}function Et(D,b){let N=D.colorSpace,H=D.format,B=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===jr||N!==He&&N!==le&&(Vt.getTransfer(N)===Jt?o===!1?t.has("EXT_sRGB")===!0&&H===Ne?(D.format=jr,D.minFilter=Se,D.generateMipmaps=!1):b=Is.sRGBToLinear(b):(H!==Ne||B!==Je)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),b}this.allocateTextureUnit=L,this.resetTextureUnits=q,this.setTexture2D=V,this.setTexture2DArray=F,this.setTexture3D=J,this.setTextureCube=j,this.rebindTextures=It,this.setupRenderTarget=k,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=pt}function Vp(i,t,e){let n=e.isWebGL2;function s(r,a=le){let o,c=Vt.getTransfer(a);if(r===Je)return i.UNSIGNED_BYTE;if(r===Cc)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Nc)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Bh)return i.BYTE;if(r===Fh)return i.SHORT;if(r===Eo)return i.UNSIGNED_SHORT;if(r===Lc)return i.INT;if(r===gn)return i.UNSIGNED_INT;if(r===yn)return i.FLOAT;if(r===Bi)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===kh)return i.ALPHA;if(r===Ne)return i.RGBA;if(r===qh)return i.LUMINANCE;if(r===Hh)return i.LUMINANCE_ALPHA;if(r===Bn)return i.DEPTH_COMPONENT;if(r===Mi)return i.DEPTH_STENCIL;if(r===jr)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Gh)return i.RED;if(r===Rc)return i.RED_INTEGER;if(r===Wh)return i.RG;if(r===Ic)return i.RG_INTEGER;if(r===zc)return i.RGBA_INTEGER;if(r===pr||r===mr||r===gr||r===yr)if(c===Jt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===pr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===mr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===gr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===yr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===pr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===mr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===gr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===yr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===fa||r===da||r===Aa||r===pa)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===fa)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===da)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Aa)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===pa)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Uc)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ma||r===ga)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ma)return c===Jt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===ga)return c===Jt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ya||r===xa||r===Ma||r===va||r===_a||r===wa||r===ba||r===Sa||r===Ta||r===Ea||r===Da||r===Pa||r===La||r===Ca)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===ya)return c===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===xa)return c===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ma)return c===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===va)return c===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_a)return c===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===wa)return c===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ba)return c===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Sa)return c===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ta)return c===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ea)return c===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Da)return c===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Pa)return c===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===La)return c===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ca)return c===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xr||r===Na||r===Ra)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===xr)return c===Jt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Na)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ra)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Qh||r===Ia||r===za||r===Ua)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===xr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ia)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===za)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ua)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===On?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Ao=class extends ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},je=class extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}},Kp={type:"move"},zi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let g of t.hand.values()){let f=e.getJointPose(g,n),h=this._getHandJoint(l,g);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}let u=l.joints["index-finger-tip"],A=l.joints["thumb-tip"],d=u.position.distanceTo(A.position),p=.02,x=.005;l.inputState.pinching&&d>p+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Kp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new je;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},po=class extends wn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,A=null,d=null,p=null,x=null,g=e.getContextAttributes(),f=null,h=null,m=[],y=[],w=new Qt,v=null,S=new ve;S.layers.enable(1),S.viewport=new ge;let _=new ve;_.layers.enable(2),_.viewport=new ge;let P=[S,_],M=new Ao;M.layers.enable(1),M.layers.enable(2);let T=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let et=m[Y];return et===void 0&&(et=new zi,m[Y]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Y){let et=m[Y];return et===void 0&&(et=new zi,m[Y]=et),et.getGripSpace()},this.getHand=function(Y){let et=m[Y];return et===void 0&&(et=new zi,m[Y]=et),et.getHandSpace()};function C(Y){let et=y.indexOf(Y.inputSource);if(et===-1)return;let at=m[et];at!==void 0&&(at.update(Y.inputSource,Y.frame,l||a),at.dispatchEvent({type:Y.type,data:Y.inputSource}))}function q(){s.removeEventListener("select",C),s.removeEventListener("selectstart",C),s.removeEventListener("selectend",C),s.removeEventListener("squeeze",C),s.removeEventListener("squeezestart",C),s.removeEventListener("squeezeend",C),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",L);for(let Y=0;Y<m.length;Y++){let et=y[Y];et!==null&&(y[Y]=null,m[Y].disconnect(et))}T=null,R=null,t.setRenderTarget(f),p=null,d=null,A=null,s=null,h=null,ot.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return A},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",C),s.addEventListener("selectstart",C),s.addEventListener("selectend",C),s.addEventListener("squeeze",C),s.addEventListener("squeezestart",C),s.addEventListener("squeezeend",C),s.addEventListener("end",q),s.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(w),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let et={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),h=new ln(p.framebufferWidth,p.framebufferHeight,{format:Ne,type:Je,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let et=null,at=null,mt=null;g.depth&&(mt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=g.stencil?Mi:Bn,at=g.stencil?On:gn);let dt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};A=new XRWebGLBinding(s,e),d=A.createProjectionLayer(dt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),h=new ln(d.textureWidth,d.textureHeight,{format:Ne,type:Je,depthTexture:new Vs(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});let _t=t.properties.get(h);_t.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ot.setContext(s),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function L(Y){for(let et=0;et<Y.removed.length;et++){let at=Y.removed[et],mt=y.indexOf(at);mt>=0&&(y[mt]=null,m[mt].disconnect(at))}for(let et=0;et<Y.added.length;et++){let at=Y.added[et],mt=y.indexOf(at);if(mt===-1){for(let _t=0;_t<m.length;_t++)if(_t>=y.length){y.push(at),mt=_t;break}else if(y[_t]===null){y[_t]=at,mt=_t;break}if(mt===-1)break}let dt=m[mt];dt&&dt.connect(at)}}let I=new U,V=new U;function F(Y,et,at){I.setFromMatrixPosition(et.matrixWorld),V.setFromMatrixPosition(at.matrixWorld);let mt=I.distanceTo(V),dt=et.projectionMatrix.elements,_t=at.projectionMatrix.elements,Mt=dt[14]/(dt[10]-1),At=dt[14]/(dt[10]+1),It=(dt[9]+1)/dt[5],k=(dt[9]-1)/dt[5],ne=(dt[8]-1)/dt[0],yt=(_t[8]+1)/_t[0],wt=Mt*ne,pt=Mt*yt,qt=mt/(-ne+yt),Et=qt*-ne;et.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Et),Y.translateZ(qt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();let D=Mt+qt,b=At+qt,N=wt-Et,H=pt+(mt-Et),B=It*At/b*D,G=k*At/b*D;Y.projectionMatrix.makePerspective(N,H,B,G,D,b),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function J(Y,et){et===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(et.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;M.near=_.near=S.near=Y.near,M.far=_.far=S.far=Y.far,(T!==M.near||R!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,R=M.far);let et=Y.parent,at=M.cameras;J(M,et);for(let mt=0;mt<at.length;mt++)J(at[mt],et);at.length===2?F(M,S,_):M.projectionMatrix.copy(S.projectionMatrix),j(Y,M,et)};function j(Y,et,at){at===null?Y.matrix.copy(et.matrixWorld):(Y.matrix.copy(at.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(et.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(et.projectionMatrix),Y.projectionMatrixInverse.copy(et.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Jr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)};let X=null;function $(Y,et){if(u=et.getViewerPose(l||a),x=et,u!==null){let at=u.views;p!==null&&(t.setRenderTargetFramebuffer(h,p.framebuffer),t.setRenderTarget(h));let mt=!1;at.length!==M.cameras.length&&(M.cameras.length=0,mt=!0);for(let dt=0;dt<at.length;dt++){let _t=at[dt],Mt=null;if(p!==null)Mt=p.getViewport(_t);else{let It=A.getViewSubImage(d,_t);Mt=It.viewport,dt===0&&(t.setRenderTargetTextures(h,It.colorTexture,d.ignoreDepthValues?void 0:It.depthStencilTexture),t.setRenderTarget(h))}let At=P[dt];At===void 0&&(At=new ve,At.layers.enable(dt),At.viewport=new ge,P[dt]=At),At.matrix.fromArray(_t.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(_t.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),dt===0&&(M.matrix.copy(At.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),mt===!0&&M.cameras.push(At)}}for(let at=0;at<m.length;at++){let mt=y[at],dt=m[at];mt!==null&&dt!==void 0&&dt.update(mt,et,l||a)}X&&X(Y,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),x=null}let ot=new Gc;ot.setAnimationLoop($),this.setAnimationLoop=function(Y){X=Y},this.dispose=function(){}}};function Yp(i,t){function e(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function n(f,h){h.color.getRGB(f.fogColor.value,Hc(i)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function s(f,h,m,y,w){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(f,h):h.isMeshToonMaterial?(r(f,h),A(f,h)):h.isMeshPhongMaterial?(r(f,h),u(f,h)):h.isMeshStandardMaterial?(r(f,h),d(f,h),h.isMeshPhysicalMaterial&&p(f,h,w)):h.isMeshMatcapMaterial?(r(f,h),x(f,h)):h.isMeshDepthMaterial?r(f,h):h.isMeshDistanceMaterial?(r(f,h),g(f,h)):h.isMeshNormalMaterial?r(f,h):h.isLineBasicMaterial?(a(f,h),h.isLineDashedMaterial&&o(f,h)):h.isPointsMaterial?c(f,h,m,y):h.isSpriteMaterial?l(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,e(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,e(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===De&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,e(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===De&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,e(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,e(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);let m=t.get(h).envMap;if(m&&(f.envMap.value=m,f.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap){f.lightMap.value=h.lightMap;let y=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=h.lightMapIntensity*y,e(h.lightMap,f.lightMapTransform)}h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,f.aoMapTransform))}function a(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,e(h.map,f.mapTransform))}function o(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function c(f,h,m,y){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*m,f.scale.value=y*.5,h.map&&(f.map.value=h.map,e(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function l(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,e(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function u(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function A(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function d(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,f.roughnessMapTransform)),t.get(h).envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function p(f,h,m){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===De&&f.clearcoatNormalScale.value.negate())),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=m.texture,f.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,f.specularIntensityMapTransform))}function x(f,h){h.matcap&&(f.matcap.value=h.matcap)}function g(f,h){let m=t.get(h).light;f.referencePosition.value.setFromMatrixPosition(m.matrixWorld),f.nearDistance.value=m.shadow.camera.near,f.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function jp(i,t,e,n){let s={},r={},a=[],o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(m,y){let w=y.program;n.uniformBlockBinding(m,w)}function l(m,y){let w=s[m.id];w===void 0&&(x(m),w=u(m),s[m.id]=w,m.addEventListener("dispose",f));let v=y.program;n.updateUBOMapping(m,v);let S=t.render.frame;r[m.id]!==S&&(d(m),r[m.id]=S)}function u(m){let y=A();m.__bindingPointIndex=y;let w=i.createBuffer(),v=m.__size,S=m.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,v,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,w),w}function A(){for(let m=0;m<o;m++)if(a.indexOf(m)===-1)return a.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(m){let y=s[m.id],w=m.uniforms,v=m.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let S=0,_=w.length;S<_;S++){let P=Array.isArray(w[S])?w[S]:[w[S]];for(let M=0,T=P.length;M<T;M++){let R=P[M];if(p(R,S,M,v)===!0){let C=R.__offset,q=Array.isArray(R.value)?R.value:[R.value],L=0;for(let I=0;I<q.length;I++){let V=q[I],F=g(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,C+L,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,L),L+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(m,y,w,v){let S=m.value,_=y+"_"+w;if(v[_]===void 0)return typeof S=="number"||typeof S=="boolean"?v[_]=S:v[_]=S.clone(),!0;{let P=v[_];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return v[_]=S,!0}else if(P.equals(S)===!1)return P.copy(S),!0}return!1}function x(m){let y=m.uniforms,w=0,v=16;for(let _=0,P=y.length;_<P;_++){let M=Array.isArray(y[_])?y[_]:[y[_]];for(let T=0,R=M.length;T<R;T++){let C=M[T],q=Array.isArray(C.value)?C.value:[C.value];for(let L=0,I=q.length;L<I;L++){let V=q[L],F=g(V),J=w%v;J!==0&&v-J<F.boundary&&(w+=v-J),C.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=w,w+=F.storage}}}let S=w%v;return S>0&&(w+=v-S),m.__size=w,m.__cache={},this}function g(m){let y={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(y.boundary=4,y.storage=4):m.isVector2?(y.boundary=8,y.storage=8):m.isVector3||m.isColor?(y.boundary=16,y.storage=12):m.isVector4?(y.boundary=16,y.storage=16):m.isMatrix3?(y.boundary=48,y.storage=48):m.isMatrix4?(y.boundary=64,y.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),y}function f(m){let y=m.target;y.removeEventListener("dispose",f);let w=a.indexOf(y.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function h(){for(let m in s)i.deleteBuffer(s[m]);a=[],s={},r={}}return{bind:c,update:l,dispose:h}}var qi=class{constructor(t={}){let{canvas:e=iu(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:A=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let p=new Uint32Array(4),x=new Int32Array(4),g=null,f=null,h=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=me,this._useLegacyLights=!1,this.toneMapping=Mn,this.toneMappingExposure=1;let y=this,w=!1,v=0,S=0,_=null,P=-1,M=null,T=new ge,R=new ge,C=null,q=new Ht(0),L=0,I=e.width,V=e.height,F=1,J=null,j=null,X=new ge(0,0,I,V),$=new ge(0,0,I,V),ot=!1,Y=new Ws,et=!1,at=!1,mt=null,dt=new Zt,_t=new Qt,Mt=new U,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function It(){return _===null?F:1}let k=n;function ne(E,O){for(let Q=0;Q<E.length;Q++){let K=E[Q],W=e.getContext(K,O);if(W!==null)return W}return null}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:A};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r160"),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",z,!1),e.addEventListener("webglcontextcreationerror",lt,!1),k===null){let O=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&O.shift(),k=ne(O,E),k===null)throw ne(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let yt,wt,pt,qt,Et,D,b,N,H,B,G,it,Z,nt,ct,gt,tt,zt,Dt,St,vt,ft,Ct,Gt;function ie(){yt=new AA(k),wt=new cA(k,yt,t),yt.init(wt),ft=new Vp(k,yt,wt),pt=new Wp(k,yt,wt),qt=new gA(k),Et=new Np,D=new Qp(k,yt,pt,Et,wt,ft,qt),b=new hA(y),N=new dA(y),H=new bu(k,wt),Ct=new oA(k,yt,H,wt),B=new pA(k,H,qt,Ct),G=new vA(k,B,H,qt),Dt=new MA(k,wt,D),gt=new lA(Et),it=new Cp(y,b,N,yt,wt,Ct,gt),Z=new Yp(y,Et),nt=new Ip,ct=new kp(yt,wt),zt=new rA(y,b,N,pt,G,d,c),tt=new Gp(y,G,wt),Gt=new jp(k,qt,wt,pt),St=new aA(k,yt,qt,wt),vt=new mA(k,yt,qt,wt),qt.programs=it.programs,y.capabilities=wt,y.extensions=yt,y.properties=Et,y.renderLists=nt,y.shadowMap=tt,y.state=pt,y.info=qt}ie();let Ft=new po(y,k);this.xr=Ft,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let E=yt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=yt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(E){E!==void 0&&(F=E,this.setSize(I,V,!1))},this.getSize=function(E){return E.set(I,V)},this.setSize=function(E,O,Q=!0){if(Ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=E,V=O,e.width=Math.floor(E*F),e.height=Math.floor(O*F),Q===!0&&(e.style.width=E+"px",e.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(I*F,V*F).floor()},this.setDrawingBufferSize=function(E,O,Q){I=E,V=O,F=Q,e.width=Math.floor(E*Q),e.height=Math.floor(O*Q),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy(X)},this.setViewport=function(E,O,Q,K){E.isVector4?X.set(E.x,E.y,E.z,E.w):X.set(E,O,Q,K),pt.viewport(T.copy(X).multiplyScalar(F).floor())},this.getScissor=function(E){return E.copy($)},this.setScissor=function(E,O,Q,K){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,O,Q,K),pt.scissor(R.copy($).multiplyScalar(F).floor())},this.getScissorTest=function(){return ot},this.setScissorTest=function(E){pt.setScissorTest(ot=E)},this.setOpaqueSort=function(E){J=E},this.setTransparentSort=function(E){j=E},this.getClearColor=function(E){return E.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(E=!0,O=!0,Q=!0){let K=0;if(E){let W=!1;if(_!==null){let ut=_.texture.format;W=ut===zc||ut===Ic||ut===Rc}if(W){let ut=_.texture.type,xt=ut===Je||ut===gn||ut===Eo||ut===On||ut===Cc||ut===Nc,Tt=zt.getClearColor(),Lt=zt.getClearAlpha(),Bt=Tt.r,Nt=Tt.g,Rt=Tt.b;xt?(p[0]=Bt,p[1]=Nt,p[2]=Rt,p[3]=Lt,k.clearBufferuiv(k.COLOR,0,p)):(x[0]=Bt,x[1]=Nt,x[2]=Rt,x[3]=Lt,k.clearBufferiv(k.COLOR,0,x))}else K|=k.COLOR_BUFFER_BIT}O&&(K|=k.DEPTH_BUFFER_BIT),Q&&(K|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",z,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),nt.dispose(),ct.dispose(),Et.dispose(),b.dispose(),N.dispose(),G.dispose(),Ct.dispose(),Gt.dispose(),it.dispose(),Ft.dispose(),Ft.removeEventListener("sessionstart",_e),Ft.removeEventListener("sessionend",jt),mt&&(mt.dispose(),mt=null),we.stop()};function st(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function z(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let E=qt.autoReset,O=tt.enabled,Q=tt.autoUpdate,K=tt.needsUpdate,W=tt.type;ie(),qt.autoReset=E,tt.enabled=O,tt.autoUpdate=Q,tt.needsUpdate=K,tt.type=W}function lt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ht(E){let O=E.target;O.removeEventListener("dispose",ht),Pt(O)}function Pt(E){bt(E),Et.remove(E)}function bt(E){let O=Et.get(E).programs;O!==void 0&&(O.forEach(function(Q){it.releaseProgram(Q)}),E.isShaderMaterial&&it.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,Q,K,W,ut){O===null&&(O=At);let xt=W.isMesh&&W.matrixWorld.determinant()<0,Tt=ql(E,O,Q,K,W);pt.setMaterial(K,xt);let Lt=Q.index,Bt=1;if(K.wireframe===!0){if(Lt=B.getWireframeAttribute(Q),Lt===void 0)return;Bt=2}let Nt=Q.drawRange,Rt=Q.attributes.position,ae=Nt.start*Bt,Pe=(Nt.start+Nt.count)*Bt;ut!==null&&(ae=Math.max(ae,ut.start*Bt),Pe=Math.min(Pe,(ut.start+ut.count)*Bt)),Lt!==null?(ae=Math.max(ae,0),Pe=Math.min(Pe,Lt.count)):Rt!=null&&(ae=Math.max(ae,0),Pe=Math.min(Pe,Rt.count));let de=Pe-ae;if(de<0||de===1/0)return;Ct.setup(W,K,Tt,Q,Lt);let Ze,ee=St;if(Lt!==null&&(Ze=H.get(Lt),ee=vt,ee.setIndex(Ze)),W.isMesh)K.wireframe===!0?(pt.setLineWidth(K.wireframeLinewidth*It()),ee.setMode(k.LINES)):ee.setMode(k.TRIANGLES);else if(W.isLine){let kt=K.linewidth;kt===void 0&&(kt=1),pt.setLineWidth(kt*It()),W.isLineSegments?ee.setMode(k.LINES):W.isLineLoop?ee.setMode(k.LINE_LOOP):ee.setMode(k.LINE_STRIP)}else W.isPoints?ee.setMode(k.POINTS):W.isSprite&&ee.setMode(k.TRIANGLES);if(W.isBatchedMesh)ee.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)ee.renderInstances(ae,de,W.count);else if(Q.isInstancedBufferGeometry){let kt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,rr=Math.min(Q.instanceCount,kt);ee.renderInstances(ae,de,rr)}else ee.render(ae,de)};function Kt(E,O,Q){E.transparent===!0&&E.side===re&&E.forceSinglePass===!1?(E.side=De,E.needsUpdate=!0,ts(E,O,Q),E.side=vn,E.needsUpdate=!0,ts(E,O,Q),E.side=re):ts(E,O,Q)}this.compile=function(E,O,Q=null){Q===null&&(Q=E),f=ct.get(Q),f.init(),m.push(f),Q.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(f.pushLight(W),W.castShadow&&f.pushShadow(W))}),E!==Q&&E.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(f.pushLight(W),W.castShadow&&f.pushShadow(W))}),f.setupLights(y._useLegacyLights);let K=new Set;return E.traverse(function(W){let ut=W.material;if(ut)if(Array.isArray(ut))for(let xt=0;xt<ut.length;xt++){let Tt=ut[xt];Kt(Tt,Q,W),K.add(Tt)}else Kt(ut,Q,W),K.add(ut)}),m.pop(),f=null,K},this.compileAsync=function(E,O,Q=null){let K=this.compile(E,O,Q);return new Promise(W=>{function ut(){if(K.forEach(function(xt){Et.get(xt).currentProgram.isReady()&&K.delete(xt)}),K.size===0){W(E);return}setTimeout(ut,10)}yt.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let Yt=null;function fe(E){Yt&&Yt(E)}function _e(){we.stop()}function jt(){we.start()}let we=new Gc;we.setAnimationLoop(fe),typeof self<"u"&&we.setContext(self),this.setAnimationLoop=function(E){Yt=E,Ft.setAnimationLoop(E),E===null?we.stop():we.start()},Ft.addEventListener("sessionstart",_e),Ft.addEventListener("sessionend",jt),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ft.enabled===!0&&Ft.isPresenting===!0&&(Ft.cameraAutoUpdate===!0&&Ft.updateCamera(O),O=Ft.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,O,_),f=ct.get(E,m.length),f.init(),m.push(f),dt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Y.setFromProjectionMatrix(dt),at=this.localClippingEnabled,et=gt.init(this.clippingPlanes,at),g=nt.get(E,h.length),g.init(),h.push(g),Ke(E,O,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(J,j),this.info.render.frame++,et===!0&&gt.beginShadows();let Q=f.state.shadowsArray;if(tt.render(Q,E,O),et===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),zt.render(g,E),f.setupLights(y._useLegacyLights),O.isArrayCamera){let K=O.cameras;for(let W=0,ut=K.length;W<ut;W++){let xt=K[W];$o(g,E,xt,xt.viewport)}}else $o(g,E,O);_!==null&&(D.updateMultisampleRenderTarget(_),D.updateRenderTargetMipmap(_)),E.isScene===!0&&E.onAfterRender(y,E,O),Ct.resetDefaultState(),P=-1,M=null,m.pop(),m.length>0?f=m[m.length-1]:f=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function Ke(E,O,Q,K){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)Q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Y.intersectsSprite(E)){K&&Mt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(dt);let xt=G.update(E),Tt=E.material;Tt.visible&&g.push(E,xt,Tt,Q,Mt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Y.intersectsObject(E))){let xt=G.update(E),Tt=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Mt.copy(E.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Mt.copy(xt.boundingSphere.center)),Mt.applyMatrix4(E.matrixWorld).applyMatrix4(dt)),Array.isArray(Tt)){let Lt=xt.groups;for(let Bt=0,Nt=Lt.length;Bt<Nt;Bt++){let Rt=Lt[Bt],ae=Tt[Rt.materialIndex];ae&&ae.visible&&g.push(E,xt,ae,Q,Mt.z,Rt)}}else Tt.visible&&g.push(E,xt,Tt,Q,Mt.z,null)}}let ut=E.children;for(let xt=0,Tt=ut.length;xt<Tt;xt++)Ke(ut[xt],O,Q,K)}function $o(E,O,Q,K){let W=E.opaque,ut=E.transmissive,xt=E.transparent;f.setupLightsView(Q),et===!0&&gt.setGlobalState(y.clippingPlanes,Q),ut.length>0&&kl(W,ut,O,Q),K&&pt.viewport(T.copy(K)),W.length>0&&$i(W,O,Q),ut.length>0&&$i(ut,O,Q),xt.length>0&&$i(xt,O,Q),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function kl(E,O,Q,K){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;let ut=wt.isWebGL2;mt===null&&(mt=new ln(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")?Bi:Je,minFilter:Oi,samples:ut?4:0})),y.getDrawingBufferSize(_t),ut?mt.setSize(_t.x,_t.y):mt.setSize(Xr(_t.x),Xr(_t.y));let xt=y.getRenderTarget();y.setRenderTarget(mt),y.getClearColor(q),L=y.getClearAlpha(),L<1&&y.setClearColor(16777215,.5),y.clear();let Tt=y.toneMapping;y.toneMapping=Mn,$i(E,Q,K),D.updateMultisampleRenderTarget(mt),D.updateRenderTargetMipmap(mt);let Lt=!1;for(let Bt=0,Nt=O.length;Bt<Nt;Bt++){let Rt=O[Bt],ae=Rt.object,Pe=Rt.geometry,de=Rt.material,Ze=Rt.group;if(de.side===re&&ae.layers.test(K.layers)){let ee=de.side;de.side=De,de.needsUpdate=!0,ta(ae,Q,K,Pe,de,Ze),de.side=ee,de.needsUpdate=!0,Lt=!0}}Lt===!0&&(D.updateMultisampleRenderTarget(mt),D.updateRenderTargetMipmap(mt)),y.setRenderTarget(xt),y.setClearColor(q,L),y.toneMapping=Tt}function $i(E,O,Q){let K=O.isScene===!0?O.overrideMaterial:null;for(let W=0,ut=E.length;W<ut;W++){let xt=E[W],Tt=xt.object,Lt=xt.geometry,Bt=K===null?xt.material:K,Nt=xt.group;Tt.layers.test(Q.layers)&&ta(Tt,O,Q,Lt,Bt,Nt)}}function ta(E,O,Q,K,W,ut){E.onBeforeRender(y,O,Q,K,W,ut),E.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(y,O,Q,K,E,ut),W.transparent===!0&&W.side===re&&W.forceSinglePass===!1?(W.side=De,W.needsUpdate=!0,y.renderBufferDirect(Q,O,K,W,E,ut),W.side=vn,W.needsUpdate=!0,y.renderBufferDirect(Q,O,K,W,E,ut),W.side=re):y.renderBufferDirect(Q,O,K,W,E,ut),E.onAfterRender(y,O,Q,K,W,ut)}function ts(E,O,Q){O.isScene!==!0&&(O=At);let K=Et.get(E),W=f.state.lights,ut=f.state.shadowsArray,xt=W.state.version,Tt=it.getParameters(E,W.state,ut,O,Q),Lt=it.getProgramCacheKey(Tt),Bt=K.programs;K.environment=E.isMeshStandardMaterial?O.environment:null,K.fog=O.fog,K.envMap=(E.isMeshStandardMaterial?N:b).get(E.envMap||K.environment),Bt===void 0&&(E.addEventListener("dispose",ht),Bt=new Map,K.programs=Bt);let Nt=Bt.get(Lt);if(Nt!==void 0){if(K.currentProgram===Nt&&K.lightsStateVersion===xt)return na(E,Tt),Nt}else Tt.uniforms=it.getUniforms(E),E.onBuild(Q,Tt,y),E.onBeforeCompile(Tt,y),Nt=it.acquireProgram(Tt,Lt),Bt.set(Lt,Nt),K.uniforms=Tt.uniforms;let Rt=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Rt.clippingPlanes=gt.uniform),na(E,Tt),K.needsLights=Gl(E),K.lightsStateVersion=xt,K.needsLights&&(Rt.ambientLightColor.value=W.state.ambient,Rt.lightProbe.value=W.state.probe,Rt.directionalLights.value=W.state.directional,Rt.directionalLightShadows.value=W.state.directionalShadow,Rt.spotLights.value=W.state.spot,Rt.spotLightShadows.value=W.state.spotShadow,Rt.rectAreaLights.value=W.state.rectArea,Rt.ltc_1.value=W.state.rectAreaLTC1,Rt.ltc_2.value=W.state.rectAreaLTC2,Rt.pointLights.value=W.state.point,Rt.pointLightShadows.value=W.state.pointShadow,Rt.hemisphereLights.value=W.state.hemi,Rt.directionalShadowMap.value=W.state.directionalShadowMap,Rt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Rt.spotShadowMap.value=W.state.spotShadowMap,Rt.spotLightMatrix.value=W.state.spotLightMatrix,Rt.spotLightMap.value=W.state.spotLightMap,Rt.pointShadowMap.value=W.state.pointShadowMap,Rt.pointShadowMatrix.value=W.state.pointShadowMatrix),K.currentProgram=Nt,K.uniformsList=null,Nt}function ea(E){if(E.uniformsList===null){let O=E.currentProgram.getUniforms();E.uniformsList=gi.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function na(E,O){let Q=Et.get(E);Q.outputColorSpace=O.outputColorSpace,Q.batching=O.batching,Q.instancing=O.instancing,Q.instancingColor=O.instancingColor,Q.skinning=O.skinning,Q.morphTargets=O.morphTargets,Q.morphNormals=O.morphNormals,Q.morphColors=O.morphColors,Q.morphTargetsCount=O.morphTargetsCount,Q.numClippingPlanes=O.numClippingPlanes,Q.numIntersection=O.numClipIntersection,Q.vertexAlphas=O.vertexAlphas,Q.vertexTangents=O.vertexTangents,Q.toneMapping=O.toneMapping}function ql(E,O,Q,K,W){O.isScene!==!0&&(O=At),D.resetTextureUnits();let ut=O.fog,xt=K.isMeshStandardMaterial?O.environment:null,Tt=_===null?y.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:He,Lt=(K.isMeshStandardMaterial?N:b).get(K.envMap||xt),Bt=K.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Nt=!!Q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Rt=!!Q.morphAttributes.position,ae=!!Q.morphAttributes.normal,Pe=!!Q.morphAttributes.color,de=Mn;K.toneMapped&&(_===null||_.isXRRenderTarget===!0)&&(de=y.toneMapping);let Ze=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ee=Ze!==void 0?Ze.length:0,kt=Et.get(K),rr=f.state.lights;if(et===!0&&(at===!0||E!==M)){let ze=E===M&&K.id===P;gt.setState(K,E,ze)}let se=!1;K.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==rr.state.version||kt.outputColorSpace!==Tt||W.isBatchedMesh&&kt.batching===!1||!W.isBatchedMesh&&kt.batching===!0||W.isInstancedMesh&&kt.instancing===!1||!W.isInstancedMesh&&kt.instancing===!0||W.isSkinnedMesh&&kt.skinning===!1||!W.isSkinnedMesh&&kt.skinning===!0||W.isInstancedMesh&&kt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&kt.instancingColor===!1&&W.instanceColor!==null||kt.envMap!==Lt||K.fog===!0&&kt.fog!==ut||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==gt.numPlanes||kt.numIntersection!==gt.numIntersection)||kt.vertexAlphas!==Bt||kt.vertexTangents!==Nt||kt.morphTargets!==Rt||kt.morphNormals!==ae||kt.morphColors!==Pe||kt.toneMapping!==de||wt.isWebGL2===!0&&kt.morphTargetsCount!==ee)&&(se=!0):(se=!0,kt.__version=K.version);let Tn=kt.currentProgram;se===!0&&(Tn=ts(K,O,W));let ia=!1,Ei=!1,or=!1,ye=Tn.getUniforms(),En=kt.uniforms;if(pt.useProgram(Tn.program)&&(ia=!0,Ei=!0,or=!0),K.id!==P&&(P=K.id,Ei=!0),ia||M!==E){ye.setValue(k,"projectionMatrix",E.projectionMatrix),ye.setValue(k,"viewMatrix",E.matrixWorldInverse);let ze=ye.map.cameraPosition;ze!==void 0&&ze.setValue(k,Mt.setFromMatrixPosition(E.matrixWorld)),wt.logarithmicDepthBuffer&&ye.setValue(k,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&ye.setValue(k,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Ei=!0,or=!0)}if(W.isSkinnedMesh){ye.setOptional(k,W,"bindMatrix"),ye.setOptional(k,W,"bindMatrixInverse");let ze=W.skeleton;ze&&(wt.floatVertexTextures?(ze.boneTexture===null&&ze.computeBoneTexture(),ye.setValue(k,"boneTexture",ze.boneTexture,D)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(ye.setOptional(k,W,"batchingTexture"),ye.setValue(k,"batchingTexture",W._matricesTexture,D));let ar=Q.morphAttributes;if((ar.position!==void 0||ar.normal!==void 0||ar.color!==void 0&&wt.isWebGL2===!0)&&Dt.update(W,Q,Tn),(Ei||kt.receiveShadow!==W.receiveShadow)&&(kt.receiveShadow=W.receiveShadow,ye.setValue(k,"receiveShadow",W.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(En.envMap.value=Lt,En.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),Ei&&(ye.setValue(k,"toneMappingExposure",y.toneMappingExposure),kt.needsLights&&Hl(En,or),ut&&K.fog===!0&&Z.refreshFogUniforms(En,ut),Z.refreshMaterialUniforms(En,K,F,V,mt),gi.upload(k,ea(kt),En,D)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(gi.upload(k,ea(kt),En,D),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&ye.setValue(k,"center",W.center),ye.setValue(k,"modelViewMatrix",W.modelViewMatrix),ye.setValue(k,"normalMatrix",W.normalMatrix),ye.setValue(k,"modelMatrix",W.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let ze=K.uniformsGroups;for(let cr=0,Wl=ze.length;cr<Wl;cr++)if(wt.isWebGL2){let sa=ze[cr];Gt.update(sa,Tn),Gt.bind(sa,Tn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Tn}function Hl(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Gl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(E,O,Q){Et.get(E.texture).__webglTexture=O,Et.get(E.depthTexture).__webglTexture=Q;let K=Et.get(E);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=Q===void 0,K.__autoAllocateDepthBuffer||yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,O){let Q=Et.get(E);Q.__webglFramebuffer=O,Q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,Q=0){_=E,v=O,S=Q;let K=!0,W=null,ut=!1,xt=!1;if(E){let Lt=Et.get(E);Lt.__useDefaultFramebuffer!==void 0?(pt.bindFramebuffer(k.FRAMEBUFFER,null),K=!1):Lt.__webglFramebuffer===void 0?D.setupRenderTarget(E):Lt.__hasExternalTextures&&D.rebindTextures(E,Et.get(E.texture).__webglTexture,Et.get(E.depthTexture).__webglTexture);let Bt=E.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(xt=!0);let Nt=Et.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Nt[O])?W=Nt[O][Q]:W=Nt[O],ut=!0):wt.isWebGL2&&E.samples>0&&D.useMultisampledRTT(E)===!1?W=Et.get(E).__webglMultisampledFramebuffer:Array.isArray(Nt)?W=Nt[Q]:W=Nt,T.copy(E.viewport),R.copy(E.scissor),C=E.scissorTest}else T.copy(X).multiplyScalar(F).floor(),R.copy($).multiplyScalar(F).floor(),C=ot;if(pt.bindFramebuffer(k.FRAMEBUFFER,W)&&wt.drawBuffers&&K&&pt.drawBuffers(E,W),pt.viewport(T),pt.scissor(R),pt.setScissorTest(C),ut){let Lt=Et.get(E.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+O,Lt.__webglTexture,Q)}else if(xt){let Lt=Et.get(E.texture),Bt=O||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Lt.__webglTexture,Q||0,Bt)}P=-1},this.readRenderTargetPixels=function(E,O,Q,K,W,ut,xt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=Et.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&xt!==void 0&&(Tt=Tt[xt]),Tt){pt.bindFramebuffer(k.FRAMEBUFFER,Tt);try{let Lt=E.texture,Bt=Lt.format,Nt=Lt.type;if(Bt!==Ne&&ft.convert(Bt)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Rt=Nt===Bi&&(yt.has("EXT_color_buffer_half_float")||wt.isWebGL2&&yt.has("EXT_color_buffer_float"));if(Nt!==Je&&ft.convert(Nt)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Nt===yn&&(wt.isWebGL2||yt.has("OES_texture_float")||yt.has("WEBGL_color_buffer_float")))&&!Rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-K&&Q>=0&&Q<=E.height-W&&k.readPixels(O,Q,K,W,ft.convert(Bt),ft.convert(Nt),ut)}finally{let Lt=_!==null?Et.get(_).__webglFramebuffer:null;pt.bindFramebuffer(k.FRAMEBUFFER,Lt)}}},this.copyFramebufferToTexture=function(E,O,Q=0){let K=Math.pow(2,-Q),W=Math.floor(O.image.width*K),ut=Math.floor(O.image.height*K);D.setTexture2D(O,0),k.copyTexSubImage2D(k.TEXTURE_2D,Q,0,0,E.x,E.y,W,ut),pt.unbindTexture()},this.copyTextureToTexture=function(E,O,Q,K=0){let W=O.image.width,ut=O.image.height,xt=ft.convert(Q.format),Tt=ft.convert(Q.type);D.setTexture2D(Q,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Q.unpackAlignment),O.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,K,E.x,E.y,W,ut,xt,Tt,O.image.data):O.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,K,E.x,E.y,O.mipmaps[0].width,O.mipmaps[0].height,xt,O.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,K,E.x,E.y,xt,Tt,O.image),K===0&&Q.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),pt.unbindTexture()},this.copyTextureToTexture3D=function(E,O,Q,K,W=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ut=E.max.x-E.min.x+1,xt=E.max.y-E.min.y+1,Tt=E.max.z-E.min.z+1,Lt=ft.convert(K.format),Bt=ft.convert(K.type),Nt;if(K.isData3DTexture)D.setTexture3D(K,0),Nt=k.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)D.setTexture2DArray(K,0),Nt=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,K.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,K.unpackAlignment);let Rt=k.getParameter(k.UNPACK_ROW_LENGTH),ae=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Pe=k.getParameter(k.UNPACK_SKIP_PIXELS),de=k.getParameter(k.UNPACK_SKIP_ROWS),Ze=k.getParameter(k.UNPACK_SKIP_IMAGES),ee=Q.isCompressedTexture?Q.mipmaps[W]:Q.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,ee.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ee.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,E.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,E.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,E.min.z),Q.isDataTexture||Q.isData3DTexture?k.texSubImage3D(Nt,W,O.x,O.y,O.z,ut,xt,Tt,Lt,Bt,ee.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Nt,W,O.x,O.y,O.z,ut,xt,Tt,Lt,ee.data)):k.texSubImage3D(Nt,W,O.x,O.y,O.z,ut,xt,Tt,Lt,Bt,ee),k.pixelStorei(k.UNPACK_ROW_LENGTH,Rt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ae),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Pe),k.pixelStorei(k.UNPACK_SKIP_ROWS,de),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ze),W===0&&K.generateMipmaps&&k.generateMipmap(Nt),pt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?D.setTextureCube(E,0):E.isData3DTexture?D.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?D.setTexture2DArray(E,0):D.setTexture2D(E,0),pt.unbindTexture()},this.resetState=function(){v=0,S=0,_=null,pt.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Do?"display-p3":"srgb",e.unpackColorSpace=Vt.workingColorSpace===Js?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===me?Fn:Oc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Fn?me:He}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},mo=class extends qi{};mo.prototype.isWebGL1Renderer=!0;var Hi=class extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Ks=class extends Re{constructor(t=null,e=1,n=1,s,r,a,o,c,l=pe,u=pe,A,d){super(null,a,o,c,l,u,s,r,A,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hn=class extends Re{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ys=class extends qn{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bc,this.normalScale=new Qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};function Ss(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Jp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var _i=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},go=class extends _i{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oa,endingEnd:Oa}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ba:r=t,o=2*e-n;break;case Fa:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ba:a=t,c=2*n-e;break;case Fa:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this._offsetPrev,A=this._offsetNext,d=this._weightPrev,p=this._weightNext,x=(n-e)/(s-e),g=x*x,f=g*x,h=-d*f+2*d*g-d*x,m=(1+d)*f+(-1.5-2*d)*g+(-.5+d)*x+1,y=(-1-p)*f+(1.5+p)*g+.5*x,w=p*f-p*g;for(let v=0;v!==o;++v)r[v]=h*a[u+v]+m*a[l+v]+y*a[c+v]+w*a[A+v];return r}},yo=class extends _i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=(n-e)/(s-e),A=1-u;for(let d=0;d!==o;++d)r[d]=a[l+d]*A+a[c+d]*u;return r}},xo=class extends _i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Qe=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ss(e,this.TimeBufferType),this.values=Ss(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ss(t.times,Array),values:Ss(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new xo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new yo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new go(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Es:e=this.InterpolantFactoryMethodDiscrete;break;case Ds:e=this.InterpolantFactoryMethodLinear;break;case Mr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Es;case this.InterpolantFactoryMethodLinear:return Ds;case this.InterpolantFactoryMethodSmooth:return Mr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Jp(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Mr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(s)c=!0;else{let A=o*n,d=A-n,p=A+n;for(let x=0;x!==n;++x){let g=e[A+x];if(g!==e[d+x]||g!==e[p+x]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let A=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[A+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Qe.prototype.TimeBufferType=Float32Array;Qe.prototype.ValueBufferType=Float32Array;Qe.prototype.DefaultInterpolation=Ds;var Hn=class extends Qe{};Hn.prototype.ValueTypeName="bool";Hn.prototype.ValueBufferType=Array;Hn.prototype.DefaultInterpolation=Es;Hn.prototype.InterpolantFactoryMethodLinear=void 0;Hn.prototype.InterpolantFactoryMethodSmooth=void 0;var Mo=class extends Qe{};Mo.prototype.ValueTypeName="color";var vo=class extends Qe{};vo.prototype.ValueTypeName="number";var _o=class extends _i{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let u=l+o;l!==u;l+=4)Ge.slerpFlat(r,0,a,l-o,a,l,c);return r}},Gi=class extends Qe{InterpolantFactoryMethodLinear(t){return new _o(this.times,this.values,this.getValueSize(),t)}};Gi.prototype.ValueTypeName="quaternion";Gi.prototype.DefaultInterpolation=Ds;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Gn=class extends Qe{};Gn.prototype.ValueTypeName="string";Gn.prototype.ValueBufferType=Array;Gn.prototype.DefaultInterpolation=Es;Gn.prototype.InterpolantFactoryMethodLinear=void 0;Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var wo=class extends Qe{};wo.prototype.ValueTypeName="vector";var bo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,A){return l.push(u,A),this},this.removeHandler=function(u){let A=l.indexOf(u);return A!==-1&&l.splice(A,2),this},this.getHandler=function(u){for(let A=0,d=l.length;A<d;A+=2){let p=l[A],x=l[A+1];if(p.global&&(p.lastIndex=0),p.test(u))return x}return null}}},Xp=new bo,So=class{constructor(t){this.manager=t!==void 0?t:Xp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};So.DEFAULT_MATERIAL_NAME="__DEFAULT";var Lo="\\[\\]\\.:\\/",Zp=new RegExp("["+Lo+"]","g"),Co="[^"+Lo+"]",$p="[^"+Lo.replace("\\.","")+"]",tm=/((?:WC+[\/:])*)/.source.replace("WC",Co),em=/(WCOD+)?/.source.replace("WCOD",$p),nm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Co),im=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Co),sm=new RegExp("^"+tm+em+nm+im+"$"),rm=["material","materials","bones","map"],To=class{constructor(t,e,n){let s=n||Xt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Xt=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Zp,"")}static parseTrackName(t){let e=sm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);rm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xt.Composite=To;Xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xt.prototype.GetterByBindingType=[Xt.prototype._getValue_direct,Xt.prototype._getValue_array,Xt.prototype._getValue_arrayElement,Xt.prototype._getValue_toArray];Xt.prototype.SetterByBindingTypeAndVersioning=[[Xt.prototype._setValue_direct,Xt.prototype._setValue_direct_setNeedsUpdate,Xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_array,Xt.prototype._setValue_array_setNeedsUpdate,Xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_arrayElement,Xt.prototype._setValue_arrayElement_setNeedsUpdate,Xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_fromArray,Xt.prototype._setValue_fromArray_setNeedsUpdate,Xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gg=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var om={beard:[0,3],cap:[3,132],eye:[135,80],brow:[215,29],faceline:[244,12],facemake:[256,12],glass:[268,20],mole:[288,1],mouth:[289,53],mustache:[342,5],noseline:[347,17]},am={beard:[0,3],cap:[3,132],caphat:[135,132],faceline:[267,12],glass:[279,1],mask:[280,12],noseline:[292,18],nose:[310,18],hair:[328,132],hairhat:[460,132],forehead:[592,132],foreheadhat:[724,132]};async function cm(i){let t=new DecompressionStream("deflate"),e=t.writable.getWriter();return e.write(i),e.close(),new Uint8Array(await new Response(t.readable).arrayBuffer())}var Zs=class{constructor(t){if(this.u8=t instanceof Uint8Array?t:new Uint8Array(t),this.dv=new DataView(this.u8.buffer,this.u8.byteOffset,this.u8.byteLength),String.fromCharCode(...this.u8.subarray(0,4))!=="FFRA")throw new Error("Not a face resource file");this.trecs=this._recs(64,364),this.srecs=this._recs(5968,856),this._cache=new Map}_recs(t,e){let n=[];for(let s=0;s<e;s++){let r=t+s*16;n.push({pos:this.dv.getUint32(r),usize:this.dv.getUint32(r+4),csize:this.dv.getUint32(r+8)})}return n}async _blob(t,e){if(!e.pos)return null;if(this._cache.has(t))return this._cache.get(t);let n=this.u8.subarray(e.pos,e.pos+(e.csize||e.usize)),s=e.csize?await cm(n):n.slice();return this._cache.set(t,s),s}async texture(t,e){let[n,s]=om[t];if(e<0||e>=s)return null;let r=await this._blob("t"+(n+e),this.trecs[n+e]);if(!r)return null;let a=new DataView(r.buffer,r.byteOffset,r.byteLength),o=r.length,c=a.getUint16(o-8),l=a.getUint16(o-6),u=a.getUint8(o-4),A=a.getUint8(o-3);return{w:c,h:l,mips:u,fmt:A,data:r.subarray(0,o-12)}}async shape(t,e){let[n,s]=am[t];if(e<0||e>=s)return null;let r=await this._blob("s"+(n+e),this.srecs[n+e]);if(!r)return null;let a=new DataView(r.buffer,r.byteOffset,r.byteLength),o=a.getUint32(0),c=[];for(let m=0;m<o/4;m++)c.push(a.getUint32(m*4));let l=(m,y)=>{let w=new Float32Array(y);for(let v=0;v<y;v++)w[v]=a.getFloat32(m+v*4);return w},u=c[6]/16,A=l(c[0],u*4),d=c[8]?l(c[2],u*2):null,p=r.subarray(c[1],c[1]+c[7]),x=c[10]?r.subarray(c[4],c[4]+c[10]):null,g=c[9]?r.subarray(c[3],c[3]+c[9]):null,f=new Uint16Array(c[11]);for(let m=0;m<c[11];m++)f[m]=a.getUint16(c[5]+m*2);let h=[];for(let m=12;m<o/4;m++)h.push(a.getFloat32(m*4));return{nv:u,pos:A,uv:d,nrm:p,col:x,tan:g,idx:f,header:c,bounds:h.slice(0,6),extra:h}}};function lm(i,t,e,n){let s=t+2,r=(g,f)=>g<0||f<0||g>=t||f>=e?0:i[f*t+g],a=new Map,o=new Map,c=(g,f,h,m)=>{let y="h"+g+","+f;return o.has(y)||o.set(y,[g+(n-h)/(m-h),f]),y},l=(g,f,h,m)=>{let y="h"+g+","+(f+1);return o.has(y)||o.set(y,[g+(n-h)/(m-h),f+1]),y},u=(g,f,h,m)=>{let y="v"+g+","+f;return o.has(y)||o.set(y,[g,f+(n-h)/(m-h)]),y},A=(g,f,h,m)=>{let y="v"+(g+1)+","+f;return o.has(y)||o.set(y,[g+1,f+(n-h)/(m-h)]),y},d=(g,f)=>{a.set(g,f)};for(let g=-1;g<e;g++)for(let f=-1;f<t;f++){let h=r(f,g),m=r(f+1,g),y=r(f+1,g+1),w=r(f,g+1),v=(h>=n?1:0)|(m>=n?2:0)|(y>=n?4:0)|(w>=n?8:0);if(v===0||v===15)continue;let S=()=>c(f,g,h,m),_=()=>A(f,g,m,y),P=()=>l(f,g,w,y),M=()=>u(f,g,h,w);switch(v){case 1:d(S(),M());break;case 2:d(_(),S());break;case 4:d(P(),_());break;case 8:d(M(),P());break;case 3:d(_(),M());break;case 6:d(P(),S());break;case 12:d(M(),_());break;case 9:d(S(),P());break;case 7:d(P(),M());break;case 11:d(_(),P());break;case 13:d(S(),_());break;case 14:d(M(),S());break;case 5:case 10:{let T=(h+m+y+w)/4>=n;v===5!==T?(d(S(),M()),d(P(),_())):(d(_(),S()),d(M(),P()));break}}}let p=[],x=new Set;for(let g of a.keys()){if(x.has(g))continue;let f=[],h=g;for(;h!==void 0&&!x.has(h);)x.add(h),f.push(o.get(h)),h=a.get(h);h===g&&f.length>3&&p.push(f)}return p}function hm(i,t){let e=i.length,n=[0];for(let c=0;c<e;c++){let l=i[c],u=i[(c+1)%e];n.push(n[c]+Math.hypot(u[0]-l[0],u[1]-l[1]))}let s=n[e],r=Math.max(8,Math.round(s/t)),a=[],o=0;for(let c=0;c<r;c++){let l=s*c/r;for(;n[o+1]<l;)o++;let u=i[o],A=i[(o+1)%e],d=(l-n[o])/(n[o+1]-n[o]||1);a.push([u[0]+(A[0]-u[0])*d,u[1]+(A[1]-u[1])*d])}return{pts:a,step:s/r}}function jc(i,t,e){let n=i.length;if(n<3||t<=0)return i;let s=Math.ceil(t*3),r=[],a=0;for(let l=-s;l<=s;l++){let u=Math.exp(-l*l/(2*t*t));r.push(u),a+=u}let o=l=>{if(e)return i[(l%n+n)%n];if(l<0){let u=i[0],A=i[Math.min(n-1,-l)];return[2*u[0]-A[0],2*u[1]-A[1]]}if(l>=n){let u=i[n-1],A=i[Math.max(0,2*(n-1)-l)];return[2*u[0]-A[0],2*u[1]-A[1]]}return i[l]},c=[];for(let l=0;l<n;l++){let u=0,A=0;for(let d=-s;d<=s;d++){let p=o(l+d);u+=p[0]*r[d+s],A+=p[1]*r[d+s]}c.push([u/a,A/a])}return e||(c[0]=i[0],c[n-1]=i[n-1]),c}function Jc(i){let t=0,e=0;for(let o of i)t+=o[0],e+=o[1];t/=i.length,e/=i.length;let n=0,s=0,r=0;for(let o of i){let c=o[0]-t,l=o[1]-e;n+=c*c,s+=c*l,r+=l*l}let a=.5*Math.atan2(2*s,n-r);return{p:[t,e],d:[Math.cos(a),Math.sin(a)]}}function um(i,t){let e=i.d[0]*-t.d[1]-i.d[1]*-t.d[0];if(Math.abs(e)<.15)return null;let n=t.p[0]-i.p[0],s=t.p[1]-i.p[1],r=(n*-t.d[1]-s*-t.d[0])/e;return[i.p[0]+i.d[0]*r,i.p[1]+i.d[1]*r]}function fm(i,t,e){let n=.25*t,{pts:s,step:r}=hm(i,n),a=s.length,o=t/r;if(a<12)return s;let c=Math.max(2,Math.round(e.cw*o)),l=new Float32Array(a);for(let w=0;w<a;w++){let v=s[(w-c+a*4)%a],S=s[w],_=s[(w+c)%a],P=S[0]-v[0],M=S[1]-v[1],T=_[0]-S[0],R=_[1]-S[1];l[w]=Math.abs(Math.atan2(P*R-M*T,P*T+M*R))}let u=[];for(let w=0;w<a;w++){if(l[w]<e.ca)continue;let v=!0;for(let S=-c;S<=c;S++)if(S&&l[(w+S+a)%a]>l[w]||S<0&&l[(w+S+a)%a]===l[w]){v=!1;break}v&&u.push(w)}let A=e.sig*o;if(u.length===0)return jc(s,A,!0);let d=[],p=u.length,x=[];for(let w=0;w<p;w++){let v=u[w],_=(u[(w+1)%p]-v+a)%a||a,P=[];for(let M=0;M<=_;M++)P.push(s[(v+M)%a]);x.push(P)}let g=x.map(w=>jc(w,A,!1)),f=e.tr*o,h=e.fa*o,m=e.fb*o,y=[];for(let w=0;w<p;w++){let v=g[(w-1+p)%p],S=g[w],_=null;if(v.length>m+2&&S.length>m+2){let P=[],M=[];for(let L=Math.round(h);L<=Math.round(m);L++)P.push(v[v.length-1-L]),M.push(S[L]);let T=Jc(P),R=Jc(M),C=um(T,R),q=S[0];C&&Math.hypot(C[0]-q[0],C[1]-q[1])<=e.mx*t&&(_=C)}y.push(_)}for(let w=0;w<p;w++){let v=g[w],S=y[w],_=y[(w+1)%p],P=S?Math.round(f):0,M=v.length-(_?Math.round(f):0);S&&d.push(S);for(let T=Math.max(P,S?1:0);T<M-(_?0:1);T++)d.push(v[T])}return d}function dm(i,t){if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(i,t);let e=document.createElement("canvas");return e.width=i,e.height=t,e}var Am={cw:1.5,ca:1,sig:.7,tr:.9,fa:1.2,fb:3.2,mx:1.6};function Xc(i,t,e,n,s,r){let a=Object.assign({},Am,r||{}),o=1e9,c=-1e9;for(let g=0;g<t*e;g++)i[g]<o&&(o=i[g]),i[g]>c&&(c=i[g]);let l=new Float32Array(t*e);if(c<n)return l;if(o>=n)return l.fill(1),l;let u=lm(i,t,e,n),d=dm(t,e).getContext("2d");d.fillStyle="#000",d.fillRect(0,0,t,e),d.fillStyle="#fff";let p=new Path2D;for(let g of u){if(g.length<1.5*s)continue;let f=fm(g.map(h=>[h[0]+.5,h[1]+.5]),s,a);if(!(f.length<3)){p.moveTo(f[0][0],f[0][1]);for(let h=1;h<f.length;h++)p.lineTo(f[h][0],f[h][1]);p.closePath()}}d.fill(p,"nonzero");let x=d.getImageData(0,0,t,e).data;for(let g=0;g<t*e;g++)l[g]=x[g*4]/255;return l}var Ve={beardShape:1,eye:2,brow:3,faceline:4,facemakeTex:5,forehead:6,glassShape:7,glass:8,hair:9,mask:10,mole:11,mouth:12,mustache:13,nose:14,noselineShape:15,noseline:16,capShape:17,capTex:18},pm=[0,1,2,3,4,5,6,7,8,9,10,11],mm={1:{a:.115,c:i=>[i,136,68]},2:{a:.19,c:()=>[250,170,150],alt:{a:.26,c:()=>[64,240,210]}},3:{a:.24,c:()=>[17,0,0]},7:{a:.245},8:{a:.146,c:i=>[i*.4,0,0]},9:{a:.21,c:()=>[85,102,102]}},gm={level:3,alpha:.75},ym={eye:{},line:{},nose:{},mouth:{}},$s=i=>Object.assign({},ym[i],(globalThis.__WT||{})[i]);function Io(i){if(i.length<80)return!1;let t=new DataView(i.buffer,i.byteOffset,i.byteLength),e=t.getUint16(0);if(e!==18)return!1;let n=t.getInt32(4);return n>=4+4*e&&n<i.length&&String.fromCharCode(...i.subarray(0,4))!=="FFRA"}var No=i=>i<<3|i>>2,Wn=i=>i*17;function xm(i){let t=new DataView(i.buffer,i.byteOffset,i.byteLength),e=t.getUint8(0),n=t.getUint16(2),s=t.getUint16(4),r=t.getUint32(28),a=new Uint8Array(n*s*4),o=r,c=e===0||e===2?8:4,l=e===0?8:4,u=Math.ceil(n/c),A=Math.ceil(s/l),d=(p,x,g,f,h,m)=>{if(p<n&&x<s){let y=(x*n+p)*4;a[y]=g,a[y+1]=f,a[y+2]=h,a[y+3]=m}};for(let p=0;p<A;p++)for(let x=0;x<u;x++)if(e===0)for(let g=0;g<8;g++)for(let f=0;f<4;f++){let h=i[o++],m=Wn(h>>4),y=Wn(h&15);d(x*8+f*2,p*8+g,m,m,m,m),d(x*8+f*2+1,p*8+g,y,y,y,y)}else if(e===2)for(let g=0;g<4;g++)for(let f=0;f<8;f++){let h=i[o++],m=Wn(h&15),y=Wn(h>>4);d(x*8+f,p*4+g,m,m,m,y)}else if(e===5)for(let g=0;g<4;g++)for(let f=0;f<4;f++){let h=i[o]<<8|i[o+1];o+=2,h&32768?d(x*4+f,p*4+g,No(h>>10&31),No(h>>5&31),No(h&31),255):d(x*4+f,p*4+g,Wn(h>>8&15),Wn(h>>4&15),Wn(h&15),Math.round((h>>12&7)*255/7))}else throw new Error("Unsupported Wii texture format "+e);return{w:n,h:s,rgba:a,fmt:e}}function Zc(i){let t=i*i,e=t*i;return[(-e+2*t-i)/2,(3*e-5*t+2)/2,(-3*e+4*t+i)/2,(e-t)/2]}function bi(i,t,e,n){if(!(n>.2))return i;let s=Math.ceil(n*3),r=[],a=0;for(let l=-s;l<=s;l++){let u=Math.exp(-l*l/(2*n*n));r.push(u),a+=u}let o=new Float32Array(t*e),c=new Float32Array(t*e);for(let l=0;l<e;l++)for(let u=0;u<t;u++){let A=0;for(let d=-s;d<=s;d++){let p=Math.min(t-1,Math.max(0,u+d));A+=i[l*t+p]*r[d+s]}o[l*t+u]=A/a}for(let l=0;l<e;l++)for(let u=0;u<t;u++){let A=0;for(let d=-s;d<=s;d++){let p=Math.min(e-1,Math.max(0,l+d));A+=o[p*t+u]*r[d+s]}c[l*t+u]=A/a}return c}function Mm(i,t,e,n,s,r){if(!(n>.3))return i;let a=Math.ceil(n*2.2),o=[],c=0;r=r??2;for(let u=-a;u<=a;u++){let A=Math.exp(-u*u/(2*n*n));o.push(A),c+=A}let l=(u,A,d)=>{A=A<0?0:A>t-1?t-1:A,d=d<0?0:d>e-1?e-1:d;let p=Math.floor(A),x=Math.floor(d),g=Math.min(t-1,p+1),f=Math.min(e-1,x+1),h=A-p,m=d-x;return(u[x*t+p]*(1-h)+u[x*t+g]*h)*(1-m)+(u[f*t+p]*(1-h)+u[f*t+g]*h)*m};for(let u=0;u<s;u++){let A=bi(i,t,e,Math.max(1,n*.35)),d=t*e,p=new Float32Array(d),x=new Float32Array(d),g=new Float32Array(d),f=new Float32Array(d);for(let v=0;v<e;v++)for(let S=0;S<t;S++){let _=A[v*t+Math.min(t-1,S+1)]-A[v*t+Math.max(0,S-1)],P=A[Math.min(e-1,v+1)*t+S]-A[Math.max(0,v-1)*t+S],M=v*t+S;x[M]=_*_,g[M]=P*P,f[M]=_*P}let h=Math.max(1.5,n*.8),m=bi(x,t,e,h),y=bi(g,t,e,h),w=bi(f,t,e,h);for(let v=0;v<e;v++)for(let S=0;S<t;S++){let _=v*t+S,P=m[_]+y[_];if(P<1e-5){p[_]=i[_];continue}let M=m[_]-y[_],T=Math.hypot(M,2*w[_]),R=T/P,C=.5*Math.atan2(2*w[_],M),q=-Math.sin(C),L=Math.cos(C),I=0;for(let F=-a;F<=a;F++)I+=l(i,S+q*F,v+L*F)*o[F+a];let V=Math.pow(Math.min(1,R),r);p[_]=i[_]+V*(I/c-i[_])}i=p}return i}function vm(i,t,e,n,s,r,a,o,c,l){let u=r*a,A=s*s,d=Float32Array.from(n),p=new Uint8Array(t*e);for(let M=0;M<e;M++)for(let T=0;T<t;T++){let R=9,C=-9;for(let q=-1;q<=1;q++)for(let L=-1;L<=1;L++){let I=Math.min(e-1,Math.max(0,M+q)),V=Math.min(t-1,Math.max(0,T+L)),F=i[I*t+V];F<R&&(R=F),F>C&&(C=F)}p[M*t+T]=C-R>.01?1:0}let x=[];for(let M=0;M<t*e;M++)p[M]&&x.push(M);let g=[];for(let M of x){let T=M/t|0,R=M%t;for(let C=0;C<s;C++)for(let q=0;q<s;q++)g.push((T*s+C)*r+R*s+q)}for(let M=0;M<e;M++)for(let T=0;T<t;T++)if(!p[M*t+T]){let R=i[M*t+T];for(let C=0;C<s;C++)for(let q=0;q<s;q++)d[(M*s+C)*r+T*s+q]=R}let f=Int32Array.from(g),h=f.length;if(!h)return d;let m=new Float32Array(u),y=new Float32Array(u),w=new Float32Array(u),v=new Float32Array(u),S=new Float32Array(u),_=new Float32Array(u),P=new Float32Array(t*e);for(let M=0;M<o;M++){for(let T of x)P[T]=0;for(let T=0;T<h;T++){let R=f[T],C=R/r|0,q=R-C*r;P[(C/s|0)*t+(q/s|0)]+=d[R]}for(let T=0;T<h;T++){let R=f[T],C=R/r|0,q=R-C*r,L=(C/s|0)*t+(q/s|0),I=d[R]+(i[L]-P[L]/A);d[R]=I<0?0:I>1?1:I,v[R]=d[R],m[R]=0,y[R]=0}for(let T=0;T<l;T++){for(let R=0;R<h;R++){let C=f[R],q=C/r|0,L=C-q*r;w[C]=(L<r-1?m[C]:0)-(L>0?m[C-1]:0)+(q<a-1?y[C]:0)-(q>0?y[C-r]:0)}for(let R=0;R<h;R++){let C=f[R],q=C/r|0,L=C-q*r,I=w[C]-v[C]/c;S[C]=L<r-1?w[C+1]-v[C+1]/c-I:0,_[C]=q<a-1?w[C+r]-v[C+r]/c-I:0}for(let R=0;R<h;R++){let C=f[R],q=1+.125*Math.hypot(S[C],_[C]);m[C]=(m[C]+.125*S[C])/q,y[C]=(y[C]+.125*_[C])/q}}for(let T=0;T<h;T++){let R=f[T],C=R/r|0,q=R-C*r,L=(q<r-1?m[R]:0)-(q>0?m[R-1]:0)+(C<a-1?y[R]:0)-(C>0?y[R-r]:0),I=v[R]-c*L;d[R]=I<0?0:I>1?1:I}}return d}function Ro(i,t,e,n,s){if(s){let m=n/4;s={...s},s.sigma&&(s.sigma*=m),s.ot&&(s.ot*=m),s.us&&(s.us={r:s.us.r*m,amt:s.us.amt}),s.tv&&(s.tv={...s.tv,lam:s.tv.lam*m})}let r=t*n,a=e*n,o=t*e,c=0;for(let m=0;m<o;m++)c=Math.max(c,i[m*4+3]/255);c=c||1;let l=[new Float32Array(o),new Float32Array(o),new Float32Array(o),new Float32Array(o)];for(let m=0;m<o;m++){let y=i[m*4+3]/255;l[0][m]=i[m*4]/255*y,l[1][m]=i[m*4+1]/255*y,l[2][m]=i[m*4+2]/255*y,l[3][m]=y}let u=[],A=[];for(let m=0;m<r;m++){let y=(m+.5)/n-.5,w=Math.floor(y);u.push([w,Zc(y-w)])}for(let m=0;m<a;m++){let y=(m+.5)/n-.5,w=Math.floor(y);A.push([w,Zc(y-w)])}let d=(m,y)=>m<0?0:m>=y?y-1:m,p=new Uint8Array(r*a*4),x=new Float32Array(r*e),g=[],f=(m,y)=>{for(let w=0;w<m.length;w++)if(m[w]!==y[w])return!1;return!0};for(let m=0;m<4;m++){let y=-1;for(let v=0;v<m;v++)if(f(l[m],l[v])){y=v;break}if(y>=0){g.push(g[y]);continue}for(let v=0;v<e;v++)for(let S=0;S<r;S++){let[_,P]=u[S],M=0;for(let T=0;T<4;T++)M+=l[m][v*t+d(_-1+T,t)]*P[T];x[v*r+S]=M}let w=new Float32Array(r*a);for(let v=0;v<a;v++){let[S,_]=A[v];for(let P=0;P<r;P++){let M=0;for(let T=0;T<4;T++)M+=x[d(S-1+T,e)*r+P]*_[T];w[v*r+P]=M}}{let v=w;if(s&&s.vec){g.push(v);continue}if(s&&s.tv&&(v=vm(l[m],t,e,v,n,r,a,s.tv.it,s.tv.lam,s.tv.inner||3)),s&&s.us){let S=bi(v,r,a,s.us.r),_=new Float32Array(r*a);for(let P=0;P<r*a;P++)_[P]=v[P]+s.us.amt*(v[P]-S[P]);v=_}s&&s.ot&&(v=Mm(v,r,a,s.ot,s.oit||2,s.cp)),g.push(s&&s.sigma?bi(v,r,a,s.sigma):v)}}if(s&&s.vec){let m=r*a,y=[new Float32Array(m),new Float32Array(m),new Float32Array(m),new Float32Array(m)];for(let _=0;_<m;_++){let P=Math.max(0,Math.min(1,g[3][_]));y[3][_]=P/c;for(let M=0;M<3;M++)y[M][_]=Math.max(0,Math.min(1,g[M][_]/c))}let w=Object.assign({},s.vp,(globalThis.__WT||{}).vp),v=[],S=y.map((_,P)=>{for(let C=0;C<P;C++){let q=!0;for(let L=0;L<m;L++)if(_[L]!==y[C][L]){q=!1;break}if(q)return v[C]}let M=P===3?.5:P===2&&s.lob?s.lob:s.lo||.5;if(!(((globalThis.__WT||{}).vm??15)>>P&1)){let C=new Float32Array(m),q=s.lo||.5,L=s.c||.2;for(let I=0;I<m;I++){let V=Math.max(0,Math.min(1,(_[I]-(q-L))/(2*L)));C[I]=V*V*(3-2*V)}return v[P]=C,C}let R=Xc(_,r,a,M,n,w);return v[P]=R,R});for(let _=0;_<4;_++)v[_]||(v[_]=S[_]);for(let _=0;_<m;_++)p[_*4]=S[0][_]*255+.5,p[_*4+1]=S[1][_]*255+.5,p[_*4+2]=S[2][_]*255+.5,p[_*4+3]=S[3][_]*c*255+.5;return{w:r,h:a,rgba:p}}let h=(m,y,w)=>{let v=Math.max(0,Math.min(1,(m-y)/(w-y)));return v*v*(3-2*v)};for(let m=0;m<r*a;m++){let y=Math.max(0,Math.min(1,g[3][m])),w=g[0][m],v=g[1][m],S=g[2][m];if(y>1e-4?(w=w/y,v=v/y,S=S/y):w=v=S=0,w=Math.max(0,Math.min(1,w)),v=Math.max(0,Math.min(1,v)),S=Math.max(0,Math.min(1,S)),s&&s.a&&(y=c*h(y/c,s.lo-s.a,s.lo+s.a)),s&&s.c){let _=s.lo,P=s.lob??_;w=h(w,_-s.c,_+s.c),v=h(v,_-s.c,_+s.c),S=h(S,P-s.c,P+s.c)}p[m*4]=w*255+.5,p[m*4+1]=v*255+.5,p[m*4+2]=S*255+.5,p[m*4+3]=y*255+.5}return{w:r,h:a,rgba:p}}function zo(i,t,e){let n=Math.hypot(i,t,e)||1,s=r=>Math.round(Math.max(-1,Math.min(1,r/n))*511)&1023;return(s(e)<<20|s(t)<<10|s(i))>>>0}function _m(i,t,e){let n=new DataView(i.buffer,i.byteOffset,i.byteLength),s=4,r=[];if(e){for(let x=0;x<9;x++)r.push(n.getFloat32(4+x*4));s=40}let a=n.getUint16(s);s+=2;let o=new Float32Array(a*3);for(let x=0;x<a*3;x++)o[x]=n.getInt16(s+x*2)/256;s+=a*6;let c=n.getUint16(s);s+=2;let l=new Float32Array(c*3);for(let x=0;x<c*3;x++)l[x]=n.getInt16(s+x*2)/(256*64);s+=c*6;let u=null;if(t){let x=n.getUint16(s);s+=2,u=new Float32Array(x*2);for(let g=0;g<x*2;g++)u[g]=n.getInt16(s+g*2)/8192;s+=x*4}let A=i[s++],d=t?3:2,p=[];for(let x=0;x<A;x++){let g=i[s],f=i[s+1];s+=2;let h=[];for(let m=0;m<g;m++)h.push(Array.from(i.subarray(s,s+d))),s+=d;if(f===144)for(let m=0;m+2<g;m+=3)p.push([h[m],h[m+1],h[m+2]]);else if(f===152)for(let m=0;m+2<g;m++)p.push(m%2===0?[h[m],h[m+1],h[m+2]]:[h[m+1],h[m],h[m+2]]);else if(f===160)for(let m=1;m+1<g;m++)p.push([h[0],h[m],h[m+1]]);else if(f===128)for(let m=0;m+3<g;m+=4)p.push([h[m],h[m+1],h[m+2]]),p.push([h[m],h[m+2],h[m+3]])}if(s!==i.length)throw new Error("model size mismatch "+s+" vs "+i.length);return{V:o,N:l,UV:u,tris:p,fl:r}}function wm(i){let t=new Uint8Array(i*4);for(let e=0;e<i;e++)t[e*4]=0,t[e*4+1]=255,t[e*4+2]=0,t[e*4+3]=255;return t}function bm(i,t,e){let n=new Map,s=[],r=[],a=[],o=[];for(let d of i.tris)for(let p of[d[0],d[2],d[1]]){let x=p.join(","),g=n.get(x);if(g===void 0){g=s.length/4,n.set(x,g),s.push(i.V[p[0]*3],i.V[p[0]*3+1],i.V[p[0]*3+2],1);let f=i.N[p[1]*3],h=i.N[p[1]*3+1],m=i.N[p[1]*3+2],y=zo(f,h,m);if(r.push(y>>>24&255,y>>>16&255,y>>>8&255,y&255),t){let w=p[2];a.push(i.UV[w*2],i.UV[w*2+1])}}o.push(g)}let c=s.length/4,l=[1e9,1e9,1e9],u=[-1e9,-1e9,-1e9];for(let d=0;d<c;d++)for(let p=0;p<3;p++)l[p]=Math.min(l[p],s[d*4+p]),u[p]=Math.max(u[p],s[d*4+p]);let A=[...l,...u];if(e){let d=i.fl;A.push(d[6],d[7],d[8],d[0],d[1],d[2],d[3],d[4],d[5])}return{nv:c,pos:new Float32Array(s),uv:t?new Float32Array(a):null,nrm:new Uint8Array(r),col:wm(c),tan:null,idx:new Uint16Array(o),header:[],bounds:A.slice(0,6),extra:A}}function Uo(i,t){let e=(i[t*4]<<24|i[t*4+1]<<16|i[t*4+2]<<8|i[t*4+3])>>>0,n=s=>(s&=1023,s>=512&&(s-=1024),Math.max(-1,s/511));return[n(e),n(e>>>10),n(e>>>20)]}function Sm(i,t,e){for(let n=0;n<t;n++){let s=i.nv,r=Array.from(i.pos),a=i.uv?Array.from(i.uv):null,o=[],c=Array.from(i.col),l=[];for(let w=0;w<s;w++)l.push(Uo(i.nrm,w));let u=w=>r[w*4].toFixed(3)+","+r[w*4+1].toFixed(3)+","+r[w*4+2].toFixed(3),A=(w,v)=>{let S=u(w),_=u(v);return S<_?S+"|"+_:_+"|"+S},d=new Map,p=i.idx,x=(w,v)=>{let S=A(w,v),_=u(w)>u(v),P=_?l[v]:l[w],M=_?l[w]:l[v],T=d.get(S);if(!T)d.set(S,{na:P,nb:M,ok:!0});else{let R=(C,q)=>C[0]*q[0]+C[1]*q[1]+C[2]*q[2];(R(T.na,P)<.985||R(T.nb,M)<.985)&&(T.ok=!1)}};for(let w=0;w<p.length;w+=3)x(p[w],p[w+1]),x(p[w+1],p[w+2]),x(p[w+2],p[w]);let g=new Map,f=[],h=(w,v)=>{let S=w<v?w+"_"+v:v+"_"+w,_=g.get(S);if(_!==void 0)return _;_=r.length/4,g.set(S,_);let P=[r[w*4],r[w*4+1],r[w*4+2]],M=[r[v*4],r[v*4+1],r[v*4+2]],T=[(P[0]+M[0])/2,(P[1]+M[1])/2,(P[2]+M[2])/2],R=T,C=d.get(A(w,v));if(C&&C.ok){let I=l[w],V=l[v],F=(X,$)=>{let ot=(T[0]-X[0])*$[0]+(T[1]-X[1])*$[1]+(T[2]-X[2])*$[2];return[T[0]-ot*$[0],T[1]-ot*$[1],T[2]-ot*$[2]]},J=F(P,I),j=F(M,V);R=[0,1,2].map(X=>T[X]+e*((J[X]+j[X])/2-T[X]))}r.push(R[0],R[1],R[2],1);let q=[l[w][0]+l[v][0],l[w][1]+l[v][1],l[w][2]+l[v][2]];if(C&&C.ok&&(globalThis.__WT||{}).pn===1){let I=[M[0]-P[0],M[1]-P[1],M[2]-P[2]],V=I[0]*I[0]+I[1]*I[1]+I[2]*I[2];if(V>1e-9){let F=2*(I[0]*(l[v][0]-l[w][0])+I[1]*(l[v][1]-l[w][1])+I[2]*(l[v][2]-l[w][2]))/V;q=[q[0]-F*I[0],q[1]-F*I[1],q[2]-F*I[2]]}}let L=Math.hypot(q[0],q[1],q[2])||1;l.push([q[0]/L,q[1]/L,q[2]/L]),a&&a.push((a[w*2]+a[v*2])/2,(a[w*2+1]+a[v*2+1])/2);for(let I=0;I<4;I++)c.push(c[w*4+I]);return _};for(let w=0;w<p.length;w+=3){let v=p[w],S=p[w+1],_=p[w+2],P=h(v,S),M=h(S,_),T=h(_,v);f.push(v,P,T,P,S,M,T,M,_,P,M,T)}if(r.length/4>65e3)return i;let m=r.length/4,y=new Uint8Array(m*4);for(let w=0;w<m;w++){let v=zo(l[w][0],l[w][1],l[w][2]);y[w*4]=v>>>24&255,y[w*4+1]=v>>>16&255,y[w*4+2]=v>>>8&255,y[w*4+3]=v&255}i={...i,nv:m,pos:new Float32Array(r),uv:a?new Float32Array(a):null,nrm:y,col:new Uint8Array(c),idx:new Uint16Array(f)}}return i}function Tm(i,t,e){let n=i.nv,s=i.idx,r=[];for(let m=0;m<n;m++)r.push(Uo(i.nrm,m));let a=new Int32Array(n),o=new Map,c=[];for(let m=0;m<n;m++){let y=i.pos[m*4].toFixed(3)+","+i.pos[m*4+1].toFixed(3)+","+i.pos[m*4+2].toFixed(3),w=o.get(y);w===void 0&&(w=c.length,o.set(y,w),c.push([])),a[m]=w,c[w].push(m)}let l=c.length,u=Array.from({length:l},()=>new Set),A=new Uint8Array(l),d=new Map,p=(m,y)=>m[0]*y[0]+m[1]*y[1]+m[2]*y[2],x=(m,y)=>{let w=a[m],v=a[y];if(w===v)return;u[w].add(v),u[v].add(w);let S=w<v,_=S?w+"_"+v:v+"_"+w,P=S?r[m]:r[y],M=S?r[y]:r[m],T=d.get(_);T?(p(T.na,P)<.985||p(T.nb,M)<.985)&&(A[w]=1,A[v]=1):d.set(_,{na:P,nb:M,ga:w,gb:v})};for(let m=0;m<s.length;m+=3)x(s[m],s[m+1]),x(s[m+1],s[m+2]),x(s[m+2],s[m]);let g=new Array(l);for(let m=0;m<l;m++)g[m]=r[c[m][0]].slice();let f=Array.from(u,m=>Array.from(m));for(let m=0;m<t;m++){let y=new Array(l);for(let w=0;w<l;w++){if(A[w]||!f[w].length){y[w]=g[w];continue}let v=0,S=0,_=0;for(let T of f[w])v+=g[T][0],S+=g[T][1],_+=g[T][2];let P=f[w].length;v=g[w][0]+e*v/P,S=g[w][1]+e*S/P,_=g[w][2]+e*_/P;let M=Math.hypot(v,S,_)||1;y[w]=[v/M,S/M,_/M]}g=y}let h=new Uint8Array(n*4);for(let m=0;m<n;m++){let y=A[a[m]]?r[m]:g[a[m]],w=zo(y[0],y[1],y[2]);h[m*4]=w>>>24&255,h[m*4+1]=w>>>16&255,h[m*4+2]=w>>>8&255,h[m*4+3]=w&255}return{...i,nrm:h}}function Em(i,t,e,n){let s=i.nv,r=i.idx,a=[];for(let _=0;_<s;_++)a.push(Uo(i.nrm,_));let o=new Int32Array(s),c=new Map,l=[];for(let _=0;_<s;_++){let P=i.pos[_*4].toFixed(3)+","+i.pos[_*4+1].toFixed(3)+","+i.pos[_*4+2].toFixed(3),M=c.get(P);M===void 0&&(M=l.length,c.set(P,M),l.push([])),o[_]=M,l[M].push(_)}let u=l.length,A=Array.from({length:u},()=>new Set),d=Array.from({length:u},()=>new Set),p=new Uint8Array(u),x=new Map,g=(_,P)=>_[0]*P[0]+_[1]*P[1]+_[2]*P[2],f=(_,P)=>{let M=o[_],T=o[P];if(M===T)return;A[M].add(T),A[T].add(M);let R=M<T,C=R?M+"_"+T:T+"_"+M,q=R?a[_]:a[P],L=R?a[P]:a[_],I=x.get(C);I?(I.c++,(g(I.na,q)<.985||g(I.nb,L)<.985)&&(p[M]=1,p[T]=1)):x.set(C,{na:q,nb:L,ga:M,gb:T,c:1})};for(let _=0;_<r.length;_+=3)f(r[_],r[_+1]),f(r[_+1],r[_+2]),f(r[_+2],r[_]);let h=new Uint8Array(u);for(let _ of x.values())_.c===1&&(h[_.ga]=1,h[_.gb]=1,d[_.ga].add(_.gb),d[_.gb].add(_.ga));let m=l.map(_=>[i.pos[_[0]*4],i.pos[_[0]*4+1],i.pos[_[0]*4+2]]),y=Array.from(A,_=>Array.from(_)),w=Array.from(d,_=>Array.from(_)),v=_=>{let P=m.map(M=>M.slice());for(let M=0;M<u;M++){if(p[M])continue;let T=h[M]?w[M]:y[M];if(T.length<(h[M]?2:1)||h[M]&&T.length>2)continue;let R=0,C=0,q=0;for(let I of T)R+=m[I][0],C+=m[I][1],q+=m[I][2];let L=T.length;P[M]=[m[M][0]+_*(R/L-m[M][0]),m[M][1]+_*(C/L-m[M][1]),m[M][2]+_*(q/L-m[M][2])]}m=P};for(let _=0;_<t;_++)v(e),v(n);let S=new Float32Array(i.pos);for(let _=0;_<u;_++)for(let P of l[_])S[P*4]=m[_][0],S[P*4+1]=m[_][1],S[P*4+2]=m[_][2];return{...i,pos:S}}var tr=class{constructor(t){if(this.u8=t instanceof Uint8Array?t:new Uint8Array(t),this.dv=new DataView(this.u8.buffer,this.u8.byteOffset,this.u8.byteLength),!Io(this.u8))throw new Error("Not a Wii face resource file");this.isWii=!0,this._s=new Map}section(t){if(this._s.has(t))return this._s.get(t);let e=this.dv.getUint16(0),n=this.dv.getInt32(4+4*(t-1)),s=this.dv.getUint16(n),r=n+4+4*s+4,a=this.dv.getInt32(n+4+4*s),o=[];for(let c=0;c<s;c++){let l=r+this.dv.getInt32(n+4+4*c),u=r+(c+1<s?this.dv.getInt32(n+4+4*(c+1)):a);o.push(this.u8.subarray(l,u))}return this._s.set(t,o),o}async texture(t,e){let s={eye:["eye",0],brow:["brow",0],mouth:["mouth",0],mole:["mole",1],mustache:["mustache",1],noseline:["noseline",0],glass:["glass",1],cap:["capTex",0]}[t];if(!s)return null;let r=t+":"+e+(this.hq?":h":"");if(this._t&&this._t.has(r))return this._t.get(r);let o=this.section(Ve[s[0]])[e+s[1]],c=null;return o&&o.length>=32&&(c=this._tex(t,xm(o),e)),!c&&t!=="cap"&&(console.warn("Wii resource: missing picture",t,e),c={w:1,h:1,mips:1,fmt:2,data:new Uint8Array(4),wii:!0}),(this._t||(this._t=new Map)).set(r,c),c}_tex(t,e,n){let{w:s,h:r,rgba:a}=e,o=null,c=4,l=s*r;if(t==="eye"&&!(globalThis.__WT||{}).noiris){let A=(globalThis.__WT||{}).irisR??2,d=new Float32Array(l),p=new Float32Array(l),x=new Float32Array(l);for(let f=0;f<l;f++)d[f]=a[f*4+2]/255;let g=(f,h,m)=>{for(let y=0;y<r;y++)for(let w=0;w<s;w++){let v=m?0:1;for(let S=-A;S<=A;S++)for(let _=-A;_<=A;_++){let P=w+_,M=y+S;if(P<0||M<0||P>=s||M>=r)continue;let T=f[M*s+P];v=m?Math.max(v,T):Math.min(v,T)}h[y*s+w]=v}};g(d,p,!0),g(p,x,!1);for(let f=0;f<l;f++){let h=Math.max(d[f],x[f]);h>d[f]+.02&&a[f*4]<90&&a[f*4+1]>40&&(a[f*4+2]=h*255,a[f*4+1]=Math.round(a[f*4+1]*(1-h)))}}if(t==="eye")o=Object.assign({a:.1,c:.3,lo:.5,sigma:.4,ot:5,oit:0,us:{r:2.5,amt:.8},tv:{it:14,lam:4}},$s("eye")),c=this.hq?8:4;else if(t==="mouth")o=Object.assign({a:.08,c:.12,lo:.53,sigma:.5,ot:5,oit:1,us:{r:2.5,amt:.8},tv:{it:14,lam:4}},$s("mouth")),c=this.hq?8:4;else if(t==="brow"||t==="mole"||t==="mustache")o=Object.assign({c:.3,lo:.5,sigma:.4,ot:5,oit:0,us:{r:2.5,amt:.8},tv:{it:14,lam:4}},$s("line")),c=this.hq?8:4;else if(t==="noseline")o=Object.assign({c:.3,lo:.5,sigma:.4,ot:5,oit:0,us:{r:2.5,amt:.8},tv:{it:14,lam:3}},$s("nose")),c=8;else if(t==="cap")c=s===32?4:1;else if(t==="glass"){let A=n+1>=6,d=new Uint8Array(l*4),p=a;for(let g=0;g<l;g++){let f=a[g*4]/255,h=a[g*4+3]/255;A?(d[g*4]=h*(1-f)*255,d[g*4+1]=h*255,d[g*4+2]=0,d[g*4+3]=255):(d[g*4]=h*f*255,d[g*4+1]=255,d[g*4+2]=0,d[g*4+3]=255)}a=d,o=A?{c:.12,lo:.5,sigma:.8,ot:5,oit:1,tv:{it:12,lam:4}}:{c:.15,lo:.5,sigma:.8,ot:5,oit:1,tv:{it:12,lam:4}},c=this.hq?8:4;let x=.84;if(A){let g=new Map;for(let m=0;m<l;m++){let y=p[m*4+3];p[m*4]>200&&y>80&&y<250&&g.set(y,(g.get(y)||0)+1)}let f=0,h=0;for(let[m,y]of g)y>f&&(f=y,h=m);h&&(x=h/255*.97)}if(A){let g=Ro(a,s,r,c,o),f=g.rgba;for(let h=0;h<g.w*g.h;h++){let m=f[h*4]/255,y=Math.max(m,f[h*4+1]/255),w=m+(y-m)*x;f[h*4]=w*255+.5,f[h*4+1]=255,f[h*4+2]=0,f[h*4+3]=255}return{w:g.w,h:g.h,mips:1,fmt:2,data:f,wii:!0}}}if(t==="brow"||t==="mole"||t==="mustache"||t==="noseline"){let A=new Uint8Array(l*4);for(let d=0;d<l;d++){let p=a[d*4];A[d*4]=p,A[d*4+1]=p,A[d*4+2]=p,A[d*4+3]=255}a=A}o&&(globalThis.__WT||{}).vec!==0&&t!=="glass"&&(o.vec=!0);let u=c===1?{w:s,h:r,rgba:a}:Ro(a,s,r,c,o);return{w:u.w,h:u.h,mips:1,fmt:2,data:u.rgba,wii:!0,ds:c/4}}feature(t,e){let n=pm[t]??t,s=this.section(Ve.facemakeTex)[n];if(!s||s.length<1056)return null;let r=new DataView(s.buffer,s.byteOffset,s.byteLength),a=64,o=128,c=new Uint16Array(a*o),l=32;for(let f=0;f<o/4;f++)for(let h=0;h<a/4;h++)for(let m=0;m<4;m++)for(let y=0;y<4;y++)c[(f*4+m)*a+h*4+y]=r.getUint16(l),l+=2;let u=new Uint8Array(a*o*4),A=0,d=0;for(let f=0;f<a*o;f++){let h=c[f];h&32768?d=Math.max(d,h>>5&31):A=Math.max(A,h>>4&15)}let p=mm[t]||{};for(let f=0;f<a*o;f++){let h=c[f],m,y;if(h&32768)m=d?(h>>5&31)/d:0,y=1;else{let S=h>>12&7;m=A&&(S||h>>8&15||h&15)?(h>>4&15)/A:0,y=0}let w=y&&p.alt||p,v=w.c?w.c(e):[0,0,0];u[f*4]=v[0],u[f*4+1]=v[1],u[f*4+2]=v[2],u[f*4+3]=Math.round(Math.max(0,Math.min(1,m*(w.a??.26)))*255)}let g=Ro(u,a,o,4,!0?{a:.15,lo:.5,sigma:1.5}:null);return{w:g.w,h:g.h,mips:1,fmt:2,data:g.rgba,wii:!0}}async shape(t,e){let n,s=!1,r=!1,a=e;switch(t){case"faceline":n=Ve.faceline,s=!0,r=!0;break;case"mask":n=Ve.mask,s=!0;break;case"hair":case"hairhat":n=Ve.hair;break;case"forehead":case"foreheadhat":n=Ve.forehead;break;case"nose":n=Ve.nose;break;case"noseline":n=Ve.noselineShape,s=!0;break;case"beard":n=Ve.beardShape,a=e+1;break;case"glass":n=Ve.glassShape,s=!0;break;case"cap":case"caphat":n=Ve.capShape,s=!0;break;default:return null}let o=this.section(n)[a];if(!o)return null;let c=this._parse(o,s,r,t);if(t==="mask"&&c.nv&&c.uv)for(let l=0;l<c.nv;l++)c.uv[l*2]=.5+.01*c.pos[l*4],c.uv[l*2+1]=.8037-.01*c.pos[l*4+1];return c}_parse(t,e,n,s){if(t.length<12)return{nv:0};try{let r=bm(_m(t,e,n),e,n),a=Object.assign({},gm,(globalThis.__WT||{}).sm),o=a.level;if(o>0&&this._smooth!==!1){r=Sm(r,o,a.alpha);let c=Object.assign({it:0,lam:.6},(globalThis.__WT||{}).ns);c.it>0&&(s==="hair"||s==="cap")&&(r=Tm(r,c.it,c.lam));let l=Object.assign({it:30,lam:.5,mu:-.53},(globalThis.__WT||{}).ps);l.it>0&&s==="hair"&&(r=Em(r,l.it,l.lam,l.mu))}return r}catch{return{nv:0}}}};function $c(i){let t=i.length/4,e=new Float32Array(t*3);for(let n=0;n<t;n++){let s=(i[n*4]<<24|i[n*4+1]<<16|i[n*4+2]<<8|i[n*4+3])>>>0,r=u=>(u=u&1023,u>=512&&(u-=1024),Math.max(-1,u/511)),a=r(s),o=r(s>>>10),c=r(s>>>20),l=Math.hypot(a,o,c)||1;e[n*3]=a/l,e[n*3+1]=o/l,e[n*3+2]=c/l}return e}function tl(i){let t=new Ie,e=new Float32Array(i.nv*3);for(let n=0;n<i.nv;n++)e[n*3]=i.pos[n*4],e[n*3+1]=i.pos[n*4+1],e[n*3+2]=i.pos[n*4+2];if(t.setAttribute("position",new $t(e,3)),t.setAttribute("normal",new $t($c(i.nrm),3)),i.uv&&t.setAttribute("uv",new $t(i.uv,2)),i.col&&i.col.length>=i.nv*4){let n=new Float32Array(i.nv*4);for(let s=0;s<i.nv*4;s++)n[s]=i.col[s]/255;t.setAttribute("vcol",new $t(n,4))}else{let n=new Float32Array(i.nv*4),s=i.col&&i.col.length>=4?[i.col[0]/255,i.col[1]/255,i.col[2]/255,i.col[3]/255]:[1,1,0,1];for(let r=0;r<i.nv;r++)n[r*4]=s[0],n[r*4+1]=s[1],n[r*4+2]=s[2],n[r*4+3]=s[3];t.setAttribute("vcol",new $t(n,4))}return i.tan&&i.tan.length>=i.nv*4&&t.setAttribute("tan",new $t(new Float32Array($c(i.tan)),3)),t.setIndex(new $t(i.idx,1)),t}var Qn={K:4.8117,D:300,CY:33.373,CX:-.0357},Oo=[[1,1,1],[1,.878,.671],[.883,.623,.467],[1,.828,.835],[.709,.455,.343],[.445,.3,.258]];function Vn(i){let t=atob(i),e=t.length,n=new Uint8Array(e);for(let a=0;a<e;a++)n[a]=t.charCodeAt(a);let s=Math.round(Math.sqrt(e/4)),r=new Ks(n,s,s,Ne,Je);return r.magFilter=Se,r.minFilter=Se,r.needsUpdate=!0,r.flipY=!1,r}var Vi={value:0},Bo=`uniform float uDx;
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
`,Xe="varying vec3 vN; varying vec2 vUv; void main(){ vN=normalize(normalMatrix*normal); vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",Dm=`precision highp float; ${Bo} uniform float kindU; uniform sampler2D lut; uniform vec3 albedo; uniform sampler2D map; uniform bool useMap; varying vec3 vN; varying vec2 vUv;
void main(){ vec3 n=normalize(vN); if(!gl_FrontFacing) n=-n; vec2 q=n.xy*0.5+0.5; vec4 t=texture2D(lut,q);
 vec3 L=t.rgb*(320.0/255.0); float Sp=(t.a*96.0-32.0)/255.0;
 vec3 base=albedo; float a=1.0;
 if(useMap){ vec4 m=texture2D(map,vUv); base=mix(albedo,m.rgb,m.a); }
 gl_FragColor=vec4(dx(clamp(base*L+vec3(Sp),0.0,1.0),n,kindU),1.0); }`;function Kn(i,t,e,n=0){return new oe({vertexShader:Xe,fragmentShader:Dm,side:re,uniforms:{uDx:Vi,kindU:{value:n},lut:{value:i},albedo:{value:new U(...t)},map:{value:e||null},useMap:{value:!!e}}})}var Fo=1.12,Pm=`precision highp float; uniform sampler2D lut; uniform sampler2D map; varying vec3 vN; varying vec2 vUv;
void main(){ vec3 n=normalize(vN); if(!gl_FrontFacing) n=-n; vec2 q=n.xy*0.5+0.5; float F=texture2D(lut,q).r*2.55; vec4 m=texture2D(map,vUv); if(m.a<0.002) discard;
 gl_FragColor=vec4(clamp(m.rgb*F*${Fo.toFixed(2)},0.0,1.0),m.a); }`;function el(i,t){return new oe({vertexShader:Xe,fragmentShader:Pm,side:re,transparent:!0,depthWrite:!1,uniforms:{lut:{value:i},map:{value:t}}})}var Lm=`precision highp float; uniform sampler2D lut; uniform sampler2D map; uniform vec3 tint; varying vec3 vN; varying vec2 vUv;
void main(){ vec3 n=normalize(vN); if(!gl_FrontFacing) n=-n; vec2 q=n.xy*0.5+0.5; vec4 t=texture2D(lut,q);
 vec3 L=t.rgb*(320.0/255.0); float Sp=(t.a*96.0-32.0)/255.0; float a=texture2D(map,vUv).r; if(a<0.002) discard;
 gl_FragColor=vec4(clamp(tint*L+vec3(Sp),0.0,1.0),a); }`;function nl(i,t,e){return new oe({vertexShader:Xe,fragmentShader:Lm,side:re,transparent:!0,depthWrite:!1,uniforms:{lut:{value:i},map:{value:t},tint:{value:new U(...e)}}})}function il(i,t=Qn.K,e=Qn.CX,n=Qn.CY){let s=t*i/512,r=2*Math.atan(i/2/s/Qn.D)*180/Math.PI,a=new ve(r,1,10,2e3);return a.position.set(e,n,Qn.D),a.lookAt(e,n,0),a.updateMatrixWorld(),a}function sl(i){let t=new qi({antialias:!0,preserveDrawingBuffer:!0,alpha:!0,premultipliedAlpha:!1});return t.setSize(i,i,!1),t.setClearColor(0,0),t.outputColorSpace=He,t.autoClear=!0,t}var rl="attribute vec4 vcol; varying vec3 vN; varying float vCls; void main(){ vN=normalize(normalMatrix*normal); vCls=vcol.r>0.5?1.0:0.0; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",Cm=`precision highp float; ${Bo} uniform sampler2D lutA; uniform sampler2D lutB; uniform vec3 albedo; varying vec3 vN; varying float vCls;
void main(){ vec3 n=normalize(vN); if(!gl_FrontFacing) n=-n; vec2 q=n.xy*0.5+0.5; vec4 t=vCls>0.5?texture2D(lutB,q):texture2D(lutA,q);
 vec3 L=t.rgb*(320.0/255.0); float Sp=(t.a*96.0-32.0)/255.0; gl_FragColor=vec4(dx(clamp(albedo*L+vec3(Sp),0.0,1.0),n,1.0),1.0); }`;function ko(i,t,e){return new oe({vertexShader:rl,fragmentShader:Cm,side:re,uniforms:{uDx:Vi,lutA:{value:i},lutB:{value:t},albedo:{value:new U(...e)}}})}var Ki=[[.344,.371,.371],[1.276,.875,.623],[1.684,.749,.529],[2.15,1.284,.686],[2.092,2.258,2.383],[1.48,1.346,.623],[2.325,1.755,.749],[3.372,2.887,1.535]],Nm=`precision highp float; uniform sampler2D map; uniform vec3 tint; uniform float lo; uniform float kk; varying vec2 vUv; varying vec3 vN;
void main(){ vec4 t=texture2D(map,vUv); float a=t.r; vec3 c=tint;
 if(lo>0.0){ float fr=smoothstep(lo,lo+0.06,t.r); a=t.r*(1.0-fr)*kk+fr; c=mix(tint,vec3(0.0),fr); }
 if(a<0.002) discard; gl_FragColor=vec4(c,a); }`;function ol(i,t,e=0,n=1){return new oe({vertexShader:Xe,fragmentShader:Nm,side:re,transparent:!0,depthWrite:!1,depthTest:!1,uniforms:{map:{value:i},tint:{value:new U(...t)},lo:{value:e},kk:{value:n}}})}var Rm=`precision highp float; uniform sampler2D lut; uniform vec3 col; uniform float ng; varying vec3 vN;
void main(){ vec3 n=normalize(vN); if(!gl_FrontFacing) n=-n; vec4 t=texture2D(lut,n.xy*ng*0.5+0.5); vec4 t0=texture2D(lut,vec2(0.5));
 vec3 L=t.rgb/max(t0.rgb,vec3(0.01)); float Sp=((t.a-t0.a)*96.0)/255.0; gl_FragColor=vec4(clamp(col*L+vec3(Sp),0.0,1.0),1.0); }`;function qo(i,t,e=1){return new oe({vertexShader:Xe,fragmentShader:Rm,side:re,uniforms:{lut:{value:i},ng:{value:e},col:{value:new U(t[0]/255,t[1]/255,t[2]/255)}}})}function al(i,t,e,n=0){let s=t*i/1024*(1024/i)*1,r=t*i/1024,a=2*Math.atan(i/2/r/Qn.D)*180/Math.PI,o=new ve(a,1,10,2e3);return o.position.set(n,e,Qn.D),o.lookAt(n,e,0),o.updateMatrixWorld(),o}var Im=`precision highp float; uniform sampler2D lut; uniform sampler2D map; uniform vec3 col; varying vec3 vN; varying vec2 vUv;
void main(){ vec3 n=normalize(vN); if(!gl_FrontFacing) n=-n; vec4 t=texture2D(lut,n.xy*0.5+0.5); vec4 t0=texture2D(lut,vec2(0.5));
 vec3 L=t.rgb/max(t0.rgb,vec3(0.01)); float Sp=((t.a-t0.a)*96.0)/255.0; float uw=smoothstep(-0.15,-0.55,n.y); L=mix(L,vec3(0.22),uw); Sp=mix(Sp,0.2,uw); float p=texture2D(map,vUv).r; gl_FragColor=vec4(clamp(col*p*L+vec3(Sp),0.0,1.0),1.0); }`;function cl(i,t,e){return new oe({vertexShader:Xe,fragmentShader:Im,side:re,uniforms:{lut:{value:i},map:{value:e},col:{value:new U(t[0]/255,t[1]/255,t[2]/255)}}})}var zm="precision highp float; uniform float mk; varying vec3 vN; void main(){ vec3 n=normalize(vN); if(!gl_FrontFacing) n=-n; gl_FragColor=vec4(n.xy*0.5+0.5,mk,1.0); }";function er(i=0){return new oe({vertexShader:Xe,fragmentShader:zm,side:re,uniforms:{mk:{value:i}}})}var Um="precision highp float; uniform float ch; varying vec2 vUv; void main(){ float x=(ch<0.5?vUv.x:vUv.y); float v=clamp(x,0.0,0.99999)*255.0; float hi=floor(v); gl_FragColor=vec4(hi/255.0,fract(v),0.0,1.0); }";function ll(i){return new oe({vertexShader:Xe,fragmentShader:Um,side:re,uniforms:{ch:{value:i}}})}var Om="precision highp float; varying vec3 vN; varying float vCls; void main(){ vec3 n=normalize(vN); if(!gl_FrontFacing) n=-n; gl_FragColor=vec4(n.xy*0.5+0.5,vCls,1.0); }";function Ho(){return new oe({vertexShader:rl,fragmentShader:Om,side:re})}var Bm=`precision highp float; ${Bo} uniform sampler2D lut; uniform sampler2D map; uniform vec3 col; varying vec3 vN; varying vec2 vUv;
void main(){ vec3 n=normalize(vN); if(!gl_FrontFacing) n=-n; vec4 t=texture2D(lut,n.xy*0.5+0.5);
 vec3 L=t.rgb*(320.0/255.0); float Sp=(t.a*96.0-32.0)/255.0;
 float p=texture2D(map,vUv).r; gl_FragColor=vec4(dx(clamp(col*p*L+vec3(Sp),0.0,1.0),n,2.0),1.0); }`;function hl(i,t,e){return new oe({vertexShader:Xe,fragmentShader:Bm,side:re,uniforms:{uDx:Vi,lut:{value:i},map:{value:e},col:{value:new U(t[0]/255,t[1]/255,t[2]/255)}}})}var Fm="precision highp float; uniform sampler2D map; varying vec3 vN; varying vec2 vUv; void main(){ vec3 n=normalize(vN); if(!gl_FrontFacing) n=-n; gl_FragColor=vec4(n.xy*0.5+0.5,texture2D(map,vUv).r,1.0); }";function ul(i){return new oe({vertexShader:Xe,fragmentShader:Fm,side:re,uniforms:{map:{value:i}}})}var Xi=-.25,te=6.152,Ji=571,km=512,un=[[230,58,49],[255,135,54],[255,236,60],[144,230,60],[30,144,76],[39,98,202],[87,192,242],[255,116,149],[140,68,195],[98,83,53],[243,243,243],[53,53,49]],Qo=[88,96,104],qm=3,Hm=0,Gm=[13.4,18.62,23.89,29.02,34.07],Wm=[20.31,28.3,36.41,44.36,52.28],Qm=[[20.45,22.11,23.76],[27.86,29.92,31.97],[35.27,37.87,40.47],[42.7,45.66,48.61],[49.93,53.57,57]],nr=[0,32,64,96,127];function Yn(i,t,e){if(e<=i[0])return t[0];for(let n=1;n<i.length;n++)if(e<=i[n]){let s=(e-i[n-1])/(i[n]-i[n-1]);return t[n-1]+s*(t[n]-t[n-1])}return t[t.length-1]}function Vo(i,t){let e=38.96+.4425*i,n=e*(1+64e-5*(t-64)),s=n/67.45,r=(.686+.00482*i)*(.715+.00449*t),a=(.657+.00543*i)*(.784+.00336*t),o=(.694+.00445*i)*(.612+.00555*t),c=(.806+.00303*i)*Yn([0,64,127],[.52,1,1.55],t),l=(.686+.00482*i)*Yn([0,64,127],[.61,1,1.376],t),u=Yn(nr,Gm,i),A=Yn(nr,Wm,i),d=Yn(nr,nr.map((p,x)=>Yn([0,64,127],Qm[x],t)),i);return{B:n,sy:s,kT:r,kT2:l,kA:a,kL:o,rA:c,hem:u,crotch:A,hand:d}}var Go=[0,32,64,96,127],Vm=[7.238,6.819,6.152,5.41,4.667],Km={0:[28.05,26.53,25.14],32:[19.94,18.04,16.28],64:[11.87,9.59,7.31],96:[3.7,1.11,-1.48],127:[-4.07,-7.07,-10.07]};function Wo(i,t,e){if(e<=i[0])return t[0];for(let n=1;n<i.length;n++)if(e<=i[n]){let s=(e-i[n-1])/(i[n]-i[n-1]);return t[n-1]+s*(t[n]-t[n-1])}return t[t.length-1]}function Al(i,t){let e=Wo(Go,Vm,i),n=Wo(Go,Go.map(s=>Wo([0,64,127],Km[s],t)),i);return{c:e,yc:n}}var ir=i=>(i-km)/te,fl=i=>(i-Ji)/te;function sr(i,t=20,e=!1,n=2){if(e){let c=(y,w)=>{let v=[w[0]-y[0],w[1]-y[1],w[2]-y[2]],S=Math.hypot(...v)||1;return v.map(_=>_/S)},l=i[0],u=i[1],A=i[i.length-1],d=i[i.length-2],p=c(u,l),x=c(d,A),g=[],f=5;for(let y=f;y>=1;y--){let w=y/f,v=w*Math.PI/2,S=Math.sin(Math.PI/2-v)*1,_=(1-Math.cos(Math.PI/2-v))*0,P=Math.cos(v),M=Math.sin(v)*l[3];g.push([l[0]+p[0]*M,l[1]+p[1]*M,l[2]+p[2]*M,Math.max(l[3]*P,.001),Math.max(l[4]*P,.001)])}let h=i.map(y=>y.slice()),m=[];for(let y=1;y<=f;y++){let w=y/f*Math.PI/2,v=Math.cos(w),S=Math.sin(w)*A[3];m.push([A[0]+x[0]*S,A[1]+x[1]*S,A[2]+x[2]*S,Math.max(A[3]*v,.001),Math.max(A[4]*v,.001)])}i=[...g,...h,...m]}let s=[],r=[],a=i.length;for(let c=0;c<a;c++){let l=i[c],u=i[Math.max(0,c-1)],A=i[Math.min(a-1,c+1)],d=new U(A[0]-u[0],A[1]-u[1],A[2]-u[2]).normalize(),p=Math.abs(d.z)<.9?new U(0,0,1):new U(1,0,0),x=new U().crossVectors(d,p).normalize(),g=new U().crossVectors(d,x).normalize();for(let f=0;f<t;f++){let h=f/t*Math.PI*2,m=Math.cos(h),y=Math.sin(h);n!==2&&(m=Math.sign(m)*Math.pow(Math.abs(m),2/n),y=Math.sign(y)*Math.pow(Math.abs(y),2/n)),s.push(l[0]+x.x*m*l[3]+g.x*y*l[4],l[1]+x.y*m*l[3]+g.y*y*l[4],l[2]+x.z*m*l[3]+g.z*y*l[4])}}for(let c=0;c<a-1;c++)for(let l=0;l<t;l++){let u=c*t+l,A=c*t+(l+1)%t,d=(c+1)*t+l,p=(c+1)*t+(l+1)%t;r.push(u,d,A,A,d,p)}let o=new Ie;return o.setAttribute("position",new qe(s,3)),o.setIndex(r),o.computeVertexNormals(),o}function dl(i,t,e,n,s,r,a=16){let o=[];for(let c=0;c<=a;c++){let l=-Math.PI/2+Math.PI*c/a;o.push([i,t+Math.sin(l)*s,e,Math.cos(l)*n+.001,Math.cos(l)*r+.001])}return o[0][3]=o[0][4]=.001,sr(o,24)}var Ym=[[567,20,44],[580,37,54.5],[592,53,56],[604,64,56],[630,60.5,56],[650,58.5,55.5],[700,59],[716,59]],jm=[[716,59],[740,62],[765,62],[782,54],[794,30],[797,6]],Jm=[[567,20],[575,31],[583,47.5],[592,56],[602,63],[660,66],[716,74],[760,80],[794,87]],Xm=[[463,612,14.2],[432,690,14.6],[418,742,14.6]],Yi=[408,777,27],Zm=[[478.5,790,25.5],[478.5,815,24.5],[480,860,21],[481,905,17],[481.5,947,15.5]],ji=[479.5,966,24,20,30];function pl(i,t){let e=Vo(i.height,i.weight),{kT:n,kT2:s,kA:r,kL:a,rA:o}=e,c=new je,l=(716-Ji)/te,u=(797-Ji)/te,A=(985-Ji)/te,d=(804-Ji)/te,p=[0,l,u,A],x=[0,e.hem+(l-23.89),e.crotch+(u-36.41),e.B+(A-67.45)],g=_=>Yn(p,x,_),f=_=>_*(e.hand+(d-37.87))/d,h=_=>Xi-g(fl(_)),m=_=>Xi-f(fl(_)),y=.95,w=(x[3]-x[2])/(p[3]-p[2]),v=_=>{let P=[];for(let M=0;M<_.length-1;M++){let T=_[Math.max(0,M-1)],R=_[M],C=_[M+1],q=_[Math.min(_.length-1,M+2)];for(let L=0;L<1;L+=.25){let I=L*L,V=I*L,F=(J,j,X,$)=>.5*(2*j+(-J+X)*L+(2*J-5*j+4*X-$)*I+(-J+3*j-3*X+$)*V);P.push([F(T[0],R[0],C[0],q[0]),F(T[1],R[1],C[1],q[1])])}}return P.push(_[_.length-1]),P},S=(_,P,M,T)=>{let R=_.map(([C,q,L])=>{let I=T===void 0?0:Math.min(1,Math.max(0,(C-600)/100)),V=M+(T===void 0?0:T-M)*I,F=Math.max(q/te*V,.001);return[0,h(C),0,F,L!==void 0?Math.max(L/te*V,.001):F*y]});c.add(new Wt(sr(R,64,!1,qm),P))};i.gender===1?S(Jm,t.shirt,n,s):(S(Ym,t.shirt,n,s),i.dbgHide!=="pelvis"&&S(jm,t.pants,s));for(let _ of[1,-1]){let P=Xm.map(([T,R,C])=>[_*Math.abs(ir(T))*r,m(R),Hm,C*1.2/te*o,C*1.2/te*o]);c.add(new Wt(sr(P,32,!0),t.shirt)),c.add(new Wt(dl(_*Math.abs(ir(Yi[0]))*r,m(Yi[1]),0,Yi[2]*1.06/te*o,Yi[2]*1.06/te*o,Yi[2]*1.06/te*o),t.shirt));let M=Zm.map(([T,R,C])=>[_*Math.abs(ir(T))*a,h(R),0,C/te*a,C/te*a*.9]);c.add(new Wt(sr(M,32,!0),t.pants)),c.add(new Wt(dl(_*Math.abs(ir(ji[0]))*a,h(ji[1]),1.5*a,ji[2]/te*a,ji[3]/te*w,ji[4]/te*a),t.pants))}return c}var $m={5126:Float32Array,5123:Uint16Array,5125:Uint32Array,5121:Uint8Array,5120:Int8Array,5122:Int16Array},tg={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT4:16};function vl(i){let t=new DataView(i);if(t.getUint32(0,!0)!==1179937895)throw new Error("not a GLB");let e=t.getUint32(12,!0),n=JSON.parse(new TextDecoder().decode(new Uint8Array(i,20,e))),s=20+e,r=t.getUint32(s,!0),a=i.slice(s+8,s+8+r),o=x=>{let g=n.accessors[x],f=n.bufferViews[g.bufferView],h=tg[g.type],m=$m[g.componentType],y=(f.byteOffset||0)+(g.byteOffset||0),w=f.byteStride||0,v=new m(g.count*h);if(!w||w===h*m.BYTES_PER_ELEMENT)v.set(new m(a,y,g.count*h));else for(let S=0;S<g.count;S++)v.set(new m(a.slice(y+S*w,y+S*w+h*m.BYTES_PER_ELEMENT)),S*h);return v},c=n.nodes.map(x=>({name:x.name,t:x.translation||[0,0,0],r:x.rotation||[0,0,0,1],s:x.scale||[1,1,1],ch:x.children||[],parent:-1}));c.forEach((x,g)=>x.ch.forEach(f=>c[f].parent=g));let l=n.animations&&n.animations[0];if(l)for(let x of l.channels){let g=l.samplers[x.sampler],f=o(g.output),h=x.target.path,m=c[x.target.node],y={translation:3,rotation:4,scale:3}[h];h==="translation"?m.t=Array.from(f.slice(0,3)):h==="rotation"?m.r=Array.from(f.slice(0,4)):h==="scale"&&(m.s=Array.from(f.slice(0,3)))}let u=n.skins[0],A=u.joints,d=o(u.inverseBindMatrices),p=[];for(let x of n.meshes)for(let g of x.primitives){let f=g.attributes;p.push({pos:o(f.POSITION),nrm:o(f.NORMAL),jt:o(f.JOINTS_0),wt:o(f.WEIGHTS_0),idx:o(g.indices),mat:g.material,col:f.COLOR_0!==void 0?o(f.COLOR_0):null})}return{nodes:c,joints:A,ibm:d,prims:p,names:Object.fromEntries(c.map((x,g)=>[x.name,g]))}}var Pg=new Zt,ml=new Ge,gl=new U,yl=new U;function eg(i,t){let e=i.nodes.length,n=new Array(e),s=c=>{let l=i.nodes[c],u=t&&t[l.name]||[1,1,1];return ml.set(l.r[0],l.r[1],l.r[2],l.r[3]),gl.set(l.t[0],l.t[1],l.t[2]),yl.set(l.s[0]*u[0],l.s[1]*u[1],l.s[2]*u[2]),new Zt().compose(gl,ml,yl)},r=c=>{if(n[c])return n[c];let l=s(c),u=i.nodes[c].parent;return n[c]=u>=0?new Zt().multiplyMatrices(r(u),l):l,n[c]};for(let c=0;c<e;c++)r(c);let a=i.joints.map((c,l)=>{let u=new Zt().fromArray(i.ibm,l*16);return new Zt().multiplyMatrices(n[c],u)}),o=a.map(c=>new Ot().setFromMatrix4(c).invert().transpose());return i.prims.map(c=>{let l=c.pos.length/3,u=new Float32Array(l*3),A=new Float32Array(l*3),d=new U,p=new U,x=new U,g=new U;for(let f=0;f<l;f++){d.set(c.pos[f*3],c.pos[f*3+1],c.pos[f*3+2]),p.set(c.nrm[f*3],c.nrm[f*3+1],c.nrm[f*3+2]),x.set(0,0,0),g.set(0,0,0);for(let h=0;h<4;h++){let m=c.wt[f*4+h];if(m<=0)continue;let y=c.jt[f*4+h];x.addScaledVector(d.clone().applyMatrix4(a[y]),m),g.addScaledVector(p.clone().applyMatrix3(o[y]),m)}g.normalize(),u.set([x.x,x.y,x.z],f*3),A.set([g.x,g.y,g.z],f*3)}return{pos:u,nrm:A,idx:c.idx,mat:c.mat,col:c.col}})}function _l(i){let t=new Ie;return t.setAttribute("position",new $t(i.pos,3)),t.setAttribute("normal",new $t(i.nrm,3)),t.setIndex(new $t(i.idx,1)),t}var bn=6,wl=i=>{bn=i},ng=[10.85,7.05,4.92,-.007],Zi=[0,145/te,226/te,414/te],xl=233/te;function bl(i,t,e){if(e<=i[0])return t[0]+(e-i[0])*(t[1]-t[0])/(i[1]-i[0]);for(let s=1;s<i.length;s++)if(e<=i[s]){let r=(e-i[s-1])/(i[s]-i[s-1]);return t[s-1]+r*(t[s]-t[s-1])}let n=i.length-1;return t[n]+(e-i[n])*(t[n]-t[n-1])/(i[n]-i[n-1])}var Ml=(i,t,e)=>Math.min(e,Math.max(t,i));function Sl(i){let t=eg(i,null),e=i.nodes.map(l=>l.name),n=l=>/^(arm_|shoulder_|elbow_|wrist_)/.test(l),s=l=>/^(foot_|ankle_|knee_)/.test(l),r=l=>l==="hip",a=t.map((l,u)=>{let A=i.prims[u],d=l.pos.length/3,p=new Float32Array(d),x=new Float32Array(d),g=new Float32Array(d),f=new Float32Array(d);for(let h=0;h<d;h++)for(let m=0;m<4;m++){let y=A.wt[h*4+m];if(y<=0)continue;let w=e[i.joints[A.jt[h*4+m]]];n(w)?(p[h]+=y,f[h]+=(/_l/.test(w)?1:-1)*y):s(w)?x[h]+=y:r(w)&&(g[h]+=y)}return{wa:p,wl:x,wh:g,side:f}}),o=l=>{let u=(()=>{let A=i.nodes.length,d=new Array(A),p=x=>{if(d[x])return d[x];let g=i.nodes[x],f=new Zt().compose(new U(...g.t),new Ge(...g.r),new U(...g.s));return d[x]=g.parent>=0?new Zt().multiplyMatrices(p(g.parent),f):f,d[x]};return p(i.names[l])})();return new U().setFromMatrixPosition(u)},c={};for(let l of["l","r"]){let u=o("arm_"+l+"1"),A=o("elbow_"+l),d=o("wrist_"+l),p=new U,x=0;t.forEach((g,f)=>{let h=i.prims[f];for(let m=0;m<g.pos.length/3;m++){let y=0,w=-1;for(let v=0;v<4;v++)h.wt[m*4+v]>w&&(w=h.wt[m*4+v],y=v);e[i.joints[h.jt[m*4+y]]]==="wrist_"+l&&(p.x+=g.pos[m*3],p.y+=g.pos[m*3+1],p.z+=g.pos[m*3+2],x++)}}),p.multiplyScalar(1/Math.max(x,1)),c[l]=[u,A,d,p]}return{B:i,base:t,info:a,lines:c}}var Ko=i=>bl(ng.slice().reverse(),Zi.slice().reverse(),i);function Tl(i,t,e){let n=Vo(t,e),{kT:s,kT2:r,kA:a,kL:o,rA:c}=n,l=Zi[1],u=Zi[2],A=Zi[3],d=[0,n.hem+(l-23.89),n.crotch+(u-36.41),n.B+(A-67.45)],p=m=>bl(Zi,d,m),x=m=>m*(n.hand+(xl-37.87))/xl,g=m=>Xi-p(Ko(m)),f=m=>Xi-x(Ko(m)),h=m=>{let y=Ml((571+te*m-600)/100,0,1);return s+(r-s)*y};return i.base.map((m,y)=>{let w=m.pos.length/3,v=new Float32Array(w*3),S=new Float32Array(w*3),_=i.info[y];for(let P=0;P<w;P++){let M=m.pos[P*3],T=m.pos[P*3+1],R=m.pos[P*3+2],C=m.nrm[P*3],q=m.nrm[P*3+1],L=m.nrm[P*3+2],I=_.wa[P],V=_.wl[P],F=_.wh[P],J=Math.max(0,1-I-V-F),j=Ko(T),X=h(j),$=J*X+F*r+V*o,ot=M*bn*$,Y=R*bn*$,et=g(T),at=ot,mt=et,dt=Y,_t=C/$,Mt=q,At=L/$;if(I>.001){let k=_.side[P]>=0?"l":"r",ne=i.lines[k],yt=new U(M,T,R),wt=1e9,pt=0,qt=0,Et=null;for(let nt=0;nt<3;nt++){let ct=ne[nt],gt=ne[nt+1],tt=gt.clone().sub(ct),zt=Ml(yt.clone().sub(ct).dot(tt)/tt.lengthSq(),0,1),Dt=ct.clone().addScaledVector(tt,zt),St=Dt.distanceToSquared(yt);St<wt&&(wt=St,pt=zt,qt=nt,Et=Dt)}let D=nt=>new U(Math.sign(nt.x||1)*Math.abs(nt.x)*bn*a,f(nt.y),nt.z*bn*a*0),b=D(ne[qt]),N=D(ne[qt+1]),H=b.clone().lerp(N,pt),B=yt.clone().sub(Et).multiplyScalar(bn*c),G=H.x+B.x,it=H.y+B.y,Z=H.z+B.z+Et.z*bn*a*0;at=ot*(1-I)+G*I,mt=et*(1-I)+it*I,dt=Y*(1-I)+(Z+Et.z*bn)*I*1,_t=C,Mt=q,At=L}v[P*3]=at,v[P*3+1]=mt,v[P*3+2]=dt;let It=Math.hypot(_t,Mt,At)||1;S[P*3]=_t/It,S[P*3+1]=Mt/It,S[P*3+2]=At/It}return{pos:v,nrm:S,idx:m.idx,mat:m.mat}})}var Si={eye:{cat:"eye",pivot:"edge",hx:79.383,hy:-3.038,px0:254.352,pxStep:7.006,pyRef:252.053,yRef:12,pyStep:8.436,sk:.247,sz0:1,szK:.4,th0:2.137,rRef:4,rStep:11.263},brow:{cat:"brow",pivot:"edge",hx:73.887,hy:1.404,px0:254.352,pxStep:7.006,pyRef:218.89,yRef:7,pyStep:8.436,sk:.247,sz0:1,szK:.4,th0:-.3,rRef:6,rStep:11.3},mouth:{cat:"mouth",pivot:"center",hx:0,hy:0,px0:256,pxStep:0,pyRef:345.4,yRef:13,pyStep:8.436,sk:.247,sz0:1,szK:.4,th0:0,rRef:0,rStep:0}};function Yo(i,t,e,n,s){let r=i.sLin?i.sLin[0]+i.sLin[1]*n:i.sk*(i.szK*n+i.sz0),a=i.th0+i.rStep*(i.rRef-s),o=i.px0+i.pxStep*t,c=i.pyRef+i.pyStep*(e-i.yRef);return{px:o,py:c,s:r,th:a}}var El=[...Array(48)].map((i,t)=>[0,4,8,13,14,18,19,21,23,24,26,29,33,34,35,38,39,40,43,44,45,46,47].includes(t)?-11.25:0),Dl=[0,0,-1,1,0,1,0,1,-2,1,0,2,-1,-1,0,0,1,1,0,0,-1,0,1,0].map(i=>i*11.25);var Sn=1024,ig={},jo=new Set([34,57]);function jn(i,t){let e=document.createElement("canvas");e.width=i.w,e.height=i.h;let n=e.getContext("2d"),s=n.createImageData(i.w,i.h),r=[1,2,4][i.fmt];for(let a=0;a<i.h;a++)for(let o=0;o<i.w;o++){let c=(a*i.w+o)*r,l=i.data[c],u=r>1?i.data[c+1]:0,A=r>2?i.data[c+2]:0,d=r>3?i.data[c+3]:255,p=t(l,u,A,d),x=(a*i.w+o)*4;s.data[x]=p[0],s.data[x+1]=p[1],s.data[x+2]=p[2],s.data[x+3]=p[3]}return n.putImageData(s,0,0),i.ds>1&&(e._ds=i.ds),e}if(typeof CanvasRenderingContext2D<"u"&&!CanvasRenderingContext2D.prototype.__nfDs){let i=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(t,...e){if(t&&t._ds>1&&e.length===2){let n=t._ds;return i.call(this,t,e[0]/n,e[1]/n,t.width/n,t.height/n)}return i.call(this,t,...e)},CanvasRenderingContext2D.prototype.__nfDs=!0}function sg(i,t,e,n,s,r,a,o,c){let l=Sn/512;i.save(),c<0&&(i.translate(512*l,0),i.scale(-1,1)),i.translate(e*l,n*l),i.rotate(o*Math.PI/180),i.scale(a*l,a*l),i.translate(s,r),i.scale(-1,1),i.drawImage(t,-t.width/2,-t.height/2),i.restore()}var Ti=async i=>await(await fetch(i,{cache:"force-cache"})).text(),Pl=null;function rg(){return Pl||(Pl=sl(512))}async function Ll(i,t="./",e={}){let n=i instanceof Uint8Array?i:new Uint8Array(i),s=Io(n),r=s?new tr(n):new Zs(n),a=typeof t=="object"?t:{skin:await Ti(t+"lut_skin.b64"),feat:await Ti(t+"lut_feat.b64"),hair0:await Ti(t+"lut_hair0.b64"),hair1:await Ti(t+"lut_hair1.b64"),body:await Ti(t+"lut_body.b64").catch(()=>null),cap:await Ti(t+"lut_cap.b64").catch(()=>null)},o=Vn(a.skin),c=Vn(a.feat),l=a.body?Vn(a.body):null,u=a.cap?Vn(a.cap):null,A=Vn(a.hair0),d=Vn(a.hair1),p={shape:new Map,tex:new Map},x=async(v,S)=>{let _=v+":"+S;if(!p.shape.has(_)){let P=await r.shape(v,S),M=null;P&&P.nv&&(M=tl(P),M.userData.extra=P.extra),p.shape.set(_,M)}return p.shape.get(_)},g=async(v,S)=>{let _=v+":"+S;return p.tex.has(_)||p.tex.set(_,await r.texture(v,S)),p.tex.get(_)};async function f(v,S,_){return jn(await g(v,S),_)}let h={},m=async v=>{if(h[v]!==void 0)return h[v];let S=null;try{let _=e.glb&&e.glb[v]||(typeof t=="string"?t:"./")+(v===1?"miiFemaleBody.glb":"miiMaleBody.glb"),P=await(await fetch(_,{cache:"force-cache"})).arrayBuffer();S=Sl(vl(P))}catch{S=null}return h[v]=S,S},y=rg();async function w(v,S={}){let _=S.size||512;s&&(r.hq=_>=1e3),Sn=Math.min(2048,S.maskRes||1024),y.setSize(_,_,!1);let P=new Hi,M=Oo[v.faceColor]||Oo[0],T=S.colors,R=document.createElement("canvas");R.width=Sn,R.height=Sn;let C=R.getContext("2d");C.imageSmoothingQuality="high";let q=T.eye[v.eyeColor]||[20,20,20],L=T.brow[v.browColor],I=T.mouth[v.mouthColor]||[200,80,80],V=T.mouthUp[v.mouthColor]||[100,40,40],F=1/Fo,J=S.eyeWhite??T.eyeWhite??1,j=await f("eye",v.eyeType,(b,N,H,B)=>[(N*J+H*q[0]/255)*F,(N*J+H*q[1]/255)*F,(N*J+H*q[2]/255)*F,B]),X=await f("brow",v.browType,(b,N,H,B)=>[L[0]*F,L[1]*F,L[2]*F,b]),$=S.mouthMode,ot=await f("mouth",v.mouthType,(b,N,H,B)=>$==="R"?[b,b,b,B]:$==="G"?[N,N,N,B]:$==="A"?[255,255,255,B]:$==="RA"?[b,b,b,255]:$==="GA"?[N,N,N,255]:[(b*I[0]+N*V[0])/255*F+H*F,(b*I[1]+N*V[1])/255*F+H*F,(b*I[2]+N*V[2])/255*F+H*F,B]),Y=(b,N,H,B,G,it,Z,nt=0)=>{let ct=Yo(b,H,B,G,it);sg(C,N,ct.px,ct.py,b.hx,b.hy,ct.s,ct.th+nt,Z)};{let N=[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]][v.feature]||[0,0],H=S.wrIdx??N[0],B=S.mkIdx??N[1],G=Sn/512,it=async(Z,nt,ct,gt)=>{for(let tt of[1,-1])C.save(),tt<0&&(C.translate(512*G,0),C.scale(-1,1)),C.translate(ct*G,gt*G),C.scale(nt*G,nt*G),C.drawImage(Z,0,0),C.restore()};if(B&&S.makeup!==!1&&await it(await f("facemake",B,(Z,nt,ct,gt)=>[Z*F,nt*F,ct*F,gt]),S.mkS??.49,S.mkX??269,S.mkY??190),H&&S.wrinkle!==!1){let Z=S.wrCol??[110,80,70];await it(await f("faceline",H,nt=>[Z[0]*F,Z[1]*F,Z[2]*F,nt*(S.wrA??.6)]),S.wrS??.82,S.wrX??141.5,S.wrY??3)}}{let b=El[v.eyeType]||0;Y(Si.eye,j,v.eyeDist,v.eyeY,v.eyeSize,v.eyeRot,1,b),Y(Si.eye,j,v.eyeDist,v.eyeY,v.eyeSize,v.eyeRot,-1,b)}{let b=Dl[v.browType]||0;Y(Si.brow,X,v.browDist,v.browY-3,v.browSize,v.browRot,1,b),Y(Si.brow,X,v.browDist,v.browY-3,v.browSize,v.browRot,-1,b)}{let b=Yo(Si.mouth,0,v.mouthY,v.mouthSize,0),N=Sn/512;C.save(),C.translate(256*N,b.py*N),C.scale(b.s*N,b.s*N),C.drawImage(ot,-ot.width/2,-ot.height/2),C.restore()}if(v.mustType>=1&&v.mustType<=3){let b=[.218,.285,.365,.52,.671,.772,.873,.97,1.07],N=[-2.9,-4.2,-5.5,-4.8,0,.6,.8,.9,1],H=T.brow[v.beardColor]||T.brow[0],B=await f("mustache",v.mustType-1,nt=>[H[0]*F,H[1]*F,H[2]*F,nt]),G=b[v.mustSize]??.671,it=339.8+N[v.mustSize]+8.436*(v.mustY-10),Z=Sn/512;for(let nt of[1,-1])C.save(),C.translate((256+nt*64*G)*Z,it*Z),C.scale(-nt*G*Z,G*Z),C.drawImage(B,-B.width/2,-B.height/2),C.restore()}if(v.moleOn){let b=await f("mole",0,it=>[20*F,17*F,17*F,it]),N=.12+.0463*v.moleSize,H=256+13.96*(v.moleX-8),B=146.05+8.44*v.moleY,G=Sn/512;C.save(),C.translate(H*G,B*G),C.scale(N*G,N*G),C.drawImage(b,-b.width/2,-b.height/2),C.restore()}let et=ig[v.hairType]??v.hairType,at=v.hairFlip?-1:1,mt=async(b,N,H,B=1)=>{let G=await x(b,N);if(!G)return;let it=new Wt(G,H);return it.scale.x=B,P.add(it),it},dt=Kn(o,M),_t=await x("faceline",v.faceType),Mt=_t.userData.extra,At=[Mt[6],Mt[7],Mt[8]],It=[Mt[9],Mt[10],Mt[11]],k=[Mt[12],Mt[13],Mt[14]],ne=[[0,0],[0,1],[0,5],[0,8],[4,0],[1,0],[2,0],[6,0],[7,0],[0,9],[8,0],[10,0]],yt=dt;if(s){if(v.feature&&S.featureOverlay!==!1){let b=Math.round(M[0]<=1.001?M[0]*255:M[0]),N=r.feature(v.feature,b);if(N){let H=document.createElement("canvas");H.width=256,H.height=512;let B=H.getContext("2d"),G=jn(N,(Z,nt,ct,gt)=>[Z,nt,ct,gt]);B.save(),B.translate(S.flX??3,S.flY??1.5),B.scale(S.flS??.99,S.flS??.99),B.drawImage(G,0,0),B.restore();let it=new hn(H);it.flipY=!1,it.colorSpace=le,it.wrapS=_n,yt=Kn(o,M,it)}}}else{let[b,N]=ne[v.feature]||[0,0];if(S.featureOverlay!==!1&&(b!==0||N!==0||S.flMk||S.flWr)){let H=document.createElement("canvas");H.width=256,H.height=512;let B=H.getContext("2d"),G=S.flMk??N,it=S.flWr??b,Z=tt=>{for(let zt of S.flMirror==="only"?[-1]:S.flMirror===!0?[1,-1]:[1])B.save(),zt<0&&(B.translate(256+(S.flMx??0),0),B.scale(-1,1)),B.translate(S.flX??3,S.flY??1.5),B.scale(S.flS??.99,S.flS??.99),B.drawImage(tt,0,0),B.restore()},nt={1:.45,2:.5,3:.45,4:.45,5:1,6:.5,7:.5,8:.9,9:.78,10:.78},ct=Math.round(M[0]<=1.001?M[0]*255:M[0]);if(G){let tt=await g("facemake",G),zt=S.mkGain??nt[G]??.5,Dt=G===1||G===3||G===4;Z(jn(tt,(St,vt,ft,Ct)=>[Dt?ct:St,vt,ft,Ct*zt]))}if(it){let tt=await g("faceline",it),zt=S.wrinkleGain??(it===6?.93:.98);Z(jn(tt,Dt=>it===7?[S.w7r??ct*.4,0,0,Dt*zt]:[0,0,0,Dt*zt]))}let gt=new hn(H);gt.flipY=!1,gt.colorSpace=le,S.flWrap!==!1&&(gt.wrapS=_n),yt=Kn(o,M,gt)}}if(P.add(new Wt(_t,S.dbgHeadNormal?er(0):yt)),!S.dbgPieces){let b=await mt(jo.has(et)?"foreheadhat":"forehead",et,dt,at);b&&b.position.set(At[0],At[1],At[2])}let wt=new hn(R);wt.flipY=!1,wt.colorSpace=le;let pt=await x("mask",v.faceType),qt=el(c,wt);s&&(qt.polygonOffset=!0,qt.polygonOffsetFactor=-6,qt.polygonOffsetUnits=-6);let Et=new Wt(pt,qt);Et.renderOrder=2,P.add(Et);{let b=36.3-1.473*v.noseY+(It[1]-24.5),N=.1717*v.noseSize+.387,H=It[2],B=await x("nose",v.noseType);if(B){let Z=new Wt(B,dt);Z.position.set(0,b,H),Z.scale.set(N,N,N),P.add(Z)}let G=await x("noseline",v.noseType),it=await g("noseline",v.noseType);if(G){let Z=jn(it,gt=>[gt,0,0,255]),nt=new hn(Z);nt.flipY=!1,nt.colorSpace=le,s&&(nt.wrapS=_n);let ct=new Wt(G,nl(o,nt,[0,0,0]));ct.position.set(0,b,H+.5),ct.scale.set(N,N,1),ct.renderOrder=3,P.add(ct)}}if(S.dbgPieces){let b=[[1,0,0],[0,1,0],[0,0,1],[1,1,0],[1,0,1],[0,1,1]],N=0;for(let H of S.dbgPieces){let[B,G]=H.split(":"),it=await x(B,+G);if(!it){console.log("empty",H);continue}let Z=new Wt(it,new Ys);Z.material=Kn(o,b[N++%6]),P.add(Z)}}if(!S.dbgPieces){let b=await x(jo.has(et)?"hairhat":"hair",et);if(b){let N=new Wt(b,S.dbgNormal==="hair"?Ho():ko(A,d,Ki[T.hairIndex(v.hairColor)]||Ki[0]));N.userData.hair=!0,N.scale.x=at,N.position.set(At[0],At[1],At[2]),P.add(N)}}if(jo.has(et)&&!S.dbgPieces){let b=await x("cap",et),N=await g("cap",et);if(b&&N){let H=jn(N,it=>[it,it,it,255]),B=new hn(H);B.flipY=!1,B.wrapS=B.wrapT=Ui,B.colorSpace=le;let G=new Wt(b,S.dbgNormal==="cap"?ul(B):(u||l)&&!S.oldCap?hl(u||l,un[v.favColor]||un[0],B):cl(o,un[v.favColor]||un[0],B));G.userData.cap=!0,G.scale.x=at,G.position.set(At[0],At[1],At[2]),P.add(G)}}if(v.beardType>=1&&v.beardType<=3){let b=await x("beard",v.beardType-1);if(b){let N=new Wt(b,S.dbgNormal==="beard"?Ho():ko(A,d,Ki[T.hairIndex(v.beardColor)]||Ki[0]));N.userData.hair=!0,N.position.set(k[0],k[1],k[2]),P.add(N)}}if(v.glassType>0){let b=await x("glass",0),N=await g("glass",v.glassType-1);if(b&&N){let H=jn(N,(zt,Dt)=>[zt,Dt,0,255]),B=new hn(H);B.flipY=!1,B.wrapS=_n,B.colorSpace=le,B.anisotropy=4;let G=T.glass[v.glassColor]||[0,0,0],it=v.glassType>=6,Z=new Wt(b,ol(B,[G[0]/255,G[1]/255,G[2]/255],it?S.frameLo??.93:0,S.lensK??1)),nt=.4+.15*v.glassSize,ct=S.glassZ??46,gt=(300-ct)/278,tt=45.9-1.5*v.glassY+At[1];Z.material.depthTest=ct>22,Z.scale.set(nt*gt,nt*gt,1),Z.position.set(0,33.3+(tt-33.3)*gt,ct),Z.renderOrder=10,P.add(Z)}}if(S.body!==!1){let b=it=>it.map(Z=>Z/255),N=l&&!S.oldBody?{shirt:Kn(l,b(un[v.favColor]||un[0]),null,2),pants:Kn(l,b(Qo),null,2)}:{shirt:qo(o,un[v.favColor]||un[0],S.bodyNg??.5),pants:qo(o,Qo,S.bodyNg??.5)},H=S.oldProcBody?null:await m(v.gender===1?1:0),B=S.dbgNormal?{shirt:er(0),pants:er(.5)}:N,G;if(H){S.gu&&wl(S.gu),G=new je;for(let it of Tl(H,v.height,v.weight))G.add(new Wt(_l(it),it.mat===0?B.shirt:B.pants))}else G=pl(v,B);G.userData.body=!0,P.add(G)}if(S.dbgHeadNormal&&P.children.forEach(b=>{b.visible=b.geometry===_t}),S.dbgNormal){let b=S.dbgNormal;P.children.forEach(N=>{N.visible=b==="head"?!N.userData.body:b==="cap"?!!N.userData.cap:b==="hair"||b==="beard"?!!N.userData.hair:!!N.userData.body})}let D;if(S.full){let b=Al(v.height,v.weight);D=al(_,b.c,b.yc)}else D=il(_,S.camK,S.camCX,S.camCY);if(S.dbgUV){let[b,N]=S.dbgUV,H=new Hi,B=b==="faceline"||b==="mask"?v.faceType:0,G=await x(b,B);H.add(new Wt(G,ll(N))),y.setClearColor(0,0);let it=y.getClearAlpha();return y.render(H,D),y.domElement}return y.render(P,D),y.domElement}return{render:w,res:r,isWii:s}}var Cl={eye:[[0,0,0],[118,122,122],[111,66,48],[105,103,53],[77,92,183],[61,122,96]],mouth:[[207,78,8],[230,11,8],[234,69,69]],mouthUp:[[125,46,23],[116,11,11],[131,31,39]],brow:[[0,0,0],[67,34,17],[97,26,11],[130,61,22],[126,126,134],[82,65,17],[142,92,26],[217,167,78]],glass:[[0,0,0],[102,59,17],[178,17,8],[34,51,110],[178,102,0],[127,119,110]],hairBrow(i){return this.brow[i]},eyeWhite:1.2,hairIndex:i=>i};var Nl="qIJtdaiBbXWogW11qIFtdaiBbXWogW11qIFtdaiBbXWogW10qIFtcKmCbWapgm5hqYJtXqiBbVqngWxYp4FsV6eBbFengWxWqIFtU6iBbU+ogW1OqIJtTqiCbU6ogm1OqIJtTqiCbU6pgm1LqoNuQqyFcDSthnAvrYZwLqyFcC+qg24vqYJtMKmCbTClf2o3nHdkRpZyYFGUcV5UlHBeVJRwXlSUcF5UlHBeVJRwXlSUcF5VlHBeWJRwXlyUcF5dlHBeXZRwXl6TcF5gk3BeZpNwXmiTcF5slHBedJRwX3iUcF94lHBfeJRwX3iUcF94lHBfeJRwX3iUcF94lHBeeamCbnWpgm11qIFtdaiBbXWogW11qIFtdaiBbXWogW11qIFtdKiBbXCpgm1mqYJuYamCbV+ogW1bp4FsWKeBbFengWxXp4FsVqiBbVOogW1PqIFtTqiCbU6ogm1OqIJtTqiCbU6ogm1OqYJtSKuEbzqthXAxrYZwLq2GcC6shXAvqoNuL6mCbTCpgm0wp4BsM6F7aD2YdGFNlHFfU5RwXlSUcF5UlHBeVJRwXlSUcF5UlHBeVZRwXliUcF5clHBeXZRwXl6UcF5ek3BeYZNwXmaTcF5ok3BebJRwXnSUcF94lHBfeJRwX3iUcF94lHBfeJRwX3iUcF95lHBeeZRwXnqrg251qoNudamCbXWogW11qIFtdaiBbXWogW11qIFtdaiBbXWogW1xqYJtaKmCbmKpgm1gqYJtXaiBbFmngWxYp4FsV6eBbFaogW1TqIFtT6iBbU6ogm1OqIJtTqiCbU6ogm1OqIJtTamDbkashW82rYZwL62GcC6thnAurIVwL6qDbi+pgm0wqYJtMKiBbTGjfWk5mXViS5RxX1OUcF5UlHBeVJRwXlSUcF5UlHBeVJRwXlWUcF5YlHBeXJRwXl2UcF5elHBeYJNwXmSTcF5nk3BeaZNwXm6UcF51lHBfeJRwX3iUcF94lHBfeJRwX3iUcF95lHBeeZRwXnqUcF57rIVwdKuEb3Wqg251qYJtdaiBbXWogW11qIFtdaiBbXWogW11qIFtc6mCbW2pgm1kqYJuYamCbV6ogW1ap4FsWKeBbFengWxWqIFtU6iBbU+ogW1OqIJtTqiCbU6ogm1OqIJtTqiCbU2qg25GrIVwNq2GcC+thnAurYZwLqyFcC+qg24vqYJtMKmCbTCogm0xpH5qOZl1YkuUcV9TlHBeVJRwXlSUcF5UlHBeVJRwXlSUcF5VlHBeWJRwXlyUcF5dlHBeXpNwXmCTcF5lk3BeaJNwXmuUcF5ylHBfd5RwX3iUcF94lHBfeJRwX3iUcF95lHBeeZRwXnqTcF57k3Bee62GcXSshXB0q4RvdaqDbnWpgm11qIFtdaiBbXWogW11qIFtdaiBbXSogW1wqYJtZqmCbmGpgm1fqIFtW6eBbFingWxXp4FsVqiBbVOogW1PqIFtTqiCbU6ogm1OqIJtTqiCbU6pgm1Lq4RvQq2FcDSthnAvrYZwLq2GcC6shXAvqoNuL6mCbTCpgm0wqYJtMKV+ajebd2RGlXJfUZRxXlSUcF5UlHBeVJRwXlSUcF5UlHBeVZRwXliUcF5clHBeXZRwXl6TcF5hk3BeZpNwXmiTcF5slHBedJRwX3iUcF94lHBfeJRwX3iUcF95lHBeeZRwXnqTcF57k3Bee5NwXnuuh3F2roZxdayFcHSrhG91qoNudamCbXWogW11qIFtdaiBbXWogW11qIFtcamCbWipgm5iqYJtYKmCbV2ogWxZp4FsV6eBbFaogW1TqIFtT6iBbU6ogm1OqIJtTqiCbU6ogm1NqoNuR66GcTmuhnEwrYZwLq2GcC6thnAurIVwL6qDbi+pgm0wqYJtMKmCbTCngGwzoHtnPZh0YU2UcV9TlHBeVJRwXlSUcF5UlHBeVJRwXlWUcF5YlHBeXJRwXl6UcF5gk3BeZJNwXmeTcF5pk3BebpRwXnWUcF94lHBfeJRwX3iUcF95lHBeeZRwXnqTcF57k3Bee5NwXnyUcF58r4dyeK6HcXeuhnF1rIVwdKuEb3Wqg251qYJtdaiBbXWogW11qIFtdaiBbXOpgm1tqYJtZamCbmGpgm1eqIFtWqeBbFingWxWqIFtU6iBbU+ogW1OqIJtTqiCbU6ogm1OqYJtS6yFcEGwiHIzr4dxLq2GcC6thnAurYZwLqyFcC+qg24vqYJtMKmCbTCpgm0wqIFtMaR+aTebdmNHlXJfUZRxXlSUcF5UlHBeVJRwXlSUcF5VlHBeWJRwXlyUcF5elHBeYJNwXmWTcF5ok3Bea5RwXnKUcF93lHBfeJRwX3iUcF95lHBeeZRwXnqTcF57k3Bee5NwXnyUcF58lHBefa+Hcnivh3J4rodxd66GcXWshXB0q4RvdaqDbnWpgm11qIFtdaiBbXWogW10qIJtcKmCbWepgm5hqYJtX6mCbVuogW1Yp4FsVqiBbVKogW1PqIJtTqiCbU6ogm1OqIJtTauEb0eviHI4sop0LrCIci2uhnEurYZwLq2GcC6shXAvqoNuL6mCbTCpgm0wqYJtMKiBbTCmf2szoHtnPZh0YU2UcV9TlHBeVJRwXlSUcF5UlHBeVZRwXliUcF5clHBeXpRwXmGTcF5mk3BeaZRwXm2UcF51lHBfeJRwX3iUcF95lHBeeZRwXnqTcF57k3Bee5NwXnyUcF58lHBefZRwXn2vh3J4r4dyeK+Hcniuh3F3roZxdayFcHSrhG91qoNudamCbXWogW11qIFtdaiCbXKpgm1qqYJuY6mDbl+pgm1bqYJtV6iBbVaogW1SqIJtTqiCbU6ogm1OqYJtTaqDbkuthnBAsop0MrOLdSyxiXMsr4dxLa2GcC6thnAurIVwL6qDbi+pgm0wqYJtMKmCbTCogWwwp4BsMaN9aTebdmNGlXJfUZRxXlOUcF5UlHBeVJRwXlSUcF5XlHBeXJRwXl2UcF5hk3BeZpNwXmqUcF5vlHBedpRwX3iUcF95lHBeeZRwXnqTcF57k3Bee5NwXnyUcF58lHBefZRwXn2UcF59r4dyeK+Hcnivh3J4r4dyeK6HcXeuhnF1rIVwdKuEb3Wqg251qYJtdaiBbXWpgm1yqYJuaqqDbmKqg25fqoNuWquEb1OrhG9Pq4RvTKuEb0urhG9Jq4RvSayEb0euh3FBs4p0NbSMdS20i3Ursop0LK+Hci2thnAurYZwLqyFcC+qg24vqYJtMKmCbTCogm0wqIFsMKeAbDCmf2syoHtnO5p1YkeVcl9OlHFeUJRwXlCUcF5Rk3BeU5NwXlaTcF5alHBeX5NwXmaUcF5plHBecJRwXnaUcF94lHBeeZRwXnqTcF57k3Bee5NwXnyUcF58lHBefZRwXn2UcF59lHBefbGJc3iwiHN3r4hyeK+Hcnivh3J4rodxd66GcXWshXB0q4RvdaqDbnWpgm10qYJtcqqDbmmshXBfrYZwWK6GcVKvh3FNr4dySK+IckSwiHJCsYlzP7GJcz6yinQ7tYx2M7eOdyy2jXYqtIx1K7OKdCuwiHItroZxLq2GcC6shXAuqoNuL6mCbTCpgm0wqIFtMKeBbDCngGwwp4BrMKV+ajKfemY6mHRhQ5RxX0eUcV5IlHBeSpRwX0uUcF9OlHBfU5RwXliTcF5glHBfZZRwXm6UcF52lHBeeJRwXnqTcF57k3Bee5NwXnyUcF58lHBefZRwXn2UcF59lHBefZRwXn61jHZ4s4t1drGJc3awiHJ3r4hyeK+Hcniuh3F3roZxda2FcHSrhG90q4Rvc62FcGmvh3JesIhzVrKJc0+yinRJs4t0RLKKdEK0i3U9tIt1OrSLdTq1jHY4to13M7iPeCy5j3kpt454KbWMdiq0i3UrsopzLK+Hci2uhnEurYZwLquEby6pgm4vqYJuL6iBbS+ngWwwp4BsMKaAazCmf2swonxpM5t2YzuWcmBBlHFfQ5RxXkSUcV5GlHBeS5RwXk6UcF5SlHBeV5RwXl6TcF5mlHBebpRwXniTcF56k3Bee5NwXnyUcF58lHBefZRwXnyUcF58lHBefJRwXnyUcF5/t413ebaNdni0jHV1s4t0dLGJc3WwiHJ3r4hyd6+HcXauhnF0roZxca+IcmixiXNes4t0VrSMdU61jXZIt453QreOdz63jnc7to12OraOdze3jnc2uI94M7qQeS26kHkpupB5KLiPeCm2jXcqtIx1KrSLdSqyiXMrsIhyLK+IciythnEsrIVwLKuEby2pgm0uqIFsL6eBbC+ngGsvpn9rL6V/ajCge2c1mXViPJZyYECVcl9BlHFfRJRwXkaUcF5JlHBeTJRwXlGUcF5XlHBfXZRwXmWTcF5vk3BeeZNwXnuUcF58lHBefJRwXnyUcF57lHBeepRwXnuUcF5/k3BegbeOd3q3jnd5to13d7WMdnS0i3Vys4p0c7GJc3WwiHJ1sIhydbKJdGq0i3Vfto12VbeOd024j3hGuZB5QbqQeT26kXo5upB5OLqQeTW7knoxvJJ7L7yTey29k3spvJJ7KLuReii6kHkouI94KLeOdyi2jXcotYx2KLSLdSizinQpsIhzKa+Iciquh3EqrIRvLKqDbiypgm0tp4BsL6eAbC6mgGwuo35qMJ14ZTeZdWI6mHRhPJZyYECUcV9ClHBfRJNwXkiUcF9LlHBfUJRwX1aUcF5elHBeZ5NwXnKUcF56lHBeepRwXnqUcF55lHBeeZRwXnuTcF5+k3BegZNwXoK3jnd6t453ereOd3m2jXd3tY12c7WMdnG0i3Vxs4t0b7SLdWy2jXZguI94VbmQeU67kXpGvJJ7QL2Tezy+k3w4vpR8NL6UfTG+lHwwv5V9Lb+VfSy/lX0rv5V9KL6TfCe8knsnvJJ7JruReie5kHknuZB5JbiPeCa2jncmtY12J7OLdSeyinQosYlzKK+HcimshXArq4NuK6mCbSyngWwtp4FsLaV/ay+gemcznHdkNpt2YzeZdWI6lnJgPJRwXkCUcV9Dk3BeSJRwXkyUcF5Rk3BeWJRwXmCUcF5olHBfcpRwXnWUcF53lHBeeJRwXnqTcF5+k3BegZNwXoKTcF6Ct453ereOd3q3jnd6t453ebaNd3e2jXZyto12braNdm24j3hiupF6V7ySe069k3xGvpR9QMCVfTvAln43wZZ+M8KXfzDBl38uwpd/LMKXfyrCl38rwpd/K8GXfinAlX4nv5R9KL6UfCe+lHwnvJJ7J7ySeiW7kXoluZB5JbiPeCW2jnclto12JbSMdSWyiXMnsIhyKK6GcCmshW8qqoNuK6iCbSyngGwtpH5qL6B7ZzKeeWY0m3ZjN5l0YjmWcmA8lHFeQJRwXkSTcF5IlHBeTZNwXlOUcF5ZlHBeYZRwXmuUcF50lHBedZRwXnqTcF5+k3BegZNwXoKTcF6Ck3BegreOd3q3jnd6t453ereOd3q3jnd5t453dLiPeGy6kHlkvJJ7Wr6UfFDAlX1HwZZ+QMKXfzvDmIA3w5iAM8SZgS/EmYEuxZmBLMWagSzFmoEsxZqBLMSZgSzEmYAsw5iALMKYfyzCl38rwZd+K8CWfiq/lH0ovpR8J7ySeya7kXoluZB5JLiPeCO3jncjtYx2JbOLdCaxiXMnr4dxKK2GcCirhG8qqYJtK6eAbCykfmouoXxoMJ55ZjObdmM3mHRhOZVxXz2UcV5AlHBeRJRwXkmUcF5OlHBeU5RwXluUcF5klHBebpRwXnSTcF58k3BegJNwXoGTcF6Ck3BegpNwXoK5j3h4uY94eLmPeHi4j3h4uI94eLiPeHe7kXpqvZN8Xb+VfVPBl39Jw5iAQsSZgTzFmoE3xpqCM8ebgjDHnIMvyJyDL8icgy/InIMwyJyDMcecgzHHnIMyxpuCMsaagjLFmoExxJmBMcSZgDDDmIAvwpd/LcCWfiu/lX0qvpR8KL2TeyW7kXokuZB5I7eOdyS1jHYks4t1JbKKcyWwiHInrYZwKKuEbympgm0rp4BsLKR+ai6he2gwnnlmM5t2YzaYdGE6lXFfPZRxX0CTcF5GlHBeSpNwXlCUcF5WlHBeXpRwXmiUcF50k3Bef5RwXoCUcF6AlHBegJRwXoCUcF6AvJN7dLyTe3S8knt0u5J6c7uRenK7knpwvpR8YsGWflbDmIBMxZqBQ8abgj3HnIM4yJyDNMmdhDHJnoQxyp6FMsqehTLLnoU0yp+FNcqehTfJnoQ4yZ2EOMmcgznJnYQ4yJyDOMecgzfHm4I2xZqCNcSZgTPDmIAywpd/L8CWfi2/lX0rvpR8KLySeya6kHkluI54JLaNdiS0jHUksop0JbCIcieuhnAorIRvKamCbSqmgGsspH5qLqF7aDCeeWUzmnZjN5dzYTuVcV89lHBeQ5RwX0aUcF5LlHBeUZRwXliTcF5ik3BebpRwXnmUcF57lHBefJRwXn2UcF59lHBefb+VfXK/lX1yvpR8cr2UfHG+lHxuv5R9acGWflzEmYBQxpuCRsicgz/JnYQ5yp6FNcufhjPMn4Y0zKCGNc2ghjbNoYc4zaGHOs2hhzvMoIY9yZ6EPsSagT/FmoJAyZ2EP8qehT/KnoQ+yZ2EPcicgzzGm4I7xZqBOcSZgTbDmIAzwZd/MMCVfi6+lHwrvJJ7KLqReiW5j3gjt453I7WMdiSyinQlsIhyJ62GcCirhG8pqYJtKqaAay2kfmouoXtoMZ14ZTSadWM4l3NgO5RxX0CUcF5Dk3BeSJRwXk6UcF5UlHBeXZRwXmiTcF50lHBeeJRwXnqUcF57lHBefJRwXnzBln5ywJZ+cr+VfXG/lX1wv5V9b8KXf2LFmYFVx5yDSsmdhEHLn4U6zJ+GN82hhzXOoYc2zqKIOM+iiDrPo4k8z6OIPs+jiUHQo4lCzqKIRMidhEbInYRMyZ2ESMmdhEXMoIZEy5+GRMqfhUPKnoVCyZ2EQsicg0DGm4I9xZqBOsSZgDfCl380wJZ+ML+UfS29k3wpu5F6JrmPeCO2jncjtIt1JLGJcyauh3EnrYZwKKuEbympgm0qpn9rLaN9aS+ge2cxnHdkNpl1YjiWcmA9lHFfQJNwXkaTcF5LlHBeUZRwXliUcF5ilHBebZRwXnmUcF56lHBee5RwXnyUcF59wpd/csKXf3LBl35xwZZ+b8KXf2vFmYFcyJyDT8qehEbMn4Y+zaGHOM+iiDbQo4k40KOJOtGkij3SpIo/0qWKQdKli0TSpYpH0qWKStGkikzOoohNyZ6FTsqfhU/OoYdQz6KIT82hh0rMoIZIy5+FR8qehUfJnoRGyJ2EQ8ecg0DGmoE+xJmAOsKXfzXAln4xvpR9LLyTeym7kXomuZB5JLeOdyO1jHYksop0JbCIciethnAoq4RuKamCbSqmf2stonxpMJ96ZjOcd2Q3mHRiOpVxXz+UcF5Dk3BeSJRwXk6UcF5Uk3BeXpRwXmiTcF52lHBeeZRwXnyUcF59lHBefcOYf3HDmH9xw5h/ccKYf3DFmYFkyJyDV8qehUvMoIZCzqKIO9CjiTjRpIo50qWKPNOmiz7TpoxC1KeMRdSnjEjUp4xL1KeMTtSmjFHUp4xS06aLVNKli1XSpYpW0qSKV9GkilbQo4lVz6KIVM6iiFPNoYdRzKCHUMufhk3JnYRGx5yDQ8abgkLFmoE/w5iAOsGXfzW/lX0wvpN8LLySeyi6kHkkt453I7WMdiOyinQlsIhyJ62GcCirhG4qqIFsK6V/ay2hfGgynnlmNZp2YziYc2E8lXFfQJRwXkaUcF5LlHBeUpRwXlqUcF5klHBecJRwXnuUcF58lHBefJRwXnzEmYFuxJmBbsSZgW7FmoFsx5yDYMufhVLNoYdHz6KIP9GkijvSpYo706aLPdWnjEDVp41E1aiNR9aojUvWqI1O1qiOUtaojVXWqI1Y1qiNWtaojVzVp4xd1aeMXtSmjF7Tpote0qWKXtGkilzQo4lbz6OJWc6iiFbNoIdTy5+GUMqehUzInYRJx5yDRMWagUDEmYA8wpd/N8CWfjK+lHwtvJJ7KLmQeSW3jncjtYx2JLKKdCWvh3InrIVwKaqDbiungGwto35pMKB7ZzOdeGU2mnVjOpdzYD6UcV9DlHBfSJNwXlCUcF5Wk3BeYZRwXm2UcF54lHBeepRwXnqUcF56xpuCa8abgmvHm4Jqx5uDacqehVvNoYdOz6OJRNKkij3Tpos91aeMPtaojUHXqY5F16mOSNiqjkzYqo5R2aqPVNiqj1jYqo9b2KqPXtiqj2HYqo5i16mOZdepjmXWqI1m1aiNZdSnjGXTpotk0qWKYtGkimDQo4ldzqKIWs2hh1bMn4ZTyp6FT8mdhEvHnIJGxpqBQsSZgD3Cl384wJV9M76UfC28knoouZB5JbeOdyO0i3UksYlzJa+HcSishG8qqIJtLKZ/ay6ifWkxn3pmNJx3ZDiYdGE9lXFfQpRwXkeTcF5NlHBeVJRwXl6UcF5plHBedpRwXneUcF54lHBeeMmehGjJnYRnyZ2EZsqehWTNoIdW0KOJStKlikHUp4w91qiNP9epjkHYqo9F2KqPStqrkE3arJBR2qyQVtqskFvbrJBf2qyQYtqskGXaq5Bo2quQatmrkGvZq49s2KqPbdepjm3WqI1t06aLa82iiGfMoYhgzqOJWs2hh1vLoIZXyZ6EVMedhFPGnINRyJyDTcecg0jGmoJDxJmAPsKXfzjAlX0zvpN8LbuReim5j3glto13I7OLdSWxiXMmroZxKKuEbyqogWwtpH5qMKF8aDOeeWY2mnZjO5dzYT+UcV5FlHBeS5NwXlOTcF5bk3BeZpRwXnKUcF50lHBedZRwXnXMoIZnzJ+GZcyfhmPNoIZgz6KIU9KlikjUp4xA16mOPtiqjkHZq49F2qyQSduskU3crZFS3K2SV9ytkVzcrZJh3a6SZdyukmncrZFs3K2Rb9ytkXHcrZFy26yRdNqrkHXZq4902KqOdNKli3LMoohty6WLXcylilrFn4ZGy5h/RMedhEO6l39OxpuCTsabglPJnYRPyJyDScaagUTEmYA+wpd/OL+VfTK9k3wsu5F6J7iPeCO1jXYks4t0JbCIciethXApqoNuK6eAbC6kfmoxoHtnNJx3ZDmZdGI+lXFfRJRwXkqUcF5QlHBeWZRwXmOUcV9ulHBecZRwXnOTcF52zaGHaM2hh2bNoYdizqGIXdGkilHUp4xF1qiNQNiqj0Daq5BE26yRSNytkk3crpJT3a6SWN6vk13er5Ni3q+TZt+vk2vfsJNu3q+Tct6vk3XerpJ43a6SetyuknvbrZF726yRe9qrkHvWqY15zKKId8yli3TUqI1M6r+hSNmwnka7mH89upd/PLuXdVzInYRay5+FVMmdhE7InINJxZqCQ8SYgD3Bl383v5V9Mb2Teyu6kXkmt453JLSMdSWyinQlr4dxKKyFbyqogm0tpX9rMKJ8aDSfeWY3m3ZjPZdzYEKUcV5IlHBeT5NwXliUcF5hlHBfbJRwXnGUcF51k3Bed82hh2nNoYdpzqGHZ9CjiV3UpoxN1qiNRNiqj0Haq5BD3K2RR92ukkvdr5NR3q+TVt+wk13fsJRi4LCUZ+CwlGzgsZRw4LGUdOCwlHjfsJR73a+Tft2vk4Der5OB3a6Sgt2ukoHcrZGB2qyQf9apjn7UqI134baYW+/DpErvw6RJ2bCUSdCkiVbKn4ZizaGHX82gh1nLn4VUyZ2ETsecg0fFmoFBw5h/O8CWfjS9k3wvu5F6KbmPeCW2jXcjs4t1JbGJcyeuhnEpq4NuLKeBbC+kfmoyoHtnNpx3ZDyZdGJAlXFfR5RwXk6TcF5Wk3BeYZNwXmyTcF52k3Bed5NwXnjOoYdszqGHbM6iiGrSpYta1aeNTNiqj0Taq5BD3K2RRd2ukkrer5NP37CUVd+wlFzgsZRh4bKVZuGylWzhspVx4bGVdN+wlHjcr5N71a2Qgtqmio7cr5OE37CUhd+vk4fer5OG3a6Sh9ytkobbrJGE2qyRgN2vk3fou51d4LGVUdWskVTQpIpl0KSJaNCjiWTOoohfzaCGWMufhVLJnYRMxpuCRcOYgD6/lX03tIx2M7iPeCy3jngmtIx2JLSLdSWyinQnsIhyKKyFbyyogm0vpH9qMqF8aDaeeWU7mnVjQJZyYEeUcF5Ok3BeVZRwXl6UcF5rlHBedpRwXniUcF55zqKIbc+iiG3Poohr1KaMWNepjkvZqo9F262RRN2ukkjfsJRM4LCUUt+xlFjgq49n4LGVZOOzlmnjs5Zw47OWc96wk3fVq4980KmOgc2qjYrOq46O2q+Sit+wlInfr5OK37CUi96vk4zer5OK3a6SiNytkYbcrZGC3K6SfOCxlWvVq5Br1KeMbtOmi23RpIpp0KOJY86hh13MoIZXyp6EUMecg0nEmYFBv5V9OrmQeTW3jngwt453KbWMdiW0jHUls4p0JrGJciithnArqYJtLqB7ZzOifWk1n3pmOpt3ZD+Xc2FGlHBeTZRwXlWUcF5elHBeaZNwXniTcF55k3BeetCjiWzQo4ls0aSJadWnjFnYqY5M2qyRRdytkkbfsJNJ4LCUT+GylVXhspVc4bKWYeOzl2fltJdt5bSXcuOzl3bdsJN83bCTiNWliojVrZGN3LGUkOGylpDesJSQ1quQktqukpHbr5OR3a+Tjt2uk4zdrpKK3K2RiNutkYTarJB/2KqPedapjXbVp4xz06WLbNCjiWXPoohgzaGHWsufhVTJnYROx5uCRcSZgD7AlX05vZN8M7uReiy4jngnto12JbSLdSaxiXMorodxK6uEby2ngWwwpH5qNaF7aDmdeGU+mHRiRZVxX02UcF5VlHBeXpRwXmqTcF52k3BeeJNwXnnRpIlq0aSKaNOmi2PWqI1W2auPS9utkUXer5NG37CUS+GylVDis5ZW47OWXeS0l2PltJdq5bWYb+W1mHbltZh747SXgeCylYbgspWK47SXjeW1mJDktZeS37GVld2wlJvapomY3a+Tnd2vk5TfsJOS3q+Tj92uko3brZGJ2qyQhdmrj4DXqY581qiNd9SmjHHSpYtr0KOJZc2gh17Ln4VVxpuCT8icg0fGmoJBw5iAOsGWfjW+lHwuu5J6KLiPeCW2jXYms4p1J7CIciqthXAsqYJtMaV/azShfGg6nnlmPpp1YkSWcl9MlHBeVJRwXl6TcF5ok3BecZNwXnWTcF5306aLZNWnjGDWqI1c16mOV9qskEzcrZJG37CUR+CxlUvispZQ47OWVuS0l13ktJdj5bWYauW1mHHmtZh45raZfea2mYLmtpmH5rWYi+a2mY7mtZiS5bWYlOOzl5bfsZWX3bGUmN2wk5jgsZSW4LGUlN+wlJLer5OQ3a6SjdytkYnaq5CF2KqPgNepjnrUp4x006WLbdGkimfPoohhzaGHWcufhVLJnYRLx5uCRMWZgT3Cl382v5V9L7yTeyq6kHklt453JbOLdSiwiHMprYVwLamCbTGmgGs0onxoOp55Zj+adWNFlnJgTJRwXlaUcF5elHBeaJRwXmyTcF5vk3Bectepjl3Xqo5a2KqPWdiqj1fbrJFN3q+TR+CxlEjhspVN47OWU+S0l1jltZhd4rOWZd2xlG/dsZR25LSXeee2mX7nt5mD57aZiOe2mY3ot5qS57ealue3mZjmtpia5bWYm+S0l5zktJeb4rOWmuKylZnhsZSW4LCUk96vk5DcrpKM26yRiNmrkIPYqo5+1qmNeNWnjHLTpYts0aSKZc+iiF7NoIdWy56FTsicg0fGmoJAw5mAOcCWfjG9k3wrupF6J7eOdya0i3UosYlzKq2FcC6pg24xpoBsNaR+ajmgemc/m3dkRZdzYU2UcF5WlHBfX5RwXmiUcF5plHBeapRwXmzZq49Z2auPWdmrj1nZq5BX3K2RTt+wk0jhsZVK4rOWTuS0l1PltZha5raYYOS1mGjis5Zw5K2PfOa2mXvpuJqA6bibhum4m4zpuJuQ6biblOi4m5fot5qa57aZnOe2mZ3mtZie5bWYneS0l53js5ab4rKVmeCxlZfgsJST3q+Tj9ytkovbrJGG2quQgNipjnvWqI121KaMbtKli2bQo4lgzqKIWMyfhlHKnoVJx5yDQsWZgTvCl380v5V9LbySeyi5kHklto12KLKKdCqthnAuq4RvMaiCbTSlf2o5oXtoP5x3ZEaYdGFNlHFfV5RwX2CUcF5olHBeaZRwXmmUcF5p2auQWdmrkFnarJBY26yRVd2ukk/fsJRJ4bKVSuO0l07ltZhU5raZW+e3mWHnt5po5LaYcOW2mHfouJp96rmbguq5nIjquZuO6rmbkuq5m5XquJuZ6bianOi3mp3ot5qe57aZn+a1mJ/ltZie5LSXneKzlpvispaY4LGVlN+wlJDerpKM3K2RiNqskILZq49816mOdtWojW/Tpotp0qSKYs+jiVrNoIdTy56FS8idg0PGm4I8w5iANMCWfi69k3wpupF6JbeOeCe0i3UqsYhzLa2GcDGqg241poBrOqJ8aD+deGVGmXViT5VxX1iTcF5ilHBeZ5RwXmmUcF5plHBeadqskFjbrJFY3K2RV9ytklXdrpJS4LGUSuKylUrktJdN5raZUui3mVrot5pi6bibaeq5m2/quZt26rmcfOu6nILruZyJ67qcjeu6nJHruZyW6rmbmeq5m5zpuZud6bibn+i3mqDntpmg5rWYn+W1mJ7ktJeb47OWmeGylZbgsJSS36+Tjt6ukojbrZGD2quQftiqj3fWqY5w1KeMa9Oli2PQo4lbzqGHVMufhkzJnYRFxpuCPcSZgDbBln4vvpR8KruReia4j3gotYx2KrKKdC2uh3ExqoRvNaaAbDuifWlBnnllSZl1YlKVcV9ck3BeZpNwXmiTcF5pk3BeaZRwXmrcrZFZ3K2SWd2ukljdrpJY3a6SVuCxlEzis5ZK5LSXTea2mFHot5pY6bibYOq5m2fruZxv67qcdeu6nHzsup2C7LqdiOu6nY3supyS67qcluu6nJnruZyc6rmbnum4m5/puJuf6LeaoOe2mZ/mtZie5bSYnOSzl5nispWW4bGVkuCwlI7er5OJ3K2RhNuskX3Zq49316mOctWnjWvTpotk0aSJXc+iiFTMoIZNyp6FRcecgz3FmoE3wpd/ML+VfSq8knsnuZB5KLWNdiuyinQur4dxMquEbzengWw8on1pQ555ZUuZdWJUlXFfX5NwXmmTcF5rk3Bea5NwXmuTcF5s3a6SXN2uklzdrpJc3a6SXN2uklvgsZRP4rOWSuW1mEvmtplR6LeaV+m4m1/ruZxm67qcbOy7nXPsu5167LudgOy7nYftu52M7Ludke27nZTsu52Y67qcm+q6nJ3quZue6bibn+m4m5/ot5qe57aZneW1mJzktJeZ47OWluKylZLgsZWN36+Tid2ukoPbrZF+2auQeNiqjnHWqI1q1KaMZNKkil7Qo4lUzaGHTcufhUbInYM+xZqCN8OYgDDAln4rvZN7KLmQeSm2jXcss4t1L6+IcjOshG84qIFsPqN9aUWeeWZNmXViV5VxX2KUcF5uk3Beb5NwXm+TcF5vk3Beb92ukmHdrpJh3a6SYd2ukmHdrpJf4LCUVOKzlkvltZhL57aZT+i3mlXquZtd67qcZOu6nGvsu51y7budeO27nX/tvJ6E7bydi+27nZDtu52T7budluy7nZnrupyb67qcnOq5m53puJud6LibnOe2mZzmtpia5bWXmOOzl5Xis5aR4bGVjN+wlIjer5OC3K2SfdqskHfZq49w1qiNatSnjGPSpYpc0KOJVc6hh03Ln4ZGyZ2EPcebgjbEmIAxwZZ+K76TfCi6kXoqt453LLSLdTCwiHI0rIVvOaiBbUCjfWlHn3lmT5p1Y1mVcl9llHBecZRwXnOUcF5zlHBec5RwXnPcrZJm3K2SZtytkmbcrZJm3a2SZd+wlFjispZN5bWYS+e2mU7puJtS6rmbWuu6nGPsu51p7LudcO27nXftvJ597bydg+28nYjtvJ6N7byekO27npTtu52X7Lqdmeu6nJvrupyb6rmbm+m4mpvot5qa57aZmOa1mJbltJeS47OWj+KylYrgsZSG36+TgdyuknzbrJF22auPcNepjmrVp4xj0qWLXdGkilXOoohMzKCGRcmehT7Hm4I3xJmBMMGXfyu+lHwou5J6KbeOdy60i3UysYhyNq2FbzuogWxCpH5qSZ96ZlKadWJelXFfapRxXnaUcF53lHBed5RwXneUcF533K2RatytkWrcrZFq3K2RatytkmnfsJRd4rKWUeW1mEvntplN6biaUuq5m1jrupxg7LudZu27nW3tvJ5z7ryeeu68noDuvJ6F7ryeiu69no3tvJ6R7buelO27nZbsu52X67qcmOq5m5npuJqY6Leal+e3mZXmtZiT5bWYkOSzl4zispaI4bGUhN+wlH7drpJ6262RdNmrj27Yqo5n1aiNYdOmi1rRpIpSzqKIS8ygh0TKnoU9x5yDNsWagTDCl38rvpR8KbySeiu4j3gvtIx1M7GJczethXA+qYJtQ6R+akufemZVmnVjYZVyX26UcV96lHBfepRwX3uUcF97lHBfe9utkWvbrZFr262Ra9ytkmrdrpJn36+TYeGylVXktJdP5raZTui3mlHquZtX67qcXOy7nWPtu55p7ryecO68nnXuvJ58772egO68nobuvJ6K7r2eje28npDtu52S7LudlOu6nJXquZuV6biblem4mpTnt5qS5raZkOW1mI3ktJeJ47OWhOGxlYDfr5N93q6Td9ytkXHarJBr2KqOZtaojV7UpoxX0qSKUc+iiErMoIdDyp6FPMecgzXFmoEwwpd/LL+UfSq7kXotuI94MLWMdTWxiXM5roZwPaqDbkOkfmpNnnlmWpp1Y2WVcV9zlHFfeJRxX3uUcF98lHBffJRwX3zbrZFr262Ra9ytkmrcrpJo3q+TZN+wlF/hsZVa47OWVuW1mFLntplT6rmbWOy6nFzsu51g7budZu68nmvuvJ5x7ryeeO68nn3uvJ6D7ryeh+68noruvJ6N7bydjuy7nZDrupyR67mckeq5m5HpuJqQ57eZj+e2mYzltZiJ5bSXheOzloHhsZV937CUet6vk3TcrZFv2qyQaNiqj2LWqI1b1KaMVdKkik7Po4hIzaGHQcuehTvInIM1xZqBL8KXfyu+lHwsu5J6L7iPeDK1jHU3sop0Oa6HcT6pgm1JonxoVp14ZWKZdWJrlnJgcZVxX3aUcV95lHBfe5RwX3yUcF98262Ra9ytkmrcrpJo3q+TZd+wlGHgsZRe4bGVW+Kyllrjs5ZY5bWYV+m4mlnrupxc7LudX+27nWLtvJ5o7ryebe68nnLuvJ547ryefe68noLuvJ6F7byeiO28norsu52L7LqcjOu5nIzquZuM6bibi+i3morntpmI5rWYhOS0l4Lis5Z+4bKVeeCwlHXer5Nx3K2Ra9qskGbYqo9f1qiNWdSmjFLSpYpLz6OJRc2hhz/LnoU5x5yDM8SZgC7Cl38sv5R8LrySejG4j3g1tYx2N7KKdDuthXBHpH5qWZ96ZmScd2RqmnZjbJh0Ym+WcmBzlXFfdpRxX3mUcV97lHBffNytkmrcrpJo3q+TZd+vk2PgsJRg4bGVXuGxlV7ispVc4rKWWuS0l1fntplU6rmbWOu6nFvsu51f7budZO28nmjuvJ5t7r2ece68nnbuvZ567ryegO28noPtu52F7Ludhuy6nIfruZyH6rmbh+m4m4bot5qF57aZgua1mIDltJd947OWeeGylXTgsJRw3q+TbNytkmfarJBi2aqPXNaojVXUp4xP0qWKSc+iiEPNoYc9yp6FN8icgzHEmYEuwpd/Lb6UfDC8knozuI94N7WMdjywiHNEqoNuU6J8aWOeeWZrnXhlbZx3ZG+bdmNvmXRicZZyYHSVcV93lHFfepRxX3vdrpJo3q+TZt+vk2XfsJRk4LCUZOCxlGPgsZRj4LGUZOKyllrjs5dX5bWYUee3mlDpuJtT67qcWOy7nV7tu51h7byeZu68nmvuvJ5v7ryec+28nnjtvJ197budfuy7nYDsup2B67mcguq5m4LpuJqB6Leaf+e2mX3ltZh85bSXd+OzlnPhspVv4LCUa96vk2jcrZJj2qyQXtiqj1jWqI1R1KaMTNGkikXPoog/zaCHOcqehTTHm4Iww5iAL8GWfjC9lHw0u5J6N7iOeD6yinRHrYVwUaiBbFujfWlkoHpnapx3ZHSbd2R0m3djdJp2Y3WZdWJ1l3NgdpZyYHeVcV953q+TZt+wk2XfsJRm4LCUZuCwlGbgsJRn4LCUaOCwlGfhsZVh4rKWW+W1mE/mtplN6LiaTuq5nFPsupxW7LudXO27nV/tu55l7bydae28nm3tu51x7budde27nXfsupx667qce+u5nHzquZt66bibeui3mnnntpl35bWYdeS0l3Ljs5Zu4bKVauCwlGXerpNi3K2RXtqskFjYqo9T1qiNTtSmjEfRpIpCz6KIO8yfhjbJnYQyxpqBMMOYgDDAlX4zvZN7N7mQeT22jXdDsYlzTauEb1eogW1cpH5qZZ96ZnCcd2R3m3djeJt2Y3ebdmN3mnZjd5l1YnaYdGJ2l3Nhd9+wlGbgsJRm4LCUZ9+wlGjfsJNq36+TbN6vk2/er5Nv36+TbeGylWDktJdU5raZTei3mkzquJtP67mcU+u6nFfsu51a7LudX+y7nWPsu51m7Luda+y7nW3sup1v67qcceq6nHPquZtz6bibc+i3mnLnt5lx5raZcOW0mG7ktJdr4rKVaeCxlWTfsJNg3a6SXNutkVfZq5BT2KqOTdWojUjTpYtD0KOJPs6hhzjLn4Y1yJyEMcWagTHCl38zv5V9N7ySezu4j3hBtYx1R7GJc06shXBYp4FsYqJ9aW6deGV8m3dkfpt2Y36bdmN9m3Zje5t2Y3ibdmN3mnZjd5p1YnffsJRo37CTat+wk2zer5Nu3q6Sc92uknbdrpJ33a6Sd92uknjgsJRq4rOWXOW1mFLntplO6LeaTOm5m07quZxR67qcVeu6nFnsupxd7LqdYOy6nGTsupxn67qcaOu6nGrquZtr6ribbOm4mmzot5ps57aZaua1mGnktJdo47OWZeKylWLgsZRd3q+TWt2uklbbrJFS2KqPT9epjknVp4xE0qWKQNCjiTrNoYc2y5+FM8icgzLFmoEzwpd/N76UfDy7kXpBt453R7OLdE6viHJUq4RvXaZ/a2qge2d5m3Zjh5p2Y4eadmOHmnZjhpp2Y4OadmN+mnZjfJp2Y3ubdmN43q+Tbt6uknPdrpJ23a6Sd9ytknncrZJ73K2Se9ytknvdrpJ53a6TdeCxlWXjs5Zb5bWYUOa2mUzot5pM6biaTuq5m1DquZxU67mcV+u6nFrrupxd67qcX+q5m2LquZtk6bibZem4m2Tot5pl57aZZea1mGTltJhi5LSXYOKzll7hsZVc37CUWN2vk1XcrZFR2qyQTdiqjknWqI1F1KaMQdKkijzPoog4zKCGNcqehTPHm4I1xJmAOMGWfju9k3xBupB5R7aNdk6yiXNVrYZwXqiCbWmkfmpznnlmhJt3ZIiadWOKmnViipl1YoqadWKJmnVih5p1Y4aadmODmnZjft2uknfcrZJ53K2Se9ytknvcrZJ73K2Se9ytknvcrZJ63a6Sed2uknber5N04LCUaOKyllzktJdS5rWYTee3mkzouJpM6biaT+q4m1HquJtU6rmbVum5m1jpuJpb6bibXOi4ml7nt5lf57aZXua1mF7ltZhd5LSXW+OzllrispVZ4LCUV96vk1LdrpJP26yRTNmrj0nXqY5F1aeNQdOmiz3Ro4k6zqGHN8ufhTXJnYQ2xZqCOcOYgD2/lX1BvJJ7SLiPeE20jHVUsIhyXquEb2mmgGt2oXxogZ96ZoSceGWIm3Zjipp1Y4qZdWKLmXVii5l1YoqZdWKKmnViiZp1YofcrZJ73K2Se9ytknvcrZJ73K2Se9ytknvcrZJ63K6Sed2uknjdrpJ33a6Sdt6uk3TfsJRp4rKWXeS0l1XmtZlM5raZTOe3mUvot5pN6LiaT+i4mlHouJpT6LeaVei3mlbnt5lX57aZWOa1mFfktJdX5LSXVeOzllXispZT4LGVUt+wk1DdrpJN3K2RStqskEfYqo9E1qiNQNSnjD3SpYs60KOJOM2ghjfKnoU3x5yDO8WZgT7Bl39DvpR8SLqRek62jXdWsop0YK2GcGqpgm11pH5qgqJ8aIOge2eFnnlmh5x4ZIibdmOKmnVjipl1YouZdWKLmXVii5l1YouZdWKK3K2Se9ytknvcrZJ73K2Se9ytknvcrZJ63K6Sed2uknjdrpJ43a6Sd92uknfdrpJ23a6Sdd+vk2zhsZVg47OWV+S0l07ltZhL5raYSua2mUvntplN57aZTue2mU/mtplR5rWYUeW1mFHltJdQ47OXUOOzlk/ispVP4bGVTeCwlEzer5NK3K6SR9qskEXZq49C16mOQNWnjT3Tpos70KOJOc6hhzjLn4Y6yZ2EPMabgkDDmIBFwJV9S7ySelG4jnhZs4t1Yq+HcW2qg253poBrgaR+aoSjfWmFoXxohaB6Z4WeeWaHnHhkiJt2Y4qadWOKmXVii5l1YouZdWKLmXVii9ytknvcrZJ73K2Se9ytknvcrZJ63K6Sed2uknjdrpJ43a6Sd92uknfdrpJ33a6SeN2uknXer5Nw3q+TbeCwlGThspVa4rKWVOO0l03ktJdK5bWYSeW1mErltZhL5bWYSuS0l0vks5dM4rOWS+KylkrhsZVK4LGUSt+wlEner5NH3a6SRtuskUTZq5BB16mOP9WojT3Upos70aSKOs+iiDvNoIY9yp6FQMebgkTEmYBJwJZ+T72Te1W4j3hftYx2ZrGJc22thXB4qoNue6eAbIGlf2qEpH5phaN9aYWhfGiFoHpnhZ55ZoeceGSIm3Zjipp1Y4qZdWKLmXVii5l1YovcrZJ73K2Se9ytknvcrZJ63K6Sed2uknjdrpJ43a6Sd92uknfdrpJ33a6SeN2uknjdrpJ13a6Scd2ukm/drpJw37CTZ9+wlGDhsZVX4bKVUuKylU7ispZL47OWSOKylkjispVI4bKVR+GxlUfgsZVG37CURt6vk0XdrpJF3K2SRNuskEPZq49B16mOQNaojT3Tpow90qSKPs+jiEDMoIdCyp6FRcecg0nEmYFOwZZ+Vb2TfFu6kXphto13arKKdHOuh3F6rYVwequEb3yogW2Bpn9rhKV/aoWkfmmFo31phaF8aIWgemeFnnlmh5x4ZIibdmOKmnVjipl1YouZdWKL3K2Se9ytknvcrZJ63K6Sed2uknjdrpJ43a6Sd92uknfdrpJ33a6SeNyuknjdrpJ33a6Sc92uknHdrpJy3a6SctytkXLdrZJt3q6TZd6vk1/fr5NZ37CUU+CwlE7fsJRM4LGUSN+wlEffsJRF3q+TRt2ukkTcrZFD26yRQ9qrkELZq49B16mOQdWojUHTpotD0aSKRM+iiEfNoIdJyp6ETcecg1HEmYFVwpd/Wr6UfGG7kXpot453b7OLdHewiHJ9rodxfa2GcHyshXB8qoNufqeAbIKmf2uEpX5qhaR+aYWjfWmFoXxohaB6Z4WeeWaHnHhkiJt2Y4qadWOKmXVii9ytknvcrZJ63K6Sed2uknjdrpJ43a6Sd92uknfdrpJ33a6SeNytknjcrpJ43a6Sdd2uknLdrpJy3K2Sc9ytkXTcrZFz3K2RcduskHPbrJFt3K2RZtyukl/drpJa3a6SV92uklHdrpJO3K2RTtuskUzarJBK2auPStiqj0jXqY5I1qiNSNSnjEnSpYtL0aSKTM6iiE/MoIZSyp6FUsicg1fEmoFcwpd/Yb+VfWe8knttuI94dbSMdnuzinR7sIhzfq+Hcn6uh3F+rYZwfauEb32ogW2BpoBrg6Z/a4SlfmqFpH5phaN9aYWhfGiFoHpnhZ55ZoeceGSIm3Zjipp1Y4rcrZJ63K6Sed2uknjdrpJ43a6Sd92uknfdrpJ33a6SeNytknjcrZJ43a6Sd92uknTdrpJz3K2Sc9ytkXTcrZF026yRdduskHXaq5B02quQcdmrj3HZq49u2auQaNqrkGTaq5Bf2auQXNiqj1vYqo5Z16mOVtaojVXVp41U1KaMVNOli1TRpIpV0KOJV86hh1nLn4ZcyZ2EX8ecg2DFmoFjwpd/aL+VfW68knp1uZB5ebeOd3m1jHZ8s4t0frGJc3+wiHJ/r4dyfq6GcX6thXB9qoNuf6eAbIKmf2uEpn9rhKV+aoWkfmmFo31phaF8aIWgemeFnnlmh5x4ZYibdmOJ3a6Sed2uknjdrpJ43a6Sd92uknfdrpJ33a6SeNytknjcrZJ53K2SeNyuknbcrpJ03K2SdNytkXTcrZF03K2RdduskHXaq5B22quQddmrj3TZqo9y2KqPcNiqj23XqY5w1qiNbtaojWvVp41p1aeMZdSnjGPTpoti0qWKYtGkiWLQo4lizqGIY8yghmXLn4VmyZ2EacabgmzEmYFvwZd/c7+VfXa+lHx0u5J6d7mQeXq3jnh8tY12fbSLdX6yinR/sIhzf6+Icn+vh3J+roZxfqyFb36pgm2BpoBrhKZ/a4Smf2uEpX5qhaR+aYWjfWmFoXxohaB6Z4WeeWaHnXhliN2uknjdrpJ43a6Sd92uknfdrpJ33a6SeNytknjcrZJ53K2SeNytknfcrZJ13K2RdNytkXTcrZF03K2RdNuskXXaq5B22quQddmrj3XZqo902aqPc9iqj3LXqY5x1qmOcdaojXDVqI1t1aeMatSnjGjTpYtp0KOJcM+iiHDOoYdwzKCGcMufhXHJnYRzyZ6EbMicg2zGm4Juw5mAccGWfnW/lX13vpN8d7uSenm5kHl7uI94fLeOd320jHZ+s4t1frGJc3+wiHJ/r4hyf6+Hcn+uhnF+q4RvgKiBbYKmgGuEpn9rhKZ/a4SlfmqFpH5phaN9aYWhfGiFoHpnhZ96ZobdrpJ33a6Sd92uknfdrpJ33a6SeNytknjcrZJ53K2SedytknjcrZJ13K2RdNytkXTcrZF03K2RdNytkXXbrJB12quQdtqrkHXZqo902aqPdNiqj3PXqY5z1qmOc9aojXLWqI1w1aeNbtSnjGzTpYts0aSJb8+iiHLOoohyzaGHcsyghnLKnoVzyZ2EdMidhHLInINvxpqCb8OZgHLBln51v5R9eL6UfHm8knt5upB5e7iPeHy3jnh8tY12fbSLdX6yinR/sIhzf6+Icn+viHJ/r4dxf62GcX6rhG+Ap4Fsg6Z/a4Smf2uEpn9rhKV+aoWkfmmFo31phaF8aIWge2eF3a6Sd92uknfdrpJ33a6SeNytknjcrZJ53K2SedytknncrZJ33K2RddytkXTcrZF03K2RdNytkXTcrJF126yQdtqrkHbZq4912aqPdNmqj3TYqo9016mOc9apjnPWqI1y1qiNcNWnjW7Upoxt0aSKcM+jiXPPoohzzqKIc82hh3LMoIZzyp6FdMmdhHXInYR1x5yDc8WagnHDmYBywZZ+db+UfXi+lHx5vZN7erqQeXu4j3h8uI94fLeNd320jHZ+s4p0f7CJc3+wiHJ/r4hyf6+Icn+vh3F/rIVvf6iBbIKmf2uEpn9rhKZ/a4Slf2uEpX5qhaN9aYWifGiFoXxohA==";var Rl="bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/awAA/2wAAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/aAAA/2oAAP9sAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2MAAP9iAAD/ZgAA/2gAAP9qAAD/bAAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/YwAA/2AAAP9dAAD/ZQAA/2YAAP9oAAD/agAA/2wAAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9jAAD/YAAA/1wAAP9ZAAD/ZgAA/2YAAP9mAAD/aAAA/2oAAP9sAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2MAAP9gAAD/XAAA/1kAAP9YAAD/agAA/2cAAP9mAAD/ZgAA/2gAAP9qAAD/bAAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/YwAA/2AAAP9cAAD/WQAA/1gAAP9YAAD/bAAA/2oAAP9nAAD/ZQAA/2YAAP9oAAD/agAA/2wAAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9jAAD/YAAA/1wAAP9ZAAD/WAAA/1gAAP9YAAD/bQAA/2sAAP9oAAD/ZgAA/2UAAP9mAAD/aAAA/2oAAP9sAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2MAAP9gAAD/XAAA/1kAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/2wAAP9qAAD/aAAA/2YAAP9lAAD/ZgAA/2gAAP9qAAD/bAAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/YwAA/2AAAP9cAAD/WQAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9sAAD/agAA/2cAAP9mAAD/ZQAA/2YAAP9oAAD/agAA/2wAAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9jAAD/YAAA/1wAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bAAA/2oAAP9nAAD/ZQAA/2UAAP9mAAD/aAAA/2oAAP9sAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2MAAP9gAAD/XAAA/1kAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/2sAAP9oAAD/ZgAA/2UAAP9lAAD/ZgAA/2gAAP9qAAD/bAAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9kAAD/YwAA/2AAAP9cAAD/WQAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9qAAD/aAAA/2YAAP9lAAD/ZQAA/2YAAP9oAAD/agAA/2wAAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2QAAP9jAAD/YAAA/1wAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/agAA/2cAAP9mAAD/ZQAA/2UAAP9mAAD/aAAA/2oAAP9sAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/ZAAA/2MAAP9gAAD/XAAA/1kAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bAAA/2oAAP9nAAD/ZQAA/2UAAP9lAAD/ZgAA/2gAAP9qAAD/bAAA/20AAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2QAAP9kAAD/YwAA/2AAAP9cAAD/WQAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2sAAP9oAAD/ZgAA/2UAAP9lAAD/ZQAA/2YAAP9oAAD/agAA/2wAAP9tAAD/bQAA/2wAAP9sAAD/awAA/2sAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/ZAAA/2MAAP9iAAD/YAAA/1wAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9qAAD/aAAA/2YAAP9lAAD/ZQAA/2UAAP9mAAD/ZwAA/2oAAP9rAAD/bAAA/2wAAP9sAAD/awAA/2oAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9kAAD/YgAA/2AAAP9dAAD/WgAA/1kAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/agAA/2gAAP9mAAD/ZQAA/2UAAP9lAAD/ZQAA/2YAAP9nAAD/aQAA/2oAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2gAAP9nAAD/ZgAA/2UAAP9hAAD/XgAA/1sAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bAAA/2oAAP9nAAD/ZgAA/2UAAP9lAAD/ZQAA/2QAAP9lAAD/ZgAA/2cAAP9pAAD/agAA/2oAAP9qAAD/aQAA/2gAAP9mAAD/ZAAA/2IAAP9eAAD/WwAA/1oAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/2wAAP9qAAD/ZwAA/2YAAP9lAAD/ZQAA/2QAAP9kAAD/ZAAA/2UAAP9nAAD/aQAA/2oAAP9pAAD/aAAA/2cAAP9kAAD/YAAA/10AAP9cAAD/WgAA/1kAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/agAA/2cAAP9mAAD/ZQAA/2QAAP9kAAD/ZAAA/2UAAP9mAAD/aAAA/2kAAP9pAAD/ZwAA/2QAAP9hAAD/XgAA/10AAP9cAAD/WwAA/1oAAP9ZAAD/WAAA/1gAAP9YAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/awAA/2oAAP9oAAD/ZwAA/2YAAP9mAAD/ZgAA/2cAAP9oAAD/aAAA/2kAAP9nAAD/ZAAA/2IAAP9hAAD/YAAA/18AAP9dAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9qAAD/aQAA/2kAAP9oAAD/aAAA/2gAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9fAAD/XgAA/10AAP9cAAD/WwAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/agAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9gAAD/YAAA/18AAP9dAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9tAAD/bQAA/20AAP9sAAD/bAAA/2sAAP9rAAD/awAA/2oAAP9qAAD/aQAA/2kAAP9pAAD/aQAA/2kAAP9nAAD/YwAA/2IAAP9hAAD/YQAA/2EAAP9hAAD/YAAA/18AAP9eAAD/XAAA/1sAAP9aAAD/WQAA/1kAAP9ZAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/WAAA/1gAAP9YAAD/";var Il="NTExqDUxMZ82MjKKNzMzajk1NTc6NjYgOjY2HTo2Nh06NjYdOjY2HTo2Nh06NjYcOjY2Gzo2Nhs6NjYbOjY2HDo1NRw6NTUcOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMSM0MDAjMy8vIzEtLSMvLCwkLywsJS8rKycuKysoLisrKC4rKyguKysoLisrKy0qKkkrKCiMKicnsSonJ8AqJyfGNTExqDUxMZ82MjKKNzMzbDg0NDo6NTUhOjY2HTo2Nh06NjYdOjY2HTo2Nh06NjYcOjY2Gzo2Nhs6NjYbOjY2HDo1NRw6NTUcOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMSM0MDAjMy8vIzEtLSMvLCwkLywsJS8rKycuKysoLisrKC4rKyguKysoLisrKy0qKkorKCiNKicnsSonJ8AqJyfGNTExqDUxMZ82MjKKNTExbzUxMUA4NDQkOjY2Hjo2Nh06NjYdOjY2HTo2Nh06NjYcOjY2Gzo2Nhs6NjYbOjY2HDo1NRw6NTUcOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMSM0MDAjMy8vIzEtLSMvLCwkLywsJS8rKycuKysoLisrKC4rKyguKysoLiorLS0pKU4rJyiOKicnsSonJ8AqJyfGNTExqDUxMZ82MjKLNTExcDMvL0M3MzMlOjY2Hjo2Nh06NjYdOjY2HTo2Nh06NjYcOjY2Gzo2Nhs6NjYbOjY2HDo1NRw6NTUcOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMSM0MDAjMy8vIzEtLSMvLCwkLywsJS8rKycuKysoLisrKC4rKyguKyspLSoqMSsoKFYqJyeSKicnsSonJ8AqJyfGNTExqDUxMZ82MjKLNTExcDMvL0Q3MzMlOjY2Hjo2Nh06NjYdOjY2HTo2Nh06NjYcOjY2Gzo2Nhs6NjYbOjY2HDo1NRw6NTUcOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMSM0MDAjMy8vIzEtLSMvLCwkLywsJS8rKycuKysoLisrKC4rKyguKyspLSoqMysoKFoqJyeUKicnsSonJ8AqJyfGNTExqDUxMZ82MjKLNTExcDMvL0Q3MzMmOjY2Hjo2Nh06NjYdOjY2HTo2Nh06NjYcOjY2Gzo2Nhs6NjYbOjY2HDo1NRw6NTUcOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMSM0MDAjMy8vIzEtLSMvLCwkLywsJS8rKycuKysoLisrKC4rKyguKyspLSoqMysoKFoqJyeUKicnsSonJ8AqJyfGNTExqDUxMZ82MjKLNTExcDIvL0U2MjIpOTU1Hzo2Nh06NjYdOjY2HTo2Nh06NjYcOjY2Gzo2Nhs6NjYbOjY2HDo1NRw6NTUcOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMSM0MDAjMy8vIzEtLSMvLCwkLywsJS8rKycuKysoLisrKC4rKyguKyspLSoqMysoKFsqJyeUKicnsSonJ8AqJyfGNTExqDUxMZ82MjKLNDEwcDEtLUgzLy8vODQ0Ijo2Nh46NjYdOjY2HTo2Nh06NjYcOjY2Gzo2Nhs6NjYbOjY2HDo1NRw6NTUcOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMSM0MDAjMy8vIzEtLSMvLCwkLywsJS8rKycuKysoLisrKC4rKyguKisrLSkpNysnJ1wqJyeUKicnsSonJ8AqJyfGNTExqDUxMZ82MjKLNDAwcTAtLUoxLi4yNzMzJDo2Nh46NjYdOjY2HTo2Nh06NjYcOjY2Gzo2Nhs6NjYbOjY2HDo1NRw6NTUcOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMSM0MDAjMy8vIzEtLSMvLCwkLywsJS8rKycuKysoLisrKC4rKyktKiovKygoQConJ2AqJyeVKicnsSonJ8AqJyfGNTExqDUxMZ82MjKLNDAwcTAtLUoxLS0yNzMzJDo2Nh46NjYdOjY2HTo2Nh06NjYcOjY2Gzo2Nhs6NjYbOjY2HDo1NRw6NTUcOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMSM0MDAjMy8vIzEtLSMvLCwkLywsJS8rKycuKysoLisrKC4rKyktKioxKygoQyonJ2IqJyeVKicnsSonJ8AqJyfGNTExqDUxMZ82MjKLNDAwcTAtLUoxLS0zNzMzJDo2Nh46NjYdOjY2HTo2Nh06NjYcOjY2Gzo2Nhs6NjYbOjY2HDo1NRw6NTUcOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMSM0MDAjMy8vIzEtLSMvLCwkLywsJS8rKycuKysoLisrKC4rKyktKioxKygoRConJ2IqJyeVKicnsSonJ8AqJyfGNTExqDUxMZ82MjKLNDAwcTAtLUoxLS00NzMzJjo2Nh86NjYdOjY2HTo2Nh06NjYcOjY2Gzo2Nhs6NjYbOjY2HDo1NRw6NTUcOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMSM0MDAjMy8vIzEtLSMvLCwkLywsJS8rKycuKysoLisrKC4rKyotKSk0KycnRSonJ2IqJyeVKicnsSonJ8AqJyfGNTExqDUxMZ82MjKLNDAwcTAtLUoxLS02NzMzKjo2NiE6NjYeOjY2HTo2Nh06NjYcOjY2Gzo2Nhs6NjYbOjY2HDo1NRw6NTUcOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMSM0MDAjMy8vIzEtLSMvLCwkLywsJS8rKycuKysoLisrKS4qKi0sKCg6KicnSConJ2MqJyeVKicnsSonJ8AqJyfGNTExqDUxMZ82MjKLNDAwcTAtLUoxLS02NzMzLDo2NiI6NjYeOjY2HTo2Nh06NjYcOjY2Gzo2Nhs6NjYbOjY2HDo1NRw6NTUcOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMSM0MDAjMy8vIzEtLSMvLCwkLywsJS8rKycuKysoLisrKS0qKi8rKCg9KicnSionJ2MqJyeVKicnsSonJ8AqJyfGNTExqDUxMZ82MjKLNDAwcTAtLUoxLS03NzMzLTo2NiQ6NjYeOjY2HTo2Nh06NjYcOjY2Gzo2Nhs6NjYbOjY2HDo2NR06NTUcOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMSM0MDAjMy8vIzEtLSMvLCwkLywsJS8rKycuKysoLisrKS0qKi8rKCg+KicnSionJ2MqJyeVKicnsSonJ8AqJyfGNTExqDUxMZ82MjKLNDAwcTAtLUoxLS03NzMzLzo2Nic6NjYgOjY2HTo2Nh06NjYcOjY2Gzo2Nhs6NjYcOjY2HTo2Nh06NTUcOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMSM0MDAjMy8vIzAtLSMvLCwkLywsJS8rKycuKysoLisrKi0qKjErKCg/KicnSionJ2MqJyeVKicnsSonJ8AqJyfGNTExqDUxMZ82MjKLNDAwcTAtLUoxLS03NzMzMDo1Nik6NjYhOjY2Hjo2Nh06NjYcOjY2Gzs2Nhs7NjYdOjY2HTo2Nh06NTUdOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMSM0MDAjMi8vIzAtLSMvLCwkLywsJS8rKycuKysoLioqLCwpKTUrKChBKicnSionJ2MqJyeVKicnsSonJ8AqJyfGNTExqDUxMZ82MjKLNDAwcTAtLUoxLS03NzMzMDo1Nik6NjYiOjY2Hjo2Nh06NjYcOjY2Gzs2Nhw7NjYdOzY2Hjo2Nh06NjUdOjU1HDk1NRw5NTUcOTU0HDg0NBw4NDQcNzMzHTczMx03MzIeNjIyHzUyMiE1MTEiNTExIzQwMCM0MDAiMi4uIzAtLSMwLCwkLywsJS8rKycuKyspLSoqLiwpKTgrJyhCKicnSionJ2MqJyeVKicnsSonJ8AqJyfGNTExqDUxMZ82MjKLNDAwcTAtLUoxLS03NzMzMDo1Nis6NjYlOjY2IDo2Nh06NjYcOzY2HDs2Nh07NjYeOzY2Hjo2Nh46NjYdOjU1HTk1NRw5NTUcOTU0HDg0NBw4NDQdNzMzHTczMx03MzMeNjIyHzUyMiE1MTEiNTExIjQwMCIzLy8iMi4uIzEtLSQwLCwkLywsJS8rKycuKysqLSoqMSwpKTkrJydCKicnSionJ2MqJyeVKicnsSonJ8AqJyfGNTExqTUxMaA2MjKKNDExcTAtLUsxLi43NzMzMDo1Niw6NjYnOjY2Izo2Nh86NjYdOzY2HDs2Nh47NjYeOzY2Hjo2Nh86NjYfOjY2Hzo1NR45NTUfOTU1Hzg0NB84NDQfODQ0HzczMyA3MzMgNjIyITYyMiE1MTEiNTExIjQwMCIzLy8iMi4uIzEuLiQwLS0mLywsJi8rKykuKissLSoqMywoKDorJydCKicnSionJ2IqJyeTKicnsConJ8AqJyfGNTExsDYyMqE2MjKKNTExcjIvL1EzLy88ODQ0NDo2NjA6NjYsOzY2KDs2NiQ7NjYiOzY2IDs3NyE7NzchOzY2Ijs2NiM6NjYkOjY2JDo2NiU6NTUmOTU1Jzk1NSg4NDQoODQ0Jzg0NCg3MzMnNzIyJjYyMiY1MTElNTExJTQwMCQzLy8lMi8vJjIuLigxLS0qMCwsLC8rLC8uKyszLSoqOCwpKT8rKChGKicnTionJ2IqJyeOKicnrSonJ8AqJyfGNTIysDYyMqY3MzOKNzMzdTczM184MzNLOTU1Qjo2Nj07NjY5Ozc3Njs3NzI7NzcuOzc3LDs3Ny07NzctOzc3LTs3Ny47NjYvOzY2MDo2NjI6NjYzOjU1NDk1NTU5NTU1ODQ0NDg0NDQ4MzMzNzMzMTYyMjA2MjIvNTExLzQxMS80MDAwMy8vMzIuLjUxLi43MC0tOi8sLD4uKytCLSoqRiwpKUwrKChTKicnWyonJ2wqJyeOKicnqyonJ8AqJyfKNjIyyjczM684NDSTOTQ1fjk1NW06NjZfOzY2WDs3N1M7NzdPPDc3TDw3N0k8NzdFPDc3Qzw3N0M8NzdBPDc3QDs3N0E7NzdDOzc3RDs2NkQ6NjZGOjY2Rjo1Nkc5NTVIOTU1Rzg0NEY4NDRFNzMzQzczM0I2MjJBNjIyQDUxMUA0MDBDMzAwSDMvL0wyLi5NMS0tTzAsLFIvKytVLioqWSwpKV8rKChmKicnbionJ30qJyeTKicnrConJ8IqJyfQNjIy0zczM704NDSkOTU1kDo2NoI7NjZ4Ozc3cjs3N208NzdpPDg4ZTw4OGM8ODhiPDg4Yjw4OGE8ODhdPDg4Wjw3N1o8NzdcOzc3XTs3N147NzdfOzY2Xzo2NmA6NjZhOTU1YDk1NV84NDRdODQ0WzczM1k3MzNYNjIyVzUxMVg1MTFbNDAwYTMvL2YyLy9oMS4uaDAtLWgvLCxpLisrbC0pKXEsKCh4KicngConJ4wqJyebKicnrionJ8QqJyfRNjIy5zczM9I5NDS6OjU1qDo2Nps7NzeSOzc3jDw3N4c8ODiDPDg4fj04OHw9ODh9PTg4fj04OH09ODh6PTg4dzw4OHg8ODh6PDc4ezw3N3s7Nzd8Ozc3fTs2Nn06NjZ9OjY2fTk1NXw5NTV6ODQ0eDg0NHY3MzN0NzIzcjYyMnE1MTF0NDAweDQwMH0zLy9+Mi4ufTEtLXwwLCx9LisrgC0qKoQsKSmKKygokSonJ5sqJyenKicnuConJ88qJyffNzMz/zg0NOo5NTXTOjY2xDs2Nrc7NzevPDc3pzw4OKI9ODidPTg4mD04OJY9OTmWPTk5lj05OZU9ODiTPTg4kj04OJM9ODiUPDg4lDw4OJU8NzeVOzc3ljs3N5c7NjaXOjY2ljo1NZY5NTWUOTQ0kzg0NJA3MzOONzMzizYyMok2MjKKNTExjTQwMJEzLy+TMi4ukzEtLZIwLCyULysrly4qKpssKSmhKygoqConJ7AqJye7KicnySonJ90qJyfvNzMz/zg0NP85NTXtOjY23zs3N9Q8NzfLPDg4wj04OLs9ODi1PTk5rz05Oaw9OTmqPTk5qT05Oac9OTmmPTk5pT04OKY9ODinPTg4pzw4OKc8ODioPDc3qDs3N6k7NzepOzY2qDo2Nqg6NTWnOTU1pjg0NKU4NDSjNzMzoDczM542MjKdNTExnzQwMKMzLy+mMi4vqDEuLqkwLS2rLywsry4qKrUsKSm7KygowyonJ8wqJyfVKicn4ConJ+8qJyf7NzMz/zg0NP85NTX/OjY28Ds3N+M8NzfZPDg40D04OMg9OTnBPTk5uz45Obc+OTm0Pjk5sj45ObE+OTmwPTk5rz05Oa89OTmwPTg4sD04OLA8ODiwPDc4sTw3N7E7NzeyOzY2sjo2NrI6NTWyOTU1sjk0NLE4NDSxNzMzsDczM642MjKuNTExsDQxMbM0MDC3My8vuTIuLrswLS2+Lywswy4rK8ktKSnQKygo2ConJ+IqJyftKicn+SonJ/8qJyf/ODQ0/zg0NP85NTX/OjY28zs3N+U8NzfaPDg4zz04OMY9OTnAPjk5uj45ObY+OTmyPjk5rz45Oa0+OTmtPjk5rT45Oa09OTmtPTk5rT04OK49ODiuPDg4rjw3N687NzevOzc3sDo2NrE6NjayOTU1szk1NbQ4NDS1ODQ0tjczM7c2MjK4NTExujUxMb00MDDAMy8vwzIuLsYxLS3KMCwszy4rK9UtKirdLCko5SsnJ/AqJyf/Kicn/yonJ/8qJyf/ODQ0/zg0NP85NTX+OjY26zs3N908NzfRPTg4xj05Obs9OTm0Pjk5rj45Oag+OTmjPjo6oD46Op4+OTmePjk5nj45OZ4+OTmdPTk5nj05OZ89ODifPDg4oDw4OKA8NzegOzc3ojs2NqU6NjamOjU1qDk1Nas4NDSuODQ0sDczM7M2MjK2NjIyuTUxMbs0MDC+My8vwjIuLsgxLS3OMCws1C8rK9stKirkLCkp7isnJ/oqJyf/Kicn/yonJ/8qJyf/ODQ0/zg0NP05NTXrOjY22Ds3N8s8NzjBPDg4tj05Oao+OTmiPjk5mz45OZM+OjqNPjo6ij46Ook+OjqJPjk5iT45OYg+OTmHPjk5iT05OYo9ODiJPTg4ijw4OIs8NzeLOzc3jTs3N5A7NjaSOjY2lTk1NZk5NDScODQ0oDczM6Q3MzOoNjIyrDUxMbA0MDCzMy8vuTIuLsExLS3KMCws0i8rK9otKirkLCkp8CsnJ/wqJyf/Kicn/yonJ/8qJyf/ODQ07zg0NOc5NTXSOjY2vzs3N7M8ODiqPDg4oD04OJU+OTmLPjk5gz45Ono+OjpzPjo6cD46OnA+OjpvPjo6bj45OW4+OTluPjk5bz05OXE9OTlwPTg4cTw4OHI8ODhzPDc3dTs3N3g7NjZ5OjY2fTk1NYE5NTWEODQ0iDczM403MzOSNjIylzUxMZw0MDChMy8vpzIuLrExLS29MCwsyC8rK9MtKireLCkp6SsnJ/QqJyf/Kicn/yonJ/8qJyf/ODQ02jg0NNE5NTW7OjY2pzs3N5s8NzeRPDg4iT05OX0+OTlzPjk5aT46OmA+OjpaPjo6Vz46OlU+OjpUPjo6Uz46OlQ+OTlVPjk5Vj05OVY9OTlWPTg4Vzw4OFg8ODhZPDc3Wjs3N107NjZfOjY2YTo1NWY5NTVpODQ0bTgzM3E3MzN2NjIyfDUxMYM0MDCJMy8vkDIuLpsxLi6oMC0tti8rK8QtKirQLCgo2isnJ+QqJyfxKicn/yonJ/8qJyf/ODQ0uDk0NLQ5NTWoOjY2lzs2Nog8Nzd8PDg4cz04OGg+OTldPjk5Uz45Oks+OjpFPjo6Qj46Oj8+Ojo9Pjo6PT46Oj0+OTk+Pjk5Pz45OT49OTk+PTg4Pz04OEE8ODhBPDc3Qjs3N0U7NjZHOjY2SDo1NUw5NTVQODQ0Ujg0NFY3MzNaNjIyYDUxMWc0MDBuMy8vdzIuL4IxLS6QMCwsny8rK64tKiq7LCgoxSonJ9AqJyfeKicn6yonJ/YqJyf+OTQ0qDk0NKU5NTWfOjU1kTo2Nn87NzdwPDg4ZD04OFc9OTlNPjk5RD45OTw+Ojo3Pjo6Mj46Oi8+OjotPjo6LD45OSs+OTksPjk5LT45OS09OTktPTg4LT04OC88ODgvPDc3MTs3NzI7NjYzOjY2NTo1NTg5NTU7ODQ0PDg0ND83MzNDNjIySTUxMU80MDBXMy8vXzIuLmsxLS14MCwshi4rK5QtKSqiKygosConJ74qJyfPKicn3ConJ+gqJyfwOTU1oTk1NZ05NTWZOTU1kDo2Nn47NzdtPDc3Xj04OFA9OTlEPjk5PD45OTQ+OTkvPjo6Kj46Oic+OjokPjo6Iz45OSE+OTkhPjk5IT05OSE9OTkhPTg4IT04OCI8ODgiPDc3Izs3NyU7NjYmOjY2KDo1NSo5NTUsODQ0LTg0NDA3MzM0NjIyOTUxMT40MDBFMy8vTDIuLlYxLS1iLywsby4rK30tKSmPKygooSonJ7QqJyfHKicn0yonJ90qJyfmOTU1mjk1NZg5NTWVOTU1jzo2NoE7NjZwOzc3YDw4OFE9ODhEPTk5Oz45OTM+OTktPjk5KD45OSU+OTkiPjk5ID45OR4+OTkdPjk5HD05ORw9OTkcPTg4HDw4OBw8ODgcPDc3HTs3Nx47NjYgOjY2ITk1NSM5NTUkODQ0JjgzMyg3MzMsNjIyMTUxMTY0MDA7My8vQjIuLkowLS1WLywsYi4qKnIsKSmFKygomionJ60qJye8KicnyionJ9QqJyfaOTU1lzk1NZU5NTWROjU1iTo2NoA6NjZ1Ozc3Zzw3N1g8ODhKPTg4Pz05OTc+OTkwPjk5Kz45OSc+OTkkPjk5IT45OR8+OTkdPTk5HD05ORw9ODgcPTg4Gzw4OBs8NzccOzc3HDs3Nx06NjYeOjY2Hzk1NSE5NDQjODQ0JDczMyc2MjIrNjIyLzUxMTM0MDA5My8vPzEuLkgwLS1TLysrYS0qKnIsKSmIKygonionJ6wqJye3KicnwConJ8sqJyfSOTU1lTk1NZE6NTWKOjU2gzo2Nn46NjZ6OzY2czs3N2Q8NzdVPDg4SD04OD49OTk2PTk5MD45OSs+OTkoPjk5JT05OSI9OTkgPTk5Hz04OB49ODgePDg4HTw4OB08NzceOzc3Hjs2Nh86NjYgOjU1ITk1NSM4NDQlODQ0JzczMyk2MjItNTExMTQxMTYzMDA8Mi8vQzEtLkwwLCxYLisrZy0qKnsrKCiUKicnrConJ7kqJye9KicnvSonJ8IqJyfJOTU1kDk1NYo6NTWFOjY2gTo2NoE6NjaCOjY2fzo2NnQ7NzdkPDc3VTw4OEk9ODg/PTg4Nz05OTI9OTktPTk5Kj05OSc9ODklPTg4Iz04OCM8ODgiPDg4ITw3NyE7NzchOzc3Ijo2NiM6NjYkOTU1JTk1NSc4NDQpNzMzKzczMy42MjIyNTExNjQwMDwzLy9CMi4uSzEtLVUvLCxjLiordSwpKYsrKCieKycnrionJ7oqJyfBKicnwSonJ8EqJyfBOjU1iDo1NYY6NTWFOjU1hDo1NYU6NTWFOjU1hTo2Nn86NjZzOzc3ZTw3N1c8ODhLPDg4Qj04ODo9ODg1PTg4MT04OC09ODgrPDg4Kjw4OCg8ODgnPDc3Jzs3NyY7NzcnOzY2Jzo2Nig6NTUpOTU1Kzg0NCw4NDQvNzMzMTYyMjQ2MjI4NTExPjQwMEQzLy9MMS4uVjAsLGMvKyt0LSoqiCwpKZkrKCiiKygoqConJ7AqJye7KicnwionJ8MqJyfCOjU1hjo1NYY6NTWGOjU1hjo1NYY6NTWGOjU1hjo1NoM6NjZ8OjY2dDs2Nmk7NzdcPDc3Tzw4OEY8ODg/PDg4Ojw4ODY8ODgzPDg4MTw3NzA8NzcuOzc3Ljs3Ny07NjYtOjY2Ljo1NS85NTUwOTQ0MTg0NDQ3MzM3NzMzOjYyMj01MTFBNDAwSDMvL08yLi5ZMS0tZi8sLHUuKiqGLSkplywpKaAsKCijKygopCsoKKgqJyewKicnuyonJ8IqJyfEOjU1hjo1NYY6NTWGOjU1hjo1NYY6NTWGOjU1hjo1NoM6NjZ/OjY2fTo2Nng6NjZuOzY2YTs3N1Y7NzdNPDc3Rjw3N0E8Nzc9Ozc3Ozs3Nzg7Nzc3OzY2Njo2NjU6NjY1OjU1Njk1NTc5NDU4ODQ0OjczMz03MzNANjIyQzUxMUc0MTFNMzAwVTIvL18xLS1rMCwseS8rK4UuKiqQLCkpnSwpKaMsKSmjLCgooysoKKQrKCioKicnsConJ7sqJyfCOjU1hjo1NYY6NTWGOjU1hjo1NYY6NTWGOjU1hTo1NoI6NTaAOjU1gDo1NYA6NTV8OjY2czo2Nmk7NjZgOzY2Vzs2NlA7NjZKOzY2Rzs2NkQ6NjZCOjY2QDo1NT85NTU/OTU1QDk0NEE4NDRCNzMzRTczM0g2MjJMNTExUDUxMVY0MDBeMi8vaDEuLnMwLS1/LywsiC8rK40uKiuSLSkpmywpKaIsKSmjLCkpoywoKKMrKCikKygoqConJ7AqJye5OjU1hjo1NYY6NTWGOjU1hjo1NYY6NTWGOjU1hDo1NoE6NTWBOjU1gjk1NYM5NTWCOTU1fjk1NXs6NTV0OjU1bTo1NmU6NjZdOjY2WDo1NVQ6NTVROTU1Tjk1NU05NDRNODQ0TTg0NE83MzNRNzMzVDYyMlg1MTFdNDEwYzMwMGsyLy90MS4ufjAtLYcwLCyMLysrji8rK48uKyuQLioqliwpKZ8sKSmjLCkpoywpKaMsKCijKygopCsoKKgrJyesOjU1hjo1NYY6NTWGOjU1hjo1NYY6NTWFOjU1gjo1NYE6NTWCOTU1gzk1NYQ5NTWFOTU1hDk1NYM5NTWBOTU0gDk0NXo5NTVzOTQ1bjk0NGo4NDRlODQ0Yjg0NGE4MzNgNzMzYTczM2I2MjJlNjIyaDUxMW00MDB0My8vfDIvL4QxLi6KMS0tjjAsLJAwLCyQLywskC8rK5AvKyuQLisrky0qKpwsKSmiLCkppCwpKaQsKSmjLCgooysoKKQrKCimOjU1hjo1NYY6NTWGOjU1hjo1NYY6NTWEOjU1gjo1NYI5NTWDOTU1hDk1NYU5NTWGOTU1hzk0NIg4NDSIODQ0iDg0NIM4NDSAODQ0gDgzM343MzN6NzMzdjczM3Q3MzN1NjIyeTYyMns1MTF6NTExfDQwMIIzLy+JMi4ukDIuLpQxLS2UMS0tlDAsLZIwLCyRLywskC8rK5AvKyuQLysrkS4qKpcsKSmgLCkpoywpKaQsKSmkLCkpoywoKKMrKCijOjU1hjo1NYY6NTWGOjU1hjo1NYU6NTWDOjU1gjk1NYM5NTWEOTU1hTk1NYU5NTWGOTQ1iDg0NIo4NDSMODQ0ijg0NIY4MzSGNzMziDczM4U3MzOBNzMzfjczM3w2MjJ/NTExiTUxMYs1MTGFNDAwhDMwMIkzLy+QMi4ulzEuLpkxLS2WMS0tlTAtLZMwLCySLywskS8rK5AvKyuPLysrkC4rK5UtKSmfLCkpoywpKaQsKSmkLCkpoywpKaMsKCii";var zl="LysrOS4rKzsuKio9LSoqPiwpKUArKChEKicnRyonJ0gqJydHKygoRSwoKEIsKSlALCgpQyonJ0wqJydRKicnUisnJ0wrKChEKicnRionJ0cqJydIKicnSi0qKkkyLi5KMzAwSTAsLEkvKytJLCkpRSsoJ0YqJydIKicnTConJ1EqJydSKicnUSonJ04rKChIKygoRiwpKEUtKilCLioqPi0qKUArKChFKicnRysoKEUrKChCLCgoQSsoKEAqJydAMCwsNy8rKzkuKys7LSoqPS0qKj8sKSlBKygoRSonJ0cqJydIKicnRysoKEQsKClBLCgoQisnJ0kqJydPKicnUConJ0krKChBKicnQConJ0EqJydCKicnRCwpKUUxLi5JMy8vSC4rK0YsKSlEKygoQSonJ0ArKChBKygnRionJ00qJydPKicnTyonJ0wrKChILCkoRSwpKUMtKipALSoqQCwoKEQrJydGKygnRSsoKEMsKChBKygoQCsoKEArKCg/MC0tNTAsLDcvKys5LisrOy0qKj0tKik/LCkpQSsoKEUqJydHKicnSCsnJ0YrKChEKygoQisnJ0UqJydIKicnRyonJ0EqJyc8KicnOyonJzsqJyc8KicnPiwoKEIvLCxHMS0tRi0pKUMqJydAKicnPSonJzsqJyc6KicnPionJ0UqJydFKicnRyonJ0crKChFLCkpQi0qKkAtKilALCgoRCsoJ0YrKChFKygoQywoKEErKChAKygoQCsoKD8sKSk9MC0tNTAtLTUwLCw3LysrOS4rKzstKio9LSopPywpKUErKChFKicnRyonJ0YrKChDKygoQConJ0AqJydAKicnPSonJzkqJyc3KicnNionJzYqJyc3KicnOionJz4sKChCLCkpQisnJ0AqJyc9KicnOSonJzYqJyc1KicnNyonJzkqJyc6KicnPSonJz8rKChALCkpPy0qKUAsKChEKygnRisoKEUrKChDLCgoQSsoKEArKChAKygoPywpKTwtKio7MS0tNTAtLTUwLS01MCwsNy8rKzkuKys7LSoqPS0qKT8sKSlBKygoQysoKEEsKCg8KygoOisoKDkrJyc4KicnNionJzQqJyczKycoMSsnJzEqJyczKicnNionJzkqJyc9KicnPyonJz0qJyc4KicnNSonJzMqJycyKicnMionJzMqJyc0KicnNionJzkqJyc8KygoPSsoKEArJydEKygnRCsoKEMsKChBKygoQCsoKEArKCg/LCkpPC0qKjsuKio6MS0tNTEtLTUxLS01MC0tNTAsLDcvKys5LisrOy0qKj0tKSk9LCkpOy0qKjctKio0LSkpMiwpKTEsKSkxLCkpLywpKS4sKSktLCkpLSwoKC0rKCgvKycnMionJzUqJyc4KicnOionJzcqJyc0KicnMSonJzAqJycvKicnLyonJzAqJycxKicnMionJzQqJyc4KicnOionJzwqJyc+KygoQCsoKEErKChAKygoQCsoKD8sKSk8LSoqOy4qKjouKio6MS0tNDEtLTQxLS00MS0tNTAtLTUwLCw3LysrOS4rKzstKio6LioqNS8rKy8vKystLisrLS4qKiwuKioqLisrKS4rKyguKiooLSoqKS0pKSosKSksLCgoLisoKC8qJyczKicnNConJzIqJycwKicnLyonJy4qJyctKicnLSonJy0qJyctKicnLyonJzAqJyczKicnNionJzYrKCg4KygoPSsoKEArKChAKygoPywpKTwtKio7LSoqOi4rKzkwLCw3Mi4uMTIuLjIxLi4zMS0tNDEtLTUwLS01MCwsNy4rKzguKys1LywsLjAtLSowLS0pLywsKS8rKygwLCwlMCwsJC8sLCQvKyslLisrJi4qKictKiopLCkpKiwpKSwrKCguKicnLyonJy8qJycuKicnLSonJywqJycrKicnKyonJysqJycrKicnLConJy0qJycvKicnMSsoKDEsKSkyKygoOCsnJz0rKCg+LCkpPC0qKjstKio7LSoqOTAtLTU0MDAvMy8vMDMvLzAyLi4xMS4uMzEtLTQwLS00MCwsNS8rKzUvLCwwMS0tKTIuLiYxLS0mMC0tJjAtLSUxLi4iMS4uITAtLSIwLCwiLywsIy8rKyUuKysmLioqJy0qKiksKSkrKicnLSonJy0qJycsKicnKyonJyoqJycqKicnKSonJykqJycpKicnKSonJysqJyctKicnLionJy8rKCgvKicnMyonJzkrKCg8LCkpOywpKTssKSk6MCwsNTUxMS44NDQqMy8vMDMvLzAzLy8wMi4uMTEuLjIxLS0zMCwsNDAsLDExLi4pMy8vJDIvLyMyLi4kMS4uIzIuLiAzLy8eMi8vHjIuLh8xLS0gMS0tITAsLCIwLCwjLywsJC4rKyUtKionKygoKionJysqJycqKicnKSonJykrKCgnKygoJysoKCcrKCgnKygoJysoKCgqJycrKicnLSonJy0qJycuKicnMSonJzcrJyc7KygoOywpKTovLCw1NDAxLjg0NCo5NTUoMy8vMDMvLzAzLy8wMy8vMDIuLjExLi4yMS0tMTEuLiwzLy8kNDAwITMvLyIyLi4iMi4vITMvMB00MDAbMzAwHDMvLx0yLy4eMi4uHjIuLh8yLi4fMS4tIDAtLSIvKyskLCkpJysnJykrKCgoKygoJywoKCYsKSklLCkpJSwpKSUsKSklLCkpJSwoKCcqJycrKicnLConJywqJycsKicnLyonJzUqJyc6KygoOi8rKzU0MDAuODQ0Kjk1NSg5NTUoMy8vMDMvLzAzLy8wMy8vMDMvLzAyLi4wMi4uLjMwMCY0MTEgNDAwHzMvLyAzLy8hMy8vIDQwMBs1MTEaNDAwGjQwMBwzLy8cMy8vHDMvLxwzLy8cMy8vHTIvLx4xLS0gLSoqIywpKSUsKSklLCkpJCwpKSQsKSkkLCkpJC0pKSQtKiolLioqKi4qKi4sKSkwKicnLSonJysqJycrKicnLConJzErKCg3LysrNTQwMC44NDQqOTU1KDk1NSg5NTUoMy8vMDMvLzAzLy8wMy8vMDMvLzAzLy8wMy8vLDQwMCM1MTEeNTExHjQwMB8zMDAgNDAwHjUxMRo1MTIYNTExGTUxMRo0MDAaNDAwGzQwMBs0MDAbNDAwGzQwMBsyLi4dLisrIS0pKiMtKSkjLSkpIy0pKSMtKiojLSoqIi0qKiIuKysnMCwsMzEtLTwvLCs7KygoMSonJysqJycrKicnKysoKC4vKysxNDAwLjg0NCo5NTUoOTU1KDk1NSg5NTUoMy8vMDMvLzAzLy8wMy8vMDMvLzAzLy8uMzAwKTQwMCE1MTEeNTExHjQwMB40MDAfNDAwHTUxMRo2MjIYNjIyGDYyMhk1MTEZNDAxGjQwMBo0MDAaNDAwGjQwMBoyLy8cLysrIS0qKiMtKSojLSoqIy0qKiIuKiohLisrIC8rKyAvLCwiMC0tLDEuLjowLSw+LCkpMionJysqJycqKicnKiwpKSsxLi4rNzMzKjk1NSg5NTUoOTU1KDk1NSg5NTUoMy8vMDMvLzAzLy8wMy8vMDMvLy8zLy8sNDAwJTUxMR81MTEeNTExHjUxMR41MTEeNTExHDYyMhk3MjMXNzMzFzYyMhc2MjIYNTExGTUxMRk1MTEZNDAxGjQwMBoyLy8cLywsIC4qKiItKioiLiorIS8rKyAvLCwfLywsHi8sLB4wLCwfMCwsIjEtLSswLCw0LCkpLyonJysqJycqKicnKisoKCovLCwqNjIyKTk1NSg5NTUoOTU1KDk1NSg5NTUoMy8vMDMvLzAzLy8wMy8vMDMvLy4zMDApNDAwIjUxMR41MTEeNTExHjUxMR41MTEdNjIyGTczMxc3MzMXNzMzFzczMxc3MzMXNjMzFzYyMhc2MjIYNTExGTUxMRkzMDAbMS0tHi8sLB8vLCwfLywsHzAsLB4wLCweMCwsHjAsLB4wLCweMCwsHjAsLCEvKysnLCgoKionJyoqJycqKicnKionJyotKioqNDAwKTg0NCg5NTUoOTU1KDk1NSg5NTUoMy8vMDMvLzAzLy8wMy8vLzMvLyw0MDAlNTExHzUxMR41MTEeNTExHjUxMR41MTEcNjMyGDczMxc3MzMWNzMzFjczMxY3MzMWNzMzFjczMxY3MzMXNzMzFzYyMhc1MTEYMy8vGzEtLR0wLCweMCwsHjAsLB4wLCweMCwsHjAsLB4wLCweMCwsHjAsLB8vKyshLCkpJionJykqJycqKicnKionJyorKCgqMCwsKTYyMig5NTUoOTU1KDk1NSg5NTUoMy8vMDMvLzAzLy8wMy8vLzMvLys0MDAjNTExHjUxMR41MTEeNTExHjUxMR02MjIbNzMzGDczMxY3MzMWNzMzFjczMxY3MzMWNzMzFjczMxY3MzMWNzMzFjg0NBU3MzMVNTIyFzMvLxsxLS0dMC0tHjAsLB4wLCweMCwsHjAsLB4wLCweMCwsHjAsLB4vLCwfLioqIysoKCgqJycqKicnKionJyoqJycqLioqKjUxMSk5NTUoOTU1KDk1NSg5NTUoMy8vMDMvLy8zLy8vMy8vLjQwMCk1MTEhNTExHjUxMR41MTEeNTExHTYyMhs3MzMYNzMzFzczMxY3MzMWNzMzFjczMxY3MzMWNzMzFjczMxY4NDQVOTU1FDo1NhI6NTUSODQ0FDYyMhczLy8aMi4uHDEtLR0wLS0eMCwtHjAsLR4wLC0eMCwtHjAsLR4wLCweLysrISwpKSYqJycpKicnKionJyoqJycqLSoqKjQwMCk4NDQoOTU1KDk1NSg5NTUoNDAwLTUxMSo1MTEoNjIyJjYyMiA3MzMcNzMzGzczMxs3MzMbODQ0GTk1NRY5NTUVOTQ0FTg0NBU4NDQVODQ0FTg0NBU4NDQVODQ0FDk1NRQ6NjYSOjY2ETs3NxA6NjYROTU1EzgzNBQ2MjIWNTExGDMvLxsyLi4cMS4uHDEtLR0xLS0dMS0tHTEtLR0xLS0eMS0tHi8sLCEtKiolLCkpJywpKScsKSknLSoqJzEtLSY2MjImNzMzJjg0NCY5NDUnNzMzJDk1NR06NjYZOzY2GDs2NhY7NjYVOzc3FDs3NxQ7NzcUOzc3FDw4NxM8NzcSOzc3Ejs3NxI7NjYSOjY2Ezo2NhI7NzcROzc3ETs3NxE7NzcQOzc3EDs3NxA6NjYQOTU1Ejg0NBM4NDQUNzMzFTYyMhY1MTEXNDExGDMwMBoyLy8bMy8vGzMvLxszLy8cMi8vHTIuLh4xLS0gMC0tITAtLSEwLS0hMC0tITEuLiEzLzAgNDAwIDUxMSI3MzMkOzc3Fzw4OBQ9ODgSPTg4Ej04OBI9ODgRPTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPTg4ET04OBA8ODgQPDc3EDw4OBA8ODgQPDg4Dzw3NxA8NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU2MjIVNjIyFjUxMRg0MDAZNDAwGjQwMBszMDAcMy8vHDMvLx0yLy8eMi4vHjIuLx4yLi8eMi4vHjIvLx4zLy8eMy8vHjMvLx80MDAgPTg4Ej04OBE9ODgRPTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPTg4ET04OBA9ODgQPTg4Dzw4OA88ODgPPDg4Dzw3Nw88NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU3MzMVNjIyFjUxMRg1MTEZNDAwGjQwMBszMDAbMy8vHDMvLx0zLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4zLy8ePTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPTg4ET04OBA9ODgQPTg4Dzw4OA88ODgPPDg4Dzw3Nw88NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU3MzMVNjIyFjUxMRg1MTEZNDAwGjQwMBszMDAbMy8vHDMvLx0zLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4yLy8ePTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPTg4ET04OBA9ODgQPTg4Dzw4OA88ODgPPDg4Dzw3Nw88NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU3MzMVNjIyFjUxMRg1MTEZNDAwGjQwMBszMDAcMy8vHDMvLx0zLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4yLy8ePTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPTg4ETw4OBI8NzcTPDg4Ej04OBA9ODgQPTg4EDw4OA88ODgPPDg4Dzw3Nw88NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU3MzMVNjIyFjUxMRg1MTEZNDAwGjQwMBszMDAcMy8vHTMvLx0zLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4yLy8ePTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPDg4Ejo2NhU5NTUXOzc3Ez04OBE9ODgQPTg4EDw4OA88ODgPPDg4Dzw3Nw88NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU3MzMVNjIyFjUxMRg1MTEZNDAwGjQwMBszMC8cMy8vHTMvLx4zLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4yLy8ePTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPTg4ET04OBE8ODgSOjY2FTczMxo3MzIaOzY2FD04OBE9ODgQPTg4EDw4OA88ODgPPDg4Dzw3Nw88NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU3MzMVNjIyFjUxMRg1MTEZNDAwGjQwMBszLy8cMy8vHjMvLx4zLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4yLy8ePTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPTg4ET04OBE7NzcUNzMzGTUxMB02MjIbOzY2FD04OBE9ODgRPTg4EDw4OBA8ODgPPDg4Dzw3Nw88NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU3MzMVNjIyFjUxMRg1MTEZNDAwGzMwMBwzLy8dMy8vHjMvLx4zLy8eMy8vHjIvLx4yLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4yLy8ePTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPTg4ETw4OBI5NTUWNTExHDQwMB42MjIbOzY2FD04OBE9ODgRPTg4ED04OBA8ODgPPDg4Dzw3Nw88NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU3MzMVNjIyFjUxMRg1MTEZNDAwGzMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjIvLx4yLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4yLy8ePTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPTg4ETs3NxQ3MzMaNDAwHTQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBA8ODgQPDg4Dzw3Nw88NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU3MzMVNjIyFjUxMRg0MDAaNDAwGzMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4yLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4yLy8ePTg4ET04OBE9ODgRPTg4ET04OBE9ODgRPDg4Ejk1NRY1MTEcNDAwHjQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBA8ODgQPDg4Dzw3Nw88NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU3MzMVNjIyFjUxMRg0MDAbMzAwHDMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4yLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4yLy8ePTg4ET04OBE9ODgRPTg4ET04OBE9ODgROzc3FDczMxo0MDAdMzAvHjQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBA8ODgQPDg4Dzw3Nw88NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU3MzMVNjIyFjUxMRg0MDAbMzAvHDMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4yLy8ePTg4ET04OBE9ODgRPTg4ET04OBE8ODgSOTU1FjUxMRw0MDAeMzAvHjQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBA8ODgQPDg4Dzw4Nw88NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU3MzMVNjIyFzUxMRk0MDAbMzAvHDMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMi8vHjIvLx4yLy8eMi8vHjIvLx4yLy8ePTg4ET04OBE9ODgRPTg4ET04OBE7NzcUNzMzGjQwMB0zMC8eMzAvHjQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBE9ODgQPDg4Dzw4Nw88NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU3MjMVNjIyFzQwMBo0MDAcMzAvHDMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjIvLx4yLy8eMi8vHjIvLx4yLy8ePTg4ET04OBE9ODgRPTg4ETw4OBI5NTUWNTExHDQwMB4zMC8eMzAvHzQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBE9ODgQPDg4EDw4Nw88NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU3MjMVNjIyFzQwMBszMC8cMzAvHDMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjIvLx4yLy8eMi8vHjIvLx4yLy8ePTg4ET04OBE9ODgRPTg4ETs3NxQ3MzMaNDAwHTMwLx4zMC8fMzAvHzQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBE9ODgQPDg4EDw4Nw88NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU3MjMVNjIyFzQwMBszMC8cMzAvHDMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4yLy8eMi8vHjIvLx4yLy8ePTg4ET04OBE9ODgRPDg4Ejk1NRY1MTEcNDAwHjMwLx4zMC8fMzAvHzQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBE9ODgQPDg4EDw4OBA8NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU3MjMVNjEyFzQwMBszMC8cMzAvHDMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4yLy8eMi8vHjIvLx4yLy8ePTg4ET04OBE9ODgROzc3FDczMxo0MDAdMzAvHjMwLx8zMC8fMzAvHzQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBE9ODgRPTg4EDw4OBA8NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU2MjIVNTExGDQwMBszMC8cMzAvHDMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMi8vHjIvLx4yLy8ePTg4ET04OBE8ODgSOTU1FjUxMRw0MDAeMzAvHjMwLx8zMC8fMzAvHzQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBE9ODgRPTg4EDw4OBA8NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU2MjIWNTExGTQwMBwzMC8cMzAvHDMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMi8vHjIvLx4yLy8ePTg4ET04OBE7NzcUNzMzGjQwMB0zMC8eMzAvHzMwLx8zMC8fMzAvHzQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBE9ODgRPTg4EDw4OBA8NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU2MjIWNDAwGjMwMBwzMC8cMzAvHDMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjIvLx4yLy8ePTg4ETw4OBI5NTUWNTExHDQwMB4zMC8eMzAvHzMwLx8zMC8fMzAvHzQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBE9ODgRPTg4EDw4OBA8NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU2MjIWNDAwGjMwLxwzMC8cMzAvHDMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjIvLx4yLy8ePTg4ETs3NxQ3MzMaNDAwHTMwLx4zMC8fMzAvHzMwLx8zMC8fMzAvHzQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBE9ODgRPTg4EDw4OBA8NzcPOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU2MjIWNDAwGjMwLxwzMC8cMzAvHDMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4yLy8ePDg4Ejk1NRY1MTEcNDAwHjMwLx4zMC8fMzAvHzMwLx8zMC8fMzAvHzQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBE9ODgRPTg4EDw4OBA8NzcQOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDczMxU2MjIXNDAwGzMwLxwzMC8cMzAvHDMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4yLy8eOzY2FDczMxo0MDAdMzAvHjMwLx8zMC8fMzAvHzMwLx8zMC8fMzAvHzQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBE9ODgRPTg4ETw4OBA8NzcQOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUODMzFDYyMhY1MTEZNDAwGzMwLxwzMC8cMzAvHDMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eOTQ0FzUxMRw0MDAeMzAvHjMwLx8zMC8fMzAvHzMwLx8zMC8fMzAvHzQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBE9ODgRPTg4ETw4OBA8NzcQOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUNzMzFDYyMhY0MDAaMzAwHDMwLxwzMC8cMzAvHDMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eNTExHDQwMB4zMC8eMzAvHzMwLx8zMC8fMzAvHzMwLx8zMC8fMzAvHzQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBE9ODgRPTg4ETw4OBA8NzcQOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUNzMzFDYyMhc0MDAaMzAvHDMwLxwzMC8cMzAvHDMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eNDAwHjMwLx4zMC8eMzAvHzMwLx8zMC8fMzAvHzMwLx8zMC8fMzAvHzQwMB42MjIbOzY2FD04OBE9ODgRPTg4ET04OBE9ODgRPTg4ETw4OBA8NzcQOzc3Dzs3NxA6NjYQOTU1Ejg0NBM4NDQUNzMzFDYyMhc0MDAaMzAvHDMwLxwzMC8cMzAvHDMwLxwzLy8dMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8eMy8vHjMvLx4zLy8e";var Ul="tbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU765uS2+ubklt7GxP7axsTS2sbE0trGxNLaxsTS2sbE0trGxNLaxsTS8trYbvLa2G7GsrECxrKxAsaysQLGsrECxrKxAsaysQLGsrECtqalHrampR62pqUeqpaVAqqWlQKqlpUCqpaVAqqWlQKqlpUCqpaVAw7++M8O/vjPDv74zw7++M766uUG+urlBvrq5Qb66uUG+urlBvrq5Qb66uUG5tLRNubS0Tbu2tjm6tbU9sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbWysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO+ubktvrm5JbexsT+2sbE0trGxNLaxsTS2sbE0trGxNLaxsTS2sbE0vLa2G7y2thuxrKxAsaysQLGsrECxrKxAsaysQLGsrECxrKxArampR62pqUetqalHqqWlQKqlpUCqpaVAqqWlQKqlpUCqpaVAqqWlQMO/vjPDv74zw7++M8O/vjO+urlBvrq5Qb66uUG+urlBvrq5Qb66uUG+urlBubS0Tbm0tE27trY5urW1PbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXW1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTvrm5Lb65uSW3sbE/trGxNLaxsTS2sbE0trGxNLaxsTS2sbE0vLa2G7y2thu8trYbsaysQLGsrECxrKxAsaysQLGsrECxrKxAsaysQK2pqUetqalHrampR6qlpUCqpaVAqqWlQKqlpUCqpaVAqqWlQKSfn1Gkn59Rw7++M8O/vjPDv74zvrq5Qb66uUG+urlBvrq5Qb66uUG+urlBvrq5Qbm0tE25tLRNu7a2Obq1tT2xrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11tbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU765uS2+ubklt7GxP7axsTS2sbE0trGxNLaxsTS2sbE0trGxNLy2thu8trYbvLa2G7GsrECxrKxAsaysQLGsrECxrKxAsaysQLGsrECtqalHrampR62pqUeqpaVAqqWlQKqlpUCqpaVAqqWlQKqlpUCkn59RpJ+fUcO/vjPDv74zw7++M8O/vjO+urlBvrq5Qb66uUG+urlBvrq5Qb66uUG5tLRNubS0Tbu2tjm6tbU9sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbWysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO+ubktvrm5JbexsT+2sbE0trGxNLaxsTS2sbE0trGxNLaxsTS8trYbvLa2G7y2thuxrKxAsaysQLGsrECxrKxAsaysQLGsrECxrKxArampR62pqUetqalHqqWlQKqlpUCqpaVAqqWlQKqlpUCqpaVApJ+fUaSfn1HDv74zw7++M8O/vjPDv74zvrq5Qb66uUG+urlBvrq5Qb66uUG+urlBubS0Tbm0tE27trY5urW1PbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXW1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTvrm5Lb65uSW3sbE/trGxNLaxsTS2sbE0trGxNLaxsTS2sbE0vLa2G7y2thu8trYbsaysQLGsrECxrKxAsaysQLGsrECxrKxAsaysQK2pqUetqalHrampR6qlpUCqpaVAqqWlQKqlpUCqpaVAqqWlQKSfn1Gkn59Rw7++M8O/vjPDv74zw7++M766uUG+urlBvrq5Qb66uUG+urlBvrq5Qbm0tE25tLRNu7a2Obq1tT2xrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11tbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU765uS2+ubklt7GxP7axsTS2sbE0trGxNLaxsTS2sbE0trGxNLy2thu8trYbvLa2G7GsrECxrKxAsaysQLGsrECxrKxAsaysQLGsrECtqalHrampR62pqUeqpaVAqqWlQKqlpUCqpaVAqqWlQKqlpUCkn59RpJ+fUcO/vjPDv74zw7++M8O/vjO+urlBvrq5Qb66uUG+urlBvrq5Qb66uUG5tLRNubS0Tbu2tjm6tbU9sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbWysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO+ubktvrm5JbexsT+2sbE0trGxNLaxsTS2sbE0trGxNLy2thu8trYbvLa2G7y2thuxrKxAsaysQLGsrECxrKxAsaysQLGsrECxrKxArampR62pqUetqalHqqWlQKqlpUCqpaVAqqWlQKqlpUCqpaVApJ+fUaSfn1HDv74zw7++M8O/vjPDv74zw7++M766uUG+urlBvrq5Qb66uUG+urlBubS0Tbm0tE27trY5urW1PbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXW1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTvrm5Lb65uSW3sbE/trGxNLaxsTS2sbE0trGxNLaxsTS8trYbvLa2G7y2thu8trYbsaysQLGsrECxrKxAsaysQLGsrECxrKxAsaysQK2pqUetqalHrampR6qlpUCqpaVAqqWlQKqlpUCqpaVApJ+fUaSfn1Gkn59Rvbm5KMO/vjPDv74zw7++M8O/vjO+urlBvrq5Qb66uUG+urlBvrq5Qbm0tE25tLRNu7a2Obq1tT2xrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11tbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU765uS2+ubklt7GxP7axsTS2sbE0trGxNLaxsTS2sbE0vLa2G7y2thu8trYbvLa2G7GsrECxrKxAsaysQLGsrECxrKxAsaysQLGsrECtqalHrampR62pqUeqpaVAqqWlQKqlpUCqpaVAqqWlQKSfn1Gkn59RpJ+fUb25uSjDv74zw7++M8O/vjPDv74zvrq5Qb66uUG+urlBvrq5Qb66uUG5tLRNubS0Tbu2tjm6tbU9sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbWysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO+ubktvrm5JbexsT+2sbE0trGxNLaxsTS2sbE0trGxNLy2thu8trYbvLa2G7y2thuxrKxAsaysQLGsrECxrKxAsaysQLGsrECxrKxArampR62pqUetqalHqqWlQKqlpUCqpaVAqqWlQKqlpUCkn59RpJ+fUaSfn1G9ubkow7++M8O/vjPDv74zw7++M766uUG+urlBvrq5Qb66uUG+urlBubS0Tbm0tE27trY5urW1PbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXW1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTvrm5Lb65uSW3sbE/trGxNLaxsTS2sbE0trGxNMG7uxa8trYbvLa2G7y2thu8trYbsaysQLGsrECxrKxAsaysQLGsrECxrKxAsaysQK2pqUetqalHrampR6qlpUCqpaVAqqWlQKqlpUCqpaVApJ+fUaSfn1Gkn59Rvbm5KMO/vjPDv74zw7++M8O/vjPDv74zvrq5Qb66uUG+urlBvrq5Qbm0tE25tLRNu7a2Obq1tT2xrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11tbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU765uS2+ubklt7GxP7axsTS2sbE0trGxNLaxsTTBu7sWvLa2G7y2thu8trYbvLa2G7GsrECxrKxAsaysQLGsrECxrKxAsaysQLGsrECtqalHrampR62pqUeqpaVAqqWlQKqlpUCqpaVAqqWlQKSfn1Gkn59RpJ+fUb25uSi9ubkow7++M8O/vjPDv74zw7++M766uUG+urlBvrq5Qb66uUG5tLRNubS0Tbu2tjm6tbU9sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbWysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO+ubktvrm5JbexsT+2sbE0trGxNLaxsTS2sbE0wbu7Fry2thu8trYbvLa2G7y2thuxrKxAsaysQLGsrECxrKxAsaysQLGsrECxrKxArampR62pqUetqalHqqWlQKqlpUCqpaVAqqWlQKqlpUCkn59RpJ+fUaSfn1G9ubkovbm5KMO/vjPDv74zw7++M8O/vjO+urlBvrq5Qb66uUG+urlBubS0Tbm0tE27trY5urW1PbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXW1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTvrm5Lb65uSW3sbE/trGxNLaxsTS2sbE0trGxNMG7uxa8trYbvLa2G7y2thu8trYbsaysQLGsrECxrKxAsaysQLGsrECxrKxAsaysQK2pqUetqalHrampR6qlpUCqpaVAqqWlQKqlpUCkn59RpJ+fUaSfn1Gkn59Rvbm5KL25uSjDv74zw7++M8O/vjPDv74zvrm5Lb66uUG+urlBvrq5Qbm0tE25tLRNu7a2Obq1tT2xrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11tbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU765uS2+ubklt7GxP7axsTS2sbE0trGxNMK9vRbBu7sWvLa2G7y2thu8trYbvLa2G765uBaxrKxAsaysQLGsrECxrKxAsaysQLGsrECtqalHrampR62pqUeqpaVAqqWlQKqlpUCqpaVApJ+fUaSfn1Gkn59RpJ+fUb25uSi9ubkov7u6KMO/vjPDv74zw7++M765uS2+urlBvrq5Qb66uUG5tLRNubS0Tbu2tjm6tbU9sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbWysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO+ubktvrm5JbexsT+2sbE0trGxNLaxsTTCvb0Wwbu7Fry2thu8trYbvLa2G8G8uxO+ubgWsaysQLGsrECxrKxAsaysQLGsrECxrKxArampR62pqUetqalHqqWlQKqlpUCqpaVAqqWlQKSfn1Gkn59RpJ+fUaSfn1G9ubkovbm5KL+7uijDv74zw7++M8O/vjO+ubktvrq5Qb66uUG+urlBubS0Tbm0tE27trY5urW1PbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXW1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTvrm5Lb65uSW3sbE/trGxNLaxsTTDvb0Zwr29FsG7uxa8trYbvLa2G7y2thvBvLsTvrm4FrGsrECxrKxAsaysQLGsrECxrKxAsaysQK2pqUetqalHrampR6qlpUCqpaVAqqWlQKqlpUCkn59RpJ+fUaSfn1Gkn59Rvbm5KL25uSi/u7oow7++M8O/vjPDv74zvrm5Lbu2tiq+urlBvrq5Qbm0tE25tLRNu7a2Obq1tT2xrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11tbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO1srFTubW0RLy3tzW9uLgwvLa2M7y3tjG2sbE0w729GcK9vRbBu7sWvLa2G7y2thvDvb0Swby7E765uBa+ubgWsaysQLGsrECxrKxAsaysQLGsrECtqalHrampR62pqUeqpaVAqqWlQKqlpUCqpaVApJ+fUaSfn1Gkn59RpJ+fUb25uSi9ubkov7u6KL65uSbDv74zw7++M765uS27trYqtrGxLLSvrz2yra1BubS0TbOvrz+2sbFJtLCwXrGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tda2qqrKtqqqytbKxU7WysVO1srFTtbKxU7WysVO1srFTtbKxU7WysVO+ubktvrm5Mb64uDK+ubkuwLu6KMK8vCHCvb0bwby8GsC7uhq8trYbw729EsG8uxO+ubgWvrm4FrGsrECwq6tAsaysQLGsrEC2srIttrKyLa2pqUesp6dDq6emQKqlpUCqpaVAs6+vL7GsrDWkn59RpJ+fUaSfn1G9ubkovbm5KL+7uii+ubkmu7a2KLy3ty26tbUstrGxLbKtrTKvqqo5ramoPqyop0CuqalAqKSkQLGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWxrq11sa6tdbGurXWtqqqyraqqsq2qqrKtqqqytbKxU7WysVO1srFTtbKxU7WysVO1srFTwby7McG8uzG+ubg0vri4ML65uS3Au7sowry8IsG8vB/Bu7sewry8G8O9vRjCvLwXwby7F765uBbBvLwXtbCwNaumpky1sbE5trKyLbaysi2tqKgurampR6qlpUCzr68vs6+vL7+8vDixrKw1saysNbGtrTukn59Rv7q6I7y3tye7t7YnurW1Kbizsyu2srEutbCwLbKtrS+uqak1raioO62pqT+sqKhCsq2tRaikpEChnZxUoZ2cVKGdnFShnZxUoZ2cVKGdnFShnZxUoZ2cVKGdnFSinp1nraqqsq2qqrKtqqqyraqqsq2qqrK9uLhOvbi4Tr24uE69uLhOvbi4TsO+vj+/u7s/w76+P724tza9uLgzvrm5ML24uDO/uropv7q6J8C7uyTBvLwhwry8HsK8vBvCvLwbwLq6H7y3tya7trUqtbGxOby2tiq2sbErsq2tLa2oqC6wrKwws66uL7Ovry+/vLw4wLy8LrezszG4tLMwura1Krq2tie5tLQouLOzKraxsS2zr68ysa2tNbCsrDWtqak3rampPa2pqEGtqKhEqKOjR6ahoUyhnJxRoZ2dVKGdnFShnZxUoZ2cVKGdnFShnZxUoZ2cVKKenWeinp1nop6dZ62qqrKtqqqyraqqsq2qqrKtqqqyraqqsr24uE69uLhOvbi4Tr24uE6+ublJv7q6R765uUm9uLg8vbi4Nb65uDO+ubkyvrm5ML64uDG+uLgvv7m5LL+6uijBu7skwby8IcG8uyDAu7ohv7q6Ir+6uiK/ubkivLa2Kq2oqC66tbU5raioLrOvry++urojvrq6LLy4uCu6trYrubW1Kri0sym2srIrtbCwLrOvrzOyrq44sKysPq+rq0Cvq6o/rqqqQK6qqkKtqalFq6enSammplChnJxRoZycUaGdnFShnZxUoZ2cVKGdnFShnZxUoZ2cVKKenWeinp1nop6dZ6KenWetqqqyraqqsq2qqrKtqqqyraqqsq2qqrK9uLhOvbi4Tr24uE69uLhPvbi4Tr65uUm9uLhMwLy8Rr65uTi/uro0wLq6M7+5uTW9uLc5vLe3N724uDK9uLgxvrm4Lr+5uSrAurolwbu7IsK8vB/Cvb0ewr29HcG8vB7Au7oivrm5KL66uSm/urolvrq6JL25uSW8t7clubW0Jbeysii0sK8ssq6tMrGtrTmxra0+sKysQa+rq0auqqpIraqpR6ypqEOsqKhAqKOjO6unp0irp6dOqKSjR6WjonChnZxUoZ2cVKGdnFShnZxUop6dZ6KenWeinp1nop6dZ6KenWeinp1nraqqsq2qqrKtqqqyraqqsq2qqrKtqqqyraqqsr24uE69uLhOvbi4Trq2tmO8t7dXvbi4T765uUbAu7tGv7q6Ob+6uje/ubk4vbi4Ob24uDW+uLgyvbi3NL23tzS+uLgwv7q6KsC7uybCvbwjw76+IMS/vx7Ev74ew729H8G8vCHBvLwiwLu7Ib+6uiC9uLgiu7a2I7izsyW1sLArsq6uMrGtrDmxra0+sa2tP7CsrD6uqqo/rqqqQ66pqUKsqKg/rKenPKynpz6oo6M1rampT6qnp1ulo6JwpaOicKWjonCmp6aRop2dY6KenWeinp1nop6dZ6KenWeinp1nop6dZ62qqrKtqqqyraqqsq2qqrKtqqqyraqqsq2qqrKtqqqyvbi4Tr24uE66trZjura2Y8C7u0fBvLtBv7q6Q765uEO+ubk/vrm4Pb65uTm/uroyv7q6L765uTK/ubk1wLu7MsG9vC7Cvr0qw76+J8S/vyTFwL8hxMC/IcS/vyDDvr4hwr29IcG8vCDAu7ohvrm5Iry3tyS6tbQnuLOzLLWxsDWzr687sq+uO7KtrTewrKs1r6qqN66qqTytqag+q6emPaqmpj6rp6dArampQa2pqUWyraw7paOicKGdnVahnZ1WpqemkaKdnWOinp1nop6dZ6KenWeinp1nop6dZ6KenWetqqqyraqqsq2qqrKtqqqyraqqsri1tYutqqqyx8PDVcvGxj7GwMBBxsDAQcTAv0LEwMBCxL6+PMG8vEDAu7pCwLu6Qb+6ukDAuro7wry8MsO+vS3Dvr4vw7++McTAvzDFwMAtxcHAKsXBwCfGwcAkxcDAJMTAvyTEv78kw76+JMK9vSTCvb0jwby8IsC7uyG/urkivbi4Jbu2tim5tbQtt7OzMbaysTC1sLAus66uLrGsrDCvqqo1raioOqqmpT2ppKRCpKCfQ6qmpj6ppKQ/pqGhPKKenlWhnZ1WoZ2dVqanppGinZ1jop6dZ6KenWeinp1nop6dZ6KenWeinp1nxMHBYMTBwWDEwcFgxMHBYMTBwWC/vLxxw8C/YcfDw1XLxsY+x8LBPcbBwT/GwcE+xcHARMXAwDzEv788xL+/O8XAvznFwL85xcDAN8bBwTPHwsIvx8LCL8fDwy7Iw8MsyMPDK8jDwynIw8Mnx8LCJ8XBwCjEv78qw76+KsK+vSrBvbwowLy8J8C8uyfBvLwkwLu7Ir+6uiG+ubkivbe3JLu2tia6tbUoubSzKbeysim1sLAqs66uLLCrqy+tqKg2qqWlP6qlpUCppKQ9pqKiP6Sgn0Sinp5VpKCgUaGdnVakoaFyop+fcaGenWyinp1nop6dZ6KenWeinp1nop6dZ8TBwWDEwcFgxMHBYMTBwWDEwcFgxMHBYMfDw1XKxcVFysXFP8nExD3HwsE9yMPDOsfCwj3GwsI+x8LCOsjDwzXKxcQyysXFMcrFxTPKxcUyysXFMcrFxTHKxcUwysbFLsrFxS3KxcUtyMTELMfCwizFwcEsxMC/LcO+vi/Cvr0uwb28K8C7uyq/uroqv7q6KL+6uie/urokv7q6Ir65uSK+ubgivLe3JLu2tiW6tbUlubS0JLezsiS2sbEjs66tKK+qqjGsqKc3qqWlOqeioj6loKBBpaCgRaWhoUuloaFWo6CgaaGennKdm5uFop6dZ6KenWeinp1nop6dZ6KenWfEwcFgxMHBYMTBwWDEwcFgxMHBYMTBwWDKxsVEysbFRMvGxj7LxsY4zMfGN8rGxTjJxMQ8ycXFOsvGxjXMx8cyzcjIMM3IyDHMx8czy8fHNcvHxzbLx8c3zMjHNsvHxzTLxsY0ycXFNcjExDXGw8IzxsLBMMTAwDDDv78ww7+/LsK+vivAvLwqv7u6Kb65uSm9ubgrvbm5K765uSm+ubkmvrm5Ir24uCG8t7chvLe2ILu2tiC6tbUiubS0H7eysh21sK8hsaysJ62pqDGqpaU5p6OiPKaioj+moqJFop+eUqSgoFqdm5uFnZubhZ2bm4Winp1nop6dZ6KenWeinp1noqOkl8jGxk/EwcFgxMHBYM7JyTzOyck8zsnJPM7IyC/OyMgvzsnIL87JyTHOyckzzcnINM7JyTLOysoxz8rKMc7KyjPOysk1zcnJOMzJyTzMyck/zMnIPsvIyDzKx8c6ycbGO8jFxTzHxMQ7xsPDOMbCwjXEwcAzxMDAMcTAwC7EwMAswr6+KsC8vCq/uroqvbm5Lb24uC68uLgtvLi3Kb24uCS9uLgivbe3ILy3tx68t7ccu7a2Hrq1tRy5tLQat7KyGrWvrx2xrKwlrqmpK6ynpy+rpqYzqqalNqmkpDWrpqY2nZubhZ2bm4Wdm5uFpKCgX6SgoF+koKBfpKCgX6KjpJeio6SXyMbGT8zJyUfMyclHzsnJPM7JyTzPy8ozz8rJKs/KyijQy8sr0MvLLtDLyzDQzMsx0MzMMtDMzDXPzMs4zsvLPM7Ly0DNy8pEzMrJRcvJyEPKyMhAycfGP8jGxUDIxsU/yMXFPMfExDvGw8M5xcLCNsTBwTLFwcEvxcHBLsPAvy3Cvr4swLy8K766uiy9ubksvbi4Kry3tyi8uLckvLe3I7y3tiO8trYgvLa2HLu2thu6tbQbubOzGbeyshm2sbAatK+vHLOurR+xrKwisKurJq+qqSqtqKgwq6amNqKenVKinp1SpKCgX6SgoF+koKBfpKCgX6aioXaio6SXoqOkl8jGxk/IxsZPzMnJR8zJyUfOyso2z8rKL8/KyirQy8so0MzLKtDMyy/PzMs1z8zLOM7MyzvNy8s+zcvLQszLy0XMy8pIy8rKS8rJyUrJychJycjIRsnHx0TIxsZEyMbGRMfFxULGxMNBxcPDP8TCwT3EwcA5xMHBNcXCwTPEwMAyw7+/L8G9vS6+urotvbm5K725uCm9uLgmvbi4I7y3tyK7trYiurW0Irm0tCC5tLMeuLOyHreysh23srEat7KxGbaxsRq1sLAcs66uHrGsrCGvqqonraioLqmkpDmloaBFop6dUqSgoF+koKBfpKCgX6aioXamoqF2oqOkl6KjpJeio6SXyMbGT8jGxk/Mycg+zsnJNc7JyS/NyckuzcjIL8zJyTLMyMg3y8jIQMrIyEXHxsZMw8LCVcHBwVvBwcJbwcLCXcHBwV7BwsJexMTEWcbHx1XHx8dSxsbFUsPDw1TBwMBVv76+Vr69vVO+vL1Pvby8S768vEe+vLxDvru8QL67uzy9ubo5u7e3N7q1tjO7trYuvbi4J724uCO7trYit7KyJLOurimxrKwrsKysLK+rqy2uqqosr6qqJ7KtrSGzrq4fsq2tILGsrCKvqqolraioKqunpi6ppKQ2pqGhQaSfn06jn55bpKCgX6aioXamoqF2iIaHiImQkPSio6SXoqOkl7i3uG7Gw8NNycbGQMvHxzjLx8c0ysbGNcjFxTnIxcU7x8XFQMbExEnEw8RRvr6/XbW3t22ytLV1s7W2dbS2tneztbZ6tLe3ebq8vXK/wsJqwcTEaMDCwmi9v79ruru8bLe4uW61trZus7S1a7Kys2mysrNks7KyXrSysli1srNQtrOzSLays0C2srM6uLS0Mrq2tiq7trYmuLOzJrGtrSyqpqc1p6OkOaaiozqloaI8o5+gPaSgoTiqpaYtrampJ62pqSetqKgorKenKqumpi6ppaUxqKOjNqahoT+jn59MoZ2dW5+am2ymoqF2iIaHiI6LjNCJkJD0rLGxsLO0tIK9vLxmxMLCUcfExETJxsY7ysfHN8vHxzfLyMg4y8jIOcvJyTzKyMhDx8fHTcLDw1m8vb5lubu8bbm8vHC5vLxzuLu8d7i8vHm7vr93vcLBdb/Dw3S/w8Nzv8PCcb7CwnC8v79wubu8cra3uHOztLVzsrKzbrOys2a2tLVbuLW2ULu3t0S9ubk5vrm5Mb24uSy9uLgou7a2JriztCW0r7Aor6usLa2pqS+sqKgwq6enMqmlpjSppaYyraipK6+rqyawq6skr6urJa6pqSmsp6ctqqWlMqikozimoaFAop6eS5+bm1ucmJhul5OUgYiGh4iOi4zQnKGhz66xsaS6u7t/wsLCY8jGxk/KyMdDzMnJPM3KyjjOy8s10M3MNNDOzTPRzs410M7OOc7NzULLzMxLycrKUsjJyVjHyclcxsnJYMXIyGTEyMhoxMjIbMTIyG7EychwxMnJb8XKyWzGyclqxcnIaMTHxmbCxMRlwcLCYsDAwF3BwMBUw8DASsTBwUDGwcE2x8LCLsfBwSfFwMAjw76+IMG8vB6/urocvbi4HLu2thy5tLQduLOzHraysiG1sLAktK+vJLSvryK0r68hs66uIbKtrSOwq6snrqmpLaynpzSppaU6p6KiQqSfn02hnZ1bnpqabpyYmIWalpehmZWWtYmQkPS3urqXwMLBesbGxmHKyclQzcvKRc7MzD3Qzcw50c7ONdLPzzLT0NAy09DQMtLQ0DXR0NA70NDQQs/Qz0jOz89OzM7OU8vOzljKzs1dyc3MYcjNzGXIzcxpyM3Ma8jNzGzIzcxryMzMacnMzGXJy8tgycvKXMnKylfKyclRysnISsvIyELMyMc7zMfHM8zGxivLxcUlycTEIMjCwhzGwMAYxL6+F8K8vBbAuroWvrm5F723txi7trYaurW0HLizsx63srIftrCwILSvryOyra0msKuqLK2oqDKrpqY5qaSkQKeiokiloKBSo56eX6GdnHCgnJuGoJubnKCcnKi5vr2eu7++ksHEw3vHx8dly8rJVM3My0jPzc0/0c7OOdLPzzTT0NAy09HQMtPR0TPT0dE10tHROtHR0UDQ0dBGztDQTc3Pz1PLzs5Zys7NXsnNzGPIzcxnyM3MasfNzG3Hzcxvx8zMbsfMzGvIzMtoyMvLZMnLy1/Ky8tYy8vLUczLykrMyclEzMjIPczHxzbMx8cuy8bGKMrExCLJw8Mdx8HBGcS/vxjCvb0XwLu7F7+5uRe9uLgYvLe2Gbu1tRu5tLQdt7KyILawsCK0r68lsq2sKa+qqi+tqKg1q6amPKmkpEOmoqFMpKCfV6OenmSinZ10oZ2diKKenZqinp2htLq5sbq/vpjAw8KDxsfGa8rKyVfNzMxJz83NP9HOzjjSz88z09DQMNPR0THT0dEz0tHQONHQ0D7Pz89Fzs/PS8zOzlHLzs5Yyc3NXsfMzGXFysprxMnJcMPJyHPDych1w8nIdsPJyHXDyMhyw8fHb8PHx2vEx8dnx8nJX8vLylXLyspOysfHSsjExEXIw8M+yMPDNcfCwi/HwcEoxsDAI8S/vx/Cvb0cwLu7G7+5uRq+ubgYvLe3Gbu2thq5tLQcuLOyH7axsSK1sLAktK+vJrKtrSmwq6surqmpNKunpjuppKRDp6KiTKSgoFijnp5mop2deaKdnY+inp6fo6Cfsra8uqm6v76YvsLBiMTGxXPJyclczMvLS87MzEHQzc060c/ONdLQzzLT0NAy0tDQNdDPzzzOzs1EzMzMS8rMzFHJzMxXyMvLXcfLy2PFyslqwsfHcsDGxXi/xcR7v8XEfb7Ew3y+w8N6vcPDd77CwnO+wsJwwMPDa8XHx2LKyspWy8rJT8jFxU7DwMBNwr6+RsO+vj7Cvb43wr29McG8vCvAu7smvrm6Ir24uCC8t7cdvLe3G7u2thu5tLQdt7KyILWwsCO0r68ms66uKLOuriizrq0rsaysL6+qqjWsqKc8qqWlRaijo06loKBZo56eaqKenYCinp6Top6eoKKenq+8v7+PvMC/jr/CwoTCxcR2x8fHX8rJyUzNy8tDz83NPdHPzjjS0M810tDQNNLQ0DfQz88+zc3NRsvMzEzKzMxSyszMV8nNzVzJzc1gyMzMZsbLymvEychww8nIdMHHxnfAxsV3wMXEdcDFxXLBxsVtw8bGaMXHx2PIyslby8vLU8zLykzKyMhIyMXFRMfDwz/GwcE5xL+/NMO+vjDDvb4pw729I8K8vB7Au7scv7q6Gr65uRm9uLcaurW1HbizsyC2sbEktK+vJ7Ouriqzrq4qs66tLLGsrDKvqqk4rKinP6qlpUiopKNQpqKhWqSgoG2jn5+Do6CfkaOfn5mgnJyavL+/j7y/v4/Bw8N6wsXEccbGxl3JyMhLzcvLQ9DOzjzSz88209DQM9PR0TLT0dE10dDQOtDQz0HPz89Hzc/PTc3Pz1LMz89XzM/PWsvPzl7Kzs1hyc7MZcjNzGnHzMttxsvKbcbLymvGy8ppx8vLZcnMzF/KzMxZy8zMVMzMzE7Ny8tIzcrKQc3JyTrNyMg0y8bGMMrExCvIw8Mnx8LCIsfBwR3FwL8aw769GcG8vBnAuroZvrm5G7y3tx26tbUguLOzI7eysiO2sbEktK+vJrOurSmwq6svrqmpN6unpj6qpaRGqKOjT6ejolimoaFqpaGhgKWiooqppqaKoJycmsHDwmzBw8JswsTEdMLExHLFxsZfysrJSc/NzT7Sz88309DQMtPQ0DHU0dEw1NHRMtPS0TfS0dE80dHRQtDR0UjP0dBOztDQVM3Q0FjM0M9by8/OXsrPzmHKzs1kyc7MaMjNzGnJzcxoyc3MZsrNzWLLzc1dzM3NV8zNzFLNzMxNzczLRs7Lyz7Oyso3zsnJMc3IyCvMxsYmy8XFIsnExB7IwsIbxsDAGcS+vhjCvLwZwLu6Gr+5uRy9uLgdvLa2H7q1tSC4s7Mgt7KyILWwsCKyra0nsKurLK6pqTKsp6c3q6amPqmkpEioo6NUpqKha6WhoYKmoqKHqaameqmmpnrIyclhyMnJYcTGxXHDxcVzvMHAl83MzEPRz88309DQMtPR0DLT0dAz09HRM9PR0TPT0tE209LSO9LS0kDQ0tFGz9HRTc7R0FPN0NBYzNDPW8vPzl/Kz85iys7NZcnOzWjIzcxqyM3MasnNzGfKzc1ky83NX8vNzVnMzcxTzczMTc3My0bOy8s+zsrKN87JyTHOyMgrzMfGJsvFxSHKxMQdyMLCG8bBwBnEv78Ywr29GMG7uxm/urkbvri4HLy3tx27tbUdubS0HreysiC1sLAis66tJrGsrCuvqqovrqmpMayopzeqpaVAqKSjTamkpD+koJ+DpKCgiaGdnZKhnZ2SyMnJYcjJyWHIyclhx8jIZMnKyVzSz8830tDPNNTR0THT0dEz09HRNdPR0TbT0tE309LRONLS0jvS0tI/0dLSRdDS0UzO0dFTzdHQWMzQz1zLz89gys/OZMnOzWjIzsxryM3MbcjNzGzJzcxpyc3NZcrNzWDLzc1by8zMVszMzFDNy8tJzsvKQM7KyjnOyckyzsjILM3HxybLxsUhysTEHcjDwhrHwcEZxb+/F8O9vRfBvLsYv7q6Gb65uBu8t7cdu7a2Hbm0tB64srIgtrGwI7Svryayra0rsaysLrCrqjCuqag1q6emPKumpkCnoqJYpJ+fdqSfn2GhnZ2SoZ2dksjJyWHKyspXysrKV8zLy1POzcxJ0M7OPtTS0TDU0dEx09HRNNPR0TfS0dE40tHROdLS0TrS0tI90tLSP9HS0kPQ0tFKz9HRUc3R0FfM0NBby9DPX8rPzmPJzs1nyM7Ma8jNzGzIzcxryc3MaMnNzGXKzc1hys3MXcvMzFnLzMtTzMvLS83KykPOysk7zsnJM87IyC3Nx8cny8bGIsrExB7Jw8Mbx8HBGcW/vxjDvr0Ywby8GcC6uhq+ubkdvbi3H7u2th+6tLQguLOzIbaxsSO1sK8ns66uLLGsrC+wq6sxrqmpNa6pqDmnoqJYpaGhX6Sgn2uinp58op6efKGdnZLKyspXysrKV8rKylfKyspXz87NRdDOzkLPzs5F1NLRMNTS0THS0dA70tHRO9LR0TvS0tI80tLSPtLS0j/S0tJC0NLRSM/R0U7O0dBSzdHQVc3Qz1rLz85eys/OY8nOzWbJzcxpyM3MacnNzGfJzcxlyc3MY8rMzF/KzMxay8vLVMzLyk3MyspEzcrJPM7JyTTNyMgtzcfHKMvGxSTKxMQgycPDHcfCwRvFwL8aw769G8G8vBzAu7oev7m5Ib24tyK7trYiubS0I7izsiS3sbElta+vKbOurS6xrKwysaysOK6pqDmuqag5qqWlQqaioVimoaFSop6efKKennyinp58ysrKV8rKylfKyspX0M7OQtDOzkLQz89Bz87ORc/OzkXQ0NBF0dHQP9LR0T3S0tE80tLSPNLS0j3S0tI/0dLSQtHS0UbQ0dFLz9HRTs7R0FHN0NBWzNDPWsvPzl7Kzs1iyc3MZsnNzGfIzcxnyc3MZ8nMzGTJzMxgyszMWsvLy1TLy8pNzMrKRM3JyTzNycg1zcjILszHxynLxsUkysTEIcjDwx7HwsEdxcDAHMO+vh3BvLwfwLu6Ib65uSS9t7cmu7W1Jrm0tCa3srIntrGxKbSvry2yra0zsaysNrKtrTeyra03qqWlQqmkpEuqpaVCpqGhUqahoVKinp58op6efMrKylfKyspX0M7OQtLQ0DnS0NA50dDPPNLQ0DnT0dA30tHQPNHQ0EDS0dA80tHRPdLS0TzS0tI90tLSQNHS0kPR0tFG0NHRSNDR0UvP0dBOztHQU83Qz1fMz85cys7NYcnNzGbJzcxoyM3MacjNzGjJzcxlyszMX8rMzFnLy8tSzMvLTMzKykTNysk8zcnINc3IyC/Mx8cpy8bFJMrExCDIw8Iex8HBHcXAvx3Dvr0fwby8IsC6uiW+ubgovLe2Kbq1tSm5tLQot7KyKbaxsCu0r64xsq2sN6+qqkCyra03qqalRqqmpUappKROp6OiV6ejolemoaFSpqGhUqKennzKyspX0tDQOdLQ0DnS0NA50tDQOdLQ0DnS0NA409HQN9LR0DzS0dA80dDQQdLR0T7T0tI609PSO9LS0kHR0tJD0dLRRNHS0UbQ0dFI0NHRS8/R0FDN0NBWzNDPXcrOzWTJzs1oyc3MacnNzGjJzcxnyc3MZMrNzF7LzMxYy8zLUszLy0vNyspDzcrJO83JyDTNyMcuzMfGKMvFxSPJxMMfyMLCHMbBwBvEv78cw729H8G8uyO/urknvbi3Kbu2tiq6tbUqubS0Krq1tSy3sbEns66uNLKtrDixrKw5raioPa2oqD2qpqVIqqalRqejoleno6JXp6OiV6ejolemoaFS0tDQOdLQ0DnS0NA50tDQOdLQ0DnT0dA309HQN9PR0DfT0dA3z8/PSM/Pz0jT0tI60tLRPdLS0j3T09M80dLRRNHS0kTR0tJD0dLSRdDS0knP0dFPzdHQVszQz17Kz85lyc7NaMnOzWjJzs1nyc3NZcrNzWPKzc1ey83MWMzMzFHMy8tKzcvKQs3KyjrNycgyzMfHLMvGxibKxcQhycPDHMfBwRnFv78Yw729GcG8vBzAurogvri4Jbu2tii6tbQqubSzLbm0tDKzrq4zs66uNbWwrzCxrKw5saysOa2oqD2tqKc/raioPaqmpUaqpqVGp6OiV6ejoleno6JXp6OiV9LQ0DnS0NA50tDQOdLQ0DnT0dA309HQN9PR0DfT0dA309HQN87Ozk/Ozs5P0NDPRs7Ozk/S0tE+0dHRQtDR0EbR0dFE0dLSQtHS0kPR0tJIz9LST87R0VbM0NBdy9DPZMrPzmfJz85oyc7NaMrOzWXKzs1iy87NXsvNzVjMzMxQzMvLR83Lyj/Nyso3zcnIMMzHxynLxsYjysTEHsjDwhrGwcEYxL++FsK9vBfAu7oavrm5Hry3tyK6tbUnuLOzLbaxsTS1sK84s66uObKtrDuwq6pBsKuqQbGsrDmtqKg9raioPa2oqD2tqKg9qqalRqqmpUano6JXp6OiV6ejolfS0NA50tDQOdLQ0DnT0dA309HQN9PR0DfT0dA309HQN87Ozk/Ozs5Pzs7OT87Ozk/R0NBA0dDQQdDQ0EXQ0NBF0dHRQdLS0j7S09NA0dPTRtDT0kzP0tFTzdHRW8zQ0GHL0M9lys/OaMrPzmjKz85lys7OYsvOzVzMzcxUzMzMTczLy0TNy8o8zcrJNM3JyC3NyMcmzMbGIMrExBvIw8IYx8HBFsW/vxbCvbwXwLu6Gb64uBy7trYiubS0KLeysjG0r687sq6tQbGsrEGwq6tBr6qqRK+qqkStqKg9raioPa2oqD2tqKg9raioPa2oqD2qpqVGqqalRqejoleno6JX0tDQOdLQ0DnT0dA309HQN9PR0DfT0dA309HQN9PR0DfOzs5Pzs7OT87Ozk/R0NA+0dDQPs/Pz0bQz89F0dDQQdLS0TzT09I609PTPNLT00LR09NJ0NPSUM7S0lfN0dFdzNHQYsvQz2XK0M9mys/PZcvPzmLMzs1Zzc3MTs3My0jNy8tDzcvKO87KyTHOycgpzcjHI8zGxh7KxcQaycPDF8fBwRbFv78Ww729F8C7uxm+uLgdu7a2Irm0tCm3sbEys66uPLGsrESvq6pJqqWlXa+qqkSvqqpEr6qqRK2oqD2tqKg9raioPa2oqD2tqKg9raioPaqmpUaqpqVGp6OiV9LQ0DnT0dA309HQN9PR0DfT0dA309HQN9PR0DfOzs5Pzs7OT87Ozk/R0NA+0dDQPszMzFTMzMxU0dDQQdLR0TzT0tI41NPTN9PT0znT1NM+0tPTRNDT00vP09JSztLSWM3S0V3M0dBhy9DQZMvQz2XL0NBly87NXdDNzTvNzMxIzMvKRM7MzEDOyckrz8nJJ87IxyHMxsYdy8XFGcnDwxfHwcEWxb+/F8O9vRjAu7sbvri4H7y2tiO5tLQptrGxMrOurjuxrKxCsKurPqqlpV2qpaVdr6qqRK+qqkStqKg9raioPa2oqD2tqKg9raioPa2oqD2tqKg9qqalRqqmpUbT0dA309HQN9PR0DfT0dA309HQN9PR0DfT0dA3zs7OT87Ozk/R0NA+0dDQPszMzFTMzMxU0dDQP9HQ0D/T0tE509LSN9TT0jbU09M409TTO9PU00DS09NF0NPTTM/T0lLO0tJYzdLRXc3S0lvL0NBly9DQZcvOzV3Qzc07zczMSMzLykTOzMxAzsnJK8/JyCLPycgizcfHHcrExBjIw8MXx8HBF8S/vxjCvLwbwLq6Hr65uCG8t7ckvbi4J7izsjGyra08sKurPrCrqz6wq6s+qqWlXaqlpV2vqqpEr6qqRK2oqD2tqKg9raioPa2oqD2tqKg9raioPa2oqD2qpqVG09HQN9PR0DfT0dA309HQN9PR0DfT0dA309HQN87Ozk/R0NA+0dDQPszMzFTMzMxU0dDQP9HQ0D/T0tI309LSN9TT0jbU09I21NPTNtTU0znT1NM909TTQNLT00XR09NL0dPTSc3S0lvN0tJby9DQZcvQ0GXL0NBl0M3NO83MzEjMy8pEzszMQM/JyCLPycgiz8nIIsvFxRjLxcUYyMLCF8bAwBjEvr4awby8HcC6uiC+ubkivbi4J724uCe4s7Ixsq2tPLCrqz6wq6s+sKurPrCrqz6qpaVdqqWlXa+qqkStqKg9raioPa2oqD2tqKg9raioPa2oqD2tqKg9raioPdPR0DfT0dA309HQN9PR0DfT0dA309HQN87Ozk/R0NA+0dDQPszMzFTMzMxU0dDQP9HQ0D/T0tI309LSN9PS0jfU09I21NPSNtTT0zbU1NQ509TTO9PU0z3S1NNB0tTTQdHT00nN0tJbzdLSW83S0lvL0NBly9DQZdDNzTvNzMxIzMvKRM7MzEDPycgiz8nIIsvFxRjLxcUYyMLCF8jCwhfGwcAYw729HMG8ux/Aurohv7q5I7+6uSO9uLgnvbi4J7KtrTywq6s+sKurPrCrqz6wq6s+sKurPqqlpV2qpaVdraioPa2oqD2tqKg9raioPa2oqD2tqKg9raioPa2oqD3T0dA309HQN9PR0DfT0dA309HQN9PR0DfR0NA+0dDQPszMzFTMzMxU0dDQP9HQ0D/T0tI309LSN9PS0jfT0tI31NPSNtTU0znU1NM51NTTOdPU0zrT1NM809TTPtLT00DS09NA0dPTSc3S0lvN0tJby9DQZcvQ0GXL0NBlzczMSMzLykTOzMxAz8nIIs/JyCLLxcUYyMLCF8jCwhfIwsIXxL6+HMK9vR7BvLsgwLq6Ir+5uSS/ubkkv7m5JL24uCeyra08sKurPrCrqz6wq6s+sKurPrCrqz6wq6s+qqWlXaqlpV2tqKg9raioPa2oqD2tqKg9raioPa2oqD2tqKg909HQN9PR0DfT0dA309HQN9PR0DfR0NA+0dDQPszMzFTMzMxU0dDQP9HQ0D/T0tI309LSN9PS0jfT0tI309LSN9TT0jbU1NM41NTTONTU0zjU1NM509PTOtPU0zvS09NA0tPTQNLT00DS09NAzdLSW83S0lvL0NBly9DQZc3MzEjMy8pEz8nIIs/JyCLLxcUYyMLCF8jCwhfIwsIXxL6+HMS+vhzEvr4cwbu7I8C6uiS/urkmv7q5Jr+6uSa/urkmv7q5JrCrqz6wq6s+sKurPrCrqz6wq6s+sKurPrCrqz6qpaVdraioPa2oqD2tqKg9raioPa2oqD2tqKg9raioPdPR0DfT0dA309HQN9PR0DfT0dA30dDQPszMzFTMzMxU0dDQP9HQ0D/T0tI309LSN9PS0jfT0tI309LSN9PS0jfU1NM41NTTONTU0zjU1NM41NTTONPT0znU09I31NPSN9LT00DS09NA0tPTQNLT00DN0tJby9DQZcvQ0GXNzMxIzMvKRM/JyCLPycgiyMLCF8jCwhfIwsIXxL6+HMS+vhy/ubkxv7m5McC6uim/ubkxv7q5Jr+6uSa/urkmv7q5Jr+6uSawq6s+sKurPrCrqz6wq6s+sKurPrCrqz6wq6s+sKurPqqlpV2tqKg9raioPa2oqD2tqKg9raioPa2oqD3T0dA309HQN9PR0DfT0dA30dDQPszMzFTMzMxU0dDQP9HQ0D/T0tI309LSN9PS0jfT0tI309LSN9PS0jfU1NM41NTTONTU0zjU1NM41NTTONTT0jfU09I31NPSN9TT0jfU09I31NPSN9LT00DS09NA0tPTQM3S0lvL0NBlzczMSMzLykTPycgiyMLCF8jCwhfIwsIXxL6+HL+5uTG/ubkxv7m5Mb+5uTG/ubkxv7m5Mb+5uTG/urkmv7q5Jr+6uSa/urkmv7q5JrCrqz6wq6s+sKurPrCrqz6wq6s+sKurPrCrqz6wq6s+raioPa2oqD2tqKg9raioPa2oqD2tqKg909HQN9PR0DfT0dA309HQN8zMzFTMzMxU0dDQP9HQ0D/T0tI309LSN9PS0jfT0tI309LSN9PS0jfU1NM41NTTONTU0zjU1NM41NTTONTT0jfU09I31NPSN9TT0jfU09I31NPSN9TT0jfU09I31NPSN9LT00DS09NAy9DQZcvQ0GXPycgiyMLCF8jCwhfIwsIXv7m5Mb+5uTG/ubkxv7m5Mb+5uTG/ubkxv7m5Mb+5uTG/ubkxv7m5Mb+6uSa/urkmv7q5Jr+6uSa/urkmsKurPrCrqz6wq6s+sKurPrCrqz6wq6s+sKurPrCrqz6tqKg9raioPa2oqD2tqKg9raioPQ==";var Ol="GgAAshoAALIaAACyIQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/AQAAYQEAAGEBAABhAQAAYQEAAGEBAABhAQAAYQEAAGEmAAD/GwAA/wAAAFoAAABVCAAAyCUCAP8lAgD/JQIA/xsJAP8bCQD/GwkA/xsJAP8FAgDUBQIA1AAAAFUBAQB/DgkA/w8KAP8BAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAahoAALIaAACyGgAAsiEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/wEAAGEBAABhAQAAYQEAAGEBAABhAQAAYQEAAGEBAABhJgAA/xsAAP8AAABaAAAAVQgAAMglAgD/JQIA/yUCAP8bCQD/GwkA/xsJAP8bCQD/BQIA1AUCANQAAABVAQEAfw4JAP8PCgD/AQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoaAACyGgAAshoAALIhAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8BAABhAQAAYQEAAGEBAABhAQAAYQEAAGEBAABhAQAAYSYAAP8bAAD/AAAAWgAAAFUIAADIJQIA/yUCAP8lAgD/GwkA/xsJAP8bCQD/GwkA/wUCANQFAgDUAAAAVQEBAH8OCQD/DwoA/wAAAFwBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqGgAAshoAALIaAACyGgAAsiEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/AQAAYQEAAGEBAABhAQAAYQEAAGEBAABhAQAAYQAAAFgmAAD/GwAA/wAAAFoAAABVCAAAyCUCAP8lAgD/JQIA/xsJAP8bCQD/GwkA/xsJAP8FAgDUBQIA1AAAAFUBAQB/DgkA/w8KAP8AAABcAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAahoAALIaAACyGgAAshoAALIhAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/wEAAGEBAABhAQAAYQEAAGEBAABhAQAAYQEAAGEAAABYJgAA/xsAAP8AAABaAAAAVQgAAMglAgD/JQIA/yUCAP8bCQD/GwkA/xsJAP8bCQD/BQIA1AUCANQAAABVAQEAfw4JAP8PCgD/AAAAXAEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoaAACyGgAAshoAALIaAACyIQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8BAABhAQAAYQEAAGEBAABhAQAAYQEAAGEBAABhAAAAWCYAAP8bAAD/AAAAWgAAAFUIAADIJQIA/yUCAP8lAgD/GwkA/xsJAP8bCQD/GwkA/wUCANQFAgDUAAAAVQEBAH8OCQD/DwoA/wAAAFwBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqGgAAshoAALIaAACyGgAAshoAALIhAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/AQAAYQEAAGEBAABhAQAAYQEAAGEBAABhAQAAYQAAAFgmAAD/GwAA/wAAAFoAAABVCAAAyCUCAP8lAgD/JQIA/xsJAP8bCQD/GwkA/xsJAP8FAgDUBQIA1AAAAFUBAQB/DgkA/w8KAP8AAABcAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAahoAALIaAACyGgAAshoAALIaAACyIQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/wEAAGEBAABhAQAAYQEAAGEBAABhAQAAYQEAAGEAAABYJgAA/xsAAP8AAABaAAAAVQgAAMglAgD/JQIA/yUCAP8bCQD/GwkA/xsJAP8bCQD/BQIA1AUCANQAAABVAQEAfw4JAP8PCgD/AAAAXAEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoaAACyGgAAshoAALIaAACyGgAAsiEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8BAABhAQAAYQEAAGEBAABhAQAAYQEAAGEBAABhAAAAWCYAAP8bAAD/AAAAWgAAAFUIAADIJQIA/yUCAP8lAgD/GwkA/xsJAP8bCQD/GwkA/wUCANQFAgDUAAAAVQEBAH8OCQD/DwoA/wAAAFwBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGofBwD/GgAAshoAALIaAACyGgAAshoAALIaAACyIQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/AQAAYQEAAGEBAABhAQAAYQEAAGEBAABhAAAAVQAAAFgmAAD/GwAA/wAAAFoAAABVCAAAyCUCAP8lAgD/JQIA/xsJAP8bCQD/GwkA/xsJAP8FAgDUBQIA1AAAAFUBAQB/DgkA/w8KAP8AAABcAAAAVQEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqHwcA/xoAALIaAACyGgAAshoAALIaAACyGgAAsiEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/wEAAGEBAABhAQAAYQEAAGEBAABhAQAAYQAAAFUAAABYJgAA/xsAAP8AAABaAAAAVQgAAMglAgD/JQIA/yUCAP8bCQD/GwkA/xsJAP8bCQD/BQIA1AUCANQAAABVAQEAfw4JAP8PCgD/AAAAXAAAAFUBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqHwcA/x8HAP8aAACyGgAAshoAALIaAACyGgAAshoAALIhAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8BAABhAQAAYQEAAGEBAABhAQAAYQEAAGEAAABVAAAAWCYAAP8bAAD/AAAAWgAAAFUIAADIJQIA/yUCAP8lAgD/GwkA/xsJAP8bCQD/GwkA/wUCANQFAgDUAAAAVQEBAH8OCQD/DwoA/wAAAFwAAABVAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAah8HAP8fBwD/GgAAshoAALIaAACyGgAAshoAALIaAACyGgAAsiEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/AQAAYQEAAGEBAABhAQAAYQEAAGEBAABhAAAAVQAAAFgmAAD/GwAA/wAAAFoAAABVCAAAyCUCAP8lAgD/JQIA/xsJAP8bCQD/GwkA/xsJAP8FAgDUBQIA1AAAAFUBAQB/DgkA/w8KAP8AAABcAAAAVQEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAah8HAP8fBwD/HwcA/xoAALIaAACyGgAAshoAALIaAACyGgAAshoAALIhAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/wEAAGEBAABhAQAAYQEAAGEBAABhAQAAYQAAAFUAAABYJgAA/xsAAP8AAABaAAAAVQgAAMglAgD/JQIA/yUCAP8bCQD/GwkA/xsJAP8bCQD/BQIA1AUCANQAAABVAQEAfw4JAP8PCgD/AAAAXAAAAFUBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGofBwD/HwcA/x8HAP8aAACyGgAAshoAALIaAACyGgAAshoAALIaAACyIQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8BAABhAQAAYQEAAGEBAABhAQAAYQEAAGEAAABVAAAAWCYAAP8bAAD/AAAAWgAAAFUIAADIJQIA/yUCAP8lAgD/GwkA/xsJAP8bCQD/GwkA/wUCANQFAgDUAAAAVQEBAH8OCQD/DwoA/wAAAFwAAABVAAAAVQEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGofBwD/HwcA/x8HAP8fBwD/GgAAshoAALIaAACyGgAAshoAALIaAACyGgAAshoAALIhAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/AQAAYQEAAGEBAABhAQAAYQEAAGEAAABVAAAAVQAAAFgmAAD/GwAA/wAAAFoAAABVCAAAyCUCAP8lAgD/JQIA/xsJAP8bCQD/GwkA/xsJAP8FAgDUBQIA1AAAAFUBAQB/DgkA/w8KAP8AAABcAAAAVQAAAFUBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGofBwD/HwcA/x8HAP8fBwD/HwcA/xoAALIaAACyGgAAshoAALIaAACyGgAAshoAALIaAACyIQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/wEAAGEBAABhAQAAYQEAAGEBAABhAAAAVQAAAFUAAABYJgAA/xsAAP8AAABaAAAAVQgAAMglAgD/JQIA/yUCAP8bCQD/GwkA/xsJAP8bCQD/BQIA1AUCANQAAABVAQEAfw4JAP8PCgD/AAAAXAAAAFUAAABVAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqHwcA/x8HAP8fBwD/HwcA/x8HAP8aAACyGgAAshoAALIaAACyGgAAshoAALIaAACyGgAAsiEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8BAABhAQAAYQEAAGEBAABhAQAAYQAAAFUAAABVAAAAWCYAAP8bAAD/AAAAWgAAAFUIAADIJQIA/yUCAP8lAgD/GwkA/xsJAP8bCQD/GwkA/wUCANQFAgDUAAAAVQEBAH8OCQD/DwoA/wAAAFwAAABVAAAAVQEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqHwcA/x8HAP8fBwD/HwcA/x8HAP8fBwD/GgAAshoAALIaAACyGgAAshoAALIaAACyGgAAshoAALIaAACyIQAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/AQAAYQEAAGEBAABhAQAAYQEAAGEAAABVAAAAVQAAAFgmAAD/GwAA/wAAAFoAAABVCAAAyCUCAP8lAgD/JQIA/xsJAP8bCQD/GwkA/xsJAP8FAgDUBQIA1AAAAFUBAQB/DgkA/w8KAP8AAABcAAAAVQAAAFUBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAah8HAP8fBwD/HwcA/x8HAP8fBwD/HwcA/xoAALIaAACyGgAAshoAALIaAACyGgAAshoAALIaAACyGgAAsiEAAP8hAAD/IQAA/yEAAP8hAAD/IQAA/wEAAGEBAABhAQAAYQEAAGEAAABVAAAAVQAAAFUAAABYJgAA/xsAAP8AAABaAAAAVQgAAMglAgD/JQIA/yUCAP8bCQD/GwkA/xsJAP8bCQD/BQIA1AUCANQAAABVAQEAfw4JAP8PCgD/AAAAXAAAAFUAAABVAAAAVQEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagAAAFgfBwD/HwcA/x8HAP8fBwD/HwcA/x8HAP8aAACyGgAAshoAALIaAACyGgAAshoAALIaAACyGgAAshoAALIhAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8BAABhAQAAYQEAAGEBAABhAAAAVQAAAFUAAABVAAAAWCYAAP8bAAD/AAAAWgAAAFUIAADIJQIA/yUCAP8lAgD/GwkA/xsJAP8bCQD/GwkA/wUCANQFAgDUAAAAVQEBAH8OCQD/DwoA/wAAAFwAAABVAAAAVQAAAFUBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagAAAFgfBwD/HwcA/x8HAP8fBwD/HwcA/x8HAP8fBwD/GgAAshoAALIaAACyGgAAshoAALIaAACyGgAAshoAALIaAACyHgAA/yEAAP8hAAD/IQAA/yEAAP8hAAD/AQAAYQEAAGEBAABhAQAAYQAAAFUAAABVAAAAVQAAAFgmAAD/GwAA/wAAAFoAAABVCAAAyCUCAP8lAgD/JQIA/xsJAP8bCQD/GwkA/xsJAP8FAgDUBQIA1AAAAFUBAQB/DgkA/w8KAP8AAABcAAAAVQAAAFUAAABVAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAaiofAP8AAABYHwcA/x8HAP8fBwD/HwcA/x8HAP8fBwD/g39/dhoAALIaAACyGgAAshoAALIaAACyGgAAshoAALIaAACyGgAAsh4AAP8hAAD/IQAA/yEAAP8hAAD/IQAA/wEAAGEBAABhAQAAYQEAAGEAAABVAAAAVQAAAFUAAABYJgAA/xsAAP8AAABaAAAAVQgAAMglAgD/JQIA/yUCAP8bCQD/GwkA/xsJAP8bCQD/BQIA1AUCANQAAABVAQEAfw4JAP8PCgD/AAAAXAAAAFUAAABVAAAAVQAAAFUBAABqAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAaiofAP8AAABYAAAAWB8HAP8fBwD/HwcA/x8HAP8fBwD/HwcA/4N/f3YaAACyGgAAshoAALIaAACyGgAAshoAALIaAACyGgAAshoAALIeAAD/IQAA/yEAAP8hAAD/IQAA/yEAAP8BAABhAQAAYQEAAGEAAABVAAAAVQAAAFUAAABVAAAAWCYAAP8bAAD/AAAAWgAAAFUIAADIJQIA/yUCAP8lAgD/GwkA/xsJAP8bCQD/GwkA/wUCANQFAgDUAAAAVQEBAH8OCQD/DwoA/wAAAFwAAABVAAAAVQAAAFUAAABVAQAAagEAAGoBAABqAQAAagEAAGoBAABqAQAAaiofAP8AAABYAAAAWB8HAP8fBwD/HwcA/x8HAP8fBwD/HwcA/x8HAP+Df392GgAAshoAALIaAACyGgAAshoAALIaAACyGgAAshoAALIaAACyHgAA/x4AAP8hAAD/IQAA/yEAAP8hAAD/AQAAYQEAAGEBAABhAAAAVQAAAFUAAABVAAAAVQAAAFgmAAD/GwAA/wAAAFoAAABVCAAAyCUCAP8lAgD/JQIA/xsJAP8bCQD/GwkA/xsJAP8FAgDUBQIA1AAAAFUBAQB/DgkA/w8KAP8AAABcAAAAVQAAAFUAAABVAAAAVQEAAGoBAABqAQAAagEAAGoBAABqAQAAaiofAP8qHwD/AAAAWAAAAFgfBwD/HwcA/x8HAP8fBwD/HwcA/x8HAP+Df3+Cg39/dsO+vlUaAACyGgAAshoAALIaAACyGgAAshoAALIaAACyGgAAsh4AAP8eAAD/IQAA/yEAAP8hAAD/IQAA/wEAAGEBAABhAAAAVwAAAFUAAABVAAAAVQAAAFUAAABYJgAA/xsAAP8AAABaAAAAVQgAAMglAgD/JQIA/yUCAP8bCQD/GwkA/xsJAP8bCQD/BQIA1AUCANQAAABVAQEAfw4JAP8PCgD/AAAAXAAAAFUAAABVAAAAVQAAAFUAAABYAQAAagEAAGoBAABqAQAAaiofAP8qHwD/AAAAWAAAAFgAAABYHwcA/x8HAP8fBwD/HwcA/x8HAP8fBwD/g39/goN/f3bDvr5VwLu6ZRoAALIaAACyGgAAshoAALIaAACyGgAAshoAALIeAAD/HgAA/x4AAP8hAAD/IQAA/yEAAP8BAABhAQAAYQAAAFcAAABVAAAAVQAAAFUAAABVAAAAWCYAAP8bAAD/AAAAWgAAAFUIAADIJQIA/yUCAP8lAgD/GwkA/xsJAP8bCQD/GwkA/wUCANQFAgDUAAAAVQEBAH8OCQD/DwoA/wAAAFwAAABVAAAAVQAAAFUAAABVAAAAWAEAAGoBAABqAQAAaiofAP8qHwD/HgAA/wAAAFgAAABYHwcA/x8HAP8fBwD/HwcA/x8HAP8fBwD/g39/c4N/f4KDf392w76+VcC7umXCvLxcGgAAshoAALIaAACyGgAAshoAALIaAACyHgAA/x4AAP8eAAD/IQAA/yEAAP8hAAD/AQAAYQAAAFgAAABXAAAAVQAAAFUAAABVAAAAVQAAAFgmAAD/GwAA/wAAAFoAAABVCAAAyCUCAP8lAgD/IgQA/xsJAP8bCQD/GwkA/xsJAP8WDAD/BQIA1AAAAFUBAQB/DgkA/w8KAP8AAABcAAAAVQAAAFUAAABVAAAAVQAAAFgAAABYAwEAmyofAP8qHwD/HgAA/wAAAFgAAABYAAAAWB8HAP8fBwD/HwcA/x8HAP8fBwD/HwcA/4N/f3ODf3+Cg39/dsO+vlXAu7plwry8XMS/v08aAACyGgAAshoAALIaAACyGgAAsh4AAP8eAAD/HgAA/z4PAP8+DwD/Pg8A/zocCf8TAACaEAAAjxMAAJcSAACWFQAA0xoAAP8iAAD/GAAA/xAAAP8VAAD/EAEA/yECAP8jAwD/IgQA/yIEAP8iBAD/GQoA/xkKAP8XCwD/FgwA/xELAP8IBwD/CAgA/wcGAP8KCQD/CQkA/wwGAP8UAADYFQAAnRUAAJ8UAACcFgAApRoAAP8iBwD/HgAA/x4AAP8AAABYAAAAWAAAAFgfBwD/HwcA/x8HAP8fBwD/HwcA/x8HAP+Df39zg39/goN/f3bDvr5VwLu6ZcK8vFzEv79PxcDAThoAALIaAACyGgAAshoAALIeAAD/HgAA/x4AAP8nAAD/JwAA/y0AAP8nAAD/FwAAthwDAJ0VAACeGwMAmxYAAKAXAACxGgAA/x8AAP8gAAD/HgAA/yIBAP8kAgD/IgQA/yAFAP8gBQD/HgcA/xkKAP8ZCgD/FwsA/x0UAP8ZEgD/GRUA/xIQAP8TDgD/GhAA/xUAAP8aAADBGAAApyQLAJwgBgCgFQAAnxgAANcyGgT/HQAA/x8AAMQaAACyAAAAWAAAAFgfBwD/HwcA/x8HAP8fBwD/HwcA/x8HAP+EgIBrg39/c4N/f4KDf392w76+VcC7umXCvLxcxL+/T8XAwE7GwcFJGgAAshoAALIaAACyHgAA/x4AAP8uAAD/LgAA/ycAAP8kAAD/IgAA/zoaB/ITAACZFQAAnhMAAJkSAACVEQAAkRUAAJ4WAACgFwAApRsAAP8jAAD/IwEA/yIEAP8gBQD/HgcA/x4HAP8bCQD/GwkA/xkKAP8XCwD/FwkA/xkDAP8XAADkGQAAsBYAAKEZAACsFgAAoxcAAKYXAAClFAAAnBMAAJkgBAD/Jw8A/x0AAP8dAAD/GgAAsgUAAGoFAABqHwcA/x8HAP8fBwD/HwcA/x8HAP+FgoFqhICAa4N/f3ODf3+Cg39/dsO+vlXAu7plwry8XMS/v0/FwMBOxsHBScjExELLxsY+xb68Ts7KyTwtAAD/LQAA/y4AAP8uAAD/LAAA/ysAAP8/FwD/IwAA/xUAALMQAACMEAAAjhMAAJcTAACYFQAAnBgAALwgAAD/IgAA/yAAAP8hAQD/IAUA/x8GAP8fBgD/GwkA/xsJAP8YCgD/GgcA/xwAAP8cAAD/GwAA/xUAAL0QAACOFgAAohYAAKIWAACiFwAApxIAALoSAwD/HxMA/xYLAP8XDAD/FwwA/wUAAGoFAABqBQAAah4IAP8eCAD/HwcA/x8HAP8fBwD/hYKBaoSAgGuDf39zg39/goN/f3bDvr5VwLu6ZcK8vFzEv79PxcDATsbBwUnIxMRCy8bGPsW+vE7Oysk8y8fGSS0AAP8uAAD/LgAA/y4AAP8vAAD/LwAA/zsHAP8vAAD/JQAA/xsAAP8cAAD/HQAA/x4AAP8gAAD/IQAA/yIAAP8fAAD/IQEA/yEBAP8iBAD/IgQA/725t30aCQD/GAsA/xkIAP8cAAD/GwAA/xwAAP8ZAAD/EwAA/xIDAP8RBgD/DwcA/xELAP8RDgD/ExAA/xcSAP8UDgD/FA4A/29sbDWWkpIql5KQP4iFhDaTj482HggA/x4IAP+IhIRVhYKBX4WCgWqEgIBrg39/c4N/f4KDf392w76+VcC7umXCvLxcxL+/T8XAwE7GwcFJyMTEQsvGxj7FvrxOzsrJPMvHxknFwL5dw7+9ZoR9eKZ/c2vQuLOvk62ln7aYiH37nI+F8o5/c/+Nf3P/l4l+/5WHev+YjYH/kod6/6KclNaTiX/0e2xf9ol+cf/ExMRttbKun7m1so69ubd9cWdS/3tyYP9wZlL/ZVZE/5qSirihmpOkiYN38356bP9/e23+hYF07YR/cvV1cWD/fXlq/315bsyIg3ySkYyEj4aCfWRvbGw1lpKSKpeSkD+IhYQ2k4+PNpCMizyLh4dJiISEVYWCgV+FgoFqhICAa4N/f3ODf3+Cg39/dsO+vlW5tLR/ubS0f8S/v0/FwMBOxsHBScjExELLxsY+xb68Ts7KyTzLx8ZJxcC+XcO/vWaEfXimf3Nr0Lizr5OtpZ+2mIh9+5yPhfKOf3P/DAAA2AwAANiVh3r/mI2B/0IcAP84DwD/Ti0O/041Fv8/JQP/PyUD/zUZAP81GQD/vbm3fRoJAP8ZCgD/GQoA/xkKAP+akoq4FA0A/xIMAP8WEwH/CQcA/wkHAP+Ef3L1dXFg/315av8TEhJYExISWJGMhI+Ggn1kb2xsNZaSkiqXkpA/iIWENpOPjzaQjIs8i4eHSYiEhFWFgoFfhYKBaoSAgGuDf392g39/j4N/f4+6tbV6urW1er+5uWa/ublmv7m5ZsbBwUnIxMRCy8bGPsW+vE7Oysk8y8fGScXAvl3Dv71mhH14pn9za9C4s6+TraWftpiIffsiISFRIiEhUQwAANgMAADYlYd6/0IcAP9CHAD/MAAA/y8AAP8vAAD/PyUD/z8lA/81GQD/NRkA/xoJAP8aCQD/GQoA/xkKAP8ZCgD/FA0A/xQNAP8SDAD/FhMB/wkHAP8JBwD/hH9y9XVxYP8TEhJYExISWAAAAFUAAABVAAAAVW9sbDWWkpIqIQYA/yEGAP8hBgD/IQYA/4uHh0mIhIRVhYKBX4WCgWqDf397g39/e4N/f46Df3+OubW1grm1tYK+ublsvrm5bMXAv1DFwL9QyMTEQsvGxj7FvrxOzsrJPMvHxklEGAD/RBgA/0QYAP9EGAD/RBgA/62ln7YiISFRIiEhUSIhIVEAAABVAAAAVQAAAFVCHAD/MAAA/zAAAP8vAAD/LwAA/z8lA/8jAwD/IwMA/yMDAP8jAwD/GgkA/xsJAP8bCQD/GwkA/xsJAP8UDQD/EAgA/xAIAP8AAABVAAAAVQAAAFUTEhJYAAAAVQAAAFUAAABVAAAAVQAAAFUAAABVIQYA/yEGAP8hBgD/IQYA/yEGAP+DgH9Wg4B/VoOAf1aDf399g39/fYN/f32Df3+Rg39/kbm1tYW5tbWFv7q6bMXAv1DFwL9QxcC/UMvFxD/LxcQ/y8XEP8vFxD9EGAD/RBgA/0QYAP9EGAD/RBgA/0QYAP9EGAD/IiEhUSIhIVEiISFRIyIiUCMiIlAjIiJQMQAA/zEAAP8xAAD/MQAA/0oeAP8kAwD/JAMA/yQDAP8kAwD/JAMA/xsJAP8bCQD/GwkA/xsJAP8bCQD/EAgA/xAIAP8QCAD/AAAAVQAAAFUAAABVAAAAVQAAAFUAAABVAAAAVQAAAFUAAABVAAAAVSEGAP8hBgD/IQYA/yEGAP8hBgD/g4B/VoOAf1aDgH9Wg4B/VoN/f3WDf3+Cg39/mIN/f5i5trWJuba1ib66unO+urpzxcC/UMXAv1DLxcQ/y8XEP8vFxD/LxcQ/y8XEP0QYAP9EGAD/RBgA/0QYAP9EGAD/RENDTkRDQ05EQ0NORENDTkRDQ04jIiJQIyIiUEUUAP9FFAD/RRQA/0oeAP9KHgD/Sh4A/yQDAP8kAwD/JAMA/yQDAP83JwT/NycE/zcnBP83JwT/NycE/xgLAP8YCwD/GAsA/wsFAP8LBQD/CwUA/wsFAP8AAABVAAAAVQAAAFUAAABVAAAAVQAAAFUiBQD/IgUA/yIFAP8iBQD/IgUA/4OAf1aDgH9Wg4B/VoOAf1aDf391g39/iIN/f5qDf3+auba1ibm2tYm8uLh+wr29ZcK9vWXFwcBZy8XEP8vFxD/LxcQ/y8XEP8TDwGrEw8BqLQAA/y0AAP8tAAD/LQAA/y0AAP9EQ0NORENDTkRDQ05EQ0NORENDTiMiIlBFFAD/RRQA/0UUAP9KHgD/Sh4A/yQCAP8kAgD/JAIA/yQCAP8kAgD/HAgA/xwIAP8cCAD/HAgA/xwIAP8YCwD/GAsA/xgLAP8LBQD/CwUA/wsFAP8LBQD/AAAAVQAAAFUAAABVAAAAVQAAAFUiBQD/IgUA/yIFAP8iBQD/IgUA/5OOjEODf39Zg39/WYN/f1mDf39Zg39/eIN/f46Df3+Og39/mrq4t4e6uLeHuri3h8G9vGvFwcBZxcHAWc/KyjfPyso3z8rKN8/KyjfEw8BqxMPAasTDwGotAAD/LQAA/y0AAP+JeWv/iXlr/wsAAL8LAAC/CwAAvwsAAL9DFAD/MgAA/zIAAP8yAAD/MgAA/zIAAP8kAgD/JAIA/yQCAP8kAgD/JAIA/xwIAP8cCAD/HAgA/xwIAP8cCAD/GAsA/xgLAP8YCwD/GAsA/xgLAP8YCwD/GAsA/wcDAPoHAwD6BwMA+gcDAPoHAwD6op2aQpCKh1uQiodbkIqHW5OOjEOTjoxDk46MQ4OAf1+DgH9fg39/bIN/f32Df3+Xg39/l4N/f5e6uLeJuri3ibq4t4m+u7t3xcHBW8XBwVvOysk3zsrJN87KyTfOysk3xMPAasTDwGrEw8BqvLm1hLy5tYS8ubWEiXlr/4l5a/+JeWv/CwAAvwsAAL9DFAD/QxQA/zIAAP8yAAD/MgAA/zIAAP8yAAD/JQEA/yUBAP8lAQD/JQEA/yUBAP8cCAD/HAgA/xwIAP8cCAD/HAgA/x0HAP8ZCgD/GQoA/xkKAP8ZCgD/GQoA/6qjn3cYCAD/GAgA/xgIAP8YCAD/op2aQqKdmkKRi4ddkYuHXZGLh12Ri4ddk46MQ4OAf2ODgH9jg4B/Y4N/f3CDf3+Eg39/mYN/f5mDf3+Zuri3ibq4t4m6uLeJvbq6f8TAwGDIxMNPyMTDT87JyTnOyck5zsnJOc7Pz0zOz89Mzs/PTMC+vHfAvrx3wL68d4l5a/+JeWv/iXlr/zgFAP9DFAD/QxQA/0MUAP85BAD/OQQA/1guEf9YLhH/MgAA/0coCv9HKAr/RygK/0coCv8rAAD/HQcA/x0HAP8dBwD/HQcA/x0HAP8dBwD/Sjwf/0o8H/8ZCgD/qqOfd6qjn3eqo593mpOOcpqTjnKak45yop2aQqKdmkKinZpCmZWVNpmVlTaZlZU2lpGRO5aRkTuWkZE7g39/Z4N/f2eDf391g39/kYN/f56Df3+eg39/nrq4t4m8urqEvLq6hLy6uoTCv79qyMTEUszHx0LOyck7zsnJO87JyTvOz89Mzs/PTM7Pz0zOz89Pzs/PT87Pz0/EzMp/xMzKf8TMyn/Dy8mEw8rJhsPKyYbDysmGOQQA/zkEAP8yAAD/MgAA/zIAAP/DyMeAw8jHgCYAAP8rAAD/KwAA/ysAAP8eBwD/HgcA/x0HAP8dBwD/HQcA/0o8H/9KPB//fnRj/6qjn3eqo593qqOfd66pqRyuqakcrqmpHKumph+rpqYfq6amH5mVlTaZlZU2mZWVNpaRkTuWkZE7hoKCZIaCgmSEgIBog39/fIN/f5aDf3+Wg39/noN/f567urqFu7q6hbu6uoW7urqFwL29dcXCwV/KxsVLzcjIP83IyD/NyMg/zcnJP8/Pz0rPz89Kz8/PSs/Pz0rPz89KyM7NccjOzXHIzs1xyM7NccPKyYbDysmGwMjGj8DIxo/AyMaPwMjGjsDIxo3AyMaNw8jHgMPIx4DDx8d9w8fGecPHxnnDx8Z5xcLCX8XCwl/FwcFYxcHBWMXBwVi/ubk6v7m5Or24uDa8trYxvLa2Mby2tjGuqakerqmpHq6pqR6rpqYgq6amIKumpiCZlZQ8mZWUPJmVlDyWkpJElpKSRIuHh1uGgoJkg39/c4N/f4eDf3+Yg39/mIN/f5iDf3+eu7q6hbu6uoW7urqFu7q6hb68vH3DwMBoycXFUczIyEPMyMhDzcnJP83JyT/Pz89Kz8/PSs/Pz0rPz89Kz8/PSsrPz2nKz89pys/PacrPz2nKz89mys/PZsDIxo/AyMaPwMjGj8TKyX7Eysl+wMjGjcPIx4DDyMeAxcjIdcXHx3LFx8dyxcfHcsfDw1XHw8NVx8LBTsfCwU7HwsFOv7m5Or+5uTq9uLgxvbi4Mby2tjG8trYxrqmoH66pqB+uqagfq6amIqumpiKrpqYimZSUQJmUlECZlJRAmZSUQI+Li1WLh4dbhYGBbYN/f3yDf3+Rg39/kYN/f5iDf3+Yg39/mLu6uoW7urqFvby7gL28u4C9vLuAwb+/ccfDw1vLx8dJzcnJP83JyT/Pyso6y8fGOtDPz0LQz89C0M/PQtDPz0LKz89pys/PacrPz2nKz89mys/PZsrPz2bAyMaPxszLdcbMy3XGzMt1xszLdcnMy2TGyMhqxsjIasbIyGrHx8dnx8fHZ8fHx2fHw8NQx8PDUMfCwkvHwsJLx8LCS7+6ujC/urowvri4Lr64uC6+uLguvLa2Ma6pqSGuqakhrqmpIaunpiSrp6Ykq6emJJiUlESYlJREmJSURJiUlESPi4tVioaGYoSAgHSDf3+Eg39/loN/f5aDf3+Wg39/mIN/f5i9vLuAvby7gL28u4C9vLuAvby7gL+9vXzEwcFnyMXFVM3JyELPyso6z8rKOsvHxjrQz84/0M/OP9DPzj/Qz84/0c7OO8zPz1/Mz89fzM/PX8zPz1/Mz89fzM/PX8jMzGvIzMxryMzMa8nMy2TJzMtkyczLZMjIyGTIyMhkyMjHYcjIx2HIyMdhyMPDScjDw0nHwsJGx8LCRsfCwka/ubkwv7m5ML24uCy9uLgsvbi4LL24uCytqagkramoJK2pqCStqagkq6emJKGcnDqblpZFm5aWRZeTk0qTj49QkIyMV4mFhWmEgIB7g39/kIN/f5CDf3+Wg39/loN/f5aDf3+Wvby7gL28u4C9vLuAvLy8hLy8vIS8vLyEwb+/csXDw2HKx8ZOzsrJP83JyTrLx8Y6y8fGOtHOzjvRzs470c7OO9HOzj3Nz89Xzc/PV83Pz1fNz89Xzc/PV87PzkzJzMxlyczMZcnMzGXJzMxlyczLZMnIyFzJyMhcycjIXMnIx1rJyMdaycjHWsjDw0XIw8NFx8LBQcfCwUHHwsFBv7m5Lb+5uS29t7cpvbe3Kb23tym0r64iraioKK2oqCitqKgoraioKKSgnzWhnJw6nZmZQZuWlkWXk5NMk4+PVI6KimGGg4J2g39/hoN/f5yDf3+cg39/nIN/f5aDf3+Wg39/lr28u4C8vLyEvLy8hLy8vIS8vLyEvLy8hL++vXzCwMBuxsTDX8vIx0nOyso9zcnJOc/LyznRzc050c7OO9HOzjvRzs490c7OPc7Pz1DOz89Qzs/PUM7PzkzOzs5Ozc3NUMrMzFzKzMxcyszLXcrMy13KzMtdysjIVcrIyFXKyMdTysjHU8rIx1PIwsJAyMLCQMfBwT3HwcE9x8HBPb65uSu+ubkrvbe3J723tye0r64itK+uIrSvriKuqakqrKenK6ynpyukoJ81oZycOp2ZmUGalpZIlpKSUpKOjV2Lh4ZuhYGBg4N/f5KDf3+Sg39/nIN/f5yDf3+cg39/nIN/f5a8vLyEvLy8hLy8vIS8vLyEvLy8hL++vXy/vr18wL+/d8PBwWvIxcVYzMjISM7Kyj3Py8s5zsrKOdHOzTnRzs470c7OPdHOzj3Qzs5Az8/OSs7PzkzOz85Mzs7OTs3NzVDNzc1RzMzMVMvMy1XLzMtVzMrKTMzJyUrLyMhOy8fHTMvHx0zJw8M7ycPDO8jCwjvGwcA4xsHAOMK9vC7Auroqvri4KLy3tia8t7YmtrGxI7SvriK0r64irqmpKqunpi6oo6MypJ+fOKCcm0CcmJhJmZSUU5WQkFyPi4toiISEeoSAgIuEgICLg39/koN/f5KDf3+cg39/nIN/f5yDf3+cvLy8hLy8vIS8vLyEvLy8hL++vXy/vr18wL+/d8C/v3fCwcBuxMLCacrGxlHMyMhHzsrKPcnGxTvPy8s50c7NOtHOzjzQzs4+0M7OQM3Ly0XPzs5Hzs7OTM7Ozk7Nzc1Qzc3NUczMzE/My8tOzMvKTszKykzMyclKzMjISMvHx0XLx8dFysTEOsnDwzvHwcE3xsDANMS+vjHCvbwuwLq6Kr64uCe7trUkuLOzI7axsSOzrq4lsaysKK6pqS2rpqYxp6OiNaOenj2fmppIm5eWU5eTk1uTj49li4eHeoeDg4mHg4OJhICAi4SAgIuDf3+Sg39/koN/f5yDf3+cg39/nLy8vIS8vLyEvLy8hL++vXy/vr18wL+/d8C/v3fCwcBuwsHAbsHAv3TFw8NkycbGU8zIyEbOyso+zMjIO8/LyzjRzc060M7NPNDOzj7Qzs0/0M7NQM/NzUPPzc1Ezs3MRc7MzEbOy8tFzsvLRc3KykXNyclEzcnIQ8zIx0HMx8ZAw729QcrExDrIw8I2xsHAM8W/vzDDvb0twby7Kr+5uSe9t7cmurW1JLiysiS1sLAms66tKLCrqyytqKgxqqWlNaahoTyhnZ1GnpmZUJiTk1uUkJBnj4uLd4mFhYyJhYWMh4ODiYeDg4mEgICLhICAi4N/f5KDf3+Sg39/nIN/f5y8vLyEvLy8hL++vXy/vr18wL+/d8C/v3fCwcBuwsHAbsHAv3TBwL90wL+/esbDw2HJxsZTzMjIR8fDw0LNyck90MzMONDNzTjQzc060M3NO8/MzDzQzc0+z83MQM/MzEDPzMtBzsvLQM7KykDOyspBzcnJQM3IxzvMx8Y5y8bFN8rFxDfCvLw5x8LBM8bAwDDEv74uwr28K8C7uim+ubgnvLe2Jrq0tCa3srIntK+vKrKtrC2uqqkypaCgO6ijozykn59Fn5qaTpyXl1yYk5Nnk4+Pc4yIiIKMiIiCiYWFjImFhYyHg4OJh4ODiYSAgIuEgICLg39/koN/f5KDf3+cvLy8hL++vXy/vr18wL+/d8C/v3fCwcBuwsHAbsHAv3TBwL90wL+/esC/v3rAv795xcPCY8jFxVTLx8dJzcnJQs/KyjvQy8s40MzLN8/LyzjJxcU7ycbFO8/MyzrPy8s7z8vLO87KyjvOyck6zsnJPM3IyDvMx8c2y8bFNMrExDPJw8Mxxb+/NsG7uzLFv78uw729K8G8uym/urkovLe3KLm0sym4s7MptbCwLLOuri+wq6szo5+ePaqlpT2moaFFoZ2cTZ6ZmVialZVnlZGRdJCMjH6QjIx+jIiIgoyIiIKJhYWMiYWFjIeDg4mHg4OJhICAi4SAgIuDf3+Sg39/kr++vXy/vr18wL+/d8C/v3fCwcBuwsHAbsHAv3TBwL90wL+/esC/v3rAv795wL+/ecC/vnjEwsFnx8TDXMnFxVHMyMdGzsnJPc/KyjjPy8o3zsrJN87JyTbPy8o2z8rKN8/KyjbMx8c3x8LCOM3IyDXNx8c2zMbGNLy3tze0r644x8LCLcfCwTDBu7sxtbCwMsG7uyvAuropvri4Kby2tiqxrKwvs66uMLSvrzOxrKw3rqmpOqumpkCoo6NIpJ+fT5+ammCblpZsl5OSdpKOjoOSjo6DkIyMfpCMjH6MiIiCjIiIgomFhYyJhYWMh4ODiYeDg4mEgICLhICAi4N/f5K/vr18wL+/d8C/v3fCwcBuwsHAbsHAv3TBwL90wL+/esC/v3rAv795wL+/ecC/vnjAv754vr29fcLAwG7FwsFjxsLCWMnFxU7Lx8ZEzcjIPM7JyTjMx8c3zsnJNc7JyTXOyMg0zsjIM83HxzLMx8YyzMbGMsvGxTLJw8Mux8HBLsbAwC3GwMAuxL++LcK9vSzAu7ssvrm5Lby3ty66tbQwt7KyMrWwrzeyra08r6qqQaynp0ioo6NRpJ+fW5+ammicl5dymJSTfJSQj4iUkI+Iko6Og5KOjoOQjIx+kIyMfoyIiIKMiIiCiYWFjImFhYyHg4OJh4ODiYSAgIuEgICLwL+/d8C/v3fCwcBuwsHAbsHAv3TBwL90wL+/esC/v3rAv795wL+/ecC/vnjAv754vr29fb69vX2+vb18wb++c8K/v23EwcBlx8PDVcnExEzKxcVFy8XFQcfCwj7MxsY3zMbGNcvGxTTLxcUzysTEMsrExDLKxMQyyMLCMcW/vzHDvb0wwLu6MMG7uzDAu7owvrm4M7y3tjW6tLQ4t7KyO7Svr0CyrKxFr6qqSqunplGoo6NZpJ+fY5+bm3CcmJh6mZWVgZmVlYGUkI+IlJCPiJSQj4iSjo6Dko6Og5CMjH6QjIx+jIiIgoyIiIKJhYWMiYWFjIeDg4mHg4OJhICAi8C/v3fCwcBuwsHAbsHAv3TBwL90wL+/esC/v3rAv795wL+/ecC/vnjAv754vr29fb69vX2+vb18vr29fMG/vnO+vLx7wL29dcG+vm3EwMBgxsHBWMbCwVLCvbxNycPDRsnDw0HIwsI+yMLCPMfBwTrGwcE4xcC/OcS/vjjDvr05wry8OsC7ujq+ubk7vLe3O7u2tj65tLNCt7KxRLSvr0mxrKxPrKenVKunplqoo6NhpKCfbKSgn2ydmJiDmpaWiJqWloiZlZWBlJCPiJSQj4iUkI+IlJCPiJKOjoOSjo6DkIyMfpCMjH6MiIiCjIiIgomFhYyJhYWMh4ODiYeDg4nCwcBuwsHAbsHAv3TBwL90wL+/esC/v3rAv795wL+/ecC/vnjAv754vr29fb69vX2+vb18vr29fL69vXy+vLx7vry8e7y6uoO8urqAvru7eMG9vWzCvr5kw7++Xru2tljFv79SxcC/TMS/v0rEvr5Hw76+RcO9vUTBvLtFwLq6Rr+5uUa9uLhHvLa2SLq0tEq4s7NMtrGwULSurlOxrKtYrqmpXaumpmWno6JtpJ+fdqCbm4KdmJiMm5eXjZuXl42alpaImpaWiJmVlYGUkI+IlJCPiJSQj4iUkI+Iko6Og5KOjoOQjIx+kIyMfoyIiIKMiIiCiYWFjImFhYyHg4OJwsHAbsHAv3TBwL90wL+/esC/v3rAv795wL+/ecC/vnjAv754vr29fb69vX2+vb18vr29fL69vXy+vLx7vry8e7y6uoO8urqDvLq6gL67u3jBvb1svbq5e766unW/u7tswby8Y8G8vF7Bu7tbwLu7V8C6ulW/urlUvrm4VL23t1S7trZVurW1Vrizs1i2sbFata+vXLKtrWCvq6plraioaqqlpXKmoaF8o56ehaOenoWgm5uCnZiYjJuXl42bl5eNm5eXjZqWloialpaIlJCPiJSQj4iUkI+IlJCPiJSQj4iSjo6Dko6Og5CMjH6QjIx+jIiIgoyIiIKJhYWMiYWFjMHAv3TBwL90wL+/esC/v3rAv795wL+/ecC/vnjAv754vr29fb69vX2+vb18vr29fL69vXy+vb18vry8e7y6uoO8urqDvLq6g7y6uoC+u7t4vbq5e726uXu5traIure2gru3t3q7t7d4vbi4bry3tm28trZou7a1Z7q1tWW5tLRluLOzZbaxsWe1r69qs66ua7GsrG+uqqlyq6amfKiko4CloaGIpaGhiKOenoWjnp6FoJubgp2YmIybl5eNm5eXjZuXl42bl5eNmpaWiJqWloiUkI+IlJCPiJSQj4iUkI+IlJCPiJKOjoOSjo6DkIyMfpCMjH6MiIiCjIiIgomFhYzBwL90wL+/esC/v3rAv795wL+/ecC/vnjAv754vr29fb69vX2+vb18vr29fL69vXy+vb18vry8e7y6uoO8urqDvLq6g7y6uoO8urqAvbq5e726uXu5traIuba2iLq3toK7t7d6u7e3eL24uG68t7Ztt7KyfraxsX22sLB8ta+vfLOurnyyra1+sKurgK+qqoGvqqqBrqqpcqumpnyopKOApaGhiKWhoYijnp6Fo56ehaOenoWdmJiMm5eXjZuXl42bl5eNm5eXjZuXl42alpaIlJCPiJSQj4iUkI+IlJCPiJSQj4iUkI+Iko6Og5KOjoOQjIx+kIyMfoyIiIKMiIiCwL+/esC/v3rAv795wL+/ecC/vnjAv754vr29fb69vX2+vb18vr29fL69vXy+vb18vr29fLy6uoO8urqDvLq6g7y6uoO8urqDvLq6gL26uXu5traIuba2iLm2toi6t7aCu7e3eru3t3i9uLhut7Kyfreysn62sbF9trCwfLWvr3yzrq58sq2tfrCrq4CvqqqBr6qqga6qqXKrpqZ8qKSjgKWhoYiloaGIpaGhiKOenoWjnp6FnZiYjJuXl42bl5eNm5eXjZuXl42bl5eNm5eXjZqWloiUkI+IlJCPiJSQj4iUkI+IlJCPiJSQj4iSjo6Dko6Og5CMjH6QjIx+jIiIgg==";var fg=dr,dg=Di,Ag={skin:Nl,feat:Rl,hair0:Il,hair1:zl,body:Ul,cap:Ol},Xo={};try{Xo={0:new URL("./miiMaleBody.glb",import.meta.url).href,1:new URL("./miiFemaleBody.glb",import.meta.url).href}}catch{Xo={}}var Bl=new WeakMap,Fl=null,Jo=null;async function pg(i){if(!i)throw new Error("fflResBuffer is required");let t=i instanceof Uint8Array?i:new Uint8Array(i),e=Bl.get(t);if(!e){let n=t.length+":"+t[4]+":"+t[1e3]+":"+t[t.length-1];Jo&&Fl===n?e=Jo:(e=await Ll(t,Ag,{glb:Xo}),Fl=n,Jo=e),Bl.set(t,e)}return e}var Zo=class i{constructor(t){this._d=t}static async create(t){return new i(ns.fromBytes(t))}static async random(t=Math.random){let e=new Uint8Array(74),n=(r,a,o)=>{for(let c=0;c<a;c++){let l=r+c,u=o>>a-1-c&1,A=128>>(l&7);e[l>>3]=e[l>>3]&~A|(u?A:0)}};for(let[r,[a,o]]of Object.entries(Di)){let c=Pn[r];c&&n(c[0],c[1],a+Math.floor(t()*(o-a+1)))}n(192,3,4);let s="Mii";for(let r=0;r<s.length;r++)e[2+r*2]=0,e[3+r*2]=s.charCodeAt(r),e[54+r*2]=0,e[55+r*2]=s.charCodeAt(r);return i.create(e)}get(t){return this._d.get(t)}set(t,e){this._d.set(t,e)}async encode(t){if(t!==dr.RCD)throw new Error("Unsupported format: "+t);return this._d.bytes()}async render(t,e={}){let n=await pg(e.fflResBuffer);{let o=e.deluxe??globalThis.NF_DELUXE??!0;Vi.value=o===!0?.15:typeof o=="number"?o:0}let s=e.size||512,r=e.ss??2;for(;r>1&&s*r>3072;)r--;let a=await n.render(this._d.params(),{size:s*r,maskRes:e.maskRes?Math.min(2048,e.maskRes*(r>1,1)):void 0,full:!!t,colors:Cl,...e.debug||{}});if(r>1){let o=document.createElement("canvas");o.width=o.height=s;let c=o.getContext("2d");c.imageSmoothingEnabled=!0,c.imageSmoothingQuality="high";let l=a,u=s*r;for(;u>s*2;){let A=document.createElement("canvas");u=Math.max(s,Math.round(u/2)),A.width=A.height=u;let d=A.getContext("2d");d.imageSmoothingQuality="high",d.drawImage(l,0,0,u,u),l=A}c.drawImage(l,0,0,s,s),a=o}return typeof e.onCanvas=="function"&&e.onCanvas(a),a}},r0={Mii:Zo,MiiFormats:fg,MiiRanges:dg};export{Zo as Mii,fg as MiiFormats,dg as MiiRanges,r0 as default};
