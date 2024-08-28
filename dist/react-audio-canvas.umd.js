(function(Z,p){typeof exports=="object"&&typeof module<"u"?p(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],p):(Z=typeof globalThis<"u"?globalThis:Z||self,p(Z["react-audio-canvas"]={},Z.React))})(this,function(Z,p){"use strict";var Pe={exports:{}},xe={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ue;function rt(){if(Ue)return xe;Ue=1;var a=p,o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,f=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(n,l,m){var d,g={},E=null,C=null;m!==void 0&&(E=""+m),l.key!==void 0&&(E=""+l.key),l.ref!==void 0&&(C=l.ref);for(d in l)i.call(l,d)&&!u.hasOwnProperty(d)&&(g[d]=l[d]);if(n&&n.defaultProps)for(d in l=n.defaultProps,l)g[d]===void 0&&(g[d]=l[d]);return{$$typeof:o,type:n,key:E,ref:C,props:g,_owner:f.current}}return xe.Fragment=s,xe.jsx=h,xe.jsxs=h,xe}var Te={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Le;function at(){return Le||(Le=1,process.env.NODE_ENV!=="production"&&function(){var a=p,o=Symbol.for("react.element"),s=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),n=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),C=Symbol.for("react.offscreen"),A=Symbol.iterator,U="@@iterator";function Y(e){if(e===null||typeof e!="object")return null;var t=A&&e[A]||e[U];return typeof t=="function"?t:null}var P=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function x(e){{for(var t=arguments.length,r=new Array(t>1?t-1:0),y=1;y<t;y++)r[y-1]=arguments[y];k("error",e,r)}}function k(e,t,r){{var y=P.ReactDebugCurrentFrame,w=y.getStackAddendum();w!==""&&(t+="%s",r=r.concat([w]));var j=r.map(function(b){return String(b)});j.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,j)}}var Q=!1,ne=!1,H=!1,re=!1,ue=!1,q;q=Symbol.for("react.module.reference");function se(e){return!!(typeof e=="string"||typeof e=="function"||e===i||e===u||ue||e===f||e===m||e===d||re||e===C||Q||ne||H||typeof e=="object"&&e!==null&&(e.$$typeof===E||e.$$typeof===g||e.$$typeof===h||e.$$typeof===n||e.$$typeof===l||e.$$typeof===q||e.getModuleId!==void 0))}function fe(e,t,r){var y=e.displayName;if(y)return y;var w=t.displayName||t.name||"";return w!==""?r+"("+w+")":r}function ae(e){return e.displayName||"Context"}function S(e){if(e==null)return null;if(typeof e.tag=="number"&&x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case i:return"Fragment";case s:return"Portal";case u:return"Profiler";case f:return"StrictMode";case m:return"Suspense";case d:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case n:var t=e;return ae(t)+".Consumer";case h:var r=e;return ae(r._context)+".Provider";case l:return fe(e,e.render,"ForwardRef");case g:var y=e.displayName||null;return y!==null?y:S(e.type)||"Memo";case E:{var w=e,j=w._payload,b=w._init;try{return S(b(j))}catch{return null}}}return null}var M=Object.assign,oe=0,V,W,G,J,X,I,L;function $(){}$.__reactDisabledLog=!0;function ee(){{if(oe===0){V=console.log,W=console.info,G=console.warn,J=console.error,X=console.group,I=console.groupCollapsed,L=console.groupEnd;var e={configurable:!0,enumerable:!0,value:$,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}oe++}}function ie(){{if(oe--,oe===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:M({},e,{value:V}),info:M({},e,{value:W}),warn:M({},e,{value:G}),error:M({},e,{value:J}),group:M({},e,{value:X}),groupCollapsed:M({},e,{value:I}),groupEnd:M({},e,{value:L})})}oe<0&&x("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var B=P.ReactCurrentDispatcher,O;function v(e,t,r){{if(O===void 0)try{throw Error()}catch(w){var y=w.stack.trim().match(/\n( *(at )?)/);O=y&&y[1]||""}return`
`+O+e}}var _=!1,T;{var N=typeof WeakMap=="function"?WeakMap:Map;T=new N}function K(e,t){if(!e||_)return"";{var r=T.get(e);if(r!==void 0)return r}var y;_=!0;var w=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var j;j=B.current,B.current=null,ee();try{if(t){var b=function(){throw Error()};if(Object.defineProperty(b.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(b,[])}catch(te){y=te}Reflect.construct(e,[],b)}else{try{b.call()}catch(te){y=te}e.call(b.prototype)}}else{try{throw Error()}catch(te){y=te}e()}}catch(te){if(te&&y&&typeof te.stack=="string"){for(var R=te.stack.split(`
`),z=y.stack.split(`
`),D=R.length-1,F=z.length-1;D>=1&&F>=0&&R[D]!==z[F];)F--;for(;D>=1&&F>=0;D--,F--)if(R[D]!==z[F]){if(D!==1||F!==1)do if(D--,F--,F<0||R[D]!==z[F]){var le=`
`+R[D].replace(" at new "," at ");return e.displayName&&le.includes("<anonymous>")&&(le=le.replace("<anonymous>",e.displayName)),typeof e=="function"&&T.set(e,le),le}while(D>=1&&F>=0);break}}}finally{_=!1,B.current=j,ie(),Error.prepareStackTrace=w}var we=e?e.displayName||e.name:"",ge=we?v(we):"";return typeof e=="function"&&T.set(e,ge),ge}function Re(e,t,r){return K(e,!1)}function ce(e){var t=e.prototype;return!!(t&&t.isReactComponent)}function ve(e,t,r){if(e==null)return"";if(typeof e=="function")return K(e,ce(e));if(typeof e=="string")return v(e);switch(e){case m:return v("Suspense");case d:return v("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case l:return Re(e.render);case g:return ve(e.type,t,r);case E:{var y=e,w=y._payload,j=y._init;try{return ve(j(w),t,r)}catch{}}}return""}var de=Object.prototype.hasOwnProperty,pe={},_e=P.ReactDebugCurrentFrame;function he(e){if(e){var t=e._owner,r=ve(e.type,e._source,t?t.type:null);_e.setExtraStackFrame(r)}else _e.setExtraStackFrame(null)}function ye(e,t,r,y,w){{var j=Function.call.bind(de);for(var b in e)if(j(e,b)){var R=void 0;try{if(typeof e[b]!="function"){var z=Error((y||"React class")+": "+r+" type `"+b+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[b]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw z.name="Invariant Violation",z}R=e[b](t,b,y,r,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(D){R=D}R&&!(R instanceof Error)&&(he(w),x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",y||"React class",r,b,typeof R),he(null)),R instanceof Error&&!(R.message in pe)&&(pe[R.message]=!0,he(w),x("Failed %s type: %s",r,R.message),he(null))}}}var je=Array.isArray;function me(e){return je(e)}function Oe(e){{var t=typeof Symbol=="function"&&Symbol.toStringTag,r=t&&e[Symbol.toStringTag]||e.constructor.name||"Object";return r}}function pt(e){try{return Ke(e),!1}catch{return!0}}function Ke(e){return""+e}function Xe(e){if(pt(e))return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Oe(e)),Ke(e)}var Ce=P.ReactCurrentOwner,ht={key:!0,ref:!0,__self:!0,__source:!0},ze,Ze,De;De={};function yt(e){if(de.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return e.ref!==void 0}function mt(e){if(de.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function gt(e,t){if(typeof e.ref=="string"&&Ce.current&&t&&Ce.current.stateNode!==t){var r=S(Ce.current.type);De[r]||(x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',S(Ce.current.type),e.ref),De[r]=!0)}}function Et(e,t){{var r=function(){ze||(ze=!0,x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0})}}function Rt(e,t){{var r=function(){Ze||(Ze=!0,x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"ref",{get:r,configurable:!0})}}var _t=function(e,t,r,y,w,j,b){var R={$$typeof:o,type:e,key:t,ref:r,props:b,_owner:j};return R._store={},Object.defineProperty(R._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(R,"_self",{configurable:!1,enumerable:!1,writable:!1,value:y}),Object.defineProperty(R,"_source",{configurable:!1,enumerable:!1,writable:!1,value:w}),Object.freeze&&(Object.freeze(R.props),Object.freeze(R)),R};function bt(e,t,r,y,w){{var j,b={},R=null,z=null;r!==void 0&&(Xe(r),R=""+r),mt(t)&&(Xe(t.key),R=""+t.key),yt(t)&&(z=t.ref,gt(t,w));for(j in t)de.call(t,j)&&!ht.hasOwnProperty(j)&&(b[j]=t[j]);if(e&&e.defaultProps){var D=e.defaultProps;for(j in D)b[j]===void 0&&(b[j]=D[j])}if(R||z){var F=typeof e=="function"?e.displayName||e.name||"Unknown":e;R&&Et(b,F),z&&Rt(b,F)}return _t(e,R,z,w,y,Ce.current,b)}}var Fe=P.ReactCurrentOwner,Qe=P.ReactDebugCurrentFrame;function be(e){if(e){var t=e._owner,r=ve(e.type,e._source,t?t.type:null);Qe.setExtraStackFrame(r)}else Qe.setExtraStackFrame(null)}var Me;Me=!1;function Ie(e){return typeof e=="object"&&e!==null&&e.$$typeof===o}function He(){{if(Fe.current){var e=S(Fe.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function wt(e){return""}var qe={};function xt(e){{var t=He();if(!t){var r=typeof e=="string"?e:e.displayName||e.name;r&&(t=`

Check the top-level render call using <`+r+">.")}return t}}function $e(e,t){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var r=xt(t);if(qe[r])return;qe[r]=!0;var y="";e&&e._owner&&e._owner!==Fe.current&&(y=" It was passed a child from "+S(e._owner.type)+"."),be(e),x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',r,y),be(null)}}function et(e,t){{if(typeof e!="object")return;if(me(e))for(var r=0;r<e.length;r++){var y=e[r];Ie(y)&&$e(y,t)}else if(Ie(e))e._store&&(e._store.validated=!0);else if(e){var w=Y(e);if(typeof w=="function"&&w!==e.entries)for(var j=w.call(e),b;!(b=j.next()).done;)Ie(b.value)&&$e(b.value,t)}}}function Tt(e){{var t=e.type;if(t==null||typeof t=="string")return;var r;if(typeof t=="function")r=t.propTypes;else if(typeof t=="object"&&(t.$$typeof===l||t.$$typeof===g))r=t.propTypes;else return;if(r){var y=S(t);ye(r,e.props,"prop",y,e)}else if(t.PropTypes!==void 0&&!Me){Me=!0;var w=S(t);x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",w||"Unknown")}typeof t.getDefaultProps=="function"&&!t.getDefaultProps.isReactClassApproved&&x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function jt(e){{for(var t=Object.keys(e.props),r=0;r<t.length;r++){var y=t[r];if(y!=="children"&&y!=="key"){be(e),x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",y),be(null);break}}e.ref!==null&&(be(e),x("Invalid attribute `ref` supplied to `React.Fragment`."),be(null))}}var tt={};function nt(e,t,r,y,w,j){{var b=se(e);if(!b){var R="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(R+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var z=wt();z?R+=z:R+=He();var D;e===null?D="null":me(e)?D="array":e!==void 0&&e.$$typeof===o?(D="<"+(S(e.type)||"Unknown")+" />",R=" Did you accidentally export a JSX literal instead of a component?"):D=typeof e,x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",D,R)}var F=bt(e,t,r,w,j);if(F==null)return F;if(b){var le=t.children;if(le!==void 0)if(y)if(me(le)){for(var we=0;we<le.length;we++)et(le[we],e);Object.freeze&&Object.freeze(le)}else x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else et(le,e)}if(de.call(t,"key")){var ge=S(e),te=Object.keys(t).filter(function(Ot){return Ot!=="key"}),Ne=te.length>0?"{key: someKey, "+te.join(": ..., ")+": ...}":"{key: someKey}";if(!tt[ge+Ne]){var kt=te.length>0?"{"+te.join(": ..., ")+": ...}":"{}";x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,Ne,ge,kt,ge),tt[ge+Ne]=!0}}return e===i?jt(F):Tt(F),F}}function Ct(e,t,r){return nt(e,t,r,!0)}function St(e,t,r){return nt(e,t,r,!1)}var At=St,Pt=Ct;Te.Fragment=i,Te.jsx=At,Te.jsxs=Pt}()),Te}process.env.NODE_ENV==="production"?Pe.exports=rt():Pe.exports=at();var c=Pe.exports;function ot(a){const o=12*(Math.log(a/440)/Math.log(2));return Math.round(o)+69}function it(a){return 440*Math.pow(2,(a-69)/12)}function st(a,o){return Math.floor(1200*Math.log(a/it(o))/Math.log(2))}function Be(a,o=44100){const s=a.length,i=.3,f=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];let u=new Float32Array(s),h=[];for(let n=0;n<s;n++){let l=0;for(let m=0;m<s-n;m++)l+=(a[m]-128)*(a[m+n]-128);u[n]=l}for(let n=1;n<s-1;n++)if(u[n]>i&&u[n]>u[n-1]&&u[n]>u[n+1]){let l=n,m=u[n]/Math.max(...u);const d=o/l,g=ot(d),E=f[g%12],C=Math.floor((g-12)/12),A=st(d,g);h.push({frequency:d.toFixed(2),pitch:`${E}${C}`,octave:C,confidence:m.toFixed(2),note:E,cents:A})}return h.length>0?h:null}async function Ye(a){if(a instanceof File||a instanceof Blob)return new Promise((o,s)=>{const i=new FileReader;i.onloadend=()=>o(i.result),i.onerror=s,i.readAsDataURL(a)});try{const o=await fetch(a);if(!o.ok)throw new Error(`Failed to fetch the audio from URL: ${a}`);const s=await o.blob();return new Promise((i,f)=>{const u=new FileReader;u.onloadend=()=>i(u.result),u.onerror=f,u.readAsDataURL(s)})}catch(o){return console.error("Error converting audio to Base64:",o),null}}async function lt(a,o){let s;if(typeof a=="string")s=await(await fetch(a)).arrayBuffer();else if(a instanceof Blob||a instanceof File)s=await a.arrayBuffer();else throw new Error("Unsupported audio source type");const i=new(window.AudioContext||window.webkitAudioContext),f=await i.decodeAudioData(s),u=await ut(f,i,o),h=new OfflineAudioContext(f.numberOfChannels,f.length,f.sampleRate),n=h.createBufferSource();n.buffer=f;const l=h.createAnalyser();l.fftSize=o||2048,n.connect(l),l.connect(h.destination),n.start(),await h.startRendering();const m=l.frequencyBinCount,d=new Float32Array(m*Math.ceil(f.duration));for(let E=0;E<Math.ceil(f.duration);E++)l.getFloatFrequencyData(d.subarray(E*m,(E+1)*m));return d.some(E=>E!==-1/0)?{dataArray:d,audioDuration:f.duration}:(console.warn("AnalyserNode data contains only -Infinity values. This may indicate an issue with the audio data or configuration."),u)}async function ut(a,o,s){const i=o.createBufferSource();i.buffer=a;const f=o.createAnalyser();f.fftSize=s;const u=f.frequencyBinCount,h=new Float32Array(u);return i.connect(f),i.start(),i.playbackRate.value=10,new Promise((n,l)=>{let g=0;function E(){f.getFloatFrequencyData(h),h.some(A=>A!==-1/0)||g>=20?(i.stop(),n({dataArray:h,audioDuration:a.duration})):(g++,setTimeout(E,100))}E()})}function Se(a,o=64,s=!1){const[i,f]=p.useState(!1),[u,h]=p.useState(!1),[n,l]=p.useState(null),[m,d]=p.useState(null),[g,E]=p.useState(null),[C,A]=p.useState(null),[U,Y]=p.useState(null),[P,x]=p.useState(null),[k,Q]=p.useState(null),[ne,H]=p.useState(null),[re,ue]=p.useState(null),[q,se]=p.useState(0),[fe,ae]=p.useState(0),[S,M]=p.useState(0),[oe,V]=p.useState([]),W=async v=>{l(new Audio(await Ye(v)))},G=async v=>{const{dataArray:_,audioDuration:T}=await lt(v,o);ue(_),se(T)},J=()=>{n!=null&&(n.play(),f(!0))},X=()=>{n!=null&&(n.pause(),f(!1))},I=()=>{n!=null&&(n.ended||n.paused?(n.play(),f(!0)):(n.pause(),f(!1)))},L=()=>{n!=null&&(n.pause(),n.currentTime=0,f(!1))},$=v=>{if(n==null||isNaN(v))return;const _=v/100;n.volume=_,M(_*100)},ee=async()=>{try{const v=await navigator.mediaDevices.getUserMedia({audio:!0});Q(v);const _=m||new(window.AudioContext||window.webkitAudioContext);d(_);const T=_.createMediaStreamSource(v);H(T);const N=_.createAnalyser();x(N),T.connect(N),N.fftSize=o;const K=N.frequencyBinCount;A(K),Y(new Uint8Array(K))}catch(v){console.error("Error capturing microphone audio:",v)}},ie=()=>{k&&(k.getAudioTracks().forEach(v=>v.enabled=!1),h(!0))},B=()=>{k&&(k.getAudioTracks().forEach(v=>v.enabled=!0),h(!1))},O=()=>{k&&(k.getTracks().forEach(v=>v.stop()),Q(null)),m&&(m.close(),d(null),x(null),E(null),H(null),A(null),Y(null)),s&&V([])};return p.useEffect(()=>{a!==null&&(W(a),G(a))},[a]),p.useEffect(()=>(n!==null&&(n.addEventListener("ended",L),M(n.volume*100),setInterval(()=>{ae(n.currentTime)},100)),()=>{n!=null&&n.removeEventListener("ended",L)}),[n]),p.useEffect(()=>{if(!i)return;let v=g,_=P,T=m,N=C;m==null&&(T=new(window.AudioContext||window.webkitAudioContext),d(T)),g==null&&n!==null&&(v=T.createMediaElementSource(n),E(v)),P==null&&(_=T.createAnalyser(),x(_)),v&&(v.connect(_),v.connect(T.destination)),_.fftSize=o,N=_.frequencyBinCount,A(N),Y(new Uint8Array(N))},[i,a,o]),p.useEffect(()=>{const v=()=>{if(ne==null&&!i||u&&k!==null)return;P.getByteFrequencyData(U);const _=Be(U,m.sampleRate);_!==null&&V(_),requestAnimationFrame(v)};(U!==null||P!==null||m!==null)&&s&&v()},[U,i,P,u,m,k,ne,s]),{audioNode:n,audioContext:m,audioSource:g,isPlaying:i,play:J,pause:X,toggleAudio:I,stopAudio:L,setVolume:$,analyzer:P,bufferLength:C,dataArray:U,audioToBase64:Ye,captureMicrophone:ee,muteMicrophone:ie,unmuteMicrophone:B,stopMicrophone:O,microphoneSource:ne,mediaStream:k,isMute:u,audioFrequencyData:re,audioDuration:q,audioCurrentTime:fe,audioVolume:S,detectedNotes:oe}}function Ae({width:a,height:o}){const s=p.useRef(null),i=p.useRef(null);return p.useEffect(()=>{if(s==null)return;const u=s.current.getContext("2d");i.current=u},[s,a,o]),{Canvas:p.useCallback(({...u})=>c.jsx("canvas",{ref:s,width:a,height:o,...u}),[s,a,o]),canvasContext:i==null?void 0:i.current,canvasNode:s==null?void 0:s.current}}function ke({isPlaying:a,isMute:o,analyzer:s,bufferLength:i,dataArray:f,canvasNode:u,canvasContext:h,visualizer:n,barWidth:l=!1,barHeight:m=!1,x:d=0,color:g="white",colorFunction:E,audioDuration:C=0,type:A,audioNode:U}){if(A=="player"&&!a||A=="stream"&&o||s==null||i==null||f==null||u==null||h==null||!n)return;l||(l=u.width/i);function Y(){d=0,h.clearRect(0,0,u.width,u.height),s.getByteFrequencyData(f),n({barHeight:m,barWidth:l,canvasContext:h,x:d,color:g,colorFunction:E,audioDuration:C,dataArray:f,bufferLength:i,canvasNode:u,audioNode:U}),requestAnimationFrame(Y)}Y()}function Ve({audioFrequencyData:a,canvasNode:o,canvasContext:s,visualizer:i,barWidth:f=!1,barHeight:u=!1,x:h=0,color:n="white",colorFunction:l,audioDuration:m=0,audioNode:d}){if(a==null||!i)return;const g=Object.keys(a).length;f||(f=o.width/g),s.clearRect(0,0,o.width,o.height),i({dataArray:a,barHeight:u,barWidth:f,canvasContext:s,x:h,color:n,colorFunction:l,audioDuration:m,canvasNode:o,audioNode:d})}const We={barVisualizer:({barHeight:a,barWidth:o,canvasContext:s,x:i,color:f,colorFunction:u,dataArray:h,canvasNode:n})=>{if(h!=null)for(let l=0;l<(h==null?void 0:h.length);l++)a=n.height-Math.abs(h[l])/2,u&&(f=u({barHeight:a,barWidth:o,index:l,dataArray:h})),s.fillStyle=f,s.fillRect(i,n.height-a,o,a),i+=o}},Ge={barVisualizer:({barHeight:a,barWidth:o,canvasContext:s,x:i,color:f,colorFunction:u,audioDuration:h,dataArray:n,bufferLength:l,canvasNode:m})=>{for(let d=0;d<l;d++)a=Math.abs(n[d])/2.5,u&&(f=u({barHeight:a,barWidth:o,index:d,dataArray:n,audioDuration:h})),s.fillStyle=f,s.fillRect(i,m.height-a,o,a),i+=o}};function ft({dataArray:a,canvasNode:o,canvasContext:s,barWidth:i=!1,barHeight:f=!1,x:u=0,color:h="white",colorFunction:n=!1,audioDuration:l=0}){Ve({audioFrequencyData:a,canvasNode:o,canvasContext:s,visualizer:We.barVisualizer,barWidth:i,barHeight:f,x:u,color:h,colorFunction:n,audioDuration:l})}function Ee(a){if(typeof a!="number"||isNaN(a))throw new Error("Invalid input: Please provide a numeric value.");if(a<0)throw new Error("Invalid input: Time cannot be negative.");const o=Math.floor(a);if(o<60)return`${o}s`;if(o<3600){const s=Math.floor(o/60),i=o%60;return i>0?`${s}m ${i}s`:`${s}m`}else if(o<86400){const s=Math.floor(o/3600),i=Math.floor(o%3600/60);return i>0?`${s}h ${i}m`:`${s}h`}else{const s=Math.floor(o/86400),i=Math.floor(o%86400/3600);return i>0?`${s}d ${i}h`:`${s}d`}}function ct({src:a=null,clickableCanvas:o=!1,width:s=500,height:i=100,controls:f=!0,pauseButton:u="Pause",playButton:h="Play",dataCount:n=64,className:l="",controlsClassName:m="",constrolsStyle:d=!1,customVolume:g=!1,volumeControlStyle:E={},volumeControlClassName:C="",volumeLabelStyle:A={},volumeLabelClassName:U="",volumeLabelIndicator:Y="%",volumeLevel:P=!1,enableDuration:x=!1,durationClassName:k="",durationStyle:Q=!1,enableCurrentTime:ne=!1,currentTimeClassName:H="",currentTimeStyle:re=!1,hideVolume:ue=!0,disableVolume:q=!1,style:se=!1,canvasClassName:fe="",canvasStyle:ae=!1,toggleClassName:S="",toggleStyle:M=!1,stopButton:oe=!1,customStopButton:V=!1,barWidth:W=!1,barHeight:G=!1,horizontalOffset:J=0,color:X="black",colorFunction:I=!1,customVisualizer:L=!1,customFunction:$=!1}){const{isPlaying:ee,toggleAudio:ie,audioNode:B,audioDuration:O,audioCurrentTime:v,setVolume:_,audioVolume:T,stopAudio:N,audioFrequencyData:K}=Se(a,n),{Canvas:Re,canvasContext:ce,canvasNode:ve}=Ae({width:s,height:i}),[de,pe]=p.useState(Ee(v||0)),_e=()=>{if(V)return p.cloneElement(V,{onClick:N})},he=()=>{if(!g)return;const ye=p.cloneElement(g,{onChange:je=>{_(je.target.value)},value:T,min:0,max:100});return c.jsxs("div",{className:C||"",style:E||"",children:[ye,P?c.jsxs("p",{className:U||"",style:A||{},children:[parseInt(T).toFixed(0),Y]}):null]})};return p.useEffect(()=>{q&&_(0),L?Ve({audioFrequencyData:K,canvasNode:ve,canvasContext:ce,color:X,colorFunction:I,barWidth:W,barHeight:G,x:J,visualizer:L,audioDuration:O,audioNode:B}):ft({dataArray:K,canvasNode:ve,canvasContext:ce,color:X,colorFunction:I,barWidth:W,barHeight:G,x:J,audioDuration:O,audioNode:B})},[K,ve,ce,X,I,W,G,J,L,q,_,O,B]),p.useEffect(()=>{$&&$({audioNode:B,audioFrequencyData:K,audioDuration:O})},[$,B,K,O]),p.useEffect(()=>{v&&pe(Ee(v||0))},[v]),c.jsxs("div",{className:l||"",style:se||{},children:[c.jsx(Re,{onClick:o?ie:null,className:fe||"",style:ae||{}}),f?c.jsxs("div",{className:m||"",style:d||{},children:[c.jsx("button",{className:S||"",style:M||{},onClick:ie,children:ee?u:h}),oe?c.jsx(c.Fragment,{children:V?c.jsx(_e,{}):c.jsx("button",{onClick:N,children:"Stop"})}):null,ue?null:c.jsx(c.Fragment,{children:g?c.jsx(he,{}):c.jsxs(c.Fragment,{children:[c.jsx("input",{type:"range",min:0,max:100,value:T,onChange:ye=>{_(ye.target.value)}}),P?c.jsxs("p",{children:[parseInt(T).toFixed(0),"%"]}):null]})}),ne?c.jsx("p",{className:H||"",style:re||{},children:de}):null,x?c.jsx("p",{className:k||"",style:Q||{},children:Ee(O||0)}):null]}):null]})}function Je({isMute:a,isPlaying:o,analyzer:s,bufferLength:i,dataArray:f,canvasNode:u,canvasContext:h,barWidth:n=!1,barHeight:l=!1,x:m=0,color:d="black",colorFunction:g=!1,audioDuration:E=0,type:C}){ke({isMute:a,isPlaying:o,analyzer:s,bufferLength:i,dataArray:f,canvasNode:u,canvasContext:h,visualizer:Ge.barVisualizer,barHeight:l,barWidth:n,x:m,color:d,colorFunction:g,type:C,audioDuration:E})}function dt({src:a=null,clickableCanvas:o=!1,width:s=500,height:i=100,controls:f=!0,pauseButton:u="Pause",playButton:h="Play",dataCount:n=64,className:l="",controlsClassName:m="",constrolsStyle:d=!1,customVolume:g=!1,volumeControlStyle:E={},volumeControlClassName:C="",volumeLabelStyle:A={},volumeLabelClassName:U="",volumeLabelIndicator:Y="%",volumeLevel:P=!1,enableDuration:x=!1,durationClassName:k="",durationStyle:Q=!1,enableCurrentTime:ne=!1,currentTimeClassName:H="",currentTimeStyle:re=!1,hideVolume:ue=!0,disableVolume:q=!1,style:se=!1,canvasClassName:fe="",canvasStyle:ae=!1,toggleClassName:S="",toggleStyle:M=!1,stopButton:oe=!1,customStopButton:V=!1,barWidth:W=!1,barHeight:G=!1,horizontalOffset:J=0,color:X="black",colorFunction:I=!1,customVisualizer:L=!1,customFunction:$=!1}){const{isPlaying:ee,toggleAudio:ie,analyzer:B,bufferLength:O,dataArray:v,audioDuration:_,audioCurrentTime:T,setVolume:N,audioVolume:K,stopAudio:Re,audioNode:ce}=Se(a,n),{Canvas:ve,canvasContext:de,canvasNode:pe}=Ae({width:s,height:i}),[_e,he]=p.useState(Ee(T||0)),ye=()=>{if(V)return p.cloneElement(V,{onClick:Re})},je=()=>{if(!g)return;const me=p.cloneElement(g,{onChange:Oe=>{N(Oe.target.value)},value:K,min:0,max:100});return c.jsxs("div",{className:C||"",style:E||"",children:[me,P?c.jsxs("p",{className:U||"",style:A||{},children:[parseInt(K).toFixed(0),Y]}):null]})};return p.useEffect(()=>{q&&N(0),L?ke({isPlaying:ee,analyzer:B,bufferLength:O,dataArray:v,canvasNode:pe,canvasContext:de,color:X,colorFunction:I,barWidth:W,barHeight:G,x:J,visualizer:L,type:"player",audioDuration:_,audioNode:ce}):Je({isPlaying:ee,analyzer:B,bufferLength:O,dataArray:v,canvasNode:pe,canvasContext:de,color:X,colorFunction:I,barWidth:W,barHeight:G,x:J,type:"player",audioDuration:_,audioNode:ce})},[ee,B,O,v,pe,de,X,I,W,G,J,L,q,N,_,ce]),p.useEffect(()=>{$&&$({audioNode:ce,audioDuration:_,dataArray:v,bufferLength:O})},[$,ce,_,v,O]),p.useEffect(()=>{T&&he(Ee(T||0))},[T]),c.jsxs("div",{className:l||"",style:se||{},children:[c.jsx(ve,{onClick:o?ie:null,className:fe||"",style:ae||{}}),f?c.jsxs("div",{className:m||"",style:d||{},children:[c.jsx("button",{className:S||"",style:M||{},onClick:ie,children:ee?u:h}),oe?c.jsx(c.Fragment,{children:V?c.jsx(ye,{}):c.jsx("button",{onClick:Re,children:"Stop"})}):null,ue?null:c.jsx(c.Fragment,{children:g?c.jsx(je,{}):c.jsxs(c.Fragment,{children:[c.jsx("input",{type:"range",min:0,max:100,value:K,onChange:me=>{N(me.target.value)}}),P?c.jsxs("p",{children:[parseInt(K).toFixed(0),"%"]}):null]})}),ne?c.jsx("p",{className:H||"",style:re||{},children:_e}):null,x?c.jsx("p",{className:k||"",style:Q||{},children:Ee(_||0)}):null]}):null]})}function vt({clickableCanvas:a=!1,width:o=500,height:s=100,controls:i=!0,muteButton:f="Mute",unmuteButton:u="Unmute",dataCount:h=64,className:n="",controlsClassName:l="",constrolsStyle:m=!1,style:d=!1,canvasClassName:g="",canvasStyle:E=!1,toggleClassName:C="",toggleStyle:A=!1,stopButton:U=!0,customStopButton:Y=!1,startButton:P=!0,customStartButton:x=!1,barWidth:k=!1,barHeight:Q=!1,horizontalOffset:ne=0,color:H="black",colorFunction:re=!1,customVisualizer:ue=!1,customFunction:q=!1}){const[se,fe]=p.useState(!0),{captureMicrophone:ae,isMute:S,muteMicrophone:M,unmuteMicrophone:oe,stopMicrophone:V,analyzer:W,bufferLength:G,dataArray:J,audioNode:X,microphoneSource:I,mediaStream:L}=Se(null,h),{Canvas:$,canvasContext:ee,canvasNode:ie}=Ae({width:o,height:s}),B=()=>{if(Y)return p.cloneElement(Y,{onClick:V})},O=()=>{if(x)return p.cloneElement(x,{onClick:ae})};p.useEffect(()=>{ue?ke({isMute:S,analyzer:W,bufferLength:G,dataArray:J,canvasNode:ie,canvasContext:ee,color:H,colorFunction:re,barWidth:k,barHeight:Q,x:ne,visualizer:ue,type:"stream",audioNode:I}):Je({isMute:S,analyzer:W,bufferLength:G,dataArray:J,canvasNode:ie,canvasContext:ee,color:H,colorFunction:re,barWidth:k,barHeight:Q,x:ne,type:"stream",audioNode:I})},[S,W,G,J,ie,ee,H,re,k,Q,ne,ue,I]),p.useEffect(()=>{q&&q({audioNode:X,microphoneSource:I,mediaStream:L})},[q,X,I,L]);const v=()=>{fe(!se),!se?oe():M()};return c.jsxs("div",{className:n||"",style:d||{},children:[c.jsx($,{onClick:a?v:null,className:g||"",style:E||{}}),i?c.jsxs("div",{className:l||"",style:m||{},children:[P?c.jsx(c.Fragment,{children:x?c.jsx(O,{}):c.jsx("button",{onClick:ae,children:"Start"})}):null,c.jsx("button",{className:C||"",style:A||{},onClick:v,children:S?u:f}),U?c.jsx(c.Fragment,{children:Y?c.jsx(B,{}):c.jsx("button",{onClick:V,children:"Stop"})}):null]}):null]})}Z.Audio=ct,Z.AudioPlayer=dt,Z.AudioStream=vt,Z.animation_visuals=Ge,Z.detectNote=Be,Z.static_visuals=We,Z.useAudio=Se,Z.useCanvas=Ae,Object.defineProperty(Z,Symbol.toStringTag,{value:"Module"})});
