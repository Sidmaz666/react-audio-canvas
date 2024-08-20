import er, { useState as B, useEffect as ce, useRef as ze, useCallback as xr, cloneElement as xe } from "react";
var De = { exports: {} }, je = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ze;
function br() {
  if (Ze) return je;
  Ze = 1;
  var a = er, i = Symbol.for("react.element"), o = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, d = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(n, u, p) {
    var c, E = {}, w = null, T = null;
    p !== void 0 && (w = "" + p), u.key !== void 0 && (w = "" + u.key), u.ref !== void 0 && (T = u.ref);
    for (c in u) s.call(u, c) && !l.hasOwnProperty(c) && (E[c] = u[c]);
    if (n && n.defaultProps) for (c in u = n.defaultProps, u) E[c] === void 0 && (E[c] = u[c]);
    return { $$typeof: i, type: n, key: w, ref: T, props: E, _owner: d.current };
  }
  return je.Fragment = o, je.jsx = h, je.jsxs = h, je;
}
var Te = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qe;
function wr() {
  return Qe || (Qe = 1, process.env.NODE_ENV !== "production" && function() {
    var a = er, i = Symbol.for("react.element"), o = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), n = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), O = Symbol.iterator, I = "@@iterator";
    function ne(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = O && e[O] || e[I];
      return typeof r == "function" ? r : null;
    }
    var A = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), v = 1; v < r; v++)
          t[v - 1] = arguments[v];
        D("error", e, t);
      }
    }
    function D(e, r, t) {
      {
        var v = A.ReactDebugCurrentFrame, R = v.getStackAddendum();
        R !== "" && (r += "%s", t = t.concat([R]));
        var b = t.map(function(g) {
          return String(g);
        });
        b.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, b);
      }
    }
    var Z = !1, V = !1, Q = !1, te = !1, ae = !1, H;
    H = Symbol.for("react.module.reference");
    function de(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === l || ae || e === d || e === p || e === c || te || e === T || Z || V || Q || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === E || e.$$typeof === h || e.$$typeof === n || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === H || e.getModuleId !== void 0));
    }
    function ie(e, r, t) {
      var v = e.displayName;
      if (v)
        return v;
      var R = r.displayName || r.name || "";
      return R !== "" ? t + "(" + R + ")" : t;
    }
    function W(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case o:
          return "Portal";
        case l:
          return "Profiler";
        case d:
          return "StrictMode";
        case p:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case n:
            var r = e;
            return W(r) + ".Consumer";
          case h:
            var t = e;
            return W(t._context) + ".Provider";
          case u:
            return ie(e, e.render, "ForwardRef");
          case E:
            var v = e.displayName || null;
            return v !== null ? v : C(e.type) || "Memo";
          case w: {
            var R = e, b = R._payload, g = R._init;
            try {
              return C(g(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, N = 0, U, L, Y, G, oe, ee, j;
    function J() {
    }
    J.__reactDisabledLog = !0;
    function F() {
      {
        if (N === 0) {
          U = console.log, L = console.info, Y = console.warn, G = console.error, oe = console.group, ee = console.groupCollapsed, j = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: J,
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
        N++;
      }
    }
    function K() {
      {
        if (N--, N === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: U
            }),
            info: S({}, e, {
              value: L
            }),
            warn: S({}, e, {
              value: Y
            }),
            error: S({}, e, {
              value: G
            }),
            group: S({}, e, {
              value: oe
            }),
            groupCollapsed: S({}, e, {
              value: ee
            }),
            groupEnd: S({}, e, {
              value: j
            })
          });
        }
        N < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = A.ReactCurrentDispatcher, $;
    function y(e, r, t) {
      {
        if ($ === void 0)
          try {
            throw Error();
          } catch (R) {
            var v = R.stack.trim().match(/\n( *(at )?)/);
            $ = v && v[1] || "";
          }
        return `
` + $ + e;
      }
    }
    var x = !1, P;
    {
      var q = typeof WeakMap == "function" ? WeakMap : Map;
      P = new q();
    }
    function ue(e, r) {
      if (!e || x)
        return "";
      {
        var t = P.get(e);
        if (t !== void 0)
          return t;
      }
      var v;
      x = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = X.current, X.current = null, F();
      try {
        if (r) {
          var g = function() {
            throw Error();
          };
          if (Object.defineProperty(g.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(g, []);
            } catch (re) {
              v = re;
            }
            Reflect.construct(e, [], g);
          } else {
            try {
              g.call();
            } catch (re) {
              v = re;
            }
            e.call(g.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (re) {
            v = re;
          }
          e();
        }
      } catch (re) {
        if (re && v && typeof re.stack == "string") {
          for (var m = re.stack.split(`
`), z = v.stack.split(`
`), k = m.length - 1, M = z.length - 1; k >= 1 && M >= 0 && m[k] !== z[M]; )
            M--;
          for (; k >= 1 && M >= 0; k--, M--)
            if (m[k] !== z[M]) {
              if (k !== 1 || M !== 1)
                do
                  if (k--, M--, M < 0 || m[k] !== z[M]) {
                    var le = `
` + m[k].replace(" at new ", " at ");
                    return e.displayName && le.includes("<anonymous>") && (le = le.replace("<anonymous>", e.displayName)), typeof e == "function" && P.set(e, le), le;
                  }
                while (k >= 1 && M >= 0);
              break;
            }
        }
      } finally {
        x = !1, X.current = b, K(), Error.prepareStackTrace = R;
      }
      var Re = e ? e.displayName || e.name : "", me = Re ? y(Re) : "";
      return typeof e == "function" && P.set(e, me), me;
    }
    function pe(e, r, t) {
      return ue(e, !1);
    }
    function ge(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function se(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ue(e, ge(e));
      if (typeof e == "string")
        return y(e);
      switch (e) {
        case p:
          return y("Suspense");
        case c:
          return y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return pe(e.render);
          case E:
            return se(e.type, r, t);
          case w: {
            var v = e, R = v._payload, b = v._init;
            try {
              return se(b(R), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var fe = Object.prototype.hasOwnProperty, he = {}, ye = A.ReactDebugCurrentFrame;
    function ve(e) {
      if (e) {
        var r = e._owner, t = se(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    function Ee(e, r, t, v, R) {
      {
        var b = Function.call.bind(fe);
        for (var g in e)
          if (b(e, g)) {
            var m = void 0;
            try {
              if (typeof e[g] != "function") {
                var z = Error((v || "React class") + ": " + t + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              m = e[g](r, g, v, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (k) {
              m = k;
            }
            m && !(m instanceof Error) && (ve(R), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", t, g, typeof m), ve(null)), m instanceof Error && !(m.message in he) && (he[m.message] = !0, ve(R), _("Failed %s type: %s", t, m.message), ve(null));
          }
      }
    }
    var be = Array.isArray;
    function we(e) {
      return be(e);
    }
    function Pe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function tr(e) {
      try {
        return Ue(e), !1;
      } catch {
        return !0;
      }
    }
    function Ue(e) {
      return "" + e;
    }
    function Le(e) {
      if (tr(e))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Pe(e)), Ue(e);
    }
    var Ce = A.ReactCurrentOwner, ar = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ye, qe, ke;
    ke = {};
    function ir(e) {
      if (fe.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function or(e) {
      if (fe.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function sr(e, r) {
      if (typeof e.ref == "string" && Ce.current && r && Ce.current.stateNode !== r) {
        var t = C(Ce.current.type);
        ke[t] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(Ce.current.type), e.ref), ke[t] = !0);
      }
    }
    function lr(e, r) {
      {
        var t = function() {
          Ye || (Ye = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          qe || (qe = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var fr = function(e, r, t, v, R, b, g) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: g,
        // Record the component responsible for creating this element.
        _owner: b
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function cr(e, r, t, v, R) {
      {
        var b, g = {}, m = null, z = null;
        t !== void 0 && (Le(t), m = "" + t), or(r) && (Le(r.key), m = "" + r.key), ir(r) && (z = r.ref, sr(r, R));
        for (b in r)
          fe.call(r, b) && !ar.hasOwnProperty(b) && (g[b] = r[b]);
        if (e && e.defaultProps) {
          var k = e.defaultProps;
          for (b in k)
            g[b] === void 0 && (g[b] = k[b]);
        }
        if (m || z) {
          var M = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && lr(g, M), z && ur(g, M);
        }
        return fr(e, m, z, R, v, Ce.current, g);
      }
    }
    var Oe = A.ReactCurrentOwner, Be = A.ReactDebugCurrentFrame;
    function _e(e) {
      if (e) {
        var r = e._owner, t = se(e.type, e._source, r ? r.type : null);
        Be.setExtraStackFrame(t);
      } else
        Be.setExtraStackFrame(null);
    }
    var Se;
    Se = !1;
    function Fe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function Ve() {
      {
        if (Oe.current) {
          var e = C(Oe.current.type);
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
    var We = {};
    function vr(e) {
      {
        var r = Ve();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ge(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = vr(r);
        if (We[t])
          return;
        We[t] = !0;
        var v = "";
        e && e._owner && e._owner !== Oe.current && (v = " It was passed a child from " + C(e._owner.type) + "."), _e(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, v), _e(null);
      }
    }
    function Je(e, r) {
      {
        if (typeof e != "object")
          return;
        if (we(e))
          for (var t = 0; t < e.length; t++) {
            var v = e[t];
            Fe(v) && Ge(v, r);
          }
        else if (Fe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var R = ne(e);
          if (typeof R == "function" && R !== e.entries)
            for (var b = R.call(e), g; !(g = b.next()).done; )
              Fe(g.value) && Ge(g.value, r);
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
        else if (typeof r == "object" && (r.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var v = C(r);
          Ee(t, e.props, "prop", v, e);
        } else if (r.PropTypes !== void 0 && !Se) {
          Se = !0;
          var R = C(r);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var v = r[t];
          if (v !== "children" && v !== "key") {
            _e(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), _e(null);
            break;
          }
        }
        e.ref !== null && (_e(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), _e(null));
      }
    }
    var Ke = {};
    function Xe(e, r, t, v, R, b) {
      {
        var g = de(e);
        if (!g) {
          var m = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = dr();
          z ? m += z : m += Ve();
          var k;
          e === null ? k = "null" : we(e) ? k = "array" : e !== void 0 && e.$$typeof === i ? (k = "<" + (C(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : k = typeof e, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", k, m);
        }
        var M = cr(e, r, t, R, b);
        if (M == null)
          return M;
        if (g) {
          var le = r.children;
          if (le !== void 0)
            if (v)
              if (we(le)) {
                for (var Re = 0; Re < le.length; Re++)
                  Je(le[Re], e);
                Object.freeze && Object.freeze(le);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Je(le, e);
        }
        if (fe.call(r, "key")) {
          var me = C(e), re = Object.keys(r).filter(function(Rr) {
            return Rr !== "key";
          }), Me = re.length > 0 ? "{key: someKey, " + re.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ke[me + Me]) {
            var _r = re.length > 0 ? "{" + re.join(": ..., ") + ": ...}" : "{}";
            _(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Me, me, _r, me), Ke[me + Me] = !0;
          }
        }
        return e === s ? hr(M) : pr(M), M;
      }
    }
    function yr(e, r, t) {
      return Xe(e, r, t, !0);
    }
    function mr(e, r, t) {
      return Xe(e, r, t, !1);
    }
    var gr = mr, Er = yr;
    Te.Fragment = s, Te.jsx = gr, Te.jsxs = Er;
  }()), Te;
}
process.env.NODE_ENV === "production" ? De.exports = br() : De.exports = wr();
var f = De.exports;
function Cr(a) {
  const i = 12 * (Math.log(a / 440) / Math.log(2));
  return Math.round(i) + 69;
}
function jr(a) {
  return 440 * Math.pow(2, (a - 69) / 12);
}
function Tr(a, i) {
  return Math.floor(1200 * Math.log(a / jr(i)) / Math.log(2));
}
function Ar(a, i = 44100) {
  const o = a.length, s = 0.3, d = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  let l = new Float32Array(o), h = [];
  for (let n = 0; n < o; n++) {
    let u = 0;
    for (let p = 0; p < o - n; p++)
      u += (a[p] - 128) * (a[p + n] - 128);
    l[n] = u;
  }
  for (let n = 1; n < o - 1; n++)
    if (l[n] > s && l[n] > l[n - 1] && l[n] > l[n + 1]) {
      let u = n, p = l[n] / Math.max(...l);
      const c = i / u, E = Cr(c), w = d[E % 12], T = Math.floor((E - 12) / 12), O = Tr(c, E);
      h.push({
        frequency: c.toFixed(2),
        pitch: `${w}${T}`,
        octave: T,
        confidence: p.toFixed(2),
        note: w,
        cents: O
      });
    }
  return h.length > 0 ? h : null;
}
async function He(a) {
  if (a instanceof File || a instanceof Blob)
    return new Promise((i, o) => {
      const s = new FileReader();
      s.onloadend = () => i(s.result), s.onerror = o, s.readAsDataURL(a);
    });
  try {
    const i = await fetch(a);
    if (!i.ok)
      throw new Error(`Failed to fetch the audio from URL: ${a}`);
    const o = await i.blob();
    return new Promise((s, d) => {
      const l = new FileReader();
      l.onloadend = () => s(l.result), l.onerror = d, l.readAsDataURL(o);
    });
  } catch (i) {
    return console.error("Error converting audio to Base64:", i), null;
  }
}
async function Pr(a, i) {
  let o;
  if (typeof a == "string")
    o = await (await fetch(a)).arrayBuffer();
  else if (a instanceof Blob || a instanceof File)
    o = await a.arrayBuffer();
  else
    throw new Error("Unsupported audio source type");
  const d = await new (window.AudioContext || window.webkitAudioContext)().decodeAudioData(o), l = new OfflineAudioContext(
    d.numberOfChannels,
    d.length,
    d.sampleRate
  ), h = l.createBufferSource();
  h.buffer = d;
  const n = l.createAnalyser();
  n.fftSize = i || 2048, h.connect(n), n.connect(l.destination), h.start(), await l.startRendering();
  const u = n.frequencyBinCount, p = new Float32Array(u * Math.ceil(d.duration));
  for (let c = 0; c < Math.ceil(d.duration); c++)
    n.getFloatFrequencyData(p.subarray(c * u, (c + 1) * u));
  return { dataArray: p, audioDuration: d.duration };
}
function Ie(a, i = 64, o = !1) {
  const [s, d] = B(!1), [l, h] = B(!1), [n, u] = B(null), [p, c] = B(null), [E, w] = B(null), [T, O] = B(null), [I, ne] = B(null), [A, _] = B(null), [D, Z] = B(null), [V, Q] = B(null), [te, ae] = B(null), [H, de] = B(0), [ie, W] = B(0), [C, S] = B(0), [N, U] = B([]), L = async (y) => {
    u(new Audio(await He(y)));
  }, Y = async (y) => {
    const { dataArray: x, audioDuration: P } = await Pr(y, i);
    ae(x), de(P);
  }, G = () => {
    n != null && (n.play(), d(!0));
  }, oe = () => {
    n != null && (n.pause(), d(!1));
  }, ee = () => {
    n != null && (n.ended || n.paused ? (n.play(), d(!0)) : (n.pause(), d(!1)));
  }, j = () => {
    n != null && (n.pause(), n.currentTime = 0, d(!1));
  }, J = (y) => {
    if (n == null || isNaN(y)) return;
    const x = y / 100;
    n.volume = x, S(x * 100);
  }, F = async () => {
    try {
      const y = await navigator.mediaDevices.getUserMedia({ audio: !0 });
      Z(y);
      const x = p || new (window.AudioContext || window.webkitAudioContext)();
      c(x);
      const P = x.createMediaStreamSource(y);
      Q(P);
      const q = x.createAnalyser();
      _(q), P.connect(q), q.fftSize = i;
      const ue = q.frequencyBinCount;
      O(ue), ne(new Uint8Array(ue));
    } catch (y) {
      console.error("Error capturing microphone audio:", y);
    }
  }, K = () => {
    D && (D.getAudioTracks().forEach((y) => y.enabled = !1), h(!0));
  }, X = () => {
    D && (D.getAudioTracks().forEach((y) => y.enabled = !0), h(!1));
  }, $ = () => {
    D && (D.getTracks().forEach((y) => y.stop()), Z(null)), p && (p.close(), c(null), _(null), w(null), Q(null), O(null), ne(null)), o && U([]);
  };
  return ce(() => {
    a !== null && (L(a), Y(a));
  }, [a]), ce(() => (n !== null && (n.addEventListener("ended", j), S(n.volume * 100), setInterval(() => {
    W(n.currentTime);
  }, 100)), () => {
    n != null && n.removeEventListener("ended", j);
  }), [n]), ce(() => {
    if (!s) return;
    let y = E, x = A, P = p, q = T;
    p == null && (P = new (window.AudioContext || window.webkitAudioContext)(), c(P)), E == null && n !== null && (y = P.createMediaElementSource(n), w(y)), A == null && (x = P.createAnalyser(), _(x)), y && (y.connect(x), y.connect(P.destination)), x.fftSize = i, q = x.frequencyBinCount, O(q), ne(new Uint8Array(q));
  }, [s, a, i]), ce(() => {
    const y = () => {
      if (V == null && !s || l && D !== null) return;
      A.getByteFrequencyData(I);
      const x = Ar(I, p.sampleRate);
      x !== null && U(x), requestAnimationFrame(y);
    };
    (I !== null || A !== null || p !== null) && o && y();
  }, [I, s, A, l, p, D, V, o]), {
    audioNode: n,
    audioContext: p,
    audioSource: E,
    isPlaying: s,
    play: G,
    pause: oe,
    toggleAudio: ee,
    stopAudio: j,
    setVolume: J,
    analyzer: A,
    bufferLength: T,
    dataArray: I,
    audioToBase64: He,
    captureMicrophone: F,
    muteMicrophone: K,
    unmuteMicrophone: X,
    stopMicrophone: $,
    microphoneSource: V,
    mediaStream: D,
    isMute: l,
    audioFrequencyData: te,
    audioDuration: H,
    audioCurrentTime: ie,
    audioVolume: C,
    detectedNotes: N
  };
}
function $e({ width: a, height: i }) {
  const o = ze(null), s = ze(null);
  return ce(() => {
    if (o == null) return;
    const l = o.current.getContext("2d");
    s.current = l;
  }, [o, a, i]), { Canvas: xr(({ ...l }) => /* @__PURE__ */ f.jsx("canvas", { ref: o, width: a, height: i, ...l }), [o, a, i]), canvasContext: s == null ? void 0 : s.current, canvasNode: o == null ? void 0 : o.current };
}
function Ne({
  isPlaying: a,
  isMute: i,
  analyzer: o,
  bufferLength: s,
  dataArray: d,
  canvasNode: l,
  canvasContext: h,
  visualizer: n,
  barWidth: u = !1,
  barHeight: p = !1,
  x: c = 0,
  color: E = "white",
  colorFunction: w,
  audioDuration: T = 0,
  type: O
}) {
  if (O == "player" && !a || O == "stream" && i || o == null || s == null || d == null || l == null || h == null || !n) return;
  u || (u = l.width / s);
  function I() {
    c = 0, h.clearRect(0, 0, l.width, l.height), o.getByteFrequencyData(d), n({
      barHeight: p,
      barWidth: u,
      canvasContext: h,
      x: c,
      color: E,
      colorFunction: w,
      audioDuration: T,
      dataArray: d,
      bufferLength: s,
      canvasNode: l
    }), requestAnimationFrame(I);
  }
  I();
}
function rr({
  audioFrequencyData: a,
  canvasNode: i,
  canvasContext: o,
  visualizer: s,
  barWidth: d = !1,
  barHeight: l = !1,
  x: h = 0,
  color: n = "white",
  colorFunction: u,
  audioDuration: p = 0
}) {
  if (a == null || !s) return;
  const c = Object.keys(a).length;
  d || (d = i.width / c), o.clearRect(0, 0, i.width, i.height), s({
    dataArray: a,
    barHeight: l,
    barWidth: d,
    canvasContext: o,
    x: h,
    color: n,
    colorFunction: u,
    audioDuration: p,
    canvasNode: i
  });
}
const kr = {
  barVisualizer: ({
    barHeight: a,
    barWidth: i,
    canvasContext: o,
    x: s,
    color: d,
    colorFunction: l,
    dataArray: h,
    canvasNode: n
  }) => {
    if (h != null)
      for (let u = 0; u < (h == null ? void 0 : h.length); u++)
        a = n.height - Math.abs(h[u]) / 2, l && (d = l({ barHeight: a, barWidth: i, index: u, dataArray: h })), o.fillStyle = d, o.fillRect(
          s,
          n.height - a,
          i,
          a
        ), s += i;
  }
}, Or = {
  barVisualizer: ({
    barHeight: a,
    barWidth: i,
    canvasContext: o,
    x: s,
    color: d,
    colorFunction: l,
    audioDuration: h,
    dataArray: n,
    bufferLength: u,
    canvasNode: p
  }) => {
    for (let c = 0; c < u; c++)
      a = Math.abs(n[c]) / 2.5, l && (d = l({
        barHeight: a,
        barWidth: i,
        index: c,
        dataArray: n,
        audioDuration: h
      })), o.fillStyle = d, o.fillRect(
        s,
        p.height - a,
        i,
        a
      ), s += i;
  }
};
function Sr({
  dataArray: a,
  canvasNode: i,
  canvasContext: o,
  barWidth: s = !1,
  barHeight: d = !1,
  x: l = 0,
  color: h = "white",
  colorFunction: n = !1,
  audioDuration: u = 0
}) {
  rr({
    audioFrequencyData: a,
    canvasNode: i,
    canvasContext: o,
    visualizer: kr.barVisualizer,
    barWidth: s,
    barHeight: d,
    x: l,
    color: h,
    colorFunction: n,
    audioDuration: u
  });
}
function Ae(a) {
  if (typeof a != "number" || isNaN(a))
    throw new Error("Invalid input: Please provide a numeric value.");
  if (a < 0)
    throw new Error("Invalid input: Time cannot be negative.");
  const i = Math.floor(a);
  if (i < 60)
    return `${i}s`;
  if (i < 3600) {
    const o = Math.floor(i / 60), s = i % 60;
    return s > 0 ? `${o}m ${s}s` : `${o}m`;
  } else if (i < 86400) {
    const o = Math.floor(i / 3600), s = Math.floor(i % 3600 / 60);
    return s > 0 ? `${o}h ${s}m` : `${o}h`;
  } else {
    const o = Math.floor(i / 86400), s = Math.floor(i % 86400 / 3600);
    return s > 0 ? `${o}d ${s}h` : `${o}d`;
  }
}
function Mr({
  src: a = null,
  clickableCanvas: i = !1,
  width: o = 500,
  height: s = 100,
  controls: d = !0,
  pauseButton: l = "Pause",
  playButton: h = "Play",
  dataCount: n = 64,
  className: u = "",
  controlsClassName: p = "",
  constrolsStyle: c = !1,
  customVolume: E = !1,
  volumeLevel: w = !1,
  enableDuration: T = !1,
  durationClassName: O = "",
  durationStyle: I = !1,
  enableCurrentTime: ne = !1,
  currentTimeClassName: A = "",
  currentTimeStyle: _ = !1,
  hideVolume: D = !0,
  disableVolume: Z = !1,
  style: V = !1,
  canvasClassName: Q = "",
  canvasStyle: te = !1,
  toggleClassName: ae = "",
  toggleStyle: H = !1,
  stopButton: de = !1,
  customStopButton: ie = !1,
  barWidth: W = !1,
  barHeight: C = !1,
  horizontalOffset: S = 0,
  color: N = "black",
  colorFunction: U = !1,
  customVisualizer: L = !1,
  customFunction: Y = !1
}) {
  const {
    isPlaying: G,
    toggleAudio: oe,
    audioNode: ee,
    audioDuration: j,
    audioCurrentTime: J,
    setVolume: F,
    audioVolume: K,
    stopAudio: X,
    audioFrequencyData: $
  } = Ie(a, n), { Canvas: y, canvasContext: x, canvasNode: P } = $e({
    width: o,
    height: s
  }), q = () => {
    if (ie)
      return xe(ie, {
        onClick: X
      });
  }, ue = ({ className: pe, style: ge, volumeClassName: se, volumeStyle: fe, labelClassName: he, labelStyle: ye, labelIndicator: ve = "%" }) => {
    if (!E) return;
    const Ee = xe(E, {
      onChange: (be) => {
        F(be.target.value);
      },
      value: K,
      min: 0,
      max: 100,
      className: se || "",
      style: fe || {}
    });
    return /* @__PURE__ */ f.jsxs("div", { className: pe || "", style: ge || "", children: [
      Ee,
      w ? /* @__PURE__ */ f.jsxs(
        "p",
        {
          className: he || "",
          style: ye || {},
          children: [
            parseInt(K).toFixed(0),
            ve
          ]
        }
      ) : null
    ] });
  };
  return ce(() => {
    Z && F(0), L ? rr({
      audioFrequencyData: $,
      canvasNode: P,
      canvasContext: x,
      color: N,
      colorFunction: U,
      barWidth: W,
      barHeight: C,
      x: S,
      visualizer: L,
      audioDuration: j
    }) : Sr({
      dataArray: $,
      canvasNode: P,
      canvasContext: x,
      color: N,
      colorFunction: U,
      barWidth: W,
      barHeight: C,
      x: S,
      audioDuration: j
    });
  }, [
    $,
    P,
    x,
    N,
    U,
    W,
    C,
    S,
    L,
    Z,
    F,
    j
  ]), ce(() => {
    Y && Y({ audioNode: ee, audioFrequencyData: $, audioDuration: j });
  }, [Y, ee, $, j]), /* @__PURE__ */ f.jsxs("div", { className: u || "", style: V || {}, children: [
    /* @__PURE__ */ f.jsx(
      y,
      {
        onClick: i ? oe : null,
        className: Q || "",
        style: te || {}
      }
    ),
    d ? /* @__PURE__ */ f.jsxs("div", { className: p || "", style: c || {}, children: [
      /* @__PURE__ */ f.jsx(
        "button",
        {
          className: ae || "",
          style: H || {},
          onClick: oe,
          children: G ? l : h
        }
      ),
      de ? /* @__PURE__ */ f.jsx(f.Fragment, { children: ie ? /* @__PURE__ */ f.jsx(q, {}) : /* @__PURE__ */ f.jsx("button", { onClick: X, children: "Stop" }) }) : null,
      D ? null : /* @__PURE__ */ f.jsx(f.Fragment, { children: E ? /* @__PURE__ */ f.jsx(ue, {}) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
        /* @__PURE__ */ f.jsx("input", { type: "range", min: 0, max: 100, value: K, onChange: (pe) => {
          F(pe.target.value);
        } }),
        w ? /* @__PURE__ */ f.jsxs("p", { children: [
          parseInt(K).toFixed(0),
          "%"
        ] }) : null
      ] }) }),
      ne ? /* @__PURE__ */ f.jsx(
        "p",
        {
          className: A || "",
          style: _ || {},
          children: Ae(J || 0)
        }
      ) : null,
      T ? /* @__PURE__ */ f.jsx(
        "p",
        {
          className: O || "",
          style: I || {},
          children: Ae(j || 0)
        }
      ) : null
    ] }) : null
  ] });
}
function nr({
  isMute: a,
  isPlaying: i,
  analyzer: o,
  bufferLength: s,
  dataArray: d,
  canvasNode: l,
  canvasContext: h,
  barWidth: n = !1,
  barHeight: u = !1,
  x: p = 0,
  color: c = "black",
  colorFunction: E = !1,
  audioDuration: w = 0,
  type: T
}) {
  Ne({
    isMute: a,
    isPlaying: i,
    analyzer: o,
    bufferLength: s,
    dataArray: d,
    canvasNode: l,
    canvasContext: h,
    visualizer: Or.barVisualizer,
    barHeight: u,
    barWidth: n,
    x: p,
    color: c,
    colorFunction: E,
    type: T,
    audioDuration: w
  });
}
function Dr({
  src: a = null,
  clickableCanvas: i = !1,
  width: o = 500,
  height: s = 100,
  controls: d = !0,
  pauseButton: l = "Pause",
  playButton: h = "Play",
  dataCount: n = 64,
  className: u = "",
  controlsClassName: p = "",
  constrolsStyle: c = !1,
  customVolume: E = !1,
  volumeLevel: w = !1,
  enableDuration: T = !1,
  durationClassName: O = "",
  durationStyle: I = !1,
  enableCurrentTime: ne = !1,
  currentTimeClassName: A = "",
  currentTimeStyle: _ = !1,
  hideVolume: D = !0,
  disableVolume: Z = !1,
  style: V = !1,
  canvasClassName: Q = "",
  canvasStyle: te = !1,
  toggleClassName: ae = "",
  toggleStyle: H = !1,
  stopButton: de = !1,
  customStopButton: ie = !1,
  barWidth: W = !1,
  barHeight: C = !1,
  horizontalOffset: S = 0,
  color: N = "black",
  colorFunction: U = !1,
  customVisualizer: L = !1,
  customFunction: Y = !1
}) {
  const {
    isPlaying: G,
    toggleAudio: oe,
    analyzer: ee,
    bufferLength: j,
    dataArray: J,
    audioDuration: F,
    audioCurrentTime: K,
    setVolume: X,
    audioVolume: $,
    stopAudio: y,
    audioNode: x
  } = Ie(a, n), { Canvas: P, canvasContext: q, canvasNode: ue } = $e({
    width: o,
    height: s
  }), pe = () => {
    if (ie)
      return xe(ie, {
        onClick: y
      });
  }, ge = ({ className: se, style: fe, volumeClassName: he, volumeStyle: ye, labelClassName: ve, labelStyle: Ee, labelIndicator: be = "%" }) => {
    if (!E) return;
    const we = xe(E, {
      onChange: (Pe) => {
        X(Pe.target.value);
      },
      value: $,
      min: 0,
      max: 100,
      className: he || "",
      style: ye || {}
    });
    return /* @__PURE__ */ f.jsxs("div", { className: se || "", style: fe || "", children: [
      we,
      w ? /* @__PURE__ */ f.jsxs(
        "p",
        {
          className: ve || "",
          style: Ee || {},
          children: [
            parseInt($).toFixed(0),
            be
          ]
        }
      ) : null
    ] });
  };
  return ce(() => {
    Z && X(0), L ? Ne({
      isPlaying: G,
      analyzer: ee,
      bufferLength: j,
      dataArray: J,
      canvasNode: ue,
      canvasContext: q,
      color: N,
      colorFunction: U,
      barWidth: W,
      barHeight: C,
      x: S,
      visualizer: L,
      type: "player",
      audioDuration: F
    }) : nr({
      isPlaying: G,
      analyzer: ee,
      bufferLength: j,
      dataArray: J,
      canvasNode: ue,
      canvasContext: q,
      color: N,
      colorFunction: U,
      barWidth: W,
      barHeight: C,
      x: S,
      type: "player",
      audioDuration: F
    });
  }, [
    G,
    ee,
    j,
    J,
    ue,
    q,
    N,
    U,
    W,
    C,
    S,
    L,
    Z,
    X,
    F
  ]), ce(() => {
    Y && Y({ audioNode: x, audioDuration: F, dataArray: J, bufferLength: j });
  }, [Y, x, F, J, j]), /* @__PURE__ */ f.jsxs("div", { className: u || "", style: V || {}, children: [
    /* @__PURE__ */ f.jsx(
      P,
      {
        onClick: i ? oe : null,
        className: Q || "",
        style: te || {}
      }
    ),
    d ? /* @__PURE__ */ f.jsxs("div", { className: p || "", style: c || {}, children: [
      /* @__PURE__ */ f.jsx(
        "button",
        {
          className: ae || "",
          style: H || {},
          onClick: oe,
          children: G ? l : h
        }
      ),
      de ? /* @__PURE__ */ f.jsx(f.Fragment, { children: ie ? /* @__PURE__ */ f.jsx(pe, {}) : /* @__PURE__ */ f.jsx("button", { onClick: y, children: "Stop" }) }) : null,
      D ? null : /* @__PURE__ */ f.jsx(f.Fragment, { children: E ? /* @__PURE__ */ f.jsx(ge, {}) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
        /* @__PURE__ */ f.jsx("input", { type: "range", min: 0, max: 100, value: $, onChange: (se) => {
          X(se.target.value);
        } }),
        w ? /* @__PURE__ */ f.jsxs("p", { children: [
          parseInt($).toFixed(0),
          "%"
        ] }) : null
      ] }) }),
      ne ? /* @__PURE__ */ f.jsx(
        "p",
        {
          className: A || "",
          style: _ || {},
          children: Ae(K || 0)
        }
      ) : null,
      T ? /* @__PURE__ */ f.jsx(
        "p",
        {
          className: O || "",
          style: I || {},
          children: Ae(F || 0)
        }
      ) : null
    ] }) : null
  ] });
}
function Ir({
  clickableCanvas: a = !1,
  width: i = 500,
  height: o = 100,
  controls: s = !0,
  muteButton: d = "Mute",
  unmuteButton: l = "Unmute",
  dataCount: h = 64,
  className: n = "",
  controlsClassName: u = "",
  constrolsStyle: p = !1,
  style: c = !1,
  canvasClassName: E = "",
  canvasStyle: w = !1,
  toggleClassName: T = "",
  toggleStyle: O = !1,
  stopButton: I = !0,
  customStopButton: ne = !1,
  startButton: A = !0,
  customStartButton: _ = !1,
  barWidth: D = !1,
  barHeight: Z = !1,
  horizontalOffset: V = 0,
  color: Q = "black",
  colorFunction: te = !1,
  customVisualizer: ae = !1,
  customFunction: H = !1
}) {
  const [de, ie] = B(!0), {
    captureMicrophone: W,
    isMute: C,
    muteMicrophone: S,
    unmuteMicrophone: N,
    stopMicrophone: U,
    analyzer: L,
    bufferLength: Y,
    dataArray: G,
    audioNode: oe,
    microphoneSource: ee,
    mediaStream: j
  } = Ie(null, h), { Canvas: J, canvasContext: F, canvasNode: K } = $e({
    width: i,
    height: o
  }), X = () => {
    if (ne)
      return xe(ne, {
        onClick: U
      });
  }, $ = () => {
    if (_)
      return xe(_, {
        onClick: W
      });
  };
  ce(() => {
    ae ? Ne({
      isMute: C,
      analyzer: L,
      bufferLength: Y,
      dataArray: G,
      canvasNode: K,
      canvasContext: F,
      color: Q,
      colorFunction: te,
      barWidth: D,
      barHeight: Z,
      x: V,
      visualizer: ae,
      type: "stream"
    }) : nr({
      isMute: C,
      analyzer: L,
      bufferLength: Y,
      dataArray: G,
      canvasNode: K,
      canvasContext: F,
      color: Q,
      colorFunction: te,
      barWidth: D,
      barHeight: Z,
      x: V,
      type: "stream"
    });
  }, [
    C,
    L,
    Y,
    G,
    K,
    F,
    Q,
    te,
    D,
    Z,
    V,
    ae
  ]), ce(() => {
    H && H({ audioNode: oe, microphoneSource: ee, mediaStream: j });
  }, [H, oe, ee, j]);
  const y = () => {
    ie(!de), !de ? N() : S();
  };
  return /* @__PURE__ */ f.jsxs("div", { className: n || "", style: c || {}, children: [
    /* @__PURE__ */ f.jsx(
      J,
      {
        onClick: a ? y : null,
        className: E || "",
        style: w || {}
      }
    ),
    s ? /* @__PURE__ */ f.jsxs("div", { className: u || "", style: p || {}, children: [
      A ? /* @__PURE__ */ f.jsx(f.Fragment, { children: _ ? /* @__PURE__ */ f.jsx($, {}) : /* @__PURE__ */ f.jsx("button", { onClick: W, children: "Start" }) }) : null,
      /* @__PURE__ */ f.jsx(
        "button",
        {
          className: T || "",
          style: O || {},
          onClick: y,
          children: C ? l : d
        }
      ),
      I ? /* @__PURE__ */ f.jsx(f.Fragment, { children: ne ? /* @__PURE__ */ f.jsx(X, {}) : /* @__PURE__ */ f.jsx("button", { onClick: U, children: "Stop" }) }) : null
    ] }) : null
  ] });
}
export {
  Mr as Audio,
  Dr as AudioPlayer,
  Ir as AudioStream,
  Or as animation_visuals,
  Ar as detectNote,
  kr as static_visuals,
  Ie as useAudio,
  $e as useCanvas
};
