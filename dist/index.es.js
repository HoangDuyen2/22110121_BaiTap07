import Oe, { createContext as pr, useReducer as yr, useContext as mr, useState as N } from "react";
var Z = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function gr() {
  if (Se) return $;
  Se = 1;
  var o = Oe, l = Symbol.for("react.element"), u = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, g = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function p(d, b, P) {
    var _, C = {}, T = null, V = null;
    P !== void 0 && (T = "" + P), b.key !== void 0 && (T = "" + b.key), b.ref !== void 0 && (V = b.ref);
    for (_ in b) f.call(b, _) && !h.hasOwnProperty(_) && (C[_] = b[_]);
    if (d && d.defaultProps) for (_ in b = d.defaultProps, b) C[_] === void 0 && (C[_] = b[_]);
    return { $$typeof: l, type: d, key: T, ref: V, props: C, _owner: g.current };
  }
  return $.Fragment = u, $.jsx = p, $.jsxs = p, $;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function hr() {
  return Te || (Te = 1, process.env.NODE_ENV !== "production" && function() {
    var o = Oe, l = Symbol.for("react.element"), u = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), p = Symbol.for("react.provider"), d = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), V = Symbol.for("react.offscreen"), ee = Symbol.iterator, ke = "@@iterator";
    function De(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ee && e[ee] || e[ke];
      return typeof r == "function" ? r : null;
    }
    var k = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Ae("error", e, t);
      }
    }
    function Ae(e, r, t) {
      {
        var n = k.ReactDebugCurrentFrame, c = n.getStackAddendum();
        c !== "" && (r += "%s", t = t.concat([c]));
        var v = t.map(function(s) {
          return String(s);
        });
        v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var Ie = !1, Fe = !1, We = !1, $e = !1, Ye = !1, re;
    re = Symbol.for("react.module.reference");
    function Ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === f || e === h || Ye || e === g || e === P || e === _ || $e || e === V || Ie || Fe || We || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === C || e.$$typeof === p || e.$$typeof === d || e.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function Ve(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var c = r.displayName || r.name || "";
      return c !== "" ? t + "(" + c + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case f:
          return "Fragment";
        case u:
          return "Portal";
        case h:
          return "Profiler";
        case g:
          return "StrictMode";
        case P:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            var r = e;
            return te(r) + ".Consumer";
          case p:
            var t = e;
            return te(t._context) + ".Provider";
          case b:
            return Ve(e, e.render, "ForwardRef");
          case C:
            var n = e.displayName || null;
            return n !== null ? n : S(e.type) || "Memo";
          case T: {
            var c = e, v = c._payload, s = c._init;
            try {
              return S(s(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, F = 0, ne, ae, ie, oe, se, le, ue;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function Le() {
      {
        if (F === 0) {
          ne = console.log, ae = console.info, ie = console.warn, oe = console.error, se = console.group, le = console.groupCollapsed, ue = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ce,
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
        F++;
      }
    }
    function Me() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, e, {
              value: ne
            }),
            info: w({}, e, {
              value: ae
            }),
            warn: w({}, e, {
              value: ie
            }),
            error: w({}, e, {
              value: oe
            }),
            group: w({}, e, {
              value: se
            }),
            groupCollapsed: w({}, e, {
              value: le
            }),
            groupEnd: w({}, e, {
              value: ue
            })
          });
        }
        F < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = k.ReactCurrentDispatcher, B;
    function L(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (c) {
            var n = c.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
          }
        return `
` + B + e;
      }
    }
    var J = !1, M;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      M = new Ue();
    }
    function fe(e, r) {
      if (!e || J)
        return "";
      {
        var t = M.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      J = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = z.current, z.current = null, Le();
      try {
        if (r) {
          var s = function() {
            throw Error();
          };
          if (Object.defineProperty(s.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(s, []);
            } catch (R) {
              n = R;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (R) {
              n = R;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (R) {
            n = R;
          }
          e();
        }
      } catch (R) {
        if (R && n && typeof R.stack == "string") {
          for (var i = R.stack.split(`
`), E = n.stack.split(`
`), y = i.length - 1, m = E.length - 1; y >= 1 && m >= 0 && i[y] !== E[m]; )
            m--;
          for (; y >= 1 && m >= 0; y--, m--)
            if (i[y] !== E[m]) {
              if (y !== 1 || m !== 1)
                do
                  if (y--, m--, m < 0 || i[y] !== E[m]) {
                    var j = `
` + i[y].replace(" at new ", " at ");
                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, j), j;
                  }
                while (y >= 1 && m >= 0);
              break;
            }
        }
      } finally {
        J = !1, z.current = v, Me(), Error.prepareStackTrace = c;
      }
      var A = e ? e.displayName || e.name : "", O = A ? L(A) : "";
      return typeof e == "function" && M.set(e, O), O;
    }
    function qe(e, r, t) {
      return fe(e, !1);
    }
    function ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, ze(e));
      if (typeof e == "string")
        return L(e);
      switch (e) {
        case P:
          return L("Suspense");
        case _:
          return L("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            return qe(e.render);
          case C:
            return U(e.type, r, t);
          case T: {
            var n = e, c = n._payload, v = n._init;
            try {
              return U(v(c), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var W = Object.prototype.hasOwnProperty, de = {}, ve = k.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, c) {
      {
        var v = Function.call.bind(W);
        for (var s in e)
          if (v(e, s)) {
            var i = void 0;
            try {
              if (typeof e[s] != "function") {
                var E = Error((n || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              i = e[s](r, s, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              i = y;
            }
            i && !(i instanceof Error) && (q(c), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, s, typeof i), q(null)), i instanceof Error && !(i.message in de) && (de[i.message] = !0, q(c), x("Failed %s type: %s", t, i.message), q(null));
          }
      }
    }
    var Je = Array.isArray;
    function K(e) {
      return Je(e);
    }
    function Ke(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ge(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function ye(e) {
      if (Ge(e))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), pe(e);
    }
    var me = k.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ge, he;
    function Xe(e) {
      if (W.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (W.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      typeof e.ref == "string" && me.current;
    }
    function er(e, r) {
      {
        var t = function() {
          ge || (ge = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          he || (he = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, c, v, s) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: s,
        // Record the component responsible for creating this element.
        _owner: v
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function nr(e, r, t, n, c) {
      {
        var v, s = {}, i = null, E = null;
        t !== void 0 && (ye(t), i = "" + t), He(r) && (ye(r.key), i = "" + r.key), Xe(r) && (E = r.ref, Ze(r, c));
        for (v in r)
          W.call(r, v) && !Qe.hasOwnProperty(v) && (s[v] = r[v]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (v in y)
            s[v] === void 0 && (s[v] = y[v]);
        }
        if (i || E) {
          var m = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && er(s, m), E && rr(s, m);
        }
        return tr(e, i, E, c, n, me.current, s);
      }
    }
    var G = k.ReactCurrentOwner, be = k.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = U(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function X(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function xe() {
      {
        if (G.current) {
          var e = S(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      return "";
    }
    var Ee = {};
    function ir(e) {
      {
        var r = xe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + S(e._owner.type) + "."), D(e), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), D(null);
      }
    }
    function _e(e, r) {
      {
        if (typeof e != "object")
          return;
        if (K(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            X(n) && Re(n, r);
          }
        else if (X(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = De(e);
          if (typeof c == "function" && c !== e.entries)
            for (var v = c.call(e), s; !(s = v.next()).done; )
              X(s.value) && Re(s.value, r);
        }
      }
    }
    function or(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === C))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = S(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var c = S(r);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            D(e), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), x("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var je = {};
    function Ce(e, r, t, n, c, v) {
      {
        var s = Ne(e);
        if (!s) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = ar();
          E ? i += E : i += xe();
          var y;
          e === null ? y = "null" : K(e) ? y = "array" : e !== void 0 && e.$$typeof === l ? (y = "<" + (S(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, i);
        }
        var m = nr(e, r, t, c, v);
        if (m == null)
          return m;
        if (s) {
          var j = r.children;
          if (j !== void 0)
            if (n)
              if (K(j)) {
                for (var A = 0; A < j.length; A++)
                  _e(j[A], e);
                Object.freeze && Object.freeze(j);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(j, e);
        }
        if (W.call(r, "key")) {
          var O = S(e), R = Object.keys(r).filter(function(vr) {
            return vr !== "key";
          }), H = R.length > 0 ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!je[O + H]) {
            var dr = R.length > 0 ? "{" + R.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, H, O, dr, O), je[O + H] = !0;
          }
        }
        return e === f ? sr(m) : or(m), m;
      }
    }
    function lr(e, r, t) {
      return Ce(e, r, t, !0);
    }
    function ur(e, r, t) {
      return Ce(e, r, t, !1);
    }
    var cr = ur, fr = lr;
    Y.Fragment = f, Y.jsx = cr, Y.jsxs = fr;
  }()), Y;
}
process.env.NODE_ENV === "production" ? Z.exports = gr() : Z.exports = hr();
var a = Z.exports;
const I = ({
  variant: o = "primary",
  style: l,
  children: u,
  ...f
}) => {
  const g = {
    padding: "8px 12px",
    borderRadius: 6,
    border: "none",
    cursor: "pointer",
    fontSize: 14
  }, h = {
    primary: { background: "#2563eb", color: "#fff" },
    secondary: { background: "#e5e7eb", color: "#111" }
  };
  return /* @__PURE__ */ a.jsx("button", { style: { ...g, ...h[o], ...l }, ...f, children: u });
}, Sr = ({ label: o, style: l, ...u }) => {
  const f = {
    display: "flex",
    flexDirection: "column",
    gap: 6
  }, g = {
    padding: "8px 10px",
    borderRadius: 6,
    border: "1px solid #d1d5db",
    fontSize: 14
  };
  return /* @__PURE__ */ a.jsxs("label", { style: f, children: [
    o && /* @__PURE__ */ a.jsx("span", { style: { fontSize: 13 }, children: o }),
    /* @__PURE__ */ a.jsx("input", { style: { ...g, ...l }, ...u })
  ] });
}, br = ({ open: o, onClose: l, title: u, children: f }) => {
  if (!o) return null;
  const g = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999
  }, h = {
    background: "#fff",
    padding: 20,
    borderRadius: 8,
    minWidth: 300,
    maxWidth: "90%"
  };
  return /* @__PURE__ */ a.jsx("div", { style: g, onClick: l, children: /* @__PURE__ */ a.jsxs("div", { style: h, onClick: (p) => p.stopPropagation(), children: [
    u && /* @__PURE__ */ a.jsx("h3", { style: { marginTop: 0 }, children: u }),
    f
  ] }) });
}, we = ({ children: o, style: l }) => {
  const u = {
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    padding: 12,
    background: "#fff",
    boxShadow: "0 1px 2px rgba(0,0,0,0.03)"
  };
  return /* @__PURE__ */ a.jsx("div", { style: { ...u, ...l }, children: o });
}, xr = { items: [] };
function Er(o, l) {
  switch (l.type) {
    case "ADD":
      return o.items.find((f) => f.id === l.item.id) ? {
        items: o.items.map(
          (f) => f.id === l.item.id ? { ...f, qty: f.qty + l.item.qty } : f
        )
      } : { items: [...o.items, l.item] };
    case "UPDATE":
      return {
        items: o.items.map(
          (u) => u.id === l.id ? { ...u, ...l.item } : u
        )
      };
    case "REMOVE":
      return { items: o.items.filter((u) => u.id !== l.id) };
    case "CLEAR":
      return { items: [] };
    default:
      return o;
  }
}
const Pe = pr(void 0), Tr = ({
  children: o
}) => {
  const [l, u] = yr(Er, xr), f = (d) => u({ type: "ADD", item: d }), g = (d, b) => u({ type: "UPDATE", id: d, item: b }), h = (d) => u({ type: "REMOVE", id: d }), p = () => u({ type: "CLEAR" });
  return /* @__PURE__ */ a.jsx(
    Pe.Provider,
    {
      value: { items: l.items, addItem: f, updateItem: g, removeItem: h, clear: p },
      children: o
    }
  );
}, Rr = () => {
  const o = mr(Pe);
  if (!o) throw new Error("useCart must be used within CartProvider");
  return o;
}, _r = ({
  onAdd: o
}) => {
  const [l, u] = N(""), [f, g] = N(1), h = (p) => {
    p == null || p.preventDefault(), l && (o({ id: `${Date.now()}`, name: l, qty: f, price: 0 }), u(""), g(1));
  };
  return /* @__PURE__ */ a.jsxs(
    "form",
    {
      onSubmit: h,
      style: { display: "flex", gap: 8, alignItems: "flex-end" },
      children: [
        /* @__PURE__ */ a.jsxs("label", { style: { display: "flex", flexDirection: "column" }, children: [
          /* @__PURE__ */ a.jsx("span", { style: { fontSize: 13 }, children: "Name" }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              value: l,
              onChange: (p) => u(p.target.value),
              style: { padding: 8, borderRadius: 6 }
            }
          )
        ] }),
        /* @__PURE__ */ a.jsxs("label", { style: { display: "flex", flexDirection: "column" }, children: [
          /* @__PURE__ */ a.jsx("span", { style: { fontSize: 13 }, children: "Qty" }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "number",
              value: f,
              onChange: (p) => g(Number(p.target.value)),
              style: { padding: 8, borderRadius: 6, width: 80 }
            }
          )
        ] }),
        /* @__PURE__ */ a.jsx(I, { type: "submit", children: "Add" })
      ]
    }
  );
}, wr = () => {
  const { items: o, addItem: l, updateItem: u, removeItem: f, clear: g } = Rr(), [h, p] = N(null);
  return /* @__PURE__ */ a.jsxs("div", { style: { display: "grid", gap: 12 }, children: [
    /* @__PURE__ */ a.jsxs(we, { children: [
      /* @__PURE__ */ a.jsx("h3", { style: { marginTop: 0 }, children: "Add Item" }),
      /* @__PURE__ */ a.jsx(_r, { onAdd: (d) => l(d) })
    ] }),
    /* @__PURE__ */ a.jsxs(we, { children: [
      /* @__PURE__ */ a.jsxs("h3", { style: { marginTop: 0 }, children: [
        "Cart (",
        o.length,
        ")"
      ] }),
      o.length === 0 && /* @__PURE__ */ a.jsx("div", { style: { color: "#6b7280" }, children: "Cart is empty" }),
      /* @__PURE__ */ a.jsx(
        "ul",
        {
          style: {
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "grid",
            gap: 8
          },
          children: o.map((d) => /* @__PURE__ */ a.jsxs(
            "li",
            {
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              },
              children: [
                /* @__PURE__ */ a.jsxs("div", { children: [
                  /* @__PURE__ */ a.jsx("div", { style: { fontWeight: 600 }, children: d.name }),
                  /* @__PURE__ */ a.jsxs("div", { style: { color: "#6b7280", fontSize: 13 }, children: [
                    "Qty: ",
                    d.qty
                  ] })
                ] }),
                /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", gap: 8 }, children: [
                  /* @__PURE__ */ a.jsx(I, { onClick: () => p(d), variant: "secondary", children: "Edit" }),
                  /* @__PURE__ */ a.jsx(I, { onClick: () => f(d.id), children: "Remove" })
                ] })
              ]
            },
            d.id
          ))
        }
      ),
      o.length > 0 && /* @__PURE__ */ a.jsx("div", { style: { marginTop: 12, display: "flex", gap: 8 }, children: /* @__PURE__ */ a.jsx(I, { onClick: () => g(), variant: "secondary", children: "Clear" }) })
    ] }),
    /* @__PURE__ */ a.jsx(
      br,
      {
        open: !!h,
        onClose: () => p(null),
        title: "Edit Item",
        children: h && /* @__PURE__ */ a.jsx(
          jr,
          {
            item: h,
            onCancel: () => p(null),
            onSave: (d, b) => {
              u(d, b), p(null);
            }
          }
        )
      }
    )
  ] });
}, jr = ({ item: o, onSave: l, onCancel: u }) => {
  const [f, g] = N(o.name), [h, p] = N(o.qty);
  return /* @__PURE__ */ a.jsxs(
    "form",
    {
      onSubmit: (d) => {
        d.preventDefault(), l(o.id, { name: f, qty: h });
      },
      style: { display: "grid", gap: 8 },
      children: [
        /* @__PURE__ */ a.jsxs("label", { style: { display: "flex", flexDirection: "column" }, children: [
          /* @__PURE__ */ a.jsx("span", { style: { fontSize: 13 }, children: "Name" }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              value: f,
              onChange: (d) => g(d.target.value),
              style: { padding: 8, borderRadius: 6 }
            }
          )
        ] }),
        /* @__PURE__ */ a.jsxs("label", { style: { display: "flex", flexDirection: "column" }, children: [
          /* @__PURE__ */ a.jsx("span", { style: { fontSize: 13 }, children: "Qty" }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "number",
              value: h,
              onChange: (d) => p(Number(d.target.value)),
              style: { padding: 8, borderRadius: 6 }
            }
          )
        ] }),
        /* @__PURE__ */ a.jsxs("div", { style: { display: "flex", gap: 8 }, children: [
          /* @__PURE__ */ a.jsx(I, { type: "submit", children: "Save" }),
          /* @__PURE__ */ a.jsx(I, { type: "button", variant: "secondary", onClick: u, children: "Cancel" })
        ] })
      ]
    }
  );
};
export {
  I as Button,
  we as Card,
  Tr as CartProvider,
  wr as CartView,
  Sr as Input,
  br as Modal,
  Rr as useCart
};
