import rr, { useState as U, useEffect as se, useRef as Ze, useCallback as xr, cloneElement as be } from "react";
var Ne = { exports: {} }, Ae = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qe;
function br() {
  if (Qe) return Ae;
  Qe = 1;
  var a = rr, i = Symbol.for("react.element"), s = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, c = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(n, l, h) {
    var d, m = {}, g = null, j = null;
    h !== void 0 && (g = "" + h), l.key !== void 0 && (g = "" + l.key), l.ref !== void 0 && (j = l.ref);
    for (d in l) o.call(l, d) && !u.hasOwnProperty(d) && (m[d] = l[d]);
    if (n && n.defaultProps) for (d in l = n.defaultProps, l) m[d] === void 0 && (m[d] = l[d]);
    return { $$typeof: i, type: n, key: g, ref: j, props: m, _owner: c.current };
  }
  return Ae.Fragment = s, Ae.jsx = v, Ae.jsxs = v, Ae;
}
var Pe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He;
function wr() {
  return He || (He = 1, process.env.NODE_ENV !== "production" && function() {
    var a = rr, i = Symbol.for("react.element"), s = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), n = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), A = Symbol.iterator, q = "@@iterator";
    function Y(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = A && e[A] || e[q];
      return typeof r == "function" ? r : null;
    }
    var P = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), p = 1; p < r; p++)
          t[p - 1] = arguments[p];
        I("error", e, t);
      }
    }
    function I(e, r, t) {
      {
        var p = P.ReactDebugCurrentFrame, b = p.getStackAddendum();
        b !== "" && (r += "%s", t = t.concat([b]));
        var w = t.map(function(R) {
          return String(R);
        });
        w.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, w);
      }
    }
    var H = !1, K = !1, ee = !1, te = !1, ae = !1, re;
    re = Symbol.for("react.module.reference");
    function fe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === u || ae || e === c || e === h || e === d || te || e === j || H || K || ee || typeof e == "object" && e !== null && (e.$$typeof === g || e.$$typeof === m || e.$$typeof === v || e.$$typeof === n || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function ie(e, r, t) {
      var p = e.displayName;
      if (p)
        return p;
      var b = r.displayName || r.name || "";
      return b !== "" ? t + "(" + b + ")" : t;
    }
    function X(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case s:
          return "Portal";
        case u:
          return "Profiler";
        case c:
          return "StrictMode";
        case h:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case n:
            var r = e;
            return X(r) + ".Consumer";
          case v:
            var t = e;
            return X(t._context) + ".Provider";
          case l:
            return ie(e, e.render, "ForwardRef");
          case m:
            var p = e.displayName || null;
            return p !== null ? p : T(e.type) || "Memo";
          case g: {
            var b = e, w = b._payload, R = b._init;
            try {
              return T(R(w));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, B = 0, V, W, G, z, oe, D, C;
    function N() {
    }
    N.__reactDisabledLog = !0;
    function F() {
      {
        if (B === 0) {
          V = console.log, W = console.info, G = console.warn, z = console.error, oe = console.group, D = console.groupCollapsed, C = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: N,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        B++;
      }
    }
    function $() {
      {
        if (B--, B === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, e, {
              value: V
            }),
            info: O({}, e, {
              value: W
            }),
            warn: O({}, e, {
              value: G
            }),
            error: O({}, e, {
              value: z
            }),
            group: O({}, e, {
              value: oe
            }),
            groupCollapsed: O({}, e, {
              value: D
            }),
            groupEnd: O({}, e, {
              value: C
            })
          });
        }
        B < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Z = P.ReactCurrentDispatcher, L;
    function y(e, r, t) {
      {
        if (L === void 0)
          try {
            throw Error();
          } catch (b) {
            var p = b.stack.trim().match(/\n( *(at )?)/);
            L = p && p[1] || "";
          }
        return `
` + L + e;
      }
    }
    var _ = !1, k;
    {
      var J = typeof WeakMap == "function" ? WeakMap : Map;
      k = new J();
    }
    function ue(e, r) {
      if (!e || _)
        return "";
      {
        var t = k.get(e);
        if (t !== void 0)
          return t;
      }
      var p;
      _ = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var w;
      w = Z.current, Z.current = null, F();
      try {
        if (r) {
          var R = function() {
            throw Error();
          };
          if (Object.defineProperty(R.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(R, []);
            } catch (ne) {
              p = ne;
            }
            Reflect.construct(e, [], R);
          } else {
            try {
              R.call();
            } catch (ne) {
              p = ne;
            }
            e.call(R.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ne) {
            p = ne;
          }
          e();
        }
      } catch (ne) {
        if (ne && p && typeof ne.stack == "string") {
          for (var E = ne.stack.split(`
`), Q = p.stack.split(`
`), S = E.length - 1, M = Q.length - 1; S >= 1 && M >= 0 && E[S] !== Q[M]; )
            M--;
          for (; S >= 1 && M >= 0; S--, M--)
            if (E[S] !== Q[M]) {
              if (S !== 1 || M !== 1)
                do
                  if (S--, M--, M < 0 || E[S] !== Q[M]) {
                    var le = `
` + E[S].replace(" at new ", " at ");
                    return e.displayName && le.includes("<anonymous>") && (le = le.replace("<anonymous>", e.displayName)), typeof e == "function" && k.set(e, le), le;
                  }
                while (S >= 1 && M >= 0);
              break;
            }
        }
      } finally {
        _ = !1, Z.current = w, $(), Error.prepareStackTrace = b;
      }
      var _e = e ? e.displayName || e.name : "", ge = _e ? y(_e) : "";
      return typeof e == "function" && k.set(e, ge), ge;
    }
    function we(e, r, t) {
      return ue(e, !1);
    }
    function Te(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ce(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ue(e, Te(e));
      if (typeof e == "string")
        return y(e);
      switch (e) {
        case h:
          return y("Suspense");
        case d:
          return y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return we(e.render);
          case m:
            return ce(e.type, r, t);
          case g: {
            var p = e, b = p._payload, w = p._init;
            try {
              return ce(w(b), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var de = Object.prototype.hasOwnProperty, ve = {}, he = P.ReactDebugCurrentFrame;
    function pe(e) {
      if (e) {
        var r = e._owner, t = ce(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    function me(e, r, t, p, b) {
      {
        var w = Function.call.bind(de);
        for (var R in e)
          if (w(e, R)) {
            var E = void 0;
            try {
              if (typeof e[R] != "function") {
                var Q = Error((p || "React class") + ": " + t + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Q.name = "Invariant Violation", Q;
              }
              E = e[R](r, R, p, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              E = S;
            }
            E && !(E instanceof Error) && (pe(b), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", t, R, typeof E), pe(null)), E instanceof Error && !(E.message in ve) && (ve[E.message] = !0, pe(b), x("Failed %s type: %s", t, E.message), pe(null));
          }
      }
    }
    var Ee = Array.isArray;
    function ye(e) {
      return Ee(e);
    }
    function Ce(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Se(e) {
      try {
        return ke(e), !1;
      } catch {
        return !0;
      }
    }
    function ke(e) {
      return "" + e;
    }
    function qe(e) {
      if (Se(e))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ce(e)), ke(e);
    }
    var je = P.ReactCurrentOwner, ar = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Be, Ye, Oe;
    Oe = {};
    function ir(e) {
      if (de.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function or(e) {
      if (de.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function sr(e, r) {
      if (typeof e.ref == "string" && je.current && r && je.current.stateNode !== r) {
        var t = T(je.current.type);
        Oe[t] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(je.current.type), e.ref), Oe[t] = !0);
      }
    }
    function lr(e, r) {
      {
        var t = function() {
          Be || (Be = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ur(e, r) {
      {
        var t = function() {
          Ye || (Ye = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var cr = function(e, r, t, p, b, w, R) {
      var E = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: R,
        // Record the component responsible for creating this element.
        _owner: w
      };
      return E._store = {}, Object.defineProperty(E._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(E, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.defineProperty(E, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    };
    function fr(e, r, t, p, b) {
      {
        var w, R = {}, E = null, Q = null;
        t !== void 0 && (qe(t), E = "" + t), or(r) && (qe(r.key), E = "" + r.key), ir(r) && (Q = r.ref, sr(r, b));
        for (w in r)
          de.call(r, w) && !ar.hasOwnProperty(w) && (R[w] = r[w]);
        if (e && e.defaultProps) {
          var S = e.defaultProps;
          for (w in S)
            R[w] === void 0 && (R[w] = S[w]);
        }
        if (E || Q) {
          var M = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          E && lr(R, M), Q && ur(R, M);
        }
        return cr(e, E, Q, b, p, je.current, R);
      }
    }
    var De = P.ReactCurrentOwner, Ve = P.ReactDebugCurrentFrame;
    function Re(e) {
      if (e) {
        var r = e._owner, t = ce(e.type, e._source, r ? r.type : null);
        Ve.setExtraStackFrame(t);
      } else
        Ve.setExtraStackFrame(null);
    }
    var Fe;
    Fe = !1;
    function Me(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function We() {
      {
        if (De.current) {
          var e = T(De.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function dr(e) {
      return "";
    }
    var Ge = {};
    function vr(e) {
      {
        var r = We();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Je(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = vr(r);
        if (Ge[t])
          return;
        Ge[t] = !0;
        var p = "";
        e && e._owner && e._owner !== De.current && (p = " It was passed a child from " + T(e._owner.type) + "."), Re(e), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, p), Re(null);
      }
    }
    function Ke(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ye(e))
          for (var t = 0; t < e.length; t++) {
            var p = e[t];
            Me(p) && Je(p, r);
          }
        else if (Me(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var b = Y(e);
          if (typeof b == "function" && b !== e.entries)
            for (var w = b.call(e), R; !(R = w.next()).done; )
              Me(R.value) && Je(R.value, r);
        }
      }
    }
    function pr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === m))
          t = r.propTypes;
        else
          return;
        if (t) {
          var p = T(r);
          me(t, e.props, "prop", p, e);
        } else if (r.PropTypes !== void 0 && !Fe) {
          Fe = !0;
          var b = T(r);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var p = r[t];
          if (p !== "children" && p !== "key") {
            Re(e), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), Re(null);
            break;
          }
        }
        e.ref !== null && (Re(e), x("Invalid attribute `ref` supplied to `React.Fragment`."), Re(null));
      }
    }
    var Xe = {};
    function ze(e, r, t, p, b, w) {
      {
        var R = fe(e);
        if (!R) {
          var E = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Q = dr();
          Q ? E += Q : E += We();
          var S;
          e === null ? S = "null" : ye(e) ? S = "array" : e !== void 0 && e.$$typeof === i ? (S = "<" + (T(e.type) || "Unknown") + " />", E = " Did you accidentally export a JSX literal instead of a component?") : S = typeof e, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", S, E);
        }
        var M = fr(e, r, t, b, w);
        if (M == null)
          return M;
        if (R) {
          var le = r.children;
          if (le !== void 0)
            if (p)
              if (ye(le)) {
                for (var _e = 0; _e < le.length; _e++)
                  Ke(le[_e], e);
                Object.freeze && Object.freeze(le);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ke(le, e);
        }
        if (de.call(r, "key")) {
          var ge = T(e), ne = Object.keys(r).filter(function(_r) {
            return _r !== "key";
          }), Ie = ne.length > 0 ? "{key: someKey, " + ne.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Xe[ge + Ie]) {
            var Rr = ne.length > 0 ? "{" + ne.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ie, ge, Rr, ge), Xe[ge + Ie] = !0;
          }
        }
        return e === o ? hr(M) : pr(M), M;
      }
    }
    function yr(e, r, t) {
      return ze(e, r, t, !0);
    }
    function mr(e, r, t) {
      return ze(e, r, t, !1);
    }
    var gr = mr, Er = yr;
    Pe.Fragment = o, Pe.jsx = gr, Pe.jsxs = Er;
  }()), Pe;
}
process.env.NODE_ENV === "production" ? Ne.exports = br() : Ne.exports = wr();
var f = Ne.exports;
function Tr(a) {
  const i = 12 * (Math.log(a / 440) / Math.log(2));
  return Math.round(i) + 69;
}
function Cr(a) {
  return 440 * Math.pow(2, (a - 69) / 12);
}
function jr(a, i) {
  return Math.floor(1200 * Math.log(a / Cr(i)) / Math.log(2));
}
function Ar(a, i = 44100) {
  const s = a.length, o = 0.3, c = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  let u = new Float32Array(s), v = [];
  for (let n = 0; n < s; n++) {
    let l = 0;
    for (let h = 0; h < s - n; h++)
      l += (a[h] - 128) * (a[h + n] - 128);
    u[n] = l;
  }
  for (let n = 1; n < s - 1; n++)
    if (u[n] > o && u[n] > u[n - 1] && u[n] > u[n + 1]) {
      let l = n, h = u[n] / Math.max(...u);
      const d = i / l, m = Tr(d), g = c[m % 12], j = Math.floor((m - 12) / 12), A = jr(d, m);
      v.push({
        frequency: d.toFixed(2),
        pitch: `${g}${j}`,
        octave: j,
        confidence: h.toFixed(2),
        note: g,
        cents: A
      });
    }
  return v.length > 0 ? v : null;
}
async function er(a) {
  if (a instanceof File || a instanceof Blob)
    return new Promise((i, s) => {
      const o = new FileReader();
      o.onloadend = () => i(o.result), o.onerror = s, o.readAsDataURL(a);
    });
  try {
    const i = await fetch(a);
    if (!i.ok)
      throw new Error(`Failed to fetch the audio from URL: ${a}`);
    const s = await i.blob();
    return new Promise((o, c) => {
      const u = new FileReader();
      u.onloadend = () => o(u.result), u.onerror = c, u.readAsDataURL(s);
    });
  } catch (i) {
    return console.error("Error converting audio to Base64:", i), null;
  }
}
async function Pr(a, i) {
  let s;
  if (typeof a == "string")
    s = await (await fetch(a)).arrayBuffer();
  else if (a instanceof Blob || a instanceof File)
    s = await a.arrayBuffer();
  else
    throw new Error("Unsupported audio source type");
  const o = new (window.AudioContext || window.webkitAudioContext)(), c = await o.decodeAudioData(s), u = await kr(c, o, i), v = new OfflineAudioContext(
    c.numberOfChannels,
    c.length,
    c.sampleRate
  ), n = v.createBufferSource();
  n.buffer = c;
  const l = v.createAnalyser();
  l.fftSize = i || 2048, n.connect(l), l.connect(v.destination), n.start(), await v.startRendering();
  const h = l.frequencyBinCount, d = new Float32Array(h * Math.ceil(c.duration));
  for (let g = 0; g < Math.ceil(c.duration); g++)
    l.getFloatFrequencyData(d.subarray(g * h, (g + 1) * h));
  return d.some((g) => g !== -1 / 0) ? { dataArray: d, audioDuration: c.duration } : (console.warn("AnalyserNode data contains only -Infinity values. This may indicate an issue with the audio data or configuration."), u);
}
async function kr(a, i, s) {
  const o = i.createBufferSource();
  o.buffer = a;
  const c = i.createAnalyser();
  c.fftSize = s;
  const u = c.frequencyBinCount, v = new Float32Array(u);
  return o.connect(c), o.start(), o.playbackRate.value = 10, new Promise((n, l) => {
    let m = 0;
    function g() {
      c.getFloatFrequencyData(v), v.some((A) => A !== -1 / 0) || m >= 20 ? (o.stop(), n({ dataArray: v, audioDuration: a.duration })) : (m++, setTimeout(g, 100));
    }
    g();
  });
}
function $e(a, i = 64, s = !1) {
  const [o, c] = U(!1), [u, v] = U(!1), [n, l] = U(null), [h, d] = U(null), [m, g] = U(null), [j, A] = U(null), [q, Y] = U(null), [P, x] = U(null), [I, H] = U(null), [K, ee] = U(null), [te, ae] = U(null), [re, fe] = U(0), [ie, X] = U(0), [T, O] = U(0), [B, V] = U([]), W = async (y) => {
    l(new Audio(await er(y)));
  }, G = async (y) => {
    const { dataArray: _, audioDuration: k } = await Pr(y, i);
    ae(_), fe(k);
  }, z = () => {
    n != null && (n.play(), c(!0));
  }, oe = () => {
    n != null && (n.pause(), c(!1));
  }, D = () => {
    n != null && (n.ended || n.paused ? (n.play(), c(!0)) : (n.pause(), c(!1)));
  }, C = () => {
    n != null && (n.pause(), n.currentTime = 0, c(!1));
  }, N = (y) => {
    if (n == null || isNaN(y)) return;
    const _ = y / 100;
    n.volume = _, O(_ * 100);
  }, F = async () => {
    try {
      const y = await navigator.mediaDevices.getUserMedia({ audio: !0 });
      H(y);
      const _ = h || new (window.AudioContext || window.webkitAudioContext)();
      d(_);
      const k = _.createMediaStreamSource(y);
      ee(k);
      const J = _.createAnalyser();
      x(J), k.connect(J), J.fftSize = i;
      const ue = J.frequencyBinCount;
      A(ue), Y(new Uint8Array(ue));
    } catch (y) {
      console.error("Error capturing microphone audio:", y);
    }
  }, $ = () => {
    I && (I.getAudioTracks().forEach((y) => y.enabled = !1), v(!0));
  }, Z = () => {
    I && (I.getAudioTracks().forEach((y) => y.enabled = !0), v(!1));
  }, L = () => {
    I && (I.getTracks().forEach((y) => y.stop()), H(null)), h && (h.close(), d(null), x(null), g(null), ee(null), A(null), Y(null)), s && V([]);
  };
  return se(() => {
    a !== null && (W(a), G(a));
  }, [a]), se(() => (n !== null && (n.addEventListener("ended", C), O(n.volume * 100), setInterval(() => {
    X(n.currentTime);
  }, 100)), () => {
    n != null && n.removeEventListener("ended", C);
  }), [n]), se(() => {
    if (!o) return;
    let y = m, _ = P, k = h, J = j;
    h == null && (k = new (window.AudioContext || window.webkitAudioContext)(), d(k)), m == null && n !== null && (y = k.createMediaElementSource(n), g(y)), P == null && (_ = k.createAnalyser(), x(_)), y && (y.connect(_), y.connect(k.destination)), _.fftSize = i, J = _.frequencyBinCount, A(J), Y(new Uint8Array(J));
  }, [o, a, i]), se(() => {
    const y = () => {
      if (K == null && !o || u && I !== null) return;
      P.getByteFrequencyData(q);
      const _ = Ar(q, h.sampleRate);
      _ !== null && V(_), requestAnimationFrame(y);
    };
    (q !== null || P !== null || h !== null) && s && y();
  }, [q, o, P, u, h, I, K, s]), {
    audioNode: n,
    audioContext: h,
    audioSource: m,
    isPlaying: o,
    play: z,
    pause: oe,
    toggleAudio: D,
    stopAudio: C,
    setVolume: N,
    analyzer: P,
    bufferLength: j,
    dataArray: q,
    audioToBase64: er,
    captureMicrophone: F,
    muteMicrophone: $,
    unmuteMicrophone: Z,
    stopMicrophone: L,
    microphoneSource: K,
    mediaStream: I,
    isMute: u,
    audioFrequencyData: te,
    audioDuration: re,
    audioCurrentTime: ie,
    audioVolume: T,
    detectedNotes: B
  };
}
function Le({ width: a, height: i }) {
  const s = Ze(null), o = Ze(null);
  return se(() => {
    if (s == null) return;
    const u = s.current.getContext("2d");
    o.current = u;
  }, [s, a, i]), { Canvas: xr(({ ...u }) => /* @__PURE__ */ f.jsx("canvas", { ref: s, width: a, height: i, ...u }), [s, a, i]), canvasContext: o == null ? void 0 : o.current, canvasNode: s == null ? void 0 : s.current };
}
function Ue({
  isPlaying: a,
  isMute: i,
  analyzer: s,
  bufferLength: o,
  dataArray: c,
  canvasNode: u,
  canvasContext: v,
  visualizer: n,
  barWidth: l = !1,
  barHeight: h = !1,
  x: d = 0,
  color: m = "white",
  colorFunction: g,
  audioDuration: j = 0,
  type: A,
  audioNode: q
}) {
  if (A == "player" && !a || A == "stream" && i || s == null || o == null || c == null || u == null || v == null || !n) return;
  l || (l = u.width / o);
  function Y() {
    d = 0, v.clearRect(0, 0, u.width, u.height), s.getByteFrequencyData(c), n({
      barHeight: h,
      barWidth: l,
      canvasContext: v,
      x: d,
      color: m,
      colorFunction: g,
      audioDuration: j,
      dataArray: c,
      bufferLength: o,
      canvasNode: u,
      audioNode: q
    }), requestAnimationFrame(Y);
  }
  Y();
}
function nr({
  audioFrequencyData: a,
  canvasNode: i,
  canvasContext: s,
  visualizer: o,
  barWidth: c = !1,
  barHeight: u = !1,
  x: v = 0,
  color: n = "white",
  colorFunction: l,
  audioDuration: h = 0,
  audioNode: d
}) {
  if (a == null || !o) return;
  const m = Object.keys(a).length;
  c || (c = i.width / m), s.clearRect(0, 0, i.width, i.height), o({
    dataArray: a,
    barHeight: u,
    barWidth: c,
    canvasContext: s,
    x: v,
    color: n,
    colorFunction: l,
    audioDuration: h,
    canvasNode: i,
    audioNode: d
  });
}
const Sr = {
  barVisualizer: ({
    barHeight: a,
    barWidth: i,
    canvasContext: s,
    x: o,
    color: c,
    colorFunction: u,
    dataArray: v,
    canvasNode: n
  }) => {
    if (v != null)
      for (let l = 0; l < (v == null ? void 0 : v.length); l++)
        a = n.height - Math.abs(v[l]) / 2, u && (c = u({ barHeight: a, barWidth: i, index: l, dataArray: v })), s.fillStyle = c, s.fillRect(
          o,
          n.height - a,
          i,
          a
        ), o += i;
  }
}, Or = {
  barVisualizer: ({
    barHeight: a,
    barWidth: i,
    canvasContext: s,
    x: o,
    color: c,
    colorFunction: u,
    audioDuration: v,
    dataArray: n,
    bufferLength: l,
    canvasNode: h
  }) => {
    for (let d = 0; d < l; d++)
      a = Math.abs(n[d]) / 2.5, u && (c = u({
        barHeight: a,
        barWidth: i,
        index: d,
        dataArray: n,
        audioDuration: v
      })), s.fillStyle = c, s.fillRect(
        o,
        h.height - a,
        i,
        a
      ), o += i;
  }
};
function Dr({
  dataArray: a,
  canvasNode: i,
  canvasContext: s,
  barWidth: o = !1,
  barHeight: c = !1,
  x: u = 0,
  color: v = "white",
  colorFunction: n = !1,
  audioDuration: l = 0
}) {
  nr({
    audioFrequencyData: a,
    canvasNode: i,
    canvasContext: s,
    visualizer: Sr.barVisualizer,
    barWidth: o,
    barHeight: c,
    x: u,
    color: v,
    colorFunction: n,
    audioDuration: l
  });
}
function xe(a) {
  if (typeof a != "number" || isNaN(a))
    throw new Error("Invalid input: Please provide a numeric value.");
  if (a < 0)
    throw new Error("Invalid input: Time cannot be negative.");
  const i = Math.floor(a);
  if (i < 60)
    return `${i}s`;
  if (i < 3600) {
    const s = Math.floor(i / 60), o = i % 60;
    return o > 0 ? `${s}m ${o}s` : `${s}m`;
  } else if (i < 86400) {
    const s = Math.floor(i / 3600), o = Math.floor(i % 3600 / 60);
    return o > 0 ? `${s}h ${o}m` : `${s}h`;
  } else {
    const s = Math.floor(i / 86400), o = Math.floor(i % 86400 / 3600);
    return o > 0 ? `${s}d ${o}h` : `${s}d`;
  }
}
function Mr({
  src: a = null,
  clickableCanvas: i = !1,
  width: s = 500,
  height: o = 100,
  controls: c = !0,
  pauseButton: u = "Pause",
  playButton: v = "Play",
  dataCount: n = 64,
  className: l = "",
  controlsClassName: h = "",
  constrolsStyle: d = !1,
  customVolume: m = !1,
  volumeLevel: g = !1,
  enableDuration: j = !1,
  durationClassName: A = "",
  durationStyle: q = !1,
  enableCurrentTime: Y = !1,
  currentTimeClassName: P = "",
  currentTimeStyle: x = !1,
  hideVolume: I = !0,
  disableVolume: H = !1,
  style: K = !1,
  canvasClassName: ee = "",
  canvasStyle: te = !1,
  toggleClassName: ae = "",
  toggleStyle: re = !1,
  stopButton: fe = !1,
  customStopButton: ie = !1,
  barWidth: X = !1,
  barHeight: T = !1,
  horizontalOffset: O = 0,
  color: B = "black",
  colorFunction: V = !1,
  customVisualizer: W = !1,
  customFunction: G = !1
}) {
  const {
    isPlaying: z,
    toggleAudio: oe,
    audioNode: D,
    audioDuration: C,
    audioCurrentTime: N,
    setVolume: F,
    audioVolume: $,
    stopAudio: Z,
    audioFrequencyData: L
  } = $e(a, n), { Canvas: y, canvasContext: _, canvasNode: k } = Le({
    width: s,
    height: o
  }), [J, ue] = U(xe(N || 0)), we = () => {
    if (ie)
      return be(ie, {
        onClick: Z
      });
  }, Te = ({ className: ce, style: de, volumeClassName: ve, volumeStyle: he, labelClassName: pe, labelStyle: me, labelIndicator: Ee = "%" }) => {
    if (!m) return;
    const ye = be(m, {
      onChange: (Ce) => {
        F(Ce.target.value);
      },
      value: $,
      min: 0,
      max: 100,
      className: ve || "",
      style: he || {}
    });
    return /* @__PURE__ */ f.jsxs("div", { className: ce || "", style: de || "", children: [
      ye,
      g ? /* @__PURE__ */ f.jsxs(
        "p",
        {
          className: pe || "",
          style: me || {},
          children: [
            parseInt($).toFixed(0),
            Ee
          ]
        }
      ) : null
    ] });
  };
  return se(() => {
    H && F(0), W ? nr({
      audioFrequencyData: L,
      canvasNode: k,
      canvasContext: _,
      color: B,
      colorFunction: V,
      barWidth: X,
      barHeight: T,
      x: O,
      visualizer: W,
      audioDuration: C,
      audioNode: D
    }) : Dr({
      dataArray: L,
      canvasNode: k,
      canvasContext: _,
      color: B,
      colorFunction: V,
      barWidth: X,
      barHeight: T,
      x: O,
      audioDuration: C,
      audioNode: D
    });
  }, [
    L,
    k,
    _,
    B,
    V,
    X,
    T,
    O,
    W,
    H,
    F,
    C,
    D
  ]), se(() => {
    G && G({ audioNode: D, audioFrequencyData: L, audioDuration: C });
  }, [G, D, L, C]), se(() => {
    N && ue(xe(N || 0));
  }, [N]), /* @__PURE__ */ f.jsxs("div", { className: l || "", style: K || {}, children: [
    /* @__PURE__ */ f.jsx(
      y,
      {
        onClick: i ? oe : null,
        className: ee || "",
        style: te || {}
      }
    ),
    c ? /* @__PURE__ */ f.jsxs("div", { className: h || "", style: d || {}, children: [
      /* @__PURE__ */ f.jsx(
        "button",
        {
          className: ae || "",
          style: re || {},
          onClick: oe,
          children: z ? u : v
        }
      ),
      fe ? /* @__PURE__ */ f.jsx(f.Fragment, { children: ie ? /* @__PURE__ */ f.jsx(we, {}) : /* @__PURE__ */ f.jsx("button", { onClick: Z, children: "Stop" }) }) : null,
      I ? null : /* @__PURE__ */ f.jsx(f.Fragment, { children: m ? /* @__PURE__ */ f.jsx(Te, {}) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
        /* @__PURE__ */ f.jsx("input", { type: "range", min: 0, max: 100, value: $, onChange: (ce) => {
          F(ce.target.value);
        } }),
        g ? /* @__PURE__ */ f.jsxs("p", { children: [
          parseInt($).toFixed(0),
          "%"
        ] }) : null
      ] }) }),
      Y ? /* @__PURE__ */ f.jsx(
        "p",
        {
          className: P || "",
          style: x || {},
          children: J
        }
      ) : null,
      j ? /* @__PURE__ */ f.jsx(
        "p",
        {
          className: A || "",
          style: q || {},
          children: xe(C || 0)
        }
      ) : null
    ] }) : null
  ] });
}
function tr({
  isMute: a,
  isPlaying: i,
  analyzer: s,
  bufferLength: o,
  dataArray: c,
  canvasNode: u,
  canvasContext: v,
  barWidth: n = !1,
  barHeight: l = !1,
  x: h = 0,
  color: d = "black",
  colorFunction: m = !1,
  audioDuration: g = 0,
  type: j
}) {
  Ue({
    isMute: a,
    isPlaying: i,
    analyzer: s,
    bufferLength: o,
    dataArray: c,
    canvasNode: u,
    canvasContext: v,
    visualizer: Or.barVisualizer,
    barHeight: l,
    barWidth: n,
    x: h,
    color: d,
    colorFunction: m,
    type: j,
    audioDuration: g
  });
}
function Ir({
  src: a = null,
  clickableCanvas: i = !1,
  width: s = 500,
  height: o = 100,
  controls: c = !0,
  pauseButton: u = "Pause",
  playButton: v = "Play",
  dataCount: n = 64,
  className: l = "",
  controlsClassName: h = "",
  constrolsStyle: d = !1,
  customVolume: m = !1,
  volumeLevel: g = !1,
  enableDuration: j = !1,
  durationClassName: A = "",
  durationStyle: q = !1,
  enableCurrentTime: Y = !1,
  currentTimeClassName: P = "",
  currentTimeStyle: x = !1,
  hideVolume: I = !0,
  disableVolume: H = !1,
  style: K = !1,
  canvasClassName: ee = "",
  canvasStyle: te = !1,
  toggleClassName: ae = "",
  toggleStyle: re = !1,
  stopButton: fe = !1,
  customStopButton: ie = !1,
  barWidth: X = !1,
  barHeight: T = !1,
  horizontalOffset: O = 0,
  color: B = "black",
  colorFunction: V = !1,
  customVisualizer: W = !1,
  customFunction: G = !1
}) {
  const {
    isPlaying: z,
    toggleAudio: oe,
    analyzer: D,
    bufferLength: C,
    dataArray: N,
    audioDuration: F,
    audioCurrentTime: $,
    setVolume: Z,
    audioVolume: L,
    stopAudio: y,
    audioNode: _
  } = $e(a, n), { Canvas: k, canvasContext: J, canvasNode: ue } = Le({
    width: s,
    height: o
  }), [we, Te] = U(xe($ || 0)), ce = () => {
    if (ie)
      return be(ie, {
        onClick: y
      });
  }, de = ({ className: ve, style: he, volumeClassName: pe, volumeStyle: me, labelClassName: Ee, labelStyle: ye, labelIndicator: Ce = "%" }) => {
    if (!m) return;
    const Se = be(m, {
      onChange: (ke) => {
        Z(ke.target.value);
      },
      value: L,
      min: 0,
      max: 100,
      className: pe || "",
      style: me || {}
    });
    return /* @__PURE__ */ f.jsxs("div", { className: ve || "", style: he || "", children: [
      Se,
      g ? /* @__PURE__ */ f.jsxs(
        "p",
        {
          className: Ee || "",
          style: ye || {},
          children: [
            parseInt(L).toFixed(0),
            Ce
          ]
        }
      ) : null
    ] });
  };
  return se(() => {
    H && Z(0), W ? Ue({
      isPlaying: z,
      analyzer: D,
      bufferLength: C,
      dataArray: N,
      canvasNode: ue,
      canvasContext: J,
      color: B,
      colorFunction: V,
      barWidth: X,
      barHeight: T,
      x: O,
      visualizer: W,
      type: "player",
      audioDuration: F,
      audioNode: _
    }) : tr({
      isPlaying: z,
      analyzer: D,
      bufferLength: C,
      dataArray: N,
      canvasNode: ue,
      canvasContext: J,
      color: B,
      colorFunction: V,
      barWidth: X,
      barHeight: T,
      x: O,
      type: "player",
      audioDuration: F,
      audioNode: _
    });
  }, [
    z,
    D,
    C,
    N,
    ue,
    J,
    B,
    V,
    X,
    T,
    O,
    W,
    H,
    Z,
    F,
    _
  ]), se(() => {
    G && G({ audioNode: _, audioDuration: F, dataArray: N, bufferLength: C });
  }, [G, _, F, N, C]), se(() => {
    $ && Te(xe($ || 0));
  }, [$]), /* @__PURE__ */ f.jsxs("div", { className: l || "", style: K || {}, children: [
    /* @__PURE__ */ f.jsx(
      k,
      {
        onClick: i ? oe : null,
        className: ee || "",
        style: te || {}
      }
    ),
    c ? /* @__PURE__ */ f.jsxs("div", { className: h || "", style: d || {}, children: [
      /* @__PURE__ */ f.jsx(
        "button",
        {
          className: ae || "",
          style: re || {},
          onClick: oe,
          children: z ? u : v
        }
      ),
      fe ? /* @__PURE__ */ f.jsx(f.Fragment, { children: ie ? /* @__PURE__ */ f.jsx(ce, {}) : /* @__PURE__ */ f.jsx("button", { onClick: y, children: "Stop" }) }) : null,
      I ? null : /* @__PURE__ */ f.jsx(f.Fragment, { children: m ? /* @__PURE__ */ f.jsx(de, {}) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
        /* @__PURE__ */ f.jsx("input", { type: "range", min: 0, max: 100, value: L, onChange: (ve) => {
          Z(ve.target.value);
        } }),
        g ? /* @__PURE__ */ f.jsxs("p", { children: [
          parseInt(L).toFixed(0),
          "%"
        ] }) : null
      ] }) }),
      Y ? /* @__PURE__ */ f.jsx(
        "p",
        {
          className: P || "",
          style: x || {},
          children: we
        }
      ) : null,
      j ? /* @__PURE__ */ f.jsx(
        "p",
        {
          className: A || "",
          style: q || {},
          children: xe(F || 0)
        }
      ) : null
    ] }) : null
  ] });
}
function Nr({
  clickableCanvas: a = !1,
  width: i = 500,
  height: s = 100,
  controls: o = !0,
  muteButton: c = "Mute",
  unmuteButton: u = "Unmute",
  dataCount: v = 64,
  className: n = "",
  controlsClassName: l = "",
  constrolsStyle: h = !1,
  style: d = !1,
  canvasClassName: m = "",
  canvasStyle: g = !1,
  toggleClassName: j = "",
  toggleStyle: A = !1,
  stopButton: q = !0,
  customStopButton: Y = !1,
  startButton: P = !0,
  customStartButton: x = !1,
  barWidth: I = !1,
  barHeight: H = !1,
  horizontalOffset: K = 0,
  color: ee = "black",
  colorFunction: te = !1,
  customVisualizer: ae = !1,
  customFunction: re = !1
}) {
  const [fe, ie] = U(!0), {
    captureMicrophone: X,
    isMute: T,
    muteMicrophone: O,
    unmuteMicrophone: B,
    stopMicrophone: V,
    analyzer: W,
    bufferLength: G,
    dataArray: z,
    audioNode: oe,
    microphoneSource: D,
    mediaStream: C
  } = $e(null, v), { Canvas: N, canvasContext: F, canvasNode: $ } = Le({
    width: i,
    height: s
  }), Z = () => {
    if (Y)
      return be(Y, {
        onClick: V
      });
  }, L = () => {
    if (x)
      return be(x, {
        onClick: X
      });
  };
  se(() => {
    ae ? Ue({
      isMute: T,
      analyzer: W,
      bufferLength: G,
      dataArray: z,
      canvasNode: $,
      canvasContext: F,
      color: ee,
      colorFunction: te,
      barWidth: I,
      barHeight: H,
      x: K,
      visualizer: ae,
      type: "stream",
      audioNode: D
    }) : tr({
      isMute: T,
      analyzer: W,
      bufferLength: G,
      dataArray: z,
      canvasNode: $,
      canvasContext: F,
      color: ee,
      colorFunction: te,
      barWidth: I,
      barHeight: H,
      x: K,
      type: "stream",
      audioNode: D
    });
  }, [
    T,
    W,
    G,
    z,
    $,
    F,
    ee,
    te,
    I,
    H,
    K,
    ae,
    D
  ]), se(() => {
    re && re({ audioNode: oe, microphoneSource: D, mediaStream: C });
  }, [re, oe, D, C]);
  const y = () => {
    ie(!fe), !fe ? B() : O();
  };
  return /* @__PURE__ */ f.jsxs("div", { className: n || "", style: d || {}, children: [
    /* @__PURE__ */ f.jsx(
      N,
      {
        onClick: a ? y : null,
        className: m || "",
        style: g || {}
      }
    ),
    o ? /* @__PURE__ */ f.jsxs("div", { className: l || "", style: h || {}, children: [
      P ? /* @__PURE__ */ f.jsx(f.Fragment, { children: x ? /* @__PURE__ */ f.jsx(L, {}) : /* @__PURE__ */ f.jsx("button", { onClick: X, children: "Start" }) }) : null,
      /* @__PURE__ */ f.jsx(
        "button",
        {
          className: j || "",
          style: A || {},
          onClick: y,
          children: T ? u : c
        }
      ),
      q ? /* @__PURE__ */ f.jsx(f.Fragment, { children: Y ? /* @__PURE__ */ f.jsx(Z, {}) : /* @__PURE__ */ f.jsx("button", { onClick: V, children: "Stop" }) }) : null
    ] }) : null
  ] });
}
export {
  Mr as Audio,
  Ir as AudioPlayer,
  Nr as AudioStream,
  Or as animation_visuals,
  Ar as detectNote,
  Sr as static_visuals,
  $e as useAudio,
  Le as useCanvas
};
