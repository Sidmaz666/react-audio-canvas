(function(H,y){typeof exports=="object"&&typeof module<"u"?y(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],y):(H=typeof globalThis<"u"?globalThis:H||self,y(H["react-audio-canvas"]={},H.React))})(this,function(H,y){"use strict";var Pe={exports:{}},be={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Le;function rt(){if(Le)return be;Le=1;var a=y,o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,f=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function v(n,l,h){var d,E={},g=null,A=null;h!==void 0&&(g=""+h),l.key!==void 0&&(g=""+l.key),l.ref!==void 0&&(A=l.ref);for(d in l)i.call(l,d)&&!u.hasOwnProperty(d)&&(E[d]=l[d]);if(n&&n.defaultProps)for(d in l=n.defaultProps,l)E[d]===void 0&&(E[d]=l[d]);return{$$typeof:o,type:n,key:g,ref:A,props:E,_owner:f.current}}return be.Fragment=s,be.jsx=v,be.jsxs=v,be}var we={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ue;function at(){return Ue||(Ue=1,process.env.NODE_ENV!=="production"&&function(){var a=y,o=Symbol.for("react.element"),s=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),v=Symbol.for("react.provider"),n=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),A=Symbol.for("react.offscreen"),S=Symbol.iterator,N="@@iterator";function re(e){if(e===null||typeof e!="object")return null;var t=S&&e[S]||e[N];return typeof t=="function"?t:null}var P=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function b(e){{for(var t=arguments.length,r=new Array(t>1?t-1:0),p=1;p<t;p++)r[p-1]=arguments[p];I("error",e,r)}}function I(e,t,r){{var p=P.ReactDebugCurrentFrame,w=p.getStackAddendum();w!==""&&(t+="%s",r=r.concat([w]));var j=r.map(function(_){return String(_)});j.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,j)}}var q=!1,G=!1,$=!1,ae=!1,oe=!1,ee;ee=Symbol.for("react.module.reference");function de(e){return!!(typeof e=="string"||typeof e=="function"||e===i||e===u||oe||e===f||e===h||e===d||ae||e===A||q||G||$||typeof e=="object"&&e!==null&&(e.$$typeof===g||e.$$typeof===E||e.$$typeof===v||e.$$typeof===n||e.$$typeof===l||e.$$typeof===ee||e.getModuleId!==void 0))}function ie(e,t,r){var p=e.displayName;if(p)return p;var w=t.displayName||t.name||"";return w!==""?r+"("+w+")":r}function J(e){return e.displayName||"Context"}function C(e){if(e==null)return null;if(typeof e.tag=="number"&&b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case i:return"Fragment";case s:return"Portal";case u:return"Profiler";case f:return"StrictMode";case h:return"Suspense";case d:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case n:var t=e;return J(t)+".Consumer";case v:var r=e;return J(r._context)+".Provider";case l:return ie(e,e.render,"ForwardRef");case E:var p=e.displayName||null;return p!==null?p:C(e.type)||"Memo";case g:{var w=e,j=w._payload,_=w._init;try{return C(_(j))}catch{return null}}}return null}var D=Object.assign,U=0,B,Y,V,K,se,te,T;function X(){}X.__reactDisabledLog=!0;function F(){{if(U===0){B=console.log,Y=console.info,V=console.warn,K=console.error,se=console.group,te=console.groupCollapsed,T=console.groupEnd;var e={configurable:!0,enumerable:!0,value:X,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}U++}}function z(){{if(U--,U===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:D({},e,{value:B}),info:D({},e,{value:Y}),warn:D({},e,{value:V}),error:D({},e,{value:K}),group:D({},e,{value:se}),groupCollapsed:D({},e,{value:te}),groupEnd:D({},e,{value:T})})}U<0&&b("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Z=P.ReactCurrentDispatcher,L;function m(e,t,r){{if(L===void 0)try{throw Error()}catch(w){var p=w.stack.trim().match(/\n( *(at )?)/);L=p&&p[1]||""}return`
`+L+e}}var x=!1,k;{var W=typeof WeakMap=="function"?WeakMap:Map;k=new W}function fe(e,t){if(!e||x)return"";{var r=k.get(e);if(r!==void 0)return r}var p;x=!0;var w=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var j;j=Z.current,Z.current=null,F();try{if(t){var _=function(){throw Error()};if(Object.defineProperty(_.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_,[])}catch(ne){p=ne}Reflect.construct(e,[],_)}else{try{_.call()}catch(ne){p=ne}e.call(_.prototype)}}else{try{throw Error()}catch(ne){p=ne}e()}}catch(ne){if(ne&&p&&typeof ne.stack=="string"){for(var R=ne.stack.split(`
`),Q=p.stack.split(`
`),O=R.length-1,M=Q.length-1;O>=1&&M>=0&&R[O]!==Q[M];)M--;for(;O>=1&&M>=0;O--,M--)if(R[O]!==Q[M]){if(O!==1||M!==1)do if(O--,M--,M<0||R[O]!==Q[M]){var ue=`
`+R[O].replace(" at new "," at ");return e.displayName&&ue.includes("<anonymous>")&&(ue=ue.replace("<anonymous>",e.displayName)),typeof e=="function"&&k.set(e,ue),ue}while(O>=1&&M>=0);break}}}finally{x=!1,Z.current=j,z(),Error.prepareStackTrace=w}var _e=e?e.displayName||e.name:"",me=_e?m(_e):"";return typeof e=="function"&&k.set(e,me),me}function pe(e,t,r){return fe(e,!1)}function ge(e){var t=e.prototype;return!!(t&&t.isReactComponent)}function le(e,t,r){if(e==null)return"";if(typeof e=="function")return fe(e,ge(e));if(typeof e=="string")return m(e);switch(e){case h:return m("Suspense");case d:return m("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case l:return pe(e.render);case E:return le(e.type,t,r);case g:{var p=e,w=p._payload,j=p._init;try{return le(j(w),t,r)}catch{}}}return""}var ce=Object.prototype.hasOwnProperty,he={},ye=P.ReactDebugCurrentFrame;function ve(e){if(e){var t=e._owner,r=le(e.type,e._source,t?t.type:null);ye.setExtraStackFrame(r)}else ye.setExtraStackFrame(null)}function Ee(e,t,r,p,w){{var j=Function.call.bind(ce);for(var _ in e)if(j(e,_)){var R=void 0;try{if(typeof e[_]!="function"){var Q=Error((p||"React class")+": "+r+" type `"+_+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[_]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw Q.name="Invariant Violation",Q}R=e[_](t,_,p,r,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(O){R=O}R&&!(R instanceof Error)&&(ve(w),b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",p||"React class",r,_,typeof R),ve(null)),R instanceof Error&&!(R.message in he)&&(he[R.message]=!0,ve(w),b("Failed %s type: %s",r,R.message),ve(null))}}}var xe=Array.isArray;function je(e){return xe(e)}function Oe(e){{var t=typeof Symbol=="function"&&Symbol.toStringTag,r=t&&e[Symbol.toStringTag]||e.constructor.name||"Object";return r}}function pt(e){try{return Ke(e),!1}catch{return!0}}function Ke(e){return""+e}function Xe(e){if(pt(e))return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Oe(e)),Ke(e)}var Ce=P.ReactCurrentOwner,ht={key:!0,ref:!0,__self:!0,__source:!0},ze,Ze,De;De={};function yt(e){if(ce.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return e.ref!==void 0}function mt(e){if(ce.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function gt(e,t){if(typeof e.ref=="string"&&Ce.current&&t&&Ce.current.stateNode!==t){var r=C(Ce.current.type);De[r]||(b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',C(Ce.current.type),e.ref),De[r]=!0)}}function Et(e,t){{var r=function(){ze||(ze=!0,b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0})}}function Rt(e,t){{var r=function(){Ze||(Ze=!0,b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"ref",{get:r,configurable:!0})}}var _t=function(e,t,r,p,w,j,_){var R={$$typeof:o,type:e,key:t,ref:r,props:_,_owner:j};return R._store={},Object.defineProperty(R._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(R,"_self",{configurable:!1,enumerable:!1,writable:!1,value:p}),Object.defineProperty(R,"_source",{configurable:!1,enumerable:!1,writable:!1,value:w}),Object.freeze&&(Object.freeze(R.props),Object.freeze(R)),R};function bt(e,t,r,p,w){{var j,_={},R=null,Q=null;r!==void 0&&(Xe(r),R=""+r),mt(t)&&(Xe(t.key),R=""+t.key),yt(t)&&(Q=t.ref,gt(t,w));for(j in t)ce.call(t,j)&&!ht.hasOwnProperty(j)&&(_[j]=t[j]);if(e&&e.defaultProps){var O=e.defaultProps;for(j in O)_[j]===void 0&&(_[j]=O[j])}if(R||Q){var M=typeof e=="function"?e.displayName||e.name||"Unknown":e;R&&Et(_,M),Q&&Rt(_,M)}return _t(e,R,Q,w,p,Ce.current,_)}}var Fe=P.ReactCurrentOwner,Qe=P.ReactDebugCurrentFrame;function Re(e){if(e){var t=e._owner,r=le(e.type,e._source,t?t.type:null);Qe.setExtraStackFrame(r)}else Qe.setExtraStackFrame(null)}var Me;Me=!1;function Ie(e){return typeof e=="object"&&e!==null&&e.$$typeof===o}function He(){{if(Fe.current){var e=C(Fe.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function wt(e){return""}var qe={};function xt(e){{var t=He();if(!t){var r=typeof e=="string"?e:e.displayName||e.name;r&&(t=`

Check the top-level render call using <`+r+">.")}return t}}function $e(e,t){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var r=xt(t);if(qe[r])return;qe[r]=!0;var p="";e&&e._owner&&e._owner!==Fe.current&&(p=" It was passed a child from "+C(e._owner.type)+"."),Re(e),b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',r,p),Re(null)}}function et(e,t){{if(typeof e!="object")return;if(je(e))for(var r=0;r<e.length;r++){var p=e[r];Ie(p)&&$e(p,t)}else if(Ie(e))e._store&&(e._store.validated=!0);else if(e){var w=re(e);if(typeof w=="function"&&w!==e.entries)for(var j=w.call(e),_;!(_=j.next()).done;)Ie(_.value)&&$e(_.value,t)}}}function jt(e){{var t=e.type;if(t==null||typeof t=="string")return;var r;if(typeof t=="function")r=t.propTypes;else if(typeof t=="object"&&(t.$$typeof===l||t.$$typeof===E))r=t.propTypes;else return;if(r){var p=C(t);Ee(r,e.props,"prop",p,e)}else if(t.PropTypes!==void 0&&!Me){Me=!0;var w=C(t);b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",w||"Unknown")}typeof t.getDefaultProps=="function"&&!t.getDefaultProps.isReactClassApproved&&b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Ct(e){{for(var t=Object.keys(e.props),r=0;r<t.length;r++){var p=t[r];if(p!=="children"&&p!=="key"){Re(e),b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",p),Re(null);break}}e.ref!==null&&(Re(e),b("Invalid attribute `ref` supplied to `React.Fragment`."),Re(null))}}var tt={};function nt(e,t,r,p,w,j){{var _=de(e);if(!_){var R="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(R+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var Q=wt();Q?R+=Q:R+=He();var O;e===null?O="null":je(e)?O="array":e!==void 0&&e.$$typeof===o?(O="<"+(C(e.type)||"Unknown")+" />",R=" Did you accidentally export a JSX literal instead of a component?"):O=typeof e,b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",O,R)}var M=bt(e,t,r,w,j);if(M==null)return M;if(_){var ue=t.children;if(ue!==void 0)if(p)if(je(ue)){for(var _e=0;_e<ue.length;_e++)et(ue[_e],e);Object.freeze&&Object.freeze(ue)}else b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else et(ue,e)}if(ce.call(t,"key")){var me=C(e),ne=Object.keys(t).filter(function(Ot){return Ot!=="key"}),Ne=ne.length>0?"{key: someKey, "+ne.join(": ..., ")+": ...}":"{key: someKey}";if(!tt[me+Ne]){var kt=ne.length>0?"{"+ne.join(": ..., ")+": ...}":"{}";b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Ne,me,kt,me),tt[me+Ne]=!0}}return e===i?Ct(M):jt(M),M}}function Tt(e,t,r){return nt(e,t,r,!0)}function At(e,t,r){return nt(e,t,r,!1)}var St=At,Pt=Tt;we.Fragment=i,we.jsx=St,we.jsxs=Pt}()),we}process.env.NODE_ENV==="production"?Pe.exports=rt():Pe.exports=at();var c=Pe.exports;function ot(a){const o=12*(Math.log(a/440)/Math.log(2));return Math.round(o)+69}function it(a){return 440*Math.pow(2,(a-69)/12)}function st(a,o){return Math.floor(1200*Math.log(a/it(o))/Math.log(2))}function Be(a,o=44100){const s=a.length,i=.3,f=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];let u=new Float32Array(s),v=[];for(let n=0;n<s;n++){let l=0;for(let h=0;h<s-n;h++)l+=(a[h]-128)*(a[h+n]-128);u[n]=l}for(let n=1;n<s-1;n++)if(u[n]>i&&u[n]>u[n-1]&&u[n]>u[n+1]){let l=n,h=u[n]/Math.max(...u);const d=o/l,E=ot(d),g=f[E%12],A=Math.floor((E-12)/12),S=st(d,E);v.push({frequency:d.toFixed(2),pitch:`${g}${A}`,octave:A,confidence:h.toFixed(2),note:g,cents:S})}return v.length>0?v:null}async function Ye(a){if(a instanceof File||a instanceof Blob)return new Promise((o,s)=>{const i=new FileReader;i.onloadend=()=>o(i.result),i.onerror=s,i.readAsDataURL(a)});try{const o=await fetch(a);if(!o.ok)throw new Error(`Failed to fetch the audio from URL: ${a}`);const s=await o.blob();return new Promise((i,f)=>{const u=new FileReader;u.onloadend=()=>i(u.result),u.onerror=f,u.readAsDataURL(s)})}catch(o){return console.error("Error converting audio to Base64:",o),null}}async function lt(a,o){let s;if(typeof a=="string")s=await(await fetch(a)).arrayBuffer();else if(a instanceof Blob||a instanceof File)s=await a.arrayBuffer();else throw new Error("Unsupported audio source type");const i=new(window.AudioContext||window.webkitAudioContext),f=await i.decodeAudioData(s),u=await ut(f,i,o),v=new OfflineAudioContext(f.numberOfChannels,f.length,f.sampleRate),n=v.createBufferSource();n.buffer=f;const l=v.createAnalyser();l.fftSize=o||2048,n.connect(l),l.connect(v.destination),n.start(),await v.startRendering();const h=l.frequencyBinCount,d=new Float32Array(h*Math.ceil(f.duration));for(let g=0;g<Math.ceil(f.duration);g++)l.getFloatFrequencyData(d.subarray(g*h,(g+1)*h));return d.some(g=>g!==-1/0)?{dataArray:d,audioDuration:f.duration}:(console.warn("AnalyserNode data contains only -Infinity values. This may indicate an issue with the audio data or configuration."),u)}async function ut(a,o,s){const i=o.createBufferSource();i.buffer=a;const f=o.createAnalyser();f.fftSize=s;const u=f.frequencyBinCount,v=new Float32Array(u);return i.connect(f),i.start(),i.playbackRate.value=10,new Promise((n,l)=>{let E=0;function g(){f.getFloatFrequencyData(v),v.some(S=>S!==-1/0)||E>=20?(i.stop(),n({dataArray:v,audioDuration:a.duration})):(E++,setTimeout(g,100))}g()})}function Te(a,o=64,s=!1){const[i,f]=y.useState(!1),[u,v]=y.useState(!1),[n,l]=y.useState(null),[h,d]=y.useState(null),[E,g]=y.useState(null),[A,S]=y.useState(null),[N,re]=y.useState(null),[P,b]=y.useState(null),[I,q]=y.useState(null),[G,$]=y.useState(null),[ae,oe]=y.useState(null),[ee,de]=y.useState(0),[ie,J]=y.useState(0),[C,D]=y.useState(0),[U,B]=y.useState([]),Y=async m=>{l(new Audio(await Ye(m)))},V=async m=>{const{dataArray:x,audioDuration:k}=await lt(m,o);oe(x),de(k)},K=()=>{n!=null&&(n.play(),f(!0))},se=()=>{n!=null&&(n.pause(),f(!1))},te=()=>{n!=null&&(n.ended||n.paused?(n.play(),f(!0)):(n.pause(),f(!1)))},T=()=>{n!=null&&(n.pause(),n.currentTime=0,f(!1))},X=m=>{if(n==null||isNaN(m))return;const x=m/100;n.volume=x,D(x*100)},F=async()=>{try{const m=await navigator.mediaDevices.getUserMedia({audio:!0});q(m);const x=h||new(window.AudioContext||window.webkitAudioContext);d(x);const k=x.createMediaStreamSource(m);$(k);const W=x.createAnalyser();b(W),k.connect(W),W.fftSize=o;const fe=W.frequencyBinCount;S(fe),re(new Uint8Array(fe))}catch(m){console.error("Error capturing microphone audio:",m)}},z=()=>{I&&(I.getAudioTracks().forEach(m=>m.enabled=!1),v(!0))},Z=()=>{I&&(I.getAudioTracks().forEach(m=>m.enabled=!0),v(!1))},L=()=>{I&&(I.getTracks().forEach(m=>m.stop()),q(null)),h&&(h.close(),d(null),b(null),g(null),$(null),S(null),re(null)),s&&B([])};return y.useEffect(()=>{a!==null&&(Y(a),V(a))},[a]),y.useEffect(()=>(n!==null&&(n.addEventListener("ended",T),D(n.volume*100),setInterval(()=>{J(n.currentTime)},100)),()=>{n!=null&&n.removeEventListener("ended",T)}),[n]),y.useEffect(()=>{if(!i)return;let m=E,x=P,k=h,W=A;h==null&&(k=new(window.AudioContext||window.webkitAudioContext),d(k)),E==null&&n!==null&&(m=k.createMediaElementSource(n),g(m)),P==null&&(x=k.createAnalyser(),b(x)),m&&(m.connect(x),m.connect(k.destination)),x.fftSize=o,W=x.frequencyBinCount,S(W),re(new Uint8Array(W))},[i,a,o]),y.useEffect(()=>{const m=()=>{if(G==null&&!i||u&&I!==null)return;P.getByteFrequencyData(N);const x=Be(N,h.sampleRate);x!==null&&B(x),requestAnimationFrame(m)};(N!==null||P!==null||h!==null)&&s&&m()},[N,i,P,u,h,I,G,s]),{audioNode:n,audioContext:h,audioSource:E,isPlaying:i,play:K,pause:se,toggleAudio:te,stopAudio:T,setVolume:X,analyzer:P,bufferLength:A,dataArray:N,audioToBase64:Ye,captureMicrophone:F,muteMicrophone:z,unmuteMicrophone:Z,stopMicrophone:L,microphoneSource:G,mediaStream:I,isMute:u,audioFrequencyData:ae,audioDuration:ee,audioCurrentTime:ie,audioVolume:C,detectedNotes:U}}function Ae({width:a,height:o}){const s=y.useRef(null),i=y.useRef(null);return y.useEffect(()=>{if(s==null)return;const u=s.current.getContext("2d");i.current=u},[s,a,o]),{Canvas:y.useCallback(({...u})=>c.jsx("canvas",{ref:s,width:a,height:o,...u}),[s,a,o]),canvasContext:i==null?void 0:i.current,canvasNode:s==null?void 0:s.current}}function ke({isPlaying:a,isMute:o,analyzer:s,bufferLength:i,dataArray:f,canvasNode:u,canvasContext:v,visualizer:n,barWidth:l=!1,barHeight:h=!1,x:d=0,color:E="white",colorFunction:g,audioDuration:A=0,type:S}){if(S=="player"&&!a||S=="stream"&&o||s==null||i==null||f==null||u==null||v==null||!n)return;l||(l=u.width/i);function N(){d=0,v.clearRect(0,0,u.width,u.height),s.getByteFrequencyData(f),n({barHeight:h,barWidth:l,canvasContext:v,x:d,color:E,colorFunction:g,audioDuration:A,dataArray:f,bufferLength:i,canvasNode:u}),requestAnimationFrame(N)}N()}function Ve({audioFrequencyData:a,canvasNode:o,canvasContext:s,visualizer:i,barWidth:f=!1,barHeight:u=!1,x:v=0,color:n="white",colorFunction:l,audioDuration:h=0}){if(a==null||!i)return;const d=Object.keys(a).length;f||(f=o.width/d),s.clearRect(0,0,o.width,o.height),i({dataArray:a,barHeight:u,barWidth:f,canvasContext:s,x:v,color:n,colorFunction:l,audioDuration:h,canvasNode:o})}const We={barVisualizer:({barHeight:a,barWidth:o,canvasContext:s,x:i,color:f,colorFunction:u,dataArray:v,canvasNode:n})=>{if(v!=null)for(let l=0;l<(v==null?void 0:v.length);l++)a=n.height-Math.abs(v[l])/2,u&&(f=u({barHeight:a,barWidth:o,index:l,dataArray:v})),s.fillStyle=f,s.fillRect(i,n.height-a,o,a),i+=o}},Ge={barVisualizer:({barHeight:a,barWidth:o,canvasContext:s,x:i,color:f,colorFunction:u,audioDuration:v,dataArray:n,bufferLength:l,canvasNode:h})=>{for(let d=0;d<l;d++)a=Math.abs(n[d])/2.5,u&&(f=u({barHeight:a,barWidth:o,index:d,dataArray:n,audioDuration:v})),s.fillStyle=f,s.fillRect(i,h.height-a,o,a),i+=o}};function ft({dataArray:a,canvasNode:o,canvasContext:s,barWidth:i=!1,barHeight:f=!1,x:u=0,color:v="white",colorFunction:n=!1,audioDuration:l=0}){Ve({audioFrequencyData:a,canvasNode:o,canvasContext:s,visualizer:We.barVisualizer,barWidth:i,barHeight:f,x:u,color:v,colorFunction:n,audioDuration:l})}function Se(a){if(typeof a!="number"||isNaN(a))throw new Error("Invalid input: Please provide a numeric value.");if(a<0)throw new Error("Invalid input: Time cannot be negative.");const o=Math.floor(a);if(o<60)return`${o}s`;if(o<3600){const s=Math.floor(o/60),i=o%60;return i>0?`${s}m ${i}s`:`${s}m`}else if(o<86400){const s=Math.floor(o/3600),i=Math.floor(o%3600/60);return i>0?`${s}h ${i}m`:`${s}h`}else{const s=Math.floor(o/86400),i=Math.floor(o%86400/3600);return i>0?`${s}d ${i}h`:`${s}d`}}function ct({src:a=null,clickableCanvas:o=!1,width:s=500,height:i=100,controls:f=!0,pauseButton:u="Pause",playButton:v="Play",dataCount:n=64,className:l="",controlsClassName:h="",constrolsStyle:d=!1,customVolume:E=!1,volumeLevel:g=!1,enableDuration:A=!1,durationClassName:S="",durationStyle:N=!1,enableCurrentTime:re=!1,currentTimeClassName:P="",currentTimeStyle:b=!1,hideVolume:I=!0,disableVolume:q=!1,style:G=!1,canvasClassName:$="",canvasStyle:ae=!1,toggleClassName:oe="",toggleStyle:ee=!1,stopButton:de=!1,customStopButton:ie=!1,barWidth:J=!1,barHeight:C=!1,horizontalOffset:D=0,color:U="black",colorFunction:B=!1,customVisualizer:Y=!1,customFunction:V=!1}){const{isPlaying:K,toggleAudio:se,audioNode:te,audioDuration:T,audioCurrentTime:X,setVolume:F,audioVolume:z,stopAudio:Z,audioFrequencyData:L}=Te(a,n),{Canvas:m,canvasContext:x,canvasNode:k}=Ae({width:s,height:i}),W=()=>{if(ie)return y.cloneElement(ie,{onClick:Z})},fe=({className:pe,style:ge,volumeClassName:le,volumeStyle:ce,labelClassName:he,labelStyle:ye,labelIndicator:ve="%"})=>{if(!E)return;const Ee=y.cloneElement(E,{onChange:xe=>{F(xe.target.value)},value:z,min:0,max:100,className:le||"",style:ce||{}});return c.jsxs("div",{className:pe||"",style:ge||"",children:[Ee,g?c.jsxs("p",{className:he||"",style:ye||{},children:[parseInt(z).toFixed(0),ve]}):null]})};return y.useEffect(()=>{q&&F(0),Y?Ve({audioFrequencyData:L,canvasNode:k,canvasContext:x,color:U,colorFunction:B,barWidth:J,barHeight:C,x:D,visualizer:Y,audioDuration:T}):ft({dataArray:L,canvasNode:k,canvasContext:x,color:U,colorFunction:B,barWidth:J,barHeight:C,x:D,audioDuration:T})},[L,k,x,U,B,J,C,D,Y,q,F,T]),y.useEffect(()=>{V&&V({audioNode:te,audioFrequencyData:L,audioDuration:T})},[V,te,L,T]),c.jsxs("div",{className:l||"",style:G||{},children:[c.jsx(m,{onClick:o?se:null,className:$||"",style:ae||{}}),f?c.jsxs("div",{className:h||"",style:d||{},children:[c.jsx("button",{className:oe||"",style:ee||{},onClick:se,children:K?u:v}),de?c.jsx(c.Fragment,{children:ie?c.jsx(W,{}):c.jsx("button",{onClick:Z,children:"Stop"})}):null,I?null:c.jsx(c.Fragment,{children:E?c.jsx(fe,{}):c.jsxs(c.Fragment,{children:[c.jsx("input",{type:"range",min:0,max:100,value:z,onChange:pe=>{F(pe.target.value)}}),g?c.jsxs("p",{children:[parseInt(z).toFixed(0),"%"]}):null]})}),re?c.jsx("p",{className:P||"",style:b||{},children:Se(X||0)}):null,A?c.jsx("p",{className:S||"",style:N||{},children:Se(T||0)}):null]}):null]})}function Je({isMute:a,isPlaying:o,analyzer:s,bufferLength:i,dataArray:f,canvasNode:u,canvasContext:v,barWidth:n=!1,barHeight:l=!1,x:h=0,color:d="black",colorFunction:E=!1,audioDuration:g=0,type:A}){ke({isMute:a,isPlaying:o,analyzer:s,bufferLength:i,dataArray:f,canvasNode:u,canvasContext:v,visualizer:Ge.barVisualizer,barHeight:l,barWidth:n,x:h,color:d,colorFunction:E,type:A,audioDuration:g})}function dt({src:a=null,clickableCanvas:o=!1,width:s=500,height:i=100,controls:f=!0,pauseButton:u="Pause",playButton:v="Play",dataCount:n=64,className:l="",controlsClassName:h="",constrolsStyle:d=!1,customVolume:E=!1,volumeLevel:g=!1,enableDuration:A=!1,durationClassName:S="",durationStyle:N=!1,enableCurrentTime:re=!1,currentTimeClassName:P="",currentTimeStyle:b=!1,hideVolume:I=!0,disableVolume:q=!1,style:G=!1,canvasClassName:$="",canvasStyle:ae=!1,toggleClassName:oe="",toggleStyle:ee=!1,stopButton:de=!1,customStopButton:ie=!1,barWidth:J=!1,barHeight:C=!1,horizontalOffset:D=0,color:U="black",colorFunction:B=!1,customVisualizer:Y=!1,customFunction:V=!1}){const{isPlaying:K,toggleAudio:se,analyzer:te,bufferLength:T,dataArray:X,audioDuration:F,audioCurrentTime:z,setVolume:Z,audioVolume:L,stopAudio:m,audioNode:x}=Te(a,n),{Canvas:k,canvasContext:W,canvasNode:fe}=Ae({width:s,height:i}),pe=()=>{if(ie)return y.cloneElement(ie,{onClick:m})},ge=({className:le,style:ce,volumeClassName:he,volumeStyle:ye,labelClassName:ve,labelStyle:Ee,labelIndicator:xe="%"})=>{if(!E)return;const je=y.cloneElement(E,{onChange:Oe=>{Z(Oe.target.value)},value:L,min:0,max:100,className:he||"",style:ye||{}});return c.jsxs("div",{className:le||"",style:ce||"",children:[je,g?c.jsxs("p",{className:ve||"",style:Ee||{},children:[parseInt(L).toFixed(0),xe]}):null]})};return y.useEffect(()=>{q&&Z(0),Y?ke({isPlaying:K,analyzer:te,bufferLength:T,dataArray:X,canvasNode:fe,canvasContext:W,color:U,colorFunction:B,barWidth:J,barHeight:C,x:D,visualizer:Y,type:"player",audioDuration:F}):Je({isPlaying:K,analyzer:te,bufferLength:T,dataArray:X,canvasNode:fe,canvasContext:W,color:U,colorFunction:B,barWidth:J,barHeight:C,x:D,type:"player",audioDuration:F})},[K,te,T,X,fe,W,U,B,J,C,D,Y,q,Z,F]),y.useEffect(()=>{V&&V({audioNode:x,audioDuration:F,dataArray:X,bufferLength:T})},[V,x,F,X,T]),c.jsxs("div",{className:l||"",style:G||{},children:[c.jsx(k,{onClick:o?se:null,className:$||"",style:ae||{}}),f?c.jsxs("div",{className:h||"",style:d||{},children:[c.jsx("button",{className:oe||"",style:ee||{},onClick:se,children:K?u:v}),de?c.jsx(c.Fragment,{children:ie?c.jsx(pe,{}):c.jsx("button",{onClick:m,children:"Stop"})}):null,I?null:c.jsx(c.Fragment,{children:E?c.jsx(ge,{}):c.jsxs(c.Fragment,{children:[c.jsx("input",{type:"range",min:0,max:100,value:L,onChange:le=>{Z(le.target.value)}}),g?c.jsxs("p",{children:[parseInt(L).toFixed(0),"%"]}):null]})}),re?c.jsx("p",{className:P||"",style:b||{},children:Se(z||0)}):null,A?c.jsx("p",{className:S||"",style:N||{},children:Se(F||0)}):null]}):null]})}function vt({clickableCanvas:a=!1,width:o=500,height:s=100,controls:i=!0,muteButton:f="Mute",unmuteButton:u="Unmute",dataCount:v=64,className:n="",controlsClassName:l="",constrolsStyle:h=!1,style:d=!1,canvasClassName:E="",canvasStyle:g=!1,toggleClassName:A="",toggleStyle:S=!1,stopButton:N=!0,customStopButton:re=!1,startButton:P=!0,customStartButton:b=!1,barWidth:I=!1,barHeight:q=!1,horizontalOffset:G=0,color:$="black",colorFunction:ae=!1,customVisualizer:oe=!1,customFunction:ee=!1}){const[de,ie]=y.useState(!0),{captureMicrophone:J,isMute:C,muteMicrophone:D,unmuteMicrophone:U,stopMicrophone:B,analyzer:Y,bufferLength:V,dataArray:K,audioNode:se,microphoneSource:te,mediaStream:T}=Te(null,v),{Canvas:X,canvasContext:F,canvasNode:z}=Ae({width:o,height:s}),Z=()=>{if(re)return y.cloneElement(re,{onClick:B})},L=()=>{if(b)return y.cloneElement(b,{onClick:J})};y.useEffect(()=>{oe?ke({isMute:C,analyzer:Y,bufferLength:V,dataArray:K,canvasNode:z,canvasContext:F,color:$,colorFunction:ae,barWidth:I,barHeight:q,x:G,visualizer:oe,type:"stream"}):Je({isMute:C,analyzer:Y,bufferLength:V,dataArray:K,canvasNode:z,canvasContext:F,color:$,colorFunction:ae,barWidth:I,barHeight:q,x:G,type:"stream"})},[C,Y,V,K,z,F,$,ae,I,q,G,oe]),y.useEffect(()=>{ee&&ee({audioNode:se,microphoneSource:te,mediaStream:T})},[ee,se,te,T]);const m=()=>{ie(!de),!de?U():D()};return c.jsxs("div",{className:n||"",style:d||{},children:[c.jsx(X,{onClick:a?m:null,className:E||"",style:g||{}}),i?c.jsxs("div",{className:l||"",style:h||{},children:[P?c.jsx(c.Fragment,{children:b?c.jsx(L,{}):c.jsx("button",{onClick:J,children:"Start"})}):null,c.jsx("button",{className:A||"",style:S||{},onClick:m,children:C?u:f}),N?c.jsx(c.Fragment,{children:re?c.jsx(Z,{}):c.jsx("button",{onClick:B,children:"Stop"})}):null]}):null]})}H.Audio=ct,H.AudioPlayer=dt,H.AudioStream=vt,H.animation_visuals=Ge,H.detectNote=Be,H.static_visuals=We,H.useAudio=Te,H.useCanvas=Ae,Object.defineProperty(H,Symbol.toStringTag,{value:"Module"})});
