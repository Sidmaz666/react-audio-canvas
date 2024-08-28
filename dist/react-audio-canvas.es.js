import er, { useState as $, useEffect as oe, useRef as ze, useCallback as xr, cloneElement as we } from "react";
var Me = { exports: {} }, Ce = {};
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
  if (Ze) return Ce;
  Ze = 1;
  var a = er, i = Symbol.for("react.element"), s = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, c = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(n, u, y) {
    var d, m = {}, g = null, j = null;
    y !== void 0 && (g = "" + y), u.key !== void 0 && (g = "" + u.key), u.ref !== void 0 && (j = u.ref);
    for (d in u) o.call(u, d) && !l.hasOwnProperty(d) && (m[d] = u[d]);
    if (n && n.defaultProps) for (d in u = n.defaultProps, u) m[d] === void 0 && (m[d] = u[d]);
    return { $$typeof: i, type: n, key: g, ref: j, props: m, _owner: c.current };
  }
  return Ce.Fragment = s, Ce.jsx = p, Ce.jsxs = p, Ce;
}
var Ae = {};
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
    var a = er, i = Symbol.for("react.element"), s = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), n = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), A = Symbol.iterator, N = "@@iterator";
    function L(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = A && e[A] || e[N];
      return typeof r == "function" ? r : null;
    }
    var P = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), h = 1; h < r; h++)
          t[h - 1] = arguments[h];
        k("error", e, t);
      }
    }
    function k(e, r, t) {
      {
        var h = P.ReactDebugCurrentFrame, x = h.getStackAddendum();
        x !== "" && (r += "%s", t = t.concat([x]));
        var T = t.map(function(_) {
          return String(_);
        });
        T.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, T);
      }
    }
    var X = !1, re = !1, z = !1, ne = !1, le = !1, Z;
    Z = Symbol.for("react.module.reference");
    function se(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === l || le || e === c || e === y || e === d || ne || e === j || X || re || z || typeof e == "object" && e !== null && (e.$$typeof === g || e.$$typeof === m || e.$$typeof === p || e.$$typeof === n || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Z || e.getModuleId !== void 0));
    }
    function ce(e, r, t) {
      var h = e.displayName;
      if (h)
        return h;
      var x = r.displayName || r.name || "";
      return x !== "" ? t + "(" + x + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case s:
          return "Portal";
        case l:
          return "Profiler";
        case c:
          return "StrictMode";
        case y:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case n:
            var r = e;
            return te(r) + ".Consumer";
          case p:
            var t = e;
            return te(t._context) + ".Provider";
          case u:
            return ce(e, e.render, "ForwardRef");
          case m:
            var h = e.displayName || null;
            return h !== null ? h : C(e.type) || "Memo";
          case g: {
            var x = e, T = x._payload, _ = x._init;
            try {
              return C(_(T));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, ae = 0, B, Y, V, W, J, M, U;
    function Q() {
    }
    Q.__reactDisabledLog = !0;
    function H() {
      {
        if (ae === 0) {
          B = console.log, Y = console.info, V = console.warn, W = console.error, J = console.group, M = console.groupCollapsed, U = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Q,
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
        ae++;
      }
    }
    function ie() {
      {
        if (ae--, ae === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, e, {
              value: B
            }),
            info: F({}, e, {
              value: Y
            }),
            warn: F({}, e, {
              value: V
            }),
            error: F({}, e, {
              value: W
            }),
            group: F({}, e, {
              value: J
            }),
            groupCollapsed: F({}, e, {
              value: M
            }),
            groupEnd: F({}, e, {
              value: U
            })
          });
        }
        ae < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = P.ReactCurrentDispatcher, S;
    function v(e, r, t) {
      {
        if (S === void 0)
          try {
            throw Error();
          } catch (x) {
            var h = x.stack.trim().match(/\n( *(at )?)/);
            S = h && h[1] || "";
          }
        return `
` + S + e;
      }
    }
    var R = !1, w;
    {
      var I = typeof WeakMap == "function" ? WeakMap : Map;
      w = new I();
    }
    function G(e, r) {
      if (!e || R)
        return "";
      {
        var t = w.get(e);
        if (t !== void 0)
          return t;
      }
      var h;
      R = !0;
      var x = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var T;
      T = q.current, q.current = null, H();
      try {
        if (r) {
          var _ = function() {
            throw Error();
          };
          if (Object.defineProperty(_.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_, []);
            } catch (ee) {
              h = ee;
            }
            Reflect.construct(e, [], _);
          } else {
            try {
              _.call();
            } catch (ee) {
              h = ee;
            }
            e.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ee) {
            h = ee;
          }
          e();
        }
      } catch (ee) {
        if (ee && h && typeof ee.stack == "string") {
          for (var E = ee.stack.split(`
`), K = h.stack.split(`
`), O = E.length - 1, D = K.length - 1; O >= 1 && D >= 0 && E[O] !== K[D]; )
            D--;
          for (; O >= 1 && D >= 0; O--, D--)
            if (E[O] !== K[D]) {
              if (O !== 1 || D !== 1)
                do
                  if (O--, D--, D < 0 || E[O] !== K[D]) {
                    var ue = `
` + E[O].replace(" at new ", " at ");
                    return e.displayName && ue.includes("<anonymous>") && (ue = ue.replace("<anonymous>", e.displayName)), typeof e == "function" && w.set(e, ue), ue;
                  }
                while (O >= 1 && D >= 0);
              break;
            }
        }
      } finally {
        R = !1, q.current = T, ie(), Error.prepareStackTrace = x;
      }
      var xe = e ? e.displayName || e.name : "", ge = xe ? v(xe) : "";
      return typeof e == "function" && w.set(e, ge), ge;
    }
    function Ee(e, r, t) {
      return G(e, !1);
    }
    function fe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ve(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return G(e, fe(e));
      if (typeof e == "string")
        return v(e);
      switch (e) {
        case y:
          return v("Suspense");
        case d:
          return v("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return Ee(e.render);
          case m:
            return ve(e.type, r, t);
          case g: {
            var h = e, x = h._payload, T = h._init;
            try {
              return ve(T(x), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var de = Object.prototype.hasOwnProperty, pe = {}, Re = P.ReactDebugCurrentFrame;
    function he(e) {
      if (e) {
        var r = e._owner, t = ve(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    function ye(e, r, t, h, x) {
      {
        var T = Function.call.bind(de);
        for (var _ in e)
          if (T(e, _)) {
            var E = void 0;
            try {
              if (typeof e[_] != "function") {
                var K = Error((h || "React class") + ": " + t + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw K.name = "Invariant Violation", K;
              }
              E = e[_](r, _, h, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (O) {
              E = O;
            }
            E && !(E instanceof Error) && (he(x), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", t, _, typeof E), he(null)), E instanceof Error && !(E.message in pe) && (pe[E.message] = !0, he(x), b("Failed %s type: %s", t, E.message), he(null));
          }
      }
    }
    var Te = Array.isArray;
    function me(e) {
      return Te(e);
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
    function qe(e) {
      if (tr(e))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Pe(e)), Ue(e);
    }
    var je = P.ReactCurrentOwner, ar = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Le, Be, ke;
    ke = {};
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
        var t = C(je.current.type);
        ke[t] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(je.current.type), e.ref), ke[t] = !0);
      }
    }
    function ur(e, r) {
      {
        var t = function() {
          Le || (Le = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function lr(e, r) {
      {
        var t = function() {
          Be || (Be = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var cr = function(e, r, t, h, x, T, _) {
      var E = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: _,
        // Record the component responsible for creating this element.
        _owner: T
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
        value: h
      }), Object.defineProperty(E, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    };
    function fr(e, r, t, h, x) {
      {
        var T, _ = {}, E = null, K = null;
        t !== void 0 && (qe(t), E = "" + t), or(r) && (qe(r.key), E = "" + r.key), ir(r) && (K = r.ref, sr(r, x));
        for (T in r)
          de.call(r, T) && !ar.hasOwnProperty(T) && (_[T] = r[T]);
        if (e && e.defaultProps) {
          var O = e.defaultProps;
          for (T in O)
            _[T] === void 0 && (_[T] = O[T]);
        }
        if (E || K) {
          var D = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          E && ur(_, D), K && lr(_, D);
        }
        return cr(e, E, K, x, h, je.current, _);
      }
    }
    var Se = P.ReactCurrentOwner, Ye = P.ReactDebugCurrentFrame;
    function _e(e) {
      if (e) {
        var r = e._owner, t = ve(e.type, e._source, r ? r.type : null);
        Ye.setExtraStackFrame(t);
      } else
        Ye.setExtraStackFrame(null);
    }
    var Oe;
    Oe = !1;
    function De(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function Ve() {
      {
        if (Se.current) {
          var e = C(Se.current.type);
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
        var h = "";
        e && e._owner && e._owner !== Se.current && (h = " It was passed a child from " + C(e._owner.type) + "."), _e(e), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, h), _e(null);
      }
    }
    function Je(e, r) {
      {
        if (typeof e != "object")
          return;
        if (me(e))
          for (var t = 0; t < e.length; t++) {
            var h = e[t];
            De(h) && Ge(h, r);
          }
        else if (De(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var x = L(e);
          if (typeof x == "function" && x !== e.entries)
            for (var T = x.call(e), _; !(_ = T.next()).done; )
              De(_.value) && Ge(_.value, r);
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
        r.$$typeof === m))
          t = r.propTypes;
        else
          return;
        if (t) {
          var h = C(r);
          ye(t, e.props, "prop", h, e);
        } else if (r.PropTypes !== void 0 && !Oe) {
          Oe = !0;
          var x = C(r);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var h = r[t];
          if (h !== "children" && h !== "key") {
            _e(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), _e(null);
            break;
          }
        }
        e.ref !== null && (_e(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), _e(null));
      }
    }
    var Ke = {};
    function Xe(e, r, t, h, x, T) {
      {
        var _ = se(e);
        if (!_) {
          var E = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var K = dr();
          K ? E += K : E += Ve();
          var O;
          e === null ? O = "null" : me(e) ? O = "array" : e !== void 0 && e.$$typeof === i ? (O = "<" + (C(e.type) || "Unknown") + " />", E = " Did you accidentally export a JSX literal instead of a component?") : O = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", O, E);
        }
        var D = fr(e, r, t, x, T);
        if (D == null)
          return D;
        if (_) {
          var ue = r.children;
          if (ue !== void 0)
            if (h)
              if (me(ue)) {
                for (var xe = 0; xe < ue.length; xe++)
                  Je(ue[xe], e);
                Object.freeze && Object.freeze(ue);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Je(ue, e);
        }
        if (de.call(r, "key")) {
          var ge = C(e), ee = Object.keys(r).filter(function(_r) {
            return _r !== "key";
          }), Fe = ee.length > 0 ? "{key: someKey, " + ee.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ke[ge + Fe]) {
            var Rr = ee.length > 0 ? "{" + ee.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Fe, ge, Rr, ge), Ke[ge + Fe] = !0;
          }
        }
        return e === o ? hr(D) : pr(D), D;
      }
    }
    function yr(e, r, t) {
      return Xe(e, r, t, !0);
    }
    function mr(e, r, t) {
      return Xe(e, r, t, !1);
    }
    var gr = mr, Er = yr;
    Ae.Fragment = o, Ae.jsx = gr, Ae.jsxs = Er;
  }()), Ae;
}
process.env.NODE_ENV === "production" ? Me.exports = br() : Me.exports = wr();
var f = Me.exports;
function Tr(a) {
  const i = 12 * (Math.log(a / 440) / Math.log(2));
  return Math.round(i) + 69;
}
function jr(a) {
  return 440 * Math.pow(2, (a - 69) / 12);
}
function Cr(a, i) {
  return Math.floor(1200 * Math.log(a / jr(i)) / Math.log(2));
}
function Ar(a, i = 44100) {
  const s = a.length, o = 0.3, c = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  let l = new Float32Array(s), p = [];
  for (let n = 0; n < s; n++) {
    let u = 0;
    for (let y = 0; y < s - n; y++)
      u += (a[y] - 128) * (a[y + n] - 128);
    l[n] = u;
  }
  for (let n = 1; n < s - 1; n++)
    if (l[n] > o && l[n] > l[n - 1] && l[n] > l[n + 1]) {
      let u = n, y = l[n] / Math.max(...l);
      const d = i / u, m = Tr(d), g = c[m % 12], j = Math.floor((m - 12) / 12), A = Cr(d, m);
      p.push({
        frequency: d.toFixed(2),
        pitch: `${g}${j}`,
        octave: j,
        confidence: y.toFixed(2),
        note: g,
        cents: A
      });
    }
  return p.length > 0 ? p : null;
}
async function He(a) {
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
      const l = new FileReader();
      l.onloadend = () => o(l.result), l.onerror = c, l.readAsDataURL(s);
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
  const o = new (window.AudioContext || window.webkitAudioContext)(), c = await o.decodeAudioData(s), l = await kr(c, o, i), p = new OfflineAudioContext(
    c.numberOfChannels,
    c.length,
    c.sampleRate
  ), n = p.createBufferSource();
  n.buffer = c;
  const u = p.createAnalyser();
  u.fftSize = i || 2048, n.connect(u), u.connect(p.destination), n.start(), await p.startRendering();
  const y = u.frequencyBinCount, d = new Float32Array(y * Math.ceil(c.duration));
  for (let g = 0; g < Math.ceil(c.duration); g++)
    u.getFloatFrequencyData(d.subarray(g * y, (g + 1) * y));
  return d.some((g) => g !== -1 / 0) ? { dataArray: d, audioDuration: c.duration } : (console.warn("AnalyserNode data contains only -Infinity values. This may indicate an issue with the audio data or configuration."), l);
}
async function kr(a, i, s) {
  const o = i.createBufferSource();
  o.buffer = a;
  const c = i.createAnalyser();
  c.fftSize = s;
  const l = c.frequencyBinCount, p = new Float32Array(l);
  return o.connect(c), o.start(), o.playbackRate.value = 10, new Promise((n, u) => {
    let m = 0;
    function g() {
      c.getFloatFrequencyData(p), p.some((A) => A !== -1 / 0) || m >= 20 ? (o.stop(), n({ dataArray: p, audioDuration: a.duration })) : (m++, setTimeout(g, 100));
    }
    g();
  });
}
function Ie(a, i = 64, s = !1) {
  const [o, c] = $(!1), [l, p] = $(!1), [n, u] = $(null), [y, d] = $(null), [m, g] = $(null), [j, A] = $(null), [N, L] = $(null), [P, b] = $(null), [k, X] = $(null), [re, z] = $(null), [ne, le] = $(null), [Z, se] = $(0), [ce, te] = $(0), [C, F] = $(0), [ae, B] = $([]), Y = async (v) => {
    u(new Audio(await He(v)));
  }, V = async (v) => {
    const { dataArray: R, audioDuration: w } = await Pr(v, i);
    le(R), se(w);
  }, W = () => {
    n != null && (n.play(), c(!0));
  }, J = () => {
    n != null && (n.pause(), c(!1));
  }, M = () => {
    n != null && (n.ended || n.paused ? (n.play(), c(!0)) : (n.pause(), c(!1)));
  }, U = () => {
    n != null && (n.pause(), n.currentTime = 0, c(!1));
  }, Q = (v) => {
    if (n == null || isNaN(v)) return;
    const R = v / 100;
    n.volume = R, F(R * 100);
  }, H = async () => {
    try {
      const v = await navigator.mediaDevices.getUserMedia({ audio: !0 });
      X(v);
      const R = y || new (window.AudioContext || window.webkitAudioContext)();
      d(R);
      const w = R.createMediaStreamSource(v);
      z(w);
      const I = R.createAnalyser();
      b(I), w.connect(I), I.fftSize = i;
      const G = I.frequencyBinCount;
      A(G), L(new Uint8Array(G));
    } catch (v) {
      console.error("Error capturing microphone audio:", v);
    }
  }, ie = () => {
    k && (k.getAudioTracks().forEach((v) => v.enabled = !1), p(!0));
  }, q = () => {
    k && (k.getAudioTracks().forEach((v) => v.enabled = !0), p(!1));
  }, S = () => {
    k && (k.getTracks().forEach((v) => v.stop()), X(null)), y && (y.close(), d(null), b(null), g(null), z(null), A(null), L(null)), s && B([]);
  };
  return oe(() => {
    a !== null && (Y(a), V(a));
  }, [a]), oe(() => (n !== null && (n.addEventListener("ended", U), F(n.volume * 100), setInterval(() => {
    te(n.currentTime);
  }, 100)), () => {
    n != null && n.removeEventListener("ended", U);
  }), [n]), oe(() => {
    if (!o) return;
    let v = m, R = P, w = y, I = j;
    y == null && (w = new (window.AudioContext || window.webkitAudioContext)(), d(w)), m == null && n !== null && (v = w.createMediaElementSource(n), g(v)), P == null && (R = w.createAnalyser(), b(R)), v && (v.connect(R), v.connect(w.destination)), R.fftSize = i, I = R.frequencyBinCount, A(I), L(new Uint8Array(I));
  }, [o, a, i]), oe(() => {
    const v = () => {
      if (re == null && !o || l && k !== null) return;
      P.getByteFrequencyData(N);
      const R = Ar(N, y.sampleRate);
      R !== null && B(R), requestAnimationFrame(v);
    };
    (N !== null || P !== null || y !== null) && s && v();
  }, [N, o, P, l, y, k, re, s]), {
    audioNode: n,
    audioContext: y,
    audioSource: m,
    isPlaying: o,
    play: W,
    pause: J,
    toggleAudio: M,
    stopAudio: U,
    setVolume: Q,
    analyzer: P,
    bufferLength: j,
    dataArray: N,
    audioToBase64: He,
    captureMicrophone: H,
    muteMicrophone: ie,
    unmuteMicrophone: q,
    stopMicrophone: S,
    microphoneSource: re,
    mediaStream: k,
    isMute: l,
    audioFrequencyData: ne,
    audioDuration: Z,
    audioCurrentTime: ce,
    audioVolume: C,
    detectedNotes: ae
  };
}
function $e({ width: a, height: i }) {
  const s = ze(null), o = ze(null);
  return oe(() => {
    if (s == null) return;
    const l = s.current.getContext("2d");
    o.current = l;
  }, [s, a, i]), { Canvas: xr(({ ...l }) => /* @__PURE__ */ f.jsx("canvas", { ref: s, width: a, height: i, ...l }), [s, a, i]), canvasContext: o == null ? void 0 : o.current, canvasNode: s == null ? void 0 : s.current };
}
function Ne({
  isPlaying: a,
  isMute: i,
  analyzer: s,
  bufferLength: o,
  dataArray: c,
  canvasNode: l,
  canvasContext: p,
  visualizer: n,
  barWidth: u = !1,
  barHeight: y = !1,
  x: d = 0,
  color: m = "white",
  colorFunction: g,
  audioDuration: j = 0,
  type: A,
  audioNode: N
}) {
  if (A == "player" && !a || A == "stream" && i || s == null || o == null || c == null || l == null || p == null || !n) return;
  u || (u = l.width / o);
  function L() {
    d = 0, p.clearRect(0, 0, l.width, l.height), s.getByteFrequencyData(c), n({
      barHeight: y,
      barWidth: u,
      canvasContext: p,
      x: d,
      color: m,
      colorFunction: g,
      audioDuration: j,
      dataArray: c,
      bufferLength: o,
      canvasNode: l,
      audioNode: N
    }), requestAnimationFrame(L);
  }
  L();
}
function rr({
  audioFrequencyData: a,
  canvasNode: i,
  canvasContext: s,
  visualizer: o,
  barWidth: c = !1,
  barHeight: l = !1,
  x: p = 0,
  color: n = "white",
  colorFunction: u,
  audioDuration: y = 0,
  audioNode: d
}) {
  if (a == null || !o) return;
  const m = Object.keys(a).length;
  c || (c = i.width / m), s.clearRect(0, 0, i.width, i.height), o({
    dataArray: a,
    barHeight: l,
    barWidth: c,
    canvasContext: s,
    x: p,
    color: n,
    colorFunction: u,
    audioDuration: y,
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
    colorFunction: l,
    dataArray: p,
    canvasNode: n
  }) => {
    if (p != null)
      for (let u = 0; u < (p == null ? void 0 : p.length); u++)
        a = n.height - Math.abs(p[u]) / 2, l && (c = l({ barHeight: a, barWidth: i, index: u, dataArray: p })), s.fillStyle = c, s.fillRect(
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
    colorFunction: l,
    audioDuration: p,
    dataArray: n,
    bufferLength: u,
    canvasNode: y
  }) => {
    for (let d = 0; d < u; d++)
      a = Math.abs(n[d]) / 2.5, l && (c = l({
        barHeight: a,
        barWidth: i,
        index: d,
        dataArray: n,
        audioDuration: p
      })), s.fillStyle = c, s.fillRect(
        o,
        y.height - a,
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
  x: l = 0,
  color: p = "white",
  colorFunction: n = !1,
  audioDuration: u = 0
}) {
  rr({
    audioFrequencyData: a,
    canvasNode: i,
    canvasContext: s,
    visualizer: Sr.barVisualizer,
    barWidth: o,
    barHeight: c,
    x: l,
    color: p,
    colorFunction: n,
    audioDuration: u
  });
}
function be(a) {
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
  pauseButton: l = "Pause",
  playButton: p = "Play",
  dataCount: n = 64,
  className: u = "",
  controlsClassName: y = "",
  constrolsStyle: d = !1,
  customVolume: m = !1,
  volumeControlStyle: g = {},
  volumeControlClassName: j = "",
  volumeLabelStyle: A = {},
  volumeLabelClassName: N = "",
  volumeLabelIndicator: L = "%",
  volumeLevel: P = !1,
  enableDuration: b = !1,
  durationClassName: k = "",
  durationStyle: X = !1,
  enableCurrentTime: re = !1,
  currentTimeClassName: z = "",
  currentTimeStyle: ne = !1,
  hideVolume: le = !0,
  disableVolume: Z = !1,
  style: se = !1,
  canvasClassName: ce = "",
  canvasStyle: te = !1,
  toggleClassName: C = "",
  toggleStyle: F = !1,
  stopButton: ae = !1,
  customStopButton: B = !1,
  barWidth: Y = !1,
  barHeight: V = !1,
  horizontalOffset: W = 0,
  color: J = "black",
  colorFunction: M = !1,
  customVisualizer: U = !1,
  customFunction: Q = !1
}) {
  const {
    isPlaying: H,
    toggleAudio: ie,
    audioNode: q,
    audioDuration: S,
    audioCurrentTime: v,
    setVolume: R,
    audioVolume: w,
    stopAudio: I,
    audioFrequencyData: G
  } = Ie(a, n), { Canvas: Ee, canvasContext: fe, canvasNode: ve } = $e({
    width: s,
    height: o
  }), [de, pe] = $(be(v || 0)), Re = () => {
    if (B)
      return we(B, {
        onClick: I
      });
  }, he = () => {
    if (!m) return;
    const ye = we(m, {
      onChange: (Te) => {
        R(Te.target.value);
      },
      value: w,
      min: 0,
      max: 100
    });
    return /* @__PURE__ */ f.jsxs(
      "div",
      {
        className: j || "",
        style: g || "",
        children: [
          ye,
          P ? /* @__PURE__ */ f.jsxs(
            "p",
            {
              className: N || "",
              style: A || {},
              children: [
                parseInt(w).toFixed(0),
                L
              ]
            }
          ) : null
        ]
      }
    );
  };
  return oe(() => {
    Z && R(0), U ? rr({
      audioFrequencyData: G,
      canvasNode: ve,
      canvasContext: fe,
      color: J,
      colorFunction: M,
      barWidth: Y,
      barHeight: V,
      x: W,
      visualizer: U,
      audioDuration: S,
      audioNode: q
    }) : Dr({
      dataArray: G,
      canvasNode: ve,
      canvasContext: fe,
      color: J,
      colorFunction: M,
      barWidth: Y,
      barHeight: V,
      x: W,
      audioDuration: S,
      audioNode: q
    });
  }, [
    G,
    ve,
    fe,
    J,
    M,
    Y,
    V,
    W,
    U,
    Z,
    R,
    S,
    q
  ]), oe(() => {
    Q && Q({ audioNode: q, audioFrequencyData: G, audioDuration: S });
  }, [Q, q, G, S]), oe(() => {
    v && pe(be(v || 0));
  }, [v]), /* @__PURE__ */ f.jsxs("div", { className: u || "", style: se || {}, children: [
    /* @__PURE__ */ f.jsx(
      Ee,
      {
        onClick: i ? ie : null,
        className: ce || "",
        style: te || {}
      }
    ),
    c ? /* @__PURE__ */ f.jsxs("div", { className: y || "", style: d || {}, children: [
      /* @__PURE__ */ f.jsx(
        "button",
        {
          className: C || "",
          style: F || {},
          onClick: ie,
          children: H ? l : p
        }
      ),
      ae ? /* @__PURE__ */ f.jsx(f.Fragment, { children: B ? /* @__PURE__ */ f.jsx(Re, {}) : /* @__PURE__ */ f.jsx("button", { onClick: I, children: "Stop" }) }) : null,
      le ? null : /* @__PURE__ */ f.jsx(f.Fragment, { children: m ? /* @__PURE__ */ f.jsx(he, {}) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
        /* @__PURE__ */ f.jsx("input", { type: "range", min: 0, max: 100, value: w, onChange: (ye) => {
          R(ye.target.value);
        } }),
        P ? /* @__PURE__ */ f.jsxs("p", { children: [
          parseInt(w).toFixed(0),
          "%"
        ] }) : null
      ] }) }),
      re ? /* @__PURE__ */ f.jsx(
        "p",
        {
          className: z || "",
          style: ne || {},
          children: de
        }
      ) : null,
      b ? /* @__PURE__ */ f.jsx(
        "p",
        {
          className: k || "",
          style: X || {},
          children: be(S || 0)
        }
      ) : null
    ] }) : null
  ] });
}
function nr({
  isMute: a,
  isPlaying: i,
  analyzer: s,
  bufferLength: o,
  dataArray: c,
  canvasNode: l,
  canvasContext: p,
  barWidth: n = !1,
  barHeight: u = !1,
  x: y = 0,
  color: d = "black",
  colorFunction: m = !1,
  audioDuration: g = 0,
  type: j
}) {
  Ne({
    isMute: a,
    isPlaying: i,
    analyzer: s,
    bufferLength: o,
    dataArray: c,
    canvasNode: l,
    canvasContext: p,
    visualizer: Or.barVisualizer,
    barHeight: u,
    barWidth: n,
    x: y,
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
  pauseButton: l = "Pause",
  playButton: p = "Play",
  dataCount: n = 64,
  className: u = "",
  controlsClassName: y = "",
  constrolsStyle: d = !1,
  customVolume: m = !1,
  volumeControlStyle: g = {},
  volumeControlClassName: j = "",
  volumeLabelStyle: A = {},
  volumeLabelClassName: N = "",
  volumeLabelIndicator: L = "%",
  volumeLevel: P = !1,
  enableDuration: b = !1,
  durationClassName: k = "",
  durationStyle: X = !1,
  enableCurrentTime: re = !1,
  currentTimeClassName: z = "",
  currentTimeStyle: ne = !1,
  hideVolume: le = !0,
  disableVolume: Z = !1,
  style: se = !1,
  canvasClassName: ce = "",
  canvasStyle: te = !1,
  toggleClassName: C = "",
  toggleStyle: F = !1,
  stopButton: ae = !1,
  customStopButton: B = !1,
  barWidth: Y = !1,
  barHeight: V = !1,
  horizontalOffset: W = 0,
  color: J = "black",
  colorFunction: M = !1,
  customVisualizer: U = !1,
  customFunction: Q = !1
}) {
  const {
    isPlaying: H,
    toggleAudio: ie,
    analyzer: q,
    bufferLength: S,
    dataArray: v,
    audioDuration: R,
    audioCurrentTime: w,
    setVolume: I,
    audioVolume: G,
    stopAudio: Ee,
    audioNode: fe
  } = Ie(a, n), { Canvas: ve, canvasContext: de, canvasNode: pe } = $e({
    width: s,
    height: o
  }), [Re, he] = $(be(w || 0)), ye = () => {
    if (B)
      return we(B, {
        onClick: Ee
      });
  }, Te = () => {
    if (!m) return;
    const me = we(m, {
      onChange: (Pe) => {
        I(Pe.target.value);
      },
      value: G,
      min: 0,
      max: 100
    });
    return /* @__PURE__ */ f.jsxs(
      "div",
      {
        className: j || "",
        style: g || "",
        children: [
          me,
          P ? /* @__PURE__ */ f.jsxs(
            "p",
            {
              className: N || "",
              style: A || {},
              children: [
                parseInt(G).toFixed(0),
                L
              ]
            }
          ) : null
        ]
      }
    );
  };
  return oe(() => {
    Z && I(0), U ? Ne({
      isPlaying: H,
      analyzer: q,
      bufferLength: S,
      dataArray: v,
      canvasNode: pe,
      canvasContext: de,
      color: J,
      colorFunction: M,
      barWidth: Y,
      barHeight: V,
      x: W,
      visualizer: U,
      type: "player",
      audioDuration: R,
      audioNode: fe
    }) : nr({
      isPlaying: H,
      analyzer: q,
      bufferLength: S,
      dataArray: v,
      canvasNode: pe,
      canvasContext: de,
      color: J,
      colorFunction: M,
      barWidth: Y,
      barHeight: V,
      x: W,
      type: "player",
      audioDuration: R,
      audioNode: fe
    });
  }, [
    H,
    q,
    S,
    v,
    pe,
    de,
    J,
    M,
    Y,
    V,
    W,
    U,
    Z,
    I,
    R,
    fe
  ]), oe(() => {
    Q && Q({ audioNode: fe, audioDuration: R, dataArray: v, bufferLength: S });
  }, [Q, fe, R, v, S]), oe(() => {
    w && he(be(w || 0));
  }, [w]), /* @__PURE__ */ f.jsxs("div", { className: u || "", style: se || {}, children: [
    /* @__PURE__ */ f.jsx(
      ve,
      {
        onClick: i ? ie : null,
        className: ce || "",
        style: te || {}
      }
    ),
    c ? /* @__PURE__ */ f.jsxs("div", { className: y || "", style: d || {}, children: [
      /* @__PURE__ */ f.jsx(
        "button",
        {
          className: C || "",
          style: F || {},
          onClick: ie,
          children: H ? l : p
        }
      ),
      ae ? /* @__PURE__ */ f.jsx(f.Fragment, { children: B ? /* @__PURE__ */ f.jsx(ye, {}) : /* @__PURE__ */ f.jsx("button", { onClick: Ee, children: "Stop" }) }) : null,
      le ? null : /* @__PURE__ */ f.jsx(f.Fragment, { children: m ? /* @__PURE__ */ f.jsx(Te, {}) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
        /* @__PURE__ */ f.jsx("input", { type: "range", min: 0, max: 100, value: G, onChange: (me) => {
          I(me.target.value);
        } }),
        P ? /* @__PURE__ */ f.jsxs("p", { children: [
          parseInt(G).toFixed(0),
          "%"
        ] }) : null
      ] }) }),
      re ? /* @__PURE__ */ f.jsx(
        "p",
        {
          className: z || "",
          style: ne || {},
          children: Re
        }
      ) : null,
      b ? /* @__PURE__ */ f.jsx(
        "p",
        {
          className: k || "",
          style: X || {},
          children: be(R || 0)
        }
      ) : null
    ] }) : null
  ] });
}
function $r({
  clickableCanvas: a = !1,
  width: i = 500,
  height: s = 100,
  controls: o = !0,
  muteButton: c = "Mute",
  unmuteButton: l = "Unmute",
  dataCount: p = 64,
  className: n = "",
  controlsClassName: u = "",
  constrolsStyle: y = !1,
  style: d = !1,
  canvasClassName: m = "",
  canvasStyle: g = !1,
  toggleClassName: j = "",
  toggleStyle: A = !1,
  stopButton: N = !0,
  customStopButton: L = !1,
  startButton: P = !0,
  customStartButton: b = !1,
  barWidth: k = !1,
  barHeight: X = !1,
  horizontalOffset: re = 0,
  color: z = "black",
  colorFunction: ne = !1,
  customVisualizer: le = !1,
  customFunction: Z = !1
}) {
  const [se, ce] = $(!0), {
    captureMicrophone: te,
    isMute: C,
    muteMicrophone: F,
    unmuteMicrophone: ae,
    stopMicrophone: B,
    analyzer: Y,
    bufferLength: V,
    dataArray: W,
    audioNode: J,
    microphoneSource: M,
    mediaStream: U
  } = Ie(null, p), { Canvas: Q, canvasContext: H, canvasNode: ie } = $e({
    width: i,
    height: s
  }), q = () => {
    if (L)
      return we(L, {
        onClick: B
      });
  }, S = () => {
    if (b)
      return we(b, {
        onClick: te
      });
  };
  oe(() => {
    le ? Ne({
      isMute: C,
      analyzer: Y,
      bufferLength: V,
      dataArray: W,
      canvasNode: ie,
      canvasContext: H,
      color: z,
      colorFunction: ne,
      barWidth: k,
      barHeight: X,
      x: re,
      visualizer: le,
      type: "stream",
      audioNode: M
    }) : nr({
      isMute: C,
      analyzer: Y,
      bufferLength: V,
      dataArray: W,
      canvasNode: ie,
      canvasContext: H,
      color: z,
      colorFunction: ne,
      barWidth: k,
      barHeight: X,
      x: re,
      type: "stream",
      audioNode: M
    });
  }, [
    C,
    Y,
    V,
    W,
    ie,
    H,
    z,
    ne,
    k,
    X,
    re,
    le,
    M
  ]), oe(() => {
    Z && Z({ audioNode: J, microphoneSource: M, mediaStream: U });
  }, [Z, J, M, U]);
  const v = () => {
    ce(!se), !se ? ae() : F();
  };
  return /* @__PURE__ */ f.jsxs("div", { className: n || "", style: d || {}, children: [
    /* @__PURE__ */ f.jsx(
      Q,
      {
        onClick: a ? v : null,
        className: m || "",
        style: g || {}
      }
    ),
    o ? /* @__PURE__ */ f.jsxs("div", { className: u || "", style: y || {}, children: [
      P ? /* @__PURE__ */ f.jsx(f.Fragment, { children: b ? /* @__PURE__ */ f.jsx(S, {}) : /* @__PURE__ */ f.jsx("button", { onClick: te, children: "Start" }) }) : null,
      /* @__PURE__ */ f.jsx(
        "button",
        {
          className: j || "",
          style: A || {},
          onClick: v,
          children: C ? l : c
        }
      ),
      N ? /* @__PURE__ */ f.jsx(f.Fragment, { children: L ? /* @__PURE__ */ f.jsx(q, {}) : /* @__PURE__ */ f.jsx("button", { onClick: B, children: "Stop" }) }) : null
    ] }) : null
  ] });
}
export {
  Mr as Audio,
  Ir as AudioPlayer,
  $r as AudioStream,
  Or as animation_visuals,
  Ar as detectNote,
  Sr as static_visuals,
  Ie as useAudio,
  $e as useCanvas
};
