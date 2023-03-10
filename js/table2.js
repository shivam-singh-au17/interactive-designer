/*! grapesjs-table - 1.0.8 */ ! function (e, t) {
    'object' == typeof exports && 'object' == typeof module ? module.exports = t() : 'function' == typeof define && define.amd ? define([], t) : 'object' == typeof exports ? exports["grapesjs-table"] = t() : e["grapesjs-table"] = t()
}(window, (function () {
    return function (e) {
        var t = {};

        function r(n) {
            if (t[n]) return t[n].exports;
            var o = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }
        return r.m = e, r.c = t, r.d = function (e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, r.r = function (e) {
            'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: 'Module'
            }), Object.defineProperty(e, '__esModule', {
                value: !0
            })
        }, r.t = function (e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, 'default', {
                    enumerable: !0,
                    value: e
                }), 2 & t && 'string' != typeof e)
                for (var o in e) r.d(n, o, function (t) {
                    return e[t]
                }.bind(null, o));
            return n
        }, r.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e['default']
            } : function () {
                return e
            };
            return r.d(t, 'a', t), t
        }, r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 3)
    }([function (e, t) {
        e.exports = function (e, t, r) {
            return t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r, e
        }
    }, function (e, t, r) {
        var n = r(2);
        e.exports = function (e, t) {
            if (null == e) return {};
            var r, o, a = n(e, t);
            if (Object.getOwnPropertySymbols) {
                var c = Object.getOwnPropertySymbols(e);
                for (o = 0; o < c.length; o++) r = c[o], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
            }
            return a
        }
    }, function (e, t) {
        e.exports = function (e, t) {
            if (null == e) return {};
            var r, n, o = {},
                a = Object.keys(e);
            for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o
        }
    }, function (e, t, r) {
        "use strict";
        r.r(t);
        var n = r(0),
            o = r.n(n),
            a = r(1),
            c = r.n(a);

        function l(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), r.push.apply(r, n)
            }
            return r
        }

        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? l(Object(r), !0).forEach((function (t) {
                    o()(e, t, r[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }))
            }
            return e
        }
        var s = function (e, t) {
            var r = t.modal,
                n = c()(t, ["modal"]),
                o = "table",
                a = n.attrTable,
                l = n.classTable,
                s = e.getType("table"),
                u = s.model,
                p = s.view,
                b = n.tableProps || {},
                d = [];
            b.header && d.push({
                type: "thead",
                row: 1,
                columns: b.columns
            }), d.push(i({
                type: "tbody"
            }, b)), b.footer && d.push({
                type: "tfoot",
                row: 1,
                columns: b.columns
            }), e.addType(o, {
                model: u.extend({
                    defaults: i(i({}, u.prototype.defaults), {}, {
                        components: d,
                        traits: [{
                            type: "number",
                            label: "Number of Rows",
                            name: "rows",
                            changeProp: 1
                        }, {
                            type: "number",
                            label: "Number of Columns",
                            name: "columns",
                            changeProp: 1
                        }, {
                            type: "checkbox",
                            label: "Table Header",
                            name: "header",
                            valueTrue: !0,
                            valueFalse: !1,
                            changeProp: 1
                        }, {
                            type: "checkbox",
                            label: "Table Footer",
                            name: "footer",
                            valueTrue: !0,
                            valueFalse: !1,
                            changeProp: 1
                        }]
                    }, b),
                    init: function () {
                        var e = this.getAttributes();
                        e[a] = 1, this.setAttributes(e), l && this.addClass(l), this.listenTo(this, "change:rows", this.changeDimensions), this.listenTo(this, "change:columns", this.changeDimensions), this.listenTo(this, "change:header", this.changeDimensions), this.listenTo(this, "change:footer", this.changeDimensions)
                    },
                    changeDimensions: function () {
                        var e = this.get("rows"),
                            t = this.get("columns"),
                            r = this.get("header"),
                            n = this.get("footer"),
                            o = [];
                        r && o.push({
                            type: "thead",
                            rows: 1,
                            columns: t
                        }), o.push({
                            type: "tbody",
                            rows: e,
                            columns: t
                        }), n && o.push({
                            type: "tfoot",
                            rows: 1,
                            columns: t
                        }), this.components(o)
                    }
                }, {
                    isComponent: function (e) {
                        if (e.hasAttribute && e.hasAttribute(a)) return {
                            type: o
                        }
                    }
                }),
                view: p.extend({
                    init: function () {
                        this.listenTo(this.model, "active", this.openModal)
                    },
                    openModal: function () {
                        var e = this,
                            t = b.rows,
                            n = b.columns,
                            o = document.createElement("div"),
                            a = document.createElement("div");
                        a.className = "modal-table-row";
                        var c = document.createElement("label");
                        c.innerHTML = "No. of Rows", a.appendChild(c);
                        var l = document.createElement("input");
                        l.setAttribute("type", "number"), l.setAttribute("value", t), l.onchange = function () {
                            t = l.value
                        }, a.appendChild(l), o.appendChild(a);
                        var i = document.createElement("div");
                        i.className = "modal-table-column";
                        var s = document.createElement("label");
                        s.innerHTML = "No. of Columns", i.appendChild(s);
                        var u = document.createElement("input");
                        u.setAttribute("type", "number"), u.setAttribute("value", n), u.onchange = function () {
                            n = u.value
                        }, i.appendChild(u), o.appendChild(i);
                        var p = document.createElement("div");
                        p.className = "modal-create-btn";
                        var d = document.createElement("button");
                        d.setAttribute("type", "button"), d.innerHTML = "Create Table", d.onclick = function () {
                            e.model.set("rows", t), e.model.set("columns", n), r.close()
                        }, p.appendChild(d), o.appendChild(p);
                        var f = document.createElement("style");
                        f.innerHTML = "\n        .gjs-mdl-dialog {\n          width: 35%;\n        }\n        .modal-table-row, .modal-table-column {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          margin-bottom: 15px;\n        }\n        .modal-table-row label, .modal-table-column label {\n          font-size: 14px;\n          flex: 1;\n        }\n        .modal-table-row input, .modal-table-column input {\n          flex: 1;\n          height: 35px;\n          border-radius: 10px;\n          border: 1px solid #f5f5f5;\n          padding: 2px 16px;\n          color: #333333;\n        }\n        .modal-table-row input, .modal-table-column input:focus {\n          outline: none\n        }\n        .modal-create-btn {\n          text-align: right;\n        }\n        .modal-create-btn button {\n          height: 35px;\n          border-radius: 10px;\n          border: none;\n          cursor: pointer;\n          padding: 0 10px;\n          color: #333333;\n        }\n        .modal-create-btn button:focus {\n          outline: none\n        }\n        ", o.appendChild(f), r.setTitle("Add a New Table").setContent(o).open()
                    }
                })
            })
        };

        function u(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), r.push.apply(r, n)
            }
            return r
        }

        function p(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? u(Object(r), !0).forEach((function (t) {
                    o()(e, t, r[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }))
            }
            return e
        }
        var b = function (e, t) {
            var r = "tbody",
                n = t.attrTableBody,
                o = t.classTableBody,
                a = e.getType("tbody"),
                c = a.model,
                l = a.view;
            e.addType(r, {
                model: c.extend({
                    defaults: p(p({}, c.prototype.defaults), t.bodyProps),
                    init: function () {
                        var e = this.getAttributes();
                        e[n] = 1, this.setAttributes(e), o && this.addClass(o)
                    }
                }, {
                    isComponent: function (e) {
                        if (e.hasAttribute && e.hasAttribute(n)) return {
                            type: r
                        }
                    }
                }),
                view: l.extend({})
            })
        };

        function d(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), r.push.apply(r, n)
            }
            return r
        }

        function f(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? d(Object(r), !0).forEach((function (t) {
                    o()(e, t, r[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }))
            }
            return e
        }
        var y = function (e, t) {
            var r = "thead",
                n = t.attrTableHeader,
                o = t.classTableHeader,
                a = e.getType("thead"),
                c = a.model,
                l = a.view;
            e.addType(r, {
                model: c.extend({
                    defaults: f(f({}, c.prototype.defaults), t.headProps),
                    init: function () {
                        var e = this.getAttributes();
                        e[n] = 1, this.setAttributes(e), o && this.addClass(o)
                    }
                }, {
                    isComponent: function (e) {
                        if (e.hasAttribute && e.hasAttribute(n)) return {
                            type: r
                        }
                    }
                }),
                view: l.extend({})
            })
        };

        function m(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), r.push.apply(r, n)
            }
            return r
        }

        function O(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? m(Object(r), !0).forEach((function (t) {
                    o()(e, t, r[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }))
            }
            return e
        }
        var h = function (e, t) {
            var r = "tfoot",
                n = t.attrTableFooter,
                o = t.classTableFooter,
                a = e.getType("tfoot"),
                c = a.model,
                l = a.view;
            e.addType(r, {
                model: c.extend({
                    defaults: O(O({}, c.prototype.defaults), t.footerProps),
                    init: function () {
                        var e = this.getAttributes();
                        e[n] = 1, this.setAttributes(e), o && this.addClass(o)
                    }
                }, {
                    isComponent: function (e) {
                        if (e.hasAttribute && e.hasAttribute(n)) return {
                            type: r
                        }
                    }
                }),
                view: l.extend({})
            })
        };

        function g(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), r.push.apply(r, n)
            }
            return r
        }

        function v(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? g(Object(r), !0).forEach((function (t) {
                    o()(e, t, r[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }))
            }
            return e
        }
        var j = function (e, t) {
                var r = "cell",
                    n = t.attrTableCell,
                    o = t.classTableCell,
                    a = e.getType("cell"),
                    c = a.model,
                    l = a.view;
                e.addType(r, {
                    model: c.extend({
                        defaults: v(v({}, c.prototype.defaults), {}, {
                            editable: !0,
                            components: [{
                                tagName: "span",
                                type: "text",
                                attributes: {
                                    title: "cell"
                                },
                                components: [{
                                    type: "textnode",
                                    content: "Cell"
                                }]
                            }]
                        }, t.bodyProps),
                        init: function () {
                            var e = this.getAttributes();
                            e[n] = 1, this.setAttributes(e), o && this.addClass(o)
                        }
                    }, {
                        isComponent: function (e) {
                            if (e.hasAttribute && e.hasAttribute(n)) return {
                                type: r
                            }
                        }
                    }),
                    view: l.extend({})
                })
            },
            w = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = e.DomComponents;
                t.modal = e.Modal, h(r, t), y(r, t), b(r, t), s(r, t), j(r, t)
            };

        function P(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), r.push.apply(r, n)
            }
            return r
        }

        function T(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? P(Object(r), !0).forEach((function (t) {
                    o()(e, t, r[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : P(Object(r)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }))
            }
            return e
        }
        var x = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = e.BlockManager,
                n = t.tableBlock,
                o = t.style,
                a = "table",
                c = "<table data-gjs-type=\"".concat(a, "\"></table>\n    ").concat(o ? "<style>".concat(o, "</style>") : "");
            n && r.add("table", T({
                label: "Table",
                attributes: {
                    class: "fa fa-columns"
                },
                category: "Tables",
                activate: 1,
                content: c
            }, n))
        };

        function D(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), r.push.apply(r, n)
            }
            return r
        }

        function C(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? D(Object(r), !0).forEach((function (t) {
                    o()(e, t, r[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : D(Object(r)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                }))
            }
            return e
        }
        var A = "data-table",
            E = "data-tbody",
            S = "data-tfoot",
            k = "data-thead",
            M = "data-cell";
        t["default"] = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = C(C({}, {
                    tableBlock: {},
                    tableProps: {
                        rows: 3,
                        columns: 3,
                        header: !0,
                        footer: !0
                    },
                    bodyProps: {},
                    headProps: {},
                    footerProps: {},
                    attrTable: A,
                    attrTableBody: E,
                    attrTableFooter: S,
                    attrTableHeader: k,
                    attrTableCell: M,
                    classTable: "table",
                    classTableBody: "table-body",
                    classTableFooter: "table-footer",
                    classTableHeader: "table-header",
                    classTableCell: "table-cell",
                    style: "\n      table {\n        width: 100%;\n        border: 1px solid #cccccc;\n        margin-bottom: 20px;\n      }\n      table td {\n        padding: 8px;\n        border: 1px solid #cccccc;\n      }\n    "
                }), t);
            w(e, r), x(e, r)
        }
    }])
}));
//# sourceMappingURL=grapesjs-table.min.js.map