!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports["toolbox-component"] = e())
    : (t["toolbox-component"] = e());
})(window, function () {
  return (function (t) {
    var e = {};
    function n(o) {
      if (e[o]) return e[o].exports;
      var a = (e[o] = { i: o, l: !1, exports: {} });
      return t[o].call(a.exports, a, a.exports, n), (a.l = !0), a.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
      }),
      (n.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (n.t = function (t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (
          (n.r(o),
          Object.defineProperty(o, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var a in t)
            n.d(
              o,
              a,
              function (e) {
                return t[e];
              }.bind(null, a)
            );
        return o;
      }),
      (n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return n.d(e, "a", e), e;
      }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = ""),
      n((n.s = 8))
    );
  })([
    function (t, e) {
      t.exports = function (t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      };
    },
    function (t, e, n) {
      var o = n(3),
        a = n(4),
        i = n(5),
        r = n(7);
      t.exports = function (t, e) {
        return o(t) || a(t, e) || i(t, e) || r();
      };
    },
    function (t, e) {
      function n(e) {
        return (
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? (t.exports = n =
                function (t) {
                  return typeof t;
                })
            : (t.exports = n =
                function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          n(e)
        );
      }
      t.exports = n;
    },
    function (t, e) {
      t.exports = function (t) {
        if (Array.isArray(t)) return t;
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
          var n = [],
            o = !0,
            a = !1,
            i = void 0;
          try {
            for (
              var r, c = t[Symbol.iterator]();
              !(o = (r = c.next()).done) &&
              (n.push(r.value), !e || n.length !== e);
              o = !0
            );
          } catch (t) {
            (a = !0), (i = t);
          } finally {
            try {
              o || null == c.return || c.return();
            } finally {
              if (a) throw i;
            }
          }
          return n;
        }
      };
    },
    function (t, e, n) {
      var o = n(6);
      t.exports = function (t, e) {
        if (t) {
          if ("string" == typeof t) return o(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? o(t, e)
              : void 0
          );
        }
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o;
      };
    },
    function (t, e) {
      t.exports = function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      };
    },
    function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n(0),
        a = n.n(o),
        r = function (t, e) {
          var n = function t(e) {
              return "html" === e.tagName.toLowerCase()
                ? "<li><a><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;html</span></a></li>"
                : t(e.parentNode) +
                    "<li><a><span>".concat(
                      e.tagName.toLowerCase() + (e.id ? "#" + e.id : ""),
                      "</span></a></li>"
                    );
            },
            o = t.$,
            a = t.Config.stylePrefix;
          t.on("component:selected", function (e) {
            var i,
              r,
              c = o("#".concat(a, "breadcrumbs"));
            !c.length &&
              o("body").append(o('<div id="'.concat(a, 'breadcrumbs"></div>'))),
              c.html(
                ((i = e.getEl()),
                (r = i.tagName.toLowerCase()),
                (r += i.id ? "#" + i.id : ""),
                i.className.length &&
                  i.className.split(/\s/).forEach(function (t) {
                    r +=
                      "i_designer-selected" != t &&
                      "cke_editable" != t &&
                      "cke_editable_inline" != t &&
                      "cke_contents_ltr" != t &&
                      "cke_show_borders" != t
                        ? "." + t
                        : "";
                  }),
                n(i.parentNode) + "<li><a><span>".concat(r, "</span></a></li>"))
              ),
              c.find("span").on("click", function (e) {
                var n = t.Canvas.getDocument();
                t.select(n.querySelector(e.currentTarget.innerText.trim()));
              });
          });
        };
      if (!c)
        var c = {
          map: function (t, e) {
            var n = {};
            return e
              ? t.map(function (t, o) {
                  return (n.index = o), e.call(n, t);
                })
              : t.slice();
          },
          naturalOrder: function (t, e) {
            return t < e ? -1 : t > e ? 1 : 0;
          },
          sum: function (t, e) {
            var n = {};
            return t.reduce(
              e
                ? function (t, o, a) {
                    return (n.index = a), t + e.call(n, o);
                  }
                : function (t, e) {
                    return t + e;
                  },
              0
            );
          },
          max: function (t, e) {
            return Math.max.apply(null, e ? c.map(t, e) : t);
          },
        };
      var s = (function () {
          function t(t, e, n) {
            return (t << 10) + (e << 5) + n;
          }
          function e(t) {
            var e = [],
              n = !1;
            function o() {
              e.sort(t), (n = !0);
            }
            return {
              push: function (t) {
                e.push(t), (n = !1);
              },
              peek: function (t) {
                return n || o(), void 0 === t && (t = e.length - 1), e[t];
              },
              pop: function () {
                return n || o(), e.pop();
              },
              size: function () {
                return e.length;
              },
              map: function (t) {
                return e.map(t);
              },
              debug: function () {
                return n || o(), e;
              },
            };
          }
          function n(t, e, n, o, a, i, r) {
            (this.r1 = t),
              (this.r2 = e),
              (this.g1 = n),
              (this.g2 = o),
              (this.b1 = a),
              (this.b2 = i),
              (this.histo = r);
          }
          function o() {
            this.vboxes = new e(function (t, e) {
              return c.naturalOrder(
                t.vbox.count() * t.vbox.volume(),
                e.vbox.count() * e.vbox.volume()
              );
            });
          }
          function a(e, n) {
            if (n.count()) {
              var o = n.r2 - n.r1 + 1,
                a = n.g2 - n.g1 + 1,
                i = c.max([o, a, n.b2 - n.b1 + 1]);
              if (1 == n.count()) return [n.copy()];
              var r,
                s,
                l,
                u,
                d = 0,
                f = [],
                p = [];
              if (i == o)
                for (r = n.r1; r <= n.r2; r++) {
                  for (u = 0, s = n.g1; s <= n.g2; s++)
                    for (l = n.b1; l <= n.b2; l++) u += e[t(r, s, l)] || 0;
                  f[r] = d += u;
                }
              else if (i == a)
                for (r = n.g1; r <= n.g2; r++) {
                  for (u = 0, s = n.r1; s <= n.r2; s++)
                    for (l = n.b1; l <= n.b2; l++) u += e[t(s, r, l)] || 0;
                  f[r] = d += u;
                }
              else
                for (r = n.b1; r <= n.b2; r++) {
                  for (u = 0, s = n.r1; s <= n.r2; s++)
                    for (l = n.g1; l <= n.g2; l++) u += e[t(s, l, r)] || 0;
                  f[r] = d += u;
                }
              return (
                f.forEach(function (t, e) {
                  p[e] = d - t;
                }),
                (function (t) {
                  var e,
                    o,
                    a,
                    i,
                    c,
                    s = t + "1",
                    l = t + "2",
                    u = 0;
                  for (r = n[s]; r <= n[l]; r++)
                    if (f[r] > d / 2) {
                      for (
                        a = n.copy(),
                          i = n.copy(),
                          c =
                            (e = r - n[s]) <= (o = n[l] - r)
                              ? Math.min(n[l] - 1, ~~(r + o / 2))
                              : Math.max(n[s], ~~(r - 1 - e / 2));
                        !f[c];

                      )
                        c++;
                      for (u = p[c]; !u && f[c - 1]; ) u = p[--c];
                      return (a[l] = c), (i[s] = a[l] + 1), [a, i];
                    }
                })(i == o ? "r" : i == a ? "g" : "b")
              );
            }
          }
          return (
            (n.prototype = {
              volume: function (t) {
                return (
                  (this._volume && !t) ||
                    (this._volume =
                      (this.r2 - this.r1 + 1) *
                      (this.g2 - this.g1 + 1) *
                      (this.b2 - this.b1 + 1)),
                  this._volume
                );
              },
              count: function (e) {
                var n = this.histo;
                if (!this._count_set || e) {
                  var o,
                    a,
                    i,
                    r = 0;
                  for (o = this.r1; o <= this.r2; o++)
                    for (a = this.g1; a <= this.g2; a++)
                      for (i = this.b1; i <= this.b2; i++)
                        r += n[t(o, a, i)] || 0;
                  (this._count = r), (this._count_set = !0);
                }
                return this._count;
              },
              copy: function () {
                return new n(
                  this.r1,
                  this.r2,
                  this.g1,
                  this.g2,
                  this.b1,
                  this.b2,
                  this.histo
                );
              },
              avg: function (e) {
                var n = this.histo;
                if (!this._avg || e) {
                  var o,
                    a,
                    i,
                    r,
                    c = 0,
                    s = 0,
                    l = 0,
                    u = 0;
                  for (a = this.r1; a <= this.r2; a++)
                    for (i = this.g1; i <= this.g2; i++)
                      for (r = this.b1; r <= this.b2; r++)
                        (c += o = n[t(a, i, r)] || 0),
                          (s += o * (a + 0.5) * 8),
                          (l += o * (i + 0.5) * 8),
                          (u += o * (r + 0.5) * 8);
                  this._avg = c
                    ? [~~(s / c), ~~(l / c), ~~(u / c)]
                    : [
                        ~~((8 * (this.r1 + this.r2 + 1)) / 2),
                        ~~((8 * (this.g1 + this.g2 + 1)) / 2),
                        ~~((8 * (this.b1 + this.b2 + 1)) / 2),
                      ];
                }
                return this._avg;
              },
              contains: function (t) {
                var e = t[0] >> 3;
                return (
                  (gval = t[1] >> 3),
                  (bval = t[2] >> 3),
                  e >= this.r1 &&
                    e <= this.r2 &&
                    gval >= this.g1 &&
                    gval <= this.g2 &&
                    bval >= this.b1 &&
                    bval <= this.b2
                );
              },
            }),
            (o.prototype = {
              push: function (t) {
                this.vboxes.push({ vbox: t, color: t.avg() });
              },
              palette: function () {
                return this.vboxes.map(function (t) {
                  return t.color;
                });
              },
              size: function () {
                return this.vboxes.size();
              },
              map: function (t) {
                for (var e = this.vboxes, n = 0; n < e.size(); n++)
                  if (e.peek(n).vbox.contains(t)) return e.peek(n).color;
                return this.nearest(t);
              },
              nearest: function (t) {
                for (var e, n, o, a = this.vboxes, i = 0; i < a.size(); i++)
                  ((n = Math.sqrt(
                    Math.pow(t[0] - a.peek(i).color[0], 2) +
                      Math.pow(t[1] - a.peek(i).color[1], 2) +
                      Math.pow(t[2] - a.peek(i).color[2], 2)
                  )) < e ||
                    void 0 === e) &&
                    ((e = n), (o = a.peek(i).color));
                return o;
              },
              forcebw: function () {
                var t = this.vboxes;
                t.sort(function (t, e) {
                  return c.naturalOrder(c.sum(t.color), c.sum(e.color));
                });
                var e = t[0].color;
                e[0] < 5 && e[1] < 5 && e[2] < 5 && (t[0].color = [0, 0, 0]);
                var n = t.length - 1,
                  o = t[n].color;
                o[0] > 251 &&
                  o[1] > 251 &&
                  o[2] > 251 &&
                  (t[n].color = [255, 255, 255]);
              },
            }),
            {
              quantize: function (i, r) {
                if (!i.length || r < 2 || r > 256) return !1;
                var s = (function (e) {
                  var n,
                    o = new Array(32768);
                  return (
                    e.forEach(function (e) {
                      (n = t(e[0] >> 3, e[1] >> 3, e[2] >> 3)),
                        (o[n] = (o[n] || 0) + 1);
                    }),
                    o
                  );
                })(i);
                s.forEach(function () {});
                var l = (function (t, e) {
                    var o,
                      a,
                      i,
                      r = 1e6,
                      c = 0,
                      s = 1e6,
                      l = 0,
                      u = 1e6,
                      d = 0;
                    return (
                      t.forEach(function (t) {
                        (o = t[0] >> 3) < r ? (r = o) : o > c && (c = o),
                          (a = t[1] >> 3) < s ? (s = a) : a > l && (l = a),
                          (i = t[2] >> 3) < u ? (u = i) : i > d && (d = i);
                      }),
                      new n(r, c, s, l, u, d, e)
                    );
                  })(i, s),
                  u = new e(function (t, e) {
                    return c.naturalOrder(t.count(), e.count());
                  });
                function d(t, e) {
                  for (var n, o = t.size(), i = 0; i < 1e3; ) {
                    if (o >= e) return;
                    if (i++ > 1e3) return;
                    if ((n = t.pop()).count()) {
                      var r = a(s, n),
                        c = r[0],
                        l = r[1];
                      if (!c) return;
                      t.push(c), l && (t.push(l), o++);
                    } else t.push(n), i++;
                  }
                }
                u.push(l), d(u, 0.75 * r);
                for (
                  var f = new e(function (t, e) {
                    return c.naturalOrder(
                      t.count() * t.volume(),
                      e.count() * e.volume()
                    );
                  });
                  u.size();

                )
                  f.push(u.pop());
                d(f, r);
                for (var p = new o(); f.size(); ) p.push(f.pop());
                return p;
              },
            }
          );
        })().quantize,
        l = function (t) {
          (this.canvas = document.createElement("canvas")),
            (this.context = this.canvas.getContext("2d")),
            (this.width = this.canvas.width = t.naturalWidth),
            (this.height = this.canvas.height = t.naturalHeight),
            this.context.drawImage(t, 0, 0, this.width, this.height);
        };
      l.prototype.getImageData = function () {
        return this.context.getImageData(0, 0, this.width, this.height);
      };
      var u = function () {};
      (u.prototype.getColor = function (t, e) {
        return void 0 === e && (e = 10), this.getPalette(t, 5, e)[0];
      }),
        (u.prototype.getPalette = function (t, e, n) {
          var o = (function (t) {
              var e = t.colorCount,
                n = t.quality;
              if (void 0 !== e && Number.isInteger(e)) {
                if (1 === e)
                  throw new Error(
                    "colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()"
                  );
                (e = Math.max(e, 2)), (e = Math.min(e, 20));
              } else e = 10;
              return (
                (void 0 === n || !Number.isInteger(n) || n < 1) && (n = 10),
                { colorCount: e, quality: n }
              );
            })({ colorCount: e, quality: n }),
            a = new l(t),
            i = (function (t, e, n) {
              for (
                var o = t,
                  a = [],
                  i = 0,
                  r = void 0,
                  c = void 0,
                  s = void 0,
                  l = void 0,
                  u = void 0;
                i < e;
                i += n
              )
                (c = o[0 + (r = 4 * i)]),
                  (s = o[r + 1]),
                  (l = o[r + 2]),
                  (void 0 === (u = o[r + 3]) || u >= 125) &&
                    ((c > 250 && s > 250 && l > 250) || a.push([c, s, l]));
              return a;
            })(a.getImageData().data, a.width * a.height, o.quality),
            r = s(i, o.colorCount);
          return r ? r.palette() : null;
        }),
        (u.prototype.getColorFromUrl = function (t, e, n) {
          var o = this,
            a = document.createElement("img");
          a.addEventListener("load", function () {
            var i = o.getPalette(a, 5, n);
            e(i[0], t);
          }),
            (a.src = t);
        }),
        (u.prototype.getImageData = function (t, e) {
          var n = new XMLHttpRequest();
          n.open("GET", t, !0),
            (n.responseType = "arraybuffer"),
            (n.onload = function () {
              if (200 == this.status) {
                var t = new Uint8Array(this.response);
                i = t.length;
                for (var n = new Array(i), o = 0; o < t.length; o++)
                  n[o] = String.fromCharCode(t[o]);
                var a = n.join(""),
                  r = window.btoa(a);
                e("data:image/png;base64," + r);
              }
            }),
            n.send();
        }),
        (u.prototype.getColorAsync = function (t, e, n) {
          var o = this;
          this.getImageData(t, function (t) {
            var a = document.createElement("img");
            a.addEventListener("load", function () {
              var t = o.getPalette(a, 5, n);
              e(t[0], this);
            }),
              (a.src = t);
          });
        });
      var d = u,
        f = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = new d(),
            o = e.colorsNum,
            a = e.commandId,
            i = e.labelColors,
            r = e.labelApply,
            c = e.paletteIcon,
            s = e.onAdd,
            l = t.$,
            u = t.Config.stylePrefix,
            f = t.DomComponents,
            p = f.getType("image").model;
          f.addType("image", {
            model: {
              initToolbar: function () {
                p.prototype.initToolbar.apply(this, arguments);
                var t = this.get("toolbar"),
                  e = t.some(function (t) {
                    return t.command === a;
                  });
                e ||
                  (t.unshift({ command: a, label: c }), this.set("toolbar", t));
              },
            },
          }),
            t.Commands.add(a, {
              run: function (t, n) {
                var o = this,
                  a =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  r = this.id;
                (this.editor = t), (this.target = a.target || t.getSelected());
                var c = this.getDominantColor(this.target.getEl());
                this.color = "rgb("
                  .concat(c[0], ",")
                  .concat(c[1], ",")
                  .concat(c[2], ")");
                var s = this.getPaletteArray(this.target.getEl());
                this.palette = this.generateColorsFromArray(s);
                var l = this.createContent(this.color, this.palette),
                  u = i,
                  d = l.children[1];
                t.Modal.open({ title: u, content: l })
                  .getModel()
                  .once("change:open", function () {
                    return t.stopCommand(r);
                  }),
                  (d.onclick = function () {
                    return o.addPalette();
                  }),
                  e.addPalette(d);
              },
              stop: function (t) {
                t.Modal.close();
              },
              createContent: function (t, e) {
                var n = l('<div style="position:relative;"></div>'),
                  o = '\n            <div class="'
                    .concat(
                      u,
                      'color-thief-output" style="display: block;">\n                <div class="'
                    )
                    .concat(
                      u,
                      'output-layout">\n                    <div class="'
                    )
                    .concat(u, "function ")
                    .concat(
                      u,
                      'get-color">\n                        <h3 class="'
                    )
                    .concat(
                      u,
                      'function-title">Dominant</h3>\n                        <div class="swatches">\n                            <div class="swatch" style="background-color: '
                    )
                    .concat(
                      t,
                      '"></div>\n                        </div>\n                    </div>\n                    <div class="'
                    )
                    .concat(u, "function ")
                    .concat(
                      u,
                      'get-palette">\n                        <h3 class="'
                    )
                    .concat(
                      u,
                      'function-title">Palette</h3>\n                        <div class="'
                    )
                    .concat(
                      u,
                      'function-output">\n                            <div class="swatches">\n                                '
                    )
                    .concat(
                      e
                        .map(function (t) {
                          return '<div class="swatch" style="background-color: '.concat(
                            t,
                            '"></div>'
                          );
                        })
                        .join(""),
                      "\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>"
                    );
                return (
                  n.html(
                    "\n                <div>"
                      .concat(o, '</div>\n                <button class="')
                      .concat(
                        u,
                        'palette__apply-btn" style="\n                position: absolute;\n                top: 0; right: 0;\n                margin: 10px;\n                background-color: #fff;\n                font-size: 1rem;\n                border-radius: 3px;\n                border: none;\n                padding: 10px 20px;\n                cursor: pointer\n                ">\n                '
                      )
                      .concat(r, "\n                </botton>\n            ")
                  ),
                  n.get(0)
                );
              },
              addPalette: function () {
                var t = this,
                  n = this.target,
                  o = this.editor,
                  i = o.StyleManager;
                !o.Config.colorPicker &&
                  (o.Config.colorPicker = { palette: [] });
                var r = o.Config.colorPicker.palette;
                s
                  ? s(n)
                  : (!r || r.push(this.palette),
                    e.refreshPalette.forEach(function (e) {
                      return t.refreshPickerPalette(i, e);
                    }),
                    o.stopCommand(a));
              },
              refreshPickerPalette: function (t, e) {
                var n = t
                  .getProperties(e.sector)
                  .models.indexOf(t.getProperty(e.sector, e.property));
                t.removeProperty(e.sector, e.property),
                  t.addProperty(e.sector, e, { at: n });
              },
              getDominantColor: function (t) {
                try {
                  return n.getColor(t);
                } catch (t) {
                  return [255, 255, 255];
                }
              },
              getPaletteArray: function (t) {
                try {
                  return n.getPalette(t, o);
                } catch (t) {
                  return [
                    [0, 0, 0],
                    [255, 255, 255],
                  ];
                }
              },
              generateColorsFromArray: function (t) {
                var e = [];
                return (
                  (t = t || [
                    [0, 0, 0],
                    [255, 255, 255],
                  ]).forEach(function (t) {
                    return e.push(
                      "rgb("
                        .concat(t[0], ",")
                        .concat(t[1], ",")
                        .concat(t[2], ")")
                    );
                  }),
                  e
                );
              },
            });
        },
        p = n(2),
        h = n.n(p);
      function g(t, e) {
        var n;
        if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return m(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return m(t, e);
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var o = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return o >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[o++] };
              },
              e: function (t) {
                throw t;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          r = !0,
          c = !1;
        return {
          s: function () {
            n = t[Symbol.iterator]();
          },
          n: function () {
            var t = n.next();
            return (r = t.done), t;
          },
          e: function (t) {
            (c = !0), (i = t);
          },
          f: function () {
            try {
              r || null == n.return || n.return();
            } finally {
              if (c) throw i;
            }
          },
        };
      }
      function m(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      var v = function () {
          var t,
            e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [{ unit: "1fr" }],
            n = e.map(function (t) {
              return t.unit;
            }),
            o = [[n.shift()]],
            a = g(n);
          try {
            for (a.s(); !(t = a.n()).done; ) {
              var i = t.value,
                r = o[o.length - 1];
              -1 !== r.indexOf(i) ? r.push(i) : o.push([i]);
            }
          } catch (t) {
            a.e(t);
          } finally {
            a.f();
          }
          return o;
        },
        y = function (t, e, n) {
          var o =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
          return n
            ? "repeat(auto-fill, minmax(".concat(e, "px, 1fr))")
            : t
                .map(function (t) {
                  return t.length === o
                    ? t.join(" ")
                    : "repeat(".concat(t.length, ", ").concat(t[0], ")");
                })
                .join(" ");
        },
        b = function (t) {
          return {
            state: {
              auto: !1,
              min: 200,
              columns: 5,
              rows: 5,
              columngap: 0,
              rowgap: 0,
              colArr: [],
              rowArr: [],
              childarea: [],
            },
            getters: {
              colTemplate: function (t) {
                var e = v(t.colArr);
                return y(e, t.min, t.auto);
              },
              rowTemplate: function (t) {
                var e = v(t.rowArr);
                return y(e, t.min, !1);
              },
              divNum: function (t) {
                return Math.max(t.columns, 0) * Math.max(t.rows, 0);
              },
            },
            mutations: {
              initialArrIndex: function (t, e) {
                if ("" !== e) {
                  var n = new URLSearchParams(e);
                  for (var o in t) {
                    var a = n.has(o),
                      i = h()(t[o]);
                    a && "number" === i
                      ? (t[o] = n.get(o))
                      : a && "object" === i && (t[o] = JSON.parse(n.get(o)));
                  }
                } else w(t.columns, t.colArr), w(t.rows, t.rowArr);
              },
              adjustArr: function (t, e) {
                var n = Math.max(Number(e.newVal), 0),
                  o = Math.max(Number(e.oldVal), 0);
                if (n < o)
                  for (var a = o - n, i = 1; i <= a; i++) t[e.direction].pop();
                else
                  for (var r = n - o, c = 1; c <= r; c++)
                    t[e.direction].push({ unit: "1fr" });
              },
              addChildren: function (t, e) {
                t.childarea.push(e);
              },
              removeChildren: function (t, e) {
                t.childarea.splice(e, 1);
              },
              updateAuto: function (t, e) {
                t.auto = e;
              },
              updateMin: function (t, e) {
                t.min = e;
              },
              updateColumns: function (t, e) {
                t.columns = e;
              },
              updateRows: function (t, e) {
                t.rows = e;
              },
              updateColumnGap: function (t, e) {
                t.columngap = e;
              },
              updateRowGap: function (t, e) {
                t.rowgap = e;
              },
              resetGrid: function (t, e) {
                t.childarea = [];
              },
            },
          };
        },
        w = function (t, e) {
          for (var n = 1; n <= t; n++) e.push({ unit: "1fr" });
        },
        x = function (t) {
          var e,
            n,
            o =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            a = t.$,
            i = t.Devices,
            r = a(
              '<div class="iframe-handle-container hidden">\n        <div class="handle right-handle">\n            <div class="gutter-handle"></div>\n            <div class="tab-handle"></div>\n            <div class="dim-indicator"></div>\n        </div>\n        <div class="handle left-handle"></div>\n    </div>'
            );
          t.Commands.add("smoothresize", function () {}),
            t.on("change:device", function () {
              e || (e = a(".i_designer-frame-wrapper")),
                e.css({
                  width: "",
                  transition: "width 0.35s ease,height 0.35s ease",
                }),
                r.find(".dim-indicator").css("display", "none"),
                r.css("display", "none"),
                setTimeout(function () {
                  var n = i.get(t.getDevice());
                  c(n),
                    s(n),
                    l(),
                    r.css("display", "block"),
                    e.css("transition", "none");
                }, 800);
            }),
            t.on("run:preview", function () {
              return r.css("display", "none");
            }),
            t.on("stop:preview", function () {
              return r.css("display", "block");
            }),
            t.Canvas.model.on("change:zoom", function () {
              o.hideOnZoom &&
                (100 === t.Canvas.getZoom()
                  ? r.css("display", "block")
                  : r.css("display", "none"));
            });
          var c = function (t) {
              var n = r;
              if (n.length > 0) n.addClass("hidden");
              else {
                e || (e = a(".i_designer-frame-wrapper"));
                var o = r.clone(!0, !0);
                e.before(o);
              }
              setTimeout(function () {
                a(window).trigger("resize");
              }, 600);
            },
            s = function (i) {
              try {
                var c = parseInt(i.get("widthMedia"), 10),
                  s = 0,
                  l = 0;
                C(r.find(".right-handle").get(0), {
                  axis: "x",
                  max: c,
                  min: o.minScreenSize,
                  start: function () {
                    s = t.Canvas.getFrameEl().offsetWidth;
                  },
                  drag: function (i) {
                    try {
                      n || (n = a(".i_designer-cv-canvas")),
                        0 === n.find(".handle-mask").length &&
                          n.append(
                            '<div class="handle-mask" style="position: absolute; z-index: 2; left: 0; top: 0; right: 0; bottom: 0;"></div>'
                          );
                      var u = i - t.Canvas.getOffset().left - s,
                        d = s + u * o.dragDampen,
                        f = t.Canvas.getOffset().left,
                        p = !0;
                      if (d > c || d < o.minScreenSize) (i = l), (p = !1);
                      else {
                        (l = i),
                          e || (e = a(".i_designer-frame-wrapper")),
                          e.css("width", d),
                          r.find(".left-handle").css("left", f);
                        var h = f - 162;
                        r.find(".device-resolution").css("left", h),
                          r
                            .find(".dim-indicator")
                            .html("Screen size  " + Math.round(d) + "px"),
                          r.find(".dim-indicator").css("display", "block");
                      }
                      return t.refresh(), p;
                    } catch (t) {
                      return console.error(t), !1;
                    }
                  },
                  stop: function () {
                    try {
                      a(".handle-mask").remove(), t.runCommand("smoothresize");
                    } catch (t) {
                      console.error(t);
                    }
                  },
                });
              } catch (t) {
                console.error(t);
              }
            };
          t.on("load", function () {
            a(".i_designer-cv-canvas").append(r), l();
          });
          var l = function () {
            var e = document,
              n = window,
              o =
                e.compatMode && "CSS1Compat" === e.compatMode
                  ? e.documentElement
                  : e.body,
              a = o.clientWidth,
              i = o.clientHeight;
            n.innerWidth &&
              a > n.innerWidth &&
              ((a = n.innerWidth), (i = n.innerHeight));
            var c = r;
            if (c.length > 0) {
              var s = c.find(".left-handle"),
                l = c.find(".right-handle"),
                u = t.Canvas.getOffset().left,
                d =
                  t.Canvas.getOffset().left + t.Canvas.getFrameEl().offsetWidth;
              s.css("cssText", "left: " + u + "px !important"),
                l.css("cssText", "left: " + d + "px !important"),
                c.removeClass("hidden");
            }
            return { width: a, height: i };
          };
        },
        C = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = 0,
            o = 0,
            a = 0,
            i = 0,
            r = 5,
            c = 0,
            s = 0;
          t.addEventListener("mousedown", function (t) {
            (t = t || window.event).preventDefault(),
              (a = t.clientX),
              (i = t.clientY),
              (document.onmouseup = u),
              (document.onmousemove = l),
              e.start();
          });
          var l = function (l) {
              (l = l || window.event).preventDefault(),
                (n = a - l.clientX),
                (o = i - l.clientY),
                (a = l.clientX),
                (i = l.clientY),
                ("x" !== e.axis && "xy" !== e.axis) ||
                  ((t.style.left = t.offsetLeft - n + "px"),
                  e.drag(t.offsetLeft) ||
                    (c
                      ? ((t.style.left =
                          t.offsetLeft + n + Math.sign(n) * r + "px"),
                        (c = 0))
                      : ((t.style.left = t.offsetLeft + n + "px"), c++))),
                ("y" !== e.axis && "xy" !== e.axis) ||
                  ((t.style.top = t.offsetTop - o + "px"),
                  e.drag(t.offsetTop) ||
                    (s
                      ? ((t.style.top =
                          t.offsetTop + o + Math.sign(o) * r + "px"),
                        (s = 0))
                      : ((t.style.top = t.offsetTop + o + "px"), s++)));
            },
            u = function () {
              (document.onmouseup = null),
                (document.onmousemove = null),
                e.stop();
            };
        };
      function j(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function O(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? j(Object(n), !0).forEach(function (e) {
                a()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : j(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var P = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.DomComponents,
          o = t.Config.stylePrefix,
          a = e.gridComponent,
          i = e.cellComponent,
          r = e.gridClass,
          c = e.gridCellClass,
          s = e.cellItemClass,
          l = { name: "id", label: "Id" },
          u = { name: "title", label: "Title" },
          d = [".".concat(r), ".".concat(s), ".".concat(c)];
        t.on("selector:add", function (t) {
          return d.indexOf(t.getFullName()) >= 0 && t.set("private", 1);
        });
        var f = function (e) {
            if (!e.getSelected().get("auto")) {
              var n,
                a = e.Grid.selected.get("store");
              (null === (n = t.Grid.container) || void 0 === n
                ? void 0
                : n.length) || t.Grid.render("#".concat(o, "tools"), a),
                (e.Grid.visible = !e.Grid.visible),
                e.Grid.update(a);
            }
          },
          p = {
            name: "addCell",
            type: "button",
            full: !0,
            text: "Add Cell",
            command: function (t) {
              var e = t.getSelected();
              e &&
                e.components().add(
                  "<div data-"
                    .concat(o, 'name="cell-item" class="')
                    .concat(s, '" \n        data-')
                    .concat(o, "resizable='")
                    .concat(
                      JSON.stringify({
                        tl: 0,
                        tc: 0,
                        tr: 0,
                        cl: 0,
                        cr: 1,
                        bl: 0,
                        br: 0,
                        bc: 0,
                        keyWidth: "flex-basis",
                        minDim: 1,
                        step: 0.2,
                        currentUnit: 1,
                      }),
                      "'></div>"
                    )
                );
              var n = t.Css;
              n.getRule(".".concat(s)) ||
                n.setRule(".".concat(s), {
                  "min-height": "75px",
                  "flex-grow": 1,
                  "flex-basis": "100%",
                });
            },
          },
          h = {
            name: "auto",
            label: "Auto Fill",
            type: "checkbox",
            changeProp: 1,
          },
          g = {
            name: "columns",
            label: "Columns",
            type: "number",
            changeProp: 1,
            placeholder: "6",
            min: 1,
          },
          m = {
            name: "rows",
            label: "Rows",
            type: "number",
            changeProp: 1,
            placeholder: "6",
            min: 1,
          },
          v = {
            name: "columngap",
            label: "Column Gap(px)",
            type: "number",
            changeProp: 1,
            placeholder: "0",
            min: 0,
          },
          y = {
            name: "rowgap",
            label: "Row Gap(px)",
            type: "number",
            changeProp: 1,
            placeholder: "0",
            min: 0,
          },
          w = {
            name: "min",
            label: "Min(px)",
            type: "number",
            changeProp: 1,
            placeholder: "0",
            min: 1,
          },
          x = {
            name: "toggle",
            label: "Guides",
            type: "button",
            full: !0,
            text: "Toggle",
            command: function (t) {
              return f(t);
            },
          },
          C = {
            name: "clear",
            label: "Cells",
            type: "button",
            full: !0,
            text: "Clear",
            command: function (t) {
              return t.getSelected().components.reset();
            },
          },
          j = {
            name: "reset",
            label: "Guides",
            type: "button",
            full: !0,
            text: "Reset",
            command: function (t) {
              var e = t.Grid.selected.get("store");
              e.mutations.resetGrid(e.state), t.Grid.updateChildren(e);
            },
          },
          P = {
            name: "update",
            label: "Cells",
            type: "button",
            full: !0,
            text: "Update",
            command: function (t) {
              var e = t.getSelected(),
                n = e.get("store"),
                a = n.state,
                i = n.getters,
                r = a.auto
                  ? Array(a.rows * a.columns)
                      .fill()
                      .map(function (t) {
                        return "<div data-"
                          .concat(o, 'type="')
                          .concat("grid-cell", '"></div>');
                      })
                      .join("")
                  : a.childarea
                      .map(function (t, n) {
                        return "<div data-"
                          .concat(o, 'type="')
                          .concat("grid-cell", '" class="')
                          .concat(e.getId() + "-div" + n, '"></div>');
                      })
                      .join(""),
                c = a.childarea
                  .map(function (t, n) {
                    return "."
                      .concat(e.getId() + "-div" + n, "{grid-area:")
                      .concat(t, "}");
                  })
                  .join("");
              !e.components().length > 0 && e.components().reset(r),
                t.addStyle(k(c)),
                (t.Grid.visible = !1) ||
                  (t.Grid.getEl().style.display = "none"),
                e.addStyle({ "grid-template-columns": i.colTemplate(a) });
            },
          },
          k = function (e) {
            var n = t.getDevice(),
              o = t.Devices.get(n);
            return o.get("widthMedia")
              ? "@media ("
                  .concat(t.Config.mediaCondition, ": ")
                  .concat(o.get("widthMedia"), "){\n        ")
                  .concat(e, "\n      }")
              : e;
          },
          S = function (t) {
            return t && Object.keys(t).length ? { state: t } : void 0;
          };
        n.addType("grid-cell", {
          model: O(
            {
              defaults: {
                icon: '<i class="fa fa-square-o"></i>',
                traits: [l, u, p],
              },
              init: function () {
                var e = t.Css;
                this.get("classes").pluck("name").indexOf(c) < 0 &&
                  this.addClass(c),
                  e.getRule(".".concat(c)) ||
                    e.setRule(".".concat(c), {
                      display: "flex",
                      "justify-content": "flex-start",
                      "align-items": "stretch",
                      padding: "5px",
                    });
              },
            },
            i
          ),
        });
        var A = [
          {
            attributes: { class: "fa fa-table" },
            command: function (t) {
              return f(t);
            },
          },
          {
            attributes: { class: "fa fa-arrow-up" },
            command: function (t) {
              return t.runCommand("core:component-exit", { force: 1 });
            },
          },
          {
            attributes: {
              class: "fa fa-arrows i_designer-no-touch-actions",
              draggable: !0,
            },
            command: "tlb-move",
          },
          { attributes: { class: "fa fa-clone" }, command: "tlb-clone" },
          { attributes: { class: "fa fa-trash-o" }, command: "tlb-delete" },
        ];
        n.addType("css-grid", {
          model: O(
            {
              defaults: {
                icon: '<i class="fa fa-table"></i>',
                toolbar: A,
                traits: [l, u, h, w, g, m, v, y, x, j, C, P],
                resizable: {
                  tl: 0,
                  tc: 0,
                  tr: 0,
                  cl: 0,
                  cr: 0,
                  bl: 0,
                  br: 0,
                  minDim: 5,
                },
                min: 200,
                auto: !1,
              },
              init: function () {
                var n,
                  o = t.Css,
                  a =
                    null === (n = this.get("store")) || void 0 === n
                      ? void 0
                      : n.state,
                  i = O(O({}, b(e)), S(a || {}));
                !a && i.mutations.initialArrIndex(i.state, ""),
                  this.set("rows", i.state.rows),
                  this.set("columns", i.state.columns),
                  this.set("rowgap", i.state.rowgap),
                  this.set("columngap", i.state.columngap),
                  this.set("store", i),
                  this.addStyle({
                    "grid-template-rows": i.getters.rowTemplate(i.state),
                    "grid-template-columns": i.getters.colTemplate(i.state),
                  }),
                  this.get("classes").pluck("name").indexOf(r) < 0 &&
                    this.addClass(r),
                  o.getRule(".".concat(r)) ||
                    o.setRule(".".concat(r), {
                      display: "grid",
                      padding: "10px",
                      height: "95%",
                      width: "100%",
                    }),
                  this.on("change:auto", this.updateAuto),
                  this.on("change:rows", this.updateRows),
                  this.on("change:columns", this.updateColumns),
                  this.on("change:rowgap", this.updateRowgap),
                  this.on("change:columngap", this.updateColumngap),
                  this.on("change:min", this.updateMin),
                  this.on("change:status", this.onStatusChange);
              },
              updateRows: function () {
                var e = parseInt(this.get("rows")),
                  n = this.get("store"),
                  o = { newVal: e, oldVal: n.state.rows, direction: "rowArr" };
                n.mutations.updateRows(n.state, e),
                  n.mutations.adjustArr(n.state, o),
                  t.Grid.update(n),
                  this.addStyle({
                    "grid-template-rows": n.getters.rowTemplate(n.state),
                  });
              },
              updateColumns: function () {
                var e = parseInt(this.get("columns")),
                  n = this.get("store"),
                  o = {
                    newVal: e,
                    oldVal: n.state.columns,
                    direction: "colArr",
                  };
                n.mutations.updateColumns(n.state, e),
                  n.mutations.adjustArr(n.state, o),
                  t.Grid.update(n),
                  this.addStyle({
                    "grid-template-columns": n.getters.colTemplate(n.state),
                  });
              },
              updateRowgap: function () {
                var e = this.get("rowgap"),
                  n = this.get("store");
                n.mutations.updateRowGap(n.state, parseInt(e)),
                  t.Grid.updateChildren(n),
                  this.addStyle({ "grid-row-gap": "".concat(e, "px") });
              },
              updateColumngap: function () {
                var e = this.get("columngap"),
                  n = this.get("store");
                n.mutations.updateColumnGap(n.state, parseInt(e)),
                  t.Grid.updateChildren(n),
                  this.addStyle({ "grid-column-gap": "".concat(e, "px") });
              },
              updateMin: function () {
                var t = parseInt(this.get("min")),
                  e = this.get("store");
                e.mutations.updateMin(e.state, t);
              },
              updateAuto: function () {
                var e = !!this.get("auto"),
                  n = this.get("store");
                n.mutations.updateAuto(n.state, e),
                  e &&
                    ((t.Grid.visible = !1) ||
                      (t.Grid.getEl().style.display = "none"));
              },
              onStatusChange: function () {
                var e,
                  n = this.get("status");
                (null === (e = t.Grid.container) || void 0 === e
                  ? void 0
                  : e.length) ||
                  t.Grid.render("#".concat(o, "tools"), this.get("store")),
                  "selected" === n
                    ? t.Grid.select(t.getSelected())
                    : (t.Grid.visible = !1) ||
                      (t.Grid.getEl().style.display = "none");
              },
            },
            a
          ),
        });
      };
      function k(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function S(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? k(Object(n), !0).forEach(function (e) {
                a()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : k(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var A = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = t.BlockManager,
            o = e.labelGrid,
            a = e.categoryGrid,
            i = e.gridBlock;
          i &&
            n.add(
              "css-grid",
              S(
                {
                  label: o,
                  media:
                    '<svg viewBox="0 0 24 24"><rect fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" x="3" y="3" width="7" height="7"/><rect fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" x="14" y="3" width="7" height="7"/><rect fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" x="14" y="14" width="7" height="7"/><rect fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" x="3" y="14" width="7" height="7"/></svg>',
                  category: a,
                  content: { type: "css-grid" },
                },
                i
              )
            );
        },
        T = function (t, e) {
          var n = t.Commands,
            o = t.Panels,
            a = t.UndoManager,
            i = t.Config.stylePrefix;
          n.add("save-page", function (e) {
            t.store(function (t) {
              return console.log("Saved...");
            });
          }),
            o
              .getPanel("options")
              .get("buttons")
              .add([
                {
                  id: "undo",
                  className: "fa fa-undo",
                  attributes: { title: "undo" },
                  command: function (t) {
                    return t.runCommand("core:undo");
                  },
                },
                {
                  id: "redo",
                  className: "fa fa-repeat",
                  attributes: { title: "redo" },
                  command: function (t) {
                    return t.runCommand("core:redo");
                  },
                },
                {
                  id: "save-page",
                  className: "fa fa-floppy-o",
                  attributes: { title: "save" },
                  command: function (t) {
                    return t.runCommand("save-page");
                  },
                },
              ]);
          var r = o.getButton("options", "undo"),
            c = o.getButton("options", "redo"),
            s = o.getButton("options", "save-page");
          t.on("component:update", function () {
            a.hasUndo()
              ? r.set("className", "".concat(i, "font-aqua fa fa-undo"))
              : r.set("className", "fa fa-undo"),
              a.hasRedo()
                ? c.set("className", "".concat(i, "font-aqua fa fa-repeat"))
                : c.set("className", "fa fa-repeat"),
              t.getDirtyCount() > 0
                ? s.set("className", "".concat(i, "font-green fa fa-floppy-o"))
                : s.set("className", "fa fa-floppy-o");
          });
        },
        M = n(1),
        G = n.n(M),
        E = function (t) {
          var e = t.$,
            n = t.Config.stylePrefix;
          return {
            gridEl: function (t) {
              var o = this.dimensions(),
                a = o.width,
                i = o.height,
                r = o.top,
                c = e(
                  '<div id="'
                    .concat(n, 'grid-main" style="display:')
                    .concat(this.visible ? "block" : "none", ";width:")
                    .concat(a - 6, "px;height:")
                    .concat(i - 6, 'px">\n                <div id="')
                    .concat(
                      n,
                      'gridcontainer">\n                </div>\n            </div>'
                    )
                ),
                s = c.find("#".concat(n, "gridcontainer"));
              return (
                c.prepend(this.gridColUnits(t, a, i, r)),
                c.prepend(this.gridRowUnits(t)),
                s.append(this.gridCanvas(t)),
                s.append(this.gridCanvasChildren(t)),
                c
              );
            },
            gridColUnits: function (t, o, a, i) {
              var r = this,
                c = e(
                  '<section\n                style="width:'
                    .concat(o - 6, "px;top:")
                    .concat(i < 40 ? a : -40, "px;grid-template-columns:")
                    .concat(
                      t.getters.colTemplate(t.state),
                      ";grid-template-rows:50px;\n                grid-column-gap:"
                    )
                    .concat(t.state.columngap + "px", ";grid-row-gap:")
                    .concat(t.state.rowgap + "px", '"\n                class="')
                    .concat(
                      n,
                      'colunits"\n                >\n                    '
                    )
                    .concat(
                      t.state.colArr
                        .map(function (e, n) {
                          return '<div data-key="'
                            .concat(
                              n,
                              '">\n                        <input\n                        value="'
                            )
                            .concat(
                              e.unit,
                              '"\n                        data-key="'
                            )
                            .concat(
                              n,
                              '"\n                        data-direction="col"\n                        class="'
                            )
                            .concat(
                              t.state.columns > 8 ? r.widthfull : r.widthhalf,
                              '"\n                        aria-label="Grid Template Column Measurements"\n                        >\n                    </div>'
                            );
                        })
                        .join(""),
                      "\n                </section>"
                    )
                );
              return (
                c.find("input").on("change", function (t) {
                  return r.validateunit(t);
                }),
                c
              );
            },
            gridRowUnits: function (t) {
              var o = this,
                a = e(
                  '<section\n                style="grid-template-columns:50px;grid-template-rows:'
                    .concat(
                      t.getters.rowTemplate(t.state),
                      ";\n                    grid-column-gap:"
                    )
                    .concat(t.state.columngap + "px", ";grid-row-gap:")
                    .concat(t.state.rowgap + "px", '"\n                class="')
                    .concat(
                      n,
                      'rowunits"\n                >\n                    '
                    )
                    .concat(
                      t.state.rowArr
                        .map(function (t, e) {
                          return '<div data-key="'
                            .concat(
                              e,
                              '">\n                        <input\n                        value="'
                            )
                            .concat(
                              t.unit,
                              '"\n                        data-key="'
                            )
                            .concat(
                              e,
                              '"\n                        data-direction="row"\n                        class="'
                            )
                            .concat(
                              o.widthfull,
                              '"\n                        aria-label="Grid Template Row Measurements"\n                        >\n                    </div>'
                            );
                        })
                        .join(""),
                      "\n                </section>"
                    )
                );
              return (
                a.find("input").on("change", function (t) {
                  return o.validateunit(t);
                }),
                a
              );
            },
            gridCanvas: function (t) {
              var o = this,
                a = e(
                  '<section\n                class="'
                    .concat(n, "grid ")
                    .concat(
                      n,
                      'gridcanvas"\n                style="grid-template-columns:'
                    )
                    .concat(
                      t.getters.colTemplate(t.state),
                      ";grid-template-rows:"
                    )
                    .concat(
                      t.getters.rowTemplate(t.state),
                      ";\n                    grid-column-gap:"
                    )
                    .concat(t.state.columngap + "px", ";grid-row-gap:")
                    .concat(
                      t.state.rowgap + "px",
                      '"\n                >\n                '
                    )
                    .concat(
                      Array(t.getters.divNum(t.state))
                        .fill()
                        .map(function (t, e) {
                          return '<div\n                    data-key="'
                            .concat(e, '"\n                    class="box')
                            .concat(
                              e,
                              '"\n                    >\n                </div>'
                            );
                        })
                        .join(""),
                      "\n            </section>"
                    )
                );
              a.on("ontouchstart", function (t) {
                t.preventDefault(), o.delegatedTouchPlaceChild(t);
              }),
                a.on("ontouchend", function (t) {
                  t.preventDefault(), o.delegatedTouchPlaceChild(t);
                });
              var i = a.find("div");
              return (
                i.on("mousedown", function (t) {
                  return o.placeChild(t, "s");
                }),
                i.on("mouseup", function (t) {
                  return o.placeChild(t, "e");
                }),
                a
              );
            },
            gridCanvasChildren: function (t) {
              var o = this,
                a = e(
                  '<section\n                class="'
                    .concat(n, "grid ")
                    .concat(
                      n,
                      'gridchild"\n                style="grid-template-columns:'
                    )
                    .concat(
                      t.getters.colTemplate(t.state),
                      ";grid-template-rows:"
                    )
                    .concat(
                      t.getters.rowTemplate(t.state),
                      "; \n                    grid-column-gap:"
                    )
                    .concat(t.state.columngap + "px", ";grid-row-gap:")
                    .concat(
                      t.state.rowgap + "px",
                      '"\n                >\n                '
                    )
                    .concat(
                      t.state.childarea
                        .map(function (t, e) {
                          return '<div\n                    class="child'
                            .concat(
                              e,
                              '"\n                    style="grid-area: '
                            )
                            .concat(
                              t,
                              '"\n                    >\n                    <button data-key="'
                            )
                            .concat(
                              e,
                              '">&times;</button>\n                </div>'
                            );
                        })
                        .join(""),
                      "\n            </section>"
                    )
                );
              return (
                a.find("button").on("click", function (t) {
                  return o.removeChild(t);
                }),
                a
              );
            },
            render: function (n, o) {
              var a;
              (null === (a = this.container) || void 0 === a
                ? void 0
                : a.length) ||
                ((this.el = this.gridEl(o)),
                (this.container = e(n)),
                this.container.append(this.el),
                t.on(
                  "styleManager:change:height run:smoothresize run:resize",
                  function () {
                    var e,
                      n =
                        null === (e = t.getSelected()) || void 0 === e
                          ? void 0
                          : e.get("store");
                    n && t.Grid.visible && t.Grid.update(n);
                  }
                )),
                (this.rendered = !0);
            },
            getEl: function () {
              return this.el.get(0);
            },
            select: function (t) {
              this.selected = t;
            },
            update: function (t) {
              (this.el = this.gridEl(t)),
                e("#".concat(n, "grid-main")).replaceWith(this.el);
            },
            updateRows: function (t) {
              e(".".concat(n, "rowunits")).replaceWith(this.gridRowUnits(t));
            },
            updateCols: function (t) {
              var o = this.dimensions(),
                a = o.width,
                i = o.height,
                r = o.top;
              e(".".concat(n, "colunits")).replaceWith(
                this.gridRowUnits(t, a, i, r)
              );
            },
            updateCanvas: function (t) {
              e(".".concat(n, "gridcanvas")).replaceWith(this.gridCanvas(t));
            },
            updateChildren: function (t) {
              e(".".concat(n, "gridchild")).replaceWith(
                this.gridCanvasChildren(t)
              );
            },
            child: {},
            widthfull: "".concat(n, "widthfull"),
            widthhalf: "".concat(n, "widthhalf"),
            errors: { col: [], row: [] },
            visible: !1,
            rendered: !1,
            dimensions: function () {
              return (
                (this.selected &&
                  t.Canvas.getElementPos(this.selected.getEl())) || {
                  width: 100,
                  height: 100,
                }
              );
            },
            validateunit: function (t) {
              var e = t.target.value,
                n = t.target.getAttribute("data-key"),
                o = t.target.getAttribute("data-direction");
              if (
                /fr$/.test(e) ||
                /px$/.test(e) ||
                /%$/.test(e) ||
                /em$/.test(e) ||
                /rem$/.test(e) ||
                /vw$/.test(e) ||
                /vh$/.test(e) ||
                /vmin$/.test(e) ||
                /q$/.test(e) ||
                /mm$/.test(e) ||
                /cm$/.test(e) ||
                /in$/.test(e) ||
                /pt$/.test(e) ||
                /pc$/.test(e) ||
                /ex$/.test(e) ||
                /ch$/.test(e) ||
                /minmax/.test(e) ||
                ["auto", "min-content", "max-content"].includes(e) ||
                0 === parseInt(e, 10)
              ) {
                var a = this.selected.get("store");
                this.errors[o].splice(this.errors[o].indexOf(n), 1),
                  "col" === o
                    ? ((a.state.colArr[n].unit = e),
                      this.selected.addStyle({
                        "grid-template-columns": a.getters.colTemplate(a.state),
                      }))
                    : ((a.state.rowArr[n].unit = e),
                      this.selected.addStyle({
                        "grid-template-rows": a.getters.rowTemplate(a.state),
                      })),
                  this.update(a);
              } else this.errors[o].push(n);
            },
            delegatedTouchPlaceChild: function (t) {
              var e = document.elementFromPoint(
                  t.changedTouches[0].clientX,
                  t.changedTouches[0].clientY
                ),
                n = "touchstart" === t.type ? "s" : "e";
              this.placeChild(e.dataset.id, n);
            },
            placeChild: function (t, e) {
              var n = this.selected.get("store"),
                o = parseInt(t.target.getAttribute("data-key")) + 1;
              if (
                ((this.child["".concat(e, "row")] = Math.ceil(
                  o / n.state.columns
                )),
                (this.child["".concat(e, "col")] =
                  o - (this.child["".concat(e, "row")] - 1) * n.state.columns),
                "e" === e)
              ) {
                var a =
                    this.child.srow <= this.child.erow
                      ? [this.child.srow, this.child.erow]
                      : [this.child.erow, this.child.srow],
                  i = G()(a, 2),
                  r = i[0],
                  c = i[1],
                  s =
                    this.child.scol <= this.child.ecol
                      ? [this.child.scol, this.child.ecol]
                      : [this.child.ecol, this.child.scol],
                  l = G()(s, 2),
                  u = l[0],
                  d = l[1],
                  f = ""
                    .concat(r, " / ")
                    .concat(u, " / ")
                    .concat(c + 1, " / ")
                    .concat(d + 1);
                n.mutations.addChildren(n.state, f);
              }
              this.updateChildren(n);
            },
            removeChild: function (t) {
              var e = this.selected.get("store"),
                n = t.target.getAttribute("data-key");
              e.mutations.removeChildren(e.state, n), this.updateChildren(e);
            },
          };
        };
      function I(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function D(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? I(Object(n), !0).forEach(function (e) {
                a()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : I(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      e.default = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = D(
            D(
              {},
              {
                panels: 0,
                resizer: 1,
                breadcrumbs: 0,
                labelGrid: "Grid",
                categoryGrid: "Basic",
                gridBlock: {},
                gridComponent: {},
                cellComponent: {},
                gridClass: "grid",
                gridCellClass: "grid-cell",
                cellItemClass: "cell-item",
                commandId: "add-palette",
                labelColors: "Image palette",
                labelApply: "Add",
                paletteIcon: '<i class="fa fa-paint-brush"></i>',
                onAdd: 0,
                addPalette: function () {},
                colorsNum: 9,
                refreshPalette: [
                  {
                    sector: "typography",
                    name: "Color",
                    property: "color",
                    type: "color",
                    defaults: "black",
                  },
                  {
                    sector: "decorations",
                    name: "Background color",
                    property: "background-color",
                    type: "color",
                  },
                ],
                minScreenSize: 250,
                dragDampen: 1,
                hideOnZoom: 1,
                traitsInSm: 1,
                wrapperIcon: 0,
                icons: [],
                defIcons: [
                  { type: "body", icon: '<i class="fa fa-cubes"></i>' },
                  { type: "wrapper", icon: '<i class="fa fa-cubes"></i>' },
                  { type: "custom-code", icon: '<i class="fa fa-code"></i>' },
                  { type: "script", icon: '<i class="fa fa-file-code-o"></i>' },
                  {
                    type: "comment",
                    icon: '<i class="fa fa-commenting-o"></i>',
                  },
                  { type: "text", icon: '<i class="fa fa-i-cursor"></i>' },
                  { type: "textnode", icon: '<i class="fa fa-i-cursor"></i>' },
                  { type: "header", icon: '<i class="fa fa-header"></i>' },
                  { type: "box", icon: '<i class="fa fa-square-o"></i>' },
                  {
                    type: "section",
                    icon: '<i class="fa fa-object-group"></i>',
                  },
                  { type: "link", icon: '<i class="fa fa-link"></i>' },
                  {
                    type: "footer",
                    icon: '<i class="fa fa-long-arrow-down"></i>',
                  },
                  { type: "input", icon: '<i class="fa fa-keyboard-o"></i>' },
                  { type: "button", icon: '<i class="fa fa-square"></i>' },
                  { type: "image", icon: '<i class="fa fa-file-image-o"></i>' },
                  { type: "video", icon: '<i class="fa fa-file-video-o"></i>' },
                  { type: "row", icon: '<i class="fa fa-ellipsis-h"></i>' },
                  { type: "cell", icon: '<i class="fa fa-ellipsis-v"></i>' },
                  { type: "table", icon: '<i class="fa fa-table"></i>' },
                  { type: "thead", icon: '<i class="fa fa-header"></i>' },
                  { type: "tbody", icon: '<i class="fa fa-book"></i>' },
                  { type: "tfoot", icon: '<i class="fa fa-anchor"></i>' },
                  { type: "column", icon: '<i class="fa fa-ellipsis-v"></i>' },
                  { type: "map", icon: '<i class="fa fa-map-o"></i>' },
                  { type: "label", icon: '<i class="fa fa-tag"></i>' },
                  {
                    type: "checkbox",
                    icon: '<i class="fa fa-check-square-o"></i>',
                  },
                  {
                    type: "textarea",
                    icon: '<i class="fa fa-align-left"></i>',
                  },
                  {
                    type: "select",
                    icon: '<i class="fa fa-caret-square-o-down"></i>',
                  },
                  { type: "radio", icon: '<i class="fa fa-dot-circle-o"></i>' },
                  {
                    type: "form",
                    icon: '<i class="fa fa-address-card-o"></i>',
                  },
                  { type: "svg", icon: '<i class="fa fa-diamond"></i>' },
                  { type: "svg-in", icon: '<i class="fa fa-diamond"></i>' },
                  { type: "nav", icon: '<i class="fa fa-location-arrow"></i>' },
                  { type: "navbar", icon: '<i class="fa fa-map-signs"></i>' },
                  {
                    type: "navbar-container",
                    icon: '<i class="fa fa-object-group"></i>',
                  },
                  { type: "navbar-menu", icon: '<i class="fa fa-bars"></i>' },
                  { type: "burger-menu", icon: '<i class="fa fa-bars"></i>' },
                  { type: "burger-line", icon: '<i class="fa fa-bars"></i>' },
                  { type: "span", icon: '<i class="fa fa-columns"></i>' },
                  { type: "countdown", icon: '<i class="fa fa-clock-o"></i>' },
                  { type: "twitch", icon: '<i class="fa fa-twitch"></i>' },
                  { type: "tooltip", icon: '<i class="fa fa-comment-o"></i>' },
                  { type: "tabs", icon: '<i class="fa fa-list-alt"></i>' },
                  {
                    type: "tab",
                    icon: '<i class="fa fa-long-arrow-right"></i>',
                  },
                  {
                    type: "tab-container",
                    icon: '<i class="fa fa-object-group"></i>',
                  },
                  {
                    type: "tab-content",
                    icon: '<i class="fa fa-align-center"></i>',
                  },
                  {
                    type: "lory-slider",
                    icon: '<i class="fa fa-sliders"></i>',
                  },
                  {
                    type: "lory-frame",
                    icon: '<i class="fa fa-window-maximize"></i>',
                  },
                  {
                    type: "lory-slides",
                    icon: '<i class="fa fa-file-powerpoint-o"></i>',
                  },
                  {
                    type: "lory-slide",
                    icon: '<i class="fa fa-play-circle-o"></i>',
                  },
                  {
                    type: "lory-prev",
                    icon: '<i class="fa fa-caret-square-o-left"></i>',
                  },
                  {
                    type: "lory-next",
                    icon: '<i class="fa fa-caret-square-o-right"></i>',
                  },
                  { type: "typed", icon: '<i class="fa fa-text-height"></i>' },
                  { type: "default", icon: '<i class="fa fa-cube"></i>' },
                ],
              }
            ),
            e
          );
        (t.Grid = E(t, n)),
          P(t, n),
          A(t, n),
          n.panels && T(t),
          n.breadcrumbs && r(t),
          f(t, n),
          n.resizer && x(t, n),
          t.on("load", function () {
            var e = t.$,
              o = t.Panels,
              a = t.Config.stylePrefix,
              i = t.Components;
            if (
              (n.defIcons.forEach(function (t) {
                try {
                  i.getType(t.type).model.prototype.defaults.icon = t.icon;
                } catch (t) {}
              }),
              n.icons.forEach(function (t) {
                try {
                  i.getType(t.type).model.prototype.defaults.icon = t.icon;
                } catch (t) {}
              }),
              n.traitsInSm)
            ) {
              var r = o.getButton("views", "open-tm");
              r && r.set("active", 1);
              var c = o.getButton("views", "open-sm");
              c && c.set("active", 1);
              var s = e(
                  '<div class="'
                    .concat(a, "sm-sector ")
                    .concat(
                      a,
                      'one-bg no-select" style="max-height: calc(100% - 125px);overflow: auto;"><div class="'
                    )
                    .concat(a, "sm-sector-title ")
                    .concat(
                      a,
                      'sm-title"><div class="icon-settings fa fa-cog"></div><div class="'
                    )
                    .concat(
                      a,
                      'sm-sector-label">Settings</div></div><div class="'
                    )
                    .concat(
                      a,
                      'sm-properties" style="display: none;"></div></div>'
                    )
                ),
                l = s.find(".".concat(a, "sm-properties"));
              l.append(e(".".concat(a, "trt-traits"))),
                e(".".concat(a, "sm-sectors")).before(s),
                s.find(".".concat(a, "sm-title")).on("click", function () {
                  var t = l.get(0).style,
                    e = "none" == t.display;
                  t.display = e ? "block" : "none";
                }),
                o.removeButton("views", "open-tm"),
                e(".".concat(a, "pn-views .").concat(a, "pn-btn")).css(
                  "width",
                  "".concat(100 / o.getPanel("views").buttons.length, "%")
                );
            }
            if (n.wrapperIcon) {
              var u = o.getButton("views", "open-layers");
              u && u.set("active", 1),
                (e(".".concat(a, "layer-name"))[0].innerHTML =
                  '<i class="fa fa-cubes"></i> Body'),
                openSm && openSm.set("active", 1);
            }
          });
      };
    },
  ]);
});
