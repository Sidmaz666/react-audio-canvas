import er, { useState as Y, useEffect as fe, useRef as ze, useCallback as xr, cloneElement as xe } from "react";
var Me = { exports: {} }, je = {};
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
  var a = er, i = Symbol.for("react.element"), s = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, c = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(n, l, h) {
    var d, g = {}, m = null, T = null;
    h !== void 0 && (m = "" + h), l.key !== void 0 && (m = "" + l.key), l.ref !== void 0 && (T = l.ref);
    for (d in l) o.call(l, d) && !u.hasOwnProperty(d) && (g[d] = l[d]);
    if (n && n.defaultProps) for (d in l = n.defaultProps, l) g[d] === void 0 && (g[d] = l[d]);
    return { $$typeof: i, type: n, key: m, ref: T, props: g, _owner: c.current };
  }
  return je.Fragment = s, je.jsx = v, je.jsxs = v, je;
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
    var a = er, i = Symbol.for("react.element"), s = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), n = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), A = Symbol.iterator, I = "@@iterator";
    function ne(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = A && e[A] || e[I];
      return typeof r == "function" ? r : null;
    }
    var P = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), p = 1; p < r; p++)
          t[p - 1] = arguments[p];
        M("error", e, t);
      }
    }
    function M(e, r, t) {
      {
        var p = P.ReactDebugCurrentFrame, x = p.getStackAddendum();
        x !== "" && (r += "%s", t = t.concat([x]));
        var w = t.map(function(R) {
          return String(R);
        });
        w.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, w);
      }
    }
    var Z = !1, V = !1, Q = !1, te = !1, ae = !1, H;
    H = Symbol.for("react.module.reference");
    function de(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === u || ae || e === c || e === h || e === d || te || e === T || Z || V || Q || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === g || e.$$typeof === v || e.$$typeof === n || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === H || e.getModuleId !== void 0));
    }
    function ie(e, r, t) {
      var p = e.displayName;
      if (p)
        return p;
      var x = r.displayName || r.name || "";
      return x !== "" ? t + "(" + x + ")" : t;
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
            return W(r) + ".Consumer";
          case v:
            var t = e;
            return W(t._context) + ".Provider";
          case l:
            return ie(e, e.render, "ForwardRef");
          case g:
            var p = e.displayName || null;
            return p !== null ? p : C(e.type) || "Memo";
          case m: {
            var x = e, w = x._payload, R = x._init;
            try {
              return C(R(w));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, N = 0, L, U, q, G, oe, ee, j;
    function J() {
    }
    J.__reactDisabledLog = !0;
    function D() {
      {
        if (N === 0) {
          L = console.log, U = console.info, q = console.warn, G = console.error, oe = console.group, ee = console.groupCollapsed, j = console.groupEnd;
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
            log: O({}, e, {
              value: L
            }),
            info: O({}, e, {
              value: U
            }),
            warn: O({}, e, {
              value: q
            }),
            error: O({}, e, {
              value: G
            }),
            group: O({}, e, {
              value: oe
            }),
            groupCollapsed: O({}, e, {
              value: ee
            }),
            groupEnd: O({}, e, {
              value: j
            })
          });
        }
        N < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = P.ReactCurrentDispatcher, $;
    function y(e, r, t) {
      {
        if ($ === void 0)
          try {
            throw Error();
          } catch (x) {
            var p = x.stack.trim().match(/\n( *(at )?)/);
            $ = p && p[1] || "";
          }
        return `
` + $ + e;
      }
    }
    var b = !1, k;
    {
      var B = typeof WeakMap == "function" ? WeakMap : Map;
      k = new B();
    }
    function ue(e, r) {
      if (!e || b)
        return "";
      {
        var t = k.get(e);
        if (t !== void 0)
          return t;
      }
      var p;
      b = !0;
      var x = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var w;
      w = X.current, X.current = null, D();
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
            } catch (re) {
              p = re;
            }
            Reflect.construct(e, [], R);
          } else {
            try {
              R.call();
            } catch (re) {
              p = re;
            }
            e.call(R.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (re) {
            p = re;
          }
          e();
        }
      } catch (re) {
        if (re && p && typeof re.stack == "string") {
          for (var E = re.stack.split(`
`), z = p.stack.split(`
`), S = E.length - 1, F = z.length - 1; S >= 1 && F >= 0 && E[S] !== z[F]; )
            F--;
          for (; S >= 1 && F >= 0; S--, F--)
            if (E[S] !== z[F]) {
              if (S !== 1 || F !== 1)
                do
                  if (S--, F--, F < 0 || E[S] !== z[F]) {
                    var le = `
` + E[S].replace(" at new ", " at ");
                    return e.displayName && le.includes("<anonymous>") && (le = le.replace("<anonymous>", e.displayName)), typeof e == "function" && k.set(e, le), le;
                  }
                while (S >= 1 && F >= 0);
              break;
            }
        }
      } finally {
        b = !1, X.current = w, K(), Error.prepareStackTrace = x;
      }
      var _e = e ? e.displayName || e.name : "", me = _e ? y(_e) : "";
      return typeof e == "function" && k.set(e, me), me;
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
        case h:
          return y("Suspense");
        case d:
          return y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return pe(e.render);
          case g:
            return se(e.type, r, t);
          case m: {
            var p = e, x = p._payload, w = p._init;
            try {
              return se(w(x), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var ce = Object.prototype.hasOwnProperty, he = {}, ye = P.ReactDebugCurrentFrame;
    function ve(e) {
      if (e) {
        var r = e._owner, t = se(e.type, e._source, r ? r.type : null);
        ye.setExtraStackFrame(t);
      } else
        ye.setExtraStackFrame(null);
    }
    function Ee(e, r, t, p, x) {
      {
        var w = Function.call.bind(ce);
        for (var R in e)
          if (w(e, R)) {
            var E = void 0;
            try {
              if (typeof e[R] != "function") {
                var z = Error((p || "React class") + ": " + t + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              E = e[R](r, R, p, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              E = S;
            }
            E && !(E instanceof Error) && (ve(x), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", t, R, typeof E), ve(null)), E instanceof Error && !(E.message in he) && (he[E.message] = !0, ve(x), _("Failed %s type: %s", t, E.message), ve(null));
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
        return Le(e), !1;
      } catch {
        return !0;
      }
    }
    function Le(e) {
      return "" + e;
    }
    function Ue(e) {
      if (tr(e))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Pe(e)), Le(e);
    }
    var Ce = P.ReactCurrentOwner, ar = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, qe, Be, ke;
    ke = {};
    function ir(e) {
      if (ce.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function or(e) {
      if (ce.call(e, "key")) {
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
          qe || (qe = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          Be || (Be = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var cr = function(e, r, t, p, x, w, R) {
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
        value: x
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    };
    function fr(e, r, t, p, x) {
      {
        var w, R = {}, E = null, z = null;
        t !== void 0 && (Ue(t), E = "" + t), or(r) && (Ue(r.key), E = "" + r.key), ir(r) && (z = r.ref, sr(r, x));
        for (w in r)
          ce.call(r, w) && !ar.hasOwnProperty(w) && (R[w] = r[w]);
        if (e && e.defaultProps) {
          var S = e.defaultProps;
          for (w in S)
            R[w] === void 0 && (R[w] = S[w]);
        }
        if (E || z) {
          var F = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          E && lr(R, F), z && ur(R, F);
        }
        return cr(e, E, z, x, p, Ce.current, R);
      }
    }
    var Se = P.ReactCurrentOwner, Ye = P.ReactDebugCurrentFrame;
    function Re(e) {
      if (e) {
        var r = e._owner, t = se(e.type, e._source, r ? r.type : null);
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
        var p = "";
        e && e._owner && e._owner !== Se.current && (p = " It was passed a child from " + C(e._owner.type) + "."), Re(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, p), Re(null);
      }
    }
    function Je(e, r) {
      {
        if (typeof e != "object")
          return;
        if (we(e))
          for (var t = 0; t < e.length; t++) {
            var p = e[t];
            De(p) && Ge(p, r);
          }
        else if (De(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var x = ne(e);
          if (typeof x == "function" && x !== e.entries)
            for (var w = x.call(e), R; !(R = w.next()).done; )
              De(R.value) && Ge(R.value, r);
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
        r.$$typeof === g))
          t = r.propTypes;
        else
          return;
        if (t) {
          var p = C(r);
          Ee(t, e.props, "prop", p, e);
        } else if (r.PropTypes !== void 0 && !Oe) {
          Oe = !0;
          var x = C(r);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var p = r[t];
          if (p !== "children" && p !== "key") {
            Re(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), Re(null);
            break;
          }
        }
        e.ref !== null && (Re(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), Re(null));
      }
    }
    var Ke = {};
    function Xe(e, r, t, p, x, w) {
      {
        var R = de(e);
        if (!R) {
          var E = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = dr();
          z ? E += z : E += Ve();
          var S;
          e === null ? S = "null" : we(e) ? S = "array" : e !== void 0 && e.$$typeof === i ? (S = "<" + (C(e.type) || "Unknown") + " />", E = " Did you accidentally export a JSX literal instead of a component?") : S = typeof e, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", S, E);
        }
        var F = fr(e, r, t, x, w);
        if (F == null)
          return F;
        if (R) {
          var le = r.children;
          if (le !== void 0)
            if (p)
              if (we(le)) {
                for (var _e = 0; _e < le.length; _e++)
                  Je(le[_e], e);
                Object.freeze && Object.freeze(le);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Je(le, e);
        }
        if (ce.call(r, "key")) {
          var me = C(e), re = Object.keys(r).filter(function(_r) {
            return _r !== "key";
          }), Fe = re.length > 0 ? "{key: someKey, " + re.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ke[me + Fe]) {
            var Rr = re.length > 0 ? "{" + re.join(": ..., ") + ": ...}" : "{}";
            _(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Fe, me, Rr, me), Ke[me + Fe] = !0;
          }
        }
        return e === o ? hr(F) : pr(F), F;
      }
    }
    function yr(e, r, t) {
      return Xe(e, r, t, !0);
    }
    function mr(e, r, t) {
      return Xe(e, r, t, !1);
    }
    var gr = mr, Er = yr;
    Te.Fragment = o, Te.jsx = gr, Te.jsxs = Er;
  }()), Te;
}
process.env.NODE_ENV === "production" ? Me.exports = br() : Me.exports = wr();
var f = Me.exports;
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
      const d = i / l, g = Cr(d), m = c[g % 12], T = Math.floor((g - 12) / 12), A = Tr(d, g);
      v.push({
        frequency: d.toFixed(2),
        pitch: `${m}${T}`,
        octave: T,
        confidence: h.toFixed(2),
        note: m,
        cents: A
      });
    }
  return v.length > 0 ? v : null;
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
  for (let m = 0; m < Math.ceil(c.duration); m++)
    l.getFloatFrequencyData(d.subarray(m * h, (m + 1) * h));
  return d.some((m) => m !== -1 / 0) ? { dataArray: d, audioDuration: c.duration } : (console.warn("AnalyserNode data contains only -Infinity values. This may indicate an issue with the audio data or configuration."), u);
}
async function kr(a, i, s) {
  const o = i.createBufferSource();
  o.buffer = a;
  const c = i.createAnalyser();
  c.fftSize = s;
  const u = c.frequencyBinCount, v = new Float32Array(u);
  return o.connect(c), o.start(), o.playbackRate.value = 10, new Promise((n, l) => {
    let g = 0;
    function m() {
      c.getFloatFrequencyData(v), v.some((A) => A !== -1 / 0) || g >= 20 ? (o.stop(), n({ dataArray: v, audioDuration: a.duration })) : (g++, setTimeout(m, 100));
    }
    m();
  });
}
function Ie(a, i = 64, s = !1) {
  const [o, c] = Y(!1), [u, v] = Y(!1), [n, l] = Y(null), [h, d] = Y(null), [g, m] = Y(null), [T, A] = Y(null), [I, ne] = Y(null), [P, _] = Y(null), [M, Z] = Y(null), [V, Q] = Y(null), [te, ae] = Y(null), [H, de] = Y(0), [ie, W] = Y(0), [C, O] = Y(0), [N, L] = Y([]), U = async (y) => {
    l(new Audio(await He(y)));
  }, q = async (y) => {
    const { dataArray: b, audioDuration: k } = await Pr(y, i);
    ae(b), de(k);
  }, G = () => {
    n != null && (n.play(), c(!0));
  }, oe = () => {
    n != null && (n.pause(), c(!1));
  }, ee = () => {
    n != null && (n.ended || n.paused ? (n.play(), c(!0)) : (n.pause(), c(!1)));
  }, j = () => {
    n != null && (n.pause(), n.currentTime = 0, c(!1));
  }, J = (y) => {
    if (n == null || isNaN(y)) return;
    const b = y / 100;
    n.volume = b, O(b * 100);
  }, D = async () => {
    try {
      const y = await navigator.mediaDevices.getUserMedia({ audio: !0 });
      Z(y);
      const b = h || new (window.AudioContext || window.webkitAudioContext)();
      d(b);
      const k = b.createMediaStreamSource(y);
      Q(k);
      const B = b.createAnalyser();
      _(B), k.connect(B), B.fftSize = i;
      const ue = B.frequencyBinCount;
      A(ue), ne(new Uint8Array(ue));
    } catch (y) {
      console.error("Error capturing microphone audio:", y);
    }
  }, K = () => {
    M && (M.getAudioTracks().forEach((y) => y.enabled = !1), v(!0));
  }, X = () => {
    M && (M.getAudioTracks().forEach((y) => y.enabled = !0), v(!1));
  }, $ = () => {
    M && (M.getTracks().forEach((y) => y.stop()), Z(null)), h && (h.close(), d(null), _(null), m(null), Q(null), A(null), ne(null)), s && L([]);
  };
  return fe(() => {
    a !== null && (U(a), q(a));
  }, [a]), fe(() => (n !== null && (n.addEventListener("ended", j), O(n.volume * 100), setInterval(() => {
    W(n.currentTime);
  }, 100)), () => {
    n != null && n.removeEventListener("ended", j);
  }), [n]), fe(() => {
    if (!o) return;
    let y = g, b = P, k = h, B = T;
    h == null && (k = new (window.AudioContext || window.webkitAudioContext)(), d(k)), g == null && n !== null && (y = k.createMediaElementSource(n), m(y)), P == null && (b = k.createAnalyser(), _(b)), y && (y.connect(b), y.connect(k.destination)), b.fftSize = i, B = b.frequencyBinCount, A(B), ne(new Uint8Array(B));
  }, [o, a, i]), fe(() => {
    const y = () => {
      if (V == null && !o || u && M !== null) return;
      P.getByteFrequencyData(I);
      const b = Ar(I, h.sampleRate);
      b !== null && L(b), requestAnimationFrame(y);
    };
    (I !== null || P !== null || h !== null) && s && y();
  }, [I, o, P, u, h, M, V, s]), {
    audioNode: n,
    audioContext: h,
    audioSource: g,
    isPlaying: o,
    play: G,
    pause: oe,
    toggleAudio: ee,
    stopAudio: j,
    setVolume: J,
    analyzer: P,
    bufferLength: T,
    dataArray: I,
    audioToBase64: He,
    captureMicrophone: D,
    muteMicrophone: K,
    unmuteMicrophone: X,
    stopMicrophone: $,
    microphoneSource: V,
    mediaStream: M,
    isMute: u,
    audioFrequencyData: te,
    audioDuration: H,
    audioCurrentTime: ie,
    audioVolume: C,
    detectedNotes: N
  };
}
function $e({ width: a, height: i }) {
  const s = ze(null), o = ze(null);
  return fe(() => {
    if (s == null) return;
    const u = s.current.getContext("2d");
    o.current = u;
  }, [s, a, i]), { Canvas: xr(({ ...u }) => /* @__PURE__ */ f.jsx("canvas", { ref: s, width: a, height: i, ...u }), [s, a, i]), canvasContext: o == null ? void 0 : o.current, canvasNode: s == null ? void 0 : s.current };
}
function Ne({
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
  color: g = "white",
  colorFunction: m,
  audioDuration: T = 0,
  type: A
}) {
  if (A == "player" && !a || A == "stream" && i || s == null || o == null || c == null || u == null || v == null || !n) return;
  l || (l = u.width / o);
  function I() {
    d = 0, v.clearRect(0, 0, u.width, u.height), s.getByteFrequencyData(c), n({
      barHeight: h,
      barWidth: l,
      canvasContext: v,
      x: d,
      color: g,
      colorFunction: m,
      audioDuration: T,
      dataArray: c,
      bufferLength: o,
      canvasNode: u
    }), requestAnimationFrame(I);
  }
  I();
}
function rr({
  audioFrequencyData: a,
  canvasNode: i,
  canvasContext: s,
  visualizer: o,
  barWidth: c = !1,
  barHeight: u = !1,
  x: v = 0,
  color: n = "white",
  colorFunction: l,
  audioDuration: h = 0
}) {
  if (a == null || !o) return;
  const d = Object.keys(a).length;
  c || (c = i.width / d), s.clearRect(0, 0, i.width, i.height), o({
    dataArray: a,
    barHeight: u,
    barWidth: c,
    canvasContext: s,
    x: v,
    color: n,
    colorFunction: l,
    audioDuration: h,
    canvasNode: i
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
  rr({
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
function Ae(a) {
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
  customVolume: g = !1,
  volumeLevel: m = !1,
  enableDuration: T = !1,
  durationClassName: A = "",
  durationStyle: I = !1,
  enableCurrentTime: ne = !1,
  currentTimeClassName: P = "",
  currentTimeStyle: _ = !1,
  hideVolume: M = !0,
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
  horizontalOffset: O = 0,
  color: N = "black",
  colorFunction: L = !1,
  customVisualizer: U = !1,
  customFunction: q = !1
}) {
  const {
    isPlaying: G,
    toggleAudio: oe,
    audioNode: ee,
    audioDuration: j,
    audioCurrentTime: J,
    setVolume: D,
    audioVolume: K,
    stopAudio: X,
    audioFrequencyData: $
  } = Ie(a, n), { Canvas: y, canvasContext: b, canvasNode: k } = $e({
    width: s,
    height: o
  }), B = () => {
    if (ie)
      return xe(ie, {
        onClick: X
      });
  }, ue = ({ className: pe, style: ge, volumeClassName: se, volumeStyle: ce, labelClassName: he, labelStyle: ye, labelIndicator: ve = "%" }) => {
    if (!g) return;
    const Ee = xe(g, {
      onChange: (be) => {
        D(be.target.value);
      },
      value: K,
      min: 0,
      max: 100,
      className: se || "",
      style: ce || {}
    });
    return /* @__PURE__ */ f.jsxs("div", { className: pe || "", style: ge || "", children: [
      Ee,
      m ? /* @__PURE__ */ f.jsxs(
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
  return fe(() => {
    Z && D(0), U ? rr({
      audioFrequencyData: $,
      canvasNode: k,
      canvasContext: b,
      color: N,
      colorFunction: L,
      barWidth: W,
      barHeight: C,
      x: O,
      visualizer: U,
      audioDuration: j
    }) : Dr({
      dataArray: $,
      canvasNode: k,
      canvasContext: b,
      color: N,
      colorFunction: L,
      barWidth: W,
      barHeight: C,
      x: O,
      audioDuration: j
    });
  }, [
    $,
    k,
    b,
    N,
    L,
    W,
    C,
    O,
    U,
    Z,
    D,
    j
  ]), fe(() => {
    q && q({ audioNode: ee, audioFrequencyData: $, audioDuration: j });
  }, [q, ee, $, j]), /* @__PURE__ */ f.jsxs("div", { className: l || "", style: V || {}, children: [
    /* @__PURE__ */ f.jsx(
      y,
      {
        onClick: i ? oe : null,
        className: Q || "",
        style: te || {}
      }
    ),
    c ? /* @__PURE__ */ f.jsxs("div", { className: h || "", style: d || {}, children: [
      /* @__PURE__ */ f.jsx(
        "button",
        {
          className: ae || "",
          style: H || {},
          onClick: oe,
          children: G ? u : v
        }
      ),
      de ? /* @__PURE__ */ f.jsx(f.Fragment, { children: ie ? /* @__PURE__ */ f.jsx(B, {}) : /* @__PURE__ */ f.jsx("button", { onClick: X, children: "Stop" }) }) : null,
      M ? null : /* @__PURE__ */ f.jsx(f.Fragment, { children: g ? /* @__PURE__ */ f.jsx(ue, {}) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
        /* @__PURE__ */ f.jsx("input", { type: "range", min: 0, max: 100, value: K, onChange: (pe) => {
          D(pe.target.value);
        } }),
        m ? /* @__PURE__ */ f.jsxs("p", { children: [
          parseInt(K).toFixed(0),
          "%"
        ] }) : null
      ] }) }),
      ne ? /* @__PURE__ */ f.jsx(
        "p",
        {
          className: P || "",
          style: _ || {},
          children: Ae(J || 0)
        }
      ) : null,
      T ? /* @__PURE__ */ f.jsx(
        "p",
        {
          className: A || "",
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
  analyzer: s,
  bufferLength: o,
  dataArray: c,
  canvasNode: u,
  canvasContext: v,
  barWidth: n = !1,
  barHeight: l = !1,
  x: h = 0,
  color: d = "black",
  colorFunction: g = !1,
  audioDuration: m = 0,
  type: T
}) {
  Ne({
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
    colorFunction: g,
    type: T,
    audioDuration: m
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
  customVolume: g = !1,
  volumeLevel: m = !1,
  enableDuration: T = !1,
  durationClassName: A = "",
  durationStyle: I = !1,
  enableCurrentTime: ne = !1,
  currentTimeClassName: P = "",
  currentTimeStyle: _ = !1,
  hideVolume: M = !0,
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
  horizontalOffset: O = 0,
  color: N = "black",
  colorFunction: L = !1,
  customVisualizer: U = !1,
  customFunction: q = !1
}) {
  const {
    isPlaying: G,
    toggleAudio: oe,
    analyzer: ee,
    bufferLength: j,
    dataArray: J,
    audioDuration: D,
    audioCurrentTime: K,
    setVolume: X,
    audioVolume: $,
    stopAudio: y,
    audioNode: b
  } = Ie(a, n), { Canvas: k, canvasContext: B, canvasNode: ue } = $e({
    width: s,
    height: o
  }), pe = () => {
    if (ie)
      return xe(ie, {
        onClick: y
      });
  }, ge = ({ className: se, style: ce, volumeClassName: he, volumeStyle: ye, labelClassName: ve, labelStyle: Ee, labelIndicator: be = "%" }) => {
    if (!g) return;
    const we = xe(g, {
      onChange: (Pe) => {
        X(Pe.target.value);
      },
      value: $,
      min: 0,
      max: 100,
      className: he || "",
      style: ye || {}
    });
    return /* @__PURE__ */ f.jsxs("div", { className: se || "", style: ce || "", children: [
      we,
      m ? /* @__PURE__ */ f.jsxs(
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
  return fe(() => {
    Z && X(0), U ? Ne({
      isPlaying: G,
      analyzer: ee,
      bufferLength: j,
      dataArray: J,
      canvasNode: ue,
      canvasContext: B,
      color: N,
      colorFunction: L,
      barWidth: W,
      barHeight: C,
      x: O,
      visualizer: U,
      type: "player",
      audioDuration: D
    }) : nr({
      isPlaying: G,
      analyzer: ee,
      bufferLength: j,
      dataArray: J,
      canvasNode: ue,
      canvasContext: B,
      color: N,
      colorFunction: L,
      barWidth: W,
      barHeight: C,
      x: O,
      type: "player",
      audioDuration: D
    });
  }, [
    G,
    ee,
    j,
    J,
    ue,
    B,
    N,
    L,
    W,
    C,
    O,
    U,
    Z,
    X,
    D
  ]), fe(() => {
    q && q({ audioNode: b, audioDuration: D, dataArray: J, bufferLength: j });
  }, [q, b, D, J, j]), /* @__PURE__ */ f.jsxs("div", { className: l || "", style: V || {}, children: [
    /* @__PURE__ */ f.jsx(
      k,
      {
        onClick: i ? oe : null,
        className: Q || "",
        style: te || {}
      }
    ),
    c ? /* @__PURE__ */ f.jsxs("div", { className: h || "", style: d || {}, children: [
      /* @__PURE__ */ f.jsx(
        "button",
        {
          className: ae || "",
          style: H || {},
          onClick: oe,
          children: G ? u : v
        }
      ),
      de ? /* @__PURE__ */ f.jsx(f.Fragment, { children: ie ? /* @__PURE__ */ f.jsx(pe, {}) : /* @__PURE__ */ f.jsx("button", { onClick: y, children: "Stop" }) }) : null,
      M ? null : /* @__PURE__ */ f.jsx(f.Fragment, { children: g ? /* @__PURE__ */ f.jsx(ge, {}) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
        /* @__PURE__ */ f.jsx("input", { type: "range", min: 0, max: 100, value: $, onChange: (se) => {
          X(se.target.value);
        } }),
        m ? /* @__PURE__ */ f.jsxs("p", { children: [
          parseInt($).toFixed(0),
          "%"
        ] }) : null
      ] }) }),
      ne ? /* @__PURE__ */ f.jsx(
        "p",
        {
          className: P || "",
          style: _ || {},
          children: Ae(K || 0)
        }
      ) : null,
      T ? /* @__PURE__ */ f.jsx(
        "p",
        {
          className: A || "",
          style: I || {},
          children: Ae(D || 0)
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
  unmuteButton: u = "Unmute",
  dataCount: v = 64,
  className: n = "",
  controlsClassName: l = "",
  constrolsStyle: h = !1,
  style: d = !1,
  canvasClassName: g = "",
  canvasStyle: m = !1,
  toggleClassName: T = "",
  toggleStyle: A = !1,
  stopButton: I = !0,
  customStopButton: ne = !1,
  startButton: P = !0,
  customStartButton: _ = !1,
  barWidth: M = !1,
  barHeight: Z = !1,
  horizontalOffset: V = 0,
  color: Q = "black",
  colorFunction: te = !1,
  customVisualizer: ae = !1,
  customFunction: H = !1
}) {
  const [de, ie] = Y(!0), {
    captureMicrophone: W,
    isMute: C,
    muteMicrophone: O,
    unmuteMicrophone: N,
    stopMicrophone: L,
    analyzer: U,
    bufferLength: q,
    dataArray: G,
    audioNode: oe,
    microphoneSource: ee,
    mediaStream: j
  } = Ie(null, v), { Canvas: J, canvasContext: D, canvasNode: K } = $e({
    width: i,
    height: s
  }), X = () => {
    if (ne)
      return xe(ne, {
        onClick: L
      });
  }, $ = () => {
    if (_)
      return xe(_, {
        onClick: W
      });
  };
  fe(() => {
    ae ? Ne({
      isMute: C,
      analyzer: U,
      bufferLength: q,
      dataArray: G,
      canvasNode: K,
      canvasContext: D,
      color: Q,
      colorFunction: te,
      barWidth: M,
      barHeight: Z,
      x: V,
      visualizer: ae,
      type: "stream"
    }) : nr({
      isMute: C,
      analyzer: U,
      bufferLength: q,
      dataArray: G,
      canvasNode: K,
      canvasContext: D,
      color: Q,
      colorFunction: te,
      barWidth: M,
      barHeight: Z,
      x: V,
      type: "stream"
    });
  }, [
    C,
    U,
    q,
    G,
    K,
    D,
    Q,
    te,
    M,
    Z,
    V,
    ae
  ]), fe(() => {
    H && H({ audioNode: oe, microphoneSource: ee, mediaStream: j });
  }, [H, oe, ee, j]);
  const y = () => {
    ie(!de), !de ? N() : O();
  };
  return /* @__PURE__ */ f.jsxs("div", { className: n || "", style: d || {}, children: [
    /* @__PURE__ */ f.jsx(
      J,
      {
        onClick: a ? y : null,
        className: g || "",
        style: m || {}
      }
    ),
    o ? /* @__PURE__ */ f.jsxs("div", { className: l || "", style: h || {}, children: [
      P ? /* @__PURE__ */ f.jsx(f.Fragment, { children: _ ? /* @__PURE__ */ f.jsx($, {}) : /* @__PURE__ */ f.jsx("button", { onClick: W, children: "Start" }) }) : null,
      /* @__PURE__ */ f.jsx(
        "button",
        {
          className: T || "",
          style: A || {},
          onClick: y,
          children: C ? u : c
        }
      ),
      I ? /* @__PURE__ */ f.jsx(f.Fragment, { children: ne ? /* @__PURE__ */ f.jsx(X, {}) : /* @__PURE__ */ f.jsx("button", { onClick: L, children: "Stop" }) }) : null
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
