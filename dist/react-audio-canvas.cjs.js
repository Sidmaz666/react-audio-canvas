"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const y=require("react");var $e={exports:{}},Ce={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xe;function _r(){if(Xe)return Ce;Xe=1;var a=y,i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function v(t,u,h){var d,E={},g=null,S=null;h!==void 0&&(g=""+h),u.key!==void 0&&(g=""+u.key),u.ref!==void 0&&(S=u.ref);for(d in u)o.call(u,d)&&!l.hasOwnProperty(d)&&(E[d]=u[d]);if(t&&t.defaultProps)for(d in u=t.defaultProps,u)E[d]===void 0&&(E[d]=u[d]);return{$$typeof:i,type:t,key:g,ref:S,props:E,_owner:c.current}}return Ce.Fragment=s,Ce.jsx=v,Ce.jsxs=v,Ce}var je={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ze;function br(){return ze||(ze=1,process.env.NODE_ENV!=="production"&&function(){var a=y,i=Symbol.for("react.element"),s=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),t=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),S=Symbol.for("react.offscreen"),A=Symbol.iterator,L="@@iterator";function te(e){if(e===null||typeof e!="object")return null;var r=A&&e[A]||e[L];return typeof r=="function"?r:null}var P=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function b(e){{for(var r=arguments.length,n=new Array(r>1?r-1:0),p=1;p<r;p++)n[p-1]=arguments[p];I("error",e,n)}}function I(e,r,n){{var p=P.ReactDebugCurrentFrame,x=p.getStackAddendum();x!==""&&(r+="%s",n=n.concat([x]));var T=n.map(function(_){return String(_)});T.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,T)}}var Z=!1,G=!1,Q=!1,ne=!1,ae=!1,H;H=Symbol.for("react.module.reference");function ce(e){return!!(typeof e=="string"||typeof e=="function"||e===o||e===l||ae||e===c||e===h||e===d||ne||e===S||Z||G||Q||typeof e=="object"&&e!==null&&(e.$$typeof===g||e.$$typeof===E||e.$$typeof===v||e.$$typeof===t||e.$$typeof===u||e.$$typeof===H||e.getModuleId!==void 0))}function ie(e,r,n){var p=e.displayName;if(p)return p;var x=r.displayName||r.name||"";return x!==""?n+"("+x+")":n}function J(e){return e.displayName||"Context"}function C(e){if(e==null)return null;if(typeof e.tag=="number"&&b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case o:return"Fragment";case s:return"Portal";case l:return"Profiler";case c:return"StrictMode";case h:return"Suspense";case d:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case t:var r=e;return J(r)+".Consumer";case v:var n=e;return J(n._context)+".Provider";case u:return ie(e,e.render,"ForwardRef");case E:var p=e.displayName||null;return p!==null?p:C(e.type)||"Memo";case g:{var x=e,T=x._payload,_=x._init;try{return C(_(T))}catch{return null}}}return null}var D=Object.assign,q=0,B,Y,V,K,oe,ee,j;function $(){}$.__reactDisabledLog=!0;function F(){{if(q===0){B=console.log,Y=console.info,V=console.warn,K=console.error,oe=console.group,ee=console.groupCollapsed,j=console.groupEnd;var e={configurable:!0,enumerable:!0,value:$,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}q++}}function N(){{if(q--,q===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:D({},e,{value:B}),info:D({},e,{value:Y}),warn:D({},e,{value:V}),error:D({},e,{value:K}),group:D({},e,{value:oe}),groupCollapsed:D({},e,{value:ee}),groupEnd:D({},e,{value:j})})}q<0&&b("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var X=P.ReactCurrentDispatcher,U;function m(e,r,n){{if(U===void 0)try{throw Error()}catch(x){var p=x.stack.trim().match(/\n( *(at )?)/);U=p&&p[1]||""}return`
`+U+e}}var w=!1,k;{var W=typeof WeakMap=="function"?WeakMap:Map;k=new W}function ue(e,r){if(!e||w)return"";{var n=k.get(e);if(n!==void 0)return n}var p;w=!0;var x=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var T;T=X.current,X.current=null,F();try{if(r){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(re){p=re}Reflect.construct(e,[],_)}else{try{_.call()}catch(re){p=re}e.call(_.prototype)}}else{try{throw Error()}catch(re){p=re}e()}}catch(re){if(re&&p&&typeof re.stack=="string"){for(var R=re.stack.split(`
`),z=p.stack.split(`
`),O=R.length-1,M=z.length-1;O>=1&&M>=0&&R[O]!==z[M];)M--;for(;O>=1&&M>=0;O--,M--)if(R[O]!==z[M]){if(O!==1||M!==1)do if(O--,M--,M<0||R[O]!==z[M]){var se=`
`+R[O].replace(" at new "," at ");return e.displayName&&se.includes("<anonymous>")&&(se=se.replace("<anonymous>",e.displayName)),typeof e=="function"&&k.set(e,se),se}while(O>=1&&M>=0);break}}}finally{w=!1,X.current=T,N(),Error.prepareStackTrace=x}var Re=e?e.displayName||e.name:"",me=Re?m(Re):"";return typeof e=="function"&&k.set(e,me),me}function be(e,r,n){return ue(e,!1)}function xe(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function le(e,r,n){if(e==null)return"";if(typeof e=="function")return ue(e,xe(e));if(typeof e=="string")return m(e);switch(e){case h:return m("Suspense");case d:return m("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case u:return be(e.render);case E:return le(e.type,r,n);case g:{var p=e,x=p._payload,T=p._init;try{return le(T(x),r,n)}catch{}}}return""}var fe=Object.prototype.hasOwnProperty,de={},pe=P.ReactDebugCurrentFrame;function ve(e){if(e){var r=e._owner,n=le(e.type,e._source,r?r.type:null);pe.setExtraStackFrame(n)}else pe.setExtraStackFrame(null)}function ye(e,r,n,p,x){{var T=Function.call.bind(fe);for(var _ in e)if(T(e,_)){var R=void 0;try{if(typeof e[_]!="function"){var z=Error((p||"React class")+": "+n+" type `"+_+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[_]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw z.name="Invariant Violation",z}R=e[_](r,_,p,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(O){R=O}R&&!(R instanceof Error)&&(ve(x),b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",p||"React class",n,_,typeof R),ve(null)),R instanceof Error&&!(R.message in de)&&(de[R.message]=!0,ve(x),b("Failed %s type: %s",n,R.message),ve(null))}}}var ge=Array.isArray;function he(e){return ge(e)}function we(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,n=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return n}}function ke(e){try{return Se(e),!1}catch{return!0}}function Se(e){return""+e}function Le(e){if(ke(e))return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",we(e)),Se(e)}var Te=P.ReactCurrentOwner,nr={key:!0,ref:!0,__self:!0,__source:!0},Ue,qe,Oe;Oe={};function ar(e){if(fe.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function ir(e){if(fe.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function or(e,r){if(typeof e.ref=="string"&&Te.current&&r&&Te.current.stateNode!==r){var n=C(Te.current.type);Oe[n]||(b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',C(Te.current.type),e.ref),Oe[n]=!0)}}function sr(e,r){{var n=function(){Ue||(Ue=!0,b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}}function ur(e,r){{var n=function(){qe||(qe=!0,b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};n.isReactWarning=!0,Object.defineProperty(e,"ref",{get:n,configurable:!0})}}var lr=function(e,r,n,p,x,T,_){var R={$$typeof:i,type:e,key:r,ref:n,props:_,_owner:T};return R._store={},Object.defineProperty(R._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(R,"_self",{configurable:!1,enumerable:!1,writable:!1,value:p}),Object.defineProperty(R,"_source",{configurable:!1,enumerable:!1,writable:!1,value:x}),Object.freeze&&(Object.freeze(R.props),Object.freeze(R)),R};function cr(e,r,n,p,x){{var T,_={},R=null,z=null;n!==void 0&&(Le(n),R=""+n),ir(r)&&(Le(r.key),R=""+r.key),ar(r)&&(z=r.ref,or(r,x));for(T in r)fe.call(r,T)&&!nr.hasOwnProperty(T)&&(_[T]=r[T]);if(e&&e.defaultProps){var O=e.defaultProps;for(T in O)_[T]===void 0&&(_[T]=O[T])}if(R||z){var M=typeof e=="function"?e.displayName||e.name||"Unknown":e;R&&sr(_,M),z&&ur(_,M)}return lr(e,R,z,x,p,Te.current,_)}}var De=P.ReactCurrentOwner,Be=P.ReactDebugCurrentFrame;function Ee(e){if(e){var r=e._owner,n=le(e.type,e._source,r?r.type:null);Be.setExtraStackFrame(n)}else Be.setExtraStackFrame(null)}var Fe;Fe=!1;function Me(e){return typeof e=="object"&&e!==null&&e.$$typeof===i}function Ye(){{if(De.current){var e=C(De.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function fr(e){return""}var Ve={};function dr(e){{var r=Ye();if(!r){var n=typeof e=="string"?e:e.displayName||e.name;n&&(r=`

Check the top-level render call using <`+n+">.")}return r}}function We(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var n=dr(r);if(Ve[n])return;Ve[n]=!0;var p="";e&&e._owner&&e._owner!==De.current&&(p=" It was passed a child from "+C(e._owner.type)+"."),Ee(e),b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',n,p),Ee(null)}}function Ge(e,r){{if(typeof e!="object")return;if(he(e))for(var n=0;n<e.length;n++){var p=e[n];Me(p)&&We(p,r)}else if(Me(e))e._store&&(e._store.validated=!0);else if(e){var x=te(e);if(typeof x=="function"&&x!==e.entries)for(var T=x.call(e),_;!(_=T.next()).done;)Me(_.value)&&We(_.value,r)}}}function vr(e){{var r=e.type;if(r==null||typeof r=="string")return;var n;if(typeof r=="function")n=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===u||r.$$typeof===E))n=r.propTypes;else return;if(n){var p=C(r);ye(n,e.props,"prop",p,e)}else if(r.PropTypes!==void 0&&!Fe){Fe=!0;var x=C(r);b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",x||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function pr(e){{for(var r=Object.keys(e.props),n=0;n<r.length;n++){var p=r[n];if(p!=="children"&&p!=="key"){Ee(e),b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",p),Ee(null);break}}e.ref!==null&&(Ee(e),b("Invalid attribute `ref` supplied to `React.Fragment`."),Ee(null))}}var Je={};function Ke(e,r,n,p,x,T){{var _=ce(e);if(!_){var R="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(R+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var z=fr();z?R+=z:R+=Ye();var O;e===null?O="null":he(e)?O="array":e!==void 0&&e.$$typeof===i?(O="<"+(C(e.type)||"Unknown")+" />",R=" Did you accidentally export a JSX literal instead of a component?"):O=typeof e,b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",O,R)}var M=cr(e,r,n,x,T);if(M==null)return M;if(_){var se=r.children;if(se!==void 0)if(p)if(he(se)){for(var Re=0;Re<se.length;Re++)Ge(se[Re],e);Object.freeze&&Object.freeze(se)}else b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Ge(se,e)}if(fe.call(r,"key")){var me=C(e),re=Object.keys(r).filter(function(Rr){return Rr!=="key"}),Ie=re.length>0?"{key: someKey, "+re.join(": ..., ")+": ...}":"{key: someKey}";if(!Je[me+Ie]){var Er=re.length>0?"{"+re.join(": ..., ")+": ...}":"{}";b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Ie,me,Er,me),Je[me+Ie]=!0}}return e===o?pr(M):vr(M),M}}function hr(e,r,n){return Ke(e,r,n,!0)}function yr(e,r,n){return Ke(e,r,n,!1)}var mr=yr,gr=hr;je.Fragment=o,je.jsx=mr,je.jsxs=gr}()),je}process.env.NODE_ENV==="production"?$e.exports=_r():$e.exports=br();var f=$e.exports;function xr(a){const i=12*(Math.log(a/440)/Math.log(2));return Math.round(i)+69}function wr(a){return 440*Math.pow(2,(a-69)/12)}function Tr(a,i){return Math.floor(1200*Math.log(a/wr(i))/Math.log(2))}function Qe(a,i=44100){const s=a.length,o=.3,c=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];let l=new Float32Array(s),v=[];for(let t=0;t<s;t++){let u=0;for(let h=0;h<s-t;h++)u+=(a[h]-128)*(a[h+t]-128);l[t]=u}for(let t=1;t<s-1;t++)if(l[t]>o&&l[t]>l[t-1]&&l[t]>l[t+1]){let u=t,h=l[t]/Math.max(...l);const d=i/u,E=xr(d),g=c[E%12],S=Math.floor((E-12)/12),A=Tr(d,E);v.push({frequency:d.toFixed(2),pitch:`${g}${S}`,octave:S,confidence:h.toFixed(2),note:g,cents:A})}return v.length>0?v:null}async function Ze(a){if(a instanceof File||a instanceof Blob)return new Promise((i,s)=>{const o=new FileReader;o.onloadend=()=>i(o.result),o.onerror=s,o.readAsDataURL(a)});try{const i=await fetch(a);if(!i.ok)throw new Error(`Failed to fetch the audio from URL: ${a}`);const s=await i.blob();return new Promise((o,c)=>{const l=new FileReader;l.onloadend=()=>o(l.result),l.onerror=c,l.readAsDataURL(s)})}catch(i){return console.error("Error converting audio to Base64:",i),null}}async function Cr(a,i){let s;if(typeof a=="string")s=await(await fetch(a)).arrayBuffer();else if(a instanceof Blob||a instanceof File)s=await a.arrayBuffer();else throw new Error("Unsupported audio source type");const o=new(window.AudioContext||window.webkitAudioContext),c=await o.decodeAudioData(s),l=await jr(c,o,i),v=new OfflineAudioContext(c.numberOfChannels,c.length,c.sampleRate),t=v.createBufferSource();t.buffer=c;const u=v.createAnalyser();u.fftSize=i||2048,t.connect(u),u.connect(v.destination),t.start(),await v.startRendering();const h=u.frequencyBinCount,d=new Float32Array(h*Math.ceil(c.duration));for(let g=0;g<Math.ceil(c.duration);g++)u.getFloatFrequencyData(d.subarray(g*h,(g+1)*h));return d.some(g=>g!==-1/0)?{dataArray:d,audioDuration:c.duration}:(console.warn("AnalyserNode data contains only -Infinity values. This may indicate an issue with the audio data or configuration."),l)}async function jr(a,i,s){const o=i.createBufferSource();o.buffer=a;const c=i.createAnalyser();c.fftSize=s;const l=c.frequencyBinCount,v=new Float32Array(l);return o.connect(c),o.start(),o.playbackRate.value=10,new Promise((t,u)=>{let E=0;function g(){c.getFloatFrequencyData(v),v.some(A=>A!==-1/0)||E>=20?(o.stop(),t({dataArray:v,audioDuration:a.duration})):(E++,setTimeout(g,100))}g()})}function Ae(a,i=64,s=!1){const[o,c]=y.useState(!1),[l,v]=y.useState(!1),[t,u]=y.useState(null),[h,d]=y.useState(null),[E,g]=y.useState(null),[S,A]=y.useState(null),[L,te]=y.useState(null),[P,b]=y.useState(null),[I,Z]=y.useState(null),[G,Q]=y.useState(null),[ne,ae]=y.useState(null),[H,ce]=y.useState(0),[ie,J]=y.useState(0),[C,D]=y.useState(0),[q,B]=y.useState([]),Y=async m=>{u(new Audio(await Ze(m)))},V=async m=>{const{dataArray:w,audioDuration:k}=await Cr(m,i);ae(w),ce(k)},K=()=>{t!=null&&(t.play(),c(!0))},oe=()=>{t!=null&&(t.pause(),c(!1))},ee=()=>{t!=null&&(t.ended||t.paused?(t.play(),c(!0)):(t.pause(),c(!1)))},j=()=>{t!=null&&(t.pause(),t.currentTime=0,c(!1))},$=m=>{if(t==null||isNaN(m))return;const w=m/100;t.volume=w,D(w*100)},F=async()=>{try{const m=await navigator.mediaDevices.getUserMedia({audio:!0});Z(m);const w=h||new(window.AudioContext||window.webkitAudioContext);d(w);const k=w.createMediaStreamSource(m);Q(k);const W=w.createAnalyser();b(W),k.connect(W),W.fftSize=i;const ue=W.frequencyBinCount;A(ue),te(new Uint8Array(ue))}catch(m){console.error("Error capturing microphone audio:",m)}},N=()=>{I&&(I.getAudioTracks().forEach(m=>m.enabled=!1),v(!0))},X=()=>{I&&(I.getAudioTracks().forEach(m=>m.enabled=!0),v(!1))},U=()=>{I&&(I.getTracks().forEach(m=>m.stop()),Z(null)),h&&(h.close(),d(null),b(null),g(null),Q(null),A(null),te(null)),s&&B([])};return y.useEffect(()=>{a!==null&&(Y(a),V(a))},[a]),y.useEffect(()=>(t!==null&&(t.addEventListener("ended",j),D(t.volume*100),setInterval(()=>{J(t.currentTime)},100)),()=>{t!=null&&t.removeEventListener("ended",j)}),[t]),y.useEffect(()=>{if(!o)return;let m=E,w=P,k=h,W=S;h==null&&(k=new(window.AudioContext||window.webkitAudioContext),d(k)),E==null&&t!==null&&(m=k.createMediaElementSource(t),g(m)),P==null&&(w=k.createAnalyser(),b(w)),m&&(m.connect(w),m.connect(k.destination)),w.fftSize=i,W=w.frequencyBinCount,A(W),te(new Uint8Array(W))},[o,a,i]),y.useEffect(()=>{const m=()=>{if(G==null&&!o||l&&I!==null)return;P.getByteFrequencyData(L);const w=Qe(L,h.sampleRate);w!==null&&B(w),requestAnimationFrame(m)};(L!==null||P!==null||h!==null)&&s&&m()},[L,o,P,l,h,I,G,s]),{audioNode:t,audioContext:h,audioSource:E,isPlaying:o,play:K,pause:oe,toggleAudio:ee,stopAudio:j,setVolume:$,analyzer:P,bufferLength:S,dataArray:L,audioToBase64:Ze,captureMicrophone:F,muteMicrophone:N,unmuteMicrophone:X,stopMicrophone:U,microphoneSource:G,mediaStream:I,isMute:l,audioFrequencyData:ne,audioDuration:H,audioCurrentTime:ie,audioVolume:C,detectedNotes:q}}function Pe({width:a,height:i}){const s=y.useRef(null),o=y.useRef(null);return y.useEffect(()=>{if(s==null)return;const l=s.current.getContext("2d");o.current=l},[s,a,i]),{Canvas:y.useCallback(({...l})=>f.jsx("canvas",{ref:s,width:a,height:i,...l}),[s,a,i]),canvasContext:o==null?void 0:o.current,canvasNode:s==null?void 0:s.current}}function Ne({isPlaying:a,isMute:i,analyzer:s,bufferLength:o,dataArray:c,canvasNode:l,canvasContext:v,visualizer:t,barWidth:u=!1,barHeight:h=!1,x:d=0,color:E="white",colorFunction:g,audioDuration:S=0,type:A}){if(A=="player"&&!a||A=="stream"&&i||s==null||o==null||c==null||l==null||v==null||!t)return;u||(u=l.width/o);function L(){d=0,v.clearRect(0,0,l.width,l.height),s.getByteFrequencyData(c),t({barHeight:h,barWidth:u,canvasContext:v,x:d,color:E,colorFunction:g,audioDuration:S,dataArray:c,bufferLength:o,canvasNode:l}),requestAnimationFrame(L)}L()}function He({audioFrequencyData:a,canvasNode:i,canvasContext:s,visualizer:o,barWidth:c=!1,barHeight:l=!1,x:v=0,color:t="white",colorFunction:u,audioDuration:h=0}){if(a==null||!o)return;const d=Object.keys(a).length;c||(c=i.width/d),s.clearRect(0,0,i.width,i.height),o({dataArray:a,barHeight:l,barWidth:c,canvasContext:s,x:v,color:t,colorFunction:u,audioDuration:h,canvasNode:i})}const er={barVisualizer:({barHeight:a,barWidth:i,canvasContext:s,x:o,color:c,colorFunction:l,dataArray:v,canvasNode:t})=>{if(v!=null)for(let u=0;u<(v==null?void 0:v.length);u++)a=t.height-Math.abs(v[u])/2,l&&(c=l({barHeight:a,barWidth:i,index:u,dataArray:v})),s.fillStyle=c,s.fillRect(o,t.height-a,i,a),o+=i}},rr={barVisualizer:({barHeight:a,barWidth:i,canvasContext:s,x:o,color:c,colorFunction:l,audioDuration:v,dataArray:t,bufferLength:u,canvasNode:h})=>{for(let d=0;d<u;d++)a=Math.abs(t[d])/2.5,l&&(c=l({barHeight:a,barWidth:i,index:d,dataArray:t,audioDuration:v})),s.fillStyle=c,s.fillRect(o,h.height-a,i,a),o+=i}};function Sr({dataArray:a,canvasNode:i,canvasContext:s,barWidth:o=!1,barHeight:c=!1,x:l=0,color:v="white",colorFunction:t=!1,audioDuration:u=0}){He({audioFrequencyData:a,canvasNode:i,canvasContext:s,visualizer:er.barVisualizer,barWidth:o,barHeight:c,x:l,color:v,colorFunction:t,audioDuration:u})}function _e(a){if(typeof a!="number"||isNaN(a))throw new Error("Invalid input: Please provide a numeric value.");if(a<0)throw new Error("Invalid input: Time cannot be negative.");const i=Math.floor(a);if(i<60)return`${i}s`;if(i<3600){const s=Math.floor(i/60),o=i%60;return o>0?`${s}m ${o}s`:`${s}m`}else if(i<86400){const s=Math.floor(i/3600),o=Math.floor(i%3600/60);return o>0?`${s}h ${o}m`:`${s}h`}else{const s=Math.floor(i/86400),o=Math.floor(i%86400/3600);return o>0?`${s}d ${o}h`:`${s}d`}}function Ar({src:a=null,clickableCanvas:i=!1,width:s=500,height:o=100,controls:c=!0,pauseButton:l="Pause",playButton:v="Play",dataCount:t=64,className:u="",controlsClassName:h="",constrolsStyle:d=!1,customVolume:E=!1,volumeLevel:g=!1,enableDuration:S=!1,durationClassName:A="",durationStyle:L=!1,enableCurrentTime:te=!1,currentTimeClassName:P="",currentTimeStyle:b=!1,hideVolume:I=!0,disableVolume:Z=!1,style:G=!1,canvasClassName:Q="",canvasStyle:ne=!1,toggleClassName:ae="",toggleStyle:H=!1,stopButton:ce=!1,customStopButton:ie=!1,barWidth:J=!1,barHeight:C=!1,horizontalOffset:D=0,color:q="black",colorFunction:B=!1,customVisualizer:Y=!1,customFunction:V=!1}){const{isPlaying:K,toggleAudio:oe,audioNode:ee,audioDuration:j,audioCurrentTime:$,setVolume:F,audioVolume:N,stopAudio:X,audioFrequencyData:U}=Ae(a,t),{Canvas:m,canvasContext:w,canvasNode:k}=Pe({width:s,height:o}),[W,ue]=y.useState(_e($||0)),be=()=>{if(ie)return y.cloneElement(ie,{onClick:X})},xe=({className:le,style:fe,volumeClassName:de,volumeStyle:pe,labelClassName:ve,labelStyle:ye,labelIndicator:ge="%"})=>{if(!E)return;const he=y.cloneElement(E,{onChange:we=>{F(we.target.value)},value:N,min:0,max:100,className:de||"",style:pe||{}});return f.jsxs("div",{className:le||"",style:fe||"",children:[he,g?f.jsxs("p",{className:ve||"",style:ye||{},children:[parseInt(N).toFixed(0),ge]}):null]})};return y.useEffect(()=>{Z&&F(0),Y?He({audioFrequencyData:U,canvasNode:k,canvasContext:w,color:q,colorFunction:B,barWidth:J,barHeight:C,x:D,visualizer:Y,audioDuration:j}):Sr({dataArray:U,canvasNode:k,canvasContext:w,color:q,colorFunction:B,barWidth:J,barHeight:C,x:D,audioDuration:j})},[U,k,w,q,B,J,C,D,Y,Z,F,j]),y.useEffect(()=>{V&&V({audioNode:ee,audioFrequencyData:U,audioDuration:j})},[V,ee,U,j]),y.useEffect(()=>{$&&ue(_e($||0))},[$]),f.jsxs("div",{className:u||"",style:G||{},children:[f.jsx(m,{onClick:i?oe:null,className:Q||"",style:ne||{}}),c?f.jsxs("div",{className:h||"",style:d||{},children:[f.jsx("button",{className:ae||"",style:H||{},onClick:oe,children:K?l:v}),ce?f.jsx(f.Fragment,{children:ie?f.jsx(be,{}):f.jsx("button",{onClick:X,children:"Stop"})}):null,I?null:f.jsx(f.Fragment,{children:E?f.jsx(xe,{}):f.jsxs(f.Fragment,{children:[f.jsx("input",{type:"range",min:0,max:100,value:N,onChange:le=>{F(le.target.value)}}),g?f.jsxs("p",{children:[parseInt(N).toFixed(0),"%"]}):null]})}),te?f.jsx("p",{className:P||"",style:b||{},children:W}):null,S?f.jsx("p",{className:A||"",style:L||{},children:_e(j||0)}):null]}):null]})}function tr({isMute:a,isPlaying:i,analyzer:s,bufferLength:o,dataArray:c,canvasNode:l,canvasContext:v,barWidth:t=!1,barHeight:u=!1,x:h=0,color:d="black",colorFunction:E=!1,audioDuration:g=0,type:S}){Ne({isMute:a,isPlaying:i,analyzer:s,bufferLength:o,dataArray:c,canvasNode:l,canvasContext:v,visualizer:rr.barVisualizer,barHeight:u,barWidth:t,x:h,color:d,colorFunction:E,type:S,audioDuration:g})}function Pr({src:a=null,clickableCanvas:i=!1,width:s=500,height:o=100,controls:c=!0,pauseButton:l="Pause",playButton:v="Play",dataCount:t=64,className:u="",controlsClassName:h="",constrolsStyle:d=!1,customVolume:E=!1,volumeLevel:g=!1,enableDuration:S=!1,durationClassName:A="",durationStyle:L=!1,enableCurrentTime:te=!1,currentTimeClassName:P="",currentTimeStyle:b=!1,hideVolume:I=!0,disableVolume:Z=!1,style:G=!1,canvasClassName:Q="",canvasStyle:ne=!1,toggleClassName:ae="",toggleStyle:H=!1,stopButton:ce=!1,customStopButton:ie=!1,barWidth:J=!1,barHeight:C=!1,horizontalOffset:D=0,color:q="black",colorFunction:B=!1,customVisualizer:Y=!1,customFunction:V=!1}){const{isPlaying:K,toggleAudio:oe,analyzer:ee,bufferLength:j,dataArray:$,audioDuration:F,audioCurrentTime:N,setVolume:X,audioVolume:U,stopAudio:m,audioNode:w}=Ae(a,t),{Canvas:k,canvasContext:W,canvasNode:ue}=Pe({width:s,height:o}),[be,xe]=y.useState(_e(N||0)),le=()=>{if(ie)return y.cloneElement(ie,{onClick:m})},fe=({className:de,style:pe,volumeClassName:ve,volumeStyle:ye,labelClassName:ge,labelStyle:he,labelIndicator:we="%"})=>{if(!E)return;const ke=y.cloneElement(E,{onChange:Se=>{X(Se.target.value)},value:U,min:0,max:100,className:ve||"",style:ye||{}});return f.jsxs("div",{className:de||"",style:pe||"",children:[ke,g?f.jsxs("p",{className:ge||"",style:he||{},children:[parseInt(U).toFixed(0),we]}):null]})};return y.useEffect(()=>{Z&&X(0),Y?Ne({isPlaying:K,analyzer:ee,bufferLength:j,dataArray:$,canvasNode:ue,canvasContext:W,color:q,colorFunction:B,barWidth:J,barHeight:C,x:D,visualizer:Y,type:"player",audioDuration:F}):tr({isPlaying:K,analyzer:ee,bufferLength:j,dataArray:$,canvasNode:ue,canvasContext:W,color:q,colorFunction:B,barWidth:J,barHeight:C,x:D,type:"player",audioDuration:F})},[K,ee,j,$,ue,W,q,B,J,C,D,Y,Z,X,F]),y.useEffect(()=>{V&&V({audioNode:w,audioDuration:F,dataArray:$,bufferLength:j})},[V,w,F,$,j]),y.useEffect(()=>{N&&xe(_e(N||0))},[N]),f.jsxs("div",{className:u||"",style:G||{},children:[f.jsx(k,{onClick:i?oe:null,className:Q||"",style:ne||{}}),c?f.jsxs("div",{className:h||"",style:d||{},children:[f.jsx("button",{className:ae||"",style:H||{},onClick:oe,children:K?l:v}),ce?f.jsx(f.Fragment,{children:ie?f.jsx(le,{}):f.jsx("button",{onClick:m,children:"Stop"})}):null,I?null:f.jsx(f.Fragment,{children:E?f.jsx(fe,{}):f.jsxs(f.Fragment,{children:[f.jsx("input",{type:"range",min:0,max:100,value:U,onChange:de=>{X(de.target.value)}}),g?f.jsxs("p",{children:[parseInt(U).toFixed(0),"%"]}):null]})}),te?f.jsx("p",{className:P||"",style:b||{},children:be}):null,S?f.jsx("p",{className:A||"",style:L||{},children:_e(F||0)}):null]}):null]})}function kr({clickableCanvas:a=!1,width:i=500,height:s=100,controls:o=!0,muteButton:c="Mute",unmuteButton:l="Unmute",dataCount:v=64,className:t="",controlsClassName:u="",constrolsStyle:h=!1,style:d=!1,canvasClassName:E="",canvasStyle:g=!1,toggleClassName:S="",toggleStyle:A=!1,stopButton:L=!0,customStopButton:te=!1,startButton:P=!0,customStartButton:b=!1,barWidth:I=!1,barHeight:Z=!1,horizontalOffset:G=0,color:Q="black",colorFunction:ne=!1,customVisualizer:ae=!1,customFunction:H=!1}){const[ce,ie]=y.useState(!0),{captureMicrophone:J,isMute:C,muteMicrophone:D,unmuteMicrophone:q,stopMicrophone:B,analyzer:Y,bufferLength:V,dataArray:K,audioNode:oe,microphoneSource:ee,mediaStream:j}=Ae(null,v),{Canvas:$,canvasContext:F,canvasNode:N}=Pe({width:i,height:s}),X=()=>{if(te)return y.cloneElement(te,{onClick:B})},U=()=>{if(b)return y.cloneElement(b,{onClick:J})};y.useEffect(()=>{ae?Ne({isMute:C,analyzer:Y,bufferLength:V,dataArray:K,canvasNode:N,canvasContext:F,color:Q,colorFunction:ne,barWidth:I,barHeight:Z,x:G,visualizer:ae,type:"stream"}):tr({isMute:C,analyzer:Y,bufferLength:V,dataArray:K,canvasNode:N,canvasContext:F,color:Q,colorFunction:ne,barWidth:I,barHeight:Z,x:G,type:"stream"})},[C,Y,V,K,N,F,Q,ne,I,Z,G,ae]),y.useEffect(()=>{H&&H({audioNode:oe,microphoneSource:ee,mediaStream:j})},[H,oe,ee,j]);const m=()=>{ie(!ce),!ce?q():D()};return f.jsxs("div",{className:t||"",style:d||{},children:[f.jsx($,{onClick:a?m:null,className:E||"",style:g||{}}),o?f.jsxs("div",{className:u||"",style:h||{},children:[P?f.jsx(f.Fragment,{children:b?f.jsx(U,{}):f.jsx("button",{onClick:J,children:"Start"})}):null,f.jsx("button",{className:S||"",style:A||{},onClick:m,children:C?l:c}),L?f.jsx(f.Fragment,{children:te?f.jsx(X,{}):f.jsx("button",{onClick:B,children:"Stop"})}):null]}):null]})}exports.Audio=Ar;exports.AudioPlayer=Pr;exports.AudioStream=kr;exports.animation_visuals=rr;exports.detectNote=Qe;exports.static_visuals=er;exports.useAudio=Ae;exports.useCanvas=Pe;
