(()=>{var Mu=0,Qc=1,bu=2;var lh=1,Sc=2,wn=3,mn=0,Se=1,ze=2,qn=0,fn=1,In=2,tl=3,el=4,Su=5,oi=100,Eu=101,wu=102,Tu=103,Au=104,Ru=200,Cu=201,Iu=202,Pu=203,Ka=204,ja=205,Du=206,Lu=207,Uu=208,Nu=209,Fu=210,Ou=211,Bu=212,ku=213,zu=214,Qa=0,to=1,eo=2,Gi=3,no=4,io=5,so=6,ro=7,hh=0,Hu=1,Vu=2,Yn=0,Gu=1,Wu=2,Xu=3,qu=4,Yu=5,Zu=6,$u=7;var uh=300,Wi=301,Xi=302,ao=303,oo=304,jr=306,ui=1e3,li=1001,co=1002,Ne=1003,Ju=1004;var Hs=1005;var dn=1006,xa=1007;var hi=1008;var Pn=1009,dh=1010,fh=1011,Ss=1012,Ec=1013,di=1014,An=1015,Ns=1016,wc=1017,Tc=1018,qi=1020,ph=35902,mh=1021,gh=1022,on=1023,xh=1024,_h=1025,zi=1026,Yi=1027,Qr=1028,Ac=1029,yh=1030,Rc=1031;var Cc=1033,mr=33776,gr=33777,xr=33778,_r=33779,lo=35840,ho=35841,uo=35842,fo=35843,po=36196,mo=37492,go=37496,xo=37808,_o=37809,yo=37810,vo=37811,Mo=37812,bo=37813,So=37814,Eo=37815,wo=37816,To=37817,Ao=37818,Ro=37819,Co=37820,Io=37821,yr=36492,Po=36494,Do=36495,vh=36283,Lo=36284,Uo=36285,No=36286;var vr=2300,Fo=2301,_a=2302,nl=2400,il=2401,sl=2402;var Ku=3200,ju=3201;var Mh=0,Qu=1,Wn="",ke="srgb",ns="srgb-linear",ta="linear",ae="srgb";var vi=7680;var rl=519,td=512,ed=513,nd=514,bh=515,id=516,sd=517,rd=518,ad=519,Oo=35044;var al="300 es",Rn=2e3,Mr=2001,Zn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ol=1234567,xs=Math.PI/180,Es=180/Math.PI;function pn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ae[i&255]+Ae[i>>8&255]+Ae[i>>16&255]+Ae[i>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]).toLowerCase()}function Ee(i,t,e){return Math.max(t,Math.min(e,i))}function Ic(i,t){return(i%t+t)%t}function od(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function cd(i,t,e){return i!==t?(e-i)/(t-i):0}function _s(i,t,e){return(1-e)*i+e*t}function ld(i,t,e,n){return _s(i,t,1-Math.exp(-e*n))}function hd(i,t=1){return t-Math.abs(Ic(i,t*2)-t)}function ud(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function dd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function fd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function pd(i,t){return i+Math.random()*(t-i)}function md(i){return i*(.5-Math.random())}function gd(i){i!==void 0&&(ol=i);let t=ol+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xd(i){return i*xs}function _d(i){return i*Es}function yd(i){return(i&i-1)===0&&i!==0}function vd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Md(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function bd(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*m,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*m,o*l);break;case"ZYZ":i.set(c*m,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function an(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Fs={DEG2RAD:xs,RAD2DEG:Es,generateUUID:pn,clamp:Ee,euclideanModulo:Ic,mapLinear:od,inverseLerp:cd,lerp:_s,damp:ld,pingpong:hd,smoothstep:ud,smootherstep:dd,randInt:fd,randFloat:pd,randFloatSpread:md,seededRandom:gd,degToRad:xd,radToDeg:_d,isPowerOfTwo:yd,ceilPowerOfTwo:vd,floorPowerOfTwo:Md,setQuaternionFromProperEuler:bd,normalize:se,denormalize:an},st=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ht=class i{constructor(t,e,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],b=s[1],y=s[4],_=s[7],P=s[2],R=s[5],I=s[8];return r[0]=a*x+o*b+c*P,r[3]=a*g+o*y+c*R,r[6]=a*p+o*_+c*I,r[1]=l*x+h*b+u*P,r[4]=l*g+h*y+u*R,r[7]=l*p+h*_+u*I,r[2]=d*x+f*b+m*P,r[5]=d*g+f*y+m*R,r[8]=d*p+f*_+m*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ya.makeScale(t,e)),this}rotate(t){return this.premultiply(ya.makeRotation(-t)),this}translate(t,e){return this.premultiply(ya.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ya=new Ht;function Sh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sd(){let i=br("canvas");return i.style.display="block",i}var cl={};function ms(i){i in cl||(cl[i]=!0,console.warn(i))}function Ed(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function wd(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Td(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var $t={enabled:!0,workingColorSpace:ns,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ae&&(i.r=Cn(i.r),i.g=Cn(i.g),i.b=Cn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ae&&(i.r=Hi(i.r),i.g=Hi(i.g),i.b=Hi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Wn?ta:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ll=[.64,.33,.3,.6,.15,.06],hl=[.2126,.7152,.0722],ul=[.3127,.329],dl=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fl=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$t.define({[ns]:{primaries:ll,whitePoint:ul,transfer:ta,toXYZ:dl,fromXYZ:fl,luminanceCoefficients:hl,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:ll,whitePoint:ul,transfer:ae,toXYZ:dl,fromXYZ:fl,luminanceCoefficients:hl,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}});var Mi,Bo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Mi===void 0&&(Mi=br("canvas")),Mi.width=t.width,Mi.height=t.height;let n=Mi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Mi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=br("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Cn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Cn(e[n]/255)*255):e[n]=Cn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ad=0,Sr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=pn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(va(s[a].image)):r.push(va(s[a]))}else r=va(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Rd=0,He=class i extends Zn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=li,s=li,r=dn,a=hi,o=on,c=Pn,l=i.DEFAULT_ANISOTROPY,h=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=pn(),this.name="",this.source=new Sr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ui:t.x=t.x-Math.floor(t.x);break;case li:t.x=t.x<0?0:1;break;case co:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ui:t.y=t.y-Math.floor(t.y);break;case li:t.y=t.y<0?0:1;break;case co:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=uh;He.DEFAULT_ANISOTROPY=1;var oe=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,_=(f+1)/2,P=(p+1)/2,R=(h+d)/4,I=(u+x)/4,D=(m+g)/4;return y>_&&y>P?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=R/n,r=I/n):_>P?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=R/s,r=D/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=I/r,s=D/r),this.set(n,s,r,e),this}let b=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(u-x)/b,this.z=(d-h)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ko=class extends Zn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new He(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Sr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dn=class extends ko{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Er=class extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var zo=class extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $n=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],x=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=x;return}if(u!==x||c!==d||l!==f||h!==m){let g=1-o,p=c*d+l*f+h*m+u*x,b=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let P=Math.sqrt(y),R=Math.atan2(P,p*b);g=Math.sin(g*R)/P,o=Math.sin(o*R)/P}let _=o*b;if(c=c*g+d*_,l=l*g+f*_,h=h*g+m*_,u=u*g+x*_,g===1-o){let P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-o*f,t[e+2]=l*m+h*f+o*d-c*u,t[e+3]=h*m-o*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ma.copy(this).projectOnVector(t),this.sub(Ma)}reflect(t){return this.sub(Ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ma=new T,pl=new $n,fi=class{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,nn):nn.fromBufferAttribute(r,a),nn.applyMatrix4(t.matrixWorld),this.expandByPoint(nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vs.copy(n.boundingBox)),Vs.applyMatrix4(t.matrixWorld),this.union(Vs)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,nn),nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(os),Gs.subVectors(this.max,os),bi.subVectors(t.a,os),Si.subVectors(t.b,os),Ei.subVectors(t.c,os),Bn.subVectors(Si,bi),kn.subVectors(Ei,Si),ti.subVectors(bi,Ei);let e=[0,-Bn.z,Bn.y,0,-kn.z,kn.y,0,-ti.z,ti.y,Bn.z,0,-Bn.x,kn.z,0,-kn.x,ti.z,0,-ti.x,-Bn.y,Bn.x,0,-kn.y,kn.x,0,-ti.y,ti.x,0];return!ba(e,bi,Si,Ei,Gs)||(e=[1,0,0,0,1,0,0,0,1],!ba(e,bi,Si,Ei,Gs))?!1:(Ws.crossVectors(Bn,kn),e=[Ws.x,Ws.y,Ws.z],ba(e,bi,Si,Ei,Gs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},vn=[new T,new T,new T,new T,new T,new T,new T,new T],nn=new T,Vs=new fi,bi=new T,Si=new T,Ei=new T,Bn=new T,kn=new T,ti=new T,os=new T,Gs=new T,Ws=new T,ei=new T;function ba(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ei.fromArray(i,r);let o=s.x*Math.abs(ei.x)+s.y*Math.abs(ei.y)+s.z*Math.abs(ei.z),c=t.dot(ei),l=e.dot(ei),h=n.dot(ei);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Cd=new fi,cs=new T,Sa=new T,ws=class{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Cd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cs.subVectors(t,this.center);let e=cs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(cs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cs.copy(t.center).add(Sa)),this.expandByPoint(cs.copy(t.center).sub(Sa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Mn=new T,Ea=new T,Xs=new T,zn=new T,wa=new T,qs=new T,Ta=new T,wr=class{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.origin).addScaledVector(this.direction,e),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ea.copy(t).add(e).multiplyScalar(.5),Xs.copy(e).sub(t).normalize(),zn.copy(this.origin).sub(Ea);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Xs),o=zn.dot(this.direction),c=-zn.dot(Xs),l=zn.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*c-o,d=a*o-c,m=r*h,u>=0)if(d>=-m)if(d<=m){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ea).addScaledVector(Xs,d),f}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);let n=Mn.dot(this.direction),s=Mn.dot(Mn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,n,s,r){wa.subVectors(e,t),qs.subVectors(n,t),Ta.crossVectors(wa,qs);let a=this.direction.dot(Ta),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zn.subVectors(this.origin,t);let c=o*this.direction.dot(qs.crossVectors(zn,qs));if(c<0)return null;let l=o*this.direction.dot(wa.cross(zn));if(l<0||c+l>a)return null;let h=-o*zn.dot(Ta);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},de=class i{constructor(t,e,n,s,r,a,o,c,l,h,u,d,f,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,d,f,m,x,g)}set(t,e,n,s,r,a,o,c,l,h,u,d,f,m,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/wi.setFromMatrixColumn(t,0).length(),r=1/wi.setFromMatrixColumn(t,1).length(),a=1/wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,f=a*u,m=o*h,x=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-x*l,e[9]=-o*c,e[2]=x-d*l,e[6]=m+f*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,m=l*h,x=l*u;e[0]=d+x*o,e[4]=m*o-f,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-m,e[6]=x+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,m=l*h,x=l*u;e[0]=d-x*o,e[4]=-a*u,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,f=a*u,m=o*h,x=o*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=f*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,f=a*l,m=o*c,x=o*l;e[0]=c*h,e[4]=x-d*u,e[8]=m*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-x*u}else if(t.order==="XZY"){let d=a*c,f=a*l,m=o*c,x=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=a*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=o*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Id,t,Pd)}lookAt(t,e,n){let s=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),Hn.crossVectors(n,Ge),Hn.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),Hn.crossVectors(n,Ge)),Hn.normalize(),Ys.crossVectors(Ge,Hn),s[0]=Hn.x,s[4]=Ys.x,s[8]=Ge.x,s[1]=Hn.y,s[5]=Ys.y,s[9]=Ge.y,s[2]=Hn.z,s[6]=Ys.z,s[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],b=n[3],y=n[7],_=n[11],P=n[15],R=s[0],I=s[4],D=s[8],E=s[12],M=s[1],C=s[5],B=s[9],F=s[13],H=s[2],Z=s[6],V=s[10],tt=s[14],G=s[3],ot=s[7],mt=s[11],bt=s[15];return r[0]=a*R+o*M+c*H+l*G,r[4]=a*I+o*C+c*Z+l*ot,r[8]=a*D+o*B+c*V+l*mt,r[12]=a*E+o*F+c*tt+l*bt,r[1]=h*R+u*M+d*H+f*G,r[5]=h*I+u*C+d*Z+f*ot,r[9]=h*D+u*B+d*V+f*mt,r[13]=h*E+u*F+d*tt+f*bt,r[2]=m*R+x*M+g*H+p*G,r[6]=m*I+x*C+g*Z+p*ot,r[10]=m*D+x*B+g*V+p*mt,r[14]=m*E+x*F+g*tt+p*bt,r[3]=b*R+y*M+_*H+P*G,r[7]=b*I+y*C+_*Z+P*ot,r[11]=b*D+y*B+_*V+P*mt,r[15]=b*E+y*F+_*tt+P*bt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*f-n*c*f)+x*(+e*c*f-e*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+g*(+e*l*u-e*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-s*o*h-e*c*u+e*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],x=t[13],g=t[14],p=t[15],b=u*g*l-x*d*l+x*c*f-o*g*f-u*c*p+o*d*p,y=m*d*l-h*g*l-m*c*f+a*g*f+h*c*p-a*d*p,_=h*x*l-m*u*l+m*o*f-a*x*f-h*o*p+a*u*p,P=m*u*c-h*x*c-m*o*d+a*x*d+h*o*g-a*u*g,R=e*b+n*y+s*_+r*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/R;return t[0]=b*I,t[1]=(x*d*r-u*g*r-x*s*f+n*g*f+u*s*p-n*d*p)*I,t[2]=(o*g*r-x*c*r+x*s*l-n*g*l-o*s*p+n*c*p)*I,t[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*f-n*c*f)*I,t[4]=y*I,t[5]=(h*g*r-m*d*r+m*s*f-e*g*f-h*s*p+e*d*p)*I,t[6]=(m*c*r-a*g*r-m*s*l+e*g*l+a*s*p-e*c*p)*I,t[7]=(a*d*r-h*c*r+h*s*l-e*d*l-a*s*f+e*c*f)*I,t[8]=_*I,t[9]=(m*u*r-h*x*r-m*n*f+e*x*f+h*n*p-e*u*p)*I,t[10]=(a*x*r-m*o*r+m*n*l-e*x*l-a*n*p+e*o*p)*I,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*f-e*o*f)*I,t[12]=P*I,t[13]=(h*x*s-m*u*s+m*n*d-e*x*d-h*n*g+e*u*g)*I,t[14]=(m*o*s-a*x*s-m*n*c+e*x*c+a*n*g-e*o*g)*I,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*d+e*o*d)*I,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,m=r*u,x=a*h,g=a*u,p=o*u,b=c*l,y=c*h,_=c*u,P=n.x,R=n.y,I=n.z;return s[0]=(1-(x+p))*P,s[1]=(f+_)*P,s[2]=(m-y)*P,s[3]=0,s[4]=(f-_)*R,s[5]=(1-(d+p))*R,s[6]=(g+b)*R,s[7]=0,s[8]=(m+y)*I,s[9]=(g-b)*I,s[10]=(1-(d+x))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=wi.set(s[0],s[1],s[2]).length(),a=wi.set(s[4],s[5],s[6]).length(),o=wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],sn.copy(this);let l=1/r,h=1/a,u=1/o;return sn.elements[0]*=l,sn.elements[1]*=l,sn.elements[2]*=l,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=u,sn.elements[9]*=u,sn.elements[10]*=u,e.setFromRotationMatrix(sn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Rn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),f,m;if(o===Rn)f=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Mr)f=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Rn){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),d=(e+t)*l,f=(n+s)*h,m,x;if(o===Rn)m=(a+r)*u,x=-2*u;else if(o===Mr)m=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},wi=new T,sn=new de,Id=new T(0,0,0),Pd=new T(1,1,1),Hn=new T,Ys=new T,Ge=new T,ml=new de,gl=new $n,Ln=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ee(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ee(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ml.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ml,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gl.setFromEuler(this),this.setFromQuaternion(gl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ln.DEFAULT_ORDER="XYZ";var Ts=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Dd=0,xl=new T,Ti=new $n,bn=new de,Zs=new T,ls=new T,Ld=new T,Ud=new $n,_l=new T(1,0,0),yl=new T(0,1,0),vl=new T(0,0,1),Ml={type:"added"},Nd={type:"removed"},Ai={type:"childadded",child:null},Aa={type:"childremoved",child:null},Ie=class i extends Zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new T,e=new Ln,n=new $n,s=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new de},normalMatrix:{value:new Ht}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ts,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.premultiply(Ti),this}rotateX(t){return this.rotateOnAxis(_l,t)}rotateY(t){return this.rotateOnAxis(yl,t)}rotateZ(t){return this.rotateOnAxis(vl,t)}translateOnAxis(t,e){return xl.copy(t).applyQuaternion(this.quaternion),this.position.add(xl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_l,t)}translateY(t){return this.translateOnAxis(yl,t)}translateZ(t){return this.translateOnAxis(vl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zs.copy(t):Zs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(ls,Zs,this.up):bn.lookAt(Zs,ls,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),Ti.setFromRotationMatrix(bn),this.quaternion.premultiply(Ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ml),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Nd),Aa.child=t,this.dispatchEvent(Aa),Aa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ml),Ai.child=t,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,t,Ld),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,Ud,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ie.DEFAULT_UP=new T(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rn=new T,Sn=new T,Ra=new T,En=new T,Ri=new T,Ci=new T,bl=new T,Ca=new T,Ia=new T,Pa=new T,Da=new oe,La=new oe,Ua=new oe,Xn=class i{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),rn.subVectors(t,e),s.cross(rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){rn.subVectors(s,e),Sn.subVectors(n,e),Ra.subVectors(t,e);let a=rn.dot(rn),o=rn.dot(Sn),c=rn.dot(Ra),l=Sn.dot(Sn),h=Sn.dot(Ra),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,En)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,En.x),c.addScaledVector(a,En.y),c.addScaledVector(o,En.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Da.setScalar(0),La.setScalar(0),Ua.setScalar(0),Da.fromBufferAttribute(t,e),La.fromBufferAttribute(t,n),Ua.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Da,r.x),a.addScaledVector(La,r.y),a.addScaledVector(Ua,r.z),a}static isFrontFacing(t,e,n,s){return rn.subVectors(n,e),Sn.subVectors(t,e),rn.cross(Sn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),rn.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ri.subVectors(s,n),Ci.subVectors(r,n),Ca.subVectors(t,n);let c=Ri.dot(Ca),l=Ci.dot(Ca);if(c<=0&&l<=0)return e.copy(n);Ia.subVectors(t,s);let h=Ri.dot(Ia),u=Ci.dot(Ia);if(h>=0&&u<=h)return e.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Ri,a);Pa.subVectors(t,r);let f=Ri.dot(Pa),m=Ci.dot(Pa);if(m>=0&&f<=m)return e.copy(r);let x=f*l-c*m;if(x<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(Ci,o);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return bl.subVectors(r,s),o=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(bl,o);let p=1/(g+x+d);return a=x*p,o=d*p,e.copy(n).addScaledVector(Ri,a).addScaledVector(Ci,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Eh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},$s={h:0,s:0,l:0};function Na(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Bt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=n,$t.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=$t.workingColorSpace){if(t=Ic(t,1),e=Ee(e,0,1),n=Ee(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Na(a,r,t+1/3),this.g=Na(a,r,t),this.b=Na(a,r,t-1/3)}return $t.toWorkingColorSpace(this,s),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){let n=Eh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cn(t.r),this.g=Cn(t.g),this.b=Cn(t.b),this}copyLinearToSRGB(t){return this.r=Hi(t.r),this.g=Hi(t.g),this.b=Hi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return $t.fromWorkingColorSpace(Re.copy(this),t),Math.round(Ee(Re.r*255,0,255))*65536+Math.round(Ee(Re.g*255,0,255))*256+Math.round(Ee(Re.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.fromWorkingColorSpace(Re.copy(this),e);let n=Re.r,s=Re.g,r=Re.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=ke){$t.fromWorkingColorSpace(Re.copy(this),t);let e=Re.r,n=Re.g,s=Re.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vn),this.setHSL(Vn.h+t,Vn.s+e,Vn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vn),t.getHSL($s);let n=_s(Vn.h,$s.h,e),s=_s(Vn.s,$s.s,e),r=_s(Vn.l,$s.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Re=new Bt;Bt.NAMES=Eh;var Fd=0,Jn=class extends Zn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=pn(),this.name="",this.blending=fn,this.side=mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ka,this.blendDst=ja,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vi,this.stencilZFail=vi,this.stencilZPass=vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fn&&(n.blending=this.blending),this.side!==mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ka&&(n.blendSrc=this.blendSrc),this.blendDst!==ja&&(n.blendDst=this.blendDst),this.blendEquation!==oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},we=class extends Jn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var _e=new T,Js=new st,Xe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Oo,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Js.fromBufferAttribute(this,e),Js.applyMatrix3(t),this.setXY(e,Js.x,Js.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=an(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=an(e,this.array)),e}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=an(e,this.array)),e}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=an(e,this.array)),e}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=an(e,this.array)),e}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array),r=se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Oo&&(t.usage=this.usage),t}};var Tr=class extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ar=class extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var re=class extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Od=0,Ke=new de,Fa=new Ie,Ii=new T,We=new fi,hs=new fi,be=new T,Fe=class i extends Zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sh(t)?Ar:Tr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,n){return Ke.makeTranslation(t,e,n),this.applyMatrix4(Ke),this}scale(t,e,n){return Ke.makeScale(t,e,n),this.applyMatrix4(Ke),this}lookAt(t){return Fa.lookAt(t),Fa.updateMatrix(),this.applyMatrix4(Fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new re(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];We.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ws);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){let n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];hs.setFromBufferAttribute(o),this.morphTargetsRelative?(be.addVectors(We.min,hs.min),We.expandByPoint(be),be.addVectors(We.max,hs.max),We.expandByPoint(be)):(We.expandByPoint(hs.min),We.expandByPoint(hs.max))}We.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(be));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)be.fromBufferAttribute(o,l),c&&(Ii.fromBufferAttribute(t,l),be.add(Ii)),s=Math.max(s,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<n.count;D++)o[D]=new T,c[D]=new T;let l=new T,h=new T,u=new T,d=new st,f=new st,m=new st,x=new T,g=new T;function p(D,E,M){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,E),m.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let C=1/(f.x*m.y-m.x*f.y);isFinite(C)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(C),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(C),o[D].add(x),o[E].add(x),o[M].add(x),c[D].add(g),c[E].add(g),c[M].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let D=0,E=b.length;D<E;++D){let M=b[D],C=M.start,B=M.count;for(let F=C,H=C+B;F<H;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let y=new T,_=new T,P=new T,R=new T;function I(D){P.fromBufferAttribute(s,D),R.copy(P);let E=o[D];y.copy(E),y.sub(P.multiplyScalar(P.dot(E))).normalize(),_.crossVectors(R,E);let C=_.dot(c[D])<0?-1:1;a.setXYZW(D,y.x,y.y,y.z,C)}for(let D=0,E=b.length;D<E;++D){let M=b[D],C=M.start,B=M.count;for(let F=C,H=C+B;F<H;F+=3)I(t.getX(F+0)),I(t.getX(F+1)),I(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new T,r=new T,a=new T,o=new T,c=new T,l=new T,h=new T,u=new T;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let x=0,g=c.length;x<g;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new Xe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sl=new de,ni=new wr,Ks=new ws,El=new T,js=new T,Qs=new T,tr=new T,Oa=new T,er=new T,wl=new T,nr=new T,Wt=class extends Ie{constructor(t=new Fe,e=new we){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){er.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Oa.fromBufferAttribute(u,t),a?er.addScaledVector(Oa,h):er.addScaledVector(Oa.sub(e),h))}e.add(er)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(r),ni.copy(t.ray).recast(t.near),!(Ks.containsPoint(ni.origin)===!1&&(ni.intersectSphere(Ks,El)===null||ni.origin.distanceToSquared(El)>(t.far-t.near)**2))&&(Sl.copy(r).invert(),ni.copy(t.ray).applyMatrix4(Sl),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ni)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=a[g.materialIndex],b=Math.max(g.start,f.start),y=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let _=b,P=y;_<P;_+=3){let R=o.getX(_),I=o.getX(_+1),D=o.getX(_+2);s=ir(this,p,t,n,l,h,u,R,I,D),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let b=o.getX(g),y=o.getX(g+1),_=o.getX(g+2);s=ir(this,a,t,n,l,h,u,b,y,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=a[g.materialIndex],b=Math.max(g.start,f.start),y=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let _=b,P=y;_<P;_+=3){let R=_,I=_+1,D=_+2;s=ir(this,p,t,n,l,h,u,R,I,D),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let b=g,y=g+1,_=g+2;s=ir(this,a,t,n,l,h,u,b,y,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Bd(i,t,e,n,s,r,a,o){let c;if(t.side===Se?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===mn,o),c===null)return null;nr.copy(o),nr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(nr);return l<e.near||l>e.far?null:{distance:l,point:nr.clone(),object:i}}function ir(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,js),i.getVertexPosition(c,Qs),i.getVertexPosition(l,tr);let h=Bd(i,t,e,n,js,Qs,tr,wl);if(h){let u=new T;Xn.getBarycoord(wl,js,Qs,tr,u),s&&(h.uv=Xn.getInterpolatedAttribute(s,o,c,l,u,new st)),r&&(h.uv1=Xn.getInterpolatedAttribute(r,o,c,l,u,new st)),a&&(h.normal=Xn.getInterpolatedAttribute(a,o,c,l,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new T,materialIndex:0};Xn.getNormal(js,Qs,tr,d.normal),h.face=d,h.barycoord=u}return h}var ye=class i extends Fe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(u,2));function m(x,g,p,b,y,_,P,R,I,D,E){let M=_/I,C=P/D,B=_/2,F=P/2,H=R/2,Z=I+1,V=D+1,tt=0,G=0,ot=new T;for(let mt=0;mt<V;mt++){let bt=mt*C-F;for(let Ot=0;Ot<Z;Ot++){let Qt=Ot*M-B;ot[x]=Qt*b,ot[g]=bt*y,ot[p]=H,l.push(ot.x,ot.y,ot.z),ot[x]=0,ot[g]=0,ot[p]=R>0?1:-1,h.push(ot.x,ot.y,ot.z),u.push(Ot/I),u.push(1-mt/D),tt+=1}}for(let mt=0;mt<D;mt++)for(let bt=0;bt<I;bt++){let Ot=d+bt+Z*mt,Qt=d+bt+Z*(mt+1),Y=d+(bt+1)+Z*(mt+1),nt=d+(bt+1)+Z*mt;c.push(Ot,Qt,nt),c.push(Qt,Y,nt),G+=6}o.addGroup(f,G,E),f+=G,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Zi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ue(i){let t={};for(let e=0;e<i.length;e++){let n=Zi(i[e]);for(let s in n)t[s]=n[s]}return t}function kd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function wh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}var zd={clone:Zi,merge:Ue},Hd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,je=class extends Jn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hd,this.fragmentShader=Vd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=kd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Rr=class extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Rn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gn=new T,Tl=new st,Al=new st,Ce=class extends Rr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Es*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Es*2*Math.atan(Math.tan(xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z)}getViewSize(t,e){return this.getViewBounds(t,Tl,Al),e.subVectors(Al,Tl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(xs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Pi=-90,Di=1,Ho=class extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ce(Pi,Di,t,e);s.layers=this.layers,this.add(s);let r=new Ce(Pi,Di,t,e);r.layers=this.layers,this.add(r);let a=new Ce(Pi,Di,t,e);a.layers=this.layers,this.add(a);let o=new Ce(Pi,Di,t,e);o.layers=this.layers,this.add(o);let c=new Ce(Pi,Di,t,e);c.layers=this.layers,this.add(c);let l=new Ce(Pi,Di,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Cr=class extends He{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Wi,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Vo=class extends Dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Cr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:dn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ye(5,5,5),r=new je({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Se,blending:qn});r.uniforms.tEquirect.value=e;let a=new Wt(s,r),o=e.minFilter;return e.minFilter===hi&&(e.minFilter=dn),new Ho(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Ba=new T,Gd=new T,Wd=new Ht,Tn=class{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ba.subVectors(n,e).cross(Gd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ba),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Wd.getNormalMatrix(t),s=this.coplanarPoint(Ba).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ii=new ws,sr=new T,As=class{constructor(t=new Tn,e=new Tn,n=new Tn,s=new Tn,r=new Tn,a=new Tn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],x=s[10],g=s[11],p=s[12],b=s[13],y=s[14],_=s[15];if(n[0].setComponents(c-r,d-l,g-f,_-p).normalize(),n[1].setComponents(c+r,d+l,g+f,_+p).normalize(),n[2].setComponents(c+a,d+h,g+m,_+b).normalize(),n[3].setComponents(c-a,d-h,g-m,_-b).normalize(),n[4].setComponents(c-o,d-u,g-x,_-y).normalize(),e===Rn)n[5].setComponents(c+o,d+u,g+x,_+y).normalize();else if(e===Mr)n[5].setComponents(o,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(t){return ii.center.set(0,0,0),ii.radius=.7071067811865476,ii.applyMatrix4(t.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(sr.x=s.normal.x>0?t.max.x:t.min.x,sr.y=s.normal.y>0?t.max.y:t.min.y,sr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(sr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Th(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Xd(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],x=u[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let x=u[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var $i=class i extends Fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,d=e/c,f=[],m=[],x=[],g=[];for(let p=0;p<h;p++){let b=p*d-a;for(let y=0;y<l;y++){let _=y*u-r;m.push(_,-b,0),x.push(0,0,1),g.push(y/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){let y=b+l*p,_=b+l*(p+1),P=b+1+l*(p+1),R=b+1+l*p;f.push(y,_,R),f.push(_,P,R)}this.setIndex(f),this.setAttribute("position",new re(m,3)),this.setAttribute("normal",new re(x,3)),this.setAttribute("uv",new re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},qd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yd=`#ifdef USE_ALPHAHASH
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
#endif`,Zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jd=`#ifdef USE_AOMAP
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
#endif`,Qd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ef=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,af=`#ifdef USE_IRIDESCENCE
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
#endif`,of=`#ifdef USE_BUMPMAP
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
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,gf=`#define PI 3.141592653589793
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
} // validated`,xf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_f=`vec3 transformedNormal = objectNormal;
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
#endif`,yf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ef=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wf=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Tf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Af=`#ifdef USE_ENVMAP
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
#endif`,Rf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cf=`#ifdef USE_ENVMAP
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
#endif`,If=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Df=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uf=`#ifdef USE_GRADIENTMAP
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
}`,Nf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ff=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bf=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,kf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,zf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wf=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Xf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,qf=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Yf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$f=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,np=`#if defined( USE_POINTS_UV )
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
#endif`,ip=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ap=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,op=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,up=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mp=`#ifdef USE_NORMALMAP
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
#endif`,gp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_p=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ep=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ap=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Cp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lp=`#ifdef USE_SKINNING
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
#endif`,Up=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Np=`#ifdef USE_SKINNING
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
#endif`,Fp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Op=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kp=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,zp=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hp=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yp=`uniform sampler2D t2D;
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
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$p=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Qp=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tm=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,em=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,im=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,am=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,om=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,cm=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,lm=`#define LAMBERT
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,hm=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,um=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,dm=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,fm=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pm=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,mm=`#define PHONG
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,gm=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,xm=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,_m=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,ym=`#define TOON
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,vm=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Mm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,bm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Sm=`uniform vec3 color;
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
}`,Em=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,wm=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Gt={alphahash_fragment:qd,alphahash_pars_fragment:Yd,alphamap_fragment:Zd,alphamap_pars_fragment:$d,alphatest_fragment:Jd,alphatest_pars_fragment:Kd,aomap_fragment:jd,aomap_pars_fragment:Qd,batching_pars_vertex:tf,batching_vertex:ef,begin_vertex:nf,beginnormal_vertex:sf,bsdfs:rf,iridescence_fragment:af,bumpmap_pars_fragment:of,clipping_planes_fragment:cf,clipping_planes_pars_fragment:lf,clipping_planes_pars_vertex:hf,clipping_planes_vertex:uf,color_fragment:df,color_pars_fragment:ff,color_pars_vertex:pf,color_vertex:mf,common:gf,cube_uv_reflection_fragment:xf,defaultnormal_vertex:_f,displacementmap_pars_vertex:yf,displacementmap_vertex:vf,emissivemap_fragment:Mf,emissivemap_pars_fragment:bf,colorspace_fragment:Sf,colorspace_pars_fragment:Ef,envmap_fragment:wf,envmap_common_pars_fragment:Tf,envmap_pars_fragment:Af,envmap_pars_vertex:Rf,envmap_physical_pars_fragment:kf,envmap_vertex:Cf,fog_vertex:If,fog_pars_vertex:Pf,fog_fragment:Df,fog_pars_fragment:Lf,gradientmap_pars_fragment:Uf,lightmap_pars_fragment:Nf,lights_lambert_fragment:Ff,lights_lambert_pars_fragment:Of,lights_pars_begin:Bf,lights_toon_fragment:zf,lights_toon_pars_fragment:Hf,lights_phong_fragment:Vf,lights_phong_pars_fragment:Gf,lights_physical_fragment:Wf,lights_physical_pars_fragment:Xf,lights_fragment_begin:qf,lights_fragment_maps:Yf,lights_fragment_end:Zf,logdepthbuf_fragment:$f,logdepthbuf_pars_fragment:Jf,logdepthbuf_pars_vertex:Kf,logdepthbuf_vertex:jf,map_fragment:Qf,map_pars_fragment:tp,map_particle_fragment:ep,map_particle_pars_fragment:np,metalnessmap_fragment:ip,metalnessmap_pars_fragment:sp,morphinstance_vertex:rp,morphcolor_vertex:ap,morphnormal_vertex:op,morphtarget_pars_vertex:cp,morphtarget_vertex:lp,normal_fragment_begin:hp,normal_fragment_maps:up,normal_pars_fragment:dp,normal_pars_vertex:fp,normal_vertex:pp,normalmap_pars_fragment:mp,clearcoat_normal_fragment_begin:gp,clearcoat_normal_fragment_maps:xp,clearcoat_pars_fragment:_p,iridescence_pars_fragment:yp,opaque_fragment:vp,packing:Mp,premultiplied_alpha_fragment:bp,project_vertex:Sp,dithering_fragment:Ep,dithering_pars_fragment:wp,roughnessmap_fragment:Tp,roughnessmap_pars_fragment:Ap,shadowmap_pars_fragment:Rp,shadowmap_pars_vertex:Cp,shadowmap_vertex:Ip,shadowmask_pars_fragment:Pp,skinbase_vertex:Dp,skinning_pars_vertex:Lp,skinning_vertex:Up,skinnormal_vertex:Np,specularmap_fragment:Fp,specularmap_pars_fragment:Op,tonemapping_fragment:Bp,tonemapping_pars_fragment:kp,transmission_fragment:zp,transmission_pars_fragment:Hp,uv_pars_fragment:Vp,uv_pars_vertex:Gp,uv_vertex:Wp,worldpos_vertex:Xp,background_vert:qp,background_frag:Yp,backgroundCube_vert:Zp,backgroundCube_frag:$p,cube_vert:Jp,cube_frag:Kp,depth_vert:jp,depth_frag:Qp,distanceRGBA_vert:tm,distanceRGBA_frag:em,equirect_vert:nm,equirect_frag:im,linedashed_vert:sm,linedashed_frag:rm,meshbasic_vert:am,meshbasic_frag:om,meshlambert_vert:cm,meshlambert_frag:lm,meshmatcap_vert:hm,meshmatcap_frag:um,meshnormal_vert:dm,meshnormal_frag:fm,meshphong_vert:pm,meshphong_frag:mm,meshphysical_vert:gm,meshphysical_frag:xm,meshtoon_vert:_m,meshtoon_frag:ym,points_vert:vm,points_frag:Mm,shadow_vert:bm,shadow_frag:Sm,sprite_vert:Em,sprite_frag:wm},ct={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},un={basic:{uniforms:Ue([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Ue([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Ue([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Ue([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Ue([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Ue([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Ue([ct.points,ct.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Ue([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Ue([ct.common,ct.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Ue([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Ue([ct.sprite,ct.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Ue([ct.common,ct.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Ue([ct.lights,ct.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};un.physical={uniforms:Ue([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};var rr={r:0,b:0,g:0},si=new Ln,Tm=new de;function Am(i,t,e,n,s,r,a){let o=new Bt(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?e:t).get(y)),y}function x(b){let y=!1,_=m(b);_===null?p(o,c):_&&_.isColor&&(p(_,1),y=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(b,y){let _=m(y);_&&(_.isCubeTexture||_.mapping===jr)?(h===void 0&&(h=new Wt(new ye(1,1,1),new je({name:"BackgroundCubeMaterial",uniforms:Zi(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Se,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),si.copy(y.backgroundRotation),si.x*=-1,si.y*=-1,si.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Tm.makeRotationFromEuler(si)),h.material.toneMapped=$t.getTransfer(_.colorSpace)!==ae,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Wt(new $i(2,2),new je({name:"BackgroundMaterial",uniforms:Zi(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=$t.getTransfer(_.colorSpace)!==ae,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,y){b.getRGB(rr,wh(i)),n.buffers.color.setClear(rr.r,rr.g,rr.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(b,y=1){o.set(b),c=y,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(o,c)},render:x,addToRenderList:g}}function Rm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(M,C,B,F,H){let Z=!1,V=u(F,B,C);r!==V&&(r=V,l(r.object)),Z=f(M,F,B,H),Z&&m(M,F,B,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,_(M,C,B,F),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,C,B){let F=B.wireframe===!0,H=n[M.id];H===void 0&&(H={},n[M.id]=H);let Z=H[C.id];Z===void 0&&(Z={},H[C.id]=Z);let V=Z[F];return V===void 0&&(V=d(c()),Z[F]=V),V}function d(M){let C=[],B=[],F=[];for(let H=0;H<e;H++)C[H]=0,B[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:B,attributeDivisors:F,object:M,attributes:{},index:null}}function f(M,C,B,F){let H=r.attributes,Z=C.attributes,V=0,tt=B.getAttributes();for(let G in tt)if(tt[G].location>=0){let mt=H[G],bt=Z[G];if(bt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(bt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(bt=M.instanceColor)),mt===void 0||mt.attribute!==bt||bt&&mt.data!==bt.data)return!0;V++}return r.attributesNum!==V||r.index!==F}function m(M,C,B,F){let H={},Z=C.attributes,V=0,tt=B.getAttributes();for(let G in tt)if(tt[G].location>=0){let mt=Z[G];mt===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(mt=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(mt=M.instanceColor));let bt={};bt.attribute=mt,mt&&mt.data&&(bt.data=mt.data),H[G]=bt,V++}r.attributes=H,r.attributesNum=V,r.index=F}function x(){let M=r.newAttributes;for(let C=0,B=M.length;C<B;C++)M[C]=0}function g(M){p(M,0)}function p(M,C){let B=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;B[M]=1,F[M]===0&&(i.enableVertexAttribArray(M),F[M]=1),H[M]!==C&&(i.vertexAttribDivisor(M,C),H[M]=C)}function b(){let M=r.newAttributes,C=r.enabledAttributes;for(let B=0,F=C.length;B<F;B++)C[B]!==M[B]&&(i.disableVertexAttribArray(B),C[B]=0)}function y(M,C,B,F,H,Z,V){V===!0?i.vertexAttribIPointer(M,C,B,H,Z):i.vertexAttribPointer(M,C,B,F,H,Z)}function _(M,C,B,F){x();let H=F.attributes,Z=B.getAttributes(),V=C.defaultAttributeValues;for(let tt in Z){let G=Z[tt];if(G.location>=0){let ot=H[tt];if(ot===void 0&&(tt==="instanceMatrix"&&M.instanceMatrix&&(ot=M.instanceMatrix),tt==="instanceColor"&&M.instanceColor&&(ot=M.instanceColor)),ot!==void 0){let mt=ot.normalized,bt=ot.itemSize,Ot=t.get(ot);if(Ot===void 0)continue;let Qt=Ot.buffer,Y=Ot.type,nt=Ot.bytesPerElement,St=Y===i.INT||Y===i.UNSIGNED_INT||ot.gpuType===Ec;if(ot.isInterleavedBufferAttribute){let rt=ot.data,It=rt.stride,Nt=ot.offset;if(rt.isInstancedInterleavedBuffer){for(let Lt=0;Lt<G.locationSize;Lt++)p(G.location+Lt,rt.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Lt=0;Lt<G.locationSize;Lt++)g(G.location+Lt);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let Lt=0;Lt<G.locationSize;Lt++)y(G.location+Lt,bt/G.locationSize,Y,mt,It*nt,(Nt+bt/G.locationSize*Lt)*nt,St)}else{if(ot.isInstancedBufferAttribute){for(let rt=0;rt<G.locationSize;rt++)p(G.location+rt,ot.meshPerAttribute);M.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let rt=0;rt<G.locationSize;rt++)g(G.location+rt);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let rt=0;rt<G.locationSize;rt++)y(G.location+rt,bt/G.locationSize,Y,mt,bt*nt,bt/G.locationSize*rt*nt,St)}}else if(V!==void 0){let mt=V[tt];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv(G.location,mt);break;case 3:i.vertexAttrib3fv(G.location,mt);break;case 4:i.vertexAttrib4fv(G.location,mt);break;default:i.vertexAttrib1fv(G.location,mt)}}}}b()}function P(){D();for(let M in n){let C=n[M];for(let B in C){let F=C[B];for(let H in F)h(F[H].object),delete F[H];delete C[B]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;let C=n[M.id];for(let B in C){let F=C[B];for(let H in F)h(F[H].object),delete F[H];delete C[B]}delete n[M.id]}function I(M){for(let C in n){let B=n[C];if(B[M.id]===void 0)continue;let F=B[M.id];for(let H in F)h(F[H].object),delete F[H];delete B[M.id]}}function D(){E(),a=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function Cm(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function o(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)a(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let x=0;x<u;x++)m+=h[x]*d[x];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Im(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==on&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let D=I===Ns&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Pn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==An&&!D)}function c(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:P,maxSamples:R}}function Pm(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Tn,o=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let b=r?0:n,y=b*4,_=p.clippingState||null;c.value=_,_=h(m,d,y,f);for(let P=0;P!==y;++P)_[P]=e[P];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let p=f+x*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,_=f;y!==x;++y,_+=4)a.copy(u[y]).applyMatrix4(b,o),a.normal.toArray(g,_),g[_+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function Dm(i){let t=new WeakMap;function e(a,o){return o===ao?a.mapping=Wi:o===oo&&(a.mapping=Xi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ao||o===oo)if(t.has(a)){let c=t.get(a).texture;return e(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Vo(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ir=class extends Rr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Bi=4,Rl=[.125,.215,.35,.446,.526,.582],ci=20,ka=new Ir,Cl=new Bt,za=null,Ha=0,Va=0,Ga=!1,ai=(1+Math.sqrt(5))/2,Li=1/ai,Il=[new T(-ai,Li,0),new T(ai,Li,0),new T(-Li,0,ai),new T(Li,0,ai),new T(0,ai,-Li),new T(0,ai,Li),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)],Pr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){za=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ll(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(za,Ha,Va),this._renderer.xr.enabled=Ga,t.scissorTest=!1,ar(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wi||t.mapping===Xi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),za=this._renderer.getRenderTarget(),Ha=this._renderer.getActiveCubeFace(),Va=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Ns,format:on,colorSpace:ns,depthBuffer:!1},s=Pl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lm(r)),this._blurMaterial=Um(r,t,e)}return s}_compileMaterial(t){let e=new Wt(this._lodPlanes[0],t);this._renderer.compile(e,ka)}_sceneToCubeUV(t,e,n,s){let o=new Ce(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Cl),h.toneMapping=Yn,h.autoClear=!1;let f=new we({name:"PMREM.Background",side:Se,depthWrite:!1,depthTest:!1}),m=new Wt(new ye,f),x=!1,g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,x=!0):(f.color.copy(Cl),x=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):b===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let y=this._cubeSize;ar(s,b*y,p>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(m,o),h.render(t,o)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Wi||t.mapping===Xi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ll()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dl());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Wt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;ar(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,ka)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Il[(s-r-1)%Il.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Wt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ci-1),x=r/m,g=isFinite(r)?1+Math.floor(h*x):ci;g>ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ci}`);let p=[],b=0;for(let I=0;I<ci;++I){let D=I/x,E=Math.exp(-D*D/2);p.push(E),I===0?b+=E:I<g&&(b+=2*E)}for(let I=0;I<p.length;I++)p[I]=p[I]/b;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;let _=this._sizeLods[s],P=3*_*(s>y-Bi?s-y+Bi:0),R=4*(this._cubeSize-_);ar(e,P,R,3*_,2*_),c.setRenderTarget(e),c.render(u,ka)}};function Lm(i){let t=[],e=[],n=[],s=i,r=i-Bi+1+Rl.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Bi?c=Rl[a-i+Bi-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,x=3,g=2,p=1,b=new Float32Array(x*m*f),y=new Float32Array(g*m*f),_=new Float32Array(p*m*f);for(let R=0;R<f;R++){let I=R%3*2/3-1,D=R>2?0:-1,E=[I,D,0,I+2/3,D,0,I+2/3,D+1,0,I,D,0,I+2/3,D+1,0,I,D+1,0];b.set(E,x*m*R),y.set(d,g*m*R);let M=[R,R,R,R,R,R];_.set(M,p*m*R)}let P=new Fe;P.setAttribute("position",new Xe(b,x)),P.setAttribute("uv",new Xe(y,g)),P.setAttribute("faceIndex",new Xe(_,p)),t.push(P),s>Bi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Pl(i,t,e){let n=new Dn(i,t,e);return n.texture.mapping=jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ar(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Um(i,t,e){let n=new Float32Array(ci),s=new T(0,1,0);return new je({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Dl(){return new je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Ll(){return new je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Pc(){return`

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
	`}function Nm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===ao||c===oo,h=c===Wi||c===Xi;if(l||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Pr(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Pr(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Fm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ms("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Om(i,t,e,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let x=d.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)t.remove(x[g])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)t.update(d[m],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let m in f){let x=f[m];for(let g=0,p=x.length;g<p;g++)t.update(x[g],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,m=u.attributes.position,x=0;if(f!==null){let b=f.array;x=f.version;for(let y=0,_=b.length;y<_;y+=3){let P=b[y+0],R=b[y+1],I=b[y+2];d.push(P,R,R,I,I,P)}}else if(m!==void 0){let b=m.array;x=m.version;for(let y=0,_=b.length/3-1;y<_;y+=3){let P=y+0,R=y+1,I=y+2;d.push(P,R,R,I,I,P)}}else return;let g=new(Sh(d)?Ar:Tr)(d,1);g.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Bm(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*a,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,x){if(m===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,m);let p=0;for(let b=0;b<m;b++)p+=f[b]*x[b];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function km(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function zm(i,t,e){let n=new WeakMap,s=new oe;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let E=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],y=0;f===!0&&(y=1),m===!0&&(y=2),x===!0&&(y=3);let _=o.attributes.position.count*y,P=1;_>t.maxTextureSize&&(P=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let R=new Float32Array(_*P*4*u),I=new Er(R,_,P,u);I.type=An,I.needsUpdate=!0;let D=y*4;for(let M=0;M<u;M++){let C=g[M],B=p[M],F=b[M],H=_*P*4*M;for(let Z=0;Z<C.count;Z++){let V=Z*D;f===!0&&(s.fromBufferAttribute(C,Z),R[H+V+0]=s.x,R[H+V+1]=s.y,R[H+V+2]=s.z,R[H+V+3]=0),m===!0&&(s.fromBufferAttribute(B,Z),R[H+V+4]=s.x,R[H+V+5]=s.y,R[H+V+6]=s.z,R[H+V+7]=0),x===!0&&(s.fromBufferAttribute(F,Z),R[H+V+8]=s.x,R[H+V+9]=s.y,R[H+V+10]=s.z,R[H+V+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:I,size:new st(_,P)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Hm(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}var Dr=class extends He{constructor(t,e,n,s,r,a,o,c,l,h=zi){if(h!==zi&&h!==Yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zi&&(n=di),n===void 0&&h===Yi&&(n=qi),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ne,this.minFilter=c!==void 0?c:Ne,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ah=new He,Ul=new Dr(1,1),Rh=new Er,Ch=new zo,Ih=new Cr,Nl=[],Fl=[],Ol=new Float32Array(16),Bl=new Float32Array(9),kl=new Float32Array(4);function is(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Nl[s];if(r===void 0&&(r=new Float32Array(s),Nl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ea(i,t){let e=Fl[t];e===void 0&&(e=new Int32Array(t),Fl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Vm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Gm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2fv(this.addr,t),Me(e,t)}}function Wm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;i.uniform3fv(this.addr,t),Me(e,t)}}function Xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4fv(this.addr,t),Me(e,t)}}function qm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,n))return;kl.set(n),i.uniformMatrix2fv(this.addr,!1,kl),Me(e,n)}}function Ym(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,n))return;Bl.set(n),i.uniformMatrix3fv(this.addr,!1,Bl),Me(e,n)}}function Zm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ve(e,n))return;Ol.set(n),i.uniformMatrix4fv(this.addr,!1,Ol),Me(e,n)}}function $m(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2iv(this.addr,t),Me(e,t)}}function Km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3iv(this.addr,t),Me(e,t)}}function jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4iv(this.addr,t),Me(e,t)}}function Qm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function t0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;i.uniform2uiv(this.addr,t),Me(e,t)}}function e0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;i.uniform3uiv(this.addr,t),Me(e,t)}}function n0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;i.uniform4uiv(this.addr,t),Me(e,t)}}function i0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ul.compareFunction=bh,r=Ul):r=Ah,e.setTexture2D(t||r,s)}function s0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ch,s)}function r0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ih,s)}function a0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Rh,s)}function o0(i){switch(i){case 5126:return Vm;case 35664:return Gm;case 35665:return Wm;case 35666:return Xm;case 35674:return qm;case 35675:return Ym;case 35676:return Zm;case 5124:case 35670:return $m;case 35667:case 35671:return Jm;case 35668:case 35672:return Km;case 35669:case 35673:return jm;case 5125:return Qm;case 36294:return t0;case 36295:return e0;case 36296:return n0;case 35678:case 36198:case 36298:case 36306:case 35682:return i0;case 35679:case 36299:case 36307:return s0;case 35680:case 36300:case 36308:case 36293:return r0;case 36289:case 36303:case 36311:case 36292:return a0}}function c0(i,t){i.uniform1fv(this.addr,t)}function l0(i,t){let e=is(t,this.size,2);i.uniform2fv(this.addr,e)}function h0(i,t){let e=is(t,this.size,3);i.uniform3fv(this.addr,e)}function u0(i,t){let e=is(t,this.size,4);i.uniform4fv(this.addr,e)}function d0(i,t){let e=is(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function f0(i,t){let e=is(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function p0(i,t){let e=is(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function m0(i,t){i.uniform1iv(this.addr,t)}function g0(i,t){i.uniform2iv(this.addr,t)}function x0(i,t){i.uniform3iv(this.addr,t)}function _0(i,t){i.uniform4iv(this.addr,t)}function y0(i,t){i.uniform1uiv(this.addr,t)}function v0(i,t){i.uniform2uiv(this.addr,t)}function M0(i,t){i.uniform3uiv(this.addr,t)}function b0(i,t){i.uniform4uiv(this.addr,t)}function S0(i,t,e){let n=this.cache,s=t.length,r=ea(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Ah,r[a])}function E0(i,t,e){let n=this.cache,s=t.length,r=ea(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ch,r[a])}function w0(i,t,e){let n=this.cache,s=t.length,r=ea(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Ih,r[a])}function T0(i,t,e){let n=this.cache,s=t.length,r=ea(e,s);ve(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Rh,r[a])}function A0(i){switch(i){case 5126:return c0;case 35664:return l0;case 35665:return h0;case 35666:return u0;case 35674:return d0;case 35675:return f0;case 35676:return p0;case 5124:case 35670:return m0;case 35667:case 35671:return g0;case 35668:case 35672:return x0;case 35669:case 35673:return _0;case 5125:return y0;case 36294:return v0;case 36295:return M0;case 36296:return b0;case 35678:case 36198:case 36298:case 36306:case 35682:return S0;case 35679:case 36299:case 36307:return E0;case 35680:case 36300:case 36308:case 36293:return w0;case 36289:case 36303:case 36311:case 36292:return T0}}var Go=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=o0(e.type)}},Wo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=A0(e.type)}},Xo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Wa=/(\w+)(\])?(\[|\.)?/g;function zl(i,t){i.seq.push(t),i.map[t.id]=t}function R0(i,t,e){let n=i.name,s=n.length;for(Wa.lastIndex=0;;){let r=Wa.exec(n),a=Wa.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){zl(e,l===void 0?new Go(o,i,t):new Wo(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Xo(o),zl(e,u)),e=u}}}var Vi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);R0(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Hl(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var C0=37297,I0=0;function P0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Vl=new Ht;function D0(i){$t._getMatrix(Vl,$t.workingColorSpace,i);let t=`mat3( ${Vl.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(i)){case ta:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Gl(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+P0(i.getShaderSource(t),a)}else return s}function L0(i,t){let e=D0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function U0(i,t){let e;switch(t){case Gu:e="Linear";break;case Wu:e="Reinhard";break;case Xu:e="Cineon";break;case qu:e="ACESFilmic";break;case Zu:e="AgX";break;case $u:e="Neutral";break;case Yu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var or=new T;function N0(){$t.getLuminanceCoefficients(or);let i=or.x.toFixed(4),t=or.y.toFixed(4),e=or.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function O0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function B0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function gs(i){return i!==""}function Wl(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var k0=/^[ \t]*#include +<([\w\d./]+)>/gm;function qo(i){return i.replace(k0,H0)}var z0=new Map;function H0(i,t){let e=Gt[t];if(e===void 0){let n=z0.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return qo(e)}var V0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ql(i){return i.replace(V0,G0)}function G0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function W0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===lh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Sc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===wn&&(t="SHADOWMAP_TYPE_VSM"),t}function X0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Wi:case Xi:t="ENVMAP_TYPE_CUBE";break;case jr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function q0(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Xi&&(t="ENVMAP_MODE_REFRACTION"),t}function Y0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hh:t="ENVMAP_BLENDING_MULTIPLY";break;case Hu:t="ENVMAP_BLENDING_MIX";break;case Vu:t="ENVMAP_BLENDING_ADD";break}return t}function Z0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function $0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=W0(e),l=X0(e),h=q0(e),u=Y0(e),d=Z0(e),f=F0(e),m=O0(r),x=s.createProgram(),g,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(gs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(gs).join(`
`),p.length>0&&(p+=`
`)):(g=[Yl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),p=[Yl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Yn?U0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,L0("linearToOutputTexel",e.outputColorSpace),N0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gs).join(`
`)),a=qo(a),a=Wl(a,e),a=Xl(a,e),o=qo(o),o=Wl(o,e),o=Xl(o,e),a=ql(a),o=ql(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===al?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=b+g+a,_=b+p+o,P=Hl(s,s.VERTEX_SHADER,y),R=Hl(s,s.FRAGMENT_SHADER,_);s.attachShader(x,P),s.attachShader(x,R),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(C){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(x).trim(),F=s.getShaderInfoLog(P).trim(),H=s.getShaderInfoLog(R).trim(),Z=!0,V=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,P,R);else{let tt=Gl(s,P,"vertex"),G=Gl(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+tt+`
`+G)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||H==="")&&(V=!1);V&&(C.diagnostics={runnable:Z,programLog:B,vertexShader:{log:F,prefix:g},fragmentShader:{log:H,prefix:p}})}s.deleteShader(P),s.deleteShader(R),D=new Vi(s,x),E=B0(s,x)}let D;this.getUniforms=function(){return D===void 0&&I(this),D};let E;this.getAttributes=function(){return E===void 0&&I(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,C0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=I0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=R,this}var J0=0,Yo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Zo(t),e.set(t,n)),n}},Zo=class{constructor(t){this.id=J0++,this.code=t,this.usedTimes=0}};function K0(i,t,e,n,s,r,a){let o=new Ts,c=new Yo,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return l.add(E),E===0?"uv":`uv${E}`}function g(E,M,C,B,F){let H=B.fog,Z=F.geometry,V=E.isMeshStandardMaterial?B.environment:null,tt=(E.isMeshStandardMaterial?e:t).get(E.envMap||V),G=tt&&tt.mapping===jr?tt.image.height:null,ot=m[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let mt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,bt=mt!==void 0?mt.length:0,Ot=0;Z.morphAttributes.position!==void 0&&(Ot=1),Z.morphAttributes.normal!==void 0&&(Ot=2),Z.morphAttributes.color!==void 0&&(Ot=3);let Qt,Y,nt,St;if(ot){let ie=un[ot];Qt=ie.vertexShader,Y=ie.fragmentShader}else Qt=E.vertexShader,Y=E.fragmentShader,c.update(E),nt=c.getVertexShaderID(E),St=c.getFragmentShaderID(E);let rt=i.getRenderTarget(),It=i.state.buffers.depth.getReversed(),Nt=F.isInstancedMesh===!0,Lt=F.isBatchedMesh===!0,Zt=!!E.map,J=!!E.matcap,et=!!tt,A=!!E.aoMap,Rt=!!E.lightMap,j=!!E.bumpMap,_t=!!E.normalMap,at=!!E.displacementMap,Pt=!!E.emissiveMap,gt=!!E.metalnessMap,w=!!E.roughnessMap,v=E.anisotropy>0,O=E.clearcoat>0,X=E.dispersion>0,K=E.iridescence>0,q=E.sheen>0,Et=E.transmission>0,ht=v&&!!E.anisotropyMap,xt=O&&!!E.clearcoatMap,qt=O&&!!E.clearcoatNormalMap,Q=O&&!!E.clearcoatRoughnessMap,vt=K&&!!E.iridescenceMap,Dt=K&&!!E.iridescenceThicknessMap,Ut=q&&!!E.sheenColorMap,Mt=q&&!!E.sheenRoughnessMap,Yt=!!E.specularMap,Vt=!!E.specularColorMap,ce=!!E.specularIntensityMap,L=Et&&!!E.transmissionMap,ut=Et&&!!E.thicknessMap,W=!!E.gradientMap,$=!!E.alphaMap,pt=E.alphaTest>0,dt=!!E.alphaHash,kt=!!E.extensions,ge=Yn;E.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ge=i.toneMapping);let Te={shaderID:ot,shaderType:E.type,shaderName:E.name,vertexShader:Qt,fragmentShader:Y,defines:E.defines,customVertexShaderID:nt,customFragmentShaderID:St,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Lt,batchingColor:Lt&&F._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&F.instanceColor!==null,instancingMorph:Nt&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ns,alphaToCoverage:!!E.alphaToCoverage,map:Zt,matcap:J,envMap:et,envMapMode:et&&tt.mapping,envMapCubeUVHeight:G,aoMap:A,lightMap:Rt,bumpMap:j,normalMap:_t,displacementMap:d&&at,emissiveMap:Pt,normalMapObjectSpace:_t&&E.normalMapType===Qu,normalMapTangentSpace:_t&&E.normalMapType===Mh,metalnessMap:gt,roughnessMap:w,anisotropy:v,anisotropyMap:ht,clearcoat:O,clearcoatMap:xt,clearcoatNormalMap:qt,clearcoatRoughnessMap:Q,dispersion:X,iridescence:K,iridescenceMap:vt,iridescenceThicknessMap:Dt,sheen:q,sheenColorMap:Ut,sheenRoughnessMap:Mt,specularMap:Yt,specularColorMap:Vt,specularIntensityMap:ce,transmission:Et,transmissionMap:L,thicknessMap:ut,gradientMap:W,opaque:E.transparent===!1&&E.blending===fn&&E.alphaToCoverage===!1,alphaMap:$,alphaTest:pt,alphaHash:dt,combine:E.combine,mapUv:Zt&&x(E.map.channel),aoMapUv:A&&x(E.aoMap.channel),lightMapUv:Rt&&x(E.lightMap.channel),bumpMapUv:j&&x(E.bumpMap.channel),normalMapUv:_t&&x(E.normalMap.channel),displacementMapUv:at&&x(E.displacementMap.channel),emissiveMapUv:Pt&&x(E.emissiveMap.channel),metalnessMapUv:gt&&x(E.metalnessMap.channel),roughnessMapUv:w&&x(E.roughnessMap.channel),anisotropyMapUv:ht&&x(E.anisotropyMap.channel),clearcoatMapUv:xt&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:qt&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&x(E.sheenRoughnessMap.channel),specularMapUv:Yt&&x(E.specularMap.channel),specularColorMapUv:Vt&&x(E.specularColorMap.channel),specularIntensityMapUv:ce&&x(E.specularIntensityMap.channel),transmissionMapUv:L&&x(E.transmissionMap.channel),thicknessMapUv:ut&&x(E.thicknessMap.channel),alphaMapUv:$&&x(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(_t||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Z.attributes.uv&&(Zt||$),fog:!!H,useFog:E.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:It,skinning:F.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Ot,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ge,decodeVideoTexture:Zt&&E.map.isVideoTexture===!0&&$t.getTransfer(E.map.colorSpace)===ae,decodeVideoTextureEmissive:Pt&&E.emissiveMap.isVideoTexture===!0&&$t.getTransfer(E.emissiveMap.colorSpace)===ae,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ze,flipSided:E.side===Se,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:kt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&E.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function p(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let C in E.defines)M.push(C),M.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(b(M,E),y(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function b(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function _(E){let M=m[E.type],C;if(M){let B=un[M];C=zd.clone(B.uniforms)}else C=E.uniforms;return C}function P(E,M){let C;for(let B=0,F=h.length;B<F;B++){let H=h[B];if(H.cacheKey===M){C=H,++C.usedTimes;break}}return C===void 0&&(C=new $0(i,M,E,r),h.push(C)),C}function R(E){if(--E.usedTimes===0){let M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function I(E){c.remove(E)}function D(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:P,releaseProgram:R,releaseShaderCache:I,programs:h,dispose:D}}function j0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Q0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Zl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function $l(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,d,f,m,x,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:x,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=x,p.group=g),t++,p}function o(u,d,f,m,x,g){let p=a(u,d,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,m,x,g){let p=a(u,d,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||Q0),n.length>1&&n.sort(d||Zl),s.length>1&&s.sort(d||Zl)}function h(){for(let u=t,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function tg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new $l,i.set(n,[a])):s>=r.length?(a=new $l,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function eg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new Bt};break;case"SpotLight":e={position:new T,direction:new T,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function ng(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var ig=0;function sg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function rg(i){let t=new eg,e=ng(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new T);let s=new T,r=new de,a=new de;function o(l){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,b=0,y=0,_=0,P=0,R=0,I=0;l.sort(sg);for(let E=0,M=l.length;E<M;E++){let C=l[E],B=C.color,F=C.intensity,H=C.distance,Z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=B.r*F,u+=B.g*F,d+=B.b*F;else if(C.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(C.sh.coefficients[V],F);I++}else if(C.isDirectionalLight){let V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let tt=C.shadow,G=e.get(C);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=C.shadow.matrix,b++}n.directional[f]=V,f++}else if(C.isSpotLight){let V=t.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(B).multiplyScalar(F),V.distance=H,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,n.spot[x]=V;let tt=C.shadow;if(C.map&&(n.spotLightMap[P]=C.map,P++,tt.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[x]=tt.matrix,C.castShadow){let G=e.get(C);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=Z,_++}x++}else if(C.isRectAreaLight){let V=t.get(C);V.color.copy(B).multiplyScalar(F),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=V,g++}else if(C.isPointLight){let V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){let tt=C.shadow,G=e.get(C);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,G.shadowCameraNear=tt.camera.near,G.shadowCameraFar=tt.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=Z,n.pointShadowMatrix[m]=C.shadow.matrix,y++}n.point[m]=V,m++}else if(C.isHemisphereLight){let V=t.get(C);V.skyColor.copy(C.color).multiplyScalar(F),V.groundColor.copy(C.groundColor).multiplyScalar(F),n.hemi[p]=V,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let D=n.hash;(D.directionalLength!==f||D.pointLength!==m||D.spotLength!==x||D.rectAreaLength!==g||D.hemiLength!==p||D.numDirectionalShadows!==b||D.numPointShadows!==y||D.numSpotShadows!==_||D.numSpotMaps!==P||D.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+P-R,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=I,D.directionalLength=f,D.pointLength=m,D.spotLength=x,D.rectAreaLength=g,D.hemiLength=p,D.numDirectionalShadows=b,D.numPointShadows=y,D.numSpotShadows=_,D.numSpotMaps=P,D.numLightProbes=I,n.version=ig++)}function c(l,h){let u=0,d=0,f=0,m=0,x=0,g=h.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){let y=l[p];if(y.isDirectionalLight){let _=n.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),u++}else if(y.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),f++}else if(y.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:o,setupView:c,state:n}}function Jl(i){let t=new rg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function ag(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Jl(i),t.set(s,[o])):r>=a.length?(o=new Jl(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var $o=class extends Jn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ku,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Jo=class extends Jn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},og=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cg=`uniform sampler2D shadow_pass;
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
}`;function lg(i,t,e){let n=new As,s=new st,r=new st,a=new oe,o=new $o({depthPacking:ju}),c=new Jo,l={},h=e.maxTextureSize,u={[mn]:Se,[Se]:mn,[ze]:ze},d=new je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:og,fragmentShader:cg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Fe;m.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Wt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lh;let p=this.type;this.render=function(R,I,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;let E=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),B=i.state;B.setBlending(qn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let F=p!==wn&&this.type===wn,H=p===wn&&this.type!==wn;for(let Z=0,V=R.length;Z<V;Z++){let tt=R[Z],G=tt.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let ot=G.getFrameExtents();if(s.multiply(ot),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ot.x),s.x=r.x*ot.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ot.y),s.y=r.y*ot.y,G.mapSize.y=r.y)),G.map===null||F===!0||H===!0){let bt=this.type!==wn?{minFilter:Ne,magFilter:Ne}:{};G.map!==null&&G.map.dispose(),G.map=new Dn(s.x,s.y,bt),G.map.texture.name=tt.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let mt=G.getViewportCount();for(let bt=0;bt<mt;bt++){let Ot=G.getViewport(bt);a.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),B.viewport(a),G.updateMatrices(tt,bt),n=G.getFrustum(),_(I,D,G.camera,tt,this.type)}G.isPointLightShadow!==!0&&this.type===wn&&b(G,D),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(E,M,C)};function b(R,I){let D=t.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Dn(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(I,null,D,d,x,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(I,null,D,f,x,null)}function y(R,I,D,E){let M=null,C=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)M=C;else if(M=D.isPointLight===!0?c:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let B=M.uuid,F=I.uuid,H=l[B];H===void 0&&(H={},l[B]=H);let Z=H[F];Z===void 0&&(Z=M.clone(),H[F]=Z,I.addEventListener("dispose",P)),M=Z}if(M.visible=I.visible,M.wireframe=I.wireframe,E===wn?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:u[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let B=i.properties.get(M);B.light=D}return M}function _(R,I,D,E,M){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===wn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);let F=t.update(R),H=R.material;if(Array.isArray(H)){let Z=F.groups;for(let V=0,tt=Z.length;V<tt;V++){let G=Z[V],ot=H[G.materialIndex];if(ot&&ot.visible){let mt=y(R,ot,E,M);R.onBeforeShadow(i,R,I,D,F,mt,G),i.renderBufferDirect(D,null,F,mt,R,G),R.onAfterShadow(i,R,I,D,F,mt,G)}}}else if(H.visible){let Z=y(R,H,E,M);R.onBeforeShadow(i,R,I,D,F,Z,null),i.renderBufferDirect(D,null,F,Z,R,null),R.onAfterShadow(i,R,I,D,F,Z,null)}}let B=R.children;for(let F=0,H=B.length;F<H;F++)_(B[F],I,D,E,M)}function P(R){R.target.removeEventListener("dispose",P);for(let D in l){let E=l[D],M=R.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}var hg={[Qa]:to,[eo]:so,[no]:ro,[Gi]:io,[to]:Qa,[so]:eo,[ro]:no,[io]:Gi};function ug(i,t){function e(){let L=!1,ut=new oe,W=null,$=new oe(0,0,0,0);return{setMask:function(pt){W!==pt&&!L&&(i.colorMask(pt,pt,pt,pt),W=pt)},setLocked:function(pt){L=pt},setClear:function(pt,dt,kt,ge,Te){Te===!0&&(pt*=ge,dt*=ge,kt*=ge),ut.set(pt,dt,kt,ge),$.equals(ut)===!1&&(i.clearColor(pt,dt,kt,ge),$.copy(ut))},reset:function(){L=!1,W=null,$.set(-1,0,0,0)}}}function n(){let L=!1,ut=!1,W=null,$=null,pt=null;return{setReversed:function(dt){if(ut!==dt){let kt=t.get("EXT_clip_control");ut?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);let ge=pt;pt=null,this.setClear(ge)}ut=dt},getReversed:function(){return ut},setTest:function(dt){dt?rt(i.DEPTH_TEST):It(i.DEPTH_TEST)},setMask:function(dt){W!==dt&&!L&&(i.depthMask(dt),W=dt)},setFunc:function(dt){if(ut&&(dt=hg[dt]),$!==dt){switch(dt){case Qa:i.depthFunc(i.NEVER);break;case to:i.depthFunc(i.ALWAYS);break;case eo:i.depthFunc(i.LESS);break;case Gi:i.depthFunc(i.LEQUAL);break;case no:i.depthFunc(i.EQUAL);break;case io:i.depthFunc(i.GEQUAL);break;case so:i.depthFunc(i.GREATER);break;case ro:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=dt}},setLocked:function(dt){L=dt},setClear:function(dt){pt!==dt&&(ut&&(dt=1-dt),i.clearDepth(dt),pt=dt)},reset:function(){L=!1,W=null,$=null,pt=null,ut=!1}}}function s(){let L=!1,ut=null,W=null,$=null,pt=null,dt=null,kt=null,ge=null,Te=null;return{setTest:function(ie){L||(ie?rt(i.STENCIL_TEST):It(i.STENCIL_TEST))},setMask:function(ie){ut!==ie&&!L&&(i.stencilMask(ie),ut=ie)},setFunc:function(ie,tn,_n){(W!==ie||$!==tn||pt!==_n)&&(i.stencilFunc(ie,tn,_n),W=ie,$=tn,pt=_n)},setOp:function(ie,tn,_n){(dt!==ie||kt!==tn||ge!==_n)&&(i.stencilOp(ie,tn,_n),dt=ie,kt=tn,ge=_n)},setLocked:function(ie){L=ie},setClear:function(ie){Te!==ie&&(i.clearStencil(ie),Te=ie)},reset:function(){L=!1,ut=null,W=null,$=null,pt=null,dt=null,kt=null,ge=null,Te=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,b=null,y=null,_=null,P=null,R=null,I=new Bt(0,0,0),D=0,E=!1,M=null,C=null,B=null,F=null,H=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,tt=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=tt>=1):G.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=tt>=2);let ot=null,mt={},bt=i.getParameter(i.SCISSOR_BOX),Ot=i.getParameter(i.VIEWPORT),Qt=new oe().fromArray(bt),Y=new oe().fromArray(Ot);function nt(L,ut,W,$){let pt=new Uint8Array(4),dt=i.createTexture();i.bindTexture(L,dt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<W;kt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(ut+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return dt}let St={};St[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),St[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),St[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(Gi),j(!1),_t(Qc),rt(i.CULL_FACE),A(qn);function rt(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function It(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Nt(L,ut){return u[L]!==ut?(i.bindFramebuffer(L,ut),u[L]=ut,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ut),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function Lt(L,ut){let W=f,$=!1;if(L){W=d.get(ut),W===void 0&&(W=[],d.set(ut,W));let pt=L.textures;if(W.length!==pt.length||W[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,kt=pt.length;dt<kt;dt++)W[dt]=i.COLOR_ATTACHMENT0+dt;W.length=pt.length,$=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,$=!0);$&&i.drawBuffers(W)}function Zt(L){return m!==L?(i.useProgram(L),m=L,!0):!1}let J={[oi]:i.FUNC_ADD,[Eu]:i.FUNC_SUBTRACT,[wu]:i.FUNC_REVERSE_SUBTRACT};J[Tu]=i.MIN,J[Au]=i.MAX;let et={[Ru]:i.ZERO,[Cu]:i.ONE,[Iu]:i.SRC_COLOR,[Ka]:i.SRC_ALPHA,[Fu]:i.SRC_ALPHA_SATURATE,[Uu]:i.DST_COLOR,[Du]:i.DST_ALPHA,[Pu]:i.ONE_MINUS_SRC_COLOR,[ja]:i.ONE_MINUS_SRC_ALPHA,[Nu]:i.ONE_MINUS_DST_COLOR,[Lu]:i.ONE_MINUS_DST_ALPHA,[Ou]:i.CONSTANT_COLOR,[Bu]:i.ONE_MINUS_CONSTANT_COLOR,[ku]:i.CONSTANT_ALPHA,[zu]:i.ONE_MINUS_CONSTANT_ALPHA};function A(L,ut,W,$,pt,dt,kt,ge,Te,ie){if(L===qn){x===!0&&(It(i.BLEND),x=!1);return}if(x===!1&&(rt(i.BLEND),x=!0),L!==Su){if(L!==g||ie!==E){if((p!==oi||_!==oi)&&(i.blendEquation(i.FUNC_ADD),p=oi,_=oi),ie)switch(L){case fn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case In:i.blendFunc(i.ONE,i.ONE);break;case tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case el:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case fn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case In:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case el:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,y=null,P=null,R=null,I.set(0,0,0),D=0,g=L,E=ie}return}pt=pt||ut,dt=dt||W,kt=kt||$,(ut!==p||pt!==_)&&(i.blendEquationSeparate(J[ut],J[pt]),p=ut,_=pt),(W!==b||$!==y||dt!==P||kt!==R)&&(i.blendFuncSeparate(et[W],et[$],et[dt],et[kt]),b=W,y=$,P=dt,R=kt),(ge.equals(I)===!1||Te!==D)&&(i.blendColor(ge.r,ge.g,ge.b,Te),I.copy(ge),D=Te),g=L,E=!1}function Rt(L,ut){L.side===ze?It(i.CULL_FACE):rt(i.CULL_FACE);let W=L.side===Se;ut&&(W=!W),j(W),L.blending===fn&&L.transparent===!1?A(qn):A(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let $=L.stencilWrite;o.setTest($),$&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Pt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):It(i.SAMPLE_ALPHA_TO_COVERAGE)}function j(L){M!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),M=L)}function _t(L){L!==Mu?(rt(i.CULL_FACE),L!==C&&(L===Qc?i.cullFace(i.BACK):L===bu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):It(i.CULL_FACE),C=L}function at(L){L!==B&&(V&&i.lineWidth(L),B=L)}function Pt(L,ut,W){L?(rt(i.POLYGON_OFFSET_FILL),(F!==ut||H!==W)&&(i.polygonOffset(ut,W),F=ut,H=W)):It(i.POLYGON_OFFSET_FILL)}function gt(L){L?rt(i.SCISSOR_TEST):It(i.SCISSOR_TEST)}function w(L){L===void 0&&(L=i.TEXTURE0+Z-1),ot!==L&&(i.activeTexture(L),ot=L)}function v(L,ut,W){W===void 0&&(ot===null?W=i.TEXTURE0+Z-1:W=ot);let $=mt[W];$===void 0&&($={type:void 0,texture:void 0},mt[W]=$),($.type!==L||$.texture!==ut)&&(ot!==W&&(i.activeTexture(W),ot=W),i.bindTexture(L,ut||St[L]),$.type=L,$.texture=ut)}function O(){let L=mt[ot];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function X(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ut(L){Qt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Qt.copy(L))}function Mt(L){Y.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Y.copy(L))}function Yt(L,ut){let W=l.get(ut);W===void 0&&(W=new WeakMap,l.set(ut,W));let $=W.get(L);$===void 0&&($=i.getUniformBlockIndex(ut,L.name),W.set(L,$))}function Vt(L,ut){let $=l.get(ut).get(L);c.get(ut)!==$&&(i.uniformBlockBinding(ut,$,L.__bindingPointIndex),c.set(ut,$))}function ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ot=null,mt={},u={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,b=null,y=null,_=null,P=null,R=null,I=new Bt(0,0,0),D=0,E=!1,M=null,C=null,B=null,F=null,H=null,Qt.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:It,bindFramebuffer:Nt,drawBuffers:Lt,useProgram:Zt,setBlending:A,setMaterial:Rt,setFlipSided:j,setCullFace:_t,setLineWidth:at,setPolygonOffset:Pt,setScissorTest:gt,activeTexture:w,bindTexture:v,unbindTexture:O,compressedTexImage2D:X,compressedTexImage3D:K,texImage2D:vt,texImage3D:Dt,updateUBOMapping:Yt,uniformBlockBinding:Vt,texStorage2D:qt,texStorage3D:Q,texSubImage2D:q,texSubImage3D:Et,compressedTexSubImage2D:ht,compressedTexSubImage3D:xt,scissor:Ut,viewport:Mt,reset:ce}}function Kl(i,t,e,n){let s=dg(n);switch(e){case mh:return i*t;case xh:return i*t;case _h:return i*t*2;case Qr:return i*t/s.components*s.byteLength;case Ac:return i*t/s.components*s.byteLength;case yh:return i*t*2/s.components*s.byteLength;case Rc:return i*t*2/s.components*s.byteLength;case gh:return i*t*3/s.components*s.byteLength;case on:return i*t*4/s.components*s.byteLength;case Cc:return i*t*4/s.components*s.byteLength;case mr:case gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xr:case _r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ho:case fo:return Math.max(i,16)*Math.max(t,8)/4;case lo:case uo:return Math.max(i,8)*Math.max(t,8)/2;case po:case mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _o:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case yo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case vo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case bo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case So:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case wo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case To:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Co:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Io:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case yr:case Po:case Do:return Math.ceil(i/4)*Math.ceil(t/4)*16;case vh:case Lo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Uo:case No:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dg(i){switch(i){case Pn:case dh:return{byteLength:1,components:1};case Ss:case fh:case Ns:return{byteLength:2,components:1};case wc:case Tc:return{byteLength:2,components:4};case di:case Ec:case An:return{byteLength:4,components:1};case ph:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function fg(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new st,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,v){return f?new OffscreenCanvas(w,v):br("canvas")}function x(w,v,O){let X=1,K=gt(w);if((K.width>O||K.height>O)&&(X=O/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let q=Math.floor(X*K.width),Et=Math.floor(X*K.height);u===void 0&&(u=m(q,Et));let ht=v?m(q,Et):u;return ht.width=q,ht.height=Et,ht.getContext("2d").drawImage(w,0,0,q,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+q+"x"+Et+")."),ht}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function g(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function b(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(w,v,O,X,K=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let q=v;if(v===i.RED&&(O===i.FLOAT&&(q=i.R32F),O===i.HALF_FLOAT&&(q=i.R16F),O===i.UNSIGNED_BYTE&&(q=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.R8UI),O===i.UNSIGNED_SHORT&&(q=i.R16UI),O===i.UNSIGNED_INT&&(q=i.R32UI),O===i.BYTE&&(q=i.R8I),O===i.SHORT&&(q=i.R16I),O===i.INT&&(q=i.R32I)),v===i.RG&&(O===i.FLOAT&&(q=i.RG32F),O===i.HALF_FLOAT&&(q=i.RG16F),O===i.UNSIGNED_BYTE&&(q=i.RG8)),v===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RG8UI),O===i.UNSIGNED_SHORT&&(q=i.RG16UI),O===i.UNSIGNED_INT&&(q=i.RG32UI),O===i.BYTE&&(q=i.RG8I),O===i.SHORT&&(q=i.RG16I),O===i.INT&&(q=i.RG32I)),v===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGB8UI),O===i.UNSIGNED_SHORT&&(q=i.RGB16UI),O===i.UNSIGNED_INT&&(q=i.RGB32UI),O===i.BYTE&&(q=i.RGB8I),O===i.SHORT&&(q=i.RGB16I),O===i.INT&&(q=i.RGB32I)),v===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),O===i.UNSIGNED_INT&&(q=i.RGBA32UI),O===i.BYTE&&(q=i.RGBA8I),O===i.SHORT&&(q=i.RGBA16I),O===i.INT&&(q=i.RGBA32I)),v===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),v===i.RGBA){let Et=K?ta:$t.getTransfer(X);O===i.FLOAT&&(q=i.RGBA32F),O===i.HALF_FLOAT&&(q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(q=Et===ae?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function _(w,v){let O;return w?v===null||v===di||v===qi?O=i.DEPTH24_STENCIL8:v===An?O=i.DEPTH32F_STENCIL8:v===Ss&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===di||v===qi?O=i.DEPTH_COMPONENT24:v===An?O=i.DEPTH_COMPONENT32F:v===Ss&&(O=i.DEPTH_COMPONENT16),O}function P(w,v){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==Ne&&w.minFilter!==dn?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function R(w){let v=w.target;v.removeEventListener("dispose",R),D(v),v.isVideoTexture&&h.delete(v)}function I(w){let v=w.target;v.removeEventListener("dispose",I),M(v)}function D(w){let v=n.get(w);if(v.__webglInit===void 0)return;let O=w.source,X=d.get(O);if(X){let K=X[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(w),Object.keys(X).length===0&&d.delete(O)}n.remove(w)}function E(w){let v=n.get(w);i.deleteTexture(v.__webglTexture);let O=w.source,X=d.get(O);delete X[v.__cacheKey],a.memory.textures--}function M(w){let v=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let K=0;K<v.__webglFramebuffer[X].length;K++)i.deleteFramebuffer(v.__webglFramebuffer[X][K]);else i.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)i.deleteFramebuffer(v.__webglFramebuffer[X]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let O=w.textures;for(let X=0,K=O.length;X<K;X++){let q=n.get(O[X]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(O[X])}n.remove(w)}let C=0;function B(){C=0}function F(){let w=C;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),C+=1,w}function H(w){let v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function Z(w,v){let O=n.get(w);if(w.isVideoTexture&&at(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){let X=w.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,w,v);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function V(w,v){let O=n.get(w);if(w.version>0&&O.__version!==w.version){Y(O,w,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function tt(w,v){let O=n.get(w);if(w.version>0&&O.__version!==w.version){Y(O,w,v);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function G(w,v){let O=n.get(w);if(w.version>0&&O.__version!==w.version){nt(O,w,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}let ot={[ui]:i.REPEAT,[li]:i.CLAMP_TO_EDGE,[co]:i.MIRRORED_REPEAT},mt={[Ne]:i.NEAREST,[Ju]:i.NEAREST_MIPMAP_NEAREST,[Hs]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[xa]:i.LINEAR_MIPMAP_NEAREST,[hi]:i.LINEAR_MIPMAP_LINEAR},bt={[td]:i.NEVER,[ad]:i.ALWAYS,[ed]:i.LESS,[bh]:i.LEQUAL,[nd]:i.EQUAL,[rd]:i.GEQUAL,[id]:i.GREATER,[sd]:i.NOTEQUAL};function Ot(w,v){if(v.type===An&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===dn||v.magFilter===xa||v.magFilter===Hs||v.magFilter===hi||v.minFilter===dn||v.minFilter===xa||v.minFilter===Hs||v.minFilter===hi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,ot[v.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ot[v.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ot[v.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,mt[v.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,mt[v.minFilter]),v.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,bt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ne||v.minFilter!==Hs&&v.minFilter!==hi||v.type===An&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Qt(w,v){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",R));let X=v.source,K=d.get(X);K===void 0&&(K={},d.set(X,K));let q=H(v);if(q!==w.__cacheKey){K[q]===void 0&&(K[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),K[q].usedTimes++;let Et=K[w.__cacheKey];Et!==void 0&&(K[w.__cacheKey].usedTimes--,Et.usedTimes===0&&E(v)),w.__cacheKey=q,w.__webglTexture=K[q].texture}return O}function Y(w,v,O){let X=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=i.TEXTURE_3D);let K=Qt(w,v),q=v.source;e.bindTexture(X,w.__webglTexture,i.TEXTURE0+O);let Et=n.get(q);if(q.version!==Et.__version||K===!0){e.activeTexture(i.TEXTURE0+O);let ht=$t.getPrimaries($t.workingColorSpace),xt=v.colorSpace===Wn?null:$t.getPrimaries(v.colorSpace),qt=v.colorSpace===Wn||ht===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let Q=x(v.image,!1,s.maxTextureSize);Q=Pt(v,Q);let vt=r.convert(v.format,v.colorSpace),Dt=r.convert(v.type),Ut=y(v.internalFormat,vt,Dt,v.colorSpace,v.isVideoTexture);Ot(X,v);let Mt,Yt=v.mipmaps,Vt=v.isVideoTexture!==!0,ce=Et.__version===void 0||K===!0,L=q.dataReady,ut=P(v,Q);if(v.isDepthTexture)Ut=_(v.format===Yi,v.type),ce&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,Ut,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,Ut,Q.width,Q.height,0,vt,Dt,null));else if(v.isDataTexture)if(Yt.length>0){Vt&&ce&&e.texStorage2D(i.TEXTURE_2D,ut,Ut,Yt[0].width,Yt[0].height);for(let W=0,$=Yt.length;W<$;W++)Mt=Yt[W],Vt?L&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,Mt.width,Mt.height,vt,Dt,Mt.data):e.texImage2D(i.TEXTURE_2D,W,Ut,Mt.width,Mt.height,0,vt,Dt,Mt.data);v.generateMipmaps=!1}else Vt?(ce&&e.texStorage2D(i.TEXTURE_2D,ut,Ut,Q.width,Q.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,vt,Dt,Q.data)):e.texImage2D(i.TEXTURE_2D,0,Ut,Q.width,Q.height,0,vt,Dt,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Vt&&ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Ut,Yt[0].width,Yt[0].height,Q.depth);for(let W=0,$=Yt.length;W<$;W++)if(Mt=Yt[W],v.format!==on)if(vt!==null)if(Vt){if(L)if(v.layerUpdates.size>0){let pt=Kl(Mt.width,Mt.height,v.format,v.type);for(let dt of v.layerUpdates){let kt=Mt.data.subarray(dt*pt/Mt.data.BYTES_PER_ELEMENT,(dt+1)*pt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,dt,Mt.width,Mt.height,1,vt,kt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Mt.width,Mt.height,Q.depth,vt,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Ut,Mt.width,Mt.height,Q.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,Mt.width,Mt.height,Q.depth,vt,Dt,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,Ut,Mt.width,Mt.height,Q.depth,0,vt,Dt,Mt.data)}else{Vt&&ce&&e.texStorage2D(i.TEXTURE_2D,ut,Ut,Yt[0].width,Yt[0].height);for(let W=0,$=Yt.length;W<$;W++)Mt=Yt[W],v.format!==on?vt!==null?Vt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,Mt.width,Mt.height,vt,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,W,Ut,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?L&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,Mt.width,Mt.height,vt,Dt,Mt.data):e.texImage2D(i.TEXTURE_2D,W,Ut,Mt.width,Mt.height,0,vt,Dt,Mt.data)}else if(v.isDataArrayTexture)if(Vt){if(ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Ut,Q.width,Q.height,Q.depth),L)if(v.layerUpdates.size>0){let W=Kl(Q.width,Q.height,v.format,v.type);for(let $ of v.layerUpdates){let pt=Q.data.subarray($*W/Q.data.BYTES_PER_ELEMENT,($+1)*W/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,Q.width,Q.height,1,vt,Dt,pt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,vt,Dt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ut,Q.width,Q.height,Q.depth,0,vt,Dt,Q.data);else if(v.isData3DTexture)Vt?(ce&&e.texStorage3D(i.TEXTURE_3D,ut,Ut,Q.width,Q.height,Q.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,vt,Dt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,Ut,Q.width,Q.height,Q.depth,0,vt,Dt,Q.data);else if(v.isFramebufferTexture){if(ce)if(Vt)e.texStorage2D(i.TEXTURE_2D,ut,Ut,Q.width,Q.height);else{let W=Q.width,$=Q.height;for(let pt=0;pt<ut;pt++)e.texImage2D(i.TEXTURE_2D,pt,Ut,W,$,0,vt,Dt,null),W>>=1,$>>=1}}else if(Yt.length>0){if(Vt&&ce){let W=gt(Yt[0]);e.texStorage2D(i.TEXTURE_2D,ut,Ut,W.width,W.height)}for(let W=0,$=Yt.length;W<$;W++)Mt=Yt[W],Vt?L&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,vt,Dt,Mt):e.texImage2D(i.TEXTURE_2D,W,Ut,vt,Dt,Mt);v.generateMipmaps=!1}else if(Vt){if(ce){let W=gt(Q);e.texStorage2D(i.TEXTURE_2D,ut,Ut,W.width,W.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Dt,Q)}else e.texImage2D(i.TEXTURE_2D,0,Ut,vt,Dt,Q);g(v)&&p(X),Et.__version=q.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function nt(w,v,O){if(v.image.length!==6)return;let X=Qt(w,v),K=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);let q=n.get(K);if(K.version!==q.__version||X===!0){e.activeTexture(i.TEXTURE0+O);let Et=$t.getPrimaries($t.workingColorSpace),ht=v.colorSpace===Wn?null:$t.getPrimaries(v.colorSpace),xt=v.colorSpace===Wn||Et===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let qt=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,vt=[];for(let $=0;$<6;$++)!qt&&!Q?vt[$]=x(v.image[$],!0,s.maxCubemapSize):vt[$]=Q?v.image[$].image:v.image[$],vt[$]=Pt(v,vt[$]);let Dt=vt[0],Ut=r.convert(v.format,v.colorSpace),Mt=r.convert(v.type),Yt=y(v.internalFormat,Ut,Mt,v.colorSpace),Vt=v.isVideoTexture!==!0,ce=q.__version===void 0||X===!0,L=K.dataReady,ut=P(v,Dt);Ot(i.TEXTURE_CUBE_MAP,v);let W;if(qt){Vt&&ce&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Yt,Dt.width,Dt.height);for(let $=0;$<6;$++){W=vt[$].mipmaps;for(let pt=0;pt<W.length;pt++){let dt=W[pt];v.format!==on?Ut!==null?Vt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,pt,0,0,dt.width,dt.height,Ut,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,pt,Yt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,pt,0,0,dt.width,dt.height,Ut,Mt,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,pt,Yt,dt.width,dt.height,0,Ut,Mt,dt.data)}}}else{if(W=v.mipmaps,Vt&&ce){W.length>0&&ut++;let $=gt(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Yt,$.width,$.height)}for(let $=0;$<6;$++)if(Q){Vt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,vt[$].width,vt[$].height,Ut,Mt,vt[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Yt,vt[$].width,vt[$].height,0,Ut,Mt,vt[$].data);for(let pt=0;pt<W.length;pt++){let kt=W[pt].image[$].image;Vt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,pt+1,0,0,kt.width,kt.height,Ut,Mt,kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,pt+1,Yt,kt.width,kt.height,0,Ut,Mt,kt.data)}}else{Vt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ut,Mt,vt[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Yt,Ut,Mt,vt[$]);for(let pt=0;pt<W.length;pt++){let dt=W[pt];Vt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,pt+1,0,0,Ut,Mt,dt.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,pt+1,Yt,Ut,Mt,dt.image[$])}}}g(v)&&p(i.TEXTURE_CUBE_MAP),q.__version=K.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function St(w,v,O,X,K,q){let Et=r.convert(O.format,O.colorSpace),ht=r.convert(O.type),xt=y(O.internalFormat,Et,ht,O.colorSpace),qt=n.get(v),Q=n.get(O);if(Q.__renderTarget=v,!qt.__hasExternalTextures){let vt=Math.max(1,v.width>>q),Dt=Math.max(1,v.height>>q);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,q,xt,vt,Dt,v.depth,0,Et,ht,null):e.texImage2D(K,q,xt,vt,Dt,0,Et,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),_t(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,K,Q.__webglTexture,0,j(v)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,K,Q.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(w,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),v.depthBuffer){let X=v.depthTexture,K=X&&X.isDepthTexture?X.type:null,q=_(v.stencilBuffer,K),Et=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=j(v);_t(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,q,v.width,v.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,q,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,w)}else{let X=v.textures;for(let K=0;K<X.length;K++){let q=X[K],Et=r.convert(q.format,q.colorSpace),ht=r.convert(q.type),xt=y(q.internalFormat,Et,ht,q.colorSpace),qt=j(v);O&&_t(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,xt,v.width,v.height):_t(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt,xt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,xt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function It(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let X=n.get(v.depthTexture);X.__renderTarget=v,(!X.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);let K=X.__webglTexture,q=j(v);if(v.depthTexture.format===zi)_t(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(v.depthTexture.format===Yi)_t(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Nt(w){let v=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){let X=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){let K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=X}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");It(v.__webglFramebuffer,w)}else if(O){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=i.createRenderbuffer(),rt(v.__webglDepthbuffer[X],w,!1);else{let K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,q)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),rt(v.__webglDepthbuffer,w,!1);else{let X=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,K)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(w,v,O){let X=n.get(w);v!==void 0&&St(X.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Nt(w)}function Zt(w){let v=w.texture,O=n.get(w),X=n.get(v);w.addEventListener("dispose",I);let K=w.textures,q=w.isWebGLCubeRenderTarget===!0,Et=K.length>1;if(Et||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=v.version,a.memory.textures++),q){O.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ht]=[];for(let xt=0;xt<v.mipmaps.length;xt++)O.__webglFramebuffer[ht][xt]=i.createFramebuffer()}else O.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ht=0;ht<v.mipmaps.length;ht++)O.__webglFramebuffer[ht]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Et)for(let ht=0,xt=K.length;ht<xt;ht++){let qt=n.get(K[ht]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&_t(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ht=0;ht<K.length;ht++){let xt=K[ht];O.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ht]);let qt=r.convert(xt.format,xt.colorSpace),Q=r.convert(xt.type),vt=y(xt.internalFormat,qt,Q,xt.colorSpace,w.isXRRenderTarget===!0),Dt=j(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,vt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,O.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(O.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Ot(i.TEXTURE_CUBE_MAP,v);for(let ht=0;ht<6;ht++)if(v.mipmaps&&v.mipmaps.length>0)for(let xt=0;xt<v.mipmaps.length;xt++)St(O.__webglFramebuffer[ht][xt],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,xt);else St(O.__webglFramebuffer[ht],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);g(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ht=0,xt=K.length;ht<xt;ht++){let qt=K[ht],Q=n.get(qt);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),Ot(i.TEXTURE_2D,qt),St(O.__webglFramebuffer,w,qt,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),g(qt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ht=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,X.__webglTexture),Ot(ht,v),v.mipmaps&&v.mipmaps.length>0)for(let xt=0;xt<v.mipmaps.length;xt++)St(O.__webglFramebuffer[xt],w,v,i.COLOR_ATTACHMENT0,ht,xt);else St(O.__webglFramebuffer,w,v,i.COLOR_ATTACHMENT0,ht,0);g(v)&&p(ht),e.unbindTexture()}w.depthBuffer&&Nt(w)}function J(w){let v=w.textures;for(let O=0,X=v.length;O<X;O++){let K=v[O];if(g(K)){let q=b(w),Et=n.get(K).__webglTexture;e.bindTexture(q,Et),p(q),e.unbindTexture()}}}let et=[],A=[];function Rt(w){if(w.samples>0){if(_t(w)===!1){let v=w.textures,O=w.width,X=w.height,K=i.COLOR_BUFFER_BIT,q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(w),ht=v.length>1;if(ht)for(let xt=0;xt<v.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let xt=0;xt<v.length;xt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[xt]);let qt=n.get(v[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,O,X,0,0,O,X,K,i.NEAREST),c===!0&&(et.length=0,A.length=0,et.push(i.COLOR_ATTACHMENT0+xt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(et.push(q),A.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,A)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let xt=0;xt<v.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[xt]);let qt=n.get(v[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let v=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function j(w){return Math.min(s.maxSamples,w.samples)}function _t(w){let v=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function at(w){let v=a.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function Pt(w,v){let O=w.colorSpace,X=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==ns&&O!==Wn&&($t.getTransfer(O)===ae?(X!==on||K!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function gt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=Z,this.setTexture2DArray=V,this.setTexture3D=tt,this.setTextureCube=G,this.rebindTextures=Lt,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=_t}function pg(i,t){function e(n,s=Wn){let r,a=$t.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===wc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Tc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ph)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===dh)return i.BYTE;if(n===fh)return i.SHORT;if(n===Ss)return i.UNSIGNED_SHORT;if(n===Ec)return i.INT;if(n===di)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===Ns)return i.HALF_FLOAT;if(n===mh)return i.ALPHA;if(n===gh)return i.RGB;if(n===on)return i.RGBA;if(n===xh)return i.LUMINANCE;if(n===_h)return i.LUMINANCE_ALPHA;if(n===zi)return i.DEPTH_COMPONENT;if(n===Yi)return i.DEPTH_STENCIL;if(n===Qr)return i.RED;if(n===Ac)return i.RED_INTEGER;if(n===yh)return i.RG;if(n===Rc)return i.RG_INTEGER;if(n===Cc)return i.RGBA_INTEGER;if(n===mr||n===gr||n===xr||n===_r)if(a===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===mr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===mr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lo||n===ho||n===uo||n===fo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===lo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ho)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===po||n===mo||n===go)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===po||n===mo)return a===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===go)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xo||n===_o||n===yo||n===vo||n===Mo||n===bo||n===So||n===Eo||n===wo||n===To||n===Ao||n===Ro||n===Co||n===Io)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_o)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Mo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===So)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Eo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wo)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===To)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ao)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ro)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Co)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Io)return a===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yr||n===Po||n===Do)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===yr)return a===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Po)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Do)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===vh||n===Lo||n===Uo||n===No)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===yr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Lo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Uo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===No)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ko=class extends Ce{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Xt=class extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}},mg={type:"move"},ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},gg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,jo=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new He,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new je({vertexShader:gg,fragmentShader:xg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Wt(new $i(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qo=class extends Zn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,x=new jo,g=e.getContextAttributes(),p=null,b=null,y=[],_=[],P=new st,R=null,I=new Ce;I.viewport=new oe;let D=new Ce;D.viewport=new oe;let E=[I,D],M=new Ko,C=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let nt=y[Y];return nt===void 0&&(nt=new ys,y[Y]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(Y){let nt=y[Y];return nt===void 0&&(nt=new ys,y[Y]=nt),nt.getGripSpace()},this.getHand=function(Y){let nt=y[Y];return nt===void 0&&(nt=new ys,y[Y]=nt),nt.getHandSpace()};function F(Y){let nt=_.indexOf(Y.inputSource);if(nt===-1)return;let St=y[nt];St!==void 0&&(St.update(Y.inputSource,Y.frame,l||a),St.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Z);for(let Y=0;Y<y.length;Y++){let nt=_[Y];nt!==null&&(_[Y]=null,y[Y].disconnect(nt))}C=null,B=null,x.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,b=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){let nt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Dn(f.framebufferWidth,f.framebufferHeight,{format:on,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let nt=null,St=null,rt=null;g.depth&&(rt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=g.stencil?Yi:zi,St=g.stencil?qi:di);let It={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(It),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new Dn(d.textureWidth,d.textureHeight,{format:on,type:Pn,depthTexture:new Dr(d.textureWidth,d.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Qt.setContext(s),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(Y){for(let nt=0;nt<Y.removed.length;nt++){let St=Y.removed[nt],rt=_.indexOf(St);rt>=0&&(_[rt]=null,y[rt].disconnect(St))}for(let nt=0;nt<Y.added.length;nt++){let St=Y.added[nt],rt=_.indexOf(St);if(rt===-1){for(let Nt=0;Nt<y.length;Nt++)if(Nt>=_.length){_.push(St),rt=Nt;break}else if(_[Nt]===null){_[Nt]=St,rt=Nt;break}if(rt===-1)break}let It=y[rt];It&&It.connect(St)}}let V=new T,tt=new T;function G(Y,nt,St){V.setFromMatrixPosition(nt.matrixWorld),tt.setFromMatrixPosition(St.matrixWorld);let rt=V.distanceTo(tt),It=nt.projectionMatrix.elements,Nt=St.projectionMatrix.elements,Lt=It[14]/(It[10]-1),Zt=It[14]/(It[10]+1),J=(It[9]+1)/It[5],et=(It[9]-1)/It[5],A=(It[8]-1)/It[0],Rt=(Nt[8]+1)/Nt[0],j=Lt*A,_t=Lt*Rt,at=rt/(-A+Rt),Pt=at*-A;if(nt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Pt),Y.translateZ(at),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),It[10]===-1)Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let gt=Lt+at,w=Zt+at,v=j-Pt,O=_t+(rt-Pt),X=J*Zt/w*gt,K=et*Zt/w*gt;Y.projectionMatrix.makePerspective(v,O,X,K,gt,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ot(Y,nt){nt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(nt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let nt=Y.near,St=Y.far;x.texture!==null&&(x.depthNear>0&&(nt=x.depthNear),x.depthFar>0&&(St=x.depthFar)),M.near=D.near=I.near=nt,M.far=D.far=I.far=St,(C!==M.near||B!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,B=M.far),I.layers.mask=Y.layers.mask|2,D.layers.mask=Y.layers.mask|4,M.layers.mask=I.layers.mask|D.layers.mask;let rt=Y.parent,It=M.cameras;ot(M,rt);for(let Nt=0;Nt<It.length;Nt++)ot(It[Nt],rt);It.length===2?G(M,I,D):M.projectionMatrix.copy(I.projectionMatrix),mt(Y,M,rt)};function mt(Y,nt,St){St===null?Y.matrix.copy(nt.matrixWorld):(Y.matrix.copy(St.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(nt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(nt.projectionMatrix),Y.projectionMatrixInverse.copy(nt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Es*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let bt=null;function Ot(Y,nt){if(h=nt.getViewerPose(l||a),m=nt,h!==null){let St=h.views;f!==null&&(t.setRenderTargetFramebuffer(b,f.framebuffer),t.setRenderTarget(b));let rt=!1;St.length!==M.cameras.length&&(M.cameras.length=0,rt=!0);for(let Nt=0;Nt<St.length;Nt++){let Lt=St[Nt],Zt=null;if(f!==null)Zt=f.getViewport(Lt);else{let et=u.getViewSubImage(d,Lt);Zt=et.viewport,Nt===0&&(t.setRenderTargetTextures(b,et.colorTexture,d.ignoreDepthValues?void 0:et.depthStencilTexture),t.setRenderTarget(b))}let J=E[Nt];J===void 0&&(J=new Ce,J.layers.enable(Nt),J.viewport=new oe,E[Nt]=J),J.matrix.fromArray(Lt.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Lt.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),Nt===0&&(M.matrix.copy(J.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),rt===!0&&M.cameras.push(J)}let It=s.enabledFeatures;if(It&&It.includes("depth-sensing")){let Nt=u.getDepthInformation(St[0]);Nt&&Nt.isValid&&Nt.texture&&x.init(t,Nt,s.renderState)}}for(let St=0;St<y.length;St++){let rt=_[St],It=y[St];rt!==null&&It!==void 0&&It.update(rt,nt,l||a)}bt&&bt(Y,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),m=null}let Qt=new Th;Qt.setAnimationLoop(Ot),this.setAnimationLoop=function(Y){bt=Y},this.dispose=function(){}}},ri=new Ln,_g=new de;function yg(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,wh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,b,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,b,y):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Se&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Se&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let b=t.get(p),y=b.envMap,_=b.envMapRotation;y&&(g.envMap.value=y,ri.copy(_),ri.x*=-1,ri.y*=-1,ri.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),g.envMapRotation.value.setFromMatrix4(_g.makeRotationFromEuler(ri)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,b,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Se&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let b=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function vg(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,y){let _=y.program;n.uniformBlockBinding(b,_)}function l(b,y){let _=s[b.id];_===void 0&&(m(b),_=h(b),s[b.id]=_,b.addEventListener("dispose",g));let P=y.program;n.updateUBOMapping(b,P);let R=t.render.frame;r[b.id]!==R&&(d(b),r[b.id]=R)}function h(b){let y=u();b.__bindingPointIndex=y;let _=i.createBuffer(),P=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,P,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let y=s[b.id],_=b.uniforms,P=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let R=0,I=_.length;R<I;R++){let D=Array.isArray(_[R])?_[R]:[_[R]];for(let E=0,M=D.length;E<M;E++){let C=D[E];if(f(C,R,E,P)===!0){let B=C.__offset,F=Array.isArray(C.value)?C.value:[C.value],H=0;for(let Z=0;Z<F.length;Z++){let V=F[Z],tt=x(V);typeof V=="number"||typeof V=="boolean"?(C.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,B+H,C.__data)):V.isMatrix3?(C.__data[0]=V.elements[0],C.__data[1]=V.elements[1],C.__data[2]=V.elements[2],C.__data[3]=0,C.__data[4]=V.elements[3],C.__data[5]=V.elements[4],C.__data[6]=V.elements[5],C.__data[7]=0,C.__data[8]=V.elements[6],C.__data[9]=V.elements[7],C.__data[10]=V.elements[8],C.__data[11]=0):(V.toArray(C.__data,H),H+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(b,y,_,P){let R=b.value,I=y+"_"+_;if(P[I]===void 0)return typeof R=="number"||typeof R=="boolean"?P[I]=R:P[I]=R.clone(),!0;{let D=P[I];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return P[I]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function m(b){let y=b.uniforms,_=0,P=16;for(let I=0,D=y.length;I<D;I++){let E=Array.isArray(y[I])?y[I]:[y[I]];for(let M=0,C=E.length;M<C;M++){let B=E[M],F=Array.isArray(B.value)?B.value:[B.value];for(let H=0,Z=F.length;H<Z;H++){let V=F[H],tt=x(V),G=_%P,ot=G%tt.boundary,mt=G+ot;_+=ot,mt!==0&&P-mt<tt.storage&&(_+=P-mt),B.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=tt.storage}}}let R=_%P;return R>0&&(_+=P-R),b.__size=_,b.__cache={},this}function x(b){let y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function g(b){let y=b.target;y.removeEventListener("dispose",g);let _=a.indexOf(y.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Lr=class{constructor(t={}){let{canvas:e=Sd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,b=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ke,this.toneMapping=Yn,this.toneMappingExposure=1;let _=this,P=!1,R=0,I=0,D=null,E=-1,M=null,C=new oe,B=new oe,F=null,H=new Bt(0),Z=0,V=e.width,tt=e.height,G=1,ot=null,mt=null,bt=new oe(0,0,V,tt),Ot=new oe(0,0,V,tt),Qt=!1,Y=new As,nt=!1,St=!1,rt=new de,It=new de,Nt=new T,Lt=new oe,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},J=!1;function et(){return D===null?G:1}let A=n;function Rt(S,U){return e.getContext(S,U)}try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),A===null){let U="webgl2";if(A=Rt(U,S),A===null)throw Rt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let j,_t,at,Pt,gt,w,v,O,X,K,q,Et,ht,xt,qt,Q,vt,Dt,Ut,Mt,Yt,Vt,ce,L;function ut(){j=new Fm(A),j.init(),Vt=new pg(A,j),_t=new Im(A,j,t,Vt),at=new ug(A,j),_t.reverseDepthBuffer&&d&&at.buffers.depth.setReversed(!0),Pt=new km(A),gt=new j0,w=new fg(A,j,at,gt,_t,Vt,Pt),v=new Dm(_),O=new Nm(_),X=new Xd(A),ce=new Rm(A,X),K=new Om(A,X,Pt,ce),q=new Hm(A,K,X,Pt),Ut=new zm(A,_t,w),Q=new Pm(gt),Et=new K0(_,v,O,j,_t,ce,Q),ht=new yg(_,gt),xt=new tg,qt=new ag(j),Dt=new Am(_,v,O,at,q,f,c),vt=new lg(_,q,_t),L=new vg(A,Pt,_t,at),Mt=new Cm(A,j,Pt),Yt=new Bm(A,j,Pt),Pt.programs=Et.programs,_.capabilities=_t,_.extensions=j,_.properties=gt,_.renderLists=xt,_.shadowMap=vt,_.state=at,_.info=Pt}ut();let W=new Qo(_,A);this.xr=W,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let S=j.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=j.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(S){S!==void 0&&(G=S,this.setSize(V,tt,!1))},this.getSize=function(S){return S.set(V,tt)},this.setSize=function(S,U,k=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=S,tt=U,e.width=Math.floor(S*G),e.height=Math.floor(U*G),k===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(V*G,tt*G).floor()},this.setDrawingBufferSize=function(S,U,k){V=S,tt=U,G=k,e.width=Math.floor(S*k),e.height=Math.floor(U*k),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(C)},this.getViewport=function(S){return S.copy(bt)},this.setViewport=function(S,U,k,z){S.isVector4?bt.set(S.x,S.y,S.z,S.w):bt.set(S,U,k,z),at.viewport(C.copy(bt).multiplyScalar(G).round())},this.getScissor=function(S){return S.copy(Ot)},this.setScissor=function(S,U,k,z){S.isVector4?Ot.set(S.x,S.y,S.z,S.w):Ot.set(S,U,k,z),at.scissor(B.copy(Ot).multiplyScalar(G).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(S){at.setScissorTest(Qt=S)},this.setOpaqueSort=function(S){ot=S},this.setTransparentSort=function(S){mt=S},this.getClearColor=function(S){return S.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(S=!0,U=!0,k=!0){let z=0;if(S){let N=!1;if(D!==null){let it=D.texture.format;N=it===Cc||it===Rc||it===Ac}if(N){let it=D.texture.type,ft=it===Pn||it===di||it===Ss||it===qi||it===wc||it===Tc,wt=Dt.getClearColor(),Tt=Dt.getClearAlpha(),Ft=wt.r,zt=wt.g,At=wt.b;ft?(m[0]=Ft,m[1]=zt,m[2]=At,m[3]=Tt,A.clearBufferuiv(A.COLOR,0,m)):(x[0]=Ft,x[1]=zt,x[2]=At,x[3]=Tt,A.clearBufferiv(A.COLOR,0,x))}else z|=A.COLOR_BUFFER_BIT}U&&(z|=A.DEPTH_BUFFER_BIT),k&&(z|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),xt.dispose(),qt.dispose(),gt.dispose(),v.dispose(),O.dispose(),q.dispose(),ce.dispose(),L.dispose(),Et.dispose(),W.dispose(),W.removeEventListener("sessionstart",Xc),W.removeEventListener("sessionend",qc),Qn.stop()};function $(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let S=Pt.autoReset,U=vt.enabled,k=vt.autoUpdate,z=vt.needsUpdate,N=vt.type;ut(),Pt.autoReset=S,vt.enabled=U,vt.autoUpdate=k,vt.needsUpdate=z,vt.type=N}function dt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function kt(S){let U=S.target;U.removeEventListener("dispose",kt),ge(U)}function ge(S){Te(S),gt.remove(S)}function Te(S){let U=gt.get(S).programs;U!==void 0&&(U.forEach(function(k){Et.releaseProgram(k)}),S.isShaderMaterial&&Et.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,k,z,N,it){U===null&&(U=Zt);let ft=N.isMesh&&N.matrixWorld.determinant()<0,wt=_u(S,U,k,z,N);at.setMaterial(z,ft);let Tt=k.index,Ft=1;if(z.wireframe===!0){if(Tt=K.getWireframeAttribute(k),Tt===void 0)return;Ft=2}let zt=k.drawRange,At=k.attributes.position,Kt=zt.start*Ft,le=(zt.start+zt.count)*Ft;it!==null&&(Kt=Math.max(Kt,it.start*Ft),le=Math.min(le,(it.start+it.count)*Ft)),Tt!==null?(Kt=Math.max(Kt,0),le=Math.min(le,Tt.count)):At!=null&&(Kt=Math.max(Kt,0),le=Math.min(le,At.count));let he=le-Kt;if(he<0||he===1/0)return;ce.setup(N,z,wt,k,Tt);let Be,te=Mt;if(Tt!==null&&(Be=X.get(Tt),te=Yt,te.setIndex(Be)),N.isMesh)z.wireframe===!0?(at.setLineWidth(z.wireframeLinewidth*et()),te.setMode(A.LINES)):te.setMode(A.TRIANGLES);else if(N.isLine){let Ct=z.linewidth;Ct===void 0&&(Ct=1),at.setLineWidth(Ct*et()),N.isLineSegments?te.setMode(A.LINES):N.isLineLoop?te.setMode(A.LINE_LOOP):te.setMode(A.LINE_STRIP)}else N.isPoints?te.setMode(A.POINTS):N.isSprite&&te.setMode(A.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)te.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))te.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Ct=N._multiDrawStarts,yn=N._multiDrawCounts,ee=N._multiDrawCount,en=Tt?X.get(Tt).bytesPerElement:1,yi=gt.get(z).currentProgram.getUniforms();for(let Ve=0;Ve<ee;Ve++)yi.setValue(A,"_gl_DrawID",Ve),te.render(Ct[Ve]/en,yn[Ve])}else if(N.isInstancedMesh)te.renderInstances(Kt,he,N.count);else if(k.isInstancedBufferGeometry){let Ct=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,yn=Math.min(k.instanceCount,Ct);te.renderInstances(Kt,he,yn)}else te.render(Kt,he)};function ie(S,U,k){S.transparent===!0&&S.side===ze&&S.forceSinglePass===!1?(S.side=Se,S.needsUpdate=!0,zs(S,U,k),S.side=mn,S.needsUpdate=!0,zs(S,U,k),S.side=ze):zs(S,U,k)}this.compile=function(S,U,k=null){k===null&&(k=S),p=qt.get(k),p.init(U),y.push(p),k.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),S!==k&&S.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let z=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let it=N.material;if(it)if(Array.isArray(it))for(let ft=0;ft<it.length;ft++){let wt=it[ft];ie(wt,k,N),z.add(wt)}else ie(it,k,N),z.add(it)}),y.pop(),p=null,z},this.compileAsync=function(S,U,k=null){let z=this.compile(S,U,k);return new Promise(N=>{function it(){if(z.forEach(function(ft){gt.get(ft).currentProgram.isReady()&&z.delete(ft)}),z.size===0){N(S);return}setTimeout(it,10)}j.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let tn=null;function _n(S){tn&&tn(S)}function Xc(){Qn.stop()}function qc(){Qn.start()}let Qn=new Th;Qn.setAnimationLoop(_n),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(S){tn=S,W.setAnimationLoop(S),S===null?Qn.stop():Qn.start()},W.addEventListener("sessionstart",Xc),W.addEventListener("sessionend",qc),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),S.isScene===!0&&S.onBeforeRender(_,S,U,D),p=qt.get(S,y.length),p.init(U),y.push(p),It.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(It),St=this.localClippingEnabled,nt=Q.init(this.clippingPlanes,St),g=xt.get(S,b.length),g.init(),b.push(g),W.enabled===!0&&W.isPresenting===!0){let it=_.xr.getDepthSensingMesh();it!==null&&ga(it,U,-1/0,_.sortObjects)}ga(S,U,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(ot,mt),J=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,J&&Dt.addToRenderList(g,S),this.info.render.frame++,nt===!0&&Q.beginShadows();let k=p.state.shadowsArray;vt.render(k,S,U),nt===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=g.opaque,N=g.transmissive;if(p.setupLights(),U.isArrayCamera){let it=U.cameras;if(N.length>0)for(let ft=0,wt=it.length;ft<wt;ft++){let Tt=it[ft];Zc(z,N,S,Tt)}J&&Dt.render(S);for(let ft=0,wt=it.length;ft<wt;ft++){let Tt=it[ft];Yc(g,S,Tt,Tt.viewport)}}else N.length>0&&Zc(z,N,S,U),J&&Dt.render(S),Yc(g,S,U);D!==null&&(w.updateMultisampleRenderTarget(D),w.updateRenderTargetMipmap(D)),S.isScene===!0&&S.onAfterRender(_,S,U),ce.resetDefaultState(),E=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],nt===!0&&Q.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?g=b[b.length-1]:g=null};function ga(S,U,k,z){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Y.intersectsSprite(S)){z&&Lt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(It);let ft=q.update(S),wt=S.material;wt.visible&&g.push(S,ft,wt,k,Lt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Y.intersectsObject(S))){let ft=q.update(S),wt=S.material;if(z&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Lt.copy(S.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Lt.copy(ft.boundingSphere.center)),Lt.applyMatrix4(S.matrixWorld).applyMatrix4(It)),Array.isArray(wt)){let Tt=ft.groups;for(let Ft=0,zt=Tt.length;Ft<zt;Ft++){let At=Tt[Ft],Kt=wt[At.materialIndex];Kt&&Kt.visible&&g.push(S,ft,Kt,k,Lt.z,At)}}else wt.visible&&g.push(S,ft,wt,k,Lt.z,null)}}let it=S.children;for(let ft=0,wt=it.length;ft<wt;ft++)ga(it[ft],U,k,z)}function Yc(S,U,k,z){let N=S.opaque,it=S.transmissive,ft=S.transparent;p.setupLightsView(k),nt===!0&&Q.setGlobalState(_.clippingPlanes,k),z&&at.viewport(C.copy(z)),N.length>0&&ks(N,U,k),it.length>0&&ks(it,U,k),ft.length>0&&ks(ft,U,k),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function Zc(S,U,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new Dn(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?Ns:Pn,minFilter:hi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$t.workingColorSpace}));let it=p.state.transmissionRenderTarget[z.id],ft=z.viewport||C;it.setSize(ft.z,ft.w);let wt=_.getRenderTarget();_.setRenderTarget(it),_.getClearColor(H),Z=_.getClearAlpha(),Z<1&&_.setClearColor(16777215,.5),_.clear(),J&&Dt.render(k);let Tt=_.toneMapping;_.toneMapping=Yn;let Ft=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),nt===!0&&Q.setGlobalState(_.clippingPlanes,z),ks(S,k,z),w.updateMultisampleRenderTarget(it),w.updateRenderTargetMipmap(it),j.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let At=0,Kt=U.length;At<Kt;At++){let le=U[At],he=le.object,Be=le.geometry,te=le.material,Ct=le.group;if(te.side===ze&&he.layers.test(z.layers)){let yn=te.side;te.side=Se,te.needsUpdate=!0,$c(he,k,z,Be,te,Ct),te.side=yn,te.needsUpdate=!0,zt=!0}}zt===!0&&(w.updateMultisampleRenderTarget(it),w.updateRenderTargetMipmap(it))}_.setRenderTarget(wt),_.setClearColor(H,Z),Ft!==void 0&&(z.viewport=Ft),_.toneMapping=Tt}function ks(S,U,k){let z=U.isScene===!0?U.overrideMaterial:null;for(let N=0,it=S.length;N<it;N++){let ft=S[N],wt=ft.object,Tt=ft.geometry,Ft=z===null?ft.material:z,zt=ft.group;wt.layers.test(k.layers)&&$c(wt,U,k,Tt,Ft,zt)}}function $c(S,U,k,z,N,it){S.onBeforeRender(_,U,k,z,N,it),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(_,U,k,z,S,it),N.transparent===!0&&N.side===ze&&N.forceSinglePass===!1?(N.side=Se,N.needsUpdate=!0,_.renderBufferDirect(k,U,z,N,S,it),N.side=mn,N.needsUpdate=!0,_.renderBufferDirect(k,U,z,N,S,it),N.side=ze):_.renderBufferDirect(k,U,z,N,S,it),S.onAfterRender(_,U,k,z,N,it)}function zs(S,U,k){U.isScene!==!0&&(U=Zt);let z=gt.get(S),N=p.state.lights,it=p.state.shadowsArray,ft=N.state.version,wt=Et.getParameters(S,N.state,it,U,k),Tt=Et.getProgramCacheKey(wt),Ft=z.programs;z.environment=S.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(S.isMeshStandardMaterial?O:v).get(S.envMap||z.environment),z.envMapRotation=z.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Ft===void 0&&(S.addEventListener("dispose",kt),Ft=new Map,z.programs=Ft);let zt=Ft.get(Tt);if(zt!==void 0){if(z.currentProgram===zt&&z.lightsStateVersion===ft)return Kc(S,wt),zt}else wt.uniforms=Et.getUniforms(S),S.onBeforeCompile(wt,_),zt=Et.acquireProgram(wt,Tt),Ft.set(Tt,zt),z.uniforms=wt.uniforms;let At=z.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(At.clippingPlanes=Q.uniform),Kc(S,wt),z.needsLights=vu(S),z.lightsStateVersion=ft,z.needsLights&&(At.ambientLightColor.value=N.state.ambient,At.lightProbe.value=N.state.probe,At.directionalLights.value=N.state.directional,At.directionalLightShadows.value=N.state.directionalShadow,At.spotLights.value=N.state.spot,At.spotLightShadows.value=N.state.spotShadow,At.rectAreaLights.value=N.state.rectArea,At.ltc_1.value=N.state.rectAreaLTC1,At.ltc_2.value=N.state.rectAreaLTC2,At.pointLights.value=N.state.point,At.pointLightShadows.value=N.state.pointShadow,At.hemisphereLights.value=N.state.hemi,At.directionalShadowMap.value=N.state.directionalShadowMap,At.directionalShadowMatrix.value=N.state.directionalShadowMatrix,At.spotShadowMap.value=N.state.spotShadowMap,At.spotLightMatrix.value=N.state.spotLightMatrix,At.spotLightMap.value=N.state.spotLightMap,At.pointShadowMap.value=N.state.pointShadowMap,At.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=zt,z.uniformsList=null,zt}function Jc(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=Vi.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Kc(S,U){let k=gt.get(S);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function _u(S,U,k,z,N){U.isScene!==!0&&(U=Zt),w.resetTextureUnits();let it=U.fog,ft=z.isMeshStandardMaterial?U.environment:null,wt=D===null?_.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ns,Tt=(z.isMeshStandardMaterial?O:v).get(z.envMap||ft),Ft=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,zt=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),At=!!k.morphAttributes.position,Kt=!!k.morphAttributes.normal,le=!!k.morphAttributes.color,he=Yn;z.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(he=_.toneMapping);let Be=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,te=Be!==void 0?Be.length:0,Ct=gt.get(z),yn=p.state.lights;if(nt===!0&&(St===!0||S!==M)){let Je=S===M&&z.id===E;Q.setState(z,S,Je)}let ee=!1;z.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==yn.state.version||Ct.outputColorSpace!==wt||N.isBatchedMesh&&Ct.batching===!1||!N.isBatchedMesh&&Ct.batching===!0||N.isBatchedMesh&&Ct.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ct.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ct.instancing===!1||!N.isInstancedMesh&&Ct.instancing===!0||N.isSkinnedMesh&&Ct.skinning===!1||!N.isSkinnedMesh&&Ct.skinning===!0||N.isInstancedMesh&&Ct.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ct.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ct.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ct.instancingMorph===!1&&N.morphTexture!==null||Ct.envMap!==Tt||z.fog===!0&&Ct.fog!==it||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==Q.numPlanes||Ct.numIntersection!==Q.numIntersection)||Ct.vertexAlphas!==Ft||Ct.vertexTangents!==zt||Ct.morphTargets!==At||Ct.morphNormals!==Kt||Ct.morphColors!==le||Ct.toneMapping!==he||Ct.morphTargetsCount!==te)&&(ee=!0):(ee=!0,Ct.__version=z.version);let en=Ct.currentProgram;ee===!0&&(en=zs(z,U,N));let yi=!1,Ve=!1,rs=!1,ue=en.getUniforms(),hn=Ct.uniforms;if(at.useProgram(en.program)&&(yi=!0,Ve=!0,rs=!0),z.id!==E&&(E=z.id,Ve=!0),yi||M!==S){at.buffers.depth.getReversed()?(rt.copy(S.projectionMatrix),wd(rt),Td(rt),ue.setValue(A,"projectionMatrix",rt)):ue.setValue(A,"projectionMatrix",S.projectionMatrix),ue.setValue(A,"viewMatrix",S.matrixWorldInverse);let Fn=ue.map.cameraPosition;Fn!==void 0&&Fn.setValue(A,Nt.setFromMatrixPosition(S.matrixWorld)),_t.logarithmicDepthBuffer&&ue.setValue(A,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ue.setValue(A,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,Ve=!0,rs=!0)}if(N.isSkinnedMesh){ue.setOptional(A,N,"bindMatrix"),ue.setOptional(A,N,"bindMatrixInverse");let Je=N.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),ue.setValue(A,"boneTexture",Je.boneTexture,w))}N.isBatchedMesh&&(ue.setOptional(A,N,"batchingTexture"),ue.setValue(A,"batchingTexture",N._matricesTexture,w),ue.setOptional(A,N,"batchingIdTexture"),ue.setValue(A,"batchingIdTexture",N._indirectTexture,w),ue.setOptional(A,N,"batchingColorTexture"),N._colorsTexture!==null&&ue.setValue(A,"batchingColorTexture",N._colorsTexture,w));let as=k.morphAttributes;if((as.position!==void 0||as.normal!==void 0||as.color!==void 0)&&Ut.update(N,k,en),(Ve||Ct.receiveShadow!==N.receiveShadow)&&(Ct.receiveShadow=N.receiveShadow,ue.setValue(A,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(hn.envMap.value=Tt,hn.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(hn.envMapIntensity.value=U.environmentIntensity),Ve&&(ue.setValue(A,"toneMappingExposure",_.toneMappingExposure),Ct.needsLights&&yu(hn,rs),it&&z.fog===!0&&ht.refreshFogUniforms(hn,it),ht.refreshMaterialUniforms(hn,z,G,tt,p.state.transmissionRenderTarget[S.id]),Vi.upload(A,Jc(Ct),hn,w)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Vi.upload(A,Jc(Ct),hn,w),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ue.setValue(A,"center",N.center),ue.setValue(A,"modelViewMatrix",N.modelViewMatrix),ue.setValue(A,"normalMatrix",N.normalMatrix),ue.setValue(A,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let Je=z.uniformsGroups;for(let Fn=0,On=Je.length;Fn<On;Fn++){let jc=Je[Fn];L.update(jc,en),L.bind(jc,en)}}return en}function yu(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function vu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(S,U,k){gt.get(S.texture).__webglTexture=U,gt.get(S.depthTexture).__webglTexture=k;let z=gt.get(S);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||j.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){let k=gt.get(S);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,k=0){D=S,R=U,I=k;let z=!0,N=null,it=!1,ft=!1;if(S){let Tt=gt.get(S);if(Tt.__useDefaultFramebuffer!==void 0)at.bindFramebuffer(A.FRAMEBUFFER,null),z=!1;else if(Tt.__webglFramebuffer===void 0)w.setupRenderTarget(S);else if(Tt.__hasExternalTextures)w.rebindTextures(S,gt.get(S.texture).__webglTexture,gt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let At=S.depthTexture;if(Tt.__boundDepthTexture!==At){if(At!==null&&gt.has(At)&&(S.width!==At.image.width||S.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(S)}}let Ft=S.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(ft=!0);let zt=gt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(zt[U])?N=zt[U][k]:N=zt[U],it=!0):S.samples>0&&w.useMultisampledRTT(S)===!1?N=gt.get(S).__webglMultisampledFramebuffer:Array.isArray(zt)?N=zt[k]:N=zt,C.copy(S.viewport),B.copy(S.scissor),F=S.scissorTest}else C.copy(bt).multiplyScalar(G).floor(),B.copy(Ot).multiplyScalar(G).floor(),F=Qt;if(at.bindFramebuffer(A.FRAMEBUFFER,N)&&z&&at.drawBuffers(S,N),at.viewport(C),at.scissor(B),at.setScissorTest(F),it){let Tt=gt.get(S.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+U,Tt.__webglTexture,k)}else if(ft){let Tt=gt.get(S.texture),Ft=U||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,Tt.__webglTexture,k||0,Ft)}E=-1},this.readRenderTargetPixels=function(S,U,k,z,N,it,ft){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=gt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ft!==void 0&&(wt=wt[ft]),wt){at.bindFramebuffer(A.FRAMEBUFFER,wt);try{let Tt=S.texture,Ft=Tt.format,zt=Tt.type;if(!_t.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-z&&k>=0&&k<=S.height-N&&A.readPixels(U,k,z,N,Vt.convert(Ft),Vt.convert(zt),it)}finally{let Tt=D!==null?gt.get(D).__webglFramebuffer:null;at.bindFramebuffer(A.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(S,U,k,z,N,it,ft){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=gt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ft!==void 0&&(wt=wt[ft]),wt){let Tt=S.texture,Ft=Tt.format,zt=Tt.type;if(!_t.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-z&&k>=0&&k<=S.height-N){at.bindFramebuffer(A.FRAMEBUFFER,wt);let At=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,At),A.bufferData(A.PIXEL_PACK_BUFFER,it.byteLength,A.STREAM_READ),A.readPixels(U,k,z,N,Vt.convert(Ft),Vt.convert(zt),0);let Kt=D!==null?gt.get(D).__webglFramebuffer:null;at.bindFramebuffer(A.FRAMEBUFFER,Kt);let le=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Ed(A,le,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,At),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,it),A.deleteBuffer(At),A.deleteSync(le),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,U=null,k=0){S.isTexture!==!0&&(ms("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);let z=Math.pow(2,-k),N=Math.floor(S.image.width*z),it=Math.floor(S.image.height*z),ft=U!==null?U.x:0,wt=U!==null?U.y:0;w.setTexture2D(S,0),A.copyTexSubImage2D(A.TEXTURE_2D,k,0,0,ft,wt,N,it),at.unbindTexture()},this.copyTextureToTexture=function(S,U,k=null,z=null,N=0){S.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,S=arguments[1],U=arguments[2],N=arguments[3]||0,k=null);let it,ft,wt,Tt,Ft,zt,At,Kt,le,he=S.isCompressedTexture?S.mipmaps[N]:S.image;k!==null?(it=k.max.x-k.min.x,ft=k.max.y-k.min.y,wt=k.isBox3?k.max.z-k.min.z:1,Tt=k.min.x,Ft=k.min.y,zt=k.isBox3?k.min.z:0):(it=he.width,ft=he.height,wt=he.depth||1,Tt=0,Ft=0,zt=0),z!==null?(At=z.x,Kt=z.y,le=z.z):(At=0,Kt=0,le=0);let Be=Vt.convert(U.format),te=Vt.convert(U.type),Ct;U.isData3DTexture?(w.setTexture3D(U,0),Ct=A.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(w.setTexture2DArray(U,0),Ct=A.TEXTURE_2D_ARRAY):(w.setTexture2D(U,0),Ct=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,U.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,U.unpackAlignment);let yn=A.getParameter(A.UNPACK_ROW_LENGTH),ee=A.getParameter(A.UNPACK_IMAGE_HEIGHT),en=A.getParameter(A.UNPACK_SKIP_PIXELS),yi=A.getParameter(A.UNPACK_SKIP_ROWS),Ve=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,he.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,he.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Tt),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ft),A.pixelStorei(A.UNPACK_SKIP_IMAGES,zt);let rs=S.isDataArrayTexture||S.isData3DTexture,ue=U.isDataArrayTexture||U.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let hn=gt.get(S),as=gt.get(U),Je=gt.get(hn.__renderTarget),Fn=gt.get(as.__renderTarget);at.bindFramebuffer(A.READ_FRAMEBUFFER,Je.__webglFramebuffer),at.bindFramebuffer(A.DRAW_FRAMEBUFFER,Fn.__webglFramebuffer);for(let On=0;On<wt;On++)rs&&A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,gt.get(S).__webglTexture,N,zt+On),S.isDepthTexture?(ue&&A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,gt.get(U).__webglTexture,N,le+On),A.blitFramebuffer(Tt,Ft,it,ft,At,Kt,it,ft,A.DEPTH_BUFFER_BIT,A.NEAREST)):ue?A.copyTexSubImage3D(Ct,N,At,Kt,le+On,Tt,Ft,it,ft):A.copyTexSubImage2D(Ct,N,At,Kt,le+On,Tt,Ft,it,ft);at.bindFramebuffer(A.READ_FRAMEBUFFER,null),at.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else ue?S.isDataTexture||S.isData3DTexture?A.texSubImage3D(Ct,N,At,Kt,le,it,ft,wt,Be,te,he.data):U.isCompressedArrayTexture?A.compressedTexSubImage3D(Ct,N,At,Kt,le,it,ft,wt,Be,he.data):A.texSubImage3D(Ct,N,At,Kt,le,it,ft,wt,Be,te,he):S.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,N,At,Kt,it,ft,Be,te,he.data):S.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,N,At,Kt,he.width,he.height,Be,he.data):A.texSubImage2D(A.TEXTURE_2D,N,At,Kt,it,ft,Be,te,he);A.pixelStorei(A.UNPACK_ROW_LENGTH,yn),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ee),A.pixelStorei(A.UNPACK_SKIP_PIXELS,en),A.pixelStorei(A.UNPACK_SKIP_ROWS,yi),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ve),N===0&&U.generateMipmaps&&A.generateMipmap(Ct),at.unbindTexture()},this.copyTextureToTexture3D=function(S,U,k=null,z=null,N=0){return S.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,z=arguments[1]||null,S=arguments[2],U=arguments[3],N=arguments[4]||0),ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,U,k,z,N)},this.initRenderTarget=function(S){gt.get(S).__webglFramebuffer===void 0&&w.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?w.setTextureCube(S,0):S.isData3DTexture?w.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?w.setTexture2DArray(S,0):w.setTexture2D(S,0),at.unbindTexture()},this.resetState=function(){R=0,I=0,D=null,at.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}};var Ur=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Bt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Nr=class extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},tc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Oo,this.updateRanges=[],this.version=0,this.uuid=pn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Le=new T,Fr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=an(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=an(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=an(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=an(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=an(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array),r=se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Xe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},pi=class extends Jn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ui,us=new T,Ni=new T,Fi=new T,Oi=new st,ds=new st,Ph=new de,cr=new T,fs=new T,lr=new T,jl=new st,Xa=new st,Ql=new st,Ji=class extends Ie{constructor(t=new pi){if(super(),this.isSprite=!0,this.type="Sprite",Ui===void 0){Ui=new Fe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new tc(e,5);Ui.setIndex([0,1,2,0,2,3]),Ui.setAttribute("position",new Fr(n,3,0,!1)),Ui.setAttribute("uv",new Fr(n,2,3,!1))}this.geometry=Ui,this.material=t,this.center=new st(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ni.setFromMatrixScale(this.matrixWorld),Ph.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Fi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ni.multiplyScalar(-Fi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;hr(cr.set(-.5,-.5,0),Fi,a,Ni,s,r),hr(fs.set(.5,-.5,0),Fi,a,Ni,s,r),hr(lr.set(.5,.5,0),Fi,a,Ni,s,r),jl.set(0,0),Xa.set(1,0),Ql.set(1,1);let o=t.ray.intersectTriangle(cr,fs,lr,!1,us);if(o===null&&(hr(fs.set(-.5,.5,0),Fi,a,Ni,s,r),Xa.set(0,1),o=t.ray.intersectTriangle(cr,lr,fs,!1,us),o===null))return;let c=t.ray.origin.distanceTo(us);c<t.near||c>t.far||e.push({distance:c,point:us.clone(),uv:Xn.getInterpolation(us,cr,fs,lr,jl,Xa,Ql,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function hr(i,t,e,n,s,r){Oi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ds.x=r*Oi.x-s*Oi.y,ds.y=s*Oi.x+r*Oi.y):ds.copy(Oi),i.copy(t),i.x+=ds.x,i.y+=ds.y,i.applyMatrix4(Ph)}var Or=class extends He{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Ne,h=Ne,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ki=class extends He{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Qe=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new st:new T);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new T,s=[],r=[],a=[],o=new T,c=new de;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new T)}r[0]=new T,a[0]=new T;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Ee(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Ee(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Rs=class extends Qe{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new st){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ec=class extends Rs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Dc(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var ur=new T,qa=new Dc,Ya=new Dc,Za=new Dc,nc=class extends Qe{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new T){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(ur.subVectors(s[0],s[1]).add(s[0]),l=ur);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(ur.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ur),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),qa.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,x,g),Ya.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,x,g),Za.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,x,g)}else this.curveType==="catmullrom"&&(qa.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ya.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Za.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(qa.calc(c),Ya.calc(c),Za.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new T().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function th(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Mg(i,t){let e=1-i;return e*e*t}function bg(i,t){return 2*(1-i)*i*t}function Sg(i,t){return i*i*t}function vs(i,t,e,n){return Mg(i,t)+bg(i,e)+Sg(i,n)}function Eg(i,t){let e=1-i;return e*e*e*t}function wg(i,t){let e=1-i;return 3*e*e*i*t}function Tg(i,t){return 3*(1-i)*i*i*t}function Ag(i,t){return i*i*i*t}function Ms(i,t,e,n,s){return Eg(i,t)+wg(i,e)+Tg(i,n)+Ag(i,s)}var Br=class extends Qe{constructor(t=new st,e=new st,n=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new st){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ms(t,s.x,r.x,a.x,o.x),Ms(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ic=class extends Qe{constructor(t=new T,e=new T,n=new T,s=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new T){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ms(t,s.x,r.x,a.x,o.x),Ms(t,s.y,r.y,a.y,o.y),Ms(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},kr=class extends Qe{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},sc=class extends Qe{constructor(t=new T,e=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new T){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new T){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zr=class extends Qe{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(vs(t,s.x,r.x,a.x),vs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},rc=class extends Qe{constructor(t=new T,e=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(vs(t,s.x,r.x,a.x),vs(t,s.y,r.y,a.y),vs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hr=class extends Qe{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(th(o,c.x,l.x,h.x,u.x),th(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new st().fromArray(s))}return this}},ac=Object.freeze({__proto__:null,ArcCurve:ec,CatmullRomCurve3:nc,CubicBezierCurve:Br,CubicBezierCurve3:ic,EllipseCurve:Rs,LineCurve:kr,LineCurve3:sc,QuadraticBezierCurve:zr,QuadraticBezierCurve3:rc,SplineCurve:Hr}),oc=class extends Qe{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ac[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new ac[s.type]().fromJSON(s))}return this}},Vr=class extends oc{constructor(t){super(),this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new kr(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new zr(this.currentPoint.clone(),new st(t,e),new st(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Br(this.currentPoint.clone(),new st(t,e),new st(n,s),new st(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Hr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let l=new Rs(t,e,n,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}};var ji=class i extends Fe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new T,h=new st;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(o,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},jt=class i extends Fe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],m=0,x=[],g=n/2,p=0;b(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(f,2));function b(){let _=new T,P=new T,R=0,I=(e-t)/n;for(let D=0;D<=r;D++){let E=[],M=D/r,C=M*(e-t)+t;for(let B=0;B<=s;B++){let F=B/s,H=F*c+o,Z=Math.sin(H),V=Math.cos(H);P.x=C*Z,P.y=-M*n+g,P.z=C*V,u.push(P.x,P.y,P.z),_.set(Z,I,V).normalize(),d.push(_.x,_.y,_.z),f.push(F,1-M),E.push(m++)}x.push(E)}for(let D=0;D<s;D++)for(let E=0;E<r;E++){let M=x[E][D],C=x[E+1][D],B=x[E+1][D+1],F=x[E][D+1];(t>0||E!==0)&&(h.push(M,C,F),R+=3),(e>0||E!==r-1)&&(h.push(C,B,F),R+=3)}l.addGroup(p,R,0),p+=R}function y(_){let P=m,R=new st,I=new T,D=0,E=_===!0?t:e,M=_===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),m++;let C=m;for(let B=0;B<=s;B++){let H=B/s*c+o,Z=Math.cos(H),V=Math.sin(H);I.x=E*V,I.y=g*M,I.z=E*Z,u.push(I.x,I.y,I.z),d.push(0,M,0),R.x=Z*.5+.5,R.y=V*.5*M+.5,f.push(R.x,R.y),m++}for(let B=0;B<s;B++){let F=P+B,H=C+B;_===!0?h.push(H,H+1,F):h.push(H+1,H,F),D+=3}l.addGroup(p,D,_===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qe=class i extends jt{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Cs=class i extends Fe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let y=new T,_=new T,P=new T;for(let R=0;R<e.length;R+=3)f(e[R+0],y),f(e[R+1],_),f(e[R+2],P),c(y,_,P,b)}function c(b,y,_,P){let R=P+1,I=[];for(let D=0;D<=R;D++){I[D]=[];let E=b.clone().lerp(_,D/R),M=y.clone().lerp(_,D/R),C=R-D;for(let B=0;B<=C;B++)B===0&&D===R?I[D][B]=E:I[D][B]=E.clone().lerp(M,B/C)}for(let D=0;D<R;D++)for(let E=0;E<2*(R-D)-1;E++){let M=Math.floor(E/2);E%2===0?(d(I[D][M+1]),d(I[D+1][M]),d(I[D][M])):(d(I[D][M+1]),d(I[D+1][M+1]),d(I[D+1][M]))}}function l(b){let y=new T;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(b),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function h(){let b=new T;for(let y=0;y<r.length;y+=3){b.x=r[y+0],b.y=r[y+1],b.z=r[y+2];let _=g(b)/2/Math.PI+.5,P=p(b)/Math.PI+.5;a.push(_,1-P)}m(),u()}function u(){for(let b=0;b<a.length;b+=6){let y=a[b+0],_=a[b+2],P=a[b+4],R=Math.max(y,_,P),I=Math.min(y,_,P);R>.9&&I<.1&&(y<.2&&(a[b+0]+=1),_<.2&&(a[b+2]+=1),P<.2&&(a[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function f(b,y){let _=b*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function m(){let b=new T,y=new T,_=new T,P=new T,R=new st,I=new st,D=new st;for(let E=0,M=0;E<r.length;E+=9,M+=6){b.set(r[E+0],r[E+1],r[E+2]),y.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),R.set(a[M+0],a[M+1]),I.set(a[M+2],a[M+3]),D.set(a[M+4],a[M+5]),P.copy(b).add(y).add(_).divideScalar(3);let C=g(P);x(R,M+0,b,C),x(I,M+2,y,C),x(D,M+4,_,C)}}function x(b,y,_,P){P<0&&b.x===1&&(a[y]=b.x-1),_.x===0&&_.z===0&&(a[y]=P/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.details)}},Gr=class i extends Cs{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Qi=class extends Vr{constructor(t){super(t),this.uuid=pn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Vr().fromJSON(s))}return this}},Rg={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Dh(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,d,f;if(n&&(r=Lg(i,t,r,e)),i.length>80*e){o=l=i[0],c=h=i[1];for(let m=e;m<s;m+=e)u=i[m],d=i[m+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-o,h-c),f=f!==0?32767/f:0}return Is(r,a,e,o,c,f,0),a}};function Dh(i,t,e,n,s){let r,a;if(s===Wg(i,t,e,n)>0)for(r=t;r<e;r+=n)a=eh(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=eh(r,i[r],i[r+1],a);return a&&na(a,a.next)&&(Ds(a),a=a.next),a}function mi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(na(e,e.next)||pe(e.prev,e,e.next)===0)){if(Ds(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Is(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Bg(i,n,s,r);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Ig(i,n,s,r):Cg(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Ds(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Pg(mi(i),t,e),Is(i,t,e,n,s,r,2)):a===2&&Dg(i,t,e,n,s,r):Is(mi(i),t,e,n,s,r,1);break}}}function Cg(i){let t=i.prev,e=i,n=i.next;if(pe(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=s>r?s>a?s:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&ki(s,o,r,c,a,l,m.x,m.y)&&pe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Ig(i,t,e,n){let s=i.prev,r=i,a=i.next;if(pe(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,f=o<c?o<l?o:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,x=o>c?o>l?o:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,p=cc(f,m,t,e,n),b=cc(x,g,t,e,n),y=i.prevZ,_=i.nextZ;for(;y&&y.z>=p&&_&&_.z<=b;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==a&&ki(o,h,c,u,l,d,y.x,y.y)&&pe(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&ki(o,h,c,u,l,d,_.x,_.y)&&pe(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==s&&y!==a&&ki(o,h,c,u,l,d,y.x,y.y)&&pe(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=b;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&ki(o,h,c,u,l,d,_.x,_.y)&&pe(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Pg(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!na(s,r)&&Lh(s,n,n.next,r)&&Ps(s,r)&&Ps(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ds(n),Ds(n.next),n=i=r),n=n.next}while(n!==i);return mi(n)}function Dg(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Hg(a,o)){let c=Uh(a,o);a=mi(a,a.next),c=mi(c,c.next),Is(a,t,e,n,s,r,0),Is(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Lg(i,t,e,n){let s=[],r,a,o,c,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=Dh(i,o,c,n,!1),l===l.next&&(l.steiner=!0),s.push(zg(l));for(s.sort(Ug),r=0;r<s.length;r++)e=Ng(s[r],e);return e}function Ug(i,t){return i.x-t.x}function Ng(i,t){let e=Fg(i,t);if(!e)return t;let n=Uh(e,i);return mi(n,n.next),mi(e,e.next)}function Fg(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&ki(a<l?r:n,a,c,l,a<l?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Ps(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Og(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function Og(i,t){return pe(i.prev,i,t.prev)<0&&pe(t.next,i,i.next)<0}function Bg(i,t,e,n){let s=i;do s.z===0&&(s.z=cc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,kg(s)}function kg(i){let t,e,n,s,r,a,o,c,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function cc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function zg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ki(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Hg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Vg(i,t)&&(Ps(i,t)&&Ps(t,i)&&Gg(i,t)&&(pe(i.prev,i,t.prev)||pe(i,t.prev,t))||na(i,t)&&pe(i.prev,i,i.next)>0&&pe(t.prev,t,t.next)>0)}function pe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function na(i,t){return i.x===t.x&&i.y===t.y}function Lh(i,t,e,n){let s=fr(pe(i,t,e)),r=fr(pe(i,t,n)),a=fr(pe(e,n,i)),o=fr(pe(e,n,t));return!!(s!==r&&a!==o||s===0&&dr(i,e,t)||r===0&&dr(i,n,t)||a===0&&dr(e,i,n)||o===0&&dr(e,t,n))}function dr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function fr(i){return i>0?1:i<0?-1:0}function Vg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Lh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ps(i,t){return pe(i.prev,i,i.next)<0?pe(i,t,i.next)>=0&&pe(i,i.prev,t)>=0:pe(i,t,i.prev)<0||pe(i,i.next,t)<0}function Gg(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Uh(i,t){let e=new lc(i.i,i.x,i.y),n=new lc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function eh(i,t,e,n){let s=new lc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ds(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function lc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Wg(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var bs=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];nh(t),ih(n,t);let a=t.length;e.forEach(nh);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,ih(n,e[c]);let o=Rg.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function nh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function ih(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Ls=class i extends Fe{constructor(t=new Qi([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new re(s,3)),this.setAttribute("uv",new re(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Xg,y,_=!1,P,R,I,D;p&&(y=p.getSpacedPoints(h),_=!0,d=!1,P=p.computeFrenetFrames(h,!1),R=new T,I=new T,D=new T),d||(g=0,f=0,m=0,x=0);let E=o.extractPoints(l),M=E.shape,C=E.holes;if(!bs.isClockWise(M)){M=M.reverse();for(let J=0,et=C.length;J<et;J++){let A=C[J];bs.isClockWise(A)&&(C[J]=A.reverse())}}let F=bs.triangulateShape(M,C),H=M;for(let J=0,et=C.length;J<et;J++){let A=C[J];M=M.concat(A)}function Z(J,et,A){return et||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(et,A)}let V=M.length,tt=F.length;function G(J,et,A){let Rt,j,_t,at=J.x-et.x,Pt=J.y-et.y,gt=A.x-J.x,w=A.y-J.y,v=at*at+Pt*Pt,O=at*w-Pt*gt;if(Math.abs(O)>Number.EPSILON){let X=Math.sqrt(v),K=Math.sqrt(gt*gt+w*w),q=et.x-Pt/X,Et=et.y+at/X,ht=A.x-w/K,xt=A.y+gt/K,qt=((ht-q)*w-(xt-Et)*gt)/(at*w-Pt*gt);Rt=q+at*qt-J.x,j=Et+Pt*qt-J.y;let Q=Rt*Rt+j*j;if(Q<=2)return new st(Rt,j);_t=Math.sqrt(Q/2)}else{let X=!1;at>Number.EPSILON?gt>Number.EPSILON&&(X=!0):at<-Number.EPSILON?gt<-Number.EPSILON&&(X=!0):Math.sign(Pt)===Math.sign(w)&&(X=!0),X?(Rt=-Pt,j=at,_t=Math.sqrt(v)):(Rt=at,j=Pt,_t=Math.sqrt(v/2))}return new st(Rt/_t,j/_t)}let ot=[];for(let J=0,et=H.length,A=et-1,Rt=J+1;J<et;J++,A++,Rt++)A===et&&(A=0),Rt===et&&(Rt=0),ot[J]=G(H[J],H[A],H[Rt]);let mt=[],bt,Ot=ot.concat();for(let J=0,et=C.length;J<et;J++){let A=C[J];bt=[];for(let Rt=0,j=A.length,_t=j-1,at=Rt+1;Rt<j;Rt++,_t++,at++)_t===j&&(_t=0),at===j&&(at=0),bt[Rt]=G(A[Rt],A[_t],A[at]);mt.push(bt),Ot=Ot.concat(bt)}for(let J=0;J<g;J++){let et=J/g,A=f*Math.cos(et*Math.PI/2),Rt=m*Math.sin(et*Math.PI/2)+x;for(let j=0,_t=H.length;j<_t;j++){let at=Z(H[j],ot[j],Rt);rt(at.x,at.y,-A)}for(let j=0,_t=C.length;j<_t;j++){let at=C[j];bt=mt[j];for(let Pt=0,gt=at.length;Pt<gt;Pt++){let w=Z(at[Pt],bt[Pt],Rt);rt(w.x,w.y,-A)}}}let Qt=m+x;for(let J=0;J<V;J++){let et=d?Z(M[J],Ot[J],Qt):M[J];_?(I.copy(P.normals[0]).multiplyScalar(et.x),R.copy(P.binormals[0]).multiplyScalar(et.y),D.copy(y[0]).add(I).add(R),rt(D.x,D.y,D.z)):rt(et.x,et.y,0)}for(let J=1;J<=h;J++)for(let et=0;et<V;et++){let A=d?Z(M[et],Ot[et],Qt):M[et];_?(I.copy(P.normals[J]).multiplyScalar(A.x),R.copy(P.binormals[J]).multiplyScalar(A.y),D.copy(y[J]).add(I).add(R),rt(D.x,D.y,D.z)):rt(A.x,A.y,u/h*J)}for(let J=g-1;J>=0;J--){let et=J/g,A=f*Math.cos(et*Math.PI/2),Rt=m*Math.sin(et*Math.PI/2)+x;for(let j=0,_t=H.length;j<_t;j++){let at=Z(H[j],ot[j],Rt);rt(at.x,at.y,u+A)}for(let j=0,_t=C.length;j<_t;j++){let at=C[j];bt=mt[j];for(let Pt=0,gt=at.length;Pt<gt;Pt++){let w=Z(at[Pt],bt[Pt],Rt);_?rt(w.x,w.y+y[h-1].y,y[h-1].x+A):rt(w.x,w.y,u+A)}}}Y(),nt();function Y(){let J=s.length/3;if(d){let et=0,A=V*et;for(let Rt=0;Rt<tt;Rt++){let j=F[Rt];It(j[2]+A,j[1]+A,j[0]+A)}et=h+g*2,A=V*et;for(let Rt=0;Rt<tt;Rt++){let j=F[Rt];It(j[0]+A,j[1]+A,j[2]+A)}}else{for(let et=0;et<tt;et++){let A=F[et];It(A[2],A[1],A[0])}for(let et=0;et<tt;et++){let A=F[et];It(A[0]+V*h,A[1]+V*h,A[2]+V*h)}}n.addGroup(J,s.length/3-J,0)}function nt(){let J=s.length/3,et=0;St(H,et),et+=H.length;for(let A=0,Rt=C.length;A<Rt;A++){let j=C[A];St(j,et),et+=j.length}n.addGroup(J,s.length/3-J,1)}function St(J,et){let A=J.length;for(;--A>=0;){let Rt=A,j=A-1;j<0&&(j=J.length-1);for(let _t=0,at=h+g*2;_t<at;_t++){let Pt=V*_t,gt=V*(_t+1),w=et+Rt+Pt,v=et+j+Pt,O=et+j+gt,X=et+Rt+gt;Nt(w,v,O,X)}}}function rt(J,et,A){c.push(J),c.push(et),c.push(A)}function It(J,et,A){Lt(J),Lt(et),Lt(A);let Rt=s.length/3,j=b.generateTopUV(n,s,Rt-3,Rt-2,Rt-1);Zt(j[0]),Zt(j[1]),Zt(j[2])}function Nt(J,et,A,Rt){Lt(J),Lt(et),Lt(Rt),Lt(et),Lt(A),Lt(Rt);let j=s.length/3,_t=b.generateSideWallUV(n,s,j-6,j-3,j-2,j-1);Zt(_t[0]),Zt(_t[1]),Zt(_t[3]),Zt(_t[1]),Zt(_t[2]),Zt(_t[3])}function Lt(J){s.push(c[J*3+0]),s.push(c[J*3+1]),s.push(c[J*3+2])}function Zt(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return qg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ac[s.type]().fromJSON(s)),new i(n,t.options)}},Xg={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new st(r,a),new st(o,c),new st(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],m=t[s*3+2],x=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new st(a,1-c),new st(l,1-u),new st(d,1-m),new st(x,1-p)]:[new st(o,1-c),new st(h,1-u),new st(f,1-m),new st(g,1-p)]}};function qg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Wr=class i extends Cs{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Kn=class i extends Cs{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Xr=class i extends Fe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=t,d=(e-t)/s,f=new T,m=new st;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let p=r+g/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let x=0;x<s;x++){let g=x*(n+1);for(let p=0;p<n;p++){let b=p+g,y=b,_=b+n+1,P=b+n+2,R=b+1;o.push(y,_,R),o.push(_,P,R)}}this.setIndex(o),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ne=class i extends Fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new T,d=new T,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let b=[],y=p/n,_=0;p===0&&a===0?_=.5/e:p===n&&c===Math.PI&&(_=-.5/e);for(let P=0;P<=e;P++){let R=P/e;u.x=-t*Math.cos(s+R*r)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(s+R*r)*Math.sin(a+y*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),g.push(R+_,1-y),b.push(l++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){let y=h[p][b+1],_=h[p][b],P=h[p+1][b],R=h[p+1][b+1];(p!==0||a>0)&&f.push(y,_,R),(p!==n-1||c<Math.PI)&&f.push(_,P,R)}this.setIndex(f),this.setAttribute("position",new re(m,3)),this.setAttribute("normal",new re(x,3)),this.setAttribute("uv",new re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var cn=class i extends Fe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new T,u=new T,d=new T;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let x=m/s*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(x),u.y=(t+e*Math.cos(g))*Math.sin(x),u.z=e*Math.sin(g),o.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let x=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,b=(s+1)*f+m;a.push(x,g,b),a.push(g,p,b)}this.setIndex(a),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ts=class extends Jn{static get type(){return"MeshToonMaterial"}constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Bt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mh,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function pr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Yg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var es=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},hc=class extends es{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nl,endingEnd:nl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case il:r=t,o=2*e-n;break;case sl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case il:a=t,c=2*n-e;break;case sl:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,b=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,y=(-1-f)*g+(1.5+f)*x+.5*m,_=f*g-f*x;for(let P=0;P!==o;++P)r[P]=p*a[h+P]+b*a[l+P]+y*a[c+P]+_*a[u+P];return r}},uc=class extends es{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},dc=class extends es{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ln=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=pr(e,this.TimeBufferType),this.values=pr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:pr(t.times,Array),values:pr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new dc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new uc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new hc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case vr:e=this.InterpolantFactoryMethodDiscrete;break;case Fo:e=this.InterpolantFactoryMethodLinear;break;case _a:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return Fo;case this.InterpolantFactoryMethodSmooth:return _a}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Yg(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===_a,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let x=e[u+m];if(x!==e[d+m]||x!==e[f+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=Fo;var gi=class extends ln{constructor(t,e,n){super(t,e,n)}};gi.prototype.ValueTypeName="bool";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=vr;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var fc=class extends ln{};fc.prototype.ValueTypeName="color";var pc=class extends ln{};pc.prototype.ValueTypeName="number";var mc=class extends es{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)$n.slerpFlat(r,0,a,l-o,a,l,c);return r}},qr=class extends ln{InterpolantFactoryMethodLinear(t){return new mc(this.times,this.values,this.getValueSize(),t)}};qr.prototype.ValueTypeName="quaternion";qr.prototype.InterpolantFactoryMethodSmooth=void 0;var xi=class extends ln{constructor(t,e,n){super(t,e,n)}};xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=vr;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var gc=class extends ln{};gc.prototype.ValueTypeName="vector";var xc=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}},Zg=new xc,_c=class{constructor(t){this.manager=t!==void 0?t:Zg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};_c.DEFAULT_MATERIAL_NAME="__DEFAULT";var Us=class extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Yr=class extends Us{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},$a=new de,sh=new T,rh=new T,Zr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new As,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;sh.setFromMatrixPosition(t.matrixWorld),e.position.copy(sh),rh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rh),e.updateMatrixWorld(),$a.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($a),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($a)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ah=new de,ps=new T,Ja=new T,yc=class extends Zr{constructor(){super(new Ce(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new oe(2,1,1,1),new oe(0,1,1,1),new oe(3,1,1,1),new oe(1,1,1,1),new oe(3,0,1,1),new oe(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ps.setFromMatrixPosition(t.matrixWorld),n.position.copy(ps),Ja.copy(n.position),Ja.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ja),n.updateMatrixWorld(),s.makeTranslation(-ps.x,-ps.y,-ps.z),ah.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ah)}},$r=class extends Us{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new yc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},vc=class extends Zr{constructor(){super(new Ir(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Jr=class extends Us{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new vc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Lc="\\[\\]\\.:\\/",$g=new RegExp("["+Lc+"]","g"),Uc="[^"+Lc+"]",Jg="[^"+Lc.replace("\\.","")+"]",Kg=/((?:WC+[\/:])*)/.source.replace("WC",Uc),jg=/(WCOD+)?/.source.replace("WCOD",Jg),Qg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uc),tx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uc),ex=new RegExp("^"+Kg+jg+Qg+tx+"$"),nx=["material","materials","bones","map"],Mc=class{constructor(t,e,n){let s=n||fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace($g,"")}static parseTrackName(t){let e=ex.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);nx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};fe.Composite=Mc;fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};fe.prototype.GetterByBindingType=[fe.prototype._getValue_direct,fe.prototype._getValue_array,fe.prototype._getValue_arrayElement,fe.prototype._getValue_toArray];fe.prototype.SetterByBindingTypeAndVersioning=[[fe.prototype._setValue_direct,fe.prototype._setValue_direct_setNeedsUpdate,fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_array,fe.prototype._setValue_array_setNeedsUpdate,fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_arrayElement,fe.prototype._setValue_arrayElement_setNeedsUpdate,fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[fe.prototype._setValue_fromArray,fe.prototype._setValue_fromArray_setNeedsUpdate,fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Tx=new Float32Array(1);var oh=new de,Kr=class{constructor(t,e,n=0,s=1/0){this.ray=new wr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ts,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return oh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(oh),this}intersectObject(t,e=!0,n=[]){return bc(t,this,n,e),n.sort(ch),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)bc(t[s],this,n,e);return n.sort(ch),n}};function ch(i,t){return i.distance-t.distance}function bc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)bc(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function Un(i){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}function Hh(i,t){let e=Un(t),n=new Float32Array(i*i);for(let s=0;s<n.length;s++)n[s]=e();return(s,r)=>{let a=s*i,o=r*i,c=Math.floor(a),l=Math.floor(o),h=a-c,u=o-l,d=h*h*(3-2*h),f=u*u*(3-2*u),m=(c%i+i)%i,x=(m+1)%i,g=(l%i+i)%i,p=(g+1)%i,b=n[g*i+m],y=n[g*i+x],_=n[p*i+m],P=n[p*i+x];return(b+(y-b)*d)*(1-f)+(_+(P-_)*d)*f}}function Oe(i,t=4,e=4){let n=[];for(let s=0;s<e;s++)n.push(Hh(t<<s,i*31+s*7));return(s,r)=>{let a=0,o=.5,c=0;for(let l of n)a+=l(s,r)*o,c+=o,o*=.5;return a/c}}function Vh(i,t){let e=Un(t),n=[];for(let s=0;s<i;s++)n.push([e(),e(),e()]);return(s,r)=>{let a=9,o=9,c=0;for(let l of n){let h=Math.abs(s-l[0]);h=Math.min(h,1-h);let u=Math.abs(r-l[1]);u=Math.min(u,1-u);let d=Math.sqrt(h*h+u*u);d<a?(o=a,a=d,c=l[2]):d<o&&(o=d)}return[a,o,c]}}var Jt=i=>[i>>16&255,i>>8&255,i&255],xe=(i,t,e)=>[i[0]+(t[0]-i[0])*e,i[1]+(t[1]-i[1])*e,i[2]+(t[2]-i[2])*e],Os=i=>Math.max(0,Math.min(1,i));function Ye(i,t){let e=document.createElement("canvas");e.width=e.height=i;let n=e.getContext("2d"),s=n.createImageData(i,i);for(let r=0;r<i;r++)for(let a=0;a<i;a++){let o=t(a/i,r/i,a,r),c=(r*i+a)*4;s.data[c]=o[0],s.data[c+1]=o[1],s.data[c+2]=o[2],s.data[c+3]=o[3]??255}return n.putImageData(s,0,0),{canvas:e,ctx:n}}function Pe(i,t=!0){let e=new Ki(i);return e.colorSpace=ke,t&&(e.wrapS=e.wrapT=ui),e.anisotropy=4,e.needsUpdate=!0,e}function Nh(i){let t=Oe(11,4,4),e=Oe(12,16,2),n=Jt(i[0]),s=Jt(i[1]),r=Jt(i[2]),{canvas:a,ctx:o}=Ye(256,(l,h)=>{let u=t(l,h),d=e(l,h),f=xe(n,s,Os((u-.3)*2));return f=xe(f,r,Os((d-.6)*3)*.6),f}),c=Un(99);for(let l=0;l<900;l++){let h=c()*256,u=c()*256,d=3+c()*5;o.strokeStyle=c()<.5?"rgba(20,70,30,0.35)":"rgba(210,255,170,0.3)",o.lineWidth=1,o.beginPath(),o.moveTo(h,u),o.lineTo(h+(c()-.5)*3,u-d),o.stroke()}if(i[3]!==void 0){let l=["#fff6e0","#ffb3d1","#ffe066","#c9b6ff"];for(let h=0;h<40;h++){let u=c()*256,d=c()*256;o.fillStyle=l[Math.floor(c()*l.length)];for(let f=0;f<5;f++){let m=f/5*Math.PI*2;o.beginPath(),o.arc(u+Math.cos(m)*1.6,d+Math.sin(m)*1.6,1.3,0,7),o.fill()}o.fillStyle="#ffcf3a",o.beginPath(),o.arc(u,d,1,0,7),o.fill()}}return Pe(a)}function Fh(i,t=21){let e=Oe(t,4,4),n=Oe(t+1,8,3),s=Jt(i[0]),r=Jt(i[1]),a=Jt(i[2]),{canvas:o}=Ye(256,(c,l)=>{let h=e(c,l)*.25,u=Math.sin((l+h)*Math.PI*2*4)*.5+.5,d=xe(s,r,u),f=n(c,l);d=xe(d,a,Os((f-.55)*4)*.7);let m=.85+e(c*1,l)*.3;return[d[0]*m,d[1]*m,d[2]*m]});return Pe(o)}function Oh(i,t=31,e=18){let n=Vh(e,t),s=Oe(t+3,8,3),r=Jt(i[0]),a=Jt(i[1]),o=Jt(i[2]),{canvas:c}=Ye(256,(l,h)=>{let[u,d,f]=n(l,h),m=d-u,x=xe(r,a,f),g=s(l,h);x=[x[0]*(.8+g*.4),x[1]*(.8+g*.4),x[2]*(.8+g*.4)],m<.02&&(x=xe(o,x,m/.02*.5));let p=Os(1-u*10)*.15;return[x[0]+255*p,x[1]+255*p,x[2]+255*p]});return Pe(c)}function ix(){let i=Oe(41,4,5),t=Oe(42,6,3),e=Jt(2761552),n=Jt(4865146),s=Jt(8386303),{canvas:r}=Ye(256,(a,o)=>{let c=xe(e,n,i(a,o)),l=Math.abs(t(a,o)-.5);return l<.025&&(c=xe(s,c,l/.025)),c});return Pe(r)}function sx(){let i=Vh(14,51),t=Oe(52,8,3),e=Jt(4011120),n=Jt(5983130),s=Jt(10155007),{canvas:r}=Ye(256,(a,o)=>{let[c,l,h]=i(a,o),u=xe(e,n,h*.7+t(a,o)*.3),d=l-c;return d<.015&&(u=xe(s,u,d/.015)),u});return Pe(r)}function Bh(i=[10118200,12617808,4860436],t=61){let e=Oe(t,4,3),n=Hh(64,t+1),s=Jt(i[0]),r=Jt(i[1]),a=Jt(i[2]),o=Un(t+2),c=6,l=[];for(let d=0;d<c;d++)l.push(o());let{canvas:h,ctx:u}=Ye(256,(d,f)=>{let m=Math.floor(f*c),x=f*c-m,g=n(d*.08+m*.13,f*1.5+e(d,f)*.3),p=xe(s,r,l[m]*.6+g*.4),b=Math.sin((d*40+e(d,f)*6+m)*Math.PI)*.5+.5;return p=xe(p,a,b*.12),(x<.06||x>.96)&&(p=xe(p,a,.8)),p});for(let d=0;d<c;d++){let f=(d+.5)/c*256;for(let m of[12,140])u.fillStyle="#3a2614",u.beginPath(),u.arc(m+d%2*50,f,3,0,7),u.fill(),u.fillStyle="#c9a77a",u.beginPath(),u.arc(m+d%2*50-1,f-1,1.2,0,7),u.fill()}return Pe(h)}function rx(i,t=71,e=!1){let n=Oe(t,8,3),s=Jt(i[0]),r=Jt(i[1]),a=Jt(i[2]),o=Un(t),c=8,l=4,h=[];for(let f=0;f<c*l*2;f++)h.push(o());let{canvas:u,ctx:d}=Ye(256,(f,m)=>{let x=Math.floor(m*c),g=x%2?.5/l:0,p=(f+g)%1,b=Math.floor(p*l),y=m*c-x,_=p*l-b,P=xe(s,r,h[x*l+b]),R=n(f,m);return P=[P[0]*(.8+R*.35),P[1]*(.8+R*.35),P[2]*(.8+R*.35)],y<.08||_<.04?P=a:y<.16&&(P=xe(P,[255,255,255],.08)),P});if(e){d.strokeStyle="rgba(200,120,255,0.75)",d.lineWidth=2;for(let f=0;f<5;f++){let m=20+o()*210,x=20+o()*210;d.beginPath(),d.moveTo(m,x),d.lineTo(m+8,x-10),d.lineTo(m+16,x),d.lineTo(m+8,x+10),d.closePath(),d.moveTo(m+8,x-14),d.lineTo(m+8,x+14),d.stroke()}}return Pe(u)}function ax(){let i=Oe(81,8,3),t=Jt(12159802),e=Jt(14858078),{canvas:n,ctx:s}=Ye(256,(r,a)=>{let o=xe(t,e,i(r,a)),c=r*2%1,l=a*2%1;return(c<.02||l<.02)&&(o=xe(o,[60,40,10],.7)),o});for(let r=0;r<2;r++)for(let a=0;a<2;a++)for(let[o,c]of[[12,12],[116,12],[12,116],[116,116]]){let l=r*128+o,h=a*128+c;s.fillStyle="#6d4c18",s.beginPath(),s.arc(l,h,4,0,7),s.fill(),s.fillStyle="#fff0b8",s.beginPath(),s.arc(l-1,h-1,1.6,0,7),s.fill()}return Pe(n)}function kh(i=16050384,t=14272419){let e=Oe(91,16,2),n=Jt(i),s=Jt(t),{canvas:r}=Ye(128,(a,o,c,l)=>{let h=(c+l)%4<2?.04:-.04,u=xe(n,s,e(a,o)*.6+.2);return u=[u[0]*(1+h),u[1]*(1+h),u[2]*(1+h)],l%64<2&&(u=xe(u,[120,90,50],.5)),u});return Pe(r)}function Nc(i){let t=Oe(101,3,5),e=Jt(i[0]),n=Jt(i[1]),{canvas:s}=Ye(256,(r,a)=>{let o=t(r,a);return xe(e,n,Os((o-.35)*2.2))});return Pe(s)}function ox(){let i=Oe(111,4,4),t=Jt(2825797),e=Jt(7163801),{canvas:n}=Ye(128,(s,r)=>xe(t,e,i(s,r)));return Pe(n)}function cx(){let i=Oe(121,4,3),t=Jt(16179891),e=Jt(15321482),{canvas:n}=Ye(128,(s,r)=>xe(t,e,(Math.sin((r+i(s,r)*.3)*30)*.5+.5)*.7));return Pe(n)}function lx(i=16777215,t=16767050){let e=Jt(i),n=Jt(t),{canvas:s}=Ye(64,(r,a)=>(Math.floor(r*4)+Math.floor(a*4))%2?e:n);return Pe(s)}function zh(i,t){let e=document.createElement("canvas");e.width=e.height=i;let n=e.getContext("2d"),s=n.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);for(let[r,a]of t)s.addColorStop(r,a);return n.fillStyle=s,n.fillRect(0,0,i,i),e}function hx(){let t=document.createElement("canvas");t.width=t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(32,32,0,32,32,32);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.2,"rgba(255,240,180,0.8)"),n.addColorStop(1,"rgba(255,200,80,0)"),e.fillStyle=n,e.beginPath();for(let s=0;s<8;s++){let r=s/8*Math.PI*2,a=s%2?9:32;e.lineTo(32+Math.cos(r)*a,32+Math.sin(r)*a)}return e.closePath(),e.fill(),t}function Gh(){let i={grass:Nh([6270538,9426522,4165434,1]),grassPlain:Nh([6796626,10148196,4889150]),dirt:Fh([9067066,11039050,6175268]),stone:Oh([9408419,12039878,4934238]),crystalRock:ix(),crystalTop:sx(),wood:Bh(),darkWood:Bh([5913130,8015928,2758156],63),brick:rx([4074846,5784447,1905712],71,!0),brickTop:Oh([4864622,6968722,2037299],77,14),towerCliff:Fh([3023686,4600934,1708073],79),metal:ax(),cloth:kh(),clothRed:kh(14243914,12076090),cloudSea:Nc([16771570,16777215]),cloudSeaDusk:Nc([7035546,12167136]),cloudSeaNight:Nc([1774128,4008540]),fog:ox(),sand:cx(),checker:lx(),glow:Pe(zh(64,[[0,"rgba(255,255,255,1)"],[.35,"rgba(255,255,255,0.5)"],[1,"rgba(255,255,255,0)"]]),!1),puff:Pe(zh(64,[[0,"rgba(255,255,255,0.9)"],[.6,"rgba(255,255,255,0.4)"],[1,"rgba(255,255,255,0)"]]),!1),sparkle:Pe(hx(),!1)},t=new Uint8Array([90,160,225,255]),e=new Or(t,t.length,1,Qr);return e.minFilter=e.magFilter=Ne,e.needsUpdate=!0,i.toonGradient=e,i}var Ze=null,Fc=new Map;function Wh(i){Ze=i}function yt(i,t={}){let e=JSON.stringify([i,t.map?t.map.uuid:0,t.emissive||0,t.ei||0,t.transparent||0,t.opacity||1]);if(Fc.has(e)&&!t.unique)return Fc.get(e);let n=new ts({color:i,map:t.map||null,gradientMap:Ze.toonGradient,emissive:t.emissive||0,emissiveIntensity:t.ei??1,transparent:!!t.transparent,opacity:t.opacity??1});return t.unique||Fc.set(e,n),n}function Nn(i,t={}){return new we({color:i,transparent:!!t.transparent,opacity:t.opacity??1,blending:t.additive?In:fn,depthWrite:!t.additive&&!t.transparent,side:t.side||mn,map:t.map||null})}var ux=new we({color:1708064,side:Se});function lt(i,t,e=0,n=0,s=0,r=null){let a=new Wt(i,t);return a.position.set(e,n,s),a.castShadow=!0,r&&r.add(a),a}function me(i,t=.04){let e=[];i.traverse(n=>{n.isMesh&&!n.userData.noOutline&&e.push(n)});for(let n of e){n.geometry.boundingSphere||n.geometry.computeBoundingSphere();let s=n.geometry.boundingSphere.radius||1,r=1+t/s,a=new Wt(n.geometry,ux);a.scale.setScalar(r),a.userData.noOutline=!0,a.castShadow=!1,n.add(a)}}function jn(i,t,e=.8){let n=new Ji(new pi({map:Ze.glow,color:i,transparent:!0,opacity:e,blending:In,depthWrite:!1}));return n.scale.setScalar(t),n}function Xh(){let i=new Xt,t=new Xt;i.add(t);let e=yt(16773590,{emissive:16752704,ei:.28}),n=yt(9063210),s=yt(4860446),r=new ne(1,24,18);lt(r,e,0,.62,0,t).scale.set(.48,.46,.48);for(let C of[-.24,0,.24]){let B=Math.sqrt(.2304-C*C*1.1),F=lt(new cn(B,.022,6,32),n,0,.62+C,0,t);F.rotation.x=Math.PI/2,F.userData.noOutline=!0}let o=lt(new jt(.17,.22,.1,16),s,0,1.06,0,t),c=lt(new jt(.22,.16,.08,16),s,0,.17,0,t);o.userData.noOutline=c.userData.noOutline=!0;let l=new Xt;l.position.set(0,1.12,0),t.add(l);let h=Nn(16756782),u=Nn(16774048),d=lt(new qe(.13,.34,12),h,0,.2,0,l);d.userData.noOutline=!0;let f=lt(new ne(.13,12,8),h,0,.04,0,l);f.userData.noOutline=!0;let m=lt(new ne(.07,10,8),u,0,.06,.02,l);m.userData.noOutline=!0,d.castShadow=f.castShadow=m.castShadow=!1;let x=jn(16755268,1.4,.7);x.position.y=.1,l.add(x);let g=yt(1708064),p=Nn(16777215),b=yt(16751272);for(let C of[-1,1]){let B=lt(r,g,C*.15,.7,.43,t);B.scale.set(.065,.095,.04),B.userData.noOutline=!0;let F=lt(r,p,C*.15+.02,.73,.465,t);F.scale.setScalar(.022),F.userData.noOutline=!0;let H=lt(r,b,C*.27,.58,.38,t);H.scale.set(.07,.04,.03),H.userData.noOutline=!0}let y=yt(3126696),_=lt(new cn(.36,.075,8,24),y,0,.92,0,t);_.rotation.x=Math.PI/2;let P=new Xt;P.position.set(.12,.9,-.34),t.add(P);let R=lt(new ye(.16,.06,.4),y,0,0,-.18,P),I=lt(new ye(.14,.05,.3),yt(2398092),.05,-.04,-.12,R);I.rotation.y=.3;let D=[],E=[];for(let C of[-1,1]){let B=lt(r,e,C*.52,.55,.05,t);B.scale.setScalar(.11),D.push(B);let F=lt(r,s,C*.19,.08,.04,i);F.scale.set(.13,.08,.18),E.push(F)}me(t,.035),me(E[0],.03),me(E[1],.03);let M=new $r(16756816,6,7,1.6);return M.position.set(0,1.3,0),i.add(M),i.userData={body:t,flame:l,tail:P,hands:D,feet:E,light:M,glow:x},i}function Oc(i,t,e,n,s,r=16769354){let a=Nn(r),o=new ne(1,10,8);for(let c of[-1,1]){let l=lt(o,a,c*n,t,e,i);l.scale.set(s,s*.7,s*.5),l.rotation.z=-c*.4,l.userData.noOutline=!0,l.castShadow=!1;let h=lt(new ye(s*2.4,s*.5,s*.6),yt(1379362),c*n,t+s*.9,e+.02,i);h.rotation.z=c*.45,h.userData.noOutline=!0}}function qh(){let i=new Xt,t=new Xt;i.add(t);let e=yt(9401032,{map:Ze.fog}),n=lt(new ne(.6,20,14),e,0,.55,0,t);n.scale.set(1,.9,1);let s=lt(new ne(.28,12,10),e,.1,1.05,-.05,t);Oc(t,.68,.52,.2,.1);let r=lt(new cn(.1,.03,6,12,Math.PI),yt(1379362),0,.45,.56,t);r.rotation.z=Math.PI,r.userData.noOutline=!0;let a=yt(9402560,{transparent:!0,opacity:.75});for(let o=0;o<6;o++){let c=o/6*Math.PI*2,l=lt(new ne(.22,10,8),a,Math.cos(c)*.55,.15,Math.sin(c)*.55,t);l.userData.noOutline=!0,l.castShadow=!1}return me(n,.04),me(s,.04),i.userData={body:t},i}function Yh(){let i=new Xt,t=new Xt;i.add(t);let e=yt(11548239),n=lt(new ne(.55,20,14),e,0,.6,0,t),s=yt(16771524),r=new qe(.12,.42,8),a=[];for(let o=0;o<14;o++){let c=1-o/13*1.4,l=Math.sqrt(Math.max(0,1-c*c)),h=o*2.4;a.push(new T(Math.cos(h)*l,c,Math.sin(h)*l))}for(let o of a){if(o.z>.6&&Math.abs(o.y)<.4)continue;lt(r,s,o.x*.6,.6+o.y*.6,o.z*.6,t).quaternion.setFromUnitVectors(new T(0,1,0),o)}return Oc(t,.66,.5,.18,.09,16777215),me(n,.04),i.userData={body:t},i}function Zh(){let i=new Xt,t=new Xt;i.add(t);let e=yt(5980047,{map:Ze.fog}),n=lt(new ne(.45,18,12),e,0,0,0,t);Oc(t,.08,.4,.16,.08);let s=yt(10125265),r=[];for(let o of[-1,1]){let c=new Xt;c.position.set(o*.35,.1,0),t.add(c),lt(new ne(1,12,8),s,o*.45,0,0,c).scale.set(.5,.06,.3),r.push(c)}let a=new qe(.1,.3,6);return lt(a,e,-.18,.45,0,t).rotation.z=.3,lt(a,e,.18,.45,0,t).rotation.z=-.3,me(n,.04),i.userData={body:t,wings:r},i}function $h(){let i=new Xt,t=new Xt;i.add(t);let e=yt(10123992,{map:Ze.fog,emissive:2756680,ei:1,unique:!0}),n=lt(new ne(2.3,32,24),e,0,2.2,0,t);n.scale.set(1,.92,1);let s=yt(2824768,{emissive:6959008,ei:.3}),r=lt(new jt(1.1,1.25,.5,8,1,!0),s,0,4.15,0,t);r.material.side=ze;for(let b=0;b<8;b++){let y=b/8*Math.PI*2;lt(new qe(.22,.7,6),s,Math.cos(y)*1.1,4.6,Math.sin(y)*1.1,t)}let a=new ts({color:12580863,emissive:5628159,emissiveIntensity:1.2,gradientMap:Ze.toonGradient}),o=lt(new Kn(.55),a,0,4.25,0,t);o.scale.set(.8,1.3,.8);let c=jn(8384511,3.5,.8);o.add(c);let l=yt(16774360),h=Nn(16726876),u=[];for(let b of[-1,1]){lt(new ne(.45,16,12),l,b*.75,2.8,1.85,t).scale.set(1,1.15,.5);let _=lt(new ne(.18,12,8),h,b*.72,2.75,2.08,t);_.userData.noOutline=!0,u.push(_);let P=lt(new ye(.9,.18,.2),yt(1707818),b*.75,3.35,2,t);P.rotation.z=b*.35}let d=lt(new cn(.52,.06,8,24),yt(15123290),.75,2.8,2.05,t);d.userData.noOutline=!0;let f=lt(new ne(1,20,12),yt(1706788),0,1.8,1.95,t);f.scale.set(.9,.35,.3),f.userData.noOutline=!0;let m=yt(16774360);for(let b=-2;b<=2;b++){let y=lt(new qe(.1,.25,4),m,b*.3,2.05,2.15,t);y.rotation.x=Math.PI,y.userData.noOutline=!0}let x=[];for(let b of[-1,1]){let y=lt(new ne(.7,16,12),e,b*3,1.6,.6,i);x.push(y),me(y,.06)}let g=yt(10848982,{transparent:!0,opacity:.6}),p=new Xt;i.add(p);for(let b=0;b<10;b++){let y=b/10*Math.PI*2,_=lt(new ne(.6+b%3*.2,10,8),g,Math.cos(y)*2.4,.4,Math.sin(y)*2.4,p);_.castShadow=!1,_.userData.noOutline=!0}return me(n,.08),i.userData={body:t,gem:o,gemGlow:c,hands:x,puffs:p,pupils:u,mat:e},i}var ia=null;function Jh(){if(!ia){let t=new Qi;for(let e=0;e<10;e++){let n=e/10*Math.PI*2+Math.PI/2,s=e%2?.14:.34,r=Math.cos(n)*s,a=Math.sin(n)*s;e?t.lineTo(r,a):t.moveTo(r,a)}ia=new Ls(t,{depth:.08,bevelEnabled:!0,bevelThickness:.04,bevelSize:.03,bevelSegments:1}),ia.center()}let i=lt(ia,yt(16765503,{emissive:16753920,ei:.45}));return i.castShadow=!1,i}function Kh(){let i=new Qi;i.moveTo(0,-.3),i.bezierCurveTo(.05,-.2,.35,-.05,.35,.12),i.bezierCurveTo(.35,.3,.12,.35,0,.18),i.bezierCurveTo(-.12,.35,-.35,.3,-.35,.12),i.bezierCurveTo(-.35,-.05,-.05,-.2,0,-.3);let t=new Ls(i,{depth:.12,bevelEnabled:!0,bevelThickness:.05,bevelSize:.04,bevelSegments:2});t.center();let e=lt(t,yt(16732013,{emissive:16719936,ei:.35}));return e.scale.setScalar(1.3),me(e,.03),e}function jh(){let i=new Xt,t=new ts({color:14220287,emissive:6281471,emissiveIntensity:1,gradientMap:Ze.toonGradient}),e=lt(new Kn(.6),t,0,0,0,i);e.scale.set(.7,1.4,.7),lt(new Kn(.3),yt(16774064,{emissive:16765803,ei:1}),.35,-.35,.1,i).scale.set(.6,1.3,.6),me(e,.04),i.add(jn(10482943,4,.9));let s=lt(new cn(1.1,.04,6,40),Nn(16771744,{transparent:!0,opacity:.8}),0,0,0,i);return s.rotation.x=Math.PI/2,i.userData={ring:s},i}function Qh(){let i=new Xt,t=yt(8014378);lt(new jt(.1,.14,2.4,8),t,0,1.2,0,i),lt(new ye(.8,.1,.1),t,.3,2.3,0,i);let e=new Xt;e.position.set(.62,1.95,0),i.add(e);let n=yt(10132136,{unique:!0}),s=lt(new ne(.25,14,10),n,0,0,0,e);s.scale.y=1.2,lt(new jt(.1,.14,.08,10),yt(4860446),0,.3,0,e);let r=jn(16756816,1.6,0);return e.add(r),me(i,.03),i.userData={lampMat:n,flame:r,lamp:e},i}function tu(i=16743096){let t=new Xt,e=new Xt;t.add(e);let n=yt(4168266);lt(new jt(.15,.25,.5,8),n,0,.25,0,t);let s=yt(i);for(let r=0;r<6;r++){let a=r/6*Math.PI*2,o=lt(new ne(1,12,8),s,Math.cos(a)*.8,.5,Math.sin(a)*.8,e);o.scale.set(.55,.15,.4),o.rotation.y=-a}return lt(new jt(.6,.65,.25,16),yt(16769126,{emissive:16752640,ei:.25}),0,.6,0,e),me(t,.03),t.userData={pad:e},t}function Bc(i,t="round"){let e=new Xt,n=1.6+i()*1.4;lt(new jt(.18,.3,n,8),yt(8014378),0,n/2,0,e);let s=t==="blossom"?[16757711,16749756,16765410]:t==="crystal"?[8319231,11902207,10475775]:[5221962,7128922,4101184],r=3+Math.floor(i()*2);for(let a=0;a<r;a++){let o=.7+i()*.5,c=lt(new ne(o,14,10),yt(s[a%s.length],t==="crystal"?{emissive:s[a%3],ei:.3}:{}),(i()-.5)*1,n+(i()-.2)*.8,(i()-.5)*1,e);c.scale.y=.85}return me(e,.04),e}function kc(i,t=3112794){let e=new Xt;lt(new jt(.12,.18,.8,6),yt(6962722),0,.4,0,e);for(let n=0;n<3;n++)lt(new qe(1-n*.25,1.1,8),yt(t),0,1+n*.6,0,e);return me(e,.04),e.scale.setScalar(.9+i()*.6),e}function sa(i,t=9434111){let e=new Xt,n=yt(t,{emissive:t,ei:.55}),s=3+Math.floor(i()*3);for(let r=0;r<s;r++){let a=.6+i()*1.6;lt(new jt(0,.25+i()*.15,a,6),n,(i()-.5)*.8,a/2,(i()-.5)*.8,e).rotation.set((i()-.5)*.7,i()*3,(i()-.5)*.7)}return me(e,.03),e}function eu(i){let t=new Xt,e=[16777215,16757713,16769126,13219583,16747109],n=.25+i()*.25,s=lt(new jt(.02,.02,n,4),yt(4168266),0,n/2,0,t);s.castShadow=!1;let r=lt(new ne(.09,8,6),yt(e[Math.floor(i()*e.length)]),0,n,0,t);return r.castShadow=!1,t}function zc(i,t=6270538){let e=new Xt,n=yt(t);for(let s=0;s<3;s++){let r=lt(new qe(.05,.35+i()*.2,4),n,(i()-.5)*.2,.18,(i()-.5)*.2,e);r.rotation.z=(i()-.5)*.6,r.castShadow=!1}return e}function nu(i,t=10131626){let e=lt(new Gr(.4+i()*.5,0),yt(t));return e.scale.y=.6+i()*.4,e.rotation.set(i(),i()*3,i()),me(e,.03),e}function iu(){let i=new Xt,t=yt(10118200,{map:Ze.wood});lt(new jt(.07,.08,1.1,6),yt(6962722),0,.55,0,i),lt(new ye(.9,.5,.08),t,0,1.1,0,i);let e=lt(new cn(.1,.03,6,12,Math.PI*1.4),yt(16773590),0,1.15,.05,i);return e.rotation.z=-.6,lt(new ne(.035,6,6),yt(16773590),0,.97,.05,i),me(i,.025),i}function su(){let i=new ye(1.1,1.1,1.1),t=lt(i,yt(12617808,{map:Ze.wood})),e=yt(6962722);for(let n of[0,Math.PI/2]){let s=lt(new ye(1.14,.14,1.14),e,0,0,0,t);s.rotation.x=n}return me(t,.03),t}function ru(i){let t=new Xt;lt(new ne(1,20,14),yt(16777215,{map:i()<.5?Ze.clothRed:Ze.cloth}),0,3,0,t).scale.set(3.2,1.6,1.6);let n=lt(new ye(3,.8,1.2),yt(10118200,{map:Ze.wood}),0,.6,0,t);for(let r of[-1,1]){let a=lt(new jt(.03,.03,1.6,4),yt(3810836),r*1.2,1.6,0,t);a.castShadow=!1}let s=new Xt;s.position.set(-1.7,.7,0),t.add(s);for(let r=0;r<3;r++){let a=lt(new ye(.06,.9,.18),yt(14858078),0,0,0,s);a.rotation.x=r/3*Math.PI*2}return me(t,.05),t.userData={prop:s},t}function au(i,t=16777215,e=.95){let n=new Xt,s=yt(t,{transparent:e<1,opacity:e}),r=4+Math.floor(i()*4);for(let a=0;a<r;a++){let o=1+i()*1.6,c=lt(new ne(o,12,10),s,(a-r/2)*1.4+i(),i()*.8,(i()-.5)*1.5);c.castShadow=!1,c.scale.y=.7,n.add(c)}return n}function ou(){let i=new Xt,t=yt(16773590),e=yt(14243914);for(let s=0;s<5;s++)lt(new jt(1.6-s*.18-.18,1.6-s*.18,2.2,16),s%2?e:t,0,1.1+s*2.2,0,i);lt(new jt(1,1,.3,16),yt(4860446),0,11.1,0,i);let n=lt(new jt(.75,.75,1.4,12),Nn(3879248),0,11.9,0,i);return lt(new qe(1.1,1.2,16),e,0,13.2,0,i),me(i,.06),i.userData={lamp:n},i}var Bs=i=>440*Math.pow(2,(i-69)/12),dx={major:[0,2,4,5,7,9,11],minor:[0,2,3,5,7,8,10],harmonic:[0,2,3,5,7,8,11],dorian:[0,2,3,5,7,9,10],lydian:[0,2,4,6,7,9,11]},fx={title:{bpm:84,root:60,scale:"lydian",prog:[0,5,3,4],seed:3,lead:"sine",arp:"triangle",drums:!1,echo:.35,arpRate:2},meadow:{bpm:118,root:65,scale:"major",prog:[0,4,5,3],seed:7,lead:"square",arp:"triangle",drums:!0,echo:.15,arpRate:2},crystal:{bpm:96,root:57,scale:"dorian",prog:[0,5,2,6],seed:12,lead:"triangle",arp:"sine",drums:!0,echo:.45,arpRate:4},sky:{bpm:132,root:62,scale:"major",prog:[0,3,4,3],seed:21,lead:"square",arp:"triangle",drums:!0,echo:.2,arpRate:2},tower:{bpm:108,root:52,scale:"harmonic",prog:[0,5,3,4],seed:33,lead:"sawtooth",arp:"triangle",drums:!0,echo:.3,arpRate:2},boss:{bpm:152,root:50,scale:"harmonic",prog:[0,0,5,4],seed:41,lead:"sawtooth",arp:"square",drums:!0,echo:.1,arpRate:4},ending:{bpm:76,root:64,scale:"major",prog:[0,3,5,4],seed:55,lead:"sine",arp:"triangle",drums:!1,echo:.4,arpRate:2}};function px(i){let t=Un(i.seed*977+1),e=dx[i.scale],n=u=>{let d=Math.floor(u/7),f=(u%7+7)%7;return e[f]+d*12},s=i.prog.length,r=[[1,0,1,1,0,1,1,0],[1,0,0,1,1,0,1,0],[1,1,0,1,0,0,1,1],[1,0,1,0,1,0,0,0]],a=r[Math.floor(t()*r.length)],o=r[Math.floor(t()*r.length)],c=[],l=4,h=[];for(let u=0;u<8;u++)h.push(Math.floor(t()*5)-2);for(let u=0;u<s;u++){let d=i.prog[u],f=u%2===0?a:o,m=[];for(let x=0;x<8;x++){if(!f[x]){m.push(null);continue}if(x===0||x===4){let g=[d,d+2,d+4,d+7,d+9],p=g[0];for(let b of g)Math.abs(b-l)<Math.abs(p-l)&&(p=b);l=p}else l+=u%2===0?h[x]:Math.floor(t()*3)-1;l=Math.max(0,Math.min(11,l)),m.push(l)}c.push(m)}return{deg:n,melody:c}}var ra=class{constructor(){this.ctx=null,this.muted=localStorage.getItem("lumi_muted")==="1",this.track=null,this.step=0,this.nextTime=0,this.timer=null}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.muted?0:.8;let n=e.createDynamicsCompressor();this.master.connect(n),n.connect(e.destination),this.music=e.createGain(),this.music.gain.value=.32,this.music.connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=.7,this.sfx.connect(this.master),this.delay=e.createDelay(1),this.delayFb=e.createGain(),this.delayFb.gain.value=.35,this.delaySend=e.createGain(),this.delaySend.gain.value=.2,this.delaySend.connect(this.delay),this.delay.connect(this.delayFb),this.delayFb.connect(this.delay),this.delay.connect(this.music);let s=e.sampleRate*1;this.noiseBuf=e.createBuffer(1,s,e.sampleRate);let r=this.noiseBuf.getChannelData(0);for(let a=0;a<s;a++)r[a]=Math.random()*2-1;if(this.timer=setInterval(()=>this.schedule(),25),this.pendingTrack){let a=this.pendingTrack;this.pendingTrack=null,this.playMusic(a)}}toggleMute(){return this.muted=!this.muted,localStorage.setItem("lumi_muted",this.muted?"1":"0"),this.master&&this.master.gain.setTargetAtTime(this.muted?0:.8,this.ctx.currentTime,.05),this.muted}tone({type:t="sine",f0:e=440,f1:n=null,dur:s=.2,vol:r=.2,attack:a=.005,at:o=0,dest:c=null,filter:l=null,vibrato:h=0}){let u=this.ctx;if(!u)return;let d=o||u.currentTime,f=u.createOscillator();f.type=t,f.frequency.setValueAtTime(e,d),n&&f.frequency.exponentialRampToValueAtTime(Math.max(20,n),d+s);let m=u.createGain();m.gain.setValueAtTime(1e-4,d),m.gain.exponentialRampToValueAtTime(r,d+a),m.gain.exponentialRampToValueAtTime(1e-4,d+s);let x=f;if(h){let g=u.createOscillator();g.frequency.value=6;let p=u.createGain();p.gain.value=h,g.connect(p),p.connect(f.frequency),g.start(d),g.stop(d+s+.05)}if(l){let g=u.createBiquadFilter();g.type="lowpass",g.frequency.value=l,x.connect(g),x=g}return x.connect(m),m.connect(c||this.sfx),f.start(d),f.stop(d+s+.05),m}noise({dur:t=.2,vol:e=.2,type:n="bandpass",f0:s=1e3,f1:r=null,q:a=1,at:o=0,dest:c=null}){let l=this.ctx;if(!l)return;let h=o||l.currentTime,u=l.createBufferSource();u.buffer=this.noiseBuf,u.loop=!0;let d=l.createBiquadFilter();d.type=n,d.Q.value=a,d.frequency.setValueAtTime(s,h),r&&d.frequency.exponentialRampToValueAtTime(r,h+t);let f=l.createGain();f.gain.setValueAtTime(e,h),f.gain.exponentialRampToValueAtTime(1e-4,h+t),u.connect(d),d.connect(f),f.connect(c||this.sfx),u.start(h,Math.random()*.5),u.stop(h+t+.05)}arp(t,{type:e="triangle",step:n=.07,dur:s=.15,vol:r=.15}={}){if(!this.ctx)return;let a=this.ctx.currentTime;t.forEach((o,c)=>this.tone({type:e,f0:Bs(o),dur:s,vol:r,at:a+c*n}))}play(t){if(!(!this.ctx||this.muted))switch(t){case"jump":this.tone({type:"square",f0:280,f1:620,dur:.13,vol:.08,filter:2500});break;case"jump2":this.tone({type:"square",f0:420,f1:980,dur:.16,vol:.08,filter:3e3}),this.noise({dur:.15,vol:.06,f0:2e3,f1:5e3});break;case"land":this.noise({dur:.07,vol:.12,type:"lowpass",f0:600});break;case"spark":this.arp([88,95],{type:"triangle",step:.05,dur:.12,vol:.12});break;case"stomp":this.tone({type:"sine",f0:260,f1:50,dur:.18,vol:.35}),this.tone({type:"square",f0:600,f1:1200,dur:.08,vol:.06,at:this.ctx.currentTime+.04});break;case"hurt":this.tone({type:"sawtooth",f0:500,f1:120,dur:.35,vol:.15,filter:1800});break;case"bounce":this.tone({type:"sine",f0:160,f1:720,dur:.3,vol:.3,vibrato:30});break;case"checkpoint":this.arp([72,76,79,84,88],{type:"sine",step:.08,dur:.4,vol:.15});break;case"shard":this.arp([72,76,79,83,84,88,91,96],{type:"triangle",step:.09,dur:.6,vol:.14}),this.arp([60,67,72],{type:"sine",step:.25,dur:1.2,vol:.12});break;case"crumble":this.noise({dur:.45,vol:.12,type:"lowpass",f0:900,f1:200});break;case"pound":this.tone({type:"sine",f0:140,f1:35,dur:.35,vol:.45}),this.noise({dur:.3,vol:.2,type:"lowpass",f0:1200,f1:150});break;case"spin":this.noise({dur:.28,vol:.12,f0:700,f1:3e3,q:2});break;case"bosshit":this.tone({type:"sawtooth",f0:320,f1:60,dur:.6,vol:.2,filter:2e3}),this.noise({dur:.5,vol:.2,type:"lowpass",f0:2e3,f1:100});break;case"bossroar":this.tone({type:"sawtooth",f0:90,f1:60,dur:1.2,vol:.2,filter:600,vibrato:12}),this.noise({dur:1.2,vol:.12,type:"lowpass",f0:500});break;case"oneup":this.arp([76,79,88,84,86,91],{type:"square",step:.08,dur:.15,vol:.07});break;case"heart":this.arp([79,84,91],{type:"sine",step:.06,dur:.25,vol:.15});break;case"die":this.arp([72,67,64,60,55],{type:"triangle",step:.12,dur:.3,vol:.15});break;case"orb":this.tone({type:"sine",f0:220,f1:110,dur:.5,vol:.12,vibrato:25});break;case"boom":this.noise({dur:.4,vol:.2,type:"lowpass",f0:800,f1:100}),this.tone({type:"sine",f0:120,f1:40,dur:.3,vol:.25});break;case"select":this.tone({type:"square",f0:660,dur:.06,vol:.05,filter:3e3});break;case"confirm":this.arp([76,83],{type:"square",step:.06,dur:.1,vol:.06});break;case"kill":this.noise({dur:.25,vol:.15,f0:1500,f1:400,q:3}),this.tone({type:"triangle",f0:900,f1:1800,dur:.12,vol:.1});break;case"clear":this.arp([60,64,67,72,67,72,76,79,84],{type:"square",step:.11,dur:.25,vol:.07});break;case"text":this.tone({type:"square",f0:900+Math.random()*200,dur:.03,vol:.025,filter:2500});break}}playMusic(t){if(!this.ctx){this.pendingTrack=t;return}if(this.trackName===t)return;this.trackName=t;let e=fx[t];if(!e){this.track=null;return}this.track={def:e,...px(e)},this.step=0,this.nextTime=this.ctx.currentTime+.1,this.delay.delayTime.value=60/e.bpm*.75,this.delaySend.gain.value=e.echo}stopMusic(){this.track=null,this.trackName=null}schedule(){if(!this.ctx||!this.track)return;let{def:t,deg:e,melody:n}=this.track,s=60/t.bpm/4;for(;this.nextTime<this.ctx.currentTime+.15;)this.playStep(this.step,this.nextTime,s,t,e,n),this.nextTime+=s,this.step=(this.step+1)%(t.prog.length*16)}playStep(t,e,n,s,r,a){let o=Math.floor(t/16),c=t%16,l=s.prog[o],h=s.root,u=this.music;if(c===0||c===8||s.drums&&c===11){let f=h-24+r(l)+(c===11?12:0);this.tone({type:"triangle",f0:Bs(f),dur:n*(c===11?2:6),vol:.32,at:e,dest:u})}let d=4/s.arpRate;if(c%d===0){let f=Math.floor(c/d),m=[l,l+2,l+4,l+7],x=h-12+r(m[f%4]);this.tone({type:s.arp,f0:Bs(x),dur:n*d*1.6,vol:.07,at:e,dest:u,filter:2200})}if(c===0)for(let f of[l,l+2,l+4])this.tone({type:"sine",f0:Bs(h+r(f)),dur:n*15,vol:.035,attack:.3,at:e,dest:u});if(c%2===0){let f=a[o][c/2];if(f!==null){let m=h+12+r(f),x=this.tone({type:s.lead,f0:Bs(m),dur:n*2.6,vol:s.lead==="sawtooth"||s.lead==="square"?.05:.1,at:e,dest:u,filter:3e3,vibrato:3});x&&x.connect(this.delaySend)}}s.drums&&((c%8===0||s.bpm>140&&c%4===0)&&this.tone({type:"sine",f0:150,f1:40,dur:.18,vol:.45,at:e,dest:u}),(c===4||c===12)&&this.noise({dur:.14,vol:.12,f0:1800,q:.8,at:e,dest:u}),c%2===0&&this.noise({dur:.04,vol:.05,type:"highpass",f0:7e3,at:e,dest:u}))}};var aa=class{constructor(t){this.canvas=t,this.keys=new Set,this.pressed=new Set,this.mouseDX=0,this.mouseDY=0,this.locked=!1,this.dragging=!1,this.touch={active:!1,mx:0,my:0,camDX:0,camDY:0},this.touchButtons=new Set,this.touchPressed=new Set,this.padPrev={},this.lastDevice="keyboard",window.addEventListener("keydown",e=>{["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&e.preventDefault(),this.keys.has(e.code)||this.pressed.add(e.code),this.keys.add(e.code),this.lastDevice="keyboard"}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>this.keys.clear()),t.addEventListener("mousedown",e=>{e.button===0&&this.locked&&this.pressed.add("Mouse0"),e.button===2&&this.locked&&this.pressed.add("Mouse2"),this.dragging=!0}),window.addEventListener("mouseup",()=>{this.dragging=!1}),t.addEventListener("contextmenu",e=>e.preventDefault()),window.addEventListener("mousemove",e=>{(this.locked||this.dragging)&&(this.mouseDX+=e.movementX||0,this.mouseDY+=e.movementY||0)}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===t}),this.setupTouch()}requestLock(){if(!this.isTouch)try{let t=this.canvas.requestPointerLock&&this.canvas.requestPointerLock();t&&t.catch&&t.catch(()=>{})}catch{}}releaseLock(){document.pointerLockElement&&document.exitPointerLock()}setupTouch(){let t=document.getElementById("touch");if(this.isTouch=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,!t)return;this.isTouch&&t.classList.add("show");let e=t.querySelector(".stick"),n=t.querySelector(".knob"),s=null,r=null,a=0,o=0,c=0,l=0,h=50;e.addEventListener("touchstart",f=>{s=f.changedTouches[0].identifier;let x=e.getBoundingClientRect();a=x.left+x.width/2,o=x.top+x.height/2,f.preventDefault()},{passive:!1}),t.querySelectorAll("[data-btn]").forEach(f=>{let m=f.dataset.btn;f.addEventListener("touchstart",x=>{x.preventDefault(),this.touchButtons.add(m),this.touchPressed.add(m),f.classList.add("down")},{passive:!1}),f.addEventListener("touchend",x=>{x.preventDefault(),this.touchButtons.delete(m),f.classList.remove("down")},{passive:!1})}),t.querySelector(".camzone").addEventListener("touchstart",f=>{let m=f.changedTouches[0];r=m.identifier,c=m.clientX,l=m.clientY,f.preventDefault()},{passive:!1}),window.addEventListener("touchmove",f=>{for(let m of f.changedTouches)if(m.identifier===s){let x=m.clientX-a,g=m.clientY-o,p=Math.hypot(x,g);p>h&&(x=x/p*h,g=g/p*h),n.style.transform=`translate(${x}px, ${g}px)`,this.touch.mx=x/h,this.touch.my=g/h,this.touch.active=!0}else m.identifier===r&&(this.touch.camDX+=m.clientX-c,this.touch.camDY+=m.clientY-l,c=m.clientX,l=m.clientY);this.lastDevice="touch"},{passive:!1});let d=f=>{for(let m of f.changedTouches)m.identifier===s&&(s=null,n.style.transform="",this.touch.mx=this.touch.my=0,this.touch.active=!1),m.identifier===r&&(r=null)};window.addEventListener("touchend",d),window.addEventListener("touchcancel",d)}pollPad(){let t=navigator.getGamepads?navigator.getGamepads():[],e=t&&[...t].find(a=>a&&a.connected);if(this.pad=null,!e)return;let n=a=>Math.abs(a)<.18?0:a,s=a=>!!(e.buttons[a]&&e.buttons[a].pressed),r={lx:n(e.axes[0]||0),ly:n(e.axes[1]||0),rx:n(e.axes[2]||0),ry:n(e.axes[3]||0),jump:s(0),spin:s(2)||s(1),pound:s(6)||s(7)||s(4)||s(5),pause:s(9),confirm:s(0),back:s(1),up:s(12),down:s(13)};this.pad=r,this.padPressed={};for(let a of Object.keys(r))typeof r[a]=="boolean"&&(this.padPressed[a]=r[a]&&!this.padPrev[a]);this.padPrev=r,(r.lx||r.ly||r.jump)&&(this.lastDevice="pad")}move(){let t=0,e=0,n=this.keys;(n.has("KeyW")||n.has("ArrowUp"))&&(e-=1),(n.has("KeyS")||n.has("ArrowDown"))&&(e+=1),(n.has("KeyA")||n.has("ArrowLeft"))&&(t-=1),(n.has("KeyD")||n.has("ArrowRight"))&&(t+=1),this.pad&&(this.pad.lx||this.pad.ly)&&(t=this.pad.lx,e=this.pad.ly),this.touch.active&&(t=this.touch.mx,e=this.touch.my);let s=Math.hypot(t,e);return s>1&&(t/=s,e/=s),{x:t,y:e}}camera(){let t=this.mouseDX*.0035,e=this.mouseDY*.0035;this.mouseDX=this.mouseDY=0,t+=this.touch.camDX*.006,e+=this.touch.camDY*.006,this.touch.camDX=this.touch.camDY=0;let n=this.keys,s=0;n.has("KeyQ")&&(s-=1),n.has("KeyE")&&(s+=1);let r=0;return n.has("KeyR")&&(r-=1),n.has("KeyV")&&(r+=1),this.pad&&(s+=this.pad.rx,r+=this.pad.ry),{dx:t,dy:e,kx:s,ky:r}}jumpHeld(){return this.keys.has("Space")||this.keys.has("KeyK")||this.pad&&this.pad.jump||this.touchButtons.has("jump")}jumpPressed(){return this.pressed.has("Space")||this.pressed.has("KeyK")||this.padPressed&&this.padPressed.jump||this.touchPressed.has("jump")}spinPressed(){return this.pressed.has("KeyF")||this.pressed.has("KeyJ")||this.pressed.has("Mouse0")||this.padPressed&&this.padPressed.spin||this.touchPressed.has("spin")}poundPressed(){return this.pressed.has("ShiftLeft")||this.pressed.has("ShiftRight")||this.pressed.has("KeyC")||this.pressed.has("Mouse2")||this.padPressed&&this.padPressed.pound||this.touchPressed.has("pound")}pausePressed(){return this.pressed.has("Escape")||this.pressed.has("KeyP")||this.padPressed&&this.padPressed.pause||this.touchPressed.has("pause")}confirmPressed(){return this.pressed.has("Enter")||this.pressed.has("Space")||this.padPressed&&this.padPressed.confirm}endFrame(){this.pressed.clear(),this.touchPressed.clear()}};var oa=class{constructor(t,e){this.scene=t,this.pool=[],this.active=[],this.rings=[],this.T=e;for(let n=0;n<260;n++){let s=new Ji(new pi({map:e.puff,transparent:!0,depthWrite:!1}));s.visible=!1,t.add(s),this.pool.push(s)}this.ringGeo=new cn(1,.08,6,40)}burst(t,e={}){let n=e.count??10;for(let s=0;s<n;s++){let r=this.pool.pop();if(!r)return;r.visible=!0,r.material.map=e.tex==="sparkle"?this.T.sparkle:e.tex==="glow"?this.T.glow:this.T.puff,r.material.color.set(Array.isArray(e.color)?e.color[s%e.color.length]:e.color??16777215),r.material.blending=e.additive?In:fn,r.material.opacity=e.opacity??1,r.material.needsUpdate=!0,r.position.copy(t),e.spread&&r.position.add(new T((Math.random()-.5)*e.spread,(Math.random()-.5)*e.spread*.5,(Math.random()-.5)*e.spread));let a=e.speed??3,o=Math.random()*Math.PI*2,c=e.up??.5,l=new T(Math.cos(o),c+Math.random()*(e.upRand??1),Math.sin(o)).normalize().multiplyScalar(a*(.5+Math.random()*.7));e.flat&&(l.y*=.2);let h=(e.size??.5)*(.6+Math.random()*.8);r.scale.setScalar(h),this.active.push({s:r,v:l,life:(e.life??.6)*(.7+Math.random()*.6),t:0,size:h,g:e.gravity??-4,grow:e.grow??1,op:e.opacity??1,drag:e.drag??1.5})}}ring(t,e={}){let n=new Wt(this.ringGeo,new we({color:e.color??16777215,transparent:!0,opacity:.8,depthWrite:!1}));n.position.copy(t),n.position.y+=.1,n.rotation.x=Math.PI/2,this.scene.add(n),this.rings.push({m:n,t:0,life:e.life??.4,r0:e.r0??.3,r1:e.r1??3})}update(t){for(let e=this.active.length-1;e>=0;e--){let n=this.active[e];if(n.t+=t,n.t>=n.life){n.s.visible=!1,this.pool.push(n.s),this.active.splice(e,1);continue}n.v.y+=n.g*t,n.v.multiplyScalar(Math.max(0,1-n.drag*t)),n.s.position.addScaledVector(n.v,t);let s=n.t/n.life;n.s.material.opacity=n.op*(1-s),n.s.scale.setScalar(n.size*(1+(n.grow-1)*s))}for(let e=this.rings.length-1;e>=0;e--){let n=this.rings[e];n.t+=t;let s=n.t/n.life;if(s>=1){this.scene.remove(n.m),n.m.material.dispose(),this.rings.splice(e,1);continue}let r=n.r0+(n.r1-n.r0)*s;n.m.scale.set(r,r,1+s),n.m.material.opacity=.8*(1-s)}}clear(){for(let t of this.active)t.s.visible=!1,this.pool.push(t.s);this.active=[];for(let t of this.rings)this.scene.remove(t.m);this.rings=[]}};var ca=(i,t,e)=>i<t?t:i>e?e:i;function Hc(i,t,e,n,s,r,a={}){return{type:"box",minX:i,minY:t,minZ:e,maxX:n,maxY:s,maxZ:r,dx:0,dy:0,dz:0,...a}}function gn(i,t,e,n,s,r={}){return{type:"cyl",x:i,z:t,r:e,minY:n,maxY:s,dx:0,dy:0,dz:0,...r}}function lu(i,t,e,n){i.type==="box"?(i.minX+=t,i.maxX+=t,i.minZ+=n,i.maxZ+=n):(i.x+=t,i.z+=n),i.minY+=e,i.maxY+=e,i.dx=t,i.dy=e,i.dz=n}function la(i,t,e,n){if(i.type==="box"){let o=ca(t,i.minX,i.maxX),c=ca(e,i.minZ,i.maxZ),l=t-o,h=e-c;return l*l+h*h<n*n}let s=t-i.x,r=e-i.z,a=i.r+n;return s*s+r*r<a*a}function hu(i,t,e){if(i.type==="box"){let c=ca(t.x,i.minX,i.maxX),l=ca(t.z,i.minZ,i.maxZ),h=t.x-c,u=t.z-l,d=h*h+u*u;if(d>=e*e)return null;if(d>1e-10){let b=Math.sqrt(d),y=(e-b)/b;return t.x+=h*y,t.z+=u*y,{x:h/b,z:u/b}}let f=t.x-i.minX,m=i.maxX-t.x,x=t.z-i.minZ,g=i.maxZ-t.z,p=Math.min(f,m,x,g);return p===f?(t.x=i.minX-e,{x:-1,z:0}):p===m?(t.x=i.maxX+e,{x:1,z:0}):p===x?(t.z=i.minZ-e,{x:0,z:-1}):(t.z=i.maxZ+e,{x:0,z:1})}let n=t.x-i.x,s=t.z-i.z,r=i.r+e,a=n*n+s*s;if(a>=r*r)return null;let o=Math.sqrt(a);return o<1e-6&&(n=1,s=0,o=1),t.x=i.x+n/o*r,t.z=i.z+s/o*r,{x:n/o,z:s/o}}function ha(i,t,e,n,s=.05){let r=-1/0;for(let a of i)a.disabled||a.maxY>e+.01||la(a,t,n,s)&&a.maxY>r&&(r=a.maxY);return r}var Vc=.4,ua=1.25,uu=8.6,mx=60,gx=26,xx=-38,_x=14,yx=12.5,du=-32,vx=-34,da=class{constructor(t){this.game=t,this.mesh=Xh(),this.pos=new T,this.vel=new T,this.facing=0,this.shadow=new Wt(new ji(.45,24),new we({color:0,transparent:!0,opacity:.35,depthWrite:!1})),this.shadow.rotation.x=-Math.PI/2,this.reset(0,0,0,0)}reset(t,e,n,s){this.pos.set(t,e,n),this.vel.set(0,0,0),this.facing=s,this.grounded=!1,this.ground=null,this.coyote=0,this.jumpBuffer=0,this.jumpsLeft=1,this.pounding=!1,this.poundWind=0,this.poundLand=0,this.spinTime=0,this.spinCd=0,this.airSpinUsed=!1,this.invuln=0,this.controlLock=0,this.squash=0,this.flip=0,this.walkT=0,this.alive=!0,this.fromBounce=!1,this.mesh.visible=!0,this.mesh.position.copy(this.pos)}attach(t){t.add(this.mesh),t.add(this.shadow)}hurt(t){if(this.invuln>0||!this.alive)return;this.invuln=1.6;let e=this.pos.x-t.x,n=this.pos.z-t.z,s=Math.hypot(e,n)||1;this.vel.set(e/s*8,9,n/s*8),this.grounded=!1,this.ground=null,this.controlLock=.35,this.pounding=!1,this.poundWind=0,this.game.onPlayerHurt()}stompBounce(){this.vel.y=this.game.input.jumpHeld()?15:11,this.jumpsLeft=1,this.airSpinUsed=!1,this.pounding=!1,this.poundWind=0,this.fromBounce=!0,this.squash=-.3}bounce(t){this.vel.y=t,this.jumpsLeft=1,this.airSpinUsed=!1,this.pounding=!1,this.poundWind=0,this.grounded=!1,this.ground=null,this.fromBounce=!0,this.squash=-.45,this.game.audio.play("bounce")}step(t,e,n,s){let r=n.colliders;this.invuln>0&&(this.invuln-=t),this.controlLock>0&&(this.controlLock-=t),this.spinTime>0&&(this.spinTime-=t),this.spinCd>0&&(this.spinCd-=t),this.poundLand>0&&(this.poundLand-=t),this.coyote>0&&(this.coyote-=t),this.jumpBuffer>0&&(this.jumpBuffer-=t),this.grounded&&this.ground&&!this.ground.disabled&&(this.pos.x+=this.ground.dx,this.pos.y+=this.ground.dy,this.pos.z+=this.ground.dz);let a=e.move,o=Math.sin(s),c=Math.cos(s),l=a.x*c+a.y*o,h=-a.x*o+a.y*c,u=Math.hypot(l,h),d=this.controlLock>0||this.poundWind>0||this.pounding||this.poundLand>0||!this.alive,f=0,m=0;!d&&u>.05&&(f=l*uu,m=h*uu);let x=(this.grounded?mx:gx)*t;if(!(this.controlLock>0&&!this.grounded)){let y=f-this.vel.x,_=m-this.vel.z,P=Math.hypot(y,_);P>x?(this.vel.x+=y/P*x,this.vel.z+=_/P*x):(this.vel.x=f,this.vel.z=m)}if((this.pounding||this.poundWind>0)&&(this.vel.x=0,this.vel.z=0),!d&&u>.05){let _=Math.atan2(l,h)-this.facing;for(;_>Math.PI;)_-=Math.PI*2;for(;_<-Math.PI;)_+=Math.PI*2;this.facing+=_*Math.min(1,t*14)}if(e.jumpPressed&&this.alive&&(this.jumpBuffer=.13),this.jumpBuffer>0&&!d&&(this.grounded||this.coyote>0?(this.vel.y=_x,this.grounded=!1,this.ground=null,this.coyote=0,this.jumpBuffer=0,this.jumpsLeft=1,this.fromBounce=!1,this.squash=-.3,this.game.audio.play("jump"),this.game.particles.burst(this.pos,{count:5,color:16777215,speed:2,size:.5,flat:!0,life:.4})):this.jumpsLeft>0&&e.jumpPressed&&(this.vel.y=yx,this.jumpsLeft--,this.jumpBuffer=0,this.flip=1,this.fromBounce=!1,this.game.audio.play("jump2"),this.game.particles.burst(this.pos,{count:8,color:16766346,speed:3,size:.4,tex:"sparkle",additive:!0,life:.5}))),e.spinPressed&&this.spinCd<=0&&this.alive&&!this.pounding&&this.poundWind<=0&&(this.spinTime=.42,this.spinCd=.55,!this.grounded&&!this.airSpinUsed&&(this.vel.y=Math.max(this.vel.y,5.5),this.airSpinUsed=!0),this.game.audio.play("spin"),this.game.particles.burst(new T(this.pos.x,this.pos.y+.6,this.pos.z),{count:10,color:10481896,speed:6,size:.4,flat:!0,life:.35,tex:"sparkle",additive:!0}),n.spinHit(this)),e.poundPressed&&!this.grounded&&!this.pounding&&this.poundWind<=0&&this.alive&&(this.poundWind=.2,this.vel.set(0,0,0),this.flip=0,this.game.audio.play("spin")),this.poundWind>0&&(this.poundWind-=t,this.vel.y=1.5,this.poundWind<=0&&(this.pounding=!0,this.vel.y=vx)),!this.pounding&&this.poundWind<=0){let y=xx;this.vel.y>0&&!e.jumpHeld&&!this.fromBounce&&(y*=2.3),this.spinTime>0&&this.vel.y<0&&(y*=.35),this.vel.y+=y*t;let _=n.updraftAt(this.pos);_&&(this.vel.y+=_.strength*t,this.vel.y>10&&(this.vel.y=10),this.jumpsLeft=1,this.airSpinUsed=!1,this.fromBounce=!0),this.vel.y<du&&(this.vel.y=du)}let g=this.grounded,p=this.pos.y;this.pos.y+=this.vel.y*t,this.grounded=!1;let b=null;for(let y of r)if(!y.disabled&&la(y,this.pos.x,this.pos.z,Vc*.75)&&this.pos.y<y.maxY&&this.pos.y+ua>y.minY){let _=Math.min(y.maxY,y.maxY-y.dy);this.vel.y<=.01+Math.max(0,y.dy/t)&&p>=_-.08?(this.pos.y=y.maxY,(!b||y.maxY>=b.maxY)&&(b=y)):this.vel.y>0&&p+ua<=y.minY+.15&&(this.pos.y=y.minY-ua,this.vel.y=0)}if(b){let y=this.vel.y;if(this.grounded=!0,this.ground=b,b.bounce){this.bounce(b.bounce);let _=n.bouncers.find(P=>P.col===b);_&&(_.t=.4)}else this.vel.y=0,b.onLand&&b.onLand(this),this.pounding?(this.pounding=!1,this.poundLand=.22,this.game.audio.play("pound"),this.game.shake(.35),this.game.particles.ring(this.pos,{color:16773590,r1:3}),this.game.particles.burst(this.pos,{count:14,color:16777215,speed:6,size:.7,flat:!0,life:.5}),n.shockwave(this.pos,2.8),b.crate&&n.breakCrate(b.crateRef)):!g&&y<-6&&(this.squash=Math.min(.4,-y/50),this.game.audio.play("land"),this.game.particles.burst(this.pos,{count:4,color:16777215,speed:1.5,size:.4,flat:!0,life:.3})),this.grounded&&(this.jumpsLeft=1,this.airSpinUsed=!1,this.fromBounce=!1,this.flip=0)}else g&&this.vel.y<=0&&(this.coyote=.1),this.ground=null;this.pos.x+=this.vel.x*t,this.pos.z+=this.vel.z*t;for(let y of r){if(y.disabled||this.pos.y>=y.maxY-.001||this.pos.y+ua<=y.minY||!la(y,this.pos.x,this.pos.z,Vc))continue;if(this.grounded&&y.maxY-this.pos.y<=.42&&!y.bounce){this.pos.y=y.maxY,this.ground=y;continue}let _=hu(y,this.pos,Vc);if(_){let P=this.vel.x*_.x+this.vel.z*_.z;P<0&&(this.vel.x-=P*_.x,this.vel.z-=P*_.z)}}this.pos.y<n.killY&&this.alive&&this.game.onPlayerFell()}updateVisual(t,e){let n=this.mesh,s=n.userData;n.position.copy(this.pos),n.rotation.y=this.facing;let r=Math.hypot(this.vel.x,this.vel.z);n.visible=this.alive&&!(this.invuln>0&&Math.floor(this.invuln*14)%2===0),this.squash+=(0-this.squash)*Math.min(1,t*10);let a=1-this.squash,o=1+this.squash*.5;!this.grounded&&this.vel.y>2&&(a*=1.08,o*=.95),s.body.scale.set(o,a,o),this.grounded&&r>.5?(this.walkT+=t*r*1.6,s.feet[0].position.z=.04+Math.sin(this.walkT)*.22,s.feet[1].position.z=.04-Math.sin(this.walkT)*.22,s.feet[0].position.y=.08+Math.max(0,Math.cos(this.walkT))*.1,s.feet[1].position.y=.08+Math.max(0,-Math.cos(this.walkT))*.1,s.body.position.y=Math.abs(Math.sin(this.walkT))*.08,s.body.rotation.x=.12):(s.feet[0].position.z+=(.04-s.feet[0].position.z)*.2,s.feet[1].position.z+=(.04-s.feet[1].position.z)*.2,s.feet[0].position.y=s.feet[1].position.y=this.grounded?.08:0,s.body.position.y=this.grounded?Math.sin(e.time*3)*.02:0,s.body.rotation.x=this.grounded?0:-.1),s.hands[0].position.y=s.hands[1].position.y=.55+(this.grounded?Math.sin(this.walkT)*.04:.2),this.flip>0&&(this.flip-=t*2.6,s.body.rotation.x=(1-Math.max(0,this.flip))*Math.PI*2),this.poundWind>0&&(s.body.rotation.x=(1-this.poundWind/.2)*Math.PI*2),this.pounding&&(s.body.rotation.x=0,s.body.scale.set(.9,1.15,.9)),s.body.rotation.y=this.spinTime>0?(1-this.spinTime/.42)*Math.PI*4:0;let c=1+Math.sin(e.time*23)*.08+Math.sin(e.time*37)*.05;s.flame.scale.set(1/c,c*(1+Math.min(.5,r*.03)),1/c),s.flame.rotation.x=-Math.min(.5,r*.05),s.tail.rotation.x=Math.sin(e.time*10)*.2+(this.grounded?0:-.4)-r*.03,s.tail.rotation.y=Math.sin(e.time*7)*.2,s.light.intensity=5+Math.sin(e.time*20)*.8;let l=ha(e.colliders,this.pos.x,this.pos.y+.05,this.pos.z,.05);if(l>-1e8&&this.alive){this.shadow.visible=!0,this.shadow.position.set(this.pos.x,l+.03,this.pos.z);let h=this.pos.y-l;this.shadow.scale.setScalar(Math.max(.4,1-h*.05)),this.shadow.material.opacity=Math.max(.12,.4-h*.02)}else this.shadow.visible=!1}};var fa=class{constructor(t,e,n,s,r){this.level=t,this.game=t.game,this.center=new T(e,n,s),this.top=n,this.arenaR=r,this.mesh=$h(),this.mesh.position.set(e,n+8,s),t.add(this.mesh),this.pos=this.mesh.position,this.hp=3,this.maxHp=3,this.state="wait",this.t=0,this.throws=0,this.throwT=0,this.angle=0,this.col=gn(e,s,2.1,n,n+4,{disabled:!0,onLand:a=>this.onStomp(a)}),t.colliders.push(this.col),this.wave=null,this.shadow=new Wt(new ji(2.6,32),new we({color:0,transparent:!0,opacity:.35,depthWrite:!1})),this.shadow.rotation.x=-Math.PI/2,this.shadow.visible=!1,t.add(this.shadow),this.flash=0}get active(){return this.state!=="wait"&&this.state!=="dead"}get phase(){return this.maxHp-this.hp+1}setState(t){this.state=t,this.t=0}start(){this.setState("intro"),this.game.audio.play("bossroar"),this.game.audio.playMusic("boss"),this.game.hud.showBoss("Graf Nebelmaul",this.hp/this.maxHp),this.game.banner("Graf Nebelmaul","Herrscher des Nebels")}update(t,e){this.t+=t;let n=this.mesh.userData,s=this.level.time;n.puffs.rotation.y+=t*.6,n.gem.rotation.y+=t*1.5,n.hands.forEach((o,c)=>{o.position.y=1.6+Math.sin(s*2+c*2)*.3}),this.flash>0?(this.flash-=t,n.mat.emissive.set(Math.floor(this.flash*20)%2?16728160:2756680)):n.mat.emissive.set(this.state==="dazed"?3809376:2756680);let r=new T(e.pos.x-this.pos.x,0,e.pos.z-this.pos.z);this.state!=="dead"&&(this.mesh.rotation.y+=(Math.atan2(r.x,r.z)-this.mesh.rotation.y)*Math.min(1,t*3));let a=this.center;switch(this.state){case"wait":{this.pos.y=this.top+8+Math.sin(s)*.5,Math.hypot(e.pos.x-a.x,e.pos.z-a.z)<this.arenaR-2&&Math.abs(e.pos.y-this.top)<2&&e.alive&&this.start();break}case"intro":this.pos.y=this.top+8+Math.sin(this.t*10)*.2,this.mesh.scale.setScalar(1+Math.sin(this.t*12)*.03),this.t>2.2&&(this.mesh.scale.setScalar(1),this.setState("hover"),this.throws=0,this.throwT=.8);break;case"hover":{this.angle+=t*(.4+this.phase*.15);let o=6.5,c=a.x+Math.cos(this.angle)*o,l=a.z+Math.sin(this.angle)*o;this.pos.x+=(c-this.pos.x)*Math.min(1,t*2),this.pos.z+=(l-this.pos.z)*Math.min(1,t*2),this.pos.y+=(this.top+7.5+Math.sin(s*2)*.6-this.pos.y)*Math.min(1,t*3),this.throwT-=t,this.throwT<=0&&(this.throwOrb(e),this.throws++,this.throwT=[0,1.5,1.15,.9][this.phase],this.throws>=2+this.phase&&this.setState("warn"));break}case"warn":{let o=Fs.clamp(e.pos.x,a.x-this.arenaR+3,a.x+this.arenaR-3),c=Fs.clamp(e.pos.z,a.z-this.arenaR+3,a.z+this.arenaR-3),l=Math.min(1,t*4);this.pos.x+=(o-this.pos.x)*l,this.pos.z+=(c-this.pos.z)*l,this.pos.y+=(this.top+9-this.pos.y)*l,this.shadow.visible=!0,this.shadow.position.set(this.pos.x,this.top+.05,this.pos.z),this.shadow.material.opacity=.2+Math.sin(this.t*20)*.1+this.t*.2,this.t>1.3-this.phase*.12&&(this.setState("slam"),this.vy=0);break}case"slam":if(this.vy-=80*t,this.pos.y+=this.vy*t,this.shadow.position.set(this.pos.x,this.top+.05,this.pos.z),this.pos.y<=this.top){this.pos.y=this.top,this.shadow.visible=!1,this.game.audio.play("pound"),this.game.shake(.6),this.game.particles.burst(new T(this.pos.x,this.top+.3,this.pos.z),{count:24,color:[9402560,6966425],speed:10,size:1.4,flat:!0,life:.8});let o=1.3-this.phase*.15;this.wave={x:this.pos.x,z:this.pos.z,t:0,life:o,r1:this.arenaR+2,hit:!1},this.game.particles.ring(new T(this.pos.x,this.top,this.pos.z),{color:12950527,life:o,r0:2.5,r1:this.arenaR+2}),this.col.x=this.pos.x,this.col.z=this.pos.z,this.col.disabled=!1,this.setState("dazed"),this.phase>=2&&this.spawnMinions()}break;case"dazed":this.mesh.rotation.z=Math.sin(this.t*6)*.08,n.gemGlow.material.opacity=.6+Math.sin(this.t*12)*.4,this.t>3.6-this.phase*.3&&(this.col.disabled=!0,this.mesh.rotation.z=0,this.setState("rise"));break;case"rise":this.pos.y+=(this.top+7.5-this.pos.y)*Math.min(1,t*2.5),this.t>1.2&&(this.setState("hover"),this.throws=0,this.throwT=1);break;case"hurt":this.pos.y+=(this.top+8-this.pos.y)*Math.min(1,t*3),this.mesh.rotation.z=Math.sin(this.t*20)*.15*(1-this.t),this.t>1.4&&(this.mesh.rotation.z=0,this.hp<=0?(this.setState("dead"),this.game.audio.play("bossroar")):(this.setState("hover"),this.throws=0,this.throwT=.6,this.game.audio.play("bossroar")));break;case"dead":{let o=Math.max(0,1-this.t/2.5);this.mesh.scale.setScalar(Math.max(.01,o)),this.mesh.rotation.y+=t*(4+this.t*6),Math.random()<t*20&&this.game.particles.burst(this.pos.clone().add(new T(0,2*o,0)),{count:3,color:[9402560,16777215,10482943],speed:6,size:1.2,additive:!0,tex:"glow"}),this.t>2.5&&this.mesh.visible&&(this.mesh.visible=!1,this.game.hud.hideBoss(),this.game.bossDefeated(),this.level.goalAt(this.center.x,this.top,this.center.z));break}}if(this.wave){let o=this.wave;o.t+=t;let c=2.5+(o.r1-2.5)*(o.t/o.life),l=Math.hypot(e.pos.x-o.x,e.pos.z-o.z);!o.hit&&Math.abs(l-c)<.7&&e.pos.y<this.top+.6&&(o.hit=!0,e.hurt(new T(o.x,this.top,o.z))),o.t>=o.life&&(this.wave=null)}}spawnMinions(){let t=this.phase===2?1:2;for(let e=0;e<t;e++){let n=Math.random()*Math.PI*2,s=this.level.enemy("nebling",this.center.x+Math.cos(n)*9,this.top,this.center.z+Math.sin(n)*9,{range:4});this.game.particles.burst(s.pos.clone().add(new T(0,.5,0)),{count:12,color:6966425,speed:4,size:1})}}throwOrb(t){let e=this.level,n=this.game;n.audio.play("orb");let s=this.pos.clone().add(new T(0,2,0)),r=new T(t.vel.x,0,t.vel.z).multiplyScalar(.35),a=new T(t.pos.x+r.x,this.top,t.pos.z+r.z),o=ha(e.colliders,a.x,a.y+5,a.z);a.y=o>-1e9?o:this.top;let c=1.25,l=-18,h=new T((a.x-s.x)/c,(a.y-s.y)/c-.5*l*c,(a.z-s.z)/c),u=new Wt(new ne(.55,14,10),yt(3810136,{emissive:9059583,ei:.5}));u.add(jn(11563263,2.2,.7)),u.position.copy(s),e.add(u);let d=new Wt(new Xr(.9,1.3,28),new we({color:16728176,transparent:!0,opacity:.7,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.position.set(a.x,a.y+.06,a.z),e.add(d);let f={t:0,update:m=>{if(f.t+=m,h.y+=l*m,u.position.addScaledVector(h,m),d.material.opacity=.4+Math.sin(f.t*20)*.3,u.position.y<=a.y+.3||f.t>3){e.group.remove(u),e.group.remove(d),n.audio.play("boom"),n.particles.burst(u.position,{count:16,color:[9059583,3810136,16777215],speed:6,size:1.1});let x=n.player.pos;return Math.hypot(x.x-u.position.x,x.z-u.position.z)<1.6&&Math.abs(x.y-u.position.y)<1.8&&n.player.hurt(u.position),!0}return!1},check:m=>{let x=m.pos;u.parent&&u.position.distanceTo(new T(x.x,x.y+.6,x.z))<1&&m.hurt(u.position)}};e.projectiles.push(f)}onStomp(t){if(this.state!=="dazed")return;this.hp--,this.flash=1,this.col.disabled=!0,this.game.audio.play("bosshit"),this.game.shake(.5),this.game.particles.burst(new T(this.pos.x,this.top+4.3,this.pos.z),{count:20,color:[10482943,16777215,16769126],speed:8,size:.8,tex:"sparkle",additive:!0}),this.game.hud.showBoss("Graf Nebelmaul",this.hp/this.maxHp);let e=t.pos.x-this.pos.x,n=t.pos.z-this.pos.z,s=Math.hypot(e,n)||1;t.vel.set(e/s*9,17,n/s*9),t.grounded=!1,t.ground=null,t.jumpsLeft=1,t.controlLock=.5,this.setState("hurt");let r=["Uff! Mein sch\xF6ner Kristall!","Du kleine Funzel! Das wirst du bereuen!","Neeein! Mein Nebel... er lichtet sich!"];this.game.hud.toast(r[this.maxHp-this.hp-1]||"")}interact(t){if(!t.alive)return;let e=t.pos,n=this.pos.y+2.2,s=Math.hypot(e.x-this.pos.x,e.z-this.pos.z);if(this.state==="hover"||this.state==="rise"||this.state==="slam"||this.state==="intro"||this.state==="warn"){let r=e.y+.6-n;Math.hypot(s,r)<2.6&&t.hurt(this.pos)}}shockwave(){}};var fu={grass:["grass","dirt"],meadow:["grassPlain","dirt"],stone:["stone","stone"],crystal:["crystalTop","crystalRock"],wood:["wood","wood"],darkwood:["darkWood","darkWood"],metal:["metal","metal"],brick:["brickTop","brick"],tower:["brickTop","towerCliff"],sand:["sand","dirt"],cloud:["cloudSea","cloudSea"],checker:["checker","wood"]};function Mx(i,t,e,n,s){let r=i.attributes.position,a=i.attributes.normal,o=i.attributes.uv;for(let c=0;c<r.count;c++){let l=r.getX(c)+t,h=r.getY(c)+e,u=r.getZ(c)+n,d=Math.abs(a.getX(c));Math.abs(a.getY(c))>.5?o.setXY(c,l/s,u/s):d>.5?o.setXY(c,u/s,h/s):o.setXY(c,l/s,h/s)}o.needsUpdate=!0}function pu(i,t,e,n,s,r){let a=i.attributes.position,o=i.attributes.normal,c=i.attributes.uv;for(let l=0;l<a.count;l++){let h=a.getX(l),u=a.getY(l)+e,d=a.getZ(l);Math.abs(o.getY(l))>.5?c.setXY(l,(h+n)/r,(d+s)/r):c.setXY(l,Math.atan2(d,h)*t/r,u/r)}c.needsUpdate=!0}var ss=null;function bx(){if(ss)return ss;let i=document.createElement("canvas");i.width=64,i.height=256;let t=i.getContext("2d");for(let e=0;e<40;e++){let n=Math.random()*64,s=Math.random()*256,r=20+Math.random()*60,a=t.createLinearGradient(0,s,0,s+r);a.addColorStop(0,"rgba(255,255,255,0)"),a.addColorStop(.5,"rgba(255,255,255,0.8)"),a.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=a,t.fillRect(n,s,2,r)}return ss=new Ki(i),ss.wrapS=ss.wrapT=ui,ss}var Sx="varying vec3 vDir; void main(){ vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }",Ex=`uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; uniform vec3 sunDir; uniform vec3 sunCol; uniform float stars; varying vec3 vDir;
float hash(vec3 p){ p = fract(p*0.3183099+.1); p*=17.0; return fract(p.x*p.y*p.z*(p.x+p.y+p.z)); }
void main(){ vec3 d = normalize(vDir); float h = d.y; vec3 c = h > 0.0 ? mix(horizon, top, pow(h, 0.55)) : mix(horizon, bottom, pow(-h, 0.45));
 float s = max(dot(d, normalize(sunDir)), 0.0); c += sunCol * (pow(s, 200.0) * 1.5 + pow(s, 12.0) * 0.25);
 if (stars > 0.0 && h > 0.0) { vec3 q = floor(d * 220.0); float st = step(0.997, hash(q)); c += vec3(st) * stars * h; }
 gl_FragColor = vec4(c, 1.0); }`,pa=class{constructor(t,e){this.def=t,this.game=e,this.T=e.T,this.group=new Xt,this.colliders=[],this.cameraMeshes=[],this.sparks=[],this.hearts=[],this.enemies=[],this.movers=[],this.crumbles=[],this.bouncers=[],this.checkpoints=[],this.updrafts=[],this.firebars=[],this.hints=[],this.crates=[],this.anim=[],this.projectiles=[],this.goal=null,this.boss=null,this.spawnPoint={x:0,y:0,z:0,yaw:0},this.rand=Un(t.seed||7),this.killY=t.killY??-25,this.time=0,this.sparkTotal=0,this.mats={},this.setupEnvironment(),t.build(this)}surf(t){if(!this.mats[t]){let[e,n]=fu[t]||fu.grass;this.mats[t]={top:yt(16777215,{map:this.T[e]}),side:yt(16777215,{map:this.T[n]})}}return this.mats[t]}add(t){return this.group.add(t),t}setupEnvironment(){let t=this.def.theme,e=new T(...t.sunDir||[.5,.8,.3]).normalize();this.sunDir=e;let n=new Wt(new ne(900,32,16),new je({vertexShader:Sx,fragmentShader:Ex,side:Se,depthWrite:!1,fog:!1,uniforms:{top:{value:new Bt(t.skyTop)},horizon:{value:new Bt(t.skyHorizon)},bottom:{value:new Bt(t.skyBottom)},sunDir:{value:e},sunCol:{value:new Bt(t.sunColor||16773824)},stars:{value:t.stars||0}}}));n.renderOrder=-10,n.frustumCulled=!1,this.sky=n,this.add(n),this.fog=new Ur(t.fog,t.fogNear,t.fogFar);let s=new Yr(t.hemiSky,t.hemiGround,t.hemiI??1.6);this.add(s);let r=new Jr(t.sunLight||16773590,t.sunI??2.6);r.castShadow=!0,r.shadow.mapSize.set(2048,2048);let a=r.shadow.camera;if(a.left=a.bottom=-28,a.right=a.top=28,a.near=1,a.far=120,r.shadow.bias=-8e-4,r.shadow.normalBias=.03,this.sun=r,this.add(r),this.add(r.target),t.sea){let o=this.T[t.sea].clone();o.needsUpdate=!0,o.repeat.set(60,60);let c=new Wt(new $i(3e3,3e3),new we({map:o,color:t.seaTint||16777215}));c.rotation.x=-Math.PI/2,c.position.y=t.seaY??-40,this.add(c),this.seaTex=o}}updateSun(t){this.sun.position.set(t.x+this.sunDir.x*50,t.y+this.sunDir.y*50,t.z+this.sunDir.z*50),this.sun.target.position.copy(t)}box(t,e,n,s,r,a={}){let o=a.h??3,c=this.surf(a.mat||"grass"),l=new ye(s,o,r);Mx(l,t,e-o/2,n,a.tile??4);let h=new Wt(l,[c.side,c.side,c.top,c.side,c.side,c.side]);if(h.position.set(t,e-o/2,n),h.castShadow=!0,h.receiveShadow=!0,this.add(h),a.under!==!1&&!a.noUnder){let d=a.underH??Math.min(s,r)*.9,f=new jt(1,.12,d,4,1),m=new Wt(f,c.side);m.rotation.y=Math.PI/4,m.scale.set(s/Math.SQRT2,1,r/Math.SQRT2),m.position.set(t,e-o-d/2,n),this.add(m)}let u=Hc(t-s/2,e-o,n-r/2,t+s/2,e,n+r/2,{mesh:h});return a.noCollide||this.colliders.push(u),a.noCam||this.cameraMeshes.push(h),a.decor&&this.scatter(u,a.decor),{mesh:h,col:u}}cyl(t,e,n,s,r={}){let a=r.h??3,o=this.surf(r.mat||"grass"),c=new jt(s,s*(r.taper??.96),a,r.seg??Math.max(12,Math.round(s*6)));pu(c,s,e-a/2,t,n,r.tile??4);let l=new Wt(c,[o.side,o.top,o.side]);if(l.position.set(t,e-a/2,n),l.castShadow=!0,l.receiveShadow=!0,this.add(l),r.under!==!1){let u=r.underH??s*1.4,d=new jt(s*.94,s*.15,u,Math.max(8,Math.round(s*4)));pu(d,s,0,0,0,4);let f=new Wt(d,o.side);f.position.set(t,e-a-u/2,n),this.add(f)}let h=gn(t,n,s,e-a,e,{mesh:l});return r.noCollide||this.colliders.push(h),this.cameraMeshes.push(l),r.decor&&this.scatter(h,r.decor),{mesh:l,col:h}}mover(t){let e=new T(...t.from),n=new T(...t.to),s=t.h??.8,r;t.shape==="cyl"?r=this.cyl(e.x,e.y,e.z,t.r??1.8,{mat:t.mat||"wood",h:s,under:!1}):r=this.box(e.x,e.y,e.z,t.w??3.5,t.d??3.5,{mat:t.mat||"wood",h:s,under:!1});let a=new Wt(new Kn(.22),yt(16769126,{emissive:16756736,ei:.6}));return a.position.set(0,s/2+.05,0),a.scale.y=.5,r.mesh.add(a),this.movers.push({...r,from:e,to:n,period:t.period??5,phase:(t.phase??0)*(t.period??5),pos:e.clone()}),r}crumble(t,e,n,s=3,r=3){let a=this.box(t,e,n,s,r,{mat:this.def.crumbleMat||"stone",h:.7,under:!1,noCam:!0});a.mesh.material=a.mesh.material.map(l=>{let h=l.clone();return h.color=new Bt(16765088),h});let o=new Wt(new ye(s*.9,.05,.08),yt(2759184));o.position.y=.36,o.rotation.y=.6,a.mesh.add(o);let c=o.clone();return c.rotation.y=-.9,c.scale.x=.6,a.mesh.add(c),this.crumbles.push({...a,home:a.mesh.position.clone(),state:"idle",t:0}),a}bouncer(t,e,n,s=23){let r=tu(this.def.bouncerColor);r.position.set(t,e,n),this.add(r);let a=gn(t,n,.95,e,e+.72,{bounce:s});this.colliders.push(a),this.bouncers.push({mesh:r,col:a,t:0})}spark(t,e,n){let s=Jh();s.position.set(t,e,n),this.add(s),this.sparks.push({mesh:s,pos:s.position,taken:!1,base:e,ph:t*.3+n*.2}),this.sparkTotal++}sparkLine(t,e,n){for(let s=0;s<n;s++){let r=n===1?0:s/(n-1);this.spark(t[0]+(e[0]-t[0])*r,t[1]+(e[1]-t[1])*r,t[2]+(e[2]-t[2])*r)}}sparkRing(t,e,n,s,r){for(let a=0;a<r;a++){let o=a/r*Math.PI*2;this.spark(t+Math.cos(o)*s,e,n+Math.sin(o)*s)}}heart(t,e,n){let s=Kh();s.position.set(t,e,n),this.add(s),this.hearts.push({mesh:s,pos:s.position,taken:!1,base:e})}crate(t,e,n,s=5){let r=su();r.position.set(t,e+.55,n),this.add(r);let a=Hc(t-.55,e,n-.55,t+.55,e+1.1,n+.55,{crate:!0});this.colliders.push(a);let o={mesh:r,col:a,sparks:s,broken:!1};a.crateRef=o,this.crates.push(o),this.sparkTotal+=s}checkpoint(t,e,n,s=0){let r=Qh();r.position.set(t,e,n),r.rotation.y=s,this.add(r),this.checkpoints.push({mesh:r,x:t,y:e,z:n,yaw:s,active:!1})}spawn(t,e,n,s=0){this.spawnPoint={x:t,y:e,z:n,yaw:s}}goalAt(t,e,n){let s=new Xt,r=this.surf(this.def.goalMat||"stone"),a=new Wt(new jt(1.4,1.7,.6,10),r.side);a.position.y=.3,a.castShadow=!0,s.add(a);let o=new Wt(new jt(.7,.9,1,10),r.side);o.position.y=1,s.add(o),me(s,.04),s.position.set(t,e,n),this.add(s),this.colliders.push(gn(t,n,1,e,e+1.5));let c=jh();c.position.set(t,e+3,n),this.add(c);let l=new Wt(new jt(.6,.6,60,16,1,!0),Nn(10482943,{transparent:!0,opacity:.18,additive:!0,side:ze}));l.position.set(t,e+30,n),this.add(l),this.goal={mesh:c,pos:c.position,taken:!1,beam:l}}enemy(t,e,n,s,r={}){let a;t==="nebling"?a=qh():t==="dornling"?a=Yh():a=Zh(),a.position.set(e,n,s),this.add(a);let o={type:t,mesh:a,pos:a.position,home:new T(e,n,s),alive:!0,dying:0,r:t==="flatterling"?.55:.62,h:t==="flatterling"?.9:1.15,stompable:t!=="dornling",range:r.range??3,axis:r.axis??"x",speed:r.speed??(t==="dornling"?1.8:2.2),t:this.rand()*10,dir:1,ground:n,chase:r.chase??t==="nebling"};return t==="flatterling"&&(o.pos.y=n+1.8,o.flyY=n+1.8),this.enemies.push(o),o}firebar(t,e,n,s=4,r=1.4,a=5,o){let c=new Xt;c.position.set(t,e,n),this.add(c);let l=o??this.def.firebarColor??16747068,h=yt(l,{emissive:l,ei:.8}),u=[],d=new Wt(new jt(.25,.35,.8,8),yt(4864606));d.position.y=-.4,c.add(d);for(let f=0;f<a;f++){let m=new Wt(new Wr(.32,0),h);m.position.x=(f+.6)*(s/a),m.add(jn(l,1.5,.6)),c.add(m),u.push(m)}this.colliders.push(gn(t,n,.3,e-.8,e)),this.firebars.push({piv:c,balls:u,speed:r,len:s})}updraft(t,e,n,s,r,a=55){let o=new jt(n,n,r-s,20,1,!0),c=bx().clone();c.needsUpdate=!0,c.repeat.set(3,(r-s)/12);let l=new Wt(o,new we({map:c,color:13629695,transparent:!0,opacity:.55,depthWrite:!1,side:ze,blending:In}));l.position.set(t,(s+r)/2,e),this.add(l);let h=new Wt(new jt(n*.9,n,.5,16),yt(14858078,{map:this.T.metal}));h.position.set(t,s,e),this.add(h),this.updrafts.push({x:t,z:e,r:n,y0:s,y1:r,strength:a,tex:c,mesh:l})}hint(t,e,n,s,r,a=!0){if(a){let o=iu();o.position.set(t,e,n),o.rotation.y=this.rand()*.6-.3,this.add(o)}this.hints.push({x:t,y:e,z:n,r:s,text:r})}bossAt(t,e,n,s){this.boss=new fa(this,t,e,n,s)}tree(t,e,n,s="round",r=!0){let a=s==="pine"?kc(this.rand,this.def.pineColor):Bc(this.rand,s);a.position.set(t,e,n),a.rotation.y=this.rand()*6,this.add(a),r&&this.colliders.push(gn(t,n,.35,e,e+2.5))}crystal(t,e,n,s,r=1){let a=sa(this.rand,s??this.def.crystalColor);a.position.set(t,e,n),a.scale.setScalar(r),this.add(a),r>1.4&&this.colliders.push(gn(t,n,.4*r,e,e+1.5*r))}rock(t,e,n){let s=nu(this.rand,this.def.rockColor);s.position.set(t,e+.1,n),this.add(s)}scatter(t,e){let n=Math.round((t.type==="box"?(t.maxX-t.minX)*(t.maxZ-t.minZ):Math.PI*t.r*t.r)*.18);for(let s=0;s<n;s++){let r,a;if(t.type==="box")r=t.minX+.4+this.rand()*(t.maxX-t.minX-.8),a=t.minZ+.4+this.rand()*(t.maxZ-t.minZ-.8);else{let c=this.rand()*6.283,l=Math.sqrt(this.rand())*(t.r-.5);r=t.x+Math.cos(c)*l,a=t.z+Math.sin(c)*l}let o;if(e==="meadow")o=this.rand()<.5?eu(this.rand):zc(this.rand);else if(e==="grass")o=zc(this.rand,this.def.tuftColor);else if(e==="crystal"){if(this.rand()<.75)continue;o=sa(this.rand,this.def.crystalColor),o.scale.setScalar(.35)}else continue;o.position.set(r,t.maxY,a),o.rotation.y=this.rand()*6,this.add(o)}}distantIsland(t,e,n,s,r={}){let a=this.surf(r.mat||"grass"),o=new Wt(new jt(s,s*.95,s*.35,14),[a.side,a.top,a.side]);o.position.set(t,e,n),this.add(o);let c=new Wt(new qe(s*.93,s*1.8,12),a.side);c.rotation.x=Math.PI,c.position.set(t,e-s*.175-s*.9,n),this.add(c);let l=r.trees??Math.round(s/2);for(let h=0;h<l;h++){let u=this.rand()*6.28,d=this.rand()*s*.7,f=r.kind||"round",m;f==="crystal"?m=sa(this.rand,this.def.crystalColor):f==="pine"?m=kc(this.rand,this.def.pineColor):m=Bc(this.rand,this.rand()<.3?"blossom":f),m.position.set(t+Math.cos(u)*d,e+s*.175,n+Math.sin(u)*d),m.scale.setScalar(s/5+.5),this.add(m)}this.anim.push({kind:"bob",obj:o,base:e,amp:.4,sp:.3+this.rand()*.3,ph:this.rand()*6,other:c,obase:c.position.y})}clouds(t,e,n,s,r,a,o,c){for(let l=0;l<t;l++){let h=au(this.rand,o??this.def.cloudColor??16777215,c??.95);h.position.set(e+(this.rand()-.5)*s,r+this.rand()*(a-r),n+(this.rand()-.5)*s),h.scale.setScalar(1+this.rand()*2),this.add(h),this.anim.push({kind:"drift",obj:h,sp:.3+this.rand()*.6,x0:e-s/2,x1:e+s/2})}}airship(t,e,n,s=0){let r=ru(this.rand);r.position.set(t,e,n),r.rotation.y=s,r.scale.setScalar(1.5),this.add(r),this.anim.push({kind:"ship",obj:r,base:e,ph:this.rand()*6})}lighthouse(t,e,n,s=1){let r=ou();return r.position.set(t,e,n),r.scale.setScalar(s),this.add(r),this.lighthouseObj=r,this.colliders.push(gn(t,n,1.6*s,e,e+13*s)),r}updraftAt(t){for(let e of this.updrafts){let n=t.x-e.x,s=t.z-e.z;if(n*n+s*s<e.r*e.r&&t.y>e.y0-1&&t.y<e.y1)return e}return null}stepWorld(t){this.time+=t;for(let e of this.movers){e.phase+=t;let n=(1-Math.cos(e.phase/e.period*Math.PI*2))/2,s=e.from.x+(e.to.x-e.from.x)*n,r=e.from.y+(e.to.y-e.from.y)*n,a=e.from.z+(e.to.z-e.from.z)*n,o=s-e.pos.x,c=r-e.pos.y,l=a-e.pos.z;e.pos.set(s,r,a),lu(e.col,o,c,l),e.mesh.position.x+=o,e.mesh.position.y+=c,e.mesh.position.z+=l}for(let e of this.crumbles)e.state==="shaking"?(e.t+=t,e.mesh.position.set(e.home.x+(Math.random()-.5)*.12,e.home.y,e.home.z+(Math.random()-.5)*.12),e.t>.55&&(e.state="falling",e.t=0,e.col.disabled=!0,e.vy=0,this.game.audio.play("crumble"),this.game.particles.burst(e.home,{count:8,color:13154464,speed:3,size:.8,spread:2}))):e.state==="falling"&&(e.t+=t,e.vy-=30*t,e.mesh.position.y+=e.vy*t,e.mesh.rotation.x+=t*.8,e.t>3.2&&(e.state="idle",e.col.disabled=!1,e.mesh.position.copy(e.home),e.mesh.rotation.set(0,0,0),e.mesh.scale.setScalar(.01),e.grow=0)),e.grow!==void 0&&(e.grow+=t*3,e.mesh.scale.setScalar(Math.min(1,e.grow)),e.grow>=1&&(e.grow=void 0));for(let e of this.colliders)e.dynamic||(e.dx=e.dy=e.dz=0);for(let e of this.movers)e.col.dynamic=!0}interact(t,e){let n=this.game,s=e.pos,r=new T(s.x,s.y+.6,s.z);for(let o of this.crumbles)o.state==="idle"&&e.grounded&&e.ground===o.col&&(o.state="shaking",o.t=0);for(let o of this.sparks)o.taken||o.pos.distanceToSquared(r)<1.1&&(o.taken=!0,o.mesh.visible=!1,n.addSparks(1,o.pos));for(let o of this.hearts)o.taken||o.pos.distanceToSquared(r)<1.3&&(o.taken=!0,o.mesh.visible=!1,n.addHeart(o.pos));for(let o of this.checkpoints){if(o.active)continue;let c=s.x-o.x,l=s.z-o.z;if(c*c+l*l<4&&Math.abs(s.y-o.y)<2.5){for(let h of this.checkpoints)h.active=!1;o.active=!0,n.setCheckpoint(o)}}for(let o of this.enemies){if(!o.alive)continue;let c=s.x-o.pos.x,l=s.z-o.pos.z,h=Math.hypot(c,l);if(e.spinTime>0&&h<1.8&&Math.abs(r.y-(o.pos.y+o.h/2))<1.6){this.killEnemy(o,e);continue}if(h<o.r+.42&&s.y<o.pos.y+o.h&&s.y+1.2>o.pos.y){if(e.pounding&&o.stompable){this.killEnemy(o,e);continue}if(e.vel.y<.5&&s.y>o.pos.y+o.h*.45&&o.stompable){this.killEnemy(o,e),e.stompBounce();continue}e.hurt(o.pos)}}let a=new T;for(let o of this.firebars)for(let c of o.balls)if(c.getWorldPosition(a),a.distanceToSquared(r)<.75*.75+.2){e.hurt(a);break}for(let o of this.projectiles)o.check&&o.check(e);this.goal&&!this.goal.taken&&this.goal.mesh.visible&&this.goal.pos.distanceToSquared(r)<2.6&&(this.goal.taken=!0,n.collectShard(this.goal)),this.boss&&this.boss.interact(e)}killEnemy(t,e){t.alive=!1,t.dying=.001,this.game.audio.play(e.vel.y<0?"stomp":"kill"),this.game.particles.burst(new T(t.pos.x,t.pos.y+.5,t.pos.z),{count:14,color:[9402560,5980047,16777215],speed:5,size:.9}),this.game.addSparks(1,t.pos,!0)}shockwave(t,e){for(let n of this.enemies)!n.alive||!n.stompable||Math.hypot(n.pos.x-t.x,n.pos.z-t.z)<e&&Math.abs(n.pos.y-t.y)<2&&this.killEnemy(n,this.game.player);this.boss&&this.boss.shockwave(t,e)}breakCrate(t){t.broken||(t.broken=!0,t.col.disabled=!0,t.mesh.visible=!1,this.game.audio.play("crumble"),this.game.particles.burst(t.mesh.position,{count:12,color:[12617808,8014378],speed:6,size:.6,gravity:-15}),this.game.addSparks(t.sparks,t.mesh.position))}spinHit(t){for(let e of this.crates)e.broken||e.mesh.position.distanceTo(new T(t.pos.x,t.pos.y+.6,t.pos.z))<1.7&&this.breakCrate(e)}update(t,e,n){let s=this.time;for(let r of this.sparks)r.taken||(r.mesh.rotation.y=s*2.5+r.ph,r.pos.y=r.base+Math.sin(s*2+r.ph)*.12);for(let r of this.hearts)r.taken||(r.mesh.rotation.y=s*1.5,r.pos.y=r.base+Math.sin(s*2)*.15);for(let r of this.bouncers){r.t>0&&(r.t-=t);let a=r.t>0?Math.sin(r.t*30)*r.t*1.2:0;r.mesh.userData.pad.scale.set(1+a*.3,1-a*.6,1+a*.3)}for(let r of this.checkpoints){let a=r.mesh.userData,o=r.active?1:0;a.flame.material.opacity+=(o*.9-a.flame.material.opacity)*Math.min(1,t*5),a.lampMat.color.set(r.active?16773590:10132136),a.lampMat.emissive.set(r.active?16752704:0),a.lamp.rotation.z=Math.sin(s*2+r.x)*.1}for(let r of this.firebars)r.piv.rotation.y=s*r.speed;for(let r of this.updrafts)r.tex.offset.y-=t*1.5,Math.random()<t*8&&this.game.particles.burst(new T(r.x+(Math.random()-.5)*r.r*1.5,r.y0+.5,r.z+(Math.random()-.5)*r.r*1.5),{count:1,color:16777215,speed:.1,gravity:14,life:1.8,size:.35,drag:0});this.seaTex&&(this.seaTex.offset.x+=t*.004,this.seaTex.offset.y+=t*.002),this.goal&&!this.goal.taken&&(this.goal.mesh.rotation.y=s*1.2,this.goal.mesh.position.y+=Math.sin(s*2)*.004,this.goal.mesh.userData.ring.rotation.z=s,this.goal.mesh.userData.ring.scale.setScalar(1+Math.sin(s*3)*.1));for(let r of this.anim)if(r.kind==="bob"){let a=Math.sin(s*r.sp+r.ph)*r.amp;r.obj.position.y=r.base+a,r.other.position.y=r.obase+a}else r.kind==="drift"?(r.obj.position.x+=r.sp*t,r.obj.position.x>r.x1&&(r.obj.position.x=r.x0)):r.kind==="ship"&&(r.obj.position.y=r.base+Math.sin(s*.6+r.ph)*.8,r.obj.userData.prop.rotation.x=s*12,r.obj.rotation.z=Math.sin(s*.5+r.ph)*.04);this.lighthouseObj&&this.lighthouseObj.userData.lamp.material.color.set(this.game.lighthouseLit?16774048:3879248),this.updateEnemies(t,e);for(let r=this.projectiles.length-1;r>=0;r--)this.projectiles[r].update(t)&&this.projectiles.splice(r,1);this.boss&&this.boss.update(t,e)}updateEnemies(t,e){let n=e.pos;for(let s of this.enemies){let r=s.mesh.userData;if(!s.alive){s.dying>0&&(s.dying+=t,s.mesh.scale.set(1+s.dying*3,Math.max(.05,1-s.dying*4),1+s.dying*3),s.dying>.3&&(s.mesh.visible=!1,s.dying=0));continue}s.t+=t;let a=n.x-s.pos.x,o=n.z-s.pos.z,c=Math.hypot(a,o),l=0,h=0;if(s.type==="flatterling"){let u=s.t*.8;s.pos.x=s.home.x+Math.cos(u)*s.range,s.pos.z=s.home.z+Math.sin(u)*s.range,s.pos.y=s.flyY+Math.sin(s.t*2.5)*.5,l=-Math.sin(u),h=Math.cos(u),r.wings[0].rotation.z=Math.sin(s.t*18)*.6,r.wings[1].rotation.z=-Math.sin(s.t*18)*.6}else{if(s.chase&&c<7&&Math.abs(n.y-s.pos.y)<1.8&&e.alive)l=a/c*s.speed*1.25,h=o/c*s.speed*1.25;else{let p=s.axis==="x"?s.pos.x-s.home.x:s.pos.z-s.home.z;p>s.range?s.dir=-1:p<-s.range&&(s.dir=1),s.axis==="x"?l=s.dir*s.speed:h=s.dir*s.speed,s.axis==="x"?h=(s.home.z-s.pos.z)*2:l=(s.home.x-s.pos.x)*2}s.pos.x+=l*t,s.pos.z+=h*t;let d=s.pos.x-s.home.x,f=s.pos.z-s.home.z,m=Math.hypot(d,f),x=s.range+.5;m>x&&(s.pos.x=s.home.x+d/m*x,s.pos.z=s.home.z+f/m*x);let g=Math.sin(s.t*(s.type==="dornling"?6:9));r.body.scale.set(1+g*.06,1-g*.08,1+g*.06),s.type==="dornling"&&(r.body.rotation.x+=Math.hypot(l,h)*t*2)}if(l||h){let d=Math.atan2(l,h)-s.mesh.rotation.y;for(;d>Math.PI;)d-=Math.PI*2;for(;d<-Math.PI;)d+=Math.PI*2;s.mesh.rotation.y+=d*Math.min(1,t*8)}}}checkpointHint(t){for(let e of this.hints){let n=t.pos.x-e.x,s=t.pos.z-e.z;if(n*n+s*s<e.r*e.r&&Math.abs(t.pos.y-e.y)<4)return e.text}return null}dispose(){this.group.traverse(t=>{t.geometry&&t.geometry.dispose()})}};var De=[{id:"meadow",name:"Bl\xFCtenwiesen",sub:"Welt 1",music:"meadow",seed:11,theme:{skyTop:4892917,skyHorizon:16769262,skyBottom:16765670,fog:16770032,fogNear:70,fogFar:280,hemiSky:14676735,hemiGround:8034906,hemiI:1.7,sunI:2.7,sunDir:[.4,.85,.35],sea:"cloudSea",seaY:-40},bouncerColor:16743096,build(i){i.spawn(0,0,3,0),i.cyl(0,0,0,8,{decor:"meadow"}),i.tree(-5,0,3,"blossom"),i.tree(5.5,0,2),i.tree(-4.5,0,-4.5),i.rock(5,0,-4),i.hint(2.6,0,-3,3.2,"Bewegen: WASD / Pfeiltasten \xB7 Springen: LEERTASTE \xB7 in der Luft nochmal dr\xFCcken = Doppelsprung! Kamera: Maus ziehen oder Q / E"),i.sparkLine([0,1,-3],[0,1,-7],3),i.box(0,1,-13,6,6,{decor:"meadow"}),i.sparkLine([0,2.2,-11],[0,2.2,-15],3),i.box(0,2.5,-21,5,5),i.sparkRing(0,3.6,-21,1.4,6),i.box(0,2.5,-34,14,14,{decor:"meadow"}),i.checkpoint(-5,2.5,-29),i.hint(5,2.5,-29,3,"Neblinge! Spring ihnen auf den Kopf \u2013 oder wirbel sie mit der Drehattacke weg (F / J / Linksklick)."),i.enemy("nebling",3,2.5,-33,{range:3}),i.enemy("nebling",-3,2.5,-37,{range:3}),i.crate(-5.2,2.5,-38.5,5),i.hint(-5.2,2.5,-36,2,"Kisten zerbrechen mit der Drehattacke oder mit einer Stampfattacke (in der Luft SHIFT / C).",!1),i.tree(5.5,2.5,-39.5,"blossom"),i.tree(-5.5,2.5,-31.5),i.bouncer(0,2.5,-39.3,23),i.hint(2.5,2.5,-38,2.2,"Spring auf die Sprungbl\xFCte, um hoch hinaus zu fliegen!",!1),i.box(0,8,-50,12,10,{decor:"meadow"}),i.tree(-4,8,-52),i.tree(4.5,8,-47.5,"blossom"),i.enemy("nebling",0,8,-51,{range:3.5}),i.sparkLine([-3,9,-46],[3,9,-46],4),i.heart(4,9.2,-53),i.mover({from:[0,8,-60],to:[0,8,-74],w:4,d:4,period:6}),i.hint(-3,8,-54,2.5,"Bewegliche Plattformen nehmen dich mit. Ein bisschen Mut!",!0),i.sparkLine([0,9.4,-61],[0,9.4,-73],5),i.cyl(0,8,-82,5,{decor:"meadow"}),i.checkpoint(-2,8,-79),i.enemy("nebling",1.5,8,-84,{range:2}),i.tree(-3,8,-85,"blossom"),i.cyl(6,9,-88,1.5,{mat:"stone",h:14,under:!1}),i.cyl(10,10.5,-93,1.5,{mat:"stone",h:14,under:!1}),i.cyl(8,12,-99,1.5,{mat:"stone",h:14,under:!1}),i.cyl(3,13,-103,1.8,{mat:"stone",h:14,under:!1}),i.spark(6,10,-88),i.spark(10,11.5,-93),i.spark(8,13,-99),i.spark(3,14,-103),i.cyl(0,13,-113,6,{decor:"meadow"}),i.tree(-4,13,-111,"blossom"),i.tree(4,13,-116),i.goalAt(0,13,-115),i.bouncer(3.8,13,-110,26),i.sparkRing(3.8,23,-110,2,8),i.distantIsland(-45,10,25,11,{trees:4}),i.lighthouse(-45,11.75,25,1.6),i.distantIsland(40,2,-30,8),i.distantIsland(-35,16,-70,9,{kind:"blossom"}),i.distantIsland(35,22,-120,12),i.distantIsland(-30,-2,-130,7),i.clouds(14,0,-60,220,-25,-10),i.clouds(8,0,-60,260,30,50)}},{id:"crystal",name:"Kristallschlucht",sub:"Welt 2",music:"crystal",seed:22,theme:{skyTop:1380149,skyHorizon:9068480,skyBottom:2760016,fog:5914506,fogNear:45,fogFar:210,hemiSky:12628223,hemiGround:3811930,hemiI:1.5,sunI:2,sunLight:16765168,sunColor:16756960,sunDir:[-.5,.6,.4],sea:"cloudSeaDusk",seaY:-40,stars:.6},crystalColor:9434111,crumbleMat:"stone",goalMat:"crystal",rockColor:5917306,firebarColor:16739029,bouncerColor:8319231,build(i){i.spawn(0,0,3,0),i.box(0,0,0,10,10,{mat:"crystal",decor:"crystal"}),i.crystal(-4,0,3.5,9434111,1.6),i.crystal(4,0,3.8,12950527,1.5),i.hint(3,0,-2.5,3,"Br\xF6ckelplatten zerfallen kurz nachdem du sie betrittst \u2013 nicht tr\xF6deln!");for(let t=0;t<4;t++)i.crumble(0,0,-9-t*4),i.spark(0,1.2,-9-t*4);i.box(0,0,-30,8,8,{mat:"crystal"}),i.checkpoint(-3,0,-27),i.firebar(0,.75,-30,3.6,1.3,4),i.hint(3,0,-27,2.2,"Ein Kristallrotor! Spring \xFCber die Glutkugeln.",!1),i.sparkRing(0,2.2,-30,2.5,6),i.box(0,2,-38,4,4,{mat:"crystal"}),i.box(-5,4,-42,4,4,{mat:"crystal"}),i.box(-5,6,-49,4,4,{mat:"crystal"}),i.spark(0,3,-38),i.spark(-5,5,-42),i.spark(-5,7,-49),i.mover({from:[-5,6,-55],to:[-5,6,-70],w:3.5,d:3.5,period:6,mat:"stone"}),i.sparkLine([-5,7.4,-57],[-5,7.4,-68],4),i.box(-5,6,-78,8,8,{mat:"crystal",decor:"crystal"}),i.checkpoint(-7.5,6,-75),i.enemy("dornling",-5,6,-79,{range:2.5,axis:"x"}),i.hint(-2.5,6,-75,2.2,"Dornlinge sind zu stachelig zum Draufspringen. Die Drehattacke hilft!",!1),i.heart(-8,7,-81),i.mover({from:[2.5,6,-78],to:[2.5,13,-78],w:3,d:3,period:7,mat:"stone"}),i.box(9,13,-78,5,8,{mat:"crystal"}),i.crate(10.2,13,-75.5,6),i.crystal(10.5,13,-80.5,12950527,1),i.crumble(9,13,-85.5),i.crumble(9,14,-89.5),i.crumble(9,15,-93.5),i.spark(9,14.2,-85.5),i.spark(9,15.2,-89.5),i.spark(9,16.2,-93.5),i.box(9,15,-103,10,10,{mat:"crystal",decor:"crystal"}),i.enemy("flatterling",9,15,-101,{range:2.5}),i.crystal(5.5,15,-106.5,9434111,2.2),i.crystal(12.5,15,-106.5,12950527,2),i.goalAt(9,15,-105);for(let t=0;t<14;t++){let e=(t%2?1:-1)*(25+t*7%20),n=10-t*9;i.cyl(e,-8+t*13%22,n,3+t%3,{mat:"crystal",h:30,under:!1,noCollide:!0}),i.crystal(e,-8+t*13%22,n,t%2?9434111:12950527,2.5)}i.distantIsland(-50,5,-60,10,{mat:"crystal",kind:"crystal",trees:5}),i.distantIsland(55,12,-110,12,{mat:"crystal",kind:"crystal",trees:6}),i.clouds(12,0,-50,220,-28,-15,9071296,.8)}},{id:"sky",name:"Wolkenwerft",sub:"Welt 3",music:"sky",seed:33,theme:{skyTop:3114214,skyHorizon:16773328,skyBottom:16777215,fog:15921407,fogNear:80,fogFar:340,hemiSky:15267071,hemiGround:11575424,hemiI:1.8,sunI:2.9,sunDir:[.6,.7,-.2],sea:"cloudSea",seaY:-30},bouncerColor:16757575,goalMat:"metal",firebarColor:16747068,build(i){i.spawn(0,0,4,0),i.box(0,0,0,8,12,{mat:"wood"}),i.airship(-14,2,4,.4),i.hint(2.5,0,-3,3,"Aufwinde tragen dich nach oben! Lauf hinein und steuere zur Plattform."),i.updraft(0,-10,2.5,-8,14.5,60),i.sparkLine([0,2,-10],[0,11,-10],5),i.box(0,10,-18,8,8,{mat:"wood"}),i.checkpoint(3,10,-15),i.enemy("flatterling",0,10,-19,{range:2}),i.crate(-2.8,10,-20.8,5),i.mover({from:[0,10,-25],to:[0,10,-40],w:3.5,d:3.5,period:6,mat:"metal"}),i.sparkLine([0,11.4,-26],[0,11.4,-39],5),i.cyl(0,10,-46,3,{mat:"metal"}),i.bouncer(0,10,-46,25),i.box(0,17,-56,6,6,{mat:"wood"}),i.checkpoint(-2,17,-54),i.heart(-2,18,-58),i.box(8.5,17,-56,11,2.2,{mat:"wood",h:.6,under:!1}),i.firebar(8.5,17.75,-56,3,1.6,4),i.sparkLine([4,18.2,-56],[12,18.2,-56],3),i.box(17,17,-56,6,6,{mat:"wood"}),i.enemy("nebling",17,17,-56,{range:2}),i.updraft(17,-63,2.5,5,33.5,60),i.sparkLine([17,20,-63],[17,29,-63],4),i.box(17,30,-71,8,8,{mat:"metal"}),i.checkpoint(14.5,30,-68),i.enemy("dornling",17,30,-72,{range:2.5});for(let t=0;t<3;t++)i.crumble(17,30,-79-t*4),i.spark(17,31.2,-79-t*4);i.enemy("flatterling",17,30,-83,{range:3}),i.box(17,30,-96,10,10,{mat:"wood"}),i.goalAt(17,30,-98),i.airship(30,20,-30,-.6),i.airship(-25,30,-70,.9),i.airship(40,40,-100,2.5),i.airship(-10,45,-120,.2),i.distantIsland(-40,0,-20,9),i.distantIsland(45,10,-70,8),i.clouds(16,0,-50,240,-20,0),i.clouds(10,0,-50,240,40,60)}},{id:"tower",name:"Nebelturm",sub:"Finale",music:"tower",seed:44,killY:-20,theme:{skyTop:459791,skyHorizon:4007264,skyBottom:1182242,fog:2759232,fogNear:35,fogFar:170,hemiSky:11575520,hemiGround:4864602,hemiI:2.2,sunI:2.3,sunLight:13154559,sunColor:13680895,sunDir:[.3,.8,.5],sea:"cloudSeaNight",seaY:-40,stars:1},goalMat:"brick",crystalColor:12950527,pineColor:2767434,rockColor:3811914,build(i){i.spawn(0,0,2,0),i.box(0,0,0,8,8,{mat:"tower"}),i.hint(2.5,0,-2,3,"Der Nebelturm. Ganz oben wartet Graf Nebelmaul \u2026"),i.box(0,2,-8,4,4,{mat:"brick"}),i.box(5,4,-12,4,4,{mat:"brick"}),i.box(5,6,-18,4,4,{mat:"brick"}),i.box(0,8,-22,4,4,{mat:"brick"}),i.spark(0,3,-8),i.spark(5,5,-12),i.spark(5,7,-18),i.spark(0,9,-22),i.box(0,8,-30,3,8,{mat:"brick",h:1,under:!1}),i.enemy("nebling",0,8,-30,{range:2.5,axis:"z"}),i.heart(0,9.2,-27),i.cyl(0,8,-48,14,{mat:"tower",h:4}),i.checkpoint(2.5,8,-36),i.hint(-2.5,8,-36,2.5,"Wenn der Graf auf den Boden kracht, ist er benommen \u2013 spring auf seinen Kristall! \xDCber die Schockwelle musst du springen.",!1);for(let t=0;t<8;t++){let e=t/8*Math.PI*2+.2;Math.abs(Math.cos(e)*12.5)<3&&Math.sin(e)>0||(i.cyl(Math.cos(e)*12.5,11,-48+Math.sin(e)*12.5,.8,{mat:"brick",h:3,under:!1}),i.crystal(Math.cos(e)*12.5,11,-48+Math.sin(e)*12.5,12950527,.8))}i.bossAt(0,8,-48,14),i.cyl(0,30,-75,9,{mat:"tower",h:60,under:!1,noCollide:!0}),i.cyl(0,42,-75,6,{mat:"brick",h:12,under:!1,noCollide:!0});for(let t=0;t<6;t++)i.crystal(Math.cos(t)*5,42,-75+Math.sin(t)*5,12950527,2);i.distantIsland(-40,-5,-30,8,{mat:"tower",kind:"pine",trees:4}),i.distantIsland(45,5,-60,10,{mat:"tower",kind:"pine",trees:5}),i.clouds(14,0,-40,220,-15,0,4008540,.85)}}];var $e=i=>document.querySelector(i),ma=class{constructor(t){this.audio=t,this.el={hud:$e("#hud"),hearts:$e("#hearts"),lives:$e("#lives"),sparks:$e("#sparks"),shards:$e("#shards"),hint:$e("#hint"),toast:$e("#toast"),banner:$e("#banner"),boss:$e("#bossbar"),screen:$e("#screen"),dialog:$e("#dialog"),fade:$e("#fade"),timer:$e("#timer")},this.menu=null,this.dlg=null,this.toastT=0,this.bannerT=0,this.el.dialog.addEventListener("click",()=>this.advanceDialog())}show(t){this.el.hud.classList.toggle("show",t)}setHearts(t,e=3){let n="";for(let s=0;s<e;s++)n+=`<span class="heart ${s<t?"full":""}"></span>`;this.el.hearts.dataset.n!==String(t)&&(this.el.hearts.innerHTML=n,this.el.hearts.dataset.n=t,this.el.hearts.classList.remove("pulse"),this.el.hearts.offsetWidth,this.el.hearts.classList.add("pulse"))}setLives(t){this.el.lives.innerHTML=`<span class="lumi-icon"></span>\xD7 ${t}`}setSparks(t,e,n){this.el.sparks.innerHTML=`<span class="spark-icon"></span>${t}<small>${e}/${n}</small>`,this.el.sparks.classList.remove("pop"),this.el.sparks.offsetWidth,this.el.sparks.classList.add("pop")}setShards(t){let e="";for(let n=0;n<3;n++)e+=`<span class="shard ${n<t?"full":""}"></span>`;this.el.shards.innerHTML=e}setTimer(t){let e=Math.floor(t/60),n=Math.floor(t%60);this.el.timer.textContent=`${e}:${String(n).padStart(2,"0")}`}hint(t){t!==this.curHint&&(this.curHint=t,t?(this.el.hint.textContent=t,this.el.hint.classList.add("show")):this.el.hint.classList.remove("show"))}toast(t,e=2.2){t&&(this.el.toast.textContent=t,this.el.toast.classList.add("show"),this.toastT=e)}banner(t,e,n=2.8){this.el.banner.innerHTML=`<h2>${e||""}</h2><h1>${t}</h1>`,this.el.banner.classList.add("show"),this.bannerT=n}showBoss(t,e){this.el.boss.classList.add("show"),this.el.boss.innerHTML=`<div class="name">${t}</div><div class="bar"><div class="fill" style="width:${Math.max(0,e)*100}%"></div></div>`}hideBoss(){this.el.boss.classList.remove("show")}fade(t){this.el.fade.classList.toggle("show",t)}update(t){if(this.toastT>0&&(this.toastT-=t,this.toastT<=0&&this.el.toast.classList.remove("show")),this.bannerT>0&&(this.bannerT-=t,this.bannerT<=0&&this.el.banner.classList.remove("show")),this.dlg&&!this.dlg.done){this.dlg.t+=t*45;let e=Math.min(this.dlg.full.length,Math.floor(this.dlg.t));e!==this.dlg.shown&&(this.dlg.shown=e,this.el.dialog.querySelector(".text").textContent=this.dlg.full.slice(0,e),e%3===0&&this.audio.play("text")),e>=this.dlg.full.length&&(this.dlg.done=!0)}}showMenu({title:t="",subtitle:e="",body:n="",items:s=[],cls:r=""}){let a=this.el.screen;a.className="show "+r,a.innerHTML=`<div class="panel">${t?`<div class="title">${t}</div>`:""}${e?`<div class="subtitle">${e}</div>`:""}${n?`<div class="body">${n}</div>`:""}<div class="items"></div></div>`;let o=a.querySelector(".items");this.menu={items:s,sel:s.findIndex(c=>!c.disabled),buttons:[]},s.forEach((c,l)=>{let h=document.createElement("button");h.textContent=c.label,h.disabled=!!c.disabled,h.addEventListener("click",()=>{this.audio.init(),this.audio.play("confirm"),c.action()}),h.addEventListener("mouseenter",()=>{c.disabled||(this.menu.sel=l,this.refreshSel())}),o.appendChild(h),this.menu.buttons.push(h)}),this.refreshSel()}refreshSel(){this.menu&&this.menu.buttons.forEach((t,e)=>t.classList.toggle("sel",e===this.menu.sel))}hideMenu(){this.el.screen.className="",this.el.screen.innerHTML="",this.menu=null}menuInput(t){if(!this.menu)return!1;let e=t.pressed,n=t.padPressed||{},s=this.menu.items.length,r=a=>{if(!s)return;let o=this.menu.sel;for(let c=0;c<s&&(o=(o+a+s)%s,!!this.menu.items[o].disabled);c++);this.menu.sel=o,this.refreshSel(),this.audio.play("select")};if((e.has("ArrowDown")||e.has("KeyS")||n.down)&&r(1),(e.has("ArrowUp")||e.has("KeyW")||n.up)&&r(-1),t.pad&&!this.padHeld&&Math.abs(t.pad.ly)>.6&&(r(Math.sign(t.pad.ly)),this.padHeld=!0),t.pad&&Math.abs(t.pad.ly)<.3&&(this.padHeld=!1),e.has("Enter")||e.has("Space")||n.confirm){let a=this.menu.items[this.menu.sel];return a&&!a.disabled&&(this.audio.init(),this.audio.play("confirm"),a.action()),!0}return!0}dialog(t,e){if(!t||!t.length){e&&e();return}this.dlgLines=t.slice(),this.dlgDone=e,this.el.dialog.classList.add("show"),this.nextLine()}nextLine(){let t=this.dlgLines.shift();if(!t){this.el.dialog.classList.remove("show"),this.dlg=null;let e=this.dlgDone;this.dlgDone=null,e&&e();return}this.el.dialog.querySelector(".who").textContent=t.who,this.el.dialog.dataset.who=t.who,this.el.dialog.querySelector(".text").textContent="",this.dlg={full:t.text,t:0,shown:0,done:!1}}advanceDialog(){if(this.dlg){if(!this.dlg.done){this.dlg.t=1e9;return}this.audio.play("select"),this.nextLine()}}dialogInput(t){return this.dlg?((t.confirmPressed()||t.pressed.has("KeyK")||t.touchPressed.has("jump"))&&this.advanceDialog(),t.pressed.has("Escape")&&(this.dlgLines=[],this.dlg.done=!0,this.advanceDialog()),!0):!1}get dialogOpen(){return!!this.dlg}};var mu=[{who:"Erz\xE4hlung",text:"Hoch \xFCber dem Wolkenmeer schweben die Inseln von Lumeria. Jeden Morgen schickte das Morgenlicht \u2013 ein Kristall auf dem alten Leuchtturm \u2013 seine Strahlen \xFCber das Land."},{who:"Erz\xE4hlung",text:"Doch in einer sternenlosen Nacht kroch Graf Nebelmaul aus der Tiefe. Mit einem Hieb zerbrach er das Morgenlicht in drei Splitter und verstreute sie \xFCber die Inseln. Den leuchtenden Kern behielt er f\xFCr sich."},{who:"Erz\xE4hlung",text:"Seitdem steigt der Nebel. Die Bl\xFCten schlie\xDFen sich, die Kristalle verstummen und die Luftschiffe bleiben am Boden."},{who:"Erz\xE4hlung",text:"Im erloschenen Leuchtturm glimmt aber noch ein allerletzter Funke \u2026 und aus ihm erwacht Lumi, ein kleiner Laternengeist."},{who:"Lumi",text:"Wo \u2026 wo bin ich? Und warum ist alles so grau? Ich sp\xFCre es \u2013 die Splitter rufen nach mir!"}],Gc=[{before:[{who:"Elva",text:"Lumi, du bist wach! Ich bin Elva. Dreihundert Jahre habe ich den Leuchtturm geh\xFCtet \u2013 jetzt bin ich nur noch eine Stimme im Wind."},{who:"Elva",text:"Der erste Splitter ist in die Bl\xFCtenwiesen gefallen. Folge dem Lichtstrahl, sammle Funken und h\xFCte dich vor den Neblingen!"}],after:[{who:"Lumi",text:"Der erste Splitter! Er ist ganz warm \u2013 wie ein kleiner Sonnenaufgang."},{who:"Elva",text:"Sieh nur, die Bl\xFCten \xF6ffnen sich wieder! Der zweite Splitter liegt in der Kristallschlucht. Dort ist es dunkel \u2026 aber du bist ja eine Laterne."}]},{before:[{who:"Elva",text:"Die Kristallschlucht. Fr\xFCher haben die Kristalle hier gesungen. Vorsicht: Der Nebel hat den Boden m\xFCrbe gemacht."}],after:[{who:"Lumi",text:"H\xF6rst du das? Die Kristalle summen wieder!"},{who:"Elva",text:"Der dritte Splitter wurde zur Wolkenwerft geweht, wo die Luftschiffe gebaut werden. Lass dich von den Aufwinden tragen!"}]},{before:[{who:"Elva",text:"Die Wolkenwerft! Die Schiffsbauer haben \xFCberall Windmaschinen aufgestellt. Wenn du hineinl\xE4ufst, tragen sie dich nach oben."}],after:[{who:"Elva",text:"Alle drei Splitter! Doch ohne seinen Kern wird das Morgenlicht nie wieder leuchten. Graf Nebelmaul h\xE4lt ihn im Nebelturm gefangen."},{who:"Lumi",text:"Dann gehe ich eben in den Nebelturm. Ich hab keine Angst. \u2026 Na gut, ein bisschen."}]},{before:[{who:"Graf Nebelmaul",text:"Wer wagt es, mit so einer winzigen Funzel meinen Turm zu betreten? Der Nebel geh\xF6rt mir! MIR ALLEIN!"},{who:"Lumi",text:"Das Morgenlicht geh\xF6rt allen. Und ich hole es mir zur\xFCck!"}],after:[]}],gu=[{who:"Lumi",text:"Der Kern des Morgenlichts! Jetzt ist es wieder ganz!"},{who:"Erz\xE4hlung",text:"Lumi brachte den Kern und die drei Splitter zur\xFCck zum Leuchtturm. Als die Sonne aufging, flammte das Morgenlicht heller als je zuvor."},{who:"Erz\xE4hlung",text:"Der Nebel sank zur\xFCck in die Tiefe \u2013 und mit ihm ein ziemlich besch\xE4mter Graf Nebelmaul, der seitdem nur noch als harmloser Morgendunst \xFCber die Wiesen zieht."},{who:"Elva",text:"Danke, Lumi. Ab heute leuchtest du \xFCber Lumeria. Und wer wei\xDF \u2013 vielleicht wartet hinter dem Wolkenmeer schon das n\xE4chste Abenteuer \u2026"}];var xn=1/120,xu="lumi_save_v1",wx=`
<table class="controls">
<tr><th></th><th>Tastatur / Maus</th><th>Gamepad</th></tr>
<tr><td>Laufen</td><td>WASD / Pfeiltasten</td><td>Linker Stick</td></tr>
<tr><td>Springen / Doppelsprung</td><td>Leertaste (2\xD7)</td><td>A</td></tr>
<tr><td>Drehattacke</td><td>F / J / Linksklick</td><td>X / B</td></tr>
<tr><td>Stampfen (in der Luft)</td><td>Shift / C / Rechtsklick</td><td>LB / RB / Trigger</td></tr>
<tr><td>Kamera</td><td>Maus (Klick ins Bild) / Q, E, R, V</td><td>Rechter Stick</td></tr>
<tr><td>Pause</td><td>Esc / P</td><td>Start</td></tr>
<tr><td>Ton an/aus</td><td>M</td><td></td></tr>
</table>
<p class="tip">Auf dem Handy: Stick links, Kn\xF6pfe rechts, Kamera durch Wischen.</p>`,Wc=class{constructor(){let t=document.getElementById("game");this.canvas=t;let e=this.renderer=new Lr({canvas:t,antialias:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio,matchMedia("(pointer: coarse)").matches?1.5:2)),e.setSize(window.innerWidth,window.innerHeight),e.shadowMap.enabled=!0,e.shadowMap.type=Sc,this.scene=new Nr,this.camera=new Ce(60,window.innerWidth/window.innerHeight,.1,2e3),this.T=Gh(),Wh(this.T),this.audio=new ra,this.input=new aa(t),this.hud=new ma(this.audio),this.particles=new oa(this.scene,this.T),this.player=new da(this),this.player.attach(this.scene),this.raycaster=new Kr,this.camYaw=0,this.camPitch=.3,this.camDist=9.5,this.camTarget=new T,this.camManualT=0,this.shakeT=0,this.acc=0,this.save=this.loadSave(),this.lives=3,this.hearts=3,this.sparks=0,this.shards=0,this.levelGot=0,this.levelTime=0,this.timer=0,this.lighthouseLit=!1,this.state="title",window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)});let n=()=>this.audio.init();window.addEventListener("pointerdown",n),window.addEventListener("keydown",n),window.addEventListener("touchstart",n),t.addEventListener("click",()=>{this.state==="play"&&this.input.requestLock()});let s=!1;document.addEventListener("pointerlockchange",()=>{let a=document.pointerLockElement===t;s&&!a&&this.state==="play"&&this.pause(),s=a});let r=new URLSearchParams(location.search);if(r.has("level")){let a=Math.max(0,Math.min(De.length-1,parseInt(r.get("level"),10)||0));this.startLevel(a,!0)}else this.toTitle();this.last=performance.now(),this.frame=this.frame.bind(this),requestAnimationFrame(this.frame)}loadSave(){try{return JSON.parse(localStorage.getItem(xu))||{unlocked:0,best:{}}}catch{return{unlocked:0,best:{}}}}writeSave(){try{localStorage.setItem(xu,JSON.stringify(this.save))}catch{}}loadLevel(t){this.level&&(this.scene.remove(this.level.group),this.level.dispose()),this.particles.clear(),this.levelIndex=t,this.level=new pa(De[t],this),this.scene.add(this.level.group),this.scene.fog=this.level.fog;let e=this.level.spawnPoint;this.checkpoint={...e},this.player.reset(e.x,e.y,e.z,Math.PI),this.camYaw=e.yaw,this.camPitch=.3,this.camTarget.set(e.x,e.y+1.3,e.z),this.hud.hideBoss(),this.hud.hint(null)}toTitle(){this.state="title",this.input.releaseLock(),this.lighthouseLit=!1,this.loadLevel(0),this.hud.show(!1),this.setTouch(!1),this.audio.playMusic("title");let t=this.save.unlocked>0;this.hud.showMenu({cls:"title-screen",title:'<span class="logo">LUMI</span>',subtitle:"und das Morgenlicht",items:[{label:"Neues Abenteuer",action:()=>this.newGame()},{label:t?`Fortsetzen \u2013 ${De[Math.min(this.save.unlocked,De.length-1)].name}`:"Fortsetzen",disabled:!t,action:()=>this.continueGame()},{label:"Welt w\xE4hlen",disabled:!t,action:()=>this.levelSelect()},{label:"Steuerung",action:()=>this.showControls(()=>this.toTitle())},{label:this.audio.muted?"Ton: Aus":"Ton: An",action:()=>{this.audio.toggleMute(),this.toTitle()}}]})}showControls(t){this.hud.showMenu({title:"Steuerung",body:wx,items:[{label:"Zur\xFCck",action:t}]})}levelSelect(){let t=De.map((e,n)=>({label:`${e.sub}: ${e.name}${this.save.best[n]!==void 0?"  \u2726 "+this.save.best[n]:""}`,disabled:n>this.save.unlocked,action:()=>{this.lives=3,this.sparks=0,this.shards=Math.min(3,n),this.hud.hideMenu(),this.startLevel(n)}}));t.push({label:"Zur\xFCck",action:()=>this.toTitle()}),this.hud.showMenu({title:"Welt w\xE4hlen",items:t})}newGame(){this.hud.hideMenu(),this.lives=3,this.sparks=0,this.shards=0,this.state="story",this.audio.playMusic("title"),this.hud.dialog(mu,()=>this.startLevel(0))}continueGame(){this.hud.hideMenu(),this.lives=3,this.sparks=0;let t=Math.min(this.save.unlocked,De.length-1);this.shards=Math.min(3,t),this.startLevel(t)}startLevel(t,e=!1){this.loadLevel(t),this.hearts=3,this.levelGot=0,this.levelTime=0,this.hud.show(!0),this.refreshHud(),this.state="story",this.audio.playMusic(De[t].music);let n=()=>{this.state="play",this.setTouch(!0),this.hud.banner(De[t].name,De[t].sub)};e?n():this.hud.dialog(Gc[t].before,n)}refreshHud(){this.hud.setHearts(this.hearts),this.hud.setLives(this.lives),this.hud.setSparks(this.sparks,this.levelGot,this.level.sparkTotal),this.hud.setShards(this.shards)}setTouch(t){document.getElementById("touch").classList.toggle("active",t)}pause(){this.state==="play"&&(this.state="paused",this.setTouch(!1),this.input.releaseLock(),this.hud.showMenu({title:"Pause",subtitle:`${De[this.levelIndex].sub}: ${De[this.levelIndex].name}`,items:[{label:"Weiterspielen",action:()=>this.resume()},{label:"Welt neu starten",action:()=>{this.hud.hideMenu(),this.startLevel(this.levelIndex,!0)}},{label:"Steuerung",action:()=>this.showControls(()=>{this.state="play",this.pause()})},{label:this.audio.muted?"Ton: Aus":"Ton: An",action:()=>{this.audio.toggleMute(),this.state="play",this.pause()}},{label:"Hauptmen\xFC",action:()=>{this.hud.hideMenu(),this.toTitle()}}]}))}resume(){this.hud.hideMenu(),this.state="play",this.setTouch(!0),this.acc=0}addSparks(t,e,n=!1){for(this.sparks+=t,n||(this.levelGot+=t),this.audio.play("spark"),e&&this.particles.burst(e,{count:6,color:[16769126,16777215],speed:3,size:.5,tex:"sparkle",additive:!0,life:.5});this.sparks>=100;)this.sparks-=100,this.lives++,this.audio.play("oneup"),this.hud.toast("100 Funken \u2013 ein Extraleben!");this.refreshHud()}addHeart(t){this.hearts=Math.min(3,this.hearts+1),this.audio.play("heart"),this.particles.burst(t,{count:8,color:16739722,speed:3,size:.6,tex:"glow",additive:!0}),this.refreshHud()}setCheckpoint(t){this.checkpoint={x:t.x,y:t.y,z:t.z,yaw:this.camYaw},this.audio.play("checkpoint"),this.hud.toast("Laterne entz\xFCndet \u2013 Checkpoint!"),this.particles.burst(new T(t.x+.6,t.y+2,t.z),{count:12,color:16760944,speed:3,size:.6,tex:"glow",additive:!0})}onPlayerHurt(){this.hearts--,this.audio.play("hurt"),this.shake(.3),this.refreshHud(),this.hearts<=0&&this.playerDied()}onPlayerFell(){if(this.player.alive=!1,this.hearts--,this.refreshHud(),this.audio.play("hurt"),this.hearts<=0){this.playerDied();return}this.state="respawn",this.timer=.6,this.hud.fade(!0)}playerDied(){this.player.alive=!1,this.audio.play("die"),this.particles.burst(new T(this.player.pos.x,this.player.pos.y+.6,this.player.pos.z),{count:20,color:[16760944,16777215],speed:5,size:.7,tex:"glow",additive:!0}),this.lives--,this.refreshHud(),this.state="dying",this.timer=1.6}respawn(){let t=this.checkpoint;this.camYaw=t.yaw,this.player.reset(t.x,t.y,t.z+.01,this.camYaw+Math.PI),this.player.invuln=1.2,this.camTarget.set(t.x,t.y+1.3,t.z)}gameOver(){this.state="gameover",this.setTouch(!1),this.input.releaseLock(),this.audio.stopMusic(),this.hud.showMenu({title:"Das Licht ist erloschen \u2026",subtitle:"Aber ein Funke bleibt immer.",items:[{label:"Nochmal versuchen",action:()=>{this.hud.hideMenu(),this.lives=3,this.sparks=0,this.startLevel(this.levelIndex,!0)}},{label:"Hauptmen\xFC",action:()=>{this.hud.hideMenu(),this.toTitle()}}]})}collectShard(t){this.state="clear",this.timer=0,this.setTouch(!1),this.input.releaseLock(),this.audio.stopMusic(),this.audio.play("shard"),this.shake(.2),this.particles.burst(t.pos,{count:30,color:[10482943,16777215,16769126],speed:9,size:.8,tex:"sparkle",additive:!0,life:1}),t.mesh.visible=!1,t.beam.visible=!1,this.hud.hint(null);let e=this.levelIndex===De.length-1;e||(this.shards=Math.min(3,this.shards+1)),this.refreshHud(),this.hud.banner(e?"Der Kern des Morgenlichts!":"Splitter gefunden!",e?"":`${this.shards} / 3`,2.6),this.save.unlocked=Math.max(this.save.unlocked,Math.min(De.length-1,this.levelIndex+1)),this.save.best[this.levelIndex]=Math.max(this.save.best[this.levelIndex]||0,this.levelGot),this.writeSave()}showClear(){let t=this.levelIndex,e=t===De.length-1;this.state="clearmenu",this.audio.play("clear");let n=Math.floor(this.levelTime/60),s=Math.floor(this.levelTime%60),r=`<div class="stats"><div><span class="spark-icon"></span> Funken: <b>${this.levelGot} / ${this.level.sparkTotal}</b></div><div>\u23F1 Zeit: <b>${n}:${String(s).padStart(2,"0")}</b></div></div>`;this.hud.showMenu({title:e?"Graf Nebelmaul besiegt!":`${De[t].name} geschafft!`,body:r,items:[{label:"Weiter",action:()=>{this.hud.hideMenu(),this.state="story",this.hud.dialog(Gc[t].after,()=>{e?this.ending():this.startLevel(t+1)})}}]})}bossDefeated(){this.audio.play("shard"),this.hud.toast("Der Nebel lichtet sich! Hol dir den Kern!",3),this.audio.playMusic("ending")}ending(){this.state="ending",this.hud.show(!1),this.lighthouseLit=!0,this.loadLevel(0),this.player.mesh.visible=!1,this.audio.playMusic("ending"),this.endT=0,this.hud.dialog(gu,()=>{this.hud.showMenu({cls:"title-screen",title:'<span class="logo">ENDE</span>',subtitle:"Danke f\xFCrs Spielen!",body:'<p>Lumeria leuchtet wieder.</p><p class="credits">Idee, Code, Grafik, Musik & Story: komplett selbstgemacht \u2013 alles wird beim Start prozedural erzeugt.</p>',items:[{label:"Zum Hauptmen\xFC",action:()=>{this.hud.hideMenu(),this.toTitle()}}]})})}debugHop(t,e,n={}){let s=this.player,r=this.level;for(let o of r.enemies)o.alive=!1,o.mesh.visible=!1;s.reset(t[0],t[1],t[2],0),s.ground=null,s.grounded=!1;let a=!1;for(let o=0;o<960;o++){n.via&&s.pos.y>=n.viaY&&(n={...n,via:null});let c=!!n.via,l=c?n.via[0]:e[0],h=c?n.via[1]:e[2],u=l-s.pos.x,d=h-s.pos.z,f=Math.atan2(-u,-d),m=!c&&Math.hypot(u,d)<.5,x={move:m||c&&Math.hypot(u,d)<.3?{x:0,y:0}:{x:0,y:-1},jumpHeld:!0,jumpPressed:o===2&&!!n.jump,spinPressed:!1,poundPressed:!1};if(n.double&&!a&&o>6&&!s.grounded&&s.vel.y<(n.djAt??.5)&&(x.jumpPressed=!0,a=!0),r.stepWorld(xn),s.pos.y<r.killY+2)return{fell:!0,at:s.pos.toArray().map(g=>+g.toFixed(2))};if(s.step(xn,x,r,f),o>12&&s.grounded&&s.ground&&!s.ground.bounce&&Math.abs(s.vel.y)<1e-6&&Math.hypot(s.vel.x,s.vel.z)<.01+(m?9:0)&&m)return{landed:+s.pos.y.toFixed(2),ok:Math.abs(s.pos.y-e[1])<.05,at:s.pos.toArray().map(g=>+g.toFixed(2))}}return{timeout:!0,at:s.pos.toArray().map(o=>+o.toFixed(2)),y:s.pos.y}}banner(t,e){this.hud.banner(t,e)}shake(t){this.shakeT=Math.max(this.shakeT,t)}frame(t){requestAnimationFrame(this.frame);let e=Math.min(.1,(t-this.last)/1e3);this.last=t;let n=this.input;if(n.pollPad(),n.pressed.has("KeyM")){let r=this.audio.toggleMute();this.hud.toast(r?"Ton aus":"Ton an",1)}this.hud.dialogOpen?this.hud.dialogInput(n):this.hud.menu&&this.hud.menuInput(n);let s=this.level;switch(this.state){case"play":if(n.pausePressed()){this.pause();break}this.simulate(e),this.hud.hint(s.checkpointHint(this.player)),this.hud.setTimer(this.levelTime);break;case"paused":n.pausePressed()&&this.resume();break;case"respawn":this.timer-=e,this.stepWorldOnly(e),this.timer<=.3&&!this.player.alive&&this.respawn(),this.timer<=0&&(this.hud.fade(!1),this.state="play");break;case"dying":this.timer-=e,this.stepWorldOnly(e),this.timer<=.4&&this.hud.fade(!0),this.timer<=0&&(this.hud.fade(!1),this.lives<=0?this.gameOver():(this.hearts=3,this.refreshHud(),this.respawn(),this.state="play"));break;case"clear":this.timer+=e,this.stepWorldOnly(e),this.player.facing+=e*3,this.timer>3&&this.showClear();break;default:this.stepWorldOnly(e)}this.state!=="paused"&&(s.update(e,this.player,this.camera),this.particles.update(e)),this.player.updateVisual(e,s),this.updateCamera(e),s.updateSun(this.camTarget),this.hud.update(e),this.renderer.render(this.scene,this.camera),n.endFrame()}stepWorldOnly(t){for(this.acc+=t;this.acc>=xn;)this.level.stepWorld(xn),this.acc-=xn}simulate(t){let e=this.input,n={move:e.move(),jumpHeld:e.jumpHeld(),jumpPressed:e.jumpPressed(),spinPressed:e.spinPressed(),poundPressed:e.poundPressed()};for(this.acc+=t,this.levelTime+=t,this.camManualT<=0&&Math.abs(n.move.x)>.3&&this.player.grounded&&(this.camYaw-=n.move.x*t*.7);this.acc>=xn&&(this.level.stepWorld(xn),this.player.step(xn,n,this.level,this.camYaw),this.level.interact(xn,this.player),n.jumpPressed=n.spinPressed=n.poundPressed=!1,this.acc-=xn,this.state==="play"););}updateCamera(t){let e=this.camera,n=this.player.pos,s=this.input.camera();if(this.state==="title"||this.state==="ending"||this.state==="story"&&!this.hud.el.hud.classList.contains("show")){let x=performance.now()/1e3,g=this.level.spawnPoint,p=16,b=5;this.state==="ending"&&this.level.lighthouseObj&&(g=this.level.lighthouseObj.position,p=34,b=10);let y=x*.08;e.position.set(g.x+Math.sin(y)*p,g.y+b+Math.sin(x*.3)*1,g.z+Math.cos(y)*p),e.lookAt(g.x,g.y+(this.state==="ending"?12:2),g.z);return}(this.state==="play"||this.state==="respawn"||this.state==="dying"||this.state==="clear")&&(s.dx||s.dy||s.kx||s.ky?this.camManualT=1.2:this.camManualT>0&&(this.camManualT-=t),this.camYaw-=s.dx+s.kx*t*2.6,this.camPitch=Fs.clamp(this.camPitch+s.dy+s.ky*t*1.5,-.15,1.15)),this.state==="clear"&&(this.camYaw+=t*.5);let r=this.level.boss&&this.level.boss.active,a=new T(n.x,n.y+(r?2.8:1.3),n.z),o=1-Math.exp(-t*10),c=1-Math.exp(-t*(this.player.grounded?6:3));this.camTarget.x+=(a.x-this.camTarget.x)*o,this.camTarget.z+=(a.z-this.camTarget.z)*o,this.camTarget.y+=(a.y-this.camTarget.y)*c,a.y<this.camTarget.y-3&&(this.camTarget.y=a.y+3);let l=this.state==="clear"?7:r?14:this.camDist;r&&this.camManualT<=0&&(this.camPitch+=(.22-this.camPitch)*Math.min(1,t*1.5));let h=Math.cos(this.camPitch),u=Math.sin(this.camPitch),d=new T(Math.sin(this.camYaw)*h,u,Math.cos(this.camYaw)*h),f=l;this.raycaster.set(this.camTarget,d),this.raycaster.far=l;let m=this.raycaster.intersectObjects(this.level.cameraMeshes,!1);if(m.length&&(f=Math.max(1.5,m[0].distance-.4)),e.position.copy(this.camTarget).addScaledVector(d,f),this.shakeT>0){this.shakeT-=t;let x=this.shakeT*.6;e.position.x+=(Math.random()-.5)*x,e.position.y+=(Math.random()-.5)*x,e.position.z+=(Math.random()-.5)*x}e.lookAt(this.camTarget)}};window.addEventListener("DOMContentLoaded",()=>{try{window.__lumi=new Wc}catch(i){console.error(i),document.getElementById("error").textContent="Fehler beim Starten: "+i.message+" \u2013 Dein Browser braucht WebGL.",document.getElementById("error").style.display="block"}});})();
