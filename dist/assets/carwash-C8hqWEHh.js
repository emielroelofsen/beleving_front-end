const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/timeline-editor-ALrsXsXF.js","assets/wensen-config-BhkFHgpr.js","assets/wensen-config-DLpicLy5.css"])))=>i.map(i=>d[i]);
import{J as Eo,l as Vs,S as $c,V as uu,n as hu,W as Qr,a as du,U as fu}from"./wensen-config-BhkFHgpr.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ao="160",pu=0,qo=1,mu=2,gu=0,Kc=1,ks=2,mn=3,Tt=0,Ut=1,Ht=2,Pn=0,Si=1,$o=2,Ko=3,Jo=4,_u=5,Yn=100,vu=101,xu=102,Qo=103,ea=104,bu=200,Su=201,yu=202,Mu=203,eo=204,to=205,Tu=206,Eu=207,Au=208,wu=209,Cu=210,Ru=211,Lu=212,Pu=213,Iu=214,Du=0,Uu=1,Nu=2,Ws=3,Ou=4,Fu=5,Bu=6,ku=7,Jc=0,zu=1,Gu=2,In=0,Hu=1,Vu=2,Wu=3,Qc=4,ju=5,Xu=6,ta="attached",Zu="detached",el=300,wi=301,Ci=302,no=303,io=304,Qs=306,On=1e3,Mt=1001,js=1002,pt=1003,so=1004,zs=1005,St=1006,tl=1007,Qn=1008,Dn=1009,Yu=1010,qu=1011,wo=1012,nl=1013,wn=1014,gn=1015,ns=1016,il=1017,sl=1018,Kn=1020,$u=1021,Bt=1023,Ku=1024,Ju=1025,Jn=1026,Ri=1027,Qu=1028,rl=1029,eh=1030,ol=1031,al=1033,lr=33776,ur=33777,hr=33778,dr=33779,na=35840,ia=35841,sa=35842,ra=35843,cl=36196,oa=37492,aa=37496,ca=37808,la=37809,ua=37810,ha=37811,da=37812,fa=37813,pa=37814,ma=37815,ga=37816,_a=37817,va=37818,xa=37819,ba=37820,Sa=37821,fr=36492,ya=36494,Ma=36495,th=36283,Ta=36284,Ea=36285,Aa=36286,is=2300,Li=2301,pr=2302,wa=2400,Ca=2401,Ra=2402,nh=2500,ih=0,ll=1,ro=2,ul=3e3,Un=3001,sh=3200,rh=3201,hl=0,oh=1,Vt="",qe="srgb",gt="srgb-linear",Co="display-p3",er="display-p3-linear",Xs="linear",tt="srgb",Zs="rec709",Ys="p3",ni=7680,La=519,ah=512,ch=513,lh=514,dl=515,uh=516,hh=517,dh=518,fh=519,oo=35044,Pa="300 es",ao=1035,_n=2e3,qs=2001;class Ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ia=1234567;const $i=Math.PI/180,Pi=180/Math.PI;function Jt(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[s&255]+vt[s>>8&255]+vt[s>>16&255]+vt[s>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}function yt(s,e,t){return Math.max(e,Math.min(t,s))}function Ro(s,e){return(s%e+e)%e}function ph(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function mh(s,e,t){return s!==e?(t-s)/(e-s):0}function Ki(s,e,t){return(1-t)*s+t*e}function gh(s,e,t,n){return Ki(s,e,1-Math.exp(-t*n))}function _h(s,e=1){return e-Math.abs(Ro(s,e*2)-e)}function vh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function xh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function bh(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Sh(s,e){return s+Math.random()*(e-s)}function yh(s){return s*(.5-Math.random())}function Mh(s){s!==void 0&&(Ia=s);let e=Ia+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Th(s){return s*$i}function Eh(s){return s*Pi}function co(s){return(s&s-1)===0&&s!==0}function Ah(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function $s(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function wh(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*u,c*d,o*l);break;case"YZY":s.set(c*d,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*d,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function tn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ye(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ch={DEG2RAD:$i,RAD2DEG:Pi,generateUUID:Jt,clamp:yt,euclideanModulo:Ro,mapLinear:ph,inverseLerp:mh,lerp:Ki,damp:gh,pingpong:_h,smoothstep:vh,smootherstep:xh,randInt:bh,randFloat:Sh,randFloatSpread:yh,seededRandom:Mh,degToRad:Th,radToDeg:Eh,isPowerOfTwo:co,ceilPowerOfTwo:Ah,floorPowerOfTwo:$s,setQuaternionFromProperEuler:wh,normalize:Ye,denormalize:tn};class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,n,i,r,a,o,c,l){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],S=i[1],v=i[4],b=i[7],E=i[2],y=i[5],w=i[8];return r[0]=a*_+o*S+c*E,r[3]=a*m+o*v+c*y,r[6]=a*p+o*b+c*w,r[1]=l*_+h*S+u*E,r[4]=l*m+h*v+u*y,r[7]=l*p+h*b+u*w,r[2]=d*_+f*S+g*E,r[5]=d*m+f*v+g*y,r[8]=d*p+f*b+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*r-o*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(mr.makeScale(e,t)),this}rotate(e){return this.premultiply(mr.makeRotation(-e)),this}translate(e,t){return this.premultiply(mr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mr=new Be;function fl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ss(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Rh(){const s=ss("canvas");return s.style.display="block",s}const Da={};function Ji(s){s in Da||(Da[s]=!0,console.warn(s))}const Ua=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Na=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ls={[gt]:{transfer:Xs,primaries:Zs,toReference:s=>s,fromReference:s=>s},[qe]:{transfer:tt,primaries:Zs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[er]:{transfer:Xs,primaries:Ys,toReference:s=>s.applyMatrix3(Na),fromReference:s=>s.applyMatrix3(Ua)},[Co]:{transfer:tt,primaries:Ys,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Na),fromReference:s=>s.applyMatrix3(Ua).convertLinearToSRGB()}},Lh=new Set([gt,er]),We={enabled:!0,_workingColorSpace:gt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Lh.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=ls[e].toReference,i=ls[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return ls[s].primaries},getTransfer:function(s){return s===Vt?Xs:ls[s].transfer}};function yi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function gr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ii;class pl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ii===void 0&&(ii=ss("canvas")),ii.width=e.width,ii.height=e.height;const n=ii.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ii}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ss("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=yi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yi(t[n]/255)*255):t[n]=yi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ph=0;class ml{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=Jt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(_r(i[a].image)):r.push(_r(i[a]))}else r=_r(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function _r(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?pl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ih=0;class mt extends Ni{constructor(e=mt.DEFAULT_IMAGE,t=mt.DEFAULT_MAPPING,n=Mt,i=Mt,r=St,a=Qn,o=Bt,c=Dn,l=mt.DEFAULT_ANISOTROPY,h=Vt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=Jt(),this.name="",this.source=new ml(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ji("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Un?qe:Vt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==el)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case On:e.x=e.x-Math.floor(e.x);break;case Mt:e.x=e.x<0?0:1;break;case js:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case On:e.y=e.y-Math.floor(e.y);break;case Mt:e.y=e.y<0?0:1;break;case js:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ji("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===qe?Un:ul}set encoding(e){Ji("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Un?qe:Vt}}mt.DEFAULT_IMAGE=null;mt.DEFAULT_MAPPING=el;mt.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,t=0,n=0,i=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,b=(f+1)/2,E=(p+1)/2,y=(h+d)/4,w=(u+_)/4,R=(g+m)/4;return v>b&&v>E?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=y/n,r=w/n):b>E?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=y/i,r=R/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=w/r,i=R/r),this.set(n,i,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((l+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dh extends Ni{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Ji("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Un?qe:Vt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:St,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new mt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ml(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends Dh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class gl extends mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=pt,this.minFilter=pt,this.wrapR=Mt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uh extends mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=pt,this.minFilter=pt,this.wrapR=Mt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-o;const p=c*d+l*f+h*g+u*_,S=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const E=Math.sqrt(v),y=Math.atan2(E,p*S);m=Math.sin(m*y)/E,o=Math.sin(o*y)/E}const b=o*S;if(c=c*m+d*b,l=l*m+f*b,h=h*m+g*b,u=u*m+_*b,m===1-o){const E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Oa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vr.copy(this).projectOnVector(e),this.sub(vr)}reflect(e){return this.sub(vr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vr=new I,Oa=new Fn;class Zt{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yt):Yt.fromBufferAttribute(r,a),Yt.applyMatrix4(e.matrixWorld),this.expandByPoint(Yt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),us.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),us.copy(n.boundingBox)),us.applyMatrix4(e.matrixWorld),this.union(us)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yt),Yt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gi),hs.subVectors(this.max,Gi),si.subVectors(e.a,Gi),ri.subVectors(e.b,Gi),oi.subVectors(e.c,Gi),xn.subVectors(ri,si),bn.subVectors(oi,ri),zn.subVectors(si,oi);let t=[0,-xn.z,xn.y,0,-bn.z,bn.y,0,-zn.z,zn.y,xn.z,0,-xn.x,bn.z,0,-bn.x,zn.z,0,-zn.x,-xn.y,xn.x,0,-bn.y,bn.x,0,-zn.y,zn.x,0];return!xr(t,si,ri,oi,hs)||(t=[1,0,0,0,1,0,0,0,1],!xr(t,si,ri,oi,hs))?!1:(ds.crossVectors(xn,bn),t=[ds.x,ds.y,ds.z],xr(t,si,ri,oi,hs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ln=[new I,new I,new I,new I,new I,new I,new I,new I],Yt=new I,us=new Zt,si=new I,ri=new I,oi=new I,xn=new I,bn=new I,zn=new I,Gi=new I,hs=new I,ds=new I,Gn=new I;function xr(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Gn.fromArray(s,r);const o=i.x*Math.abs(Gn.x)+i.y*Math.abs(Gn.y)+i.z*Math.abs(Gn.z),c=e.dot(Gn),l=t.dot(Gn),h=n.dot(Gn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Nh=new Zt,Hi=new I,br=new I;class rn{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Nh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hi.subVectors(e,this.center);const t=Hi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Hi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(br.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hi.copy(e.center).add(br)),this.expandByPoint(Hi.copy(e.center).sub(br))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const un=new I,Sr=new I,fs=new I,Sn=new I,yr=new I,ps=new I,Mr=new I;class tr{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.origin).addScaledVector(this.direction,t),un.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Sr.copy(e).add(t).multiplyScalar(.5),fs.copy(t).sub(e).normalize(),Sn.copy(this.origin).sub(Sr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(fs),o=Sn.dot(this.direction),c=-Sn.dot(fs),l=Sn.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Sr).addScaledVector(fs,d),f}intersectSphere(e,t){un.subVectors(e.center,this.origin);const n=un.dot(this.direction),i=un.dot(un)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,n,i,r){yr.subVectors(t,e),ps.subVectors(n,e),Mr.crossVectors(yr,ps);let a=this.direction.dot(Mr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Sn.subVectors(this.origin,e);const c=o*this.direction.dot(ps.crossVectors(Sn,ps));if(c<0)return null;const l=o*this.direction.dot(yr.cross(Sn));if(l<0||c+l>a)return null;const h=-o*Sn.dot(Mr);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(e,t,n,i,r,a,o,c,l,h,u,d,f,g,_,m){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,u,d,f,g,_,m)}set(e,t,n,i,r,a,o,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ai.setFromMatrixColumn(e,0).length(),r=1/ai.setFromMatrixColumn(e,1).length(),a=1/ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Oh,e,Fh)}lookAt(e,t,n){const i=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),yn.crossVectors(n,Ot),yn.lengthSq()===0&&(Math.abs(n.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),yn.crossVectors(n,Ot)),yn.normalize(),ms.crossVectors(Ot,yn),i[0]=yn.x,i[4]=ms.x,i[8]=Ot.x,i[1]=yn.y,i[5]=ms.y,i[9]=Ot.y,i[2]=yn.z,i[6]=ms.z,i[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],S=n[3],v=n[7],b=n[11],E=n[15],y=i[0],w=i[4],R=i[8],x=i[12],M=i[1],D=i[5],G=i[9],J=i[13],P=i[2],N=i[6],H=i[10],X=i[14],W=i[3],j=i[7],Z=i[11],ee=i[15];return r[0]=a*y+o*M+c*P+l*W,r[4]=a*w+o*D+c*N+l*j,r[8]=a*R+o*G+c*H+l*Z,r[12]=a*x+o*J+c*X+l*ee,r[1]=h*y+u*M+d*P+f*W,r[5]=h*w+u*D+d*N+f*j,r[9]=h*R+u*G+d*H+f*Z,r[13]=h*x+u*J+d*X+f*ee,r[2]=g*y+_*M+m*P+p*W,r[6]=g*w+_*D+m*N+p*j,r[10]=g*R+_*G+m*H+p*Z,r[14]=g*x+_*J+m*X+p*ee,r[3]=S*y+v*M+b*P+E*W,r[7]=S*w+v*D+b*N+E*j,r[11]=S*R+v*G+b*H+E*Z,r[15]=S*x+v*J+b*X+E*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*u-i*l*u-r*o*d+n*l*d+i*o*f-n*c*f)+_*(+t*c*f-t*l*d+r*a*d-i*a*f+i*l*h-r*c*h)+m*(+t*l*u-t*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-i*o*h-t*c*u+t*o*d+i*a*u-n*a*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=u*m*l-_*d*l+_*c*f-o*m*f-u*c*p+o*d*p,v=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,b=h*_*l-g*u*l+g*o*f-a*_*f-h*o*p+a*u*p,E=g*u*c-h*_*c-g*o*d+a*_*d+h*o*m-a*u*m,y=t*S+n*v+i*b+r*E;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/y;return e[0]=S*w,e[1]=(_*d*r-u*m*r-_*i*f+n*m*f+u*i*p-n*d*p)*w,e[2]=(o*m*r-_*c*r+_*i*l-n*m*l-o*i*p+n*c*p)*w,e[3]=(u*c*r-o*d*r-u*i*l+n*d*l+o*i*f-n*c*f)*w,e[4]=v*w,e[5]=(h*m*r-g*d*r+g*i*f-t*m*f-h*i*p+t*d*p)*w,e[6]=(g*c*r-a*m*r-g*i*l+t*m*l+a*i*p-t*c*p)*w,e[7]=(a*d*r-h*c*r+h*i*l-t*d*l-a*i*f+t*c*f)*w,e[8]=b*w,e[9]=(g*u*r-h*_*r-g*n*f+t*_*f+h*n*p-t*u*p)*w,e[10]=(a*_*r-g*o*r+g*n*l-t*_*l-a*n*p+t*o*p)*w,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*f-t*o*f)*w,e[12]=E*w,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*w,e[14]=(g*o*i-a*_*i-g*n*c+t*_*c+a*n*m-t*o*m)*w,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*d+t*o*d)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,S=c*l,v=c*h,b=c*u,E=n.x,y=n.y,w=n.z;return i[0]=(1-(_+p))*E,i[1]=(f+b)*E,i[2]=(g-v)*E,i[3]=0,i[4]=(f-b)*y,i[5]=(1-(d+p))*y,i[6]=(m+S)*y,i[7]=0,i[8]=(g+v)*w,i[9]=(m-S)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ai.set(i[0],i[1],i[2]).length();const a=ai.set(i[4],i[5],i[6]).length(),o=ai.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],qt.copy(this);const l=1/r,h=1/a,u=1/o;return qt.elements[0]*=l,qt.elements[1]*=l,qt.elements[2]*=l,qt.elements[4]*=h,qt.elements[5]*=h,qt.elements[6]*=h,qt.elements[8]*=u,qt.elements[9]*=u,qt.elements[10]*=u,t.setFromRotationMatrix(qt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=_n){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(o===_n)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===qs)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=_n){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(a-r),d=(t+e)*l,f=(n+i)*h;let g,_;if(o===_n)g=(a+r)*u,_=-2*u;else if(o===qs)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ai=new I,qt=new ke,Oh=new I(0,0,0),Fh=new I(1,1,1),yn=new I,ms=new I,Ot=new I,Fa=new ke,Ba=new Fn;class nr{constructor(e=0,t=0,n=0,i=nr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ba.setFromEuler(this),this.setFromQuaternion(Ba,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nr.DEFAULT_ORDER="XYZ";class _l{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bh=0;const ka=new I,ci=new Fn,hn=new ke,gs=new I,Vi=new I,kh=new I,zh=new Fn,za=new I(1,0,0),Ga=new I(0,1,0),Ha=new I(0,0,1),Gh={type:"added"},Hh={type:"removed"};class st extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bh++}),this.uuid=Jt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=st.DEFAULT_UP.clone();const e=new I,t=new nr,n=new Fn,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ke},normalMatrix:{value:new Be}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=st.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ci.setFromAxisAngle(e,t),this.quaternion.multiply(ci),this}rotateOnWorldAxis(e,t){return ci.setFromAxisAngle(e,t),this.quaternion.premultiply(ci),this}rotateX(e){return this.rotateOnAxis(za,e)}rotateY(e){return this.rotateOnAxis(Ga,e)}rotateZ(e){return this.rotateOnAxis(Ha,e)}translateOnAxis(e,t){return ka.copy(e).applyQuaternion(this.quaternion),this.position.add(ka.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(za,e)}translateY(e){return this.translateOnAxis(Ga,e)}translateZ(e){return this.translateOnAxis(Ha,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gs.copy(e):gs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(Vi,gs,this.up):hn.lookAt(gs,Vi,this.up),this.quaternion.setFromRotationMatrix(hn),i&&(hn.extractRotation(i.matrixWorld),ci.setFromRotationMatrix(hn),this.quaternion.premultiply(ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Gh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hh)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,e,kh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,zh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}st.DEFAULT_UP=new I(0,1,0);st.DEFAULT_MATRIX_AUTO_UPDATE=!0;st.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $t=new I,dn=new I,Tr=new I,fn=new I,li=new I,ui=new I,Va=new I,Er=new I,Ar=new I,wr=new I;let _s=!1;class Kt{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),$t.subVectors(e,t),i.cross($t);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){$t.subVectors(i,t),dn.subVectors(n,t),Tr.subVectors(e,t);const a=$t.dot($t),o=$t.dot(dn),c=$t.dot(Tr),l=dn.dot(dn),h=dn.dot(Tr),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getUV(e,t,n,i,r,a,o,c){return _s===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_s=!0),this.getInterpolation(e,t,n,i,r,a,o,c)}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,fn.x),c.addScaledVector(a,fn.y),c.addScaledVector(o,fn.z),c)}static isFrontFacing(e,t,n,i){return $t.subVectors(n,t),dn.subVectors(e,t),$t.cross(dn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),$t.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return _s===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),_s=!0),Kt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return Kt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Kt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;li.subVectors(i,n),ui.subVectors(r,n),Er.subVectors(e,n);const c=li.dot(Er),l=ui.dot(Er);if(c<=0&&l<=0)return t.copy(n);Ar.subVectors(e,i);const h=li.dot(Ar),u=ui.dot(Ar);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(li,a);wr.subVectors(e,r);const f=li.dot(wr),g=ui.dot(wr);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(ui,o);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Va.subVectors(r,i),o=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Va,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(li,a).addScaledVector(ui,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},vs={h:0,s:0,l:0};function Cr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=We.workingColorSpace){if(e=Ro(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Cr(a,r,e+1/3),this.g=Cr(a,r,e),this.b=Cr(a,r,e-1/3)}return We.toWorkingColorSpace(this,i),this}setStyle(e,t=qe){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qe){const n=vl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qe){return We.fromWorkingColorSpace(xt.copy(this),e),Math.round(yt(xt.r*255,0,255))*65536+Math.round(yt(xt.g*255,0,255))*256+Math.round(yt(xt.b*255,0,255))}getHexString(e=qe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.fromWorkingColorSpace(xt.copy(this),t);const n=xt.r,i=xt.g,r=xt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=We.workingColorSpace){return We.fromWorkingColorSpace(xt.copy(this),t),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=qe){We.fromWorkingColorSpace(xt.copy(this),e);const t=xt.r,n=xt.g,i=xt.b;return e!==qe?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Mn),this.setHSL(Mn.h+e,Mn.s+t,Mn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mn),e.getHSL(vs);const n=Ki(Mn.h,vs.h,t),i=Ki(Mn.s,vs.s,t),r=Ki(Mn.l,vs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xt=new Te;Te.NAMES=vl;let Vh=0;class sn extends Ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=Jt(),this.name="",this.type="Material",this.blending=Si,this.side=Tt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eo,this.blendDst=to,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=La,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==Tt&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==eo&&(n.blendSrc=this.blendSrc),this.blendDst!==to&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==La&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Cn extends sn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new I,xs=new He;class It{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=oo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xs.fromBufferAttribute(this,t),xs.applyMatrix3(e),this.setXY(t,xs.x,xs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ye(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array),r=Ye(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oo&&(e.usage=this.usage),e}}class xl extends It{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bl extends It{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Xt extends It{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Wh=0;const zt=new ke,Rr=new st,hi=new I,Ft=new Zt,Wi=new Zt,ft=new I;class on extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=Jt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fl(e)?bl:xl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,n){return zt.makeTranslation(e,t,n),this.applyMatrix4(zt),this}scale(e,t,n){return zt.makeScale(e,t,n),this.applyMatrix4(zt),this}lookAt(e){return Rr.lookAt(e),Rr.updateMatrix(),this.applyMatrix4(Rr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hi).negate(),this.translate(hi.x,hi.y,hi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Xt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Ft.setFromBufferAttribute(r),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Wi.setFromBufferAttribute(o),this.morphTargetsRelative?(ft.addVectors(Ft.min,Wi.min),Ft.expandByPoint(ft),ft.addVectors(Ft.max,Wi.max),Ft.expandByPoint(ft)):(Ft.expandByPoint(Wi.min),Ft.expandByPoint(Wi.max))}Ft.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)ft.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ft));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ft.fromBufferAttribute(o,l),c&&(hi.fromBufferAttribute(e,l),ft.add(hi)),i=Math.max(i,n.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let M=0;M<o;M++)l[M]=new I,h[M]=new I;const u=new I,d=new I,f=new I,g=new He,_=new He,m=new He,p=new I,S=new I;function v(M,D,G){u.fromArray(i,M*3),d.fromArray(i,D*3),f.fromArray(i,G*3),g.fromArray(a,M*2),_.fromArray(a,D*2),m.fromArray(a,G*2),d.sub(u),f.sub(u),_.sub(g),m.sub(g);const J=1/(_.x*m.y-m.x*_.y);isFinite(J)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(J),S.copy(f).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(J),l[M].add(p),l[D].add(p),l[G].add(p),h[M].add(S),h[D].add(S),h[G].add(S))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let M=0,D=b.length;M<D;++M){const G=b[M],J=G.start,P=G.count;for(let N=J,H=J+P;N<H;N+=3)v(n[N+0],n[N+1],n[N+2])}const E=new I,y=new I,w=new I,R=new I;function x(M){w.fromArray(r,M*3),R.copy(w);const D=l[M];E.copy(D),E.sub(w.multiplyScalar(w.dot(D))).normalize(),y.crossVectors(R,D);const J=y.dot(h[M])<0?-1:1;c[M*4]=E.x,c[M*4+1]=E.y,c[M*4+2]=E.z,c[M*4+3]=J}for(let M=0,D=b.length;M<D;++M){const G=b[M],J=G.start,P=G.count;for(let N=J,H=J+P;N<H;N+=3)x(n[N+0]),x(n[N+1]),x(n[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new It(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new on,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wa=new ke,Hn=new tr,bs=new rn,ja=new I,di=new I,fi=new I,pi=new I,Lr=new I,Ss=new I,ys=new He,Ms=new He,Ts=new He,Xa=new I,Za=new I,Ya=new I,Es=new I,As=new I;class jt extends st{constructor(e=new on,t=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Ss.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Lr.fromBufferAttribute(u,e),a?Ss.addScaledVector(Lr,h):Ss.addScaledVector(Lr.sub(t),h))}t.add(Ss)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(r),Hn.copy(e.ray).recast(e.near),!(bs.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(bs,ja)===null||Hn.origin.distanceToSquared(ja)>(e.far-e.near)**2))&&(Wa.copy(r).invert(),Hn.copy(e.ray).applyMatrix4(Wa),!(n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=S,E=v;b<E;b+=3){const y=o.getX(b),w=o.getX(b+1),R=o.getX(b+2);i=ws(this,p,e,n,l,h,u,y,w,R),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=o.getX(m),v=o.getX(m+1),b=o.getX(m+2);i=ws(this,a,e,n,l,h,u,S,v,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let b=S,E=v;b<E;b+=3){const y=b,w=b+1,R=b+2;i=ws(this,p,e,n,l,h,u,y,w,R),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=m,v=m+1,b=m+2;i=ws(this,a,e,n,l,h,u,S,v,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function jh(s,e,t,n,i,r,a,o){let c;if(e.side===Ut?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Tt,o),c===null)return null;As.copy(o),As.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(As);return l<t.near||l>t.far?null:{distance:l,point:As.clone(),object:s}}function ws(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,di),s.getVertexPosition(c,fi),s.getVertexPosition(l,pi);const h=jh(s,e,t,n,di,fi,pi,Es);if(h){i&&(ys.fromBufferAttribute(i,o),Ms.fromBufferAttribute(i,c),Ts.fromBufferAttribute(i,l),h.uv=Kt.getInterpolation(Es,di,fi,pi,ys,Ms,Ts,new He)),r&&(ys.fromBufferAttribute(r,o),Ms.fromBufferAttribute(r,c),Ts.fromBufferAttribute(r,l),h.uv1=Kt.getInterpolation(Es,di,fi,pi,ys,Ms,Ts,new He),h.uv2=h.uv1),a&&(Xa.fromBufferAttribute(a,o),Za.fromBufferAttribute(a,c),Ya.fromBufferAttribute(a,l),h.normal=Kt.getInterpolation(Es,di,fi,pi,Xa,Za,Ya,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new I,materialIndex:0};Kt.getNormal(di,fi,pi,u.normal),h.face=u}return h}class rs extends on{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(u,2));function g(_,m,p,S,v,b,E,y,w,R,x){const M=b/w,D=E/R,G=b/2,J=E/2,P=y/2,N=w+1,H=R+1;let X=0,W=0;const j=new I;for(let Z=0;Z<H;Z++){const ee=Z*D-J;for(let ce=0;ce<N;ce++){const V=ce*M-G;j[_]=V*S,j[m]=ee*v,j[p]=P,l.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[p]=y>0?1:-1,h.push(j.x,j.y,j.z),u.push(ce/w),u.push(1-Z/R),X+=1}}for(let Z=0;Z<R;Z++)for(let ee=0;ee<w;ee++){const ce=d+ee+N*Z,V=d+ee+N*(Z+1),Y=d+(ee+1)+N*(Z+1),oe=d+(ee+1)+N*Z;c.push(ce,V,oe),c.push(V,Y,oe),W+=6}o.addGroup(f,W,x),f+=W,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ii(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Lt(s){const e={};for(let t=0;t<s.length;t++){const n=Ii(s[t]);for(const i in n)e[i]=n[i]}return e}function Xh(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Sl(s){return s.getRenderTarget()===null?s.outputColorSpace:We.workingColorSpace}const Zh={clone:Ii,merge:Lt};var Yh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dt extends sn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yh,this.fragmentShader=qh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.uniformsGroups=Xh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class yl extends st{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=_n}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pt extends yl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Pi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($i*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pi*2*Math.atan(Math.tan($i*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($i*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mi=-90,gi=1;class $h extends st{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Pt(mi,gi,e,t);i.layers=this.layers,this.add(i);const r=new Pt(mi,gi,e,t);r.layers=this.layers,this.add(r);const a=new Pt(mi,gi,e,t);a.layers=this.layers,this.add(a);const o=new Pt(mi,gi,e,t);o.layers=this.layers,this.add(o);const c=new Pt(mi,gi,e,t);c.layers=this.layers,this.add(c);const l=new Pt(mi,gi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===_n)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ml extends mt{constructor(e,t,n,i,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:wi,super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kh extends ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Ji("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Un?qe:Vt),this.texture=new Ml(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:St}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new rs(5,5,5),r=new Dt({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:Pn});r.uniforms.tEquirect.value=t;const a=new jt(i,r),o=t.minFilter;return t.minFilter===Qn&&(t.minFilter=St),new $h(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Pr=new I,Jh=new I,Qh=new Be;class Xn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Pr.subVectors(n,t).cross(Jh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Pr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Qh.getNormalMatrix(e),i=this.coplanarPoint(Pr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vn=new rn,Cs=new I;class Lo{constructor(e=new Xn,t=new Xn,n=new Xn,i=new Xn,r=new Xn,a=new Xn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_n){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],S=i[13],v=i[14],b=i[15];if(n[0].setComponents(c-r,d-l,m-f,b-p).normalize(),n[1].setComponents(c+r,d+l,m+f,b+p).normalize(),n[2].setComponents(c+a,d+h,m+g,b+S).normalize(),n[3].setComponents(c-a,d-h,m-g,b-S).normalize(),n[4].setComponents(c-o,d-u,m-_,b-v).normalize(),t===_n)n[5].setComponents(c+o,d+u,m+_,b+v).normalize();else if(t===qs)n[5].setComponents(o,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(e){return Vn.center.set(0,0,0),Vn.radius=.7071067811865476,Vn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Cs.x=i.normal.x>0?e.max.x:e.min.x,Cs.y=i.normal.y>0?e.max.y:e.min.y,Cs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Cs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tl(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function ed(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const u=l.array,d=l.usage,f=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,d),l.onUploadCallback();let _;if(u instanceof Float32Array)_=s.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=s.SHORT;else if(u instanceof Uint32Array)_=s.UNSIGNED_INT;else if(u instanceof Int32Array)_=s.INT;else if(u instanceof Int8Array)_=s.BYTE;else if(u instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,u){const d=h.array,f=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,l),f.count===-1&&g.length===0&&s.bufferSubData(u,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){const p=g[_];t?s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):s.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);if(u===void 0)n.set(l,i(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}class Po extends on{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const S=p*d-a;for(let v=0;v<l;v++){const b=v*u-r;g.push(b,-S,0),_.push(0,0,1),m.push(v/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<o;S++){const v=S+l*p,b=S+l*(p+1),E=S+1+l*(p+1),y=S+1+l*p;f.push(v,b,y),f.push(b,E,y)}this.setIndex(f),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(_,3)),this.setAttribute("uv",new Xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.width,e.height,e.widthSegments,e.heightSegments)}}var td=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nd=`#ifdef USE_ALPHAHASH
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
#endif`,id=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,od=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ad=`#ifdef USE_AOMAP
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
#endif`,cd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ld=`#ifdef USE_BATCHING
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
#endif`,ud=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,hd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pd=`#ifdef USE_IRIDESCENCE
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
#endif`,md=`#ifdef USE_BUMPMAP
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
#endif`,gd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Md=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Td=`#define PI 3.141592653589793
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
} // validated`,Ed=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ad=`vec3 transformedNormal = objectNormal;
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
#endif`,wd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ld=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Id=`
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
}`,Dd=`#ifdef USE_ENVMAP
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
#endif`,Ud=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nd=`#ifdef USE_ENVMAP
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
#endif`,Od=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fd=`#ifdef USE_ENVMAP
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
#endif`,Bd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hd=`#ifdef USE_GRADIENTMAP
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
}`,Vd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Wd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zd=`uniform bool receiveShadow;
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
#endif`,Yd=`#ifdef USE_ENVMAP
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
#endif`,qd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$d=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qd=`PhysicalMaterial material;
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
#endif`,ef=`struct PhysicalMaterial {
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
}`,tf=`
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
#endif`,nf=`#if defined( RE_IndirectDiffuse )
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
#endif`,sf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,of=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,af=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,cf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,df=`#if defined( USE_POINTS_UV )
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
#endif`,ff=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gf=`#ifdef USE_MORPHNORMALS
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
#endif`,_f=`#ifdef USE_MORPHTARGETS
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
#endif`,vf=`#ifdef USE_MORPHTARGETS
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
#endif`,xf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tf=`#ifdef USE_NORMALMAP
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
#endif`,Ef=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Af=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,If=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Df=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Uf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Of=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ff=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zf=`float getShadowMask() {
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
}`,Gf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hf=`#ifdef USE_SKINNING
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
#endif`,Vf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wf=`#ifdef USE_SKINNING
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
#endif`,jf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qf=`#ifdef USE_TRANSMISSION
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
#endif`,$f=`#ifdef USE_TRANSMISSION
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
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ep=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,np=`uniform sampler2D t2D;
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
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,op=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ap=`#include <common>
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
}`,cp=`#if DEPTH_PACKING == 3200
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
}`,lp=`#define DISTANCE
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
}`,up=`#define DISTANCE
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
}`,hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fp=`uniform float scale;
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
}`,pp=`uniform vec3 diffuse;
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
}`,mp=`#include <common>
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
}`,gp=`uniform vec3 diffuse;
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
}`,_p=`#define LAMBERT
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
}`,vp=`#define LAMBERT
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
}`,xp=`#define MATCAP
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
}`,bp=`#define MATCAP
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
}`,Sp=`#define NORMAL
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
}`,yp=`#define NORMAL
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
}`,Mp=`#define PHONG
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
}`,Tp=`#define PHONG
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
}`,Ep=`#define STANDARD
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
}`,Ap=`#define STANDARD
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
}`,wp=`#define TOON
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
}`,Cp=`#define TOON
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
}`,Rp=`uniform float size;
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
}`,Lp=`uniform vec3 diffuse;
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
}`,Pp=`#include <common>
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
}`,Ip=`uniform vec3 color;
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
}`,Dp=`uniform float rotation;
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
}`,Up=`uniform vec3 diffuse;
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
}`,Ie={alphahash_fragment:td,alphahash_pars_fragment:nd,alphamap_fragment:id,alphamap_pars_fragment:sd,alphatest_fragment:rd,alphatest_pars_fragment:od,aomap_fragment:ad,aomap_pars_fragment:cd,batching_pars_vertex:ld,batching_vertex:ud,begin_vertex:hd,beginnormal_vertex:dd,bsdfs:fd,iridescence_fragment:pd,bumpmap_pars_fragment:md,clipping_planes_fragment:gd,clipping_planes_pars_fragment:_d,clipping_planes_pars_vertex:vd,clipping_planes_vertex:xd,color_fragment:bd,color_pars_fragment:Sd,color_pars_vertex:yd,color_vertex:Md,common:Td,cube_uv_reflection_fragment:Ed,defaultnormal_vertex:Ad,displacementmap_pars_vertex:wd,displacementmap_vertex:Cd,emissivemap_fragment:Rd,emissivemap_pars_fragment:Ld,colorspace_fragment:Pd,colorspace_pars_fragment:Id,envmap_fragment:Dd,envmap_common_pars_fragment:Ud,envmap_pars_fragment:Nd,envmap_pars_vertex:Od,envmap_physical_pars_fragment:Yd,envmap_vertex:Fd,fog_vertex:Bd,fog_pars_vertex:kd,fog_fragment:zd,fog_pars_fragment:Gd,gradientmap_pars_fragment:Hd,lightmap_fragment:Vd,lightmap_pars_fragment:Wd,lights_lambert_fragment:jd,lights_lambert_pars_fragment:Xd,lights_pars_begin:Zd,lights_toon_fragment:qd,lights_toon_pars_fragment:$d,lights_phong_fragment:Kd,lights_phong_pars_fragment:Jd,lights_physical_fragment:Qd,lights_physical_pars_fragment:ef,lights_fragment_begin:tf,lights_fragment_maps:nf,lights_fragment_end:sf,logdepthbuf_fragment:rf,logdepthbuf_pars_fragment:of,logdepthbuf_pars_vertex:af,logdepthbuf_vertex:cf,map_fragment:lf,map_pars_fragment:uf,map_particle_fragment:hf,map_particle_pars_fragment:df,metalnessmap_fragment:ff,metalnessmap_pars_fragment:pf,morphcolor_vertex:mf,morphnormal_vertex:gf,morphtarget_pars_vertex:_f,morphtarget_vertex:vf,normal_fragment_begin:xf,normal_fragment_maps:bf,normal_pars_fragment:Sf,normal_pars_vertex:yf,normal_vertex:Mf,normalmap_pars_fragment:Tf,clearcoat_normal_fragment_begin:Ef,clearcoat_normal_fragment_maps:Af,clearcoat_pars_fragment:wf,iridescence_pars_fragment:Cf,opaque_fragment:Rf,packing:Lf,premultiplied_alpha_fragment:Pf,project_vertex:If,dithering_fragment:Df,dithering_pars_fragment:Uf,roughnessmap_fragment:Nf,roughnessmap_pars_fragment:Of,shadowmap_pars_fragment:Ff,shadowmap_pars_vertex:Bf,shadowmap_vertex:kf,shadowmask_pars_fragment:zf,skinbase_vertex:Gf,skinning_pars_vertex:Hf,skinning_vertex:Vf,skinnormal_vertex:Wf,specularmap_fragment:jf,specularmap_pars_fragment:Xf,tonemapping_fragment:Zf,tonemapping_pars_fragment:Yf,transmission_fragment:qf,transmission_pars_fragment:$f,uv_pars_fragment:Kf,uv_pars_vertex:Jf,uv_vertex:Qf,worldpos_vertex:ep,background_vert:tp,background_frag:np,backgroundCube_vert:ip,backgroundCube_frag:sp,cube_vert:rp,cube_frag:op,depth_vert:ap,depth_frag:cp,distanceRGBA_vert:lp,distanceRGBA_frag:up,equirect_vert:hp,equirect_frag:dp,linedashed_vert:fp,linedashed_frag:pp,meshbasic_vert:mp,meshbasic_frag:gp,meshlambert_vert:_p,meshlambert_frag:vp,meshmatcap_vert:xp,meshmatcap_frag:bp,meshnormal_vert:Sp,meshnormal_frag:yp,meshphong_vert:Mp,meshphong_frag:Tp,meshphysical_vert:Ep,meshphysical_frag:Ap,meshtoon_vert:wp,meshtoon_frag:Cp,points_vert:Rp,points_frag:Lp,shadow_vert:Pp,shadow_frag:Ip,sprite_vert:Dp,sprite_frag:Up},ne={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},en={basic:{uniforms:Lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Lt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Lt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Lt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Lt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Lt([ne.points,ne.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Lt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Lt([ne.common,ne.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Lt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Lt([ne.sprite,ne.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Lt([ne.common,ne.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Lt([ne.lights,ne.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};en.physical={uniforms:Lt([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Rs={r:0,b:0,g:0};function Np(s,e,t,n,i,r,a){const o=new Te(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(m,p){let S=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,c):v&&v.isColor&&(_(v,1),S=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Qs)?(h===void 0&&(h=new jt(new rs(1,1,1),new Dt({name:"BackgroundCubeMaterial",uniforms:Ii(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,y,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=We.getTransfer(v.colorSpace)!==tt,(u!==v||d!==v.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new jt(new Po(2,2),new Dt({name:"BackgroundMaterial",uniforms:Ii(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=We.getTransfer(v.colorSpace)!==tt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,p){m.getRGB(Rs,Sl(s)),n.buffers.color.setClear(Rs.r,Rs.g,Rs.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(o,c)},render:g}}function Op(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null);let l=c,h=!1;function u(P,N,H,X,W){let j=!1;if(a){const Z=_(X,H,N);l!==Z&&(l=Z,f(l.object)),j=p(P,X,H,W),j&&S(P,X,H,W)}else{const Z=N.wireframe===!0;(l.geometry!==X.id||l.program!==H.id||l.wireframe!==Z)&&(l.geometry=X.id,l.program=H.id,l.wireframe=Z,j=!0)}W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(j||h)&&(h=!1,R(P,N,H,X),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,N,H){const X=H.wireframe===!0;let W=o[P.id];W===void 0&&(W={},o[P.id]=W);let j=W[N.id];j===void 0&&(j={},W[N.id]=j);let Z=j[X];return Z===void 0&&(Z=m(d()),j[X]=Z),Z}function m(P){const N=[],H=[],X=[];for(let W=0;W<i;W++)N[W]=0,H[W]=0,X[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:X,object:P,attributes:{},index:null}}function p(P,N,H,X){const W=l.attributes,j=N.attributes;let Z=0;const ee=H.getAttributes();for(const ce in ee)if(ee[ce].location>=0){const Y=W[ce];let oe=j[ce];if(oe===void 0&&(ce==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),ce==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor)),Y===void 0||Y.attribute!==oe||oe&&Y.data!==oe.data)return!0;Z++}return l.attributesNum!==Z||l.index!==X}function S(P,N,H,X){const W={},j=N.attributes;let Z=0;const ee=H.getAttributes();for(const ce in ee)if(ee[ce].location>=0){let Y=j[ce];Y===void 0&&(ce==="instanceMatrix"&&P.instanceMatrix&&(Y=P.instanceMatrix),ce==="instanceColor"&&P.instanceColor&&(Y=P.instanceColor));const oe={};oe.attribute=Y,Y&&Y.data&&(oe.data=Y.data),W[ce]=oe,Z++}l.attributes=W,l.attributesNum=Z,l.index=X}function v(){const P=l.newAttributes;for(let N=0,H=P.length;N<H;N++)P[N]=0}function b(P){E(P,0)}function E(P,N){const H=l.newAttributes,X=l.enabledAttributes,W=l.attributeDivisors;H[P]=1,X[P]===0&&(s.enableVertexAttribArray(P),X[P]=1),W[P]!==N&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,N),W[P]=N)}function y(){const P=l.newAttributes,N=l.enabledAttributes;for(let H=0,X=N.length;H<X;H++)N[H]!==P[H]&&(s.disableVertexAttribArray(H),N[H]=0)}function w(P,N,H,X,W,j,Z){Z===!0?s.vertexAttribIPointer(P,N,H,W,j):s.vertexAttribPointer(P,N,H,X,W,j)}function R(P,N,H,X){if(n.isWebGL2===!1&&(P.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const W=X.attributes,j=H.getAttributes(),Z=N.defaultAttributeValues;for(const ee in j){const ce=j[ee];if(ce.location>=0){let V=W[ee];if(V===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(V=P.instanceColor)),V!==void 0){const Y=V.normalized,oe=V.itemSize,me=t.get(V);if(me===void 0)continue;const pe=me.buffer,Ce=me.type,Le=me.bytesPerElement,Se=n.isWebGL2===!0&&(Ce===s.INT||Ce===s.UNSIGNED_INT||V.gpuType===nl);if(V.isInterleavedBufferAttribute){const Ve=V.data,O=Ve.stride,Et=V.offset;if(Ve.isInstancedInterleavedBuffer){for(let _e=0;_e<ce.locationSize;_e++)E(ce.location+_e,Ve.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let _e=0;_e<ce.locationSize;_e++)b(ce.location+_e);s.bindBuffer(s.ARRAY_BUFFER,pe);for(let _e=0;_e<ce.locationSize;_e++)w(ce.location+_e,oe/ce.locationSize,Ce,Y,O*Le,(Et+oe/ce.locationSize*_e)*Le,Se)}else{if(V.isInstancedBufferAttribute){for(let Ve=0;Ve<ce.locationSize;Ve++)E(ce.location+Ve,V.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Ve=0;Ve<ce.locationSize;Ve++)b(ce.location+Ve);s.bindBuffer(s.ARRAY_BUFFER,pe);for(let Ve=0;Ve<ce.locationSize;Ve++)w(ce.location+Ve,oe/ce.locationSize,Ce,Y,oe*Le,oe/ce.locationSize*Ve*Le,Se)}}else if(Z!==void 0){const Y=Z[ee];if(Y!==void 0)switch(Y.length){case 2:s.vertexAttrib2fv(ce.location,Y);break;case 3:s.vertexAttrib3fv(ce.location,Y);break;case 4:s.vertexAttrib4fv(ce.location,Y);break;default:s.vertexAttrib1fv(ce.location,Y)}}}}y()}function x(){G();for(const P in o){const N=o[P];for(const H in N){const X=N[H];for(const W in X)g(X[W].object),delete X[W];delete N[H]}delete o[P]}}function M(P){if(o[P.id]===void 0)return;const N=o[P.id];for(const H in N){const X=N[H];for(const W in X)g(X[W].object),delete X[W];delete N[H]}delete o[P.id]}function D(P){for(const N in o){const H=o[N];if(H[P.id]===void 0)continue;const X=H[P.id];for(const W in X)g(X[W].object),delete X[W];delete H[P.id]}}function G(){J(),h=!0,l!==c&&(l=c,f(l.object))}function J(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:G,resetDefaultState:J,dispose:x,releaseStatesOfGeometry:M,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:b,disableUnusedAttributes:y}}function Fp(s,e,t,n){const i=n.isWebGL2;let r;function a(h){r=h}function o(h,u){s.drawArrays(r,h,u),t.update(u,r,1)}function c(h,u,d){if(d===0)return;let f,g;if(i)f=s,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),t.update(u,r,d)}function l(h,u,d){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function Bp(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,b=a||e.has("OES_texture_float"),E=v&&b,y=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:b,floatVertexTextures:E,maxSamples:y}}function kp(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Xn,o=new Be,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const S=r?0:n,v=S*4;let b=p.clippingState||null;c.value=b,b=h(g,d,v,f);for(let E=0;E!==v;++E)b[E]=t[E];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,b=f;v!==_;++v,b+=4)a.copy(u[v]).applyMatrix4(S,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function zp(s){let e=new WeakMap;function t(a,o){return o===no?a.mapping=wi:o===io&&(a.mapping=Ci),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===no||o===io)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Kh(c.height/2);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Io extends yl{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xi=4,qa=[.125,.215,.35,.446,.526,.582],qn=20,Ir=new Io,$a=new Te;let Dr=null,Ur=0,Nr=0;const Zn=(1+Math.sqrt(5))/2,_i=1/Zn,Ka=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Zn,_i),new I(0,Zn,-_i),new I(_i,0,Zn),new I(-_i,0,Zn),new I(Zn,_i,0),new I(-Zn,_i,0)];class Ja{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Dr=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dr,Ur,Nr),e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wi||e.mapping===Ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dr=this._renderer.getRenderTarget(),Ur=this._renderer.getActiveCubeFace(),Nr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:St,minFilter:St,generateMipmaps:!1,type:ns,format:Bt,colorSpace:gt,depthBuffer:!1},i=Qa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qa(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gp(r)),this._blurMaterial=Hp(r,e,t)}return i}_compileMaterial(e){const t=new jt(this._lodPlanes[0],e);this._renderer.compile(t,Ir)}_sceneToCubeUV(e,t,n,i){const o=new Pt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor($a),h.toneMapping=In,h.autoClear=!1;const f=new Cn({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),g=new jt(new rs,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy($a),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):S===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const v=this._cubeSize;Ls(i,S*v,p>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===wi||e.mapping===Ci;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ec());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new jt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Ls(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ir)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Ka[(i-1)%Ka.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new jt(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*qn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):qn;m>qn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qn}`);const p=[];let S=0;for(let w=0;w<qn;++w){const R=w/_,x=Math.exp(-R*R/2);p.push(x),w===0?S+=x:w<m&&(S+=2*x)}for(let w=0;w<p.length;w++)p[w]=p[w]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const b=this._sizeLods[i],E=3*b*(i>v-xi?i-v+xi:0),y=4*(this._cubeSize-b);Ls(t,E,y,3*b,2*b),c.setRenderTarget(t),c.render(u,Ir)}}function Gp(s){const e=[],t=[],n=[];let i=s;const r=s-xi+1+qa.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>s-xi?c=qa[a-s+xi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*f),v=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let y=0;y<f;y++){const w=y%3*2/3-1,R=y>2?0:-1,x=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];S.set(x,_*g*y),v.set(d,m*g*y);const M=[y,y,y,y,y,y];b.set(M,p*g*y)}const E=new on;E.setAttribute("position",new It(S,_)),E.setAttribute("uv",new It(v,m)),E.setAttribute("faceIndex",new It(b,p)),e.push(E),i>xi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Qa(s,e,t){const n=new ei(s,e,t);return n.texture.mapping=Qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ls(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Hp(s,e,t){const n=new Float32Array(qn),i=new I(0,1,0);return new Dt({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Do(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function ec(){return new Dt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Do(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function tc(){return new Dt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Do(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Do(){return`

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
	`}function Vp(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===no||c===io,h=c===wi||c===Ci;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Ja(s)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(l&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Ja(s));const d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Wp(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function jp(s,e,t,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],s.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const S=f.array;_=f.version;for(let v=0,b=S.length;v<b;v+=3){const E=S[v+0],y=S[v+1],w=S[v+2];d.push(E,y,y,w,w,E)}}else if(g!==void 0){const S=g.array;_=g.version;for(let v=0,b=S.length/3-1;v<b;v+=3){const E=v+0,y=v+1,w=v+2;d.push(E,y,y,w,w,E)}}else return;const m=new(fl(d)?bl:xl)(d,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Xp(s,e,t,n){const i=n.isWebGL2;let r;function a(f){r=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function h(f,g){s.drawElements(r,g,o,f*c),t.update(g,r,1)}function u(f,g,_){if(_===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,f*c,_),t.update(g,r,_)}function d(f,g,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(f[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,f,0,_);let p=0;for(let S=0;S<_;S++)p+=g[S];t.update(p,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Zp(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Yp(s,e){return s[0]-e[0]}function qp(s,e){return Math.abs(e[1])-Math.abs(s[1])}function $p(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new $e,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0;let _=r.get(h);if(_===void 0||_.count!==g){let P=function(){G.dispose(),r.delete(h),h.removeEventListener("dispose",P)};_!==void 0&&_.texture.dispose();const S=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],y=h.morphAttributes.normal||[],w=h.morphAttributes.color||[];let R=0;S===!0&&(R=1),v===!0&&(R=2),b===!0&&(R=3);let x=h.attributes.position.count*R,M=1;x>e.maxTextureSize&&(M=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const D=new Float32Array(x*M*4*g),G=new gl(D,x,M,g);G.type=gn,G.needsUpdate=!0;const J=R*4;for(let N=0;N<g;N++){const H=E[N],X=y[N],W=w[N],j=x*M*4*N;for(let Z=0;Z<H.count;Z++){const ee=Z*J;S===!0&&(a.fromBufferAttribute(H,Z),D[j+ee+0]=a.x,D[j+ee+1]=a.y,D[j+ee+2]=a.z,D[j+ee+3]=0),v===!0&&(a.fromBufferAttribute(X,Z),D[j+ee+4]=a.x,D[j+ee+5]=a.y,D[j+ee+6]=a.z,D[j+ee+7]=0),b===!0&&(a.fromBufferAttribute(W,Z),D[j+ee+8]=a.x,D[j+ee+9]=a.y,D[j+ee+10]=a.z,D[j+ee+11]=W.itemSize===4?a.w:1)}}_={count:g,texture:G,size:new He(x,M)},r.set(h,_),h.addEventListener("dispose",P)}let m=0;for(let S=0;S<d.length;S++)m+=d[S];const p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(s,"morphTargetBaseInfluence",p),u.getUniforms().setValue(s,"morphTargetInfluences",d),u.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const f=d===void 0?0:d.length;let g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let v=0;v<f;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<f;v++){const b=g[v];b[0]=v,b[1]=d[v]}g.sort(qp);for(let v=0;v<8;v++)v<f&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Yp);const _=h.morphAttributes.position,m=h.morphAttributes.normal;let p=0;for(let v=0;v<8;v++){const b=o[v],E=b[0],y=b[1];E!==Number.MAX_SAFE_INTEGER&&y?(_&&h.getAttribute("morphTarget"+v)!==_[E]&&h.setAttribute("morphTarget"+v,_[E]),m&&h.getAttribute("morphNormal"+v)!==m[E]&&h.setAttribute("morphNormal"+v,m[E]),i[v]=y,p+=y):(_&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),m&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}const S=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",S),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Kp(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class El extends mt{constructor(e,t,n,i,r,a,o,c,l,h){if(h=h!==void 0?h:Jn,h!==Jn&&h!==Ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Jn&&(n=wn),n===void 0&&h===Ri&&(n=Kn),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:pt,this.minFilter=c!==void 0?c:pt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Al=new mt,wl=new El(1,1);wl.compareFunction=dl;const Cl=new gl,Rl=new Uh,Ll=new Ml,nc=[],ic=[],sc=new Float32Array(16),rc=new Float32Array(9),oc=new Float32Array(4);function Oi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=nc[i];if(r===void 0&&(r=new Float32Array(i),nc[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function lt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function ut(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function ir(s,e){let t=ic[e];t===void 0&&(t=new Int32Array(e),ic[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Jp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Qp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;s.uniform2fv(this.addr,e),ut(t,e)}}function em(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(lt(t,e))return;s.uniform3fv(this.addr,e),ut(t,e)}}function tm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;s.uniform4fv(this.addr,e),ut(t,e)}}function nm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ut(t,e)}else{if(lt(t,n))return;oc.set(n),s.uniformMatrix2fv(this.addr,!1,oc),ut(t,n)}}function im(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ut(t,e)}else{if(lt(t,n))return;rc.set(n),s.uniformMatrix3fv(this.addr,!1,rc),ut(t,n)}}function sm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(lt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ut(t,e)}else{if(lt(t,n))return;sc.set(n),s.uniformMatrix4fv(this.addr,!1,sc),ut(t,n)}}function rm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function om(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;s.uniform2iv(this.addr,e),ut(t,e)}}function am(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;s.uniform3iv(this.addr,e),ut(t,e)}}function cm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;s.uniform4iv(this.addr,e),ut(t,e)}}function lm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function um(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(lt(t,e))return;s.uniform2uiv(this.addr,e),ut(t,e)}}function hm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(lt(t,e))return;s.uniform3uiv(this.addr,e),ut(t,e)}}function dm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(lt(t,e))return;s.uniform4uiv(this.addr,e),ut(t,e)}}function fm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?wl:Al;t.setTexture2D(e||r,i)}function pm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Rl,i)}function mm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ll,i)}function gm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Cl,i)}function _m(s){switch(s){case 5126:return Jp;case 35664:return Qp;case 35665:return em;case 35666:return tm;case 35674:return nm;case 35675:return im;case 35676:return sm;case 5124:case 35670:return rm;case 35667:case 35671:return om;case 35668:case 35672:return am;case 35669:case 35673:return cm;case 5125:return lm;case 36294:return um;case 36295:return hm;case 36296:return dm;case 35678:case 36198:case 36298:case 36306:case 35682:return fm;case 35679:case 36299:case 36307:return pm;case 35680:case 36300:case 36308:case 36293:return mm;case 36289:case 36303:case 36311:case 36292:return gm}}function vm(s,e){s.uniform1fv(this.addr,e)}function xm(s,e){const t=Oi(e,this.size,2);s.uniform2fv(this.addr,t)}function bm(s,e){const t=Oi(e,this.size,3);s.uniform3fv(this.addr,t)}function Sm(s,e){const t=Oi(e,this.size,4);s.uniform4fv(this.addr,t)}function ym(s,e){const t=Oi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Mm(s,e){const t=Oi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Tm(s,e){const t=Oi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Em(s,e){s.uniform1iv(this.addr,e)}function Am(s,e){s.uniform2iv(this.addr,e)}function wm(s,e){s.uniform3iv(this.addr,e)}function Cm(s,e){s.uniform4iv(this.addr,e)}function Rm(s,e){s.uniform1uiv(this.addr,e)}function Lm(s,e){s.uniform2uiv(this.addr,e)}function Pm(s,e){s.uniform3uiv(this.addr,e)}function Im(s,e){s.uniform4uiv(this.addr,e)}function Dm(s,e,t){const n=this.cache,i=e.length,r=ir(t,i);lt(n,r)||(s.uniform1iv(this.addr,r),ut(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Al,r[a])}function Um(s,e,t){const n=this.cache,i=e.length,r=ir(t,i);lt(n,r)||(s.uniform1iv(this.addr,r),ut(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Rl,r[a])}function Nm(s,e,t){const n=this.cache,i=e.length,r=ir(t,i);lt(n,r)||(s.uniform1iv(this.addr,r),ut(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Ll,r[a])}function Om(s,e,t){const n=this.cache,i=e.length,r=ir(t,i);lt(n,r)||(s.uniform1iv(this.addr,r),ut(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Cl,r[a])}function Fm(s){switch(s){case 5126:return vm;case 35664:return xm;case 35665:return bm;case 35666:return Sm;case 35674:return ym;case 35675:return Mm;case 35676:return Tm;case 5124:case 35670:return Em;case 35667:case 35671:return Am;case 35668:case 35672:return wm;case 35669:case 35673:return Cm;case 5125:return Rm;case 36294:return Lm;case 36295:return Pm;case 36296:return Im;case 35678:case 36198:case 36298:case 36306:case 35682:return Dm;case 35679:case 36299:case 36307:return Um;case 35680:case 36300:case 36308:case 36293:return Nm;case 36289:case 36303:case 36311:case 36292:return Om}}class Bm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_m(t.type)}}class km{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fm(t.type)}}class zm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Or=/(\w+)(\])?(\[|\.)?/g;function ac(s,e){s.seq.push(e),s.map[e.id]=e}function Gm(s,e,t){const n=s.name,i=n.length;for(Or.lastIndex=0;;){const r=Or.exec(n),a=Or.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){ac(t,l===void 0?new Bm(o,s,e):new km(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new zm(o),ac(t,u)),t=u}}}class Gs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Gm(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function cc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Hm=37297;let Vm=0;function Wm(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function jm(s){const e=We.getPrimaries(We.workingColorSpace),t=We.getPrimaries(s);let n;switch(e===t?n="":e===Ys&&t===Zs?n="LinearDisplayP3ToLinearSRGB":e===Zs&&t===Ys&&(n="LinearSRGBToLinearDisplayP3"),s){case gt:case er:return[n,"LinearTransferOETF"];case qe:case Co:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function lc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Wm(s.getShaderSource(e),a)}else return i}function Xm(s,e){const t=jm(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Zm(s,e){let t;switch(e){case Hu:t="Linear";break;case Vu:t="Reinhard";break;case Wu:t="OptimizedCineon";break;case Qc:t="ACESFilmic";break;case Xu:t="AgX";break;case ju:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ym(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(bi).join(`
`)}function qm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(bi).join(`
`)}function $m(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Km(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function bi(s){return s!==""}function uc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Jm=/^[ \t]*#include +<([\w\d./]+)>/gm;function lo(s){return s.replace(Jm,eg)}const Qm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function eg(s,e){let t=Ie[e];if(t===void 0){const n=Qm.get(e);if(n!==void 0)t=Ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return lo(t)}const tg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dc(s){return s.replace(tg,ng)}function ng(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function fc(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ig(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Kc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===ks?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===mn&&(e="SHADOWMAP_TYPE_VSM"),e}function sg(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case wi:case Ci:e="ENVMAP_TYPE_CUBE";break;case Qs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rg(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ci:e="ENVMAP_MODE_REFRACTION";break}return e}function og(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Jc:e="ENVMAP_BLENDING_MULTIPLY";break;case zu:e="ENVMAP_BLENDING_MIX";break;case Gu:e="ENVMAP_BLENDING_ADD";break}return e}function ag(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function cg(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=ig(t),l=sg(t),h=rg(t),u=og(t),d=ag(t),f=t.isWebGL2?"":Ym(t),g=qm(t),_=$m(r),m=i.createProgram();let p,S,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(bi).join(`
`),p.length>0&&(p+=`
`),S=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(bi).join(`
`),S.length>0&&(S+=`
`)):(p=[fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bi).join(`
`),S=[f,fc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==In?"#define TONE_MAPPING":"",t.toneMapping!==In?Ie.tonemapping_pars_fragment:"",t.toneMapping!==In?Zm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,Xm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bi).join(`
`)),a=lo(a),a=uc(a,t),a=hc(a,t),o=lo(o),o=uc(o,t),o=hc(o,t),a=dc(a),o=dc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Pa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const b=v+p+a,E=v+S+o,y=cc(i,i.VERTEX_SHADER,b),w=cc(i,i.FRAGMENT_SHADER,E);i.attachShader(m,y),i.attachShader(m,w),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function R(G){if(s.debug.checkShaderErrors){const J=i.getProgramInfoLog(m).trim(),P=i.getShaderInfoLog(y).trim(),N=i.getShaderInfoLog(w).trim();let H=!0,X=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,y,w);else{const W=lc(i,y,"vertex"),j=lc(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+J+`
`+W+`
`+j)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(P===""||N==="")&&(X=!1);X&&(G.diagnostics={runnable:H,programLog:J,vertexShader:{log:P,prefix:p},fragmentShader:{log:N,prefix:S}})}i.deleteShader(y),i.deleteShader(w),x=new Gs(i,m),M=Km(i,m)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(m,Hm)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vm++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=w,this}let lg=0;class ug{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new hg(e),t.set(e,n)),n}}class hg{constructor(e){this.id=lg++,this.code=e,this.usedTimes=0}}function dg(s,e,t,n,i,r,a){const o=new _l,c=new ug,l=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===0?"uv":`uv${x}`}function m(x,M,D,G,J){const P=G.fog,N=J.geometry,H=x.isMeshStandardMaterial?G.environment:null,X=(x.isMeshStandardMaterial?t:e).get(x.envMap||H),W=X&&X.mapping===Qs?X.image.height:null,j=g[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const Z=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ee=Z!==void 0?Z.length:0;let ce=0;N.morphAttributes.position!==void 0&&(ce=1),N.morphAttributes.normal!==void 0&&(ce=2),N.morphAttributes.color!==void 0&&(ce=3);let V,Y,oe,me;if(j){const At=en[j];V=At.vertexShader,Y=At.fragmentShader}else V=x.vertexShader,Y=x.fragmentShader,c.update(x),oe=c.getVertexShaderID(x),me=c.getFragmentShaderID(x);const pe=s.getRenderTarget(),Ce=J.isInstancedMesh===!0,Le=J.isBatchedMesh===!0,Se=!!x.map,Ve=!!x.matcap,O=!!X,Et=!!x.aoMap,_e=!!x.lightMap,Ae=!!x.bumpMap,he=!!x.normalMap,nt=!!x.displacementMap,De=!!x.emissiveMap,C=!!x.metalnessMap,T=!!x.roughnessMap,B=x.anisotropy>0,K=x.clearcoat>0,$=x.iridescence>0,Q=x.sheen>0,de=x.transmission>0,re=B&&!!x.anisotropyMap,le=K&&!!x.clearcoatMap,be=K&&!!x.clearcoatNormalMap,Ue=K&&!!x.clearcoatRoughnessMap,q=$&&!!x.iridescenceMap,Ze=$&&!!x.iridescenceThicknessMap,ze=Q&&!!x.sheenColorMap,Ee=Q&&!!x.sheenRoughnessMap,ge=!!x.specularMap,ue=!!x.specularColorMap,Pe=!!x.specularIntensityMap,je=de&&!!x.transmissionMap,rt=de&&!!x.thicknessMap,Oe=!!x.gradientMap,te=!!x.alphaMap,L=x.alphaTest>0,ie=!!x.alphaHash,se=!!x.extensions,ye=!!N.attributes.uv1,ve=!!N.attributes.uv2,Ke=!!N.attributes.uv3;let Je=In;return x.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Je=s.toneMapping),{isWebGL2:h,shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:V,fragmentShader:Y,defines:x.defines,customVertexShaderID:oe,customFragmentShaderID:me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Le,instancing:Ce,instancingColor:Ce&&J.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:pe===null?s.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:gt,map:Se,matcap:Ve,envMap:O,envMapMode:O&&X.mapping,envMapCubeUVHeight:W,aoMap:Et,lightMap:_e,bumpMap:Ae,normalMap:he,displacementMap:d&&nt,emissiveMap:De,normalMapObjectSpace:he&&x.normalMapType===oh,normalMapTangentSpace:he&&x.normalMapType===hl,metalnessMap:C,roughnessMap:T,anisotropy:B,anisotropyMap:re,clearcoat:K,clearcoatMap:le,clearcoatNormalMap:be,clearcoatRoughnessMap:Ue,iridescence:$,iridescenceMap:q,iridescenceThicknessMap:Ze,sheen:Q,sheenColorMap:ze,sheenRoughnessMap:Ee,specularMap:ge,specularColorMap:ue,specularIntensityMap:Pe,transmission:de,transmissionMap:je,thicknessMap:rt,gradientMap:Oe,opaque:x.transparent===!1&&x.blending===Si,alphaMap:te,alphaTest:L,alphaHash:ie,combine:x.combine,mapUv:Se&&_(x.map.channel),aoMapUv:Et&&_(x.aoMap.channel),lightMapUv:_e&&_(x.lightMap.channel),bumpMapUv:Ae&&_(x.bumpMap.channel),normalMapUv:he&&_(x.normalMap.channel),displacementMapUv:nt&&_(x.displacementMap.channel),emissiveMapUv:De&&_(x.emissiveMap.channel),metalnessMapUv:C&&_(x.metalnessMap.channel),roughnessMapUv:T&&_(x.roughnessMap.channel),anisotropyMapUv:re&&_(x.anisotropyMap.channel),clearcoatMapUv:le&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:be&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&_(x.sheenRoughnessMap.channel),specularMapUv:ge&&_(x.specularMap.channel),specularColorMapUv:ue&&_(x.specularColorMap.channel),specularIntensityMapUv:Pe&&_(x.specularIntensityMap.channel),transmissionMapUv:je&&_(x.transmissionMap.channel),thicknessMapUv:rt&&_(x.thicknessMap.channel),alphaMapUv:te&&_(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(he||B),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:ye,vertexUv2s:ve,vertexUv3s:Ke,pointsUvs:J.isPoints===!0&&!!N.attributes.uv&&(Se||te),fog:!!P,useFog:x.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:J.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ce,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:Je,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Se&&x.map.isVideoTexture===!0&&We.getTransfer(x.map.colorSpace)===tt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ht,flipSided:x.side===Ut,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:se&&x.extensions.derivatives===!0,extensionFragDepth:se&&x.extensions.fragDepth===!0,extensionDrawBuffers:se&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:se&&x.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const D in x.defines)M.push(D),M.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(S(M,x),v(M,x),M.push(s.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function S(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function v(x,M){o.disableAll(),M.isWebGL2&&o.enable(0),M.supportsVertexTextures&&o.enable(1),M.instancing&&o.enable(2),M.instancingColor&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.useLegacyLights&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),x.push(o.mask)}function b(x){const M=g[x.type];let D;if(M){const G=en[M];D=Zh.clone(G.uniforms)}else D=x.uniforms;return D}function E(x,M){let D;for(let G=0,J=l.length;G<J;G++){const P=l[G];if(P.cacheKey===M){D=P,++D.usedTimes;break}}return D===void 0&&(D=new cg(s,M,x,r),l.push(D)),D}function y(x){if(--x.usedTimes===0){const M=l.indexOf(x);l[M]=l[l.length-1],l.pop(),x.destroy()}}function w(x){c.remove(x)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:E,releaseProgram:y,releaseShaderCache:w,programs:l,dispose:R}}function fg(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function pg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function pc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function mc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,g,_,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(u,d,f,g,_,m){const p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||pg),n.length>1&&n.sort(d||pc),i.length>1&&i.sort(d||pc)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function mg(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new mc,s.set(n,[a])):i>=r.length?(a=new mc,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function gg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Te};break;case"SpotLight":t={position:new I,direction:new I,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function _g(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let vg=0;function xg(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function bg(s,e){const t=new gg,n=_g(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new I);const r=new I,a=new ke,o=new ke;function c(h,u){let d=0,f=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let _=0,m=0,p=0,S=0,v=0,b=0,E=0,y=0,w=0,R=0,x=0;h.sort(xg);const M=u===!0?Math.PI:1;for(let G=0,J=h.length;G<J;G++){const P=h[G],N=P.color,H=P.intensity,X=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=N.r*H*M,f+=N.g*H*M,g+=N.b*H*M;else if(P.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(P.sh.coefficients[j],H);x++}else if(P.isDirectionalLight){const j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*M),P.castShadow){const Z=P.shadow,ee=n.get(P);ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,i.directionalShadow[_]=ee,i.directionalShadowMap[_]=W,i.directionalShadowMatrix[_]=P.shadow.matrix,b++}i.directional[_]=j,_++}else if(P.isSpotLight){const j=t.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(N).multiplyScalar(H*M),j.distance=X,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,i.spot[p]=j;const Z=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,Z.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[p]=Z.matrix,P.castShadow){const ee=n.get(P);ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,i.spotShadow[p]=ee,i.spotShadowMap[p]=W,y++}p++}else if(P.isRectAreaLight){const j=t.get(P);j.color.copy(N).multiplyScalar(H),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),i.rectArea[S]=j,S++}else if(P.isPointLight){const j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*M),j.distance=P.distance,j.decay=P.decay,P.castShadow){const Z=P.shadow,ee=n.get(P);ee.shadowBias=Z.bias,ee.shadowNormalBias=Z.normalBias,ee.shadowRadius=Z.radius,ee.shadowMapSize=Z.mapSize,ee.shadowCameraNear=Z.camera.near,ee.shadowCameraFar=Z.camera.far,i.pointShadow[m]=ee,i.pointShadowMap[m]=W,i.pointShadowMatrix[m]=P.shadow.matrix,E++}i.point[m]=j,m++}else if(P.isHemisphereLight){const j=t.get(P);j.skyColor.copy(P.color).multiplyScalar(H*M),j.groundColor.copy(P.groundColor).multiplyScalar(H*M),i.hemi[v]=j,v++}}S>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_FLOAT_1,i.rectAreaLTC2=ne.LTC_FLOAT_2):(i.rectAreaLTC1=ne.LTC_HALF_1,i.rectAreaLTC2=ne.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_FLOAT_1,i.rectAreaLTC2=ne.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_HALF_1,i.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const D=i.hash;(D.directionalLength!==_||D.pointLength!==m||D.spotLength!==p||D.rectAreaLength!==S||D.hemiLength!==v||D.numDirectionalShadows!==b||D.numPointShadows!==E||D.numSpotShadows!==y||D.numSpotMaps!==w||D.numLightProbes!==x)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=S,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=y+w-R,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=x,D.directionalLength=_,D.pointLength=m,D.spotLength=p,D.rectAreaLength=S,D.hemiLength=v,D.numDirectionalShadows=b,D.numPointShadows=E,D.numSpotShadows=y,D.numSpotMaps=w,D.numLightProbes=x,i.version=vg++)}function l(h,u){let d=0,f=0,g=0,_=0,m=0;const p=u.matrixWorldInverse;for(let S=0,v=h.length;S<v;S++){const b=h[S];if(b.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),d++}else if(b.isSpotLight){const E=i.spot[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),g++}else if(b.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),o.identity(),a.copy(b.matrixWorld),a.premultiply(p),o.extractRotation(a),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){const E=i.hemi[m];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:i}}function gc(s,e){const t=new bg(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(u){n.push(u)}function o(u){i.push(u)}function c(u){t.setup(n,u)}function l(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Sg(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let c;return o===void 0?(c=new gc(s,e),t.set(r,[c])):a>=o.length?(c=new gc(s,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class yg extends sn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Mg extends sn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Tg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Eg=`uniform sampler2D shadow_pass;
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
}`;function Ag(s,e,t){let n=new Lo;const i=new He,r=new He,a=new $e,o=new yg({depthPacking:rh}),c=new Mg,l={},h=t.maxTextureSize,u={[Tt]:Ut,[Ut]:Tt,[Ht]:Ht},d=new Dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:Tg,fragmentShader:Eg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new on;g.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new jt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kc;let p=this.type;this.render=function(y,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const x=s.getRenderTarget(),M=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),G=s.state;G.setBlending(Pn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const J=p!==mn&&this.type===mn,P=p===mn&&this.type!==mn;for(let N=0,H=y.length;N<H;N++){const X=y[N],W=X.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const j=W.getFrameExtents();if(i.multiply(j),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/j.x),i.x=r.x*j.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/j.y),i.y=r.y*j.y,W.mapSize.y=r.y)),W.map===null||J===!0||P===!0){const ee=this.type!==mn?{minFilter:pt,magFilter:pt}:{};W.map!==null&&W.map.dispose(),W.map=new ei(i.x,i.y,ee),W.map.texture.name=X.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const Z=W.getViewportCount();for(let ee=0;ee<Z;ee++){const ce=W.getViewport(ee);a.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),G.viewport(a),W.updateMatrices(X,ee),n=W.getFrustum(),b(w,R,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===mn&&S(W,R),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(x,M,D)};function S(y,w){const R=e.update(_);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new ei(i.x,i.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,s.setRenderTarget(y.mapPass),s.clear(),s.renderBufferDirect(w,null,R,d,_,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,s.setRenderTarget(y.map),s.clear(),s.renderBufferDirect(w,null,R,f,_,null)}function v(y,w,R,x){let M=null;const D=R.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(D!==void 0)M=D;else if(M=R.isPointLight===!0?c:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const G=M.uuid,J=w.uuid;let P=l[G];P===void 0&&(P={},l[G]=P);let N=P[J];N===void 0&&(N=M.clone(),P[J]=N,w.addEventListener("dispose",E)),M=N}if(M.visible=w.visible,M.wireframe=w.wireframe,x===mn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:u[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=s.properties.get(M);G.light=R}return M}function b(y,w,R,x,M){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&M===mn)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,y.matrixWorld);const J=e.update(y),P=y.material;if(Array.isArray(P)){const N=J.groups;for(let H=0,X=N.length;H<X;H++){const W=N[H],j=P[W.materialIndex];if(j&&j.visible){const Z=v(y,j,x,M);y.onBeforeShadow(s,y,w,R,J,Z,W),s.renderBufferDirect(R,null,J,Z,y,W),y.onAfterShadow(s,y,w,R,J,Z,W)}}}else if(P.visible){const N=v(y,P,x,M);y.onBeforeShadow(s,y,w,R,J,N,null),s.renderBufferDirect(R,null,J,N,y,null),y.onAfterShadow(s,y,w,R,J,N,null)}}const G=y.children;for(let J=0,P=G.length;J<P;J++)b(G[J],w,R,x,M)}function E(y){y.target.removeEventListener("dispose",E);for(const R in l){const x=l[R],M=y.target.uuid;M in x&&(x[M].dispose(),delete x[M])}}}function wg(s,e,t){const n=t.isWebGL2;function i(){let L=!1;const ie=new $e;let se=null;const ye=new $e(0,0,0,0);return{setMask:function(ve){se!==ve&&!L&&(s.colorMask(ve,ve,ve,ve),se=ve)},setLocked:function(ve){L=ve},setClear:function(ve,Ke,Je,ht,At){At===!0&&(ve*=ht,Ke*=ht,Je*=ht),ie.set(ve,Ke,Je,ht),ye.equals(ie)===!1&&(s.clearColor(ve,Ke,Je,ht),ye.copy(ie))},reset:function(){L=!1,se=null,ye.set(-1,0,0,0)}}}function r(){let L=!1,ie=null,se=null,ye=null;return{setTest:function(ve){ve?Le(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(ve){ie!==ve&&!L&&(s.depthMask(ve),ie=ve)},setFunc:function(ve){if(se!==ve){switch(ve){case Du:s.depthFunc(s.NEVER);break;case Uu:s.depthFunc(s.ALWAYS);break;case Nu:s.depthFunc(s.LESS);break;case Ws:s.depthFunc(s.LEQUAL);break;case Ou:s.depthFunc(s.EQUAL);break;case Fu:s.depthFunc(s.GEQUAL);break;case Bu:s.depthFunc(s.GREATER);break;case ku:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}se=ve}},setLocked:function(ve){L=ve},setClear:function(ve){ye!==ve&&(s.clearDepth(ve),ye=ve)},reset:function(){L=!1,ie=null,se=null,ye=null}}}function a(){let L=!1,ie=null,se=null,ye=null,ve=null,Ke=null,Je=null,ht=null,At=null;return{setTest:function(Qe){L||(Qe?Le(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function(Qe){ie!==Qe&&!L&&(s.stencilMask(Qe),ie=Qe)},setFunc:function(Qe,wt,Qt){(se!==Qe||ye!==wt||ve!==Qt)&&(s.stencilFunc(Qe,wt,Qt),se=Qe,ye=wt,ve=Qt)},setOp:function(Qe,wt,Qt){(Ke!==Qe||Je!==wt||ht!==Qt)&&(s.stencilOp(Qe,wt,Qt),Ke=Qe,Je=wt,ht=Qt)},setLocked:function(Qe){L=Qe},setClear:function(Qe){At!==Qe&&(s.clearStencil(Qe),At=Qe)},reset:function(){L=!1,ie=null,se=null,ye=null,ve=null,Ke=null,Je=null,ht=null,At=null}}}const o=new i,c=new r,l=new a,h=new WeakMap,u=new WeakMap;let d={},f={},g=new WeakMap,_=[],m=null,p=!1,S=null,v=null,b=null,E=null,y=null,w=null,R=null,x=new Te(0,0,0),M=0,D=!1,G=null,J=null,P=null,N=null,H=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,j=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Z)[1]),W=j>=1):Z.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),W=j>=2);let ee=null,ce={};const V=s.getParameter(s.SCISSOR_BOX),Y=s.getParameter(s.VIEWPORT),oe=new $e().fromArray(V),me=new $e().fromArray(Y);function pe(L,ie,se,ye){const ve=new Uint8Array(4),Ke=s.createTexture();s.bindTexture(L,Ke),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Je=0;Je<se;Je++)n&&(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)?s.texImage3D(ie,0,s.RGBA,1,1,ye,0,s.RGBA,s.UNSIGNED_BYTE,ve):s.texImage2D(ie+Je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ve);return Ke}const Ce={};Ce[s.TEXTURE_2D]=pe(s.TEXTURE_2D,s.TEXTURE_2D,1),Ce[s.TEXTURE_CUBE_MAP]=pe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ce[s.TEXTURE_2D_ARRAY]=pe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ce[s.TEXTURE_3D]=pe(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Le(s.DEPTH_TEST),c.setFunc(Ws),De(!1),C(qo),Le(s.CULL_FACE),he(Pn);function Le(L){d[L]!==!0&&(s.enable(L),d[L]=!0)}function Se(L){d[L]!==!1&&(s.disable(L),d[L]=!1)}function Ve(L,ie){return f[L]!==ie?(s.bindFramebuffer(L,ie),f[L]=ie,n&&(L===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ie),L===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ie)),!0):!1}function O(L,ie){let se=_,ye=!1;if(L)if(se=g.get(ie),se===void 0&&(se=[],g.set(ie,se)),L.isWebGLMultipleRenderTargets){const ve=L.texture;if(se.length!==ve.length||se[0]!==s.COLOR_ATTACHMENT0){for(let Ke=0,Je=ve.length;Ke<Je;Ke++)se[Ke]=s.COLOR_ATTACHMENT0+Ke;se.length=ve.length,ye=!0}}else se[0]!==s.COLOR_ATTACHMENT0&&(se[0]=s.COLOR_ATTACHMENT0,ye=!0);else se[0]!==s.BACK&&(se[0]=s.BACK,ye=!0);ye&&(t.isWebGL2?s.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function Et(L){return m!==L?(s.useProgram(L),m=L,!0):!1}const _e={[Yn]:s.FUNC_ADD,[vu]:s.FUNC_SUBTRACT,[xu]:s.FUNC_REVERSE_SUBTRACT};if(n)_e[Qo]=s.MIN,_e[ea]=s.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(_e[Qo]=L.MIN_EXT,_e[ea]=L.MAX_EXT)}const Ae={[bu]:s.ZERO,[Su]:s.ONE,[yu]:s.SRC_COLOR,[eo]:s.SRC_ALPHA,[Cu]:s.SRC_ALPHA_SATURATE,[Au]:s.DST_COLOR,[Tu]:s.DST_ALPHA,[Mu]:s.ONE_MINUS_SRC_COLOR,[to]:s.ONE_MINUS_SRC_ALPHA,[wu]:s.ONE_MINUS_DST_COLOR,[Eu]:s.ONE_MINUS_DST_ALPHA,[Ru]:s.CONSTANT_COLOR,[Lu]:s.ONE_MINUS_CONSTANT_COLOR,[Pu]:s.CONSTANT_ALPHA,[Iu]:s.ONE_MINUS_CONSTANT_ALPHA};function he(L,ie,se,ye,ve,Ke,Je,ht,At,Qe){if(L===Pn){p===!0&&(Se(s.BLEND),p=!1);return}if(p===!1&&(Le(s.BLEND),p=!0),L!==_u){if(L!==S||Qe!==D){if((v!==Yn||y!==Yn)&&(s.blendEquation(s.FUNC_ADD),v=Yn,y=Yn),Qe)switch(L){case Si:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $o:s.blendFunc(s.ONE,s.ONE);break;case Ko:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Jo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Si:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $o:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ko:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Jo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,E=null,w=null,R=null,x.set(0,0,0),M=0,S=L,D=Qe}return}ve=ve||ie,Ke=Ke||se,Je=Je||ye,(ie!==v||ve!==y)&&(s.blendEquationSeparate(_e[ie],_e[ve]),v=ie,y=ve),(se!==b||ye!==E||Ke!==w||Je!==R)&&(s.blendFuncSeparate(Ae[se],Ae[ye],Ae[Ke],Ae[Je]),b=se,E=ye,w=Ke,R=Je),(ht.equals(x)===!1||At!==M)&&(s.blendColor(ht.r,ht.g,ht.b,At),x.copy(ht),M=At),S=L,D=!1}function nt(L,ie){L.side===Ht?Se(s.CULL_FACE):Le(s.CULL_FACE);let se=L.side===Ut;ie&&(se=!se),De(se),L.blending===Si&&L.transparent===!1?he(Pn):he(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),o.setMask(L.colorWrite);const ye=L.stencilWrite;l.setTest(ye),ye&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),B(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Le(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function De(L){G!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),G=L)}function C(L){L!==pu?(Le(s.CULL_FACE),L!==J&&(L===qo?s.cullFace(s.BACK):L===mu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),J=L}function T(L){L!==P&&(W&&s.lineWidth(L),P=L)}function B(L,ie,se){L?(Le(s.POLYGON_OFFSET_FILL),(N!==ie||H!==se)&&(s.polygonOffset(ie,se),N=ie,H=se)):Se(s.POLYGON_OFFSET_FILL)}function K(L){L?Le(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function $(L){L===void 0&&(L=s.TEXTURE0+X-1),ee!==L&&(s.activeTexture(L),ee=L)}function Q(L,ie,se){se===void 0&&(ee===null?se=s.TEXTURE0+X-1:se=ee);let ye=ce[se];ye===void 0&&(ye={type:void 0,texture:void 0},ce[se]=ye),(ye.type!==L||ye.texture!==ie)&&(ee!==se&&(s.activeTexture(se),ee=se),s.bindTexture(L,ie||Ce[L]),ye.type=L,ye.texture=ie)}function de(){const L=ce[ee];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function re(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ue(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ze(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ze(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pe(L){oe.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),oe.copy(L))}function je(L){me.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),me.copy(L))}function rt(L,ie){let se=u.get(ie);se===void 0&&(se=new WeakMap,u.set(ie,se));let ye=se.get(L);ye===void 0&&(ye=s.getUniformBlockIndex(ie,L.name),se.set(L,ye))}function Oe(L,ie){const ye=u.get(ie).get(L);h.get(ie)!==ye&&(s.uniformBlockBinding(ie,ye,L.__bindingPointIndex),h.set(ie,ye))}function te(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},ee=null,ce={},f={},g=new WeakMap,_=[],m=null,p=!1,S=null,v=null,b=null,E=null,y=null,w=null,R=null,x=new Te(0,0,0),M=0,D=!1,G=null,J=null,P=null,N=null,H=null,oe.set(0,0,s.canvas.width,s.canvas.height),me.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Le,disable:Se,bindFramebuffer:Ve,drawBuffers:O,useProgram:Et,setBlending:he,setMaterial:nt,setFlipSided:De,setCullFace:C,setLineWidth:T,setPolygonOffset:B,setScissorTest:K,activeTexture:$,bindTexture:Q,unbindTexture:de,compressedTexImage2D:re,compressedTexImage3D:le,texImage2D:ge,texImage3D:ue,updateUBOMapping:rt,uniformBlockBinding:Oe,texStorage2D:ze,texStorage3D:Ee,texSubImage2D:be,texSubImage3D:Ue,compressedTexSubImage2D:q,compressedTexSubImage3D:Ze,scissor:Pe,viewport:je,reset:te}}function Cg(s,e,t,n,i,r,a){const o=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,T){return f?new OffscreenCanvas(C,T):ss("canvas")}function _(C,T,B,K){let $=1;if((C.width>K||C.height>K)&&($=K/Math.max(C.width,C.height)),$<1||T===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const Q=T?$s:Math.floor,de=Q($*C.width),re=Q($*C.height);u===void 0&&(u=g(de,re));const le=B?g(de,re):u;return le.width=de,le.height=re,le.getContext("2d").drawImage(C,0,0,de,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+de+"x"+re+")."),le}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function m(C){return co(C.width)&&co(C.height)}function p(C){return o?!1:C.wrapS!==Mt||C.wrapT!==Mt||C.minFilter!==pt&&C.minFilter!==St}function S(C,T){return C.generateMipmaps&&T&&C.minFilter!==pt&&C.minFilter!==St}function v(C){s.generateMipmap(C)}function b(C,T,B,K,$=!1){if(o===!1)return T;if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Q=T;if(T===s.RED&&(B===s.FLOAT&&(Q=s.R32F),B===s.HALF_FLOAT&&(Q=s.R16F),B===s.UNSIGNED_BYTE&&(Q=s.R8)),T===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(Q=s.R8UI),B===s.UNSIGNED_SHORT&&(Q=s.R16UI),B===s.UNSIGNED_INT&&(Q=s.R32UI),B===s.BYTE&&(Q=s.R8I),B===s.SHORT&&(Q=s.R16I),B===s.INT&&(Q=s.R32I)),T===s.RG&&(B===s.FLOAT&&(Q=s.RG32F),B===s.HALF_FLOAT&&(Q=s.RG16F),B===s.UNSIGNED_BYTE&&(Q=s.RG8)),T===s.RGBA){const de=$?Xs:We.getTransfer(K);B===s.FLOAT&&(Q=s.RGBA32F),B===s.HALF_FLOAT&&(Q=s.RGBA16F),B===s.UNSIGNED_BYTE&&(Q=de===tt?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function E(C,T,B){return S(C,B)===!0||C.isFramebufferTexture&&C.minFilter!==pt&&C.minFilter!==St?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function y(C){return C===pt||C===so||C===zs?s.NEAREST:s.LINEAR}function w(C){const T=C.target;T.removeEventListener("dispose",w),x(T),T.isVideoTexture&&h.delete(T)}function R(C){const T=C.target;T.removeEventListener("dispose",R),D(T)}function x(C){const T=n.get(C);if(T.__webglInit===void 0)return;const B=C.source,K=d.get(B);if(K){const $=K[T.__cacheKey];$.usedTimes--,$.usedTimes===0&&M(C),Object.keys(K).length===0&&d.delete(B)}n.remove(C)}function M(C){const T=n.get(C);s.deleteTexture(T.__webglTexture);const B=C.source,K=d.get(B);delete K[T.__cacheKey],a.memory.textures--}function D(C){const T=C.texture,B=n.get(C),K=n.get(T);if(K.__webglTexture!==void 0&&(s.deleteTexture(K.__webglTexture),a.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(B.__webglFramebuffer[$]))for(let Q=0;Q<B.__webglFramebuffer[$].length;Q++)s.deleteFramebuffer(B.__webglFramebuffer[$][Q]);else s.deleteFramebuffer(B.__webglFramebuffer[$]);B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer[$])}else{if(Array.isArray(B.__webglFramebuffer))for(let $=0;$<B.__webglFramebuffer.length;$++)s.deleteFramebuffer(B.__webglFramebuffer[$]);else s.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&s.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&s.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let $=0;$<B.__webglColorRenderbuffer.length;$++)B.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(B.__webglColorRenderbuffer[$]);B.__webglDepthRenderbuffer&&s.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let $=0,Q=T.length;$<Q;$++){const de=n.get(T[$]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),a.memory.textures--),n.remove(T[$])}n.remove(T),n.remove(C)}let G=0;function J(){G=0}function P(){const C=G;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),G+=1,C}function N(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function H(C,T){const B=n.get(C);if(C.isVideoTexture&&nt(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){const K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(B,C,T);return}}t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+T)}function X(C,T){const B=n.get(C);if(C.version>0&&B.__version!==C.version){oe(B,C,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+T)}function W(C,T){const B=n.get(C);if(C.version>0&&B.__version!==C.version){oe(B,C,T);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+T)}function j(C,T){const B=n.get(C);if(C.version>0&&B.__version!==C.version){me(B,C,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+T)}const Z={[On]:s.REPEAT,[Mt]:s.CLAMP_TO_EDGE,[js]:s.MIRRORED_REPEAT},ee={[pt]:s.NEAREST,[so]:s.NEAREST_MIPMAP_NEAREST,[zs]:s.NEAREST_MIPMAP_LINEAR,[St]:s.LINEAR,[tl]:s.LINEAR_MIPMAP_NEAREST,[Qn]:s.LINEAR_MIPMAP_LINEAR},ce={[ah]:s.NEVER,[fh]:s.ALWAYS,[ch]:s.LESS,[dl]:s.LEQUAL,[lh]:s.EQUAL,[dh]:s.GEQUAL,[uh]:s.GREATER,[hh]:s.NOTEQUAL};function V(C,T,B){if(B?(s.texParameteri(C,s.TEXTURE_WRAP_S,Z[T.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Z[T.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Z[T.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,ee[T.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,ee[T.minFilter])):(s.texParameteri(C,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(C,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(T.wrapS!==Mt||T.wrapT!==Mt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(C,s.TEXTURE_MAG_FILTER,y(T.magFilter)),s.texParameteri(C,s.TEXTURE_MIN_FILTER,y(T.minFilter)),T.minFilter!==pt&&T.minFilter!==St&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ce[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const K=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===pt||T.minFilter!==zs&&T.minFilter!==Qn||T.type===gn&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===ns&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(s.texParameterf(C,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function Y(C,T){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",w));const K=T.source;let $=d.get(K);$===void 0&&($={},d.set(K,$));const Q=N(T);if(Q!==C.__cacheKey){$[Q]===void 0&&($[Q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),$[Q].usedTimes++;const de=$[C.__cacheKey];de!==void 0&&($[C.__cacheKey].usedTimes--,de.usedTimes===0&&M(T)),C.__cacheKey=Q,C.__webglTexture=$[Q].texture}return B}function oe(C,T,B){let K=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(K=s.TEXTURE_3D);const $=Y(C,T),Q=T.source;t.bindTexture(K,C.__webglTexture,s.TEXTURE0+B);const de=n.get(Q);if(Q.version!==de.__version||$===!0){t.activeTexture(s.TEXTURE0+B);const re=We.getPrimaries(We.workingColorSpace),le=T.colorSpace===Vt?null:We.getPrimaries(T.colorSpace),be=T.colorSpace===Vt||re===le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Ue=p(T)&&m(T.image)===!1;let q=_(T.image,Ue,!1,i.maxTextureSize);q=De(T,q);const Ze=m(q)||o,ze=r.convert(T.format,T.colorSpace);let Ee=r.convert(T.type),ge=b(T.internalFormat,ze,Ee,T.colorSpace,T.isVideoTexture);V(K,T,Ze);let ue;const Pe=T.mipmaps,je=o&&T.isVideoTexture!==!0&&ge!==cl,rt=de.__version===void 0||$===!0,Oe=E(T,q,Ze);if(T.isDepthTexture)ge=s.DEPTH_COMPONENT,o?T.type===gn?ge=s.DEPTH_COMPONENT32F:T.type===wn?ge=s.DEPTH_COMPONENT24:T.type===Kn?ge=s.DEPTH24_STENCIL8:ge=s.DEPTH_COMPONENT16:T.type===gn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Jn&&ge===s.DEPTH_COMPONENT&&T.type!==wo&&T.type!==wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=wn,Ee=r.convert(T.type)),T.format===Ri&&ge===s.DEPTH_COMPONENT&&(ge=s.DEPTH_STENCIL,T.type!==Kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Kn,Ee=r.convert(T.type))),rt&&(je?t.texStorage2D(s.TEXTURE_2D,1,ge,q.width,q.height):t.texImage2D(s.TEXTURE_2D,0,ge,q.width,q.height,0,ze,Ee,null));else if(T.isDataTexture)if(Pe.length>0&&Ze){je&&rt&&t.texStorage2D(s.TEXTURE_2D,Oe,ge,Pe[0].width,Pe[0].height);for(let te=0,L=Pe.length;te<L;te++)ue=Pe[te],je?t.texSubImage2D(s.TEXTURE_2D,te,0,0,ue.width,ue.height,ze,Ee,ue.data):t.texImage2D(s.TEXTURE_2D,te,ge,ue.width,ue.height,0,ze,Ee,ue.data);T.generateMipmaps=!1}else je?(rt&&t.texStorage2D(s.TEXTURE_2D,Oe,ge,q.width,q.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,q.width,q.height,ze,Ee,q.data)):t.texImage2D(s.TEXTURE_2D,0,ge,q.width,q.height,0,ze,Ee,q.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){je&&rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Oe,ge,Pe[0].width,Pe[0].height,q.depth);for(let te=0,L=Pe.length;te<L;te++)ue=Pe[te],T.format!==Bt?ze!==null?je?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,q.depth,ze,ue.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,ge,ue.width,ue.height,q.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,q.depth,ze,Ee,ue.data):t.texImage3D(s.TEXTURE_2D_ARRAY,te,ge,ue.width,ue.height,q.depth,0,ze,Ee,ue.data)}else{je&&rt&&t.texStorage2D(s.TEXTURE_2D,Oe,ge,Pe[0].width,Pe[0].height);for(let te=0,L=Pe.length;te<L;te++)ue=Pe[te],T.format!==Bt?ze!==null?je?t.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,ue.width,ue.height,ze,ue.data):t.compressedTexImage2D(s.TEXTURE_2D,te,ge,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?t.texSubImage2D(s.TEXTURE_2D,te,0,0,ue.width,ue.height,ze,Ee,ue.data):t.texImage2D(s.TEXTURE_2D,te,ge,ue.width,ue.height,0,ze,Ee,ue.data)}else if(T.isDataArrayTexture)je?(rt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Oe,ge,q.width,q.height,q.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,ze,Ee,q.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ge,q.width,q.height,q.depth,0,ze,Ee,q.data);else if(T.isData3DTexture)je?(rt&&t.texStorage3D(s.TEXTURE_3D,Oe,ge,q.width,q.height,q.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,ze,Ee,q.data)):t.texImage3D(s.TEXTURE_3D,0,ge,q.width,q.height,q.depth,0,ze,Ee,q.data);else if(T.isFramebufferTexture){if(rt)if(je)t.texStorage2D(s.TEXTURE_2D,Oe,ge,q.width,q.height);else{let te=q.width,L=q.height;for(let ie=0;ie<Oe;ie++)t.texImage2D(s.TEXTURE_2D,ie,ge,te,L,0,ze,Ee,null),te>>=1,L>>=1}}else if(Pe.length>0&&Ze){je&&rt&&t.texStorage2D(s.TEXTURE_2D,Oe,ge,Pe[0].width,Pe[0].height);for(let te=0,L=Pe.length;te<L;te++)ue=Pe[te],je?t.texSubImage2D(s.TEXTURE_2D,te,0,0,ze,Ee,ue):t.texImage2D(s.TEXTURE_2D,te,ge,ze,Ee,ue);T.generateMipmaps=!1}else je?(rt&&t.texStorage2D(s.TEXTURE_2D,Oe,ge,q.width,q.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ze,Ee,q)):t.texImage2D(s.TEXTURE_2D,0,ge,ze,Ee,q);S(T,Ze)&&v(K),de.__version=Q.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function me(C,T,B){if(T.image.length!==6)return;const K=Y(C,T),$=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+B);const Q=n.get($);if($.version!==Q.__version||K===!0){t.activeTexture(s.TEXTURE0+B);const de=We.getPrimaries(We.workingColorSpace),re=T.colorSpace===Vt?null:We.getPrimaries(T.colorSpace),le=T.colorSpace===Vt||de===re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const be=T.isCompressedTexture||T.image[0].isCompressedTexture,Ue=T.image[0]&&T.image[0].isDataTexture,q=[];for(let te=0;te<6;te++)!be&&!Ue?q[te]=_(T.image[te],!1,!0,i.maxCubemapSize):q[te]=Ue?T.image[te].image:T.image[te],q[te]=De(T,q[te]);const Ze=q[0],ze=m(Ze)||o,Ee=r.convert(T.format,T.colorSpace),ge=r.convert(T.type),ue=b(T.internalFormat,Ee,ge,T.colorSpace),Pe=o&&T.isVideoTexture!==!0,je=Q.__version===void 0||K===!0;let rt=E(T,Ze,ze);V(s.TEXTURE_CUBE_MAP,T,ze);let Oe;if(be){Pe&&je&&t.texStorage2D(s.TEXTURE_CUBE_MAP,rt,ue,Ze.width,Ze.height);for(let te=0;te<6;te++){Oe=q[te].mipmaps;for(let L=0;L<Oe.length;L++){const ie=Oe[L];T.format!==Bt?Ee!==null?Pe?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,L,0,0,ie.width,ie.height,Ee,ie.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,L,ue,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,L,0,0,ie.width,ie.height,Ee,ge,ie.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,L,ue,ie.width,ie.height,0,Ee,ge,ie.data)}}}else{Oe=T.mipmaps,Pe&&je&&(Oe.length>0&&rt++,t.texStorage2D(s.TEXTURE_CUBE_MAP,rt,ue,q[0].width,q[0].height));for(let te=0;te<6;te++)if(Ue){Pe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,q[te].width,q[te].height,Ee,ge,q[te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ue,q[te].width,q[te].height,0,Ee,ge,q[te].data);for(let L=0;L<Oe.length;L++){const se=Oe[L].image[te].image;Pe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,L+1,0,0,se.width,se.height,Ee,ge,se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,L+1,ue,se.width,se.height,0,Ee,ge,se.data)}}else{Pe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ee,ge,q[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ue,Ee,ge,q[te]);for(let L=0;L<Oe.length;L++){const ie=Oe[L];Pe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,L+1,0,0,Ee,ge,ie.image[te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+te,L+1,ue,Ee,ge,ie.image[te])}}}S(T,ze)&&v(s.TEXTURE_CUBE_MAP),Q.__version=$.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function pe(C,T,B,K,$,Q){const de=r.convert(B.format,B.colorSpace),re=r.convert(B.type),le=b(B.internalFormat,de,re,B.colorSpace);if(!n.get(T).__hasExternalTextures){const Ue=Math.max(1,T.width>>Q),q=Math.max(1,T.height>>Q);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?t.texImage3D($,Q,le,Ue,q,T.depth,0,de,re,null):t.texImage2D($,Q,le,Ue,q,0,de,re,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),he(T)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,$,n.get(B).__webglTexture,0,Ae(T)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,$,n.get(B).__webglTexture,Q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ce(C,T,B){if(s.bindRenderbuffer(s.RENDERBUFFER,C),T.depthBuffer&&!T.stencilBuffer){let K=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(B||he(T)){const $=T.depthTexture;$&&$.isDepthTexture&&($.type===gn?K=s.DEPTH_COMPONENT32F:$.type===wn&&(K=s.DEPTH_COMPONENT24));const Q=Ae(T);he(T)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Q,K,T.width,T.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,K,T.width,T.height)}else s.renderbufferStorage(s.RENDERBUFFER,K,T.width,T.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,C)}else if(T.depthBuffer&&T.stencilBuffer){const K=Ae(T);B&&he(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,K,s.DEPTH24_STENCIL8,T.width,T.height):he(T)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,K,s.DEPTH24_STENCIL8,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,C)}else{const K=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let $=0;$<K.length;$++){const Q=K[$],de=r.convert(Q.format,Q.colorSpace),re=r.convert(Q.type),le=b(Q.internalFormat,de,re,Q.colorSpace),be=Ae(T);B&&he(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,le,T.width,T.height):he(T)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,le,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,le,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Le(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),H(T.depthTexture,0);const K=n.get(T.depthTexture).__webglTexture,$=Ae(T);if(T.depthTexture.format===Jn)he(T)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(T.depthTexture.format===Ri)he(T)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Se(C){const T=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Le(T.__webglFramebuffer,C)}else if(B){T.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[K]),T.__webglDepthbuffer[K]=s.createRenderbuffer(),Ce(T.__webglDepthbuffer[K],C,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=s.createRenderbuffer(),Ce(T.__webglDepthbuffer,C,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ve(C,T,B){const K=n.get(C);T!==void 0&&pe(K.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&Se(C)}function O(C){const T=C.texture,B=n.get(C),K=n.get(T);C.addEventListener("dispose",R),C.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=T.version,a.memory.textures++);const $=C.isWebGLCubeRenderTarget===!0,Q=C.isWebGLMultipleRenderTargets===!0,de=m(C)||o;if($){B.__webglFramebuffer=[];for(let re=0;re<6;re++)if(o&&T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer[re]=[];for(let le=0;le<T.mipmaps.length;le++)B.__webglFramebuffer[re][le]=s.createFramebuffer()}else B.__webglFramebuffer[re]=s.createFramebuffer()}else{if(o&&T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer=[];for(let re=0;re<T.mipmaps.length;re++)B.__webglFramebuffer[re]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(Q)if(i.drawBuffers){const re=C.texture;for(let le=0,be=re.length;le<be;le++){const Ue=n.get(re[le]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&he(C)===!1){const re=Q?T:[T];B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let le=0;le<re.length;le++){const be=re[le];B.__webglColorRenderbuffer[le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[le]);const Ue=r.convert(be.format,be.colorSpace),q=r.convert(be.type),Ze=b(be.internalFormat,Ue,q,be.colorSpace,C.isXRRenderTarget===!0),ze=Ae(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,ze,Ze,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+le,s.RENDERBUFFER,B.__webglColorRenderbuffer[le])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Ce(B.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),V(s.TEXTURE_CUBE_MAP,T,de);for(let re=0;re<6;re++)if(o&&T.mipmaps&&T.mipmaps.length>0)for(let le=0;le<T.mipmaps.length;le++)pe(B.__webglFramebuffer[re][le],C,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,le);else pe(B.__webglFramebuffer[re],C,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);S(T,de)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){const re=C.texture;for(let le=0,be=re.length;le<be;le++){const Ue=re[le],q=n.get(Ue);t.bindTexture(s.TEXTURE_2D,q.__webglTexture),V(s.TEXTURE_2D,Ue,de),pe(B.__webglFramebuffer,C,Ue,s.COLOR_ATTACHMENT0+le,s.TEXTURE_2D,0),S(Ue,de)&&v(s.TEXTURE_2D)}t.unbindTexture()}else{let re=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?re=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,K.__webglTexture),V(re,T,de),o&&T.mipmaps&&T.mipmaps.length>0)for(let le=0;le<T.mipmaps.length;le++)pe(B.__webglFramebuffer[le],C,T,s.COLOR_ATTACHMENT0,re,le);else pe(B.__webglFramebuffer,C,T,s.COLOR_ATTACHMENT0,re,0);S(T,de)&&v(re),t.unbindTexture()}C.depthBuffer&&Se(C)}function Et(C){const T=m(C)||o,B=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let K=0,$=B.length;K<$;K++){const Q=B[K];if(S(Q,T)){const de=C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,re=n.get(Q).__webglTexture;t.bindTexture(de,re),v(de),t.unbindTexture()}}}function _e(C){if(o&&C.samples>0&&he(C)===!1){const T=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],B=C.width,K=C.height;let $=s.COLOR_BUFFER_BIT;const Q=[],de=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=n.get(C),le=C.isWebGLMultipleRenderTargets===!0;if(le)for(let be=0;be<T.length;be++)t.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let be=0;be<T.length;be++){Q.push(s.COLOR_ATTACHMENT0+be),C.depthBuffer&&Q.push(de);const Ue=re.__ignoreDepthValues!==void 0?re.__ignoreDepthValues:!1;if(Ue===!1&&(C.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),le&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,re.__webglColorRenderbuffer[be]),Ue===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[de]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[de])),le){const q=n.get(T[be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,q,0)}s.blitFramebuffer(0,0,B,K,0,0,B,K,$,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),le)for(let be=0;be<T.length;be++){t.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,re.__webglColorRenderbuffer[be]);const Ue=n.get(T[be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,Ue,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}}function Ae(C){return Math.min(i.maxSamples,C.samples)}function he(C){const T=n.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function nt(C){const T=a.render.frame;h.get(C)!==T&&(h.set(C,T),C.update())}function De(C,T){const B=C.colorSpace,K=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===ao||B!==gt&&B!==Vt&&(We.getTransfer(B)===tt?o===!1?e.has("EXT_sRGB")===!0&&K===Bt?(C.format=ao,C.minFilter=St,C.generateMipmaps=!1):T=pl.sRGBToLinear(T):(K!==Bt||$!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),T}this.allocateTextureUnit=P,this.resetTextureUnits=J,this.setTexture2D=H,this.setTexture2DArray=X,this.setTexture3D=W,this.setTextureCube=j,this.rebindTextures=Ve,this.setupRenderTarget=O,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=he}function Rg(s,e,t){const n=t.isWebGL2;function i(r,a=Vt){let o;const c=We.getTransfer(a);if(r===Dn)return s.UNSIGNED_BYTE;if(r===il)return s.UNSIGNED_SHORT_4_4_4_4;if(r===sl)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Yu)return s.BYTE;if(r===qu)return s.SHORT;if(r===wo)return s.UNSIGNED_SHORT;if(r===nl)return s.INT;if(r===wn)return s.UNSIGNED_INT;if(r===gn)return s.FLOAT;if(r===ns)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===$u)return s.ALPHA;if(r===Bt)return s.RGBA;if(r===Ku)return s.LUMINANCE;if(r===Ju)return s.LUMINANCE_ALPHA;if(r===Jn)return s.DEPTH_COMPONENT;if(r===Ri)return s.DEPTH_STENCIL;if(r===ao)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Qu)return s.RED;if(r===rl)return s.RED_INTEGER;if(r===eh)return s.RG;if(r===ol)return s.RG_INTEGER;if(r===al)return s.RGBA_INTEGER;if(r===lr||r===ur||r===hr||r===dr)if(c===tt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===lr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ur)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===hr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===dr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===lr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ur)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===hr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===dr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===na||r===ia||r===sa||r===ra)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===na)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ia)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===sa)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ra)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===cl)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===oa||r===aa)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===oa)return c===tt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===aa)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ca||r===la||r===ua||r===ha||r===da||r===fa||r===pa||r===ma||r===ga||r===_a||r===va||r===xa||r===ba||r===Sa)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===ca)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===la)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ua)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ha)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===da)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===fa)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===pa)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ma)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ga)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===_a)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===va)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===xa)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ba)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Sa)return c===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===fr||r===ya||r===Ma)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===fr)return c===tt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ya)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ma)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===th||r===Ta||r===Ea||r===Aa)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===fr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Ta)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ea)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Aa)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Kn?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Lg extends Pt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $n extends st{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pg={type:"move"};class Fr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pg)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new $n;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Ig extends Ni{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=t.getContextAttributes();let m=null,p=null;const S=[],v=[],b=new He;let E=null;const y=new Pt;y.layers.enable(1),y.viewport=new $e;const w=new Pt;w.layers.enable(2),w.viewport=new $e;const R=[y,w],x=new Lg;x.layers.enable(1),x.layers.enable(2);let M=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Y=S[V];return Y===void 0&&(Y=new Fr,S[V]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(V){let Y=S[V];return Y===void 0&&(Y=new Fr,S[V]=Y),Y.getGripSpace()},this.getHand=function(V){let Y=S[V];return Y===void 0&&(Y=new Fr,S[V]=Y),Y.getHandSpace()};function G(V){const Y=v.indexOf(V.inputSource);if(Y===-1)return;const oe=S[Y];oe!==void 0&&(oe.update(V.inputSource,V.frame,l||a),oe.dispatchEvent({type:V.type,data:V.inputSource}))}function J(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",P);for(let V=0;V<S.length;V++){const Y=v[V];Y!==null&&(v[V]=null,S[V].disconnect(Y))}M=null,D=null,e.setRenderTarget(m),f=null,d=null,u=null,i=null,p=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",J),i.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(b),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Y),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new ei(f.framebufferWidth,f.framebufferHeight,{format:Bt,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Y=null,oe=null,me=null;_.depth&&(me=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=_.stencil?Ri:Jn,oe=_.stencil?Kn:wn);const pe={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(pe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new ei(d.textureWidth,d.textureHeight,{format:Bt,type:Dn,depthTexture:new El(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ce=e.properties.get(p);Ce.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ce.setContext(i),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function P(V){for(let Y=0;Y<V.removed.length;Y++){const oe=V.removed[Y],me=v.indexOf(oe);me>=0&&(v[me]=null,S[me].disconnect(oe))}for(let Y=0;Y<V.added.length;Y++){const oe=V.added[Y];let me=v.indexOf(oe);if(me===-1){for(let Ce=0;Ce<S.length;Ce++)if(Ce>=v.length){v.push(oe),me=Ce;break}else if(v[Ce]===null){v[Ce]=oe,me=Ce;break}if(me===-1)break}const pe=S[me];pe&&pe.connect(oe)}}const N=new I,H=new I;function X(V,Y,oe){N.setFromMatrixPosition(Y.matrixWorld),H.setFromMatrixPosition(oe.matrixWorld);const me=N.distanceTo(H),pe=Y.projectionMatrix.elements,Ce=oe.projectionMatrix.elements,Le=pe[14]/(pe[10]-1),Se=pe[14]/(pe[10]+1),Ve=(pe[9]+1)/pe[5],O=(pe[9]-1)/pe[5],Et=(pe[8]-1)/pe[0],_e=(Ce[8]+1)/Ce[0],Ae=Le*Et,he=Le*_e,nt=me/(-Et+_e),De=nt*-Et;Y.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(De),V.translateZ(nt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const C=Le+nt,T=Se+nt,B=Ae-De,K=he+(me-De),$=Ve*Se/T*C,Q=O*Se/T*C;V.projectionMatrix.makePerspective(B,K,$,Q,C,T),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function W(V,Y){Y===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Y.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;x.near=w.near=y.near=V.near,x.far=w.far=y.far=V.far,(M!==x.near||D!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),M=x.near,D=x.far);const Y=V.parent,oe=x.cameras;W(x,Y);for(let me=0;me<oe.length;me++)W(oe[me],Y);oe.length===2?X(x,y,w):x.projectionMatrix.copy(y.projectionMatrix),j(V,x,Y)};function j(V,Y,oe){oe===null?V.matrix.copy(Y.matrixWorld):(V.matrix.copy(oe.matrixWorld),V.matrix.invert(),V.matrix.multiply(Y.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Y.projectionMatrix),V.projectionMatrixInverse.copy(Y.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Pi*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(V){c=V,d!==null&&(d.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)};let Z=null;function ee(V,Y){if(h=Y.getViewerPose(l||a),g=Y,h!==null){const oe=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let me=!1;oe.length!==x.cameras.length&&(x.cameras.length=0,me=!0);for(let pe=0;pe<oe.length;pe++){const Ce=oe[pe];let Le=null;if(f!==null)Le=f.getViewport(Ce);else{const Ve=u.getViewSubImage(d,Ce);Le=Ve.viewport,pe===0&&(e.setRenderTargetTextures(p,Ve.colorTexture,d.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(p))}let Se=R[pe];Se===void 0&&(Se=new Pt,Se.layers.enable(pe),Se.viewport=new $e,R[pe]=Se),Se.matrix.fromArray(Ce.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(Ce.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Le.x,Le.y,Le.width,Le.height),pe===0&&(x.matrix.copy(Se.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),me===!0&&x.cameras.push(Se)}}for(let oe=0;oe<S.length;oe++){const me=v[oe],pe=S[oe];me!==null&&pe!==void 0&&pe.update(me,Y,l||a)}Z&&Z(V,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}const ce=new Tl;ce.setAnimationLoop(ee),this.setAnimationLoop=function(V){Z=V},this.dispose=function(){}}}function Dg(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Sl(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,v,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,S,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ut&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ut&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ut&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ug(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(S,v){const b=v.program;n.uniformBlockBinding(S,b)}function l(S,v){let b=i[S.id];b===void 0&&(g(S),b=h(S),i[S.id]=b,S.addEventListener("dispose",m));const E=v.program;n.updateUBOMapping(S,E);const y=e.render.frame;r[S.id]!==y&&(d(S),r[S.id]=y)}function h(S){const v=u();S.__bindingPointIndex=v;const b=s.createBuffer(),E=S.__size,y=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,E,y),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,b),b}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const v=i[S.id],b=S.uniforms,E=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let y=0,w=b.length;y<w;y++){const R=Array.isArray(b[y])?b[y]:[b[y]];for(let x=0,M=R.length;x<M;x++){const D=R[x];if(f(D,y,x,E)===!0){const G=D.__offset,J=Array.isArray(D.value)?D.value:[D.value];let P=0;for(let N=0;N<J.length;N++){const H=J[N],X=_(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,G+P,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,P),P+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(S,v,b,E){const y=S.value,w=v+"_"+b;if(E[w]===void 0)return typeof y=="number"||typeof y=="boolean"?E[w]=y:E[w]=y.clone(),!0;{const R=E[w];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return E[w]=y,!0}else if(R.equals(y)===!1)return R.copy(y),!0}return!1}function g(S){const v=S.uniforms;let b=0;const E=16;for(let w=0,R=v.length;w<R;w++){const x=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,D=x.length;M<D;M++){const G=x[M],J=Array.isArray(G.value)?G.value:[G.value];for(let P=0,N=J.length;P<N;P++){const H=J[P],X=_(H),W=b%E;W!==0&&E-W<X.boundary&&(b+=E-W),G.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=b,b+=X.storage}}}const y=b%E;return y>0&&(b+=E-y),S.__size=b,S.__cache={},this}function _(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function m(S){const v=S.target;v.removeEventListener("dispose",m);const b=a.indexOf(v.__bindingPointIndex);a.splice(b,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function p(){for(const S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}class Pl{constructor(e={}){const{canvas:t=Rh(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this._useLegacyLights=!1,this.toneMapping=In,this.toneMappingExposure=1;const v=this;let b=!1,E=0,y=0,w=null,R=-1,x=null;const M=new $e,D=new $e;let G=null;const J=new Te(0);let P=0,N=t.width,H=t.height,X=1,W=null,j=null;const Z=new $e(0,0,N,H),ee=new $e(0,0,N,H);let ce=!1;const V=new Lo;let Y=!1,oe=!1,me=null;const pe=new ke,Ce=new He,Le=new I,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return w===null?X:1}let O=n;function Et(A,U){for(let k=0;k<A.length;k++){const z=A[k],F=t.getContext(z,U);if(F!==null)return F}return null}try{const A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ao}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",L,!1),t.addEventListener("webglcontextcreationerror",ie,!1),O===null){const U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),O=Et(U,A),O===null)throw Et(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let _e,Ae,he,nt,De,C,T,B,K,$,Q,de,re,le,be,Ue,q,Ze,ze,Ee,ge,ue,Pe,je;function rt(){_e=new Wp(O),Ae=new Bp(O,_e,e),_e.init(Ae),ue=new Rg(O,_e,Ae),he=new wg(O,_e,Ae),nt=new Zp(O),De=new fg,C=new Cg(O,_e,he,De,Ae,ue,nt),T=new zp(v),B=new Vp(v),K=new ed(O,Ae),Pe=new Op(O,_e,K,Ae),$=new jp(O,K,nt,Pe),Q=new Kp(O,$,K,nt),ze=new $p(O,Ae,C),Ue=new kp(De),de=new dg(v,T,B,_e,Ae,Pe,Ue),re=new Dg(v,De),le=new mg,be=new Sg(_e,Ae),Ze=new Np(v,T,B,he,Q,d,c),q=new Ag(v,Q,Ae),je=new Ug(O,nt,Ae,he),Ee=new Fp(O,_e,nt,Ae),ge=new Xp(O,_e,nt,Ae),nt.programs=de.programs,v.capabilities=Ae,v.extensions=_e,v.properties=De,v.renderLists=le,v.shadowMap=q,v.state=he,v.info=nt}rt();const Oe=new Ig(v,O);this.xr=Oe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=_e.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=_e.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(N,H,!1))},this.getSize=function(A){return A.set(N,H)},this.setSize=function(A,U,k=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=A,H=U,t.width=Math.floor(A*X),t.height=Math.floor(U*X),k===!0&&(t.style.width=A+"px",t.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(N*X,H*X).floor()},this.setDrawingBufferSize=function(A,U,k){N=A,H=U,X=k,t.width=Math.floor(A*k),t.height=Math.floor(U*k),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(M)},this.getViewport=function(A){return A.copy(Z)},this.setViewport=function(A,U,k,z){A.isVector4?Z.set(A.x,A.y,A.z,A.w):Z.set(A,U,k,z),he.viewport(M.copy(Z).multiplyScalar(X).floor())},this.getScissor=function(A){return A.copy(ee)},this.setScissor=function(A,U,k,z){A.isVector4?ee.set(A.x,A.y,A.z,A.w):ee.set(A,U,k,z),he.scissor(D.copy(ee).multiplyScalar(X).floor())},this.getScissorTest=function(){return ce},this.setScissorTest=function(A){he.setScissorTest(ce=A)},this.setOpaqueSort=function(A){W=A},this.setTransparentSort=function(A){j=A},this.getClearColor=function(A){return A.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(A=!0,U=!0,k=!0){let z=0;if(A){let F=!1;if(w!==null){const ae=w.texture.format;F=ae===al||ae===ol||ae===rl}if(F){const ae=w.texture.type,fe=ae===Dn||ae===wn||ae===wo||ae===Kn||ae===il||ae===sl,xe=Ze.getClearColor(),Me=Ze.getClearAlpha(),Ne=xe.r,we=xe.g,Re=xe.b;fe?(f[0]=Ne,f[1]=we,f[2]=Re,f[3]=Me,O.clearBufferuiv(O.COLOR,0,f)):(g[0]=Ne,g[1]=we,g[2]=Re,g[3]=Me,O.clearBufferiv(O.COLOR,0,g))}else z|=O.COLOR_BUFFER_BIT}U&&(z|=O.DEPTH_BUFFER_BIT),k&&(z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",L,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),le.dispose(),be.dispose(),De.dispose(),T.dispose(),B.dispose(),Q.dispose(),Pe.dispose(),je.dispose(),de.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",At),Oe.removeEventListener("sessionend",Qe),me&&(me.dispose(),me=null),wt.stop()};function te(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const A=nt.autoReset,U=q.enabled,k=q.autoUpdate,z=q.needsUpdate,F=q.type;rt(),nt.autoReset=A,q.enabled=U,q.autoUpdate=k,q.needsUpdate=z,q.type=F}function ie(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function se(A){const U=A.target;U.removeEventListener("dispose",se),ye(U)}function ye(A){ve(A),De.remove(A)}function ve(A){const U=De.get(A).programs;U!==void 0&&(U.forEach(function(k){de.releaseProgram(k)}),A.isShaderMaterial&&de.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,k,z,F,ae){U===null&&(U=Se);const fe=F.isMesh&&F.matrixWorld.determinant()<0,xe=ou(A,U,k,z,F);he.setMaterial(z,fe);let Me=k.index,Ne=1;if(z.wireframe===!0){if(Me=$.getWireframeAttribute(k),Me===void 0)return;Ne=2}const we=k.drawRange,Re=k.attributes.position;let at=we.start*Ne,Nt=(we.start+we.count)*Ne;ae!==null&&(at=Math.max(at,ae.start*Ne),Nt=Math.min(Nt,(ae.start+ae.count)*Ne)),Me!==null?(at=Math.max(at,0),Nt=Math.min(Nt,Me.count)):Re!=null&&(at=Math.max(at,0),Nt=Math.min(Nt,Re.count));const dt=Nt-at;if(dt<0||dt===1/0)return;Pe.setup(F,z,xe,k,Me);let cn,it=Ee;if(Me!==null&&(cn=K.get(Me),it=ge,it.setIndex(cn)),F.isMesh)z.wireframe===!0?(he.setLineWidth(z.wireframeLinewidth*Ve()),it.setMode(O.LINES)):it.setMode(O.TRIANGLES);else if(F.isLine){let Fe=z.linewidth;Fe===void 0&&(Fe=1),he.setLineWidth(Fe*Ve()),F.isLineSegments?it.setMode(O.LINES):F.isLineLoop?it.setMode(O.LINE_LOOP):it.setMode(O.LINE_STRIP)}else F.isPoints?it.setMode(O.POINTS):F.isSprite&&it.setMode(O.TRIANGLES);if(F.isBatchedMesh)it.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)it.renderInstances(at,dt,F.count);else if(k.isInstancedBufferGeometry){const Fe=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,rr=Math.min(k.instanceCount,Fe);it.renderInstances(at,dt,rr)}else it.render(at,dt)};function Ke(A,U,k){A.transparent===!0&&A.side===Ht&&A.forceSinglePass===!1?(A.side=Ut,A.needsUpdate=!0,cs(A,U,k),A.side=Tt,A.needsUpdate=!0,cs(A,U,k),A.side=Ht):cs(A,U,k)}this.compile=function(A,U,k=null){k===null&&(k=A),m=be.get(k),m.init(),S.push(m),k.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),A!==k&&A.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights(v._useLegacyLights);const z=new Set;return A.traverse(function(F){const ae=F.material;if(ae)if(Array.isArray(ae))for(let fe=0;fe<ae.length;fe++){const xe=ae[fe];Ke(xe,k,F),z.add(xe)}else Ke(ae,k,F),z.add(ae)}),S.pop(),m=null,z},this.compileAsync=function(A,U,k=null){const z=this.compile(A,U,k);return new Promise(F=>{function ae(){if(z.forEach(function(fe){De.get(fe).currentProgram.isReady()&&z.delete(fe)}),z.size===0){F(A);return}setTimeout(ae,10)}_e.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Je=null;function ht(A){Je&&Je(A)}function At(){wt.stop()}function Qe(){wt.start()}const wt=new Tl;wt.setAnimationLoop(ht),typeof self<"u"&&wt.setContext(self),this.setAnimationLoop=function(A){Je=A,Oe.setAnimationLoop(A),A===null?wt.stop():wt.start()},Oe.addEventListener("sessionstart",At),Oe.addEventListener("sessionend",Qe),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(U),U=Oe.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,U,w),m=be.get(A,S.length),m.init(),S.push(m),pe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),V.setFromProjectionMatrix(pe),oe=this.localClippingEnabled,Y=Ue.init(this.clippingPlanes,oe),_=le.get(A,p.length),_.init(),p.push(_),Qt(A,U,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(W,j),this.info.render.frame++,Y===!0&&Ue.beginShadows();const k=m.state.shadowsArray;if(q.render(k,A,U),Y===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ze.render(_,A),m.setupLights(v._useLegacyLights),U.isArrayCamera){const z=U.cameras;for(let F=0,ae=z.length;F<ae;F++){const fe=z[F];Vo(_,A,fe,fe.viewport)}}else Vo(_,A,U);w!==null&&(C.updateMultisampleRenderTarget(w),C.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(v,A,U),Pe.resetDefaultState(),R=-1,x=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Qt(A,U,k,z){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)k=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||V.intersectsSprite(A)){z&&Le.setFromMatrixPosition(A.matrixWorld).applyMatrix4(pe);const fe=Q.update(A),xe=A.material;xe.visible&&_.push(A,fe,xe,k,Le.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||V.intersectsObject(A))){const fe=Q.update(A),xe=A.material;if(z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Le.copy(A.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Le.copy(fe.boundingSphere.center)),Le.applyMatrix4(A.matrixWorld).applyMatrix4(pe)),Array.isArray(xe)){const Me=fe.groups;for(let Ne=0,we=Me.length;Ne<we;Ne++){const Re=Me[Ne],at=xe[Re.materialIndex];at&&at.visible&&_.push(A,fe,at,k,Le.z,Re)}}else xe.visible&&_.push(A,fe,xe,k,Le.z,null)}}const ae=A.children;for(let fe=0,xe=ae.length;fe<xe;fe++)Qt(ae[fe],U,k,z)}function Vo(A,U,k,z){const F=A.opaque,ae=A.transmissive,fe=A.transparent;m.setupLightsView(k),Y===!0&&Ue.setGlobalState(v.clippingPlanes,k),ae.length>0&&ru(F,ae,U,k),z&&he.viewport(M.copy(z)),F.length>0&&as(F,U,k),ae.length>0&&as(ae,U,k),fe.length>0&&as(fe,U,k),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function ru(A,U,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;const ae=Ae.isWebGL2;me===null&&(me=new ei(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?ns:Dn,minFilter:Qn,samples:ae?4:0})),v.getDrawingBufferSize(Ce),ae?me.setSize(Ce.x,Ce.y):me.setSize($s(Ce.x),$s(Ce.y));const fe=v.getRenderTarget();v.setRenderTarget(me),v.getClearColor(J),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const xe=v.toneMapping;v.toneMapping=In,as(A,k,z),C.updateMultisampleRenderTarget(me),C.updateRenderTargetMipmap(me);let Me=!1;for(let Ne=0,we=U.length;Ne<we;Ne++){const Re=U[Ne],at=Re.object,Nt=Re.geometry,dt=Re.material,cn=Re.group;if(dt.side===Ht&&at.layers.test(z.layers)){const it=dt.side;dt.side=Ut,dt.needsUpdate=!0,Wo(at,k,z,Nt,dt,cn),dt.side=it,dt.needsUpdate=!0,Me=!0}}Me===!0&&(C.updateMultisampleRenderTarget(me),C.updateRenderTargetMipmap(me)),v.setRenderTarget(fe),v.setClearColor(J,P),v.toneMapping=xe}function as(A,U,k){const z=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ae=A.length;F<ae;F++){const fe=A[F],xe=fe.object,Me=fe.geometry,Ne=z===null?fe.material:z,we=fe.group;xe.layers.test(k.layers)&&Wo(xe,U,k,Me,Ne,we)}}function Wo(A,U,k,z,F,ae){A.onBeforeRender(v,U,k,z,F,ae),A.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),F.onBeforeRender(v,U,k,z,A,ae),F.transparent===!0&&F.side===Ht&&F.forceSinglePass===!1?(F.side=Ut,F.needsUpdate=!0,v.renderBufferDirect(k,U,z,F,A,ae),F.side=Tt,F.needsUpdate=!0,v.renderBufferDirect(k,U,z,F,A,ae),F.side=Ht):v.renderBufferDirect(k,U,z,F,A,ae),A.onAfterRender(v,U,k,z,F,ae)}function cs(A,U,k){U.isScene!==!0&&(U=Se);const z=De.get(A),F=m.state.lights,ae=m.state.shadowsArray,fe=F.state.version,xe=de.getParameters(A,F.state,ae,U,k),Me=de.getProgramCacheKey(xe);let Ne=z.programs;z.environment=A.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(A.isMeshStandardMaterial?B:T).get(A.envMap||z.environment),Ne===void 0&&(A.addEventListener("dispose",se),Ne=new Map,z.programs=Ne);let we=Ne.get(Me);if(we!==void 0){if(z.currentProgram===we&&z.lightsStateVersion===fe)return Xo(A,xe),we}else xe.uniforms=de.getUniforms(A),A.onBuild(k,xe,v),A.onBeforeCompile(xe,v),we=de.acquireProgram(xe,Me),Ne.set(Me,we),z.uniforms=xe.uniforms;const Re=z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Re.clippingPlanes=Ue.uniform),Xo(A,xe),z.needsLights=cu(A),z.lightsStateVersion=fe,z.needsLights&&(Re.ambientLightColor.value=F.state.ambient,Re.lightProbe.value=F.state.probe,Re.directionalLights.value=F.state.directional,Re.directionalLightShadows.value=F.state.directionalShadow,Re.spotLights.value=F.state.spot,Re.spotLightShadows.value=F.state.spotShadow,Re.rectAreaLights.value=F.state.rectArea,Re.ltc_1.value=F.state.rectAreaLTC1,Re.ltc_2.value=F.state.rectAreaLTC2,Re.pointLights.value=F.state.point,Re.pointLightShadows.value=F.state.pointShadow,Re.hemisphereLights.value=F.state.hemi,Re.directionalShadowMap.value=F.state.directionalShadowMap,Re.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Re.spotShadowMap.value=F.state.spotShadowMap,Re.spotLightMatrix.value=F.state.spotLightMatrix,Re.spotLightMap.value=F.state.spotLightMap,Re.pointShadowMap.value=F.state.pointShadowMap,Re.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=we,z.uniformsList=null,we}function jo(A){if(A.uniformsList===null){const U=A.currentProgram.getUniforms();A.uniformsList=Gs.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function Xo(A,U){const k=De.get(A);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function ou(A,U,k,z,F){U.isScene!==!0&&(U=Se),C.resetTextureUnits();const ae=U.fog,fe=z.isMeshStandardMaterial?U.environment:null,xe=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:gt,Me=(z.isMeshStandardMaterial?B:T).get(z.envMap||fe),Ne=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,we=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Re=!!k.morphAttributes.position,at=!!k.morphAttributes.normal,Nt=!!k.morphAttributes.color;let dt=In;z.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(dt=v.toneMapping);const cn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,it=cn!==void 0?cn.length:0,Fe=De.get(z),rr=m.state.lights;if(Y===!0&&(oe===!0||A!==x)){const kt=A===x&&z.id===R;Ue.setState(z,A,kt)}let ot=!1;z.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==rr.state.version||Fe.outputColorSpace!==xe||F.isBatchedMesh&&Fe.batching===!1||!F.isBatchedMesh&&Fe.batching===!0||F.isInstancedMesh&&Fe.instancing===!1||!F.isInstancedMesh&&Fe.instancing===!0||F.isSkinnedMesh&&Fe.skinning===!1||!F.isSkinnedMesh&&Fe.skinning===!0||F.isInstancedMesh&&Fe.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Fe.instancingColor===!1&&F.instanceColor!==null||Fe.envMap!==Me||z.fog===!0&&Fe.fog!==ae||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Ue.numPlanes||Fe.numIntersection!==Ue.numIntersection)||Fe.vertexAlphas!==Ne||Fe.vertexTangents!==we||Fe.morphTargets!==Re||Fe.morphNormals!==at||Fe.morphColors!==Nt||Fe.toneMapping!==dt||Ae.isWebGL2===!0&&Fe.morphTargetsCount!==it)&&(ot=!0):(ot=!0,Fe.__version=z.version);let Bn=Fe.currentProgram;ot===!0&&(Bn=cs(z,U,F));let Zo=!1,zi=!1,or=!1;const _t=Bn.getUniforms(),kn=Fe.uniforms;if(he.useProgram(Bn.program)&&(Zo=!0,zi=!0,or=!0),z.id!==R&&(R=z.id,zi=!0),Zo||x!==A){_t.setValue(O,"projectionMatrix",A.projectionMatrix),_t.setValue(O,"viewMatrix",A.matrixWorldInverse);const kt=_t.map.cameraPosition;kt!==void 0&&kt.setValue(O,Le.setFromMatrixPosition(A.matrixWorld)),Ae.logarithmicDepthBuffer&&_t.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&_t.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),x!==A&&(x=A,zi=!0,or=!0)}if(F.isSkinnedMesh){_t.setOptional(O,F,"bindMatrix"),_t.setOptional(O,F,"bindMatrixInverse");const kt=F.skeleton;kt&&(Ae.floatVertexTextures?(kt.boneTexture===null&&kt.computeBoneTexture(),_t.setValue(O,"boneTexture",kt.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(_t.setOptional(O,F,"batchingTexture"),_t.setValue(O,"batchingTexture",F._matricesTexture,C));const ar=k.morphAttributes;if((ar.position!==void 0||ar.normal!==void 0||ar.color!==void 0&&Ae.isWebGL2===!0)&&ze.update(F,k,Bn),(zi||Fe.receiveShadow!==F.receiveShadow)&&(Fe.receiveShadow=F.receiveShadow,_t.setValue(O,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(kn.envMap.value=Me,kn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),zi&&(_t.setValue(O,"toneMappingExposure",v.toneMappingExposure),Fe.needsLights&&au(kn,or),ae&&z.fog===!0&&re.refreshFogUniforms(kn,ae),re.refreshMaterialUniforms(kn,z,X,H,me),Gs.upload(O,jo(Fe),kn,C)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Gs.upload(O,jo(Fe),kn,C),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&_t.setValue(O,"center",F.center),_t.setValue(O,"modelViewMatrix",F.modelViewMatrix),_t.setValue(O,"normalMatrix",F.normalMatrix),_t.setValue(O,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const kt=z.uniformsGroups;for(let cr=0,lu=kt.length;cr<lu;cr++)if(Ae.isWebGL2){const Yo=kt[cr];je.update(Yo,Bn),je.bind(Yo,Bn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Bn}function au(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function cu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,U,k){De.get(A.texture).__webglTexture=U,De.get(A.depthTexture).__webglTexture=k;const z=De.get(A);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,U){const k=De.get(A);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,k=0){w=A,E=U,y=k;let z=!0,F=null,ae=!1,fe=!1;if(A){const Me=De.get(A);Me.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(O.FRAMEBUFFER,null),z=!1):Me.__webglFramebuffer===void 0?C.setupRenderTarget(A):Me.__hasExternalTextures&&C.rebindTextures(A,De.get(A.texture).__webglTexture,De.get(A.depthTexture).__webglTexture);const Ne=A.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(fe=!0);const we=De.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(we[U])?F=we[U][k]:F=we[U],ae=!0):Ae.isWebGL2&&A.samples>0&&C.useMultisampledRTT(A)===!1?F=De.get(A).__webglMultisampledFramebuffer:Array.isArray(we)?F=we[k]:F=we,M.copy(A.viewport),D.copy(A.scissor),G=A.scissorTest}else M.copy(Z).multiplyScalar(X).floor(),D.copy(ee).multiplyScalar(X).floor(),G=ce;if(he.bindFramebuffer(O.FRAMEBUFFER,F)&&Ae.drawBuffers&&z&&he.drawBuffers(A,F),he.viewport(M),he.scissor(D),he.setScissorTest(G),ae){const Me=De.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,Me.__webglTexture,k)}else if(fe){const Me=De.get(A.texture),Ne=U||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Me.__webglTexture,k||0,Ne)}R=-1},this.readRenderTargetPixels=function(A,U,k,z,F,ae,fe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=De.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe){he.bindFramebuffer(O.FRAMEBUFFER,xe);try{const Me=A.texture,Ne=Me.format,we=Me.type;if(Ne!==Bt&&ue.convert(Ne)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=we===ns&&(_e.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&_e.has("EXT_color_buffer_float"));if(we!==Dn&&ue.convert(we)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(we===gn&&(Ae.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-z&&k>=0&&k<=A.height-F&&O.readPixels(U,k,z,F,ue.convert(Ne),ue.convert(we),ae)}finally{const Me=w!==null?De.get(w).__webglFramebuffer:null;he.bindFramebuffer(O.FRAMEBUFFER,Me)}}},this.copyFramebufferToTexture=function(A,U,k=0){const z=Math.pow(2,-k),F=Math.floor(U.image.width*z),ae=Math.floor(U.image.height*z);C.setTexture2D(U,0),O.copyTexSubImage2D(O.TEXTURE_2D,k,0,0,A.x,A.y,F,ae),he.unbindTexture()},this.copyTextureToTexture=function(A,U,k,z=0){const F=U.image.width,ae=U.image.height,fe=ue.convert(k.format),xe=ue.convert(k.type);C.setTexture2D(k,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment),U.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,z,A.x,A.y,F,ae,fe,xe,U.image.data):U.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,z,A.x,A.y,U.mipmaps[0].width,U.mipmaps[0].height,fe,U.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,z,A.x,A.y,fe,xe,U.image),z===0&&k.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),he.unbindTexture()},this.copyTextureToTexture3D=function(A,U,k,z,F=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ae=A.max.x-A.min.x+1,fe=A.max.y-A.min.y+1,xe=A.max.z-A.min.z+1,Me=ue.convert(z.format),Ne=ue.convert(z.type);let we;if(z.isData3DTexture)C.setTexture3D(z,0),we=O.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)C.setTexture2DArray(z,0),we=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);const Re=O.getParameter(O.UNPACK_ROW_LENGTH),at=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Nt=O.getParameter(O.UNPACK_SKIP_PIXELS),dt=O.getParameter(O.UNPACK_SKIP_ROWS),cn=O.getParameter(O.UNPACK_SKIP_IMAGES),it=k.isCompressedTexture?k.mipmaps[F]:k.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,it.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,it.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,A.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,A.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,A.min.z),k.isDataTexture||k.isData3DTexture?O.texSubImage3D(we,F,U.x,U.y,U.z,ae,fe,xe,Me,Ne,it.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),O.compressedTexSubImage3D(we,F,U.x,U.y,U.z,ae,fe,xe,Me,it.data)):O.texSubImage3D(we,F,U.x,U.y,U.z,ae,fe,xe,Me,Ne,it),O.pixelStorei(O.UNPACK_ROW_LENGTH,Re),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,at),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Nt),O.pixelStorei(O.UNPACK_SKIP_ROWS,dt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,cn),F===0&&z.generateMipmaps&&O.generateMipmap(we),he.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),he.unbindTexture()},this.resetState=function(){E=0,y=0,w=null,he.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Co?"display-p3":"srgb",t.unpackColorSpace=We.workingColorSpace===er?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===qe?Un:ul}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Un?qe:gt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Ng extends Pl{}Ng.prototype.isWebGL1Renderer=!0;class Og extends st{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Fg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=oo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Jt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ct=new I;class Uo{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}setX(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ye(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ye(t,this.array),n=Ye(n,this.array),i=Ye(i,this.array),r=Ye(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new It(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Uo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const _c=new I,vc=new $e,xc=new $e,Bg=new I,bc=new ke,Ps=new I,Br=new rn,Sc=new ke,kr=new tr;class kg extends jt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ta,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Zt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ps),this.boundingBox.expandByPoint(Ps)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new rn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ps),this.boundingSphere.expandByPoint(Ps)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Br.copy(this.boundingSphere),Br.applyMatrix4(i),e.ray.intersectsSphere(Br)!==!1&&(Sc.copy(i).invert(),kr.copy(e.ray).applyMatrix4(Sc),!(this.boundingBox!==null&&kr.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,kr)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new $e,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ta?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Zu?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;vc.fromBufferAttribute(i.attributes.skinIndex,e),xc.fromBufferAttribute(i.attributes.skinWeight,e),_c.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=xc.getComponent(r);if(a!==0){const o=vc.getComponent(r);bc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Bg.copy(_c).applyMatrix4(bc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Il extends st{constructor(){super(),this.isBone=!0,this.type="Bone"}}class zg extends mt{constructor(e=null,t=1,n=1,i,r,a,o,c,l=pt,h=pt,u,d){super(null,a,o,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yc=new ke,Gg=new ke;class No{constructor(e=[],t=[]){this.uuid=Jt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Gg;yc.multiplyMatrices(o,t[r]),yc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new No(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new zg(t,e,e,Bt,gn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Il),this.bones.push(a),this.boneInverses.push(new ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class uo extends It{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const vi=new ke,Mc=new ke,Is=[],Tc=new Zt,Hg=new ke,ji=new jt,Xi=new rn;class Vg extends jt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new uo(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Hg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vi),Tc.copy(e.boundingBox).applyMatrix4(vi),this.boundingBox.union(Tc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new rn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vi),Xi.copy(e.boundingSphere).applyMatrix4(vi),this.boundingSphere.union(Xi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ji.geometry=this.geometry,ji.material=this.material,ji.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xi.copy(this.boundingSphere),Xi.applyMatrix4(n),e.ray.intersectsSphere(Xi)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,vi),Mc.multiplyMatrices(n,vi),ji.matrixWorld=Mc,ji.raycast(e,Is);for(let a=0,o=Is.length;a<o;a++){const c=Is[a];c.instanceId=r,c.object=this,t.push(c)}Is.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new uo(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Dl extends sn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ec=new I,Ac=new I,wc=new ke,zr=new tr,Ds=new rn;class Oo extends st{constructor(e=new on,t=new Dl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Ec.fromBufferAttribute(t,i-1),Ac.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ec.distanceTo(Ac);e.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(i),Ds.radius+=r,e.ray.intersectsSphere(Ds)===!1)return;wc.copy(i).invert(),zr.copy(e.ray).applyMatrix4(wc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new I,h=new I,u=new I,d=new I,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,a.start),S=Math.min(g.count,a.start+a.count);for(let v=p,b=S-1;v<b;v+=f){const E=g.getX(v),y=g.getX(v+1);if(l.fromBufferAttribute(m,E),h.fromBufferAttribute(m,y),zr.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(d);R<e.near||R>e.far||t.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),S=Math.min(m.count,a.start+a.count);for(let v=p,b=S-1;v<b;v+=f){if(l.fromBufferAttribute(m,v),h.fromBufferAttribute(m,v+1),zr.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(d);y<e.near||y>e.far||t.push({distance:y,point:u.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Cc=new I,Rc=new I;class Wg extends Oo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Cc.fromBufferAttribute(t,i),Rc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Cc.distanceTo(Rc);e.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jg extends Oo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ul extends sn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Lc=new ke,ho=new tr,Us=new rn,Ns=new I;class Xg extends st{constructor(e=new on,t=new Ul){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(i),Us.radius+=r,e.ray.intersectsSphere(Us)===!1)return;Lc.copy(i).invert(),ho.copy(e.ray).applyMatrix4(Lc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);Ns.fromBufferAttribute(u,m),Pc(Ns,m,c,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)Ns.fromBufferAttribute(u,g),Pc(Ns,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Pc(s,e,t,n,i,r,a){const o=ho.distanceSqToPoint(s);if(o<t){const c=new I;ho.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class Nl extends mt{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fo extends sn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hl,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vn extends Fo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Os(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Zg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Yg(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ic(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function Ol(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class os{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class qg extends os{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wa,endingEnd:wa}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ca:r=e,o=2*t-n;break;case Ra:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ca:a=e,c=2*n-t;break;case Ra:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,S=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,v=(-1-f)*m+(1.5+f)*_+.5*g,b=f*m-f*_;for(let E=0;E!==o;++E)r[E]=p*a[h+E]+S*a[l+E]+v*a[c+E]+b*a[u+E];return r}}class $g extends os{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}}class Kg extends os{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class an{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Os(t,this.TimeBufferType),this.values=Os(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Os(e.times,Array),values:Os(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Kg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $g(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case is:t=this.InterpolantFactoryMethodDiscrete;break;case Li:t=this.InterpolantFactoryMethodLinear;break;case pr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return is;case this.InterpolantFactoryMethodLinear:return Li;case this.InterpolantFactoryMethodSmooth:return pr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Zg(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===pr,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{const u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=Li;class Fi extends an{}Fi.prototype.ValueTypeName="bool";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=is;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;class Fl extends an{}Fl.prototype.ValueTypeName="color";class Di extends an{}Di.prototype.ValueTypeName="number";class Jg extends os{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)Fn.slerpFlat(r,0,a,l-o,a,l,c);return r}}class ti extends an{InterpolantFactoryMethodLinear(e){return new Jg(this.times,this.values,this.getValueSize(),e)}}ti.prototype.ValueTypeName="quaternion";ti.prototype.DefaultInterpolation=Li;ti.prototype.InterpolantFactoryMethodSmooth=void 0;class Bi extends an{}Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=is;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ui extends an{}Ui.prototype.ValueTypeName="vector";class Qg{constructor(e,t=-1,n,i=nh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Jt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(t_(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(an.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const h=Yg(c);c=Ic(c,1,h),l=Ic(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Di(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];Ol(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let S=0;S!==d[g].morphTargets.length;++S){const v=d[g];m.push(v.time),p.push(v.morphTarget===_?1:0)}i.push(new Di(".morphTargetInfluence["+_+"]",m,p))}c=f.length*a}else{const f=".bones["+t[u].name+"]";n(Ui,f+".position",d,"pos",i),n(ti,f+".quaternion",d,"rot",i),n(Ui,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function e_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Di;case"vector":case"vector2":case"vector3":case"vector4":return Ui;case"color":return Fl;case"quaternion":return ti;case"bool":case"boolean":return Fi;case"string":return Bi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function t_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=e_(s.type);if(s.times===void 0){const t=[],n=[];Ol(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Rn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class n_{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const i_=new n_;class ki{constructor(e){this.manager=e!==void 0?e:i_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ki.DEFAULT_MATERIAL_NAME="__DEFAULT";const pn={};class s_ extends Error{constructor(e,t){super(e),this.response=t}}class Bl extends ki{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Rn.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(pn[e]!==void 0){pn[e].push({onLoad:t,onProgress:n,onError:i});return}pn[e]=[],pn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=pn[e],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0;let _=0;const m=new ReadableStream({start(p){S();function S(){u.read().then(({done:v,value:b})=>{if(v)p.close();else{_+=b.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let y=0,w=h.length;y<w;y++){const R=h[y];R.onProgress&&R.onProgress(E)}p.enqueue(b),S()}})}}});return new Response(m)}else throw new s_(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Rn.add(e,l);const h=pn[e];delete pn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=pn[e];if(h===void 0)throw this.manager.itemError(e),l;delete pn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class r_ extends ki{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Rn.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=ss("img");function c(){h(),Rn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Bo extends ki{constructor(e){super(e)}load(e,t,n,i){const r=new mt,a=new r_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class sr extends st{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Gr=new ke,Dc=new I,Uc=new I;class ko{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lo,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Dc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dc),Uc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uc),t.updateMatrixWorld(),Gr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class o_ extends ko{constructor(){super(new Pt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Pi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class a_ extends sr{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new o_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Nc=new ke,Zi=new I,Hr=new I;class c_ extends ko{constructor(){super(new Pt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Zi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Zi),Hr.copy(n.position),Hr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Hr),n.updateMatrixWorld(),i.makeTranslation(-Zi.x,-Zi.y,-Zi.z),Nc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nc)}}class l_ extends sr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new c_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class u_ extends ko{constructor(){super(new Io(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class h_ extends sr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(st.DEFAULT_UP),this.updateMatrix(),this.target=new st,this.shadow=new u_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class d_ extends sr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qi{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class f_ extends ki{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Rn.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Rn.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Rn.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Rn.add(e,c),r.manager.itemStart(e)}}const zo="\\[\\]\\.:\\/",p_=new RegExp("["+zo+"]","g"),Go="[^"+zo+"]",m_="[^"+zo.replace("\\.","")+"]",g_=/((?:WC+[\/:])*)/.source.replace("WC",Go),__=/(WCOD+)?/.source.replace("WCOD",m_),v_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Go),x_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Go),b_=new RegExp("^"+g_+__+v_+x_+"$"),S_=["material","materials","bones","map"];class y_{constructor(e,t,n){const i=n||Xe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Xe{constructor(e,t,n){this.path=t,this.parsedPath=n||Xe.parseTrackName(t),this.node=Xe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Xe.Composite(e,t,n):new Xe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(p_,"")}static parseTrackName(e){const t=b_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);S_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Xe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Xe.Composite=y_;Xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xe.prototype.GetterByBindingType=[Xe.prototype._getValue_direct,Xe.prototype._getValue_array,Xe.prototype._getValue_arrayElement,Xe.prototype._getValue_toArray];Xe.prototype.SetterByBindingTypeAndVersioning=[[Xe.prototype._setValue_direct,Xe.prototype._setValue_direct_setNeedsUpdate,Xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_array,Xe.prototype._setValue_array_setNeedsUpdate,Xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_arrayElement,Xe.prototype._setValue_arrayElement_setNeedsUpdate,Xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_fromArray,Xe.prototype._setValue_fromArray_setNeedsUpdate,Xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ao}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ao);class M_{constructor(){this.isMobile=this._detectMobile(),this.isLowEnd=!1,this.shadowMapTypes={basic:gu,pcf:ks},this.optimizations={pixelRatio:window.devicePixelRatio,antialias:!0,shadowMapSize:2048,shadowMapType:ks,textureQuality:1,lottieFPS:60,enableShadows:!1,maxTextureSize:4096},this._detectLowEnd(),this.isMobile&&(this.optimizations.pixelRatio=Math.min(window.devicePixelRatio,1.5),this.optimizations.lottieFPS=30,this.isLowEnd&&(this.optimizations.antialias=!1))}_detectMobile(){const e=navigator.userAgent||navigator.vendor||window.opera,t=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(e),n=("ontouchstart"in window||navigator.maxTouchPoints>0)&&window.innerWidth<=768;return t||n}_detectLowEnd(){const e=navigator.hardwareConcurrency||4,t=navigator.deviceMemory||4;this.isMobile&&(e<4||t<4)&&(this.isLowEnd=!0),window.innerWidth<375&&(this.isLowEnd=!0)}optimizeRenderer(e){e&&(e.setPixelRatio(this.optimizations.pixelRatio),e.shadowMap&&(e.shadowMap.enabled=!1,e.shadowMap.type=ks))}getRendererOptions(){return this.isMobile?{antialias:!this.isLowEnd,alpha:!0,powerPreference:"low-power",precision:this.isLowEnd?"mediump":"highp"}:{antialias:!0,alpha:!0,powerPreference:"high-performance",precision:"highp"}}optimizeTexture(e){return e}optimizeGeometry(e){return e}createThrottledUpdate(e,t=null){const i=1e3/(t??this.optimizations.lottieFPS);let r=0;return a=>{a-r>=i&&(e(),r=a)}}getShadowMapSize(){return this.optimizations.shadowMapSize}getPixelRatio(){return this.optimizations.pixelRatio}getLottieFPS(){return this.optimizations.lottieFPS}getTextureQuality(){return this.optimizations.textureQuality}getIsMobile(){return this.isMobile}getIsLowEnd(){return this.isLowEnd}getOptimizations(){return{...this.optimizations}}}class T_{constructor(e){this.canvas=e,this.renderer=null,this.scene=null,this.camera=null,this.card=null,this.mobileOptimizer=null,this.lights={ambient:null,directional1:null,directional2:null,directional3:null},this.init()}init(){this.card=document.querySelector(".card"),this.mobileOptimizer=new M_;const e=this.mobileOptimizer.getRendererOptions();this.renderer=new Pl({canvas:this.canvas,antialias:e.antialias,alpha:e.alpha,powerPreference:e.powerPreference,precision:e.precision}),this.mobileOptimizer.optimizeRenderer(this.renderer),this.renderer.toneMapping=Qc,this.renderer.toneMappingExposure=1.2,this.renderer.outputEncoding=Un,this.renderer.shadowMap.enabled=!1,this.scene=new Og,this.scene.background=null,this.setupLighting(),this.setupCamera(),this.setupResize()}setupLighting(){const e=new d_(16777215,.5);this.scene.add(e),this.lights.ambient=e}getLights(){return this.lights}setupCamera(){this.camera=new Pt(90,this.card.clientWidth/this.card.clientHeight,.1,2e3),this.introStartZ=this.mobileOptimizer&&this.mobileOptimizer.getIsMobile()?-10:-28,this.normalStartZ=this.mobileOptimizer&&this.mobileOptimizer.getIsMobile()?-10:-28,this.startY=8,this.endY=8,this.defaultCameraRotationX=0,this.camera.position.set(0,this.startY,this.introStartZ)}setupResize(){window.addEventListener("resize",()=>this.resize()),this.resize()}resize(){if(!this.card||!this.renderer||!this.camera)return;const e=this.card.clientWidth,t=this.card.clientHeight;this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix()}render(){this.renderer.render(this.scene,this.camera)}getScene(){return this.scene}getCamera(){return this.camera}getRenderer(){return this.renderer}getMobileOptimizer(){return this.mobileOptimizer}}class E_{constructor(){this.sinkFontLoaded=!1}async loadSinkFont(){if(this.sinkFontLoaded)return Promise.resolve();try{const t=await new FontFace("Sink","url(_assets/_style/_fonts/Sink.otf)").load();return document.fonts.add(t),this.sinkFontLoaded=!0,t}catch(e){return console.error("Error loading Sink font:",e),this.sinkFontLoaded=!1,null}}isFontLoaded(){return this.sinkFontLoaded}}class A_{constructor(e,t,n=null){this.camera=e,this.sceneSetup=t,this.targetZ=e.position.z,this.maxZ=t.normalStartZ,this.minZ=-1e3,this.cameraMoveSpeed=.15,this.scrollCheckpoints=n||[],this.currentCheckpointIndex=0,this.isMovingToCheckpoint=!1,this.movementThreshold=.5,this.isMobile=this.detectMobile(),this.useCheckpointMode=!1,this.isMobile&&(this.useCheckpointMode=!1),this.useLinearMovement=!1,this.linearStartZ=null,this.linearTargetZ=null,this.linearStartTime=null,this.linearDuration=0,this.timeline=null,this.timelineSegmentIndex=0,this.timelineStartTime=null,this.timelineSegmentStartTime=null,this.timelineSegmentStartZ=null,this.useTimeline=!1,this.postPauseMovement=null,this._startWiggle=null,this._zPrelude=null,this.targetCameraX=0,this.targetCameraY=t.startY,this.targetCameraRotationX=t.defaultCameraRotationX,this.targetCameraRotationY=0,this.targetCameraRotationZ=0,this.useManualY=!1,this.useManualRotation=!0,this.lockOnTarget=null,this.lockOnOffset=new I(0,10,0),this.introComplete=!1,this.introDuration=2e3,this.introStartTime=Date.now(),this.scrollSpeed=this.isMobile?4:8,this.touchStartY=null,this.touchStartZ=null,this.touchScrollSpeed=this.isMobile?.25:.5,this.scrollCheckpoints.length>0&&(this.currentCheckpointIndex=this.findNearestCheckpointIndex(this.camera.position.z)),this.init()}init(){this.setupScrollControls(),this.setupTouchControls()}setupScrollControls(){const e=document.querySelector(".card");e&&e.addEventListener("wheel",t=>{if(!(window.checkpointController&&window.USE_CHECKPOINT_SCROLL)&&(t.preventDefault(),!(this.isMovingToCheckpoint||this.useTimeline)))if(this.useCheckpointMode&&!this.isMobile&&this.scrollCheckpoints.length>0){const n=t.deltaY>0?1:-1;this.navigateToCheckpoint(this.currentCheckpointIndex+n)}else{let n=t.deltaY;t.deltaMode===1?n*=16:t.deltaMode===2&&(n*=window.innerHeight);const i=n*this.scrollSpeed*.008;this.targetZ-=i,this.targetZ=Math.max(this.minZ,Math.min(this.maxZ,this.targetZ))}},{passive:!1})}setupTouchControls(){const e=document.querySelector(".card");if(!e)return;let t=null;e.addEventListener("touchstart",n=>{this.isMovingToCheckpoint||this.useTimeline||n.touches.length===1&&(this.touchStartY=n.touches[0].clientY,this.touchStartZ=this.camera.position.z,this.scrollCheckpoints.length>0&&(t=this.currentCheckpointIndex))},{passive:!0}),e.addEventListener("touchmove",n=>{if(n.touches.length!==1||this.touchStartY===null)return;if(n.preventDefault(),this.isMovingToCheckpoint||this.useTimeline){this.touchStartY=null,this.touchStartZ=null,t=null;return}const r=n.touches[0].clientY-this.touchStartY;if(Math.abs(r)>50){if(this.isMovingToCheckpoint||this.useTimeline)return;if(this.useCheckpointMode&&!this.isMobile&&this.scrollCheckpoints.length>0&&t!==null){const o=r>0?-1:1,c=t+o;this.navigateToCheckpoint(c)}else this.targetZ=this.touchStartZ-r*this.touchScrollSpeed,this.targetZ=Math.max(this.minZ,Math.min(this.maxZ,this.targetZ))}},{passive:!1}),e.addEventListener("touchend",()=>{this.touchStartY=null,this.touchStartZ=null,t=null})}updateIntroAnimation(){if(this.introComplete)return;const e=Date.now()-this.introStartTime,t=Math.min(e/this.introDuration,1),n=1-Math.pow(1-t,3);this.targetZ=this.sceneSetup.introStartZ-(this.sceneSetup.introStartZ-this.sceneSetup.normalStartZ)*n,t>=1&&(this.introComplete=!0,this.targetZ=this.sceneSetup.normalStartZ)}update(e){this.introComplete||this.updateIntroAnimation();let t=!1;if(this._zPrelude){t=!0;const n=performance.now(),i=this._zPrelude;if(i.phase==="out"){const r=n-i.phaseStartTime,a=Math.min(1,r/i.durationOut),o=this.applyEasing(a,"easeOutQuad");this.camera.position.z=i.zBase+i.forwardDelta*o,this.targetZ=this.camera.position.z,a>=1&&(i.phase="back",i.phaseStartTime=n,i.zPeak=this.camera.position.z)}else{const r=n-i.phaseStartTime,a=Math.min(1,r/i.durationBack),o=this.applyEasing(a,"easeOutBounce");if(this.camera.position.z=i.zPeak+(i.zBase-i.zPeak)*o,this.targetZ=this.camera.position.z,a>=1){this.camera.position.z=i.zBase,this.targetZ=i.zBase;const c=i.onComplete;this._zPrelude=null,typeof c=="function"&&queueMicrotask(c)}}}if(!t)if(this.useTimeline&&this.timeline&&this.timeline.length>0)this.updateTimelineMovement();else if(this.useLinearMovement&&this.linearStartTime!==null&&this.linearDuration>0){const n=(Date.now()-this.linearStartTime)/1e3,i=Math.min(1,n/this.linearDuration);this.camera.position.z=this.linearStartZ+(this.linearTargetZ-this.linearStartZ)*i,i>=1&&(this.useLinearMovement=!1,this.camera.position.z=this.linearTargetZ)}else if(this.useCheckpointMode){const n=this.getCurrentCheckpointSpeed();this.camera.position.z+=(this.targetZ-this.camera.position.z)*n}else this.camera.position.z+=(this.targetZ-this.camera.position.z)*.4;if(!this.useTimeline&&this.scrollCheckpoints.length>0&&(Math.abs(this.camera.position.z-this.targetZ)<this.movementThreshold?(this.isMovingToCheckpoint=!1,this.currentCheckpointIndex=this.findNearestCheckpointIndex(this.camera.position.z)):this.useCheckpointMode&&(this.isMovingToCheckpoint=!0)),this.camera.position.x+=(this.targetCameraX-this.camera.position.x)*this.cameraMoveSpeed,this.useManualY)this.camera.position.y+=(this.targetCameraY-this.camera.position.y)*this.cameraMoveSpeed;else{const n=this.sceneSetup.introStartZ-0,i=(this.sceneSetup.introStartZ-this.camera.position.z)/n,r=Math.max(0,Math.min(1,i)),a=this.sceneSetup.startY-(this.sceneSetup.startY-this.sceneSetup.endY)*r;this.camera.position.y+=(a-this.camera.position.y)*this.cameraMoveSpeed,this.targetCameraY=this.camera.position.y}if(this.lockOnTarget){const n=new I;this.lockOnTarget.getWorldPosition(n),n.add(this.lockOnOffset),this.camera.lookAt(n)}else if(this.useManualRotation){const n=this.targetCameraRotationX*Math.PI/180,i=this.targetCameraRotationY*Math.PI/180,r=this.targetCameraRotationZ*Math.PI/180;if(this.camera.rotation.x+=(n-this.camera.rotation.x)*this.cameraMoveSpeed,this.camera.rotation.y+=(i-this.camera.rotation.y)*this.cameraMoveSpeed,this.camera.rotation.z+=(r-this.camera.rotation.z)*this.cameraMoveSpeed,this._startWiggle){const a=this._startWiggle,c=(Date.now()-a.startTime)/a.durationMs;if(c>=1)this._startWiggle=null;else{const l=Math.sin(Math.PI*c),h=Math.sin(c*Math.PI*10),u=l*h;this.camera.rotation.x+=a.ampPitch*u,this.camera.rotation.y+=a.ampYaw*u,this.camera.rotation.z+=a.ampRoll*u}}}else this.camera.lookAt(0,10,this.camera.position.z-200)}setTargetZ(e){this.introComplete=!0,this.targetZ=Math.max(this.minZ,Math.min(this.maxZ,e))}startStartWiggle(e){e&&(this._startWiggle={startTime:Date.now(),durationMs:Math.max(1,e.durationMs),ampPitch:e.ampPitchDeg*Math.PI/180,ampYaw:e.ampYawDeg*Math.PI/180,ampRoll:e.ampRollDeg*Math.PI/180})}startZPrelude(e,t){const n=e||{},i=typeof n.forwardDeltaZ=="number"?n.forwardDeltaZ:-3.5,r=Math.max(1,n.durationOutMs??420),a=Math.max(1,n.durationBackMs??780);this.introComplete=!0,this._zPrelude={zBase:this.camera.position.z,forwardDelta:i,durationOut:r,durationBack:a,phase:"out",phaseStartTime:performance.now(),onComplete:typeof t=="function"?t:null},this.targetZ=this.camera.position.z}setLinearTargetZ(e,t){this.targetZ=Math.max(this.minZ,Math.min(this.maxZ,e)),this.linearStartZ=this.camera.position.z,this.linearTargetZ=this.targetZ,this.linearStartTime=Date.now(),this.linearDuration=t,this.useLinearMovement=!0,this.introComplete=!0}getTargetZ(){return this.targetZ}getMaxZ(){return this.maxZ}getMinZ(){return this.minZ}getCameraZ(){return this.camera.position.z}setLockOnTarget(e,t=null){this.lockOnTarget=e,t&&this.lockOnOffset.copy(t),e&&(this.useManualRotation=!1)}clearLockOnTarget(){this.lockOnTarget=null}findNearestCheckpointIndex(e){if(this.scrollCheckpoints.length===0)return 0;let t=0,n=Math.abs(this.scrollCheckpoints[0].z-e);for(let i=1;i<this.scrollCheckpoints.length;i++){const r=Math.abs(this.scrollCheckpoints[i].z-e);r<n&&(n=r,t=i)}return t}navigateToCheckpoint(e){if(this.scrollCheckpoints.length===0||this.isMovingToCheckpoint||this.useTimeline||(e=Math.max(0,Math.min(this.scrollCheckpoints.length-1,e)),e===this.currentCheckpointIndex))return;const t=this.scrollCheckpoints[e];this.currentCheckpointIndex=e,this.targetZ=t.z,this.cameraMoveSpeed=t.speed,this.isMovingToCheckpoint=!0,this.introComplete=!0,t.timeline&&Array.isArray(t.timeline)&&t.timeline.length>0?(this.timeline=[...t.timeline],this.timelineSegmentIndex=0,this.timelineStartTime=Date.now(),this.useTimeline=!0,this.useLinearMovement=!1,this.startTimelineSegment(0)):(this.useTimeline=!1,this.timeline=null)}startTimelineSegment(e){if(!this.timeline||e>=this.timeline.length){this.useTimeline=!1,this.isMovingToCheckpoint=!1;return}const t=this.timeline[e];if(this.timelineSegmentStartTime=Date.now(),t.type==="move"){t.fromZ!==void 0?(this.timelineSegmentStartZ=t.fromZ,e===0&&(this.camera.position.z=t.fromZ)):e===0&&(this.timelineSegmentStartZ=this.camera.position.z);const n=t.toZ!==void 0?t.toZ:this.targetZ;this.targetZ=n}else t.type==="pause"&&(t.atZ!==void 0?(this.timelineSegmentStartZ=t.atZ,e===0&&(this.camera.position.z=t.atZ)):e===0&&(this.timelineSegmentStartZ=this.camera.position.z),this.targetZ=this.timelineSegmentStartZ,this.camera.position.z=this.timelineSegmentStartZ)}updateTimelineMovement(){if(!this.timeline||this.timelineSegmentIndex>=this.timeline.length){this.useTimeline=!1,this.isMovingToCheckpoint=!1,this.currentCheckpointIndex=this.findNearestCheckpointIndex(this.camera.position.z);return}if(this.postPauseMovement){const r=(Date.now()-this.postPauseMovement.startTime)/1e3,a=Math.min(1,r/(this.postPauseMovement.duration/1e3)),o=1-Math.pow(1-a,3),c=this.postPauseMovement.startZ+(this.postPauseMovement.targetZ-this.postPauseMovement.startZ)*o;this.camera.position.z=c,this.targetZ=c;const l=this.postPauseMovement.startY+(this.postPauseMovement.targetY-this.postPauseMovement.startY)*o;this.camera.position.y=l,this.targetCameraY=l,a>=1?(this.camera.position.z=this.postPauseMovement.targetZ,this.camera.position.y=this.postPauseMovement.targetY,console.log(`[Post-pause movement] Complete: Z ${this.postPauseMovement.targetZ.toFixed(2)}, Y ${this.postPauseMovement.targetY.toFixed(2)}`),this.postPauseMovement=null,this.timelineSegmentIndex++,this.startTimelineSegment(this.timelineSegmentIndex)):this.isMovingToCheckpoint=!0;return}const e=this.timeline[this.timelineSegmentIndex],t=Date.now(),n=(t-this.timelineSegmentStartTime)/1e3;if(e.type==="move"){const i=Math.min(1,n/e.duration),r=this.applyEasing(i,e.easing||"linear"),a=this.timelineSegmentStartZ,o=e.toZ!==void 0?e.toZ:this.targetZ;this.camera.position.z=a+(o-a)*r,this.targetZ=this.camera.position.z,i>=1?(this.camera.position.z=o,this.timelineSegmentStartZ=o,this.timelineSegmentIndex++,this.startTimelineSegment(this.timelineSegmentIndex)):this.isMovingToCheckpoint=!0}else if(e.type==="pause"){const i=this.timelineSegmentStartZ;if(this.camera.position.z=i,this.targetZ=i,n>=e.duration){const r=this.camera.position.y,o=i+30,l=r+15,h=600;console.log(`[Post-pause movement] Starting: Z ${i.toFixed(2)} → ${o.toFixed(2)}, Y ${r.toFixed(2)} → ${l.toFixed(2)}`),this.postPauseMovement={startZ:i,targetZ:o,startY:r,targetY:l,startTime:t,duration:h}}else this.isMovingToCheckpoint=!0}}applyEasing(e,t){if(e<=0)return 0;if(e>=1)return 1;switch(t){case"linear":return e;case"easeOutQuad":return 1-(1-e)*(1-e);case"easeOutBounce":{let r=e;return r<1/2.75?7.5625*r*r:r<2/2.75?7.5625*(r-=1.5/2.75)*r+.75:r<2.5/2.75?7.5625*(r-=2.25/2.75)*r+.9375:7.5625*(r-=2.625/2.75)*r+.984375}case"ease":case"easeInOut":return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;case"easeIn":return e*e*e;case"easeOut":return 1-Math.pow(1-e,3);default:return e}}getCurrentCheckpointSpeed(){if(this.scrollCheckpoints.length===0)return this.cameraMoveSpeed;const e=this.scrollCheckpoints[this.currentCheckpointIndex];return e?e.speed:this.cameraMoveSpeed}toggleCheckpointMode(){return this.isMobile?(this.useCheckpointMode=!1,!1):(this.useCheckpointMode=!this.useCheckpointMode,this.useCheckpointMode&&this.scrollCheckpoints.length>0&&(this.currentCheckpointIndex=this.findNearestCheckpointIndex(this.camera.position.z)),this.useCheckpointMode)}setCheckpointMode(e){if(this.isMobile){this.useCheckpointMode=!1;return}this.useCheckpointMode=e,this.useCheckpointMode&&this.scrollCheckpoints.length>0&&(this.currentCheckpointIndex=this.findNearestCheckpointIndex(this.camera.position.z))}getCheckpointMode(){return this.isMobile?!1:this.useCheckpointMode}detectMobile(){const e=navigator.userAgent||navigator.vendor||window.opera,n=/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(e),i="ontouchstart"in window||navigator.maxTouchPoints>0,r=window.innerWidth<=768;return n||i&&r}}const w_="Power Sop",Vr={startWiggleEnabled:!0,startWiggleDelayMs:600,startWiggleDurationMs:320},Oc={name:"NIELS"},et={settings:{startZ:0,endZ:-250,startZPrelude:{enabled:!1,delayAfterStartMs:3100},startWiggle:{enabled:Vr.startWiggleEnabled,delayAfterStartMs:Vr.startWiggleDelayMs,durationMs:Vr.startWiggleDurationMs,ampPitchDeg:.1,ampYawDeg:.2,ampRollDeg:.2}},checkpoints:[{name:"Start",z:0,label:"Start"}],points:[{z:-109,duration:13,easing:"linear",pause:2},{z:-191,duration:9,easing:"linear",pause:.8},{z:-260,duration:6,easing:"linear",pause:.2}],pointsMobile:[{z:-109,duration:13,easing:"linear",pause:2},{z:-182,duration:9,easing:"linear",pause:.8},{z:-260,duration:6,easing:"linear",pause:.2}],labels:[{z:0,name:"Start"}],navigation:[{indicator:"indicatorWater",startZ:-105,endZ:-128},{indicator:"indicatorMessage",startZ:-156,endZ:-194},{indicator:"indicatorGift",startZ:-220,endZ:-300}],lotties:[{url:"https://lottie.host/0c0c3659-5225-45ed-9965-5e7e2d4d643d/cEEdtJqm8p.lottie",playZ:-106,stopZ:null,times:1},{url:"https://lottie.host/e689fd1b-db88-4cda-a259-142b40bbac15/ecYr5QK0oB.lottie",playZ:-225,times:1},{url:"https://lottie.host/3a5f76fe-dec4-4993-99dc-a2a88eb55d21/vMzEEWSE7u.lottie",playZ:-230,times:8}]};function C_(){return/iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768&&window.matchMedia("(pointer: coarse)").matches}function R_(){var e;const s=(e=et.settings)==null?void 0:e.startWiggle;return!s||s.enabled===!1?null:{durationMs:s.durationMs,ampPitchDeg:s.ampPitchDeg,ampYawDeg:s.ampYawDeg,ampRollDeg:s.ampRollDeg}}function fo(){return C_()&&et.pointsMobile&&et.pointsMobile.length>0?et.pointsMobile:et.points||[]}function L_(){const s=fo();if(!s||s.length===0)return[];const e=[];let t=et.settings.startZ;const n=et.checkpoints.find(r=>r.name==="Bericht"),i=n?n.z:-109;for(let r=0;r<s.length;r++){const a=s[r],o=Math.abs(a.z-i)<.1||a.z<=i;if(a.z!==t){const c={type:"move",fromZ:t,toZ:a.z,duration:a.duration||2,easing:a.easing||"easeInOut"};o&&(c.checkpointName="Bericht"),e.push(c)}if(a.pause&&a.pause>0){const c={type:"pause",atZ:a.z,duration:a.pause};o&&(c.checkpointName="Bericht"),e.push(c)}if(o)break;t=a.z}return e}const kl=et.checkpoints.map((e,t)=>{const n={name:e.name,z:e.z};if(t===0){const i=L_();i.length>0&&(n.timeline=i)}return n});class P_{constructor(e){this.cameraController=e,this.checkpoints=kl||[],this.currentCheckpointIndex=0,this.isAnimating=!1,this.currentAnimationFrame=null,this._startRideAfterClickTimeoutId=null,this._wiggleAfterStartTimeoutId=null,this.autoAdvanceTimer=null,this.autoAdvanceDelay=1e4,this.lastInteractionTime=Date.now(),this.currentPointIndex=-1,this.initializeDashboardItems(),this.startCameraPositionMonitoring()}initializeDashboardItems(){const e=document.getElementById("dashTextSlider");if(!e){console.warn("Dashboard slider not found");return}const t=(et==null?void 0:et.dashboardItems)||[],n=(et==null?void 0:et.labels)||(et==null?void 0:et.namePoints)||[];if(t.length===0&&n.length===0){console.warn("No dashboardItems or labels found in checkpointConfig"),e.innerHTML="";return}const i=new Map;this.checkpoints.forEach(l=>{l.name&&l.z!==void 0&&i.set(l.name,l.z)});const r=t.map(l=>{const h=i.get(l.checkpointName);return{name:l.checkpointName,z:h!==void 0?h:null,text:l.text||l.checkpointName,type:"dashboard"}}),a=n.map(l=>({name:l.name||"Name",z:l.z!==void 0&&l.z!==null?l.z:null,text:l.name||"Name",type:"label"})),o=[...r,...a];o.sort((l,h)=>l.z===null&&h.z===null?0:l.z===null?1:h.z===null?-1:h.z-l.z),this.dashboardCheckpoints=o,e.innerHTML="",o.forEach((l,h)=>{const u=document.createElement("span");u.className="dash__text--item flex-1 font__wash",u.setAttribute("data-checkpoint-name",l.name),l.z!==null&&u.setAttribute("data-z-index",l.z),u.setAttribute("data-index",h),u.setAttribute("data-item-type",l.type),u.textContent=l.text,u.style.cursor="default",e.appendChild(u)});const c=o.length;c>0&&(e.style.width=`${c*100}%`),console.log(`Created ${o.length} dashboard items (${r.length} dashboardItems + ${a.length} labels):`,o),this.setupDashboardTextClickHandler()}setupDashboardTextClickHandler(){const e=document.querySelector(".dash__text");if(!e){setTimeout(()=>this.setupDashboardTextClickHandler(),100);return}const t=e.cloneNode(!0);e.parentNode.replaceChild(t,e),t.addEventListener("click",n=>{if((n.target===t||n.target.closest(".dash__text--mask"))&&window.checkpointController){const i=window.checkpointController;let r=!1;if(!i.isAnimating&&i.currentTimeline&&i.currentTimelineSegmentIndex!==void 0&&i.currentTimelineSegmentIndex<i.currentTimeline.length){const a=i.currentTimelineSegmentIndex-1;if(a>=0&&a<i.currentTimeline.length){const c=i.currentTimeline[a];c&&c.checkpointName&&(r=!0)}const o=i.currentTimeline[i.currentTimelineSegmentIndex];o&&o.type==="pause"&&o.checkpointName&&(r=!0)}r&&(n.preventDefault(),n.stopPropagation(),i.goToNextCheckpoint(!0))}}),t.addEventListener("touchstart",n=>{if((n.target===t||n.target.closest(".dash__text--mask"))&&window.checkpointController){const i=window.checkpointController;let r=!1;if(!i.isAnimating&&i.currentTimeline&&i.currentTimelineSegmentIndex!==void 0&&i.currentTimelineSegmentIndex<i.currentTimeline.length){const a=i.currentTimelineSegmentIndex-1;if(a>=0&&a<i.currentTimeline.length){const c=i.currentTimeline[a];c&&c.checkpointName&&(r=!0)}const o=i.currentTimeline[i.currentTimelineSegmentIndex];o&&o.type==="pause"&&o.checkpointName&&(r=!0)}r&&(n.preventDefault(),n.stopPropagation(),i.goToNextCheckpoint(!0))}})}navigateToZPosition(e,t=!1){if(!this.cameraController||!this.cameraController.camera)return console.warn("Camera controller not available"),!1;let n=null,i=1/0;if(this.checkpoints.forEach(r=>{const a=Math.abs(r.z-e);a<i&&(i=a,n=r)}),n&&i<10){const r=this.checkpoints.findIndex(a=>a.name===n.name);if(r!==-1)return this.navigateToCheckpoint(r,t)}return this.animateToZ(e,2,"easeInOut",this.currentCheckpointIndex,t)}getCheckpointsData(){return this.checkpoints.map((e,t)=>({name:e.name,z:e.z,speed:e.speed||.03,ease:"easeInOut",index:t,timeline:e.timeline||null}))}navigateToCheckpoint(e,t=!1){if(console.log("navigateToCheckpoint called:",{index:e,allowInterrupt:t,checkpointsLength:this.checkpoints.length,currentIndex:this.currentCheckpointIndex}),e<0||e>=this.checkpoints.length)return console.warn("Invalid checkpoint index:",e,"Available: 0-"+(this.checkpoints.length-1)),!1;const n=this.checkpoints[e];if(!n)return console.warn("Checkpoint not found at index:",e),!1;if(console.log("Navigating to checkpoint:",n.name,"at z:",n.z,"from current index:",this.currentCheckpointIndex),this.isAnimating&&!t)return console.log("Animation in progress, cannot navigate"),!1;this.isAnimating&&t&&this.currentAnimationFrame!==null&&(console.log("Cancelling ongoing animation"),cancelAnimationFrame(this.currentAnimationFrame),this.currentAnimationFrame=null);const i=n.timeline;if(i&&Array.isArray(i)&&i.length>0){console.log("Using timeline animation");const r={...n,timeline:i};return this.animateWithTimeline(r,e,t)}else return console.log("Using speed-based animation to z:",n.z),this.animateToZ(n.z,n.speed||2,"easeInOut",e,t)}goToNextCheckpoint(e=!1){if(this.currentTimeline&&this.currentTimelineSegmentIndex!==void 0&&this.currentTimelineSegmentIndex!==null&&typeof this.currentTimelineSegmentIndex=="number"&&!this.isAnimating)return console.log("Continuing paused timeline from segment:",this.currentTimelineSegmentIndex,"of",this.currentTimeline.length,"total segments"),console.log("Timeline state:",{hasTimeline:!!this.currentTimeline,segmentIndex:this.currentTimelineSegmentIndex,checkpointIndex:this.currentTimelineCheckpointIndex,isAnimating:this.isAnimating}),this.resetAutoAdvanceTimer(),this.continueTimelineFromSegment(this.currentTimelineSegmentIndex),!0;console.log("No paused timeline found, jumping to next checkpoint. State:",{hasTimeline:!!this.currentTimeline,segmentIndex:this.currentTimelineSegmentIndex,isAnimating:this.isAnimating});const t=this.currentCheckpointIndex+1;if(console.log("goToNextCheckpoint:",{currentIndex:this.currentCheckpointIndex,nextIndex:t,totalCheckpoints:this.checkpoints.length}),t<this.checkpoints.length){const n=this.navigateToCheckpoint(t,e);return n?(this.currentCheckpointIndex=t,this.updateSliderPosition(t),console.log("Successfully moved to next checkpoint:",t)):console.warn("Failed to navigate to next checkpoint:",t),n}return console.log("Already at last checkpoint, cannot go to next"),!1}goToNextPoint(e=!1){if(this.currentTimeline&&this.currentTimelineSegmentIndex!==void 0&&this.currentTimelineSegmentIndex!==null&&typeof this.currentTimelineSegmentIndex=="number"&&!this.isAnimating)return console.log("Continuing paused timeline from segment:",this.currentTimelineSegmentIndex),this.resetAutoAdvanceTimer(),this.continueTimelineFromSegment(this.currentTimelineSegmentIndex),!0;if(this.isAnimating&&!e)return console.log("Animation in progress, cannot navigate"),!1;const t=fo();if(t.length===0)return console.log("No points found in config, falling back to checkpoint navigation"),this.goToNextCheckpoint(e);if(!this.cameraController||!this.cameraController.camera)return console.warn("Camera controller not available"),!1;const n=this.cameraController.camera.position.z;this.currentCheckpointIndex===0&&n>=-1&&(console.log("At Start checkpoint, starting from first point in array"),this.currentPointIndex=-1);let i=-1;const r=.5;for(let a=0;a<t.length;a++)if(t[a].z<n-r){i=a;break}if(i!==-1){const a=t[i];console.log(`Navigating to next point ${i} at Z: ${a.z} (current Z: ${n})`);const o=this.currentCheckpointIndex+1;if(o<this.checkpoints.length){const m=this.checkpoints[o];if(a.z<=m.z)return console.log(`Point ${i} is at or past next checkpoint "${m.name}", navigating to checkpoint instead`),this.currentPointIndex=i,this.navigateToCheckpoint(o,e)}this.isAnimating&&e&&this.currentAnimationFrame!==null&&(console.log("Cancelling ongoing animation to navigate to next point"),cancelAnimationFrame(this.currentAnimationFrame),this.currentAnimationFrame=null),this.currentPointIndex=i;const c=a.duration||2,l=a.easing||"easeInOut";this.isAnimating=!0,this.updateDashboardGradientIndicator();const h=this.cameraController.camera,u=n,d=a.z,f=c*1e3,g=Date.now(),_=()=>{const m=Date.now()-g,p=Math.min(1,m/f),S=this.applyEasing(p,l),v=u+(d-u)*S;if(h.position.z=v,this.cameraController.targetZ=v,this.updateSliderPositionByZ(v),p<1)this.currentAnimationFrame=requestAnimationFrame(_);else{h.position.z=d,this.cameraController.targetZ=d,this.isAnimating=!1,this.currentAnimationFrame=null;const b=this.findCheckpointAtZ(d);if(b!==-1){this.currentCheckpointIndex=b,this.updateSliderPosition(b),this.startAutoAdvanceAtCheckpoint(),this.updateDashboardGradientIndicator(),console.log(`Reached checkpoint "${this.checkpoints[b].name}" at point ${i}`);return}a.pause&&a.pause>0?(console.log(`Pausing at point ${i} for ${a.pause} seconds`),setTimeout(()=>{this.isAnimating||this.goToNextPoint(e)},a.pause*1e3)):setTimeout(()=>{this.isAnimating||this.goToNextPoint(e)},50)}};return this.currentAnimationFrame=requestAnimationFrame(_),!0}else{console.log("No more points ahead, checking for next checkpoint");const a=this.currentCheckpointIndex+1;return a<this.checkpoints.length?this.navigateToCheckpoint(a,e):(console.log("Already at last checkpoint, cannot go to next"),!1)}}findCheckpointAtZ(e){for(let t=0;t<this.checkpoints.length;t++){const n=this.checkpoints[t];if(Math.abs(e-n.z)<1)return t}return-1}goToPreviousCheckpoint(e=!1){return console.log("Backward navigation disabled. Can only move forward in timeline."),!1}jumpToCheckpointByName(e,t=!1){if(this.currentTimeline&&this.currentTimelineSegmentIndex!==void 0&&!this.isAnimating)return console.log("User interaction: continuing paused timeline from segment:",this.currentTimelineSegmentIndex),this.resetAutoAdvanceTimer(),this.continueTimelineFromSegment(this.currentTimelineSegmentIndex),!0;const n=this.checkpoints.findIndex(r=>r.name===e);if(n===-1)return console.warn(`Checkpoint with name "${e}" not found`),!1;if(n<this.currentCheckpointIndex)return console.log(`Cannot jump to "${e}" - it's before current checkpoint. Can only move forward.`),!1;const i=this.navigateToCheckpoint(n,t);return i&&(this.currentCheckpointIndex=n,this.updateSliderPosition(n)),i}jumpToCheckpoint(e,t=!1){if(this.currentTimeline&&this.currentTimelineSegmentIndex!==void 0&&!this.isAnimating)return console.log("User interaction: continuing paused timeline from segment:",this.currentTimelineSegmentIndex),this.resetAutoAdvanceTimer(),this.continueTimelineFromSegment(this.currentTimelineSegmentIndex),!0;if(e<0||e>=this.checkpoints.length)return console.warn(`Checkpoint index ${e} is out of bounds. Available checkpoints: 0-${this.checkpoints.length-1}`),!1;if(e<this.currentCheckpointIndex)return console.log(`Cannot jump to checkpoint ${e} - it's before current checkpoint ${this.currentCheckpointIndex}. Can only move forward.`),!1;const n=this.navigateToCheckpoint(e,t);return n&&(this.currentCheckpointIndex=e,this.updateSliderPosition(e)),n}animateToZ(e,t,n,i,r=!1){if(!this.cameraController||!this.cameraController.camera)return console.warn("Camera controller not yet available"),!1;console.log("animateToZ called:",{zIndex:e,speed:t,ease:n,itemIndex:i,allowInterrupt:r}),this.isAnimating=!0,this.updateDashboardGradientIndicator();const a=this.cameraController.camera,o=a.position.z,c=e,l=t&&t>=.1?t*1e3:2e3,h=Date.now();console.log("Starting animation:",{startZ:o,targetZ:c,duration:l+"ms",speed:t});const u=()=>{const d=Date.now()-h,f=Math.min(1,d/l),g=this.applyEasing(f,n),_=o+(c-o)*g;a.position.z=_,this.cameraController.targetZ=_,f<1?this.currentAnimationFrame=requestAnimationFrame(u):(a.position.z=c,this.cameraController.targetZ=c,this.isAnimating=!1,this.currentAnimationFrame=null,this.currentCheckpointIndex=i,this.updateSliderPosition(i),this.startAutoAdvanceAtCheckpoint(),this.updateDashboardGradientIndicator(),console.log("Reached checkpoint, starting 4-second auto-advance timer"))};return this.currentAnimationFrame=requestAnimationFrame(u),!0}scheduleStartSequenceAfterStartClick(){var a,o,c;const e=(a=et.settings)==null?void 0:a.startZPrelude,t=e==null?void 0:e.delayAfterStartMs,n=(o=et.settings)==null?void 0:o.startWiggle,i=n==null?void 0:n.delayAfterStartMs;this._startRideAfterClickTimeoutId!=null&&(clearTimeout(this._startRideAfterClickTimeoutId),this._startRideAfterClickTimeoutId=null),this._wiggleAfterStartTimeoutId!=null&&(clearTimeout(this._wiggleAfterStartTimeoutId),this._wiggleAfterStartTimeoutId=null);const r=R_();r&&typeof((c=this.cameraController)==null?void 0:c.startStartWiggle)=="function"&&(this._wiggleAfterStartTimeoutId=setTimeout(()=>{this._wiggleAfterStartTimeoutId=null,this.cameraController.startStartWiggle(r)},i)),this._startRideAfterClickTimeoutId=setTimeout(()=>{this._startRideAfterClickTimeoutId=null;const l=()=>{this.goToNextPoint(!0)};e&&e.enabled!==!1||l()},t)}animateWithTimeline(e,t,n=!1){if(!this.cameraController||!this.cameraController.camera)return console.warn("Camera controller not yet available"),!1;this.isAnimating=!0;const i=e.timeline;let r=0,a=Date.now();this.currentTimeline=i,this.currentTimelineCheckpointIndex=t;const o=e.z;let c=o,l=!1;for(let f=0;f<i.length;f++){const g=i[f];if(g.type==="move"){const _=g.fromZ!==void 0?g.fromZ:f>0?i[f-1].toZ||i[f-1].atZ:0,m=g.toZ!==void 0?g.toZ:_,p=Math.min(_,m),S=Math.max(_,m);if(o>=p&&o<=S){r=f,c=o,l=!0,console.log(`Found checkpoint at segment ${f}, starting from Z: ${o}`);break}else{if(o>S)continue;if(o<p&&f===0){r=0,c=_,l=!0;break}}}else if(g.type==="pause"&&Math.abs(g.atZ-o)<.1){r=f,c=o,l=!0,console.log(`Found checkpoint at pause segment ${f}, starting from Z: ${o}`);break}}if(!l){const f=i[0];f&&(f.type==="move"&&f.fromZ!==void 0?c=f.fromZ:f.type==="pause"&&f.atZ!==void 0&&(c=f.atZ)),r=0,console.log(`Checkpoint Z ${o} not found in timeline, starting from beginning at Z: ${c}`)}this.cameraController.camera.position.z=c,this.cameraController.targetZ=c;const h=i[r];console.log("Timeline animation starting:"),console.log("- Starting Z:",c),console.log("- Starting segment index:",r),console.log("- Starting segment:",h),console.log("- Total segments:",i.length),console.log("- Timeline order:",i.map((f,g)=>`${g}: ${f.type} ${f.fromZ||f.atZ} → ${f.toZ||f.atZ}`).join(", ")),a=Date.now();let u=null;const d=()=>{if(r>=i.length){this.isAnimating=!1,this.currentAnimationFrame=null,this.currentCheckpointIndex=t,this.updateSliderPosition(t),this.startAutoAdvanceAtCheckpoint(),this.updateDashboardGradientIndicator(),console.log("Reached checkpoint, starting 4-second auto-advance timer");return}if(u){const _=Date.now()-u.startTime,m=Math.min(1,_/u.duration),p=1-Math.pow(1-m,3),S=u.startZ+(u.targetZ-u.startZ)*p;this.cameraController.camera.position.z=S,this.cameraController.targetZ=S;const v=u.startY+(u.targetY-u.startY)*p;this.cameraController.camera.position.y=v,this.cameraController.targetCameraY=v,this.updateSliderPositionByZ(S),m>=1?(this.cameraController.camera.position.z=u.targetZ,this.cameraController.camera.position.y=u.targetY,console.log(`[Post-pause movement] Complete: Z ${u.targetZ.toFixed(2)}, Y ${u.targetY.toFixed(2)}`),u=null,r++,a=Date.now(),c=this.cameraController.camera.position.z,this.currentAnimationFrame=requestAnimationFrame(d)):this.currentAnimationFrame=requestAnimationFrame(d);return}const f=i[r],g=Date.now()-a;if(f.type==="pause"){const _=this.cameraController.camera.position.z;if(this.updateSliderPositionByZ(_),f.checkpointName&&g<100&&this.changeDashboardTextToCheckpoint(f.checkpointName),g>=f.duration*1e3){if(f.checkpointName){this.isAnimating=!1,this.currentAnimationFrame=null,this.currentTimelineSegmentIndex=r+1,this.currentTimeline||(this.currentTimeline=i),this.currentTimelineCheckpointIndex===void 0&&(this.currentTimelineCheckpointIndex=t);const w=this.checkpoints.findIndex(R=>R.name===f.checkpointName);w!==-1&&(this.currentCheckpointIndex=w,this.updateSliderPosition(w)),this.startAutoAdvanceAtCheckpoint(),this.updateDashboardGradientIndicator(),console.log(`Stopped at checkpoint "${f.checkpointName}", waiting 10 seconds. Next segment: ${this.currentTimelineSegmentIndex}`);return}const m=this.cameraController.camera.position.z,p=this.cameraController.camera.position.y,v=m+30,E=p+15,y=600;console.log(`[Post-pause movement] Starting: Z ${m.toFixed(2)} → ${v.toFixed(2)}, Y ${p.toFixed(2)} → ${E.toFixed(2)}`),u={startZ:m,targetZ:v,startY:p,targetY:E,startTime:Date.now(),duration:y},this.currentAnimationFrame=requestAnimationFrame(d)}else this.currentAnimationFrame=requestAnimationFrame(d)}else if(f.type==="move"){const _=f.fromZ!==void 0?f.fromZ:c,m=f.toZ!==void 0?f.toZ:c;let p=_;r===0&&l&&c!==_&&(p=c,console.log(`Starting from checkpoint position ${c} within segment ${r}`));const S=Math.min(1,g/(f.duration*1e3)),v=this.applyEasing(S,f.easing||"linear"),b=p+(m-p)*v;if(this.cameraController.camera.position.z=b,this.cameraController.targetZ=b,this.updateSliderPositionByZ(b),f.checkpointName&&S>=.99&&this.changeDashboardTextToCheckpoint(f.checkpointName),S<1)this.currentAnimationFrame=requestAnimationFrame(d);else{if(console.log(`Timeline segment ${r} complete: reached ${m}`),f.checkpointName){this.isAnimating=!1,this.currentAnimationFrame=null,this.currentTimelineSegmentIndex=r+1,this.currentTimeline||(this.currentTimeline=i),this.currentTimelineCheckpointIndex===void 0&&(this.currentTimelineCheckpointIndex=t);const E=this.checkpoints.findIndex(y=>y.name===f.checkpointName);E!==-1&&(this.currentCheckpointIndex=E,this.updateSliderPosition(E)),this.startAutoAdvanceAtCheckpoint(),this.updateDashboardGradientIndicator(),console.log(`Stopped at checkpoint "${f.checkpointName}", waiting 10 seconds. Next segment: ${this.currentTimelineSegmentIndex}`);return}if(r++,a=Date.now(),c=m,r<i.length){const E=i[r];console.log(`Timeline segment ${r}: Next segment from ${c} → ${E.toZ||E.atZ||"?"}`)}this.currentAnimationFrame=requestAnimationFrame(d)}}};return this.currentAnimationFrame=requestAnimationFrame(d),!0}applyEasing(e,t){if(e<=0)return 0;if(e>=1)return 1;switch(t){case"linear":return e;case"ease":case"easeInOut":return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;case"easeIn":return e*e*e;case"easeOut":return 1-Math.pow(1-e,3);default:return e}}changeDashboardTextToCheckpoint(e){if(!e)return;if(!this.dashboardCheckpoints){const n=this.checkpoints.findIndex(i=>i.name===e);if(n!==-1){this.updateSliderPosition(n);return}return}const t=this.dashboardCheckpoints.findIndex(n=>n.name===e);if(t===-1){console.warn(`Dashboard checkpoint "${e}" not found`);return}this.updateSliderPositionByIndex(t),console.log(`Dashboard text changed to checkpoint: ${e} at index ${t}`)}updateSliderPositionByIndex(e){const t=document.getElementById("dashTextSlider");if(!t||!this.dashboardCheckpoints||this.dashboardCheckpoints.length===0)return;const n=this.dashboardCheckpoints.length;if(e<0||e>=n)return;const i=100/n,r=-(e*i);t.style.transition="transform 0.5s ease-in-out",t.style.transform=`translateX(${r}%)`,console.log(`Slider moved to index ${e}, translateX: ${r}%`)}updateSliderPositionByZ(e){if(!this.dashboardCheckpoints||this.dashboardCheckpoints.length===0)return;const t=this.dashboardCheckpoints.filter(i=>i.z!==null&&i.z!==void 0);if(t.length===0)return;let n=-1;for(let i=t.length-1;i>=0;i--){const r=t[i];if(e<=r.z){n=this.dashboardCheckpoints.findIndex(a=>a.name===r.name);break}}n===-1&&this.dashboardCheckpoints.length>0&&(n=0),n!==-1&&this.lastSliderIndex!==n&&(this.lastSliderIndex=n,this.updateSliderPositionByIndex(n))}updateSliderPosition(e){const t=this.checkpoints[e];if(t){if(this.dashboardCheckpoints&&this.dashboardCheckpoints.length>0){const n=this.dashboardCheckpoints.findIndex(i=>i.name===t.name);if(n!==-1){this.updateSliderPositionByIndex(n);return}}if(this.cameraController&&this.cameraController.camera){const n=this.cameraController.camera.position.z;this.updateSliderPositionByZ(n)}}}handleDashboardClick(e){return this.resetAutoAdvanceTimer(),e<0||e>=this.checkpoints.length?(console.warn(`Checkpoint index ${e} is out of bounds. Available checkpoints: 0-${this.checkpoints.length-1}`),!1):this.jumpToCheckpoint(e,!0)}handleScroll(e){if(console.log("handleScroll called with deltaY:",e,"isAnimating:",this.isAnimating),this.resetAutoAdvanceTimer(),this.isAnimating){console.log("Scroll blocked - animation in progress");return}if(e<0){console.log("Scrolling up - continuing timeline");const t=this.goToNextCheckpoint();console.log(t?"Successfully continuing timeline":"Cannot continue - already at end")}else e>0&&console.log("Scroll down blocked - can only move forward in timeline")}handleTouchSwipe(e){this.isAnimating||(e>0?this.goToNextCheckpoint():e<0&&this.goToPreviousCheckpoint())}getCurrentCheckpointIndex(){return this.currentCheckpointIndex}isAnimationInProgress(){return this.isAnimating}findClosestCheckpoint(){if(!this.cameraController||!this.cameraController.camera)return 0;const e=this.cameraController.camera.position.z;let t=0,n=Math.abs(this.checkpoints[0].z-e);return this.checkpoints.forEach((i,r)=>{const a=Math.abs(i.z-e);a<n&&(n=a,t=r)}),t}syncWithCameraPosition(){this.currentCheckpointIndex=this.findClosestCheckpoint(),this.updateSliderPosition(this.currentCheckpointIndex)}getCheckpointNames(){return this.checkpoints.map(e=>e.name)}getCurrentCheckpointName(){return this.currentCheckpointIndex>=0&&this.currentCheckpointIndex<this.checkpoints.length?this.checkpoints[this.currentCheckpointIndex].name:null}resetAutoAdvanceTimer(){this.autoAdvanceTimer&&(clearTimeout(this.autoAdvanceTimer),this.autoAdvanceTimer=null,console.log("Auto-advance timer reset due to user interaction"))}startAutoAdvanceAtCheckpoint(){if(this.resetAutoAdvanceTimer(),this.currentCheckpointIndex>=this.checkpoints.length-1){console.log("At last checkpoint, no auto-advance");return}if(this.isAnimating){console.log("Animation in progress, no auto-advance");return}this.autoAdvanceTimer=setTimeout(()=>{if(console.log("Auto-advancing after 10 seconds of no interaction"),this.autoAdvanceTimer=null,this.currentTimeline&&this.currentTimelineSegmentIndex!==void 0){const e=this.currentTimelineSegmentIndex;e<this.currentTimeline.length?(console.log(`Continuing timeline from segment ${e}`),this.checkpoints[this.currentTimelineCheckpointIndex]?this.continueTimelineFromSegment(e):this.goToNextCheckpoint(!0)):(console.log("Timeline complete, moving to next checkpoint"),this.goToNextCheckpoint(!0))}else console.log("No timeline stored, moving to next checkpoint"),this.goToNextCheckpoint(!0)},this.autoAdvanceDelay),console.log(`Auto-advance timer started: will continue in ${this.autoAdvanceDelay}ms if no interaction`)}continueTimelineFromSegment(e){if(!this.currentTimeline||e>=this.currentTimeline.length){console.log("Cannot continue timeline - invalid segment index");return}this.isAnimating=!0;const t=this.currentTimeline;let n=e,i=Date.now();this.currentTimelineCheckpointIndex||(this.currentTimelineCheckpointIndex=this.currentCheckpointIndex);let r=this.cameraController.camera.position.z;if(n>0){const o=t[n-1];o.type==="move"?r=o.toZ:o.type==="pause"&&(r=o.atZ)}else if(n===0){const o=t[0];o.type==="move"&&o.fromZ!==void 0?r=o.fromZ:o.type==="pause"&&o.atZ!==void 0&&(r=o.atZ)}this.cameraController.camera.position.z=r,this.cameraController.targetZ=r,console.log(`Continuing timeline from segment ${n}, starting at Z: ${r}`);const a=()=>{if(n>=t.length){this.isAnimating=!1,this.currentAnimationFrame=null,this.currentTimelineCheckpointIndex!==void 0&&(this.currentCheckpointIndex=this.currentTimelineCheckpointIndex,this.updateSliderPosition(this.currentCheckpointIndex)),console.log("Timeline continuation complete");return}const o=t[n],c=Date.now()-i;if(o.type==="pause"){const l=this.cameraController.camera.position.z;if(this.updateSliderPositionByZ(l),o.checkpointName&&c<100&&this.changeDashboardTextToCheckpoint(o.checkpointName),c>=o.duration*1e3){if(o.checkpointName){this.isAnimating=!1,this.currentAnimationFrame=null,this.currentTimelineSegmentIndex=n+1,this.currentTimeline||(this.currentTimeline=t),this.currentTimelineCheckpointIndex===void 0&&(this.currentTimelineCheckpointIndex=this.currentCheckpointIndex);const h=this.checkpoints.findIndex(u=>u.name===o.checkpointName);h!==-1&&(this.currentCheckpointIndex=h,this.updateSliderPosition(h)),this.startAutoAdvanceAtCheckpoint(),this.updateDashboardGradientIndicator(),console.log(`Stopped at checkpoint "${o.checkpointName}", waiting 10 seconds. Next segment: ${this.currentTimelineSegmentIndex}`);return}n++,i=Date.now(),r=this.cameraController.camera.position.z,this.currentAnimationFrame=requestAnimationFrame(a)}else this.currentAnimationFrame=requestAnimationFrame(a)}else if(o.type==="move"){const l=o.fromZ!==void 0?o.fromZ:r,h=o.toZ!==void 0?o.toZ:r,u=Math.min(1,c/(o.duration*1e3)),d=this.applyEasing(u,o.easing||"linear"),f=l+(h-l)*d;if(this.cameraController.camera.position.z=f,this.cameraController.targetZ=f,this.updateSliderPositionByZ(f),o.checkpointName&&u>=.99&&this.changeDashboardTextToCheckpoint(o.checkpointName),u<1)this.currentAnimationFrame=requestAnimationFrame(a);else{if(console.log(`Timeline segment ${n} complete: reached ${h}`),o.checkpointName){this.isAnimating=!1,this.currentAnimationFrame=null,this.currentTimelineSegmentIndex=n+1,this.currentTimeline||(this.currentTimeline=t),this.currentTimelineCheckpointIndex===void 0&&(this.currentTimelineCheckpointIndex=this.currentCheckpointIndex);const g=this.checkpoints.findIndex(_=>_.name===o.checkpointName);g!==-1&&(this.currentCheckpointIndex=g,this.updateSliderPosition(g)),this.startAutoAdvanceAtCheckpoint(),this.updateDashboardGradientIndicator(),console.log(`Stopped at checkpoint "${o.checkpointName}", waiting 10 seconds. Next segment: ${this.currentTimelineSegmentIndex}`);return}if(n++,i=Date.now(),r=h,n<t.length){const g=t[n];console.log(`Timeline segment ${n}: Next segment from ${r} → ${g.toZ||g.atZ||"?"}`)}this.currentAnimationFrame=requestAnimationFrame(a)}}};this.currentAnimationFrame=requestAnimationFrame(a)}startCameraPositionMonitoring(){this.cameraMonitoringFrame&&cancelAnimationFrame(this.cameraMonitoringFrame);const e=()=>{if(!this.cameraController||!this.cameraController.camera){this.cameraMonitoringFrame=requestAnimationFrame(e);return}const t=this.cameraController.camera.position.z;this.updateCurrentPointIndex(t),this.dashboardCheckpoints&&this.dashboardCheckpoints.length>0&&this.updateSliderPositionByZ(t),this.updateDashboardGradientIndicator(),this.updateNavigationIndicators(t),this.cameraMonitoringFrame=requestAnimationFrame(e)};e()}updateCurrentPointIndex(e){const t=fo();if(t.length===0)return;const n=.5;let i=-1;for(let r=0;r<t.length;r++){const a=t[r];if(e<=a.z+n)i=r;else break}i!==-1&&i!==this.currentPointIndex&&(this.currentPointIndex=i)}updateDashboardGradientIndicator(){const e=document.querySelector(".dash__text");if(!e)return;if(!this.isAnimating&&(this.currentCheckpointIndex===0||this.currentCheckpointIndex===1)){e.classList.add("at-checkpoint");const n=document.querySelector(".dash__text--button");n&&n.classList.remove("clicked")}else e.classList.remove("at-checkpoint")}updateNavigationIndicators(e){const t=(et==null?void 0:et.navigation)||[];if(t.length===0)return;let n=null;for(const r of t)if(e<=r.startZ&&e>r.endZ){n=r.indicator;break}if(["indicatorWater","indicatorMessage","indicatorGift"].forEach(r=>{const a=document.getElementById(r);a&&a.classList.remove("active__nav")}),n){const r=document.getElementById(n);r&&r.classList.add("active__nav")}}stopCameraPositionMonitoring(){this.cameraMonitoringFrame&&(cancelAnimationFrame(this.cameraMonitoringFrame),this.cameraMonitoringFrame=null)}}class I_{constructor(e,t=4.8,n=10){this.loader=e,this.targetSize=t,this.visibilityScale=n}scaleModel(e){const t=new Zt().setFromObject(e),n=t.max.x-t.min.x,i=t.max.y-t.min.y,r=t.max.z-t.min.z,a=Math.max(n,i,r);let o=1;return a>0&&(o=this.targetSize/a),o*=this.visibilityScale,e.scale.set(o,o,o),{width:n,height:i,depth:r,scaleFactor:o}}hideBasefloorObject(e){e.traverse(t=>{const n=(t.name||"").toLowerCase();(n.includes("_basefloor")||n==="_basefloor"||n.includes("basefloor"))&&(t.visible=!1)})}applyTexturesToPoort(e,t){const n=[];e.traverse(i=>{const r=(i.name||"").toLowerCase();(r==="poort"||r.includes("poort"))&&!i.isMesh&&(i.visible=!0,i.traverse(a=>{a.isMesh&&(n.includes(a)||n.push(a))}))}),e.traverse(i=>{var r;if(i.isMesh){const a=(((r=i.parent)==null?void 0:r.name)||"").toLowerCase();(a==="poort"||a.includes("poort"))&&(n.includes(i)||n.push(i))}}),n.length===0&&(console.warn("No poort objects found in model. Available groups and meshes:"),e.traverse(i=>{i.isMesh})),n.forEach(i=>{const r=a=>new Dt({uniforms:{map:{value:t},opacity:{value:(a==null?void 0:a.opacity)!==void 0?a.opacity:1},gamma:{value:1}},vertexShader:`
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            uniform sampler2D map;
            uniform float opacity;
            uniform float gamma;
            varying vec2 vUv;
            
            void main() {
              vec2 flippedUv = vec2(vUv.x, 1.0 - vUv.y);
              vec4 texColor = texture2D(map, flippedUv);
              vec3 correctedColor = pow(texColor.rgb, vec3(1.0 / gamma));
              gl_FragColor = vec4(correctedColor, texColor.a * opacity);
            }
          `,side:(a==null?void 0:a.side)||Tt,transparent:(a==null?void 0:a.transparent)!==!1});if(i.geometry&&i.geometry.attributes&&i.geometry.attributes.uv){const a=i.geometry.attributes.uv,o=a.array;let c=1/0,l=-1/0,h=1/0,u=-1/0;for(let _=0;_<o.length;_+=2){const m=o[_],p=o[_+1];c=Math.min(c,m),l=Math.max(l,m),h=Math.min(h,p),u=Math.max(u,p)}const d=(c+l)/2,f=(h+u)/2,g=1;for(let _=0;_<o.length;_+=2)o[_]=d+(o[_]-d)*g,o[_+1]=f+(o[_+1]-f)*g;a.needsUpdate=!0}i.visible=!0,i.userData.hasCustomTexture=!0,i.userData.customTextureType="poort",i.material?(Array.isArray(i.material)?i.material=i.material.map(a=>r(a)):i.material=r(i.material),i.material.needsUpdate=!0):i.material=r(null),i.castShadow=!1,i.receiveShadow=!1})}applyTextureToObjects(e,t,n){const i=[];e.traverse(r=>{(r.name||"").toLowerCase().includes(n)&&!r.isMesh&&r.traverse(o=>{o.isMesh&&(i.includes(o)||i.push(o))})}),e.traverse(r=>{var a;r.isMesh&&(((a=r.parent)==null?void 0:a.name)||"").toLowerCase().includes(n)&&(i.includes(r)||i.push(r))}),i.length===0&&(console.warn(`No ${n} objects found in model. Available meshes:`),e.traverse(r=>{r.isMesh})),i.forEach(r=>{if(r.geometry&&r.geometry.attributes&&r.geometry.attributes.uv){const o=r.geometry.attributes.uv,c=o.array;let l=1/0,h=-1/0,u=1/0,d=-1/0;for(let m=0;m<c.length;m+=2){const p=c[m],S=c[m+1];l=Math.min(l,p),h=Math.max(h,p),u=Math.min(u,S),d=Math.max(d,S)}const f=(l+h)/2,g=(u+d)/2,_=1;for(let m=0;m<c.length;m+=2)c[m]=f+(c[m]-f)*_,c[m+1]=g+(c[m+1]-g)*_;o.needsUpdate=!0}const a=o=>new Dt({uniforms:{map:{value:t},opacity:{value:(o==null?void 0:o.opacity)!==void 0?o.opacity:1},gamma:{value:1}},vertexShader:`
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            uniform sampler2D map;
            uniform float opacity;
            uniform float gamma;
            varying vec2 vUv;
            
            void main() {
              vec2 flippedUv = vec2(vUv.x, 1.0 - vUv.y);
              vec4 texColor = texture2D(map, flippedUv);
              vec3 correctedColor = pow(texColor.rgb, vec3(1.0 / gamma));
              gl_FragColor = vec4(correctedColor, texColor.a * opacity);
            }
          `,side:(o==null?void 0:o.side)||Tt,transparent:(o==null?void 0:o.transparent)!==!1});r.visible=!0,r.userData.hasCustomTexture=!0,r.userData.customTextureType=n,r.material?(Array.isArray(r.material)?r.material=r.material.map(o=>a(o)):r.material=a(r.material),r.material.needsUpdate=!0):r.material=a(null),r.castShadow=!1,r.receiveShadow=!1})}load(e,t,n,i={}){const{applyPoort:r=!1,applyBoog:a=!1,stationId:o=null}=i;return new Promise((c,l)=>{this.loader.load(n,h=>{const u=h.scene,d=this.scaleModel(u);this.hideBasefloorObject(u),u.traverse(R=>{R.isMesh&&(R.castShadow=!1,R.receiveShadow=!1)}),u.position.set(0,0,t);const f=[],g=[],_=[],m=[];if(n.includes("station__brush2.glb")&&u.traverse(R=>{const x=(R.name||"").toLowerCase();(x.includes("borstel__staand--left")||x.includes("borstel_staand_left"))&&!R.isMesh?(g.push({object:R,type:"left",originalX:R.position.x}),R.traverse(M=>{(M.name||"").toLowerCase().includes("brush__base")&&!M.isMesh&&f.push({object:M,direction:"right"})})):(x.includes("borstel__staand--right")||x.includes("borstel_staand_right"))&&!R.isMesh&&(g.push({object:R,type:"right",originalX:R.position.x}),R.traverse(M=>{(M.name||"").toLowerCase().includes("brush__base")&&!M.isMesh&&f.push({object:M,direction:"left"})}))}),n.includes("station__brush--up2.glb")){let R=!1,x=!1;u.traverse(M=>{const D=M.name||"";D==="borstel__liggend--UP"&&!M.isMesh?(x=!0,m.push({object:M,originalY:M.position.y}),M.traverse(G=>{(G.name||"").toLowerCase().includes("brush__base")&&!G.isMesh&&f.push({object:G,direction:"left"})})):D==="borstel__liggend"&&!M.isMesh&&(R=!0,_.push({object:M,originalY:M.position.y}),M.traverse(G=>{(G.name||"").toLowerCase().includes("brush__base")&&!G.isMesh&&f.push({object:G,direction:"left"})}))}),!R&&!x&&(console.warn("No borstel__liggend or borstel__liggend--UP groups found in station__brush--up2.glb. Available groups:"),u.traverse(M=>{M.isMesh}))}const p=[];n.includes("station__message--bericht.glb")&&(u.traverse(R=>{const x=(R.name||"").toLowerCase();(x.includes("douche__gordijn")||x.includes("douche_gordijn"))&&p.push({object:R,originalScaleX:R.scale.x})}),p.length===0&&(console.warn("No douche__gordijn objects found in station__message--bericht.glb. Available objects:"),u.traverse(R=>{const x=(R.name||"").toLowerCase();x.includes("douche")||x.includes("gordijn")})));const S=[];n.includes("station__message--wens.glb")&&(u.traverse(R=>{const x=(R.name||"").toLowerCase();(x.includes("user__wens")||x.includes("user_wens"))&&S.push({object:R,originalY:R.position.y,originalScaleX:R.scale.x})}),S.length===0&&(console.warn("No user__wens objects found in station__message--wens.glb. Available objects:"),u.traverse(R=>{const x=(R.name||"").toLowerCase();x.includes("user")||x.includes("wens")})));const v=[];n.includes("station__brush2.glb")&&(u.traverse(R=>{const x=(R.name||"").toLowerCase();(x==="gate"||x.includes("gate"))&&!R.isMesh&&(o==="brush2"?R.visible=!1:R.visible=!0,R.traverse(M=>{const D=(M.name||"").toLowerCase();D.includes("gate__right")||D.includes("gate_right")?v.push({object:M,type:"right",originalX:M.position.x}):(D.includes("gate__left")||D.includes("gate_left"))&&v.push({object:M,type:"left",originalX:M.position.x})}))}),v.length===0&&(console.warn("No gate objects found in station__brush2.glb. Available groups and objects:"),u.traverse(R=>{(R.name||"").toLowerCase().includes("gate")})));const b=[];n.includes("station__message--media.glb")&&(u.traverse(R=>{const x=(R.name||"").toLowerCase();(x.includes("user__media")||x.includes("user_media"))&&b.push({object:R,originalY:R.position.y,originalX:R.position.x,originalScale:{x:R.scale.x,y:R.scale.y,z:R.scale.z}})}),b.length===0&&(console.warn("No user__media objects found in station__message--media.glb. Available objects:"),u.traverse(R=>{const x=(R.name||"").toLowerCase();x.includes("user")||x.includes("media")})));const E=[],y=[];n.includes("station__curtain2.glb")&&(u.traverse(R=>{const x=(R.name||"").toLowerCase();if((x==="curtain__flaps--01"||x==="curtain__flaps--02"||x==="curtain__flaps--03"||x.includes("curtain__flaps--01")||x.includes("curtain__flaps--02")||x.includes("curtain__flaps--03")||x.includes("curtain_flaps--01")||x.includes("curtain_flaps--02")||x.includes("curtain_flaps--03")||x.includes("curtain__flaps_01")||x.includes("curtain__flaps_02")||x.includes("curtain__flaps_03")||x.includes("curtain_flaps_01")||x.includes("curtain_flaps_02")||x.includes("curtain_flaps_03"))&&!R.isMesh){let D=1,G=1,J="unknown";x.includes("--01")||x.includes("_01")?(J="01",D=1,G=1):x.includes("--02")||x.includes("_02")?(J="02",D=1,G=1):(x.includes("--03")||x.includes("_03"))&&(J="03",D=1,G=1);const P={object:R,originalY:R.position.y,name:R.name,id:R.name,groupType:J,liftMultiplier:D,speedMultiplier:G};y.push(P);let N=0;R.traverse(H=>{const X=(H.name||"").toLowerCase(),W=x;if(X.includes("flap")&&X!==W){const j=`${R.name}_${H.name}_${E.length}`;let Z=!1;J==="02"?Z=N>=3&&N<=5:Z=N>=4&&N<=6,E.push({id:j,object:H,originalRotationX:H.rotation.x,originalY:H.position.y,originalX:H.position.x,rotationSpeed:.5+Math.random()*1,phaseOffset:Math.random()*Math.PI*2,name:H.name,parentName:R.name,flapIndex:N,shouldLift:Z,groupType:J}),N++}})}}),E.length===0&&(console.warn("No curtain flaps found in station__curtain2.glb. Available groups and objects:"),u.traverse(R=>{const x=(R.name||"").toLowerCase();x.includes("curtain")||x.includes("flap")})));const w=[];n.includes("station__soap2.glb")&&(u.traverse(R=>{const x=(R.name||"").toLowerCase();(x.includes("spray__soap--l")||x.includes("spray__soap--r")||x.includes("spray_soap--l")||x.includes("spray_soap--r")||x.includes("spray__soap_l")||x.includes("spray__soap_r"))&&w.push({object:R,originalRotationY:R.rotation.y})}),w.length===0&&(console.warn("No spray__soap objects found in station__soap2.glb. Available objects:"),u.traverse(R=>{const x=(R.name||"").toLowerCase();x.includes("spray")||x.includes("soap")}))),e.add(u),c({model:u,dimensions:d,allModels:[u],brushBaseObjects:f||[],borstelStandObjects:g||[],borstelLiggendObjects:_||[],borstelLiggendUpObjects:m||[],curtainFlapObjects:E||[],curtainFlapGroups:y||[],doucheGordijnObjects:p||[],userWensObjects:S||[],userMediaObjects:b||[],gateObjects:v||[],spraySoapObjects:w||[]})},h=>{h.lengthComputable},h=>{console.error(`Error loading ${n}:`,h),l(h)})})}}class D_{constructor(e){this.sceneSetup=e,this.lottieAnimations=[],this.activeIndices=new Set,this.overlay=document.getElementById("lottieOverlay"),this.containers=this.overlay?Array.from(this.overlay.querySelectorAll(".lottie-container")):[],this.allowFirstLottieAutoPlay=!1,this.loadConfig(),this.init()}loadConfig(){if(et&&et.lotties&&Array.isArray(et.lotties))this.config=et.lotties.map((e,t)=>({index:t,url:e.url,playZ:e.playZ,stopZ:e.stopZ!==void 0?e.stopZ:null})),console.log("Loaded lottie configuration from checkpointConfig:",this.config);else{const e=[{zindex:-270,lottie:"https://lottie.host/2163daee-29c1-4123-9142-6c20cc13258a/i3hyETa25l.lottie"},{zindex:-280,lottie:"https://lottie.host/3a5f76fe-dec4-4993-99dc-a2a88eb55d21/vMzEEWSE7u.lottie"}];this.config=e.map((t,n)=>({index:n,url:t.lottie,playZ:t.zindex,stopZ:null})),console.log("Using fallback lottie configuration:",this.config)}}init(){if(!this.overlay||this.containers.length===0){console.warn("Lottie overlay or containers not found");return}this.config.forEach(e=>{const t=e.index!==void 0?e.index:this.config.indexOf(e),n=e.url||e.lottie;n&&n.trim()!==""&&this.loadLottie(t,n).catch(i=>{console.error(`Failed to load Lottie ${t}:`,i)})}),this.startMonitoring()}async loadLottie(e,t){if(e>=this.containers.length){console.warn(`Lottie container index ${e} out of range`);return}const n=this.containers[e];n.innerHTML="";try{let i;if(t.endsWith(".lottie"))try{const r=await fetch(t);if(!r.ok)throw new Error(`Failed to fetch Lottie file: ${r.statusText}`);const a=await r.blob();let o=null;const c=await a.text();try{const u=JSON.parse(c);u&&(u.layers||u.assets||u.fr!==void 0)&&(o=u)}catch{}let l=null;if(!o){const u=await fetch(t).then(g=>g.blob());l=await Eo.loadAsync(u);const d=Object.keys(l.files),f=["data.json","animation.json","comp.json"];for(const g of f)if(l.files[g]&&!l.files[g].dir){const _=await l.files[g].async("string"),m=JSON.parse(_);if(m&&(m.layers||m.assets||m.fr!==void 0)){o=m;break}}if(!o){for(const g of d)if(g.endsWith(".json")&&!l.files[g].dir){const _=await l.files[g].async("string"),m=JSON.parse(_);if(m&&(m.layers||m.assets||m.fr!==void 0)){o=m;break}}}}if(!o)throw new Error("No JSON animation data found in .lottie file");if(o.layers||(o.layers=[]),o.assets||(o.assets=[]),o.fr===void 0&&(o.fr=60),o.v===void 0&&(o.v="5.5.7"),l&&o.assets&&Array.isArray(o.assets)){const u=[];for(const d of o.assets)if(d.p&&d.p!==""){const f=d.p,g=f.split("/").pop()||f,_=d.p;let m=null;if(l.forEach((p,S)=>{if(!S.dir){const v=p.split("/").pop(),b=p.replace(/\\/g,"/"),E=f.replace(/\\/g,"/");(b===E||b===`images/${g}`||b.startsWith("images/")&&v===g||v===g)&&(m=S)}}),m){const p=(async()=>{try{const S=await m.async("blob"),v=URL.createObjectURL(S),b=new Image;return await new Promise((E,y)=>{b.onload=E,b.onerror=y,b.src=v}),o._blobUrls||(o._blobUrls=[]),o._blobUrls.push(v),d._img=b,d.p=v,d.e=1,d.u="",{asset:d,blobUrl:v,originalPath:_}}catch(S){return console.warn(`Failed to convert image ${g} to blob URL:`,S),null}})();u.push(p)}else console.warn(`Image file not found in .lottie archive: ${f} (looking for ${g})`)}await Promise.all(u)}const h={container:n,renderer:"svg",loop:!1,autoplay:!1,animationData:o};o._blobUrls&&o._blobUrls.length>0&&(h.assetsPath=""),i=Vs.loadAnimation(h),o._blobUrls&&o._blobUrls.length>0&&(i._blobUrls=o._blobUrls)}catch(r){console.error(`Error processing .lottie file ${e} from ${t}:`,r);return}else i=Vs.loadAnimation({container:n,renderer:"svg",loop:!1,autoplay:!1,path:t});this.lottieAnimations[e]||(this.lottieAnimations[e]=i),i.addEventListener("DOMLoaded",()=>{this.ensureSVGStretch(n)}),i.addEventListener("data_ready",()=>{this.ensureSVGStretch(n)}),i.addEventListener("data_failed",r=>{console.error(`Lottie ${e} failed to load from ${t}:`,r)})}catch(i){console.error(`Error loading Lottie ${e} from ${t}:`,i)}}startMonitoring(){const e=()=>{if(!this.sceneSetup||!this.sceneSetup.getCamera()){requestAnimationFrame(e);return}const t=this.sceneSetup.getCamera().position.z;this.updateActiveLottie(t),requestAnimationFrame(e)};e()}ensureSVGStretch(e){const t=e.querySelector("svg");t&&(t.setAttribute("preserveAspectRatio","none"),t.style.width="100%",t.style.height="100%")}updateActiveLottie(e){const t=new Set;for(let a=0;a<this.config.length;a++){const o=this.config[a],c=o.index!==void 0?o.index:a,l=o.url||o.lottie;if(l&&l.trim()!==""){const h=o.playZ!==void 0?o.playZ:o.zindex,u=o.stopZ!==void 0?o.stopZ:null;e<=h&&(u==null||e>=u)&&t.add(c)}}for(let a=0;a<this.containers.length;a++){const o=this.containers[a],c=t.has(a),l=this.activeIndices.has(a);a===0&&!this.allowFirstLottieAutoPlay||(c&&!l?(o.classList.add("active"),this.lottieAnimations[a]&&this.lottieAnimations[a].goToAndPlay(0),this.ensureSVGStretch(o)):!c&&l&&(o.classList.remove("active"),this.lottieAnimations[a]&&this.lottieAnimations[a].stop()))}const n=-240,i=document.querySelector(".end__card--autowasbon"),r=document.querySelector(".dashboard__wrapper--off");e<=n?(i&&!i.classList.contains("visible")&&i.classList.add("visible"),r&&!r.classList.contains("hidden")&&r.classList.add("hidden")):(i&&i.classList.contains("visible")&&i.classList.remove("visible"),r&&r.classList.contains("hidden")&&r.classList.remove("hidden")),this.activeIndices=t}updateConfig(e){Array.isArray(e)&&e.length<=8&&(this.lottieAnimations.forEach(t=>{t&&t._blobUrls&&Array.isArray(t._blobUrls)&&t._blobUrls.forEach(n=>{URL.revokeObjectURL(n)})}),this.config=e.map((t,n)=>({index:n,url:t.url||t.lottie,playZ:t.playZ!==void 0?t.playZ:t.zindex,stopZ:t.stopZ!==void 0?t.stopZ:null})),this.config.forEach(t=>{const n=t.index!==void 0?t.index:this.config.indexOf(t),i=t.url||t.lottie;i&&i.trim()!==""&&this.loadLottie(n,i).catch(r=>{console.error(`Failed to load Lottie ${n}:`,r)})}))}reloadConfig(){this.loadConfig(),this.lottieAnimations.forEach(e=>{if(e&&e._blobUrls&&Array.isArray(e._blobUrls)&&e._blobUrls.forEach(t=>{URL.revokeObjectURL(t)}),e&&typeof e.destroy=="function")try{e.destroy()}catch(t){console.warn("Error destroying lottie animation:",t)}}),this.lottieAnimations=[],this.activeIndices.clear(),this.init()}getConfig(){return this.config}}function U_(s,e={}){const{width:t=1024,height:n=512,fontFamily:i="Sink, sans-serif",fontSize:r=120,textColor:a="#000000",letterSpacing:o=0}=e,c=window.devicePixelRatio||1,l=document.createElement("canvas");l.width=t*c,l.height=n*c,l.style.width=`${t}px`,l.style.height=`${n}px`;const h=l.getContext("2d");if(h.imageSmoothingEnabled=!0,h.imageSmoothingQuality="high",h.scale(c,c),h.clearRect(0,0,t,n),h.font=`bold ${r}px ${i}`,h.textAlign="center",h.textBaseline="top",h.letterSpacing=`${o}px`,!s||s.trim()==="")return l;const u=t/2,f=18;return h.fillStyle=a,h.fillText(s,u,f),l}function N_(s,e={}){const{width:t=736,height:n=540,textBoxWidth:i=600,textBoxHeight:r=290,textBoxTop:a=110,fontFamily:o="Sink, sans-serif",fontSize:c=40,textColor:l="#000000",lineHeight:h=1.4}=e,u=window.devicePixelRatio||1,d=document.createElement("canvas");d.width=t*u,d.height=n*u,d.style.width=`${t}px`,d.style.height=`${n}px`;const f=d.getContext("2d");if(f.imageSmoothingEnabled=!0,f.imageSmoothingQuality="high",f.scale(u,u),f.clearRect(0,0,t,n),!s||s.trim()==="")return d;f.font=`${c}px ${o}`,f.textAlign="center",f.textBaseline="top",f.fillStyle=l;const g=t/2,_=s.split(/\r?\n/),m=c*h,p=i-20,S=[];_.forEach(E=>{if(E.trim()===""){S.push("");return}const y=E.split(" ");let w="";y.forEach(R=>{const x=w+(w?" ":"")+R;f.measureText(x).width>p&&w?(S.push(w),w=R):w=x}),w&&S.push(w)});const v=S.length*m,b=a+(r-v)/2;return S.forEach((E,y)=>{const w=b+y*m;E.trim()!==""&&f.fillText(E,g,w)}),d}const Hs=1,O_=.7;let po=null,mo=null,go=null,_o=null;function F_(s){po=s}function B_(s){mo=s}function k_(s){go=s}function z_(){return go?go():null}function G_(s){_o=s}function H_(){return _o?_o():null}function V_(){if(po){const s=po();return!s||s.trim()===""?Oc.name:s}return Oc.name}function W_(){if(mo){const s=mo();return!s||s.trim()===""?"Het schoonste cadeau van Nederland!":s}return"Het schoonste cadeau van Nederland!"}function Wn(){const s=V_();return U_(s.toUpperCase(),{width:736,height:540,fontFamily:"Sink, sans-serif",fontSize:52,textColor:"#000000",letterSpacing:2})}function j_(){const s=W_();return N_(s.toUpperCase(),{width:736,height:540,textBoxWidth:600,textBoxHeight:290,textBoxTop:110,fontFamily:"Sink, sans-serif",fontSize:60,textColor:"#000000",lineHeight:1})}let vo=w_;function X_(s){vo=s}const Mi={Start:{poort:"_assets/_objects/_textures/uvmap-bb-front--blue.png",poortName:Wn,boogSoap:"_assets/_objects/_textures/_power/uvmap-boog--soap.png",boogBrushup:"_assets/_objects/_textures/_power/uvmap-boog--brush-up.png",boogDefault:"_assets/_objects/_textures/uvmap-boog--blue.png",uvmapFront:"_assets/_objects/_textures/uvmap-bb-front--blue.png",uvmapBoog:"_assets/_objects/_textures/uvmap-boog--blue.png",uvmapSoap:"_assets/_objects/_textures/uvmap-boog--soap.png",uvmapBericht:"_assets/_objects/_textures/uvmap-boog--bericht.png",uvmapMedia:"_assets/_objects/_textures/uvmap-boog--media.png",uvmapWater:"_assets/_objects/_textures/uvmap-boog--water.png",uvmapBrushup:"_assets/_objects/_textures/_power/uvmap-boog--brush-up.png",uvmapBrush2:"_assets/_objects/_textures/uvmap-boog--blue.png",tunnel:"blue.png",lotties:{soap:{front:"https://lottie.host/85c574c9-8dc5-4e72-887b-99b0f1ee84cc/1rqeSvKaPg.lottie",back:"https://lottie.host/a06c396d-1825-443a-b113-fb6ddf092f2a/rvkUwUtV23.lottie"},brush1:{front:"https://lottie.host/69350847-d5fe-4913-a64a-011945334c3a/9CAGVfcCgh.lottie",back:"https://lottie.host/c2291279-7414-4d86-a5f3-8826edab247f/yFGv6yd5wO.lottie"},brush2:{front:"https://lottie.host/33b17c77-f0c3-4fc1-b52d-a9d90ddebc4b/Bfl5EMZvdo.lottie",back:null}}},"Party Party":{poort:"_assets/_objects/_textures/_party/uvmap__party--front.png",poortName:Wn,boogSoap:"_assets/_objects/_textures/_party/uvmap__party--boog--soap.png",boogBrushup:"_assets/_objects/_textures/_party/uvmap__party--boog.png",boogDefault:"_assets/_objects/_textures/_party/uvmap__party--boog.png",uvmapFront:"_assets/_objects/_textures/_party/uvmap__party--front.png",uvmapBoog:"_assets/_objects/_textures/_party/uvmap__party--boog.png",uvmapSoap:"_assets/_objects/_textures/_party/uvmap__party--boog--soap.png",uvmapBericht:"_assets/_objects/_textures/_party/uvmap__party--boog--bericht.png",uvmapMedia:"_assets/_objects/_textures/_party/uvmap__party--boog--media.png",uvmapWater:"_assets/_objects/_textures/_party/uvmap__party--boog--water.png",uvmapBrushup:"_assets/_objects/_textures/_party/uvmap__party--boog.png",uvmapBrush2:"_assets/_objects/_textures/_party/uvmap__party--boog.png",tunnel:"yellow.png",lotties:{soap:{front:"https://lottie.host/3de8a182-9c0f-4664-9a60-5be4fac03b0e/B15zcUFKVw.lottie",back:"https://lottie.host/db6efa2a-2148-442c-9928-63746656aa54/wD9kstIxb5.lottie"},brush2:{front:"https://lottie.host/b8d462a0-3a1b-4ade-8bd9-bd768ec77836/RKX7DdDazX.lottie"},message__media:{front:"https://lottie.host/3de8a182-9c0f-4664-9a60-5be4fac03b0e/B15zcUFKVw.lottie"}}},"Sweet Flowers":{poort:"_assets/_objects/_textures/_love/uvmap__love-front.png",poortName:Wn,boogSoap:"_assets/_objects/_textures/_love/uvmap__love--boog--soap.png",boogBrushup:"_assets/_objects/_textures/_love/uvmap__love--boog.png",boogDefault:"_assets/_objects/_textures/_love/uvmap-boog--love.png",uvmapFront:"_assets/_objects/_textures/_love/uvmap__love-front.png",uvmapBoog:"_assets/_objects/_textures/_love/uvmap__love--boog.png",uvmapSoap:"_assets/_objects/_textures/_love/uvmap__love--boog--soap.png",uvmapBericht:"_assets/_objects/_textures/_love/uvmap__love--boog--bericht.png",uvmapMedia:"_assets/_objects/_textures/_love/uvmap__love--boog--media.png",uvmapWater:"_assets/_objects/_textures/_love/uvmap__love--boog--water.png",uvmapBrushup:"_assets/_objects/_textures/_love/uvmap__love--boog.png",uvmapBrush2:"_assets/_objects/_textures/_love/uvmap__love--boog.png",tunnel:"red.png",lotties:{soap:{front:"https://lottie.host/3de8a182-9c0f-4664-9a60-5be4fac03b0e/B15zcUFKVw.lottie",back:"https://lottie.host/db6efa2a-2148-442c-9928-63746656aa54/wD9kstIxb5.lottie"},brush2:{front:"https://lottie.host/b8d462a0-3a1b-4ade-8bd9-bd768ec77836/RKX7DdDazX.lottie"},message__media:{front:"https://lottie.host/3de8a182-9c0f-4664-9a60-5be4fac03b0e/B15zcUFKVw.lottie"}}},"Pop Sop":{poort:"_assets/_objects/_textures/_pop/uvmap__pop-front.png",poortName:Wn,boogSoap:"_assets/_objects/_textures/_pop/uvmap__pop--boog--soap.png",boogBrushup:"_assets/_objects/_textures/_pop/uvmap__pop--boog.png",boogDefault:"_assets/_objects/_textures/_pop/uvmap-boog--pop.png",uvmapFront:"_assets/_objects/_textures/_pop/uvmap__pop-front.png",uvmapBoog:"_assets/_objects/_textures/_pop/uvmap__pop--boog.png",uvmapSoap:"_assets/_objects/_textures/_pop/uvmap__pop--boog--soap.png",uvmapBericht:"_assets/_objects/_textures/_pop/uvmap__pop--boog--bericht.png",uvmapMedia:"_assets/_objects/_textures/_pop/uvmap__pop--boog--media.png",uvmapWater:"_assets/_objects/_textures/_pop/uvmap__pop--boog--water.png",uvmapBrushup:"_assets/_objects/_textures/_pop/uvmap__pop--boog.png",uvmapBrush2:"_assets/_objects/_textures/_pop/uvmap__pop--boog.png",tunnel:"pink.png",lotties:{soap:{front:"https://lottie.host/3de8a182-9c0f-4664-9a60-5be4fac03b0e/B15zcUFKVw.lottie",back:"https://lottie.host/db6efa2a-2148-442c-9928-63746656aa54/wD9kstIxb5.lottie"},brush2:{front:"https://lottie.host/b8d462a0-3a1b-4ade-8bd9-bd768ec77836/RKX7DdDazX.lottie"},message__media:{front:"https://lottie.host/3de8a182-9c0f-4664-9a60-5be4fac03b0e/B15zcUFKVw.lottie"}}},"Power Sop":{poort:"_assets/_objects/_textures/_power/uvmap__power-front.png",poortName:Wn,boogSoap:"_assets/_objects/_textures/_power/uvmap__power--boog--soap.png",boogBrushup:"_assets/_objects/_textures/_power/uvmap__power--boog.png",boogDefault:"_assets/_objects/_textures/_power/uvmap-boog--power.png",uvmapFront:"_assets/_objects/_textures/_power/uvmap__power-front.png",uvmapBoog:"_assets/_objects/_textures/_power/uvmap__power--boog.png",uvmapSoap:"_assets/_objects/_textures/_power/uvmap__power--boog--soap.png",uvmapBericht:"_assets/_objects/_textures/_power/uvmap__power--boog--bericht.png",uvmapMedia:"_assets/_objects/_textures/_power/uvmap__power--boog--media.png",uvmapWater:"_assets/_objects/_textures/_power/uvmap__power--boog--water.png",uvmapBrushup:"_assets/_objects/_textures/_power/uvmap__power--boog.png",uvmapBrush2:"_assets/_objects/_textures/_power/uvmap__power--boog.png",tunnel:"green.png",lotties:{soap:{front:"https://lottie.host/ad607ffd-9044-4eb2-82ab-5f9b4d81a2b1/MedTZcbLoN.lottie",back:"https://lottie.host/db6efa2a-2148-442c-9928-63746656aa54/wD9kstIxb5.lottie"},brush1:{},brush2:{front:"https://lottie.host/33b17c77-f0c3-4fc1-b52d-a9d90ddebc4b/Bfl5EMZvdo.lottie",back:null}}},"Feel Good":{poort:"_assets/_objects/_textures/_feelgood/uvmap__feelgood-front.png",poortName:Wn,boogSoap:"_assets/_objects/_textures/_feelgood/uvmap__feelgood--boog--soap.png",boogBrushup:"_assets/_objects/_textures/_feelgood/uvmap__feelgood--boog.png",boogDefault:"_assets/_objects/_textures/_feelgood/uvmap-boog--feelgood.png",uvmapFront:"_assets/_objects/_textures/_feelgood/uvmap__feelgood-front.png",uvmapBoog:"_assets/_objects/_textures/_feelgood/uvmap__feelgood--boog.png",uvmapSoap:"_assets/_objects/_textures/_pop/uvmap__pop--boog--soap.png",uvmapBericht:"_assets/_objects/_textures/_feelgood/uvmap__feelgood--boog--bericht.png",uvmapMedia:"_assets/_objects/_textures/_feelgood/uvmap__feelgood--boog--media.png",uvmapWater:"_assets/_objects/_textures/_feelgood/uvmap__feelgood--boog--water.png",uvmapBrushup:"_assets/_objects/_textures/_feelgood/uvmap__feelgood--boog.png",uvmapBrush2:"_assets/_objects/_textures/_feelgood/uvmap__feelgood--boog.png",tunnel:"orange.png",lotties:{soap:{front:"https://lottie.host/218bc723-72d4-4e35-8149-0475b8fde1ae/GMhipfzf2R.lottie",back:"https://lottie.host/db6efa2a-2148-442c-9928-63746656aa54/wD9kstIxb5.lottie"},brush2:{front:"https://lottie.host/90704ac7-a303-4698-b50a-00033ba5069f/OpuAREFXBw.lottie"},message__media:{front:"https://lottie.host/218bc723-72d4-4e35-8149-0475b8fde1ae/GMhipfzf2R.lottie"}}},"Soft Calm":{poort:"_assets/_objects/_textures/_calm/uvmap__calm-front.png",poortName:Wn,boogSoap:"_assets/_objects/_textures/_pop/uvmap__pop--boog--soap.png",boogBrushup:"_assets/_objects/_textures/_calm/uvmap__calm--boog.png",boogDefault:"_assets/_objects/_textures/_calm/uvmap-boog--calm.png",uvmapFront:"_assets/_objects/_textures/_calm/uvmap__calm-front.png",uvmapBoog:"_assets/_objects/_textures/_calm/uvmap__calm--boog.png",uvmapSoap:"_assets/_objects/_textures/_calm/uvmap__calm--boog--soap.png",uvmapBericht:"_assets/_objects/_textures/_calm/uvmap__calm--boog--bericht.png",uvmapMedia:"_assets/_objects/_textures/_calm/uvmap__calm--boog--media.png",uvmapWater:"_assets/_objects/_textures/_calm/uvmap__calm--boog--water.png",uvmapBrushup:"_assets/_objects/_textures/_calm/uvmap__calm--boog.png",uvmapBrush2:"_assets/_objects/_textures/_calm/uvmap__calm--boog.png",tunnel:"lightblue.png",lotties:{soap:{front:"https://lottie.host/23ec9e85-bd96-4463-84c8-96d1df0aff2e/y5UlQaJ5BZ.lottie",back:"https://lottie.host/db6efa2a-2148-442c-9928-63746656aa54/wD9kstIxb5.lottie"},brush2:{front:"https://lottie.host/6c2f5bf7-16e8-427d-a3ab-18a408dca2f3/vDKCcKMC8d.lottie"},message__media:{front:"https://lottie.host/23ec9e85-bd96-4463-84c8-96d1df0aff2e/y5UlQaJ5BZ.lottie"}}}};Mi.Autowasbon=Mi.Start;const Z_=10,Y_=-180,q_=-10,$_=180,Fc=20,K_=-0,J_=120,Q_=-80,ev=-40,tv=20,nv=-20,iv=220,sv=220,rv=-40,ov=20,Wr=.5,av=8,Bc=80,Fs=-4,cv=8,lv=200,kc=20,uv=1,hv=.2,dv=-110,fv=-120,pv=50,mv=-80,gv=-43,_v=20,vv=-0,xv=1,bv=.6,Sv=-260,yv=-304,Mv=20,Tv=300,Ev=100,zc=2,jr=1,Xr=.3,Av=-50,wv=-10,Cv=20,Gc=-500,Rv=-180,Lv=-140,Pv=20,Iv=200,Dv=Math.PI/2,Uv=10,Nv=1.5,Ov={id:10,uuid:"76e589af-8733-4b2c-b719-8e0f7cf54830",voucher_type:{value:8,label:"Sparkling!"},voucher_layout:{value:3,label:"Sweet Flowers"},personal_message:"Hey Jacco, gefeliciteerd met het behalen van je rijexamen. Mocht ook wel na 34 pogingen haha!",photo:"vouchers/GHqNiZED0D7B07TNyLJq2TgGYOyY8AVu47S2AKTU.jpg",value:15,valid_until:"2027-03-19",receiver_firstname:"Jacco",receiver_lastname:null,giver_firstname:"Emiel",autowasbon_qr_url:"https://beleving.autowasbon.nl/_assets/_style/_images/random_qr.png",voucher_id:"01026733-134321",autowasbon_qr_payload:"0009297351039"},Fv={15:"_assets/_style/_images/_barcode/barcode--15.gif",17.5:"_assets/_style/_images/_barcode/barcode--17_50.gif",20:"_assets/_style/_images/_barcode/barcode--20.gif"};function Bv(s){return s==null?"":String(s).trim().replace(/^0+(?=\d)/,"")}async function kv(){var _,m,p,S;const s=new URLSearchParams(window.location.search).get("voucher"),e=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1";if(!e&&!s)return;let t=null;if(e)t=Ov;else try{const v=`https://beleving.api.autowasbon.nl/api/v1/vouchers/${encodeURIComponent(s)}/experience`,E=await(await fetch(v,{headers:{Accept:"application/json"}})).json().catch(()=>({}));t=((_=E==null?void 0:E.data)==null?void 0:_.data)??(E==null?void 0:E.data)??null}catch(v){console.warn("[Voucher] Fetch failed:",v)}if(!t)return;window.__voucherData=t;const n=[t.receiver_firstname,t.receiver_lastname].filter(Boolean).join(" ").trim();n&&F_(()=>n);const i=(t.personal_message||"").trim();i&&B_(()=>i);const r=((m=t.voucher_layout)==null?void 0:m.value)??t.voucher_layout,a=(p=$c[Number(r)-1])==null?void 0:p.name;a&&X_(a);const o=uu[hu(t.voucher_type)],c=o?Qr.find(v=>v.key===o):null;if(c!=null&&c.lottie&&G_(()=>c.lottie),t.uuid){const v=`https://beleving.api.autowasbon.nl/api/v1/vouchers/${t.uuid}/photo`;k_(()=>v)}const l=t.autowasbon_qr_url??t.qr_url??t.qr_code_url;if(l){const v=document.getElementById("voucherQrImg");v&&(v.src=l)}const h=document.getElementById("voucherValue");h&&t.value!=null&&(h.textContent=Number(t.value).toLocaleString("nl-NL",{style:"currency",currency:"EUR"}));const u=document.getElementById("voucherBarcodeImage"),d=document.getElementById("voucherBarcodeImageWrap");if(u&&d){const v=Fv[Number(t.value)];v?(u.src=v,d.classList.remove("hidden")):console.warn("[Voucher] Geen barcode voor waarde:",t.value)}const f=document.getElementById("voucherValidUntil");if(f&&t.valid_until){const[v,b,E]=t.valid_until.split("-");f.textContent=`${E}-${b}-${v}`}const g=document.getElementById("voucherBarcodeNumbers");if(g){const v=[t.voucher_id,t.autowasbon_qr_payload].map(Bv).filter(Boolean);v.length?g.textContent=v.join(" / "):(console.warn("[Voucher] voucher_id / autowasbon_qr_payload ontbreken in API-response."),(S=g.closest("div"))==null||S.classList.add("hidden"))}}window.__voucherPreload=kv();window.__voucherPreload.then(()=>{var r,a;const s=document.getElementById("btnSaveToWallet");if(!s)return;const e=window.__voucherData;if(!(e!=null&&e.uuid)){(r=s.closest("div"))==null||r.classList.add("hidden");return}const t="https://beleving.api.autowasbon.nl/api/v1/vouchers",n=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,i=/Android/.test(navigator.userAgent);if(!n&&!i){(a=s.closest("div"))==null||a.classList.add("hidden");return}s.addEventListener("click",async()=>{const o=encodeURIComponent(e.uuid);if(n)window.location.href=`${t}/${o}/apple-pass`;else{s.disabled=!0,s.innerHTML='<i class="fa-sharp fa-solid fa-spinner fa-spin"></i> Laden...';try{const c=await fetch(`${t}/${o}/google-wallet-jwt`,{headers:{Accept:"text/plain"}});if(!c.ok)throw new Error("JWT fetch failed");const l=await c.text();window.open(`https://pay.google.com/gp/v/save/${l}`,"_blank")}catch(c){console.error("[Wallet] Google Wallet error:",c),alert("Kon de wallet niet openen. Probeer het later opnieuw.")}finally{s.disabled=!1,s.innerHTML='<i class="fa-sharp fa-solid fa-wallet"></i> Sla op in wallet'}}})});const zv=4e3,Gv=8e3;let Nn=null,Ho=!1,Ks=!1,es=!1,xo=!1,Ti=!1,bo=!1,ts=null;function Hv(s){var n;const e=((n=s==null?void 0:s.voucher_layout)==null?void 0:n.value)??(s==null?void 0:s.voucher_layout),t=$c[Number(e)-1];return(t==null?void 0:t.playlist)||du}function Vv(){return window.__spotifyIFrameAPI?Promise.resolve(window.__spotifyIFrameAPI):new Promise((s,e)=>{const t=setTimeout(()=>e(new Error("Spotify iframe API not loaded")),Gv);window.addEventListener("spotify-iframe-ready",()=>{clearTimeout(t),s(window.__spotifyIFrameAPI)},{once:!0})})}function Js(s){var e,t;if(Ti=!0,clearTimeout(ts),Nn){const n=Nn.pause();n&&typeof n.catch=="function"&&n.catch(()=>{})}!Ks||bo||(bo=!0,console.warn("[CarwashMusic] Spotify unavailable, using fallback loop:",s),(t=(e=window.soundEffectsController)==null?void 0:e.startBackgroundMusic)==null||t.call(e))}let zl=!1;function Gl(){if(!Nn||!Ho||Ti)return;const s=zl?Nn.resume():Nn.play();s&&typeof s.catch=="function"&&s.catch(()=>{})}function Hl(){if(!Nn||!Ho)return;const s=Nn.pause();s&&typeof s.catch=="function"&&s.catch(()=>{})}async function Wv(){try{const s=await(window.__voucherPreload||Promise.resolve()).then(()=>window.__voucherData),e=Hv(s),t=await Vv(),n=document.getElementById("carwashSpotifyEmbed");if(!n||!t)throw new Error("Spotify embed element or API missing");t.createController(n,{uri:e,width:300,height:80},i=>{Nn=i,Ho=!0,Ks&&!es&&!Ti&&Gl(),i.addListener("playback_update",r=>{const a=r==null?void 0:r.data;a&&(xo=a.isPaused===!1,xo&&(zl=!0,clearTimeout(ts),(bo||es)&&Hl()))}),i.addListener("playback_error",r=>Js((r==null?void 0:r.data)||"playback_error"))})}catch(s){Js((s==null?void 0:s.message)||s)}}window.carwashMusic={play(){var s,e;if(Ks=!0,(e=(s=window.soundEffectsController)==null?void 0:s.unlockBackgroundMusic)==null||e.call(s),!es){if(Ti){Js("spotify failed before start");return}Gl(),clearTimeout(ts),ts=setTimeout(()=>{xo||Js("no playback within timeout")},zv)}},setMuted(s){es=!!s,es?(clearTimeout(ts),Hl()):Ks&&!Ti&&this.play()},isActive(){return!Ti}};Wv();function Hc(s,e){if(e===ih)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ro||e===ll){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===ro)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Vl extends ki{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new qv(t)}),this.register(function(t){return new sx(t)}),this.register(function(t){return new rx(t)}),this.register(function(t){return new ox(t)}),this.register(function(t){return new Kv(t)}),this.register(function(t){return new Jv(t)}),this.register(function(t){return new Qv(t)}),this.register(function(t){return new ex(t)}),this.register(function(t){return new Yv(t)}),this.register(function(t){return new tx(t)}),this.register(function(t){return new $v(t)}),this.register(function(t){return new ix(t)}),this.register(function(t){return new nx(t)}),this.register(function(t){return new Xv(t)}),this.register(function(t){return new ax(t)}),this.register(function(t){return new cx(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Qi.extractUrlBase(e);a=Qi.resolveURL(l,this.path)}else a=Qi.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Bl(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Wl){try{a[Ge.KHR_BINARY_GLTF]=new lx(e)}catch(u){i&&i(u);return}r=JSON.parse(a[Ge.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new yx(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ge.KHR_MATERIALS_UNLIT:a[u]=new Zv;break;case Ge.KHR_DRACO_MESH_COMPRESSION:a[u]=new ux(r,this.dracoLoader);break;case Ge.KHR_TEXTURE_TRANSFORM:a[u]=new hx;break;case Ge.KHR_MESH_QUANTIZATION:a[u]=new dx;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function jv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ge={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Xv{constructor(e){this.parser=e,this.name=Ge.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Te(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],gt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new h_(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new l_(h),l.distance=u;break;case"spot":l=new a_(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,En(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class Zv{constructor(){this.name=Ge.KHR_MATERIALS_UNLIT}getMaterialType(){return Cn}extendParams(e,t,n){const i=[];e.color=new Te(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],gt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,qe))}return Promise.all(i)}}class Yv{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class qv{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new He(o,o)}return Promise.all(r)}}class $v{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class Kv{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],gt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,qe)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class Jv{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class Qv{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(o[0],o[1],o[2],gt),Promise.all(r)}}class ex{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class tx{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(o[0],o[1],o[2],gt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,qe)),Promise.all(r)}}class nx{constructor(e){this.parser=e,this.name=Ge.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class ix{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class sx{constructor(e){this.parser=e,this.name=Ge.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class rx{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ox{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ax{constructor(e){this.name=Ge.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class cx{constructor(e){this.name=Ge.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Gt.TRIANGLES&&l.mode!==Gt.TRIANGLE_STRIP&&l.mode!==Gt.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const _=new ke,m=new I,p=new Fn,S=new I(1,1,1),v=new Vg(g.geometry,g.material,d);for(let b=0;b<d;b++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,b),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,b),c.SCALE&&S.fromBufferAttribute(c.SCALE,b),v.setMatrixAt(b,_.compose(m,p,S));for(const b in c)if(b==="_COLOR_0"){const E=c[b];v.instanceColor=new uo(E.array,E.itemSize,E.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,c[b]);st.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Wl="glTF",Yi=12,Vc={JSON:1313821514,BIN:5130562};class lx{constructor(e){this.name=Ge.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Yi),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Wl)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Yi,r=new DataView(e,Yi);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===Vc.JSON){const l=new Uint8Array(e,Yi+a,o);this.content=n.decode(l)}else if(c===Vc.BIN){const l=Yi+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class ux{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ge.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const u=So[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=So[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Ei[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(f)},o,l,gt,d)})})}}class hx{constructor(){this.name=Ge.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class dx{constructor(){this.name=Ge.KHR_MESH_QUANTIZATION}}class jl extends os{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,_=g-l,m=-2*f+3*d,p=f-d,S=1-m,v=p-d+u;for(let b=0;b!==o;b++){const E=a[_+b+o],y=a[_+b+c]*h,w=a[g+b+o],R=a[g+b]*h;r[b]=S*E+v*y+m*w+p*R}return r}}const fx=new Fn;class px extends jl{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return fx.fromArray(r).normalize().toArray(r),r}}const Gt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ei={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Wc={9728:pt,9729:St,9984:so,9985:tl,9986:zs,9987:Qn},jc={33071:Mt,33648:js,10497:On},Zr={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},So={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Tn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},mx={CUBICSPLINE:void 0,LINEAR:Li,STEP:is},Yr={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function gx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Fo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Tt})),s.DefaultMaterial}function jn(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function En(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function _x(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function vx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function xx(s){let e;const t=s.extensions&&s.extensions[Ge.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+qr(t.attributes):e=s.indices+":"+qr(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+qr(s.targets[n]);return e}function qr(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function yo(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function bx(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Sx=new ke;class yx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new jv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new Bo(this.options.manager):this.textureLoader=new f_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Bl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return jn(r,o,i),En(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ge.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Qi.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Zr[i.type],o=Ei[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new It(l,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=Zr[i.type],l=Ei[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(f&&f!==u){const p=Math.floor(d/f),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let v=t.cache.get(S);v||(_=new l(o,p*f,i.count*f/h),v=new Fg(_,f/h),t.cache.add(S,v)),m=new Uo(v,c,d%f/h,g)}else o===null?_=new l(i.count*c):_=new l(o,d,i.count*c),m=new It(_,c,g);if(i.sparse!==void 0){const p=Zr.SCALAR,S=Ei[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,E=new S(a[1],v,i.sparse.count*p),y=new l(a[2],b,i.sparse.count*c);o!==null&&(m=new It(m.array.slice(),m.itemSize,m.normalized));for(let w=0,R=E.length;w<R;w++){const x=E[w];if(m.setX(x,y[w*c]),c>=2&&m.setY(x,y[w*c+1]),c>=3&&m.setZ(x,y[w*c+2]),c>=4&&m.setW(x,y[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Wc[d.magFilter]||St,h.minFilter=Wc[d.minFilter]||Qn,h.wrapS=jc[d.wrapS]||On,h.wrapT=jc[d.wrapT]||On,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new mt(_);m.needsUpdate=!0,d(m)}),t.load(Qi.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),u.userData.mimeType=a.mimeType||bx(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ge.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ge.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[Ge.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Ul,sn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Dl,sn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Fo}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[Ge.KHR_MATERIALS_UNLIT]){const u=i[Ge.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new Te(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],gt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,qe)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Ht);const h=r.alphaMode||Yr.OPAQUE;if(h===Yr.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Yr.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Cn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new He(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Cn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Cn){const u=r.emissiveFactor;o.emissive=new Te().setRGB(u[0],u[1],u[2],gt)}return r.emissiveTexture!==void 0&&a!==Cn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,qe)),Promise.all(l).then(function(){const u=new a(o);return r.name&&(u.name=r.name),En(u,r),t.associations.set(u,{materials:e}),r.extensions&&jn(i,u,r),u})}createUniqueName(e){const t=Xe.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[Ge.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Xc(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=xx(l),u=i[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[Ge.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Xc(new on,l,t),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?gx(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],m=a[f];let p;const S=l[f];if(m.mode===Gt.TRIANGLES||m.mode===Gt.TRIANGLE_STRIP||m.mode===Gt.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new kg(_,S):new jt(_,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Gt.TRIANGLE_STRIP?p.geometry=Hc(p.geometry,ll):m.mode===Gt.TRIANGLE_FAN&&(p.geometry=Hc(p.geometry,ro));else if(m.mode===Gt.LINES)p=new Wg(_,S);else if(m.mode===Gt.LINE_STRIP)p=new Oo(_,S);else if(m.mode===Gt.LINE_LOOP)p=new jg(_,S);else if(m.mode===Gt.POINTS)p=new Xg(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&vx(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),En(p,r),m.extensions&&jn(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&jn(i,u[0],r),u[0];const d=new $n;r.extensions&&jn(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Pt(Ch.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Io(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),En(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const u=a[l];if(u){o.push(u);const d=new ke;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new No(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,S=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",S)),l.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let S=0,v=d.length;S<v;S++){const b=d[S],E=f[S],y=g[S],w=_[S],R=m[S];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const x=n._createAnimationTracks(b,E,y,w,R);if(x)for(let M=0;M<x.length;M++)p.push(x[M])}return new Qg(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Sx)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Il:l.length>1?h=new $n:l.length===1?h=l[0]:h=new st,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),En(h,r),r.extensions&&jn(n,h,r),r.matrix!==void 0){const u=new ke;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new $n;n.name&&(r.name=i.createUniqueName(n.name)),En(r,n),n.extensions&&jn(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof sn||d instanceof mt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,c=[];Tn[r.path]===Tn.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Tn[r.path]){case Tn.weights:l=Di;break;case Tn.rotation:l=ti;break;case Tn.position:case Tn.scale:l=Ui;break;default:switch(n.itemSize){case 1:l=Di;break;case 2:case 3:default:l=Ui;break}break}const h=i.interpolation!==void 0?mx[i.interpolation]:Li,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+Tn[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=yo(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ti?px:jl;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Mx(s,e,t){const n=e.attributes,i=new Zt;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),o.normalized){const h=yo(Ei[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new I,c=new I;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=yo(Ei[d.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new rn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Xc(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(const a in n){const o=So[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return We.workingColorSpace!==gt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${We.workingColorSpace}" not supported.`),En(s,e),Mx(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?_x(s,e.targets,t):s})}class Tx{constructor(e){this.sceneSetup=e,this.textureCache=new Map,this.textureLoader=new Bo,this.textureLoader.setCrossOrigin("anonymous"),this.poortTexture=null,this._objectCache=new Map}invalidateObjectCache(){this._objectCache.clear()}_findObjects(e,t,n){this._objectCache.size===0&&this.sceneSetup.getScene().traverse(o=>{const c=o.name||"";if(!c)return;this._objectCache.has(c)||this._objectCache.set(c,{groups:[],meshes:[]});const l=this._objectCache.get(c);o.isMesh?l.meshes.push(o):l.groups.push(o)});const i=[],r=[],a=this._objectCache.get(e);if(!a)return{foundObjects:i,foundGroups:r};for(const o of a.groups)o.visible=!0,r.push(o),o.traverse(c=>{c.isMesh&&this.belongsToStation(c,n)&&(t&&c.name!==t||i.includes(c)||i.push(c))});for(const o of a.meshes)this.belongsToStation(o,n)&&(t&&o.name!==t||i.includes(o)||i.push(o));return{foundObjects:i,foundGroups:r}}belongsToStation(e,t){if(!t)return!0;let n=e;for(;n.parent&&n.parent!==this.sceneSetup.getScene();)n=n.parent;return n.userData.stationId===t}getObjectPath(e){const t=[];let n=e;for(;n&&n!==this.sceneSetup.getScene();)t.unshift(n.name||"unnamed"),n=n.parent;return t.join(" > ")}applyUVMappingOnly(e,t,n=null,i=null){const{foundObjects:r,foundGroups:a}=this._findObjects(e,n,i);if(r.length===0){console.warn(`No ${e} objects found for UV mapping.`);return}r.forEach((o,c)=>{if(o.geometry&&o.geometry.attributes&&o.geometry.attributes.position){o.geometry.computeBoundingBox();const l=o.geometry.boundingBox;if(l){const h=o.geometry.attributes.position.array,u=new I;l.getSize(u);const d=[];for(let f=0;f<h.length;f+=3){let g=0,_=0;switch(t){case"x":g=u.x>0?(h[f]-l.min.x)/u.x:0,_=u.y>0?(h[f+1]-l.min.y)/u.y:0;break;case"y":g=u.x>0?(h[f]-l.min.x)/u.x:0,_=u.z>0?(h[f+2]-l.min.z)/u.z:0;break;case"z":g=u.x>0?(h[f]-l.min.x)/u.x:0,_=u.y>0?(h[f+1]-l.min.y)/u.y:0;break;case"xy":g=u.x>0?(h[f]-l.min.x)/u.x:0,_=u.y>0?(h[f+1]-l.min.y)/u.y:0;break;case"xz":g=u.x>0?(h[f]-l.min.x)/u.x:0,_=u.z>0?(h[f+2]-l.min.z)/u.z:0;break;case"yz":g=u.y>0?(h[f+1]-l.min.y)/u.y:0,_=u.z>0?(h[f+2]-l.min.z)/u.z:0;break;default:g=u.x>0?(h[f]-l.min.x)/u.x:0,_=u.y>0?(h[f+1]-l.min.y)/u.y:0}d.push(g,_)}if(o.geometry.attributes.uv){const f=o.geometry.attributes.uv;for(let g=0;g<d.length;g++)f.array[g]=d[g];f.needsUpdate=!0}else o.geometry.setAttribute("uv",new Xt(d,2))}}o.visible=!0})}applyTextureToObjects(e,t,n,i,r=null,a=null,o=!0,c=!0,l=!0,h=!1,u=!1,d=!1,f=!1){const{foundObjects:g,foundGroups:_}=this._findObjects(e,r,a);if(g.length===0){if(e!=="wasboog__back"){console.warn(`No ${e} objects found. Searching for similar names...`);const m=[];this.sceneSetup.getScene().traverse(p=>{var v;const S=p.name||"";(S.includes(e)||e.includes(S))&&(p.isMesh?m.push(`Mesh: "${p.name}" (Parent: "${(v=p.parent)==null?void 0:v.name}")`):m.push(`Group: "${p.name}"`))}),m.length>0&&console.warn("Found similar names:",m)}return}g.forEach((m,p)=>{const S=m.material,v=!f&&S&&S.type==="ShaderMaterial"&&S.uniforms&&S.uniforms.map,b=y=>{if(h){const D=new Cn({map:t,transparent:o!==void 0?o:(y==null?void 0:y.transparent)!==!1,opacity:(y==null?void 0:y.opacity)!==void 0?y.opacity:1,side:(y==null?void 0:y.side)||Tt,depthWrite:l,depthTest:!0,toneMapped:!1,fog:!1});return D.map&&(D.map.colorSpace=qe),D}const w=v&&!f?S.uniforms.map.value:null,R=w!==null,x={map:{value:R?w:t},opacity:{value:(y==null?void 0:y.opacity)!==void 0?y.opacity:1},gamma:{value:i}};R&&(x.overlayMap={value:t});const M=R?`
          uniform sampler2D map;
          uniform sampler2D overlayMap;
          uniform float opacity;
          uniform float gamma;
          varying vec2 vUv;
          
          void main() {
            vec2 flippedUv = vec2(vUv.x, 1.0 - vUv.y);
            vec4 baseColor = texture2D(map, flippedUv);
            vec4 overlayColor = texture2D(overlayMap, flippedUv);
            
            // Apply gamma correction to base
            vec3 correctedBase = pow(baseColor.rgb, vec3(1.0 / gamma));
            
            // Apply gamma correction to overlay
            vec3 correctedOverlay = pow(overlayColor.rgb, vec3(1.0 / gamma));
            
            // Blend overlay on top (overlay alpha determines blend amount)
            vec3 finalColor = mix(correctedBase, correctedOverlay, overlayColor.a);
            float finalAlpha = max(baseColor.a, overlayColor.a) * opacity;
            
            gl_FragColor = vec4(finalColor, finalAlpha);
          }
        `:`
          uniform sampler2D map;
          uniform float opacity;
          uniform float gamma;
          varying vec2 vUv;
          
          void main() {
            vec2 flippedUv = vec2(vUv.x, 1.0 - vUv.y);
            vec4 texColor = texture2D(map, flippedUv);
            vec3 correctedColor = pow(texColor.rgb, vec3(1.0 / gamma));
            gl_FragColor = vec4(correctedColor, texColor.a * opacity);
          }
        `;return new Dt({uniforms:x,vertexShader:`
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:M,side:(y==null?void 0:y.side)||Tt,transparent:o!==void 0?o:(y==null?void 0:y.transparent)!==!1,depthWrite:l,depthTest:!0})};if(m.geometry&&m.geometry.attributes&&m.geometry.attributes.position){m.geometry.computeBoundingBox();const y=m.geometry.boundingBox;if(y){const w=m.geometry.attributes.position.array,R=new I;y.getSize(R);const x=[];for(let M=0;M<w.length;M+=3){let D=0,G=0;switch(n){case"x":D=R.x>0?(w[M]-y.min.x)/R.x:0,G=R.y>0?(w[M+1]-y.min.y)/R.y:0;break;case"y":D=R.x>0?(w[M]-y.min.x)/R.x:0,G=R.z>0?(w[M+2]-y.min.z)/R.z:0;break;case"z":D=R.x>0?(w[M]-y.min.x)/R.x:0,G=R.y>0?(w[M+1]-y.min.y)/R.y:0;break;case"xy":D=R.x>0?(w[M]-y.min.x)/R.x:0,G=R.y>0?(w[M+1]-y.min.y)/R.y:0;break;case"xz":D=R.x>0?(w[M]-y.min.x)/R.x:0,G=R.z>0?(w[M+2]-y.min.z)/R.z:0;break;case"yz":D=R.y>0?(w[M+1]-y.min.y)/R.y:0,G=R.z>0?(w[M+2]-y.min.z)/R.z:0;break;default:D=R.x>0?(w[M]-y.min.x)/R.x:0,G=R.y>0?(w[M+1]-y.min.y)/R.y:0}u&&(G=1-G),d&&(D=1-D),x.push(D,G)}if(m.geometry.attributes.uv){const M=m.geometry.attributes.uv;for(let D=0;D<x.length;D++)M.array[D]=x[D];M.needsUpdate=!0}else m.geometry.setAttribute("uv",new Xt(x,2))}}else if(u&&m.geometry&&m.geometry.attributes&&m.geometry.attributes.uv){const y=m.geometry.attributes.uv,w=y.array;if(u)for(let R=1;R<w.length;R+=2)w[R]=1-w[R];if(d)for(let R=0;R<w.length;R+=2)w[R]=1-w[R];y.needsUpdate=!0}m.visible=!0,m.userData.hasCustomTexture=!0,m.userData.customTextureType=e,(!l||h)&&(m.renderOrder=100);const E=m.material;m.material?(Array.isArray(m.material)?m.material=m.material.map(y=>b(y)):m.material=b(m.material),m.material.needsUpdate=!0):m.material=b(null),f&&E&&E!==m.material&&setTimeout(()=>{Array.isArray(E)?E.forEach(y=>{y&&y.dispose&&(y.map&&y.map.dispose&&y.map.dispose(),y.uniforms&&(y.uniforms.map&&y.uniforms.map.value&&y.uniforms.map.value.dispose&&y.uniforms.map.value.dispose(),y.uniforms.overlayMap&&y.uniforms.overlayMap.value&&y.uniforms.overlayMap.value.dispose&&y.uniforms.overlayMap.value.dispose()),y.dispose())}):E&&E.dispose&&(E.map&&E.map.dispose&&E.map.dispose(),E.uniforms&&(E.uniforms.map&&E.uniforms.map&&E.uniforms.map.value&&E.uniforms.map.value.dispose&&E.uniforms.map.value.dispose(),E.uniforms.overlayMap&&E.uniforms.overlayMap.value&&E.uniforms.overlayMap.value.dispose&&E.uniforms.overlayMap.value.dispose()),E.dispose())},0),m.castShadow=!1,m.receiveShadow=!1})}giveObjectMapping(e,t,n="xy",i={}){const{flipY:r=!1,flipV:a=!1,flipH:o=!1,wrapS:c=Mt,wrapT:l=Mt,gamma:h=Hs,meshName:u=null,stationId:d=null,uvOnly:f=!1,transparent:g=!0,visible:_=!0,depthWrite:m=!0,useBasicMaterial:p=!1,forceReplace:S=!1}=i,v=n.toLowerCase();if(f){this.applyUVMappingOnly(e,v,u,d);return}let b=t,E=t;if(typeof t=="function"){const y=t();if(y&&y instanceof HTMLCanvasElement)b=y,E=`canvas_${e}_${Date.now()}`;else{console.error("Function provided to giveObjectMapping did not return a canvas");return}}if(b instanceof HTMLCanvasElement){const y=new Nl(b);y.flipY=r,y.wrapS=c,y.wrapT=l,p&&(y.colorSpace=qe),y.needsUpdate=!0,this.textureCache.set(E,y),this.applyTextureToObjects(e,y,v,h,u,d,g,_,m,p,a,o,S);return}if(this.textureCache.has(E)){const y=this.textureCache.get(E);this.applyTextureToObjects(e,y,v,h,u,d,g,_,m,p,a,o,S)}else this.textureLoader.load(t,y=>{y.flipY=r,y.wrapS=c,y.wrapT=l,p&&(y.colorSpace=qe),this.textureCache.set(E,y),this.applyTextureToObjects(e,y,v,h,u,d,g,_,m,p,a,o,S)},void 0,y=>{console.error(`Error loading texture ${t}:`,y)})}applyPoortTextureToModel(e){if(!this.poortTexture){console.warn("Poort texture not loaded yet, skipping texture application");return}const t=[];e.traverse(n=>{const i=(n.name||"").toLowerCase();(i==="poort"||i.includes("poort"))&&!n.isMesh&&(n.visible=!0,n.traverse(r=>{r.isMesh&&(t.includes(r)||t.push(r))}))}),e.traverse(n=>{var i;if(n.isMesh){const r=(((i=n.parent)==null?void 0:i.name)||"").toLowerCase();(r==="poort"||r.includes("poort"))&&(t.includes(n)||t.push(n))}}),t.length===0&&(console.warn("No poort objects found in model. Available groups and meshes:"),e.traverse(n=>{n.isMesh})),t.forEach(n=>{const i=r=>{const a=Hs;return new Dt({uniforms:{map:{value:this.poortTexture},opacity:{value:(r==null?void 0:r.opacity)!==void 0?r.opacity:1},gamma:{value:a}},vertexShader:`
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            uniform sampler2D map;
            uniform float opacity;
            uniform float gamma;
            varying vec2 vUv;
            
            void main() {
              vec2 flippedUv = vec2(vUv.x, 1.0 - vUv.y);
              vec4 texColor = texture2D(map, flippedUv);
              vec3 correctedColor = pow(texColor.rgb, vec3(1.0 / gamma));
              gl_FragColor = vec4(correctedColor, texColor.a * opacity);
            }
          `,side:(r==null?void 0:r.side)||Tt,transparent:(r==null?void 0:r.transparent)!==!1})};if(n.geometry&&n.geometry.attributes&&n.geometry.attributes.position){n.geometry.computeBoundingBox();const r=n.geometry.boundingBox;if(r){const a=n.geometry.attributes.position.array,o=new I;r.getSize(o);const c=[];for(let l=0;l<a.length;l+=3){const h=o.x>0?(a[l]-r.min.x)/o.x:0,u=o.y>0?(a[l+1]-r.min.y)/o.y:0;c.push(h,u)}if(n.geometry.attributes.uv){const l=n.geometry.attributes.uv;for(let h=0;h<c.length;h++)l.array[h]=c[h];l.needsUpdate=!0}else n.geometry.setAttribute("uv",new Xt(c,2))}}n.visible=!0,n.userData.hasCustomTexture=!0,n.userData.customTextureType="poort",n.material?(Array.isArray(n.material)?n.material=n.material.map(r=>i(r)):n.material=i(n.material),n.material.needsUpdate=!0):n.material=i(null),n.castShadow=!1,n.receiveShadow=!1})}applyPoortTextureToScene(){if(!this.poortTexture){console.warn("Poort texture not loaded yet");return}const e=new Set;this.sceneSetup.getScene().traverse(t=>{if((!t.parent||t.parent===this.sceneSetup.getScene())&&!e.has(t)){e.add(t);let n=!1;t.traverse(i=>{const r=(i.name||"").toLowerCase();(r==="poort"||r.includes("poort"))&&(n=!0)}),n&&this.applyPoortTextureToModel(t)}})}loadPoortTexture(){this.textureLoader.load("_assets/_objects/_textures/uvmap-bb.png",e=>{e.flipY=!1,e.wrapS=Mt,e.wrapT=Mt,this.poortTexture=e,this.textureCache.set("_assets/_objects/_textures/uvmap-bb.png",e),this.applyPoortTextureToScene()},void 0,e=>{console.error("Error loading uvmap-bb.png texture:",e)})}async applyLottieMask(e,t,n={}){const{stationId:i=null,startZ:r=null,times:a=null,triggerDistance:o=null}=n,c=window.lottieManager;if(!c){console.error("LottieManager not available. Make sure it is initialized and available as window.lottieManager");return}const l=[],h=e;if(this.sceneSetup.getScene().traverse(_=>{(_.name||"")===h&&!_.isMesh&&(_.visible=!0,_.traverse(p=>{p.isMesh&&this.belongsToStation(p,i)&&(l.includes(p)||l.push(p))})),_.isMesh&&this.belongsToStation(_,i)&&(_.name||"")===h&&!l.includes(_)&&l.push(_)}),l.length===0){console.warn(`No ${e} objects found for Lottie mask.`);return}const u=`${e}_mask`,d=c.lottieAnimations&&c.lottieAnimations.some(_=>_.layerName===u&&(o!=null?_.triggerDistance===o:_.startZ===r)&&_.times===a),f=l.some(_=>_.userData&&_.userData.lottieMaskAnimation);if(d||f){console.log(`Lottie mask already applied to ${e}, skipping duplicate application`);return}const g=typeof t=="string"?{url:t,startZ:r,times:a}:{...t,startZ:r!==null?r:t.startZ,times:a!==null?a:t.times};try{const _=await c.loadLottieTexture(g);if(!_||!_.texture){console.error(`Failed to load Lottie mask from ${typeof t=="string"?t:t.url}`);return}const m=_.texture,p=_.anim;l.forEach(v=>{var E,y;const b=v.material;if(!b){console.warn(`Mesh ${v.name} has no material to apply mask to`);return}if(v.userData.lottieMaskAnimation=p,b.type==="MeshBasicMaterial")b.alphaMap=m,b.transparent=!0,m&&(m.colorSpace=qe),b.needsUpdate=!0;else if(b.type==="ShaderMaterial"){const w={...b.uniforms};w.alphaMap={value:m};const R=b.fragmentShader;if(R.includes("alphaMap"))b.uniforms.alphaMap.value=m,b.needsUpdate=!0;else{let x=R;const M=x.match(/(uniform\s+\w+\s+\w+;)/);M?x=x.replace(M[0],`${M[0]}
          uniform sampler2D alphaMap;`):x=x.replace("varying vec2 vUv;",`varying vec2 vUv;
          uniform sampler2D alphaMap;`);const G=R.includes("flippedUv")?"flippedUv":"vUv";x=x.replace(/gl_FragColor\s*=\s*vec4\(([^)]+)\);/,(J,P)=>{if(P.includes(",")){const N=P.split(",");if(N.length===4)return`gl_FragColor = vec4(${N[0]}, ${N[1]}, ${N[2]}, ${N[3].trim()} * texture2D(alphaMap, ${G}).a);`;if(N.length===2)return`gl_FragColor = vec4(${N[0]}, ${N[1].trim()} * texture2D(alphaMap, ${G}).a);`}else return P.includes("vec3")?`gl_FragColor = vec4(${P}, texture2D(alphaMap, ${G}).a);`:`gl_FragColor = vec4(${P}.rgb, ${P}.a * texture2D(alphaMap, ${G}).a);`;return J}),b.fragmentShader=x,b.uniforms=w,b.transparent=!0,b.needsUpdate=!0}}else{console.warn(`Material type ${b.type} not supported for Lottie mask. Converting to ShaderMaterial.`);const R={map:{value:b.map||((y=(E=b.uniforms)==null?void 0:E.map)==null?void 0:y.value)},alphaMap:{value:m},opacity:{value:b.opacity!==void 0?b.opacity:1}},x=new Dt({uniforms:R,vertexShader:`
              varying vec2 vUv;
              void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `,fragmentShader:`
              uniform sampler2D map;
              uniform sampler2D alphaMap;
              uniform float opacity;
              varying vec2 vUv;
              
              void main() {
                vec2 flippedUv = vec2(vUv.x, 1.0 - vUv.y);
                vec4 baseColor = texture2D(map, flippedUv);
                vec4 maskColor = texture2D(alphaMap, flippedUv);
                
                // Use the alpha channel of the mask
                float maskAlpha = maskColor.a;
                
                gl_FragColor = vec4(baseColor.rgb, baseColor.a * maskAlpha * opacity);
              }
            `,transparent:!0,side:b.side||Tt,depthWrite:b.depthWrite!==void 0?b.depthWrite:!0,depthTest:b.depthTest!==void 0?b.depthTest:!0});v.material=x}});const S=o!=null;if((r!==null||S)&&p){const v={anim:p,startZ:S?null:r,stopZ:null,times:a!==null?a:null,layerName:`${e}_mask`,started:!1,stopped:!1,playCount:0,completed:!1,triggerDistance:S?o:null,distanceTargetMeshes:S?l:null};a!==null&&a>0&&p.addEventListener("complete",()=>{v.playCount++,v.playCount>=v.times&&(p.setLoop(!1),v.stopped=!0,v.completed=!0)}),c.lottieAnimations&&c.lottieAnimations.push(v),S&&p&&(p.pause(),p.goToAndStop(0,!0))}console.log(`Applied Lottie mask to ${l.length} ${e} object(s)`)}catch(_){console.error(`Error applying Lottie mask to ${e}:`,_)}}async applyLottieTexture(e,t,n="x",i={}){const{stationId:r=null,visible:a=!0,depthWrite:o=!1,useBasicMaterial:c=!0,flipV:l=!1,flipTexture:h=!1,gamma:u=Hs,startZ:d=null,pauseZ:f=null,resumeZ:g=null}=i,_=window.lottieManager;if(!_){console.error("LottieManager not available. Make sure it is initialized and available as window.lottieManager");return}const m=typeof t=="string"?{url:t,startZ:d,pauseZ:f,resumeZ:g}:{...t,startZ:d!==null?d:t.startZ,pauseZ:f!==null?f:t.pauseZ,resumeZ:g!==null?g:t.resumeZ};try{const p=await _.loadLottieTexture(m);if(!p||!p.texture){console.error(`Failed to load Lottie texture from ${typeof t=="string"?t:t.url}`);return}const S=p.texture,v=p.anim;c&&(S.colorSpace=qe),h&&(S.flipY=!1),this.applyTextureToObjects(e,S,n,u,null,r,!0,a,o,c,l,!1,!0);const b=[];if(this.sceneSetup.getScene().traverse(E=>{(E.name||"")===e&&!E.isMesh&&E.traverse(w=>{w.isMesh&&this.belongsToStation(w,r)&&(b.includes(w)||b.push(w))}),E.isMesh&&this.belongsToStation(E,r)&&(E.name||"")===e&&!b.includes(E)&&b.push(E)}),b.forEach(E=>{E.userData.lottieAnimation=v,E.userData.lottieTexture=S}),d!==null&&v){const E=v.totalFrames||0,y=f!==null?f:40,w=Math.floor(E*(y/100)),R={anim:v,startZ:d,stopZ:null,pauseZ:f||null,resumeZ:g||null,pauseFrame:w,pauseAtPercent:y,times:null,layerName:e,started:!1,stopped:!1,paused:!1,pausedAtFrame:!1,playCount:0};_.lottieAnimations&&_.lottieAnimations.push(R)}console.log(`Applied Lottie texture to ${b.length} ${e} object(s)`)}catch(p){console.error(`Error applying Lottie texture to ${e}:`,p)}}}class Ex{constructor(e,t){this.sceneSetup=e,this.mobileOptimizer=t,this.lottieAnimations=[],this.lottieMeshes=[],this.lastCameraZ=null,this.brush1BackLottieMeshes=[],this.lottieFrontMediaMeshes=[]}async loadLottieTexture(e){try{const t=typeof e=="string"?e:e.url;if(!t)return null;const n=await fetch(t);if(!n.ok)throw new Error(`Failed to fetch Lottie: ${n.statusText}`);const i=await n.blob(),r=await Eo.loadAsync(i);let a=null;if(r.forEach((M,D)=>{!D.dir&&M.endsWith(".json")&&(a=D)}),!a)throw new Error("No JSON file found in .lottie archive");const o=await a.async("string"),c=JSON.parse(o),l=[];if(c.assets&&Array.isArray(c.assets)){for(const M of c.assets)if(M.p&&M.p!==""){const D=M.p,G=D.split("/").pop()||D,J=M.p;let P=null;if(r.forEach((N,H)=>{if(!H.dir){const X=N.split("/").pop(),W=N.replace(/\\/g,"/"),j=D.replace(/\\/g,"/");(W===j||W===`images/${G}`||W.startsWith("images/")&&X===G||X===G)&&(P=H)}}),P){const N=(async()=>{try{const H=await P.async("blob"),X=URL.createObjectURL(H),W=new Image;return await new Promise((j,Z)=>{W.onload=j,W.onerror=Z,W.src=X}),c._blobUrls||(c._blobUrls=[]),c._blobUrls.push(X),M._img=W,M.p=X,M.e=1,M.u="",{asset:M,blobUrl:X,originalPath:J}}catch(H){return console.warn(`Failed to convert image ${G} to blob URL:`,H),null}})();l.push(N)}else console.warn(`Image file not found in .lottie archive: ${D} (looking for ${G})`)}}await Promise.all(l);const h=c.w||512,u=c.h||512,d=document.createElement("canvas");d.width=h,d.height=u,d.style.width=h+"px",d.style.height=u+"px";const f=d.getContext("2d",{alpha:!0,willReadFrequently:!1,desynchronized:!1});f.clearRect(0,0,h,u);const g=new Nl(d);g.minFilter=St,g.magFilter=St,g.flipY=!0,g.format=Bt,g.premultiplyAlpha=!1,g.generateMipmaps=!1;const _=typeof e=="string"||typeof e=="object"&&e&&e.startZ!=null,m=typeof e=="object"&&e.pauseZ!==null&&e.resumeZ!==null,p=!(typeof e=="object"&&(e.times===1||m)),S=c.assets&&c.assets.some(M=>M.p&&M.p.startsWith("blob:")),v={renderer:"canvas",loop:p,autoplay:_,animationData:c,rendererSettings:{context:f,clearCanvas:!0,preserveAspectRatio:"xMidYMid meet",progressiveLoad:!1,hideOnTransparent:!1}};S&&(v.assetsPath="",v.rendererSettings.imageAssetsPath="");const b=Vs.loadAnimation(v);c._blobUrls&&c._blobUrls.length>0&&(b._blobUrls=c._blobUrls),g.needsUpdate=!0;let E=0,y=0;const R=1e3/(this.mobileOptimizer?this.mobileOptimizer.getLottieFPS():60);b.addEventListener("enterFrame",()=>{const M=Date.now(),D=b.currentFrame;D!==E&&M-y>=R&&(g.needsUpdate=!0,E=D,y=M)}),b.addEventListener("segmentStart",()=>{g.needsUpdate=!0});const x=typeof e=="object"?e:{url:t,startZ:null,stopZ:null,times:null};return x.times===void 0&&(x.times=null),{texture:g,anim:b,config:x}}catch(t){const n=typeof e=="string"?e:(e==null?void 0:e.url)||"unknown";return console.error(`Failed to load Lottie from ${n}:`,t),null}}findStationId(e){let t=e;for(;t;){if(t.userData&&t.userData.stationId)return t.userData.stationId;t=t.parent}return null}findLayerObjects(e,t){const n=[];return e.forEach(i=>{i.traverse(r=>{const a=(r.name||"").toLowerCase(),o=t.toLowerCase();(a===o||a.includes(o))&&(r.isMesh?n.push(r):r.isMesh||(r.visible=!0,r.traverse(c=>{c.isMesh&&(n.includes(c)||n.push(c))})))})}),e.forEach(i=>{i.traverse(r=>{var a;if(r.isMesh){const o=(((a=r.parent)==null?void 0:a.name)||"").toLowerCase();(o===t.toLowerCase()||o.includes(t.toLowerCase()))&&(n.includes(r)||n.push(r))}})}),n}applyTextureToLayerObjects(e,t,n){if(e.length===0){console.warn(`No ${n} objects found.`);return}e.forEach(i=>{const r=o=>new Dt({uniforms:{map:{value:t},opacity:{value:(o==null?void 0:o.opacity)!==void 0?o.opacity:1},gamma:{value:Hs}},vertexShader:`
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,fragmentShader:`
            uniform sampler2D map;
            uniform float opacity;
            uniform float gamma;
            varying vec2 vUv;
            
            void main() {
              vec4 texColor = texture2D(map, vUv);
              // Apply gamma correction: pow(color, 1.0/gamma)
              // gamma = 1.0 means no change, higher gamma = darker
              vec3 correctedColor = pow(texColor.rgb, vec3(1.0 / gamma));
              gl_FragColor = vec4(correctedColor, texColor.a * opacity);
            }
          `,side:(o==null?void 0:o.side)||Tt,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1});i.visible=!0,i.castShadow=!1,i.receiveShadow=!1,i.userData.hasCustomTexture=!0,i.userData.customTextureType=n,i.userData.isLottie=!0,i.userData.lottieTexture=t,i.renderOrder=1e3,i.material&&(Array.isArray(i.material)?i.material:[i.material]).forEach(c=>{if(c){if(c.uniforms&&c.uniforms.map&&c.uniforms.map.value){const l=c.uniforms.map.value;l&&l.dispose&&l!==t&&l.dispose()}c.dispose&&c.dispose()}}),i.material?(Array.isArray(i.material)?i.material=i.material.map(o=>r(o)):i.material=r(i.material),i.material.needsUpdate=!0):i.material=r(null),this.lottieMeshes.includes(i)||this.lottieMeshes.push(i);const a=this.findStationId(i);n==="lottie_back"&&a==="brush1"&&(this.brush1BackLottieMeshes.includes(i)||(this.brush1BackLottieMeshes.push(i),i.userData.originalX===void 0&&(i.userData.originalX=i.position.x))),n==="lottie_front"&&a==="message__media"&&(this.lottieFrontMediaMeshes.includes(i)||(this.lottieFrontMediaMeshes.push(i),i.userData.originalY===void 0&&(i.userData.originalY=i.position.y),i.userData.originalRotationX===void 0&&(i.userData.originalRotationX=i.rotation.x)))})}hideLayerObjects(e,t){e.length!==0&&e.forEach(n=>{n.isMesh?n.visible=!1:(n.visible=!1,n.traverse(i=>{i.isMesh&&(i.visible=!1)}))})}async applyLottieToLayer(e,t,n){const i=this.findLayerObjects(e,t);if(n){const r=await this.loadLottieTexture(n);if(r&&r.texture){if(this.applyTextureToLayerObjects(i,r.texture,t),r.anim&&r.config){const a=r.config.startZ===null||typeof r.config.startZ=="number",o=new Set(i.map(l=>l.uuid)),c={anim:r.anim,startZ:r.config.startZ,stopZ:r.config.stopZ,times:r.config.times,layerName:t,meshIds:o,started:a,stopped:!1,playCount:0};r.config.times!==null&&r.config.times>0&&r.anim.addEventListener("complete",()=>{c.playCount++,c.playCount>=c.times&&(r.anim.setLoop(!1),c.stopped=!0)}),this.lottieAnimations.push(c)}return!0}else return console.warn(`[Lottie] Failed to load ${t} texture`),!1}else return this.hideLayerObjects(i,t),!1}async applyLottieToLayers(e,t){if(t){if(t.customLayers)for(const[n,i]of Object.entries(t.customLayers))await this.applyLottieToLayer(e,n,i);await this.applyLottieToLayer(e,"lottie_front",t.front),await this.applyLottieToLayer(e,"lottie_back",t.back)}}_isUserWensLayer(e){return e==="user__wens"||e&&String(e).includes("user__wens")}restartLottieLayerFromFrameZero(e){this.lottieAnimations.forEach(t=>{if(!t.anim||t.layerName!==e)return;const n=t.anim;t.pausedAtFrame=!1,t.paused=!1,t.pauseFrame!==void 0&&t.resumeZ!==null&&n.setLoop(!1),n.goToAndStop(0,!0),n.play()})}updateLottieTriggers(e,t=null){(this.lastCameraZ===null||Math.abs(e-this.lastCameraZ)>.1)&&(this.forceLottieTextureUpdates(),this.lastCameraZ=e);const i=new I,r=new I;this.lottieAnimations.forEach(a=>{const{anim:o,startZ:c,stopZ:l,pauseZ:h,resumeZ:u,pauseFrame:d,started:f,stopped:g,paused:_,pausedAtFrame:m,layerName:p}=a;if(!o)return;if(a.triggerDistance!=null&&t&&a.distanceTargetMeshes&&a.distanceTargetMeshes.length>0){t.updateMatrixWorld(!0),t.getWorldPosition(i);let v=1/0,b=null;a.distanceTargetMeshes.forEach(x=>{if(x&&x.getWorldPosition){x.updateMatrixWorld(!0),x.getWorldPosition(r);const M=i.distanceTo(r);M<v&&(v=M),b===null&&(b=r.z)}});const E=v<=a.triggerDistance,y=b!==null&&i.z<b,R=v!==1/0&&y&&v>a.triggerDistance;if(window.innerWidth<=768&&Math.abs(v-a.triggerDistance)<5&&console.log(`[Distance Mask Debug] ${p}: minDist=${v.toFixed(2)}, triggerDistance=${a.triggerDistance}, shouldPlay=${E}, camZ=${i.z.toFixed(2)}, objZ=${b==null?void 0:b.toFixed(2)}`),R){o.pause(),o.goToAndStop(0,!0),a.started=!1,a.playCount=0,a.completed=!1,a.stopped=!1;return}E&&!f?(o.goToAndStop(0,!0),o.setLoop(a.times!==1),o.play(),a.started=!0):!E&&f&&(o.pause(),o.goToAndStop(0,!0),a.started=!1);return}if(a.pauseFrame!==void 0&&u!==null&&c!==null&&f){const{pauseFrame:v,pausedAtFrame:b}=a,E=o.currentFrame||0;let y=!1;c<0?y=e<=u:y=e>=u,y&&b?o.isPaused&&(o.play(),a.pausedAtFrame=!1,a.paused=!1,console.log(`[Lottie] Resumed ${p} at camera Z ${e} (resumeZ: ${u})`)):y&&!b&&E>=v&&(a.pausedAtFrame=!1),!b&&!y&&E>=v&&(o.goToAndStop(v,!0),o.pause(),a.pausedAtFrame=!0,a.paused=!0,console.log(`[Lottie] Paused ${p} at frame ${v} (40%)`))}let S=!1;if(c!==null&&(c<0?S=e<=c:S=e>=c),c!==null){const v=a.times===1&&a.stopped&&a.playCount>=1||a.completed===!0;S&&!f&&!v?(this._isUserWensLayer(p)&&(o.goToAndStop(0,!0),a.pausedAtFrame=!1,a.paused=!1),o.play(),a.pauseFrame!==void 0&&a.resumeZ!==null||a.times===1?o.setLoop(!1):o.setLoop(!0),a.started=!0,a.stopped&&a.times!==null&&(a.stopped=!1)):S&&f&&o.isPaused&&!a.pausedAtFrame&&!v?o.play():!S&&f&&!v?(o.pause(),o.goToAndStop(0,!0),a.started=!1,a.pausedAtFrame=!1,a.paused=!1,a.stopped&&!(a.times===1&&a.playCount>=1)&&(a.stopped=!1),a.times===1&&a.playCount>=1||(a.playCount=0)):!f&&c!==null&&Math.abs(e-c)<5&&(!a.lastDebugTime||Date.now()-a.lastDebugTime>1e3)&&(a.lastDebugTime=Date.now())}if(f&&l!==null){let v=!1;l<0?v=e<=l:v=e>=l,v&&!g?(o.setLoop(!1),a.stopped=!0):!v&&g&&(o.setLoop(!0),a.stopped=!1)}})}forceLottieTextureUpdates(){this.lottieMeshes.forEach(e=>{if(e&&e.userData&&e.userData.lottieTexture){const t=e.userData.lottieTexture;t.needsUpdate=!0,e.material&&(Array.isArray(e.material)?e.material.forEach(n=>{n&&n.uniforms&&n.uniforms.map&&(n.uniforms.map.value=t,n.needsUpdate=!0)}):e.material.uniforms&&e.material.uniforms.map&&(e.material.uniforms.map.value=t,e.material.needsUpdate=!0))}})}getLottieAnimations(){return this.lottieAnimations}getBrush1BackLottieMeshes(){return this.brush1BackLottieMeshes.map(e=>{var t;return{object:e,originalX:((t=e.userData)==null?void 0:t.originalX)!==void 0?e.userData.originalX:e.position.x}})}getLottieFrontMediaMeshes(){return this.lottieFrontMediaMeshes.map(e=>{var t,n;return{object:e,originalY:((t=e.userData)==null?void 0:t.originalY)!==void 0?e.userData.originalY:e.position.y,originalRotationX:((n=e.userData)==null?void 0:n.originalRotationX)!==void 0?e.userData.originalRotationX:e.rotation.x}})}refreshAllLottieTextures(){this.forceLottieTextureUpdates(),this.sceneSetup&&this.sceneSetup.render&&this.sceneSetup.render()}cleanupLottieAnimationsForLayers(e,t){Array.isArray(t)||(t=[t]);const n=[];t.forEach(a=>{const o=this.findLayerObjects(e,a);n.push(...o)});const i=new Set(n.map(a=>a.uuid)),r=[];this.lottieAnimations.forEach((a,o)=>{if(t.includes(a.layerName)&&!(a.meshIds&&a.meshIds.size>0&&![...a.meshIds].some(l=>i.has(l)))){if(a.anim)try{a.anim.stop(),a.anim.destroy()}catch(c){console.warn("Error destroying lottie animation:",c)}r.push(o)}}),r.reverse().forEach(a=>{this.lottieAnimations.splice(a,1)}),n.forEach(a=>{if(a.userData&&a.userData.lottieTexture){const l=a.userData.lottieTexture;l&&l.dispose&&l.dispose(),a.userData.lottieTexture=null}a.material&&(Array.isArray(a.material)?a.material:[a.material]).forEach(h=>{if(h){if(h.uniforms&&h.uniforms.map&&h.uniforms.map.value){const u=h.uniforms.map.value;u&&u.dispose&&u.dispose()}h.dispose&&h.dispose()}});const o=this.lottieMeshes.indexOf(a);o!==-1&&this.lottieMeshes.splice(o,1);const c=this.brush1BackLottieMeshes.indexOf(a);c!==-1&&this.brush1BackLottieMeshes.splice(c,1)}),console.log(`Cleaned up ${r.length} lottie animations and ${n.length} meshes`)}}class Ax{constructor(e,t,n){this.sceneSetup=e,this.cameraController=t,this.lottieManager=n,this.allBrushBaseObjects=[],this.allBorstelStandObjects=[],this.allBorstelLiggendObjects=[],this.allBorstelLiggendUpObjects=[],this.allBlowerFrontMiddleObjects=[],this.allCurtainFlapObjects=[],this.allCurtainFlapGroups=[],this.allDoucheGordijnObjects=[],this.allUserWensObjects=[],this.allUserMediaObjects=[],this.allBrush1LottieBackObjects=[],this.allGateObjects=[],this.allLottieFrontMediaObjects=[],this.allSpraySoapObjects=[],this.lastTime=Date.now(),this.isAnimating=!1,this.clock={startTime:Date.now()},this._worldPosVec=new I,this._v1=new I,this._v2=new I}setBrushBaseObjects(e){this.allBrushBaseObjects=e}setBorstelStandObjects(e){this.allBorstelStandObjects=e}setBorstelLiggendObjects(e){this.allBorstelLiggendObjects=e}setBorstelLiggendUpObjects(e){this.allBorstelLiggendUpObjects=e}setBlowerFrontMiddleObjects(e){this.allBlowerFrontMiddleObjects=e}setCurtainFlapObjects(e){this.allCurtainFlapObjects=e}setCurtainFlapGroups(e){this.allCurtainFlapGroups=e}setDoucheGordijnObjects(e){this.allDoucheGordijnObjects=e}setUserWensObjects(e){this.allUserWensObjects=e}setUserMediaObjects(e){this.allUserMediaObjects=e}setBrush1LottieBackObjects(e){this.allBrush1LottieBackObjects=e}setGateObjects(e){this.allGateObjects=e}setLottieFrontMediaObjects(e){this.allLottieFrontMediaObjects=e}setSpraySoapObjects(e){this.allSpraySoapObjects=e}calculateScrollProgress(e,t,n,i,r,a,o=0){let c=a;try{i&&i.updateMatrixWorld?(i.updateMatrixWorld(!0),i.getWorldPosition(this._worldPosVec),c=r.position.distanceTo(this._worldPosVec)):c=Math.abs(r.position.z-o)}catch{c=Math.abs(r.position.z-o)}const l=Math.min(Math.max(0,1-(c-2)/(a-2)),1);let h=0;return e<=n?h=1:e>=t?h=0:h=1-(e-n)/(t-n),Math.min(h*l,1)}animate(){this.isAnimating||(this.isAnimating=!0,this.animationLoop())}animationLoop(){requestAnimationFrame(()=>this.animationLoop());const e=Date.now(),t=(e-this.lastTime)/1e3;this.lastTime=e,this.cameraController&&this.cameraController.update(t);const n=2;if(this.allBrushBaseObjects.forEach(r=>{const a=r.object||r,o=r.direction||"right";if(a&&a.visible){const c=o==="right"?n:-n;a.rotation.y+=c*t,a.rotation.y>=Math.PI*2?a.rotation.y-=Math.PI*2:a.rotation.y<0&&(a.rotation.y+=Math.PI*2)}}),this.allBorstelStandObjects.length>0&&this.sceneSetup&&this.sceneSetup.getCamera){const a=this.sceneSetup.getCamera().position;this._loggedBrushInfo||(this.allBorstelStandObjects.forEach((o,c)=>{}),this._loggedBrushInfo=!0),this.allBorstelStandObjects.forEach(o=>{if(o&&o.object&&o.object.visible){let c=Fc;try{o.object.updateMatrixWorld(!0),o.object.getWorldPosition(this._v1),c=a.distanceTo(this._v1)}catch{const d=o.brushStationZ||0;c=Math.abs(a.z-d)}const l=Math.min(Math.max(0,1-(c-2)/(Fc-2)),1);o.currentProgress===void 0&&(o.currentProgress=0);const h=.1;if(o.currentProgress=o.currentProgress+(l-o.currentProgress)*h,o.type==="left"){const u=(o.originalX||0)+Z_,d=(o.originalX||0)+Y_,f=u+(d-u)*o.currentProgress;o.object.position.x=f}else if(o.type==="right"){const u=(o.originalX||0)+q_,d=(o.originalX||0)+$_,f=u+(d-u)*o.currentProgress;o.object.position.x=f,(!o.lastRightLogTime||Date.now()-o.lastRightLogTime>2e3||c<15)&&(o.lastRightLogTime=Date.now())}else console.warn(`Unknown brush type: "${o.type}"`);o.object.updateMatrix(),o.object.parent&&o.object.parent.updateMatrixWorld(!0)}})}if(this.allBorstelLiggendObjects.length>0&&this.sceneSetup&&this.sceneSetup.getCamera){const r=this.sceneSetup.getCamera(),a=r.position.z;this.allBorstelLiggendObjects.forEach(o=>{if(o&&o.object){const c=o.object;o.originalY===void 0&&(o.originalY=c.position.y);const l=o.brushStationZ||0,h=this.calculateScrollProgress(a,sv,rv,c,r,ov,l),u=o.originalY!==void 0?o.originalY:c.position.y,d=u+nv,f=u+iv,g=d+(f-d)*h;c.position.y=g,c.updateMatrix(),c.parent&&c.parent.updateMatrixWorld(!0)}})}if(this.allBorstelLiggendUpObjects.length>0&&this.sceneSetup&&this.sceneSetup.getCamera){const r=this.sceneSetup.getCamera(),a=r.position.z;this.allBorstelLiggendUpObjects.forEach(o=>{if(o&&o.object){const c=o.object;o.originalY===void 0&&(o.originalY=c.position.y);const l=o.brushStationZ||0,h=this.calculateScrollProgress(a,Q_,ev,c,r,tv,l),u=o.originalY!==void 0?o.originalY:c.position.y,d=u+K_,f=u+J_,g=d+(f-d)*h;c.position.y=g,c.updateMatrix(),c.parent&&c.parent.updateMatrixWorld(!0)}})}const i=5;if(this.allBlowerFrontMiddleObjects.forEach(r=>{r&&r.visible&&(r.rotation.z-=i*t,r.rotation.z>=Math.PI*2?r.rotation.z-=Math.PI*2:r.rotation.z<0&&(r.rotation.z+=Math.PI*2))}),this.allSpraySoapObjects.length>0){const r=(Date.now()-this.clock.startTime)/1e3,a=Uv*Math.PI/180;this.allSpraySoapObjects.forEach(o=>{if(o&&o.object&&o.object.visible){const c=o.object;o.originalRotationY===void 0&&(o.originalRotationY=c.rotation.y);const l=Math.sin(r*Nv)*a;c.rotation.y=o.originalRotationY+l,c.updateMatrix(),c.parent&&c.parent.updateMatrixWorld(!0)}})}if(this.allCurtainFlapObjects.length>0&&this.sceneSetup&&this.sceneSetup.getCamera){const r=this.sceneSetup.getCamera(),a=(Date.now()-this.clock.startTime)/1e3,o=r.position;if(!this._loggedFlapConfig){const c=this.allCurtainFlapObjects.filter(l=>l.shouldLift);c.length>0&&c.forEach((l,h)=>{}),this._loggedFlapConfig=!0}this.allCurtainFlapObjects.forEach(c=>{if(c&&c.object&&c.object.visible){const l=c.object,h=c.originalRotationX||0,u=c.phaseOffset||0,d=c.rotationSpeed||1;let f=Bc;if(l.parent)l.updateMatrixWorld(!0),l.getWorldPosition(this._v1),f=o.distanceTo(this._v1);else{const E=c.curtainStationZ||0;f=Math.abs(o.z-E)}const g=Math.min(Math.max(0,1-(f-2)/(Bc-2)),1);c.currentSpeed===void 0&&(c.currentSpeed=Wr,c.currentMaxAngle=Fs);const _=Wr+(av-Wr)*g,m=Fs+(cv-Fs)*g,p=.1;c.currentSpeed=c.currentSpeed+(_-c.currentSpeed)*p,c.currentMaxAngle=c.currentMaxAngle+(m-c.currentMaxAngle)*p;const S=Math.sin(a*d*.5+u)*(Fs*Math.PI/180),v=Math.sin(a*d*c.currentSpeed+u)*(c.currentMaxAngle*Math.PI/180),b=S+(v-S)*g;if(l.rotation.x=h+b,c.shouldLift){c.originalY===void 0&&(c.originalY=l.position.y),c.originalX===void 0&&(c.originalX=l.position.x);let E=kc;if(l.parent)l.updateMatrixWorld(!0),l.getWorldPosition(this._v1),E=o.distanceTo(this._v1);else{const N=c.curtainStationZ||0;E=Math.abs(o.z-N)}const y=Math.min(Math.max(0,1-(E-2)/(kc-2)),1),w=lv*y,R=.1,x=l.position.y,M=c.originalY+w,D=x+(M-x)*R,G=l.position.x,J=c.originalX,P=G+(J-G)*R;l.position.y=D,l.position.x=P,l.updateMatrix(),l.parent&&l.parent.updateMatrixWorld(!0),(!c.lastLiftLogTime||Date.now()-c.lastLiftLogTime>2e3||E<25)&&(D-c.originalY,c.lastLiftLogTime=Date.now())}}})}if(this.allDoucheGordijnObjects.length>0&&this.sceneSetup&&this.sceneSetup.getCamera){const r=this.sceneSetup.getCamera(),a=r.position.z;this.allDoucheGordijnObjects.forEach(o=>{if(o&&o.object&&o.object.visible){const c=o.object,l=o.gordijnStationZ||0,h=this.calculateScrollProgress(a,dv,fv,c,r,pv,l),u=o.originalScaleX!==void 0?o.originalScaleX:1,d=u*uv,f=u*hv,g=d+(f-d)*h;c.scale.x=g,c.updateMatrix(),c.parent&&c.parent.updateMatrixWorld(!0)}})}if(this.allUserWensObjects.length>0&&this.sceneSetup&&this.sceneSetup.getCamera){const r=this.sceneSetup.getCamera(),a=r.position.z;this.allUserWensObjects.forEach(o=>{if(o&&o.object){const c=o.object;o.originalY===void 0&&(o.originalY=c.position.y),o.originalScaleX===void 0&&(o.originalScaleX=c.scale.x);const l=o.wensStationZ||0,h=this.calculateScrollProgress(a,mv,gv,c,r,_v,l),u=o.originalY!==void 0?o.originalY:c.position.y,d=u,f=u+vv,g=d+(f-d)*h,_=o.originalScaleX!==void 0?o.originalScaleX:1,m=_*xv,p=_*bv,S=m+(p-m)*h;c.position.y=g,c.scale.x=S,c.updateMatrix(),c.parent&&c.parent.updateMatrixWorld(!0)}})}if(this.allUserMediaObjects.length>0&&this.sceneSetup&&this.sceneSetup.getCamera){const r=this.sceneSetup.getCamera(),a=r.position.z,o=(Date.now()-this.clock.startTime)/1e3;this.allUserMediaObjects.forEach(c=>{if(c&&c.object){const l=c.object;c.originalY===void 0&&(c.originalY=l.position.y),c.originalX===void 0&&(c.originalX=l.position.x),c.originalScale===void 0&&(c.originalScale={x:l.scale.x,y:l.scale.y,z:l.scale.z});const h=c.mediaStationZ||0,u=this.calculateScrollProgress(a,Sv,yv,l,r,Mv,h),d=c.originalY!==void 0?c.originalY:l.position.y,f=d,g=d+Tv,_=f+(g-f)*u,m=o*zc,p=u*Math.PI*2*zc+m,S=Math.sin(p)*Ev*u,b=(c.originalX!==void 0?c.originalX:l.position.x)+S,E=c.originalScale!==void 0?c.originalScale:{x:l.scale.x,y:l.scale.y,z:l.scale.z},y={x:E.x*jr,y:E.y*jr,z:E.z*jr},w={x:E.x*Xr,y:E.y*Xr,z:E.z*Xr},R={x:y.x+(w.x-y.x)*u,y:y.y+(w.y-y.y)*u,z:y.z+(w.z-y.z)*u};l.position.y=_,l.position.x=b,l.scale.x=R.x,l.scale.y=R.y,l.scale.z=R.z,l.updateMatrix(),l.parent&&l.parent.updateMatrixWorld(!0)}})}if(this.sceneSetup&&this.sceneSetup.getCamera){const r=this.sceneSetup.getCamera(),a=r.position.z;this.lottieManager&&this.lottieManager.updateLottieTriggers(a,r)}if(this.allGateObjects.length>0&&this.sceneSetup&&this.sceneSetup.getCamera){const r=this.sceneSetup.getCamera(),a=r.position.z;this.allGateObjects.forEach(o=>{if(o&&o.object){const c=o.object;o.originalX===void 0&&(o.originalX=c.position.x);const l=o.gateStationZ||0,h=this.calculateScrollProgress(a,Av,wv,c,r,Cv,l),u=o.originalX!==void 0?o.originalX:c.position.x,d=u,f=o.type==="right"?Gc:-Gc,g=u+f,_=d+(g-d)*h;c.position.x=_,c.updateMatrix(),c.parent&&c.parent.updateMatrixWorld(!0)}})}if(this.allLottieFrontMediaObjects.length>0&&this.sceneSetup&&this.sceneSetup.getCamera){const r=this.sceneSetup.getCamera(),a=r.position.z;this.allLottieFrontMediaObjects.forEach(o=>{if(o&&o.object){const c=o.object;o.originalY===void 0&&(o.originalY=c.position.y),o.originalRotationX===void 0&&(o.originalRotationX=c.rotation.x);const l=o.lottieFrontStationZ||0,h=this.calculateScrollProgress(a,Rv,Lv,c,r,Pv,l),u=o.originalY!==void 0?o.originalY:c.position.y,d=u,f=u+Iv,g=d+(f-d)*h,_=o.originalRotationX!==void 0?o.originalRotationX:c.rotation.x,m=_,p=_+Dv,S=m+(p-m)*h;c.position.y=g,c.rotation.x=S,c.updateMatrix(),c.parent&&c.parent.updateMatrixWorld(!0)}})}this.sceneSetup.render()}}class wx{constructor(e,t=[],n=null){this.sceneSetup=e,this.config=Array.isArray(t)?t:[],this.backgroundPath=n||null,this.audioCache=new Map,this.backgroundAudio=null,this.state=new Map,this.isRunning=!1,this._rafId=null,this._warnedMissing=new Set,this._userHasInteracted=!1,this._interactionListeners=[],this._isMuted=!1,this._preloadPromises=[],this._backgroundRequested=!1,this._preloadBackground(),this._preloadAll(),this._initState(),this._setupUserInteractionListener()}_preloadBackground(){if(this.backgroundPath)try{const e=new Audio(this.backgroundPath);e.preload="auto",e.loop=!1,this.backgroundAudio=e;const t=new Promise((n,i)=>{e.addEventListener("canplaythrough",()=>n(),{once:!0}),e.addEventListener("error",r=>i(r),{once:!0})});this._preloadPromises.push(t)}catch(e){console.warn(`[SoundEffects] Failed to preload background ${this.backgroundPath}:`,e)}}_setupUserInteractionListener(){const e=()=>{this._userHasInteracted||(this._userHasInteracted=!0,this._interactionListeners.forEach(({event:n,handler:i,options:r})=>{document.removeEventListener(n,i,r)}),this._interactionListeners=[])};["click","touchstart","keydown"].forEach(n=>{const i=e,r={once:!0,passive:!0};document.addEventListener(n,i,r),this._interactionListeners.push({event:n,handler:i,options:r})})}_playBackgroundAudio(){if(!(!this.backgroundAudio||!this.isRunning||this._isMuted||!this._backgroundRequested))try{this.backgroundAudio.currentTime=0,this.backgroundAudio.play().catch(e=>{(e==null?void 0:e.name)!=="AbortError"&&console.warn("[SoundEffects] Background play failed:",e)})}catch(e){console.warn("[SoundEffects] Background play error:",e)}}_preloadAll(){this.config.forEach((e,t)=>{if(e.audioPath)try{const n=new Audio(e.audioPath);n.preload="auto";const i=e.volume;n.volume=typeof i=="number"&&!Number.isNaN(i)?Math.max(0,Math.min(1,i)):1,this.audioCache.set(t,n);const r=new Promise((a,o)=>{n.addEventListener("canplaythrough",()=>a(),{once:!0}),n.addEventListener("error",c=>o(c),{once:!0})});this._preloadPromises.push(r)}catch(n){console.warn(`[SoundEffects] Failed to preload ${e.audioPath}:`,n)}})}whenPreloadComplete(){return!this._preloadPromises||this._preloadPromises.length===0?Promise.resolve():Promise.allSettled(this._preloadPromises).then(()=>{})}_initState(){this.config.forEach((e,t)=>{this.state.set(t,{wasInRange:!1,playCount:0,exhausted:!1})})}_belongsToStation(e,t,n){if(!t)return!0;let i=e;for(;i.parent&&i.parent!==n;)i=i.parent;return i.userData&&i.userData.stationId===t}_findObject(e,t,n){const i=n;let r=null;return e.traverse(a=>{r||(a.name||"")!==i||this._belongsToStation(a,t,e)&&(r=a)}),r}_getObjectWorldPosition(e,t=new I){if(!e||!e.getWorldPosition)return null;try{return e.updateMatrixWorld&&e.updateMatrixWorld(!0),e.getWorldPosition(t),t}catch{return null}}_update(){if(!this.isRunning)return;const e=this.sceneSetup.getScene(),t=this.sceneSetup.getCamera();if(!e||!t){this._rafId=requestAnimationFrame(()=>this._update());return}const n=t.position;this.config.forEach((i,r)=>{const a=this.state.get(r);if(!a||a.exhausted)return;let o=!1;if(i.triggerZ!==void 0||i.startZ!==void 0&&i.endZ!==void 0){const c=n.z;i.triggerZ!==void 0?o=Math.abs(c-i.triggerZ)<=.5:i.startZ!==void 0&&i.endZ!==void 0&&(o=c<=i.startZ&&c>i.endZ)}else{const c=this._findObject(e,i.stationId,i.objectName);if(!c){this._warnedMissing.has(r)||(this._warnedMissing.add(r),console.warn(`[SoundEffects] Object "${i.objectName}" in station "${i.stationId}" not found.`));return}const l=this._getObjectWorldPosition(c);if(!l)return;o=n.distanceTo(l)<=i.distance}if(o&&!a.wasInRange){if(a.wasInRange=!0,i.times!==null&&a.playCount>=i.times){a.exhausted=!0;return}const c=this.audioCache.get(r);if(c&&!this._isMuted)try{c.currentTime=0,c.play().catch(l=>{(l==null?void 0:l.name)!=="AbortError"&&console.warn("[SoundEffects] Play failed:",l)}),a.playCount++,i.times!==null&&a.playCount>=i.times&&(a.exhausted=!0)}catch(l){console.warn("[SoundEffects] Play error:",l)}}else o||(a.wasInRange=!1)}),this._rafId=requestAnimationFrame(()=>this._update())}start(){this.isRunning||(this.isRunning=!0,!this._userHasInteracted&&this._interactionListeners.length===0&&this._setupUserInteractionListener(),this._userHasInteracted&&this._playBackgroundAudio(),this._rafId=requestAnimationFrame(()=>this._update()))}stop(){this.isRunning=!1,this.backgroundAudio&&this.backgroundAudio.pause(),this._rafId!=null&&(cancelAnimationFrame(this._rafId),this._rafId=null),this._interactionListeners.forEach(({event:e,handler:t,options:n})=>{document.removeEventListener(e,t,n)}),this._interactionListeners=[]}setConfig(e,t=null){const n=this.isRunning;this.stop(),this.config=Array.isArray(e)?e:[],this.backgroundPath=t??this.backgroundPath,this._warnedMissing.clear(),this.audioCache.clear(),this.backgroundAudio=null,this.state.clear(),this._preloadBackground(),this._preloadAll(),this._initState(),n&&this.start()}unlockBackgroundMusic(){const e=this.backgroundAudio;if(!(!e||this._backgroundRequested))try{e.muted=!0;const t=()=>{this._backgroundRequested||(e.pause(),e.currentTime=0),e.muted=this._isMuted},n=e.play();n&&typeof n.then=="function"?n.then(t,t):t()}catch{e.muted=this._isMuted}}startBackgroundMusic(){this._userHasInteracted=!0,this._backgroundRequested=!0,this._playBackgroundAudio()}setMuted(e){this._isMuted=e,this.backgroundAudio&&(this.backgroundAudio.muted=e,!e&&this.isRunning&&this._userHasInteracted&&this._playBackgroundAudio()),this.audioCache.forEach(t=>{t&&(t.muted=e)})}toggleMute(){return this.setMuted(!this._isMuted),this._isMuted}isMuted(){return this._isMuted}}const Cx="_assets/_audio/carwash-loop-2.mp3",Rx=[{audioPath:"_assets/_audio/bleh.wav",stationId:"message__wens",objectName:"user__wens",distance:35,times:1},{audioPath:"_assets/_audio/bleh.wav",stationId:"brush2",objectName:"user__media",distance:30,times:1},{audioPath:"_assets/_audio/bleh.wav",stationId:"soap",objectName:"lottie_front",distance:20,times:1},{audioPath:"_assets/_audio/water__car--inside.wav",triggerZ:-60,times:1,volume:.6},{audioPath:"_assets/_audio/soap.mp3",triggerZ:-140,times:1},{audioPath:"_assets/_audio/blower.mp3",triggerZ:-180,times:1,volume:.8}],qi=[{id:"road",path:"_assets/_objects/station__road.glb",applyPoort:!1,applyBoog:!1,tunnel:!1,uvMapping:null},{id:"poort",path:"_assets/_objects/station__poort2.glb",applyPoort:!0,applyBoog:!1,tunnel:!1,lottie:{front:"https://lottie.host/8f8051ac-44b9-4183-8d84-e28f7ceeaee4/9czZ6PkTbV.lottie",back:null,customLayers:{"lot__stoplicht--L":{url:"https://lottie.host/6fd5eb4a-ed47-4987-b076-b205127bd7a3/HDmDYHUZg9.lottie",startZ:null,stopZ:null,times:1},"lot__stoplicht--R":{url:"https://lottie.host/6fd5eb4a-ed47-4987-b076-b205127bd7a3/HDmDYHUZg9.lottie",startZ:null,stopZ:null,times:1}}},uvMapping:null},{id:"message__wens",path:"_assets/_objects/station__message--wens.glb",applyPoort:!1,applyBoog:!1,tunnel:!0,lottie:{front:"https://lottie.host/52e18a61-ff57-4972-9ba3-5cfc37441cdf/h7HRhBzF5N.lottie",back:"https://lottie.host/9cee9b39-3067-49bf-a8b9-28f645904606/LlsVqOy0BS.lottie"},uvMapping:null},{id:"brush-up",path:"_assets/_objects/station__brush--up2.glb",applyPoort:!1,applyBoog:!0,tunnel:!0,lottie:{front:{url:"https://lottie.host/7d3b6cc5-3b69-44d7-a71d-aefa1c087d63/MfzHgZf4do.lottie",startZ:-80,stopZ:null,times:4},back:null},uvMapping:null},{id:"message__bericht",path:"_assets/_objects/station__message--bericht.glb",applyPoort:!1,applyBoog:!1,tunnel:!0,lottie:{front:"https://lottie.host/630ed545-d60e-4175-b7a7-dca0979ec653/bKKnlIZOLx.lottie"},uvMapping:null},{id:"soap",path:"_assets/_objects/station__soap2.glb",applyPoort:!1,applyBoog:!1,tunnel:!0,tunnel_size:"small",lottie:{front:"https://lottie.host/3fa25658-6b92-4585-9b53-3018a0c71e13/4YgekaHhpD.lottie",back:"https://lottie.host/2142dc17-71ec-4396-95bb-9141a5ae6397/kAYrrdS0jG.lottie"},uvMapping:null},{id:"brush2",path:"_assets/_objects/station__brush2.glb",applyPoort:!1,applyBoog:!0,tunnel:!0,tunnel_size:"small",lottie:{front:"https://lottie.host/8b11309b-96f0-496b-b280-3dd82c1d486b/rdjW2HG5i3.lottie",back:null},uvMapping:null},{id:"message__media",path:"_assets/_objects/station__message--media.glb",applyPoort:!1,applyBoog:!1,tunnel:!0,lottie:{front:"https://lottie.host/ad607ffd-9044-4eb2-82ab-5f9b4d81a2b1/MedTZcbLoN.lottie",back:null},uvMapping:null},{id:"blower",path:"_assets/_objects/station__blower2.glb",applyPoort:!1,applyBoog:!1,tunnel:!1,lottie:{front:{url:"https://lottie.host/38161663-abcc-4f62-920f-354fd2cfe6b5/GmKMM2xib7.lottie",startZ:-170},back:{url:"https://lottie.host/cef08040-f70c-4ff1-a35a-cfc88bb638f3/0YstTOn7Uz.lottie",startZ:-190}},uvMapping:null},{id:"curtain",path:"_assets/_objects/station__curtain2.glb",applyPoort:!1,applyBoog:!1,tunnel:!1,lottie:{front:null,back:null},uvMapping:null}];function Xl(s,e,t,n){const i=t[e]||t["Power Sop"],r=i.uvmapFront??i.poort;s.giveObjectMapping("poort",r,"x",{forceReplace:!0});const a=i.uvmapBrushup??i.boogBrushup??"_assets/_objects/_textures/_power/uvmap-boog--brush-up.png";s.giveObjectMapping("boog--base",i.boogSoap,"x",{stationId:"soap",forceReplace:!0}),s.giveObjectMapping("boog--base",a,"x",{stationId:"brush-up",forceReplace:!0}),s.giveObjectMapping("boog--base",i.boogDefault,"x",{forceReplace:!0});const o=i.tunnel.startsWith("_assets/")||i.tunnel.startsWith("/")?i.tunnel:`_assets/_objects/_textures/${i.tunnel}`;s.giveObjectMapping("gate__right",o,"xy",{stationId:"brush1",forceReplace:!0}),s.giveObjectMapping("gate__left",o,"xy",{stationId:"brush1",forceReplace:!0}),s.giveObjectMapping("gate__right",o,"xy",{stationId:"brush2",forceReplace:!0}),s.giveObjectMapping("gate__left",o,"xy",{stationId:"brush2",forceReplace:!0});const c=Qr.length>0?Qr[4].lottie:"https://lottie.host/f1d0e197-55d8-4b0c-8670-31287c95dd0e/pFkebShNjk.lottie",l=H_()||c;setTimeout(()=>{s.applyLottieTexture("user__wens",l,"x",{...fu}).catch(p=>{console.error("Failed to apply Lottie texture to user__wens:",p)})},200),s.giveObjectMapping("douche__gordijn","_assets/_objects/_textures/layer__bericht--clean.png","y",{forceReplace:!0}),setTimeout(()=>{s.giveObjectMapping("douche__gordijn",j_,"y",{forceReplace:!1})},200);const h=z_()||"_assets/_objects/_textures/layer__media--cleanm.png";s.giveObjectMapping("user__media",h,"x",{stationId:"message__media",depthWrite:!1,useBasicMaterial:!0,flipV:!0,gamma:O_}),setTimeout(()=>{s.applyLottieMask("user__media","https://lottie.host/9e55e811-ab44-4c7e-8048-73ab61c1e98a/kG0T3l6TMq.lottie",{stationId:"message__media",triggerDistance:25,times:1}).catch(p=>{console.error("Failed to apply Lottie mask to user__media:",p)})},500),s.giveObjectMapping("autowasbon__txt","_assets/_objects/_textures/layer__boodschap--v2.png","x",{stationId:"message4",depthWrite:!1,useBasicMaterial:!0,gamma:1,flipV:!0}),setTimeout(()=>{s.giveObjectMapping("poort",i.poortName,"x",{forceReplace:!1})},200),s.giveObjectMapping("boog--base","_assets/_objects/_textures/uvmap-boog--white.png","x",{stationId:"message4"}),s.giveObjectMapping("boog--base","_assets/_objects/_textures/uvmap-boog--white.png","x",{stationId:"blower"});const u=i.uvmapBoog??"_assets/_objects/_textures/uvmap-boog--blue.png";s.giveObjectMapping("boog--base",u,"x",{stationId:"message5",forceReplace:!0}),s.giveObjectMapping("boog--base","_assets/_objects/_textures/uvmap-boog--blue.png","x",{stationId:"curtain"});const d=i.uvmapSoap??"_assets/_objects/_textures/uvmap-boog--soap.png",f=i.uvmapBericht??"_assets/_objects/_textures/uvmap-boog--bericht.png",g=i.uvmapMedia??"_assets/_objects/_textures/uvmap-boog--media.png",_=i.uvmapWater??"_assets/_objects/_textures/uvmap-boog--water.png";s.giveObjectMapping("boog--base",f,"x",{stationId:"message__bericht",forceReplace:!0}),s.giveObjectMapping("boog--base",g,"x",{stationId:"message__media",forceReplace:!0}),s.giveObjectMapping("boog--base",_,"x",{stationId:"message__wens",forceReplace:!0}),s.giveObjectMapping("boog--base",d,"x",{stationId:"soap",forceReplace:!0}),s.giveObjectMapping("boog--base","_assets/_objects/_textures/uvmap-boog--white--drogen.png","x",{stationId:"blower"});const m=i.uvmapBrush2??i.uvmapBoog??"_assets/_objects/_textures/uvmap-boog--blue.png";s.giveObjectMapping("boog--base",m,"x",{stationId:"brush2",forceReplace:!0}),s.giveObjectMapping("curtain__front--01","_assets/_objects/_textures/uvmap__curtain-top.png","x",{stationId:"curtain"}),s.giveObjectMapping("curtain__flaps--01","_assets/_objects/_textures/layer__boodschap-f.png","x",{stationId:"curtain"}),s.giveObjectMapping("curtain__front--02","_assets/_objects/_textures/uvmap__curtain-top.png","x",{stationId:"curtain"}),s.giveObjectMapping("curtain__flaps--02","_assets/_objects/_textures/uvmap__flap-long--white.png","x",{stationId:"curtain"}),s.giveObjectMapping("curtain__front--03","_assets/_objects/_textures/uvmap__curtain-top.png","x",{stationId:"curtain"}),s.giveObjectMapping("curtain__flaps--03","_assets/_objects/_textures/uvmap__flap-long--blue.png","x",{stationId:"curtain"}),s.giveObjectMapping("boog--base--01","_assets/_objects/_textures/uvmap-boog--blue.png","x",{stationId:"curtain"}),s.giveObjectMapping("boog--base--02","_assets/_objects/_textures/uvmap-boog--white.png","x",{stationId:"curtain"}),s.giveObjectMapping("boog--base--03","_assets/_objects/_textures/uvmap-boog--blue.png","x",{stationId:"curtain"}),s.giveObjectMapping("spray__soap--L","_assets/_objects/_textures/uvmap__flap--white.png","z",{stationId:"soap"}),s.giveObjectMapping("spray__soap--R","_assets/_objects/_textures/uvmap__flap--white.png","z",{stationId:"soap"}),s.giveObjectMapping("spray__holder--L","_assets/_objects/_textures/uvmap__flap--blue.png","z",{stationId:"soap"}),s.giveObjectMapping("spray__holder--R","_assets/_objects/_textures/uvmap__flap--blue.png","z",{stationId:"soap"}),s.giveObjectMapping("Helix","_assets/_objects/_textures/uvmap__flap--blue.png","z",{stationId:"soap"}),s.giveObjectMapping("Helix_2","_assets/_objects/_textures/uvmap__flap--blue.png","z",{stationId:"soap"}),s.giveObjectMapping("blower__case--R03","_assets/_objects/_textures/uvmap__blower.png","x"),s.giveObjectMapping("blower__case--R02","_assets/_objects/_textures/uvmap__blower.png","x"),s.giveObjectMapping("blower__case--R01","_assets/_objects/_textures/uvmap__blower.png","x"),s.giveObjectMapping("blower__case--L01","_assets/_objects/_textures/uvmap__blower.png","x"),s.giveObjectMapping("blower__case--L02","_assets/_objects/_textures/uvmap__blower.png","x"),s.giveObjectMapping("blower__case--L03","_assets/_objects/_textures/uvmap__blower.png","x"),s.giveObjectMapping("brush__part--L01","_assets/_objects/_textures/uvmap__flap--blue.png","y",{stationId:"brush1"}),s.giveObjectMapping("brush__part--L02","_assets/_objects/_textures/uvmap__flap--white.png","y",{stationId:"brush1"}),s.giveObjectMapping("brush__part--L03","_assets/_objects/_textures/uvmap__flap--blue.png","y",{stationId:"brush1"}),s.giveObjectMapping("brush__part--L04","_assets/_objects/_textures/uvmap__flap--white.png","y",{stationId:"brush1"}),s.giveObjectMapping("brush__part--R01","_assets/_objects/_textures/uvmap__flap--blue.png","y",{stationId:"brush1"}),s.giveObjectMapping("brush__part--R02","_assets/_objects/_textures/uvmap__flap--white.png","y",{stationId:"brush1"}),s.giveObjectMapping("brush__part--R03","_assets/_objects/_textures/uvmap__flap--blue.png","y",{stationId:"brush1"}),s.giveObjectMapping("brush__part--R04","_assets/_objects/_textures/uvmap__flap--white.png","y",{stationId:"brush1"}),s.giveObjectMapping("holder__brush--stick-L","_assets/_objects/_textures/uvmap__flap--blue.png","y",{stationId:"brush1"}),s.giveObjectMapping("holder__brush--top-L","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush1"}),s.giveObjectMapping("holder__brush--connect-L","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush1"}),s.giveObjectMapping("holder__brush--boog-L","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush1"}),s.giveObjectMapping("holder__brush--ring-L","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush1"}),s.giveObjectMapping("holder__brush--stick-R","_assets/_objects/_textures/uvmap__flap--blue.png","y",{stationId:"brush1"}),s.giveObjectMapping("holder__brush--top-R","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush1"}),s.giveObjectMapping("holder__brush--connect-R","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush1"}),s.giveObjectMapping("holder__brush--boog-R","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush1"}),s.giveObjectMapping("holder__brush--ring-R","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush1"}),s.giveObjectMapping("brush__part--L01","_assets/_objects/_textures/uvmap__flap--blue.png","y",{stationId:"brush2"}),s.giveObjectMapping("brush__part--L02","_assets/_objects/_textures/uvmap__flap--white.png","y",{stationId:"brush2"}),s.giveObjectMapping("brush__part--L03","_assets/_objects/_textures/uvmap__flap--blue.png","y",{stationId:"brush2"}),s.giveObjectMapping("brush__part--L04","_assets/_objects/_textures/uvmap__flap--white.png","y",{stationId:"brush2"}),s.giveObjectMapping("brush__part--R01","_assets/_objects/_textures/uvmap__flap--blue.png","y",{stationId:"brush2"}),s.giveObjectMapping("brush__part--R02","_assets/_objects/_textures/uvmap__flap--white.png","y",{stationId:"brush2"}),s.giveObjectMapping("brush__part--R03","_assets/_objects/_textures/uvmap__flap--blue.png","y",{stationId:"brush2"}),s.giveObjectMapping("brush__part--R04","_assets/_objects/_textures/uvmap__flap--white.png","y",{stationId:"brush2"}),s.giveObjectMapping("holder__brush--stick-L","_assets/_objects/_textures/uvmap__flap--blue.png","y",{stationId:"brush2"}),s.giveObjectMapping("holder__brush--top-L","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush2"}),s.giveObjectMapping("holder__brush--connect-L","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush2"}),s.giveObjectMapping("holder__brush--boog-L","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush2"}),s.giveObjectMapping("holder__brush--ring-L","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush2"}),s.giveObjectMapping("holder__brush--stick-R","_assets/_objects/_textures/uvmap__flap--blue.png","y",{stationId:"brush2"}),s.giveObjectMapping("holder__brush--top-R","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush2"}),s.giveObjectMapping("holder__brush--connect-R","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush2"}),s.giveObjectMapping("holder__brush--boog-R","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush2"}),s.giveObjectMapping("holder__brush--ring-R","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush2"}),s.giveObjectMapping("holder__brush--base-T","_assets/_objects/_textures/uvmap__flap--blue.png","x",{stationId:"brush-up"}),s.giveObjectMapping("holder__brush--pin-R","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush-up"}),s.giveObjectMapping("holder__brush--pin-L","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush-up"}),s.giveObjectMapping("holder__brush--pan-R","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush-up"}),s.giveObjectMapping("holder__brush--pan-L","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush-up"}),s.giveObjectMapping("holder__brush--holder-R","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush-up"}),s.giveObjectMapping("holder__brush--holder-L","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush-up"}),s.giveObjectMapping("holder__brush--ring-TR","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush-up"}),s.giveObjectMapping("holder__brush--ring-TL","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush-up"}),s.giveObjectMapping("brush__part--T01","_assets/_objects/_textures/uvmap__flap--blue.png","y",{stationId:"brush-up"}),s.giveObjectMapping("brush__part--T02","_assets/_objects/_textures/uvmap__flap--white.png","y",{stationId:"brush-up"}),s.giveObjectMapping("brush__part--T03","_assets/_objects/_textures/uvmap__flap--blue.png","y",{stationId:"brush-up"}),s.giveObjectMapping("brush__part--T04","_assets/_objects/_textures/uvmap__flap--white.png","y",{stationId:"brush-up"}),s.giveObjectMapping("holder__brush--base-T--UP","_assets/_objects/_textures/uvmap__flap--blue.png","x",{stationId:"brush-up"}),s.giveObjectMapping("holder__brush--pin-R--UP","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush-up"}),s.giveObjectMapping("holder__brush--pin-L--UP","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush-up"}),s.giveObjectMapping("holder__brush--pan-R--UP","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush-up"}),s.giveObjectMapping("holder__brush--pan-L--UP","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush-up"}),s.giveObjectMapping("holder__brush--holder-R--UP","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush-up"}),s.giveObjectMapping("holder__brush--holder-L--UP","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush-up"}),s.giveObjectMapping("holder__brush--ring-TR--UP","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush-up"}),s.giveObjectMapping("holder__brush--ring-TL--UP","_assets/_objects/_textures/uvmap__brush-con.png","y",{stationId:"brush-up"}),s.giveObjectMapping("brush__part--T01--UP","_assets/_objects/_textures/uvmap__flap--blue.png","y",{stationId:"brush-up"}),s.giveObjectMapping("brush__part--T02--UP","_assets/_objects/_textures/uvmap__flap--white.png","y",{stationId:"brush-up"}),s.giveObjectMapping("brush__part--T03--UP","_assets/_objects/_textures/uvmap__flap--blue.png","y",{stationId:"brush-up"}),s.giveObjectMapping("brush__part--T04--UP","_assets/_objects/_textures/uvmap__flap--white.png","y",{stationId:"brush-up"}),s.giveObjectMapping("road","_assets/_objects/_textures/uvmap__road.png","y"),s.giveObjectMapping("road__rail--left","_assets/_objects/_textures/uvmap__rail.png","y"),s.giveObjectMapping("road__rail--right","_assets/_objects/_textures/uvmap__rail.png","y"),s.giveObjectMapping("road__rail--middle","_assets/_objects/_textures/uvmap__rail.png","y"),s.giveObjectMapping("road__top--left","_assets/_objects/_textures/uvmap__rail.png","y"),s.giveObjectMapping("road__top--right","_assets/_objects/_textures/uvmap__rail.png","y"),s.giveObjectMapping("arrow__lane","_assets/_objects/_textures/uvmap__arrow.png","y"),s.giveObjectMapping("wasboog","_assets/_objects/_textures/uvmap__brush-con.png","x"),s.giveObjectMapping("wasboog__back","_assets/_objects/_textures/uvmap__brush-con.png","x"),n.forEach((p,S)=>{if(p.uvMapping){const v=p.uvMapping;(Array.isArray(v)?v:[v]).forEach(E=>{E&&E.objectName&&E.imagePath&&s.giveObjectMapping(E.objectName,E.imagePath,E.projectionAxis||"x",E.options||{})})}})}let bt=null,Ln=null,Zc=null,Mo=null,Wt=null,nn=null,Rt=null,Yc=null,Ai=null,An=null,Zl=[],Yl=[],ql=[],$l=[],To=[],Kl=[],Jl=[],Ql=[],eu=[],tu=[],nu=[],iu=[];function Lx(s,e){if(s.length===0)return;let t=-1/0;s.forEach(i=>{i.updateMatrixWorld(!0);const r=new Zt().setFromObject(i);r.max.z>t&&(t=r.max.z)});const n=e-t;s.forEach(i=>{i.position.z+=n,i.updateMatrixWorld(!0)})}function Px(s,e){let t=e;return s.forEach(n=>{n.updateMatrixWorld(!0);const r=new Zt().setFromObject(n).min.z;r<t&&(t=r)}),t}async function Ix(s,e,t,n,i,r){if(!(!n.tunnel||n.tunnel===!1))try{const a=n.tunnel_size==="small"?"_assets/_objects/overlay__tunnel--small.glb":"_assets/_objects/overlay__tunnel.glb",c=(await new Promise((h,u)=>{s.load(a,d=>h(d),void 0,d=>u(d))})).scene;if(e&&e.scaleModel){const h=e.scaleModel(c)}c.traverse(h=>{const u=(h.name||"").toLowerCase();(u.includes("_basefloor")||u==="_basefloor"||u.includes("basefloor"))&&(h.visible=!1)});const l=typeof n.tunnel=="string"?n.tunnel:null;if(l){const h=new Bo,u=l.startsWith("_assets/")||l.startsWith("/")?l:`_assets/_objects/_textures/${l}`,d=await new Promise((f,g)=>{h.load(u,_=>{_.flipY=!1,_.wrapS=On,_.wrapT=On,f(_)},void 0,_=>g(_))});c.traverse(f=>{if(f.isMesh){const g=new Dt({uniforms:{map:{value:d}},vertexShader:`
              varying vec2 vUv;
              void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `,fragmentShader:`
              uniform sampler2D map;
              varying vec2 vUv;
              void main() {
                // Sample texture and output pure color without any lighting or tone mapping
                vec4 texColor = texture2D(map, vUv);
                gl_FragColor = vec4(texColor.rgb, texColor.a);
              }
            `,side:Ht,fog:!1,transparent:!0});f.material=g,f.castShadow=!1,f.receiveShadow=!1}})}else{const h="#ffffff",u=new Te(h);c.traverse(d=>{if(d.isMesh){const f=new Dt({uniforms:{color:{value:u}},vertexShader:`
              varying vec3 vPosition;
              varying vec3 vNormal;
              void main() {
                vPosition = position;
                vNormal = normal;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `,fragmentShader:`
              uniform vec3 color;
              varying vec3 vPosition;
              varying vec3 vNormal;
              void main() {
                gl_FragColor = vec4(color, 1.0);
              }
            `,side:Ht,fog:!1,transparent:!1});d.material=f,d.castShadow=!1,d.receiveShadow=!1}})}c.position.set(0,0,i),t.getScene().add(c),r.push(c)}catch(a){console.error("Failed to load tunnel overlay:",a)}}const $r={loadedStations:[],pendingStations:[],isMobile:!1,loadingInProgress:!1};async function Dx(s,e,t,n,i){const{model:r,allModels:a,brushBaseObjects:o,borstelStandObjects:c,borstelLiggendObjects:l,borstelLiggendUpObjects:h,curtainFlapObjects:u,curtainFlapGroups:d,doucheGordijnObjects:f,userWensObjects:g,userMediaObjects:_,gateObjects:m,spraySoapObjects:p}=await Mo.load(bt.getScene(),t,e.path,{applyPoort:e.applyPoort,applyBoog:e.applyBoog,stationId:e.id});if(e.id&&a&&a.forEach(v=>{v.traverse(b=>{b.userData.stationId=e.id})}),o&&o.length>0&&Zl.push(...o),c&&c.length>0){const v=t;c.forEach(b=>{b.brushStationZ=v}),Yl.push(...c)}if(l&&l.length>0){const v=t;l.forEach(b=>{b.brushStationZ=v}),ql.push(...l)}if(h&&h.length>0){const v=t;h.forEach(b=>{b.brushStationZ=v}),$l.push(...h)}if(u&&u.length>0){const v=t;u.forEach(b=>{b.curtainStationZ=v}),Kl.push(...u)}if(d&&d.length>0){const v=t;d.forEach(b=>{b.curtainStationZ=v}),Jl.push(...d)}if(f&&f.length>0){const v=t;f.forEach(b=>{b.messageStationZ=v}),Ql.push(...f)}if(g&&g.length>0&&eu.push(...g),_&&_.length>0&&tu.push(..._),m&&m.length>0&&nu.push(...m),p&&p.length>0&&iu.push(...p),e.path.includes("station__blower")&&a.forEach(v=>{v.traverse(b=>{var x;const E=(b.name||"").toLowerCase(),y=(((x=b.parent)==null?void 0:x.name)||"").toLowerCase(),w=E.startsWith("blower__"),R=y.startsWith("blower__");w&&!b.isMesh?b.traverse(M=>{const D=(M.name||"").toLowerCase();(D.includes("front__middle")||D==="front__middle")&&To.push(M)}):R&&(E.includes("front__middle")||E==="front__middle")&&To.push(b)})}),e.path.includes("station__brush2.glb")){const v=nn.findLayerObjects([r],"tunnel");v.length>0&&(e.id==="brush1"?v.forEach(b=>{b.isMesh?b.visible=!0:(b.visible=!0,b.traverse(E=>{E.isMesh&&(E.visible=!0)}))}):e.id==="brush2"&&nn.hideLayerObjects(v,"tunnel"))}if(await Ix(i,Mo,bt,e,t,a),e.id==="brush1"&&e.start_tunnel){const v=e.start_tunnel.startsWith("_assets/")||e.start_tunnel.startsWith("/")?e.start_tunnel:`_assets/_objects/_textures/${e.start_tunnel}`;Wt.giveObjectMapping("tunnel",v,"xy",{stationId:"brush1"}),m&&m.length>0&&m.forEach(b=>{b.type==="right"?Wt.giveObjectMapping("gate__right",v,"xy",{stationId:"brush1"}):b.type==="left"&&Wt.giveObjectMapping("gate__left",v,"xy",{stationId:"brush1"})})}e.path.includes("station__poort")&&a.forEach(v=>{Wt.applyPoortTextureToModel(v)}),Lx(a,t);const S=Px(a,t);return e.lottie&&await nn.applyLottieToLayers(a,e.lottie),{endZ:S,allModels:a}}async function Ux(){var i,r,a;window.__voucherPreload&&await window.__voucherPreload;const s=new Vl;let e=0;$r.isMobile=An?An.getIsMobile():!1;const t=Mi[vo]||Mi["Power Sop"],n=qi.length;for(let o=0;o<qi.length;o++){const c={...qi[o]},l=e;if(t.tunnel&&c.tunnel&&(c.tunnel=t.tunnel),t.tunnel&&c.start_tunnel&&(c.start_tunnel=t.tunnel),c.id&&t.lotties&&t.lotties[c.id]){const h=t.lotties[c.id],u=(d,f)=>{if(d!==void 0){if(d===null)return null;if(typeof d=="string")return f&&typeof f=="object"&&f.url?{url:d,startZ:f.startZ,stopZ:f.stopZ}:d}return f};c.lottie={front:u(h.front,(i=c.lottie)==null?void 0:i.front),back:u(h.back,(r=c.lottie)==null?void 0:r.back),...((a=c.lottie)==null?void 0:a.customLayers)&&{customLayers:c.lottie.customLayers}}}if(o<n)try{const{endZ:h,allModels:u}=await Dx(o,c,l,t,s);e=h,$r.loadedStations.push({index:o,startZ:l,endZ:h,allModels:u});const d=$r.loadedStations.length,f=Math.round(d/n*100);window.dispatchEvent(new CustomEvent("carwash-load-progress",{detail:{loaded:d,total:n,percent:f}}))}catch(h){console.error(`Failed to load station ${o+1}:`,h)}}if(Wt.applyPoortTextureToScene(),Wt.invalidateObjectCache(),Xl(Wt,vo,Mi,qi),setTimeout(()=>{nn&&nn.refreshAllLottieTextures()},1e3),Rt.setBrushBaseObjects(Zl),Rt.setBorstelStandObjects(Yl),Rt.setBorstelLiggendObjects(ql),Rt.setBorstelLiggendUpObjects($l),Rt.setBlowerFrontMiddleObjects(To),Rt.setCurtainFlapObjects(Kl),Rt.setCurtainFlapGroups(Jl),Rt.setDoucheGordijnObjects(Ql),Rt.setUserWensObjects(eu),Rt.setUserMediaObjects(tu),Rt.setGateObjects(nu),Rt.setSpraySoapObjects(iu),nn){const o=nn.getLottieFrontMediaMeshes();Rt.setLottieFrontMediaObjects(o)}Rt.animate(),Ai&&typeof Ai.whenPreloadComplete=="function"&&await Ai.whenPreloadComplete(),window.dispatchEvent(new CustomEvent("carwash-ready"))}function Nx(){const s=document.getElementById("scene");if(bt=new T_(s),An=bt.getMobileOptimizer(),An&&An.getIsMobile()){const t=document.getElementById("mobileStatus");if(t){t.style.display="block";const n=An.getOptimizations();t.textContent=`Mobile: ${n.pixelRatio}x (shadows disabled)`,An.getIsLowEnd()&&(t.textContent+=" (Low-end)")}}Zc=new E_,Zc.loadSinkFont().catch(t=>console.error("Font loading error:",t)),Ln=new A_(bt.getCamera(),bt,kl),Ox(),Wt=new Tx(bt),Wt.loadPoortTexture(),window.carwashTextureManager=Wt,window.applyCarwashTheme=t=>{try{return Xl(Wt,t,Mi,qi),!0}catch(n){return console.warn("[Carwash] applyCarwashTheme failed:",n),!1}},window.giveObjectMapping=(t,n,i,r)=>{Wt.giveObjectMapping(t,n,i,r)},nn=new Ex(bt,An),window.lottieManager=nn,Rt=new Ax(bt,Ln,nn),Yc=new D_(bt),window.lottieZIndexTrigger=Yc,Ai=new wx(bt,Rx,Cx),Ai.start(),window.soundEffectsController=Ai,window.cameraController=Ln;const e=new Vl;Mo=new I_(e),Ux()}Nx();function su(){if(Ln&&bt){const s=bt.getCamera().position.z,e=document.getElementById("currentZ");e&&(e.textContent=s.toFixed(2));const t=document.querySelector(".window_frame");t&&s>=-110&&s<=-75&&t.classList.add("window_frame--animate");const n=document.getElementById("window_frame_soap");n&&s>=-142&&s<=-134&&n.classList.add("window_frame--soap--animate")}requestAnimationFrame(su)}su();const Bs=document.getElementById("ratioToggleBtn"),Kr=document.getElementById("card");let Jr=!1;Bs&&Kr&&Bs.addEventListener("click",()=>{Jr=!Jr,Jr?(Kr.classList.add("mobile-ratio"),Bs.textContent="Switch to Full Screen"):(Kr.classList.remove("mobile-ratio"),Bs.textContent="Switch to 9:16"),requestAnimationFrame(()=>{bt&&bt.resize&&bt.resize()})});function Ox(){const s=document.getElementById("scrollModeBtn");if(!s)return;const e=()=>{Ln&&Ln.getCheckpointMode()?(s.textContent="Checkpoint Mode",s.classList.remove("free-mode"),s.classList.add("checkpoint-mode")):(s.textContent="Free Scroll Mode",s.classList.remove("checkpoint-mode"),s.classList.add("free-mode"))};e(),s.addEventListener("click",()=>{Ln&&(Ln.toggleCheckpointMode(),e())})}const Fx="modulepreload",Bx=function(s){return"/"+s},qc={},kx=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let a=function(l){return Promise.all(l.map(h=>Promise.resolve(h).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=a(t.map(l=>{if(l=Bx(l),l in qc)return;qc[l]=!0;const h=l.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":Fx,h||(d.as="script"),d.crossOrigin="",d.href=l,c&&d.setAttribute("nonce",c),document.head.appendChild(d),h)return new Promise((f,g)=>{d.addEventListener("load",f),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})};window.initCheckpointController=function(){if(!window.cameraController||!window.cameraController.camera){setTimeout(window.initCheckpointController,100);return}window.checkpointController=new P_(window.cameraController),window.checkpointController.syncWithCameraPosition(),console.log("Checkpoint controller initialized"),setTimeout(()=>{window.setupDashTextButton&&window.setupDashTextButton()},300),zx()};async function zx(){try{const{TimelineEditor:s}=await kx(async()=>{const{TimelineEditor:t}=await import("./timeline-editor-ALrsXsXF.js");return{TimelineEditor:t}},__vite__mapDeps([0,1,2])),e=setInterval(()=>{if(window.checkpointController&&window.cameraController){clearInterval(e),window.timelineEditor=new s(window.checkpointController,window.cameraController);const t=document.createElement("button");t.className="timeline-editor-toggle",t.innerHTML="⏱️",t.title="Open Timeline Editor",t.addEventListener("click",()=>{window.timelineEditor.toggle()}),document.body.appendChild(t),console.log("Timeline editor initialized")}},100);setTimeout(()=>clearInterval(e),1e4)}catch(s){console.warn("Timeline editor not available:",s)}}if(window.cameraController&&window.cameraController.camera)window.initCheckpointController();else{const s=setInterval(()=>{window.cameraController&&window.cameraController.camera&&(clearInterval(s),window.initCheckpointController())},100);setTimeout(()=>clearInterval(s),1e4)}window.lottie=Vs;window.JSZip=Eo;(async function(){const e=document.getElementById("loadingScreen"),t=document.getElementById("loadingLottieContainer"),n=document.getElementById("loadingPercentage"),i=document.getElementById("loadingMessage");if(!e||!t||!n||!i){console.warn("Loading screen elements not found");return}const r=["Zeep wordt gevuld...","Blazers worden opgewarmd...","Bijna gereed!"];let a=0,o=0,c=null;function l(){a>=r.length||(i.classList.add("fade-out"),setTimeout(()=>{i.textContent=r[a],i.classList.remove("fade-out"),a++},300))}function h(f){o=Math.min(100,Math.max(0,f)),n.textContent=Math.round(o)+"%"}async function u(){const f="https://lottie.host/0372f5ba-cb3a-41a1-a3ec-557db5e1f31f/DgtjfThQqT.lottie";try{let g=50;for(;(typeof lottie>"u"||typeof JSZip>"u")&&g>0;)await new Promise(v=>setTimeout(v,100)),g--;if(typeof lottie>"u"||typeof JSZip>"u")throw new Error("Lottie or JSZip libraries not loaded");const _=await fetch(f);if(!_.ok)throw new Error(`Failed to fetch Lottie file: ${_.statusText}`);const m=await _.arrayBuffer(),p=await JSZip.loadAsync(m);let S=null;if(p.files["manifest.json"]){const v=await p.files["manifest.json"].async("string"),b=JSON.parse(v);if(b.animations&&b.animations.length>0){const y=`animations/${b.animations[0].id||"animation"}.json`;if(p.files[y]){const w=await p.files[y].async("string");S=JSON.parse(w)}else for(const w in p.files)if(w.includes("animations/")&&w.endsWith(".json")){const R=await p.files[w].async("string");S=JSON.parse(R);break}}}if(!S){for(const v in p.files)if(v.endsWith(".json")&&v!=="manifest.json"){const b=await p.files[v].async("string"),E=JSON.parse(b);if(E.v&&E.fr){S=E;break}}}if(!S)throw new Error("Could not find animation JSON in .lottie file");c=lottie.loadAnimation({container:t,renderer:"svg",loop:!0,autoplay:!0,animationData:S}),h(20)}catch(g){console.error("Error loading Lottie animation:",g),h(20)}}async function d(){u();const f=setInterval(()=>{l()},900),g=b=>{b.detail&&typeof b.detail.percent=="number"&&h(b.detail.percent)};window.addEventListener("carwash-load-progress",g);const _=3e4;let m=!1;const p="https://lottie.host/7caf7754-e1a5-4d00-8183-d4172845e5ee/j4zroIzHG2.lottie",S=()=>{clearInterval(f),window.removeEventListener("carwash-load-progress",g),h(100),e.classList.add("hidden"),setTimeout(()=>{e.parentNode&&e.parentNode.removeChild(e),c&&c.destroy()},500)},v=async()=>{if(m)return;m=!0;const b=document.getElementById("lottieOverlay");b&&(b.style.zIndex="10001",b.style.display="");const E=await loadAndPlayOverlayLottie(p,0);if(!E){S(),b&&(b.style.zIndex="");return}const y=b?b.querySelector('.lottie-container[data-lottie-index="0"]'):null;let w=!1;const R=()=>{const M=E.totalFrames||1,D=E.currentFrame!=null?E.currentFrame:0;(M>0?D/M:0)>=.5&&!w&&(w=!0,E.removeEventListener("enterFrame",R),S())},x=()=>{E.removeEventListener("complete",x),E.removeEventListener("enterFrame",R),w||S(),E.destroy&&E.destroy(),y&&(y.classList.remove("active"),y.innerHTML=""),b&&(b.style.zIndex="")};E.addEventListener("enterFrame",R),E.addEventListener("complete",x)};window.addEventListener("carwash-ready",v,{once:!0}),setTimeout(()=>{m||v()},_)}d()})();export{et as a,kl as c,fo as g};
