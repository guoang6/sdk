function(R, H) { !
    function o(r, a, i) {
        function s(t, e) {
            if (!a[t]) {
                if (!r[t]) {
                    var n = "function" == typeof require && require;
                    if (!e && n) return n(t, !0);
                    if (c) return c(t, !0);
                    throw (e = new Error("Cannot find module '" + t + "'")).code = "MODULE_NOT_FOUND",
                    e
                }
                n = a[t] = {
                    exports: {}
                },
                r[t][0].call(n.exports,
                function(e) {
                    return s(r[t][1][e] || e)
                },
                n, n.exports, o, r, a, i)
            }
            return a[t].exports
        }
        for (var c = "function" == typeof require && require,
        e = 0; e < i.length; e++) s(i[e]);
        return s
    } ({
        1 : [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.
        default = function(e, t) {
                new RegExp("(\\s|^)".concat(t, "(\\s|$)")).test(e.className) || (e.className += " ".concat(t))
            }
        },
        {}],
        2 : [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.
        default = function(r, a, i, s) {
                return !! a && (r.addEventListener(a, i, !!s),
                function() {
                    var e, t, n, o;
                    e = r,
                    n = i,
                    o = s,
                    (t = a) && e.removeEventListener(t, n, !!o)
                })
            }
        },
        {}],
        3 : [function(e, t, n) {
            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                function(e) {
                    return typeof e
                }: function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
                })(e)
            }
            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1,
                    o.configurable = !0,
                    "value" in o && (o.writable = !0),
                    Object.defineProperty(e,
                    function(e) {
                        e = function(e, t) {
                            if ("object" != r(e) || !e) return e;
                            var n = e[Symbol.toPrimitive];
                            if (void 0 === n) return ("string" === t ? String: Number)(e);
                            n = n.call(e, t || "default");
                            if ("object" != r(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        } (e, "string");
                        return "symbol" == r(e) ? e: e + ""
                    } (o.key), o)
                }
            }
            function a(e, t, n) {
                return t && o(e.prototype, t),
                n && o(e, n),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                e
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.
        default = void 0;
            n.
        default = a(function e(t, n, o) {
                if (! (this instanceof e)) throw new TypeError("Cannot call a class as a function");
                this.code = t,
                this.message = n,
                this.details = o
            })
        },
        {}],
        4 : [function(e, t, n) {
            function M(e) {
                return (M = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                function(e) {
                    return typeof e
                }: function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
                })(e)
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.
        default = function(e) {
                return r.apply(this, arguments)
            };
            var c = (n = e("./helpers/FrameAPIError")) && n.__esModule ? n: {
            default:
                n
            },
            l = function(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != M(e) && "function" != typeof e) return {
                default:
                    e
                };
                t = i(t);
                if (t && t.has(e)) return t.get(e);
                var n, o = {
                    __proto__: null
                },
                r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (n in e) {
                    var a;
                    "default" !== n && {}.hasOwnProperty.call(e, n) && ((a = r ? Object.getOwnPropertyDescriptor(e, n) : null) && (a.get || a.set) ? Object.defineProperty(o, n, a) : o[n] = e[n])
                }
                return o.
            default = e,
                t && t.set(e, o),
                o
            } (e("./methods"));
            function i(e) {
                var t, n;
                return "function" != typeof WeakMap ? null: (t = new WeakMap, n = new WeakMap, (i = function(e) {
                    return e ? n: t
                })(e))
            }
            function I() {
                I = function() {
                    return i
                };
                var c, i = {},
                e = Object.prototype,
                l = e.hasOwnProperty,
                u = Object.defineProperty ||
                function(e, t, n) {
                    e[t] = n.value
                },
                t = "function" == typeof Symbol ? Symbol: {},
                o = t.iterator || "@@iterator",
                n = t.asyncIterator || "@@asyncIterator",
                r = t.toStringTag || "@@toStringTag";
                function a(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }),
                    e[t]
                }
                try {
                    a({},
                    "")
                } catch(c) {
                    a = function(e, t, n) {
                        return e[t] = n
                    }
                }
                function s(e, t, n, o) {
                    var r, a, i, s, t = t && t.prototype instanceof m ? t: m,
                    t = Object.create(t.prototype),
                    o = new O(o || []);
                    return u(t, "_invoke", {
                        value: (r = e, a = n, i = o, s = f,
                        function(e, t) {
                            if (s === v) throw Error("Generator is already running");
                            if (s === h) {
                                if ("throw" === e) throw t;
                                return {
                                    value: c,
                                    done: !0
                                }
                            }
                            for (i.method = e, i.arg = t;;) {
                                var n = i.delegate;
                                if (n) {
                                    n = function e(t, n) {
                                        var o = n.method,
                                        r = t.iterator[o];
                                        if (r === c) return n.delegate = null,
                                        "throw" === o && t.iterator.
                                        return && (n.method = "return", n.arg = c, e(t, n), "throw" === n.method) || "return" !== o && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + o + "' method")),
                                        b;
                                        o = d(r, t.iterator, n.arg);
                                        if ("throw" === o.type) return n.method = "throw",
                                        n.arg = o.arg,
                                        n.delegate = null,
                                        b;
                                        r = o.arg;
                                        return r ? r.done ? (n[t.resultName] = r.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = c), n.delegate = null, b) : r: (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, b)
                                    } (n, i);
                                    if (n) {
                                        if (n === b) continue;
                                        return n
                                    }
                                }
                                if ("next" === i.method) i.sent = i._sent = i.arg;
                                else if ("throw" === i.method) {
                                    if (s === f) throw s = h,
                                    i.arg;
                                    i.dispatchException(i.arg)
                                } else "return" === i.method && i.abrupt("return", i.arg);
                                s = v;
                                n = d(r, a, i);
                                if ("normal" === n.type) {
                                    if (s = i.done ? h: p, n.arg === b) continue;
                                    return {
                                        value: n.arg,
                                        done: i.done
                                    }
                                }
                                "throw" === n.type && (s = h, i.method = "throw", i.arg = n.arg)
                            }
                        })
                    }),
                    t
                }
                function d(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch(e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                i.wrap = s;
                var f = "suspendedStart",
                p = "suspendedYield",
                v = "executing",
                h = "completed",
                b = {};
                function m() {}
                function _() {}
                function g() {}
                var t = {},
                y = (a(t, o,
                function() {
                    return this
                }), Object.getPrototypeOf),
                y = y && y(y(S([]))),
                w = (y && y !== e && l.call(y, o) && (t = y), g.prototype = m.prototype = Object.create(t));
                function x(e) { ["next", "throw", "return"].forEach(function(t) {
                        a(e, t,
                        function(e) {
                            return this._invoke(t, e)
                        })
                    })
                }
                function k(i, s) {
                    var t;
                    u(this, "_invoke", {
                        value: function(n, o) {
                            function e() {
                                return new s(function(e, t) { !
                                    function t(e, n, o, r) {
                                        var a, e = d(i[e], i, n);
                                        if ("throw" !== e.type) return (n = (a = e.arg).value) && "object" == M(n) && l.call(n, "__await") ? s.resolve(n.__await).then(function(e) {
                                            t("next", e, o, r)
                                        },
                                        function(e) {
                                            t("throw", e, o, r)
                                        }) : s.resolve(n).then(function(e) {
                                            a.value = e,
                                            o(a)
                                        },
                                        function(e) {
                                            return t("throw", e, o, r)
                                        });
                                        r(e.arg)
                                    } (n, o, e, t)
                                })
                            }
                            return t = t ? t.then(e, e) : e()
                        }
                    })
                }
                function E(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]),
                    2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]),
                    this.tryEntries.push(t)
                }
                function C(e) {
                    var t = e.completion || {};
                    t.type = "normal",
                    delete t.arg,
                    e.completion = t
                }
                function O(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }],
                    e.forEach(E, this),
                    this.reset(!0)
                }
                function S(t) {
                    if (t || "" === t) {
                        var n, e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) return n = -1,
                        (e = function e() {
                            for (; ++n < t.length;) if (l.call(t, n)) return e.value = t[n],
                            e.done = !1,
                            e;
                            return e.value = c,
                            e.done = !0,
                            e
                        }).next = e
                    }
                    throw new TypeError(M(t) + " is not iterable")
                }
                return u(w, "constructor", {
                    value: _.prototype = g,
                    configurable: !0
                }),
                u(g, "constructor", {
                    value: _,
                    configurable: !0
                }),
                _.displayName = a(g, r, "GeneratorFunction"),
                i.isGeneratorFunction = function(e) {
                    e = "function" == typeof e && e.constructor;
                    return !! e && (e === _ || "GeneratorFunction" === (e.displayName || e.name))
                },
                i.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g, a(e, r, "GeneratorFunction")),
                    e.prototype = Object.create(w),
                    e
                },
                i.awrap = function(e) {
                    return {
                        __await: e
                    }
                },
                x(k.prototype),
                a(k.prototype, n,
                function() {
                    return this
                }),
                i.AsyncIterator = k,
                i.async = function(e, t, n, o, r) {
                    void 0 === r && (r = Promise);
                    var a = new k(s(e, t, n, o), r);
                    return i.isGeneratorFunction(t) ? a: a.next().then(function(e) {
                        return e.done ? e.value: a.next()
                    })
                },
                x(w),
                a(w, r, "Generator"),
                a(w, o,
                function() {
                    return this
                }),
                a(w, "toString",
                function() {
                    return "[object Generator]"
                }),
                i.keys = function(e) {
                    var t, n = Object(e),
                    o = [];
                    for (t in n) o.push(t);
                    return o.reverse(),
                    function e() {
                        for (; o.length;) {
                            var t = o.pop();
                            if (t in n) return e.value = t,
                            e.done = !1,
                            e
                        }
                        return e.done = !0,
                        e
                    }
                },
                i.values = S,
                O.prototype = {
                    constructor: O,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = c, this.done = !1, this.delegate = null, this.method = "next", this.arg = c, this.tryEntries.forEach(C), !e) for (var t in this)"t" === t.charAt(0) && l.call(this, t) && !isNaN( + t.slice(1)) && (this[t] = c)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(n) {
                        if (this.done) throw n;
                        var o = this;
                        function e(e, t) {
                            return a.type = "throw",
                            a.arg = n,
                            o.next = e,
                            t && (o.method = "next", o.arg = c),
                            !!t
                        }
                        for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                            var r = this.tryEntries[t],
                            a = r.completion;
                            if ("root" === r.tryLoc) return e("end");
                            if (r.tryLoc <= this.prev) {
                                var i = l.call(r, "catchLoc"),
                                s = l.call(r, "finallyLoc");
                                if (i && s) {
                                    if (this.prev < r.catchLoc) return e(r.catchLoc, !0);
                                    if (this.prev < r.finallyLoc) return e(r.finallyLoc)
                                } else if (i) {
                                    if (this.prev < r.catchLoc) return e(r.catchLoc, !0)
                                } else {
                                    if (!s) throw Error("try statement without catch or finally");
                                    if (this.prev < r.finallyLoc) return e(r.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && l.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var r = o;
                                break
                            }
                        }
                        var a = (r = r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc ? null: r) ? r.completion: {};
                        return a.type = e,
                        a.arg = t,
                        r ? (this.method = "next", this.next = r.finallyLoc, b) : this.complete(a)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg: "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t),
                        b
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc),
                            C(n),
                            b
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                            var n, o, r = this.tryEntries[t];
                            if (r.tryLoc === e) return "throw" === (n = r.completion).type && (o = n.arg, C(r)),
                            o
                        }
                        throw Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: S(e),
                            resultName: t,
                            nextLoc: n
                        },
                        "next" === this.method && (this.arg = c),
                        b
                    }
                },
                i
            }
            function u(e) {
                return function(e) {
                    if (Array.isArray(e)) return o(e)
                } (e) ||
                function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                } (e) ||
                function(e, t) {
                    {
                        var n;
                        if (e) return "string" == typeof e ? o(e, t) : "Map" === (n = "Object" === (n = {}.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name: n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
                    }
                } (e) ||
                function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                } ()
            }
            function o(e, t) { (null == t || t > e.length) && (t = e.length);
                for (var n = 0,
                o = Array(t); n < t; n++) o[n] = e[n];
                return o
            }
            function d(e, t, n, o, r, a, i) {
                try {
                    var s = e[a](i),
                    c = s.value
                } catch(e) {
                    return n(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(o, r)
            }
            function r() {
                var s;
                return s = I().mark(function e(t) {
                    var n, o, r, a, i, s;
                    return I().wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (n = t.method, o = t.callId, r = t.args, Object.prototype.hasOwnProperty.call(l, n)) {
                                e.next = 3;
                                break
                            }
                            throw new c.
                        default("no-method", "Method ".concat(n, " not found"));
                        case 3:
                            return i = null,
                            e.prev = 4,
                            e.next = 7,
                            (s = l[n]).call.apply(s, [this].concat(u(r)));
                        case 7:
                            a = e.sent,
                            e.next = 13;
                            break;
                        case 10:
                            e.prev = 10,
                            e.t0 = e.
                            catch(4),
                            i = e.t0 instanceof c.
                        default ? e.t0: new c.
                        default("internal", e.t0.message);
                        case 13:
                            this._postMessage("frameAPICallResult", {
                                callId: o,
                                error: i,
                                result: a
                            });
                        case 14:
                        case "end":
                            return e.stop()
                        }
                    },
                    e, this, [[4, 10]])
                }),
                (r = function() {
                    var e = this,
                    i = arguments;
                    return new Promise(function(t, n) {
                        var o = s.apply(e, i);
                        function r(e) {
                            d(o, t, n, r, a, "next", e)
                        }
                        function a(e) {
                            d(o, t, n, r, a, "throw", e)
                        }
                        r(void 0)
                    })
                }).apply(this, arguments)
            }
        },
        {
            "./helpers/FrameAPIError": 3,
            "./methods": 8
        }],
        5 : [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.
        default = void 0;
            e = (e = e("../../getCookie")) && e.__esModule ? e: {
            default:
                e
            };
            n.
        default = e.
        default
        },
        {
            "../../getCookie": 14
        }],
        6 : [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.
        default = function(e) {
                return window[e]
            }
        },
        {}],
        7 : [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.
        default = function() {
                this._chatHiddenByFrame = !0,
                this._refreshChatVisibility()
            }
        },
        {}],
        8 : [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            Object.defineProperty(n, "getCookie", {
                enumerable: !0,
                get: function() {
                    return o.
                default
                }
            }),
            Object.defineProperty(n, "getParentWindowProp", {
                enumerable: !0,
                get: function() {
                    return r.
                default
                }
            }),
            Object.defineProperty(n, "hideChat", {
                enumerable: !0,
                get: function() {
                    return a.
                default
                }
            }),
            Object.defineProperty(n, "showChat", {
                enumerable: !0,
                get: function() {
                    return i.
                default
                }
            });
            var o = s(e("./getCookie")),
            r = s(e("./getParentWindowProp")),
            a = s(e("./hideChat")),
            i = s(e("./showChat"));
            function s(e) {
                return e && e.__esModule ? e: {
                default:
                    e
                }
            }
        },
        {
            "./getCookie": 5,
            "./getParentWindowProp": 6,
            "./hideChat": 7,
            "./showChat": 9
        }],
        9 : [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.
        default = function() {
                this._chatHiddenByFrame = !1,
                this._refreshChatVisibility()
            }
        },
        {}],
        10 : [function(e, t, n) {
            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                function(e) {
                    return typeof e
                }: function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
                })(e)
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.
        default = function(t) {
                var n = !0;
                if ("object" !== o(t) || Array.isArray(t)) return console.warn("Brevo Conversations integration error: We accept objects as integration data only."),
                !1;
                return Object.keys(t).forEach(function(e) { ! {
                        string: 1,
                        boolean: 1,
                        number: 1
                    } [o(t[e])] && null !== t[e] && (console.warn("Brevo Conversations integration error: We accept Strings, Numbers, Booleans and null as integration property values. " + "`".concat(e, "`’s type is `").concat(o(t[e]), "`.")), n = !1)
                }),
                n
            }
        },
        {}],
        11 : [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.
        default = function(e, t) {
                if ("undefined" == typeof Element) return null;
                var n = Element.prototype.closest ||
                function(e) {
                    for (var t = this; t;) {
                        if (function(e, t) {
                            if ("undefined" == typeof Element) return;
                            var n = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector;
                            return "function" == typeof n && n.call(e, t)
                        } (t, e)) return t;
                        t = t.parentElement
                    }
                    return null
                };
                return "function" == typeof n ? n.call(e, t) : null
            }
        },
        {}],
        12 : [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.TOGGLE_DURATION = n.EVENT_CATEGORY = n.DEFAULT_ROUND_BUTTON_SIZE = n.CHAT_OPEN_HASHES = void 0;
            n.CHAT_OPEN_HASHES = ["#brevoConversationsExpanded", "#sibConversationsExpanded"],
            n.DEFAULT_ROUND_BUTTON_SIZE = 60,
            n.EVENT_CATEGORY = "Brevo Conversations",
            n.TOGGLE_DURATION = 350
        },
        {}],
        13 : [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.
        default = function() {
                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                return Object.keys(n).forEach(function(e) {
                    t[e] = n[e]
                }),
                t
            }
        },
        {}],
        14 : [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.
        default = function(e) {
                for (var t = H.cookie.split(";"), n = "".concat(e, "="), o = 0; o < t.length; o += 1) {
                    for (var r = t[o];
                    " " === r.charAt(0);) r = r.substring(1);
                    if (0 === r.indexOf(n)) return r.substring(n.length, r.length)
                }
                return null
            }
        },
        {}],
        15 : [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.
        default = function() {
                var t;
                try {
                    t = H.querySelector('meta[name="viewport" i]')
                } catch(e) {
                    t = H.querySelector('meta[name="viewport"]')
                }
                return t
            }
        },
        {}],
        16 : [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.
        default = function() {
                var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";
                return null != (e = window["BrevoConversations".concat(t)]) ? e: window["SibConversations".concat(t)]
            }
        },
        {}],
        17 : [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.
        default = function(e) {
                return o.CHAT_OPEN_HASHES.includes(e)
            };
            var o = e("./consts")
        },
        {
            "./consts": 12
        }],
        18 : [function(e, L, N) {
            var r = t(e("./addClass")),
            a = t(e("./addEvent")),
            g = t(e("./callFrameAPIMethod")),
            n = t(e("./checkIntegrationDataValidity")),
            y = t(e("./closest")),
            p = e("./consts"),
            i = t(e("./extend")),
            s = t(e("./getCookie")),
            c = t(e("./getMetaTag")),
            w = t(e("./getWindowProp")),
            x = t(e("./hasOpenHash")),
            k = t(e("./isModernBrowser")),
            l = t(e("./isOdd")),
            u = t(e("./kindaEqual")),
            d = t(e("./nanoid.custom")),
            f = t(e("./noop")),
            v = t(e("./prepareIntegrationData")),
            h = t(e("./random")),
            b = t(e("./removeClass")),
            m = t(e("./removeNode")),
            E = t(e("./setCookie")),
            C = t(e("./sniffer.pure")),
            O = t(e("./testProp")),
            S = t(e("./url")),
            M = t(e("../temp/index.css"));
            function t(e) {
                return e && e.__esModule ? e: {
                default:
                    e
                }
            }
            function _(t, e) {
                var n, o = Object.keys(t);
                return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                })), o.push.apply(o, n)),
                o
            }
            function I(o) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? _(Object(r), !0).forEach(function(e) {
                        var t, n;
                        t = o,
                        n = r[e = e],
                        (e = function(e) {
                            e = function(e, t) {
                                if ("object" != T(e) || !e) return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 === n) return ("string" === t ? String: Number)(e);
                                n = n.call(e, t || "default");
                                if ("object" != T(n)) return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            } (e, "string");
                            return "symbol" == T(e) ? e: e + ""
                        } (e)) in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : _(Object(r)).forEach(function(e) {
                        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return o
            }
            function T(e) {
                return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
                function(e) {
                    return typeof e
                }: function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
                })(e)
            }
            function P() {
                P = function() {
                    return i
                };
                var c, i = {},
                e = Object.prototype,
                l = e.hasOwnProperty,
                u = Object.defineProperty ||
                function(e, t, n) {
                    e[t] = n.value
                },
                t = "function" == typeof Symbol ? Symbol: {},
                o = t.iterator || "@@iterator",
                n = t.asyncIterator || "@@asyncIterator",
                r = t.toStringTag || "@@toStringTag";
                function a(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }),
                    e[t]
                }
                try {
                    a({},
                    "")
                } catch(c) {
                    a = function(e, t, n) {
                        return e[t] = n
                    }
                }
                function s(e, t, n, o) {
                    var r, a, i, s, t = t && t.prototype instanceof m ? t: m,
                    t = Object.create(t.prototype),
                    o = new O(o || []);
                    return u(t, "_invoke", {
                        value: (r = e, a = n, i = o, s = f,
                        function(e, t) {
                            if (s === v) throw Error("Generator is already running");
                            if (s === h) {
                                if ("throw" === e) throw t;
                                return {
                                    value: c,
                                    done: !0
                                }
                            }
                            for (i.method = e, i.arg = t;;) {
                                var n = i.delegate;
                                if (n) {
                                    n = function e(t, n) {
                                        var o = n.method,
                                        r = t.iterator[o];
                                        if (r === c) return n.delegate = null,
                                        "throw" === o && t.iterator.
                                        return && (n.method = "return", n.arg = c, e(t, n), "throw" === n.method) || "return" !== o && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + o + "' method")),
                                        b;
                                        o = d(r, t.iterator, n.arg);
                                        if ("throw" === o.type) return n.method = "throw",
                                        n.arg = o.arg,
                                        n.delegate = null,
                                        b;
                                        r = o.arg;
                                        return r ? r.done ? (n[t.resultName] = r.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = c), n.delegate = null, b) : r: (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, b)
                                    } (n, i);
                                    if (n) {
                                        if (n === b) continue;
                                        return n
                                    }
                                }
                                if ("next" === i.method) i.sent = i._sent = i.arg;
                                else if ("throw" === i.method) {
                                    if (s === f) throw s = h,
                                    i.arg;
                                    i.dispatchException(i.arg)
                                } else "return" === i.method && i.abrupt("return", i.arg);
                                s = v;
                                n = d(r, a, i);
                                if ("normal" === n.type) {
                                    if (s = i.done ? h: p, n.arg === b) continue;
                                    return {
                                        value: n.arg,
                                        done: i.done
                                    }
                                }
                                "throw" === n.type && (s = h, i.method = "throw", i.arg = n.arg)
                            }
                        })
                    }),
                    t
                }
                function d(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch(e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                i.wrap = s;
                var f = "suspendedStart",
                p = "suspendedYield",
                v = "executing",
                h = "completed",
                b = {};
                function m() {}
                function _() {}
                function g() {}
                var t = {},
                y = (a(t, o,
                function() {
                    return this
                }), Object.getPrototypeOf),
                y = y && y(y(S([]))),
                w = (y && y !== e && l.call(y, o) && (t = y), g.prototype = m.prototype = Object.create(t));
                function x(e) { ["next", "throw", "return"].forEach(function(t) {
                        a(e, t,
                        function(e) {
                            return this._invoke(t, e)
                        })
                    })
                }
                function k(i, s) {
                    var t;
                    u(this, "_invoke", {
                        value: function(n, o) {
                            function e() {
                                return new s(function(e, t) { !
                                    function t(e, n, o, r) {
                                        var a, e = d(i[e], i, n);
                                        if ("throw" !== e.type) return (n = (a = e.arg).value) && "object" == T(n) && l.call(n, "__await") ? s.resolve(n.__await).then(function(e) {
                                            t("next", e, o, r)
                                        },
                                        function(e) {
                                            t("throw", e, o, r)
                                        }) : s.resolve(n).then(function(e) {
                                            a.value = e,
                                            o(a)
                                        },
                                        function(e) {
                                            return t("throw", e, o, r)
                                        });
                                        r(e.arg)
                                    } (n, o, e, t)
                                })
                            }
                            return t = t ? t.then(e, e) : e()
                        }
                    })
                }
                function E(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]),
                    2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]),
                    this.tryEntries.push(t)
                }
                function C(e) {
                    var t = e.completion || {};
                    t.type = "normal",
                    delete t.arg,
                    e.completion = t
                }
                function O(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }],
                    e.forEach(E, this),
                    this.reset(!0)
                }
                function S(t) {
                    if (t || "" === t) {
                        var n, e = t[o];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) return n = -1,
                        (e = function e() {
                            for (; ++n < t.length;) if (l.call(t, n)) return e.value = t[n],
                            e.done = !1,
                            e;
                            return e.value = c,
                            e.done = !0,
                            e
                        }).next = e
                    }
                    throw new TypeError(T(t) + " is not iterable")
                }
                return u(w, "constructor", {
                    value: _.prototype = g,
                    configurable: !0
                }),
                u(g, "constructor", {
                    value: _,
                    configurable: !0
                }),
                _.displayName = a(g, r, "GeneratorFunction"),
                i.isGeneratorFunction = function(e) {
                    e = "function" == typeof e && e.constructor;
                    return !! e && (e === _ || "GeneratorFunction" === (e.displayName || e.name))
                },
                i.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g, a(e, r, "GeneratorFunction")),
                    e.prototype = Object.create(w),
                    e
                },
                i.awrap = function(e) {
                    return {
                        __await: e
                    }
                },
                x(k.prototype),
                a(k.prototype, n,
                function() {
                    return this
                }),
                i.AsyncIterator = k,
                i.async = function(e, t, n, o, r) {
                    void 0 === r && (r = Promise);
                    var a = new k(s(e, t, n, o), r);
                    return i.isGeneratorFunction(t) ? a: a.next().then(function(e) {
                        return e.done ? e.value: a.next()
                    })
                },
                x(w),
                a(w, r, "Generator"),
                a(w, o,
                function() {
                    return this
                }),
                a(w, "toString",
                function() {
                    return "[object Generator]"
                }),
                i.keys = function(e) {
                    var t, n = Object(e),
                    o = [];
                    for (t in n) o.push(t);
                    return o.reverse(),
                    function e() {
                        for (; o.length;) {
                            var t = o.pop();
                            if (t in n) return e.value = t,
                            e.done = !1,
                            e
                        }
                        return e.done = !0,
                        e
                    }
                },
                i.values = S,
                O.prototype = {
                    constructor: O,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = c, this.done = !1, this.delegate = null, this.method = "next", this.arg = c, this.tryEntries.forEach(C), !e) for (var t in this)"t" === t.charAt(0) && l.call(this, t) && !isNaN( + t.slice(1)) && (this[t] = c)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(n) {
                        if (this.done) throw n;
                        var o = this;
                        function e(e, t) {
                            return a.type = "throw",
                            a.arg = n,
                            o.next = e,
                            t && (o.method = "next", o.arg = c),
                            !!t
                        }
                        for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                            var r = this.tryEntries[t],
                            a = r.completion;
                            if ("root" === r.tryLoc) return e("end");
                            if (r.tryLoc <= this.prev) {
                                var i = l.call(r, "catchLoc"),
                                s = l.call(r, "finallyLoc");
                                if (i && s) {
                                    if (this.prev < r.catchLoc) return e(r.catchLoc, !0);
                                    if (this.prev < r.finallyLoc) return e(r.finallyLoc)
                                } else if (i) {
                                    if (this.prev < r.catchLoc) return e(r.catchLoc, !0)
                                } else {
                                    if (!s) throw Error("try statement without catch or finally");
                                    if (this.prev < r.finallyLoc) return e(r.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && l.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var r = o;
                                break
                            }
                        }
                        var a = (r = r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc ? null: r) ? r.completion: {};
                        return a.type = e,
                        a.arg = t,
                        r ? (this.method = "next", this.next = r.finallyLoc, b) : this.complete(a)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg: "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t),
                        b
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc),
                            C(n),
                            b
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                            var n, o, r = this.tryEntries[t];
                            if (r.tryLoc === e) return "throw" === (n = r.completion).type && (o = n.arg, C(r)),
                            o
                        }
                        throw Error("illegal catch attempt")
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: S(e),
                            resultName: t,
                            nextLoc: n
                        },
                        "next" === this.method && (this.arg = c),
                        b
                    }
                },
                i
            }
            function j(e, t, n, o, r, a, i) {
                try {
                    var s = e[a](i),
                    c = s.value
                } catch(e) {
                    return n(e)
                }
                s.done ? t(c) : Promise.resolve(c).then(o, r)
            }
            function A(e) {
                return function(e) {
                    if (Array.isArray(e)) return o(e)
                } (e) ||
                function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                } (e) ||
                function(e, t) {
                    {
                        var n;
                        if (e) return "string" == typeof e ? o(e, t) : "Map" === (n = "Object" === (n = {}.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name: n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0
                    }
                } (e) ||
                function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                } ()
            }
            function o(e, t) { (null == t || t > e.length) && (t = e.length);
                for (var n = 0,
                o = Array(t); n < t; n++) o[n] = e[n];
                return o
            }
            var B = [],
            e = (0, w.
        default)();
            e && e.q && (B = e.q),
            function e() {
                function o() {
                    for (var e = arguments.length,
                    t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    t.length && ("function" == typeof o[t[0]] && "_" !== t[0][0] ? o[t[0]].apply(o, A(t.slice(1))) : console.warn("Brevo Conversations: No such method: ".concat(t[0])))
                }
                var _ = o,
                t = ((0, i.
            default)(o, {
                    _init: function() {
                        if ((0, w.
                    default)("ID")) {
                            var e = (0, C.
                        default)(R.navigator.userAgent),
                            o = (0, w.
                        default)("Setup") || {},
                            t = o.mode || "widget";
                            if (_._sniff = e, _._setup = o, _._displayMode = t, _._isMobile = e.features.mobile, _._getStoredItem("disableChatOpenHash") ? o.disableChatOpenHash = !0 : !o.disableChatOpenHash && H.location.hash.includes("/") && (o.disableChatOpenHash = !0, _._setStoredItem("disableChatOpenHash", !0)), "trident" === e.browser.engine && e.browser.majorVersion && e.browser.majorVersion <= 10) _.kill();
                            else if (_._isSafari = "safari" === e.browser.name || "ios" === e.os.name, "widget" !== t || !0 !== o.mobileOnly || _._isMobile) if ("widget" === t && !0 === o.disabledOnMobile && _._isMobile) _.kill();
                            else {
                                _._features = {
                                    transform: (0, O.
                                default)("transform"),
                                    transition: (0, O.
                                default)("transition")
                                };
                                var n = (0, w.
                            default)("Protocol") || "https:",
                                r = (0, w.
                            default)("Host") || "conversations-widget.brevo.com",
                                a = (0, w.
                            default)("ID"),
                                i = _._getClientId(),
                                s = (_._clientId = i,
                                function(e) {
                                    function t() {
                                        n || (_._killed || e(), n = !0)
                                    }
                                    var n = !1;
                                    o.deferredLoading ? "complete" === H.readyState ? t() : R.addEventListener("load", t, !1) : (H.attachEvent ? "complete" === H.readyState: "loading" !== H.readyState) ? t() : (H.addEventListener("DOMContentLoaded", t, !1), R.addEventListener("load", t, !1))
                                }),
                                c = H.createElement("div"),
                                l = (c.setAttribute("id", "brevo-conversations"), c.setAttribute("class", "brevo-conversations sib-conversations"), c.setAttribute("data-turbolinks-permanent", ""), _._wrapper = c, _._isSafari && _._addClass("safari"), "webkit" === e.browser.engine && _._addClass("webkit"), H.createElement("style")),
                                u = ((_._style = l).textContent = M.
                            default, H.getElementsByTagName("head")[0].appendChild(l), H.createElement("iframe")),
                                l = ((_._iframe = u).setAttribute("frameborder", "0"), u.setAttribute("class", "brevo-conversations__iframe"), u.setAttribute("allowtransparency", "true"), u.setAttribute("title", "Brevo live chat"), u.setAttribute("allow", "autoplay"), H.createElement("div")),
                                d = ((_._iframeWrapper = l).setAttribute("class", "brevo-conversations__iframe-wrapper"), _._addAutoRemovableEvent(R, "message",
                                function() {
                                    s = P().mark(function e(t) {
                                        var n, o;
                                        return P().wrap(function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (_._iframe.contentWindow !== t.source) return e.abrupt("return");
                                                e.next = 2;
                                                break;
                                            case 2:
                                                e.prev = 2,
                                                n = JSON.parse(t.data),
                                                e.next = 9;
                                                break;
                                            case 6:
                                                return e.prev = 6,
                                                e.t0 = e.
                                                catch(2),
                                                e.abrupt("return");
                                            case 9:
                                                if (n) {
                                                    e.next = 11;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 11:
                                                if (n.type && "string" == typeof n.type) {
                                                    e.next = 13;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 13:
                                                if ("BrevoConversations" !== n.sender) return e.abrupt("return");
                                                e.next = 15;
                                                break;
                                            case 15:
                                                if ("frameAPICall" !== n.type) {
                                                    e.next = 21;
                                                    break
                                                }
                                                if ("string" == typeof(null == (o = n.data) ? void 0 : o.method) && "string" == typeof(null == (o = n.data) ? void 0 : o.callId) && Array.isArray(null == (o = n.data) ? void 0 : o.args)) {
                                                    e.next = 18;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 18:
                                                g.
                                            default.call(_, {
                                                    method: n.data.method,
                                                    callId: n.data.callId,
                                                    args: n.data.args
                                                }),
                                                e.next = 22;
                                                break;
                                            case 21:
                                                _._messageHandler(n.type, n.data);
                                            case 22:
                                            case "end":
                                                return e.stop()
                                            }
                                        },
                                        e, null, [[2, 6]])
                                    });
                                    var s, t = function() {
                                        var e = this,
                                        i = arguments;
                                        return new Promise(function(t, n) {
                                            var o = s.apply(e, i);
                                            function r(e) {
                                                j(o, t, n, r, a, "next", e)
                                            }
                                            function a(e) {
                                                j(o, t, n, r, a, "throw", e)
                                            }
                                            r(void 0)
                                        })
                                    };
                                    return function(e) {
                                        return t.apply(this, arguments)
                                    }
                                } ()), _._addAutoRemovableEvent(R, "focus",
                                function() {
                                    _._postMessage("focus")
                                }), _._addAutoRemovableEvent(R, "blur",
                                function() {
                                    _._postMessage("blur")
                                }), _._addAutoRemovableEvent(R, "mousedown",
                                function() {
                                    _._postMessage("mousedown")
                                }), _._addAutoRemovableEvent(R, "keyup",
                                function() {
                                    _._postMessage("keyup")
                                }), _._isMobile || _._handleExitIntent(), o.groupId = (0, w.
                            default)("GroupID") || o.groupId, o.scriptId = (0, w.
                            default)("ScriptID") || o.scriptId, _._setReferrer(), (navigator.language || navigator.userLanguage || "en").split("-")[0]),
                                f = encodeURIComponent(H.referrer),
                                p = encodeURIComponent(_._referrer),
                                v = ("trident" !== e.browser.engine && "edgehtml" !== e.browser.engine || (800 < f.length && (v = (0, S.
                            default)(H.referrer), f = encodeURIComponent("".concat(v.protocol, "//").concat(v.host))), 800 < p.length && (v = (0, S.
                            default)(_._referrer), p = encodeURIComponent("".concat(v.protocol, "//").concat(v.host)))), o.buttonStyle || "");
                                if (o.customWidgetButton) try {
                                    H.querySelector(o.customWidgetButton),
                                    v = "round"
                                } catch(e) {
                                    return _.kill(),
                                    void console.warn("Brevo Conversations: `BrevoConversationsSetup.customWidgetButton` is not a valid selector")
                                }
                                var a = "hostId=".concat(a, "&mode=").concat(encodeURIComponent(t), "&clientId=").concat(encodeURIComponent(i)).concat(void 0 !== o.groupId ? "&groupId=".concat(encodeURIComponent(o.groupId)) : "").concat(void 0 !== o.scriptId ? "&scriptId=".concat(encodeURIComponent(o.scriptId)) : "").concat(_._isMobile ? "&isMobile=1": "").concat(v ? "&buttonType=".concat(encodeURIComponent(v)) : "").concat(o.language && "string" == typeof o.language ? "&langOverride=".concat(encodeURIComponent(o.language)) : "", "&lang=").concat(encodeURIComponent(d), "&currentPage=").concat(encodeURIComponent(window.location.href), "&currentPageTitle=").concat(encodeURIComponent(H.title), "&prevPage=").concat(f, "&referrer=").concat(p).concat(o.isWidgetDemo ? "&isWidgetDemo=1": ""),
                                i = (0, k.
                            default)(e.browser.name, e.browser.majorVersion),
                                h = "".concat(n, "//").concat(r, "/?isModern=").concat(i, "#").concat(a);
                                if ("frame" === t) {
                                    var b, m = o.injectTo;
                                    if (!m) return console.warn("Brevo Conversations: `BrevoConversationsSetup.injectTo` is required when using `frame` mode!"),
                                    void _.kill();
                                    s(function() {
                                        "string" == typeof m ? b = H.getElementById(m) : m[0] && m[0].appendChild ? b = m[0] : m.appendChild && (b = m),
                                        b ? (u.src = h, u.className += " brevo-conversations__iframe--mode-frame", b.innerHTML = "", b.appendChild(u), _._attachedToDom = !0) : (console.warn("Brevo Conversations: something is wrong with your `BrevoConversationsSetup.injectTo`"), _.kill())
                                    })
                                } else _._isMobile && _._addClass("mobile-widget"),
                                _._setButtonType("tab"),
                                _._setChatPosition("br"),
                                u.src = h,
                                u.style.position = "absolute",
                                l.appendChild(u),
                                c.appendChild(l),
                                s(function() {
                                    var e, a, t = o.customWidgetButton;
                                    t && (_._addClass("custom-button"), _._addAutoRemovableEvent(H, "click",
                                    function(e) { (0, y.
                                    default)(e.target, t) && (!_._chatExpanded || _._chatTransparent ? _._openChat(!0) : _._postMessage("collapseChat"))
                                    })),
                                    !o.disableChatOpenHash && (0, x.
                                default)(H.location.hash) && _._openChat(!1),
                                    _._addAutoRemovableEvent(R, "hashchange",
                                    function() {
                                        var e;
                                        o.disableChatOpenHash || (H.location.hash.includes("/") ? (o.disableChatOpenHash = !0, _._setStoredItem("disableChatOpenHash", !0)) : !(e = (0, x.
                                    default)(H.location.hash)) || _._chatExpanded && !_._chatTransparent ? _._isMobile && !e && _._chatExpanded && !_._chatTransparent && _._postMessage("collapseChat") : _._openChat(!1))
                                    }),
                                    !_._setup.disableZoomAdjustment && _._isMobile && _._features.transform && "ios" !== _._sniff.os.name && (_._zoomAdjustmentAvailable = !0, e = function() {
                                        return _._adjustZoomLevel()
                                    },
                                    setTimeout(e, 100), _._addAutoRemovableEvent(R, "load", e), _._addAutoRemovableEvent(H.body, "touchend", e), _._addAutoRemovableEvent(R, "scroll", e), _._addAutoRemovableEvent(R, "orientationchange", e), _._addAutoRemovableEvent(R, "resize", e)),
                                    H.body.appendChild(c),
                                    _._attachedToDom = !0,
                                    R.Shopify && "function" == typeof R.doShift && (a = R.doShift, R.doShift = function() {
                                        var e = c.style.position;
                                        c.style.position = "absolute";
                                        for (var t = arguments.length,
                                        n = new Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                                        var r = a.apply(this, n);
                                        return c.style.position = e,
                                        r
                                    })
                                });
                                for (o.startHidden && _.hide(), _.setZIndex("number" == typeof o.zIndex ? o.zIndex: _._zIndex), o.colors && _.setColors(o.colors), o.chatWidth && _.setChatWidth(o.chatWidth), o.buttonSize && _.setButtonSize(o.buttonSize), o.chatHeight && _.setChatHeight(o.chatHeight), o.buttonPosition && _.setButtonPosition(o.buttonPosition), o.locale && _.setLocale(o.locale), "function" == typeof o.onInit && o.onInit(), _.pageView(); B.length;) _.apply(_, B.shift());
                                _._addAutoRemovableEvent(window, "pageshow",
                                function(e) {
                                    e.persisted && _.pageView({
                                        overrideEqualityChecks: !0
                                    })
                                })
                            } else _.kill()
                        } else console.warn("Brevo Conversations: No BrevoConversationsID specified, shutting down"),
                        _.kill()
                    },
                    _chatWidth: 380,
                    _chatMinWidth: 280,
                    _transparentChatWidth: 335,
                    _mobileTransparentChatWidth: 335,
                    _chatHeight: 600,
                    _chatMinHeight: 300,
                    _labelHeight: 40,
                    _mobileLabelHeight: 40,
                    _roundButtonSize: p.DEFAULT_ROUND_BUTTON_SIZE,
                    _labelMinWidth: 70,
                    _zIndex: 9999,
                    updateIntegrationData: function(e) { (0, n.
                    default)(e) && _._postMessage("updateIntegrationData", (0, v.
                    default)(e))
                    },
                    pageView: function() {
                        var e = void 0 !== (e = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).overrideEqualityChecks) && e,
                        t = {
                            currentPage: H.location.href,
                            currentPageTitle: H.title === _._titleBlink.newTitle ? _._titleBlink.originalTitle: H.title,
                            referrer: _._referrer
                        }; ! e && (0, u.
                    default)(_._lastPageData, t) || (_._lastPageData = t, _._chatReady ? _._sendPageInfo(t, {
                            overrideEqualityChecks: e
                        }) : _._pageInfoQ.push(t), _._setStoredItem("lastPageViewAt", "".concat( + new Date)))
                    },
                    setChatWidth: function(e) {
                        "number" == typeof e && (_._chatWidth = e, _._recalcChatSize())
                    },
                    setButtonSize: function(e) {
                        "number" == typeof e && (_._roundButtonSize = Math.max(e, 20), _._recalcChatSize())
                    },
                    setChatHeight: function(e) {
                        "number" == typeof e && (_._chatHeight = e, _._recalcChatSize())
                    },
                    setZIndex: function(e) {
                        "number" == typeof e && (_._zIndex = e, _._refreshZIndex())
                    },
                    setButtonPosition: function(e) { - 1 === ["lt", "lm", "lb", "bl", "bc", "br", "rt", "rm", "rb"].indexOf(e) ? console.warn("Brevo Conversations: invalid `positionCode`!") : _._postMessage("setPosition", e)
                    },
                    resetButtonPosition: function() {
                        _._postMessage("resetPosition")
                    },
                    setColors: function(e) {
                        _._postMessage("colors", e)
                    },
                    resetColors: function() {
                        _._postMessage("resetColors")
                    },
                    setLocale: function(e) {
                        _._postMessage("setLocale", e)
                    },
                    _openChat: function(e) {
                        _._postMessage("openChat", !!e)
                    },
                    openChat: function(e) {
                        "widget" === _._displayMode && _._openChat( !! e)
                    },
                    expandWidget: function(e) {
                        "widget" !== _._displayMode || _._isMobile || _._openChat( !! e)
                    },
                    minimizeWidget: function() {
                        "widget" === _._displayMode && _._postMessage("collapseChat")
                    },
                    hide: function() {
                        "widget" === _._displayMode && (_._chatHiddenByUser = !0, _._refreshChatVisibility())
                    },
                    show: function() {
                        "widget" === _._displayMode && (_._chatHiddenByUser = !1, _._refreshChatVisibility())
                    },
                    setGroupId: function(e) {
                        void 0 !== e && _._postMessage("setGroupId", e)
                    },
                    sendAutoMessage: function(e) {
                        "string" == typeof e && (e = e.trim()).length && _._postMessage("sendAutoMessage", e)
                    },
                    startBotScenario: function(e) {
                        "string" == typeof e && _._postMessage("startBotScenario", e)
                    },
                    _messageHandler: function(e, t) {
                        switch (e) {
                        case "setHostedItem":
                            t && "object" === T(t) && "string" == typeof t.key && _._setHostedItem(t.key, t.value);
                            break;
                        case "apiReady":
                            _._apiReady = !0,
                            _._sendMessageQ();
                            break;
                        case "readyToRetrieveHostedStorage":
                            _._sendHostedStorage();
                            break;
                        case "readyToRetrieveData":
                            _._chatReady = !0,
                            _._sendFocus(),
                            _._resolvePageInfoQ();
                            break;
                        case "headerReady":
                            _._chatRendered = !0,
                            "function" == typeof _._setup.onRendered && _._setup.onRendered();
                            break;
                        case "collapseWindow":
                            _._collapseChatWindow();
                            break;
                        case "expandWindow":
                            _._expandChatWindow(t);
                            break;
                        case "setPosition":
                            t && "string" == typeof t && _._setChatPosition(t);
                            break;
                        case "buttonType":
                            t && "string" == typeof t && _._setButtonType(t);
                            break;
                        case "titleBlink":
                            _._titleBlink(t);
                            break;
                        case "banned":
                            _._setStoredItem("banned", t ? _._clientId: ""),
                            _._refreshChatVisibility();
                            break;
                        case "restart":
                            _.restart();
                            break;
                        case "analyticsEvent":
                            "object" === T(t) && _._logAnalyticsEvent(t),
                            "string" == typeof t && _._logAnalyticsEvent({
                                eventName: t
                            });
                            break;
                        case "labelWidth":
                            "number" != typeof t && null !== t || (_._animating(), _._computedLabelWidth = t, _._recalcChatSize());
                            break;
                        case "transparentChatHeight":
                            "number" == typeof t && (_._transparentChatHeight = t, _._recalcChatSize());
                            break;
                        case "s":
                            _.kill();
                            break;
                        case "apiEvent":
                            t && "object" === T(t) && t.type && "string" == typeof t.type && _._handleApiEvent(t.type, Array.isArray(t.args) ? t.args: [])
                        }
                    },
                    _getScaleLevel: function() {
                        var e, t;
                        return R.visualViewport && "number" == typeof R.visualViewport.scale ? 1 / R.visualViewport.scale: (t = (e = R.screen).width, (t = {
                            90 : 1,
                            "-90": 1
                        } [R.orientation] && "winphone" === _._sniff.os.name && "trident" === _._sniff.browser.engine ? e.height: t) < H.documentElement.clientWidth ? R.innerWidth / t: R.innerWidth / H.documentElement.clientWidth)
                    },
                    _adjustZoomLevel: function() {
                        var e;
                        _._zoomAdjustmentAvailable && (e = 1, (e = (e = (e = _._chatExpanded && !_._chatTransparent ? e: _._getScaleLevel()) < 1.1 ? 1 : e).toFixed(2)) !== _._scale) && (_._transform.scale = e, _._recalcTransform(), _._scale = e)
                    },
                    _transform: {},
                    _recalcTransform: function() {
                        var t = "";
                        Object.keys(_._transform).forEach(function(e) {
                            _._transform[e] && (t += " ".concat(e, "(").concat(_._transform[e], ")"))
                        }),
                        t = t || "none",
                        _._wrapper.style.transform = t,
                        _._wrapper.style.WebkitTransform = t,
                        _._wrapper.style.MozTransform = t,
                        _._wrapper.style.msTransform = t
                    },
                    _refreshZIndex: function() {
                        _._wrapper.style.zIndex = _._chatExpanded ? 2147483647 : _._zIndex
                    },
                    _refreshChatVisibility: function() { ! _._chatRendered || _._chatHiddenByUser || _._chatHiddenByFrame || _._getStoredItem("banned") === _._clientId ? (_._visible = !1, _._removeClass("visible"), _._postMessage("visible", !1)) : (_._visible = !0, _._addClass("visible"), _._postMessage("visible", !0), _._isSafari && _._safariForceRedraw()),
                        _._refreshMobileBodyFix(),
                        _._refreshMobileViewportFix()
                    },
                    _refreshMobileBodyFix: function() {
                        _._isMobile && "widget" === _._displayMode && (_._visible && _._chatExpanded && !_._chatTransparent ? _._mobileBodyFixEnabled || (_._lastScrollTop = R.pageYOffset, _._lastScrollLeft = R.pageXOffset, _._addClass("bg-white"), (0, r.
                    default)(H.body, "brevo-conversations-mobile-widget-expanded"), (0, r.
                    default)(H.documentElement, "brevo-conversations-mobile-widget-expanded"), _._mobileBodyFixEnabled = !0) : _._mobileBodyFixEnabled && (_._removeClass("bg-white"), (0, b.
                    default)(H.body, "brevo-conversations-mobile-widget-expanded"), (0, b.
                    default)(H.documentElement, "brevo-conversations-mobile-widget-expanded"), R.scrollTo(_._lastScrollLeft, _._lastScrollTop), _._mobileBodyFixEnabled = !1))
                    },
                    _refreshMobileViewportFix: function() {
                        var e;
                        _._isMobile && "widget" === _._displayMode && ("android" === _._sniff.os.name && "webkit" === _._sniff.browser.engine && 4 <= _._sniff.os.majorVersion || "ios" === _._sniff.os.name && "webkit" === _._sniff.browser.engine || "gecko" === _._sniff.browser.engine) && (e = (0, c.
                    default)(), _._visible && _._chatExpanded && !_._chatTransparent ? (e || ((e = H.createElement("meta")).setAttribute("name", "viewport"), document.head.appendChild(e)), _._lastMetaViewportValue = e.getAttribute("content") || "width=none", e.setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no")) : e && "string" == typeof _._lastMetaViewportValue && e.setAttribute("content", _._lastMetaViewportValue))
                    },
                    _chatExpanded: !1,
                    _expandChatWindow: function(e) {
                        var t, n;
                        _._chatExpanded && !!_._chatTransparent == !!e || (t = _._chatExpanded, n = _._chatTransparent, _._chatExpanded = !0, _._addClass("expanded"), e ? (_._chatTransparent = !0, _._addClass("transparent")) : (_._chatTransparent = !1, _._removeClass("transparent")), _._refreshZIndex(), _._adjustZoomLevel(), _._isToggling = !0, _._addClass("toggling"), _._animating(function() {
                            _._isToggling = !1,
                            _._removeClass("toggling"),
                            _._isSafari && _._recalcChatSize(),
                            _._refreshMobileViewportFix(),
                            setTimeout(_._refreshMobileBodyFix, 250)
                        },
                        n), _._recalcChatSize(), _._setup.disableChatOpenHash) || !_._isMobile || e || t && !n || (0, x.
                    default)(document.location.hash) || (document.location.hash = p.CHAT_OPEN_HASHES[0], _._chatOpenHashPushed = !0)
                    },
                    _collapseChatWindow: function() {
                        var e;
                        _._chatExpanded && (e = _._chatTransparent, _._chatExpanded = !1, _._chatTransparent = !1, _._refreshMobileViewportFix(), _._refreshMobileBodyFix(), _._removeClass("expanded"), _._removeClass("transparent"), _._isToggling = !0, _._addClass("toggling"), _._animating(function() {
                            _._isToggling = !1,
                            _._removeClass("toggling"),
                            _._isSafari && _._recalcChatSize(),
                            _._adjustZoomLevel(),
                            _._refreshZIndex()
                        },
                        e), _._recalcChatSize(), !_._setup.disableChatOpenHash) && (0, x.
                    default)(document.location.hash) && (_._chatOpenHashPushed ? (window.history.go( - 1), _._chatOpenHashPushed = !1) : window.history.replaceState ? window.history.replaceState(window.history.state, "", "".concat(window.location.pathname).concat(window.location.search)) : document.location.hash = "#")
                    },
                    _animating: function(e, t) {
                        _._features.transition && _._chatRendered ? "round" === _._buttonType || _._isMobile || _._chatTransparent || t ? (_._addClass("fast-toggle"), e && e()) : (_._removeClass("fast-toggle"), _._addClass("animating"), clearTimeout(_._animatingTimer), t = p.TOGGLE_DURATION + 30, _._animatingTimer = setTimeout(function() {
                            _._removeClass("animating"),
                            e && e()
                        },
                        t)) : e && e()
                    },
                    _setChatPosition: function(e) {
                        var t = (n = {
                            r: "right",
                            l: "left",
                            c: "center",
                            t: "top",
                            b: "bottom",
                            m: "middle"
                        })[e.charAt(0)],
                        n = n[e.charAt(1)];
                        _._isMobile && (e = ["0%", "0%"], "center" === n && (e[0] = "50%"), "right" !== n && "right" !== t || (e[0] = "100%"), "middle" === n && (e[1] = "50%"), "bottom" === n && (e[1] = "100%"), "bottom" === t && (e[1] = "100%"), e = e.join(" "), _._wrapper.style.transformOrigin = e, _._wrapper.style.WebkitTransformOrigin = e, _._wrapper.style.MozTransformOrigin = e, _._wrapper.style.msTransformOrigin = e),
                        _._side && _._removeClass("side-".concat(_._side)),
                        _._position && _._removeClass("pos-".concat(_._position)),
                        _._addClass("side-".concat(t)),
                        _._addClass("pos-".concat(n)),
                        _._side = t,
                        _._position = n,
                        _._recalcChatSize()
                    },
                    _setButtonType: function(e) {
                        _._buttonType && _._removeClass("style-".concat(_._buttonType)),
                        _._addClass("style-".concat(e)),
                        _._buttonType = e,
                        _._recalcChatSize()
                    },
                    _recalcChatSize: function() {
                        var e, t, n = Math.max(_._chatWidth, _._chatMinWidth),
                        o = Math.max(_._chatHeight, _._chatMinHeight),
                        r = Math.max(_._computedLabelWidth || _._chatWidth, _._labelMinWidth),
                        a = _._chatExpanded && _._isMobile && !_._chatTransparent,
                        i = !!{
                            left: 1,
                            right: 1
                        } [_._side];
                        _._iframe.style.width = "".concat(Math.max(n, i ? 0 : r), "px"),
                        _._iframe.style.height = "".concat(Math.max(o, i ? r: 0), "px"),
                        _._chatExpanded ? t = _._chatTransparent ? (e = _._isMobile ? _._mobileTransparentChatWidth: _._transparentChatWidth, _._transparentChatHeight ? Math.min(_._transparentChatHeight, o) : o) : (e = n, o) : "round" === _._buttonType ? (e = _._roundButtonSize, t = _._roundButtonSize) : (e = r, t = _._isMobile ? _._mobileLabelHeight: _._labelHeight, i && (t = [e, e = t][0])),
                        "center" === _._position && !a && (0, l.
                    default)(e) && (e += 1),
                        "middle" === _._position && !_._chatExpanded && (0, l.
                    default)(t) && (t += 1),
                        a ? (_._wrapper.style.width = "100%", _._wrapper.style.height = "100%") : (_._wrapper.style.width = "".concat(e, "px"), _._wrapper.style.height = "".concat(t, "px")),
                        "middle" !== _._position || _._chatExpanded ? "top" !== _._position || _._chatExpanded || "round" === _._buttonType ? _._transform.translateY = void 0 : _._transform.translateY = _._isToggling && _._isSafari ? "".concat(t, "px") : "100%": _._transform.translateY = _._isToggling && _._isSafari ? "".concat(t / 2, "px") : "50%",
                        "center" !== _._position || a ? _._transform.translateX = void 0 : _._transform.translateX = "-50%",
                        _._recalcTransform()
                    },
                    _postMessageQ: [],
                    _postMessage: function(e, t) {
                        _._apiReady ? _._iframe.contentWindow && _._iframe.contentWindow.postMessage(JSON.stringify({
                            type: e,
                            data: t,
                            sender: "BrevoConversations"
                        }), "*") : _._postMessageQ.push([e, t])
                    },
                    _sendMessageQ: function() {
                        for (; _._postMessageQ.length;) _._postMessage.apply(_, A(_._postMessageQ.shift()))
                    },
                    _pageInfoQ: [],
                    _resolvePageInfoQ: function() {
                        for (; _._pageInfoQ.length;) _._sendPageInfo(_._pageInfoQ.shift())
                    },
                    _sendPageInfo: function(e) {
                        var t = (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).overrideEqualityChecks;
                        _._postMessage("clientData", {
                            pageData: e,
                            overrideEqualityChecks: void 0 !== t && t
                        })
                    },
                    _sendFocus: function() {
                        var e = !H.hasFocus || H.hasFocus();
                        _._postMessage(e ? "focus": "blur")
                    },
                    _getClientId: function() {
                        var e, t = _._getStoredItem("clientId"),
                        n = _._setup.visitorId || _._setup.clientId;
                        if (! (t = !n || "string" !== (e = T(n)) && "number" !== e ? t: n)) try {
                            t = (0, d.
                        default)(40)
                        } catch(e) {
                            for (var o = "".concat( + new Date).split(""), r = "abcdefghijklmnopqrstuvwxyz".split(""); r.length;) o.splice((0, h.
                        default)(o.length - 1), 0, r.splice((0, h.
                        default)(r.length - 1), 1)[0]);
                            t = o.join("")
                        }
                        return _._setStoredItem("clientId", t),
                        t
                    },
                    _setReferrer: function() {
                        var e, t = H.referrer;
                        t && (0, S.
                    default)(t).host !== window.location.host || (e = +(_._getStoredItem("lastPageViewAt") || ""), 36e5 < new Date - e) ? _._referrer = t: _._referrer = _._getStoredItem("referrer") || "",
                        _._setStoredItem("referrer", _._referrer || "")
                    },
                    _getHostedStorage: function() {
                        var e;
                        try {
                            e = JSON.parse(_._getStoredItem("hostedItems"))
                        } catch(e) {}
                        return e || (e = {},
                        _._setStoredItem("hostedItems", "{}")),
                        e
                    },
                    _sendHostedStorage: function() {
                        _._postMessage("hostedStorage", _._getHostedStorage())
                    },
                    _setHostedItem: function(e, t) {
                        var n;
                        "string" == typeof e && ((n = _._getHostedStorage())[e] = t, _._setStoredItem("hostedItems", JSON.stringify(n)))
                    },
                    _getStoredItem: function(e) {
                        try {
                            var t, n = null != (t = localStorage.getItem("BrevoConversations.".concat(e))) ? t: localStorage.getItem("SibConversations.".concat(e))
                        } catch(e) {}
                        return null != (n = null != (t = n) ? t: (0, s.
                    default)("BrevoConversations.".concat(e))) ? n: (0, s.
                    default)("SibConversations.".concat(e))
                    },
                    _setStoredItem: function(t, n) {
                        t = "BrevoConversations.".concat(t);
                        try {
                            localStorage.setItem(t, n)
                        } catch(e) { (0, E.
                        default)(t, n)
                        }
                    },
                    _addClass: function(e) {
                        for (var t = _._wrapper,
                        n = [].concat(e), o = n.length - 1; 0 <= o; --o)(0, r.
                    default)(t, "brevo-conversations--".concat(n[o]))
                    },
                    _removeClass: function(e) {
                        for (var t = _._wrapper,
                        n = [].concat(e), o = n.length - 1; 0 <= o; --o)(0, b.
                    default)(t, "brevo-conversations--".concat(n[o]))
                    },
                    _safariForceRedraw: function() {
                        _._wrapper.style.zIndex = _._zIndex - 1,
                        _._wrapper.offsetWidth,
                        _._refreshZIndex()
                    },
                    _titleBlink: function(e) {
                        clearTimeout(_._titleBlink._timeout),
                        _._titleBlink.originalNow && e ? (_._titleBlink.originalTitle = H.title, H.title = e, _._titleBlink.newTitle = e) : (H.title !== _._titleBlink.newTitle && (_._titleBlink.originalTitle = H.title), H.title = _._titleBlink.originalTitle),
                        _._titleBlink.originalNow = !e || !_._titleBlink.originalNow,
                        e && (_._titleBlink._timeout = setTimeout(function() {
                            _._titleBlink(e)
                        },
                        (0, h.
                    default)(1e3, 2e3)))
                    },
                    _logAnalyticsEvent: function(e) {
                        var t = e.eventName,
                        n = e.isNonInteraction;
                        try {
                            "function" == typeof _._setup.onAnalyticEvent && _._setup.onAnalyticEvent(t)
                        } catch(e) {
                            console.warn("Brevo Conversations: Error while trying to execute `BrevoConversationsSetup.onAnalyticEvent` function:", e)
                        }
                        if (!_._setup.disableGaTracking) try {
                            "function" == typeof R.ga && (o = R.ga),
                            r = R.GoogleAnalyticsObject && "function" == typeof R[R.GoogleAnalyticsObject] ? R[R.GoogleAnalyticsObject] : o;
                            var o, r, a, i, s, c = _._setup,
                            l = c.gaTrackerName,
                            u = c.gaTrackingId,
                            d = R.google_tag_manager;
                            if (d) {
                                var f = "dataLayer";
                                try {
                                    f = u ? d[u].dataLayer.name: Object.keys(d).find(function(e) {
                                        return Object.prototype.hasOwnProperty.call(d[e], "gtmDom")
                                    })
                                } catch(e) {} !
                                function() {
                                    window[f].push(arguments)
                                } ("event", t, I({
                                    event_category: p.EVENT_CATEGORY,
                                    non_interaction: n
                                },
                                u ? {
                                    send_to: u
                                }: void 0))
                            }
                            r ? l && "function" == typeof r.getByName ? (a = !(a = r.getByName(l)) && o && r !== o && "function" == typeof o.getByName ? o.getByName(l) : a) && "function" == typeof a.send ? a.send("event", p.EVENT_CATEGORY, t, {
                                nonInteraction: n
                            }) : console.warn("Brevo Conversations: " + "Could’t find Google Analytics tracker named “".concat(l, "”.")) : u ? "function" != typeof r.getAll || (i = !(i = (r.getAll() || []).some(function(e) {
                                return ! (!e || "function" != typeof e.get || e.get("trackingId") !== u || ("function" == typeof e.send && e.send("event", p.EVENT_CATEGORY, t, {
                                    nonInteraction: n
                                }), 0))
                            })) && o && r !== o && "function" == typeof o.getAll ? (o.getAll() || []).some(function(e) {
                                return ! (!e || "function" != typeof e.get || e.get("trackingId") !== u || ("function" == typeof e.send && e.send("event", p.EVENT_CATEGORY, t, {
                                    nonInteraction: n
                                }), 0))
                            }) : i) || console.warn("Brevo Conversations: Could’t find Google Analytics tracker " + "with tracking ID “".concat(u, "”.")) : (s = "function" == typeof r.getAll ? (r.getAll() || [])[0] : void 0) && "function" == typeof s.send ? s.send("event", p.EVENT_CATEGORY, t, {
                                nonInteraction: n
                            }) : r("send", "event", p.EVENT_CATEGORY, t, {
                                nonInteraction: n
                            }) : R._gaq && "function" == typeof R._gaq.push && R._gaq.push(["_trackEvent", p.EVENT_CATEGORY, t, void 0, void 0, n])
                        } catch(e) {
                            console.warn("Brevo Conversations: Error while trying to create Google Analytics event:", e)
                        }
                    },
                    _handleApiEvent: function(t, e) {
                        var n, t = "on".concat(t.charAt(0).toUpperCase()).concat(t.slice(1));
                        try {
                            "function" == typeof _._setup[t] && (n = _._setup)[t].apply(n, A(e))
                        } catch(e) {
                            console.warn("Brevo Conversations: " + "Error while trying to execute `BrevoConversationsSetup.".concat(t, "` function:"), e)
                        }
                    },
                    _eventRemovers: [],
                    _addAutoRemovableEvent: function() {
                        for (var e = arguments.length,
                        t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        _._eventRemovers.push(a.
                    default.apply(_, t))
                    },
                    _cleanEventListeners: function() {
                        for (var e = _._eventRemovers.length - 1; 0 <= e; --e) _._eventRemovers[e]()
                    },
                    _exitIntentBorderThreshold: 30,
                    _handleExitIntent: function() {
                        var r = _._exitIntentBorderThreshold,
                        a = !1;
                        _._addAutoRemovableEvent(document, "mousemove",
                        function(e) {
                            var t = e.clientX,
                            e = e.clientY,
                            n = window.innerHeight,
                            o = window.innerWidth;
                            a && e <= r && _._postMessage("exit-intent"),
                            a = r < e && e < n - r && r < t && t < o - r
                        })
                    },
                    restart: function() {
                        _.kill(),
                        e()
                    },
                    kill: function() {
                        _._killed || (_._cleanEventListeners(), _._style && ((0, m.
                    default)(_._style), delete _._style), _._iframe && ((0, m.
                    default)(_._iframe), _._iframe.src = "", delete _._iframe), _._iframeWrapper && ((0, m.
                    default)(_._iframeWrapper), delete _._iframeWrapper), _._wrapper && ((0, m.
                    default)(_._wrapper), delete _._wrapper), _._killed = !0, Object.keys(_).forEach(function(e) {
                            "function" == typeof _[e] && "restart" !== e && (_[e] = f.
                        default)
                        }))
                    }
                }), (0, w.
            default)());
                t && t.kill && t.kill(),
                R.BrevoConversations = o,
                (R.SibConversations = o)._init()
            } ()
        },
        {
            "../temp/index.css": 32,
            "./addClass": 1,
            "./addEvent": 2,
            "./callFrameAPIMethod": 4,
            "./checkIntegrationDataValidity": 10,
            "./closest": 11,
            "./consts": 12,
            "./extend": 13,
            "./getCookie": 14,
            "./getMetaTag": 15,
            "./getWindowProp": 16,
            "./hasOpenHash": 17,
            "./isModernBrowser": 19,
            "./isOdd": 20,
            "./kindaEqual": 21,
            "./nanoid.custom": 22,
            "./noop": 23,
            "./prepareIntegrationData": 24,
            "./random": 25,
            "./removeClass": 26,
            "./removeNode": 27,
            "./setCookie": 28,
            "./sniffer.pure": 29,
            "./testProp": 30,
            "./url": 31
        }],
        19 : [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.
        default = function(e, t) {
                var n = {
                    chrome: 49,
                    edge: 13,
                    firefox: 45,
                    opera: 36,
                    safari: 10
                };
                return !! Object.hasOwnProperty.call(n, e) && n[e] <= t
            }
        },
        {}],
        20 : [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.
        default = function(e) {
                return e % 2 == 1
            }
        },
        {}],
        21 : [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.
        default = function(t, n) {
                return ! (!t || !n || Object.keys(t).length !== Object.keys(n).length || Object.keys(t).some(function(e) {
                    return Object.prototype.hasOwnProperty.call(n, e) && n[e] !== t[e]
                }))
            }
        },
        {}],
        22 : [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.
        default = function(e) {
                e = e || 21;
                var t = window.crypto || window.msCrypto;
                if (!t) throw new Error("This browser doesn’t support `crypto` :—(");
                var n = "",
                o = t.getRandomValues(new Uint8Array(e));
                for (; 0 < e--;) n += r[63 & o[e]];
                return n
            };
            var r = "Uint8ArdomValuesObj012345679BCDEFGHIJKLMNPQRSTWXYZ_cfghkpqvwxyz-"
        },
        {}], 23 : [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.
        default = function() {}
        },
        {}],
        24 : [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.
        default = function(t) {
                return Object.keys(t).forEach(function(e) {
                    null !== t[e] && (t[e] = t[e].toString())
                }),
                t
            }
        },
        {}],
        25 : [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.
        default = function(e, t) {
                return null == t ? Math.floor(Math.random() * (e + 1)) : e + Math.floor(Math.random() * (t - e + 1))
            }
        },
        {}],
        26 : [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.
        default = function(e, t) {
                e.className = e.className.replace(new RegExp("(\\s+|^)".concat(t, "(\\s+|$)"), "g"), " ").replace(/^\s+|\s+$/g, "")
            }
        },
        {}],
        27 : [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.
        default = function(e) {
                e.parentNode && e.parentNode.removeChild(e)
            }
        },
        {}],
        28 : [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.
        default = function(e, t) {
                var n = new Date;
                n.setTime(n.getTime() + 31536e7),
                H.cookie = "".concat(e, "=").concat(t, ";expires=").concat(n.toGMTString(), ";SameSite=None;secure;")
            }
        },
        {}],
        29 : [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.
        default = function(a) {
                var i = {
                    browser: {
                        name: "",
                        version: "",
                        majorVersion: null,
                        minorVersion: null,
                        patchVersion: null,
                        engine: ""
                    },
                    os: {
                        name: "",
                        version: "",
                        majorVersion: null,
                        minorVersion: null,
                        patchVersion: null
                    },
                    features: {
                        bw: !1,
                        mobile: !1,
                        tv: !1,
                        proxy: !1
                    }
                },
                s = {
                    browser: [{
                        test: ["SailfishBrowser"],
                        browser: {
                            name: "sailfishbrowser",
                            engine: "gecko",
                            $version: {
                                search: "SailfishBrowser/"
                            }
                        },
                        features: {
                            mobile: !0
                        }
                    },
                    {
                        test: ["Edge/"],
                        browser: {
                            name: "edge",
                            engine: "edgehtml",
                            $version: {
                                search: "Edge/"
                            }
                        }
                    },
                    {
                        test: ["MSIE"],
                        browser: {
                            name: "ie",
                            engine: "trident",
                            $version: {
                                search: "MSIE "
                            }
                        }
                    },
                    {
                        test: ["Trident"],
                        browser: {
                            name: "ie",
                            engine: "trident",
                            $version: {
                                search: "rv:"
                            }
                        }
                    },
                    {
                        test: ["OPR/"],
                        browser: {
                            name: "opera",
                            engine: "webkit",
                            $version: {
                                search: "OPR/"
                            }
                        }
                    },
                    {
                        test: ["Chrome"],
                        browser: {
                            name: "chrome",
                            engine: "webkit",
                            $version: {
                                search: "Chrome/"
                            }
                        }
                    },
                    {
                        test: ["Firefox"],
                        browser: {
                            name: "firefox",
                            engine: "gecko",
                            $version: {
                                search: "Firefox/"
                            }
                        }
                    },
                    {
                        test: ["NokiaBrowser"],
                        browser: {
                            name: "nokiabrowser",
                            engine: "webkit",
                            $version: {
                                search: "NokiaBrowser/"
                            }
                        },
                        features: {
                            mobile: !0
                        }
                    },
                    {
                        test: ["Opera Mini", "Presto"],
                        browser: {
                            name: "operamini",
                            engine: "presto",
                            $version: {
                                search: "Version/"
                            }
                        },
                        features: {
                            mobile: !0,
                            proxy: !0
                        }
                    },
                    {
                        test: ["Opera Mini", "WebKit"],
                        browser: {
                            name: "operamini",
                            engine: "webkit"
                        },
                        features: {
                            mobile: !0,
                            proxy: !0
                        }
                    },
                    {
                        test: ["Opera"],
                        browser: {
                            name: "opera",
                            engine: "presto",
                            $version: {
                                search: "Version/"
                            }
                        }
                    },
                    {
                        test: ["OviBrowser"],
                        browser: {
                            name: "ovi",
                            engine: "gecko",
                            $version: {
                                search: "OviBrowser/"
                            }
                        },
                        features: {
                            mobile: !0,
                            proxy: !0
                        }
                    },
                    {
                        test: ["CriOS/"],
                        browser: {
                            name: "chrome",
                            engine: "webkit",
                            $version: {
                                search: "CriOS/"
                            }
                        }
                    },
                    {
                        test: ["Coast/"],
                        browser: {
                            name: "coast",
                            engine: "webkit",
                            $version: {
                                search: "Coast/"
                            }
                        }
                    },
                    {
                        test: ["Safari", "Version/", /(iPhone|iPod|iPad|Macintosh|Windows)/],
                        browser: {
                            name: "safari",
                            engine: "webkit",
                            $version: {
                                search: "Version/"
                            }
                        }
                    },
                    {
                        test: ["WebKit"],
                        browser: {
                            engine: "webkit"
                        }
                    },
                    {
                        test: ["Gecko/"],
                        browser: {
                            engine: "gecko"
                        }
                    }],
                    os: [{
                        test: ["Sailfish"],
                        os: {
                            name: "sailfish"
                        },
                        features: {
                            mobile: !0
                        }
                    },
                    {
                        test: ["Windows Phone"],
                        os: {
                            name: "winphone",
                            $version: {
                                search: "Windows Phone "
                            }
                        },
                        features: {
                            mobile: !0
                        }
                    },
                    {
                        test: ["Windows"],
                        os: {
                            name: "win",
                            $version: {
                                search: "Windows NT "
                            }
                        }
                    },
                    {
                        test: ["Macintosh", "OS X 10"],
                        os: {
                            name: "osx",
                            $version: {
                                search: /OS X /
                            }
                        }
                    },
                    {
                        test: ["Ubuntu"],
                        os: {
                            name: "ubuntu"
                        }
                    },
                    {
                        test: ["Fedora"],
                        os: {
                            name: "fedora",
                            $version: {
                                search: "Fedora/"
                            }
                        }
                    },
                    {
                        test: ["Kindle"],
                        os: {
                            name: "kindle",
                            $version: {
                                search: "Kindle/"
                            }
                        },
                        features: {
                            bw: !0,
                            mobile: !0
                        }
                    },
                    {
                        test: [/(BlackBerry|BB\d+)/],
                        os: {
                            name: "blackberry",
                            $version: {
                                search: "Version/"
                            }
                        },
                        features: {
                            mobile: !0
                        }
                    },
                    {
                        test: ["Symbian"],
                        os: {
                            name: "symbian"
                        },
                        features: {
                            mobile: !0
                        }
                    },
                    {
                        test: ["Series40"],
                        os: {
                            name: "symbian"
                        },
                        features: {
                            mobile: !0
                        }
                    },
                    {
                        test: ["PlayStation Vita"],
                        os: {
                            name: "psvita"
                        },
                        features: {
                            mobile: !0
                        }
                    },
                    {
                        test: ["Nintendo DSi"],
                        os: {
                            name: "dsi"
                        },
                        features: {
                            mobile: !0
                        }
                    },
                    {
                        test: ["New Nintendo 3DS"],
                        os: {
                            name: "n3ds"
                        },
                        browser: {
                            engine: "webkit"
                        },
                        features: {
                            mobile: !0
                        }
                    },
                    {
                        test: ["Nintendo 3DS"],
                        os: {
                            name: "3ds"
                        },
                        browser: {
                            engine: "webkit"
                        },
                        features: {
                            mobile: !0
                        }
                    },
                    {
                        test: ["Viera"],
                        os: {
                            name: "viera"
                        },
                        browser: {
                            engine: "webkit"
                        },
                        features: {
                            tv: !0
                        }
                    },
                    {
                        test: ["SonyDTV"],
                        features: {
                            tv: !0
                        }
                    },
                    {
                        test: ["Android"],
                        os: {
                            name: "android",
                            $version: {
                                search: "Android "
                            }
                        },
                        features: {
                            mobile: !0
                        }
                    },
                    {
                        test: [/iPhone|iPod|iPad/],
                        os: {
                            name: "ios",
                            $version: {
                                search: "OS "
                            }
                        },
                        features: {
                            mobile: !0
                        }
                    }],
                    features: [{
                        test: [/mobile/i],
                        features: {
                            mobile: !0
                        }
                    },
                    {
                        test: [/smart-{0,1}tv/i],
                        features: {
                            tv: !0
                        }
                    }]
                };
                if (a) for (var e in s) {
                    t = void 0;
                    n = void 0;
                    o = void 0;
                    r = void 0;
                    var t = s[e];
                    for (var n = 0; n < t.length; n++) {
                        for (var o = !0,
                        r = 0; r < t[n].test.length; r++) if (t[n].test[r] instanceof RegExp) {
                            if (!t[n].test[r].test(a)) {
                                o = !1;
                                break
                            }
                        } else if ( - 1 === a.indexOf(t[n].test[r])) {
                            o = !1;
                            break
                        }
                        if (o) { !
                            function(e) {
                                for (var t in s) {
                                    var n, o, r;
                                    if (s.hasOwnProperty(t) && e[t]) for (r in e[t].$version && (n = function(e) {
                                        if (e instanceof RegExp) {
                                            if (! (t = (a.match(e) || [])[0])) return
                                        } else t = e;
                                        e = a.indexOf(t);
                                        if ( - 1 !== e) {
                                            var e = a.substring(e + t.length),
                                            t = /^(\d+(\.|_)){0,2}\d+/.exec(e);
                                            if (t) return t[0].replace(/_/g, ".")
                                        }
                                    } (e[t].$version.search)) && (o = n.split("."), e[t].version = n, o[0] && (e[t].majorVersion = parseInt(o[0])), o[1] && (e[t].minorVersion = parseInt(o[1])), o[2]) && (e[t].patchVersion = parseInt(o[2])), e[t]) e[t].hasOwnProperty(r) && "$" !== r[0] && (i[t][r] = e[t][r])
                                }
                            } (t[n]);
                            break
                        }
                    }
                }
                return i
            }
        },
        {}],
        30 : [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.
        default = function(e) {
                var t, n = ["Webkit", "Moz", "ms"],
                o = H.createElement("div");
                if (void 0 !== o.style[e]) return ! 0;
                for (t in e = e.charAt(0).toUpperCase() + e.slice(1), n) if (void 0 !== o.style[n[t] + e]) return ! 0;
                return ! 1
            }
        },
        {}],
        31 : [function(e, t, n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.
        default = function(e) {
                var t;
                return e ? ((t = document.createElement("a")).href = e, t) : {}
            }
        },
        {}],
        32 : [function(e, t, n) {
            t.exports = "@-webkit-keyframes brevo-conversations-chat-appear-from-bottom {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(20px) scale(.97);\n    transform: translateY(20px) scale(.97);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0) scale(1);\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes brevo-conversations-chat-appear-from-bottom {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(20px) scale(.97);\n    transform: translateY(20px) scale(.97);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0) scale(1);\n    transform: translateY(0) scale(1);\n  }\n}\n@-webkit-keyframes brevo-conversations-chat-appear-from-top {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-20px) scale(.97);\n    transform: translateY(-20px) scale(.97);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0) scale(1);\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes brevo-conversations-chat-appear-from-top {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-20px) scale(.97);\n    transform: translateY(-20px) scale(.97);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0) scale(1);\n    transform: translateY(0) scale(1);\n  }\n}\n@-webkit-keyframes brevo-conversations-chat-appear {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(.95);\n    transform: scale(.95);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n@keyframes brevo-conversations-chat-appear {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(.95);\n    transform: scale(.95);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes brevo-conversations-round-button-appear {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(.5);\n    transform: scale(.5);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n@keyframes brevo-conversations-round-button-appear {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(.5);\n    transform: scale(.5);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes brevo-conversations-tab-button-appear {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(.9);\n    transform: scale(.9);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n@keyframes brevo-conversations-tab-button-appear {\n  from {\n    opacity: 0;\n    -webkit-transform: scale(.9);\n    transform: scale(.9);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes brevo-conversations-transparent-appear {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n@keyframes brevo-conversations-transparent-appear {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\nhtml.brevo-conversations-mobile-widget-expanded,\nbody.brevo-conversations-mobile-widget-expanded {\n  overflow: hidden !important;\n  height: 100% !important;\n  width: 100% !important;\n  position: fixed !important;\n  margin: 0 !important;\n  top: 0 !important;\n  left: 0 !important;\n}\n.brevo-conversations {\n  visibility: hidden;\n  opacity: 0;\n  position: fixed;\n  max-height: calc(100% - 40px);\n  max-width: calc(100% - 40px);\n  -webkit-transition: .2s linear;\n  transition: .2s linear;\n  -webkit-transition-property: visibility,opacity;\n  transition-property: visibility,opacity;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  width: auto;\n  height: auto;\n  min-height: 0;\n  min-width: 0;\n  display: block;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box;\n  padding: 0;\n  margin: 0;\n}\n@media print {\n  .brevo-conversations {\n    display: none;\n  }\n}\n.brevo-conversations__iframe-wrapper,\n.brevo-conversations__iframe {\n  left: 0 !important;\n  top: 0 !important;\n  height: 100% !important;\n  width: 100% !important;\n  min-width: 100% !important;\n  max-width: 100% !important;\n  min-height: 100% !important;\n  max-height: 100% !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  display: block !important;\n  background: transparent !important;\n  opacity: 1;\n  -webkit-transform: none;\n  transform: none;\n}\n.brevo-conversations__iframe-wrapper {\n  position: absolute;\n  -webkit-box-shadow: 0 0 3px rgba(0,0,0,0.1),0 0 10px rgba(0,0,0,0.3);\n  box-shadow: 0 0 3px rgba(0,0,0,0.1),0 0 10px rgba(0,0,0,0.3);\n  overflow: hidden !important;\n}\n.brevo-conversations__iframe-wrapper,\n.brevo-conversations--safari .brevo-conversations__iframe,\n.brevo-conversations--webkit.brevo-conversations--expanded .brevo-conversations__iframe {\n  border-radius: 12px;\n}\n.brevo-conversations--mobile-widget:not(.brevo-conversations--expanded),\n.brevo-conversations--mobile-widget:not(.brevo-conversations--expanded) * {\n  cursor: pointer;\n}\n.brevo-conversations--safari .brevo-conversations__iframe {\n  -webkit-mask-image: -webkit-gradient(linear,left top, left bottom,from(#000),to(#000));\n  -webkit-mask-image: linear-gradient(#000,#000);\n  mask-image: -webkit-gradient(linear,left top, left bottom,from(#000),to(#000));\n  mask-image: linear-gradient(#000,#000);\n  -webkit-mask-position: 50% 50%;\n  mask-position: 50% 50%;\n  -webkit-mask-size: 100% 100%;\n  mask-size: 100% 100%;\n  -webkit-mask-repeat: no-repeat;\n  mask-repeat: no-repeat;\n}\n.brevo-conversations:not(.brevo-conversations--expanded) .brevo-conversations__iframe-wrapper {\n  -webkit-transition: .2s linear;\n  transition: .2s linear;\n  -webkit-transition-property: -webkit-box-shadow;\n  transition-property: -webkit-box-shadow;\n  transition-property: box-shadow;\n  transition-property: box-shadow, -webkit-box-shadow;\n}\n.brevo-conversations:not(.brevo-conversations--expanded):hover .brevo-conversations__iframe-wrapper {\n  -webkit-box-shadow: 0 0 3px rgba(0,0,0,0.1),0 0 15px rgba(0,0,0,0.4);\n  box-shadow: 0 0 3px rgba(0,0,0,0.1),0 0 15px rgba(0,0,0,0.4);\n}\n.brevo-conversations--visible {\n  visibility: visible;\n  opacity: 1;\n}\n.brevo-conversations--animating {\n  -webkit-transition: 350ms cubic-bezier(.25,.1,0,1);\n  transition: 350ms cubic-bezier(.25,.1,0,1);\n  -webkit-transition-property: height,width,max-width,max-height,top,bottom,left,right,-webkit-transform;\n  transition-property: height,width,max-width,max-height,top,bottom,left,right,-webkit-transform;\n  transition-property: height,width,max-width,max-height,top,bottom,left,right,transform;\n  transition-property: height,width,max-width,max-height,top,bottom,left,right,transform,-webkit-transform;\n}\n.brevo-conversations--style-round:not(.brevo-conversations--expanded) .brevo-conversations__iframe-wrapper,\n.brevo-conversations--style-round.brevo-conversations--safari:not(.brevo-conversations--expanded) .brevo-conversations__iframe {\n  border-radius: 50%;\n}\n.brevo-conversations--custom-button:not(.brevo-conversations--expanded) {\n  visibility: hidden !important;\n  opacity: 0 !important;\n  pointer-events: none;\n  -webkit-transition: none;\n  transition: none;\n}\n.brevo-conversations--fast-toggle.brevo-conversations--style-round:not(.brevo-conversations--expanded) .brevo-conversations__iframe-wrapper {\n  -webkit-animation: brevo-conversations-round-button-appear 150ms ease-out 50ms both;\n  animation: brevo-conversations-round-button-appear 150ms ease-out 50ms both;\n}\n.brevo-conversations--fast-toggle.brevo-conversations--style-tab:not(.brevo-conversations--expanded) .brevo-conversations__iframe-wrapper {\n  -webkit-animation: brevo-conversations-tab-button-appear 150ms ease-out 50ms both;\n  animation: brevo-conversations-tab-button-appear 150ms ease-out 50ms both;\n}\n.brevo-conversations--fast-toggle.brevo-conversations--expanded .brevo-conversations__iframe-wrapper {\n  -webkit-animation: brevo-conversations-chat-appear 150ms ease-out 50ms both;\n  animation: brevo-conversations-chat-appear 150ms ease-out 50ms both;\n}\n.brevo-conversations--fast-toggle.brevo-conversations--transparent .brevo-conversations__iframe-wrapper {\n  -webkit-animation-name: brevo-conversations-transparent-appear;\n  animation-name: brevo-conversations-transparent-appear;\n}\n.brevo-conversations--fast-toggle.brevo-conversations--expanded:not(.brevo-conversations--mobile-widget):not(.brevo-conversations--transparent) .brevo-conversations__iframe-wrapper {\n  -webkit-animation-name: brevo-conversations-chat-appear-from-bottom;\n  animation-name: brevo-conversations-chat-appear-from-bottom;\n}\n.brevo-conversations--fast-toggle.brevo-conversations--pos-top.brevo-conversations--expanded:not(.brevo-conversations--mobile-widget):not(.brevo-conversations--transparent) .brevo-conversations__iframe-wrapper {\n  -webkit-animation-name: brevo-conversations-chat-appear-from-top;\n  animation-name: brevo-conversations-chat-appear-from-top;\n}\n.brevo-conversations--expanded .brevo-conversations__iframe-wrapper {\n  -webkit-box-shadow: 0 0 3px rgba(0,0,0,0.1),0 5px 50px rgba(0,0,0,0.2);\n  box-shadow: 0 0 3px rgba(0,0,0,0.1),0 5px 50px rgba(0,0,0,0.2);\n}\n.brevo-conversations--side-bottom {\n  bottom: 20px;\n}\n.brevo-conversations--side-left {\n  left: 20px;\n}\n.brevo-conversations--side-left.brevo-conversations--style-tab:not(.brevo-conversations--expanded) {\n  left: 10px;\n}\n.brevo-conversations--side-right {\n  right: 20px;\n}\n.brevo-conversations--side-right.brevo-conversations--style-tab:not(.brevo-conversations--expanded) {\n  right: 10px;\n}\n.brevo-conversations--side-left.brevo-conversations--expanded {\n  bottom: 20px;\n  left: 20px;\n}\n.brevo-conversations--side-right.brevo-conversations--expanded {\n  bottom: 20px;\n  right: 20px;\n}\n.brevo-conversations--pos-right {\n  right: 20px;\n}\n.brevo-conversations--pos-left {\n  left: 20px;\n}\n.brevo-conversations--pos-center {\n  left: 50%;\n}\n.brevo-conversations--pos-top.brevo-conversations--style-tab:not(.brevo-conversations--expanded) {\n  bottom: 100%;\n  margin-bottom: -20px;\n}\n.brevo-conversations--pos-top.brevo-conversations--style-round:not(.brevo-conversations--expanded) {\n  top: 20px;\n}\n.brevo-conversations--pos-bottom:not(.brevo-conversations--expanded) {\n  bottom: 20px;\n}\n.brevo-conversations--pos-middle:not(.brevo-conversations--expanded) {\n  bottom: 50%;\n}\n.brevo-conversations--mobile-widget.brevo-conversations--expanded:not(.brevo-conversations--transparent) {\n  max-width: none;\n  max-height: none;\n  top: 0 !important;\n  bottom: 0 !important;\n}\n.brevo-conversations--mobile-widget.brevo-conversations--expanded .brevo-conversations__iframe-wrapper,\n.brevo-conversations--safari.brevo-conversations--mobile-widget.brevo-conversations--expanded .brevo-conversations__iframe,\n.brevo-conversations--webkit.brevo-conversations--mobile-widget.brevo-conversations--expanded .brevo-conversations__iframe {\n  border-radius: .1px;\n}\n.brevo-conversations--mobile-widget.brevo-conversations--expanded.brevo-conversations--pos-right:not(.brevo-conversations--transparent) {\n  right: 0;\n}\n.brevo-conversations--mobile-widget.brevo-conversations--expanded.brevo-conversations--pos-left:not(.brevo-conversations--transparent) {\n  left: 0;\n}\n.brevo-conversations--mobile-widget.brevo-conversations--expanded.brevo-conversations--pos-center:not(.brevo-conversations--transparent) {\n  left: 0;\n}\n.brevo-conversations--mobile-widget.brevo-conversations--expanded.brevo-conversations--side-right:not(.brevo-conversations--transparent) {\n  right: 0;\n}\n.brevo-conversations--mobile-widget.brevo-conversations--expanded.brevo-conversations--side-left:not(.brevo-conversations--transparent) {\n  left: 0;\n}\n.brevo-conversations--transparent.brevo-conversations--expanded {\n  bottom: 10px;\n}\n.brevo-conversations--transparent.brevo-conversations--expanded .brevo-conversations__iframe-wrapper {\n  -webkit-box-shadow: none;\n  box-shadow: none;\n}\n.brevo-conversations--side-left.brevo-conversations--transparent,\n.brevo-conversations--pos-left.brevo-conversations--transparent {\n  left: 10px;\n}\n.brevo-conversations--side-right.brevo-conversations--transparent,\n.brevo-conversations--pos-right.brevo-conversations--transparent {\n  right: 10px;\n}\n.brevo-conversations--mobile-widget.brevo-conversations--transparent {\n  max-height: 300px;\n}\n.brevo-conversations--bg-white {\n  background: #fff;\n}\n"
        },
        {}]
    },
    {},
    [18])
} (window, document);