(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();class Xp{constructor(){this.title=document.getElementById("task-title"),this.hint=document.getElementById("task-hint"),this.reticle=document.getElementById("aiming-reticle"),this.progress=document.getElementById("progress-circle"),this.debug=document.getElementById("debug-overlay"),this.progressLength=283}updateTask(t,e){this.title.textContent=t,this.hint.textContent=e}setReticleActive(t,e){e?(this.reticle.style.borderColor="#4f8",this.reticle.style.borderStyle="solid",this.reticle.style.boxShadow="0 0 15px #4f8"):t?(this.reticle.style.borderColor="#fd4",this.reticle.style.borderStyle="solid"):(this.reticle.style.borderColor="rgba(255,255,255,0.3)",this.reticle.style.borderStyle="dashed",this.reticle.style.boxShadow="none")}updateProgress(t){const e=this.progressLength*(1-t);this.progress.style.strokeDashoffset=e}updateDebug(t){if(!t){this.debug.style.display="none";return}this.debug.style.display="block",this.debug.innerHTML=Object.entries(t).map(([e,n])=>`${e}: ${n}`).join("<br>")}}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qc="160",qp=0,Mu=1,jp=2,xd=1,Yp=2,Si=3,Zi=0,yn=1,Ti=2,wi=0,ir=1,Xr=2,Tu=3,Eu=4,Zp=5,cs=100,$p=101,Kp=102,wu=103,bu=104,Jp=200,Qp=201,tm=202,em=203,Nc=204,Dc=205,nm=206,im=207,sm=208,rm=209,om=210,am=211,cm=212,lm=213,um=214,hm=0,dm=1,fm=2,Qo=3,pm=4,mm=5,gm=6,_m=7,yd=0,vm=1,xm=2,qi=0,ym=1,Sm=2,Mm=3,Tm=4,Em=5,wm=6,Sd=300,cr=301,lr=302,Lc=303,Ic=304,xa=306,Oc=1e3,Kn=1001,Uc=1002,gn=1003,Au=1004,Za=1005,kn=1006,bm=1007,qr=1008,ji=1009,Am=1010,Cm=1011,tl=1012,Md=1013,Wi=1014,Xi=1015,bi=1016,Td=1017,Ed=1018,ds=1020,Rm=1021,Jn=1023,Pm=1024,Nm=1025,fs=1026,ur=1027,Dm=1028,wd=1029,Lm=1030,bd=1031,Ad=1033,$a=33776,Ka=33777,Ja=33778,Qa=33779,Cu=35840,Ru=35841,Pu=35842,Nu=35843,Cd=36196,Du=37492,Lu=37496,Iu=37808,Ou=37809,Uu=37810,Fu=37811,ku=37812,Bu=37813,Vu=37814,zu=37815,Gu=37816,Hu=37817,Wu=37818,Xu=37819,qu=37820,ju=37821,tc=36492,Yu=36494,Zu=36495,Im=36283,$u=36284,Ku=36285,Ju=36286,Rd=3e3,ps=3001,Om=3200,Um=3201,Pd=0,Fm=1,Vn="",on="srgb",Ci="srgb-linear",el="display-p3",ya="display-p3-linear",ta="linear",Ae="srgb",ea="rec709",na="p3",Is=7680,Qu=519,km=512,Bm=513,Vm=514,Nd=515,zm=516,Gm=517,Hm=518,Wm=519,th=35044,eh="300 es",Fc=1035,Ei=2e3,ia=2001;class xr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ec=Math.PI/180,kc=180/Math.PI;function $r(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[t&255]+ln[t>>8&255]+"-"+ln[t>>16&15|64]+ln[t>>24&255]+"-"+ln[e&63|128]+ln[e>>8&255]+"-"+ln[e>>16&255]+ln[e>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function hn(i,t,e){return Math.max(t,Math.min(e,i))}function Xm(i,t){return(i%t+t)%t}function nc(i,t,e){return(1-e)*i+e*t}function nh(i){return(i&i-1)===0&&i!==0}function Bc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ir(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Tn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Nt{constructor(t=0,e=0){Nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(hn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class oe{constructor(t,e,n,s,r,a,o,c,l){oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],m=n[5],v=n[8],x=s[0],g=s[3],p=s[6],b=s[1],M=s[4],w=s[7],A=s[2],R=s[5],C=s[8];return r[0]=a*x+o*b+c*A,r[3]=a*g+o*M+c*R,r[6]=a*p+o*w+c*C,r[1]=l*x+h*b+d*A,r[4]=l*g+h*M+d*R,r[7]=l*p+h*w+d*C,r[2]=f*x+m*b+v*A,r[5]=f*g+m*M+v*R,r[8]=f*p+m*w+v*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,f=o*c-h*r,m=l*r-a*c,v=e*d+n*f+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return t[0]=d*x,t[1]=(s*l-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=f*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=m*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ic.makeScale(t,e)),this}rotate(t){return this.premultiply(ic.makeRotation(-t)),this}translate(t,e){return this.premultiply(ic.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ic=new oe;function Dd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function sa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qm(){const i=sa("canvas");return i.style.display="block",i}const ih={};function zr(i){i in ih||(ih[i]=!0,console.warn(i))}const sh=new oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),rh=new oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),yo={[Ci]:{transfer:ta,primaries:ea,toReference:i=>i,fromReference:i=>i},[on]:{transfer:Ae,primaries:ea,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ya]:{transfer:ta,primaries:na,toReference:i=>i.applyMatrix3(rh),fromReference:i=>i.applyMatrix3(sh)},[el]:{transfer:Ae,primaries:na,toReference:i=>i.convertSRGBToLinear().applyMatrix3(rh),fromReference:i=>i.applyMatrix3(sh).convertLinearToSRGB()}},jm=new Set([Ci,ya]),ve={enabled:!0,_workingColorSpace:Ci,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!jm.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=yo[t].toReference,s=yo[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return yo[i].primaries},getTransfer:function(i){return i===Vn?ta:yo[i].transfer}};function sr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function sc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Os;class Ld{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Os===void 0&&(Os=sa("canvas")),Os.width=t.width,Os.height=t.height;const n=Os.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Os}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=sa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=sr(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(sr(e[n]/255)*255):e[n]=sr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ym=0,Id=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=$r(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(rc(s[a].image)):r.push(rc(s[a]))}else r=rc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function rc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ld.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zm=0;class wn extends xr{constructor(t=wn.DEFAULT_IMAGE,e=wn.DEFAULT_MAPPING,n=Kn,s=Kn,r=kn,a=qr,o=Jn,c=ji,l=wn.DEFAULT_ANISOTROPY,h=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=$r(),this.name="",this.source=new Id(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ps?on:Vn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Oc:t.x=t.x-Math.floor(t.x);break;case Kn:t.x=t.x<0?0:1;break;case Uc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Oc:t.y=t.y-Math.floor(t.y);break;case Kn:t.y=t.y<0?0:1;break;case Uc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===on?ps:Rd}set encoding(t){zr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ps?on:Vn}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=Sd;wn.DEFAULT_ANISOTROPY=1;class tn{constructor(t=0,e=0,n=0,s=1){tn.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],d=c[8],f=c[1],m=c[5],v=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(v+g)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,w=(m+1)/2,A=(p+1)/2,R=(h+f)/4,C=(d+x)/4,D=(v+g)/4;return M>w&&M>A?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=R/n,r=C/n):w>A?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=R/s,r=D/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=C/r,s=D/r),this.set(n,s,r,e),this}let b=Math.sqrt((g-v)*(g-v)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(g-v)/b,this.y=(d-x)/b,this.z=(f-h)/b,this.w=Math.acos((l+m+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $m extends xr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new tn(0,0,t,e),this.scissorTest=!1,this.viewport=new tn(0,0,t,e);const s={width:t,height:e,depth:1};n.encoding!==void 0&&(zr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ps?on:Vn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new wn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Id(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends $m{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Od extends wn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Km extends wn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kr{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3];const f=r[a+0],m=r[a+1],v=r[a+2],x=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=v,t[e+3]=x;return}if(d!==x||c!==f||l!==m||h!==v){let g=1-o;const p=c*f+l*m+h*v+d*x,b=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const A=Math.sqrt(M),R=Math.atan2(A,p*b);g=Math.sin(g*R)/A,o=Math.sin(o*R)/A}const w=o*b;if(c=c*g+f*w,l=l*g+m*w,h=h*g+v*w,d=d*g+x*w,g===1-o){const A=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=A,l*=A,h*=A,d*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[a],f=r[a+1],m=r[a+2],v=r[a+3];return t[e]=o*v+h*d+c*m-l*f,t[e+1]=c*v+h*f+l*d-o*m,t[e+2]=l*v+h*m+o*f-c*d,t[e+3]=h*v-o*d-c*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),d=o(r/2),f=c(n/2),m=c(s/2),v=c(r/2);switch(a){case"XYZ":this._x=f*h*d+l*m*v,this._y=l*m*d-f*h*v,this._z=l*h*v+f*m*d,this._w=l*h*d-f*m*v;break;case"YXZ":this._x=f*h*d+l*m*v,this._y=l*m*d-f*h*v,this._z=l*h*v-f*m*d,this._w=l*h*d+f*m*v;break;case"ZXY":this._x=f*h*d-l*m*v,this._y=l*m*d+f*h*v,this._z=l*h*v+f*m*d,this._w=l*h*d-f*m*v;break;case"ZYX":this._x=f*h*d-l*m*v,this._y=l*m*d+f*h*v,this._z=l*h*v-f*m*d,this._w=l*h*d+f*m*v;break;case"YZX":this._x=f*h*d+l*m*v,this._y=l*m*d+f*h*v,this._z=l*h*v-f*m*d,this._w=l*h*d-f*m*v;break;case"XZY":this._x=f*h*d-l*m*v,this._y=l*m*d-f*h*v,this._z=l*h*v+f*m*d,this._w=l*h*d+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],f=n+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(hn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(t=0,e=0,n=0){q.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(oh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(oh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return oc.copy(this).projectOnVector(t),this.sub(oc)}reflect(t){return this.sub(oc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(hn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oc=new q,oh=new Kr;class ys{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Xn):Xn.fromBufferAttribute(r,a),Xn.applyMatrix4(t.matrixWorld),this.expandByPoint(Xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),So.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),So.copy(n.boundingBox)),So.applyMatrix4(t.matrixWorld),this.union(So)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Xn),Xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Or),Mo.subVectors(this.max,Or),Us.subVectors(t.a,Or),Fs.subVectors(t.b,Or),ks.subVectors(t.c,Or),Fi.subVectors(Fs,Us),ki.subVectors(ks,Fs),ns.subVectors(Us,ks);let e=[0,-Fi.z,Fi.y,0,-ki.z,ki.y,0,-ns.z,ns.y,Fi.z,0,-Fi.x,ki.z,0,-ki.x,ns.z,0,-ns.x,-Fi.y,Fi.x,0,-ki.y,ki.x,0,-ns.y,ns.x,0];return!ac(e,Us,Fs,ks,Mo)||(e=[1,0,0,0,1,0,0,0,1],!ac(e,Us,Fs,ks,Mo))?!1:(To.crossVectors(Fi,ki),e=[To.x,To.y,To.z],ac(e,Us,Fs,ks,Mo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const gi=[new q,new q,new q,new q,new q,new q,new q,new q],Xn=new q,So=new ys,Us=new q,Fs=new q,ks=new q,Fi=new q,ki=new q,ns=new q,Or=new q,Mo=new q,To=new q,is=new q;function ac(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){is.fromArray(i,r);const o=s.x*Math.abs(is.x)+s.y*Math.abs(is.y)+s.z*Math.abs(is.z),c=t.dot(is),l=e.dot(is),h=n.dot(is);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Jm=new ys,Ur=new q,cc=new q;class yr{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Jm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ur.subVectors(t,this.center);const e=Ur.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ur,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ur.copy(t.center).add(cc)),this.expandByPoint(Ur.copy(t.center).sub(cc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _i=new q,lc=new q,Eo=new q,Bi=new q,uc=new q,wo=new q,hc=new q;class Ud{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_i)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_i.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_i.copy(this.origin).addScaledVector(this.direction,e),_i.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){lc.copy(t).add(e).multiplyScalar(.5),Eo.copy(e).sub(t).normalize(),Bi.copy(this.origin).sub(lc);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Eo),o=Bi.dot(this.direction),c=-Bi.dot(Eo),l=Bi.lengthSq(),h=Math.abs(1-a*a);let d,f,m,v;if(h>0)if(d=a*c-o,f=a*o-c,v=r*h,d>=0)if(f>=-v)if(f<=v){const x=1/h;d*=x,f*=x,m=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f<=-v?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l):f<=v?(d=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(lc).addScaledVector(Eo,f),m}intersectSphere(t,e){_i.subVectors(t.center,this.origin);const n=_i.dot(this.direction),s=_i.dot(_i)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,_i)!==null}intersectTriangle(t,e,n,s,r){uc.subVectors(e,t),wo.subVectors(n,t),hc.crossVectors(uc,wo);let a=this.direction.dot(hc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bi.subVectors(this.origin,t);const c=o*this.direction.dot(wo.crossVectors(Bi,wo));if(c<0)return null;const l=o*this.direction.dot(uc.cross(Bi));if(l<0||c+l>a)return null;const h=-o*Bi.dot(hc);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(t,e,n,s,r,a,o,c,l,h,d,f,m,v,x,g){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,d,f,m,v,x,g)}set(t,e,n,s,r,a,o,c,l,h,d,f,m,v,x,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=f,p[3]=m,p[7]=v,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Bs.setFromMatrixColumn(t,0).length(),r=1/Bs.setFromMatrixColumn(t,1).length(),a=1/Bs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=a*h,m=a*d,v=o*h,x=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=m+v*l,e[5]=f-x*l,e[9]=-o*c,e[2]=x-f*l,e[6]=v+m*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*h,m=c*d,v=l*h,x=l*d;e[0]=f+x*o,e[4]=v*o-m,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=m*o-v,e[6]=x+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*h,m=c*d,v=l*h,x=l*d;e[0]=f-x*o,e[4]=-a*d,e[8]=v+m*o,e[1]=m+v*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*h,m=a*d,v=o*h,x=o*d;e[0]=c*h,e[4]=v*l-m,e[8]=f*l+x,e[1]=c*d,e[5]=x*l+f,e[9]=m*l-v,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,m=a*l,v=o*c,x=o*l;e[0]=c*h,e[4]=x-f*d,e[8]=v*d+m,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=m*d+v,e[10]=f-x*d}else if(t.order==="XZY"){const f=a*c,m=a*l,v=o*c,x=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=f*d+x,e[5]=a*h,e[9]=m*d-v,e[2]=v*d-m,e[6]=o*h,e[10]=x*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Qm,t,tg)}lookAt(t,e,n){const s=this.elements;return Rn.subVectors(t,e),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Vi.crossVectors(n,Rn),Vi.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Vi.crossVectors(n,Rn)),Vi.normalize(),bo.crossVectors(Rn,Vi),s[0]=Vi.x,s[4]=bo.x,s[8]=Rn.x,s[1]=Vi.y,s[5]=bo.y,s[9]=Rn.y,s[2]=Vi.z,s[6]=bo.z,s[10]=Rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],m=n[13],v=n[2],x=n[6],g=n[10],p=n[14],b=n[3],M=n[7],w=n[11],A=n[15],R=s[0],C=s[4],D=s[8],T=s[12],S=s[1],P=s[5],O=s[9],G=s[13],U=s[2],z=s[6],k=s[10],H=s[14],j=s[3],Y=s[7],$=s[11],st=s[15];return r[0]=a*R+o*S+c*U+l*j,r[4]=a*C+o*P+c*z+l*Y,r[8]=a*D+o*O+c*k+l*$,r[12]=a*T+o*G+c*H+l*st,r[1]=h*R+d*S+f*U+m*j,r[5]=h*C+d*P+f*z+m*Y,r[9]=h*D+d*O+f*k+m*$,r[13]=h*T+d*G+f*H+m*st,r[2]=v*R+x*S+g*U+p*j,r[6]=v*C+x*P+g*z+p*Y,r[10]=v*D+x*O+g*k+p*$,r[14]=v*T+x*G+g*H+p*st,r[3]=b*R+M*S+w*U+A*j,r[7]=b*C+M*P+w*z+A*Y,r[11]=b*D+M*O+w*k+A*$,r[15]=b*T+M*G+w*H+A*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],f=t[10],m=t[14],v=t[3],x=t[7],g=t[11],p=t[15];return v*(+r*c*d-s*l*d-r*o*f+n*l*f+s*o*m-n*c*m)+x*(+e*c*m-e*l*f+r*a*f-s*a*m+s*l*h-r*c*h)+g*(+e*l*d-e*o*m-r*a*d+n*a*m+r*o*h-n*l*h)+p*(-s*o*h-e*c*d+e*o*f+s*a*d-n*a*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],f=t[10],m=t[11],v=t[12],x=t[13],g=t[14],p=t[15],b=d*g*l-x*f*l+x*c*m-o*g*m-d*c*p+o*f*p,M=v*f*l-h*g*l-v*c*m+a*g*m+h*c*p-a*f*p,w=h*x*l-v*d*l+v*o*m-a*x*m-h*o*p+a*d*p,A=v*d*c-h*x*c-v*o*f+a*x*f+h*o*g-a*d*g,R=e*b+n*M+s*w+r*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=b*C,t[1]=(x*f*r-d*g*r-x*s*m+n*g*m+d*s*p-n*f*p)*C,t[2]=(o*g*r-x*c*r+x*s*l-n*g*l-o*s*p+n*c*p)*C,t[3]=(d*c*r-o*f*r-d*s*l+n*f*l+o*s*m-n*c*m)*C,t[4]=M*C,t[5]=(h*g*r-v*f*r+v*s*m-e*g*m-h*s*p+e*f*p)*C,t[6]=(v*c*r-a*g*r-v*s*l+e*g*l+a*s*p-e*c*p)*C,t[7]=(a*f*r-h*c*r+h*s*l-e*f*l-a*s*m+e*c*m)*C,t[8]=w*C,t[9]=(v*d*r-h*x*r-v*n*m+e*x*m+h*n*p-e*d*p)*C,t[10]=(a*x*r-v*o*r+v*n*l-e*x*l-a*n*p+e*o*p)*C,t[11]=(h*o*r-a*d*r-h*n*l+e*d*l+a*n*m-e*o*m)*C,t[12]=A*C,t[13]=(h*x*s-v*d*s+v*n*f-e*x*f-h*n*g+e*d*g)*C,t[14]=(v*o*s-a*x*s-v*n*c+e*x*c+a*n*g-e*o*g)*C,t[15]=(a*d*s-h*o*s+h*n*c-e*d*c-a*n*f+e*o*f)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,f=r*l,m=r*h,v=r*d,x=a*h,g=a*d,p=o*d,b=c*l,M=c*h,w=c*d,A=n.x,R=n.y,C=n.z;return s[0]=(1-(x+p))*A,s[1]=(m+w)*A,s[2]=(v-M)*A,s[3]=0,s[4]=(m-w)*R,s[5]=(1-(f+p))*R,s[6]=(g+b)*R,s[7]=0,s[8]=(v+M)*C,s[9]=(g-b)*C,s[10]=(1-(f+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Bs.set(s[0],s[1],s[2]).length();const a=Bs.set(s[4],s[5],s[6]).length(),o=Bs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],qn.copy(this);const l=1/r,h=1/a,d=1/o;return qn.elements[0]*=l,qn.elements[1]*=l,qn.elements[2]*=l,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=d,qn.elements[9]*=d,qn.elements[10]*=d,e.setFromRotationMatrix(qn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Ei){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let m,v;if(o===Ei)m=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ia)m=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ei){const c=this.elements,l=1/(e-t),h=1/(n-s),d=1/(a-r),f=(e+t)*l,m=(n+s)*h;let v,x;if(o===Ei)v=(a+r)*d,x=-2*d;else if(o===ia)v=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=x,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Bs=new q,qn=new De,Qm=new q(0,0,0),tg=new q(1,1,1),Vi=new q,bo=new q,Rn=new q,ah=new De,ch=new Kr;class Jr{constructor(t=0,e=0,n=0,s=Jr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(hn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-hn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(hn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-hn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(hn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-hn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ah.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ah,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ch.setFromEuler(this),this.setFromQuaternion(ch,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jr.DEFAULT_ORDER="XYZ";class Fd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let eg=0;const lh=new q,Vs=new Kr,vi=new De,Ao=new q,Fr=new q,ng=new q,ig=new Kr,uh=new q(1,0,0),hh=new q(0,1,0),dh=new q(0,0,1),sg={type:"added"},rg={type:"removed"};class en extends xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=$r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const t=new q,e=new Jr,n=new Kr,s=new q(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new De},normalMatrix:{value:new oe}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(t,e){return Vs.setFromAxisAngle(t,e),this.quaternion.premultiply(Vs),this}rotateX(t){return this.rotateOnAxis(uh,t)}rotateY(t){return this.rotateOnAxis(hh,t)}rotateZ(t){return this.rotateOnAxis(dh,t)}translateOnAxis(t,e){return lh.copy(t).applyQuaternion(this.quaternion),this.position.add(lh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uh,t)}translateY(t){return this.translateOnAxis(hh,t)}translateZ(t){return this.translateOnAxis(dh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ao.copy(t):Ao.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Fr,Ao,this.up):vi.lookAt(Ao,Fr,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),Vs.setFromRotationMatrix(vi),this.quaternion.premultiply(Vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(sg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rg)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(vi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,t,ng),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,ig,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),m=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}en.DEFAULT_UP=new q(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jn=new q,xi=new q,dc=new q,yi=new q,zs=new q,Gs=new q,fh=new q,fc=new q,pc=new q,mc=new q;let Co=!1;class Zn{constructor(t=new q,e=new q,n=new q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),jn.subVectors(t,e),s.cross(jn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){jn.subVectors(s,e),xi.subVectors(n,e),dc.subVectors(t,e);const a=jn.dot(jn),o=jn.dot(xi),c=jn.dot(dc),l=xi.dot(xi),h=xi.dot(dc),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,m=(l*c-o*h)*f,v=(a*h-o*c)*f;return r.set(1-m-v,v,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getUV(t,e,n,s,r,a,o,c){return Co===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Co=!0),this.getInterpolation(t,e,n,s,r,a,o,c)}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,yi.x),c.addScaledVector(a,yi.y),c.addScaledVector(o,yi.z),c)}static isFrontFacing(t,e,n,s){return jn.subVectors(n,e),xi.subVectors(t,e),jn.cross(xi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return jn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),jn.cross(xi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Zn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Zn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Co===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Co=!0),Zn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return Zn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Zn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Zn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;zs.subVectors(s,n),Gs.subVectors(r,n),fc.subVectors(t,n);const c=zs.dot(fc),l=Gs.dot(fc);if(c<=0&&l<=0)return e.copy(n);pc.subVectors(t,s);const h=zs.dot(pc),d=Gs.dot(pc);if(h>=0&&d<=h)return e.copy(s);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(zs,a);mc.subVectors(t,r);const m=zs.dot(mc),v=Gs.dot(mc);if(v>=0&&m<=v)return e.copy(r);const x=m*l-c*v;if(x<=0&&l>=0&&v<=0)return o=l/(l-v),e.copy(n).addScaledVector(Gs,o);const g=h*v-m*d;if(g<=0&&d-h>=0&&m-v>=0)return fh.subVectors(r,s),o=(d-h)/(d-h+(m-v)),e.copy(s).addScaledVector(fh,o);const p=1/(g+x+f);return a=x*p,o=f*p,e.copy(n).addScaledVector(zs,a).addScaledVector(Gs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function gc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class te{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=on){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ve.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ve.workingColorSpace){return this.r=t,this.g=e,this.b=n,ve.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ve.workingColorSpace){if(t=Xm(t,1),e=hn(e,0,1),n=hn(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=gc(a,r,t+1/3),this.g=gc(a,r,t),this.b=gc(a,r,t-1/3)}return ve.toWorkingColorSpace(this,s),this}setStyle(t,e=on){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=on){const n=kd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=sr(t.r),this.g=sr(t.g),this.b=sr(t.b),this}copyLinearToSRGB(t){return this.r=sc(t.r),this.g=sc(t.g),this.b=sc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=on){return ve.fromWorkingColorSpace(un.copy(this),t),Math.round(hn(un.r*255,0,255))*65536+Math.round(hn(un.g*255,0,255))*256+Math.round(hn(un.b*255,0,255))}getHexString(t=on){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ve.workingColorSpace){ve.fromWorkingColorSpace(un.copy(this),e);const n=un.r,s=un.g,r=un.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ve.workingColorSpace){return ve.fromWorkingColorSpace(un.copy(this),e),t.r=un.r,t.g=un.g,t.b=un.b,t}getStyle(t=on){ve.fromWorkingColorSpace(un.copy(this),t);const e=un.r,n=un.g,s=un.b;return t!==on?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(zi),this.setHSL(zi.h+t,zi.s+e,zi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zi),t.getHSL(Ro);const n=nc(zi.h,Ro.h,e),s=nc(zi.s,Ro.s,e),r=nc(zi.l,Ro.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new te;te.NAMES=kd;let og=0;class Sr extends xr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:og++}),this.uuid=$r(),this.name="",this.type="Material",this.blending=ir,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nc,this.blendDst=Dc,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=Qo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ir&&(n.blending=this.blending),this.side!==Zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nc&&(n.blendSrc=this.blendSrc),this.blendDst!==Dc&&(n.blendDst=this.blendDst),this.blendEquation!==cs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class nl extends Sr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const He=new q,Po=new Nt;class ni{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=th,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Po.fromBufferAttribute(this,e),Po.applyMatrix3(t),this.setXY(e,Po.x,Po.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ir(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Tn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ir(e,this.array)),e}setX(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ir(e,this.array)),e}setY(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ir(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ir(e,this.array)),e}setW(t,e){return this.normalized&&(e=Tn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),n=Tn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),n=Tn(n,this.array),s=Tn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Tn(e,this.array),n=Tn(n,this.array),s=Tn(s,this.array),r=Tn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==th&&(t.usage=this.usage),t}}class Bd extends ni{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Vd extends ni{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class qe extends ni{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ag=0;const Fn=new De,_c=new en,Hs=new q,Pn=new ys,kr=new ys,Qe=new q;class An extends xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=$r(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dd(t)?Vd:Bd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new oe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fn.makeRotationFromQuaternion(t),this.applyMatrix4(Fn),this}rotateX(t){return Fn.makeRotationX(t),this.applyMatrix4(Fn),this}rotateY(t){return Fn.makeRotationY(t),this.applyMatrix4(Fn),this}rotateZ(t){return Fn.makeRotationZ(t),this.applyMatrix4(Fn),this}translate(t,e,n){return Fn.makeTranslation(t,e,n),this.applyMatrix4(Fn),this}scale(t,e,n){return Fn.makeScale(t,e,n),this.applyMatrix4(Fn),this}lookAt(t){return _c.lookAt(t),_c.updateMatrix(),this.applyMatrix4(_c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new qe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ys);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new q,1/0);return}if(t){const n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];kr.setFromBufferAttribute(o),this.morphTargetsRelative?(Qe.addVectors(Pn.min,kr.min),Pn.expandByPoint(Qe),Qe.addVectors(Pn.max,kr.max),Pn.expandByPoint(Qe)):(Pn.expandByPoint(kr.min),Pn.expandByPoint(kr.max))}Pn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Qe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Qe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Qe.fromBufferAttribute(o,l),c&&(Hs.fromBufferAttribute(t,l),Qe.add(Hs)),s=Math.max(s,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ni(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let S=0;S<o;S++)l[S]=new q,h[S]=new q;const d=new q,f=new q,m=new q,v=new Nt,x=new Nt,g=new Nt,p=new q,b=new q;function M(S,P,O){d.fromArray(s,S*3),f.fromArray(s,P*3),m.fromArray(s,O*3),v.fromArray(a,S*2),x.fromArray(a,P*2),g.fromArray(a,O*2),f.sub(d),m.sub(d),x.sub(v),g.sub(v);const G=1/(x.x*g.y-g.x*x.y);isFinite(G)&&(p.copy(f).multiplyScalar(g.y).addScaledVector(m,-x.y).multiplyScalar(G),b.copy(m).multiplyScalar(x.x).addScaledVector(f,-g.x).multiplyScalar(G),l[S].add(p),l[P].add(p),l[O].add(p),h[S].add(b),h[P].add(b),h[O].add(b))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let S=0,P=w.length;S<P;++S){const O=w[S],G=O.start,U=O.count;for(let z=G,k=G+U;z<k;z+=3)M(n[z+0],n[z+1],n[z+2])}const A=new q,R=new q,C=new q,D=new q;function T(S){C.fromArray(r,S*3),D.copy(C);const P=l[S];A.copy(P),A.sub(C.multiplyScalar(C.dot(P))).normalize(),R.crossVectors(D,P);const G=R.dot(h[S])<0?-1:1;c[S*4]=A.x,c[S*4+1]=A.y,c[S*4+2]=A.z,c[S*4+3]=G}for(let S=0,P=w.length;S<P;++S){const O=w[S],G=O.start,U=O.count;for(let z=G,k=G+U;z<k;z+=3)T(n[z+0]),T(n[z+1]),T(n[z+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ni(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new q,r=new q,a=new q,o=new q,c=new q,l=new q,h=new q,d=new q;if(t)for(let f=0,m=t.count;f<m;f+=3){const v=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h);let m=0,v=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?m=c[x]*o.data.stride+o.offset:m=c[x]*h;for(let p=0;p<h;p++)f[v++]=l[m++]}return new ni(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new An,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const f=l[h],m=t(f,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const m=l[d];h.push(m.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ph=new De,ss=new Ud,No=new yr,mh=new q,Ws=new q,Xs=new q,qs=new q,vc=new q,Do=new q,Lo=new Nt,Io=new Nt,Oo=new Nt,gh=new q,_h=new q,vh=new q,Uo=new q,Fo=new q;class Dn extends en{constructor(t=new An,e=new nl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Do.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(vc.fromBufferAttribute(d,t),a?Do.addScaledVector(vc,h):Do.addScaledVector(vc.sub(e),h))}e.add(Do)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(r),ss.copy(t.ray).recast(t.near),!(No.containsPoint(ss.origin)===!1&&(ss.intersectSphere(No,mh)===null||ss.origin.distanceToSquared(mh)>(t.far-t.near)**2))&&(ph.copy(r).invert(),ss.copy(t.ray).applyMatrix4(ph),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ss)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,x=f.length;v<x;v++){const g=f[v],p=a[g.materialIndex],b=Math.max(g.start,m.start),M=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let w=b,A=M;w<A;w+=3){const R=o.getX(w),C=o.getX(w+1),D=o.getX(w+2);s=ko(this,p,t,n,l,h,d,R,C,D),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const v=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let g=v,p=x;g<p;g+=3){const b=o.getX(g),M=o.getX(g+1),w=o.getX(g+2);s=ko(this,a,t,n,l,h,d,b,M,w),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,x=f.length;v<x;v++){const g=f[v],p=a[g.materialIndex],b=Math.max(g.start,m.start),M=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let w=b,A=M;w<A;w+=3){const R=w,C=w+1,D=w+2;s=ko(this,p,t,n,l,h,d,R,C,D),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const v=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let g=v,p=x;g<p;g+=3){const b=g,M=g+1,w=g+2;s=ko(this,a,t,n,l,h,d,b,M,w),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function cg(i,t,e,n,s,r,a,o){let c;if(t.side===yn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Zi,o),c===null)return null;Fo.copy(o),Fo.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Fo);return l<e.near||l>e.far?null:{distance:l,point:Fo.clone(),object:i}}function ko(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Ws),i.getVertexPosition(c,Xs),i.getVertexPosition(l,qs);const h=cg(i,t,e,n,Ws,Xs,qs,Uo);if(h){s&&(Lo.fromBufferAttribute(s,o),Io.fromBufferAttribute(s,c),Oo.fromBufferAttribute(s,l),h.uv=Zn.getInterpolation(Uo,Ws,Xs,qs,Lo,Io,Oo,new Nt)),r&&(Lo.fromBufferAttribute(r,o),Io.fromBufferAttribute(r,c),Oo.fromBufferAttribute(r,l),h.uv1=Zn.getInterpolation(Uo,Ws,Xs,qs,Lo,Io,Oo,new Nt),h.uv2=h.uv1),a&&(gh.fromBufferAttribute(a,o),_h.fromBufferAttribute(a,c),vh.fromBufferAttribute(a,l),h.normal=Zn.getInterpolation(Uo,Ws,Xs,qs,gh,_h,vh,new q),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new q,materialIndex:0};Zn.getNormal(Ws,Xs,qs,d.normal),h.face=d}return h}class Qr extends An{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let f=0,m=0;v("z","y","x",-1,-1,n,e,t,a,r,0),v("z","y","x",1,-1,n,e,-t,a,r,1),v("x","z","y",1,1,t,n,e,s,a,2),v("x","z","y",1,-1,t,n,-e,s,a,3),v("x","y","z",1,-1,t,e,n,s,r,4),v("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new qe(l,3)),this.setAttribute("normal",new qe(h,3)),this.setAttribute("uv",new qe(d,2));function v(x,g,p,b,M,w,A,R,C,D,T){const S=w/C,P=A/D,O=w/2,G=A/2,U=R/2,z=C+1,k=D+1;let H=0,j=0;const Y=new q;for(let $=0;$<k;$++){const st=$*P-G;for(let rt=0;rt<z;rt++){const Q=rt*S-O;Y[x]=Q*b,Y[g]=st*M,Y[p]=U,l.push(Y.x,Y.y,Y.z),Y[x]=0,Y[g]=0,Y[p]=R>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(rt/C),d.push(1-$/D),H+=1}}for(let $=0;$<D;$++)for(let st=0;st<C;st++){const rt=f+st+z*$,Q=f+st+z*($+1),ot=f+(st+1)+z*($+1),ct=f+(st+1)+z*$;c.push(rt,Q,ct),c.push(Q,ot,ct),j+=6}o.addGroup(m,j,T),m+=j,f+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function hr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function mn(i){const t={};for(let e=0;e<i.length;e++){const n=hr(i[e]);for(const s in n)t[s]=n[s]}return t}function lg(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function zd(i){return i.getRenderTarget()===null?i.outputColorSpace:ve.workingColorSpace}const ra={clone:hr,merge:mn};var ug=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vn extends Sr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ug,this.fragmentShader=hg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hr(t.uniforms),this.uniformsGroups=lg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Gd extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=Ei}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Bn extends Gd{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=kc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ec*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return kc*2*Math.atan(Math.tan(ec*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ec*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const js=-90,Ys=1;class dg extends en{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Bn(js,Ys,t,e);s.layers=this.layers,this.add(s);const r=new Bn(js,Ys,t,e);r.layers=this.layers,this.add(r);const a=new Bn(js,Ys,t,e);a.layers=this.layers,this.add(a);const o=new Bn(js,Ys,t,e);o.layers=this.layers,this.add(o);const c=new Bn(js,Ys,t,e);c.layers=this.layers,this.add(c);const l=new Bn(js,Ys,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ia)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,m),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Hd extends wn{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:cr,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class fg extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(zr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ps?on:Vn),this.texture=new Hd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:kn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qr(5,5,5),r=new vn({name:"CubemapFromEquirect",uniforms:hr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:wi});r.uniforms.tEquirect.value=e;const a=new Dn(s,r),o=e.minFilter;return e.minFilter===qr&&(e.minFilter=kn),new dg(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const xc=new q,pg=new q,mg=new oe;class os{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=xc.subVectors(n,e).cross(pg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(xc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||mg.getNormalMatrix(t),s=this.coplanarPoint(xc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new yr,Bo=new q;class il{constructor(t=new os,e=new os,n=new os,s=new os,r=new os,a=new os){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ei){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],d=s[6],f=s[7],m=s[8],v=s[9],x=s[10],g=s[11],p=s[12],b=s[13],M=s[14],w=s[15];if(n[0].setComponents(c-r,f-l,g-m,w-p).normalize(),n[1].setComponents(c+r,f+l,g+m,w+p).normalize(),n[2].setComponents(c+a,f+h,g+v,w+b).normalize(),n[3].setComponents(c-a,f-h,g-v,w-b).normalize(),n[4].setComponents(c-o,f-d,g-x,w-M).normalize(),e===Ei)n[5].setComponents(c+o,f+d,g+x,w+M).normalize();else if(e===ia)n[5].setComponents(o,d,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){return rs.center.set(0,0,0),rs.radius=.7071067811865476,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Bo.x=s.normal.x>0?t.max.x:t.min.x,Bo.y=s.normal.y>0?t.max.y:t.min.y,Bo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Bo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wd(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function gg(i,t){const e=t.isWebGL2,n=new WeakMap;function s(l,h){const d=l.array,f=l.usage,m=d.byteLength,v=i.createBuffer();i.bindBuffer(h,v),i.bufferData(h,d,f),l.onUploadCallback();let x;if(d instanceof Float32Array)x=i.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=i.SHORT;else if(d instanceof Uint32Array)x=i.UNSIGNED_INT;else if(d instanceof Int32Array)x=i.INT;else if(d instanceof Int8Array)x=i.BYTE;else if(d instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,h,d){const f=h.array,m=h._updateRange,v=h.updateRanges;if(i.bindBuffer(d,l),m.count===-1&&v.length===0&&i.bufferSubData(d,0,f),v.length!==0){for(let x=0,g=v.length;x<g;x++){const p=v[x];e?i.bufferSubData(d,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):i.bufferSubData(d,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}m.count!==-1&&(e?i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);if(d===void 0)n.set(l,s(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,l,h),d.version=l.version}}return{get:a,remove:o,update:c}}class sl extends An{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,d=t/o,f=e/c,m=[],v=[],x=[],g=[];for(let p=0;p<h;p++){const b=p*f-a;for(let M=0;M<l;M++){const w=M*d-r;v.push(w,-b,0),x.push(0,0,1),g.push(M/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){const M=b+l*p,w=b+l*(p+1),A=b+1+l*(p+1),R=b+1+l*p;m.push(M,w,R),m.push(w,A,R)}this.setIndex(m),this.setAttribute("position",new qe(v,3)),this.setAttribute("normal",new qe(x,3)),this.setAttribute("uv",new qe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sl(t.width,t.height,t.widthSegments,t.heightSegments)}}var _g=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vg=`#ifdef USE_ALPHAHASH
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
#endif`,xg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Mg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tg=`#ifdef USE_AOMAP
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
#endif`,Eg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wg=`#ifdef USE_BATCHING
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
#endif`,bg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ag=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pg=`#ifdef USE_IRIDESCENCE
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
#endif`,Ng=`#ifdef USE_BUMPMAP
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
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ug=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Vg=`#define PI 3.141592653589793
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
} // validated`,zg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gg=`vec3 transformedNormal = objectNormal;
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
#endif`,Hg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yg=`
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
}`,Zg=`#ifdef USE_ENVMAP
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
#endif`,$g=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kg=`#ifdef USE_ENVMAP
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
#endif`,Jg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qg=`#ifdef USE_ENVMAP
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
#endif`,t_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,s_=`#ifdef USE_GRADIENTMAP
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
}`,r_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,o_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,a_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,c_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l_=`uniform bool receiveShadow;
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
#endif`,u_=`#ifdef USE_ENVMAP
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
#endif`,h_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m_=`PhysicalMaterial material;
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
#endif`,g_=`struct PhysicalMaterial {
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
}`,__=`
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
#endif`,v_=`#if defined( RE_IndirectDiffuse )
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
#endif`,x_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,T_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,E_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,w_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,A_=`#if defined( USE_POINTS_UV )
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
#endif`,C_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,R_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,N_=`#ifdef USE_MORPHNORMALS
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
#endif`,D_=`#ifdef USE_MORPHTARGETS
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
#endif`,L_=`#ifdef USE_MORPHTARGETS
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
#endif`,I_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,O_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,U_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,B_=`#ifdef USE_NORMALMAP
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
#endif`,V_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,z_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,H_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,q_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,K_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ev=`float getShadowMask() {
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
}`,nv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iv=`#ifdef USE_SKINNING
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
#endif`,sv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rv=`#ifdef USE_SKINNING
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
#endif`,ov=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,av=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uv=`#ifdef USE_TRANSMISSION
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
#endif`,hv=`#ifdef USE_TRANSMISSION
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
#endif`,dv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_v=`uniform sampler2D t2D;
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
}`,vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mv=`#include <common>
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
}`,Tv=`#if DEPTH_PACKING == 3200
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
}`,Ev=`#define DISTANCE
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
}`,wv=`#define DISTANCE
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
}`,bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Av=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cv=`uniform float scale;
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
}`,Rv=`uniform vec3 diffuse;
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
}`,Pv=`#include <common>
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
}`,Nv=`uniform vec3 diffuse;
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
}`,Dv=`#define LAMBERT
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
}`,Lv=`#define LAMBERT
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
}`,Iv=`#define MATCAP
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
}`,Ov=`#define MATCAP
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
}`,Uv=`#define NORMAL
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
}`,Fv=`#define NORMAL
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
}`,kv=`#define PHONG
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
}`,Bv=`#define PHONG
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
}`,Vv=`#define STANDARD
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
}`,zv=`#define STANDARD
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
}`,Gv=`#define TOON
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
}`,Hv=`#define TOON
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
}`,Wv=`uniform float size;
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
}`,Xv=`uniform vec3 diffuse;
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
}`,qv=`#include <common>
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
}`,jv=`uniform vec3 color;
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
}`,Yv=`uniform float rotation;
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
}`,Zv=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:_g,alphahash_pars_fragment:vg,alphamap_fragment:xg,alphamap_pars_fragment:yg,alphatest_fragment:Sg,alphatest_pars_fragment:Mg,aomap_fragment:Tg,aomap_pars_fragment:Eg,batching_pars_vertex:wg,batching_vertex:bg,begin_vertex:Ag,beginnormal_vertex:Cg,bsdfs:Rg,iridescence_fragment:Pg,bumpmap_pars_fragment:Ng,clipping_planes_fragment:Dg,clipping_planes_pars_fragment:Lg,clipping_planes_pars_vertex:Ig,clipping_planes_vertex:Og,color_fragment:Ug,color_pars_fragment:Fg,color_pars_vertex:kg,color_vertex:Bg,common:Vg,cube_uv_reflection_fragment:zg,defaultnormal_vertex:Gg,displacementmap_pars_vertex:Hg,displacementmap_vertex:Wg,emissivemap_fragment:Xg,emissivemap_pars_fragment:qg,colorspace_fragment:jg,colorspace_pars_fragment:Yg,envmap_fragment:Zg,envmap_common_pars_fragment:$g,envmap_pars_fragment:Kg,envmap_pars_vertex:Jg,envmap_physical_pars_fragment:u_,envmap_vertex:Qg,fog_vertex:t_,fog_pars_vertex:e_,fog_fragment:n_,fog_pars_fragment:i_,gradientmap_pars_fragment:s_,lightmap_fragment:r_,lightmap_pars_fragment:o_,lights_lambert_fragment:a_,lights_lambert_pars_fragment:c_,lights_pars_begin:l_,lights_toon_fragment:h_,lights_toon_pars_fragment:d_,lights_phong_fragment:f_,lights_phong_pars_fragment:p_,lights_physical_fragment:m_,lights_physical_pars_fragment:g_,lights_fragment_begin:__,lights_fragment_maps:v_,lights_fragment_end:x_,logdepthbuf_fragment:y_,logdepthbuf_pars_fragment:S_,logdepthbuf_pars_vertex:M_,logdepthbuf_vertex:T_,map_fragment:E_,map_pars_fragment:w_,map_particle_fragment:b_,map_particle_pars_fragment:A_,metalnessmap_fragment:C_,metalnessmap_pars_fragment:R_,morphcolor_vertex:P_,morphnormal_vertex:N_,morphtarget_pars_vertex:D_,morphtarget_vertex:L_,normal_fragment_begin:I_,normal_fragment_maps:O_,normal_pars_fragment:U_,normal_pars_vertex:F_,normal_vertex:k_,normalmap_pars_fragment:B_,clearcoat_normal_fragment_begin:V_,clearcoat_normal_fragment_maps:z_,clearcoat_pars_fragment:G_,iridescence_pars_fragment:H_,opaque_fragment:W_,packing:X_,premultiplied_alpha_fragment:q_,project_vertex:j_,dithering_fragment:Y_,dithering_pars_fragment:Z_,roughnessmap_fragment:$_,roughnessmap_pars_fragment:K_,shadowmap_pars_fragment:J_,shadowmap_pars_vertex:Q_,shadowmap_vertex:tv,shadowmask_pars_fragment:ev,skinbase_vertex:nv,skinning_pars_vertex:iv,skinning_vertex:sv,skinnormal_vertex:rv,specularmap_fragment:ov,specularmap_pars_fragment:av,tonemapping_fragment:cv,tonemapping_pars_fragment:lv,transmission_fragment:uv,transmission_pars_fragment:hv,uv_pars_fragment:dv,uv_pars_vertex:fv,uv_vertex:pv,worldpos_vertex:mv,background_vert:gv,background_frag:_v,backgroundCube_vert:vv,backgroundCube_frag:xv,cube_vert:yv,cube_frag:Sv,depth_vert:Mv,depth_frag:Tv,distanceRGBA_vert:Ev,distanceRGBA_frag:wv,equirect_vert:bv,equirect_frag:Av,linedashed_vert:Cv,linedashed_frag:Rv,meshbasic_vert:Pv,meshbasic_frag:Nv,meshlambert_vert:Dv,meshlambert_frag:Lv,meshmatcap_vert:Iv,meshmatcap_frag:Ov,meshnormal_vert:Uv,meshnormal_frag:Fv,meshphong_vert:kv,meshphong_frag:Bv,meshphysical_vert:Vv,meshphysical_frag:zv,meshtoon_vert:Gv,meshtoon_frag:Hv,points_vert:Wv,points_frag:Xv,shadow_vert:qv,shadow_frag:jv,sprite_vert:Yv,sprite_frag:Zv},yt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new oe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new oe},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0},uvTransform:{value:new oe}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new oe},alphaMap:{value:null},alphaMapTransform:{value:new oe},alphaTest:{value:0}}},li={basic:{uniforms:mn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:mn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new te(0)}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:mn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:mn([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:mn([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new te(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:mn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:mn([yt.points,yt.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:mn([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:mn([yt.common,yt.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:mn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:mn([yt.sprite,yt.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distanceRGBA:{uniforms:mn([yt.common,yt.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distanceRGBA_vert,fragmentShader:ie.distanceRGBA_frag},shadow:{uniforms:mn([yt.lights,yt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};li.physical={uniforms:mn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new oe},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new oe},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new oe},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new oe},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new oe},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new oe}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};const Vo={r:0,b:0,g:0};function $v(i,t,e,n,s,r,a){const o=new te(0);let c=r===!0?0:1,l,h,d=null,f=0,m=null;function v(g,p){let b=!1,M=p.isScene===!0?p.background:null;M&&M.isTexture&&(M=(p.backgroundBlurriness>0?e:t).get(M)),M===null?x(o,c):M&&M.isColor&&(x(M,1),b=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===xa)?(h===void 0&&(h=new Dn(new Qr(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:hr(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=ve.getTransfer(M.colorSpace)!==Ae,(d!==M||f!==M.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=M,f=M.version,m=i.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Dn(new sl(2,2),new vn({name:"BackgroundMaterial",uniforms:hr(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=ve.getTransfer(M.colorSpace)!==Ae,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,d=M,f=M.version,m=i.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function x(g,p){g.getRGB(Vo,zd(i)),n.buffers.color.setClear(Vo.r,Vo.g,Vo.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(g,p=1){o.set(g),c=p,x(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,x(o,c)},render:v}}function Kv(i,t,e,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=g(null);let l=c,h=!1;function d(U,z,k,H,j){let Y=!1;if(a){const $=x(H,k,z);l!==$&&(l=$,m(l.object)),Y=p(U,H,k,j),Y&&b(U,H,k,j)}else{const $=z.wireframe===!0;(l.geometry!==H.id||l.program!==k.id||l.wireframe!==$)&&(l.geometry=H.id,l.program=k.id,l.wireframe=$,Y=!0)}j!==null&&e.update(j,i.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,D(U,z,k,H),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(U){return n.isWebGL2?i.bindVertexArray(U):r.bindVertexArrayOES(U)}function v(U){return n.isWebGL2?i.deleteVertexArray(U):r.deleteVertexArrayOES(U)}function x(U,z,k){const H=k.wireframe===!0;let j=o[U.id];j===void 0&&(j={},o[U.id]=j);let Y=j[z.id];Y===void 0&&(Y={},j[z.id]=Y);let $=Y[H];return $===void 0&&($=g(f()),Y[H]=$),$}function g(U){const z=[],k=[],H=[];for(let j=0;j<s;j++)z[j]=0,k[j]=0,H[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:k,attributeDivisors:H,object:U,attributes:{},index:null}}function p(U,z,k,H){const j=l.attributes,Y=z.attributes;let $=0;const st=k.getAttributes();for(const rt in st)if(st[rt].location>=0){const ot=j[rt];let ct=Y[rt];if(ct===void 0&&(rt==="instanceMatrix"&&U.instanceMatrix&&(ct=U.instanceMatrix),rt==="instanceColor"&&U.instanceColor&&(ct=U.instanceColor)),ot===void 0||ot.attribute!==ct||ct&&ot.data!==ct.data)return!0;$++}return l.attributesNum!==$||l.index!==H}function b(U,z,k,H){const j={},Y=z.attributes;let $=0;const st=k.getAttributes();for(const rt in st)if(st[rt].location>=0){let ot=Y[rt];ot===void 0&&(rt==="instanceMatrix"&&U.instanceMatrix&&(ot=U.instanceMatrix),rt==="instanceColor"&&U.instanceColor&&(ot=U.instanceColor));const ct={};ct.attribute=ot,ot&&ot.data&&(ct.data=ot.data),j[rt]=ct,$++}l.attributes=j,l.attributesNum=$,l.index=H}function M(){const U=l.newAttributes;for(let z=0,k=U.length;z<k;z++)U[z]=0}function w(U){A(U,0)}function A(U,z){const k=l.newAttributes,H=l.enabledAttributes,j=l.attributeDivisors;k[U]=1,H[U]===0&&(i.enableVertexAttribArray(U),H[U]=1),j[U]!==z&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,z),j[U]=z)}function R(){const U=l.newAttributes,z=l.enabledAttributes;for(let k=0,H=z.length;k<H;k++)z[k]!==U[k]&&(i.disableVertexAttribArray(k),z[k]=0)}function C(U,z,k,H,j,Y,$){$===!0?i.vertexAttribIPointer(U,z,k,j,Y):i.vertexAttribPointer(U,z,k,H,j,Y)}function D(U,z,k,H){if(n.isWebGL2===!1&&(U.isInstancedMesh||H.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;M();const j=H.attributes,Y=k.getAttributes(),$=z.defaultAttributeValues;for(const st in Y){const rt=Y[st];if(rt.location>=0){let Q=j[st];if(Q===void 0&&(st==="instanceMatrix"&&U.instanceMatrix&&(Q=U.instanceMatrix),st==="instanceColor"&&U.instanceColor&&(Q=U.instanceColor)),Q!==void 0){const ot=Q.normalized,ct=Q.itemSize,_t=e.get(Q);if(_t===void 0)continue;const Et=_t.buffer,ft=_t.type,kt=_t.bytesPerElement,Lt=n.isWebGL2===!0&&(ft===i.INT||ft===i.UNSIGNED_INT||Q.gpuType===Md);if(Q.isInterleavedBufferAttribute){const Xt=Q.data,J=Xt.stride,ce=Q.offset;if(Xt.isInstancedInterleavedBuffer){for(let bt=0;bt<rt.locationSize;bt++)A(rt.location+bt,Xt.meshPerAttribute);U.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Xt.meshPerAttribute*Xt.count)}else for(let bt=0;bt<rt.locationSize;bt++)w(rt.location+bt);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let bt=0;bt<rt.locationSize;bt++)C(rt.location+bt,ct/rt.locationSize,ft,ot,J*kt,(ce+ct/rt.locationSize*bt)*kt,Lt)}else{if(Q.isInstancedBufferAttribute){for(let Xt=0;Xt<rt.locationSize;Xt++)A(rt.location+Xt,Q.meshPerAttribute);U.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Xt=0;Xt<rt.locationSize;Xt++)w(rt.location+Xt);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let Xt=0;Xt<rt.locationSize;Xt++)C(rt.location+Xt,ct/rt.locationSize,ft,ot,ct*kt,ct/rt.locationSize*Xt*kt,Lt)}}else if($!==void 0){const ot=$[st];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv(rt.location,ot);break;case 3:i.vertexAttrib3fv(rt.location,ot);break;case 4:i.vertexAttrib4fv(rt.location,ot);break;default:i.vertexAttrib1fv(rt.location,ot)}}}}R()}function T(){O();for(const U in o){const z=o[U];for(const k in z){const H=z[k];for(const j in H)v(H[j].object),delete H[j];delete z[k]}delete o[U]}}function S(U){if(o[U.id]===void 0)return;const z=o[U.id];for(const k in z){const H=z[k];for(const j in H)v(H[j].object),delete H[j];delete z[k]}delete o[U.id]}function P(U){for(const z in o){const k=o[z];if(k[U.id]===void 0)continue;const H=k[U.id];for(const j in H)v(H[j].object),delete H[j];delete k[U.id]}}function O(){G(),h=!0,l!==c&&(l=c,m(l.object))}function G(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:O,resetDefaultState:G,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfProgram:P,initAttributes:M,enableAttribute:w,disableUnusedAttributes:R}}function Jv(i,t,e,n){const s=n.isWebGL2;let r;function a(h){r=h}function o(h,d){i.drawArrays(r,h,d),e.update(d,r,1)}function c(h,d,f){if(f===0)return;let m,v;if(s)m=i,v="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](r,h,d,f),e.update(d,r,f)}function l(h,d,f){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<f;v++)this.render(h[v],d[v]);else{m.multiDrawArraysWEBGL(r,h,0,d,0,f);let v=0;for(let x=0;x<f;x++)v+=d[x];e.update(v,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function Qv(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=f>0,w=a||t.has("OES_texture_float"),A=M&&w,R=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:b,vertexTextures:M,floatFragmentTextures:w,floatVertexTextures:A,maxSamples:R}}function t0(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new os,o=new oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||s;return s=f,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,m){const v=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||v===null||v.length===0||r&&!g)r?h(null):l();else{const b=r?0:n,M=b*4;let w=p.clippingState||null;c.value=w,w=h(v,f,M,m);for(let A=0;A!==M;++A)w[A]=e[A];p.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,m,v){const x=d!==null?d.length:0;let g=null;if(x!==0){if(g=c.value,v!==!0||g===null){const p=m+x*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,w=m;M!==x;++M,w+=4)a.copy(d[M]).applyMatrix4(b,o),a.normal.toArray(g,w),g[w+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function e0(i){let t=new WeakMap;function e(a,o){return o===Lc?a.mapping=cr:o===Ic&&(a.mapping=lr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Lc||o===Ic)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new fg(c.height/2);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class rl extends Gd{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Js=4,xh=[.125,.215,.35,.446,.526,.582],ls=20,yc=new rl,yh=new te;let Sc=null,Mc=0,Tc=0;const as=(1+Math.sqrt(5))/2,Zs=1/as,Sh=[new q(1,1,1),new q(-1,1,1),new q(1,1,-1),new q(-1,1,-1),new q(0,as,Zs),new q(0,as,-Zs),new q(Zs,0,as),new q(-Zs,0,as),new q(as,Zs,0),new q(-as,Zs,0)];class Mh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Sc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),Tc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sc,Mc,Tc),t.scissorTest=!1,zo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cr||t.mapping===lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),Tc=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:bi,format:Jn,colorSpace:Ci,depthBuffer:!1},s=Th(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Th(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=n0(r)),this._blurMaterial=i0(r,t,e)}return s}_compileMaterial(t){const e=new Dn(this._lodPlanes[0],t);this._renderer.compile(e,yc)}_sceneToCubeUV(t,e,n,s){const o=new Bn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(yh),h.toneMapping=qi,h.autoClear=!1;const m=new nl({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),v=new Dn(new Qr,m);let x=!1;const g=t.background;g?g.isColor&&(m.color.copy(g),t.background=null,x=!0):(m.color.copy(yh),x=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):b===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const M=this._cubeSize;zo(s,b*M,p>2?M:0,M,M),h.setRenderTarget(s),x&&h.render(v,o),h.render(t,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===cr||t.mapping===lr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Dn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;zo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,yc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Sh[(s-1)%Sh.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Dn(this._lodPlanes[s],l),f=l.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ls-1),x=r/v,g=isFinite(r)?1+Math.floor(h*x):ls;g>ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ls}`);const p=[];let b=0;for(let C=0;C<ls;++C){const D=C/x,T=Math.exp(-D*D/2);p.push(T),C===0?b+=T:C<g&&(b+=2*T)}for(let C=0;C<p.length;C++)p[C]=p[C]/b;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=v,f.mipInt.value=M-n;const w=this._sizeLods[s],A=3*w*(s>M-Js?s-M+Js:0),R=4*(this._cubeSize-w);zo(e,A,R,3*w,2*w),c.setRenderTarget(e),c.render(d,yc)}}function n0(i){const t=[],e=[],n=[];let s=i;const r=i-Js+1+xh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Js?c=xh[a-i+Js-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,v=6,x=3,g=2,p=1,b=new Float32Array(x*v*m),M=new Float32Array(g*v*m),w=new Float32Array(p*v*m);for(let R=0;R<m;R++){const C=R%3*2/3-1,D=R>2?0:-1,T=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];b.set(T,x*v*R),M.set(f,g*v*R);const S=[R,R,R,R,R,R];w.set(S,p*v*R)}const A=new An;A.setAttribute("position",new ni(b,x)),A.setAttribute("uv",new ni(M,g)),A.setAttribute("faceIndex",new ni(w,p)),t.push(A),s>Js&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Th(i,t,e){const n=new ei(i,t,e);return n.texture.mapping=xa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function i0(i,t,e){const n=new Float32Array(ls),s=new q(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ol(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Eh(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ol(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function wh(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function ol(){return`

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
	`}function s0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Lc||c===Ic,h=c===cr||c===lr;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=t.get(o);return e===null&&(e=new Mh(i)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),t.set(o,d),d.texture}else{if(t.has(o))return t.get(o).texture;{const d=o.image;if(l&&d&&d.height>0||h&&d&&s(d)){e===null&&(e=new Mh(i));const f=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function r0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function o0(i,t,e,n){const s={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);for(const v in f.morphAttributes){const x=f.morphAttributes[v];for(let g=0,p=x.length;g<p;g++)t.remove(x[g])}f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function c(d){const f=d.attributes;for(const v in f)t.update(f[v],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const v in m){const x=m[v];for(let g=0,p=x.length;g<p;g++)t.update(x[g],i.ARRAY_BUFFER)}}function l(d){const f=[],m=d.index,v=d.attributes.position;let x=0;if(m!==null){const b=m.array;x=m.version;for(let M=0,w=b.length;M<w;M+=3){const A=b[M+0],R=b[M+1],C=b[M+2];f.push(A,R,R,C,C,A)}}else if(v!==void 0){const b=v.array;x=v.version;for(let M=0,w=b.length/3-1;M<w;M+=3){const A=M+0,R=M+1,C=M+2;f.push(A,R,R,C,C,A)}}else return;const g=new(Dd(f)?Vd:Bd)(f,1);g.version=x;const p=r.get(d);p&&t.remove(p),r.set(d,g)}function h(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function a0(i,t,e,n){const s=n.isWebGL2;let r;function a(m){r=m}let o,c;function l(m){o=m.type,c=m.bytesPerElement}function h(m,v){i.drawElements(r,v,o,m*c),e.update(v,r,1)}function d(m,v,x){if(x===0)return;let g,p;if(s)g=i,p="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](r,v,o,m*c,x),e.update(v,r,x)}function f(m,v,x){if(x===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<x;p++)this.render(m[p]/c,v[p]);else{g.multiDrawElementsWEBGL(r,v,0,o,m,0,x);let p=0;for(let b=0;b<x;b++)p+=v[b];e.update(p,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function c0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function l0(i,t){return i[0]-t[0]}function u0(i,t){return Math.abs(t[1])-Math.abs(i[1])}function h0(i,t,e){const n={},s=new Float32Array(8),r=new WeakMap,a=new tn,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,d){const f=l.morphTargetInfluences;if(t.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=v!==void 0?v.length:0;let g=r.get(h);if(g===void 0||g.count!==x){let z=function(){G.dispose(),r.delete(h),h.removeEventListener("dispose",z)};var m=z;g!==void 0&&g.texture.dispose();const M=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let T=0;M===!0&&(T=1),w===!0&&(T=2),A===!0&&(T=3);let S=h.attributes.position.count*T,P=1;S>t.maxTextureSize&&(P=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const O=new Float32Array(S*P*4*x),G=new Od(O,S,P,x);G.type=Xi,G.needsUpdate=!0;const U=T*4;for(let k=0;k<x;k++){const H=R[k],j=C[k],Y=D[k],$=S*P*4*k;for(let st=0;st<H.count;st++){const rt=st*U;M===!0&&(a.fromBufferAttribute(H,st),O[$+rt+0]=a.x,O[$+rt+1]=a.y,O[$+rt+2]=a.z,O[$+rt+3]=0),w===!0&&(a.fromBufferAttribute(j,st),O[$+rt+4]=a.x,O[$+rt+5]=a.y,O[$+rt+6]=a.z,O[$+rt+7]=0),A===!0&&(a.fromBufferAttribute(Y,st),O[$+rt+8]=a.x,O[$+rt+9]=a.y,O[$+rt+10]=a.z,O[$+rt+11]=Y.itemSize===4?a.w:1)}}g={count:x,texture:G,size:new Nt(S,P)},r.set(h,g),h.addEventListener("dispose",z)}let p=0;for(let M=0;M<f.length;M++)p+=f[M];const b=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(i,"morphTargetBaseInfluence",b),d.getUniforms().setValue(i,"morphTargetInfluences",f),d.getUniforms().setValue(i,"morphTargetsTexture",g.texture,e),d.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}else{const v=f===void 0?0:f.length;let x=n[h.id];if(x===void 0||x.length!==v){x=[];for(let w=0;w<v;w++)x[w]=[w,0];n[h.id]=x}for(let w=0;w<v;w++){const A=x[w];A[0]=w,A[1]=f[w]}x.sort(u0);for(let w=0;w<8;w++)w<v&&x[w][1]?(o[w][0]=x[w][0],o[w][1]=x[w][1]):(o[w][0]=Number.MAX_SAFE_INTEGER,o[w][1]=0);o.sort(l0);const g=h.morphAttributes.position,p=h.morphAttributes.normal;let b=0;for(let w=0;w<8;w++){const A=o[w],R=A[0],C=A[1];R!==Number.MAX_SAFE_INTEGER&&C?(g&&h.getAttribute("morphTarget"+w)!==g[R]&&h.setAttribute("morphTarget"+w,g[R]),p&&h.getAttribute("morphNormal"+w)!==p[R]&&h.setAttribute("morphNormal"+w,p[R]),s[w]=C,b+=C):(g&&h.hasAttribute("morphTarget"+w)===!0&&h.deleteAttribute("morphTarget"+w),p&&h.hasAttribute("morphNormal"+w)===!0&&h.deleteAttribute("morphNormal"+w),s[w]=0)}const M=h.morphTargetsRelative?1:1-b;d.getUniforms().setValue(i,"morphTargetBaseInfluence",M),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function d0(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class Xd extends wn{constructor(t,e,n,s,r,a,o,c,l,h){if(h=h!==void 0?h:fs,h!==fs&&h!==ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===fs&&(n=Wi),n===void 0&&h===ur&&(n=ds),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:gn,this.minFilter=c!==void 0?c:gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const qd=new wn,jd=new Xd(1,1);jd.compareFunction=Nd;const Yd=new Od,Zd=new Km,$d=new Hd,bh=[],Ah=[],Ch=new Float32Array(16),Rh=new Float32Array(9),Ph=new Float32Array(4);function Mr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=bh[s];if(r===void 0&&(r=new Float32Array(s),bh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function $e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Sa(i,t){let e=Ah[t];e===void 0&&(e=new Int32Array(t),Ah[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function f0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function p0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2fv(this.addr,t),$e(e,t)}}function m0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;i.uniform3fv(this.addr,t),$e(e,t)}}function g0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4fv(this.addr,t),$e(e,t)}}function _0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,n))return;Ph.set(n),i.uniformMatrix2fv(this.addr,!1,Ph),$e(e,n)}}function v0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,n))return;Rh.set(n),i.uniformMatrix3fv(this.addr,!1,Rh),$e(e,n)}}function x0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),$e(e,t)}else{if(Ze(e,n))return;Ch.set(n),i.uniformMatrix4fv(this.addr,!1,Ch),$e(e,n)}}function y0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function S0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2iv(this.addr,t),$e(e,t)}}function M0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3iv(this.addr,t),$e(e,t)}}function T0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4iv(this.addr,t),$e(e,t)}}function E0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function w0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2uiv(this.addr,t),$e(e,t)}}function b0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3uiv(this.addr,t),$e(e,t)}}function A0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4uiv(this.addr,t),$e(e,t)}}function C0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?jd:qd;e.setTexture2D(t||r,s)}function R0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Zd,s)}function P0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||$d,s)}function N0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Yd,s)}function D0(i){switch(i){case 5126:return f0;case 35664:return p0;case 35665:return m0;case 35666:return g0;case 35674:return _0;case 35675:return v0;case 35676:return x0;case 5124:case 35670:return y0;case 35667:case 35671:return S0;case 35668:case 35672:return M0;case 35669:case 35673:return T0;case 5125:return E0;case 36294:return w0;case 36295:return b0;case 36296:return A0;case 35678:case 36198:case 36298:case 36306:case 35682:return C0;case 35679:case 36299:case 36307:return R0;case 35680:case 36300:case 36308:case 36293:return P0;case 36289:case 36303:case 36311:case 36292:return N0}}function L0(i,t){i.uniform1fv(this.addr,t)}function I0(i,t){const e=Mr(t,this.size,2);i.uniform2fv(this.addr,e)}function O0(i,t){const e=Mr(t,this.size,3);i.uniform3fv(this.addr,e)}function U0(i,t){const e=Mr(t,this.size,4);i.uniform4fv(this.addr,e)}function F0(i,t){const e=Mr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function k0(i,t){const e=Mr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function B0(i,t){const e=Mr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function V0(i,t){i.uniform1iv(this.addr,t)}function z0(i,t){i.uniform2iv(this.addr,t)}function G0(i,t){i.uniform3iv(this.addr,t)}function H0(i,t){i.uniform4iv(this.addr,t)}function W0(i,t){i.uniform1uiv(this.addr,t)}function X0(i,t){i.uniform2uiv(this.addr,t)}function q0(i,t){i.uniform3uiv(this.addr,t)}function j0(i,t){i.uniform4uiv(this.addr,t)}function Y0(i,t,e){const n=this.cache,s=t.length,r=Sa(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||qd,r[a])}function Z0(i,t,e){const n=this.cache,s=t.length,r=Sa(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Zd,r[a])}function $0(i,t,e){const n=this.cache,s=t.length,r=Sa(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||$d,r[a])}function K0(i,t,e){const n=this.cache,s=t.length,r=Sa(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),$e(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Yd,r[a])}function J0(i){switch(i){case 5126:return L0;case 35664:return I0;case 35665:return O0;case 35666:return U0;case 35674:return F0;case 35675:return k0;case 35676:return B0;case 5124:case 35670:return V0;case 35667:case 35671:return z0;case 35668:case 35672:return G0;case 35669:case 35673:return H0;case 5125:return W0;case 36294:return X0;case 36295:return q0;case 36296:return j0;case 35678:case 36198:case 36298:case 36306:case 35682:return Y0;case 35679:case 36299:case 36307:return Z0;case 35680:case 36300:case 36308:case 36293:return $0;case 36289:case 36303:case 36311:case 36292:return K0}}class Q0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=D0(e.type)}}class tx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=J0(e.type)}}class ex{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Ec=/(\w+)(\])?(\[|\.)?/g;function Nh(i,t){i.seq.push(t),i.map[t.id]=t}function nx(i,t,e){const n=i.name,s=n.length;for(Ec.lastIndex=0;;){const r=Ec.exec(n),a=Ec.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Nh(e,l===void 0?new Q0(o,i,t):new tx(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new ex(o),Nh(e,d)),e=d}}}class $o{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);nx(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Dh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const ix=37297;let sx=0;function rx(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function ox(i){const t=ve.getPrimaries(ve.workingColorSpace),e=ve.getPrimaries(i);let n;switch(t===e?n="":t===na&&e===ea?n="LinearDisplayP3ToLinearSRGB":t===ea&&e===na&&(n="LinearSRGBToLinearDisplayP3"),i){case Ci:case ya:return[n,"LinearTransferOETF"];case on:case el:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Lh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+rx(i.getShaderSource(t),a)}else return s}function ax(i,t){const e=ox(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function cx(i,t){let e;switch(t){case ym:e="Linear";break;case Sm:e="Reinhard";break;case Mm:e="OptimizedCineon";break;case Tm:e="ACESFilmic";break;case wm:e="AgX";break;case Em:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function lx(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qs).join(`
`)}function ux(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Qs).join(`
`)}function hx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function dx(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Qs(i){return i!==""}function Ih(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Oh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const fx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vc(i){return i.replace(fx,mx)}const px=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function mx(i,t){let e=ie[t];if(e===void 0){const n=px.get(t);if(n!==void 0)e=ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Vc(e)}const gx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uh(i){return i.replace(gx,_x)}function _x(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fh(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function vx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===xd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Yp?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Si&&(t="SHADOWMAP_TYPE_VSM"),t}function xx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case cr:case lr:t="ENVMAP_TYPE_CUBE";break;case xa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yx(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case lr:t="ENVMAP_MODE_REFRACTION";break}return t}function Sx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yd:t="ENVMAP_BLENDING_MULTIPLY";break;case vm:t="ENVMAP_BLENDING_MIX";break;case xm:t="ENVMAP_BLENDING_ADD";break}return t}function Mx(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Tx(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=vx(e),l=xx(e),h=yx(e),d=Sx(e),f=Mx(e),m=e.isWebGL2?"":lx(e),v=ux(e),x=hx(r),g=s.createProgram();let p,b,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Qs).join(`
`),p.length>0&&(p+=`
`),b=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Qs).join(`
`),b.length>0&&(b+=`
`)):(p=[Fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),b=[m,Fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qi?"#define TONE_MAPPING":"",e.toneMapping!==qi?ie.tonemapping_pars_fragment:"",e.toneMapping!==qi?cx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,ax("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qs).join(`
`)),a=Vc(a),a=Ih(a,e),a=Oh(a,e),o=Vc(o),o=Ih(o,e),o=Oh(o,e),a=Uh(a),o=Uh(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,b=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const w=M+p+a,A=M+b+o,R=Dh(s,s.VERTEX_SHADER,w),C=Dh(s,s.FRAGMENT_SHADER,A);s.attachShader(g,R),s.attachShader(g,C),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function D(O){if(i.debug.checkShaderErrors){const G=s.getProgramInfoLog(g).trim(),U=s.getShaderInfoLog(R).trim(),z=s.getShaderInfoLog(C).trim();let k=!0,H=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,R,C);else{const j=Lh(s,R,"vertex"),Y=Lh(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+G+`
`+j+`
`+Y)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(U===""||z==="")&&(H=!1);H&&(O.diagnostics={runnable:k,programLog:G,vertexShader:{log:U,prefix:p},fragmentShader:{log:z,prefix:b}})}s.deleteShader(R),s.deleteShader(C),T=new $o(s,g),S=dx(s,g)}let T;this.getUniforms=function(){return T===void 0&&D(this),T};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(g,ix)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sx++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=C,this}let Ex=0;class wx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new bx(t),e.set(t,n)),n}}class bx{constructor(t){this.id=Ex++,this.code=t,this.usedTimes=0}}function Ax(i,t,e,n,s,r,a){const o=new Fd,c=new wx,l=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return T===0?"uv":`uv${T}`}function g(T,S,P,O,G){const U=O.fog,z=G.geometry,k=T.isMeshStandardMaterial?O.environment:null,H=(T.isMeshStandardMaterial?e:t).get(T.envMap||k),j=H&&H.mapping===xa?H.image.height:null,Y=v[T.type];T.precision!==null&&(m=s.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const $=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,st=$!==void 0?$.length:0;let rt=0;z.morphAttributes.position!==void 0&&(rt=1),z.morphAttributes.normal!==void 0&&(rt=2),z.morphAttributes.color!==void 0&&(rt=3);let Q,ot,ct,_t;if(Y){const ze=li[Y];Q=ze.vertexShader,ot=ze.fragmentShader}else Q=T.vertexShader,ot=T.fragmentShader,c.update(T),ct=c.getVertexShaderID(T),_t=c.getFragmentShaderID(T);const Et=i.getRenderTarget(),ft=G.isInstancedMesh===!0,kt=G.isBatchedMesh===!0,Lt=!!T.map,Xt=!!T.matcap,J=!!H,ce=!!T.aoMap,bt=!!T.lightMap,at=!!T.bumpMap,lt=!!T.normalMap,qt=!!T.displacementMap,At=!!T.emissiveMap,L=!!T.metalnessMap,N=!!T.roughnessMap,K=T.anisotropy>0,ut=T.clearcoat>0,ht=T.iridescence>0,dt=T.sheen>0,Dt=T.transmission>0,St=K&&!!T.anisotropyMap,Rt=ut&&!!T.clearcoatMap,Bt=ut&&!!T.clearcoatNormalMap,Jt=ut&&!!T.clearcoatRoughnessMap,mt=ht&&!!T.iridescenceMap,fe=ht&&!!T.iridescenceThicknessMap,ee=dt&&!!T.sheenColorMap,Vt=dt&&!!T.sheenRoughnessMap,Ut=!!T.specularMap,Pt=!!T.specularColorMap,Qt=!!T.specularIntensityMap,ue=Dt&&!!T.transmissionMap,Me=Dt&&!!T.thicknessMap,jt=!!T.gradientMap,gt=!!T.alphaMap,W=T.alphaTest>0,Tt=!!T.alphaHash,Mt=!!T.extensions,zt=!!z.attributes.uv1,It=!!z.attributes.uv2,pe=!!z.attributes.uv3;let me=qi;return T.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(me=i.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:T.type,shaderName:T.name,vertexShader:Q,fragmentShader:ot,defines:T.defines,customVertexShaderID:ct,customFragmentShaderID:_t,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:kt,instancing:ft,instancingColor:ft&&G.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Et===null?i.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:Ci,map:Lt,matcap:Xt,envMap:J,envMapMode:J&&H.mapping,envMapCubeUVHeight:j,aoMap:ce,lightMap:bt,bumpMap:at,normalMap:lt,displacementMap:f&&qt,emissiveMap:At,normalMapObjectSpace:lt&&T.normalMapType===Fm,normalMapTangentSpace:lt&&T.normalMapType===Pd,metalnessMap:L,roughnessMap:N,anisotropy:K,anisotropyMap:St,clearcoat:ut,clearcoatMap:Rt,clearcoatNormalMap:Bt,clearcoatRoughnessMap:Jt,iridescence:ht,iridescenceMap:mt,iridescenceThicknessMap:fe,sheen:dt,sheenColorMap:ee,sheenRoughnessMap:Vt,specularMap:Ut,specularColorMap:Pt,specularIntensityMap:Qt,transmission:Dt,transmissionMap:ue,thicknessMap:Me,gradientMap:jt,opaque:T.transparent===!1&&T.blending===ir,alphaMap:gt,alphaTest:W,alphaHash:Tt,combine:T.combine,mapUv:Lt&&x(T.map.channel),aoMapUv:ce&&x(T.aoMap.channel),lightMapUv:bt&&x(T.lightMap.channel),bumpMapUv:at&&x(T.bumpMap.channel),normalMapUv:lt&&x(T.normalMap.channel),displacementMapUv:qt&&x(T.displacementMap.channel),emissiveMapUv:At&&x(T.emissiveMap.channel),metalnessMapUv:L&&x(T.metalnessMap.channel),roughnessMapUv:N&&x(T.roughnessMap.channel),anisotropyMapUv:St&&x(T.anisotropyMap.channel),clearcoatMapUv:Rt&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:Bt&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Jt&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&x(T.sheenRoughnessMap.channel),specularMapUv:Ut&&x(T.specularMap.channel),specularColorMapUv:Pt&&x(T.specularColorMap.channel),specularIntensityMapUv:Qt&&x(T.specularIntensityMap.channel),transmissionMapUv:ue&&x(T.transmissionMap.channel),thicknessMapUv:Me&&x(T.thicknessMap.channel),alphaMapUv:gt&&x(T.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(lt||K),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:zt,vertexUv2s:It,vertexUv3s:pe,pointsUvs:G.isPoints===!0&&!!z.attributes.uv&&(Lt||gt),fog:!!U,useFog:T.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:G.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:rt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:me,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Lt&&T.map.isVideoTexture===!0&&ve.getTransfer(T.map.colorSpace)===Ae,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ti,flipSided:T.side===yn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:Mt&&T.extensions.derivatives===!0,extensionFragDepth:Mt&&T.extensions.fragDepth===!0,extensionDrawBuffers:Mt&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:Mt&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Mt&&T.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()}}function p(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const P in T.defines)S.push(P),S.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(b(S,T),M(S,T),S.push(i.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function b(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function M(T,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),T.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),T.push(o.mask)}function w(T){const S=v[T.type];let P;if(S){const O=li[S];P=ra.clone(O.uniforms)}else P=T.uniforms;return P}function A(T,S){let P;for(let O=0,G=l.length;O<G;O++){const U=l[O];if(U.cacheKey===S){P=U,++P.usedTimes;break}}return P===void 0&&(P=new Tx(i,S,T,r),l.push(P)),P}function R(T){if(--T.usedTimes===0){const S=l.indexOf(T);l[S]=l[l.length-1],l.pop(),T.destroy()}}function C(T){c.remove(T)}function D(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:w,acquireProgram:A,releaseProgram:R,releaseShaderCache:C,programs:l,dispose:D}}function Cx(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Rx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function kh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Bh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,f,m,v,x,g){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:f,material:m,groupOrder:v,renderOrder:d.renderOrder,z:x,group:g},i[t]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=m,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=x,p.group=g),t++,p}function o(d,f,m,v,x,g){const p=a(d,f,m,v,x,g);m.transmission>0?n.push(p):m.transparent===!0?s.push(p):e.push(p)}function c(d,f,m,v,x,g){const p=a(d,f,m,v,x,g);m.transmission>0?n.unshift(p):m.transparent===!0?s.unshift(p):e.unshift(p)}function l(d,f){e.length>1&&e.sort(d||Rx),n.length>1&&n.sort(f||kh),s.length>1&&s.sort(f||kh)}function h(){for(let d=t,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Px(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Bh,i.set(n,[a])):s>=r.length?(a=new Bh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Nx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new q,color:new te};break;case"SpotLight":e={position:new q,direction:new q,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new q,halfWidth:new q,halfHeight:new q};break}return i[t.id]=e,e}}}function Dx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Lx=0;function Ix(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Ox(i,t){const e=new Nx,n=Dx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new q);const r=new q,a=new De,o=new De;function c(h,d){let f=0,m=0,v=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let x=0,g=0,p=0,b=0,M=0,w=0,A=0,R=0,C=0,D=0,T=0;h.sort(Ix);const S=d===!0?Math.PI:1;for(let O=0,G=h.length;O<G;O++){const U=h[O],z=U.color,k=U.intensity,H=U.distance,j=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=z.r*k*S,m+=z.g*k*S,v+=z.b*k*S;else if(U.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(U.sh.coefficients[Y],k);T++}else if(U.isDirectionalLight){const Y=e.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity*S),U.castShadow){const $=U.shadow,st=n.get(U);st.shadowBias=$.bias,st.shadowNormalBias=$.normalBias,st.shadowRadius=$.radius,st.shadowMapSize=$.mapSize,s.directionalShadow[x]=st,s.directionalShadowMap[x]=j,s.directionalShadowMatrix[x]=U.shadow.matrix,w++}s.directional[x]=Y,x++}else if(U.isSpotLight){const Y=e.get(U);Y.position.setFromMatrixPosition(U.matrixWorld),Y.color.copy(z).multiplyScalar(k*S),Y.distance=H,Y.coneCos=Math.cos(U.angle),Y.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Y.decay=U.decay,s.spot[p]=Y;const $=U.shadow;if(U.map&&(s.spotLightMap[C]=U.map,C++,$.updateMatrices(U),U.castShadow&&D++),s.spotLightMatrix[p]=$.matrix,U.castShadow){const st=n.get(U);st.shadowBias=$.bias,st.shadowNormalBias=$.normalBias,st.shadowRadius=$.radius,st.shadowMapSize=$.mapSize,s.spotShadow[p]=st,s.spotShadowMap[p]=j,R++}p++}else if(U.isRectAreaLight){const Y=e.get(U);Y.color.copy(z).multiplyScalar(k),Y.halfWidth.set(U.width*.5,0,0),Y.halfHeight.set(0,U.height*.5,0),s.rectArea[b]=Y,b++}else if(U.isPointLight){const Y=e.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity*S),Y.distance=U.distance,Y.decay=U.decay,U.castShadow){const $=U.shadow,st=n.get(U);st.shadowBias=$.bias,st.shadowNormalBias=$.normalBias,st.shadowRadius=$.radius,st.shadowMapSize=$.mapSize,st.shadowCameraNear=$.camera.near,st.shadowCameraFar=$.camera.far,s.pointShadow[g]=st,s.pointShadowMap[g]=j,s.pointShadowMatrix[g]=U.shadow.matrix,A++}s.point[g]=Y,g++}else if(U.isHemisphereLight){const Y=e.get(U);Y.skyColor.copy(U.color).multiplyScalar(k*S),Y.groundColor.copy(U.groundColor).multiplyScalar(k*S),s.hemi[M]=Y,M++}}b>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=yt.LTC_FLOAT_1,s.rectAreaLTC2=yt.LTC_FLOAT_2):(s.rectAreaLTC1=yt.LTC_HALF_1,s.rectAreaLTC2=yt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=yt.LTC_FLOAT_1,s.rectAreaLTC2=yt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=yt.LTC_HALF_1,s.rectAreaLTC2=yt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=v;const P=s.hash;(P.directionalLength!==x||P.pointLength!==g||P.spotLength!==p||P.rectAreaLength!==b||P.hemiLength!==M||P.numDirectionalShadows!==w||P.numPointShadows!==A||P.numSpotShadows!==R||P.numSpotMaps!==C||P.numLightProbes!==T)&&(s.directional.length=x,s.spot.length=p,s.rectArea.length=b,s.point.length=g,s.hemi.length=M,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=A,s.pointShadowMap.length=A,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=A,s.spotLightMatrix.length=R+C-D,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=T,P.directionalLength=x,P.pointLength=g,P.spotLength=p,P.rectAreaLength=b,P.hemiLength=M,P.numDirectionalShadows=w,P.numPointShadows=A,P.numSpotShadows=R,P.numSpotMaps=C,P.numLightProbes=T,s.version=Lx++)}function l(h,d){let f=0,m=0,v=0,x=0,g=0;const p=d.matrixWorldInverse;for(let b=0,M=h.length;b<M;b++){const w=h[b];if(w.isDirectionalLight){const A=s.directional[f];A.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),f++}else if(w.isSpotLight){const A=s.spot[v];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),v++}else if(w.isRectAreaLight){const A=s.rectArea[x];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(p),o.identity(),a.copy(w.matrixWorld),a.premultiply(p),o.extractRotation(a),A.halfWidth.set(w.width*.5,0,0),A.halfHeight.set(0,w.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),x++}else if(w.isPointLight){const A=s.point[m];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(p),m++}else if(w.isHemisphereLight){const A=s.hemi[g];A.direction.setFromMatrixPosition(w.matrixWorld),A.direction.transformDirection(p),g++}}}return{setup:c,setupView:l,state:s}}function Vh(i,t){const e=new Ox(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(d){n.push(d)}function o(d){s.push(d)}function c(d){e.setup(n,d)}function l(d){e.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Ux(i,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let c;return o===void 0?(c=new Vh(i,t),e.set(r,[c])):a>=o.length?(c=new Vh(i,t),o.push(c)):c=o[a],c}function s(){e=new WeakMap}return{get:n,dispose:s}}class Fx extends Sr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Om,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class kx extends Sr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Bx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vx=`uniform sampler2D shadow_pass;
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
}`;function zx(i,t,e){let n=new il;const s=new Nt,r=new Nt,a=new tn,o=new Fx({depthPacking:Um}),c=new kx,l={},h=e.maxTextureSize,d={[Zi]:yn,[yn]:Zi,[Ti]:Ti},f=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:Bx,fragmentShader:Vx}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new An;v.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Dn(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xd;let p=this.type;this.render=function(R,C,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const T=i.getRenderTarget(),S=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),O=i.state;O.setBlending(wi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const G=p!==Si&&this.type===Si,U=p===Si&&this.type!==Si;for(let z=0,k=R.length;z<k;z++){const H=R[z],j=H.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);const Y=j.getFrameExtents();if(s.multiply(Y),r.copy(j.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,j.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,j.mapSize.y=r.y)),j.map===null||G===!0||U===!0){const st=this.type!==Si?{minFilter:gn,magFilter:gn}:{};j.map!==null&&j.map.dispose(),j.map=new ei(s.x,s.y,st),j.map.texture.name=H.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const $=j.getViewportCount();for(let st=0;st<$;st++){const rt=j.getViewport(st);a.set(r.x*rt.x,r.y*rt.y,r.x*rt.z,r.y*rt.w),O.viewport(a),j.updateMatrices(H,st),n=j.getFrustum(),w(C,D,j.camera,H,this.type)}j.isPointLightShadow!==!0&&this.type===Si&&b(j,D),j.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(T,S,P)};function b(R,C){const D=t.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ei(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(C,null,D,f,x,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(C,null,D,m,x,null)}function M(R,C,D,T){let S=null;const P=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)S=P;else if(S=D.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const O=S.uuid,G=C.uuid;let U=l[O];U===void 0&&(U={},l[O]=U);let z=U[G];z===void 0&&(z=S.clone(),U[G]=z,C.addEventListener("dispose",A)),S=z}if(S.visible=C.visible,S.wireframe=C.wireframe,T===Si?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:d[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const O=i.properties.get(S);O.light=D}return S}function w(R,C,D,T,S){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===Si)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const G=t.update(R),U=R.material;if(Array.isArray(U)){const z=G.groups;for(let k=0,H=z.length;k<H;k++){const j=z[k],Y=U[j.materialIndex];if(Y&&Y.visible){const $=M(R,Y,T,S);R.onBeforeShadow(i,R,C,D,G,$,j),i.renderBufferDirect(D,null,G,$,R,j),R.onAfterShadow(i,R,C,D,G,$,j)}}}else if(U.visible){const z=M(R,U,T,S);R.onBeforeShadow(i,R,C,D,G,z,null),i.renderBufferDirect(D,null,G,z,R,null),R.onAfterShadow(i,R,C,D,G,z,null)}}const O=R.children;for(let G=0,U=O.length;G<U;G++)w(O[G],C,D,T,S)}function A(R){R.target.removeEventListener("dispose",A);for(const D in l){const T=l[D],S=R.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}function Gx(i,t,e){const n=e.isWebGL2;function s(){let W=!1;const Tt=new tn;let Mt=null;const zt=new tn(0,0,0,0);return{setMask:function(It){Mt!==It&&!W&&(i.colorMask(It,It,It,It),Mt=It)},setLocked:function(It){W=It},setClear:function(It,pe,me,Le,ze){ze===!0&&(It*=Le,pe*=Le,me*=Le),Tt.set(It,pe,me,Le),zt.equals(Tt)===!1&&(i.clearColor(It,pe,me,Le),zt.copy(Tt))},reset:function(){W=!1,Mt=null,zt.set(-1,0,0,0)}}}function r(){let W=!1,Tt=null,Mt=null,zt=null;return{setTest:function(It){It?kt(i.DEPTH_TEST):Lt(i.DEPTH_TEST)},setMask:function(It){Tt!==It&&!W&&(i.depthMask(It),Tt=It)},setFunc:function(It){if(Mt!==It){switch(It){case hm:i.depthFunc(i.NEVER);break;case dm:i.depthFunc(i.ALWAYS);break;case fm:i.depthFunc(i.LESS);break;case Qo:i.depthFunc(i.LEQUAL);break;case pm:i.depthFunc(i.EQUAL);break;case mm:i.depthFunc(i.GEQUAL);break;case gm:i.depthFunc(i.GREATER);break;case _m:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Mt=It}},setLocked:function(It){W=It},setClear:function(It){zt!==It&&(i.clearDepth(It),zt=It)},reset:function(){W=!1,Tt=null,Mt=null,zt=null}}}function a(){let W=!1,Tt=null,Mt=null,zt=null,It=null,pe=null,me=null,Le=null,ze=null;return{setTest:function(ge){W||(ge?kt(i.STENCIL_TEST):Lt(i.STENCIL_TEST))},setMask:function(ge){Tt!==ge&&!W&&(i.stencilMask(ge),Tt=ge)},setFunc:function(ge,Fe,In){(Mt!==ge||zt!==Fe||It!==In)&&(i.stencilFunc(ge,Fe,In),Mt=ge,zt=Fe,It=In)},setOp:function(ge,Fe,In){(pe!==ge||me!==Fe||Le!==In)&&(i.stencilOp(ge,Fe,In),pe=ge,me=Fe,Le=In)},setLocked:function(ge){W=ge},setClear:function(ge){ze!==ge&&(i.clearStencil(ge),ze=ge)},reset:function(){W=!1,Tt=null,Mt=null,zt=null,It=null,pe=null,me=null,Le=null,ze=null}}}const o=new s,c=new r,l=new a,h=new WeakMap,d=new WeakMap;let f={},m={},v=new WeakMap,x=[],g=null,p=!1,b=null,M=null,w=null,A=null,R=null,C=null,D=null,T=new te(0,0,0),S=0,P=!1,O=null,G=null,U=null,z=null,k=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,Y=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec($)[1]),j=Y>=1):$.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),j=Y>=2);let st=null,rt={};const Q=i.getParameter(i.SCISSOR_BOX),ot=i.getParameter(i.VIEWPORT),ct=new tn().fromArray(Q),_t=new tn().fromArray(ot);function Et(W,Tt,Mt,zt){const It=new Uint8Array(4),pe=i.createTexture();i.bindTexture(W,pe),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let me=0;me<Mt;me++)n&&(W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY)?i.texImage3D(Tt,0,i.RGBA,1,1,zt,0,i.RGBA,i.UNSIGNED_BYTE,It):i.texImage2D(Tt+me,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,It);return pe}const ft={};ft[i.TEXTURE_2D]=Et(i.TEXTURE_2D,i.TEXTURE_2D,1),ft[i.TEXTURE_CUBE_MAP]=Et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ft[i.TEXTURE_2D_ARRAY]=Et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ft[i.TEXTURE_3D]=Et(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),kt(i.DEPTH_TEST),c.setFunc(Qo),At(!1),L(Mu),kt(i.CULL_FACE),lt(wi);function kt(W){f[W]!==!0&&(i.enable(W),f[W]=!0)}function Lt(W){f[W]!==!1&&(i.disable(W),f[W]=!1)}function Xt(W,Tt){return m[W]!==Tt?(i.bindFramebuffer(W,Tt),m[W]=Tt,n&&(W===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Tt),W===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Tt)),!0):!1}function J(W,Tt){let Mt=x,zt=!1;if(W)if(Mt=v.get(Tt),Mt===void 0&&(Mt=[],v.set(Tt,Mt)),W.isWebGLMultipleRenderTargets){const It=W.texture;if(Mt.length!==It.length||Mt[0]!==i.COLOR_ATTACHMENT0){for(let pe=0,me=It.length;pe<me;pe++)Mt[pe]=i.COLOR_ATTACHMENT0+pe;Mt.length=It.length,zt=!0}}else Mt[0]!==i.COLOR_ATTACHMENT0&&(Mt[0]=i.COLOR_ATTACHMENT0,zt=!0);else Mt[0]!==i.BACK&&(Mt[0]=i.BACK,zt=!0);zt&&(e.isWebGL2?i.drawBuffers(Mt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Mt))}function ce(W){return g!==W?(i.useProgram(W),g=W,!0):!1}const bt={[cs]:i.FUNC_ADD,[$p]:i.FUNC_SUBTRACT,[Kp]:i.FUNC_REVERSE_SUBTRACT};if(n)bt[wu]=i.MIN,bt[bu]=i.MAX;else{const W=t.get("EXT_blend_minmax");W!==null&&(bt[wu]=W.MIN_EXT,bt[bu]=W.MAX_EXT)}const at={[Jp]:i.ZERO,[Qp]:i.ONE,[tm]:i.SRC_COLOR,[Nc]:i.SRC_ALPHA,[om]:i.SRC_ALPHA_SATURATE,[sm]:i.DST_COLOR,[nm]:i.DST_ALPHA,[em]:i.ONE_MINUS_SRC_COLOR,[Dc]:i.ONE_MINUS_SRC_ALPHA,[rm]:i.ONE_MINUS_DST_COLOR,[im]:i.ONE_MINUS_DST_ALPHA,[am]:i.CONSTANT_COLOR,[cm]:i.ONE_MINUS_CONSTANT_COLOR,[lm]:i.CONSTANT_ALPHA,[um]:i.ONE_MINUS_CONSTANT_ALPHA};function lt(W,Tt,Mt,zt,It,pe,me,Le,ze,ge){if(W===wi){p===!0&&(Lt(i.BLEND),p=!1);return}if(p===!1&&(kt(i.BLEND),p=!0),W!==Zp){if(W!==b||ge!==P){if((M!==cs||R!==cs)&&(i.blendEquation(i.FUNC_ADD),M=cs,R=cs),ge)switch(W){case ir:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xr:i.blendFunc(i.ONE,i.ONE);break;case Tu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Eu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case ir:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Tu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Eu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}w=null,A=null,C=null,D=null,T.set(0,0,0),S=0,b=W,P=ge}return}It=It||Tt,pe=pe||Mt,me=me||zt,(Tt!==M||It!==R)&&(i.blendEquationSeparate(bt[Tt],bt[It]),M=Tt,R=It),(Mt!==w||zt!==A||pe!==C||me!==D)&&(i.blendFuncSeparate(at[Mt],at[zt],at[pe],at[me]),w=Mt,A=zt,C=pe,D=me),(Le.equals(T)===!1||ze!==S)&&(i.blendColor(Le.r,Le.g,Le.b,ze),T.copy(Le),S=ze),b=W,P=!1}function qt(W,Tt){W.side===Ti?Lt(i.CULL_FACE):kt(i.CULL_FACE);let Mt=W.side===yn;Tt&&(Mt=!Mt),At(Mt),W.blending===ir&&W.transparent===!1?lt(wi):lt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),o.setMask(W.colorWrite);const zt=W.stencilWrite;l.setTest(zt),zt&&(l.setMask(W.stencilWriteMask),l.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),l.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),K(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?kt(i.SAMPLE_ALPHA_TO_COVERAGE):Lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function At(W){O!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),O=W)}function L(W){W!==qp?(kt(i.CULL_FACE),W!==G&&(W===Mu?i.cullFace(i.BACK):W===jp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Lt(i.CULL_FACE),G=W}function N(W){W!==U&&(j&&i.lineWidth(W),U=W)}function K(W,Tt,Mt){W?(kt(i.POLYGON_OFFSET_FILL),(z!==Tt||k!==Mt)&&(i.polygonOffset(Tt,Mt),z=Tt,k=Mt)):Lt(i.POLYGON_OFFSET_FILL)}function ut(W){W?kt(i.SCISSOR_TEST):Lt(i.SCISSOR_TEST)}function ht(W){W===void 0&&(W=i.TEXTURE0+H-1),st!==W&&(i.activeTexture(W),st=W)}function dt(W,Tt,Mt){Mt===void 0&&(st===null?Mt=i.TEXTURE0+H-1:Mt=st);let zt=rt[Mt];zt===void 0&&(zt={type:void 0,texture:void 0},rt[Mt]=zt),(zt.type!==W||zt.texture!==Tt)&&(st!==Mt&&(i.activeTexture(Mt),st=Mt),i.bindTexture(W,Tt||ft[W]),zt.type=W,zt.texture=Tt)}function Dt(){const W=rt[st];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function St(){try{i.compressedTexImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Rt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Bt(){try{i.texSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Jt(){try{i.texSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ee(){try{i.texStorage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Vt(){try{i.texStorage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ut(){try{i.texImage2D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Pt(){try{i.texImage3D.apply(i,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Qt(W){ct.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),ct.copy(W))}function ue(W){_t.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),_t.copy(W))}function Me(W,Tt){let Mt=d.get(Tt);Mt===void 0&&(Mt=new WeakMap,d.set(Tt,Mt));let zt=Mt.get(W);zt===void 0&&(zt=i.getUniformBlockIndex(Tt,W.name),Mt.set(W,zt))}function jt(W,Tt){const zt=d.get(Tt).get(W);h.get(Tt)!==zt&&(i.uniformBlockBinding(Tt,zt,W.__bindingPointIndex),h.set(Tt,zt))}function gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},st=null,rt={},m={},v=new WeakMap,x=[],g=null,p=!1,b=null,M=null,w=null,A=null,R=null,C=null,D=null,T=new te(0,0,0),S=0,P=!1,O=null,G=null,U=null,z=null,k=null,ct.set(0,0,i.canvas.width,i.canvas.height),_t.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:kt,disable:Lt,bindFramebuffer:Xt,drawBuffers:J,useProgram:ce,setBlending:lt,setMaterial:qt,setFlipSided:At,setCullFace:L,setLineWidth:N,setPolygonOffset:K,setScissorTest:ut,activeTexture:ht,bindTexture:dt,unbindTexture:Dt,compressedTexImage2D:St,compressedTexImage3D:Rt,texImage2D:Ut,texImage3D:Pt,updateUBOMapping:Me,uniformBlockBinding:jt,texStorage2D:ee,texStorage3D:Vt,texSubImage2D:Bt,texSubImage3D:Jt,compressedTexSubImage2D:mt,compressedTexSubImage3D:fe,scissor:Qt,viewport:ue,reset:gt}}function Hx(i,t,e,n,s,r,a){const o=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,N){return m?new OffscreenCanvas(L,N):sa("canvas")}function x(L,N,K,ut){let ht=1;if((L.width>ut||L.height>ut)&&(ht=ut/Math.max(L.width,L.height)),ht<1||N===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const dt=N?Bc:Math.floor,Dt=dt(ht*L.width),St=dt(ht*L.height);d===void 0&&(d=v(Dt,St));const Rt=K?v(Dt,St):d;return Rt.width=Dt,Rt.height=St,Rt.getContext("2d").drawImage(L,0,0,Dt,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Dt+"x"+St+")."),Rt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function g(L){return nh(L.width)&&nh(L.height)}function p(L){return o?!1:L.wrapS!==Kn||L.wrapT!==Kn||L.minFilter!==gn&&L.minFilter!==kn}function b(L,N){return L.generateMipmaps&&N&&L.minFilter!==gn&&L.minFilter!==kn}function M(L){i.generateMipmap(L)}function w(L,N,K,ut,ht=!1){if(o===!1)return N;if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let dt=N;if(N===i.RED&&(K===i.FLOAT&&(dt=i.R32F),K===i.HALF_FLOAT&&(dt=i.R16F),K===i.UNSIGNED_BYTE&&(dt=i.R8)),N===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(dt=i.R8UI),K===i.UNSIGNED_SHORT&&(dt=i.R16UI),K===i.UNSIGNED_INT&&(dt=i.R32UI),K===i.BYTE&&(dt=i.R8I),K===i.SHORT&&(dt=i.R16I),K===i.INT&&(dt=i.R32I)),N===i.RG&&(K===i.FLOAT&&(dt=i.RG32F),K===i.HALF_FLOAT&&(dt=i.RG16F),K===i.UNSIGNED_BYTE&&(dt=i.RG8)),N===i.RGBA){const Dt=ht?ta:ve.getTransfer(ut);K===i.FLOAT&&(dt=i.RGBA32F),K===i.HALF_FLOAT&&(dt=i.RGBA16F),K===i.UNSIGNED_BYTE&&(dt=Dt===Ae?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(dt=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(dt=i.RGB5_A1)}return(dt===i.R16F||dt===i.R32F||dt===i.RG16F||dt===i.RG32F||dt===i.RGBA16F||dt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function A(L,N,K){return b(L,K)===!0||L.isFramebufferTexture&&L.minFilter!==gn&&L.minFilter!==kn?Math.log2(Math.max(N.width,N.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?N.mipmaps.length:1}function R(L){return L===gn||L===Au||L===Za?i.NEAREST:i.LINEAR}function C(L){const N=L.target;N.removeEventListener("dispose",C),T(N),N.isVideoTexture&&h.delete(N)}function D(L){const N=L.target;N.removeEventListener("dispose",D),P(N)}function T(L){const N=n.get(L);if(N.__webglInit===void 0)return;const K=L.source,ut=f.get(K);if(ut){const ht=ut[N.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&S(L),Object.keys(ut).length===0&&f.delete(K)}n.remove(L)}function S(L){const N=n.get(L);i.deleteTexture(N.__webglTexture);const K=L.source,ut=f.get(K);delete ut[N.__cacheKey],a.memory.textures--}function P(L){const N=L.texture,K=n.get(L),ut=n.get(N);if(ut.__webglTexture!==void 0&&(i.deleteTexture(ut.__webglTexture),a.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(K.__webglFramebuffer[ht]))for(let dt=0;dt<K.__webglFramebuffer[ht].length;dt++)i.deleteFramebuffer(K.__webglFramebuffer[ht][dt]);else i.deleteFramebuffer(K.__webglFramebuffer[ht]);K.__webglDepthbuffer&&i.deleteRenderbuffer(K.__webglDepthbuffer[ht])}else{if(Array.isArray(K.__webglFramebuffer))for(let ht=0;ht<K.__webglFramebuffer.length;ht++)i.deleteFramebuffer(K.__webglFramebuffer[ht]);else i.deleteFramebuffer(K.__webglFramebuffer);if(K.__webglDepthbuffer&&i.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&i.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let ht=0;ht<K.__webglColorRenderbuffer.length;ht++)K.__webglColorRenderbuffer[ht]&&i.deleteRenderbuffer(K.__webglColorRenderbuffer[ht]);K.__webglDepthRenderbuffer&&i.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let ht=0,dt=N.length;ht<dt;ht++){const Dt=n.get(N[ht]);Dt.__webglTexture&&(i.deleteTexture(Dt.__webglTexture),a.memory.textures--),n.remove(N[ht])}n.remove(N),n.remove(L)}let O=0;function G(){O=0}function U(){const L=O;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),O+=1,L}function z(L){const N=[];return N.push(L.wrapS),N.push(L.wrapT),N.push(L.wrapR||0),N.push(L.magFilter),N.push(L.minFilter),N.push(L.anisotropy),N.push(L.internalFormat),N.push(L.format),N.push(L.type),N.push(L.generateMipmaps),N.push(L.premultiplyAlpha),N.push(L.flipY),N.push(L.unpackAlignment),N.push(L.colorSpace),N.join()}function k(L,N){const K=n.get(L);if(L.isVideoTexture&&qt(L),L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){const ut=L.image;if(ut===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(K,L,N);return}}e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+N)}function H(L,N){const K=n.get(L);if(L.version>0&&K.__version!==L.version){ct(K,L,N);return}e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+N)}function j(L,N){const K=n.get(L);if(L.version>0&&K.__version!==L.version){ct(K,L,N);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+N)}function Y(L,N){const K=n.get(L);if(L.version>0&&K.__version!==L.version){_t(K,L,N);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+N)}const $={[Oc]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[Uc]:i.MIRRORED_REPEAT},st={[gn]:i.NEAREST,[Au]:i.NEAREST_MIPMAP_NEAREST,[Za]:i.NEAREST_MIPMAP_LINEAR,[kn]:i.LINEAR,[bm]:i.LINEAR_MIPMAP_NEAREST,[qr]:i.LINEAR_MIPMAP_LINEAR},rt={[km]:i.NEVER,[Wm]:i.ALWAYS,[Bm]:i.LESS,[Nd]:i.LEQUAL,[Vm]:i.EQUAL,[Hm]:i.GEQUAL,[zm]:i.GREATER,[Gm]:i.NOTEQUAL};function Q(L,N,K){if(K?(i.texParameteri(L,i.TEXTURE_WRAP_S,$[N.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,$[N.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,$[N.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,st[N.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,st[N.minFilter])):(i.texParameteri(L,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(L,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(N.wrapS!==Kn||N.wrapT!==Kn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(L,i.TEXTURE_MAG_FILTER,R(N.magFilter)),i.texParameteri(L,i.TEXTURE_MIN_FILTER,R(N.minFilter)),N.minFilter!==gn&&N.minFilter!==kn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),N.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,rt[N.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ut=t.get("EXT_texture_filter_anisotropic");if(N.magFilter===gn||N.minFilter!==Za&&N.minFilter!==qr||N.type===Xi&&t.has("OES_texture_float_linear")===!1||o===!1&&N.type===bi&&t.has("OES_texture_half_float_linear")===!1)return;(N.anisotropy>1||n.get(N).__currentAnisotropy)&&(i.texParameterf(L,ut.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(N.anisotropy,s.getMaxAnisotropy())),n.get(N).__currentAnisotropy=N.anisotropy)}}function ot(L,N){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,N.addEventListener("dispose",C));const ut=N.source;let ht=f.get(ut);ht===void 0&&(ht={},f.set(ut,ht));const dt=z(N);if(dt!==L.__cacheKey){ht[dt]===void 0&&(ht[dt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,K=!0),ht[dt].usedTimes++;const Dt=ht[L.__cacheKey];Dt!==void 0&&(ht[L.__cacheKey].usedTimes--,Dt.usedTimes===0&&S(N)),L.__cacheKey=dt,L.__webglTexture=ht[dt].texture}return K}function ct(L,N,K){let ut=i.TEXTURE_2D;(N.isDataArrayTexture||N.isCompressedArrayTexture)&&(ut=i.TEXTURE_2D_ARRAY),N.isData3DTexture&&(ut=i.TEXTURE_3D);const ht=ot(L,N),dt=N.source;e.bindTexture(ut,L.__webglTexture,i.TEXTURE0+K);const Dt=n.get(dt);if(dt.version!==Dt.__version||ht===!0){e.activeTexture(i.TEXTURE0+K);const St=ve.getPrimaries(ve.workingColorSpace),Rt=N.colorSpace===Vn?null:ve.getPrimaries(N.colorSpace),Bt=N.colorSpace===Vn||St===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,N.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,N.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);const Jt=p(N)&&g(N.image)===!1;let mt=x(N.image,Jt,!1,s.maxTextureSize);mt=At(N,mt);const fe=g(mt)||o,ee=r.convert(N.format,N.colorSpace);let Vt=r.convert(N.type),Ut=w(N.internalFormat,ee,Vt,N.colorSpace,N.isVideoTexture);Q(ut,N,fe);let Pt;const Qt=N.mipmaps,ue=o&&N.isVideoTexture!==!0&&Ut!==Cd,Me=Dt.__version===void 0||ht===!0,jt=A(N,mt,fe);if(N.isDepthTexture)Ut=i.DEPTH_COMPONENT,o?N.type===Xi?Ut=i.DEPTH_COMPONENT32F:N.type===Wi?Ut=i.DEPTH_COMPONENT24:N.type===ds?Ut=i.DEPTH24_STENCIL8:Ut=i.DEPTH_COMPONENT16:N.type===Xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),N.format===fs&&Ut===i.DEPTH_COMPONENT&&N.type!==tl&&N.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),N.type=Wi,Vt=r.convert(N.type)),N.format===ur&&Ut===i.DEPTH_COMPONENT&&(Ut=i.DEPTH_STENCIL,N.type!==ds&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),N.type=ds,Vt=r.convert(N.type))),Me&&(ue?e.texStorage2D(i.TEXTURE_2D,1,Ut,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,Ut,mt.width,mt.height,0,ee,Vt,null));else if(N.isDataTexture)if(Qt.length>0&&fe){ue&&Me&&e.texStorage2D(i.TEXTURE_2D,jt,Ut,Qt[0].width,Qt[0].height);for(let gt=0,W=Qt.length;gt<W;gt++)Pt=Qt[gt],ue?e.texSubImage2D(i.TEXTURE_2D,gt,0,0,Pt.width,Pt.height,ee,Vt,Pt.data):e.texImage2D(i.TEXTURE_2D,gt,Ut,Pt.width,Pt.height,0,ee,Vt,Pt.data);N.generateMipmaps=!1}else ue?(Me&&e.texStorage2D(i.TEXTURE_2D,jt,Ut,mt.width,mt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt.width,mt.height,ee,Vt,mt.data)):e.texImage2D(i.TEXTURE_2D,0,Ut,mt.width,mt.height,0,ee,Vt,mt.data);else if(N.isCompressedTexture)if(N.isCompressedArrayTexture){ue&&Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,jt,Ut,Qt[0].width,Qt[0].height,mt.depth);for(let gt=0,W=Qt.length;gt<W;gt++)Pt=Qt[gt],N.format!==Jn?ee!==null?ue?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,Pt.width,Pt.height,mt.depth,ee,Pt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,gt,Ut,Pt.width,Pt.height,mt.depth,0,Pt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?e.texSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,Pt.width,Pt.height,mt.depth,ee,Vt,Pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,gt,Ut,Pt.width,Pt.height,mt.depth,0,ee,Vt,Pt.data)}else{ue&&Me&&e.texStorage2D(i.TEXTURE_2D,jt,Ut,Qt[0].width,Qt[0].height);for(let gt=0,W=Qt.length;gt<W;gt++)Pt=Qt[gt],N.format!==Jn?ee!==null?ue?e.compressedTexSubImage2D(i.TEXTURE_2D,gt,0,0,Pt.width,Pt.height,ee,Pt.data):e.compressedTexImage2D(i.TEXTURE_2D,gt,Ut,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?e.texSubImage2D(i.TEXTURE_2D,gt,0,0,Pt.width,Pt.height,ee,Vt,Pt.data):e.texImage2D(i.TEXTURE_2D,gt,Ut,Pt.width,Pt.height,0,ee,Vt,Pt.data)}else if(N.isDataArrayTexture)ue?(Me&&e.texStorage3D(i.TEXTURE_2D_ARRAY,jt,Ut,mt.width,mt.height,mt.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,ee,Vt,mt.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,mt.width,mt.height,mt.depth,0,ee,Vt,mt.data);else if(N.isData3DTexture)ue?(Me&&e.texStorage3D(i.TEXTURE_3D,jt,Ut,mt.width,mt.height,mt.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,ee,Vt,mt.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,mt.width,mt.height,mt.depth,0,ee,Vt,mt.data);else if(N.isFramebufferTexture){if(Me)if(ue)e.texStorage2D(i.TEXTURE_2D,jt,Ut,mt.width,mt.height);else{let gt=mt.width,W=mt.height;for(let Tt=0;Tt<jt;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,Ut,gt,W,0,ee,Vt,null),gt>>=1,W>>=1}}else if(Qt.length>0&&fe){ue&&Me&&e.texStorage2D(i.TEXTURE_2D,jt,Ut,Qt[0].width,Qt[0].height);for(let gt=0,W=Qt.length;gt<W;gt++)Pt=Qt[gt],ue?e.texSubImage2D(i.TEXTURE_2D,gt,0,0,ee,Vt,Pt):e.texImage2D(i.TEXTURE_2D,gt,Ut,ee,Vt,Pt);N.generateMipmaps=!1}else ue?(Me&&e.texStorage2D(i.TEXTURE_2D,jt,Ut,mt.width,mt.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,ee,Vt,mt)):e.texImage2D(i.TEXTURE_2D,0,Ut,ee,Vt,mt);b(N,fe)&&M(ut),Dt.__version=dt.version,N.onUpdate&&N.onUpdate(N)}L.__version=N.version}function _t(L,N,K){if(N.image.length!==6)return;const ut=ot(L,N),ht=N.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+K);const dt=n.get(ht);if(ht.version!==dt.__version||ut===!0){e.activeTexture(i.TEXTURE0+K);const Dt=ve.getPrimaries(ve.workingColorSpace),St=N.colorSpace===Vn?null:ve.getPrimaries(N.colorSpace),Rt=N.colorSpace===Vn||Dt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,N.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,N.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const Bt=N.isCompressedTexture||N.image[0].isCompressedTexture,Jt=N.image[0]&&N.image[0].isDataTexture,mt=[];for(let gt=0;gt<6;gt++)!Bt&&!Jt?mt[gt]=x(N.image[gt],!1,!0,s.maxCubemapSize):mt[gt]=Jt?N.image[gt].image:N.image[gt],mt[gt]=At(N,mt[gt]);const fe=mt[0],ee=g(fe)||o,Vt=r.convert(N.format,N.colorSpace),Ut=r.convert(N.type),Pt=w(N.internalFormat,Vt,Ut,N.colorSpace),Qt=o&&N.isVideoTexture!==!0,ue=dt.__version===void 0||ut===!0;let Me=A(N,fe,ee);Q(i.TEXTURE_CUBE_MAP,N,ee);let jt;if(Bt){Qt&&ue&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Me,Pt,fe.width,fe.height);for(let gt=0;gt<6;gt++){jt=mt[gt].mipmaps;for(let W=0;W<jt.length;W++){const Tt=jt[W];N.format!==Jn?Vt!==null?Qt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,W,0,0,Tt.width,Tt.height,Vt,Tt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,W,Pt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,W,0,0,Tt.width,Tt.height,Vt,Ut,Tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,W,Pt,Tt.width,Tt.height,0,Vt,Ut,Tt.data)}}}else{jt=N.mipmaps,Qt&&ue&&(jt.length>0&&Me++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Me,Pt,mt[0].width,mt[0].height));for(let gt=0;gt<6;gt++)if(Jt){Qt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,mt[gt].width,mt[gt].height,Vt,Ut,mt[gt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Pt,mt[gt].width,mt[gt].height,0,Vt,Ut,mt[gt].data);for(let W=0;W<jt.length;W++){const Mt=jt[W].image[gt].image;Qt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,W+1,0,0,Mt.width,Mt.height,Vt,Ut,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,W+1,Pt,Mt.width,Mt.height,0,Vt,Ut,Mt.data)}}else{Qt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Vt,Ut,mt[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Pt,Vt,Ut,mt[gt]);for(let W=0;W<jt.length;W++){const Tt=jt[W];Qt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,W+1,0,0,Vt,Ut,Tt.image[gt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,W+1,Pt,Vt,Ut,Tt.image[gt])}}}b(N,ee)&&M(i.TEXTURE_CUBE_MAP),dt.__version=ht.version,N.onUpdate&&N.onUpdate(N)}L.__version=N.version}function Et(L,N,K,ut,ht,dt){const Dt=r.convert(K.format,K.colorSpace),St=r.convert(K.type),Rt=w(K.internalFormat,Dt,St,K.colorSpace);if(!n.get(N).__hasExternalTextures){const Jt=Math.max(1,N.width>>dt),mt=Math.max(1,N.height>>dt);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,dt,Rt,Jt,mt,N.depth,0,Dt,St,null):e.texImage2D(ht,dt,Rt,Jt,mt,0,Dt,St,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),lt(N)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ut,ht,n.get(K).__webglTexture,0,at(N)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ut,ht,n.get(K).__webglTexture,dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(L,N,K){if(i.bindRenderbuffer(i.RENDERBUFFER,L),N.depthBuffer&&!N.stencilBuffer){let ut=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(K||lt(N)){const ht=N.depthTexture;ht&&ht.isDepthTexture&&(ht.type===Xi?ut=i.DEPTH_COMPONENT32F:ht.type===Wi&&(ut=i.DEPTH_COMPONENT24));const dt=at(N);lt(N)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,ut,N.width,N.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,ut,N.width,N.height)}else i.renderbufferStorage(i.RENDERBUFFER,ut,N.width,N.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,L)}else if(N.depthBuffer&&N.stencilBuffer){const ut=at(N);K&&lt(N)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,i.DEPTH24_STENCIL8,N.width,N.height):lt(N)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,i.DEPTH24_STENCIL8,N.width,N.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,L)}else{const ut=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let ht=0;ht<ut.length;ht++){const dt=ut[ht],Dt=r.convert(dt.format,dt.colorSpace),St=r.convert(dt.type),Rt=w(dt.internalFormat,Dt,St,dt.colorSpace),Bt=at(N);K&&lt(N)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,Rt,N.width,N.height):lt(N)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Bt,Rt,N.width,N.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,N.width,N.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function kt(L,N){if(N&&N.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(N.depthTexture&&N.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(N.depthTexture).__webglTexture||N.depthTexture.image.width!==N.width||N.depthTexture.image.height!==N.height)&&(N.depthTexture.image.width=N.width,N.depthTexture.image.height=N.height,N.depthTexture.needsUpdate=!0),k(N.depthTexture,0);const ut=n.get(N.depthTexture).__webglTexture,ht=at(N);if(N.depthTexture.format===fs)lt(N)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ut,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ut,0);else if(N.depthTexture.format===ur)lt(N)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ut,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ut,0);else throw new Error("Unknown depthTexture format")}function Lt(L){const N=n.get(L),K=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!N.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");kt(N.__webglFramebuffer,L)}else if(K){N.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)e.bindFramebuffer(i.FRAMEBUFFER,N.__webglFramebuffer[ut]),N.__webglDepthbuffer[ut]=i.createRenderbuffer(),ft(N.__webglDepthbuffer[ut],L,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,N.__webglFramebuffer),N.__webglDepthbuffer=i.createRenderbuffer(),ft(N.__webglDepthbuffer,L,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(L,N,K){const ut=n.get(L);N!==void 0&&Et(ut.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Lt(L)}function J(L){const N=L.texture,K=n.get(L),ut=n.get(N);L.addEventListener("dispose",D),L.isWebGLMultipleRenderTargets!==!0&&(ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture()),ut.__version=N.version,a.memory.textures++);const ht=L.isWebGLCubeRenderTarget===!0,dt=L.isWebGLMultipleRenderTargets===!0,Dt=g(L)||o;if(ht){K.__webglFramebuffer=[];for(let St=0;St<6;St++)if(o&&N.mipmaps&&N.mipmaps.length>0){K.__webglFramebuffer[St]=[];for(let Rt=0;Rt<N.mipmaps.length;Rt++)K.__webglFramebuffer[St][Rt]=i.createFramebuffer()}else K.__webglFramebuffer[St]=i.createFramebuffer()}else{if(o&&N.mipmaps&&N.mipmaps.length>0){K.__webglFramebuffer=[];for(let St=0;St<N.mipmaps.length;St++)K.__webglFramebuffer[St]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(dt)if(s.drawBuffers){const St=L.texture;for(let Rt=0,Bt=St.length;Rt<Bt;Rt++){const Jt=n.get(St[Rt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&lt(L)===!1){const St=dt?N:[N];K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Rt=0;Rt<St.length;Rt++){const Bt=St[Rt];K.__webglColorRenderbuffer[Rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[Rt]);const Jt=r.convert(Bt.format,Bt.colorSpace),mt=r.convert(Bt.type),fe=w(Bt.internalFormat,Jt,mt,Bt.colorSpace,L.isXRRenderTarget===!0),ee=at(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,fe,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,K.__webglColorRenderbuffer[Rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),ft(K.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ht){e.bindTexture(i.TEXTURE_CUBE_MAP,ut.__webglTexture),Q(i.TEXTURE_CUBE_MAP,N,Dt);for(let St=0;St<6;St++)if(o&&N.mipmaps&&N.mipmaps.length>0)for(let Rt=0;Rt<N.mipmaps.length;Rt++)Et(K.__webglFramebuffer[St][Rt],L,N,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+St,Rt);else Et(K.__webglFramebuffer[St],L,N,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);b(N,Dt)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){const St=L.texture;for(let Rt=0,Bt=St.length;Rt<Bt;Rt++){const Jt=St[Rt],mt=n.get(Jt);e.bindTexture(i.TEXTURE_2D,mt.__webglTexture),Q(i.TEXTURE_2D,Jt,Dt),Et(K.__webglFramebuffer,L,Jt,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,0),b(Jt,Dt)&&M(i.TEXTURE_2D)}e.unbindTexture()}else{let St=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?St=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(St,ut.__webglTexture),Q(St,N,Dt),o&&N.mipmaps&&N.mipmaps.length>0)for(let Rt=0;Rt<N.mipmaps.length;Rt++)Et(K.__webglFramebuffer[Rt],L,N,i.COLOR_ATTACHMENT0,St,Rt);else Et(K.__webglFramebuffer,L,N,i.COLOR_ATTACHMENT0,St,0);b(N,Dt)&&M(St),e.unbindTexture()}L.depthBuffer&&Lt(L)}function ce(L){const N=g(L)||o,K=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let ut=0,ht=K.length;ut<ht;ut++){const dt=K[ut];if(b(dt,N)){const Dt=L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,St=n.get(dt).__webglTexture;e.bindTexture(Dt,St),M(Dt),e.unbindTexture()}}}function bt(L){if(o&&L.samples>0&&lt(L)===!1){const N=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],K=L.width,ut=L.height;let ht=i.COLOR_BUFFER_BIT;const dt=[],Dt=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(L),Rt=L.isWebGLMultipleRenderTargets===!0;if(Rt)for(let Bt=0;Bt<N.length;Bt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let Bt=0;Bt<N.length;Bt++){dt.push(i.COLOR_ATTACHMENT0+Bt),L.depthBuffer&&dt.push(Dt);const Jt=St.__ignoreDepthValues!==void 0?St.__ignoreDepthValues:!1;if(Jt===!1&&(L.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),Rt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[Bt]),Jt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Dt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Dt])),Rt){const mt=n.get(N[Bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,mt,0)}i.blitFramebuffer(0,0,K,ut,0,0,K,ut,ht,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Rt)for(let Bt=0;Bt<N.length;Bt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.RENDERBUFFER,St.__webglColorRenderbuffer[Bt]);const Jt=n.get(N[Bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Bt,i.TEXTURE_2D,Jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}}function at(L){return Math.min(s.maxSamples,L.samples)}function lt(L){const N=n.get(L);return o&&L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&N.__useRenderToTexture!==!1}function qt(L){const N=a.render.frame;h.get(L)!==N&&(h.set(L,N),L.update())}function At(L,N){const K=L.colorSpace,ut=L.format,ht=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Fc||K!==Ci&&K!==Vn&&(ve.getTransfer(K)===Ae?o===!1?t.has("EXT_sRGB")===!0&&ut===Jn?(L.format=Fc,L.minFilter=kn,L.generateMipmaps=!1):N=Ld.sRGBToLinear(N):(ut!==Jn||ht!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),N}this.allocateTextureUnit=U,this.resetTextureUnits=G,this.setTexture2D=k,this.setTexture2DArray=H,this.setTexture3D=j,this.setTextureCube=Y,this.rebindTextures=Xt,this.setupRenderTarget=J,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=lt}function Wx(i,t,e){const n=e.isWebGL2;function s(r,a=Vn){let o;const c=ve.getTransfer(a);if(r===ji)return i.UNSIGNED_BYTE;if(r===Td)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Ed)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Am)return i.BYTE;if(r===Cm)return i.SHORT;if(r===tl)return i.UNSIGNED_SHORT;if(r===Md)return i.INT;if(r===Wi)return i.UNSIGNED_INT;if(r===Xi)return i.FLOAT;if(r===bi)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Rm)return i.ALPHA;if(r===Jn)return i.RGBA;if(r===Pm)return i.LUMINANCE;if(r===Nm)return i.LUMINANCE_ALPHA;if(r===fs)return i.DEPTH_COMPONENT;if(r===ur)return i.DEPTH_STENCIL;if(r===Fc)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Dm)return i.RED;if(r===wd)return i.RED_INTEGER;if(r===Lm)return i.RG;if(r===bd)return i.RG_INTEGER;if(r===Ad)return i.RGBA_INTEGER;if(r===$a||r===Ka||r===Ja||r===Qa)if(c===Ae)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===$a)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ka)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ja)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Qa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===$a)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ka)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ja)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Qa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Cu||r===Ru||r===Pu||r===Nu)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Cu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ru)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Pu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Nu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Cd)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Du||r===Lu)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Du)return c===Ae?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Lu)return c===Ae?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Iu||r===Ou||r===Uu||r===Fu||r===ku||r===Bu||r===Vu||r===zu||r===Gu||r===Hu||r===Wu||r===Xu||r===qu||r===ju)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Iu)return c===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ou)return c===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Uu)return c===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Fu)return c===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ku)return c===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Bu)return c===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vu)return c===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===zu)return c===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Gu)return c===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Hu)return c===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Wu)return c===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Xu)return c===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===qu)return c===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ju)return c===Ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===tc||r===Yu||r===Zu)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===tc)return c===Ae?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Yu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Zu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Im||r===$u||r===Ku||r===Ju)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===tc)return o.COMPRESSED_RED_RGTC1_EXT;if(r===$u)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ku)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ju)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ds?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class Xx extends Bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class us extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qx={type:"move"};class wc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,v=.005;l.inputState.pinching&&f>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qx)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new us;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class jx extends xr{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,m=null,v=null;const x=e.getContextAttributes();let g=null,p=null;const b=[],M=[],w=new Nt;let A=null;const R=new Bn;R.layers.enable(1),R.viewport=new tn;const C=new Bn;C.layers.enable(2),C.viewport=new tn;const D=[R,C],T=new Xx;T.layers.enable(1),T.layers.enable(2);let S=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ot=b[Q];return ot===void 0&&(ot=new wc,b[Q]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(Q){let ot=b[Q];return ot===void 0&&(ot=new wc,b[Q]=ot),ot.getGripSpace()},this.getHand=function(Q){let ot=b[Q];return ot===void 0&&(ot=new wc,b[Q]=ot),ot.getHandSpace()};function O(Q){const ot=M.indexOf(Q.inputSource);if(ot===-1)return;const ct=b[ot];ct!==void 0&&(ct.update(Q.inputSource,Q.frame,l||a),ct.dispatchEvent({type:Q.type,data:Q.inputSource}))}function G(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",U);for(let Q=0;Q<b.length;Q++){const ot=M[Q];ot!==null&&(M[Q]=null,b[Q].disconnect(ot))}S=null,P=null,t.setRenderTarget(g),m=null,f=null,d=null,s=null,p=null,rt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",G),s.addEventListener("inputsourceschange",U),x.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(w),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const ot={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),p=new ei(m.framebufferWidth,m.framebufferHeight,{format:Jn,type:ji,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let ot=null,ct=null,_t=null;x.depth&&(_t=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=x.stencil?ur:fs,ct=x.stencil?ds:Wi);const Et={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(Et),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new ei(f.textureWidth,f.textureHeight,{format:Jn,type:ji,depthTexture:new Xd(f.textureWidth,f.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});const ft=t.properties.get(p);ft.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),rt.setContext(s),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function U(Q){for(let ot=0;ot<Q.removed.length;ot++){const ct=Q.removed[ot],_t=M.indexOf(ct);_t>=0&&(M[_t]=null,b[_t].disconnect(ct))}for(let ot=0;ot<Q.added.length;ot++){const ct=Q.added[ot];let _t=M.indexOf(ct);if(_t===-1){for(let ft=0;ft<b.length;ft++)if(ft>=M.length){M.push(ct),_t=ft;break}else if(M[ft]===null){M[ft]=ct,_t=ft;break}if(_t===-1)break}const Et=b[_t];Et&&Et.connect(ct)}}const z=new q,k=new q;function H(Q,ot,ct){z.setFromMatrixPosition(ot.matrixWorld),k.setFromMatrixPosition(ct.matrixWorld);const _t=z.distanceTo(k),Et=ot.projectionMatrix.elements,ft=ct.projectionMatrix.elements,kt=Et[14]/(Et[10]-1),Lt=Et[14]/(Et[10]+1),Xt=(Et[9]+1)/Et[5],J=(Et[9]-1)/Et[5],ce=(Et[8]-1)/Et[0],bt=(ft[8]+1)/ft[0],at=kt*ce,lt=kt*bt,qt=_t/(-ce+bt),At=qt*-ce;ot.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(At),Q.translateZ(qt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const L=kt+qt,N=Lt+qt,K=at-At,ut=lt+(_t-At),ht=Xt*Lt/N*L,dt=J*Lt/N*L;Q.projectionMatrix.makePerspective(K,ut,ht,dt,L,N),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function j(Q,ot){ot===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ot.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;T.near=C.near=R.near=Q.near,T.far=C.far=R.far=Q.far,(S!==T.near||P!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),S=T.near,P=T.far);const ot=Q.parent,ct=T.cameras;j(T,ot);for(let _t=0;_t<ct.length;_t++)j(ct[_t],ot);ct.length===2?H(T,R,C):T.projectionMatrix.copy(R.projectionMatrix),Y(Q,T,ot)};function Y(Q,ot,ct){ct===null?Q.matrix.copy(ot.matrixWorld):(Q.matrix.copy(ct.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ot.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ot.projectionMatrix),Q.projectionMatrixInverse.copy(ot.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=kc*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(Q){c=Q,f!==null&&(f.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)};let $=null;function st(Q,ot){if(h=ot.getViewerPose(l||a),v=ot,h!==null){const ct=h.views;m!==null&&(t.setRenderTargetFramebuffer(p,m.framebuffer),t.setRenderTarget(p));let _t=!1;ct.length!==T.cameras.length&&(T.cameras.length=0,_t=!0);for(let Et=0;Et<ct.length;Et++){const ft=ct[Et];let kt=null;if(m!==null)kt=m.getViewport(ft);else{const Xt=d.getViewSubImage(f,ft);kt=Xt.viewport,Et===0&&(t.setRenderTargetTextures(p,Xt.colorTexture,f.ignoreDepthValues?void 0:Xt.depthStencilTexture),t.setRenderTarget(p))}let Lt=D[Et];Lt===void 0&&(Lt=new Bn,Lt.layers.enable(Et),Lt.viewport=new tn,D[Et]=Lt),Lt.matrix.fromArray(ft.transform.matrix),Lt.matrix.decompose(Lt.position,Lt.quaternion,Lt.scale),Lt.projectionMatrix.fromArray(ft.projectionMatrix),Lt.projectionMatrixInverse.copy(Lt.projectionMatrix).invert(),Lt.viewport.set(kt.x,kt.y,kt.width,kt.height),Et===0&&(T.matrix.copy(Lt.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),_t===!0&&T.cameras.push(Lt)}}for(let ct=0;ct<b.length;ct++){const _t=M[ct],Et=b[ct];_t!==null&&Et!==void 0&&Et.update(_t,ot,l||a)}$&&$(Q,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),v=null}const rt=new Wd;rt.setAnimationLoop(st),this.setAnimationLoop=function(Q){$=Q},this.dispose=function(){}}}function Yx(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,zd(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,b,M,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&m(g,p,w)):p.isMeshMatcapMaterial?(r(g,p),v(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,b,M):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===yn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===yn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const b=t.get(p).envMap;if(b&&(g.envMap.value=b,g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const M=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*M,e(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,b,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=M*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),t.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===yn&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const b=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Zx(i,t,e,n){let s={},r={},a=[];const o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(b,M){const w=M.program;n.uniformBlockBinding(b,w)}function l(b,M){let w=s[b.id];w===void 0&&(v(b),w=h(b),s[b.id]=w,b.addEventListener("dispose",g));const A=M.program;n.updateUBOMapping(b,A);const R=t.render.frame;r[b.id]!==R&&(f(b),r[b.id]=R)}function h(b){const M=d();b.__bindingPointIndex=M;const w=i.createBuffer(),A=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const M=s[b.id],w=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let R=0,C=w.length;R<C;R++){const D=Array.isArray(w[R])?w[R]:[w[R]];for(let T=0,S=D.length;T<S;T++){const P=D[T];if(m(P,R,T,A)===!0){const O=P.__offset,G=Array.isArray(P.value)?P.value:[P.value];let U=0;for(let z=0;z<G.length;z++){const k=G[z],H=x(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,O+U,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,U),U+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,M,w,A){const R=b.value,C=M+"_"+w;if(A[C]===void 0)return typeof R=="number"||typeof R=="boolean"?A[C]=R:A[C]=R.clone(),!0;{const D=A[C];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return A[C]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function v(b){const M=b.uniforms;let w=0;const A=16;for(let C=0,D=M.length;C<D;C++){const T=Array.isArray(M[C])?M[C]:[M[C]];for(let S=0,P=T.length;S<P;S++){const O=T[S],G=Array.isArray(O.value)?O.value:[O.value];for(let U=0,z=G.length;U<z;U++){const k=G[U],H=x(k),j=w%A;j!==0&&A-j<H.boundary&&(w+=A-j),O.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=w,w+=H.storage}}}const R=w%A;return R>0&&(w+=A-R),b.__size=w,b.__cache={},this}function x(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function g(b){const M=b.target;M.removeEventListener("dispose",g);const w=a.indexOf(M.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Kd{constructor(t={}){const{canvas:e=qm(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const m=new Uint32Array(4),v=new Int32Array(4);let x=null,g=null;const p=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=on,this._useLegacyLights=!1,this.toneMapping=qi,this.toneMappingExposure=1;const M=this;let w=!1,A=0,R=0,C=null,D=-1,T=null;const S=new tn,P=new tn;let O=null;const G=new te(0);let U=0,z=e.width,k=e.height,H=1,j=null,Y=null;const $=new tn(0,0,z,k),st=new tn(0,0,z,k);let rt=!1;const Q=new il;let ot=!1,ct=!1,_t=null;const Et=new De,ft=new Nt,kt=new q,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xt(){return C===null?H:1}let J=n;function ce(I,Z){for(let nt=0;nt<I.length;nt++){const it=I[nt],et=e.getContext(it,Z);if(et!==null)return et}return null}try{const I={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qc}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",W,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),J===null){const Z=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&Z.shift(),J=ce(Z,I),J===null)throw ce(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&J instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let bt,at,lt,qt,At,L,N,K,ut,ht,dt,Dt,St,Rt,Bt,Jt,mt,fe,ee,Vt,Ut,Pt,Qt,ue;function Me(){bt=new r0(J),at=new Qv(J,bt,t),bt.init(at),Pt=new Wx(J,bt,at),lt=new Gx(J,bt,at),qt=new c0(J),At=new Cx,L=new Hx(J,bt,lt,At,at,Pt,qt),N=new e0(M),K=new s0(M),ut=new gg(J,at),Qt=new Kv(J,bt,ut,at),ht=new o0(J,ut,qt,Qt),dt=new d0(J,ht,ut,qt),ee=new h0(J,at,L),Jt=new t0(At),Dt=new Ax(M,N,K,bt,at,Qt,Jt),St=new Yx(M,At),Rt=new Px,Bt=new Ux(bt,at),fe=new $v(M,N,K,lt,dt,f,c),mt=new zx(M,dt,at),ue=new Zx(J,qt,at,lt),Vt=new Jv(J,bt,qt,at),Ut=new a0(J,bt,qt,at),qt.programs=Dt.programs,M.capabilities=at,M.extensions=bt,M.properties=At,M.renderLists=Rt,M.shadowMap=mt,M.state=lt,M.info=qt}Me();const jt=new jx(M,J);this.xr=jt,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const I=bt.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=bt.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(I){I!==void 0&&(H=I,this.setSize(z,k,!1))},this.getSize=function(I){return I.set(z,k)},this.setSize=function(I,Z,nt=!0){if(jt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=I,k=Z,e.width=Math.floor(I*H),e.height=Math.floor(Z*H),nt===!0&&(e.style.width=I+"px",e.style.height=Z+"px"),this.setViewport(0,0,I,Z)},this.getDrawingBufferSize=function(I){return I.set(z*H,k*H).floor()},this.setDrawingBufferSize=function(I,Z,nt){z=I,k=Z,H=nt,e.width=Math.floor(I*nt),e.height=Math.floor(Z*nt),this.setViewport(0,0,I,Z)},this.getCurrentViewport=function(I){return I.copy(S)},this.getViewport=function(I){return I.copy($)},this.setViewport=function(I,Z,nt,it){I.isVector4?$.set(I.x,I.y,I.z,I.w):$.set(I,Z,nt,it),lt.viewport(S.copy($).multiplyScalar(H).floor())},this.getScissor=function(I){return I.copy(st)},this.setScissor=function(I,Z,nt,it){I.isVector4?st.set(I.x,I.y,I.z,I.w):st.set(I,Z,nt,it),lt.scissor(P.copy(st).multiplyScalar(H).floor())},this.getScissorTest=function(){return rt},this.setScissorTest=function(I){lt.setScissorTest(rt=I)},this.setOpaqueSort=function(I){j=I},this.setTransparentSort=function(I){Y=I},this.getClearColor=function(I){return I.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor.apply(fe,arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha.apply(fe,arguments)},this.clear=function(I=!0,Z=!0,nt=!0){let it=0;if(I){let et=!1;if(C!==null){const xt=C.texture.format;et=xt===Ad||xt===bd||xt===wd}if(et){const xt=C.texture.type,Ct=xt===ji||xt===Wi||xt===tl||xt===ds||xt===Td||xt===Ed,Ft=fe.getClearColor(),Gt=fe.getClearAlpha(),Kt=Ft.r,Zt=Ft.g,Yt=Ft.b;Ct?(m[0]=Kt,m[1]=Zt,m[2]=Yt,m[3]=Gt,J.clearBufferuiv(J.COLOR,0,m)):(v[0]=Kt,v[1]=Zt,v[2]=Yt,v[3]=Gt,J.clearBufferiv(J.COLOR,0,v))}else it|=J.COLOR_BUFFER_BIT}Z&&(it|=J.DEPTH_BUFFER_BIT),nt&&(it|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",W,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),Rt.dispose(),Bt.dispose(),At.dispose(),N.dispose(),K.dispose(),dt.dispose(),Qt.dispose(),ue.dispose(),Dt.dispose(),jt.dispose(),jt.removeEventListener("sessionstart",ze),jt.removeEventListener("sessionend",ge),_t&&(_t.dispose(),_t=null),Fe.stop()};function gt(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function W(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const I=qt.autoReset,Z=mt.enabled,nt=mt.autoUpdate,it=mt.needsUpdate,et=mt.type;Me(),qt.autoReset=I,mt.enabled=Z,mt.autoUpdate=nt,mt.needsUpdate=it,mt.type=et}function Tt(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Mt(I){const Z=I.target;Z.removeEventListener("dispose",Mt),zt(Z)}function zt(I){It(I),At.remove(I)}function It(I){const Z=At.get(I).programs;Z!==void 0&&(Z.forEach(function(nt){Dt.releaseProgram(nt)}),I.isShaderMaterial&&Dt.releaseShaderCache(I))}this.renderBufferDirect=function(I,Z,nt,it,et,xt){Z===null&&(Z=Lt);const Ct=et.isMesh&&et.matrixWorld.determinant()<0,Ft=bs(I,Z,nt,it,et);lt.setMaterial(it,Ct);let Gt=nt.index,Kt=1;if(it.wireframe===!0){if(Gt=ht.getWireframeAttribute(nt),Gt===void 0)return;Kt=2}const Zt=nt.drawRange,Yt=nt.attributes.position;let he=Zt.start*Kt,cn=(Zt.start+Zt.count)*Kt;xt!==null&&(he=Math.max(he,xt.start*Kt),cn=Math.min(cn,(xt.start+xt.count)*Kt)),Gt!==null?(he=Math.max(he,0),cn=Math.min(cn,Gt.count)):Yt!=null&&(he=Math.max(he,0),cn=Math.min(cn,Yt.count));const Ie=cn-he;if(Ie<0||Ie===1/0)return;Qt.setup(et,it,Ft,nt,Gt);let Ge,_e=Vt;if(Gt!==null&&(Ge=ut.get(Gt),_e=Ut,_e.setIndex(Ge)),et.isMesh)it.wireframe===!0?(lt.setLineWidth(it.wireframeLinewidth*Xt()),_e.setMode(J.LINES)):_e.setMode(J.TRIANGLES);else if(et.isLine){let ne=it.linewidth;ne===void 0&&(ne=1),lt.setLineWidth(ne*Xt()),et.isLineSegments?_e.setMode(J.LINES):et.isLineLoop?_e.setMode(J.LINE_LOOP):_e.setMode(J.LINE_STRIP)}else et.isPoints?_e.setMode(J.POINTS):et.isSprite&&_e.setMode(J.TRIANGLES);if(et.isBatchedMesh)_e.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else if(et.isInstancedMesh)_e.renderInstances(he,Ie,et.count);else if(nt.isInstancedBufferGeometry){const ne=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,Cs=Math.min(nt.instanceCount,ne);_e.renderInstances(he,Ie,Cs)}else _e.render(he,Ie)};function pe(I,Z,nt){I.transparent===!0&&I.side===Ti&&I.forceSinglePass===!1?(I.side=yn,I.needsUpdate=!0,fn(I,Z,nt),I.side=Zi,I.needsUpdate=!0,fn(I,Z,nt),I.side=Ti):fn(I,Z,nt)}this.compile=function(I,Z,nt=null){nt===null&&(nt=I),g=Bt.get(nt),g.init(),b.push(g),nt.traverseVisible(function(et){et.isLight&&et.layers.test(Z.layers)&&(g.pushLight(et),et.castShadow&&g.pushShadow(et))}),I!==nt&&I.traverseVisible(function(et){et.isLight&&et.layers.test(Z.layers)&&(g.pushLight(et),et.castShadow&&g.pushShadow(et))}),g.setupLights(M._useLegacyLights);const it=new Set;return I.traverse(function(et){const xt=et.material;if(xt)if(Array.isArray(xt))for(let Ct=0;Ct<xt.length;Ct++){const Ft=xt[Ct];pe(Ft,nt,et),it.add(Ft)}else pe(xt,nt,et),it.add(xt)}),b.pop(),g=null,it},this.compileAsync=function(I,Z,nt=null){const it=this.compile(I,Z,nt);return new Promise(et=>{function xt(){if(it.forEach(function(Ct){At.get(Ct).currentProgram.isReady()&&it.delete(Ct)}),it.size===0){et(I);return}setTimeout(xt,10)}bt.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let me=null;function Le(I){me&&me(I)}function ze(){Fe.stop()}function ge(){Fe.start()}const Fe=new Wd;Fe.setAnimationLoop(Le),typeof self<"u"&&Fe.setContext(self),this.setAnimationLoop=function(I){me=I,jt.setAnimationLoop(I),I===null?Fe.stop():Fe.start()},jt.addEventListener("sessionstart",ze),jt.addEventListener("sessionend",ge),this.render=function(I,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),jt.enabled===!0&&jt.isPresenting===!0&&(jt.cameraAutoUpdate===!0&&jt.updateCamera(Z),Z=jt.getCamera()),I.isScene===!0&&I.onBeforeRender(M,I,Z,C),g=Bt.get(I,b.length),g.init(),b.push(g),Et.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Q.setFromProjectionMatrix(Et),ct=this.localClippingEnabled,ot=Jt.init(this.clippingPlanes,ct),x=Rt.get(I,p.length),x.init(),p.push(x),In(I,Z,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(j,Y),this.info.render.frame++,ot===!0&&Jt.beginShadows();const nt=g.state.shadowsArray;if(mt.render(nt,I,Z),ot===!0&&Jt.endShadows(),this.info.autoReset===!0&&this.info.reset(),fe.render(x,I),g.setupLights(M._useLegacyLights),Z.isArrayCamera){const it=Z.cameras;for(let et=0,xt=it.length;et<xt;et++){const Ct=it[et];On(x,I,Ct,Ct.viewport)}}else On(x,I,Z);C!==null&&(L.updateMultisampleRenderTarget(C),L.updateRenderTargetMipmap(C)),I.isScene===!0&&I.onAfterRender(M,I,Z),Qt.resetDefaultState(),D=-1,T=null,b.pop(),b.length>0?g=b[b.length-1]:g=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function In(I,Z,nt,it){if(I.visible===!1)return;if(I.layers.test(Z.layers)){if(I.isGroup)nt=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(Z);else if(I.isLight)g.pushLight(I),I.castShadow&&g.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Q.intersectsSprite(I)){it&&kt.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Et);const Ct=dt.update(I),Ft=I.material;Ft.visible&&x.push(I,Ct,Ft,nt,kt.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Q.intersectsObject(I))){const Ct=dt.update(I),Ft=I.material;if(it&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),kt.copy(I.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),kt.copy(Ct.boundingSphere.center)),kt.applyMatrix4(I.matrixWorld).applyMatrix4(Et)),Array.isArray(Ft)){const Gt=Ct.groups;for(let Kt=0,Zt=Gt.length;Kt<Zt;Kt++){const Yt=Gt[Kt],he=Ft[Yt.materialIndex];he&&he.visible&&x.push(I,Ct,he,nt,kt.z,Yt)}}else Ft.visible&&x.push(I,Ct,Ft,nt,kt.z,null)}}const xt=I.children;for(let Ct=0,Ft=xt.length;Ct<Ft;Ct++)In(xt[Ct],Z,nt,it)}function On(I,Z,nt,it){const et=I.opaque,xt=I.transmissive,Ct=I.transparent;g.setupLightsView(nt),ot===!0&&Jt.setGlobalState(M.clippingPlanes,nt),xt.length>0&&pi(et,xt,Z,nt),it&&lt.viewport(S.copy(it)),et.length>0&&es(et,Z,nt),xt.length>0&&es(xt,Z,nt),Ct.length>0&&es(Ct,Z,nt),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function pi(I,Z,nt,it){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;const xt=at.isWebGL2;_t===null&&(_t=new ei(1,1,{generateMipmaps:!0,type:bt.has("EXT_color_buffer_half_float")?bi:ji,minFilter:qr,samples:xt?4:0})),M.getDrawingBufferSize(ft),xt?_t.setSize(ft.x,ft.y):_t.setSize(Bc(ft.x),Bc(ft.y));const Ct=M.getRenderTarget();M.setRenderTarget(_t),M.getClearColor(G),U=M.getClearAlpha(),U<1&&M.setClearColor(16777215,.5),M.clear();const Ft=M.toneMapping;M.toneMapping=qi,es(I,nt,it),L.updateMultisampleRenderTarget(_t),L.updateRenderTargetMipmap(_t);let Gt=!1;for(let Kt=0,Zt=Z.length;Kt<Zt;Kt++){const Yt=Z[Kt],he=Yt.object,cn=Yt.geometry,Ie=Yt.material,Ge=Yt.group;if(Ie.side===Ti&&he.layers.test(it.layers)){const _e=Ie.side;Ie.side=yn,Ie.needsUpdate=!0,Re(he,nt,it,cn,Ie,Ge),Ie.side=_e,Ie.needsUpdate=!0,Gt=!0}}Gt===!0&&(L.updateMultisampleRenderTarget(_t),L.updateRenderTargetMipmap(_t)),M.setRenderTarget(Ct),M.setClearColor(G,U),M.toneMapping=Ft}function es(I,Z,nt){const it=Z.isScene===!0?Z.overrideMaterial:null;for(let et=0,xt=I.length;et<xt;et++){const Ct=I[et],Ft=Ct.object,Gt=Ct.geometry,Kt=it===null?Ct.material:it,Zt=Ct.group;Ft.layers.test(nt.layers)&&Re(Ft,Z,nt,Gt,Kt,Zt)}}function Re(I,Z,nt,it,et,xt){I.onBeforeRender(M,Z,nt,it,et,xt),I.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),et.onBeforeRender(M,Z,nt,it,I,xt),et.transparent===!0&&et.side===Ti&&et.forceSinglePass===!1?(et.side=yn,et.needsUpdate=!0,M.renderBufferDirect(nt,Z,it,et,I,xt),et.side=Zi,et.needsUpdate=!0,M.renderBufferDirect(nt,Z,it,et,I,xt),et.side=Ti):M.renderBufferDirect(nt,Z,it,et,I,xt),I.onAfterRender(M,Z,nt,it,et,xt)}function fn(I,Z,nt){Z.isScene!==!0&&(Z=Lt);const it=At.get(I),et=g.state.lights,xt=g.state.shadowsArray,Ct=et.state.version,Ft=Dt.getParameters(I,et.state,xt,Z,nt),Gt=Dt.getProgramCacheKey(Ft);let Kt=it.programs;it.environment=I.isMeshStandardMaterial?Z.environment:null,it.fog=Z.fog,it.envMap=(I.isMeshStandardMaterial?K:N).get(I.envMap||it.environment),Kt===void 0&&(I.addEventListener("dispose",Mt),Kt=new Map,it.programs=Kt);let Zt=Kt.get(Gt);if(Zt!==void 0){if(it.currentProgram===Zt&&it.lightsStateVersion===Ct)return po(I,Ft),Zt}else Ft.uniforms=Dt.getUniforms(I),I.onBuild(nt,Ft,M),I.onBeforeCompile(Ft,M),Zt=Dt.acquireProgram(Ft,Gt),Kt.set(Gt,Zt),it.uniforms=Ft.uniforms;const Yt=it.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Yt.clippingPlanes=Jt.uniform),po(I,Ft),it.needsLights=As(I),it.lightsStateVersion=Ct,it.needsLights&&(Yt.ambientLightColor.value=et.state.ambient,Yt.lightProbe.value=et.state.probe,Yt.directionalLights.value=et.state.directional,Yt.directionalLightShadows.value=et.state.directionalShadow,Yt.spotLights.value=et.state.spot,Yt.spotLightShadows.value=et.state.spotShadow,Yt.rectAreaLights.value=et.state.rectArea,Yt.ltc_1.value=et.state.rectAreaLTC1,Yt.ltc_2.value=et.state.rectAreaLTC2,Yt.pointLights.value=et.state.point,Yt.pointLightShadows.value=et.state.pointShadow,Yt.hemisphereLights.value=et.state.hemi,Yt.directionalShadowMap.value=et.state.directionalShadowMap,Yt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Yt.spotShadowMap.value=et.state.spotShadowMap,Yt.spotLightMatrix.value=et.state.spotLightMatrix,Yt.spotLightMap.value=et.state.spotLightMap,Yt.pointShadowMap.value=et.state.pointShadowMap,Yt.pointShadowMatrix.value=et.state.pointShadowMatrix),it.currentProgram=Zt,it.uniformsList=null,Zt}function ws(I){if(I.uniformsList===null){const Z=I.currentProgram.getUniforms();I.uniformsList=$o.seqWithValue(Z.seq,I.uniforms)}return I.uniformsList}function po(I,Z){const nt=At.get(I);nt.outputColorSpace=Z.outputColorSpace,nt.batching=Z.batching,nt.instancing=Z.instancing,nt.instancingColor=Z.instancingColor,nt.skinning=Z.skinning,nt.morphTargets=Z.morphTargets,nt.morphNormals=Z.morphNormals,nt.morphColors=Z.morphColors,nt.morphTargetsCount=Z.morphTargetsCount,nt.numClippingPlanes=Z.numClippingPlanes,nt.numIntersection=Z.numClipIntersection,nt.vertexAlphas=Z.vertexAlphas,nt.vertexTangents=Z.vertexTangents,nt.toneMapping=Z.toneMapping}function bs(I,Z,nt,it,et){Z.isScene!==!0&&(Z=Lt),L.resetTextureUnits();const xt=Z.fog,Ct=it.isMeshStandardMaterial?Z.environment:null,Ft=C===null?M.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ci,Gt=(it.isMeshStandardMaterial?K:N).get(it.envMap||Ct),Kt=it.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,Zt=!!nt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Yt=!!nt.morphAttributes.position,he=!!nt.morphAttributes.normal,cn=!!nt.morphAttributes.color;let Ie=qi;it.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ie=M.toneMapping);const Ge=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,_e=Ge!==void 0?Ge.length:0,ne=At.get(it),Cs=g.state.lights;if(ot===!0&&(ct===!0||I!==T)){const pn=I===T&&it.id===D;Jt.setState(it,I,pn)}let Te=!1;it.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==Cs.state.version||ne.outputColorSpace!==Ft||et.isBatchedMesh&&ne.batching===!1||!et.isBatchedMesh&&ne.batching===!0||et.isInstancedMesh&&ne.instancing===!1||!et.isInstancedMesh&&ne.instancing===!0||et.isSkinnedMesh&&ne.skinning===!1||!et.isSkinnedMesh&&ne.skinning===!0||et.isInstancedMesh&&ne.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&ne.instancingColor===!1&&et.instanceColor!==null||ne.envMap!==Gt||it.fog===!0&&ne.fog!==xt||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==Jt.numPlanes||ne.numIntersection!==Jt.numIntersection)||ne.vertexAlphas!==Kt||ne.vertexTangents!==Zt||ne.morphTargets!==Yt||ne.morphNormals!==he||ne.morphColors!==cn||ne.toneMapping!==Ie||at.isWebGL2===!0&&ne.morphTargetsCount!==_e)&&(Te=!0):(Te=!0,ne.__version=it.version);let mi=ne.currentProgram;Te===!0&&(mi=fn(it,Z,et));let mo=!1,Oi=!1,Rs=!1;const je=mi.getUniforms(),ci=ne.uniforms;if(lt.useProgram(mi.program)&&(mo=!0,Oi=!0,Rs=!0),it.id!==D&&(D=it.id,Oi=!0),mo||T!==I){je.setValue(J,"projectionMatrix",I.projectionMatrix),je.setValue(J,"viewMatrix",I.matrixWorldInverse);const pn=je.map.cameraPosition;pn!==void 0&&pn.setValue(J,kt.setFromMatrixPosition(I.matrixWorld)),at.logarithmicDepthBuffer&&je.setValue(J,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&je.setValue(J,"isOrthographic",I.isOrthographicCamera===!0),T!==I&&(T=I,Oi=!0,Rs=!0)}if(et.isSkinnedMesh){je.setOptional(J,et,"bindMatrix"),je.setOptional(J,et,"bindMatrixInverse");const pn=et.skeleton;pn&&(at.floatVertexTextures?(pn.boneTexture===null&&pn.computeBoneTexture(),je.setValue(J,"boneTexture",pn.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}et.isBatchedMesh&&(je.setOptional(J,et,"batchingTexture"),je.setValue(J,"batchingTexture",et._matricesTexture,L));const Je=nt.morphAttributes;if((Je.position!==void 0||Je.normal!==void 0||Je.color!==void 0&&at.isWebGL2===!0)&&ee.update(et,nt,mi),(Oi||ne.receiveShadow!==et.receiveShadow)&&(ne.receiveShadow=et.receiveShadow,je.setValue(J,"receiveShadow",et.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(ci.envMap.value=Gt,ci.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),Oi&&(je.setValue(J,"toneMappingExposure",M.toneMappingExposure),ne.needsLights&&Rr(ci,Rs),xt&&it.fog===!0&&St.refreshFogUniforms(ci,xt),St.refreshMaterialUniforms(ci,it,H,k,_t),$o.upload(J,ws(ne),ci,L)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&($o.upload(J,ws(ne),ci,L),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&je.setValue(J,"center",et.center),je.setValue(J,"modelViewMatrix",et.modelViewMatrix),je.setValue(J,"normalMatrix",et.normalMatrix),je.setValue(J,"modelMatrix",et.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const pn=it.uniformsGroups;for(let Ps=0,Ns=pn.length;Ps<Ns;Ps++)if(at.isWebGL2){const Pr=pn[Ps];ue.update(Pr,mi),ue.bind(Pr,mi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mi}function Rr(I,Z){I.ambientLightColor.needsUpdate=Z,I.lightProbe.needsUpdate=Z,I.directionalLights.needsUpdate=Z,I.directionalLightShadows.needsUpdate=Z,I.pointLights.needsUpdate=Z,I.pointLightShadows.needsUpdate=Z,I.spotLights.needsUpdate=Z,I.spotLightShadows.needsUpdate=Z,I.rectAreaLights.needsUpdate=Z,I.hemisphereLights.needsUpdate=Z}function As(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(I,Z,nt){At.get(I.texture).__webglTexture=Z,At.get(I.depthTexture).__webglTexture=nt;const it=At.get(I);it.__hasExternalTextures=!0,it.__hasExternalTextures&&(it.__autoAllocateDepthBuffer=nt===void 0,it.__autoAllocateDepthBuffer||bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,Z){const nt=At.get(I);nt.__webglFramebuffer=Z,nt.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(I,Z=0,nt=0){C=I,A=Z,R=nt;let it=!0,et=null,xt=!1,Ct=!1;if(I){const Gt=At.get(I);Gt.__useDefaultFramebuffer!==void 0?(lt.bindFramebuffer(J.FRAMEBUFFER,null),it=!1):Gt.__webglFramebuffer===void 0?L.setupRenderTarget(I):Gt.__hasExternalTextures&&L.rebindTextures(I,At.get(I.texture).__webglTexture,At.get(I.depthTexture).__webglTexture);const Kt=I.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Ct=!0);const Zt=At.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Zt[Z])?et=Zt[Z][nt]:et=Zt[Z],xt=!0):at.isWebGL2&&I.samples>0&&L.useMultisampledRTT(I)===!1?et=At.get(I).__webglMultisampledFramebuffer:Array.isArray(Zt)?et=Zt[nt]:et=Zt,S.copy(I.viewport),P.copy(I.scissor),O=I.scissorTest}else S.copy($).multiplyScalar(H).floor(),P.copy(st).multiplyScalar(H).floor(),O=rt;if(lt.bindFramebuffer(J.FRAMEBUFFER,et)&&at.drawBuffers&&it&&lt.drawBuffers(I,et),lt.viewport(S),lt.scissor(P),lt.setScissorTest(O),xt){const Gt=At.get(I.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Gt.__webglTexture,nt)}else if(Ct){const Gt=At.get(I.texture),Kt=Z||0;J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,Gt.__webglTexture,nt||0,Kt)}D=-1},this.readRenderTargetPixels=function(I,Z,nt,it,et,xt,Ct){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=At.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ft=Ft[Ct]),Ft){lt.bindFramebuffer(J.FRAMEBUFFER,Ft);try{const Gt=I.texture,Kt=Gt.format,Zt=Gt.type;if(Kt!==Jn&&Pt.convert(Kt)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Yt=Zt===bi&&(bt.has("EXT_color_buffer_half_float")||at.isWebGL2&&bt.has("EXT_color_buffer_float"));if(Zt!==ji&&Pt.convert(Zt)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Zt===Xi&&(at.isWebGL2||bt.has("OES_texture_float")||bt.has("WEBGL_color_buffer_float")))&&!Yt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=I.width-it&&nt>=0&&nt<=I.height-et&&J.readPixels(Z,nt,it,et,Pt.convert(Kt),Pt.convert(Zt),xt)}finally{const Gt=C!==null?At.get(C).__webglFramebuffer:null;lt.bindFramebuffer(J.FRAMEBUFFER,Gt)}}},this.copyFramebufferToTexture=function(I,Z,nt=0){const it=Math.pow(2,-nt),et=Math.floor(Z.image.width*it),xt=Math.floor(Z.image.height*it);L.setTexture2D(Z,0),J.copyTexSubImage2D(J.TEXTURE_2D,nt,0,0,I.x,I.y,et,xt),lt.unbindTexture()},this.copyTextureToTexture=function(I,Z,nt,it=0){const et=Z.image.width,xt=Z.image.height,Ct=Pt.convert(nt.format),Ft=Pt.convert(nt.type);L.setTexture2D(nt,0),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,nt.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,nt.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,nt.unpackAlignment),Z.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,it,I.x,I.y,et,xt,Ct,Ft,Z.image.data):Z.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,it,I.x,I.y,Z.mipmaps[0].width,Z.mipmaps[0].height,Ct,Z.mipmaps[0].data):J.texSubImage2D(J.TEXTURE_2D,it,I.x,I.y,Ct,Ft,Z.image),it===0&&nt.generateMipmaps&&J.generateMipmap(J.TEXTURE_2D),lt.unbindTexture()},this.copyTextureToTexture3D=function(I,Z,nt,it,et=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xt=I.max.x-I.min.x+1,Ct=I.max.y-I.min.y+1,Ft=I.max.z-I.min.z+1,Gt=Pt.convert(it.format),Kt=Pt.convert(it.type);let Zt;if(it.isData3DTexture)L.setTexture3D(it,0),Zt=J.TEXTURE_3D;else if(it.isDataArrayTexture||it.isCompressedArrayTexture)L.setTexture2DArray(it,0),Zt=J.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,it.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,it.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,it.unpackAlignment);const Yt=J.getParameter(J.UNPACK_ROW_LENGTH),he=J.getParameter(J.UNPACK_IMAGE_HEIGHT),cn=J.getParameter(J.UNPACK_SKIP_PIXELS),Ie=J.getParameter(J.UNPACK_SKIP_ROWS),Ge=J.getParameter(J.UNPACK_SKIP_IMAGES),_e=nt.isCompressedTexture?nt.mipmaps[et]:nt.image;J.pixelStorei(J.UNPACK_ROW_LENGTH,_e.width),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,_e.height),J.pixelStorei(J.UNPACK_SKIP_PIXELS,I.min.x),J.pixelStorei(J.UNPACK_SKIP_ROWS,I.min.y),J.pixelStorei(J.UNPACK_SKIP_IMAGES,I.min.z),nt.isDataTexture||nt.isData3DTexture?J.texSubImage3D(Zt,et,Z.x,Z.y,Z.z,xt,Ct,Ft,Gt,Kt,_e.data):nt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(Zt,et,Z.x,Z.y,Z.z,xt,Ct,Ft,Gt,_e.data)):J.texSubImage3D(Zt,et,Z.x,Z.y,Z.z,xt,Ct,Ft,Gt,Kt,_e),J.pixelStorei(J.UNPACK_ROW_LENGTH,Yt),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,he),J.pixelStorei(J.UNPACK_SKIP_PIXELS,cn),J.pixelStorei(J.UNPACK_SKIP_ROWS,Ie),J.pixelStorei(J.UNPACK_SKIP_IMAGES,Ge),et===0&&it.generateMipmaps&&J.generateMipmap(Zt),lt.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?L.setTextureCube(I,0):I.isData3DTexture?L.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?L.setTexture2DArray(I,0):L.setTexture2D(I,0),lt.unbindTexture()},this.resetState=function(){A=0,R=0,C=null,lt.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===el?"display-p3":"srgb",e.unpackColorSpace=ve.workingColorSpace===ya?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===on?ps:Rd}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ps?on:Ci}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class $x extends Kd{}$x.prototype.isWebGL1Renderer=!0;class al{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new te(t),this.density=e}clone(){return new al(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Kx extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class zh extends ni{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const $s=new De,Gh=new De,Go=[],Hh=new ys,Jx=new De,Br=new Dn,Vr=new yr;class Qx extends Dn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new zh(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Jx)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ys),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$s),Hh.copy(t.boundingBox).applyMatrix4($s),this.boundingBox.union(Hh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new yr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$s),Vr.copy(t.boundingSphere).applyMatrix4($s),this.boundingSphere.union(Vr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Br.geometry=this.geometry,Br.material=this.material,Br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vr.copy(this.boundingSphere),Vr.applyMatrix4(n),t.ray.intersectsSphere(Vr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$s),Gh.multiplyMatrices(n,$s),Br.matrixWorld=Gh,Br.raycast(t,Go);for(let a=0,o=Go.length;a<o;a++){const c=Go[a];c.instanceId=r,c.object=this,e.push(c)}Go.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new zh(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class zc extends Sr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Wh=new De,Gc=new Ud,Ho=new yr,Wo=new q;class Xh extends en{constructor(t=new An,e=new zc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(s),Ho.radius+=r,t.ray.intersectsSphere(Ho)===!1)return;Wh.copy(s).invert(),Gc.copy(t.ray).applyMatrix4(Wh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let v=f,x=m;v<x;v++){const g=l.getX(v);Wo.fromBufferAttribute(d,g),qh(Wo,g,c,s,t,e,this)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let v=f,x=m;v<x;v++)Wo.fromBufferAttribute(d,v),qh(Wo,v,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function qh(i,t,e,n,s,r,a){const o=Gc.distanceSqToPoint(i);if(o<e){const c=new q;Gc.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}class ty extends wn{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ni{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const h=n[s],f=n[s+1]-h,m=(a-h)/f;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new Nt:new q);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new q,s=[],r=[],a=[],o=new q,c=new De;for(let m=0;m<=t;m++){const v=m/t;s[m]=this.getTangentAt(v,new q)}r[0]=new q,a[0]=new q;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos(hn(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(o,v))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(hn(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let v=1;v<=t;v++)r[v].applyMatrix4(c.makeRotationAxis(s[v],m*v)),a[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Jd extends Ni{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){const n=e||new Nt,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,m=l-this.aY;c=f*h-m*d+this.aX,l=f*d+m*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ey extends Jd{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function cl(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,m=(o-a)/h-(c-a)/(h+d)+(c-o)/d;f*=h,m*=h,s(a,o,f,m)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Xo=new q,bc=new cl,Ac=new cl,Cc=new cl;class Qd extends Ni{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new q){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Xo.subVectors(s[0],s[1]).add(s[0]),l=Xo);const d=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Xo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Xo),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let v=Math.pow(l.distanceToSquared(d),m),x=Math.pow(d.distanceToSquared(f),m),g=Math.pow(f.distanceToSquared(h),m);x<1e-4&&(x=1),v<1e-4&&(v=x),g<1e-4&&(g=x),bc.initNonuniformCatmullRom(l.x,d.x,f.x,h.x,v,x,g),Ac.initNonuniformCatmullRom(l.y,d.y,f.y,h.y,v,x,g),Cc.initNonuniformCatmullRom(l.z,d.z,f.z,h.z,v,x,g)}else this.curveType==="catmullrom"&&(bc.initCatmullRom(l.x,d.x,f.x,h.x,this.tension),Ac.initCatmullRom(l.y,d.y,f.y,h.y,this.tension),Cc.initCatmullRom(l.z,d.z,f.z,h.z,this.tension));return n.set(bc.calc(c),Ac.calc(c),Cc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new q().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function jh(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function ny(i,t){const e=1-i;return e*e*t}function iy(i,t){return 2*(1-i)*i*t}function sy(i,t){return i*i*t}function Gr(i,t,e,n){return ny(i,t)+iy(i,e)+sy(i,n)}function ry(i,t){const e=1-i;return e*e*e*t}function oy(i,t){const e=1-i;return 3*e*e*i*t}function ay(i,t){return 3*(1-i)*i*i*t}function cy(i,t){return i*i*i*t}function Hr(i,t,e,n,s){return ry(i,t)+oy(i,e)+ay(i,n)+cy(i,s)}class ly extends Ni{constructor(t=new Nt,e=new Nt,n=new Nt,s=new Nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Nt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Hr(t,s.x,r.x,a.x,o.x),Hr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class uy extends Ni{constructor(t=new q,e=new q,n=new q,s=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new q){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Hr(t,s.x,r.x,a.x,o.x),Hr(t,s.y,r.y,a.y,o.y),Hr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class hy extends Ni{constructor(t=new Nt,e=new Nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Nt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class dy extends Ni{constructor(t=new q,e=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new q){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fy extends Ni{constructor(t=new Nt,e=new Nt,n=new Nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Nt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Gr(t,s.x,r.x,a.x),Gr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tf extends Ni{constructor(t=new q,e=new q,n=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new q){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Gr(t,s.x,r.x,a.x),Gr(t,s.y,r.y,a.y),Gr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class py extends Ni{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Nt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(jh(o,c.x,l.x,h.x,d.x),jh(o,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Nt().fromArray(s))}return this}}var my=Object.freeze({__proto__:null,ArcCurve:ey,CatmullRomCurve3:Qd,CubicBezierCurve:ly,CubicBezierCurve3:uy,EllipseCurve:Jd,LineCurve:hy,LineCurve3:dy,QuadraticBezierCurve:fy,QuadraticBezierCurve3:tf,SplineCurve:py});class ll extends An{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],f=[],m=[];let v=0;const x=[],g=n/2;let p=0;b(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new qe(d,3)),this.setAttribute("normal",new qe(f,3)),this.setAttribute("uv",new qe(m,2));function b(){const w=new q,A=new q;let R=0;const C=(e-t)/n;for(let D=0;D<=r;D++){const T=[],S=D/r,P=S*(e-t)+t;for(let O=0;O<=s;O++){const G=O/s,U=G*c+o,z=Math.sin(U),k=Math.cos(U);A.x=P*z,A.y=-S*n+g,A.z=P*k,d.push(A.x,A.y,A.z),w.set(z,C,k).normalize(),f.push(w.x,w.y,w.z),m.push(G,1-S),T.push(v++)}x.push(T)}for(let D=0;D<s;D++)for(let T=0;T<r;T++){const S=x[T][D],P=x[T+1][D],O=x[T+1][D+1],G=x[T][D+1];h.push(S,P,G),h.push(P,O,G),R+=6}l.addGroup(p,R,0),p+=R}function M(w){const A=v,R=new Nt,C=new q;let D=0;const T=w===!0?t:e,S=w===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,g*S,0),f.push(0,S,0),m.push(.5,.5),v++;const P=v;for(let O=0;O<=s;O++){const U=O/s*c+o,z=Math.cos(U),k=Math.sin(U);C.x=T*k,C.y=g*S,C.z=T*z,d.push(C.x,C.y,C.z),f.push(0,S,0),R.x=z*.5+.5,R.y=k*.5*S+.5,m.push(R.x,R.y),v++}for(let O=0;O<s;O++){const G=A+O,U=P+O;w===!0?h.push(U,U+1,G):h.push(U+1,U,G),D+=3}l.addGroup(p,D,w===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ul extends An{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new qe(r,3)),this.setAttribute("normal",new qe(r.slice(),3)),this.setAttribute("uv",new qe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const M=new q,w=new q,A=new q;for(let R=0;R<e.length;R+=3)m(e[R+0],M),m(e[R+1],w),m(e[R+2],A),c(M,w,A,b)}function c(b,M,w,A){const R=A+1,C=[];for(let D=0;D<=R;D++){C[D]=[];const T=b.clone().lerp(w,D/R),S=M.clone().lerp(w,D/R),P=R-D;for(let O=0;O<=P;O++)O===0&&D===R?C[D][O]=T:C[D][O]=T.clone().lerp(S,O/P)}for(let D=0;D<R;D++)for(let T=0;T<2*(R-D)-1;T++){const S=Math.floor(T/2);T%2===0?(f(C[D][S+1]),f(C[D+1][S]),f(C[D][S])):(f(C[D][S+1]),f(C[D+1][S+1]),f(C[D+1][S]))}}function l(b){const M=new q;for(let w=0;w<r.length;w+=3)M.x=r[w+0],M.y=r[w+1],M.z=r[w+2],M.normalize().multiplyScalar(b),r[w+0]=M.x,r[w+1]=M.y,r[w+2]=M.z}function h(){const b=new q;for(let M=0;M<r.length;M+=3){b.x=r[M+0],b.y=r[M+1],b.z=r[M+2];const w=g(b)/2/Math.PI+.5,A=p(b)/Math.PI+.5;a.push(w,1-A)}v(),d()}function d(){for(let b=0;b<a.length;b+=6){const M=a[b+0],w=a[b+2],A=a[b+4],R=Math.max(M,w,A),C=Math.min(M,w,A);R>.9&&C<.1&&(M<.2&&(a[b+0]+=1),w<.2&&(a[b+2]+=1),A<.2&&(a[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function m(b,M){const w=b*3;M.x=t[w+0],M.y=t[w+1],M.z=t[w+2]}function v(){const b=new q,M=new q,w=new q,A=new q,R=new Nt,C=new Nt,D=new Nt;for(let T=0,S=0;T<r.length;T+=9,S+=6){b.set(r[T+0],r[T+1],r[T+2]),M.set(r[T+3],r[T+4],r[T+5]),w.set(r[T+6],r[T+7],r[T+8]),R.set(a[S+0],a[S+1]),C.set(a[S+2],a[S+3]),D.set(a[S+4],a[S+5]),A.copy(b).add(M).add(w).divideScalar(3);const P=g(A);x(R,S+0,b,P),x(C,S+2,M,P),x(D,S+4,w,P)}}function x(b,M,w,A){A<0&&b.x===1&&(a[M]=b.x-1),w.x===0&&w.z===0&&(a[M]=A/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ul(t.vertices,t.indices,t.radius,t.details)}}class hl extends ul{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new hl(t.radius,t.detail)}}class dl extends An{constructor(t=new tf(new q(-1,-1,0),new q(-1,1,0),new q(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new q,c=new q,l=new Nt;let h=new q;const d=[],f=[],m=[],v=[];x(),this.setIndex(v),this.setAttribute("position",new qe(d,3)),this.setAttribute("normal",new qe(f,3)),this.setAttribute("uv",new qe(m,2));function x(){for(let M=0;M<e;M++)g(M);g(r===!1?e:0),b(),p()}function g(M){h=t.getPointAt(M/e,h);const w=a.normals[M],A=a.binormals[M];for(let R=0;R<=s;R++){const C=R/s*Math.PI*2,D=Math.sin(C),T=-Math.cos(C);c.x=T*w.x+D*A.x,c.y=T*w.y+D*A.y,c.z=T*w.z+D*A.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,d.push(o.x,o.y,o.z)}}function p(){for(let M=1;M<=e;M++)for(let w=1;w<=s;w++){const A=(s+1)*(M-1)+(w-1),R=(s+1)*M+(w-1),C=(s+1)*M+w,D=(s+1)*(M-1)+w;v.push(A,R,D),v.push(R,C,D)}}function b(){for(let M=0;M<=e;M++)for(let w=0;w<=s;w++)l.x=M/e,l.y=w/s,m.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new dl(new my[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class gy extends Sr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pd,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ef extends en{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Rc=new De,Yh=new q,Zh=new q;class _y{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new il,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Yh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yh),Zh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zh),e.updateMatrixWorld(),Rc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class vy extends _y{constructor(){super(new rl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xy extends ef{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new vy}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class yy extends ef{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}let Sy=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$h(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=$h();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function $h(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qc);const nf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class to{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const My=new rl(-1,1,1,-1,0,1);class Ty extends An{constructor(){super(),this.setAttribute("position",new qe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new qe([0,2,0,0,2,0],2))}}const Ey=new Ty;class sf{constructor(t){this._mesh=new Dn(Ey,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,My)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class wy extends to{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof vn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ra.clone(t.uniforms),this.material=new vn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new sf(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Kh extends to{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class by extends to{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Ay{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Nt);this._width=n.width,this._height=n.height,e=new ei(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:bi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new wy(nf),this.copyPass.material.blending=wi,this.clock=new Sy}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Kh!==void 0&&(a instanceof Kh?n=!0:a instanceof by&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Cy extends to{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new te}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const Ry={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new te(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class dr extends to{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Nt(t.x,t.y):new Nt(256,256),this.clearColor=new te(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ei(r,a,{type:bi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const f=new ei(r,a,{type:bi});f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const m=new ei(r,a,{type:bi});m.texture.name="UnrealBloomPass.v"+d,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),a=Math.round(a/2)}const o=Ry;this.highPassUniforms=ra.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new vn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Nt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new q(1,1,1),new q(1,1,1),new q(1,1,1),new q(1,1,1),new q(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=nf;this.copyUniforms=ra.clone(h.uniforms),this.blendMaterial=new vn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Xr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new te,this.oldClearAlpha=1,this.basic=new nl,this.fsQuad=new sf(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Nt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=dr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=dr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new vn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Nt(.5,.5)},direction:{value:new Nt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new vn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}dr.BlurDirectionX=new Nt(1,0);dr.BlurDirectionY=new Nt(0,1);class Py{constructor(t,e,n){this.renderer=t,this.composer=new Ay(t),this.composer.addPass(new Cy(e,n)),this.bloom=new dr(new Nt(window.innerWidth,window.innerHeight),1.5,.8,.15),this.composer.addPass(this.bloom)}setSize(t,e){this.composer.setSize(t,e),this.bloom.resolution.set(t,e)}render(){this.composer.render()}}const Ny=`
varying vec2 vUv;
varying vec3 vNormal;
uniform float time;
void main() {
    vUv = uv;
    vNormal = normal;
    float pulse = sin(time * 2.0 + position.x * 0.5) * 0.05;
    vec3 p = position + normal * pulse;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`,Dy=`
varying vec2 vUv;
varying vec3 vNormal;
uniform float time;
uniform vec3 colorBase;
uniform vec3 colorFlow;
void main() {
    float flow = sin((vUv.x * 10.0) - (time * 3.0));
    flow = smoothstep(0.3, 0.7, flow);
    float pulse = 0.5 + 0.5 * sin(time * 2.5);
    vec3 finalColor = mix(colorBase, colorFlow, flow * 0.8);
    float rim = 1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0)));
    finalColor += colorFlow * rim * 0.5;
    gl_FragColor = vec4(finalColor * (0.5 + pulse * 0.5), 1.0);
}
`;class Ly{constructor(){this.group=new us,this.heroTarget=new q(0,0,0),this.material=new vn({uniforms:{time:{value:0},colorBase:{value:new te(2245666)},colorFlow:{value:new te(14548736)}},vertexShader:Ny,fragmentShader:Dy,transparent:!0});const t=document.createElement("canvas");t.width=32,t.height=32;const e=t.getContext("2d"),n=e.createRadialGradient(16,16,0,16,16,16);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,32,32);const s=new ty(t);this.fanMat=new zc({color:16776960,size:.2,transparent:!0,opacity:.9,map:s,depthWrite:!1,blending:Xr}),this.dustMat=new zc({color:4491332,size:.15,transparent:!0,opacity:.3,map:s,depthWrite:!1,blending:Xr}),this._generateNetwork(),this._addDust()}getHeroTarget(){return this.heroTarget}_generateNetwork(){const t=(e,n,s,r)=>{if(s<=0){this._addTerminalFan(e);return}const a=[e.clone()];let o=e.clone();const c=4+Math.floor(Math.random()*3),l=(1.5+Math.random())*(r*5);for(let v=0;v<c;v++){const x=new q(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(.5*r),g=n.clone().multiplyScalar(l/c).add(x);o.add(g),a.push(o.clone())}const h=new Qd(a),d=new dl(h,8,r,6,!1),f=new Dn(d,this.material);this.group.add(f);const m=2+Math.floor(Math.random()*2);for(let v=0;v<m;v++){const g=n.clone().applyEuler(new Jr((Math.random()-.5)*1.5,(Math.random()-.5)*1.5,(Math.random()-.5)*1.5)).normalize();t(o,g,s-1,r*.7)}};t(new q(0,-5,0),new q(0,1,0),5,.5),t(new q(-4,-3,0),new q(1,1,.2),5,.4),t(new q(4,-3,-1),new q(-1,1,-.1),5,.4)}_addTerminalFan(t){t.y>this.heroTarget.y&&this.heroTarget.copy(t);const e=20,n=[];for(let a=0;a<e;a++)n.push(t.x+(Math.random()-.5)*1.5,t.y+(Math.random()-.5)*1.5,t.z+(Math.random()-.5)*1.5);const s=new An;s.setAttribute("position",new qe(n,3));const r=new Xh(s,this.fanMat);this.group.add(r)}_addDust(){const t=new An,e=[];for(let n=0;n<800;n++)e.push((Math.random()-.5)*40,(Math.random()-.5)*40,(Math.random()-.5)*30);t.setAttribute("position",new qe(e,3)),this.group.add(new Xh(t,this.dustMat))}checkTarget(t){return t>4.5?{inside:!0}:{inside:!1}}update(t,e){this.material.uniforms.time.value+=t}}const Iy=`
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPos;
uniform float time;

void main() {
    vUv = uv;
    vNormal = normal;
    vPos = position;
    
    // Peristalsis (slow rhythmic compression)
    float wave = sin(position.z * 0.2 + time * 1.5) * 0.5;
    vec3 p = position + normal * wave;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
`,Oy=`
varying vec2 vUv;
varying vec3 vNormal;
uniform float time;
uniform vec3 colorBase; // Dark Red/Purple
uniform vec3 colorRidge; // Lighter Pink

void main() {
    // Noise-like texture
    float n = sin(vUv.x * 20.0) * sin(vUv.y * 20.0 + time);
    
    vec3 color = mix(colorBase, colorRidge, n * 0.3 + 0.3);
    
    // Fresnel Rim (wetness)
    vec3 viewDir = normalize(cameraPosition - vPos); // Approx logic in ES2
    float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0,0,1))), 3.0);
    
    gl_FragColor = vec4(color + vec3(0.1, 0.1, 0.2) * fresnel, 1.0);
}
`;class Uy{constructor(){this.group=new us,this.visible=!1;const t=new ll(4,4,100,32,20,!0);t.rotateX(Math.PI/2),t.scale(-1,1,1),this.material=new vn({uniforms:{time:{value:0},colorBase:{value:new te(3342353)},colorRidge:{value:new te(6693427)}},vertexShader:Iy,fragmentShader:Oy,side:yn}),this.tunnel=new Dn(t,this.material),this.group.add(this.tunnel),this._addSpores()}_addSpores(){const e=new hl(.3,1),n=new gy({color:8956552,roughness:.8,emissive:1122833});this.spores=new Qx(e,n,50);const s=new en;for(let r=0;r<50;r++){const a=Math.random()*Math.PI*2,o=3.5,c=(Math.random()-.5)*80;s.position.set(Math.cos(a)*o,Math.sin(a)*o,c),s.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3);const l=.5+Math.random()*1.5;s.scale.set(l,l,l),s.updateMatrix(),this.spores.setMatrixAt(r,s.matrix)}this.group.add(this.spores)}setVisible(t){this.group.visible=t,this.visible=t}update(t,e){this.visible&&(this.material.uniforms.time.value+=t)}checkTarget(t){return{inside:!0}}}class Fy{constructor(t){this.scene=new Kx,this.scene.fog=new al(328976,.05),this.camera=new Bn(60,window.innerWidth/window.innerHeight,.1,100),this.camera.position.set(0,0,12),this.renderer=new Kd({antialias:!1,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(0),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),t.appendChild(this.renderer.domElement),this.post=new Py(this.renderer,this.scene,this.camera),this.worldA=new Ly,this.worldB=new Uy,this.worldB.setVisible(!1),this.groupRoot=new us,this.scene.add(this.groupRoot),this.groupRoot.add(this.worldA.group),this.scene.add(this.worldB.group),this.zoom=1,this.targetZoom=1,this.tasks={A_complete:!1,B_complete:!1},this.taskTimer=0,this.ui=null,window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.post.setSize(window.innerWidth,window.innerHeight)});const e=new yy(2236962);this.scene.add(e);const n=new xy(16777215,.5);this.scene.add(n)}setUI(t){this.ui=t}update(t,e){var s,r,a,o,c,l,h,d,f,m,v,x,g,p,b,M,w,A,R,C,D,T,S;if(e.right&&e.right.present){const P=e.right.pinch,O=5;P>.6&&(this.targetZoom+=t*O*(P-.5)),P<.4&&(this.targetZoom-=t*O*(.5-P)),this.groupRoot.rotation.z+=(e.right.rotate-this.groupRoot.rotation.z)*.1}if(this.tasks.A_complete||this.targetZoom>9.8&&(this.targetZoom=9.8),this.targetZoom=Math.max(1,Math.min(30,this.targetZoom)),this.zoom+=(this.targetZoom-this.zoom)*.1,this.zoom<9.9){this.worldA.group.visible=!0,this.worldB.setVisible(!1);const P=(this.zoom-1)/9;if(this.camera.position.z=12*(1-P*.95),this.worldA.getHeroTarget){const O=this.worldA.getHeroTarget(),G=Math.max(0,Math.min(1,(this.zoom-1.2)/6)),U=O.clone().multiplyScalar(-1*G);this.worldA.group.position.lerp(U,.1)}this.worldA.update(t,this.zoom),this.scene.fog.density=.05,this.tasks.A_complete?((m=this.ui)==null||m.updateTask("ACCESS GRANTED","Zoom In to Enter Vein"),(v=this.ui)==null||v.updateProgress(1),(x=this.ui)==null||x.setReticleActive(!0,!0)):this.worldA.checkTarget(this.zoom).inside?(e.left&&e.left.isOK?(this.taskTimer+=t,(s=this.ui)==null||s.updateTask("OBSERVING...","Scanning Tip Structure"),(r=this.ui)==null||r.setReticleActive(!0,!0)):(this.taskTimer=Math.max(0,this.taskTimer-t*2),Math.abs(this.targetZoom-9.8)<.1?(a=this.ui)==null||a.updateTask("ACCESS DENIED","Analyze Tip First (Hold OK)"):(o=this.ui)==null||o.updateTask("TARGET ACQUIRED","Hold OK to Analyze"),(c=this.ui)==null||c.setReticleActive(!0,!1)),(l=this.ui)==null||l.updateProgress(Math.min(1,this.taskTimer/3)),this.taskTimer>3&&(this.tasks.A_complete=!0,this.taskTimer=0,this.targetZoom=12)):((h=this.ui)==null||h.updateTask("TASK A","Zoom to Tip"),(d=this.ui)==null||d.setReticleActive(!1,!1),(f=this.ui)==null||f.updateProgress(0))}else{this.worldA.group.visible=!1,this.worldB.setVisible(!0);const P=(this.zoom-10)/20;this.camera.position.z=50-P*100,this.worldB.update(t,this.zoom),this.scene.fog.density=.02,this.tasks.B_complete?((D=this.ui)==null||D.updateTask("TASK B COMPLETE","Explore..."),(T=this.ui)==null||T.setReticleActive(!0,!0),(S=this.ui)==null||S.updateProgress(1)):((g=this.ui)==null||g.updateTask("TASK B: VEIN","Find Spores (Deep inside)"),P>.5?(e.left&&e.left.isOK?(this.taskTimer+=t,(p=this.ui)==null||p.updateTask("SPORE CLUSTER","Sampling..."),(b=this.ui)==null||b.setReticleActive(!0,!0)):(this.taskTimer=Math.max(0,this.taskTimer-t*2),(M=this.ui)==null||M.updateTask("SPORE ALERT","Hold OK to Sample"),(w=this.ui)==null||w.setReticleActive(!0,!1)),(A=this.ui)==null||A.updateProgress(Math.min(1,this.taskTimer/3)),this.taskTimer>3&&(this.tasks.B_complete=!0,this.taskTimer=0)):(this.taskTimer=0,(R=this.ui)==null||R.updateProgress(0),(C=this.ui)==null||C.setReticleActive(!1,!1)))}this.post.render()}}const rf="15.1.22",Jh=(i,t,e)=>({endTime:t,insertTime:e,type:"exponentialRampToValue",value:i}),Qh=(i,t,e)=>({endTime:t,insertTime:e,type:"linearRampToValue",value:i}),Hc=(i,t)=>({startTime:t,type:"setValue",value:i}),of=(i,t,e)=>({duration:e,startTime:t,type:"setValueCurve",values:i}),af=(i,t,{startTime:e,target:n,timeConstant:s})=>n+(t-n)*Math.exp((e-i)/s),tr=i=>i.type==="exponentialRampToValue",oa=i=>i.type==="linearRampToValue",Hi=i=>tr(i)||oa(i),fl=i=>i.type==="setValue",Mi=i=>i.type==="setValueCurve",aa=(i,t,e,n)=>{const s=i[t];return s===void 0?n:Hi(s)||fl(s)?s.value:Mi(s)?s.values[s.values.length-1]:af(e,aa(i,t-1,s.startTime,n),s)},td=(i,t,e,n,s)=>e===void 0?[n.insertTime,s]:Hi(e)?[e.endTime,e.value]:fl(e)?[e.startTime,e.value]:Mi(e)?[e.startTime+e.duration,e.values[e.values.length-1]]:[e.startTime,aa(i,t-1,e.startTime,s)],Wc=i=>i.type==="cancelAndHold",Xc=i=>i.type==="cancelScheduledValues",Gi=i=>Wc(i)||Xc(i)?i.cancelTime:tr(i)||oa(i)?i.endTime:i.startTime,ed=(i,t,e,{endTime:n,value:s})=>e===s?s:0<e&&0<s||e<0&&s<0?e*(s/e)**((i-t)/(n-t)):0,nd=(i,t,e,{endTime:n,value:s})=>e+(i-t)/(n-t)*(s-e),ky=(i,t)=>{const e=Math.floor(t),n=Math.ceil(t);return e===n?i[e]:(1-(t-e))*i[e]+(1-(n-t))*i[n]},By=(i,{duration:t,startTime:e,values:n})=>{const s=(i-e)/t*(n.length-1);return ky(n,s)},qo=i=>i.type==="setTarget";class Vy{constructor(t){this._automationEvents=[],this._currenTime=0,this._defaultValue=t}[Symbol.iterator](){return this._automationEvents[Symbol.iterator]()}add(t){const e=Gi(t);if(Wc(t)||Xc(t)){const n=this._automationEvents.findIndex(r=>Xc(t)&&Mi(r)?r.startTime+r.duration>=e:Gi(r)>=e),s=this._automationEvents[n];if(n!==-1&&(this._automationEvents=this._automationEvents.slice(0,n)),Wc(t)){const r=this._automationEvents[this._automationEvents.length-1];if(s!==void 0&&Hi(s)){if(r!==void 0&&qo(r))throw new Error("The internal list is malformed.");const a=r===void 0?s.insertTime:Mi(r)?r.startTime+r.duration:Gi(r),o=r===void 0?this._defaultValue:Mi(r)?r.values[r.values.length-1]:r.value,c=tr(s)?ed(e,a,o,s):nd(e,a,o,s),l=tr(s)?Jh(c,e,this._currenTime):Qh(c,e,this._currenTime);this._automationEvents.push(l)}if(r!==void 0&&qo(r)&&this._automationEvents.push(Hc(this.getValue(e),e)),r!==void 0&&Mi(r)&&r.startTime+r.duration>e){const a=e-r.startTime,o=(r.values.length-1)/r.duration,c=Math.max(2,1+Math.ceil(a*o)),l=a/(c-1)*o,h=r.values.slice(0,c);if(l<1)for(let d=1;d<c;d+=1){const f=l*d%1;h[d]=r.values[d-1]*(1-f)+r.values[d]*f}this._automationEvents[this._automationEvents.length-1]=of(h,r.startTime,a)}}}else{const n=this._automationEvents.findIndex(a=>Gi(a)>e),s=n===-1?this._automationEvents[this._automationEvents.length-1]:this._automationEvents[n-1];if(s!==void 0&&Mi(s)&&Gi(s)+s.duration>e)return!1;const r=tr(t)?Jh(t.value,t.endTime,this._currenTime):oa(t)?Qh(t.value,e,this._currenTime):t;if(n===-1)this._automationEvents.push(r);else{if(Mi(t)&&e+t.duration>Gi(this._automationEvents[n]))return!1;this._automationEvents.splice(n,0,r)}}return!0}flush(t){const e=this._automationEvents.findIndex(n=>Gi(n)>t);if(e>1){const n=this._automationEvents.slice(e-1),s=n[0];qo(s)&&n.unshift(Hc(aa(this._automationEvents,e-2,s.startTime,this._defaultValue),s.startTime)),this._automationEvents=n}}getValue(t){if(this._automationEvents.length===0)return this._defaultValue;const e=this._automationEvents.findIndex(a=>Gi(a)>t),n=this._automationEvents[e],s=(e===-1?this._automationEvents.length:e)-1,r=this._automationEvents[s];if(r!==void 0&&qo(r)&&(n===void 0||!Hi(n)||n.insertTime>t))return af(t,aa(this._automationEvents,s-1,r.startTime,this._defaultValue),r);if(r!==void 0&&fl(r)&&(n===void 0||!Hi(n)))return r.value;if(r!==void 0&&Mi(r)&&(n===void 0||!Hi(n)||r.startTime+r.duration>t))return t<r.startTime+r.duration?By(t,r):r.values[r.values.length-1];if(r!==void 0&&Hi(r)&&(n===void 0||!Hi(n)))return r.value;if(n!==void 0&&tr(n)){const[a,o]=td(this._automationEvents,s,r,n,this._defaultValue);return ed(t,a,o,n)}if(n!==void 0&&oa(n)){const[a,o]=td(this._automationEvents,s,r,n,this._defaultValue);return nd(t,a,o,n)}return this._defaultValue}}const zy=i=>({cancelTime:i,type:"cancelAndHold"}),Gy=i=>({cancelTime:i,type:"cancelScheduledValues"}),Hy=(i,t)=>({endTime:t,type:"exponentialRampToValue",value:i}),Wy=(i,t)=>({endTime:t,type:"linearRampToValue",value:i}),Xy=(i,t,e)=>({startTime:t,target:i,timeConstant:e,type:"setTarget"}),qy=()=>new DOMException("","AbortError"),jy=i=>(t,e,[n,s,r],a)=>{i(t[s],[e,n,r],o=>o[0]===e&&o[1]===n,a)},Yy=i=>(t,e,n)=>{const s=[];for(let r=0;r<n.numberOfInputs;r+=1)s.push(new Set);i.set(t,{activeInputs:s,outputs:new Set,passiveInputs:new WeakMap,renderer:e})},Zy=i=>(t,e)=>{i.set(t,{activeInputs:new Set,passiveInputs:new WeakMap,renderer:e})},fr=new WeakSet,cf=new WeakMap,pl=new WeakMap,lf=new WeakMap,ml=new WeakMap,Ma=new WeakMap,uf=new WeakMap,qc=new WeakMap,jc=new WeakMap,Yc=new WeakMap,hf={construct(){return hf}},$y=i=>{try{const t=new Proxy(i,hf);new t}catch{return!1}return!0},id=/^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,sd=(i,t)=>{const e=[];let n=i.replace(/^[\s]+/,""),s=n.match(id);for(;s!==null;){const r=s[1].slice(1,-1),a=s[0].replace(/([\s]+)?;?$/,"").replace(r,new URL(r,t).toString());e.push(a),n=n.slice(s[0].length).replace(/^[\s]+/,""),s=n.match(id)}return[e.join(";"),n]},rd=i=>{if(i!==void 0&&!Array.isArray(i))throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.")},od=i=>{if(!$y(i))throw new TypeError("The given value for processorCtor should be a constructor.");if(i.prototype===null||typeof i.prototype!="object")throw new TypeError("The given value for processorCtor should have a prototype.")},Ky=(i,t,e,n,s,r,a,o,c,l,h,d,f)=>{let m=0;return(v,x,g={credentials:"omit"})=>{const p=h.get(v);if(p!==void 0&&p.has(x))return Promise.resolve();const b=l.get(v);if(b!==void 0){const A=b.get(x);if(A!==void 0)return A}const M=r(v),w=M.audioWorklet===void 0?s(x).then(([A,R])=>{const[C,D]=sd(A,R),T=`${C};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${D}
})})(window,'_AWGS')`;return e(T)}).then(()=>{const A=f._AWGS.pop();if(A===void 0)throw new SyntaxError;n(M.currentTime,M.sampleRate,()=>A(class{},void 0,(R,C)=>{if(R.trim()==="")throw t();const D=jc.get(M);if(D!==void 0){if(D.has(R))throw t();od(C),rd(C.parameterDescriptors),D.set(R,C)}else od(C),rd(C.parameterDescriptors),jc.set(M,new Map([[R,C]]))},M.sampleRate,void 0,void 0))}):Promise.all([s(x),Promise.resolve(i(d,d))]).then(([[A,R],C])=>{const D=m+1;m=D;const[T,S]=sd(A,R),U=`${T};((AudioWorkletProcessor,registerProcessor)=>{${S}
})(${C?"AudioWorkletProcessor":"class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"},(n,p)=>registerProcessor(n,class extends p{${C?"":"__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"}process(i,o,p){${C?"":"i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${D}',class extends AudioWorkletProcessor{process(){return !1}})`,z=new Blob([U],{type:"application/javascript; charset=utf-8"}),k=URL.createObjectURL(z);return M.audioWorklet.addModule(k,g).then(()=>{if(o(M))return M;const H=a(M);return H.audioWorklet.addModule(k,g).then(()=>H)}).then(H=>{if(c===null)throw new SyntaxError;try{new c(H,`__sac${D}`)}catch{throw new SyntaxError}}).finally(()=>URL.revokeObjectURL(k))});return b===void 0?l.set(v,new Map([[x,w]])):b.set(x,w),w.then(()=>{const A=h.get(v);A===void 0?h.set(v,new Set([x])):A.add(x)}).finally(()=>{const A=l.get(v);A!==void 0&&A.delete(x)}),w}},si=(i,t)=>{const e=i.get(t);if(e===void 0)throw new Error("A value with the given key could not be found.");return e},Ta=(i,t)=>{const e=Array.from(i).filter(t);if(e.length>1)throw Error("More than one element was found.");if(e.length===0)throw Error("No element was found.");const[n]=e;return i.delete(n),n},df=(i,t,e,n)=>{const s=si(i,t),r=Ta(s,a=>a[0]===e&&a[1]===n);return s.size===0&&i.delete(t),r},eo=i=>si(uf,i),pr=i=>{if(fr.has(i))throw new Error("The AudioNode is already stored.");fr.add(i),eo(i).forEach(t=>t(!0))},ff=i=>"port"in i,no=i=>{if(!fr.has(i))throw new Error("The AudioNode is not stored.");fr.delete(i),eo(i).forEach(t=>t(!1))},Zc=(i,t)=>{!ff(i)&&t.every(e=>e.size===0)&&no(i)},Jy=(i,t,e,n,s,r,a,o,c,l,h,d,f)=>{const m=new WeakMap;return(v,x,g,p,b)=>{const{activeInputs:M,passiveInputs:w}=r(x),{outputs:A}=r(v),R=o(v),C=D=>{const T=c(x),S=c(v);if(D){const P=df(w,v,g,p);i(M,v,P,!1),!b&&!d(v)&&e(S,T,g,p),f(x)&&pr(x)}else{const P=n(M,v,g,p);t(w,p,P,!1),!b&&!d(v)&&s(S,T,g,p);const O=a(x);if(O===0)h(x)&&Zc(x,M);else{const G=m.get(x);G!==void 0&&clearTimeout(G),m.set(x,setTimeout(()=>{h(x)&&Zc(x,M)},O*1e3))}}};return l(A,[x,g,p],D=>D[0]===x&&D[1]===g&&D[2]===p,!0)?(R.add(C),h(v)?i(M,v,[g,p,C],!0):t(w,p,[v,g,C],!0),!0):!1}},Qy=i=>(t,e,[n,s,r],a)=>{const o=t.get(n);o===void 0?t.set(n,new Set([[s,e,r]])):i(o,[s,e,r],c=>c[0]===s&&c[1]===e,a)},tS=i=>(t,e)=>{const n=i(t,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});e.connect(n).connect(t.destination);const s=()=>{e.removeEventListener("ended",s),e.disconnect(n),n.disconnect()};e.addEventListener("ended",s)},eS=i=>(t,e)=>{i(t).add(e)},nS={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",fftSize:2048,maxDecibels:-30,minDecibels:-100,smoothingTimeConstant:.8},iS=(i,t,e,n,s,r)=>class extends i{constructor(o,c){const l=s(o),h={...nS,...c},d=n(l,h),f=r(l)?t():null;super(o,!1,d,f),this._nativeAnalyserNode=d}get fftSize(){return this._nativeAnalyserNode.fftSize}set fftSize(o){this._nativeAnalyserNode.fftSize=o}get frequencyBinCount(){return this._nativeAnalyserNode.frequencyBinCount}get maxDecibels(){return this._nativeAnalyserNode.maxDecibels}set maxDecibels(o){const c=this._nativeAnalyserNode.maxDecibels;if(this._nativeAnalyserNode.maxDecibels=o,!(o>this._nativeAnalyserNode.minDecibels))throw this._nativeAnalyserNode.maxDecibels=c,e()}get minDecibels(){return this._nativeAnalyserNode.minDecibels}set minDecibels(o){const c=this._nativeAnalyserNode.minDecibels;if(this._nativeAnalyserNode.minDecibels=o,!(this._nativeAnalyserNode.maxDecibels>o))throw this._nativeAnalyserNode.minDecibels=c,e()}get smoothingTimeConstant(){return this._nativeAnalyserNode.smoothingTimeConstant}set smoothingTimeConstant(o){this._nativeAnalyserNode.smoothingTimeConstant=o}getByteFrequencyData(o){this._nativeAnalyserNode.getByteFrequencyData(o)}getByteTimeDomainData(o){this._nativeAnalyserNode.getByteTimeDomainData(o)}getFloatFrequencyData(o){this._nativeAnalyserNode.getFloatFrequencyData(o)}getFloatTimeDomainData(o){this._nativeAnalyserNode.getFloatTimeDomainData(o)}},dn=(i,t)=>i.context===t,sS=(i,t,e)=>()=>{const n=new WeakMap,s=async(r,a)=>{let o=t(r);if(!dn(o,a)){const l={channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,fftSize:o.fftSize,maxDecibels:o.maxDecibels,minDecibels:o.minDecibels,smoothingTimeConstant:o.smoothingTimeConstant};o=i(a,l)}return n.set(a,o),await e(r,a,o),o};return{render(r,a){const o=n.get(a);return o!==void 0?Promise.resolve(o):s(r,a)}}},ca=i=>{try{i.copyToChannel(new Float32Array(1),0,-1)}catch{return!1}return!0},hi=()=>new DOMException("","IndexSizeError"),gl=i=>{i.getChannelData=(t=>e=>{try{return t.call(i,e)}catch(n){throw n.code===12?hi():n}})(i.getChannelData)},rS={numberOfChannels:1},oS=(i,t,e,n,s,r,a,o)=>{let c=null;return class pf{constructor(h){if(s===null)throw new Error("Missing the native OfflineAudioContext constructor.");const{length:d,numberOfChannels:f,sampleRate:m}={...rS,...h};c===null&&(c=new s(1,1,44100));const v=n!==null&&t(r,r)?new n({length:d,numberOfChannels:f,sampleRate:m}):c.createBuffer(f,d,m);if(v.numberOfChannels===0)throw e();return typeof v.copyFromChannel!="function"?(a(v),gl(v)):t(ca,()=>ca(v))||o(v),i.add(v),v}static[Symbol.hasInstance](h){return h!==null&&typeof h=="object"&&Object.getPrototypeOf(h)===pf.prototype||i.has(h)}}},En=-34028234663852886e22,_n=-En,Ai=i=>fr.has(i),aS={buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1},cS=(i,t,e,n,s,r,a,o)=>class extends i{constructor(l,h){const d=r(l),f={...aS,...h},m=s(d,f),v=a(d),x=v?t():null;super(l,!1,m,x),this._audioBufferSourceNodeRenderer=x,this._isBufferNullified=!1,this._isBufferSet=f.buffer!==null,this._nativeAudioBufferSourceNode=m,this._onended=null,this._playbackRate=e(this,v,m.playbackRate,_n,En)}get buffer(){return this._isBufferNullified?null:this._nativeAudioBufferSourceNode.buffer}set buffer(l){if(this._nativeAudioBufferSourceNode.buffer=l,l!==null){if(this._isBufferSet)throw n();this._isBufferSet=!0}}get loop(){return this._nativeAudioBufferSourceNode.loop}set loop(l){this._nativeAudioBufferSourceNode.loop=l}get loopEnd(){return this._nativeAudioBufferSourceNode.loopEnd}set loopEnd(l){this._nativeAudioBufferSourceNode.loopEnd=l}get loopStart(){return this._nativeAudioBufferSourceNode.loopStart}set loopStart(l){this._nativeAudioBufferSourceNode.loopStart=l}get onended(){return this._onended}set onended(l){const h=typeof l=="function"?o(this,l):null;this._nativeAudioBufferSourceNode.onended=h;const d=this._nativeAudioBufferSourceNode.onended;this._onended=d!==null&&d===h?l:d}get playbackRate(){return this._playbackRate}start(l=0,h=0,d){if(this._nativeAudioBufferSourceNode.start(l,h,d),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.start=d===void 0?[l,h]:[l,h,d]),this.context.state!=="closed"){pr(this);const f=()=>{this._nativeAudioBufferSourceNode.removeEventListener("ended",f),Ai(this)&&no(this)};this._nativeAudioBufferSourceNode.addEventListener("ended",f)}}stop(l=0){this._nativeAudioBufferSourceNode.stop(l),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.stop=l)}},lS=(i,t,e,n,s)=>()=>{const r=new WeakMap;let a=null,o=null;const c=async(l,h)=>{let d=e(l);const f=dn(d,h);if(!f){const m={buffer:d.buffer,channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,loop:d.loop,loopEnd:d.loopEnd,loopStart:d.loopStart,playbackRate:d.playbackRate.value};d=t(h,m),a!==null&&d.start(...a),o!==null&&d.stop(o)}return r.set(h,d),f?await i(h,l.playbackRate,d.playbackRate):await n(h,l.playbackRate,d.playbackRate),await s(l,h,d),d};return{set start(l){a=l},set stop(l){o=l},render(l,h){const d=r.get(h);return d!==void 0?Promise.resolve(d):c(l,h)}}},uS=i=>"playbackRate"in i,hS=i=>"frequency"in i&&"gain"in i,dS=i=>"offset"in i,fS=i=>!("frequency"in i)&&"gain"in i,pS=i=>"detune"in i&&"frequency"in i&&!("gain"in i),mS=i=>"pan"in i,xn=i=>si(cf,i),io=i=>si(lf,i),$c=(i,t)=>{const{activeInputs:e}=xn(i);e.forEach(s=>s.forEach(([r])=>{t.includes(i)||$c(r,[...t,i])}));const n=uS(i)?[i.playbackRate]:ff(i)?Array.from(i.parameters.values()):hS(i)?[i.Q,i.detune,i.frequency,i.gain]:dS(i)?[i.offset]:fS(i)?[i.gain]:pS(i)?[i.detune,i.frequency]:mS(i)?[i.pan]:[];for(const s of n){const r=io(s);r!==void 0&&r.activeInputs.forEach(([a])=>$c(a,t))}Ai(i)&&no(i)},mf=i=>{$c(i.destination,[])},gS=i=>i===void 0||typeof i=="number"||typeof i=="string"&&(i==="balanced"||i==="interactive"||i==="playback"),_S=(i,t,e,n,s,r,a,o,c)=>class extends i{constructor(h={}){if(c===null)throw new Error("Missing the native AudioContext constructor.");let d;try{d=new c(h)}catch(v){throw v.code===12&&v.message==="sampleRate is not in range"?e():v}if(d===null)throw n();if(!gS(h.latencyHint))throw new TypeError(`The provided value '${h.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);if(h.sampleRate!==void 0&&d.sampleRate!==h.sampleRate)throw e();super(d,2);const{latencyHint:f}=h,{sampleRate:m}=d;if(this._baseLatency=typeof d.baseLatency=="number"?d.baseLatency:f==="balanced"?512/m:f==="interactive"||f===void 0?256/m:f==="playback"?1024/m:Math.max(2,Math.min(128,Math.round(f*m/128)))*128/m,this._nativeAudioContext=d,c.name==="webkitAudioContext"?(this._nativeGainNode=d.createGain(),this._nativeOscillatorNode=d.createOscillator(),this._nativeGainNode.gain.value=1e-37,this._nativeOscillatorNode.connect(this._nativeGainNode).connect(d.destination),this._nativeOscillatorNode.start()):(this._nativeGainNode=null,this._nativeOscillatorNode=null),this._state=null,d.state==="running"){this._state="suspended";const v=()=>{this._state==="suspended"&&(this._state=null),d.removeEventListener("statechange",v)};d.addEventListener("statechange",v)}}get baseLatency(){return this._baseLatency}get state(){return this._state!==null?this._state:this._nativeAudioContext.state}close(){return this.state==="closed"?this._nativeAudioContext.close().then(()=>{throw t()}):(this._state==="suspended"&&(this._state=null),this._nativeAudioContext.close().then(()=>{this._nativeGainNode!==null&&this._nativeOscillatorNode!==null&&(this._nativeOscillatorNode.stop(),this._nativeGainNode.disconnect(),this._nativeOscillatorNode.disconnect()),mf(this)}))}createMediaElementSource(h){return new s(this,{mediaElement:h})}createMediaStreamDestination(){return new r(this)}createMediaStreamSource(h){return new a(this,{mediaStream:h})}createMediaStreamTrackSource(h){return new o(this,{mediaStreamTrack:h})}resume(){return this._state==="suspended"?new Promise((h,d)=>{const f=()=>{this._nativeAudioContext.removeEventListener("statechange",f),this._nativeAudioContext.state==="running"?h():this.resume().then(h,d)};this._nativeAudioContext.addEventListener("statechange",f)}):this._nativeAudioContext.resume().catch(h=>{throw h===void 0||h.code===15?t():h})}suspend(){return this._nativeAudioContext.suspend().catch(h=>{throw h===void 0?t():h})}},vS=(i,t,e,n,s,r,a,o)=>class extends i{constructor(l,h){const d=r(l),f=a(d),m=s(d,h,f),v=f?t(o):null;super(l,!1,m,v),this._isNodeOfNativeOfflineAudioContext=f,this._nativeAudioDestinationNode=m}get channelCount(){return this._nativeAudioDestinationNode.channelCount}set channelCount(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();if(l>this._nativeAudioDestinationNode.maxChannelCount)throw e();this._nativeAudioDestinationNode.channelCount=l}get channelCountMode(){return this._nativeAudioDestinationNode.channelCountMode}set channelCountMode(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();this._nativeAudioDestinationNode.channelCountMode=l}get maxChannelCount(){return this._nativeAudioDestinationNode.maxChannelCount}},xS=i=>{const t=new WeakMap,e=async(n,s)=>{const r=s.destination;return t.set(s,r),await i(n,s,r),r};return{render(n,s){const r=t.get(s);return r!==void 0?Promise.resolve(r):e(n,s)}}},yS=(i,t,e,n,s,r,a,o)=>(c,l)=>{const h=l.listener,d=()=>{const A=new Float32Array(1),R=t(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:9}),C=a(l);let D=!1,T=[0,0,-1,0,1,0],S=[0,0,0];const P=()=>{if(D)return;D=!0;const z=n(l,256,9,0);z.onaudioprocess=({inputBuffer:k})=>{const H=[r(k,A,0),r(k,A,1),r(k,A,2),r(k,A,3),r(k,A,4),r(k,A,5)];H.some((Y,$)=>Y!==T[$])&&(h.setOrientation(...H),T=H);const j=[r(k,A,6),r(k,A,7),r(k,A,8)];j.some((Y,$)=>Y!==S[$])&&(h.setPosition(...j),S=j)},R.connect(z)},O=z=>k=>{k!==T[z]&&(T[z]=k,h.setOrientation(...T))},G=z=>k=>{k!==S[z]&&(S[z]=k,h.setPosition(...S))},U=(z,k,H)=>{const j=e(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:k});j.connect(R,0,z),j.start(),Object.defineProperty(j.offset,"defaultValue",{get(){return k}});const Y=i({context:c},C,j.offset,_n,En);return o(Y,"value",$=>()=>$.call(Y),$=>st=>{try{$.call(Y,st)}catch(rt){if(rt.code!==9)throw rt}P(),C&&H(st)}),Y.cancelAndHoldAtTime=($=>C?()=>{throw s()}:(...st)=>{const rt=$.apply(Y,st);return P(),rt})(Y.cancelAndHoldAtTime),Y.cancelScheduledValues=($=>C?()=>{throw s()}:(...st)=>{const rt=$.apply(Y,st);return P(),rt})(Y.cancelScheduledValues),Y.exponentialRampToValueAtTime=($=>C?()=>{throw s()}:(...st)=>{const rt=$.apply(Y,st);return P(),rt})(Y.exponentialRampToValueAtTime),Y.linearRampToValueAtTime=($=>C?()=>{throw s()}:(...st)=>{const rt=$.apply(Y,st);return P(),rt})(Y.linearRampToValueAtTime),Y.setTargetAtTime=($=>C?()=>{throw s()}:(...st)=>{const rt=$.apply(Y,st);return P(),rt})(Y.setTargetAtTime),Y.setValueAtTime=($=>C?()=>{throw s()}:(...st)=>{const rt=$.apply(Y,st);return P(),rt})(Y.setValueAtTime),Y.setValueCurveAtTime=($=>C?()=>{throw s()}:(...st)=>{const rt=$.apply(Y,st);return P(),rt})(Y.setValueCurveAtTime),Y};return{forwardX:U(0,0,O(0)),forwardY:U(1,0,O(1)),forwardZ:U(2,-1,O(2)),positionX:U(6,0,G(0)),positionY:U(7,0,G(1)),positionZ:U(8,0,G(2)),upX:U(3,0,O(3)),upY:U(4,1,O(4)),upZ:U(5,0,O(5))}},{forwardX:f,forwardY:m,forwardZ:v,positionX:x,positionY:g,positionZ:p,upX:b,upY:M,upZ:w}=h.forwardX===void 0?d():h;return{get forwardX(){return f},get forwardY(){return m},get forwardZ(){return v},get positionX(){return x},get positionY(){return g},get positionZ(){return p},get upX(){return b},get upY(){return M},get upZ(){return w}}},la=i=>"context"in i,so=i=>la(i[0]),Ss=(i,t,e,n)=>{for(const s of i)if(e(s)){if(n)return!1;throw Error("The set contains at least one similar element.")}return i.add(t),!0},ad=(i,t,[e,n],s)=>{Ss(i,[t,e,n],r=>r[0]===t&&r[1]===e,s)},cd=(i,[t,e,n],s)=>{const r=i.get(t);r===void 0?i.set(t,new Set([[e,n]])):Ss(r,[e,n],a=>a[0]===e,s)},Tr=i=>"inputs"in i,ua=(i,t,e,n)=>{if(Tr(t)){const s=t.inputs[n];return i.connect(s,e,0),[s,e,0]}return i.connect(t,e,n),[t,e,n]},gf=(i,t,e)=>{for(const n of i)if(n[0]===t&&n[1]===e)return i.delete(n),n;return null},SS=(i,t,e)=>Ta(i,n=>n[0]===t&&n[1]===e),_f=(i,t)=>{if(!eo(i).delete(t))throw new Error("Missing the expected event listener.")},vf=(i,t,e)=>{const n=si(i,t),s=Ta(n,r=>r[0]===e);return n.size===0&&i.delete(t),s},ha=(i,t,e,n)=>{Tr(t)?i.disconnect(t.inputs[n],e,0):i.disconnect(t,e,n)},Ce=i=>si(pl,i),jr=i=>si(ml,i),gs=i=>qc.has(i),Ko=i=>!fr.has(i),ld=(i,t)=>new Promise(e=>{if(t!==null)e(!0);else{const n=i.createScriptProcessor(256,1,1),s=i.createGain(),r=i.createBuffer(1,2,44100),a=r.getChannelData(0);a[0]=1,a[1]=1;const o=i.createBufferSource();o.buffer=r,o.loop=!0,o.connect(n).connect(i.destination),o.connect(s),o.disconnect(s),n.onaudioprocess=c=>{const l=c.inputBuffer.getChannelData(0);Array.prototype.some.call(l,h=>h===1)?e(!0):e(!1),o.stop(),n.onaudioprocess=null,o.disconnect(n),n.disconnect(i.destination)},o.start()}}),Pc=(i,t)=>{const e=new Map;for(const n of i)for(const s of n){const r=e.get(s);e.set(s,r===void 0?1:r+1)}e.forEach((n,s)=>t(s,n))},da=i=>"context"in i,MS=i=>{const t=new Map;i.connect=(e=>(n,s=0,r=0)=>{const a=da(n)?e(n,s,r):e(n,s),o=t.get(n);return o===void 0?t.set(n,[{input:r,output:s}]):o.every(c=>c.input!==r||c.output!==s)&&o.push({input:r,output:s}),a})(i.connect.bind(i)),i.disconnect=(e=>(n,s,r)=>{if(e.apply(i),n===void 0)t.clear();else if(typeof n=="number")for(const[a,o]of t){const c=o.filter(l=>l.output!==n);c.length===0?t.delete(a):t.set(a,c)}else if(t.has(n))if(s===void 0)t.delete(n);else{const a=t.get(n);if(a!==void 0){const o=a.filter(c=>c.output!==s&&(c.input!==r||r===void 0));o.length===0?t.delete(n):t.set(n,o)}}for(const[a,o]of t)o.forEach(c=>{da(a)?i.connect(a,c.output,c.input):i.connect(a,c.output)})})(i.disconnect)},TS=(i,t,e,n)=>{const{activeInputs:s,passiveInputs:r}=io(t),{outputs:a}=xn(i),o=eo(i),c=l=>{const h=Ce(i),d=jr(t);if(l){const f=vf(r,i,e);ad(s,i,f,!1),!n&&!gs(i)&&h.connect(d,e)}else{const f=SS(s,i,e);cd(r,f,!1),!n&&!gs(i)&&h.disconnect(d,e)}};return Ss(a,[t,e],l=>l[0]===t&&l[1]===e,!0)?(o.add(c),Ai(i)?ad(s,i,[e,c],!0):cd(r,[i,e,c],!0),!0):!1},ES=(i,t,e,n)=>{const{activeInputs:s,passiveInputs:r}=xn(t),a=gf(s[n],i,e);return a===null?[df(r,i,e,n)[2],!1]:[a[2],!0]},wS=(i,t,e)=>{const{activeInputs:n,passiveInputs:s}=io(t),r=gf(n,i,e);return r===null?[vf(s,i,e)[1],!1]:[r[2],!0]},_l=(i,t,e,n,s)=>{const[r,a]=ES(i,e,n,s);if(r!==null&&(_f(i,r),a&&!t&&!gs(i)&&ha(Ce(i),Ce(e),n,s)),Ai(e)){const{activeInputs:o}=xn(e);Zc(e,o)}},vl=(i,t,e,n)=>{const[s,r]=wS(i,e,n);s!==null&&(_f(i,s),r&&!t&&!gs(i)&&Ce(i).disconnect(jr(e),n))},bS=(i,t)=>{const e=xn(i),n=[];for(const s of e.outputs)so(s)?_l(i,t,...s):vl(i,t,...s),n.push(s[0]);return e.outputs.clear(),n},AS=(i,t,e)=>{const n=xn(i),s=[];for(const r of n.outputs)r[1]===e&&(so(r)?_l(i,t,...r):vl(i,t,...r),s.push(r[0]),n.outputs.delete(r));return s},CS=(i,t,e,n,s)=>{const r=xn(i);return Array.from(r.outputs).filter(a=>a[0]===e&&(n===void 0||a[1]===n)&&(s===void 0||a[2]===s)).map(a=>(so(a)?_l(i,t,...a):vl(i,t,...a),r.outputs.delete(a),a[0]))},RS=(i,t,e,n,s,r,a,o,c,l,h,d,f,m,v,x)=>class extends l{constructor(p,b,M,w){super(M),this._context=p,this._nativeAudioNode=M;const A=h(p);d(A)&&e(ld,()=>ld(A,x))!==!0&&MS(M),pl.set(this,M),uf.set(this,new Set),p.state!=="closed"&&b&&pr(this),i(this,w,M)}get channelCount(){return this._nativeAudioNode.channelCount}set channelCount(p){this._nativeAudioNode.channelCount=p}get channelCountMode(){return this._nativeAudioNode.channelCountMode}set channelCountMode(p){this._nativeAudioNode.channelCountMode=p}get channelInterpretation(){return this._nativeAudioNode.channelInterpretation}set channelInterpretation(p){this._nativeAudioNode.channelInterpretation=p}get context(){return this._context}get numberOfInputs(){return this._nativeAudioNode.numberOfInputs}get numberOfOutputs(){return this._nativeAudioNode.numberOfOutputs}connect(p,b=0,M=0){if(b<0||b>=this._nativeAudioNode.numberOfOutputs)throw s();const w=h(this._context),A=v(w);if(f(p)||m(p))throw r();if(la(p)){const D=Ce(p);try{const S=ua(this._nativeAudioNode,D,b,M),P=Ko(this);(A||P)&&this._nativeAudioNode.disconnect(...S),this.context.state!=="closed"&&!P&&Ko(p)&&pr(p)}catch(S){throw S.code===12?r():S}if(t(this,p,b,M,A)){const S=c([this],p);Pc(S,n(A))}return p}const R=jr(p);if(R.name==="playbackRate"&&R.maxValue===1024)throw a();try{this._nativeAudioNode.connect(R,b),(A||Ko(this))&&this._nativeAudioNode.disconnect(R,b)}catch(D){throw D.code===12?r():D}if(TS(this,p,b,A)){const D=c([this],p);Pc(D,n(A))}}disconnect(p,b,M){let w;const A=h(this._context),R=v(A);if(p===void 0)w=bS(this,R);else if(typeof p=="number"){if(p<0||p>=this.numberOfOutputs)throw s();w=AS(this,R,p)}else{if(b!==void 0&&(b<0||b>=this.numberOfOutputs)||la(p)&&M!==void 0&&(M<0||M>=p.numberOfInputs))throw s();if(w=CS(this,R,p,b,M),w.length===0)throw r()}for(const C of w){const D=c([this],C);Pc(D,o)}}},PS=(i,t,e,n,s,r,a,o,c,l,h,d,f)=>(m,v,x,g=null,p=null)=>{const b=x.value,M=new Vy(b),w=v?n(M):null,A={get defaultValue(){return b},get maxValue(){return g===null?x.maxValue:g},get minValue(){return p===null?x.minValue:p},get value(){return x.value},set value(R){x.value=R,A.setValueAtTime(R,m.context.currentTime)},cancelAndHoldAtTime(R){if(typeof x.cancelAndHoldAtTime=="function")w===null&&M.flush(m.context.currentTime),M.add(s(R)),x.cancelAndHoldAtTime(R);else{const C=Array.from(M).pop();w===null&&M.flush(m.context.currentTime),M.add(s(R));const D=Array.from(M).pop();x.cancelScheduledValues(R),C!==D&&D!==void 0&&(D.type==="exponentialRampToValue"?x.exponentialRampToValueAtTime(D.value,D.endTime):D.type==="linearRampToValue"?x.linearRampToValueAtTime(D.value,D.endTime):D.type==="setValue"?x.setValueAtTime(D.value,D.startTime):D.type==="setValueCurve"&&x.setValueCurveAtTime(D.values,D.startTime,D.duration))}return A},cancelScheduledValues(R){return w===null&&M.flush(m.context.currentTime),M.add(r(R)),x.cancelScheduledValues(R),A},exponentialRampToValueAtTime(R,C){if(R===0)throw new RangeError;if(!Number.isFinite(C)||C<0)throw new RangeError;const D=m.context.currentTime;return w===null&&M.flush(D),Array.from(M).length===0&&(M.add(l(b,D)),x.setValueAtTime(b,D)),M.add(a(R,C)),x.exponentialRampToValueAtTime(R,C),A},linearRampToValueAtTime(R,C){const D=m.context.currentTime;return w===null&&M.flush(D),Array.from(M).length===0&&(M.add(l(b,D)),x.setValueAtTime(b,D)),M.add(o(R,C)),x.linearRampToValueAtTime(R,C),A},setTargetAtTime(R,C,D){return w===null&&M.flush(m.context.currentTime),M.add(c(R,C,D)),x.setTargetAtTime(R,C,D),A},setValueAtTime(R,C){return w===null&&M.flush(m.context.currentTime),M.add(l(R,C)),x.setValueAtTime(R,C),A},setValueCurveAtTime(R,C,D){const T=R instanceof Float32Array?R:new Float32Array(R);if(d!==null&&d.name==="webkitAudioContext"){const S=C+D,P=m.context.sampleRate,O=Math.ceil(C*P),G=Math.floor(S*P),U=G-O,z=new Float32Array(U);for(let H=0;H<U;H+=1){const j=(T.length-1)/D*((O+H)/P-C),Y=Math.floor(j),$=Math.ceil(j);z[H]=Y===$?T[Y]:(1-(j-Y))*T[Y]+(1-($-j))*T[$]}w===null&&M.flush(m.context.currentTime),M.add(h(z,C,D)),x.setValueCurveAtTime(z,C,D);const k=G/P;k<S&&f(A,z[z.length-1],k),f(A,T[T.length-1],S)}else w===null&&M.flush(m.context.currentTime),M.add(h(T,C,D)),x.setValueCurveAtTime(T,C,D);return A}};return e.set(A,x),t.set(A,m),i(A,w),A},NS=i=>({replay(t){for(const e of i)if(e.type==="exponentialRampToValue"){const{endTime:n,value:s}=e;t.exponentialRampToValueAtTime(s,n)}else if(e.type==="linearRampToValue"){const{endTime:n,value:s}=e;t.linearRampToValueAtTime(s,n)}else if(e.type==="setTarget"){const{startTime:n,target:s,timeConstant:r}=e;t.setTargetAtTime(s,n,r)}else if(e.type==="setValue"){const{startTime:n,value:s}=e;t.setValueAtTime(s,n)}else if(e.type==="setValueCurve"){const{duration:n,startTime:s,values:r}=e;t.setValueCurveAtTime(r,s,n)}else throw new Error("Can't apply an unknown automation.")}});class xf{constructor(t){this._map=new Map(t)}get size(){return this._map.size}entries(){return this._map.entries()}forEach(t,e=null){return this._map.forEach((n,s)=>t.call(e,n,s,this))}get(t){return this._map.get(t)}has(t){return this._map.has(t)}keys(){return this._map.keys()}values(){return this._map.values()}}const DS={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:1,numberOfOutputs:1,parameterData:{},processorOptions:{}},LS=(i,t,e,n,s,r,a,o,c,l,h,d,f,m)=>class extends t{constructor(x,g,p){var b;const M=o(x),w=c(M),A=h({...DS,...p});f(A);const R=jc.get(M),C=R==null?void 0:R.get(g),D=w||M.state!=="closed"?M:(b=a(M))!==null&&b!==void 0?b:M,T=s(D,w?null:x.baseLatency,l,g,C,A),S=w?n(g,A,C):null;super(x,!0,T,S);const P=[];T.parameters.forEach((G,U)=>{const z=e(this,w,G);P.push([U,z])}),this._nativeAudioWorkletNode=T,this._onprocessorerror=null,this._parameters=new xf(P),w&&i(M,this);const{activeInputs:O}=r(this);d(T,O)}get onprocessorerror(){return this._onprocessorerror}set onprocessorerror(x){const g=typeof x=="function"?m(this,x):null;this._nativeAudioWorkletNode.onprocessorerror=g;const p=this._nativeAudioWorkletNode.onprocessorerror;this._onprocessorerror=p!==null&&p===g?x:p}get parameters(){return this._parameters===null?this._nativeAudioWorkletNode.parameters:this._parameters}get port(){return this._nativeAudioWorkletNode.port}};function fa(i,t,e,n,s){if(typeof i.copyFromChannel=="function")t[e].byteLength===0&&(t[e]=new Float32Array(128)),i.copyFromChannel(t[e],n,s);else{const r=i.getChannelData(n);if(t[e].byteLength===0)t[e]=r.slice(s,s+128);else{const a=new Float32Array(r.buffer,s*Float32Array.BYTES_PER_ELEMENT,128);t[e].set(a)}}}const yf=(i,t,e,n,s)=>{typeof i.copyToChannel=="function"?t[e].byteLength!==0&&i.copyToChannel(t[e],n,s):t[e].byteLength!==0&&i.getChannelData(n).set(t[e],s)},pa=(i,t)=>{const e=[];for(let n=0;n<i;n+=1){const s=[],r=typeof t=="number"?t:t[n];for(let a=0;a<r;a+=1)s.push(new Float32Array(128));e.push(s)}return e},IS=(i,t)=>{const e=si(Yc,i),n=Ce(t);return si(e,n)},OS=async(i,t,e,n,s,r,a)=>{const o=t===null?Math.ceil(i.context.length/128)*128:t.length,c=n.channelCount*n.numberOfInputs,l=s.reduce((g,p)=>g+p,0),h=l===0?null:e.createBuffer(l,o,e.sampleRate);if(r===void 0)throw new Error("Missing the processor constructor.");const d=xn(i),f=await IS(e,i),m=pa(n.numberOfInputs,n.channelCount),v=pa(n.numberOfOutputs,s),x=Array.from(i.parameters.keys()).reduce((g,p)=>({...g,[p]:new Float32Array(128)}),{});for(let g=0;g<o;g+=128){if(n.numberOfInputs>0&&t!==null)for(let p=0;p<n.numberOfInputs;p+=1)for(let b=0;b<n.channelCount;b+=1)fa(t,m[p],b,b,g);r.parameterDescriptors!==void 0&&t!==null&&r.parameterDescriptors.forEach(({name:p},b)=>{fa(t,x,p,c+b,g)});for(let p=0;p<n.numberOfInputs;p+=1)for(let b=0;b<s[p];b+=1)v[p][b].byteLength===0&&(v[p][b]=new Float32Array(128));try{const p=m.map((M,w)=>d.activeInputs[w].size===0?[]:M),b=a(g/e.sampleRate,e.sampleRate,()=>f.process(p,v,x));if(h!==null)for(let M=0,w=0;M<n.numberOfOutputs;M+=1){for(let A=0;A<s[M];A+=1)yf(h,v[M],A,w+A,g);w+=s[M]}if(!b)break}catch(p){i.dispatchEvent(new ErrorEvent("processorerror",{colno:p.colno,filename:p.filename,lineno:p.lineno,message:p.message}));break}}return h},US=(i,t,e,n,s,r,a,o,c,l,h,d,f,m,v,x)=>(g,p,b)=>{const M=new WeakMap;let w=null;const A=async(R,C)=>{let D=h(R),T=null;const S=dn(D,C),P=Array.isArray(p.outputChannelCount)?p.outputChannelCount:Array.from(p.outputChannelCount);if(d===null){const O=P.reduce((k,H)=>k+H,0),G=s(C,{channelCount:Math.max(1,O),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,O)}),U=[];for(let k=0;k<R.numberOfOutputs;k+=1)U.push(n(C,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:P[k]}));const z=a(C,{channelCount:p.channelCount,channelCountMode:p.channelCountMode,channelInterpretation:p.channelInterpretation,gain:1});z.connect=t.bind(null,U),z.disconnect=c.bind(null,U),T=[G,U,z]}else S||(D=new d(C,g));if(M.set(C,T===null?D:T[2]),T!==null){if(w===null){if(b===void 0)throw new Error("Missing the processor constructor.");if(f===null)throw new Error("Missing the native OfflineAudioContext constructor.");const H=R.channelCount*R.numberOfInputs,j=b.parameterDescriptors===void 0?0:b.parameterDescriptors.length,Y=H+j;w=OS(R,Y===0?null:await(async()=>{const st=new f(Y,Math.ceil(R.context.length/128)*128,C.sampleRate),rt=[],Q=[];for(let _t=0;_t<p.numberOfInputs;_t+=1)rt.push(a(st,{channelCount:p.channelCount,channelCountMode:p.channelCountMode,channelInterpretation:p.channelInterpretation,gain:1})),Q.push(s(st,{channelCount:p.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:p.channelCount}));const ot=await Promise.all(Array.from(R.parameters.values()).map(async _t=>{const Et=r(st,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:_t.value});return await m(st,_t,Et.offset),Et})),ct=n(st,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,H+j)});for(let _t=0;_t<p.numberOfInputs;_t+=1){rt[_t].connect(Q[_t]);for(let Et=0;Et<p.channelCount;Et+=1)Q[_t].connect(ct,Et,_t*p.channelCount+Et)}for(const[_t,Et]of ot.entries())Et.connect(ct,0,H+_t),Et.start(0);return ct.connect(st.destination),await Promise.all(rt.map(_t=>v(R,st,_t))),x(st)})(),C,p,P,b,l)}const O=await w,G=e(C,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),[U,z,k]=T;O!==null&&(G.buffer=O,G.start(0)),G.connect(U);for(let H=0,j=0;H<R.numberOfOutputs;H+=1){const Y=z[H];for(let $=0;$<P[H];$+=1)U.connect(Y,j+$,$);j+=P[H]}return k}if(S)for(const[O,G]of R.parameters.entries())await i(C,G,D.parameters.get(O));else for(const[O,G]of R.parameters.entries())await m(C,G,D.parameters.get(O));return await v(R,C,D),D};return{render(R,C){o(C,R);const D=M.get(C);return D!==void 0?Promise.resolve(D):A(R,C)}}},FS=(i,t,e,n,s,r,a,o,c,l,h,d,f,m,v,x,g,p,b,M)=>class extends v{constructor(A,R){super(A,R),this._nativeContext=A,this._audioWorklet=i===void 0?void 0:{addModule:(C,D)=>i(this,C,D)}}get audioWorklet(){return this._audioWorklet}createAnalyser(){return new t(this)}createBiquadFilter(){return new s(this)}createBuffer(A,R,C){return new e({length:R,numberOfChannels:A,sampleRate:C})}createBufferSource(){return new n(this)}createChannelMerger(A=6){return new r(this,{numberOfInputs:A})}createChannelSplitter(A=6){return new a(this,{numberOfOutputs:A})}createConstantSource(){return new o(this)}createConvolver(){return new c(this)}createDelay(A=1){return new h(this,{maxDelayTime:A})}createDynamicsCompressor(){return new d(this)}createGain(){return new f(this)}createIIRFilter(A,R){return new m(this,{feedback:R,feedforward:A})}createOscillator(){return new x(this)}createPanner(){return new g(this)}createPeriodicWave(A,R,C={disableNormalization:!1}){return new p(this,{...C,imag:R,real:A})}createStereoPanner(){return new b(this)}createWaveShaper(){return new M(this)}decodeAudioData(A,R,C){return l(this._nativeContext,A).then(D=>(typeof R=="function"&&R(D),D),D=>{throw typeof C=="function"&&C(D),D})}},kS={Q:1,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:350,gain:0,type:"lowpass"},BS=(i,t,e,n,s,r,a,o)=>class extends i{constructor(l,h){const d=r(l),f={...kS,...h},m=s(d,f),v=a(d),x=v?e():null;super(l,!1,m,x),this._Q=t(this,v,m.Q,_n,En),this._detune=t(this,v,m.detune,1200*Math.log2(_n),-1200*Math.log2(_n)),this._frequency=t(this,v,m.frequency,l.sampleRate/2,0),this._gain=t(this,v,m.gain,40*Math.log10(_n),En),this._nativeBiquadFilterNode=m,o(this,1)}get detune(){return this._detune}get frequency(){return this._frequency}get gain(){return this._gain}get Q(){return this._Q}get type(){return this._nativeBiquadFilterNode.type}set type(l){this._nativeBiquadFilterNode.type=l}getFrequencyResponse(l,h,d){try{this._nativeBiquadFilterNode.getFrequencyResponse(l,h,d)}catch(f){throw f.code===11?n():f}if(l.length!==h.length||h.length!==d.length)throw n()}},VS=(i,t,e,n,s)=>()=>{const r=new WeakMap,a=async(o,c)=>{let l=e(o);const h=dn(l,c);if(!h){const d={Q:l.Q.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,detune:l.detune.value,frequency:l.frequency.value,gain:l.gain.value,type:l.type};l=t(c,d)}return r.set(c,l),h?(await i(c,o.Q,l.Q),await i(c,o.detune,l.detune),await i(c,o.frequency,l.frequency),await i(c,o.gain,l.gain)):(await n(c,o.Q,l.Q),await n(c,o.detune,l.detune),await n(c,o.frequency,l.frequency),await n(c,o.gain,l.gain)),await s(o,c,l),l};return{render(o,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):a(o,c)}}},zS=(i,t)=>(e,n)=>{const s=t.get(e);if(s!==void 0)return s;const r=i.get(e);if(r!==void 0)return r;try{const a=n();return a instanceof Promise?(i.set(e,a),a.catch(()=>!1).then(o=>(i.delete(e),t.set(e,o),o))):(t.set(e,a),a)}catch{return t.set(e,!1),!1}},GS={channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6},HS=(i,t,e,n,s)=>class extends i{constructor(a,o){const c=n(a),l={...GS,...o},h=e(c,l),d=s(c)?t():null;super(a,!1,h,d)}},WS=(i,t,e)=>()=>{const n=new WeakMap,s=async(r,a)=>{let o=t(r);if(!dn(o,a)){const l={channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,numberOfInputs:o.numberOfInputs};o=i(a,l)}return n.set(a,o),await e(r,a,o),o};return{render(r,a){const o=n.get(a);return o!==void 0?Promise.resolve(o):s(r,a)}}},XS={channelCount:6,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:6},qS=(i,t,e,n,s,r)=>class extends i{constructor(o,c){const l=n(o),h=r({...XS,...c}),d=e(l,h),f=s(l)?t():null;super(o,!1,d,f)}},jS=(i,t,e)=>()=>{const n=new WeakMap,s=async(r,a)=>{let o=t(r);if(!dn(o,a)){const l={channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,numberOfOutputs:o.numberOfOutputs};o=i(a,l)}return n.set(a,o),await e(r,a,o),o};return{render(r,a){const o=n.get(a);return o!==void 0?Promise.resolve(o):s(r,a)}}},YS=i=>(t,e,n)=>i(e,t,n),ZS=i=>(t,e,n=0,s=0)=>{const r=t[n];if(r===void 0)throw i();return da(e)?r.connect(e,0,s):r.connect(e,0)},$S=i=>(t,e)=>{const n=i(t,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),s=t.createBuffer(1,2,44100);return n.buffer=s,n.loop=!0,n.connect(e),n.start(),()=>{n.stop(),n.disconnect(e)}},KS={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",offset:1},JS=(i,t,e,n,s,r,a)=>class extends i{constructor(c,l){const h=s(c),d={...KS,...l},f=n(h,d),m=r(h),v=m?e():null;super(c,!1,f,v),this._constantSourceNodeRenderer=v,this._nativeConstantSourceNode=f,this._offset=t(this,m,f.offset,_n,En),this._onended=null}get offset(){return this._offset}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?a(this,c):null;this._nativeConstantSourceNode.onended=l;const h=this._nativeConstantSourceNode.onended;this._onended=h!==null&&h===l?c:h}start(c=0){if(this._nativeConstantSourceNode.start(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.start=c),this.context.state!=="closed"){pr(this);const l=()=>{this._nativeConstantSourceNode.removeEventListener("ended",l),Ai(this)&&no(this)};this._nativeConstantSourceNode.addEventListener("ended",l)}}stop(c=0){this._nativeConstantSourceNode.stop(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.stop=c)}},QS=(i,t,e,n,s)=>()=>{const r=new WeakMap;let a=null,o=null;const c=async(l,h)=>{let d=e(l);const f=dn(d,h);if(!f){const m={channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,offset:d.offset.value};d=t(h,m),a!==null&&d.start(a),o!==null&&d.stop(o)}return r.set(h,d),f?await i(h,l.offset,d.offset):await n(h,l.offset,d.offset),await s(l,h,d),d};return{set start(l){a=l},set stop(l){o=l},render(l,h){const d=r.get(h);return d!==void 0?Promise.resolve(d):c(l,h)}}},tM=i=>t=>(i[0]=t,i[0]),eM={buffer:null,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",disableNormalization:!1},nM=(i,t,e,n,s,r)=>class extends i{constructor(o,c){const l=n(o),h={...eM,...c},d=e(l,h),m=s(l)?t():null;super(o,!1,d,m),this._isBufferNullified=!1,this._nativeConvolverNode=d,h.buffer!==null&&r(this,h.buffer.duration)}get buffer(){return this._isBufferNullified?null:this._nativeConvolverNode.buffer}set buffer(o){if(this._nativeConvolverNode.buffer=o,o===null&&this._nativeConvolverNode.buffer!==null){const c=this._nativeConvolverNode.context;this._nativeConvolverNode.buffer=c.createBuffer(1,1,c.sampleRate),this._isBufferNullified=!0,r(this,0)}else this._isBufferNullified=!1,r(this,this._nativeConvolverNode.buffer===null?0:this._nativeConvolverNode.buffer.duration)}get normalize(){return this._nativeConvolverNode.normalize}set normalize(o){this._nativeConvolverNode.normalize=o}},iM=(i,t,e)=>()=>{const n=new WeakMap,s=async(r,a)=>{let o=t(r);if(!dn(o,a)){const l={buffer:o.buffer,channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,disableNormalization:!o.normalize};o=i(a,l)}return n.set(a,o),Tr(o)?await e(r,a,o.inputs[0]):await e(r,a,o),o};return{render(r,a){const o=n.get(a);return o!==void 0?Promise.resolve(o):s(r,a)}}},sM=(i,t)=>(e,n,s)=>{if(t===null)throw new Error("Missing the native OfflineAudioContext constructor.");try{return new t(e,n,s)}catch(r){throw r.name==="SyntaxError"?i():r}},rM=()=>new DOMException("","DataCloneError"),ud=i=>{const{port1:t,port2:e}=new MessageChannel;return new Promise(n=>{const s=()=>{e.onmessage=null,t.close(),e.close(),n()};e.onmessage=()=>s();try{t.postMessage(i,[i])}catch{}finally{s()}})},oM=(i,t,e,n,s,r,a,o,c,l,h)=>(d,f)=>{const m=a(d)?d:r(d);if(s.has(f)){const v=e();return Promise.reject(v)}try{s.add(f)}catch{}return t(c,()=>c(m))?m.decodeAudioData(f).then(v=>(ud(f).catch(()=>{}),t(o,()=>o(v))||h(v),i.add(v),v)):new Promise((v,x)=>{const g=async()=>{try{await ud(f)}catch{}},p=b=>{x(b),g()};try{m.decodeAudioData(f,b=>{typeof b.copyFromChannel!="function"&&(l(b),gl(b)),i.add(b),g().then(()=>v(b))},b=>{p(b===null?n():b)})}catch(b){p(b)}})},aM=(i,t,e,n,s,r,a,o)=>(c,l)=>{const h=t.get(c);if(h===void 0)throw new Error("Missing the expected cycle count.");const d=r(c.context),f=o(d);if(h===l){if(t.delete(c),!f&&a(c)){const m=n(c),{outputs:v}=e(c);for(const x of v)if(so(x)){const g=n(x[0]);i(m,g,x[1],x[2])}else{const g=s(x[0]);m.connect(g,x[1])}}}else t.set(c,h-l)},cM={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",delayTime:0,maxDelayTime:1},lM=(i,t,e,n,s,r,a)=>class extends i{constructor(c,l){const h=s(c),d={...cM,...l},f=n(h,d),m=r(h),v=m?e(d.maxDelayTime):null;super(c,!1,f,v),this._delayTime=t(this,m,f.delayTime),a(this,d.maxDelayTime)}get delayTime(){return this._delayTime}},uM=(i,t,e,n,s)=>r=>{const a=new WeakMap,o=async(c,l)=>{let h=e(c);const d=dn(h,l);if(!d){const f={channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,delayTime:h.delayTime.value,maxDelayTime:r};h=t(l,f)}return a.set(l,h),d?await i(l,c.delayTime,h.delayTime):await n(l,c.delayTime,h.delayTime),await s(c,l,h),h};return{render(c,l){const h=a.get(l);return h!==void 0?Promise.resolve(h):o(c,l)}}},hM=i=>(t,e,n,s)=>i(t[s],r=>r[0]===e&&r[1]===n),dM=i=>(t,e)=>{i(t).delete(e)},fM=i=>"delayTime"in i,pM=(i,t,e)=>function n(s,r){const a=la(r)?r:e(i,r);if(fM(a))return[];if(s[0]===a)return[s];if(s.includes(a))return[];const{outputs:o}=t(a);return Array.from(o).map(c=>n([...s,a],c[0])).reduce((c,l)=>c.concat(l),[])},jo=(i,t,e)=>{const n=t[e];if(n===void 0)throw i();return n},mM=i=>(t,e=void 0,n=void 0,s=0)=>e===void 0?t.forEach(r=>r.disconnect()):typeof e=="number"?jo(i,t,e).disconnect():da(e)?n===void 0?t.forEach(r=>r.disconnect(e)):s===void 0?jo(i,t,n).disconnect(e,0):jo(i,t,n).disconnect(e,0,s):n===void 0?t.forEach(r=>r.disconnect(e)):jo(i,t,n).disconnect(e,0),gM={attack:.003,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",knee:30,ratio:12,release:.25,threshold:-24},_M=(i,t,e,n,s,r,a,o)=>class extends i{constructor(l,h){const d=r(l),f={...gM,...h},m=n(d,f),v=a(d),x=v?e():null;super(l,!1,m,x),this._attack=t(this,v,m.attack),this._knee=t(this,v,m.knee),this._nativeDynamicsCompressorNode=m,this._ratio=t(this,v,m.ratio),this._release=t(this,v,m.release),this._threshold=t(this,v,m.threshold),o(this,.006)}get attack(){return this._attack}get channelCount(){return this._nativeDynamicsCompressorNode.channelCount}set channelCount(l){const h=this._nativeDynamicsCompressorNode.channelCount;if(this._nativeDynamicsCompressorNode.channelCount=l,l>2)throw this._nativeDynamicsCompressorNode.channelCount=h,s()}get channelCountMode(){return this._nativeDynamicsCompressorNode.channelCountMode}set channelCountMode(l){const h=this._nativeDynamicsCompressorNode.channelCountMode;if(this._nativeDynamicsCompressorNode.channelCountMode=l,l==="max")throw this._nativeDynamicsCompressorNode.channelCountMode=h,s()}get knee(){return this._knee}get ratio(){return this._ratio}get reduction(){return typeof this._nativeDynamicsCompressorNode.reduction.value=="number"?this._nativeDynamicsCompressorNode.reduction.value:this._nativeDynamicsCompressorNode.reduction}get release(){return this._release}get threshold(){return this._threshold}},vM=(i,t,e,n,s)=>()=>{const r=new WeakMap,a=async(o,c)=>{let l=e(o);const h=dn(l,c);if(!h){const d={attack:l.attack.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,knee:l.knee.value,ratio:l.ratio.value,release:l.release.value,threshold:l.threshold.value};l=t(c,d)}return r.set(c,l),h?(await i(c,o.attack,l.attack),await i(c,o.knee,l.knee),await i(c,o.ratio,l.ratio),await i(c,o.release,l.release),await i(c,o.threshold,l.threshold)):(await n(c,o.attack,l.attack),await n(c,o.knee,l.knee),await n(c,o.ratio,l.ratio),await n(c,o.release,l.release),await n(c,o.threshold,l.threshold)),await s(o,c,l),l};return{render(o,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):a(o,c)}}},xM=()=>new DOMException("","EncodingError"),yM=i=>t=>new Promise((e,n)=>{if(i===null){n(new SyntaxError);return}const s=i.document.head;if(s===null)n(new SyntaxError);else{const r=i.document.createElement("script"),a=new Blob([t],{type:"application/javascript"}),o=URL.createObjectURL(a),c=i.onerror,l=()=>{i.onerror=c,URL.revokeObjectURL(o)};i.onerror=(h,d,f,m,v)=>{if(d===o||d===i.location.href&&f===1&&m===1)return l(),n(v),!1;if(c!==null)return c(h,d,f,m,v)},r.onerror=()=>{l(),n(new SyntaxError)},r.onload=()=>{l(),e()},r.src=o,r.type="module",s.appendChild(r)}}),SM=i=>class{constructor(e){this._nativeEventTarget=e,this._listeners=new WeakMap}addEventListener(e,n,s){if(n!==null){let r=this._listeners.get(n);r===void 0&&(r=i(this,n),typeof n=="function"&&this._listeners.set(n,r)),this._nativeEventTarget.addEventListener(e,r,s)}}dispatchEvent(e){return this._nativeEventTarget.dispatchEvent(e)}removeEventListener(e,n,s){const r=n===null?void 0:this._listeners.get(n);this._nativeEventTarget.removeEventListener(e,r===void 0?null:r,s)}},MM=i=>(t,e,n)=>{Object.defineProperties(i,{currentFrame:{configurable:!0,get(){return Math.round(t*e)}},currentTime:{configurable:!0,get(){return t}}});try{return n()}finally{i!==null&&(delete i.currentFrame,delete i.currentTime)}},TM=i=>async t=>{try{const e=await fetch(t);if(e.ok)return[await e.text(),e.url]}catch{}throw i()},EM={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",gain:1},wM=(i,t,e,n,s,r)=>class extends i{constructor(o,c){const l=s(o),h={...EM,...c},d=n(l,h),f=r(l),m=f?e():null;super(o,!1,d,m),this._gain=t(this,f,d.gain,_n,En)}get gain(){return this._gain}},bM=(i,t,e,n,s)=>()=>{const r=new WeakMap,a=async(o,c)=>{let l=e(o);const h=dn(l,c);if(!h){const d={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,gain:l.gain.value};l=t(c,d)}return r.set(c,l),h?await i(c,o.gain,l.gain):await n(c,o.gain,l.gain),await s(o,c,l),l};return{render(o,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):a(o,c)}}},AM=(i,t)=>e=>t(i,e),CM=i=>t=>{const e=i(t);if(e.renderer===null)throw new Error("Missing the renderer of the given AudioNode in the audio graph.");return e.renderer},RM=i=>t=>{var e;return(e=i.get(t))!==null&&e!==void 0?e:0},PM=i=>t=>{const e=i(t);if(e.renderer===null)throw new Error("Missing the renderer of the given AudioParam in the audio graph.");return e.renderer},NM=i=>t=>i.get(t),nn=()=>new DOMException("","InvalidStateError"),DM=i=>t=>{const e=i.get(t);if(e===void 0)throw nn();return e},LM=(i,t)=>e=>{let n=i.get(e);if(n!==void 0)return n;if(t===null)throw new Error("Missing the native OfflineAudioContext constructor.");return n=new t(1,1,44100),i.set(e,n),n},IM=i=>t=>{const e=i.get(t);if(e===void 0)throw new Error("The context has no set of AudioWorkletNodes.");return e},Ea=()=>new DOMException("","InvalidAccessError"),OM=i=>{i.getFrequencyResponse=(t=>(e,n,s)=>{if(e.length!==n.length||n.length!==s.length)throw Ea();return t.call(i,e,n,s)})(i.getFrequencyResponse)},UM={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers"},FM=(i,t,e,n,s,r)=>class extends i{constructor(o,c){const l=n(o),h=s(l),d={...UM,...c},f=t(l,h?null:o.baseLatency,d),m=h?e(d.feedback,d.feedforward):null;super(o,!1,f,m),OM(f),this._nativeIIRFilterNode=f,r(this,1)}getFrequencyResponse(o,c,l){return this._nativeIIRFilterNode.getFrequencyResponse(o,c,l)}},Sf=(i,t,e,n,s,r,a,o,c,l,h)=>{const d=l.length;let f=o;for(let m=0;m<d;m+=1){let v=e[0]*l[m];for(let x=1;x<s;x+=1){const g=f-x&c-1;v+=e[x]*r[g],v-=i[x]*a[g]}for(let x=s;x<n;x+=1)v+=e[x]*r[f-x&c-1];for(let x=s;x<t;x+=1)v-=i[x]*a[f-x&c-1];r[f]=l[m],a[f]=v,f=f+1&c-1,h[m]=v}return f},kM=(i,t,e,n)=>{const s=e instanceof Float64Array?e:new Float64Array(e),r=n instanceof Float64Array?n:new Float64Array(n),a=s.length,o=r.length,c=Math.min(a,o);if(s[0]!==1){for(let v=0;v<a;v+=1)r[v]/=s[0];for(let v=1;v<o;v+=1)s[v]/=s[0]}const l=32,h=new Float32Array(l),d=new Float32Array(l),f=t.createBuffer(i.numberOfChannels,i.length,i.sampleRate),m=i.numberOfChannels;for(let v=0;v<m;v+=1){const x=i.getChannelData(v),g=f.getChannelData(v);h.fill(0),d.fill(0),Sf(s,a,r,o,c,h,d,0,l,x,g)}return f},BM=(i,t,e,n,s)=>(r,a)=>{const o=new WeakMap;let c=null;const l=async(h,d)=>{let f=null,m=t(h);const v=dn(m,d);if(d.createIIRFilter===void 0?f=i(d,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}):v||(m=d.createIIRFilter(a,r)),o.set(d,f===null?m:f),f!==null){if(c===null){if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");const g=new e(h.context.destination.channelCount,h.context.length,d.sampleRate);c=(async()=>{await n(h,g,g.destination);const p=await s(g);return kM(p,d,r,a)})()}const x=await c;return f.buffer=x,f.start(0),f}return await n(h,d,m),m};return{render(h,d){const f=o.get(d);return f!==void 0?Promise.resolve(f):l(h,d)}}},VM=(i,t,e,n,s,r)=>a=>(o,c)=>{const l=i.get(o);if(l===void 0){if(!a&&r(o)){const h=n(o),{outputs:d}=e(o);for(const f of d)if(so(f)){const m=n(f[0]);t(h,m,f[1],f[2])}else{const m=s(f[0]);h.disconnect(m,f[1])}}i.set(o,c)}else i.set(o,l+c)},zM=(i,t)=>e=>{const n=i.get(e);return t(n)||t(e)},GM=(i,t)=>e=>i.has(e)||t(e),HM=(i,t)=>e=>i.has(e)||t(e),WM=(i,t)=>e=>{const n=i.get(e);return t(n)||t(e)},XM=i=>t=>i!==null&&t instanceof i,qM=i=>t=>i!==null&&typeof i.AudioNode=="function"&&t instanceof i.AudioNode,jM=i=>t=>i!==null&&typeof i.AudioParam=="function"&&t instanceof i.AudioParam,YM=(i,t)=>e=>i(e)||t(e),ZM=i=>t=>i!==null&&t instanceof i,$M=i=>i!==null&&i.isSecureContext,KM=(i,t,e,n)=>class extends i{constructor(r,a){const o=e(r),c=t(o,a);if(n(o))throw TypeError();super(r,!0,c,null),this._nativeMediaElementAudioSourceNode=c}get mediaElement(){return this._nativeMediaElementAudioSourceNode.mediaElement}},JM={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers"},QM=(i,t,e,n)=>class extends i{constructor(r,a){const o=e(r);if(n(o))throw new TypeError;const c={...JM,...a},l=t(o,c);super(r,!1,l,null),this._nativeMediaStreamAudioDestinationNode=l}get stream(){return this._nativeMediaStreamAudioDestinationNode.stream}},tT=(i,t,e,n)=>class extends i{constructor(r,a){const o=e(r),c=t(o,a);if(n(o))throw new TypeError;super(r,!0,c,null),this._nativeMediaStreamAudioSourceNode=c}get mediaStream(){return this._nativeMediaStreamAudioSourceNode.mediaStream}},eT=(i,t,e)=>class extends i{constructor(s,r){const a=e(s),o=t(a,r);super(s,!0,o,null)}},nT=(i,t,e,n,s,r)=>class extends e{constructor(o,c){super(o),this._nativeContext=o,Ma.set(this,o),n(o)&&s.set(o,new Set),this._destination=new i(this,c),this._listener=t(this,o),this._onstatechange=null}get currentTime(){return this._nativeContext.currentTime}get destination(){return this._destination}get listener(){return this._listener}get onstatechange(){return this._onstatechange}set onstatechange(o){const c=typeof o=="function"?r(this,o):null;this._nativeContext.onstatechange=c;const l=this._nativeContext.onstatechange;this._onstatechange=l!==null&&l===c?o:l}get sampleRate(){return this._nativeContext.sampleRate}get state(){return this._nativeContext.state}},Yr=i=>{const t=new Uint32Array([1179011410,40,1163280727,544501094,16,131073,44100,176400,1048580,1635017060,4,0]);try{const e=i.decodeAudioData(t.buffer,()=>{});return e===void 0?!1:(e.catch(()=>{}),!0)}catch{}return!1},iT=(i,t)=>(e,n,s)=>{const r=new Set;return e.connect=(a=>(o,c=0,l=0)=>{const h=r.size===0;if(t(o))return a.call(e,o,c,l),i(r,[o,c,l],d=>d[0]===o&&d[1]===c&&d[2]===l,!0),h&&n(),o;a.call(e,o,c),i(r,[o,c],d=>d[0]===o&&d[1]===c,!0),h&&n()})(e.connect),e.disconnect=(a=>(o,c,l)=>{const h=r.size>0;if(o===void 0)a.apply(e),r.clear();else if(typeof o=="number"){a.call(e,o);for(const f of r)f[1]===o&&r.delete(f)}else{t(o)?a.call(e,o,c,l):a.call(e,o,c);for(const f of r)f[0]===o&&(c===void 0||f[1]===c)&&(l===void 0||f[2]===l)&&r.delete(f)}const d=r.size===0;h&&d&&s()})(e.disconnect),e},Ne=(i,t,e)=>{const n=t[e];n!==void 0&&n!==i[e]&&(i[e]=n)},Ke=(i,t)=>{Ne(i,t,"channelCount"),Ne(i,t,"channelCountMode"),Ne(i,t,"channelInterpretation")},hd=i=>typeof i.getFloatTimeDomainData=="function",sT=i=>{i.getFloatTimeDomainData=t=>{const e=new Uint8Array(t.length);i.getByteTimeDomainData(e);const n=Math.max(e.length,i.fftSize);for(let s=0;s<n;s+=1)t[s]=(e[s]-128)*.0078125;return t}},rT=(i,t)=>(e,n)=>{const s=e.createAnalyser();if(Ke(s,n),!(n.maxDecibels>n.minDecibels))throw t();return Ne(s,n,"fftSize"),Ne(s,n,"maxDecibels"),Ne(s,n,"minDecibels"),Ne(s,n,"smoothingTimeConstant"),i(hd,()=>hd(s))||sT(s),s},oT=i=>i===null?null:i.hasOwnProperty("AudioBuffer")?i.AudioBuffer:null,ke=(i,t,e)=>{const n=t[e];n!==void 0&&n!==i[e].value&&(i[e].value=n)},aT=i=>{i.start=(t=>{let e=!1;return(n=0,s=0,r)=>{if(e)throw nn();t.call(i,n,s,r),e=!0}})(i.start)},xl=i=>{i.start=(t=>(e=0,n=0,s)=>{if(typeof s=="number"&&s<0||n<0||e<0)throw new RangeError("The parameters can't be negative.");t.call(i,e,n,s)})(i.start)},yl=i=>{i.stop=(t=>(e=0)=>{if(e<0)throw new RangeError("The parameter can't be negative.");t.call(i,e)})(i.stop)},cT=(i,t,e,n,s,r,a,o,c,l,h)=>(d,f)=>{const m=d.createBufferSource();return Ke(m,f),ke(m,f,"playbackRate"),Ne(m,f,"buffer"),Ne(m,f,"loop"),Ne(m,f,"loopEnd"),Ne(m,f,"loopStart"),t(e,()=>e(d))||aT(m),t(n,()=>n(d))||c(m),t(s,()=>s(d))||l(m,d),t(r,()=>r(d))||xl(m),t(a,()=>a(d))||h(m,d),t(o,()=>o(d))||yl(m),i(d,m),m},lT=i=>i===null?null:i.hasOwnProperty("AudioContext")?i.AudioContext:i.hasOwnProperty("webkitAudioContext")?i.webkitAudioContext:null,uT=(i,t)=>(e,n,s)=>{const r=e.destination;if(r.channelCount!==n)try{r.channelCount=n}catch{}s&&r.channelCountMode!=="explicit"&&(r.channelCountMode="explicit"),r.maxChannelCount===0&&Object.defineProperty(r,"maxChannelCount",{value:n});const a=i(e,{channelCount:n,channelCountMode:r.channelCountMode,channelInterpretation:r.channelInterpretation,gain:1});return t(a,"channelCount",o=>()=>o.call(a),o=>c=>{o.call(a,c);try{r.channelCount=c}catch(l){if(c>r.maxChannelCount)throw l}}),t(a,"channelCountMode",o=>()=>o.call(a),o=>c=>{o.call(a,c),r.channelCountMode=c}),t(a,"channelInterpretation",o=>()=>o.call(a),o=>c=>{o.call(a,c),r.channelInterpretation=c}),Object.defineProperty(a,"maxChannelCount",{get:()=>r.maxChannelCount}),a.connect(r),a},hT=i=>i===null?null:i.hasOwnProperty("AudioWorkletNode")?i.AudioWorkletNode:null,dT=i=>{const{port1:t}=new MessageChannel;try{t.postMessage(i)}finally{t.close()}},fT=(i,t,e,n,s)=>(r,a,o,c,l,h)=>{if(o!==null)try{const d=new o(r,c,h),f=new Map;let m=null;if(Object.defineProperties(d,{channelCount:{get:()=>h.channelCount,set:()=>{throw i()}},channelCountMode:{get:()=>"explicit",set:()=>{throw i()}},onprocessorerror:{get:()=>m,set:v=>{typeof m=="function"&&d.removeEventListener("processorerror",m),m=typeof v=="function"?v:null,typeof m=="function"&&d.addEventListener("processorerror",m)}}}),d.addEventListener=(v=>(...x)=>{if(x[0]==="processorerror"){const g=typeof x[1]=="function"?x[1]:typeof x[1]=="object"&&x[1]!==null&&typeof x[1].handleEvent=="function"?x[1].handleEvent:null;if(g!==null){const p=f.get(x[1]);p!==void 0?x[1]=p:(x[1]=b=>{b.type==="error"?(Object.defineProperties(b,{type:{value:"processorerror"}}),g(b)):g(new ErrorEvent(x[0],{...b}))},f.set(g,x[1]))}}return v.call(d,"error",x[1],x[2]),v.call(d,...x)})(d.addEventListener),d.removeEventListener=(v=>(...x)=>{if(x[0]==="processorerror"){const g=f.get(x[1]);g!==void 0&&(f.delete(x[1]),x[1]=g)}return v.call(d,"error",x[1],x[2]),v.call(d,x[0],x[1],x[2])})(d.removeEventListener),h.numberOfOutputs!==0){const v=e(r,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return d.connect(v).connect(r.destination),s(d,()=>v.disconnect(),()=>v.connect(r.destination))}return d}catch(d){throw d.code===11?n():d}if(l===void 0)throw n();return dT(h),t(r,a,l,h)},Mf=(i,t)=>i===null?512:Math.max(512,Math.min(16384,Math.pow(2,Math.round(Math.log2(i*t))))),pT=i=>new Promise((t,e)=>{const{port1:n,port2:s}=new MessageChannel;n.onmessage=({data:r})=>{n.close(),s.close(),t(r)},n.onmessageerror=({data:r})=>{n.close(),s.close(),e(r)},s.postMessage(i)}),mT=async(i,t)=>{const e=await pT(t);return new i(e)},gT=(i,t,e,n)=>{let s=Yc.get(i);s===void 0&&(s=new WeakMap,Yc.set(i,s));const r=mT(e,n);return s.set(t,r),r},_T=(i,t,e,n,s,r,a,o,c,l,h,d,f)=>(m,v,x,g)=>{if(g.numberOfInputs===0&&g.numberOfOutputs===0)throw c();const p=Array.isArray(g.outputChannelCount)?g.outputChannelCount:Array.from(g.outputChannelCount);if(p.some(at=>at<1))throw c();if(p.length!==g.numberOfOutputs)throw t();if(g.channelCountMode!=="explicit")throw c();const b=g.channelCount*g.numberOfInputs,M=p.reduce((at,lt)=>at+lt,0),w=x.parameterDescriptors===void 0?0:x.parameterDescriptors.length;if(b+w>6||M>6)throw c();const A=new MessageChannel,R=[],C=[];for(let at=0;at<g.numberOfInputs;at+=1)R.push(a(m,{channelCount:g.channelCount,channelCountMode:g.channelCountMode,channelInterpretation:g.channelInterpretation,gain:1})),C.push(s(m,{channelCount:g.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:g.channelCount}));const D=[];if(x.parameterDescriptors!==void 0)for(const{defaultValue:at,maxValue:lt,minValue:qt,name:At}of x.parameterDescriptors){const L=r(m,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:g.parameterData[At]!==void 0?g.parameterData[At]:at===void 0?0:at});Object.defineProperties(L.offset,{defaultValue:{get:()=>at===void 0?0:at},maxValue:{get:()=>lt===void 0?_n:lt},minValue:{get:()=>qt===void 0?En:qt}}),D.push(L)}const T=n(m,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,b+w)}),S=Mf(v,m.sampleRate),P=o(m,S,b+w,Math.max(1,M)),O=s(m,{channelCount:Math.max(1,M),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,M)}),G=[];for(let at=0;at<g.numberOfOutputs;at+=1)G.push(n(m,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:p[at]}));for(let at=0;at<g.numberOfInputs;at+=1){R[at].connect(C[at]);for(let lt=0;lt<g.channelCount;lt+=1)C[at].connect(T,lt,at*g.channelCount+lt)}const U=new xf(x.parameterDescriptors===void 0?[]:x.parameterDescriptors.map(({name:at},lt)=>{const qt=D[lt];return qt.connect(T,0,b+lt),qt.start(0),[at,qt.offset]}));T.connect(P);let z=g.channelInterpretation,k=null;const H=g.numberOfOutputs===0?[P]:G,j={get bufferSize(){return S},get channelCount(){return g.channelCount},set channelCount(at){throw e()},get channelCountMode(){return g.channelCountMode},set channelCountMode(at){throw e()},get channelInterpretation(){return z},set channelInterpretation(at){for(const lt of R)lt.channelInterpretation=at;z=at},get context(){return P.context},get inputs(){return R},get numberOfInputs(){return g.numberOfInputs},get numberOfOutputs(){return g.numberOfOutputs},get onprocessorerror(){return k},set onprocessorerror(at){typeof k=="function"&&j.removeEventListener("processorerror",k),k=typeof at=="function"?at:null,typeof k=="function"&&j.addEventListener("processorerror",k)},get parameters(){return U},get port(){return A.port2},addEventListener(...at){return P.addEventListener(at[0],at[1],at[2])},connect:i.bind(null,H),disconnect:l.bind(null,H),dispatchEvent(...at){return P.dispatchEvent(at[0])},removeEventListener(...at){return P.removeEventListener(at[0],at[1],at[2])}},Y=new Map;A.port1.addEventListener=(at=>(...lt)=>{if(lt[0]==="message"){const qt=typeof lt[1]=="function"?lt[1]:typeof lt[1]=="object"&&lt[1]!==null&&typeof lt[1].handleEvent=="function"?lt[1].handleEvent:null;if(qt!==null){const At=Y.get(lt[1]);At!==void 0?lt[1]=At:(lt[1]=L=>{h(m.currentTime,m.sampleRate,()=>qt(L))},Y.set(qt,lt[1]))}}return at.call(A.port1,lt[0],lt[1],lt[2])})(A.port1.addEventListener),A.port1.removeEventListener=(at=>(...lt)=>{if(lt[0]==="message"){const qt=Y.get(lt[1]);qt!==void 0&&(Y.delete(lt[1]),lt[1]=qt)}return at.call(A.port1,lt[0],lt[1],lt[2])})(A.port1.removeEventListener);let $=null;Object.defineProperty(A.port1,"onmessage",{get:()=>$,set:at=>{typeof $=="function"&&A.port1.removeEventListener("message",$),$=typeof at=="function"?at:null,typeof $=="function"&&(A.port1.addEventListener("message",$),A.port1.start())}}),x.prototype.port=A.port1;let st=null;gT(m,j,x,g).then(at=>st=at);const Q=pa(g.numberOfInputs,g.channelCount),ot=pa(g.numberOfOutputs,p),ct=x.parameterDescriptors===void 0?[]:x.parameterDescriptors.reduce((at,{name:lt})=>({...at,[lt]:new Float32Array(128)}),{});let _t=!0;const Et=()=>{g.numberOfOutputs>0&&P.disconnect(O);for(let at=0,lt=0;at<g.numberOfOutputs;at+=1){const qt=G[at];for(let At=0;At<p[at];At+=1)O.disconnect(qt,lt+At,At);lt+=p[at]}},ft=new Map;P.onaudioprocess=({inputBuffer:at,outputBuffer:lt})=>{if(st!==null){const qt=d(j);for(let At=0;At<S;At+=128){for(let L=0;L<g.numberOfInputs;L+=1)for(let N=0;N<g.channelCount;N+=1)fa(at,Q[L],N,N,At);x.parameterDescriptors!==void 0&&x.parameterDescriptors.forEach(({name:L},N)=>{fa(at,ct,L,b+N,At)});for(let L=0;L<g.numberOfInputs;L+=1)for(let N=0;N<p[L];N+=1)ot[L][N].byteLength===0&&(ot[L][N]=new Float32Array(128));try{const L=Q.map((K,ut)=>{if(qt[ut].size>0)return ft.set(ut,S/128),K;const dt=ft.get(ut);return dt===void 0?[]:(K.every(Dt=>Dt.every(St=>St===0))&&(dt===1?ft.delete(ut):ft.set(ut,dt-1)),K)});_t=h(m.currentTime+At/m.sampleRate,m.sampleRate,()=>st.process(L,ot,ct));for(let K=0,ut=0;K<g.numberOfOutputs;K+=1){for(let ht=0;ht<p[K];ht+=1)yf(lt,ot[K],ht,ut+ht,At);ut+=p[K]}}catch(L){_t=!1,j.dispatchEvent(new ErrorEvent("processorerror",{colno:L.colno,filename:L.filename,lineno:L.lineno,message:L.message}))}if(!_t){for(let L=0;L<g.numberOfInputs;L+=1){R[L].disconnect(C[L]);for(let N=0;N<g.channelCount;N+=1)C[At].disconnect(T,N,L*g.channelCount+N)}if(x.parameterDescriptors!==void 0){const L=x.parameterDescriptors.length;for(let N=0;N<L;N+=1){const K=D[N];K.disconnect(T,0,b+N),K.stop()}}T.disconnect(P),P.onaudioprocess=null,kt?Et():J();break}}}};let kt=!1;const Lt=a(m,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0}),Xt=()=>P.connect(Lt).connect(m.destination),J=()=>{P.disconnect(Lt),Lt.disconnect()},ce=()=>{if(_t){J(),g.numberOfOutputs>0&&P.connect(O);for(let at=0,lt=0;at<g.numberOfOutputs;at+=1){const qt=G[at];for(let At=0;At<p[at];At+=1)O.connect(qt,lt+At,At);lt+=p[at]}}kt=!0},bt=()=>{_t&&(Xt(),Et()),kt=!1};return Xt(),f(j,ce,bt)},Tf=(i,t)=>{const e=i.createBiquadFilter();return Ke(e,t),ke(e,t,"Q"),ke(e,t,"detune"),ke(e,t,"frequency"),ke(e,t,"gain"),Ne(e,t,"type"),e},vT=(i,t)=>(e,n)=>{const s=e.createChannelMerger(n.numberOfInputs);return i!==null&&i.name==="webkitAudioContext"&&t(e,s),Ke(s,n),s},xT=i=>{const t=i.numberOfOutputs;Object.defineProperty(i,"channelCount",{get:()=>t,set:e=>{if(e!==t)throw nn()}}),Object.defineProperty(i,"channelCountMode",{get:()=>"explicit",set:e=>{if(e!=="explicit")throw nn()}}),Object.defineProperty(i,"channelInterpretation",{get:()=>"discrete",set:e=>{if(e!=="discrete")throw nn()}})},ro=(i,t)=>{const e=i.createChannelSplitter(t.numberOfOutputs);return Ke(e,t),xT(e),e},yT=(i,t,e,n,s)=>(r,a)=>{if(r.createConstantSource===void 0)return e(r,a);const o=r.createConstantSource();return Ke(o,a),ke(o,a,"offset"),t(n,()=>n(r))||xl(o),t(s,()=>s(r))||yl(o),i(r,o),o},Er=(i,t)=>(i.connect=t.connect.bind(t),i.disconnect=t.disconnect.bind(t),i),ST=(i,t,e,n)=>(s,{offset:r,...a})=>{const o=s.createBuffer(1,2,44100),c=t(s,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),l=e(s,{...a,gain:r}),h=o.getChannelData(0);h[0]=1,h[1]=1,c.buffer=o,c.loop=!0;const d={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(v){l.channelCount=v},get channelCountMode(){return l.channelCountMode},set channelCountMode(v){l.channelCountMode=v},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(v){l.channelInterpretation=v},get context(){return l.context},get inputs(){return[]},get numberOfInputs(){return c.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get offset(){return l.gain},get onended(){return c.onended},set onended(v){c.onended=v},addEventListener(...v){return c.addEventListener(v[0],v[1],v[2])},dispatchEvent(...v){return c.dispatchEvent(v[0])},removeEventListener(...v){return c.removeEventListener(v[0],v[1],v[2])},start(v=0){c.start.call(c,v)},stop(v=0){c.stop.call(c,v)}},f=()=>c.connect(l),m=()=>c.disconnect(l);return i(s,c),n(Er(d,l),f,m)},MT=(i,t)=>(e,n)=>{const s=e.createConvolver();if(Ke(s,n),n.disableNormalization===s.normalize&&(s.normalize=!n.disableNormalization),Ne(s,n,"buffer"),n.channelCount>2||(t(s,"channelCount",r=>()=>r.call(s),r=>a=>{if(a>2)throw i();return r.call(s,a)}),n.channelCountMode==="max"))throw i();return t(s,"channelCountMode",r=>()=>r.call(s),r=>a=>{if(a==="max")throw i();return r.call(s,a)}),s},Ef=(i,t)=>{const e=i.createDelay(t.maxDelayTime);return Ke(e,t),ke(e,t,"delayTime"),e},TT=i=>(t,e)=>{const n=t.createDynamicsCompressor();if(Ke(n,e),e.channelCount>2||e.channelCountMode==="max")throw i();return ke(n,e,"attack"),ke(n,e,"knee"),ke(n,e,"ratio"),ke(n,e,"release"),ke(n,e,"threshold"),n},Cn=(i,t)=>{const e=i.createGain();return Ke(e,t),ke(e,t,"gain"),e},ET=i=>(t,e,n)=>{if(t.createIIRFilter===void 0)return i(t,e,n);const s=t.createIIRFilter(n.feedforward,n.feedback);return Ke(s,n),s};function wT(i,t){const e=t[0]*t[0]+t[1]*t[1];return[(i[0]*t[0]+i[1]*t[1])/e,(i[1]*t[0]-i[0]*t[1])/e]}function bT(i,t){return[i[0]*t[0]-i[1]*t[1],i[0]*t[1]+i[1]*t[0]]}function dd(i,t){let e=[0,0];for(let n=i.length-1;n>=0;n-=1)e=bT(e,t),e[0]+=i[n];return e}const AT=(i,t,e,n)=>(s,r,{channelCount:a,channelCountMode:o,channelInterpretation:c,feedback:l,feedforward:h})=>{const d=Mf(r,s.sampleRate),f=l instanceof Float64Array?l:new Float64Array(l),m=h instanceof Float64Array?h:new Float64Array(h),v=f.length,x=m.length,g=Math.min(v,x);if(v===0||v>20)throw n();if(f[0]===0)throw t();if(x===0||x>20)throw n();if(m[0]===0)throw t();if(f[0]!==1){for(let D=0;D<x;D+=1)m[D]/=f[0];for(let D=1;D<v;D+=1)f[D]/=f[0]}const p=e(s,d,a,a);p.channelCount=a,p.channelCountMode=o,p.channelInterpretation=c;const b=32,M=[],w=[],A=[];for(let D=0;D<a;D+=1){M.push(0);const T=new Float32Array(b),S=new Float32Array(b);T.fill(0),S.fill(0),w.push(T),A.push(S)}p.onaudioprocess=D=>{const T=D.inputBuffer,S=D.outputBuffer,P=T.numberOfChannels;for(let O=0;O<P;O+=1){const G=T.getChannelData(O),U=S.getChannelData(O);M[O]=Sf(f,v,m,x,g,w[O],A[O],M[O],b,G,U)}};const R=s.sampleRate/2;return Er({get bufferSize(){return d},get channelCount(){return p.channelCount},set channelCount(D){p.channelCount=D},get channelCountMode(){return p.channelCountMode},set channelCountMode(D){p.channelCountMode=D},get channelInterpretation(){return p.channelInterpretation},set channelInterpretation(D){p.channelInterpretation=D},get context(){return p.context},get inputs(){return[p]},get numberOfInputs(){return p.numberOfInputs},get numberOfOutputs(){return p.numberOfOutputs},addEventListener(...D){return p.addEventListener(D[0],D[1],D[2])},dispatchEvent(...D){return p.dispatchEvent(D[0])},getFrequencyResponse(D,T,S){if(D.length!==T.length||T.length!==S.length)throw i();const P=D.length;for(let O=0;O<P;O+=1){const G=-Math.PI*(D[O]/R),U=[Math.cos(G),Math.sin(G)],z=dd(m,U),k=dd(f,U),H=wT(z,k);T[O]=Math.sqrt(H[0]*H[0]+H[1]*H[1]),S[O]=Math.atan2(H[1],H[0])}},removeEventListener(...D){return p.removeEventListener(D[0],D[1],D[2])}},p)},CT=(i,t)=>i.createMediaElementSource(t.mediaElement),RT=(i,t)=>{const e=i.createMediaStreamDestination();return Ke(e,t),e.numberOfOutputs===1&&Object.defineProperty(e,"numberOfOutputs",{get:()=>0}),e},PT=(i,{mediaStream:t})=>{const e=t.getAudioTracks();e.sort((r,a)=>r.id<a.id?-1:r.id>a.id?1:0);const n=e.slice(0,1),s=i.createMediaStreamSource(new MediaStream(n));return Object.defineProperty(s,"mediaStream",{value:t}),s},NT=(i,t)=>(e,{mediaStreamTrack:n})=>{if(typeof e.createMediaStreamTrackSource=="function")return e.createMediaStreamTrackSource(n);const s=new MediaStream([n]),r=e.createMediaStreamSource(s);if(n.kind!=="audio")throw i();if(t(e))throw new TypeError;return r},DT=i=>i===null?null:i.hasOwnProperty("OfflineAudioContext")?i.OfflineAudioContext:i.hasOwnProperty("webkitOfflineAudioContext")?i.webkitOfflineAudioContext:null,LT=(i,t,e,n,s,r)=>(a,o)=>{const c=a.createOscillator();return Ke(c,o),ke(c,o,"detune"),ke(c,o,"frequency"),o.periodicWave!==void 0?c.setPeriodicWave(o.periodicWave):Ne(c,o,"type"),t(e,()=>e(a))||xl(c),t(n,()=>n(a))||r(c,a),t(s,()=>s(a))||yl(c),i(a,c),c},IT=i=>(t,e)=>{const n=t.createPanner();return n.orientationX===void 0?i(t,e):(Ke(n,e),ke(n,e,"orientationX"),ke(n,e,"orientationY"),ke(n,e,"orientationZ"),ke(n,e,"positionX"),ke(n,e,"positionY"),ke(n,e,"positionZ"),Ne(n,e,"coneInnerAngle"),Ne(n,e,"coneOuterAngle"),Ne(n,e,"coneOuterGain"),Ne(n,e,"distanceModel"),Ne(n,e,"maxDistance"),Ne(n,e,"panningModel"),Ne(n,e,"refDistance"),Ne(n,e,"rolloffFactor"),n)},OT=(i,t,e,n,s,r,a,o,c,l)=>(h,{coneInnerAngle:d,coneOuterAngle:f,coneOuterGain:m,distanceModel:v,maxDistance:x,orientationX:g,orientationY:p,orientationZ:b,panningModel:M,positionX:w,positionY:A,positionZ:R,refDistance:C,rolloffFactor:D,...T})=>{const S=h.createPanner();if(T.channelCount>2||T.channelCountMode==="max")throw a();Ke(S,T);const P={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},O=e(h,{...P,channelInterpretation:"speakers",numberOfInputs:6}),G=n(h,{...T,gain:1}),U=n(h,{...P,gain:1}),z=n(h,{...P,gain:0}),k=n(h,{...P,gain:0}),H=n(h,{...P,gain:0}),j=n(h,{...P,gain:0}),Y=n(h,{...P,gain:0}),$=s(h,256,6,1),st=r(h,{...P,curve:new Float32Array([1,1]),oversample:"none"});let rt=[g,p,b],Q=[w,A,R];const ot=new Float32Array(1);$.onaudioprocess=({inputBuffer:ft})=>{const kt=[c(ft,ot,0),c(ft,ot,1),c(ft,ot,2)];kt.some((Xt,J)=>Xt!==rt[J])&&(S.setOrientation(...kt),rt=kt);const Lt=[c(ft,ot,3),c(ft,ot,4),c(ft,ot,5)];Lt.some((Xt,J)=>Xt!==Q[J])&&(S.setPosition(...Lt),Q=Lt)},Object.defineProperty(z.gain,"defaultValue",{get:()=>0}),Object.defineProperty(k.gain,"defaultValue",{get:()=>0}),Object.defineProperty(H.gain,"defaultValue",{get:()=>0}),Object.defineProperty(j.gain,"defaultValue",{get:()=>0}),Object.defineProperty(Y.gain,"defaultValue",{get:()=>0});const ct={get bufferSize(){},get channelCount(){return S.channelCount},set channelCount(ft){if(ft>2)throw a();G.channelCount=ft,S.channelCount=ft},get channelCountMode(){return S.channelCountMode},set channelCountMode(ft){if(ft==="max")throw a();G.channelCountMode=ft,S.channelCountMode=ft},get channelInterpretation(){return S.channelInterpretation},set channelInterpretation(ft){G.channelInterpretation=ft,S.channelInterpretation=ft},get coneInnerAngle(){return S.coneInnerAngle},set coneInnerAngle(ft){S.coneInnerAngle=ft},get coneOuterAngle(){return S.coneOuterAngle},set coneOuterAngle(ft){S.coneOuterAngle=ft},get coneOuterGain(){return S.coneOuterGain},set coneOuterGain(ft){if(ft<0||ft>1)throw t();S.coneOuterGain=ft},get context(){return S.context},get distanceModel(){return S.distanceModel},set distanceModel(ft){S.distanceModel=ft},get inputs(){return[G]},get maxDistance(){return S.maxDistance},set maxDistance(ft){if(ft<0)throw new RangeError;S.maxDistance=ft},get numberOfInputs(){return S.numberOfInputs},get numberOfOutputs(){return S.numberOfOutputs},get orientationX(){return U.gain},get orientationY(){return z.gain},get orientationZ(){return k.gain},get panningModel(){return S.panningModel},set panningModel(ft){S.panningModel=ft},get positionX(){return H.gain},get positionY(){return j.gain},get positionZ(){return Y.gain},get refDistance(){return S.refDistance},set refDistance(ft){if(ft<0)throw new RangeError;S.refDistance=ft},get rolloffFactor(){return S.rolloffFactor},set rolloffFactor(ft){if(ft<0)throw new RangeError;S.rolloffFactor=ft},addEventListener(...ft){return G.addEventListener(ft[0],ft[1],ft[2])},dispatchEvent(...ft){return G.dispatchEvent(ft[0])},removeEventListener(...ft){return G.removeEventListener(ft[0],ft[1],ft[2])}};d!==ct.coneInnerAngle&&(ct.coneInnerAngle=d),f!==ct.coneOuterAngle&&(ct.coneOuterAngle=f),m!==ct.coneOuterGain&&(ct.coneOuterGain=m),v!==ct.distanceModel&&(ct.distanceModel=v),x!==ct.maxDistance&&(ct.maxDistance=x),g!==ct.orientationX.value&&(ct.orientationX.value=g),p!==ct.orientationY.value&&(ct.orientationY.value=p),b!==ct.orientationZ.value&&(ct.orientationZ.value=b),M!==ct.panningModel&&(ct.panningModel=M),w!==ct.positionX.value&&(ct.positionX.value=w),A!==ct.positionY.value&&(ct.positionY.value=A),R!==ct.positionZ.value&&(ct.positionZ.value=R),C!==ct.refDistance&&(ct.refDistance=C),D!==ct.rolloffFactor&&(ct.rolloffFactor=D),(rt[0]!==1||rt[1]!==0||rt[2]!==0)&&S.setOrientation(...rt),(Q[0]!==0||Q[1]!==0||Q[2]!==0)&&S.setPosition(...Q);const _t=()=>{G.connect(S),i(G,st,0,0),st.connect(U).connect(O,0,0),st.connect(z).connect(O,0,1),st.connect(k).connect(O,0,2),st.connect(H).connect(O,0,3),st.connect(j).connect(O,0,4),st.connect(Y).connect(O,0,5),O.connect($).connect(h.destination)},Et=()=>{G.disconnect(S),o(G,st,0,0),st.disconnect(U),U.disconnect(O),st.disconnect(z),z.disconnect(O),st.disconnect(k),k.disconnect(O),st.disconnect(H),H.disconnect(O),st.disconnect(j),j.disconnect(O),st.disconnect(Y),Y.disconnect(O),O.disconnect($),$.disconnect(h.destination)};return l(Er(ct,S),_t,Et)},UT=i=>(t,{disableNormalization:e,imag:n,real:s})=>{const r=n instanceof Float32Array?n:new Float32Array(n),a=s instanceof Float32Array?s:new Float32Array(s),o=t.createPeriodicWave(a,r,{disableNormalization:e});if(Array.from(n).length<2)throw i();return o},oo=(i,t,e,n)=>i.createScriptProcessor(t,e,n),FT=(i,t)=>(e,n)=>{const s=n.channelCountMode;if(s==="clamped-max")throw t();if(e.createStereoPanner===void 0)return i(e,n);const r=e.createStereoPanner();return Ke(r,n),ke(r,n,"pan"),Object.defineProperty(r,"channelCountMode",{get:()=>s,set:a=>{if(a!==s)throw t()}}),r},kT=(i,t,e,n,s,r)=>{const o=new Float32Array([1,1]),c=Math.PI/2,l={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},h={...l,oversample:"none"},d=(v,x,g,p)=>{const b=new Float32Array(16385),M=new Float32Array(16385);for(let T=0;T<16385;T+=1){const S=T/16384*c;b[T]=Math.cos(S),M[T]=Math.sin(S)}const w=e(v,{...l,gain:0}),A=n(v,{...h,curve:b}),R=n(v,{...h,curve:o}),C=e(v,{...l,gain:0}),D=n(v,{...h,curve:M});return{connectGraph(){x.connect(w),x.connect(R.inputs===void 0?R:R.inputs[0]),x.connect(C),R.connect(g),g.connect(A.inputs===void 0?A:A.inputs[0]),g.connect(D.inputs===void 0?D:D.inputs[0]),A.connect(w.gain),D.connect(C.gain),w.connect(p,0,0),C.connect(p,0,1)},disconnectGraph(){x.disconnect(w),x.disconnect(R.inputs===void 0?R:R.inputs[0]),x.disconnect(C),R.disconnect(g),g.disconnect(A.inputs===void 0?A:A.inputs[0]),g.disconnect(D.inputs===void 0?D:D.inputs[0]),A.disconnect(w.gain),D.disconnect(C.gain),w.disconnect(p,0,0),C.disconnect(p,0,1)}}},f=(v,x,g,p)=>{const b=new Float32Array(16385),M=new Float32Array(16385),w=new Float32Array(16385),A=new Float32Array(16385),R=Math.floor(16385/2);for(let H=0;H<16385;H+=1)if(H>R){const j=(H-R)/(16384-R)*c;b[H]=Math.cos(j),M[H]=Math.sin(j),w[H]=0,A[H]=1}else{const j=H/(16384-R)*c;b[H]=1,M[H]=0,w[H]=Math.cos(j),A[H]=Math.sin(j)}const C=t(v,{channelCount:2,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:2}),D=e(v,{...l,gain:0}),T=n(v,{...h,curve:b}),S=e(v,{...l,gain:0}),P=n(v,{...h,curve:M}),O=n(v,{...h,curve:o}),G=e(v,{...l,gain:0}),U=n(v,{...h,curve:w}),z=e(v,{...l,gain:0}),k=n(v,{...h,curve:A});return{connectGraph(){x.connect(C),x.connect(O.inputs===void 0?O:O.inputs[0]),C.connect(D,0),C.connect(S,0),C.connect(G,1),C.connect(z,1),O.connect(g),g.connect(T.inputs===void 0?T:T.inputs[0]),g.connect(P.inputs===void 0?P:P.inputs[0]),g.connect(U.inputs===void 0?U:U.inputs[0]),g.connect(k.inputs===void 0?k:k.inputs[0]),T.connect(D.gain),P.connect(S.gain),U.connect(G.gain),k.connect(z.gain),D.connect(p,0,0),G.connect(p,0,0),S.connect(p,0,1),z.connect(p,0,1)},disconnectGraph(){x.disconnect(C),x.disconnect(O.inputs===void 0?O:O.inputs[0]),C.disconnect(D,0),C.disconnect(S,0),C.disconnect(G,1),C.disconnect(z,1),O.disconnect(g),g.disconnect(T.inputs===void 0?T:T.inputs[0]),g.disconnect(P.inputs===void 0?P:P.inputs[0]),g.disconnect(U.inputs===void 0?U:U.inputs[0]),g.disconnect(k.inputs===void 0?k:k.inputs[0]),T.disconnect(D.gain),P.disconnect(S.gain),U.disconnect(G.gain),k.disconnect(z.gain),D.disconnect(p,0,0),G.disconnect(p,0,0),S.disconnect(p,0,1),z.disconnect(p,0,1)}}},m=(v,x,g,p,b)=>{if(x===1)return d(v,g,p,b);if(x===2)return f(v,g,p,b);throw s()};return(v,{channelCount:x,channelCountMode:g,pan:p,...b})=>{if(g==="max")throw s();const M=i(v,{...b,channelCount:1,channelCountMode:g,numberOfInputs:2}),w=e(v,{...b,channelCount:x,channelCountMode:g,gain:1}),A=e(v,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:p});let{connectGraph:R,disconnectGraph:C}=m(v,x,w,A,M);Object.defineProperty(A.gain,"defaultValue",{get:()=>0}),Object.defineProperty(A.gain,"maxValue",{get:()=>1}),Object.defineProperty(A.gain,"minValue",{get:()=>-1});const D={get bufferSize(){},get channelCount(){return w.channelCount},set channelCount(O){w.channelCount!==O&&(T&&C(),{connectGraph:R,disconnectGraph:C}=m(v,O,w,A,M),T&&R()),w.channelCount=O},get channelCountMode(){return w.channelCountMode},set channelCountMode(O){if(O==="clamped-max"||O==="max")throw s();w.channelCountMode=O},get channelInterpretation(){return w.channelInterpretation},set channelInterpretation(O){w.channelInterpretation=O},get context(){return w.context},get inputs(){return[w]},get numberOfInputs(){return w.numberOfInputs},get numberOfOutputs(){return w.numberOfOutputs},get pan(){return A.gain},addEventListener(...O){return w.addEventListener(O[0],O[1],O[2])},dispatchEvent(...O){return w.dispatchEvent(O[0])},removeEventListener(...O){return w.removeEventListener(O[0],O[1],O[2])}};let T=!1;const S=()=>{R(),T=!0},P=()=>{C(),T=!1};return r(Er(D,M),S,P)}},BT=(i,t,e,n,s,r,a)=>(o,c)=>{const l=o.createWaveShaper();if(r!==null&&r.name==="webkitAudioContext"&&o.createGain().gain.automationRate===void 0)return e(o,c);Ke(l,c);const h=c.curve===null||c.curve instanceof Float32Array?c.curve:new Float32Array(c.curve);if(h!==null&&h.length<2)throw t();Ne(l,{curve:h},"curve"),Ne(l,c,"oversample");let d=null,f=!1;return a(l,"curve",x=>()=>x.call(l),x=>g=>(x.call(l,g),f&&(n(g)&&d===null?d=i(o,l):!n(g)&&d!==null&&(d(),d=null)),g)),s(l,()=>{f=!0,n(l.curve)&&(d=i(o,l))},()=>{f=!1,d!==null&&(d(),d=null)})},VT=(i,t,e,n,s)=>(r,{curve:a,oversample:o,...c})=>{const l=r.createWaveShaper(),h=r.createWaveShaper();Ke(l,c),Ke(h,c);const d=e(r,{...c,gain:1}),f=e(r,{...c,gain:-1}),m=e(r,{...c,gain:1}),v=e(r,{...c,gain:-1});let x=null,g=!1,p=null;const b={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(A){d.channelCount=A,f.channelCount=A,l.channelCount=A,m.channelCount=A,h.channelCount=A,v.channelCount=A},get channelCountMode(){return l.channelCountMode},set channelCountMode(A){d.channelCountMode=A,f.channelCountMode=A,l.channelCountMode=A,m.channelCountMode=A,h.channelCountMode=A,v.channelCountMode=A},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(A){d.channelInterpretation=A,f.channelInterpretation=A,l.channelInterpretation=A,m.channelInterpretation=A,h.channelInterpretation=A,v.channelInterpretation=A},get context(){return l.context},get curve(){return p},set curve(A){if(A!==null&&A.length<2)throw t();if(A===null)l.curve=A,h.curve=A;else{const R=A.length,C=new Float32Array(R+2-R%2),D=new Float32Array(R+2-R%2);C[0]=A[0],D[0]=-A[R-1];const T=Math.ceil((R+1)/2),S=(R+1)/2-1;for(let P=1;P<T;P+=1){const O=P/T*S,G=Math.floor(O),U=Math.ceil(O);C[P]=G===U?A[G]:(1-(O-G))*A[G]+(1-(U-O))*A[U],D[P]=G===U?-A[R-1-G]:-((1-(O-G))*A[R-1-G])-(1-(U-O))*A[R-1-U]}C[T]=R%2===1?A[T-1]:(A[T-2]+A[T-1])/2,l.curve=C,h.curve=D}p=A,g&&(n(p)&&x===null?x=i(r,d):x!==null&&(x(),x=null))},get inputs(){return[d]},get numberOfInputs(){return l.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get oversample(){return l.oversample},set oversample(A){l.oversample=A,h.oversample=A},addEventListener(...A){return d.addEventListener(A[0],A[1],A[2])},dispatchEvent(...A){return d.dispatchEvent(A[0])},removeEventListener(...A){return d.removeEventListener(A[0],A[1],A[2])}};a!==null&&(b.curve=a instanceof Float32Array?a:new Float32Array(a)),o!==b.oversample&&(b.oversample=o);const M=()=>{d.connect(l).connect(m),d.connect(f).connect(h).connect(v).connect(m),g=!0,n(p)&&(x=i(r,d))},w=()=>{d.disconnect(l),l.disconnect(m),d.disconnect(f),f.disconnect(h),h.disconnect(v),v.disconnect(m),g=!1,x!==null&&(x(),x=null)};return s(Er(b,m),M,w)},Sn=()=>new DOMException("","NotSupportedError"),zT={numberOfChannels:1},GT=(i,t,e,n,s)=>class extends i{constructor(a,o,c){let l;if(typeof a=="number"&&o!==void 0&&c!==void 0)l={length:o,numberOfChannels:a,sampleRate:c};else if(typeof a=="object")l=a;else throw new Error("The given parameters are not valid.");const{length:h,numberOfChannels:d,sampleRate:f}={...zT,...l},m=n(d,h,f);t(Yr,()=>Yr(m))||m.addEventListener("statechange",(()=>{let v=0;const x=g=>{this._state==="running"&&(v>0?(m.removeEventListener("statechange",x),g.stopImmediatePropagation(),this._waitForThePromiseToSettle(g)):v+=1)};return x})()),super(m,d),this._length=h,this._nativeOfflineAudioContext=m,this._state=null}get length(){return this._nativeOfflineAudioContext.length===void 0?this._length:this._nativeOfflineAudioContext.length}get state(){return this._state===null?this._nativeOfflineAudioContext.state:this._state}startRendering(){return this._state==="running"?Promise.reject(e()):(this._state="running",s(this.destination,this._nativeOfflineAudioContext).finally(()=>{this._state=null,mf(this)}))}_waitForThePromiseToSettle(a){this._state===null?this._nativeOfflineAudioContext.dispatchEvent(a):setTimeout(()=>this._waitForThePromiseToSettle(a))}},HT={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:440,periodicWave:void 0,type:"sine"},WT=(i,t,e,n,s,r,a)=>class extends i{constructor(c,l){const h=s(c),d={...HT,...l},f=e(h,d),m=r(h),v=m?n():null,x=c.sampleRate/2;super(c,!1,f,v),this._detune=t(this,m,f.detune,153600,-153600),this._frequency=t(this,m,f.frequency,x,-x),this._nativeOscillatorNode=f,this._onended=null,this._oscillatorNodeRenderer=v,this._oscillatorNodeRenderer!==null&&d.periodicWave!==void 0&&(this._oscillatorNodeRenderer.periodicWave=d.periodicWave)}get detune(){return this._detune}get frequency(){return this._frequency}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?a(this,c):null;this._nativeOscillatorNode.onended=l;const h=this._nativeOscillatorNode.onended;this._onended=h!==null&&h===l?c:h}get type(){return this._nativeOscillatorNode.type}set type(c){this._nativeOscillatorNode.type=c,this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=null)}setPeriodicWave(c){this._nativeOscillatorNode.setPeriodicWave(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=c)}start(c=0){if(this._nativeOscillatorNode.start(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.start=c),this.context.state!=="closed"){pr(this);const l=()=>{this._nativeOscillatorNode.removeEventListener("ended",l),Ai(this)&&no(this)};this._nativeOscillatorNode.addEventListener("ended",l)}}stop(c=0){this._nativeOscillatorNode.stop(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.stop=c)}},XT=(i,t,e,n,s)=>()=>{const r=new WeakMap;let a=null,o=null,c=null;const l=async(h,d)=>{let f=e(h);const m=dn(f,d);if(!m){const v={channelCount:f.channelCount,channelCountMode:f.channelCountMode,channelInterpretation:f.channelInterpretation,detune:f.detune.value,frequency:f.frequency.value,periodicWave:a===null?void 0:a,type:f.type};f=t(d,v),o!==null&&f.start(o),c!==null&&f.stop(c)}return r.set(d,f),m?(await i(d,h.detune,f.detune),await i(d,h.frequency,f.frequency)):(await n(d,h.detune,f.detune),await n(d,h.frequency,f.frequency)),await s(h,d,f),f};return{set periodicWave(h){a=h},set start(h){o=h},set stop(h){c=h},render(h,d){const f=r.get(d);return f!==void 0?Promise.resolve(f):l(h,d)}}},qT={channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",coneInnerAngle:360,coneOuterAngle:360,coneOuterGain:0,distanceModel:"inverse",maxDistance:1e4,orientationX:1,orientationY:0,orientationZ:0,panningModel:"equalpower",positionX:0,positionY:0,positionZ:0,refDistance:1,rolloffFactor:1},jT=(i,t,e,n,s,r,a)=>class extends i{constructor(c,l){const h=s(c),d={...qT,...l},f=e(h,d),m=r(h),v=m?n():null;super(c,!1,f,v),this._nativePannerNode=f,this._orientationX=t(this,m,f.orientationX,_n,En),this._orientationY=t(this,m,f.orientationY,_n,En),this._orientationZ=t(this,m,f.orientationZ,_n,En),this._positionX=t(this,m,f.positionX,_n,En),this._positionY=t(this,m,f.positionY,_n,En),this._positionZ=t(this,m,f.positionZ,_n,En),a(this,1)}get coneInnerAngle(){return this._nativePannerNode.coneInnerAngle}set coneInnerAngle(c){this._nativePannerNode.coneInnerAngle=c}get coneOuterAngle(){return this._nativePannerNode.coneOuterAngle}set coneOuterAngle(c){this._nativePannerNode.coneOuterAngle=c}get coneOuterGain(){return this._nativePannerNode.coneOuterGain}set coneOuterGain(c){this._nativePannerNode.coneOuterGain=c}get distanceModel(){return this._nativePannerNode.distanceModel}set distanceModel(c){this._nativePannerNode.distanceModel=c}get maxDistance(){return this._nativePannerNode.maxDistance}set maxDistance(c){this._nativePannerNode.maxDistance=c}get orientationX(){return this._orientationX}get orientationY(){return this._orientationY}get orientationZ(){return this._orientationZ}get panningModel(){return this._nativePannerNode.panningModel}set panningModel(c){this._nativePannerNode.panningModel=c}get positionX(){return this._positionX}get positionY(){return this._positionY}get positionZ(){return this._positionZ}get refDistance(){return this._nativePannerNode.refDistance}set refDistance(c){this._nativePannerNode.refDistance=c}get rolloffFactor(){return this._nativePannerNode.rolloffFactor}set rolloffFactor(c){this._nativePannerNode.rolloffFactor=c}},YT=(i,t,e,n,s,r,a,o,c,l)=>()=>{const h=new WeakMap;let d=null;const f=async(m,v)=>{let x=null,g=r(m);const p={channelCount:g.channelCount,channelCountMode:g.channelCountMode,channelInterpretation:g.channelInterpretation},b={...p,coneInnerAngle:g.coneInnerAngle,coneOuterAngle:g.coneOuterAngle,coneOuterGain:g.coneOuterGain,distanceModel:g.distanceModel,maxDistance:g.maxDistance,panningModel:g.panningModel,refDistance:g.refDistance,rolloffFactor:g.rolloffFactor},M=dn(g,v);if("bufferSize"in g)x=n(v,{...p,gain:1});else if(!M){const w={...b,orientationX:g.orientationX.value,orientationY:g.orientationY.value,orientationZ:g.orientationZ.value,positionX:g.positionX.value,positionY:g.positionY.value,positionZ:g.positionZ.value};g=s(v,w)}if(h.set(v,x===null?g:x),x!==null){if(d===null){if(a===null)throw new Error("Missing the native OfflineAudioContext constructor.");const P=new a(6,m.context.length,v.sampleRate),O=t(P,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6});O.connect(P.destination),d=(async()=>{const G=await Promise.all([m.orientationX,m.orientationY,m.orientationZ,m.positionX,m.positionY,m.positionZ].map(async(U,z)=>{const k=e(P,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:z===0?1:0});return await o(P,U,k.offset),k}));for(let U=0;U<6;U+=1)G[U].connect(O,0,U),G[U].start(0);return l(P)})()}const w=await d,A=n(v,{...p,gain:1});await c(m,v,A);const R=[];for(let P=0;P<w.numberOfChannels;P+=1)R.push(w.getChannelData(P));let C=[R[0][0],R[1][0],R[2][0]],D=[R[3][0],R[4][0],R[5][0]],T=n(v,{...p,gain:1}),S=s(v,{...b,orientationX:C[0],orientationY:C[1],orientationZ:C[2],positionX:D[0],positionY:D[1],positionZ:D[2]});A.connect(T).connect(S.inputs[0]),S.connect(x);for(let P=128;P<w.length;P+=128){const O=[R[0][P],R[1][P],R[2][P]],G=[R[3][P],R[4][P],R[5][P]];if(O.some((U,z)=>U!==C[z])||G.some((U,z)=>U!==D[z])){C=O,D=G;const U=P/v.sampleRate;T.gain.setValueAtTime(0,U),T=n(v,{...p,gain:0}),S=s(v,{...b,orientationX:C[0],orientationY:C[1],orientationZ:C[2],positionX:D[0],positionY:D[1],positionZ:D[2]}),T.gain.setValueAtTime(1,U),A.connect(T).connect(S.inputs[0]),S.connect(x)}}return x}return M?(await i(v,m.orientationX,g.orientationX),await i(v,m.orientationY,g.orientationY),await i(v,m.orientationZ,g.orientationZ),await i(v,m.positionX,g.positionX),await i(v,m.positionY,g.positionY),await i(v,m.positionZ,g.positionZ)):(await o(v,m.orientationX,g.orientationX),await o(v,m.orientationY,g.orientationY),await o(v,m.orientationZ,g.orientationZ),await o(v,m.positionX,g.positionX),await o(v,m.positionY,g.positionY),await o(v,m.positionZ,g.positionZ)),Tr(g)?await c(m,v,g.inputs[0]):await c(m,v,g),g};return{render(m,v){const x=h.get(v);return x!==void 0?Promise.resolve(x):f(m,v)}}},ZT={disableNormalization:!1},$T=(i,t,e,n)=>class wf{constructor(r,a){const o=t(r),c=n({...ZT,...a}),l=i(o,c);return e.add(l),l}static[Symbol.hasInstance](r){return r!==null&&typeof r=="object"&&Object.getPrototypeOf(r)===wf.prototype||e.has(r)}},KT=(i,t)=>(e,n,s)=>(i(n).replay(s),t(n,e,s)),JT=(i,t,e)=>async(n,s,r)=>{const a=i(n);await Promise.all(a.activeInputs.map((o,c)=>Array.from(o).map(async([l,h])=>{const f=await t(l).render(l,s),m=n.context.destination;!e(l)&&(n!==m||!e(n))&&f.connect(r,h,c)})).reduce((o,c)=>[...o,...c],[]))},QT=(i,t,e)=>async(n,s,r)=>{const a=t(n);await Promise.all(Array.from(a.activeInputs).map(async([o,c])=>{const h=await i(o).render(o,s);e(o)||h.connect(r,c)}))},tE=(i,t,e,n)=>s=>i(Yr,()=>Yr(s))?Promise.resolve(i(n,n)).then(r=>{if(!r){const a=e(s,512,0,1);s.oncomplete=()=>{a.onaudioprocess=null,a.disconnect()},a.onaudioprocess=()=>s.currentTime,a.connect(s.destination)}return s.startRendering()}):new Promise(r=>{const a=t(s,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});s.oncomplete=o=>{a.disconnect(),r(o.renderedBuffer)},a.connect(s.destination),s.startRendering()}),eE=i=>(t,e)=>{i.set(t,e)},nE=i=>(t,e)=>i.set(t,e),iE=(i,t,e,n,s,r,a,o)=>(c,l)=>e(c).render(c,l).then(()=>Promise.all(Array.from(n(l)).map(h=>e(h).render(h,l)))).then(()=>s(l)).then(h=>(typeof h.copyFromChannel!="function"?(a(h),gl(h)):t(r,()=>r(h))||o(h),i.add(h),h)),sE={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",pan:0},rE=(i,t,e,n,s,r)=>class extends i{constructor(o,c){const l=s(o),h={...sE,...c},d=e(l,h),f=r(l),m=f?n():null;super(o,!1,d,m),this._pan=t(this,f,d.pan)}get pan(){return this._pan}},oE=(i,t,e,n,s)=>()=>{const r=new WeakMap,a=async(o,c)=>{let l=e(o);const h=dn(l,c);if(!h){const d={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,pan:l.pan.value};l=t(c,d)}return r.set(c,l),h?await i(c,o.pan,l.pan):await n(c,o.pan,l.pan),Tr(l)?await s(o,c,l.inputs[0]):await s(o,c,l),l};return{render(o,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):a(o,c)}}},aE=i=>()=>{if(i===null)return!1;try{new i({length:1,sampleRate:44100})}catch{return!1}return!0},cE=(i,t)=>async()=>{if(i===null)return!0;if(t===null)return!1;const e=new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'],{type:"application/javascript; charset=utf-8"}),n=new t(1,128,44100),s=URL.createObjectURL(e);let r=!1,a=!1;try{await n.audioWorklet.addModule(s);const o=new i(n,"a",{numberOfOutputs:0}),c=n.createOscillator();o.port.onmessage=()=>r=!0,o.onprocessorerror=()=>a=!0,c.connect(o),c.start(0),await n.startRendering(),await new Promise(l=>setTimeout(l))}catch{}finally{URL.revokeObjectURL(s)}return r&&!a},lE=(i,t)=>()=>{if(t===null)return Promise.resolve(!1);const e=new t(1,1,44100),n=i(e,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return new Promise(s=>{e.oncomplete=()=>{n.disconnect(),s(e.currentTime!==0)},e.startRendering()})},uE=()=>new DOMException("","UnknownError"),hE={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",curve:null,oversample:"none"},dE=(i,t,e,n,s,r,a)=>class extends i{constructor(c,l){const h=s(c),d={...hE,...l},f=e(h,d),v=r(h)?n():null;super(c,!0,f,v),this._isCurveNullified=!1,this._nativeWaveShaperNode=f,a(this,1)}get curve(){return this._isCurveNullified?null:this._nativeWaveShaperNode.curve}set curve(c){if(c===null)this._isCurveNullified=!0,this._nativeWaveShaperNode.curve=new Float32Array([0,0]);else{if(c.length<2)throw t();this._isCurveNullified=!1,this._nativeWaveShaperNode.curve=c}}get oversample(){return this._nativeWaveShaperNode.oversample}set oversample(c){this._nativeWaveShaperNode.oversample=c}},fE=(i,t,e)=>()=>{const n=new WeakMap,s=async(r,a)=>{let o=t(r);if(!dn(o,a)){const l={channelCount:o.channelCount,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,curve:o.curve,oversample:o.oversample};o=i(a,l)}return n.set(a,o),Tr(o)?await e(r,a,o.inputs[0]):await e(r,a,o),o};return{render(r,a){const o=n.get(a);return o!==void 0?Promise.resolve(o):s(r,a)}}},pE=()=>typeof window>"u"?null:window,mE=(i,t)=>e=>{e.copyFromChannel=(n,s,r=0)=>{const a=i(r),o=i(s);if(o>=e.numberOfChannels)throw t();const c=e.length,l=e.getChannelData(o),h=n.length;for(let d=a<0?-a:0;d+a<c&&d<h;d+=1)n[d]=l[d+a]},e.copyToChannel=(n,s,r=0)=>{const a=i(r),o=i(s);if(o>=e.numberOfChannels)throw t();const c=e.length,l=e.getChannelData(o),h=n.length;for(let d=a<0?-a:0;d+a<c&&d<h;d+=1)l[d+a]=n[d]}},gE=i=>t=>{t.copyFromChannel=(e=>(n,s,r=0)=>{const a=i(r),o=i(s);if(a<t.length)return e.call(t,n,o,a)})(t.copyFromChannel),t.copyToChannel=(e=>(n,s,r=0)=>{const a=i(r),o=i(s);if(a<t.length)return e.call(t,n,o,a)})(t.copyToChannel)},_E=i=>(t,e)=>{const n=e.createBuffer(1,1,44100);t.buffer===null&&(t.buffer=n),i(t,"buffer",s=>()=>{const r=s.call(t);return r===n?null:r},s=>r=>s.call(t,r===null?n:r))},vE=(i,t)=>(e,n)=>{n.channelCount=1,n.channelCountMode="explicit",Object.defineProperty(n,"channelCount",{get:()=>1,set:()=>{throw i()}}),Object.defineProperty(n,"channelCountMode",{get:()=>"explicit",set:()=>{throw i()}});const s=e.createBufferSource();t(n,()=>{const o=n.numberOfInputs;for(let c=0;c<o;c+=1)s.connect(n,0,c)},()=>s.disconnect(n))},bf=(i,t,e)=>i.copyFromChannel===void 0?i.getChannelData(e)[0]:(i.copyFromChannel(t,e),t[0]),Af=i=>{if(i===null)return!1;const t=i.length;return t%2!==0?i[Math.floor(t/2)]!==0:i[t/2-1]+i[t/2]!==0},ao=(i,t,e,n)=>{let s=i;for(;!s.hasOwnProperty(t);)s=Object.getPrototypeOf(s);const{get:r,set:a}=Object.getOwnPropertyDescriptor(s,t);Object.defineProperty(i,t,{get:e(r),set:n(a)})},xE=i=>({...i,outputChannelCount:i.outputChannelCount!==void 0?i.outputChannelCount:i.numberOfInputs===1&&i.numberOfOutputs===1?[i.channelCount]:Array.from({length:i.numberOfOutputs},()=>1)}),yE=i=>({...i,channelCount:i.numberOfOutputs}),SE=i=>{const{imag:t,real:e}=i;return t===void 0?e===void 0?{...i,imag:[0,0],real:[0,0]}:{...i,imag:Array.from(e,()=>0),real:e}:e===void 0?{...i,imag:t,real:Array.from(t,()=>0)}:{...i,imag:t,real:e}},Cf=(i,t,e)=>{try{i.setValueAtTime(t,e)}catch(n){if(n.code!==9)throw n;Cf(i,t,e+1e-7)}},ME=i=>{const t=i.createBufferSource();t.start();try{t.start()}catch{return!0}return!1},TE=i=>{const t=i.createBufferSource(),e=i.createBuffer(1,1,44100);t.buffer=e;try{t.start(0,1)}catch{return!1}return!0},EE=i=>{const t=i.createBufferSource();t.start();try{t.stop()}catch{return!1}return!0},Sl=i=>{const t=i.createOscillator();try{t.start(-1)}catch(e){return e instanceof RangeError}return!1},Rf=i=>{const t=i.createBuffer(1,1,44100),e=i.createBufferSource();e.buffer=t,e.start(),e.stop();try{return e.stop(),!0}catch{return!1}},Ml=i=>{const t=i.createOscillator();try{t.stop(-1)}catch(e){return e instanceof RangeError}return!1},wE=i=>{const{port1:t,port2:e}=new MessageChannel;try{t.postMessage(i)}finally{t.close(),e.close()}},bE=i=>{i.start=(t=>(e=0,n=0,s)=>{const r=i.buffer,a=r===null?n:Math.min(r.duration,n);r!==null&&a>r.duration-.5/i.context.sampleRate?t.call(i,e,0,0):t.call(i,e,a,s)})(i.start)},Pf=(i,t)=>{const e=t.createGain();i.connect(e);const n=(s=>()=>{s.call(i,e),i.removeEventListener("ended",n)})(i.disconnect);i.addEventListener("ended",n),Er(i,e),i.stop=(s=>{let r=!1;return(a=0)=>{if(r)try{s.call(i,a)}catch{e.gain.setValueAtTime(0,a)}else s.call(i,a),r=!0}})(i.stop)},wr=(i,t)=>e=>{const n={value:i};return Object.defineProperties(e,{currentTarget:n,target:n}),typeof t=="function"?t.call(i,e):t.handleEvent.call(i,e)},AE=jy(Ss),CE=Qy(Ss),RE=hM(Ta),Nf=new WeakMap,PE=RM(Nf),ri=zS(new Map,new WeakMap),ui=pE(),Df=rT(ri,hi),Tl=CM(xn),an=JT(xn,Tl,gs),NE=sS(Df,Ce,an),we=DM(Ma),Di=DT(ui),Se=ZM(Di),Lf=new WeakMap,If=SM(wr),co=lT(ui),El=XM(co),wl=qM(ui),Of=jM(ui),Zr=hT(ui),Ve=RS(Yy(cf),Jy(AE,CE,ua,RE,ha,xn,PE,eo,Ce,Ss,Ai,gs,Ko),ri,VM(qc,ha,xn,Ce,jr,Ai),hi,Ea,Sn,aM(ua,qc,xn,Ce,jr,we,Ai,Se),pM(Lf,xn,si),If,we,El,wl,Of,Se,Zr),DE=iS(Ve,NE,hi,Df,we,Se),bl=new WeakSet,fd=oT(ui),Uf=tM(new Uint32Array(1)),Al=mE(Uf,hi),Cl=gE(Uf),Ff=oS(bl,ri,Sn,fd,Di,aE(fd),Al,Cl),wa=tS(Cn),kf=QT(Tl,io,gs),di=YS(kf),br=cT(wa,ri,ME,TE,EE,Sl,Rf,Ml,bE,_E(ao),Pf),fi=KT(PM(io),kf),LE=lS(di,br,Ce,fi,an),oi=PS(Zy(lf),Lf,ml,NS,zy,Gy,Hy,Wy,Xy,Hc,of,co,Cf),IE=cS(Ve,LE,oi,nn,br,we,Se,wr),OE=vS(Ve,xS,hi,nn,uT(Cn,ao),we,Se,an),UE=VS(di,Tf,Ce,fi,an),Ms=nE(Nf),FE=BS(Ve,oi,UE,Ea,Tf,we,Se,Ms),Ji=iT(Ss,wl),kE=vE(nn,Ji),Qi=vT(co,kE),BE=WS(Qi,Ce,an),VE=HS(Ve,BE,Qi,we,Se),zE=jS(ro,Ce,an),GE=qS(Ve,zE,ro,we,Se,yE),HE=ST(wa,br,Cn,Ji),Ar=yT(wa,ri,HE,Sl,Ml),WE=QS(di,Ar,Ce,fi,an),XE=JS(Ve,oi,WE,Ar,we,Se,wr),Bf=MT(Sn,ao),qE=iM(Bf,Ce,an),jE=nM(Ve,qE,Bf,we,Se,Ms),YE=uM(di,Ef,Ce,fi,an),ZE=lM(Ve,oi,YE,Ef,we,Se,Ms),Vf=TT(Sn),$E=vM(di,Vf,Ce,fi,an),KE=_M(Ve,oi,$E,Vf,Sn,we,Se,Ms),JE=bM(di,Cn,Ce,fi,an),QE=wM(Ve,oi,JE,Cn,we,Se),tw=AT(Ea,nn,oo,Sn),ba=tE(ri,Cn,oo,lE(Cn,Di)),ew=BM(br,Ce,Di,an,ba),nw=ET(tw),iw=FM(Ve,nw,ew,we,Se,Ms),sw=yS(oi,Qi,Ar,oo,Sn,bf,Se,ao),zf=new WeakMap,rw=nT(OE,sw,If,Se,zf,wr),Gf=LT(wa,ri,Sl,Rf,Ml,Pf),ow=XT(di,Gf,Ce,fi,an),aw=WT(Ve,oi,Gf,ow,we,Se,wr),Hf=$S(br),cw=VT(Hf,nn,Cn,Af,Ji),Aa=BT(Hf,nn,cw,Af,Ji,co,ao),lw=OT(ua,nn,Qi,Cn,oo,Aa,Sn,ha,bf,Ji),Wf=IT(lw),uw=YT(di,Qi,Ar,Cn,Wf,Ce,Di,fi,an,ba),hw=jT(Ve,oi,Wf,uw,we,Se,Ms),dw=UT(hi),fw=$T(dw,we,new WeakSet,SE),pw=kT(Qi,ro,Cn,Aa,Sn,Ji),Xf=FT(pw,Sn),mw=oE(di,Xf,Ce,fi,an),gw=rE(Ve,oi,Xf,mw,we,Se),_w=fE(Aa,Ce,an),vw=dE(Ve,nn,Aa,_w,we,Se,Ms),qf=$M(ui),Rl=MM(ui),jf=new WeakMap,xw=LM(jf,Di),yw=qf?Ky(ri,Sn,yM(ui),Rl,TM(qy),we,xw,Se,Zr,new WeakMap,new WeakMap,cE(Zr,Di),ui):void 0,Sw=YM(El,Se),Mw=oM(bl,ri,rM,xM,new WeakSet,we,Sw,ca,Yr,Al,Cl),Yf=FS(yw,DE,Ff,IE,FE,VE,GE,XE,jE,Mw,ZE,KE,QE,iw,rw,aw,hw,fw,gw,vw),Tw=KM(Ve,CT,we,Se),Ew=QM(Ve,RT,we,Se),ww=tT(Ve,PT,we,Se),bw=NT(nn,Se),Aw=eT(Ve,bw,we),Cw=_S(Yf,nn,Sn,uE,Tw,Ew,ww,Aw,co),Pl=IM(zf),Rw=eS(Pl),Zf=ZS(hi),Pw=dM(Pl),$f=mM(hi),Kf=new WeakMap,Nw=AM(Kf,si),Dw=_T(Zf,hi,nn,Qi,ro,Ar,Cn,oo,Sn,$f,Rl,Nw,Ji),Lw=fT(nn,Dw,Cn,Sn,Ji),Iw=US(di,Zf,br,Qi,ro,Ar,Cn,Pw,$f,Rl,Ce,Zr,Di,fi,an,ba),Ow=NM(jf),Uw=eE(Kf),pd=qf?LS(Rw,Ve,oi,Iw,Lw,xn,Ow,we,Se,Zr,xE,Uw,wE,wr):void 0,Fw=sM(Sn,Di),kw=iE(bl,ri,Tl,Pl,ba,ca,Al,Cl),Bw=GT(Yf,ri,nn,Fw,kw),Vw=zM(Ma,El),zw=GM(pl,wl),Gw=HM(ml,Of),Hw=WM(Ma,Se);function Gn(i){return i===void 0}function le(i){return i!==void 0}function Ww(i){return typeof i=="function"}function _s(i){return typeof i=="number"}function ms(i){return Object.prototype.toString.call(i)==="[object Object]"&&i.constructor===Object}function Xw(i){return typeof i=="boolean"}function ii(i){return Array.isArray(i)}function Ri(i){return typeof i=="string"}function Yo(i){return Ri(i)&&/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(i)}function se(i,t){if(!i)throw new Error(t)}function $i(i,t,e=1/0){if(!(t<=i&&i<=e))throw new RangeError(`Value must be within [${t}, ${e}], got: ${i}`)}function Jf(i){!i.isOffline&&i.state!=="running"&&Nl('The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.')}let Qf=!1,md=!1;function gd(i){Qf=i}function qw(i){Gn(i)&&Qf&&!md&&(md=!0,Nl("Events scheduled inside of scheduled callbacks should use the passed in scheduling time. See https://github.com/Tonejs/Tone.js/wiki/Accurate-Timing"))}let tp=console;function jw(...i){tp.log(...i)}function Nl(...i){tp.warn(...i)}function Yw(i){return new Cw(i)}function Zw(i,t,e){return new Bw(i,t,e)}const Nn=typeof self=="object"?self:null,$w=Nn&&(Nn.hasOwnProperty("AudioContext")||Nn.hasOwnProperty("webkitAudioContext"));function Kw(i,t,e){return se(le(pd),"AudioWorkletNode only works in a secure context (https or localhost)"),new(i instanceof(Nn==null?void 0:Nn.BaseAudioContext)?Nn==null?void 0:Nn.AudioWorkletNode:pd)(i,t,e)}function ai(i,t,e,n){var s=arguments.length,r=s<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,e):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,n);else for(var o=i.length-1;o>=0;o--)(a=i[o])&&(r=(s<3?a(r):s>3?a(t,e,r):a(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r}function Xe(i,t,e,n){function s(r){return r instanceof e?r:new e(function(a){a(r)})}return new(e||(e=Promise))(function(r,a){function o(h){try{l(n.next(h))}catch(d){a(d)}}function c(h){try{l(n.throw(h))}catch(d){a(d)}}function l(h){h.done?r(h.value):s(h.value).then(o,c)}l((n=n.apply(i,t||[])).next())})}class Jw{constructor(t,e,n,s){this._callback=t,this._type=e,this._minimumUpdateInterval=Math.max(128/(s||44100),.001),this.updateInterval=n,this._createClock()}_createWorker(){const t=new Blob([`
			// the initial timeout time
			let timeoutTime =  ${(this._updateInterval*1e3).toFixed(1)};
			// onmessage callback
			self.onmessage = function(msg){
				timeoutTime = parseInt(msg.data);
			};
			// the tick function which posts a message
			// and schedules a new tick
			function tick(){
				setTimeout(tick, timeoutTime);
				self.postMessage('tick');
			}
			// call tick initially
			tick();
			`],{type:"text/javascript"}),e=URL.createObjectURL(t),n=new Worker(e);n.onmessage=this._callback.bind(this),this._worker=n}_createTimeout(){this._timeout=setTimeout(()=>{this._createTimeout(),this._callback()},this._updateInterval*1e3)}_createClock(){if(this._type==="worker")try{this._createWorker()}catch{this._type="timeout",this._createClock()}else this._type==="timeout"&&this._createTimeout()}_disposeClock(){this._timeout&&clearTimeout(this._timeout),this._worker&&(this._worker.terminate(),this._worker.onmessage=null)}get updateInterval(){return this._updateInterval}set updateInterval(t){var e;this._updateInterval=Math.max(t,this._minimumUpdateInterval),this._type==="worker"&&((e=this._worker)===null||e===void 0||e.postMessage(this._updateInterval*1e3))}get type(){return this._type}set type(t){this._disposeClock(),this._type=t,this._createClock()}dispose(){this._disposeClock()}}function vs(i){return Gw(i)}function Yi(i){return zw(i)}function Jo(i){return Hw(i)}function Ks(i){return Vw(i)}function Qw(i){return i instanceof Ff}function tb(i,t){return i==="value"||vs(t)||Yi(t)||Qw(t)}function rr(i,...t){if(!t.length)return i;const e=t.shift();if(ms(i)&&ms(e))for(const n in e)tb(n,e[n])?i[n]=e[n]:ms(e[n])?(i[n]||Object.assign(i,{[n]:{}}),rr(i[n],e[n])):Object.assign(i,{[n]:e[n]});return rr(i,...t)}function eb(i,t){return i.length===t.length&&i.every((e,n)=>t[n]===e)}function $t(i,t,e=[],n){const s={},r=Array.from(t);if(ms(r[0])&&n&&!Reflect.has(r[0],n)&&(Object.keys(r[0]).some(o=>Reflect.has(i,o))||(rr(s,{[n]:r[0]}),e.splice(e.indexOf(n),1),r.shift())),r.length===1&&ms(r[0]))rr(s,r[0]);else for(let a=0;a<e.length;a++)le(r[a])&&(s[e[a]]=r[a]);return rr(i,s)}function nb(i){return i.constructor.getDefaults()}function or(i,t){return Gn(i)?t:i}function _d(i,t){return t.forEach(e=>{Reflect.has(i,e)&&delete i[e]}),i}/**
 * Tone.js
 * @author Yotam Mann
 * @license http://opensource.org/licenses/MIT MIT License
 * @copyright 2014-2024 Yotam Mann
 */class Li{constructor(){this.debug=!1,this._wasDisposed=!1}static getDefaults(){return{}}log(...t){(this.debug||Nn&&this.toString()===Nn.TONE_DEBUG_CLASS)&&jw(this,...t)}dispose(){return this._wasDisposed=!0,this}get disposed(){return this._wasDisposed}toString(){return this.name}}Li.version=rf;const Dl=1e-6;function mr(i,t){return i>t+Dl}function Kc(i,t){return mr(i,t)||$n(i,t)}function ma(i,t){return i+Dl<t}function $n(i,t){return Math.abs(i-t)<Dl}function ib(i,t,e){return Math.max(Math.min(i,e),t)}class Hn extends Li{constructor(){super(),this.name="Timeline",this._timeline=[];const t=$t(Hn.getDefaults(),arguments,["memory"]);this.memory=t.memory,this.increasing=t.increasing}static getDefaults(){return{memory:1/0,increasing:!1}}get length(){return this._timeline.length}add(t){if(se(Reflect.has(t,"time"),"Timeline: events must have a time attribute"),t.time=t.time.valueOf(),this.increasing&&this.length){const e=this._timeline[this.length-1];se(Kc(t.time,e.time),"The time must be greater than or equal to the last scheduled time"),this._timeline.push(t)}else{const e=this._search(t.time);this._timeline.splice(e+1,0,t)}if(this.length>this.memory){const e=this.length-this.memory;this._timeline.splice(0,e)}return this}remove(t){const e=this._timeline.indexOf(t);return e!==-1&&this._timeline.splice(e,1),this}get(t,e="time"){const n=this._search(t,e);return n!==-1?this._timeline[n]:null}peek(){return this._timeline[0]}shift(){return this._timeline.shift()}getAfter(t,e="time"){const n=this._search(t,e);return n+1<this._timeline.length?this._timeline[n+1]:null}getBefore(t){const e=this._timeline.length;if(e>0&&this._timeline[e-1].time<t)return this._timeline[e-1];const n=this._search(t);return n-1>=0?this._timeline[n-1]:null}cancel(t){if(this._timeline.length>1){let e=this._search(t);if(e>=0)if($n(this._timeline[e].time,t)){for(let n=e;n>=0&&$n(this._timeline[n].time,t);n--)e=n;this._timeline=this._timeline.slice(0,e)}else this._timeline=this._timeline.slice(0,e+1);else this._timeline=[]}else this._timeline.length===1&&Kc(this._timeline[0].time,t)&&(this._timeline=[]);return this}cancelBefore(t){const e=this._search(t);return e>=0&&(this._timeline=this._timeline.slice(e+1)),this}previousEvent(t){const e=this._timeline.indexOf(t);return e>0?this._timeline[e-1]:null}_search(t,e="time"){if(this._timeline.length===0)return-1;let n=0;const s=this._timeline.length;let r=s;if(s>0&&this._timeline[s-1][e]<=t)return s-1;for(;n<r;){let a=Math.floor(n+(r-n)/2);const o=this._timeline[a],c=this._timeline[a+1];if($n(o[e],t)){for(let l=a;l<this._timeline.length;l++){const h=this._timeline[l];if($n(h[e],t))a=l;else break}return a}else{if(ma(o[e],t)&&mr(c[e],t))return a;mr(o[e],t)?r=a:n=a+1}}return-1}_iterate(t,e=0,n=this._timeline.length-1){this._timeline.slice(e,n+1).forEach(t)}forEach(t){return this._iterate(t),this}forEachBefore(t,e){const n=this._search(t);return n!==-1&&this._iterate(e,0,n),this}forEachAfter(t,e){const n=this._search(t);return this._iterate(e,n+1),this}forEachBetween(t,e,n){let s=this._search(t),r=this._search(e);return s!==-1&&r!==-1?(this._timeline[s].time!==t&&(s+=1),this._timeline[r].time===e&&(r-=1),this._iterate(n,s,r)):s===-1&&this._iterate(n,0,r),this}forEachFrom(t,e){let n=this._search(t);for(;n>=0&&this._timeline[n].time>=t;)n--;return this._iterate(e,n+1),this}forEachAtTime(t,e){const n=this._search(t);if(n!==-1&&$n(this._timeline[n].time,t)){let s=n;for(let r=n;r>=0&&$n(this._timeline[r].time,t);r--)s=r;this._iterate(r=>{e(r)},s,n)}return this}dispose(){return super.dispose(),this._timeline=[],this}}const ep=[];function Ca(i){ep.push(i)}function sb(i){ep.forEach(t=>t(i))}const np=[];function Ra(i){np.push(i)}function rb(i){np.forEach(t=>t(i))}class lo extends Li{constructor(){super(...arguments),this.name="Emitter"}on(t,e){return t.split(/\W+/).forEach(s=>{Gn(this._events)&&(this._events={}),this._events.hasOwnProperty(s)||(this._events[s]=[]),this._events[s].push(e)}),this}once(t,e){const n=(...s)=>{e(...s),this.off(t,n)};return this.on(t,n),this}off(t,e){return t.split(/\W+/).forEach(s=>{if(Gn(this._events)&&(this._events={}),this._events.hasOwnProperty(s))if(Gn(e))this._events[s]=[];else{const r=this._events[s];for(let a=r.length-1;a>=0;a--)r[a]===e&&r.splice(a,1)}}),this}emit(t,...e){if(this._events&&this._events.hasOwnProperty(t)){const n=this._events[t].slice(0);for(let s=0,r=n.length;s<r;s++)n[s].apply(this,e)}return this}static mixin(t){["on","once","off","emit"].forEach(e=>{const n=Object.getOwnPropertyDescriptor(lo.prototype,e);Object.defineProperty(t.prototype,e,n)})}dispose(){return super.dispose(),this._events=void 0,this}}class ip extends lo{constructor(){super(...arguments),this.isOffline=!1}toJSON(){return{}}}class uo extends ip{constructor(){var t,e;super(),this.name="Context",this._constants=new Map,this._timeouts=new Hn,this._timeoutIds=0,this._initialized=!1,this._closeStarted=!1,this.isOffline=!1,this._workletPromise=null;const n=$t(uo.getDefaults(),arguments,["context"]);n.context?(this._context=n.context,this._latencyHint=((t=arguments[0])===null||t===void 0?void 0:t.latencyHint)||""):(this._context=Yw({latencyHint:n.latencyHint}),this._latencyHint=n.latencyHint),this._ticker=new Jw(this.emit.bind(this,"tick"),n.clockSource,n.updateInterval,this._context.sampleRate),this.on("tick",this._timeoutLoop.bind(this)),this._context.onstatechange=()=>{this.emit("statechange",this.state)},this[!((e=arguments[0])===null||e===void 0)&&e.hasOwnProperty("updateInterval")?"_lookAhead":"lookAhead"]=n.lookAhead}static getDefaults(){return{clockSource:"worker",latencyHint:"interactive",lookAhead:.1,updateInterval:.05}}initialize(){return this._initialized||(sb(this),this._initialized=!0),this}createAnalyser(){return this._context.createAnalyser()}createOscillator(){return this._context.createOscillator()}createBufferSource(){return this._context.createBufferSource()}createBiquadFilter(){return this._context.createBiquadFilter()}createBuffer(t,e,n){return this._context.createBuffer(t,e,n)}createChannelMerger(t){return this._context.createChannelMerger(t)}createChannelSplitter(t){return this._context.createChannelSplitter(t)}createConstantSource(){return this._context.createConstantSource()}createConvolver(){return this._context.createConvolver()}createDelay(t){return this._context.createDelay(t)}createDynamicsCompressor(){return this._context.createDynamicsCompressor()}createGain(){return this._context.createGain()}createIIRFilter(t,e){return this._context.createIIRFilter(t,e)}createPanner(){return this._context.createPanner()}createPeriodicWave(t,e,n){return this._context.createPeriodicWave(t,e,n)}createStereoPanner(){return this._context.createStereoPanner()}createWaveShaper(){return this._context.createWaveShaper()}createMediaStreamSource(t){return se(Ks(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamSource(t)}createMediaElementSource(t){return se(Ks(this._context),"Not available if OfflineAudioContext"),this._context.createMediaElementSource(t)}createMediaStreamDestination(){return se(Ks(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamDestination()}decodeAudioData(t){return this._context.decodeAudioData(t)}get currentTime(){return this._context.currentTime}get state(){return this._context.state}get sampleRate(){return this._context.sampleRate}get listener(){return this.initialize(),this._listener}set listener(t){se(!this._initialized,"The listener cannot be set after initialization."),this._listener=t}get transport(){return this.initialize(),this._transport}set transport(t){se(!this._initialized,"The transport cannot be set after initialization."),this._transport=t}get draw(){return this.initialize(),this._draw}set draw(t){se(!this._initialized,"Draw cannot be set after initialization."),this._draw=t}get destination(){return this.initialize(),this._destination}set destination(t){se(!this._initialized,"The destination cannot be set after initialization."),this._destination=t}createAudioWorkletNode(t,e){return Kw(this.rawContext,t,e)}addAudioWorkletModule(t){return Xe(this,void 0,void 0,function*(){se(le(this.rawContext.audioWorklet),"AudioWorkletNode is only available in a secure context (https or localhost)"),this._workletPromise||(this._workletPromise=this.rawContext.audioWorklet.addModule(t)),yield this._workletPromise})}workletsAreReady(){return Xe(this,void 0,void 0,function*(){(yield this._workletPromise)?this._workletPromise:Promise.resolve()})}get updateInterval(){return this._ticker.updateInterval}set updateInterval(t){this._ticker.updateInterval=t}get clockSource(){return this._ticker.type}set clockSource(t){this._ticker.type=t}get lookAhead(){return this._lookAhead}set lookAhead(t){this._lookAhead=t,this.updateInterval=t?t/2:.01}get latencyHint(){return this._latencyHint}get rawContext(){return this._context}now(){return this._context.currentTime+this._lookAhead}immediate(){return this._context.currentTime}resume(){return Ks(this._context)?this._context.resume():Promise.resolve()}close(){return Xe(this,void 0,void 0,function*(){Ks(this._context)&&this.state!=="closed"&&!this._closeStarted&&(this._closeStarted=!0,yield this._context.close()),this._initialized&&rb(this)})}getConstant(t){if(this._constants.has(t))return this._constants.get(t);{const e=this._context.createBuffer(1,128,this._context.sampleRate),n=e.getChannelData(0);for(let r=0;r<n.length;r++)n[r]=t;const s=this._context.createBufferSource();return s.channelCount=1,s.channelCountMode="explicit",s.buffer=e,s.loop=!0,s.start(0),this._constants.set(t,s),s}}dispose(){return super.dispose(),this._ticker.dispose(),this._timeouts.dispose(),Object.keys(this._constants).map(t=>this._constants[t].disconnect()),this.close(),this}_timeoutLoop(){const t=this.now();this._timeouts.forEachBefore(t,e=>{e.callback(),this._timeouts.remove(e)})}setTimeout(t,e){this._timeoutIds++;const n=this.now();return this._timeouts.add({callback:t,id:this._timeoutIds,time:n+e}),this._timeoutIds}clearTimeout(t){return this._timeouts.forEach(e=>{e.id===t&&this._timeouts.remove(e)}),this}clearInterval(t){return this.clearTimeout(t)}setInterval(t,e){const n=++this._timeoutIds,s=()=>{const r=this.now();this._timeouts.add({callback:()=>{t(),s()},id:n,time:r+e})};return s(),n}}class ob extends ip{constructor(){super(...arguments),this.lookAhead=0,this.latencyHint=0,this.isOffline=!1}createAnalyser(){return{}}createOscillator(){return{}}createBufferSource(){return{}}createBiquadFilter(){return{}}createBuffer(t,e,n){return{}}createChannelMerger(t){return{}}createChannelSplitter(t){return{}}createConstantSource(){return{}}createConvolver(){return{}}createDelay(t){return{}}createDynamicsCompressor(){return{}}createGain(){return{}}createIIRFilter(t,e){return{}}createPanner(){return{}}createPeriodicWave(t,e,n){return{}}createStereoPanner(){return{}}createWaveShaper(){return{}}createMediaStreamSource(t){return{}}createMediaElementSource(t){return{}}createMediaStreamDestination(){return{}}decodeAudioData(t){return Promise.resolve({})}createAudioWorkletNode(t,e){return{}}get rawContext(){return{}}addAudioWorkletModule(t){return Xe(this,void 0,void 0,function*(){return Promise.resolve()})}resume(){return Promise.resolve()}setTimeout(t,e){return 0}clearTimeout(t){return this}setInterval(t,e){return 0}clearInterval(t){return this}getConstant(t){return{}}get currentTime(){return 0}get state(){return{}}get sampleRate(){return 0}get listener(){return{}}get transport(){return{}}get draw(){return{}}set draw(t){}get destination(){return{}}set destination(t){}now(){return 0}immediate(){return 0}}function Ue(i,t){ii(t)?t.forEach(e=>Ue(i,e)):Object.defineProperty(i,t,{enumerable:!0,writable:!1})}function sp(i,t){ii(t)?t.forEach(e=>sp(i,e)):Object.defineProperty(i,t,{writable:!0})}const ye=()=>{};class Pe extends Li{constructor(){super(),this.name="ToneAudioBuffer",this.onload=ye;const t=$t(Pe.getDefaults(),arguments,["url","onload","onerror"]);this.reverse=t.reverse,this.onload=t.onload,Ri(t.url)?this.load(t.url).catch(t.onerror):t.url&&this.set(t.url)}static getDefaults(){return{onerror:ye,onload:ye,reverse:!1}}get sampleRate(){return this._buffer?this._buffer.sampleRate:Qn().sampleRate}set(t){return t instanceof Pe?t.loaded?this._buffer=t.get():t.onload=()=>{this.set(t),this.onload(this)}:this._buffer=t,this._reversed&&this._reverse(),this}get(){return this._buffer}load(t){return Xe(this,void 0,void 0,function*(){const e=Pe.load(t).then(n=>{this.set(n),this.onload(this)});Pe.downloads.push(e);try{yield e}finally{const n=Pe.downloads.indexOf(e);Pe.downloads.splice(n,1)}return this})}dispose(){return super.dispose(),this._buffer=void 0,this}fromArray(t){const e=ii(t)&&t[0].length>0,n=e?t.length:1,s=e?t[0].length:t.length,r=Qn(),a=r.createBuffer(n,s,r.sampleRate),o=!e&&n===1?[t]:t;for(let c=0;c<n;c++)a.copyToChannel(o[c],c);return this._buffer=a,this}toMono(t){if(_s(t))this.fromArray(this.toArray(t));else{let e=new Float32Array(this.length);const n=this.numberOfChannels;for(let s=0;s<n;s++){const r=this.toArray(s);for(let a=0;a<r.length;a++)e[a]+=r[a]}e=e.map(s=>s/n),this.fromArray(e)}return this}toArray(t){if(_s(t))return this.getChannelData(t);if(this.numberOfChannels===1)return this.toArray(0);{const e=[];for(let n=0;n<this.numberOfChannels;n++)e[n]=this.getChannelData(n);return e}}getChannelData(t){return this._buffer?this._buffer.getChannelData(t):new Float32Array(0)}slice(t,e=this.duration){se(this.loaded,"Buffer is not loaded");const n=Math.floor(t*this.sampleRate),s=Math.floor(e*this.sampleRate);se(n<s,"The start time must be less than the end time");const r=s-n,a=Qn().createBuffer(this.numberOfChannels,r,this.sampleRate);for(let o=0;o<this.numberOfChannels;o++)a.copyToChannel(this.getChannelData(o).subarray(n,s),o);return new Pe(a)}_reverse(){if(this.loaded)for(let t=0;t<this.numberOfChannels;t++)this.getChannelData(t).reverse();return this}get loaded(){return this.length>0}get duration(){return this._buffer?this._buffer.duration:0}get length(){return this._buffer?this._buffer.length:0}get numberOfChannels(){return this._buffer?this._buffer.numberOfChannels:0}get reverse(){return this._reversed}set reverse(t){this._reversed!==t&&(this._reversed=t,this._reverse())}static fromArray(t){return new Pe().fromArray(t)}static fromUrl(t){return Xe(this,void 0,void 0,function*(){return yield new Pe().load(t)})}static load(t){return Xe(this,void 0,void 0,function*(){const e=Pe.baseUrl===""||Pe.baseUrl.endsWith("/")?Pe.baseUrl:Pe.baseUrl+"/",n=yield fetch(e+t);if(!n.ok)throw new Error(`could not load url: ${t}`);const s=yield n.arrayBuffer();return yield Qn().decodeAudioData(s)})}static supportsType(t){const e=t.split("."),n=e[e.length-1];return document.createElement("audio").canPlayType("audio/"+n)!==""}static loaded(){return Xe(this,void 0,void 0,function*(){for(yield Promise.resolve();Pe.downloads.length;)yield Pe.downloads[0]})}}Pe.baseUrl="";Pe.downloads=[];class Ll extends uo{constructor(){super({clockSource:"offline",context:Jo(arguments[0])?arguments[0]:Zw(arguments[0],arguments[1]*arguments[2],arguments[2]),lookAhead:0,updateInterval:Jo(arguments[0])?128/arguments[0].sampleRate:128/arguments[2]}),this.name="OfflineContext",this._currentTime=0,this.isOffline=!0,this._duration=Jo(arguments[0])?arguments[0].length/arguments[0].sampleRate:arguments[1]}now(){return this._currentTime}get currentTime(){return this._currentTime}_renderClock(t){return Xe(this,void 0,void 0,function*(){let e=0;for(;this._duration-this._currentTime>=0;){this.emit("tick"),this._currentTime+=128/this.sampleRate,e++;const n=Math.floor(this.sampleRate/128);t&&e%n===0&&(yield new Promise(s=>setTimeout(s,1)))}})}render(){return Xe(this,arguments,void 0,function*(t=!0){yield this.workletsAreReady(),yield this._renderClock(t);const e=yield this._context.startRendering();return new Pe(e)})}close(){return Promise.resolve()}}const rp=new ob;let hs=rp;function Qn(){return hs===rp&&$w&&ab(new uo),hs}function ab(i,t=!1){t&&hs.dispose(),Ks(i)?hs=new uo(i):Jo(i)?hs=new Ll(i):hs=i}function cb(){return hs.resume()}if(Nn&&!Nn.TONE_SILENCE_LOGGING){const t=` * Tone.js v${rf} * `;console.log(`%c${t}`,"background: #000; color: #fff")}function lb(i){return Math.pow(10,i/20)}function ub(i){return 20*(Math.log(i)/Math.LN10)}function op(i){return Math.pow(2,i/12)}let Pa=440;function hb(){return Pa}function db(i){Pa=i}function Jc(i){return Math.round(ap(i))}function ap(i){return 69+12*Math.log2(i/Pa)}function fb(i){return Pa*Math.pow(2,(i-69)/12)}class Il extends Li{constructor(t,e,n){super(),this.defaultUnits="s",this._val=e,this._units=n,this.context=t,this._expressions=this._getExpressions()}_getExpressions(){return{hz:{method:t=>this._frequencyToUnits(parseFloat(t)),regexp:/^(\d+(?:\.\d+)?)hz$/i},i:{method:t=>this._ticksToUnits(parseInt(t,10)),regexp:/^(\d+)i$/i},m:{method:t=>this._beatsToUnits(parseInt(t,10)*this._getTimeSignature()),regexp:/^(\d+)m$/i},n:{method:(t,e)=>{const n=parseInt(t,10),s=e==="."?1.5:1;return n===1?this._beatsToUnits(this._getTimeSignature())*s:this._beatsToUnits(4/n)*s},regexp:/^(\d+)n(\.?)$/i},number:{method:t=>this._expressions[this.defaultUnits].method.call(this,t),regexp:/^(\d+(?:\.\d+)?)$/},s:{method:t=>this._secondsToUnits(parseFloat(t)),regexp:/^(\d+(?:\.\d+)?)s$/},samples:{method:t=>parseInt(t,10)/this.context.sampleRate,regexp:/^(\d+)samples$/},t:{method:t=>{const e=parseInt(t,10);return this._beatsToUnits(8/(Math.floor(e)*3))},regexp:/^(\d+)t$/i},tr:{method:(t,e,n)=>{let s=0;return t&&t!=="0"&&(s+=this._beatsToUnits(this._getTimeSignature()*parseFloat(t))),e&&e!=="0"&&(s+=this._beatsToUnits(parseFloat(e))),n&&n!=="0"&&(s+=this._beatsToUnits(parseFloat(n)/4)),s},regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/}}}valueOf(){if(this._val instanceof Il&&this.fromType(this._val),Gn(this._val))return this._noArg();if(Ri(this._val)&&Gn(this._units)){for(const t in this._expressions)if(this._expressions[t].regexp.test(this._val.trim())){this._units=t;break}}else if(ms(this._val)){let t=0;for(const e in this._val)if(le(this._val[e])){const n=this._val[e],s=new this.constructor(this.context,e).valueOf()*n;t+=s}return t}if(le(this._units)){const t=this._expressions[this._units],e=this._val.toString().trim().match(t.regexp);return e?t.method.apply(this,e.slice(1)):t.method.call(this,this._val)}else return Ri(this._val)?parseFloat(this._val):this._val}_frequencyToUnits(t){return 1/t}_beatsToUnits(t){return 60/this._getBpm()*t}_secondsToUnits(t){return t}_ticksToUnits(t){return t*this._beatsToUnits(1)/this._getPPQ()}_noArg(){return this._now()}_getBpm(){return this.context.transport.bpm.value}_getTimeSignature(){return this.context.transport.timeSignature}_getPPQ(){return this.context.transport.PPQ}fromType(t){switch(this._units=void 0,this.defaultUnits){case"s":this._val=t.toSeconds();break;case"i":this._val=t.toTicks();break;case"hz":this._val=t.toFrequency();break;case"midi":this._val=t.toMidi();break}return this}toFrequency(){return 1/this.toSeconds()}toSamples(){return this.toSeconds()*this.context.sampleRate}toMilliseconds(){return this.toSeconds()*1e3}}class ti extends Il{constructor(){super(...arguments),this.name="TimeClass"}_getExpressions(){return Object.assign(super._getExpressions(),{now:{method:t=>this._now()+new this.constructor(this.context,t).valueOf(),regexp:/^\+(.+)/},quantize:{method:t=>{const e=new ti(this.context,t).valueOf();return this._secondsToUnits(this.context.transport.nextSubdivision(e))},regexp:/^@(.+)/}})}quantize(t,e=1){const n=new this.constructor(this.context,t).valueOf(),s=this.valueOf(),o=Math.round(s/n)*n-s;return s+o*e}toNotation(){const t=this.toSeconds(),e=["1m"];for(let r=1;r<9;r++){const a=Math.pow(2,r);e.push(a+"n."),e.push(a+"n"),e.push(a+"t")}e.push("0");let n=e[0],s=new ti(this.context,e[0]).toSeconds();return e.forEach(r=>{const a=new ti(this.context,r).toSeconds();Math.abs(a-t)<Math.abs(s-t)&&(n=r,s=a)}),n}toBarsBeatsSixteenths(){const t=this._beatsToUnits(1);let e=this.valueOf()/t;e=parseFloat(e.toFixed(4));const n=Math.floor(e/this._getTimeSignature());let s=e%1*4;e=Math.floor(e)%this._getTimeSignature();const r=s.toString();return r.length>3&&(s=parseFloat(parseFloat(r).toFixed(3))),[n,e,s].join(":")}toTicks(){const t=this._beatsToUnits(1);return this.valueOf()/t*this._getPPQ()}toSeconds(){return this.valueOf()}toMidi(){return Jc(this.toFrequency())}_now(){return this.context.now()}}class zn extends ti{constructor(){super(...arguments),this.name="Frequency",this.defaultUnits="hz"}static get A4(){return hb()}static set A4(t){db(t)}_getExpressions(){return Object.assign({},super._getExpressions(),{midi:{regexp:/^(\d+(?:\.\d+)?midi)/,method(t){return this.defaultUnits==="midi"?t:zn.mtof(t)}},note:{regexp:/^([a-g]{1}(?:b|#|##|x|bb|###|#x|x#|bbb)?)(-?[0-9]+)/i,method(t,e){const s=pb[t.toLowerCase()]+(parseInt(e,10)+1)*12;return this.defaultUnits==="midi"?s:zn.mtof(s)}},tr:{regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,method(t,e,n){let s=1;return t&&t!=="0"&&(s*=this._beatsToUnits(this._getTimeSignature()*parseFloat(t))),e&&e!=="0"&&(s*=this._beatsToUnits(parseFloat(e))),n&&n!=="0"&&(s*=this._beatsToUnits(parseFloat(n)/4)),s}}})}transpose(t){return new zn(this.context,this.valueOf()*op(t))}harmonize(t){return t.map(e=>this.transpose(e))}toMidi(){return Jc(this.valueOf())}toNote(){const t=this.toFrequency(),e=Math.log2(t/zn.A4);let n=Math.round(12*e)+57;const s=Math.floor(n/12);return s<0&&(n+=-12*s),mb[n%12]+s.toString()}toSeconds(){return 1/super.toSeconds()}toTicks(){const t=this._beatsToUnits(1),e=this.valueOf()/t;return Math.floor(e*this._getPPQ())}_noArg(){return 0}_frequencyToUnits(t){return t}_ticksToUnits(t){return 1/(t*60/(this._getBpm()*this._getPPQ()))}_beatsToUnits(t){return 1/super._beatsToUnits(t)}_secondsToUnits(t){return 1/t}static mtof(t){return fb(t)}static ftom(t){return Jc(t)}}const pb={cbbb:-3,cbb:-2,cb:-1,c:0,"c#":1,cx:2,"c##":2,"c###":3,"cx#":3,"c#x":3,dbbb:-1,dbb:0,db:1,d:2,"d#":3,dx:4,"d##":4,"d###":5,"dx#":5,"d#x":5,ebbb:1,ebb:2,eb:3,e:4,"e#":5,ex:6,"e##":6,"e###":7,"ex#":7,"e#x":7,fbbb:2,fbb:3,fb:4,f:5,"f#":6,fx:7,"f##":7,"f###":8,"fx#":8,"f#x":8,gbbb:4,gbb:5,gb:6,g:7,"g#":8,gx:9,"g##":9,"g###":10,"gx#":10,"g#x":10,abbb:6,abb:7,ab:8,a:9,"a#":10,ax:11,"a##":11,"a###":12,"ax#":12,"a#x":12,bbbb:8,bbb:9,bb:10,b:11,"b#":12,bx:13,"b##":13,"b###":14,"bx#":14,"b#x":14},mb=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];class Wr extends ti{constructor(){super(...arguments),this.name="TransportTime"}_now(){return this.context.transport.seconds}}class bn extends Li{constructor(){super();const t=$t(bn.getDefaults(),arguments,["context"]);this.defaultContext?this.context=this.defaultContext:this.context=t.context}static getDefaults(){return{context:Qn()}}now(){return this.context.currentTime+this.context.lookAhead}immediate(){return this.context.currentTime}get sampleTime(){return 1/this.context.sampleRate}get blockTime(){return 128/this.context.sampleRate}toSeconds(t){return qw(t),new ti(this.context,t).toSeconds()}toFrequency(t){return new zn(this.context,t).toFrequency()}toTicks(t){return new Wr(this.context,t).toTicks()}_getPartialProperties(t){const e=this.get();return Object.keys(e).forEach(n=>{Gn(t[n])&&delete e[n]}),e}get(){const t=nb(this);return Object.keys(t).forEach(e=>{if(Reflect.has(this,e)){const n=this[e];le(n)&&le(n.value)&&le(n.setValueAtTime)?t[e]=n.value:n instanceof bn?t[e]=n._getPartialProperties(t[e]):ii(n)||_s(n)||Ri(n)||Xw(n)?t[e]=n:delete t[e]}}),t}set(t){return Object.keys(t).forEach(e=>{Reflect.has(this,e)&&le(this[e])&&(this[e]&&le(this[e].value)&&le(this[e].setValueAtTime)?this[e].value!==t[e]&&(this[e].value=t[e]):this[e]instanceof bn?this[e].set(t[e]):this[e]=t[e])}),this}}class Ol extends Hn{constructor(t="stopped"){super(),this.name="StateTimeline",this._initial=t,this.setStateAtTime(this._initial,0)}getValueAtTime(t){const e=this.get(t);return e!==null?e.state:this._initial}setStateAtTime(t,e,n){return $i(e,0),this.add(Object.assign({},n,{state:t,time:e})),this}getLastState(t,e){const n=this._search(e);for(let s=n;s>=0;s--){const r=this._timeline[s];if(r.state===t)return r}}getNextState(t,e){const n=this._search(e);if(n!==-1)for(let s=n;s<this._timeline.length;s++){const r=this._timeline[s];if(r.state===t)return r}}}class xe extends bn{constructor(){const t=$t(xe.getDefaults(),arguments,["param","units","convert"]);for(super(t),this.name="Param",this.overridden=!1,this._minOutput=1e-7,se(le(t.param)&&(vs(t.param)||t.param instanceof xe),"param must be an AudioParam");!vs(t.param);)t.param=t.param._param;this._swappable=le(t.swappable)?t.swappable:!1,this._swappable?(this.input=this.context.createGain(),this._param=t.param,this.input.connect(this._param)):this._param=this.input=t.param,this._events=new Hn(1e3),this._initialValue=this._param.defaultValue,this.units=t.units,this.convert=t.convert,this._minValue=t.minValue,this._maxValue=t.maxValue,le(t.value)&&t.value!==this._toType(this._initialValue)&&this.setValueAtTime(t.value,0)}static getDefaults(){return Object.assign(bn.getDefaults(),{convert:!0,units:"number"})}get value(){const t=this.now();return this.getValueAtTime(t)}set value(t){this.cancelScheduledValues(this.now()),this.setValueAtTime(t,this.now())}get minValue(){return le(this._minValue)?this._minValue:this.units==="time"||this.units==="frequency"||this.units==="normalRange"||this.units==="positive"||this.units==="transportTime"||this.units==="ticks"||this.units==="bpm"||this.units==="hertz"||this.units==="samples"?0:this.units==="audioRange"?-1:this.units==="decibels"?-1/0:this._param.minValue}get maxValue(){return le(this._maxValue)?this._maxValue:this.units==="normalRange"||this.units==="audioRange"?1:this._param.maxValue}_is(t,e){return this.units===e}_assertRange(t){return le(this.maxValue)&&le(this.minValue)&&$i(t,this._fromType(this.minValue),this._fromType(this.maxValue)),t}_fromType(t){return this.convert&&!this.overridden?this._is(t,"time")?this.toSeconds(t):this._is(t,"decibels")?lb(t):this._is(t,"frequency")?this.toFrequency(t):t:this.overridden?0:t}_toType(t){return this.convert&&this.units==="decibels"?ub(t):t}setValueAtTime(t,e){const n=this.toSeconds(e),s=this._fromType(t);return se(isFinite(s)&&isFinite(n),`Invalid argument(s) to setValueAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),this._assertRange(s),this.log(this.units,"setValueAtTime",t,n),this._events.add({time:n,type:"setValueAtTime",value:s}),this._param.setValueAtTime(s,n),this}getValueAtTime(t){const e=Math.max(this.toSeconds(t),0),n=this._events.getAfter(e),s=this._events.get(e);let r=this._initialValue;if(s===null)r=this._initialValue;else if(s.type==="setTargetAtTime"&&(n===null||n.type==="setValueAtTime")){const a=this._events.getBefore(s.time);let o;a===null?o=this._initialValue:o=a.value,s.type==="setTargetAtTime"&&(r=this._exponentialApproach(s.time,o,s.value,s.constant,e))}else if(n===null)r=s.value;else if(n.type==="linearRampToValueAtTime"||n.type==="exponentialRampToValueAtTime"){let a=s.value;if(s.type==="setTargetAtTime"){const o=this._events.getBefore(s.time);o===null?a=this._initialValue:a=o.value}n.type==="linearRampToValueAtTime"?r=this._linearInterpolate(s.time,a,n.time,n.value,e):r=this._exponentialInterpolate(s.time,a,n.time,n.value,e)}else r=s.value;return this._toType(r)}setRampPoint(t){t=this.toSeconds(t);let e=this.getValueAtTime(t);return this.cancelAndHoldAtTime(t),this._fromType(e)===0&&(e=this._toType(this._minOutput)),this.setValueAtTime(e,t),this}linearRampToValueAtTime(t,e){const n=this._fromType(t),s=this.toSeconds(e);return se(isFinite(n)&&isFinite(s),`Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),this._assertRange(n),this._events.add({time:s,type:"linearRampToValueAtTime",value:n}),this.log(this.units,"linearRampToValueAtTime",t,s),this._param.linearRampToValueAtTime(n,s),this}exponentialRampToValueAtTime(t,e){let n=this._fromType(t);n=$n(n,0)?this._minOutput:n,this._assertRange(n);const s=this.toSeconds(e);return se(isFinite(n)&&isFinite(s),`Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),this._events.add({time:s,type:"exponentialRampToValueAtTime",value:n}),this.log(this.units,"exponentialRampToValueAtTime",t,s),this._param.exponentialRampToValueAtTime(n,s),this}exponentialRampTo(t,e,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialRampToValueAtTime(t,n+this.toSeconds(e)),this}linearRampTo(t,e,n){return n=this.toSeconds(n),this.setRampPoint(n),this.linearRampToValueAtTime(t,n+this.toSeconds(e)),this}targetRampTo(t,e,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialApproachValueAtTime(t,n,e),this}exponentialApproachValueAtTime(t,e,n){e=this.toSeconds(e),n=this.toSeconds(n);const s=Math.log(n+1)/Math.log(200);return this.setTargetAtTime(t,e,s),this.cancelAndHoldAtTime(e+n*.9),this.linearRampToValueAtTime(t,e+n),this}setTargetAtTime(t,e,n){const s=this._fromType(t);se(isFinite(n)&&n>0,"timeConstant must be a number greater than 0");const r=this.toSeconds(e);return this._assertRange(s),se(isFinite(s)&&isFinite(r),`Invalid argument(s) to setTargetAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),this._events.add({constant:n,time:r,type:"setTargetAtTime",value:s}),this.log(this.units,"setTargetAtTime",t,r,n),this._param.setTargetAtTime(s,r,n),this}setValueCurveAtTime(t,e,n,s=1){n=this.toSeconds(n),e=this.toSeconds(e);const r=this._fromType(t[0])*s;this.setValueAtTime(this._toType(r),e);const a=n/(t.length-1);for(let o=1;o<t.length;o++){const c=this._fromType(t[o])*s;this.linearRampToValueAtTime(this._toType(c),e+o*a)}return this}cancelScheduledValues(t){const e=this.toSeconds(t);return se(isFinite(e),`Invalid argument to cancelScheduledValues: ${JSON.stringify(t)}`),this._events.cancel(e),this._param.cancelScheduledValues(e),this.log(this.units,"cancelScheduledValues",e),this}cancelAndHoldAtTime(t){const e=this.toSeconds(t),n=this._fromType(this.getValueAtTime(e));se(isFinite(e),`Invalid argument to cancelAndHoldAtTime: ${JSON.stringify(t)}`),this.log(this.units,"cancelAndHoldAtTime",e,"value="+n);const s=this._events.get(e),r=this._events.getAfter(e);return s&&$n(s.time,e)?r?(this._param.cancelScheduledValues(r.time),this._events.cancel(r.time)):(this._param.cancelAndHoldAtTime(e),this._events.cancel(e+this.sampleTime)):r&&(this._param.cancelScheduledValues(r.time),this._events.cancel(r.time),r.type==="linearRampToValueAtTime"?this.linearRampToValueAtTime(this._toType(n),e):r.type==="exponentialRampToValueAtTime"&&this.exponentialRampToValueAtTime(this._toType(n),e)),this._events.add({time:e,type:"setValueAtTime",value:n}),this._param.setValueAtTime(n,e),this}rampTo(t,e=.1,n){return this.units==="frequency"||this.units==="bpm"||this.units==="decibels"?this.exponentialRampTo(t,e,n):this.linearRampTo(t,e,n),this}apply(t){const e=this.context.currentTime;t.setValueAtTime(this.getValueAtTime(e),e);const n=this._events.get(e);if(n&&n.type==="setTargetAtTime"){const s=this._events.getAfter(n.time),r=s?s.time:e+2,a=(r-e)/10;for(let o=e;o<r;o+=a)t.linearRampToValueAtTime(this.getValueAtTime(o),o)}return this._events.forEachAfter(this.context.currentTime,s=>{s.type==="cancelScheduledValues"?t.cancelScheduledValues(s.time):s.type==="setTargetAtTime"?t.setTargetAtTime(s.value,s.time,s.constant):t[s.type](s.value,s.time)}),this}setParam(t){se(this._swappable,"The Param must be assigned as 'swappable' in the constructor");const e=this.input;return e.disconnect(this._param),this.apply(t),this._param=t,e.connect(this._param),this}dispose(){return super.dispose(),this._events.dispose(),this}get defaultValue(){return this._toType(this._param.defaultValue)}_exponentialApproach(t,e,n,s,r){return n+(e-n)*Math.exp(-(r-t)/s)}_linearInterpolate(t,e,n,s,r){return e+(s-e)*((r-t)/(n-t))}_exponentialInterpolate(t,e,n,s,r){return e*Math.pow(s/e,(r-t)/(n-t))}}class ae extends bn{constructor(){super(...arguments),this._internalChannels=[]}get numberOfInputs(){return le(this.input)?vs(this.input)||this.input instanceof xe?1:this.input.numberOfInputs:0}get numberOfOutputs(){return le(this.output)?this.output.numberOfOutputs:0}_isAudioNode(t){return le(t)&&(t instanceof ae||Yi(t))}_getInternalNodes(){const t=this._internalChannels.slice(0);return this._isAudioNode(this.input)&&t.push(this.input),this._isAudioNode(this.output)&&this.input!==this.output&&t.push(this.output),t}_setChannelProperties(t){this._getInternalNodes().forEach(n=>{n.channelCount=t.channelCount,n.channelCountMode=t.channelCountMode,n.channelInterpretation=t.channelInterpretation})}_getChannelProperties(){const t=this._getInternalNodes();se(t.length>0,"ToneAudioNode does not have any internal nodes");const e=t[0];return{channelCount:e.channelCount,channelCountMode:e.channelCountMode,channelInterpretation:e.channelInterpretation}}get channelCount(){return this._getChannelProperties().channelCount}set channelCount(t){const e=this._getChannelProperties();this._setChannelProperties(Object.assign(e,{channelCount:t}))}get channelCountMode(){return this._getChannelProperties().channelCountMode}set channelCountMode(t){const e=this._getChannelProperties();this._setChannelProperties(Object.assign(e,{channelCountMode:t}))}get channelInterpretation(){return this._getChannelProperties().channelInterpretation}set channelInterpretation(t){const e=this._getChannelProperties();this._setChannelProperties(Object.assign(e,{channelInterpretation:t}))}connect(t,e=0,n=0){return Ts(this,t,e,n),this}toDestination(){return this.connect(this.context.destination),this}toMaster(){return Nl("toMaster() has been renamed toDestination()"),this.toDestination()}disconnect(t,e=0,n=0){return cp(this,t,e,n),this}chain(...t){return ga(this,...t),this}fan(...t){return t.forEach(e=>this.connect(e)),this}dispose(){return super.dispose(),le(this.input)&&(this.input instanceof ae?this.input.dispose():Yi(this.input)&&this.input.disconnect()),le(this.output)&&(this.output instanceof ae?this.output.dispose():Yi(this.output)&&this.output.disconnect()),this._internalChannels=[],this}}function ga(...i){const t=i.shift();i.reduce((e,n)=>(e instanceof ae?e.connect(n):Yi(e)&&Ts(e,n),n),t)}function Ts(i,t,e=0,n=0){for(se(le(i),"Cannot connect from undefined node"),se(le(t),"Cannot connect to undefined node"),(t instanceof ae||Yi(t))&&se(t.numberOfInputs>0,"Cannot connect to node with no inputs"),se(i.numberOfOutputs>0,"Cannot connect from node with no outputs");t instanceof ae||t instanceof xe;)le(t.input)&&(t=t.input);for(;i instanceof ae;)le(i.output)&&(i=i.output);vs(t)?i.connect(t,e):i.connect(t,e,n)}function cp(i,t,e=0,n=0){if(le(t))for(;t instanceof ae;)t=t.input;for(;!Yi(i);)le(i.output)&&(i=i.output);vs(t)?i.disconnect(t,e):Yi(t)?i.disconnect(t,e,n):i.disconnect()}class Ye extends ae{constructor(){const t=$t(Ye.getDefaults(),arguments,["gain","units"]);super(t),this.name="Gain",this._gainNode=this.context.createGain(),this.input=this._gainNode,this.output=this._gainNode,this.gain=new xe({context:this.context,convert:t.convert,param:this._gainNode.gain,units:t.units,value:t.gain,minValue:t.minValue,maxValue:t.maxValue}),Ue(this,"gain")}static getDefaults(){return Object.assign(ae.getDefaults(),{convert:!0,gain:1,units:"gain"})}dispose(){return super.dispose(),this._gainNode.disconnect(),this.gain.dispose(),this}}class gr extends ae{constructor(t){super(t),this.onended=ye,this._startTime=-1,this._stopTime=-1,this._timeout=-1,this.output=new Ye({context:this.context,gain:0}),this._gainNode=this.output,this.getStateAtTime=function(e){const n=this.toSeconds(e);return this._startTime!==-1&&n>=this._startTime&&(this._stopTime===-1||n<=this._stopTime)?"started":"stopped"},this._fadeIn=t.fadeIn,this._fadeOut=t.fadeOut,this._curve=t.curve,this.onended=t.onended}static getDefaults(){return Object.assign(ae.getDefaults(),{curve:"linear",fadeIn:0,fadeOut:0,onended:ye})}_startGain(t,e=1){se(this._startTime===-1,"Source cannot be started more than once");const n=this.toSeconds(this._fadeIn);return this._startTime=t+n,this._startTime=Math.max(this._startTime,this.context.currentTime),n>0?(this._gainNode.gain.setValueAtTime(0,t),this._curve==="linear"?this._gainNode.gain.linearRampToValueAtTime(e,t+n):this._gainNode.gain.exponentialApproachValueAtTime(e,t,n)):this._gainNode.gain.setValueAtTime(e,t),this}stop(t){return this.log("stop",t),this._stopGain(this.toSeconds(t)),this}_stopGain(t){se(this._startTime!==-1,"'start' must be called before 'stop'"),this.cancelStop();const e=this.toSeconds(this._fadeOut);return this._stopTime=this.toSeconds(t)+e,this._stopTime=Math.max(this._stopTime,this.now()),e>0?this._curve==="linear"?this._gainNode.gain.linearRampTo(0,e,t):this._gainNode.gain.targetRampTo(0,e,t):(this._gainNode.gain.cancelAndHoldAtTime(t),this._gainNode.gain.setValueAtTime(0,t)),this.context.clearTimeout(this._timeout),this._timeout=this.context.setTimeout(()=>{const n=this._curve==="exponential"?e*2:0;this._stopSource(this.now()+n),this._onended()},this._stopTime-this.context.currentTime),this}_onended(){if(this.onended!==ye&&(this.onended(this),this.onended=ye,!this.context.isOffline)){const t=()=>this.dispose();typeof requestIdleCallback<"u"?requestIdleCallback(t):setTimeout(t,10)}}get state(){return this.getStateAtTime(this.now())}cancelStop(){return this.log("cancelStop"),se(this._startTime!==-1,"Source is not started"),this._gainNode.gain.cancelScheduledValues(this._startTime+this.sampleTime),this.context.clearTimeout(this._timeout),this._stopTime=-1,this}dispose(){return super.dispose(),this._gainNode.dispose(),this.onended=ye,this}}class Ul extends gr{constructor(){const t=$t(Ul.getDefaults(),arguments,["offset"]);super(t),this.name="ToneConstantSource",this._source=this.context.createConstantSource(),Ts(this._source,this._gainNode),this.offset=new xe({context:this.context,convert:t.convert,param:this._source.offset,units:t.units,value:t.offset,minValue:t.minValue,maxValue:t.maxValue})}static getDefaults(){return Object.assign(gr.getDefaults(),{convert:!0,offset:1,units:"number"})}start(t){const e=this.toSeconds(t);return this.log("start",e),this._startGain(e),this._source.start(e),this}_stopSource(t){this._source.stop(t)}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._source.disconnect(),this.offset.dispose(),this}}class Be extends ae{constructor(){const t=$t(Be.getDefaults(),arguments,["value","units"]);super(t),this.name="Signal",this.override=!0,this.output=this._constantSource=new Ul({context:this.context,convert:t.convert,offset:t.value,units:t.units,minValue:t.minValue,maxValue:t.maxValue}),this._constantSource.start(0),this.input=this._param=this._constantSource.offset}static getDefaults(){return Object.assign(ae.getDefaults(),{convert:!0,units:"number",value:0})}connect(t,e=0,n=0){return Na(this,t,e,n),this}dispose(){return super.dispose(),this._param.dispose(),this._constantSource.dispose(),this}setValueAtTime(t,e){return this._param.setValueAtTime(t,e),this}getValueAtTime(t){return this._param.getValueAtTime(t)}setRampPoint(t){return this._param.setRampPoint(t),this}linearRampToValueAtTime(t,e){return this._param.linearRampToValueAtTime(t,e),this}exponentialRampToValueAtTime(t,e){return this._param.exponentialRampToValueAtTime(t,e),this}exponentialRampTo(t,e,n){return this._param.exponentialRampTo(t,e,n),this}linearRampTo(t,e,n){return this._param.linearRampTo(t,e,n),this}targetRampTo(t,e,n){return this._param.targetRampTo(t,e,n),this}exponentialApproachValueAtTime(t,e,n){return this._param.exponentialApproachValueAtTime(t,e,n),this}setTargetAtTime(t,e,n){return this._param.setTargetAtTime(t,e,n),this}setValueCurveAtTime(t,e,n,s){return this._param.setValueCurveAtTime(t,e,n,s),this}cancelScheduledValues(t){return this._param.cancelScheduledValues(t),this}cancelAndHoldAtTime(t){return this._param.cancelAndHoldAtTime(t),this}rampTo(t,e,n){return this._param.rampTo(t,e,n),this}get value(){return this._param.value}set value(t){this._param.value=t}get convert(){return this._param.convert}set convert(t){this._param.convert=t}get units(){return this._param.units}get overridden(){return this._param.overridden}set overridden(t){this._param.overridden=t}get maxValue(){return this._param.maxValue}get minValue(){return this._param.minValue}apply(t){return this._param.apply(t),this}}function Na(i,t,e,n){(t instanceof xe||vs(t)||t instanceof Be&&t.override)&&(t.cancelScheduledValues(0),t.setValueAtTime(0,0),t instanceof Be&&(t.overridden=!0)),Ts(i,t,e,n)}class Fl extends xe{constructor(){const t=$t(Fl.getDefaults(),arguments,["value"]);super(t),this.name="TickParam",this._events=new Hn(1/0),this._multiplier=1,this._multiplier=t.multiplier,this._events.cancel(0),this._events.add({ticks:0,time:0,type:"setValueAtTime",value:this._fromType(t.value)}),this.setValueAtTime(t.value,0)}static getDefaults(){return Object.assign(xe.getDefaults(),{multiplier:1,units:"hertz",value:1})}setTargetAtTime(t,e,n){e=this.toSeconds(e),this.setRampPoint(e);const s=this._fromType(t),r=this._events.get(e),a=Math.round(Math.max(1/n,1));for(let o=0;o<=a;o++){const c=n*o+e,l=this._exponentialApproach(r.time,r.value,s,n,c);this.linearRampToValueAtTime(this._toType(l),c)}return this}setValueAtTime(t,e){const n=this.toSeconds(e);super.setValueAtTime(t,e);const s=this._events.get(n),r=this._events.previousEvent(s),a=this._getTicksUntilEvent(r,n);return s.ticks=Math.max(a,0),this}linearRampToValueAtTime(t,e){const n=this.toSeconds(e);super.linearRampToValueAtTime(t,e);const s=this._events.get(n),r=this._events.previousEvent(s),a=this._getTicksUntilEvent(r,n);return s.ticks=Math.max(a,0),this}exponentialRampToValueAtTime(t,e){e=this.toSeconds(e);const n=this._fromType(t),s=this._events.get(e),r=Math.round(Math.max((e-s.time)*10,1)),a=(e-s.time)/r;for(let o=0;o<=r;o++){const c=a*o+s.time,l=this._exponentialInterpolate(s.time,s.value,e,n,c);this.linearRampToValueAtTime(this._toType(l),c)}return this}_getTicksUntilEvent(t,e){if(t===null)t={ticks:0,time:0,type:"setValueAtTime",value:0};else if(Gn(t.ticks)){const a=this._events.previousEvent(t);t.ticks=this._getTicksUntilEvent(a,t.time)}const n=this._fromType(this.getValueAtTime(t.time));let s=this._fromType(this.getValueAtTime(e));const r=this._events.get(e);return r&&r.time===e&&r.type==="setValueAtTime"&&(s=this._fromType(this.getValueAtTime(e-this.sampleTime))),.5*(e-t.time)*(n+s)+t.ticks}getTicksAtTime(t){const e=this.toSeconds(t),n=this._events.get(e);return Math.max(this._getTicksUntilEvent(n,e),0)}getDurationOfTicks(t,e){const n=this.toSeconds(e),s=this.getTicksAtTime(e);return this.getTimeOfTick(s+t)-n}getTimeOfTick(t){const e=this._events.get(t,"ticks"),n=this._events.getAfter(t,"ticks");if(e&&e.ticks===t)return e.time;if(e&&n&&n.type==="linearRampToValueAtTime"&&e.value!==n.value){const s=this._fromType(this.getValueAtTime(e.time)),a=(this._fromType(this.getValueAtTime(n.time))-s)/(n.time-e.time),o=Math.sqrt(Math.pow(s,2)-2*a*(e.ticks-t)),c=(-s+o)/a,l=(-s-o)/a;return(c>0?c:l)+e.time}else return e?e.value===0?1/0:e.time+(t-e.ticks)/e.value:t/this._initialValue}ticksToTime(t,e){return this.getDurationOfTicks(t,e)}timeToTicks(t,e){const n=this.toSeconds(e),s=this.toSeconds(t),r=this.getTicksAtTime(n);return this.getTicksAtTime(n+s)-r}_fromType(t){return this.units==="bpm"&&this.multiplier?1/(60/t/this.multiplier):super._fromType(t)}_toType(t){return this.units==="bpm"&&this.multiplier?t/this.multiplier*60:super._toType(t)}get multiplier(){return this._multiplier}set multiplier(t){const e=this.value;this._multiplier=t,this.cancelScheduledValues(0),this.setValueAtTime(e,0)}}class kl extends Be{constructor(){const t=$t(kl.getDefaults(),arguments,["value"]);super(t),this.name="TickSignal",this.input=this._param=new Fl({context:this.context,convert:t.convert,multiplier:t.multiplier,param:this._constantSource.offset,units:t.units,value:t.value})}static getDefaults(){return Object.assign(Be.getDefaults(),{multiplier:1,units:"hertz",value:1})}ticksToTime(t,e){return this._param.ticksToTime(t,e)}timeToTicks(t,e){return this._param.timeToTicks(t,e)}getTimeOfTick(t){return this._param.getTimeOfTick(t)}getDurationOfTicks(t,e){return this._param.getDurationOfTicks(t,e)}getTicksAtTime(t){return this._param.getTicksAtTime(t)}get multiplier(){return this._param.multiplier}set multiplier(t){this._param.multiplier=t}dispose(){return super.dispose(),this._param.dispose(),this}}class Bl extends bn{constructor(){const t=$t(Bl.getDefaults(),arguments,["frequency"]);super(t),this.name="TickSource",this._state=new Ol,this._tickOffset=new Hn,this._ticksAtTime=new Hn,this._secondsAtTime=new Hn,this.frequency=new kl({context:this.context,units:t.units,value:t.frequency}),Ue(this,"frequency"),this._state.setStateAtTime("stopped",0),this.setTicksAtTime(0,0)}static getDefaults(){return Object.assign({frequency:1,units:"hertz"},bn.getDefaults())}get state(){return this.getStateAtTime(this.now())}start(t,e){const n=this.toSeconds(t);return this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),le(e)&&this.setTicksAtTime(e,n),this._ticksAtTime.cancel(n),this._secondsAtTime.cancel(n)),this}stop(t){const e=this.toSeconds(t);if(this._state.getValueAtTime(e)==="stopped"){const n=this._state.get(e);n&&n.time>0&&(this._tickOffset.cancel(n.time),this._state.cancel(n.time))}return this._state.cancel(e),this._state.setStateAtTime("stopped",e),this.setTicksAtTime(0,e),this._ticksAtTime.cancel(e),this._secondsAtTime.cancel(e),this}pause(t){const e=this.toSeconds(t);return this._state.getValueAtTime(e)==="started"&&(this._state.setStateAtTime("paused",e),this._ticksAtTime.cancel(e),this._secondsAtTime.cancel(e)),this}cancel(t){return t=this.toSeconds(t),this._state.cancel(t),this._tickOffset.cancel(t),this._ticksAtTime.cancel(t),this._secondsAtTime.cancel(t),this}getTicksAtTime(t){const e=this.toSeconds(t),n=this._state.getLastState("stopped",e),s=this._ticksAtTime.get(e),r={state:"paused",time:e};this._state.add(r);let a=s||n,o=s?s.ticks:0,c=null;return this._state.forEachBetween(a.time,e+this.sampleTime,l=>{let h=a.time;const d=this._tickOffset.get(l.time);d&&d.time>=a.time&&(o=d.ticks,h=d.time),a.state==="started"&&l.state!=="started"&&(o+=this.frequency.getTicksAtTime(l.time)-this.frequency.getTicksAtTime(h),l.time!==r.time&&(c={state:l.state,time:l.time,ticks:o})),a=l}),this._state.remove(r),c&&this._ticksAtTime.add(c),o}get ticks(){return this.getTicksAtTime(this.now())}set ticks(t){this.setTicksAtTime(t,this.now())}get seconds(){return this.getSecondsAtTime(this.now())}set seconds(t){const e=this.now(),n=this.frequency.timeToTicks(t,e);this.setTicksAtTime(n,e)}getSecondsAtTime(t){t=this.toSeconds(t);const e=this._state.getLastState("stopped",t),n={state:"paused",time:t};this._state.add(n);const s=this._secondsAtTime.get(t);let r=s||e,a=s?s.seconds:0,o=null;return this._state.forEachBetween(r.time,t+this.sampleTime,c=>{let l=r.time;const h=this._tickOffset.get(c.time);h&&h.time>=r.time&&(a=h.seconds,l=h.time),r.state==="started"&&c.state!=="started"&&(a+=c.time-l,c.time!==n.time&&(o={state:c.state,time:c.time,seconds:a})),r=c}),this._state.remove(n),o&&this._secondsAtTime.add(o),a}setTicksAtTime(t,e){return e=this.toSeconds(e),this._tickOffset.cancel(e),this._tickOffset.add({seconds:this.frequency.getDurationOfTicks(t,e),ticks:t,time:e}),this._ticksAtTime.cancel(e),this._secondsAtTime.cancel(e),this}getStateAtTime(t){return t=this.toSeconds(t),this._state.getValueAtTime(t)}getTimeOfTick(t,e=this.now()){const n=this._tickOffset.get(e),s=this._state.get(e),r=Math.max(n.time,s.time),a=this.frequency.getTicksAtTime(r)+t-n.ticks;return this.frequency.getTimeOfTick(a)}forEachTickBetween(t,e,n){let s=this._state.get(t);this._state.forEachBetween(t,e,a=>{s&&s.state==="started"&&a.state!=="started"&&this.forEachTickBetween(Math.max(s.time,t),a.time-this.sampleTime,n),s=a});let r=null;if(s&&s.state==="started"){const a=Math.max(s.time,t),o=this.frequency.getTicksAtTime(a),c=this.frequency.getTicksAtTime(s.time),l=o-c;let h=Math.ceil(l)-l;h=$n(h,1)?0:h;let d=this.frequency.getTimeOfTick(o+h);for(;d<e;){try{n(d,Math.round(this.getTicksAtTime(d)))}catch(f){r=f;break}d+=this.frequency.getDurationOfTicks(1,d)}}if(r)throw r;return this}dispose(){return super.dispose(),this._state.dispose(),this._tickOffset.dispose(),this._ticksAtTime.dispose(),this._secondsAtTime.dispose(),this.frequency.dispose(),this}}class Da extends bn{constructor(){const t=$t(Da.getDefaults(),arguments,["callback","frequency"]);super(t),this.name="Clock",this.callback=ye,this._lastUpdate=0,this._state=new Ol("stopped"),this._boundLoop=this._loop.bind(this),this.callback=t.callback,this._tickSource=new Bl({context:this.context,frequency:t.frequency,units:t.units}),this._lastUpdate=0,this.frequency=this._tickSource.frequency,Ue(this,"frequency"),this._state.setStateAtTime("stopped",0),this.context.on("tick",this._boundLoop)}static getDefaults(){return Object.assign(bn.getDefaults(),{callback:ye,frequency:1,units:"hertz"})}get state(){return this._state.getValueAtTime(this.now())}start(t,e){Jf(this.context);const n=this.toSeconds(t);return this.log("start",n),this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),this._tickSource.start(n,e),n<this._lastUpdate&&this.emit("start",n,e)),this}stop(t){const e=this.toSeconds(t);return this.log("stop",e),this._state.cancel(e),this._state.setStateAtTime("stopped",e),this._tickSource.stop(e),e<this._lastUpdate&&this.emit("stop",e),this}pause(t){const e=this.toSeconds(t);return this._state.getValueAtTime(e)==="started"&&(this._state.setStateAtTime("paused",e),this._tickSource.pause(e),e<this._lastUpdate&&this.emit("pause",e)),this}get ticks(){return Math.ceil(this.getTicksAtTime(this.now()))}set ticks(t){this._tickSource.ticks=t}get seconds(){return this._tickSource.seconds}set seconds(t){this._tickSource.seconds=t}getSecondsAtTime(t){return this._tickSource.getSecondsAtTime(t)}setTicksAtTime(t,e){return this._tickSource.setTicksAtTime(t,e),this}getTimeOfTick(t,e=this.now()){return this._tickSource.getTimeOfTick(t,e)}getTicksAtTime(t){return this._tickSource.getTicksAtTime(t)}nextTickTime(t,e){const n=this.toSeconds(e),s=this.getTicksAtTime(n);return this._tickSource.getTimeOfTick(s+t,n)}_loop(){const t=this._lastUpdate,e=this.now();this._lastUpdate=e,this.log("loop",t,e),t!==e&&(this._state.forEachBetween(t,e,n=>{switch(n.state){case"started":const s=this._tickSource.getTicksAtTime(n.time);this.emit("start",n.time,s);break;case"stopped":n.time!==0&&this.emit("stop",n.time);break;case"paused":this.emit("pause",n.time);break}}),this._tickSource.forEachTickBetween(t,e,(n,s)=>{this.callback(n,s)}))}getStateAtTime(t){const e=this.toSeconds(t);return this._state.getValueAtTime(e)}dispose(){return super.dispose(),this.context.off("tick",this._boundLoop),this._tickSource.dispose(),this._state.dispose(),this}}lo.mixin(Da);class Cr extends ae{constructor(){const t=$t(Cr.getDefaults(),arguments,["volume"]);super(t),this.name="Volume",this.input=this.output=new Ye({context:this.context,gain:t.volume,units:"decibels"}),this.volume=this.output.gain,Ue(this,"volume"),this._unmutedVolume=t.volume,this.mute=t.mute}static getDefaults(){return Object.assign(ae.getDefaults(),{mute:!1,volume:0})}get mute(){return this.volume.value===-1/0}set mute(t){!this.mute&&t?(this._unmutedVolume=this.volume.value,this.volume.value=-1/0):this.mute&&!t&&(this.volume.value=this._unmutedVolume)}dispose(){return super.dispose(),this.input.dispose(),this.volume.dispose(),this}}class Vl extends ae{constructor(){const t=$t(Vl.getDefaults(),arguments);super(t),this.name="Destination",this.input=new Cr({context:this.context}),this.output=new Ye({context:this.context}),this.volume=this.input.volume,ga(this.input,this.output,this.context.rawContext.destination),this.mute=t.mute,this._internalChannels=[this.input,this.context.rawContext.destination,this.output]}static getDefaults(){return Object.assign(ae.getDefaults(),{mute:!1,volume:0})}get mute(){return this.input.mute}set mute(t){this.input.mute=t}chain(...t){return this.input.disconnect(),t.unshift(this.input),t.push(this.output),ga(...t),this}get maxChannelCount(){return this.context.rawContext.destination.maxChannelCount}dispose(){return super.dispose(),this.volume.dispose(),this}}Ca(i=>{i.destination=new Vl({context:i})});Ra(i=>{i.destination.dispose()});class gb extends ae{constructor(){super(...arguments),this.name="Listener",this.positionX=new xe({context:this.context,param:this.context.rawContext.listener.positionX}),this.positionY=new xe({context:this.context,param:this.context.rawContext.listener.positionY}),this.positionZ=new xe({context:this.context,param:this.context.rawContext.listener.positionZ}),this.forwardX=new xe({context:this.context,param:this.context.rawContext.listener.forwardX}),this.forwardY=new xe({context:this.context,param:this.context.rawContext.listener.forwardY}),this.forwardZ=new xe({context:this.context,param:this.context.rawContext.listener.forwardZ}),this.upX=new xe({context:this.context,param:this.context.rawContext.listener.upX}),this.upY=new xe({context:this.context,param:this.context.rawContext.listener.upY}),this.upZ=new xe({context:this.context,param:this.context.rawContext.listener.upZ})}static getDefaults(){return Object.assign(ae.getDefaults(),{positionX:0,positionY:0,positionZ:0,forwardX:0,forwardY:0,forwardZ:-1,upX:0,upY:1,upZ:0})}dispose(){return super.dispose(),this.positionX.dispose(),this.positionY.dispose(),this.positionZ.dispose(),this.forwardX.dispose(),this.forwardY.dispose(),this.forwardZ.dispose(),this.upX.dispose(),this.upY.dispose(),this.upZ.dispose(),this}}Ca(i=>{i.listener=new gb({context:i})});Ra(i=>{i.listener.dispose()});class zl extends Li{constructor(){super(),this.name="ToneAudioBuffers",this._buffers=new Map,this._loadingCount=0;const t=$t(zl.getDefaults(),arguments,["urls","onload","baseUrl"],"urls");this.baseUrl=t.baseUrl,Object.keys(t.urls).forEach(e=>{this._loadingCount++;const n=t.urls[e];this.add(e,n,this._bufferLoaded.bind(this,t.onload),t.onerror)})}static getDefaults(){return{baseUrl:"",onerror:ye,onload:ye,urls:{}}}has(t){return this._buffers.has(t.toString())}get(t){return se(this.has(t),`ToneAudioBuffers has no buffer named: ${t}`),this._buffers.get(t.toString())}_bufferLoaded(t){this._loadingCount--,this._loadingCount===0&&t&&t()}get loaded(){return Array.from(this._buffers).every(([t,e])=>e.loaded)}add(t,e,n=ye,s=ye){return Ri(e)?(this.baseUrl&&e.trim().substring(0,11).toLowerCase()==="data:audio/"&&(this.baseUrl=""),this._buffers.set(t.toString(),new Pe(this.baseUrl+e,n,s))):this._buffers.set(t.toString(),new Pe(e,n,s)),this}dispose(){return super.dispose(),this._buffers.forEach(t=>t.dispose()),this._buffers.clear(),this}}class er extends Wr{constructor(){super(...arguments),this.name="Ticks",this.defaultUnits="i"}_now(){return this.context.transport.ticks}_beatsToUnits(t){return this._getPPQ()*t}_secondsToUnits(t){return Math.floor(t/(60/this._getBpm())*this._getPPQ())}_ticksToUnits(t){return t}toTicks(){return this.valueOf()}toSeconds(){return this.valueOf()/this._getPPQ()*(60/this._getBpm())}}class _b extends bn{constructor(){super(...arguments),this.name="Draw",this.expiration=.25,this.anticipation=.008,this._events=new Hn,this._boundDrawLoop=this._drawLoop.bind(this),this._animationFrame=-1}schedule(t,e){return this._events.add({callback:t,time:this.toSeconds(e)}),this._events.length===1&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop)),this}cancel(t){return this._events.cancel(this.toSeconds(t)),this}_drawLoop(){const t=this.context.currentTime;this._events.forEachBefore(t+this.anticipation,e=>{t-e.time<=this.expiration&&e.callback(),this._events.remove(e)}),this._events.length>0&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop))}dispose(){return super.dispose(),this._events.dispose(),cancelAnimationFrame(this._animationFrame),this}}Ca(i=>{i.draw=new _b({context:i})});Ra(i=>{i.draw.dispose()});class vb extends Li{constructor(){super(...arguments),this.name="IntervalTimeline",this._root=null,this._length=0}add(t){se(le(t.time),"Events must have a time property"),se(le(t.duration),"Events must have a duration parameter"),t.time=t.time.valueOf();let e=new xb(t.time,t.time+t.duration,t);for(this._root===null?this._root=e:this._root.insert(e),this._length++;e!==null;)e.updateHeight(),e.updateMax(),this._rebalance(e),e=e.parent;return this}remove(t){if(this._root!==null){const e=[];this._root.search(t.time,e);for(const n of e)if(n.event===t){this._removeNode(n),this._length--;break}}return this}get length(){return this._length}cancel(t){return this.forEachFrom(t,e=>this.remove(e)),this}_setRoot(t){this._root=t,this._root!==null&&(this._root.parent=null)}_replaceNodeInParent(t,e){t.parent!==null?(t.isLeftChild()?t.parent.left=e:t.parent.right=e,this._rebalance(t.parent)):this._setRoot(e)}_removeNode(t){if(t.left===null&&t.right===null)this._replaceNodeInParent(t,null);else if(t.right===null)this._replaceNodeInParent(t,t.left);else if(t.left===null)this._replaceNodeInParent(t,t.right);else{const e=t.getBalance();let n,s=null;if(e>0)if(t.left.right===null)n=t.left,n.right=t.right,s=n;else{for(n=t.left.right;n.right!==null;)n=n.right;n.parent&&(n.parent.right=n.left,s=n.parent,n.left=t.left,n.right=t.right)}else if(t.right.left===null)n=t.right,n.left=t.left,s=n;else{for(n=t.right.left;n.left!==null;)n=n.left;n.parent&&(n.parent.left=n.right,s=n.parent,n.left=t.left,n.right=t.right)}t.parent!==null?t.isLeftChild()?t.parent.left=n:t.parent.right=n:this._setRoot(n),s&&this._rebalance(s)}t.dispose()}_rotateLeft(t){const e=t.parent,n=t.isLeftChild(),s=t.right;s&&(t.right=s.left,s.left=t),e!==null?n?e.left=s:e.right=s:this._setRoot(s)}_rotateRight(t){const e=t.parent,n=t.isLeftChild(),s=t.left;s&&(t.left=s.right,s.right=t),e!==null?n?e.left=s:e.right=s:this._setRoot(s)}_rebalance(t){const e=t.getBalance();e>1&&t.left?t.left.getBalance()<0?this._rotateLeft(t.left):this._rotateRight(t):e<-1&&t.right&&(t.right.getBalance()>0?this._rotateRight(t.right):this._rotateLeft(t))}get(t){if(this._root!==null){const e=[];if(this._root.search(t,e),e.length>0){let n=e[0];for(let s=1;s<e.length;s++)e[s].low>n.low&&(n=e[s]);return n.event}}return null}forEach(t){if(this._root!==null){const e=[];this._root.traverse(n=>e.push(n)),e.forEach(n=>{n.event&&t(n.event)})}return this}forEachAtTime(t,e){if(this._root!==null){const n=[];this._root.search(t,n),n.forEach(s=>{s.event&&e(s.event)})}return this}forEachFrom(t,e){if(this._root!==null){const n=[];this._root.searchAfter(t,n),n.forEach(s=>{s.event&&e(s.event)})}return this}dispose(){return super.dispose(),this._root!==null&&this._root.traverse(t=>t.dispose()),this._root=null,this}}class xb{constructor(t,e,n){this._left=null,this._right=null,this.parent=null,this.height=0,this.event=n,this.low=t,this.high=e,this.max=this.high}insert(t){t.low<=this.low?this.left===null?this.left=t:this.left.insert(t):this.right===null?this.right=t:this.right.insert(t)}search(t,e){t>this.max||(this.left!==null&&this.left.search(t,e),this.low<=t&&this.high>t&&e.push(this),!(this.low>t)&&this.right!==null&&this.right.search(t,e))}searchAfter(t,e){this.low>=t&&(e.push(this),this.left!==null&&this.left.searchAfter(t,e)),this.right!==null&&this.right.searchAfter(t,e)}traverse(t){t(this),this.left!==null&&this.left.traverse(t),this.right!==null&&this.right.traverse(t)}updateHeight(){this.left!==null&&this.right!==null?this.height=Math.max(this.left.height,this.right.height)+1:this.right!==null?this.height=this.right.height+1:this.left!==null?this.height=this.left.height+1:this.height=0}updateMax(){this.max=this.high,this.left!==null&&(this.max=Math.max(this.max,this.left.max)),this.right!==null&&(this.max=Math.max(this.max,this.right.max))}getBalance(){let t=0;return this.left!==null&&this.right!==null?t=this.left.height-this.right.height:this.left!==null?t=this.left.height+1:this.right!==null&&(t=-(this.right.height+1)),t}isLeftChild(){return this.parent!==null&&this.parent.left===this}get left(){return this._left}set left(t){this._left=t,t!==null&&(t.parent=this),this.updateHeight(),this.updateMax()}get right(){return this._right}set right(t){this._right=t,t!==null&&(t.parent=this),this.updateHeight(),this.updateMax()}dispose(){this.parent=null,this._left=null,this._right=null,this.event=null}}class yb extends Li{constructor(t){super(),this.name="TimelineValue",this._timeline=new Hn({memory:10}),this._initialValue=t}set(t,e){return this._timeline.add({value:t,time:e}),this}get(t){const e=this._timeline.get(t);return e?e.value:this._initialValue}}class Pi extends ae{constructor(){super($t(Pi.getDefaults(),arguments,["context"]))}connect(t,e=0,n=0){return Na(this,t,e,n),this}}class ho extends Pi{constructor(){const t=$t(ho.getDefaults(),arguments,["mapping","length"]);super(t),this.name="WaveShaper",this._shaper=this.context.createWaveShaper(),this.input=this._shaper,this.output=this._shaper,ii(t.mapping)||t.mapping instanceof Float32Array?this.curve=Float32Array.from(t.mapping):Ww(t.mapping)&&this.setMap(t.mapping,t.length)}static getDefaults(){return Object.assign(Be.getDefaults(),{length:1024})}setMap(t,e=1024){const n=new Float32Array(e);for(let s=0,r=e;s<r;s++){const a=s/(r-1)*2-1;n[s]=t(a,s)}return this.curve=n,this}get curve(){return this._shaper.curve}set curve(t){this._shaper.curve=t}get oversample(){return this._shaper.oversample}set oversample(t){const e=["none","2x","4x"].some(n=>n.includes(t));se(e,"oversampling must be either 'none', '2x', or '4x'"),this._shaper.oversample=t}dispose(){return super.dispose(),this._shaper.disconnect(),this}}class Gl extends Pi{constructor(){const t=$t(Gl.getDefaults(),arguments,["value"]);super(t),this.name="Pow",this._exponentScaler=this.input=this.output=new ho({context:this.context,mapping:this._expFunc(t.value),length:8192}),this._exponent=t.value}static getDefaults(){return Object.assign(Pi.getDefaults(),{value:1})}_expFunc(t){return e=>Math.pow(Math.abs(e),t)}get value(){return this._exponent}set value(t){this._exponent=t,this._exponentScaler.setMap(this._expFunc(this._exponent))}dispose(){return super.dispose(),this._exponentScaler.dispose(),this}}class Ki{constructor(t,e){this.id=Ki._eventId++,this._remainderTime=0;const n=Object.assign(Ki.getDefaults(),e);this.transport=t,this.callback=n.callback,this._once=n.once,this.time=Math.floor(n.time),this._remainderTime=n.time-this.time}static getDefaults(){return{callback:ye,once:!1,time:0}}get floatTime(){return this.time+this._remainderTime}invoke(t){if(this.callback){const e=this.transport.bpm.getDurationOfTicks(1,t);this.callback(t+this._remainderTime*e),this._once&&this.transport.clear(this.id)}}dispose(){return this.callback=void 0,this}}Ki._eventId=0;class Hl extends Ki{constructor(t,e){super(t,e),this._currentId=-1,this._nextId=-1,this._nextTick=this.time,this._boundRestart=this._restart.bind(this);const n=Object.assign(Hl.getDefaults(),e);this.duration=n.duration,this._interval=n.interval,this._nextTick=n.time,this.transport.on("start",this._boundRestart),this.transport.on("loopStart",this._boundRestart),this.transport.on("ticks",this._boundRestart),this.context=this.transport.context,this._restart()}static getDefaults(){return Object.assign({},Ki.getDefaults(),{duration:1/0,interval:1,once:!1})}invoke(t){this._createEvents(t),super.invoke(t)}_createEvent(){return ma(this._nextTick,this.floatTime+this.duration)?this.transport.scheduleOnce(this.invoke.bind(this),new er(this.context,this._nextTick).toSeconds()):-1}_createEvents(t){ma(this._nextTick+this._interval,this.floatTime+this.duration)&&(this._nextTick+=this._interval,this._currentId=this._nextId,this._nextId=this.transport.scheduleOnce(this.invoke.bind(this),new er(this.context,this._nextTick).toSeconds()))}_restart(t){this.transport.clear(this._currentId),this.transport.clear(this._nextId),this._nextTick=this.floatTime;const e=this.transport.getTicksAtTime(t);mr(e,this.time)&&(this._nextTick=this.floatTime+Math.ceil((e-this.floatTime)/this._interval)*this._interval),this._currentId=this._createEvent(),this._nextTick+=this._interval,this._nextId=this._createEvent()}dispose(){return super.dispose(),this.transport.clear(this._currentId),this.transport.clear(this._nextId),this.transport.off("start",this._boundRestart),this.transport.off("loopStart",this._boundRestart),this.transport.off("ticks",this._boundRestart),this}}class La extends bn{constructor(){const t=$t(La.getDefaults(),arguments);super(t),this.name="Transport",this._loop=new yb(!1),this._loopStart=0,this._loopEnd=0,this._scheduledEvents={},this._timeline=new Hn,this._repeatedEvents=new vb,this._syncedSignals=[],this._swingAmount=0,this._ppq=t.ppq,this._clock=new Da({callback:this._processTick.bind(this),context:this.context,frequency:0,units:"bpm"}),this._bindClockEvents(),this.bpm=this._clock.frequency,this._clock.frequency.multiplier=t.ppq,this.bpm.setValueAtTime(t.bpm,0),Ue(this,"bpm"),this._timeSignature=t.timeSignature,this._swingTicks=t.ppq/2}static getDefaults(){return Object.assign(bn.getDefaults(),{bpm:120,loopEnd:"4m",loopStart:0,ppq:192,swing:0,swingSubdivision:"8n",timeSignature:4})}_processTick(t,e){if(this._loop.get(t)&&e>=this._loopEnd&&(this.emit("loopEnd",t),this._clock.setTicksAtTime(this._loopStart,t),e=this._loopStart,this.emit("loopStart",t,this._clock.getSecondsAtTime(t)),this.emit("loop",t)),this._swingAmount>0&&e%this._ppq!==0&&e%(this._swingTicks*2)!==0){const n=e%(this._swingTicks*2)/(this._swingTicks*2),s=Math.sin(n*Math.PI)*this._swingAmount;t+=new er(this.context,this._swingTicks*2/3).toSeconds()*s}gd(!0),this._timeline.forEachAtTime(e,n=>n.invoke(t)),gd(!1)}schedule(t,e){const n=new Ki(this,{callback:t,time:new Wr(this.context,e).toTicks()});return this._addEvent(n,this._timeline)}scheduleRepeat(t,e,n,s=1/0){const r=new Hl(this,{callback:t,duration:new ti(this.context,s).toTicks(),interval:new ti(this.context,e).toTicks(),time:new Wr(this.context,n).toTicks()});return this._addEvent(r,this._repeatedEvents)}scheduleOnce(t,e){const n=new Ki(this,{callback:t,once:!0,time:new Wr(this.context,e).toTicks()});return this._addEvent(n,this._timeline)}clear(t){if(this._scheduledEvents.hasOwnProperty(t)){const e=this._scheduledEvents[t.toString()];e.timeline.remove(e.event),e.event.dispose(),delete this._scheduledEvents[t.toString()]}return this}_addEvent(t,e){return this._scheduledEvents[t.id.toString()]={event:t,timeline:e},e.add(t),t.id}cancel(t=0){const e=this.toTicks(t);return this._timeline.forEachFrom(e,n=>this.clear(n.id)),this._repeatedEvents.forEachFrom(e,n=>this.clear(n.id)),this}_bindClockEvents(){this._clock.on("start",(t,e)=>{e=new er(this.context,e).toSeconds(),this.emit("start",t,e)}),this._clock.on("stop",t=>{this.emit("stop",t)}),this._clock.on("pause",t=>{this.emit("pause",t)})}get state(){return this._clock.getStateAtTime(this.now())}start(t,e){this.context.resume();let n;return le(e)&&(n=this.toTicks(e)),this._clock.start(t,n),this}stop(t){return this._clock.stop(t),this}pause(t){return this._clock.pause(t),this}toggle(t){return t=this.toSeconds(t),this._clock.getStateAtTime(t)!=="started"?this.start(t):this.stop(t),this}get timeSignature(){return this._timeSignature}set timeSignature(t){ii(t)&&(t=t[0]/t[1]*4),this._timeSignature=t}get loopStart(){return new ti(this.context,this._loopStart,"i").toSeconds()}set loopStart(t){this._loopStart=this.toTicks(t)}get loopEnd(){return new ti(this.context,this._loopEnd,"i").toSeconds()}set loopEnd(t){this._loopEnd=this.toTicks(t)}get loop(){return this._loop.get(this.now())}set loop(t){this._loop.set(t,this.now())}setLoopPoints(t,e){return this.loopStart=t,this.loopEnd=e,this}get swing(){return this._swingAmount}set swing(t){this._swingAmount=t}get swingSubdivision(){return new er(this.context,this._swingTicks).toNotation()}set swingSubdivision(t){this._swingTicks=this.toTicks(t)}get position(){const t=this.now(),e=this._clock.getTicksAtTime(t);return new er(this.context,e).toBarsBeatsSixteenths()}set position(t){const e=this.toTicks(t);this.ticks=e}get seconds(){return this._clock.seconds}set seconds(t){const e=this.now(),n=this._clock.frequency.timeToTicks(t,e);this.ticks=n}get progress(){if(this.loop){const t=this.now();return(this._clock.getTicksAtTime(t)-this._loopStart)/(this._loopEnd-this._loopStart)}else return 0}get ticks(){return this._clock.ticks}set ticks(t){if(this._clock.ticks!==t){const e=this.now();if(this.state==="started"){const n=this._clock.getTicksAtTime(e),s=this._clock.frequency.getDurationOfTicks(Math.ceil(n)-n,e),r=e+s;this.emit("stop",r),this._clock.setTicksAtTime(t,r),this.emit("start",r,this._clock.getSecondsAtTime(r))}else this.emit("ticks",e),this._clock.setTicksAtTime(t,e)}}getTicksAtTime(t){return this._clock.getTicksAtTime(t)}getSecondsAtTime(t){return this._clock.getSecondsAtTime(t)}get PPQ(){return this._clock.frequency.multiplier}set PPQ(t){this._clock.frequency.multiplier=t}nextSubdivision(t){if(t=this.toTicks(t),this.state!=="started")return 0;{const e=this.now(),n=this.getTicksAtTime(e),s=t-n%t;return this._clock.nextTickTime(s,e)}}syncSignal(t,e){const n=this.now();let s=this.bpm,r=1/(60/s.getValueAtTime(n)/this.PPQ),a=[];if(t.units==="time"){const c=.015625/r,l=new Ye(c),h=new Gl(-1),d=new Ye(c);s.chain(l,h,d),s=d,r=1/r,a=[l,h,d]}e||(t.getValueAtTime(n)!==0?e=t.getValueAtTime(n)/r:e=0);const o=new Ye(e);return s.connect(o),o.connect(t._param),a.push(o),this._syncedSignals.push({initial:t.value,nodes:a,signal:t}),t.value=0,this}unsyncSignal(t){for(let e=this._syncedSignals.length-1;e>=0;e--){const n=this._syncedSignals[e];n.signal===t&&(n.nodes.forEach(s=>s.dispose()),n.signal.value=n.initial,this._syncedSignals.splice(e,1))}return this}dispose(){return super.dispose(),this._clock.dispose(),sp(this,"bpm"),this._timeline.dispose(),this._repeatedEvents.dispose(),this}}lo.mixin(La);Ca(i=>{i.transport=new La({context:i})});Ra(i=>{i.transport.dispose()});class Ln extends ae{constructor(t){super(t),this.input=void 0,this._state=new Ol("stopped"),this._synced=!1,this._scheduled=[],this._syncedStart=ye,this._syncedStop=ye,this._state.memory=100,this._state.increasing=!0,this._volume=this.output=new Cr({context:this.context,mute:t.mute,volume:t.volume}),this.volume=this._volume.volume,Ue(this,"volume"),this.onstop=t.onstop}static getDefaults(){return Object.assign(ae.getDefaults(),{mute:!1,onstop:ye,volume:0})}get state(){return this._synced?this.context.transport.state==="started"?this._state.getValueAtTime(this.context.transport.seconds):"stopped":this._state.getValueAtTime(this.now())}get mute(){return this._volume.mute}set mute(t){this._volume.mute=t}_clampToCurrentTime(t){return this._synced?t:Math.max(t,this.context.currentTime)}start(t,e,n){let s=Gn(t)&&this._synced?this.context.transport.seconds:this.toSeconds(t);if(s=this._clampToCurrentTime(s),!this._synced&&this._state.getValueAtTime(s)==="started")se(mr(s,this._state.get(s).time),"Start time must be strictly greater than previous start time"),this._state.cancel(s),this._state.setStateAtTime("started",s),this.log("restart",s),this.restart(s,e,n);else if(this.log("start",s),this._state.setStateAtTime("started",s),this._synced){const r=this._state.get(s);r&&(r.offset=this.toSeconds(or(e,0)),r.duration=n?this.toSeconds(n):void 0);const a=this.context.transport.schedule(o=>{this._start(o,e,n)},s);this._scheduled.push(a),this.context.transport.state==="started"&&this.context.transport.getSecondsAtTime(this.immediate())>s&&this._syncedStart(this.now(),this.context.transport.seconds)}else Jf(this.context),this._start(s,e,n);return this}stop(t){let e=Gn(t)&&this._synced?this.context.transport.seconds:this.toSeconds(t);if(e=this._clampToCurrentTime(e),this._state.getValueAtTime(e)==="started"||le(this._state.getNextState("started",e))){if(this.log("stop",e),!this._synced)this._stop(e);else{const n=this.context.transport.schedule(this._stop.bind(this),e);this._scheduled.push(n)}this._state.cancel(e),this._state.setStateAtTime("stopped",e)}return this}restart(t,e,n){return t=this.toSeconds(t),this._state.getValueAtTime(t)==="started"&&(this._state.cancel(t),this._restart(t,e,n)),this}sync(){return this._synced||(this._synced=!0,this._syncedStart=(t,e)=>{if(mr(e,0)){const n=this._state.get(e);if(n&&n.state==="started"&&n.time!==e){const s=e-this.toSeconds(n.time);let r;n.duration&&(r=this.toSeconds(n.duration)-s),this._start(t,this.toSeconds(n.offset)+s,r)}}},this._syncedStop=t=>{const e=this.context.transport.getSecondsAtTime(Math.max(t-this.sampleTime,0));this._state.getValueAtTime(e)==="started"&&this._stop(t)},this.context.transport.on("start",this._syncedStart),this.context.transport.on("loopStart",this._syncedStart),this.context.transport.on("stop",this._syncedStop),this.context.transport.on("pause",this._syncedStop),this.context.transport.on("loopEnd",this._syncedStop)),this}unsync(){return this._synced&&(this.context.transport.off("stop",this._syncedStop),this.context.transport.off("pause",this._syncedStop),this.context.transport.off("loopEnd",this._syncedStop),this.context.transport.off("start",this._syncedStart),this.context.transport.off("loopStart",this._syncedStart)),this._synced=!1,this._scheduled.forEach(t=>this.context.transport.clear(t)),this._scheduled=[],this._state.cancel(0),this._stop(0),this}dispose(){return super.dispose(),this.onstop=ye,this.unsync(),this._volume.dispose(),this._state.dispose(),this}}class Ia extends gr{constructor(){const t=$t(Ia.getDefaults(),arguments,["url","onload"]);super(t),this.name="ToneBufferSource",this._source=this.context.createBufferSource(),this._internalChannels=[this._source],this._sourceStarted=!1,this._sourceStopped=!1,Ts(this._source,this._gainNode),this._source.onended=()=>this._stopSource(),this.playbackRate=new xe({context:this.context,param:this._source.playbackRate,units:"positive",value:t.playbackRate}),this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this._buffer=new Pe(t.url,t.onload,t.onerror),this._internalChannels.push(this._source)}static getDefaults(){return Object.assign(gr.getDefaults(),{url:new Pe,loop:!1,loopEnd:0,loopStart:0,onload:ye,onerror:ye,playbackRate:1})}get fadeIn(){return this._fadeIn}set fadeIn(t){this._fadeIn=t}get fadeOut(){return this._fadeOut}set fadeOut(t){this._fadeOut=t}get curve(){return this._curve}set curve(t){this._curve=t}start(t,e,n,s=1){se(this.buffer.loaded,"buffer is either not set or not loaded");const r=this.toSeconds(t);this._startGain(r,s),this.loop?e=or(e,this.loopStart):e=or(e,0);let a=Math.max(this.toSeconds(e),0);if(this.loop){const o=this.toSeconds(this.loopEnd)||this.buffer.duration,c=this.toSeconds(this.loopStart),l=o-c;Kc(a,o)&&(a=(a-c)%l+c),$n(a,this.buffer.duration)&&(a=0)}if(this._source.buffer=this.buffer.get(),this._source.loopEnd=this.toSeconds(this.loopEnd)||this.buffer.duration,ma(a,this.buffer.duration)&&(this._sourceStarted=!0,this._source.start(r,a)),le(n)){let o=this.toSeconds(n);o=Math.max(o,0),this.stop(r+o)}return this}_stopSource(t){!this._sourceStopped&&this._sourceStarted&&(this._sourceStopped=!0,this._source.stop(this.toSeconds(t)),this._onended())}get loopStart(){return this._source.loopStart}set loopStart(t){this._source.loopStart=this.toSeconds(t)}get loopEnd(){return this._source.loopEnd}set loopEnd(t){this._source.loopEnd=this.toSeconds(t)}get buffer(){return this._buffer}set buffer(t){this._buffer.set(t)}get loop(){return this._source.loop}set loop(t){this._source.loop=t,this._sourceStarted&&this.cancelStop()}dispose(){return super.dispose(),this._source.onended=null,this._source.disconnect(),this._buffer.dispose(),this.playbackRate.dispose(),this}}function Es(i,t){return Xe(this,void 0,void 0,function*(){const e=t/i.context.sampleRate,n=new Ll(1,e,i.context.sampleRate);return new i.constructor(Object.assign(i.get(),{frequency:2/e,detune:0,context:n})).toDestination().start(0),(yield n.render()).getChannelData(0)})}class Wl extends gr{constructor(){const t=$t(Wl.getDefaults(),arguments,["frequency","type"]);super(t),this.name="ToneOscillatorNode",this._oscillator=this.context.createOscillator(),this._internalChannels=[this._oscillator],Ts(this._oscillator,this._gainNode),this.type=t.type,this.frequency=new xe({context:this.context,param:this._oscillator.frequency,units:"frequency",value:t.frequency}),this.detune=new xe({context:this.context,param:this._oscillator.detune,units:"cents",value:t.detune}),Ue(this,["frequency","detune"])}static getDefaults(){return Object.assign(gr.getDefaults(),{detune:0,frequency:440,type:"sine"})}start(t){const e=this.toSeconds(t);return this.log("start",e),this._startGain(e),this._oscillator.start(e),this}_stopSource(t){this._oscillator.stop(t)}setPeriodicWave(t){return this._oscillator.setPeriodicWave(t),this}get type(){return this._oscillator.type}set type(t){this._oscillator.type=t}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._oscillator.disconnect(),this.frequency.dispose(),this.detune.dispose(),this}}class Oe extends Ln{constructor(){const t=$t(Oe.getDefaults(),arguments,["frequency","type"]);super(t),this.name="Oscillator",this._oscillator=null,this.frequency=new Be({context:this.context,units:"frequency",value:t.frequency}),Ue(this,"frequency"),this.detune=new Be({context:this.context,units:"cents",value:t.detune}),Ue(this,"detune"),this._partials=t.partials,this._partialCount=t.partialCount,this._type=t.type,t.partialCount&&t.type!=="custom"&&(this._type=this.baseType+t.partialCount.toString()),this.phase=t.phase}static getDefaults(){return Object.assign(Ln.getDefaults(),{detune:0,frequency:440,partialCount:0,partials:[],phase:0,type:"sine"})}_start(t){const e=this.toSeconds(t),n=new Wl({context:this.context,onended:()=>this.onstop(this)});this._oscillator=n,this._wave?this._oscillator.setPeriodicWave(this._wave):this._oscillator.type=this._type,this._oscillator.connect(this.output),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.start(e)}_stop(t){const e=this.toSeconds(t);this._oscillator&&this._oscillator.stop(e)}_restart(t){const e=this.toSeconds(t);return this.log("restart",e),this._oscillator&&this._oscillator.cancelStop(),this._state.cancel(e),this}syncFrequency(){return this.context.transport.syncSignal(this.frequency),this}unsyncFrequency(){return this.context.transport.unsyncSignal(this.frequency),this}_getCachedPeriodicWave(){if(this._type==="custom")return Oe._periodicWaveCache.find(e=>e.phase===this._phase&&eb(e.partials,this._partials));{const t=Oe._periodicWaveCache.find(e=>e.type===this._type&&e.phase===this._phase);return this._partialCount=t?t.partialCount:this._partialCount,t}}get type(){return this._type}set type(t){this._type=t;const e=["sine","square","sawtooth","triangle"].indexOf(t)!==-1;if(this._phase===0&&e)this._wave=void 0,this._partialCount=0,this._oscillator!==null&&(this._oscillator.type=t);else{const n=this._getCachedPeriodicWave();if(le(n)){const{partials:s,wave:r}=n;this._wave=r,this._partials=s,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave)}else{const[s,r]=this._getRealImaginary(t,this._phase),a=this.context.createPeriodicWave(s,r);this._wave=a,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave),Oe._periodicWaveCache.push({imag:r,partialCount:this._partialCount,partials:this._partials,phase:this._phase,real:s,type:this._type,wave:this._wave}),Oe._periodicWaveCache.length>100&&Oe._periodicWaveCache.shift()}}}get baseType(){return this._type.replace(this.partialCount.toString(),"")}set baseType(t){this.partialCount&&this._type!=="custom"&&t!=="custom"?this.type=t+this.partialCount:this.type=t}get partialCount(){return this._partialCount}set partialCount(t){$i(t,0);let e=this._type;const n=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);if(n&&(e=n[1]),this._type!=="custom")t===0?this.type=e:this.type=e+t.toString();else{const s=new Float32Array(t);this._partials.forEach((r,a)=>s[a]=r),this._partials=Array.from(s),this.type=this._type}}_getRealImaginary(t,e){let s=2048;const r=new Float32Array(s),a=new Float32Array(s);let o=1;if(t==="custom"){if(o=this._partials.length+1,this._partialCount=this._partials.length,s=o,this._partials.length===0)return[r,a]}else{const c=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(t);c?(o=parseInt(c[2],10)+1,this._partialCount=parseInt(c[2],10),t=c[1],o=Math.max(o,2),s=o):this._partialCount=0,this._partials=[]}for(let c=1;c<s;++c){const l=2/(c*Math.PI);let h;switch(t){case"sine":h=c<=o?1:0,this._partials[c-1]=h;break;case"square":h=c&1?2*l:0,this._partials[c-1]=h;break;case"sawtooth":h=l*(c&1?1:-1),this._partials[c-1]=h;break;case"triangle":c&1?h=2*(l*l)*(c-1>>1&1?-1:1):h=0,this._partials[c-1]=h;break;case"custom":h=this._partials[c-1];break;default:throw new TypeError("Oscillator: invalid type: "+t)}h!==0?(r[c]=-h*Math.sin(e*c),a[c]=h*Math.cos(e*c)):(r[c]=0,a[c]=0)}return[r,a]}_inverseFFT(t,e,n){let s=0;const r=t.length;for(let a=0;a<r;a++)s+=t[a]*Math.cos(a*n)+e[a]*Math.sin(a*n);return s}getInitialValue(){const[t,e]=this._getRealImaginary(this._type,0);let n=0;const s=Math.PI*2,r=32;for(let a=0;a<r;a++)n=Math.max(this._inverseFFT(t,e,a/r*s),n);return ib(-this._inverseFFT(t,e,this._phase)/n,-1,1)}get partials(){return this._partials.slice(0,this.partialCount)}set partials(t){this._partials=t,this._partialCount=this._partials.length,t.length&&(this.type="custom")}get phase(){return this._phase*(180/Math.PI)}set phase(t){this._phase=t*Math.PI/180,this.type=this._type}asArray(){return Xe(this,arguments,void 0,function*(t=1024){return Es(this,t)})}dispose(){return super.dispose(),this._oscillator!==null&&this._oscillator.dispose(),this._wave=void 0,this.frequency.dispose(),this.detune.dispose(),this}}Oe._periodicWaveCache=[];class lp extends Pi{constructor(){super(...arguments),this.name="AudioToGain",this._norm=new ho({context:this.context,mapping:t=>(t+1)/2}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}}class xs extends Be{constructor(){const t=$t(xs.getDefaults(),arguments,["value"]);super(t),this.name="Multiply",this.override=!1,this._mult=this.input=this.output=new Ye({context:this.context,minValue:t.minValue,maxValue:t.maxValue}),this.factor=this._param=this._mult.gain,this.factor.setValueAtTime(t.value,0)}static getDefaults(){return Object.assign(Be.getDefaults(),{value:0})}dispose(){return super.dispose(),this._mult.dispose(),this}}class Oa extends Ln{constructor(){const t=$t(Oa.getDefaults(),arguments,["frequency","type","modulationType"]);super(t),this.name="AMOscillator",this._modulationScale=new lp({context:this.context}),this._modulationNode=new Ye({context:this.context}),this._carrier=new Oe({context:this.context,detune:t.detune,frequency:t.frequency,onstop:()=>this.onstop(this),phase:t.phase,type:t.type}),this.frequency=this._carrier.frequency,this.detune=this._carrier.detune,this._modulator=new Oe({context:this.context,phase:t.phase,type:t.modulationType}),this.harmonicity=new xs({context:this.context,units:"positive",value:t.harmonicity}),this.frequency.chain(this.harmonicity,this._modulator.frequency),this._modulator.chain(this._modulationScale,this._modulationNode.gain),this._carrier.chain(this._modulationNode,this.output),Ue(this,["frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(Oe.getDefaults(),{harmonicity:1,modulationType:"square"})}_start(t){this._modulator.start(t),this._carrier.start(t)}_stop(t){this._modulator.stop(t),this._carrier.stop(t)}_restart(t){this._modulator.restart(t),this._carrier.restart(t)}get type(){return this._carrier.type}set type(t){this._carrier.type=t}get baseType(){return this._carrier.baseType}set baseType(t){this._carrier.baseType=t}get partialCount(){return this._carrier.partialCount}set partialCount(t){this._carrier.partialCount=t}get modulationType(){return this._modulator.type}set modulationType(t){this._modulator.type=t}get phase(){return this._carrier.phase}set phase(t){this._carrier.phase=t,this._modulator.phase=t}get partials(){return this._carrier.partials}set partials(t){this._carrier.partials=t}asArray(){return Xe(this,arguments,void 0,function*(t=1024){return Es(this,t)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this._modulationScale.dispose(),this}}class Ua extends Ln{constructor(){const t=$t(Ua.getDefaults(),arguments,["frequency","type","modulationType"]);super(t),this.name="FMOscillator",this._modulationNode=new Ye({context:this.context,gain:0}),this._carrier=new Oe({context:this.context,detune:t.detune,frequency:0,onstop:()=>this.onstop(this),phase:t.phase,type:t.type}),this.detune=this._carrier.detune,this.frequency=new Be({context:this.context,units:"frequency",value:t.frequency}),this._modulator=new Oe({context:this.context,phase:t.phase,type:t.modulationType}),this.harmonicity=new xs({context:this.context,units:"positive",value:t.harmonicity}),this.modulationIndex=new xs({context:this.context,units:"positive",value:t.modulationIndex}),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output),this.detune.connect(this._modulator.detune),Ue(this,["modulationIndex","frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(Oe.getDefaults(),{harmonicity:1,modulationIndex:2,modulationType:"square"})}_start(t){this._modulator.start(t),this._carrier.start(t)}_stop(t){this._modulator.stop(t),this._carrier.stop(t)}_restart(t){return this._modulator.restart(t),this._carrier.restart(t),this}get type(){return this._carrier.type}set type(t){this._carrier.type=t}get baseType(){return this._carrier.baseType}set baseType(t){this._carrier.baseType=t}get partialCount(){return this._carrier.partialCount}set partialCount(t){this._carrier.partialCount=t}get modulationType(){return this._modulator.type}set modulationType(t){this._modulator.type=t}get phase(){return this._carrier.phase}set phase(t){this._carrier.phase=t,this._modulator.phase=t}get partials(){return this._carrier.partials}set partials(t){this._carrier.partials=t}asArray(){return Xe(this,arguments,void 0,function*(t=1024){return Es(this,t)})}dispose(){return super.dispose(),this.frequency.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this.modulationIndex.dispose(),this}}class fo extends Ln{constructor(){const t=$t(fo.getDefaults(),arguments,["frequency","width"]);super(t),this.name="PulseOscillator",this._widthGate=new Ye({context:this.context,gain:0}),this._thresh=new ho({context:this.context,mapping:e=>e<=0?-1:1}),this.width=new Be({context:this.context,units:"audioRange",value:t.width}),this._triangle=new Oe({context:this.context,detune:t.detune,frequency:t.frequency,onstop:()=>this.onstop(this),phase:t.phase,type:"triangle"}),this.frequency=this._triangle.frequency,this.detune=this._triangle.detune,this._triangle.chain(this._thresh,this.output),this.width.chain(this._widthGate,this._thresh),Ue(this,["width","frequency","detune"])}static getDefaults(){return Object.assign(Ln.getDefaults(),{detune:0,frequency:440,phase:0,type:"pulse",width:.2})}_start(t){t=this.toSeconds(t),this._triangle.start(t),this._widthGate.gain.setValueAtTime(1,t)}_stop(t){t=this.toSeconds(t),this._triangle.stop(t),this._widthGate.gain.cancelScheduledValues(t),this._widthGate.gain.setValueAtTime(0,t)}_restart(t){this._triangle.restart(t),this._widthGate.gain.cancelScheduledValues(t),this._widthGate.gain.setValueAtTime(1,t)}get phase(){return this._triangle.phase}set phase(t){this._triangle.phase=t}get type(){return"pulse"}get baseType(){return"pulse"}get partials(){return[]}get partialCount(){return 0}set carrierType(t){this._triangle.type=t}asArray(){return Xe(this,arguments,void 0,function*(t=1024){return Es(this,t)})}dispose(){return super.dispose(),this._triangle.dispose(),this.width.dispose(),this._widthGate.dispose(),this._thresh.dispose(),this}}class Fa extends Ln{constructor(){const t=$t(Fa.getDefaults(),arguments,["frequency","type","spread"]);super(t),this.name="FatOscillator",this._oscillators=[],this.frequency=new Be({context:this.context,units:"frequency",value:t.frequency}),this.detune=new Be({context:this.context,units:"cents",value:t.detune}),this._spread=t.spread,this._type=t.type,this._phase=t.phase,this._partials=t.partials,this._partialCount=t.partialCount,this.count=t.count,Ue(this,["frequency","detune"])}static getDefaults(){return Object.assign(Oe.getDefaults(),{count:3,spread:20,type:"sawtooth"})}_start(t){t=this.toSeconds(t),this._forEach(e=>e.start(t))}_stop(t){t=this.toSeconds(t),this._forEach(e=>e.stop(t))}_restart(t){this._forEach(e=>e.restart(t))}_forEach(t){for(let e=0;e<this._oscillators.length;e++)t(this._oscillators[e],e)}get type(){return this._type}set type(t){this._type=t,this._forEach(e=>e.type=t)}get spread(){return this._spread}set spread(t){if(this._spread=t,this._oscillators.length>1){const e=-t/2,n=t/(this._oscillators.length-1);this._forEach((s,r)=>s.detune.value=e+n*r)}}get count(){return this._oscillators.length}set count(t){if($i(t,1),this._oscillators.length!==t){this._forEach(e=>e.dispose()),this._oscillators=[];for(let e=0;e<t;e++){const n=new Oe({context:this.context,volume:-6-t*1.1,type:this._type,phase:this._phase+e/t*360,partialCount:this._partialCount,onstop:e===0?()=>this.onstop(this):ye});this.type==="custom"&&(n.partials=this._partials),this.frequency.connect(n.frequency),this.detune.connect(n.detune),n.detune.overridden=!1,n.connect(this.output),this._oscillators[e]=n}this.spread=this._spread,this.state==="started"&&this._forEach(e=>e.start())}}get phase(){return this._phase}set phase(t){this._phase=t,this._forEach((e,n)=>e.phase=this._phase+n/this.count*360)}get baseType(){return this._oscillators[0].baseType}set baseType(t){this._forEach(e=>e.baseType=t),this._type=this._oscillators[0].type}get partials(){return this._oscillators[0].partials}set partials(t){this._partials=t,this._partialCount=this._partials.length,t.length&&(this._type="custom",this._forEach(e=>e.partials=t))}get partialCount(){return this._oscillators[0].partialCount}set partialCount(t){this._partialCount=t,this._forEach(e=>e.partialCount=t),this._type=this._oscillators[0].type}asArray(){return Xe(this,arguments,void 0,function*(t=1024){return Es(this,t)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this._forEach(t=>t.dispose()),this}}class ka extends Ln{constructor(){const t=$t(ka.getDefaults(),arguments,["frequency","modulationFrequency"]);super(t),this.name="PWMOscillator",this.sourceType="pwm",this._scale=new xs({context:this.context,value:2}),this._pulse=new fo({context:this.context,frequency:t.modulationFrequency}),this._pulse.carrierType="sine",this.modulationFrequency=this._pulse.frequency,this._modulator=new Oe({context:this.context,detune:t.detune,frequency:t.frequency,onstop:()=>this.onstop(this),phase:t.phase}),this.frequency=this._modulator.frequency,this.detune=this._modulator.detune,this._modulator.chain(this._scale,this._pulse.width),this._pulse.connect(this.output),Ue(this,["modulationFrequency","frequency","detune"])}static getDefaults(){return Object.assign(Ln.getDefaults(),{detune:0,frequency:440,modulationFrequency:.4,phase:0,type:"pwm"})}_start(t){t=this.toSeconds(t),this._modulator.start(t),this._pulse.start(t)}_stop(t){t=this.toSeconds(t),this._modulator.stop(t),this._pulse.stop(t)}_restart(t){this._modulator.restart(t),this._pulse.restart(t)}get type(){return"pwm"}get baseType(){return"pwm"}get partials(){return[]}get partialCount(){return 0}get phase(){return this._modulator.phase}set phase(t){this._modulator.phase=t}asArray(){return Xe(this,arguments,void 0,function*(t=1024){return Es(this,t)})}dispose(){return super.dispose(),this._pulse.dispose(),this._scale.dispose(),this._modulator.dispose(),this}}const vd={am:Oa,fat:Fa,fm:Ua,oscillator:Oe,pulse:fo,pwm:ka};class _a extends Ln{constructor(){const t=$t(_a.getDefaults(),arguments,["frequency","type"]);super(t),this.name="OmniOscillator",this.frequency=new Be({context:this.context,units:"frequency",value:t.frequency}),this.detune=new Be({context:this.context,units:"cents",value:t.detune}),Ue(this,["frequency","detune"]),this.set(t)}static getDefaults(){return Object.assign(Oe.getDefaults(),Ua.getDefaults(),Oa.getDefaults(),Fa.getDefaults(),fo.getDefaults(),ka.getDefaults())}_start(t){this._oscillator.start(t)}_stop(t){this._oscillator.stop(t)}_restart(t){return this._oscillator.restart(t),this}get type(){let t="";return["am","fm","fat"].some(e=>this._sourceType===e)&&(t=this._sourceType),t+this._oscillator.type}set type(t){t.substr(0,2)==="fm"?(this._createNewOscillator("fm"),this._oscillator=this._oscillator,this._oscillator.type=t.substr(2)):t.substr(0,2)==="am"?(this._createNewOscillator("am"),this._oscillator=this._oscillator,this._oscillator.type=t.substr(2)):t.substr(0,3)==="fat"?(this._createNewOscillator("fat"),this._oscillator=this._oscillator,this._oscillator.type=t.substr(3)):t==="pwm"?(this._createNewOscillator("pwm"),this._oscillator=this._oscillator):t==="pulse"?this._createNewOscillator("pulse"):(this._createNewOscillator("oscillator"),this._oscillator=this._oscillator,this._oscillator.type=t)}get partials(){return this._oscillator.partials}set partials(t){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partials=t)}get partialCount(){return this._oscillator.partialCount}set partialCount(t){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partialCount=t)}set(t){return Reflect.has(t,"type")&&t.type&&(this.type=t.type),super.set(t),this}_createNewOscillator(t){if(t!==this._sourceType){this._sourceType=t;const e=vd[t],n=this.now();if(this._oscillator){const s=this._oscillator;s.stop(n),this.context.setTimeout(()=>s.dispose(),this.blockTime)}this._oscillator=new e({context:this.context}),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.connect(this.output),this._oscillator.onstop=()=>this.onstop(this),this.state==="started"&&this._oscillator.start(n)}}get phase(){return this._oscillator.phase}set phase(t){this._oscillator.phase=t}get sourceType(){return this._sourceType}set sourceType(t){let e="sine";this._oscillator.type!=="pwm"&&this._oscillator.type!=="pulse"&&(e=this._oscillator.type),t==="fm"?this.type="fm"+e:t==="am"?this.type="am"+e:t==="fat"?this.type="fat"+e:t==="oscillator"?this.type=e:t==="pulse"?this.type="pulse":t==="pwm"&&(this.type="pwm")}_getOscType(t,e){return t instanceof vd[e]}get baseType(){return this._oscillator.baseType}set baseType(t){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&t!=="pulse"&&t!=="pwm"&&(this._oscillator.baseType=t)}get width(){if(this._getOscType(this._oscillator,"pulse"))return this._oscillator.width}get count(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.count}set count(t){this._getOscType(this._oscillator,"fat")&&_s(t)&&(this._oscillator.count=t)}get spread(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.spread}set spread(t){this._getOscType(this._oscillator,"fat")&&_s(t)&&(this._oscillator.spread=t)}get modulationType(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.modulationType}set modulationType(t){(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))&&Ri(t)&&(this._oscillator.modulationType=t)}get modulationIndex(){if(this._getOscType(this._oscillator,"fm"))return this._oscillator.modulationIndex}get harmonicity(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.harmonicity}get modulationFrequency(){if(this._getOscType(this._oscillator,"pwm"))return this._oscillator.modulationFrequency}asArray(){return Xe(this,arguments,void 0,function*(t=1024){return Es(this,t)})}dispose(){return super.dispose(),this.detune.dispose(),this.frequency.dispose(),this._oscillator.dispose(),this}}class Xl extends Be{constructor(){super($t(Xl.getDefaults(),arguments,["value"])),this.override=!1,this.name="Add",this._sum=new Ye({context:this.context}),this.input=this._sum,this.output=this._sum,this.addend=this._param,ga(this._constantSource,this._sum)}static getDefaults(){return Object.assign(Be.getDefaults(),{value:0})}dispose(){return super.dispose(),this._sum.dispose(),this}}class ql extends Pi{constructor(){const t=$t(ql.getDefaults(),arguments,["min","max"]);super(t),this.name="Scale",this._mult=this.input=new xs({context:this.context,value:t.max-t.min}),this._add=this.output=new Xl({context:this.context,value:t.min}),this._min=t.min,this._max=t.max,this.input.connect(this.output)}static getDefaults(){return Object.assign(Pi.getDefaults(),{max:1,min:0})}get min(){return this._min}set min(t){this._min=t,this._setRange()}get max(){return this._max}set max(t){this._max=t,this._setRange()}_setRange(){this._add.value=this._min,this._mult.value=this._max-this._min}dispose(){return super.dispose(),this._add.dispose(),this._mult.dispose(),this}}class jl extends Pi{constructor(){super($t(jl.getDefaults(),arguments)),this.name="Zero",this._gain=new Ye({context:this.context}),this.output=this._gain,this.input=void 0,Ts(this.context.getConstant(0),this._gain)}dispose(){return super.dispose(),cp(this.context.getConstant(0),this._gain),this}}class Yl extends ae{constructor(){const t=$t(Yl.getDefaults(),arguments,["frequency","min","max"]);super(t),this.name="LFO",this._stoppedValue=0,this._units="number",this.convert=!0,this._fromType=xe.prototype._fromType,this._toType=xe.prototype._toType,this._is=xe.prototype._is,this._clampValue=xe.prototype._clampValue,this._oscillator=new Oe(t),this.frequency=this._oscillator.frequency,this._amplitudeGain=new Ye({context:this.context,gain:t.amplitude,units:"normalRange"}),this.amplitude=this._amplitudeGain.gain,this._stoppedSignal=new Be({context:this.context,units:"audioRange",value:0}),this._zeros=new jl({context:this.context}),this._a2g=new lp({context:this.context}),this._scaler=this.output=new ql({context:this.context,max:t.max,min:t.min}),this.units=t.units,this.min=t.min,this.max=t.max,this._oscillator.chain(this._amplitudeGain,this._a2g,this._scaler),this._zeros.connect(this._a2g),this._stoppedSignal.connect(this._a2g),Ue(this,["amplitude","frequency"]),this.phase=t.phase}static getDefaults(){return Object.assign(Oe.getDefaults(),{amplitude:1,frequency:"4n",max:1,min:0,type:"sine",units:"number"})}start(t){return t=this.toSeconds(t),this._stoppedSignal.setValueAtTime(0,t),this._oscillator.start(t),this}stop(t){return t=this.toSeconds(t),this._stoppedSignal.setValueAtTime(this._stoppedValue,t),this._oscillator.stop(t),this}sync(){return this._oscillator.sync(),this._oscillator.syncFrequency(),this}unsync(){return this._oscillator.unsync(),this._oscillator.unsyncFrequency(),this}_setStoppedValue(){this._stoppedValue=this._oscillator.getInitialValue(),this._stoppedSignal.value=this._stoppedValue}get min(){return this._toType(this._scaler.min)}set min(t){t=this._fromType(t),this._scaler.min=t}get max(){return this._toType(this._scaler.max)}set max(t){t=this._fromType(t),this._scaler.max=t}get type(){return this._oscillator.type}set type(t){this._oscillator.type=t,this._setStoppedValue()}get partials(){return this._oscillator.partials}set partials(t){this._oscillator.partials=t,this._setStoppedValue()}get phase(){return this._oscillator.phase}set phase(t){this._oscillator.phase=t,this._setStoppedValue()}get units(){return this._units}set units(t){const e=this.min,n=this.max;this._units=t,this.min=e,this.max=n}get state(){return this._oscillator.state}connect(t,e,n){return(t instanceof xe||t instanceof Be)&&(this.convert=t.convert,this.units=t.units),Na(this,t,e,n),this}dispose(){return super.dispose(),this._oscillator.dispose(),this._stoppedSignal.dispose(),this._zeros.dispose(),this._scaler.dispose(),this._a2g.dispose(),this._amplitudeGain.dispose(),this.amplitude.dispose(),this}}function up(i,t=1/0){const e=new WeakMap;return function(n,s){Reflect.defineProperty(n,s,{configurable:!0,enumerable:!0,get:function(){return e.get(this)},set:function(r){$i(r,i,t),e.set(this,r)}})}}function Ii(i,t=1/0){const e=new WeakMap;return function(n,s){Reflect.defineProperty(n,s,{configurable:!0,enumerable:!0,get:function(){return e.get(this)},set:function(r){$i(this.toSeconds(r),i,t),e.set(this,r)}})}}class Ba extends Ln{constructor(){const t=$t(Ba.getDefaults(),arguments,["url","onload"]);super(t),this.name="Player",this._activeSources=new Set,this._buffer=new Pe({onload:this._onload.bind(this,t.onload),onerror:t.onerror,reverse:t.reverse,url:t.url}),this.autostart=t.autostart,this._loop=t.loop,this._loopStart=t.loopStart,this._loopEnd=t.loopEnd,this._playbackRate=t.playbackRate,this.fadeIn=t.fadeIn,this.fadeOut=t.fadeOut}static getDefaults(){return Object.assign(Ln.getDefaults(),{autostart:!1,fadeIn:0,fadeOut:0,loop:!1,loopEnd:0,loopStart:0,onload:ye,onerror:ye,playbackRate:1,reverse:!1})}load(t){return Xe(this,void 0,void 0,function*(){return yield this._buffer.load(t),this._onload(),this})}_onload(t=ye){t(),this.autostart&&this.start()}_onSourceEnd(t){this.onstop(this),this._activeSources.delete(t),this._activeSources.size===0&&!this._synced&&this._state.getValueAtTime(this.now())==="started"&&(this._state.cancel(this.now()),this._state.setStateAtTime("stopped",this.now()))}start(t,e,n){return super.start(t,e,n),this}_start(t,e,n){this._loop?e=or(e,this._loopStart):e=or(e,0);const s=this.toSeconds(e),r=n;n=or(n,Math.max(this._buffer.duration-s,0));let a=this.toSeconds(n);a=a/this._playbackRate,t=this.toSeconds(t);const o=new Ia({url:this._buffer,context:this.context,fadeIn:this.fadeIn,fadeOut:this.fadeOut,loop:this._loop,loopEnd:this._loopEnd,loopStart:this._loopStart,onended:this._onSourceEnd.bind(this),playbackRate:this._playbackRate}).connect(this.output);!this._loop&&!this._synced&&(this._state.cancel(t+a),this._state.setStateAtTime("stopped",t+a,{implicitEnd:!0})),this._activeSources.add(o),this._loop&&Gn(r)?o.start(t,s):o.start(t,s,a-this.toSeconds(this.fadeOut))}_stop(t){const e=this.toSeconds(t);this._activeSources.forEach(n=>n.stop(e))}restart(t,e,n){return super.restart(t,e,n),this}_restart(t,e,n){var s;(s=[...this._activeSources].pop())===null||s===void 0||s.stop(t),this._start(t,e,n)}seek(t,e){const n=this.toSeconds(e);if(this._state.getValueAtTime(n)==="started"){const s=this.toSeconds(t);this._stop(n),this._start(n,s)}return this}setLoopPoints(t,e){return this.loopStart=t,this.loopEnd=e,this}get loopStart(){return this._loopStart}set loopStart(t){this._loopStart=t,this.buffer.loaded&&$i(this.toSeconds(t),0,this.buffer.duration),this._activeSources.forEach(e=>{e.loopStart=t})}get loopEnd(){return this._loopEnd}set loopEnd(t){this._loopEnd=t,this.buffer.loaded&&$i(this.toSeconds(t),0,this.buffer.duration),this._activeSources.forEach(e=>{e.loopEnd=t})}get buffer(){return this._buffer}set buffer(t){this._buffer.set(t)}get loop(){return this._loop}set loop(t){if(this._loop!==t&&(this._loop=t,this._activeSources.forEach(e=>{e.loop=t}),t)){const e=this._state.getNextState("stopped",this.now());e&&this._state.cancel(e.time)}}get playbackRate(){return this._playbackRate}set playbackRate(t){this._playbackRate=t;const e=this.now(),n=this._state.getNextState("stopped",e);n&&n.implicitEnd&&(this._state.cancel(n.time),this._activeSources.forEach(s=>s.cancelStop())),this._activeSources.forEach(s=>{s.playbackRate.setValueAtTime(t,e)})}get reverse(){return this._buffer.reverse}set reverse(t){this._buffer.reverse=t}get loaded(){return this._buffer.loaded}dispose(){return super.dispose(),this._activeSources.forEach(t=>t.dispose()),this._activeSources.clear(),this._buffer.dispose(),this}}ai([Ii(0)],Ba.prototype,"fadeIn",void 0);ai([Ii(0)],Ba.prototype,"fadeOut",void 0);class ts extends ae{constructor(){const t=$t(ts.getDefaults(),arguments,["attack","decay","sustain","release"]);super(t),this.name="Envelope",this._sig=new Be({context:this.context,value:0}),this.output=this._sig,this.input=void 0,this.attack=t.attack,this.decay=t.decay,this.sustain=t.sustain,this.release=t.release,this.attackCurve=t.attackCurve,this.releaseCurve=t.releaseCurve,this.decayCurve=t.decayCurve}static getDefaults(){return Object.assign(ae.getDefaults(),{attack:.01,attackCurve:"linear",decay:.1,decayCurve:"exponential",release:1,releaseCurve:"exponential",sustain:.5})}get value(){return this.getValueAtTime(this.now())}_getCurve(t,e){if(Ri(t))return t;{let n;for(n in Zo)if(Zo[n][e]===t)return n;return t}}_setCurve(t,e,n){if(Ri(n)&&Reflect.has(Zo,n)){const s=Zo[n];ms(s)?t!=="_decayCurve"&&(this[t]=s[e]):this[t]=s}else if(ii(n)&&t!=="_decayCurve")this[t]=n;else throw new Error("Envelope: invalid curve: "+n)}get attackCurve(){return this._getCurve(this._attackCurve,"In")}set attackCurve(t){this._setCurve("_attackCurve","In",t)}get releaseCurve(){return this._getCurve(this._releaseCurve,"Out")}set releaseCurve(t){this._setCurve("_releaseCurve","Out",t)}get decayCurve(){return this._getCurve(this._decayCurve,"Out")}set decayCurve(t){this._setCurve("_decayCurve","Out",t)}triggerAttack(t,e=1){this.log("triggerAttack",t,e),t=this.toSeconds(t);let s=this.toSeconds(this.attack);const r=this.toSeconds(this.decay),a=this.getValueAtTime(t);if(a>0){const o=1/s;s=(1-a)/o}if(s<this.sampleTime)this._sig.cancelScheduledValues(t),this._sig.setValueAtTime(e,t);else if(this._attackCurve==="linear")this._sig.linearRampTo(e,s,t);else if(this._attackCurve==="exponential")this._sig.targetRampTo(e,s,t);else{this._sig.cancelAndHoldAtTime(t);let o=this._attackCurve;for(let c=1;c<o.length;c++)if(o[c-1]<=a&&a<=o[c]){o=this._attackCurve.slice(c),o[0]=a;break}this._sig.setValueCurveAtTime(o,t,s,e)}if(r&&this.sustain<1){const o=e*this.sustain,c=t+s;this.log("decay",c),this._decayCurve==="linear"?this._sig.linearRampToValueAtTime(o,r+c):this._sig.exponentialApproachValueAtTime(o,c,r)}return this}triggerRelease(t){this.log("triggerRelease",t),t=this.toSeconds(t);const e=this.getValueAtTime(t);if(e>0){const n=this.toSeconds(this.release);n<this.sampleTime?this._sig.setValueAtTime(0,t):this._releaseCurve==="linear"?this._sig.linearRampTo(0,n,t):this._releaseCurve==="exponential"?this._sig.targetRampTo(0,n,t):(se(ii(this._releaseCurve),"releaseCurve must be either 'linear', 'exponential' or an array"),this._sig.cancelAndHoldAtTime(t),this._sig.setValueCurveAtTime(this._releaseCurve,t,n,e))}return this}getValueAtTime(t){return this._sig.getValueAtTime(t)}triggerAttackRelease(t,e,n=1){return e=this.toSeconds(e),this.triggerAttack(e,n),this.triggerRelease(e+this.toSeconds(t)),this}cancel(t){return this._sig.cancelScheduledValues(this.toSeconds(t)),this}connect(t,e=0,n=0){return Na(this,t,e,n),this}asArray(){return Xe(this,arguments,void 0,function*(t=1024){const e=t/this.context.sampleRate,n=new Ll(1,e,this.context.sampleRate),s=this.toSeconds(this.attack)+this.toSeconds(this.decay),r=s+this.toSeconds(this.release),a=r*.1,o=r+a,c=new this.constructor(Object.assign(this.get(),{attack:e*this.toSeconds(this.attack)/o,decay:e*this.toSeconds(this.decay)/o,release:e*this.toSeconds(this.release)/o,context:n}));return c._sig.toDestination(),c.triggerAttackRelease(e*(s+a)/o,0),(yield n.render()).getChannelData(0)})}dispose(){return super.dispose(),this._sig.dispose(),this}}ai([Ii(0)],ts.prototype,"attack",void 0);ai([Ii(0)],ts.prototype,"decay",void 0);ai([up(0,1)],ts.prototype,"sustain",void 0);ai([Ii(0)],ts.prototype,"release",void 0);const Zo=(()=>{let t,e;const n=[];for(t=0;t<128;t++)n[t]=Math.sin(t/127*(Math.PI/2));const s=[],r=6.4;for(t=0;t<127;t++){e=t/127;const f=Math.sin(e*(Math.PI*2)*r-Math.PI/2)+1;s[t]=f/10+e*.83}s[127]=1;const a=[],o=5;for(t=0;t<128;t++)a[t]=Math.ceil(t/127*o)/o;const c=[];for(t=0;t<128;t++)e=t/127,c[t]=.5*(1-Math.cos(Math.PI*e));const l=[];for(t=0;t<128;t++){e=t/127;const f=Math.pow(e,3)*4+.2,m=Math.cos(f*Math.PI*2*e);l[t]=Math.abs(m*(1-e))}function h(f){const m=new Array(f.length);for(let v=0;v<f.length;v++)m[v]=1-f[v];return m}function d(f){return f.slice(0).reverse()}return{bounce:{In:h(l),Out:l},cosine:{In:n,Out:d(n)},exponential:"exponential",linear:"linear",ripple:{In:s,Out:h(s)},sine:{In:c,Out:h(c)},step:{In:a,Out:h(a)}}})();class _r extends ae{constructor(){const t=$t(_r.getDefaults(),arguments);super(t),this._scheduledEvents=[],this._synced=!1,this._original_triggerAttack=this.triggerAttack,this._original_triggerRelease=this.triggerRelease,this._syncedRelease=e=>this._original_triggerRelease(e),this._volume=this.output=new Cr({context:this.context,volume:t.volume}),this.volume=this._volume.volume,Ue(this,"volume")}static getDefaults(){return Object.assign(ae.getDefaults(),{volume:0})}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",0),this.context.transport.on("stop",this._syncedRelease),this.context.transport.on("pause",this._syncedRelease),this.context.transport.on("loopEnd",this._syncedRelease)),this}_syncState(){let t=!1;return this._synced||(this._synced=!0,t=!0),t}_syncMethod(t,e){const n=this["_original_"+t]=this[t];this[t]=(...s)=>{const r=s[e],a=this.context.transport.schedule(o=>{s[e]=o,n.apply(this,s)},r);this._scheduledEvents.push(a)}}unsync(){return this._scheduledEvents.forEach(t=>this.context.transport.clear(t)),this._scheduledEvents=[],this._synced&&(this._synced=!1,this.triggerAttack=this._original_triggerAttack,this.triggerRelease=this._original_triggerRelease,this.context.transport.off("stop",this._syncedRelease),this.context.transport.off("pause",this._syncedRelease),this.context.transport.off("loopEnd",this._syncedRelease)),this}triggerAttackRelease(t,e,n,s){const r=this.toSeconds(n),a=this.toSeconds(e);return this.triggerAttack(t,r,s),this.triggerRelease(r+a),this}dispose(){return super.dispose(),this._volume.dispose(),this.unsync(),this._scheduledEvents=[],this}}class vr extends _r{constructor(){const t=$t(vr.getDefaults(),arguments);super(t),this.portamento=t.portamento,this.onsilence=t.onsilence}static getDefaults(){return Object.assign(_r.getDefaults(),{detune:0,onsilence:ye,portamento:0})}triggerAttack(t,e,n=1){this.log("triggerAttack",t,e,n);const s=this.toSeconds(e);return this._triggerEnvelopeAttack(s,n),this.setNote(t,s),this}triggerRelease(t){this.log("triggerRelease",t);const e=this.toSeconds(t);return this._triggerEnvelopeRelease(e),this}setNote(t,e){const n=this.toSeconds(e),s=t instanceof zn?t.toFrequency():t;if(this.portamento>0&&this.getLevelAtTime(n)>.05){const r=this.toSeconds(this.portamento);this.frequency.exponentialRampTo(s,r,n)}else this.frequency.setValueAtTime(s,n);return this}}ai([Ii(0)],vr.prototype,"portamento",void 0);class Zl extends ts{constructor(){super($t(Zl.getDefaults(),arguments,["attack","decay","sustain","release"])),this.name="AmplitudeEnvelope",this._gainNode=new Ye({context:this.context,gain:0}),this.output=this._gainNode,this.input=this._gainNode,this._sig.connect(this._gainNode.gain),this.output=this._gainNode,this.input=this._gainNode}dispose(){return super.dispose(),this._gainNode.dispose(),this}}class va extends vr{constructor(){const t=$t(va.getDefaults(),arguments);super(t),this.name="Synth",this.oscillator=new _a(Object.assign({context:this.context,detune:t.detune,onstop:()=>this.onsilence(this)},t.oscillator)),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.envelope=new Zl(Object.assign({context:this.context},t.envelope)),this.oscillator.chain(this.envelope,this.output),Ue(this,["oscillator","frequency","detune","envelope"])}static getDefaults(){return Object.assign(vr.getDefaults(),{envelope:Object.assign(_d(ts.getDefaults(),Object.keys(ae.getDefaults())),{attack:.005,decay:.1,release:1,sustain:.3}),oscillator:Object.assign(_d(_a.getDefaults(),[...Object.keys(Ln.getDefaults()),"frequency","detune"]),{type:"triangle"})})}_triggerEnvelopeAttack(t,e){if(this.envelope.triggerAttack(t,e),this.oscillator.start(t),this.envelope.sustain===0){const n=this.toSeconds(this.envelope.attack),s=this.toSeconds(this.envelope.decay);this.oscillator.stop(t+n+s)}}_triggerEnvelopeRelease(t){this.envelope.triggerRelease(t),this.oscillator.stop(t+this.toSeconds(this.envelope.release))}getLevelAtTime(t){return t=this.toSeconds(t),this.envelope.getValueAtTime(t)}dispose(){return super.dispose(),this.oscillator.dispose(),this.envelope.dispose(),this}}class Va extends va{constructor(){const t=$t(Va.getDefaults(),arguments);super(t),this.name="MembraneSynth",this.portamento=0,this.pitchDecay=t.pitchDecay,this.octaves=t.octaves,Ue(this,["oscillator","envelope"])}static getDefaults(){return rr(vr.getDefaults(),va.getDefaults(),{envelope:{attack:.001,attackCurve:"exponential",decay:.4,release:1.4,sustain:.01},octaves:10,oscillator:{type:"sine"},pitchDecay:.05})}setNote(t,e){const n=this.toSeconds(e),s=this.toFrequency(t instanceof zn?t.toFrequency():t),r=s*this.octaves;return this.oscillator.frequency.setValueAtTime(r,n),this.oscillator.frequency.exponentialRampToValueAtTime(s,n+this.toSeconds(this.pitchDecay)),this}dispose(){return super.dispose(),this}}ai([up(0)],Va.prototype,"octaves",void 0);ai([Ii(0)],Va.prototype,"pitchDecay",void 0);const hp=new Set;function $l(i){hp.add(i)}function dp(i,t){const e=`registerProcessor("${i}", ${t})`;hp.add(e)}const Sb=`
	/**
	 * The base AudioWorkletProcessor for use in Tone.js. Works with the {@link ToneAudioWorklet}. 
	 */
	class ToneAudioWorkletProcessor extends AudioWorkletProcessor {

		constructor(options) {
			
			super(options);
			/**
			 * If the processor was disposed or not. Keep alive until it's disposed.
			 */
			this.disposed = false;
		   	/** 
			 * The number of samples in the processing block
			 */
			this.blockSize = 128;
			/**
			 * the sample rate
			 */
			this.sampleRate = sampleRate;

			this.port.onmessage = (event) => {
				// when it receives a dispose 
				if (event.data === "dispose") {
					this.disposed = true;
				}
			};
		}
	}
`;$l(Sb);const Mb=`
	/**
	 * Abstract class for a single input/output processor. 
	 * has a 'generate' function which processes one sample at a time
	 */
	class SingleIOProcessor extends ToneAudioWorkletProcessor {

		constructor(options) {
			super(Object.assign(options, {
				numberOfInputs: 1,
				numberOfOutputs: 1
			}));
			/**
			 * Holds the name of the parameter and a single value of that
			 * parameter at the current sample
			 * @type { [name: string]: number }
			 */
			this.params = {}
		}

		/**
		 * Generate an output sample from the input sample and parameters
		 * @abstract
		 * @param input number
		 * @param channel number
		 * @param parameters { [name: string]: number }
		 * @returns number
		 */
		generate(){}

		/**
		 * Update the private params object with the 
		 * values of the parameters at the given index
		 * @param parameters { [name: string]: Float32Array },
		 * @param index number
		 */
		updateParams(parameters, index) {
			for (const paramName in parameters) {
				const param = parameters[paramName];
				if (param.length > 1) {
					this.params[paramName] = parameters[paramName][index];
				} else {
					this.params[paramName] = parameters[paramName][0];
				}
			}
		}

		/**
		 * Process a single frame of the audio
		 * @param inputs Float32Array[][]
		 * @param outputs Float32Array[][]
		 */
		process(inputs, outputs, parameters) {
			const input = inputs[0];
			const output = outputs[0];
			// get the parameter values
			const channelCount = Math.max(input && input.length || 0, output.length);
			for (let sample = 0; sample < this.blockSize; sample++) {
				this.updateParams(parameters, sample);
				for (let channel = 0; channel < channelCount; channel++) {
					const inputSample = input && input.length ? input[channel][sample] : 0;
					output[channel][sample] = this.generate(inputSample, channel, this.params);
				}
			}
			return !this.disposed;
		}
	};
`;$l(Mb);const Tb=`
	/**
	 * A multichannel buffer for use within an AudioWorkletProcessor as a delay line
	 */
	class DelayLine {
		
		constructor(size, channels) {
			this.buffer = [];
			this.writeHead = []
			this.size = size;

			// create the empty channels
			for (let i = 0; i < channels; i++) {
				this.buffer[i] = new Float32Array(this.size);
				this.writeHead[i] = 0;
			}
		}

		/**
		 * Push a value onto the end
		 * @param channel number
		 * @param value number
		 */
		push(channel, value) {
			this.writeHead[channel] += 1;
			if (this.writeHead[channel] > this.size) {
				this.writeHead[channel] = 0;
			}
			this.buffer[channel][this.writeHead[channel]] = value;
		}

		/**
		 * Get the recorded value of the channel given the delay
		 * @param channel number
		 * @param delay number delay samples
		 */
		get(channel, delay) {
			let readHead = this.writeHead[channel] - Math.floor(delay);
			if (readHead < 0) {
				readHead += this.size;
			}
			return this.buffer[channel][readHead];
		}
	}
`;$l(Tb);const Eb="feedback-comb-filter",wb=`
	class FeedbackCombFilterWorklet extends SingleIOProcessor {

		constructor(options) {
			super(options);
			this.delayLine = new DelayLine(this.sampleRate, options.channelCount || 2);
		}

		static get parameterDescriptors() {
			return [{
				name: "delayTime",
				defaultValue: 0.1,
				minValue: 0,
				maxValue: 1,
				automationRate: "k-rate"
			}, {
				name: "feedback",
				defaultValue: 0.5,
				minValue: 0,
				maxValue: 0.9999,
				automationRate: "k-rate"
			}];
		}

		generate(input, channel, parameters) {
			const delayedSample = this.delayLine.get(channel, parameters.delayTime * this.sampleRate);
			this.delayLine.push(channel, input + delayedSample * parameters.feedback);
			return delayedSample;
		}
	}
`;dp(Eb,wb);class za extends _r{constructor(){const t=$t(za.getDefaults(),arguments,["urls","onload","baseUrl"],"urls");super(t),this.name="Sampler",this._activeSources=new Map;const e={};Object.keys(t.urls).forEach(n=>{const s=parseInt(n,10);if(se(Yo(n)||_s(s)&&isFinite(s),`url key is neither a note or midi pitch: ${n}`),Yo(n)){const r=new zn(this.context,n).toMidi();e[r]=t.urls[n]}else _s(s)&&isFinite(s)&&(e[s]=t.urls[s])}),this._buffers=new zl({urls:e,onload:t.onload,baseUrl:t.baseUrl,onerror:t.onerror}),this.attack=t.attack,this.release=t.release,this.curve=t.curve,this._buffers.loaded&&Promise.resolve().then(t.onload)}static getDefaults(){return Object.assign(_r.getDefaults(),{attack:0,baseUrl:"",curve:"exponential",onload:ye,onerror:ye,release:.1,urls:{}})}_findClosest(t){let n=0;for(;n<96;){if(this._buffers.has(t+n))return-n;if(this._buffers.has(t-n))return n;n++}throw new Error(`No available buffers for note: ${t}`)}triggerAttack(t,e,n=1){return this.log("triggerAttack",t,e,n),Array.isArray(t)||(t=[t]),t.forEach(s=>{const r=ap(new zn(this.context,s).toFrequency()),a=Math.round(r),o=r-a,c=this._findClosest(a),l=a-c,h=this._buffers.get(l),d=op(c+o),f=new Ia({url:h,context:this.context,curve:this.curve,fadeIn:this.attack,fadeOut:this.release,playbackRate:d}).connect(this.output);f.start(e,0,h.duration/d,n),ii(this._activeSources.get(a))||this._activeSources.set(a,[]),this._activeSources.get(a).push(f),f.onended=()=>{if(this._activeSources&&this._activeSources.has(a)){const m=this._activeSources.get(a),v=m.indexOf(f);v!==-1&&m.splice(v,1)}}}),this}triggerRelease(t,e){return this.log("triggerRelease",t,e),Array.isArray(t)||(t=[t]),t.forEach(n=>{const s=new zn(this.context,n).toMidi();if(this._activeSources.has(s)&&this._activeSources.get(s).length){const r=this._activeSources.get(s);e=this.toSeconds(e),r.forEach(a=>{a.stop(e)}),this._activeSources.set(s,[])}}),this}releaseAll(t){const e=this.toSeconds(t);return this._activeSources.forEach(n=>{for(;n.length;)n.shift().stop(e)}),this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1)),this}triggerAttackRelease(t,e,n,s=1){const r=this.toSeconds(n);return this.triggerAttack(t,r,s),ii(e)?(se(ii(t),"notes must be an array when duration is array"),t.forEach((a,o)=>{const c=e[Math.min(o,e.length-1)];this.triggerRelease(a,r+this.toSeconds(c))})):this.triggerRelease(t,r+this.toSeconds(e)),this}add(t,e,n){if(se(Yo(t)||isFinite(t),`note must be a pitch or midi: ${t}`),Yo(t)){const s=new zn(this.context,t).toMidi();this._buffers.add(s,e,n)}else this._buffers.add(t,e,n);return this}get loaded(){return this._buffers.loaded}dispose(){return super.dispose(),this._buffers.dispose(),this._activeSources.forEach(t=>{t.forEach(e=>e.dispose())}),this._activeSources.clear(),this}}ai([Ii(0)],za.prototype,"attack",void 0);ai([Ii(0)],za.prototype,"release",void 0);class Kl extends ae{constructor(){const t=$t(Kl.getDefaults(),arguments,["pan"]);super(t),this.name="Panner",this._panner=this.context.createStereoPanner(),this.input=this._panner,this.output=this._panner,this.pan=new xe({context:this.context,param:this._panner.pan,value:t.pan,minValue:-1,maxValue:1}),this._panner.channelCount=t.channelCount,this._panner.channelCountMode="explicit",Ue(this,"pan")}static getDefaults(){return Object.assign(ae.getDefaults(),{pan:0,channelCount:1})}dispose(){return super.dispose(),this._panner.disconnect(),this.pan.dispose(),this}}const bb="bit-crusher",Ab=`
	class BitCrusherWorklet extends SingleIOProcessor {

		static get parameterDescriptors() {
			return [{
				name: "bits",
				defaultValue: 12,
				minValue: 1,
				maxValue: 16,
				automationRate: 'k-rate'
			}];
		}

		generate(input, _channel, parameters) {
			const step = Math.pow(0.5, parameters.bits - 1);
			const val = step * Math.floor(input / step + 0.5);
			return val;
		}
	}
`;dp(bb,Ab);class We extends ae{constructor(){const t=$t(We.getDefaults(),arguments,["solo"]);super(t),this.name="Solo",this.input=this.output=new Ye({context:this.context}),We._allSolos.has(this.context)||We._allSolos.set(this.context,new Set),We._allSolos.get(this.context).add(this),this.solo=t.solo}static getDefaults(){return Object.assign(ae.getDefaults(),{solo:!1})}get solo(){return this._isSoloed()}set solo(t){t?this._addSolo():this._removeSolo(),We._allSolos.get(this.context).forEach(e=>e._updateSolo())}get muted(){return this.input.gain.value===0}_addSolo(){We._soloed.has(this.context)||We._soloed.set(this.context,new Set),We._soloed.get(this.context).add(this)}_removeSolo(){We._soloed.has(this.context)&&We._soloed.get(this.context).delete(this)}_isSoloed(){return We._soloed.has(this.context)&&We._soloed.get(this.context).has(this)}_noSolos(){return!We._soloed.has(this.context)||We._soloed.has(this.context)&&We._soloed.get(this.context).size===0}_updateSolo(){this._isSoloed()?this.input.gain.value=1:this._noSolos()?this.input.gain.value=1:this.input.gain.value=0}dispose(){return super.dispose(),We._allSolos.get(this.context).delete(this),this._removeSolo(),this}}We._allSolos=new Map;We._soloed=new Map;class Jl extends ae{constructor(){const t=$t(Jl.getDefaults(),arguments,["pan","volume"]);super(t),this.name="PanVol",this._panner=this.input=new Kl({context:this.context,pan:t.pan,channelCount:t.channelCount}),this.pan=this._panner.pan,this._volume=this.output=new Cr({context:this.context,volume:t.volume}),this.volume=this._volume.volume,this._panner.connect(this._volume),this.mute=t.mute,Ue(this,["pan","volume"])}static getDefaults(){return Object.assign(ae.getDefaults(),{mute:!1,pan:0,volume:0,channelCount:1})}get mute(){return this._volume.mute}set mute(t){this._volume.mute=t}dispose(){return super.dispose(),this._panner.dispose(),this.pan.dispose(),this._volume.dispose(),this.volume.dispose(),this}}class nr extends ae{constructor(){const t=$t(nr.getDefaults(),arguments,["volume","pan"]);super(t),this.name="Channel",this._solo=this.input=new We({solo:t.solo,context:this.context}),this._panVol=this.output=new Jl({context:this.context,pan:t.pan,volume:t.volume,mute:t.mute,channelCount:t.channelCount}),this.pan=this._panVol.pan,this.volume=this._panVol.volume,this._solo.connect(this._panVol),Ue(this,["pan","volume"])}static getDefaults(){return Object.assign(ae.getDefaults(),{pan:0,volume:0,mute:!1,solo:!1,channelCount:1})}get solo(){return this._solo.solo}set solo(t){this._solo.solo=t}get muted(){return this._solo.muted||this.mute}get mute(){return this._panVol.mute}set mute(t){this._panVol.mute=t}_getBus(t){return nr.buses.has(t)||nr.buses.set(t,new Ye({context:this.context})),nr.buses.get(t)}send(t,e=0){const n=this._getBus(t),s=new Ye({context:this.context,units:"decibels",gain:e});return this.connect(s),s.connect(n),s}receive(t){return this._getBus(t).connect(this),this}dispose(){return super.dispose(),this._panVol.dispose(),this.pan.dispose(),this.volume.dispose(),this._solo.dispose(),this}}nr.buses=new Map;Qn().transport;const Cb=Qn().destination;Qn().destination;Qn().listener;Qn().draw;Qn();class Rb{constructor(){this.ready=!1,this.lfo=null,this.drone=null}async init(){await cb(),console.log("Audio Context Started"),Cb.volume.value=-10,this.drone=new Oe(50,"sine").toDestination().start(),this.drone.volume.value=-20,this.lfo=new Yl(.5,-30,-10).connect(this.drone.volume).start(),this.ready=!0}update(t,e){this.ready}}var ar=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Pb={};(function(){var i;function t(u){var _=0;return function(){return _<u.length?{done:!1,value:u[_++]}:{done:!0}}}var e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,_,y){return u==Array.prototype||u==Object.prototype||(u[_]=y.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof ar=="object"&&ar];for(var _=0;_<u.length;++_){var y=u[_];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=n(this);function r(u,_){if(_)t:{var y=s;u=u.split(".");for(var E=0;E<u.length-1;E++){var F=u[E];if(!(F in y))break t;y=y[F]}u=u[u.length-1],E=y[u],_=_(E),_!=E&&_!=null&&e(y,u,{configurable:!0,writable:!0,value:_})}}r("Symbol",function(u){function _(V){if(this instanceof _)throw new TypeError("Symbol is not a constructor");return new y(E+(V||"")+"_"+F++,V)}function y(V,B){this.h=V,e(this,"description",{configurable:!0,writable:!0,value:B})}if(u)return u;y.prototype.toString=function(){return this.h};var E="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",F=0;return _}),r("Symbol.iterator",function(u){if(u)return u;u=Symbol("Symbol.iterator");for(var _="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),y=0;y<_.length;y++){var E=s[_[y]];typeof E=="function"&&typeof E.prototype[u]!="function"&&e(E.prototype,u,{configurable:!0,writable:!0,value:function(){return a(t(this))}})}return u});function a(u){return u={next:u},u[Symbol.iterator]=function(){return this},u}function o(u){var _=typeof Symbol<"u"&&Symbol.iterator&&u[Symbol.iterator];return _?_.call(u):{next:t(u)}}function c(u){if(!(u instanceof Array)){u=o(u);for(var _,y=[];!(_=u.next()).done;)y.push(_.value);u=y}return u}var l=typeof Object.assign=="function"?Object.assign:function(u,_){for(var y=1;y<arguments.length;y++){var E=arguments[y];if(E)for(var F in E)Object.prototype.hasOwnProperty.call(E,F)&&(u[F]=E[F])}return u};r("Object.assign",function(u){return u||l});var h=typeof Object.create=="function"?Object.create:function(u){function _(){}return _.prototype=u,new _},d;if(typeof Object.setPrototypeOf=="function")d=Object.setPrototypeOf;else{var f;t:{var m={a:!0},v={};try{v.__proto__=m,f=v.a;break t}catch{}f=!1}d=f?function(u,_){if(u.__proto__=_,u.__proto__!==_)throw new TypeError(u+" is not extensible");return u}:null}var x=d;function g(u,_){if(u.prototype=h(_.prototype),u.prototype.constructor=u,x)x(u,_);else for(var y in _)if(y!="prototype")if(Object.defineProperties){var E=Object.getOwnPropertyDescriptor(_,y);E&&Object.defineProperty(u,y,E)}else u[y]=_[y];u.ya=_.prototype}function p(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function b(u){if(u.m)throw new TypeError("Generator is already running");u.m=!0}p.prototype.u=function(u){this.i=u};function M(u,_){u.l={ma:_,na:!0},u.h=u.s||u.v}p.prototype.return=function(u){this.l={return:u},this.h=this.v};function w(u,_,y){return u.h=y,{value:_}}function A(u){this.h=new p,this.i=u}function R(u,_){b(u.h);var y=u.h.j;return y?C(u,"return"in y?y.return:function(E){return{value:E,done:!0}},_,u.h.return):(u.h.return(_),D(u))}function C(u,_,y,E){try{var F=_.call(u.h.j,y);if(!(F instanceof Object))throw new TypeError("Iterator result "+F+" is not an object");if(!F.done)return u.h.m=!1,F;var V=F.value}catch(B){return u.h.j=null,M(u.h,B),D(u)}return u.h.j=null,E.call(u.h,V),D(u)}function D(u){for(;u.h.h;)try{var _=u.i(u.h);if(_)return u.h.m=!1,{value:_.value,done:!1}}catch(y){u.h.i=void 0,M(u.h,y)}if(u.h.m=!1,u.h.l){if(_=u.h.l,u.h.l=null,_.na)throw _.ma;return{value:_.return,done:!0}}return{value:void 0,done:!0}}function T(u){this.next=function(_){return b(u.h),u.h.j?_=C(u,u.h.j.next,_,u.h.u):(u.h.u(_),_=D(u)),_},this.throw=function(_){return b(u.h),u.h.j?_=C(u,u.h.j.throw,_,u.h.u):(M(u.h,_),_=D(u)),_},this.return=function(_){return R(u,_)},this[Symbol.iterator]=function(){return this}}function S(u){function _(E){return u.next(E)}function y(E){return u.throw(E)}return new Promise(function(E,F){function V(B){B.done?E(B.value):Promise.resolve(B.value).then(_,y).then(V,F)}V(u.next())})}function P(u){return S(new T(new A(u)))}r("Promise",function(u){function _(B){this.i=0,this.j=void 0,this.h=[],this.u=!1;var X=this.l();try{B(X.resolve,X.reject)}catch(tt){X.reject(tt)}}function y(){this.h=null}function E(B){return B instanceof _?B:new _(function(X){X(B)})}if(u)return u;y.prototype.i=function(B){if(this.h==null){this.h=[];var X=this;this.j(function(){X.m()})}this.h.push(B)};var F=s.setTimeout;y.prototype.j=function(B){F(B,0)},y.prototype.m=function(){for(;this.h&&this.h.length;){var B=this.h;this.h=[];for(var X=0;X<B.length;++X){var tt=B[X];B[X]=null;try{tt()}catch(pt){this.l(pt)}}}this.h=null},y.prototype.l=function(B){this.j(function(){throw B})},_.prototype.l=function(){function B(pt){return function(vt){tt||(tt=!0,pt.call(X,vt))}}var X=this,tt=!1;return{resolve:B(this.I),reject:B(this.m)}},_.prototype.I=function(B){if(B===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(B instanceof _)this.L(B);else{t:switch(typeof B){case"object":var X=B!=null;break t;case"function":X=!0;break t;default:X=!1}X?this.F(B):this.s(B)}},_.prototype.F=function(B){var X=void 0;try{X=B.then}catch(tt){this.m(tt);return}typeof X=="function"?this.M(X,B):this.s(B)},_.prototype.m=function(B){this.v(2,B)},_.prototype.s=function(B){this.v(1,B)},_.prototype.v=function(B,X){if(this.i!=0)throw Error("Cannot settle("+B+", "+X+"): Promise already settled in state"+this.i);this.i=B,this.j=X,this.i===2&&this.K(),this.H()},_.prototype.K=function(){var B=this;F(function(){if(B.D()){var X=s.console;typeof X<"u"&&X.error(B.j)}},1)},_.prototype.D=function(){if(this.u)return!1;var B=s.CustomEvent,X=s.Event,tt=s.dispatchEvent;return typeof tt>"u"?!0:(typeof B=="function"?B=new B("unhandledrejection",{cancelable:!0}):typeof X=="function"?B=new X("unhandledrejection",{cancelable:!0}):(B=s.document.createEvent("CustomEvent"),B.initCustomEvent("unhandledrejection",!1,!0,B)),B.promise=this,B.reason=this.j,tt(B))},_.prototype.H=function(){if(this.h!=null){for(var B=0;B<this.h.length;++B)V.i(this.h[B]);this.h=null}};var V=new y;return _.prototype.L=function(B){var X=this.l();B.T(X.resolve,X.reject)},_.prototype.M=function(B,X){var tt=this.l();try{B.call(X,tt.resolve,tt.reject)}catch(pt){tt.reject(pt)}},_.prototype.then=function(B,X){function tt(Ot,wt){return typeof Ot=="function"?function(Wt){try{pt(Ot(Wt))}catch(re){vt(re)}}:wt}var pt,vt,Ht=new _(function(Ot,wt){pt=Ot,vt=wt});return this.T(tt(B,pt),tt(X,vt)),Ht},_.prototype.catch=function(B){return this.then(void 0,B)},_.prototype.T=function(B,X){function tt(){switch(pt.i){case 1:B(pt.j);break;case 2:X(pt.j);break;default:throw Error("Unexpected state: "+pt.i)}}var pt=this;this.h==null?V.i(tt):this.h.push(tt),this.u=!0},_.resolve=E,_.reject=function(B){return new _(function(X,tt){tt(B)})},_.race=function(B){return new _(function(X,tt){for(var pt=o(B),vt=pt.next();!vt.done;vt=pt.next())E(vt.value).T(X,tt)})},_.all=function(B){var X=o(B),tt=X.next();return tt.done?E([]):new _(function(pt,vt){function Ht(Wt){return function(re){Ot[Wt]=re,wt--,wt==0&&pt(Ot)}}var Ot=[],wt=0;do Ot.push(void 0),wt++,E(tt.value).T(Ht(Ot.length-1),vt),tt=X.next();while(!tt.done)})},_});function O(u,_){u instanceof String&&(u+="");var y=0,E=!1,F={next:function(){if(!E&&y<u.length){var V=y++;return{value:_(V,u[V]),done:!1}}return E=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}r("Array.prototype.keys",function(u){return u||function(){return O(this,function(_){return _})}}),r("Array.prototype.fill",function(u){return u||function(_,y,E){var F=this.length||0;for(0>y&&(y=Math.max(0,F+y)),(E==null||E>F)&&(E=F),E=Number(E),0>E&&(E=Math.max(0,F+E)),y=Number(y||0);y<E;y++)this[y]=_;return this}});function G(u){return u||Array.prototype.fill}r("Int8Array.prototype.fill",G),r("Uint8Array.prototype.fill",G),r("Uint8ClampedArray.prototype.fill",G),r("Int16Array.prototype.fill",G),r("Uint16Array.prototype.fill",G),r("Int32Array.prototype.fill",G),r("Uint32Array.prototype.fill",G),r("Float32Array.prototype.fill",G),r("Float64Array.prototype.fill",G),r("Object.is",function(u){return u||function(_,y){return _===y?_!==0||1/_===1/y:_!==_&&y!==y}}),r("Array.prototype.includes",function(u){return u||function(_,y){var E=this;E instanceof String&&(E=String(E));var F=E.length;for(y=y||0,0>y&&(y=Math.max(y+F,0));y<F;y++){var V=E[y];if(V===_||Object.is(V,_))return!0}return!1}}),r("String.prototype.includes",function(u){return u||function(_,y){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(_ instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(_,y||0)!==-1}});var U=this||self;function z(u,_){u=u.split(".");var y=U;u[0]in y||typeof y.execScript>"u"||y.execScript("var "+u[0]);for(var E;u.length&&(E=u.shift());)u.length||_===void 0?y[E]&&y[E]!==Object.prototype[E]?y=y[E]:y=y[E]={}:y[E]=_}function k(u){var _;t:{if((_=U.navigator)&&(_=_.userAgent))break t;_=""}return _.indexOf(u)!=-1}var H=Array.prototype.map?function(u,_){return Array.prototype.map.call(u,_,void 0)}:function(u,_){for(var y=u.length,E=Array(y),F=typeof u=="string"?u.split(""):u,V=0;V<y;V++)V in F&&(E[V]=_.call(void 0,F[V],V,u));return E},j={},Y=null;function $(u){var _=u.length,y=3*_/4;y%3?y=Math.floor(y):"=.".indexOf(u[_-1])!=-1&&(y="=.".indexOf(u[_-2])!=-1?y-2:y-1);var E=new Uint8Array(y),F=0;return st(u,function(V){E[F++]=V}),F!==y?E.subarray(0,F):E}function st(u,_){function y(tt){for(;E<u.length;){var pt=u.charAt(E++),vt=Y[pt];if(vt!=null)return vt;if(!/^[\s\xa0]*$/.test(pt))throw Error("Unknown base64 encoding at char: "+pt)}return tt}rt();for(var E=0;;){var F=y(-1),V=y(0),B=y(64),X=y(64);if(X===64&&F===-1)break;_(F<<2|V>>4),B!=64&&(_(V<<4&240|B>>2),X!=64&&_(B<<6&192|X))}}function rt(){if(!Y){Y={};for(var u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),_=["+/=","+/","-_=","-_.","-_"],y=0;5>y;y++){var E=u.concat(_[y].split(""));j[y]=E;for(var F=0;F<E.length;F++){var V=E[F];Y[V]===void 0&&(Y[V]=F)}}}}var Q=typeof Uint8Array<"u",ot=!(k("Trident")||k("MSIE"))&&typeof U.btoa=="function";function ct(u){if(!ot){var _;_===void 0&&(_=0),rt(),_=j[_];for(var y=Array(Math.floor(u.length/3)),E=_[64]||"",F=0,V=0;F<u.length-2;F+=3){var B=u[F],X=u[F+1],tt=u[F+2],pt=_[B>>2];B=_[(B&3)<<4|X>>4],X=_[(X&15)<<2|tt>>6],tt=_[tt&63],y[V++]=pt+B+X+tt}switch(pt=0,tt=E,u.length-F){case 2:pt=u[F+1],tt=_[(pt&15)<<2]||E;case 1:u=u[F],y[V]=_[u>>2]+_[(u&3)<<4|pt>>4]+tt+E}return y.join("")}for(_="";10240<u.length;)_+=String.fromCharCode.apply(null,u.subarray(0,10240)),u=u.subarray(10240);return _+=String.fromCharCode.apply(null,u),btoa(_)}var _t=RegExp("[-_.]","g");function Et(u){switch(u){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function ft(u){if(!ot)return $(u);_t.test(u)&&(u=u.replace(_t,Et)),u=atob(u);for(var _=new Uint8Array(u.length),y=0;y<u.length;y++)_[y]=u.charCodeAt(y);return _}var kt;function Lt(){return kt||(kt=new Uint8Array(0))}var Xt={},J=typeof Uint8Array.prototype.slice=="function",ce=0,bt=0;function at(u){var _=0>u;u=Math.abs(u);var y=u>>>0;u=Math.floor((u-y)/4294967296),_&&(y=o(qt(y,u)),_=y.next().value,u=y.next().value,y=_),ce=y>>>0,bt=u>>>0}var lt=typeof BigInt=="function";function qt(u,_){return _=~_,u?u=~u+1:_+=1,[u,_]}function At(u,_){this.i=u>>>0,this.h=_>>>0}function L(u){if(!u)return N||(N=new At(0,0));if(!/^-?\d+$/.test(u))return null;if(16>u.length)at(Number(u));else if(lt)u=BigInt(u),ce=Number(u&BigInt(4294967295))>>>0,bt=Number(u>>BigInt(32)&BigInt(4294967295));else{var _=+(u[0]==="-");bt=ce=0;for(var y=u.length,E=_,F=(y-_)%6+_;F<=y;E=F,F+=6)E=Number(u.slice(E,F)),bt*=1e6,ce=1e6*ce+E,4294967296<=ce&&(bt+=ce/4294967296|0,ce%=4294967296);_&&(_=o(qt(ce,bt)),u=_.next().value,_=_.next().value,ce=u,bt=_)}return new At(ce,bt)}var N;function K(u,_){return Error("Invalid wire type: "+u+" (at position "+_+")")}function ut(){return Error("Failed to read varint, encoding is invalid.")}function ht(u,_){return Error("Tried to read past the end of the data "+_+" > "+u)}function dt(){throw Error("Invalid UTF8")}function Dt(u,_){return _=String.fromCharCode.apply(null,_),u==null?_:u+_}var St=void 0,Rt,Bt=typeof TextDecoder<"u",Jt,mt=typeof TextEncoder<"u",fe;function ee(u){if(u!==Xt)throw Error("illegal external caller")}function Vt(u,_){if(ee(_),this.V=u,u!=null&&u.length===0)throw Error("ByteString should be constructed with non-empty values")}function Ut(){return fe||(fe=new Vt(null,Xt))}function Pt(u){ee(Xt);var _=u.V;return _=_==null||Q&&_!=null&&_ instanceof Uint8Array?_:typeof _=="string"?ft(_):null,_==null?_:u.V=_}function Qt(u){if(typeof u=="string")return{buffer:ft(u),C:!1};if(Array.isArray(u))return{buffer:new Uint8Array(u),C:!1};if(u.constructor===Uint8Array)return{buffer:u,C:!1};if(u.constructor===ArrayBuffer)return{buffer:new Uint8Array(u),C:!1};if(u.constructor===Vt)return{buffer:Pt(u)||Lt(),C:!0};if(u instanceof Uint8Array)return{buffer:new Uint8Array(u.buffer,u.byteOffset,u.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function ue(u,_){this.i=null,this.m=!1,this.h=this.j=this.l=0,Me(this,u,_)}function Me(u,_,y){y=y===void 0?{}:y,u.S=y.S===void 0?!1:y.S,_&&(_=Qt(_),u.i=_.buffer,u.m=_.C,u.l=0,u.j=u.i.length,u.h=u.l)}ue.prototype.reset=function(){this.h=this.l};function jt(u,_){if(u.h=_,_>u.j)throw ht(u.j,_)}function gt(u){var _=u.i,y=u.h,E=_[y++],F=E&127;if(E&128&&(E=_[y++],F|=(E&127)<<7,E&128&&(E=_[y++],F|=(E&127)<<14,E&128&&(E=_[y++],F|=(E&127)<<21,E&128&&(E=_[y++],F|=E<<28,E&128&&_[y++]&128&&_[y++]&128&&_[y++]&128&&_[y++]&128&&_[y++]&128)))))throw ut();return jt(u,y),F}function W(u,_){if(0>_)throw Error("Tried to read a negative byte length: "+_);var y=u.h,E=y+_;if(E>u.j)throw ht(_,u.j-y);return u.h=E,y}var Tt=[];function Mt(){this.h=[]}Mt.prototype.length=function(){return this.h.length},Mt.prototype.end=function(){var u=this.h;return this.h=[],u};function zt(u,_,y){for(;0<y||127<_;)u.h.push(_&127|128),_=(_>>>7|y<<25)>>>0,y>>>=7;u.h.push(_)}function It(u,_){for(;127<_;)u.h.push(_&127|128),_>>>=7;u.h.push(_)}function pe(u,_){if(Tt.length){var y=Tt.pop();Me(y,u,_),u=y}else u=new ue(u,_);this.h=u,this.j=this.h.h,this.i=this.l=-1,this.setOptions(_)}pe.prototype.setOptions=function(u){u=u===void 0?{}:u,this.ca=u.ca===void 0?!1:u.ca},pe.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function me(u){var _=u.h;if(_.h==_.j)return!1;u.j=u.h.h;var y=gt(u.h)>>>0;if(_=y>>>3,y&=7,!(0<=y&&5>=y))throw K(y,u.j);if(1>_)throw Error("Invalid field number: "+_+" (at position "+u.j+")");return u.l=_,u.i=y,!0}function Le(u){switch(u.i){case 0:if(u.i!=0)Le(u);else t:{u=u.h;for(var _=u.h,y=_+10,E=u.i;_<y;)if(!(E[_++]&128)){jt(u,_);break t}throw ut()}break;case 1:u=u.h,jt(u,u.h+8);break;case 2:u.i!=2?Le(u):(_=gt(u.h)>>>0,u=u.h,jt(u,u.h+_));break;case 5:u=u.h,jt(u,u.h+4);break;case 3:_=u.l;do{if(!me(u))throw Error("Unmatched start-group tag: stream EOF");if(u.i==4){if(u.l!=_)throw Error("Unmatched end-group tag");break}Le(u)}while(!0);break;default:throw K(u.i,u.j)}}var ze=[];function ge(){this.j=[],this.i=0,this.h=new Mt}function Fe(u,_){_.length!==0&&(u.j.push(_),u.i+=_.length)}function In(u,_){if(_=_.R){Fe(u,u.h.end());for(var y=0;y<_.length;y++)Fe(u,Pt(_[y])||Lt())}}var On=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function pi(u,_){return On?u[On]|=_:u.A!==void 0?u.A|=_:(Object.defineProperties(u,{A:{value:_,configurable:!0,writable:!0,enumerable:!1}}),_)}function es(u,_){On?u[On]&&(u[On]&=~_):u.A!==void 0&&(u.A&=~_)}function Re(u){var _;return On?_=u[On]:_=u.A,_??0}function fn(u,_){On?u[On]=_:u.A!==void 0?u.A=_:Object.defineProperties(u,{A:{value:_,configurable:!0,writable:!0,enumerable:!1}})}function ws(u){return pi(u,1),u}function po(u,_){fn(_,(u|0)&-51)}function bs(u,_){fn(_,(u|18)&-41)}var Rr={};function As(u){return u!==null&&typeof u=="object"&&!Array.isArray(u)&&u.constructor===Object}var I,Z=[];fn(Z,23),I=Object.freeze(Z);function nt(u){if(Re(u.o)&2)throw Error("Cannot mutate an immutable Message")}function it(u){var _=u.length;(_=_?u[_-1]:void 0)&&As(_)?_.g=1:(_={},u.push((_.g=1,_)))}function et(u){var _=u.i+u.G;return u.B||(u.B=u.o[_]={})}function xt(u,_){return _===-1?null:_>=u.i?u.B?u.B[_]:void 0:u.o[_+u.G]}function Ct(u,_,y,E){nt(u),Ft(u,_,y,E)}function Ft(u,_,y,E){u.j&&(u.j=void 0),_>=u.i||E?et(u)[_]=y:(u.o[_+u.G]=y,(u=u.B)&&_ in u&&delete u[_])}function Gt(u,_,y,E){var F=xt(u,_);Array.isArray(F)||(F=I);var V=Re(F);if(V&1||ws(F),E)V&2||pi(F,2),y&1||Object.freeze(F);else{E=!(y&2);var B=V&2;y&1||!B?E&&V&16&&!B&&es(F,16):(F=ws(Array.prototype.slice.call(F)),Ft(u,_,F))}return F}function Kt(u,_){var y=xt(u,_),E=y==null?y:typeof y=="number"||y==="NaN"||y==="Infinity"||y==="-Infinity"?Number(y):void 0;return E!=null&&E!==y&&Ft(u,_,E),E}function Zt(u,_,y,E,F){u.h||(u.h={});var V=u.h[y],B=Gt(u,y,3,F);if(!V){var X=B;V=[];var tt=!!(Re(u.o)&16);B=!!(Re(X)&2);var pt=X;!F&&B&&(X=Array.prototype.slice.call(X));for(var vt=B,Ht=0;Ht<X.length;Ht++){var Ot=X[Ht],wt=_,Wt=!1;if(Wt=Wt===void 0?!1:Wt,Ot=Array.isArray(Ot)?new wt(Ot):Wt?new wt:void 0,Ot!==void 0){wt=Ot.o;var re=Wt=Re(wt);B&&(re|=2),tt&&(re|=16),re!=Wt&&fn(wt,re),wt=re,vt=vt||!!(2&wt),V.push(Ot)}}return u.h[y]=V,tt=Re(X),_=tt|33,_=vt?_&-9:_|8,tt!=_&&(vt=X,Object.isFrozen(vt)&&(vt=Array.prototype.slice.call(vt)),fn(vt,_),X=vt),pt!==X&&Ft(u,y,X),(F||E&&B)&&pi(V,2),E&&Object.freeze(V),V}return F||(F=Object.isFrozen(V),E&&!F?Object.freeze(V):!E&&F&&(V=Array.prototype.slice.call(V),u.h[y]=V)),V}function Yt(u,_,y){var E=!!(Re(u.o)&2);if(_=Zt(u,_,y,E,E),u=Gt(u,y,3,E),!(E||Re(u)&8)){for(E=0;E<_.length;E++){if(y=_[E],Re(y.o)&2){var F=ci(y,!1);F.j=y}else F=y;y!==F&&(_[E]=F,u[E]=F.o)}pi(u,8)}return _}function he(u,_,y){if(y!=null&&typeof y!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof y+": "+y);Ct(u,_,y)}function cn(u,_,y,E,F){nt(u);var V=Zt(u,y,_,!1,!1);return y=E??new y,u=Gt(u,_,2,!1),F!=null?(V.splice(F,0,y),u.splice(F,0,y.o)):(V.push(y),u.push(y.o)),y.C()&&es(u,8),y}function Ie(u,_){return u??_}function Ge(u,_,y){return y=y===void 0?0:y,Ie(Kt(u,_),y)}var _e;function ne(u){switch(typeof u){case"number":return isFinite(u)?u:String(u);case"object":if(u)if(Array.isArray(u)){if(Re(u)&128)return u=Array.prototype.slice.call(u),it(u),u}else{if(Q&&u!=null&&u instanceof Uint8Array)return ct(u);if(u instanceof Vt){var _=u.V;return _==null?"":typeof _=="string"?_:u.V=ct(_)}}}return u}function Cs(u,_,y,E){if(u!=null){if(Array.isArray(u))u=Te(u,_,y,E!==void 0);else if(As(u)){var F={},V;for(V in u)F[V]=Cs(u[V],_,y,E);u=F}else u=_(u,E);return u}}function Te(u,_,y,E){var F=Re(u);E=E?!!(F&16):void 0,u=Array.prototype.slice.call(u);for(var V=0;V<u.length;V++)u[V]=Cs(u[V],_,y,E);return y(F,u),u}function mi(u){return u.ja===Rr?u.toJSON():ne(u)}function mo(u,_){u&128&&it(_)}function Oi(u,_,y){if(y=y===void 0?bs:y,u!=null){if(Q&&u instanceof Uint8Array)return u.length?new Vt(new Uint8Array(u),Xt):Ut();if(Array.isArray(u)){var E=Re(u);return E&2?u:_&&!(E&32)&&(E&16||E===0)?(fn(u,E|2),u):(u=Te(u,Oi,E&4?bs:y,!0),_=Re(u),_&4&&_&2&&Object.freeze(u),u)}return u.ja===Rr?je(u):u}}function Rs(u,_,y,E,F,V,B){if(u=u.h&&u.h[y]){if(E=Re(u),E&2?E=u:(V=H(u,je),bs(E,V),Object.freeze(V),E=V),nt(_),B=E==null?I:ws([]),E!=null){for(V=!!E.length,u=0;u<E.length;u++){var X=E[u];V=V&&!(Re(X.o)&2),B[u]=X.o}V=(V?8:0)|1,u=Re(B),(u&V)!==V&&(Object.isFrozen(B)&&(B=Array.prototype.slice.call(B)),fn(B,u|V)),_.h||(_.h={}),_.h[y]=E}else _.h&&(_.h[y]=void 0);Ft(_,y,B,F)}else Ct(_,y,Oi(E,V,B),F)}function je(u){return Re(u.o)&2||(u=ci(u,!0),pi(u.o,2)),u}function ci(u,_){var y=u.o,E=[];pi(E,16);var F=u.constructor.h;if(F&&E.push(F),F=u.B,F){E.length=y.length,E.fill(void 0,E.length,y.length);var V={};E[E.length-1]=V}Re(y)&128&&it(E),_=_||u.C()?bs:po,V=u.constructor,_e=E,E=new V(E),_e=void 0,u.R&&(E.R=u.R.slice()),V=!!(Re(y)&16);for(var B=F?y.length-1:y.length,X=0;X<B;X++)Rs(u,E,X-u.G,y[X],!1,V,_);if(F)for(var tt in F)Rs(u,E,+tt,F[tt],!0,V,_);return E}function Je(u,_,y){u==null&&(u=_e),_e=void 0;var E=this.constructor.i||0,F=0<E,V=this.constructor.h,B=!1;if(u==null){u=V?[V]:[];var X=48,tt=!0;F&&(E=0,X|=128),fn(u,X)}else{if(!Array.isArray(u)||V&&V!==u[0])throw Error();var pt=X=pi(u,0);if((tt=(16&pt)!==0)&&((B=(32&pt)!==0)||(pt|=32)),F){if(128&pt)E=0;else if(0<u.length){var vt=u[u.length-1];if(As(vt)&&"g"in vt){E=0,pt|=128,delete vt.g;var Ht=!0,Ot;for(Ot in vt){Ht=!1;break}Ht&&u.pop()}}}else if(128&pt)throw Error();X!==pt&&fn(u,pt)}this.G=(V?0:-1)-E,this.h=void 0,this.o=u;t:{if(V=this.o.length,E=V-1,V&&(V=this.o[E],As(V))){this.B=V,this.i=E-this.G;break t}_!==void 0&&-1<_?(this.i=Math.max(_,E+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!F&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(y){_=tt&&!B&&!0,F=this.i;var wt;for(tt=0;tt<y.length;tt++)B=y[tt],B<F?(B+=this.G,(E=u[B])?pn(E,_):u[B]=I):(wt||(wt=et(this)),(E=wt[B])?pn(E,_):wt[B]=I)}}Je.prototype.toJSON=function(){return Te(this.o,mi,mo)},Je.prototype.C=function(){return!!(Re(this.o)&2)};function pn(u,_){if(Array.isArray(u)){var y=Re(u),E=1;!_||y&2||(E|=16),(y&E)!==E&&fn(u,y|E)}}Je.prototype.ja=Rr,Je.prototype.toString=function(){return this.o.toString()};function Ps(u,_,y){if(y){var E={},F;for(F in y){var V=y[F],B=V.qa;B||(E.J=V.wa||V.oa.W,V.ia?(E.aa=nu(V.ia),B=function(X){return function(tt,pt,vt){return X.J(tt,pt,vt,X.aa)}}(E)):V.ka?(E.Z=iu(V.da.P,V.ka),B=function(X){return function(tt,pt,vt){return X.J(tt,pt,vt,X.Z)}}(E)):B=E.J,V.qa=B),B(_,u,V.da),E={J:E.J,aa:E.aa,Z:E.Z}}}In(_,u)}var Ns=Symbol();function Pr(u,_,y){return u[Ns]||(u[Ns]=function(E,F){return _(E,F,y)})}function Ql(u){var _=u[Ns];if(!_){var y=Ha(u);_=function(E,F){return su(E,F,y)},u[Ns]=_}return _}function fp(u){var _=u.ia;if(_)return Ql(_);if(_=u.va)return Pr(u.da.P,_,u.ka)}function pp(u){var _=fp(u),y=u.da,E=u.oa.U;return _?function(F,V){return E(F,V,y,_)}:function(F,V){return E(F,V,y)}}function tu(u,_){var y=u[_];return typeof y=="function"&&y.length===0&&(y=y(),u[_]=y),Array.isArray(y)&&(Dr in y||Nr in y||0<y.length&&typeof y[0]=="function")?y:void 0}function eu(u,_,y,E,F,V){_.P=u[0];var B=1;if(u.length>B&&typeof u[B]!="number"){var X=u[B++];y(_,X)}for(;B<u.length;){y=u[B++];for(var tt=B+1;tt<u.length&&typeof u[tt]!="number";)tt++;switch(X=u[B++],tt-=B,tt){case 0:E(_,y,X);break;case 1:(tt=tu(u,B))?(B++,F(_,y,X,tt)):E(_,y,X,u[B++]);break;case 2:tt=B++,tt=tu(u,tt),F(_,y,X,tt,u[B++]);break;case 3:V(_,y,X,u[B++],u[B++],u[B++]);break;case 4:V(_,y,X,u[B++],u[B++],u[B++],u[B++]);break;default:throw Error("unexpected number of binary field arguments: "+tt)}}return _}var go=Symbol();function nu(u){var _=u[go];if(!_){var y=Ga(u);_=function(E,F){return ru(E,F,y)},u[go]=_}return _}function iu(u,_){var y=u[go];return y||(y=function(E,F){return Ps(E,F,_)},u[go]=y),y}var Nr=Symbol();function mp(u,_){u.push(_)}function gp(u,_,y){u.push(_,y.W)}function _p(u,_,y,E){var F=nu(E),V=Ga(E).P,B=y.W;u.push(_,function(X,tt,pt){return B(X,tt,pt,V,F)})}function vp(u,_,y,E,F,V){var B=iu(E,V),X=y.W;u.push(_,function(tt,pt,vt){return X(tt,pt,vt,E,B)})}function Ga(u){var _=u[Nr];return _||(_=eu(u,u[Nr]=[],mp,gp,_p,vp),Dr in u&&Nr in u&&(u.length=0),_)}var Dr=Symbol();function xp(u,_){u[0]=_}function yp(u,_,y,E){var F=y.U;u[_]=E?function(V,B,X){return F(V,B,X,E)}:F}function Sp(u,_,y,E,F){var V=y.U,B=Ql(E),X=Ha(E).P;u[_]=function(tt,pt,vt){return V(tt,pt,vt,X,B,F)}}function Mp(u,_,y,E,F,V,B){var X=y.U,tt=Pr(E,F,V);u[_]=function(pt,vt,Ht){return X(pt,vt,Ht,E,tt,B)}}function Ha(u){var _=u[Dr];return _||(_=eu(u,u[Dr]={},xp,yp,Sp,Mp),Dr in u&&Nr in u&&(u.length=0),_)}function su(u,_,y){for(;me(_)&&_.i!=4;){var E=_.l,F=y[E];if(!F){var V=y[0];V&&(V=V[E])&&(F=y[E]=pp(V))}if(!F||!F(_,u,E)){F=_,E=u,V=F.j,Le(F);var B=F;if(!B.ca){if(F=B.h.h-V,B.h.h=V,B=B.h,F==0)F=Ut();else{if(V=W(B,F),B.S&&B.m)F=B.i.subarray(V,V+F);else{B=B.i;var X=V;F=V+F,F=X===F?Lt():J?B.slice(X,F):new Uint8Array(B.subarray(X,F))}F=F.length==0?Ut():new Vt(F,Xt)}(V=E.R)?V.push(F):E.R=[F]}}}return u}function ru(u,_,y){for(var E=y.length,F=E%2==1,V=F?1:0;V<E;V+=2)(0,y[V+1])(_,u,y[V]);Ps(u,_,F?y[0]:void 0)}function Lr(u,_){return{U:u,W:_}}var Wn=Lr(function(u,_,y){if(u.i!==5)return!1;u=u.h;var E=u.i,F=u.h,V=E[F],B=E[F+1],X=E[F+2];return E=E[F+3],jt(u,u.h+4),B=(V<<0|B<<8|X<<16|E<<24)>>>0,u=2*(B>>31)+1,V=B>>>23&255,B&=8388607,Ct(_,y,V==255?B?NaN:1/0*u:V==0?u*Math.pow(2,-149)*B:u*Math.pow(2,V-150)*(B+Math.pow(2,23))),!0},function(u,_,y){if(_=Kt(_,y),_!=null){It(u.h,8*y+5),u=u.h;var E=+_;E===0?0<1/E?ce=bt=0:(bt=0,ce=2147483648):isNaN(E)?(bt=0,ce=2147483647):(E=(y=0>E?-2147483648:0)?-E:E,34028234663852886e22<E?(bt=0,ce=(y|2139095040)>>>0):11754943508222875e-54>E?(E=Math.round(E/Math.pow(2,-149)),bt=0,ce=(y|E)>>>0):(_=Math.floor(Math.log(E)/Math.LN2),E*=Math.pow(2,-_),E=Math.round(8388608*E),16777216<=E&&++_,bt=0,ce=(y|_+127<<23|E&8388607)>>>0)),y=ce,u.h.push(y>>>0&255),u.h.push(y>>>8&255),u.h.push(y>>>16&255),u.h.push(y>>>24&255)}}),Tp=Lr(function(u,_,y){if(u.i!==0)return!1;var E=u.h,F=0,V=u=0,B=E.i,X=E.h;do{var tt=B[X++];F|=(tt&127)<<V,V+=7}while(32>V&&tt&128);for(32<V&&(u|=(tt&127)>>4),V=3;32>V&&tt&128;V+=7)tt=B[X++],u|=(tt&127)<<V;if(jt(E,X),128>tt)E=F>>>0,tt=u>>>0,(u=tt&2147483648)&&(E=~E+1>>>0,tt=~tt>>>0,E==0&&(tt=tt+1>>>0)),E=4294967296*tt+(E>>>0);else throw ut();return Ct(_,y,u?-E:E),!0},function(u,_,y){_=xt(_,y),_!=null&&(typeof _=="string"&&L(_),_!=null&&(It(u.h,8*y),typeof _=="number"?(u=u.h,at(_),zt(u,ce,bt)):(y=L(_),zt(u.h,y.i,y.h))))}),Ep=Lr(function(u,_,y){return u.i!==0?!1:(Ct(_,y,gt(u.h)),!0)},function(u,_,y){if(_=xt(_,y),_!=null&&_!=null)if(It(u.h,8*y),u=u.h,y=_,0<=y)It(u,y);else{for(_=0;9>_;_++)u.h.push(y&127|128),y>>=7;u.h.push(1)}}),ou=Lr(function(u,_,y){if(u.i!==2)return!1;var E=gt(u.h)>>>0;u=u.h;var F=W(u,E);if(u=u.i,Bt){var V=u,B;(B=Rt)||(B=Rt=new TextDecoder("utf-8",{fatal:!0})),u=F+E,V=F===0&&u===V.length?V:V.subarray(F,u);try{var X=B.decode(V)}catch(Ht){if(St===void 0){try{B.decode(new Uint8Array([128]))}catch{}try{B.decode(new Uint8Array([97])),St=!0}catch{St=!1}}throw!St&&(Rt=void 0),Ht}}else{X=F,E=X+E,F=[];for(var tt=null,pt,vt;X<E;)pt=u[X++],128>pt?F.push(pt):224>pt?X>=E?dt():(vt=u[X++],194>pt||(vt&192)!==128?(X--,dt()):F.push((pt&31)<<6|vt&63)):240>pt?X>=E-1?dt():(vt=u[X++],(vt&192)!==128||pt===224&&160>vt||pt===237&&160<=vt||((V=u[X++])&192)!==128?(X--,dt()):F.push((pt&15)<<12|(vt&63)<<6|V&63)):244>=pt?X>=E-2?dt():(vt=u[X++],(vt&192)!==128||(pt<<28)+(vt-144)>>30||((V=u[X++])&192)!==128||((B=u[X++])&192)!==128?(X--,dt()):(pt=(pt&7)<<18|(vt&63)<<12|(V&63)<<6|B&63,pt-=65536,F.push((pt>>10&1023)+55296,(pt&1023)+56320))):dt(),8192<=F.length&&(tt=Dt(tt,F),F.length=0);X=Dt(tt,F)}return Ct(_,y,X),!0},function(u,_,y){if(_=xt(_,y),_!=null){var E=!1;if(E=E===void 0?!1:E,mt){if(E&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(_))throw Error("Found an unpaired surrogate");_=(Jt||(Jt=new TextEncoder)).encode(_)}else{for(var F=0,V=new Uint8Array(3*_.length),B=0;B<_.length;B++){var X=_.charCodeAt(B);if(128>X)V[F++]=X;else{if(2048>X)V[F++]=X>>6|192;else{if(55296<=X&&57343>=X){if(56319>=X&&B<_.length){var tt=_.charCodeAt(++B);if(56320<=tt&&57343>=tt){X=1024*(X-55296)+tt-56320+65536,V[F++]=X>>18|240,V[F++]=X>>12&63|128,V[F++]=X>>6&63|128,V[F++]=X&63|128;continue}else B--}if(E)throw Error("Found an unpaired surrogate");X=65533}V[F++]=X>>12|224,V[F++]=X>>6&63|128}V[F++]=X&63|128}}_=F===V.length?V:V.subarray(0,F)}It(u.h,8*y+2),It(u.h,_.length),Fe(u,u.h.end()),Fe(u,_)}}),au=Lr(function(u,_,y,E,F){if(u.i!==2)return!1;_=cn(_,y,E),y=u.h.j,E=gt(u.h)>>>0;var V=u.h.h+E,B=V-y;if(0>=B&&(u.h.j=V,F(_,u,void 0,void 0,void 0),B=V-u.h.h),B)throw Error("Message parsing ended unexpectedly. Expected to read "+(E+" bytes, instead read "+(E-B)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return u.h.h=V,u.h.j=y,!0},function(u,_,y,E,F){if(_=Yt(_,E,y),_!=null)for(E=0;E<_.length;E++){var V=u;It(V.h,8*y+2);var B=V.h.end();Fe(V,B),B.push(V.i),V=B,F(_[E],u),B=u;var X=V.pop();for(X=B.i+B.h.length()-X;127<X;)V.push(X&127|128),X>>>=7,B.i++;V.push(X),B.i++}});function Wa(u){return function(_,y){t:{if(ze.length){var E=ze.pop();E.setOptions(y),Me(E.h,_,y),_=E}else _=new pe(_,y);try{var F=Ha(u),V=su(new F.P,_,F);break t}finally{F=_.h,F.i=null,F.m=!1,F.l=0,F.j=0,F.h=0,F.S=!1,_.l=-1,_.i=-1,100>ze.length&&ze.push(_)}V=void 0}return V}}function Xa(u){return function(){var _=new ge;ru(this,_,Ga(u)),Fe(_,_.h.end());for(var y=new Uint8Array(_.i),E=_.j,F=E.length,V=0,B=0;B<F;B++){var X=E[B];y.set(X,V),V+=X.length}return _.j=[y],y}}function Ds(u){Je.call(this,u)}g(Ds,Je);var cu=[Ds,1,Ep,2,Wn,3,ou,4,ou];Ds.prototype.l=Xa(cu);function qa(u){Je.call(this,u,-1,wp)}g(qa,Je),qa.prototype.addClassification=function(u,_){return cn(this,1,Ds,u,_),this};var wp=[1],lu=Wa([qa,1,au,cu]);function Ls(u){Je.call(this,u)}g(Ls,Je);var uu=[Ls,1,Wn,2,Wn,3,Wn,4,Wn,5,Wn];Ls.prototype.l=Xa(uu);function hu(u){Je.call(this,u,-1,bp)}g(hu,Je);var bp=[1],du=Wa([hu,1,au,uu]);function _o(u){Je.call(this,u)}g(_o,Je);var fu=[_o,1,Wn,2,Wn,3,Wn,4,Wn,5,Wn,6,Tp],Ap=Wa(fu);_o.prototype.l=Xa(fu);function pu(u,_,y){if(y=u.createShader(y===0?u.VERTEX_SHADER:u.FRAGMENT_SHADER),u.shaderSource(y,_),u.compileShader(y),!u.getShaderParameter(y,u.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+u.getShaderInfoLog(y));return y}function mu(u){return Yt(u,Ds,1).map(function(_){var y=xt(_,1);return{index:y??0,score:Ge(_,2),label:xt(_,3)!=null?Ie(xt(_,3),""):void 0,displayName:xt(_,4)!=null?Ie(xt(_,4),""):void 0}})}function gu(u){return{x:Ge(u,1),y:Ge(u,2),z:Ge(u,3),visibility:Kt(u,4)!=null?Ge(u,4):void 0}}function _u(u){return u.map(function(_){return Yt(du(_),Ls,1).map(gu)})}function ja(u,_){this.i=u,this.h=_,this.m=0}function vu(u,_,y){return Cp(u,_),typeof u.h.canvas.transferToImageBitmap=="function"?Promise.resolve(u.h.canvas.transferToImageBitmap()):y?Promise.resolve(u.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(u.h.canvas):(u.j===void 0&&(u.j=document.createElement("canvas")),new Promise(function(E){u.j.height=u.h.canvas.height,u.j.width=u.h.canvas.width,u.j.getContext("2d",{}).drawImage(u.h.canvas,0,0,u.h.canvas.width,u.h.canvas.height),E(u.j)}))}function Cp(u,_){var y=u.h;if(u.s===void 0){var E=pu(y,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),F=pu(y,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),V=y.createProgram();if(y.attachShader(V,E),y.attachShader(V,F),y.linkProgram(V),!y.getProgramParameter(V,y.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+y.getProgramInfoLog(V));E=u.s=V,y.useProgram(E),F=y.getUniformLocation(E,"sampler0"),u.l={O:y.getAttribLocation(E,"aVertex"),N:y.getAttribLocation(E,"aTex"),xa:F},u.v=y.createBuffer(),y.bindBuffer(y.ARRAY_BUFFER,u.v),y.enableVertexAttribArray(u.l.O),y.vertexAttribPointer(u.l.O,2,y.FLOAT,!1,0,0),y.bufferData(y.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),y.STATIC_DRAW),y.bindBuffer(y.ARRAY_BUFFER,null),u.u=y.createBuffer(),y.bindBuffer(y.ARRAY_BUFFER,u.u),y.enableVertexAttribArray(u.l.N),y.vertexAttribPointer(u.l.N,2,y.FLOAT,!1,0,0),y.bufferData(y.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),y.STATIC_DRAW),y.bindBuffer(y.ARRAY_BUFFER,null),y.uniform1i(F,0)}E=u.l,y.useProgram(u.s),y.canvas.width=_.width,y.canvas.height=_.height,y.viewport(0,0,_.width,_.height),y.activeTexture(y.TEXTURE0),u.i.bindTexture2d(_.glName),y.enableVertexAttribArray(E.O),y.bindBuffer(y.ARRAY_BUFFER,u.v),y.vertexAttribPointer(E.O,2,y.FLOAT,!1,0,0),y.enableVertexAttribArray(E.N),y.bindBuffer(y.ARRAY_BUFFER,u.u),y.vertexAttribPointer(E.N,2,y.FLOAT,!1,0,0),y.bindFramebuffer(y.DRAW_FRAMEBUFFER?y.DRAW_FRAMEBUFFER:y.FRAMEBUFFER,null),y.clearColor(0,0,0,0),y.clear(y.COLOR_BUFFER_BIT),y.colorMask(!0,!0,!0,!0),y.drawArrays(y.TRIANGLE_FAN,0,4),y.disableVertexAttribArray(E.O),y.disableVertexAttribArray(E.N),y.bindBuffer(y.ARRAY_BUFFER,null),u.i.bindTexture2d(0)}function Rp(u){this.h=u}var Pp=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function Np(u,_){return _+u}function xu(u,_){window[u]=_}function Dp(u){var _=document.createElement("script");return _.setAttribute("src",u),_.setAttribute("crossorigin","anonymous"),new Promise(function(y){_.addEventListener("load",function(){y()},!1),_.addEventListener("error",function(){y()},!1),document.body.appendChild(_)})}function Lp(){return P(function(u){switch(u.h){case 1:return u.s=2,w(u,WebAssembly.instantiate(Pp),4);case 4:u.h=3,u.s=0;break;case 2:return u.s=0,u.l=null,u.return(!1);case 3:return u.return(!0)}})}function Ya(u){if(this.h=u,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=u&&u.locateFile||Np,typeof window=="object")var _=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")_=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=_,u.options){_=o(Object.keys(u.options));for(var y=_.next();!y.done;y=_.next()){y=y.value;var E=u.options[y].default;E!==void 0&&(this.l[y]=typeof E=="function"?E():E)}}}i=Ya.prototype,i.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function Ip(u){var _,y,E,F,V,B,X,tt,pt,vt,Ht;return P(function(Ot){switch(Ot.h){case 1:return u.ga?(_=u.h.files===void 0?[]:typeof u.h.files=="function"?u.h.files(u.l):u.h.files,w(Ot,Lp(),2)):Ot.return();case 2:if(y=Ot.i,typeof window=="object")return xu("createMediapipeSolutionsWasm",{locateFile:u.locateFile}),xu("createMediapipeSolutionsPackedAssets",{locateFile:u.locateFile}),B=_.filter(function(wt){return wt.data!==void 0}),X=_.filter(function(wt){return wt.data===void 0}),tt=Promise.all(B.map(function(wt){var Wt=vo(u,wt.url);if(wt.path!==void 0){var re=wt.path;Wt=Wt.then(function(be){return u.overrideFile(re,be),Promise.resolve(be)})}return Wt})),pt=Promise.all(X.map(function(wt){return wt.simd===void 0||wt.simd&&y||!wt.simd&&!y?Dp(u.locateFile(wt.url,u.ha)):Promise.resolve()})).then(function(){var wt,Wt,re;return P(function(be){if(be.h==1)return wt=window.createMediapipeSolutionsWasm,Wt=window.createMediapipeSolutionsPackedAssets,re=u,w(be,wt(Wt),2);re.i=be.i,be.h=0})}),vt=function(){return P(function(wt){return u.h.graph&&u.h.graph.url?wt=w(wt,vo(u,u.h.graph.url),0):(wt.h=0,wt=void 0),wt})}(),w(Ot,Promise.all([pt,tt,vt]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return E=_.filter(function(wt){return wt.simd===void 0||wt.simd&&y||!wt.simd&&!y}).map(function(wt){return u.locateFile(wt.url,u.ha)}),importScripts.apply(null,c(E)),F=u,w(Ot,createMediapipeSolutionsWasm(Module),6);case 6:F.i=Ot.i,u.m=new OffscreenCanvas(1,1),u.i.canvas=u.m,V=u.i.GL.createContext(u.m,{antialias:!1,alpha:!1,ua:typeof WebGL2RenderingContext<"u"?2:1}),u.i.GL.makeContextCurrent(V),Ot.h=4;break;case 7:if(u.m=document.createElement("canvas"),Ht=u.m.getContext("webgl2",{}),!Ht&&(Ht=u.m.getContext("webgl",{}),!Ht))return alert("Failed to create WebGL canvas context when passing video frame."),Ot.return();u.K=Ht,u.i.canvas=u.m,u.i.createContext(u.m,!0,!0,{});case 4:u.j=new u.i.SolutionWasm,u.ga=!1,Ot.h=0}})}function Op(u){var _,y,E,F,V,B,X,tt;return P(function(pt){if(pt.h==1){if(u.h.graph&&u.h.graph.url&&u.fa===u.h.graph.url)return pt.return();if(u.u=!0,!u.h.graph||!u.h.graph.url){pt.h=2;return}return u.fa=u.h.graph.url,w(pt,vo(u,u.h.graph.url),3)}for(pt.h!=2&&(_=pt.i,u.j.loadGraph(_)),y=o(Object.keys(u.D)),E=y.next();!E.done;E=y.next())F=E.value,u.j.overrideFile(F,u.D[F]);if(u.D={},u.h.listeners)for(V=o(u.h.listeners),B=V.next();!B.done;B=V.next())X=B.value,Bp(u,X);tt=u.l,u.l={},u.setOptions(tt),pt.h=0})}i.reset=function(){var u=this;return P(function(_){u.j&&(u.j.reset(),u.s={},u.v={}),_.h=0})},i.setOptions=function(u,_){var y=this;if(_=_||this.h.options){for(var E=[],F=[],V={},B=o(Object.keys(u)),X=B.next();!X.done;V={X:V.X,Y:V.Y},X=B.next())if(X=X.value,!(X in this.l&&this.l[X]===u[X])){this.l[X]=u[X];var tt=_[X];tt!==void 0&&(tt.onChange&&(V.X=tt.onChange,V.Y=u[X],E.push(function(pt){return function(){var vt;return P(function(Ht){if(Ht.h==1)return w(Ht,pt.X(pt.Y),2);vt=Ht.i,vt===!0&&(y.u=!0),Ht.h=0})}}(V))),tt.graphOptionXref&&(X=Object.assign({},{calculatorName:"",calculatorIndex:0},tt.graphOptionXref,{valueNumber:tt.type===1?u[X]:0,valueBoolean:tt.type===0?u[X]:!1,valueString:tt.type===2?u[X]:""}),F.push(X)))}(E.length!==0||F.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(F),this.F=(this.F===void 0?[]:this.F).concat(E))}};function Up(u){var _,y,E,F,V,B,X;return P(function(tt){switch(tt.h){case 1:if(!u.u)return tt.return();if(!u.F){tt.h=2;break}_=o(u.F),y=_.next();case 3:if(y.done){tt.h=5;break}return E=y.value,w(tt,E(),4);case 4:y=_.next(),tt.h=3;break;case 5:u.F=void 0;case 2:if(u.H){for(F=new u.i.GraphOptionChangeRequestList,V=o(u.H),B=V.next();!B.done;B=V.next())X=B.value,F.push_back(X);u.j.changeOptions(F),F.delete(),u.H=void 0}u.u=!1,tt.h=0}})}i.initialize=function(){var u=this;return P(function(_){return _.h==1?w(_,Ip(u),2):_.h!=3?w(_,Op(u),3):w(_,Up(u),0)})};function vo(u,_){var y,E;return P(function(F){return _ in u.L?F.return(u.L[_]):(y=u.locateFile(_,""),E=fetch(y).then(function(V){return V.arrayBuffer()}),u.L[_]=E,F.return(E))})}i.overrideFile=function(u,_){this.j?this.j.overrideFile(u,_):this.D[u]=_},i.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},i.send=function(u,_){var y=this,E,F,V,B,X,tt,pt,vt,Ht;return P(function(Ot){switch(Ot.h){case 1:return y.h.inputs?(E=1e3*(_??performance.now()),w(Ot,y.I,2)):Ot.return();case 2:return w(Ot,y.initialize(),3);case 3:for(F=new y.i.PacketDataList,V=o(Object.keys(u)),B=V.next();!B.done;B=V.next())if(X=B.value,tt=y.h.inputs[X]){t:{var wt=u[X];switch(tt.type){case"video":var Wt=y.s[tt.stream];if(Wt||(Wt=new ja(y.i,y.K),y.s[tt.stream]=Wt),Wt.m===0&&(Wt.m=Wt.i.createTexture()),typeof HTMLVideoElement<"u"&&wt instanceof HTMLVideoElement)var re=wt.videoWidth,be=wt.videoHeight;else typeof HTMLImageElement<"u"&&wt instanceof HTMLImageElement?(re=wt.naturalWidth,be=wt.naturalHeight):(re=wt.width,be=wt.height);be={glName:Wt.m,width:re,height:be},re=Wt.h,re.canvas.width=be.width,re.canvas.height=be.height,re.activeTexture(re.TEXTURE0),Wt.i.bindTexture2d(Wt.m),re.texImage2D(re.TEXTURE_2D,0,re.RGBA,re.RGBA,re.UNSIGNED_BYTE,wt),Wt.i.bindTexture2d(0),Wt=be;break t;case"detections":for(Wt=y.s[tt.stream],Wt||(Wt=new Rp(y.i),y.s[tt.stream]=Wt),Wt.data||(Wt.data=new Wt.h.DetectionListData),Wt.data.reset(wt.length),be=0;be<wt.length;++be){re=wt[be];var Ee=Wt.data,sn=Ee.setBoundingBox,Un=be,Mn=re.la,de=new _o;if(he(de,1,Mn.ra),he(de,2,Mn.sa),he(de,3,Mn.height),he(de,4,Mn.width),he(de,5,Mn.rotation),Ct(de,6,Mn.pa),Mn=de.l(),sn.call(Ee,Un,Mn),re.ea)for(Ee=0;Ee<re.ea.length;++Ee){de=re.ea[Ee],sn=Wt.data,Un=sn.addNormalizedLandmark,Mn=be,de=Object.assign({},de,{visibility:de.visibility?de.visibility:0});var rn=new Ls;he(rn,1,de.x),he(rn,2,de.y),he(rn,3,de.z),de.visibility&&he(rn,4,de.visibility),de=rn.l(),Un.call(sn,Mn,de)}if(re.ba)for(Ee=0;Ee<re.ba.length;++Ee)sn=Wt.data,Un=sn.addClassification,Mn=be,de=re.ba[Ee],rn=new Ds,he(rn,2,de.score),de.index&&Ct(rn,1,de.index),de.label&&Ct(rn,3,de.label),de.displayName&&Ct(rn,4,de.displayName),de=rn.l(),Un.call(sn,Mn,de)}Wt=Wt.data;break t;default:Wt={}}}switch(pt=Wt,vt=tt.stream,tt.type){case"video":F.pushTexture2d(Object.assign({},pt,{stream:vt,timestamp:E}));break;case"detections":Ht=pt,Ht.stream=vt,Ht.timestamp=E,F.pushDetectionList(Ht);break;default:throw Error("Unknown input config type: '"+tt.type+"'")}}return y.j.send(F),w(Ot,y.I,4);case 4:F.delete(),Ot.h=0}})};function Fp(u,_,y){var E,F,V,B,X,tt,pt,vt,Ht,Ot,wt,Wt,re,be;return P(function(Ee){switch(Ee.h){case 1:if(!y)return Ee.return(_);for(E={},F=0,V=o(Object.keys(y)),B=V.next();!B.done;B=V.next())X=B.value,tt=y[X],typeof tt!="string"&&tt.type==="texture"&&_[tt.stream]!==void 0&&++F;1<F&&(u.M=!1),pt=o(Object.keys(y)),B=pt.next();case 2:if(B.done){Ee.h=4;break}if(vt=B.value,Ht=y[vt],typeof Ht=="string")return re=E,be=vt,w(Ee,kp(u,vt,_[Ht]),14);if(Ot=_[Ht.stream],Ht.type==="detection_list"){if(Ot){for(var sn=Ot.getRectList(),Un=Ot.getLandmarksList(),Mn=Ot.getClassificationsList(),de=[],rn=0;rn<sn.size();++rn){var Ui=Ap(sn.get(rn)),Vp=Ge(Ui,1),zp=Ge(Ui,2),Gp=Ge(Ui,3),Hp=Ge(Ui,4),Wp=Ge(Ui,5,0),xo=void 0;xo=xo===void 0?0:xo,Ui={la:{ra:Vp,sa:zp,height:Gp,width:Hp,rotation:Wp,pa:Ie(xt(Ui,6),xo)},ea:Yt(du(Un.get(rn)),Ls,1).map(gu),ba:mu(lu(Mn.get(rn)))},de.push(Ui)}sn=de}else sn=[];E[vt]=sn,Ee.h=7;break}if(Ht.type==="proto_list"){if(Ot){for(sn=Array(Ot.size()),Un=0;Un<Ot.size();Un++)sn[Un]=Ot.get(Un);Ot.delete()}else sn=[];E[vt]=sn,Ee.h=7;break}if(Ot===void 0){Ee.h=3;break}if(Ht.type==="float_list"){E[vt]=Ot,Ee.h=7;break}if(Ht.type==="proto"){E[vt]=Ot,Ee.h=7;break}if(Ht.type!=="texture")throw Error("Unknown output config type: '"+Ht.type+"'");return wt=u.v[vt],wt||(wt=new ja(u.i,u.K),u.v[vt]=wt),w(Ee,vu(wt,Ot,u.M),13);case 13:Wt=Ee.i,E[vt]=Wt;case 7:Ht.transform&&E[vt]&&(E[vt]=Ht.transform(E[vt])),Ee.h=3;break;case 14:re[be]=Ee.i;case 3:B=pt.next(),Ee.h=2;break;case 4:return Ee.return(E)}})}function kp(u,_,y){var E;return P(function(F){return typeof y=="number"||y instanceof Uint8Array||y instanceof u.i.Uint8BlobList?F.return(y):y instanceof u.i.Texture2dDataOut?(E=u.v[_],E||(E=new ja(u.i,u.K),u.v[_]=E),F.return(vu(E,y,u.M))):F.return(void 0)})}function Bp(u,_){for(var y=_.name||"$",E=[].concat(c(_.wants)),F=new u.i.StringList,V=o(_.wants),B=V.next();!B.done;B=V.next())F.push_back(B.value);V=u.i.PacketListener.implement({onResults:function(X){for(var tt={},pt=0;pt<_.wants.length;++pt)tt[E[pt]]=X.get(pt);var vt=u.listeners[y];vt&&(u.I=Fp(u,tt,_.outs).then(function(Ht){Ht=vt(Ht);for(var Ot=0;Ot<_.wants.length;++Ot){var wt=tt[E[Ot]];typeof wt=="object"&&wt.hasOwnProperty&&wt.hasOwnProperty("delete")&&wt.delete()}Ht&&(u.I=Ht)}))}}),u.j.attachMultiListener(F,V),F.delete()}i.onResults=function(u,_){this.listeners[_||"$"]=u},z("Solution",Ya),z("OptionType",{BOOL:0,NUMBER:1,ta:2,0:"BOOL",1:"NUMBER",2:"STRING"});function yu(u){return u===void 0&&(u=0),u===1?"hand_landmark_full.tflite":"hand_landmark_lite.tflite"}function Su(u){var _=this;u=u||{},this.h=new Ya({locateFile:u.locateFile,files:function(y){return[{url:"hands_solution_packed_assets_loader.js"},{simd:!1,url:"hands_solution_wasm_bin.js"},{simd:!0,url:"hands_solution_simd_wasm_bin.js"},{data:!0,url:yu(y.modelComplexity)}]},graph:{url:"hands.binarypb"},inputs:{image:{type:"video",stream:"input_frames_gpu"}},listeners:[{wants:["multi_hand_landmarks","multi_hand_world_landmarks","image_transformed","multi_handedness"],outs:{image:"image_transformed",multiHandLandmarks:{type:"proto_list",stream:"multi_hand_landmarks",transform:_u},multiHandWorldLandmarks:{type:"proto_list",stream:"multi_hand_world_landmarks",transform:_u},multiHandedness:{type:"proto_list",stream:"multi_handedness",transform:function(y){return y.map(function(E){return mu(lu(E))[0]})}}}}],options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumHands:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculator",fieldName:"int_value"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(y){var E,F,V;return P(function(B){return B.h==1?(E=yu(y),F="third_party/mediapipe/modules/hand_landmark/"+E,w(B,vo(_.h,E),2)):(V=B.i,_.h.overrideFile(F,V),B.return(!0))})}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}}}})}i=Su.prototype,i.close=function(){return this.h.close(),Promise.resolve()},i.onResults=function(u){this.h.onResults(u)},i.initialize=function(){var u=this;return P(function(_){return w(_,u.h.initialize(),0)})},i.reset=function(){this.h.reset()},i.send=function(u){var _=this;return P(function(y){return w(y,_.h.send(u),0)})},i.setOptions=function(u){this.h.setOptions(u)},z("Hands",Su),z("HAND_CONNECTIONS",[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]]),z("VERSION","0.4.1675469240")}).call(ar);var Nb={};(function(){function i(S){var P=0;return function(){return P<S.length?{done:!1,value:S[P++]}:{done:!0}}}var t=typeof Object.defineProperties=="function"?Object.defineProperty:function(S,P,O){return S==Array.prototype||S==Object.prototype||(S[P]=O.value),S};function e(S){S=[typeof globalThis=="object"&&globalThis,S,typeof window=="object"&&window,typeof self=="object"&&self,typeof ar=="object"&&ar];for(var P=0;P<S.length;++P){var O=S[P];if(O&&O.Math==Math)return O}throw Error("Cannot find global object")}var n=e(this);function s(S,P){if(P)t:{var O=n;S=S.split(".");for(var G=0;G<S.length-1;G++){var U=S[G];if(!(U in O))break t;O=O[U]}S=S[S.length-1],G=O[S],P=P(G),P!=G&&P!=null&&t(O,S,{configurable:!0,writable:!0,value:P})}}s("Symbol",function(S){function P(z){if(this instanceof P)throw new TypeError("Symbol is not a constructor");return new O(G+(z||"")+"_"+U++,z)}function O(z,k){this.g=z,t(this,"description",{configurable:!0,writable:!0,value:k})}if(S)return S;O.prototype.toString=function(){return this.g};var G="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",U=0;return P}),s("Symbol.iterator",function(S){if(S)return S;S=Symbol("Symbol.iterator");for(var P="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),O=0;O<P.length;O++){var G=n[P[O]];typeof G=="function"&&typeof G.prototype[S]!="function"&&t(G.prototype,S,{configurable:!0,writable:!0,value:function(){return r(i(this))}})}return S});function r(S){return S={next:S},S[Symbol.iterator]=function(){return this},S}function a(S){var P=typeof Symbol<"u"&&Symbol.iterator&&S[Symbol.iterator];return P?P.call(S):{next:i(S)}}function o(){this.i=!1,this.g=null,this.o=void 0,this.j=1,this.m=0,this.h=null}function c(S){if(S.i)throw new TypeError("Generator is already running");S.i=!0}o.prototype.l=function(S){this.o=S};function l(S,P){S.h={F:P,G:!0},S.j=S.m}o.prototype.return=function(S){this.h={return:S},this.j=this.m};function h(S){this.g=new o,this.h=S}function d(S,P){c(S.g);var O=S.g.g;return O?f(S,"return"in O?O.return:function(G){return{value:G,done:!0}},P,S.g.return):(S.g.return(P),m(S))}function f(S,P,O,G){try{var U=P.call(S.g.g,O);if(!(U instanceof Object))throw new TypeError("Iterator result "+U+" is not an object");if(!U.done)return S.g.i=!1,U;var z=U.value}catch(k){return S.g.g=null,l(S.g,k),m(S)}return S.g.g=null,G.call(S.g,z),m(S)}function m(S){for(;S.g.j;)try{var P=S.h(S.g);if(P)return S.g.i=!1,{value:P.value,done:!1}}catch(O){S.g.o=void 0,l(S.g,O)}if(S.g.i=!1,S.g.h){if(P=S.g.h,S.g.h=null,P.G)throw P.F;return{value:P.return,done:!0}}return{value:void 0,done:!0}}function v(S){this.next=function(P){return c(S.g),S.g.g?P=f(S,S.g.g.next,P,S.g.l):(S.g.l(P),P=m(S)),P},this.throw=function(P){return c(S.g),S.g.g?P=f(S,S.g.g.throw,P,S.g.l):(l(S.g,P),P=m(S)),P},this.return=function(P){return d(S,P)},this[Symbol.iterator]=function(){return this}}function x(S){function P(G){return S.next(G)}function O(G){return S.throw(G)}return new Promise(function(G,U){function z(k){k.done?G(k.value):Promise.resolve(k.value).then(P,O).then(z,U)}z(S.next())})}s("Promise",function(S){function P(k){this.h=0,this.i=void 0,this.g=[],this.o=!1;var H=this.j();try{k(H.resolve,H.reject)}catch(j){H.reject(j)}}function O(){this.g=null}function G(k){return k instanceof P?k:new P(function(H){H(k)})}if(S)return S;O.prototype.h=function(k){if(this.g==null){this.g=[];var H=this;this.i(function(){H.l()})}this.g.push(k)};var U=n.setTimeout;O.prototype.i=function(k){U(k,0)},O.prototype.l=function(){for(;this.g&&this.g.length;){var k=this.g;this.g=[];for(var H=0;H<k.length;++H){var j=k[H];k[H]=null;try{j()}catch(Y){this.j(Y)}}}this.g=null},O.prototype.j=function(k){this.i(function(){throw k})},P.prototype.j=function(){function k(Y){return function($){j||(j=!0,Y.call(H,$))}}var H=this,j=!1;return{resolve:k(this.A),reject:k(this.l)}},P.prototype.A=function(k){if(k===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(k instanceof P)this.C(k);else{t:switch(typeof k){case"object":var H=k!=null;break t;case"function":H=!0;break t;default:H=!1}H?this.v(k):this.m(k)}},P.prototype.v=function(k){var H=void 0;try{H=k.then}catch(j){this.l(j);return}typeof H=="function"?this.D(H,k):this.m(k)},P.prototype.l=function(k){this.u(2,k)},P.prototype.m=function(k){this.u(1,k)},P.prototype.u=function(k,H){if(this.h!=0)throw Error("Cannot settle("+k+", "+H+"): Promise already settled in state"+this.h);this.h=k,this.i=H,this.h===2&&this.B(),this.H()},P.prototype.B=function(){var k=this;U(function(){if(k.I()){var H=n.console;typeof H<"u"&&H.error(k.i)}},1)},P.prototype.I=function(){if(this.o)return!1;var k=n.CustomEvent,H=n.Event,j=n.dispatchEvent;return typeof j>"u"?!0:(typeof k=="function"?k=new k("unhandledrejection",{cancelable:!0}):typeof H=="function"?k=new H("unhandledrejection",{cancelable:!0}):(k=n.document.createEvent("CustomEvent"),k.initCustomEvent("unhandledrejection",!1,!0,k)),k.promise=this,k.reason=this.i,j(k))},P.prototype.H=function(){if(this.g!=null){for(var k=0;k<this.g.length;++k)z.h(this.g[k]);this.g=null}};var z=new O;return P.prototype.C=function(k){var H=this.j();k.s(H.resolve,H.reject)},P.prototype.D=function(k,H){var j=this.j();try{k.call(H,j.resolve,j.reject)}catch(Y){j.reject(Y)}},P.prototype.then=function(k,H){function j(rt,Q){return typeof rt=="function"?function(ot){try{Y(rt(ot))}catch(ct){$(ct)}}:Q}var Y,$,st=new P(function(rt,Q){Y=rt,$=Q});return this.s(j(k,Y),j(H,$)),st},P.prototype.catch=function(k){return this.then(void 0,k)},P.prototype.s=function(k,H){function j(){switch(Y.h){case 1:k(Y.i);break;case 2:H(Y.i);break;default:throw Error("Unexpected state: "+Y.h)}}var Y=this;this.g==null?z.h(j):this.g.push(j),this.o=!0},P.resolve=G,P.reject=function(k){return new P(function(H,j){j(k)})},P.race=function(k){return new P(function(H,j){for(var Y=a(k),$=Y.next();!$.done;$=Y.next())G($.value).s(H,j)})},P.all=function(k){var H=a(k),j=H.next();return j.done?G([]):new P(function(Y,$){function st(ot){return function(ct){rt[ot]=ct,Q--,Q==0&&Y(rt)}}var rt=[],Q=0;do rt.push(void 0),Q++,G(j.value).s(st(rt.length-1),$),j=H.next();while(!j.done)})},P});var g=typeof Object.assign=="function"?Object.assign:function(S,P){for(var O=1;O<arguments.length;O++){var G=arguments[O];if(G)for(var U in G)Object.prototype.hasOwnProperty.call(G,U)&&(S[U]=G[U])}return S};s("Object.assign",function(S){return S||g});var p=this||self,b={facingMode:"user",width:640,height:480};function M(S,P){this.video=S,this.i=0,this.h=Object.assign(Object.assign({},b),P)}M.prototype.stop=function(){var S=this,P,O,G,U;return x(new v(new h(function(z){if(S.g){for(P=S.g.getTracks(),O=a(P),G=O.next();!G.done;G=O.next())U=G.value,U.stop();S.g=void 0}z.j=0})))},M.prototype.start=function(){var S=this,P;return x(new v(new h(function(O){return navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||alert("No navigator.mediaDevices.getUserMedia exists."),P=S.h,O.return(navigator.mediaDevices.getUserMedia({video:{facingMode:P.facingMode,width:P.width,height:P.height}}).then(function(G){A(S,G)}).catch(function(G){var U="Failed to acquire camera feed: "+G;throw console.error(U),alert(U),G}))})))};function w(S){window.requestAnimationFrame(function(){R(S)})}function A(S,P){S.g=P,S.video.srcObject=P,S.video.onloadedmetadata=function(){S.video.play(),w(S)}}function R(S){var P=null;S.video.paused||S.video.currentTime===S.i||(S.i=S.video.currentTime,P=S.h.onFrame()),P?P.then(function(){w(S)}):w(S)}var C=["Camera"],D=p;C[0]in D||typeof D.execScript>"u"||D.execScript("var "+C[0]);for(var T;C.length&&(T=C.shift());)C.length||M===void 0?D[T]&&D[T]!==Object.prototype[T]?D=D[T]:D=D[T]={}:D[T]=M}).call(ar);const Yn={distance:(i,t)=>Math.hypot(i.x-t.x,i.y-t.y),calculatePinch:i=>{const t=Yn.distance(i[0],i[5]),e=Yn.distance(i[4],i[8]),n=t*1.2,s=t*.1;let r=1-(e-s)/(n-s);return Math.max(0,Math.min(1,r))},calculateRotation:i=>{const t=i[0],e=i[5];return Math.atan2(e.y-t.y,e.x-t.x)},calculateFist:i=>{const t=Yn.distance(i[0],i[5]),e=[8,12,16,20];let n=0;e.forEach(c=>{n+=Yn.distance(i[c],i[0])});const s=n/4,r=t*1.8,a=t*.8;let o=1-(s-a)/(r-a);return Math.max(0,Math.min(1,o))},detectOK:i=>{const t=Yn.distance(i[0],i[5]),n=Yn.distance(i[4],i[8])<t*.3,s=[12,16,20];let r=0;return s.forEach(a=>{Yn.distance(i[a],i[0])>t*1.3&&r++}),n&&r>=2}};class Db{constructor(t){this.video=t,this.ready=!1,this.state={right:{pinch:0,rotate:0,fist:0,present:!1},left:{isOK:!1,present:!1}},this._raw={r_pinch:0,r_rotate:0,r_fist:0},this.hands=new Pb.Hands({locateFile:e=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${e}`}),this.hands.setOptions({maxNumHands:2,modelComplexity:1,minDetectionConfidence:.5,minTrackingConfidence:.5}),this.hands.onResults(this._process.bind(this)),this.camera=new Nb.Camera(this.video,{onFrame:async()=>{await this.hands.send({image:this.video})},width:640,height:480})}start(){this.camera.start(),console.log("Camera Started")}_process(t){if(this.ready=!0,this.state.right.present=!1,this.state.left.present=!1,this.state.left.isOK=!1,t.multiHandLandmarks)for(let e=0;e<t.multiHandLandmarks.length;e++){const n=t.multiHandLandmarks[e];t.multiHandedness[e].label==="Right"?this._updateLeft(n):this._updateRight(n)}}_updateRight(t){this.state.right.present=!0;const e=Yn.calculatePinch(t),n=Yn.calculateRotation(t),s=Yn.calculateFist(t);this._raw.r_pinch+=(e-this._raw.r_pinch)*.2,this._raw.r_fist+=(s-this._raw.r_fist)*.2;let r=n-this._raw.r_rotate;for(;r>Math.PI;)r-=2*Math.PI;for(;r<-Math.PI;)r+=2*Math.PI;this._raw.r_rotate+=r*.2,this.state.right.pinch=this._raw.r_pinch,this.state.right.rotate=this._raw.r_rotate,this.state.right.fist=this._raw.r_fist,this.state.right.x=(t[0].x-.5)*2,this.state.right.y=-(t[0].y-.5)*2}_updateLeft(t){this.state.left.present=!0,this.state.left.isOK=Yn.detectOK(t)}getInput(){return this.state}}class Lb{constructor(){this.ui=new Xp,this.audio=new Rb,this.world=new Fy(document.getElementById("canvas-container")),this.world.setUI(this.ui),this.tracker=new Db(document.getElementById("video-element")),document.body.addEventListener("click",()=>{this.audio.ready||this.audio.init(),this.tracker.start()},{once:!0}),this.lastTime=performance.now(),this.loop()}loop(){requestAnimationFrame(this.loop.bind(this));const t=performance.now(),e=(t-this.lastTime)/1e3;this.lastTime=t;const n=this.tracker.getInput();if(this.world.update(e,n),n.right.present||n.left.present){const s={FPS:(1/e).toFixed(0),"R Pinch":n.right.pinch.toFixed(2),"R Fist":n.right.fist.toFixed(2),"R Rot":n.right.rotate.toFixed(2),"L OK":n.left.isOK};this.ui.updateDebug(s)}n.left.isOK?this.ui.setReticleActive(!0,!1):this.ui.setReticleActive(!1,!1)}}new Lb;
