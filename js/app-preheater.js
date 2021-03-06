!function e(t, n, r) {
    function i(a, s) {
        if (!n[a]) {
            if (!t[a]) {
                var u = "function" == typeof require && require;
                if (!s && u) return u(a, !0);
                if (o) return o(a, !0);
                var c = new Error("Cannot find module '" + a + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var l = n[a] = {exports: {}};
            t[a][0].call(l.exports, function (e) {
                var n = t[a][1][e];
                return i(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[a].exports
    }

    for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) i(r[a]);
    return i
}({
    1: [function (e, t, n) {
        (function (n) {
            "use strict";

            function r() {
                return 100 * Math.random()
            }

            var i = e("./util/logger"), o = e("./util/browser"), a = new i(n),
                s = window.MP_AB_TESTS = window.MP_AB_TESTS || {
                    initialized: !1, init: function (e, t) {
                        if (t = t || {}, !this.initialized) {
                            this.initialized = !0, o.valueFromHash("tilegen") && (t.tilegen = 1 === o.valueFromHash("tilegen", 0)), o.valueFromHash("imgopt") && (t.imgopt = 1 === o.valueFromHash("imgopt", 0));
                            for (var n in e) {
                                var i = n.match("^sc_tilegen_([0-9]+)$");
                                i && (s.tilegen = r() < parseInt(i[1]));
                                var u = n.match("^sc_imgopt_([0-9]+)$");
                                u && (s.imgopt = r() < parseInt(u[1]))
                            }
                            for (var c in t) s[c] = t[c], a.debug("A/B override:", c, s[c])
                        }
                    }, changeIfTileGenerating: function (e) {
                        return s.tilegen && (e += e.indexOf("?") === -1 ? "?" : "&", e += "imgopt=1"), e
                    }, changeIfImageOptimzing: function (e) {
                        return s.imgopt && e.indexOf("imgopt=1") === -1 && (e += e.indexOf("?") === -1 ? "?" : "&", e += "imgopt=1"), e
                    }, tilegen: !1, imgopt: !1
                };
            t.exports = s
        }).call(this, "/js/ab.js")
    }, {"./util/browser": 13, "./util/logger": 15}], 2: [function (e, t, n) {
        "use strict";
        t.exports = {
            signedUrlDefaultExpireTime: 24e4,
            signedUrlCheckInterval: 1e4,
            signedUrlRefreshBuffer: 15e3,
            dollhouseFOV: 70,
            dollhouseNear: 1,
            dollhouseFar: 5e3,
            insideFOV: 70,
            insideFOVMax: 120,
            insideNear: .1,
            insideFar: 5e3,
            insideLookSpeed: .12,
            insideLookLimitUp: 40,
            insideLookLimitDown: -40,
            orthoNear: 1,
            orthoFar: 5e3,
            orthoBase: 10,
            narrowLandscapeHeight: 290,
            reallyNarrowLandscapeHeight: 250,
            visionTilingStartDate: new Date("8/26/2016"),
            visionTilingStartVersion: "1.1.407.13667",
            windowHeightHighQualityThreshold: 900,
            tourStepDelayDefault: 3500,
            tourStepDelaySlideShow: 5e3,
            workshopApsect: 9 / 16,
            highQualityMaxZoom: 2,
            ultraHighQualityMaxZoom: 3
        }
    }, {}], 3: [function (e, t, n) {
        "use strict";
        t.exports = {
            GL_TEXTURE_CUBE_MAP_POSITIVE_X: 0,
            GL_TEXTURE_CUBE_MAP_NEGATIVE_X: 1,
            GL_TEXTURE_CUBE_MAP_POSITIVE_Y: 2,
            GL_TEXTURE_CUBE_MAP_NEGATIVE_Y: 3,
            GL_TEXTURE_CUBE_MAP_POSITIVE_Z: 4,
            GL_TEXTURE_CUBE_MAP_NEGATIVE_Z: 5
        }
    }, {}], 4: [function (e, t, n) {
        "use strict";

        function r(e) {
            this.message = e
        }

        t.exports = r
    }, {}], 5: [function (e, t, n) {
        "use strict";

        function r(e) {
            i.call(this, e)
        }

        var i = e("./BasicException");
        r.prototype = Object.create(i.prototype), t.exports = r
    }, {"./BasicException": 4}], 6: [function (e, t, n) {
        (function (n) {
            "use strict";

            function r(e) {
                var t = {};
                if (e) {
                    var n = e.flags;
                    if (n) for (var r in n) n.hasOwnProperty(r) && (t[n[r]] = !0);
                    return t
                }
                return u.debug("Feature flags -> parseFeatureFlags: rawData is null."), null
            }

            var i = e("./util/ajax"), o = e("./util/showcase"), a = e("./util/logger"), s = "/api/v1/user/",
                u = new a(n), c = {};
            t.exports = {
                loadFeatureFlags: function (e) {
                    var t = $.Deferred();
                    return i.get(e.urlBase + s, {
                        responseType: "json",
                        prefetchFrom: "user",
                        auth: o.getAuthorizationHeader()
                    }).done(function (e) {
                        c = r(e), c ? t.resolve(c) : t.reject("loading-failed")
                    }).fail(function () {
                        u.debug("Retrieval of feature flags failed."), t.reject("loading-failed")
                    }), t.promise()
                }, getFlags: function () {
                    return c
                }, updateDependentSettings: function (e, t) {
                    e = e || c, e.labels && (t.labels.enabled = !0), e.zooming && !t.zoom.forceOff && (t.zoom.enabled = !0), e.showcase_sdk && (t.sdkInit = !0), e.mobile_highq_override && (t.tiling.mobileHighQualityOverride = !0), e.showcase_webvr && (t.vr.allowWebVR = !0), e.uhql && (t.tiling.allowUltraHighResolution = !0), e.hide_sc_sharing && (t.share.enabled = !1)
                }
            }
        }).call(this, "/js/featureflags.js")
    }, {"./util/ajax": 12, "./util/logger": 15, "./util/showcase": 17}], 7: [function (e, t, n) {
        (function (t) {
            "use strict";

            function n() {
                if (window.location.hash) {
                    var e = window.location.href.replace(/#model/i, "?m");
                    return e = e.replace(/#m/i, "?m"), window.location.href = e, !0
                }
                return !1
            }

            function r(e) {
                this.sid = e.sid, this.urlConfig = e.urlConfig, this.urls = new o(this.urlConfig.urlFiles), this.urls.init()
            }

            function i(e) {
                var t = a.parseSidUrl(e);
                v.loadFeatureFlags(t).then(function () {
                    w.init(v.getFlags()), new r({sid: e, urlConfig: t}).init()
                })
            }

            var o = e("./util/ModelUrls"), a = e("./util/showcase"), s = e("./util/ajax"), u = e("./util/showcase"),
                c = e("./util/panorama"), l = e("./util/browser"), h = e("./util/logger"), f = e("./tile/TileUtils"),
                p = e("./tile/TileModeValidator"), d = e("./util/cameraLight"), m = e("./constants"),
                g = e("./util/MathLight"), v = e("./featureflags"), w = e("./ab"), _ = new h(t),
                E = l.valueFromHash("usetiles", null) || l.valueFromHash("tiles", null), y = {
                    quickstart: 1 === l.valueFromHash("qust", 0) || 1 === l.valueFromHash("qs", 0),
                    tiles: null !== E ? "1" === E : null
                };
            if (r.prototype.init = function () {
                    _.warn("Preheating");
                    var e;
                    return this.loadModelData().then(function (t) {
                        e = a.normalizeModeldata(t, g)
                    }).then(this.urls.init.bind(this.urls)).then(function () {
                        var t, n, r = e.startPano,
                            i = y.tiles === !0 || null === y.tiles && u.modelDataPromisesTiles(e);
                        if (r && r.pano) t = i ? this.loadTiledPanoTextures(r, "high") : this.loadPanoTextures(r.pano.uuid, "high"); else if (i) {
                            var o = Object.keys(e.sweeps)[0];
                            this.testSingleTile(o)
                        }
                        return n = s.get(this.urls.get("vision.modeldata"), {responseType: "arraybuffer"}), $.when(n, t)
                    }.bind(this)).then(function () {
                        _.warn("Done preheating")
                    })
                }, r.prototype.loadModelData = function () {
                    return s.get(this.urlConfig.urlModel, {
                        responseType: "json",
                        prefetchFrom: "model",
                        auth: u.getAuthorizationHeader()
                    })
                }, r.prototype.loadPanoTextures = function (e, t) {
                    var n = c.getCubemapUrls(this.urls, e, t), r = n.map(function (e) {
                        return s.getImage(e)
                    });
                    return $.when(r[0], r[1], r[2], r[3], r[4], r[5])
                }, r.prototype.loadTiledPanoTextures = function (e) {
                    var t = [], n = 1024, r = new g.Matrix4, i = new g.Vector3(0, 0, -1);
                    r.makeRotationFromQuaternion(e.camera.quaternion), r.applyToVector3(i);
                    var o = d.getHFOVFromVFOV(m.insideFOV, window.innerWidth, window.innerHeight), a = m.insideFOV;
                    f.matchingTilesInDirection(e.pano, n, i, o, a, t);
                    var u = t.map(function (t) {
                        var n = this.urls.get("tiles/" + e.pano.uuid + "/1k_face" + t.face + "_" + t.tileX + "_" + t.tileY + ".jpg");
                        return n = w.changeIfTileGenerating(n), s.getImage(n, 0).fail(function () {
                            p.redirectToNonTiledMode()
                        })
                    }.bind(this));
                    return $.when.apply($, u).done(function () {
                        [0, 1, 2, 3, 4, 5].forEach(function (t) {
                            var n = this.urls.get("tiles/" + e.pano.uuid + "/512_face" + t + "_0_0.jpg");
                            return n = w.changeIfTileGenerating(n), s.getImage(n)
                        }.bind(this))
                    }.bind(this))
                }, r.prototype.testSingleTile = function (e) {
                    if (!w.tilegen) {
                        var t = this.urls.get("tiles/" + e + "/1k_face0_0_0.jpg");
                        s.getImage(t, 0).fail(function () {
                            p.redirectToNonTiledMode()
                        })
                    }
                }, !n()) {
                var b = a.getModelIDFromQueryString();
                b ? i(b) : _.warn("No sid, cannot preheat.")
            }
        }).call(this, "/js/preheater.js")
    }, {
        "./ab": 1,
        "./constants": 2,
        "./featureflags": 6,
        "./tile/TileModeValidator": 8,
        "./tile/TileUtils": 9,
        "./util/MathLight": 10,
        "./util/ModelUrls": 11,
        "./util/ajax": 12,
        "./util/browser": 13,
        "./util/cameraLight": 14,
        "./util/logger": 15,
        "./util/panorama": 16,
        "./util/showcase": 17
    }], 8: [function (e, t, n) {
        "use strict";
        var r = {};
        r.allTilingParameterNames = ["usetiles", "tiles", "maxtileq", "tileoverlay", "tileupdelay", "itiledelay", "maxtpf", "tilecustcomp", "tileprerender"], r.redirectToNonTiledMode = function () {
            var e = window.location.href;
            r.allTilingParameterNames.forEach(function (t) {
                e = r.removeURLParameter(e, t)
            }), window.location.href = e
        }, r.removeURLParameter = function (e, t) {
            var n = new RegExp(t + "=[^$&]*&?");
            return e.replace(n, "")
        }, t.exports = r
    }, {}], 9: [function (e, t, n) {
        "use strict";
        var r = e("../enum/GLCubeFaces"), i = e("../util/MathLight"), o = {};
        o.TILE_SIZE = 512, o.FACES_PER_PANO = 6, o.LocationOnTile = {
            Center: 0,
            UpperLeft: 1,
            UpperRight: 2,
            LowerRight: 3,
            LowerLeft: 4
        }, o.getTileVector = function () {
            return function (e, t, n, a, s, u, c, l) {
                u = u || o.LocationOnTile.Center;
                var h = e / t, f = a / h;
                s = -s + (h - 1);
                var p = s / h, d = t / e, m = 2 * d, g = m / 2, v = 2 * f - 1 + g, w = 2 * p - 1 + g;
                switch (u) {
                    case o.LocationOnTile.UpperLeft:
                        v -= g, w += g, v += c * m;
                        break;
                    case o.LocationOnTile.UpperRight:
                        v += g, w += g, w -= c * m;
                        break;
                    case o.LocationOnTile.LowerRight:
                        v += g, w -= g, v -= c * m;
                        break;
                    case o.LocationOnTile.LowerLeft:
                        v -= g, w -= g, w += c * m;
                        break;
                    case o.LocationOnTile.Center:
                }
                switch (n) {
                    case r.GL_TEXTURE_CUBE_MAP_POSITIVE_X:
                        i.setVector(l, -1, w, -v);
                        break;
                    case r.GL_TEXTURE_CUBE_MAP_NEGATIVE_X:
                        i.setVector(l, 1, w, v);
                        break;
                    case r.GL_TEXTURE_CUBE_MAP_POSITIVE_Y:
                        i.setVector(l, -v, 1, -w);
                        break;
                    case r.GL_TEXTURE_CUBE_MAP_NEGATIVE_Y:
                        i.setVector(l, -v, -1, w);
                        break;
                    case r.GL_TEXTURE_CUBE_MAP_POSITIVE_Z:
                        i.setVector(l, -v, w, 1);
                        break;
                    case r.GL_TEXTURE_CUBE_MAP_NEGATIVE_Z:
                        i.setVector(l, v, w, -1)
                }
                i.normalize(l)
            }
        }(), o.getFaceForTile = function (e, t) {
            var n = o.TILE_SIZE;
            e < o.TILE_SIZE && (n = e);
            var r = Math.floor(e / n), i = r * r;
            return Math.floor(t / i)
        }, o.getTileLocation = function (e, t, n) {
            var r = o.TILE_SIZE;
            e < o.TILE_SIZE && (r = e);
            var i = o.getFaceForTile(e, t), a = Math.floor(e / r), s = a * a, u = t - i * s;
            n.tileX = u % a, n.tileY = Math.floor(u / a), n.face = i, n.faceTileIndex = u
        }, o.getTileCountForSize = function (e) {
            if (e <= o.TILE_SIZE) return o.FACES_PER_PANO;
            var t = Math.floor(e / o.TILE_SIZE), n = t * t, r = n * o.FACES_PER_PANO;
            return r
        }, o.getRelativeDirection = function () {
            var e = new i.Matrix4, t = new i.Quaternion;
            return function (n, r) {
                t.copy(n), t.inverse(), e.makeRotationFromQuaternion(t), e.applyToVector3(r), i.normalize(r)
            }
        }(), o.matchingTilesInDirection = function () {
            var e = new i.Vector3, t = new i.Vector3(0, 0, -1), n = new i.Quaternion, r = function (e, t) {
                e.push({face: t.face, faceTileIndex: t.faceTileIndex, tileX: t.tileX, tileY: t.tileY})
            }, a = function () {
                var e = {face: -1, faceTileIndex: -1, tileX: -1, tileY: -1};
                return function (t, n, i) {
                    for (var a = o.getTileCountForSize(t), s = 0, u = 0; u < a; u++) o.getTileLocation(t, u, e), n && !n(e) || (s++, i && r(i, e));
                    return s
                }
            }();
            return function (r, s, u, c, l, h) {
                var f = s < o.TILE_SIZE ? s : o.TILE_SIZE;
                o.getTileCountForSize(s);
                if (!c && !l) return a(s, null, h);
                var p = !!l;
                if (l = l || c, l = Math.max(0, Math.min(l, 360)), c = Math.max(0, Math.min(c, 360)), i.copyVector(u, e), o.getRelativeDirection(r.quaternion, e), p) {
                    n.setFromUnitVectors(e, t);
                    var d = function (e) {
                        return o.isTileWithinFrustum(s, f, e.face, e.tileX, e.tileY, n, c, l)
                    };
                    return a(s, d, h)
                }
                var m = function (t) {
                    return o.isTileWithinFOV(s, f, t.face, t.tileX, t.tileY, e, c)
                };
                return a(s, m, h)
            }
        }(), o.isTileWithinFrustum = function () {
            var e = new i.Vector3, t = 1e-5;
            return function (n, r, a, s, u, c, l, h) {
                for (var f = Math.tan(.5 * h * i.RADIANS_PER_DEGREE), p = -f, d = Math.tan(.5 * l * i.RADIANS_PER_DEGREE), m = -d, g = o.mapFaceToCubemapFace(a), v = 0, w = 0, _ = 0, E = 0, y = 0, b = 0, T = o.LocationOnTile.Center; T <= o.LocationOnTile.LowerLeft; T++) if (o.getTileVector(n, r, g, s, u, T, 0, e), i.applyQuaternionToVector(c, e), e.z >= -t) y++; else {
                    var x = -1 / e.z, A = e.x * x, R = e.y * x;
                    R > f ? v++ : R < p && w++, A > d ? _++ : A < m && E++, b++
                }
                return w !== b && v !== b && _ !== b && E !== b
            }
        }(), o.isTileWithinFOV = function () {
            var e = new i.Vector3, t = new i.Vector3(0, 1, 0), n = new i.Vector3(1, 0, 0);
            return function (r, a, s, u, c, l, h) {
                var f = o.mapFaceToCubemapFace(s);
                if (i.cross(l, t, n), o.getTileVector(r, a, f, u, c, o.LocationOnTile.Center, 0, e), o.isWithinFOV(e, l, h, null)) return !0;
                for (var p = h / 360, d = Math.floor(1 / p), m = 0, g = 0; g < d; g++) {
                    for (var v = o.LocationOnTile.UpperLeft; v <= o.LocationOnTile.LowerLeft; v++) if (o.getTileVector(r, a, f, u, c, v, m, e), o.isWithinFOV(e, l, h, null)) return !0;
                    m += p
                }
                return !1
            }
        }(), o.isWithinFOV = function () {
            var e = new i.Vector3, t = new i.Vector3;
            return function (n, r, o, a) {
                if (i.copyVector(n, t), a) {
                    i.copyVector(a, e), i.normalize(e);
                    var s = i.dot(e, n);
                    e.x *= s, e.y *= s, e.z *= s, i.subVector(t, e)
                }
                var u = o / 2 * i.RADIANS_PER_DEGREE, c = Math.cos(u), l = i.dot(t, r);
                return l >= c
            }
        }(), o.mapFaceToCubemapFace = function () {
            var e = {
                0: r.GL_TEXTURE_CUBE_MAP_POSITIVE_Y,
                1: r.GL_TEXTURE_CUBE_MAP_POSITIVE_Z,
                2: r.GL_TEXTURE_CUBE_MAP_POSITIVE_X,
                3: r.GL_TEXTURE_CUBE_MAP_NEGATIVE_Z,
                4: r.GL_TEXTURE_CUBE_MAP_NEGATIVE_X,
                5: r.GL_TEXTURE_CUBE_MAP_NEGATIVE_Y
            };
            return function (t) {
                return e[t]
            }
        }(), t.exports = o
    }, {"../enum/GLCubeFaces": 3, "../util/MathLight": 10}], 10: [function (e, t, n) {
        "use strict";
        var r = e("../constants"), i = {};
        i.RADIANS_PER_DEGREE = Math.PI / 180, i.DEGREES_PER_RADIAN = 180 / Math.PI, i.Vector3 = function (e, t, n) {
            this.x = e || 0, this.y = t || 0, this.z = n || 0
        }, i.Matrix4 = function () {
            this.elements = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), arguments.length > 0 && console.error("MathLight.Matrix4: the constructor no longer reads arguments. use .set() instead.")
        }, i.Matrix4.prototype = {
            identity: function () {
                return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
            }, copy: function (e) {
                return this.elements.set(e.elements), this
            }, applyToVector3: function (e) {
                var t = e.x, n = e.y, r = e.z, i = this.elements;
                return e.x = i[0] * t + i[4] * n + i[8] * r + i[12], e.y = i[1] * t + i[5] * n + i[9] * r + i[13], e.z = i[2] * t + i[6] * n + i[10] * r + i[14], this
            }, getInverse: function (e, t) {
                var n = this.elements, r = e.elements, i = r[0], o = r[1], a = r[2], s = r[3], u = r[4], c = r[5],
                    l = r[6], h = r[7], f = r[8], p = r[9], d = r[10], m = r[11], g = r[12], v = r[13], w = r[14],
                    _ = r[15], E = p * w * h - v * d * h + v * l * m - c * w * m - p * l * _ + c * d * _,
                    y = g * d * h - f * w * h - g * l * m + u * w * m + f * l * _ - u * d * _,
                    b = f * v * h - g * p * h + g * c * m - u * v * m - f * c * _ + u * p * _,
                    T = g * p * l - f * v * l - g * c * d + u * v * d + f * c * w - u * p * w,
                    x = i * E + o * y + a * b + s * T;
                if (0 === x) {
                    var A = "MathLight.Matrix4.getInverse(): can't invert matrix, determinant is 0";
                    if (t) throw new Error(A);
                    return console.warn(A), this.identity()
                }
                var R = 1 / x;
                return n[0] = E * R, n[1] = (v * d * s - p * w * s - v * a * m + o * w * m + p * a * _ - o * d * _) * R, n[2] = (c * w * s - v * l * s + v * a * h - o * w * h - c * a * _ + o * l * _) * R, n[3] = (p * l * s - c * d * s - p * a * h + o * d * h + c * a * m - o * l * m) * R, n[4] = y * R, n[5] = (f * w * s - g * d * s + g * a * m - i * w * m - f * a * _ + i * d * _) * R, n[6] = (g * l * s - u * w * s - g * a * h + i * w * h + u * a * _ - i * l * _) * R, n[7] = (u * d * s - f * l * s + f * a * h - i * d * h - u * a * m + i * l * m) * R, n[8] = b * R, n[9] = (g * p * s - f * v * s - g * o * m + i * v * m + f * o * _ - i * p * _) * R, n[10] = (u * v * s - g * c * s + g * o * h - i * v * h - u * o * _ + i * c * _) * R, n[11] = (f * c * s - u * p * s - f * o * h + i * p * h + u * o * m - i * c * m) * R, n[12] = T * R, n[13] = (f * v * a - g * p * a + g * o * d - i * v * d - f * o * w + i * p * w) * R, n[14] = (g * c * a - u * v * a - g * o * l + i * v * l + u * o * w - i * c * w) * R, n[15] = (u * p * a - f * c * a + f * o * l - i * p * l - u * o * d + i * c * d) * R, this
            }, makeRotationFromQuaternion: function (e) {
                var t = this.elements, n = e.x, r = e.y, i = e.z, o = e.w, a = n + n, s = r + r, u = i + i, c = n * a,
                    l = n * s, h = n * u, f = r * s, p = r * u, d = i * u, m = o * a, g = o * s, v = o * u;
                return t[0] = 1 - (f + d), t[4] = l - v, t[8] = h + g, t[1] = l + v, t[5] = 1 - (c + d), t[9] = p - m, t[2] = h - g, t[6] = p + m, t[10] = 1 - (c + f), t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
            }
        }, i.Quaternion = function (e, t, n, r) {
            this._x = e || 0, this._y = t || 0, this._z = n || 0, this._w = void 0 !== r ? r : 1
        }, i.Quaternion.prototype = {
            get x() {
                return this._x
            }, set x(e) {
                this._x = e
            }, get y() {
                return this._y
            }, set y(e) {
                this._y = e
            }, get z() {
                return this._z
            }, set z(e) {
                this._z = e
            }, get w() {
                return this._w
            }, set w(e) {
                this._w = e
            }, copy: function (e) {
                this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w
            }, inverse: function () {
                return this.conjugate().normalize()
            }, conjugate: function () {
                return this._x *= -1, this._y *= -1, this._z *= -1, this
            }, length: function () {
                return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
            }, normalize: function () {
                var e = this.length();
                return 0 === e ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this
            }, setFromAxisAngle: function (e, t) {
                var n = t / 2, r = Math.sin(n);
                return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this
            }, setFromUnitVectors: function () {
                var e, t, n = 1e-6;
                return function (r, o) {
                    return void 0 === e && (e = new i.Vector3), t = i.dot(r, o) + 1, t < n ? (t = 0, Math.abs(r.x) > Math.abs(r.z) ? i.setVector(e, -r.y, r.x, 0) : i.setVector(e, 0, -r.z, r.y)) : i.cross(r, o, e), this._x = e.x, this._y = e.y, this._z = e.z, this._w = t, this.normalize()
                }
            }(), multiply: function (e) {
                return this.multiplyQuaternions(this, e)
            }, premultiply: function (e) {
                return this.multiplyQuaternions(e, this)
            }, multiplyQuaternions: function (e, t) {
                var n = e._x, r = e._y, i = e._z, o = e._w, a = t._x, s = t._y, u = t._z, c = t._w;
                return this._x = n * c + o * a + r * u - i * s, this._y = r * c + o * s + i * a - n * u, this._z = i * c + o * u + n * s - r * a, this._w = o * c - n * a - r * s - i * u, this
            }
        }, i.convertWorkshopVector = function (e) {
            return new i.Vector3(-e.x, e.y, e.z)
        }, i.convertWorkshopQuaternion = function (e) {
            return new i.Quaternion(-e.x, e.y, e.z, -e.w).multiply(new i.Quaternion(Math.sqrt(2) / 2, Math.sqrt(2) / 2, 0, 0))
        };
        i.convertWorkshopOrthoZoom = function (e) {
            return e === -1 ? -1 : e / 16 * (window.innerWidth / window.innerHeight) / r.workshopApsect
        }, i.convertWorkshopPanoramaQuaternion = function (e) {
            return new i.Quaternion(e.x, -e.y, -e.z, e.w).normalize().multiply((new i.Quaternion).setFromAxisAngle(new i.Vector3(0, 1, 0), 270 * i.RADIANS_PER_DEGREE))
        }, i.normalize = function (e) {
            var t = e.x * e.x + e.y * e.y + e.z * e.z, n = Math.sqrt(t);
            e.x /= n, e.y /= n, e.z /= n
        }, i.dot = function (e, t) {
            return e.x * t.x + e.y * t.y + e.z * t.z
        }, i.cross = function (e, t, n) {
            var r = e.x, i = e.y, o = e.z;
            n.x = i * t.z - o * t.y, n.y = o * t.x - r * t.z, n.z = r * t.y - i * t.x
        }, i.setVector = function (e, t, n, r) {
            e.x = t, e.y = n, e.z = r
        }, i.copyVector = function (e, t) {
            t.x = e.x, t.y = e.y, t.z = e.z
        }, i.addVector = function (e, t) {
            e.x += t.x, e.y += t.y, e.z += t.z
        }, i.subVector = function (e, t) {
            e.x -= t.x, e.y -= t.y, e.z -= t.z
        }, i.applyQuaternionToVector = function (e, t) {
            var n = t.x, r = t.y, i = t.z, o = e.x, a = e.y, s = e.z, u = e.w, c = u * n + a * i - s * r,
                l = u * r + s * n - o * i, h = u * i + o * r - a * n, f = -o * n - a * r - s * i;
            t.x = c * u + f * -o + l * -s - h * -a, t.y = l * u + f * -a + h * -o - c * -s, t.z = h * u + f * -s + c * -a - l * -o
        }, i.angleBetweenVectors = function (e, t) {
            return Math.acos(i.dot(e, t))
        }, t.exports = i
    }, {"../constants": 2}], 11: [function (e, t, n) {
        (function (n) {
            "use strict";

            function r(e) {
                this.cache = null, this.expires = 0
            }

            function i() {
                this.baseUrl = null, this.cache = null, this.expires = 0
            }

            function o() {
                this.baseUrl = null, this.expires = 0
            }

            function a(e) {
                this.initialLoadingPromise = null, this.endpoint = e + "?type=3", this.urlContainer = null, this.authorizationHeader = l.getAuthorizationHeader(), this.containerClasses = [o, i, r]
            }

            var s = e("./ajax"), u = e("./logger"), c = e("../constants"), l = e("./showcase"),
                h = (e("../ab"), new u(n));
            r.prototype = {
                version: 1, validate: function (e) {
                    return "catalog.json" in e && Object.keys(e).length > 0
                }, update: function (e) {
                    return this.cache = e, this.expires = Date.now() + c.signedUrlDefaultExpireTime, $.when()
                }, get: function (e) {
                    return this.cache[e]
                }
            }, i.prototype = {
                version: 2, validate: function (e) {
                    return "catalog.json" in e && "base.url" in e && Object.keys(e).length > 1
                }, update: function (e) {
                    return this.baseUrl = e["base.url"], this.cache = e, this.expires = Date.now() + c.signedUrlDefaultExpireTime, $.when()
                }, get: function (e) {
                    var t = this.cache[e];
                    return t ? this.baseUrl.replace("{{filename}}", e) + t : null
                }
            }, o.prototype = {
                version: 3, validate: function (e) {
                    return e.templates && e.catalog_file && (!e.expires || 1e3 * e.expires > Date.now())
                }, update: function (e) {
                    return this.baseUrl = e.templates[0], e.expires ? this.expires = 1e3 * e.expires : this.expires = Date.now() + c.signedUrlDefaultExpireTime, $.when()
                }, get: function (e) {
                    return this.baseUrl.replace("{{filename}}", e)
                }
            }, a.prototype = {
                init: function () {
                    return this.initialLoadingPromise ? this.initialLoadingPromise : (setInterval(function () {
                        var e = this.urlContainer ? this.urlContainer.expires : Date.now();
                        Date.now() + c.signedUrlRefreshBuffer > e && (h.debug("Refreshing urls..."), this.refresh().done(function () {
                            h.debug("Refreshed")
                        }).fail(function () {
                            h.error("Failed url refresh, urls might go stale soon")
                        }))
                    }.bind(this), c.signedUrlCheckInterval), this.initialLoadingPromise = this.refresh(), this.initialLoadingPromise)
                }, refresh: function (e) {
                    e = e || {};
                    var t = void 0 === e.cache || e.cache;
                    return s.get(this.endpoint, {
                        responseType: "json",
                        prefetchFrom: t ? "files" : null,
                        cache: t,
                        auth: this.authorizationHeader
                    }).then(function (e) {
                        if (this.urlContainer && this.urlContainer.validate(e)) return this.urlContainer.update(e);
                        for (var n = 0; n < this.containerClasses.length; n++) {
                            var r = this.containerClasses[n], i = new r;
                            if (i.validate(e)) return h.info("Using urls version " + i.version), this.urlContainer = i, this.urlContainer.update(e)
                        }
                        return t ? this.refresh({cache: !1}) : $.Deferred().reject("missing-urls")
                    }.bind(this), function (e) {
                        return "loading-failed"
                    })
                }, get: function (e) {
                    return this.urlContainer.get(e)
                }
            }, t.exports = a
        }).call(this, "/js/util/ModelUrls.js")
    }, {"../ab": 1, "../constants": 2, "./ajax": 12, "./logger": 15, "./showcase": 17}], 12: [function (e, t, n) {
        (function (n) {
            "use strict";

            function r(e, t, n) {
                var r = new XMLHttpRequest;
                if (n && "withCredentials" in r) r.open(e, t, n); else if ("undefined" != typeof XDomainRequest) r = new XDomainRequest, r.open(e, t); else {
                    if (n) throw"Browser does not support CORS!";
                    r.open(e, t)
                }
                return r
            }

            function i(e, t, n) {
                function o() {
                    h.warn("Retrying ", t), i(e, t, n).done(c.resolve.bind(c)).progress(c.notify.bind(c)).fail(c.reject.bind(c))
                }

                function a(e, t) {
                    var n = e.response;
                    if ("json" === t && "object" != typeof n) try {
                        n = JSON.parse(e.responseText)
                    } catch (e) {
                        return void c.reject({error: "Failed parsing JSON"})
                    } else if ("image/jpeg" === t) {
                        var r = new Uint8Array(e.response), i = new Blob([r], {type: "image/jpeg"}),
                            o = URL.createObjectURL(i);
                        n = new Image, n.src = o, n.crossOrigin = "Anonymous", n.onload = function () {
                            URL.revokeObjectURL(o)
                        }
                    }
                    return n
                }

                var s = r(e, t, !1);
                if (n = n || {}, n.retries = void 0 !== n.retries ? n.retries : 0, n.retry = void 0 !== n.retry ? n.retry : "get" === e.toLowerCase(), n.responseType) if (["arraybuffer", "text", "json"].indexOf(n.responseType) > -1) s.responseType = n.responseType; else {
                    if ("image/jpeg" !== n.responseType) throw new Error('reponseType can only be one of "arraybuffer", "text" or "json", "image/jpeg"');
                    s.responseType = "arraybuffer"
                }
                if ("json" === n.responseType && s.setRequestHeader("Accept", "application/json"), n.auth && s.setRequestHeader("Authorization", n.auth), "object" == typeof n.data && (n.data = JSON.stringify(n.data), s.setRequestHeader("Content-Type", "application/json")), "object" == typeof n.headers) for (var u in n.headers) s.setRequestHeader(u, n.headers[u]);
                var c = $.Deferred();
                return s.onreadystatechange = function (e) {
                    if (4 === this.readyState) if (this.status >= 500 && this.status <= 600 && n.retry && n.retries < 3) n.retries++, setTimeout(o, 1e3); else if (200 === this.status) {
                        var t = a(this, n.responseType);
                        c.resolve(t)
                    } else c.reject(this)
                }, s.onprogress = function (e) {
                    c.notify(e)
                }, s.send(n.data), c.promise()
            }

            function o(e) {
                return Object.keys(e).sort().map(function (t) {
                    return {key: t, value: e[t]}
                })
            }

            function a(e, t) {
                var n = t.responseType || null, r = t.auth || null, i = t.prefetchFrom || null,
                    a = e + "__" + n + "__" + r + "__" + i;
                return t.headers && o(t.headers).forEach(function (e) {
                    a += "__" + e.key + ":" + e.value
                }), a
            }

            function s(e, t) {
                return window.MP_REQUEST_CACHE ? window.MP_REQUEST_CACHE[a(e, t)] : null
            }

            function u(e, t, n) {
                window.MP_REQUEST_CACHE && (window.MP_REQUEST_CACHE[a(e, t)] = n)
            }

            var c = e("./logger"), l = e("../ab"), h = new c(n);
            window.URL = window.URL || window.webkitURL, window.MP_REQUEST_CACHE = window.MP_REQUEST_CACHE || {}, window.MP_PREFETCHED_MODELDATA = window.MP_PREFETCHED_MODELDATA || {}, setTimeout(function () {
                window.MP_REQUEST_CACHE = null, window.MP_PREFETCHED_MODELDATA = {}
            }, 6e4), window.onpageshow = function (e) {
                e.persisted && (window.MP_REQUEST_CACHE = null, window.MP_PREFETCHED_MODELDATA = {})
            }, t.exports = {
                get: function (e, t) {
                    t = t || {};
                    var n = void 0 === t.cache || t.cache;
                    if (n) {
                        var r = s(e, t);
                        if (r) return r
                    }
                    var o;
                    return o = t.prefetchFrom && window.MP_PREFETCHED_MODELDATA[t.prefetchFrom] ? $.when(window.MP_PREFETCHED_MODELDATA[t.prefetchFrom]) : i("GET", e, t), n && u(e, t, o), o
                }, post: function (e, t) {
                    return i("POST", e, t)
                }, patch: function (e, t) {
                    return i("PATCH", e, t)
                }, getImage: function (e, t) {
                    function n() {
                        h.warn("Retrying ", e), o.getImage(e, t - 1).done(r.resolve.bind(r)).progress(r.notify.bind(r)).fail(r.reject.bind(r))
                    }

                    var r = $.Deferred(), i = new Image, o = this;
                    return e = l.changeIfImageOptimzing(e), null !== t && void 0 !== t || (t = 3), i.onerror = function () {
                        t > 0 ? setTimeout(n, 1e3) : r.reject()
                    }, i.onload = function () {
                        r.resolve(i)
                    }, i.crossOrigin = "anonymous", i.src = e, r
                }
            }
        }).call(this, "/js/util/ajax.js")
    }, {"../ab": 1, "./logger": 15}], 13: [function (e, t, n) {
        "use strict";

        function r(e, t) {
            var n = window.navigator.userAgent, r = n.match(e);
            return r = r ? r[1].split(t) : [], {
                major: parseInt(r[0]) || 0,
                minor: parseInt(r[1]) || 0,
                patch: parseInt(r[2]) || 0
            }
        }

        var i = e("../exception/DeviceMismatchException");
        t.exports = {
            isFullscreen: function () {
                return document.fullscreenElement || document.mozFullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement
            }, supportsFullscreen: function () {
                return document.fullscreenEnabled || document.mozFullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled
            }, isPointerLocked: function () {
                return document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement
            }, requestFullscreen: function (e, t) {
                e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : e.msRequestFullscreen && e.msRequestFullscreen(), t && $(document).on("fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange", browser.requestPointerLock)
            }, requestPointerLock: function () {
                var e;
                if (document.fullscreenElement) e = document.fullscreenElement(); else if (document.mozFullscreenElement) e = document.mozFullscreenElement(); else if (document.mozFullScreenElement) e = document.mozFullScreenElement(); else {
                    if (!document.webkitFullscreenElement) return;
                    e = document.webkitFullscreenElement()
                }
                e.requestPointerLock = e.requestPointerLock || e.mozRequestPointerLock || e.webkitRequestPointerLock, e.requestPointerLock(), $(document).off("fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange", this)
            }, exitPointerLock: function () {
                document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock, document.exitPointerLock()
            }, exitFullscreen: function () {
                document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
            }, details: function () {
                var e = navigator.userAgent.match("(Firefox|Chrome|Safari)/([\\d]+)");
                return e ? {name: e[1], version: parseInt(e[2]), platform: navigator.platform} : {}
            }, is: function (e) {
                return this.details() && this.details().name === e
            }, inIframe: function () {
                return window.parent !== window
            }, aspectRatio: function () {
                var e = window.innerWidth / window.innerHeight;
                return isFinite(e) ? e : 0
            }, userAgent: function () {
                return window.navigator.userAgent
            }, isMobile: function () {
                var e = navigator.userAgent || navigator.vendor || window.opera;
                return /(android|bb\d+|meego).+mobile|android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))
            }, isLandscape: function () {
                return this.isMobile && this.aspectRatio() > 1
            }, isSmallScreen: function () {
                var e = screen.width / window.devicePixelRatio;
                return e < 240
            }, detectIE: function () {
                var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
                return t !== -1 || !!navigator.userAgent.match(/Trident.*rv\:11\./)
            }, detectSafari: function () {
                var e = window.navigator.userAgent, t = e.indexOf("Safari");
                return t !== -1 && !this.detectChrome()
            }, detectFirefox: function () {
                var e = window.navigator.userAgent;
                return e.indexOf("Firefox") !== -1
            }, detectChrome: function () {
                var e = window.navigator.userAgent;
                return e.indexOf("Chrome") !== -1 && !this.detectOpera()
            }, detectOpera: function () {
                var e = window.navigator.userAgent;
                return e.indexOf("OPR") !== -1
            }, detectIOS: function () {
                return this.detectIPhone() || this.detectIPad() || this.detectIPod()
            }, detectIPad: function () {
                var e = window.navigator.userAgent, t = /iPad/;
                return t.test(e)
            }, detectIPod: function () {
                var e = window.navigator.userAgent, t = /iPod/;
                return t.test(e)
            }, detectIPhone: function () {
                var e = window.navigator.userAgent, t = /iPhone/;
                return t.test(e)
            }, detectAndroid: function () {
                var e = window.navigator.userAgent;
                return e.indexOf("Android") !== -1
            }, detectAndroidMobile: function () {
                var e = window.navigator.userAgent;
                return this.detectAndroid() && e.indexOf("Mobile") !== -1
            }, detectSamsungNative: function () {
                var e = window.navigator.userAgent;
                return e.indexOf("SM-G900H") !== -1 || e.indexOf("GT-I9500") !== -1 || e.indexOf("SM-N900") !== -1
            }, detectSamsungS6: function () {
                var e = window.navigator.userAgent;
                return e.indexOf("SM-G92") !== -1
            }, detectWebVR: function () {
                return !(!window.navigator.getVRDisplays || !window.VRDisplay)
            }, getVRDisplay: function () {
                var e = $.Deferred();
                return this.detectWebVR() ? (navigator.getVRDisplays().then(function (t) {
                    t.length >= 1 && e.resolve(t[0]), e.reject(null)
                }), e) : e.reject(null)
            }, iosVersion: function () {
                if (!this.detectIOS()) throw new i("Did not detect an iDevice");
                var e = /((?:\d+\_?){1,3}) like Mac OS/, t = "_";
                return r(e, t)
            }, androidVersion: function () {
                if (!this.detectAndroid()) throw new i("Did not detect an Android based device");
                var e = /Android ((?:\d+\.?){1,3})/, t = ".";
                return r(e, t)
            }, valueFromCookie: function (e, t) {
                var n = new RegExp(e + "=([0-9a-f]+)(; ?|$)").exec(document.cookie);
                if (!n) return t;
                var r = n[1];
                return "boolean" == typeof t ? "true" === r || "1" === r : "number" == typeof t ? parseFloat(r) : r
            }, valueFromHash: function (e, t) {
                var n = new RegExp("[#&?]" + e + "=([^#&?]*)"), r = n.exec(window.location.href);
                if (!r) return t;
                var i = r[1];
                return "boolean" == typeof t ? "true" === i || "1" === i : "number" == typeof t ? parseFloat(i) : window.decodeURIComponent(i)
            }
        }
    }, {"../exception/DeviceMismatchException": 5}], 14: [function (e, t, n) {
        "use strict";

        function r(e, t, n) {
            return o(e.fov, t, n)
        }

        var i = e("./MathLight"), o = function (e, t, n) {
            var r = t, o = n,
                a = 2 * Math.atan(Math.tan(e * i.RADIANS_PER_DEGREE / 2) * (r / o)) * i.DEGREES_PER_RADIAN;
            return a
        }, a = function (e, t, n) {
            var r = t, o = n,
                a = 2 * Math.atan(Math.tan(e * i.RADIANS_PER_DEGREE / 2) * (o / r)) * i.DEGREES_PER_RADIAN;
            return a
        }, s = function (e, t, n, r) {
            var i = o(e, n, r);
            return i > t ? a(t, n, r) : e
        };
        t.exports = {clampVFOV: s, getHFOVForCamera: r, getHFOVFromVFOV: o, getVFOVFromHFOV: a}
    }, {"./MathLight": 10}], 15: [function (e, t, n) {
        "use strict";

        function r(e) {
            var t, n, o, a, s = e.split("/"), u = "[" + s[s.length - 1].replace(".js", "") + "]", c = {};
            if (r.consoleEnabled) {
                var l = function (e) {
                    $("#debug-console").append("<p>" + e + "</p>"), $("#debug-console")[0].scrollTop = $("#debug-console")[0].scrollHeight
                };
                t = function (e) {
                    l(Array.prototype.slice.call(arguments).join(" "))
                }, n = function (e) {
                    l(Array.prototype.slice.call(arguments).join(" "))
                }, o = function (e) {
                    l("WARN: " + Array.prototype.slice.call(arguments).join(" "))
                }, a = function (e) {
                    l("ERROR: " + Array.prototype.slice.call(arguments).join(" "))
                }
            } else console.log ? (t = console.log, n = console.info ? console.info : console.log, o = console.warn ? console.warn : console.log, a = console.error ? console.error : console.log) : t = n = o = a = function () {
            };
            var h = function (e) {
                return [u, r.timestamp()].concat(Array.prototype.slice.call(e))
            }, f = function (t, n) {
                if (i) {
                    var o = Array.prototype.slice.call(t).join(" ");
                    i.captureMessage(o, {level: n, path: e, timestamp: r.timestamp()})
                }
            }, p = function (t, n) {
                if (i) {
                    var o = Array.prototype.slice.call(t).join(" ");
                    i.captureException(new Error(o), {level: n, path: e, timestamp: r.timestamp()})
                }
            };
            return {
                debug: function () {
                    r.level >= r.levels.debug && t.apply(console, h(arguments))
                }, info: function () {
                    r.level >= r.levels.info && n.apply(console, h(arguments))
                }, warn: function () {
                    f(arguments, "warn"), r.level >= r.levels.warn && o.apply(console, h(arguments))
                }, error: function () {
                    p(arguments, "error"), r.level >= r.levels.error && a.apply(console, h(arguments))
                }, v3str: function (e, t) {
                    var n = void 0 === t ? 2 : t;
                    return "(" + e.x.toPrecision(n) + ", " + e.y.toPrecision(n) + ", " + e.z.toPrecision(n) + ")"
                }, eulstr: function (e, t) {
                    var n = void 0 === t ? 2 : t;
                    return "(" + THREE.Math.radToDeg(e.x).toPrecision(n) + ", " + THREE.Math.radToDeg(e.y).toPrecision(n) + ", " + THREE.Math.radToDeg(e.z).toPrecision(n) + ' "' + e.order + '")'
                }, time: function (e) {
                    r.level >= r.levels.debug && (c[e] = Date.now())
                }, timeEnd: function (e) {
                    if (r.level >= r.levels.debug) {
                        var t = c[e];
                        if (!t) return;
                        var n = (Date.now() - t) / 1e3;
                        this.debug(e, n + "s");
                    }
                }
            }
        }

        var i = window.Raven;
        r.timestamp = function () {
            return (Date.now() - window.navigationStart) / 1e3 + "s"
        }, r.levels = {debug: 3, info: 2, warn: 1, error: 0}, r.level = r.levels.info, t.exports = r
    }, {}], 16: [function (e, t, n) {
        "use strict";

        function r(e, t, n) {
            return a.map(function (r, o) {
                return e.get("pan/" + n + "/" + t + "_skybox" + i(r) + ".jpg")
            }.bind(this))
        }

        function i(e) {
            return s[e]
        }

        var o = e("../enum/GLCubeFaces"), a = [0, 1, 2, 3, 4, 5], s = {
            0: o.GL_TEXTURE_CUBE_MAP_POSITIVE_Y,
            1: o.GL_TEXTURE_CUBE_MAP_POSITIVE_Z,
            2: o.GL_TEXTURE_CUBE_MAP_POSITIVE_X,
            3: o.GL_TEXTURE_CUBE_MAP_NEGATIVE_Z,
            4: o.GL_TEXTURE_CUBE_MAP_NEGATIVE_X,
            5: o.GL_TEXTURE_CUBE_MAP_NEGATIVE_Y
        };
        t.exports = {mapFaceToCubemapFace: i, getCubemapUrls: r}
    }, {"../enum/GLCubeFaces": 3}], 17: [function (e, t, n) {
        (function (n) {
            "use strict";
            var r = e("./browser"), i = e("../constants"), o = e("url"), a = e("./logger"), s = new a(n), u = {
                getAuthorizationHeader: function () {
                    var e = r.valueFromHash("auth");
                    if (e) return e.replace(",", " ");
                    var t = r.valueFromCookie("token");
                    return t ? "Token " + t : null
                }, parseSidUrl: function (e) {
                    var t, n;
                    if (e = e || "", e.match(/^https?/)) {
                        var r = o.parse(e);
                        t = r.protocol + "//" + r.host, n = e
                    } else t = window.location.protocol + "//" + window.location.host, n = t + "/api/player/models/" + e;
                    return {
                        urlBase: t,
                        urlModel: n,
                        urlFiles: n + (n.match(/\/$/) ? "files" : "/files"),
                        urlThumb: n + (n.match(/\/$/) ? "thumb" : "/thumb")
                    }
                }, getModelIDFromQueryString: function () {
                    return r.valueFromHash("model") || r.valueFromHash("m")
                }, normalizeModeldata: function (e, t) {
                    e = JSON.parse(JSON.stringify(e));
                    var n = null;
                    if (e.images.forEach(function (r) {
                            if (r.metadata && "string" == typeof r.metadata) try {
                                r.metadata = JSON.parse(r.metadata)
                            } catch (e) {
                                s.warn("Unable to parse image metadata"), r.metadata = null
                            } else "object" == typeof r.metadata && s.debug("image.metadata already a JSON object");
                            r.metadata && (r.metadata.camera_quaternion && (r.metadata.camera_quaternion = t.convertWorkshopQuaternion(r.metadata.camera_quaternion)), r.metadata.camera_position && (r.metadata.camera_position = t.convertWorkshopVector(r.metadata.camera_position)), !n && e.icon && e.icon === r.sid && (n = r.metadata))
                        }), n && n.camera_quaternion && n.camera_position && n.scan_position && n.scan_quaternion) {
                        var r = {};
                        r.pano = {
                            quaternion: t.convertWorkshopPanoramaQuaternion(n.scan_quaternion),
                            position: t.convertWorkshopVector(n.scan_position),
                            uuid: n.scan_id
                        }, r.camera = {quaternion: n.camera_quaternion, position: n.camera_position}, e.startPano = r
                    }
                    return e
                }, visionVersionToInt: function () {
                    var e = new RegExp(["(?:[0-9.]+\\.){1,4}", "([0-9]+)", "[^\\.]*$"].join(""));
                    return function (t) {
                        if (!t) throw new Error("Vision version is required");
                        var n = e.exec(t);
                        if (null === n) throw new Error("String is not a vision version: " + t);
                        return parseInt(n[1])
                    }
                }(), modelDataPromisesTiles: function (e) {
                    if (e.vision_version) try {
                        return u.visionVersionToInt(e.vision_version) >= u.visionVersionToInt(i.visionTilingStartVersion)
                    } catch (t) {
                        s.warn("Invalid vision version: " + e.vision_version)
                    }
                    var t = e.created ? new Date(e.created) : null;
                    return t && t >= i.visionTilingStartDate
                }
            };
            t.exports = u
        }).call(this, "/js/util/showcase.js")
    }, {"../constants": 2, "./browser": 13, "./logger": 15, url: 22}], 18: [function (e, t, n) {
        (function (e) {
            !function (r) {
                function i(e) {
                    throw new RangeError(M[e])
                }

                function o(e, t) {
                    for (var n = e.length, r = []; n--;) r[n] = t(e[n]);
                    return r
                }

                function a(e, t) {
                    var n = e.split("@"), r = "";
                    n.length > 1 && (r = n[0] + "@", e = n[1]), e = e.replace(C, ".");
                    var i = e.split("."), a = o(i, t).join(".");
                    return r + a
                }

                function s(e) {
                    for (var t, n, r = [], i = 0, o = e.length; i < o;) t = e.charCodeAt(i++), t >= 55296 && t <= 56319 && i < o ? (n = e.charCodeAt(i++), 56320 == (64512 & n) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), i--)) : r.push(t);
                    return r
                }

                function u(e) {
                    return o(e, function (e) {
                        var t = "";
                        return e > 65535 && (e -= 65536, t += S(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += S(e)
                    }).join("")
                }

                function c(e) {
                    return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : b
                }

                function l(e, t) {
                    return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
                }

                function h(e, t, n) {
                    var r = 0;
                    for (e = n ? U(e / R) : e >> 1, e += U(e / t); e > L * x >> 1; r += b) e = U(e / L);
                    return U(r + (L + 1) * e / (e + A))
                }

                function f(e) {
                    var t, n, r, o, a, s, l, f, p, d, m = [], g = e.length, v = 0, w = O, _ = F;
                    for (n = e.lastIndexOf(I), n < 0 && (n = 0), r = 0; r < n; ++r) e.charCodeAt(r) >= 128 && i("not-basic"), m.push(e.charCodeAt(r));
                    for (o = n > 0 ? n + 1 : 0; o < g;) {
                        for (a = v, s = 1, l = b; o >= g && i("invalid-input"), f = c(e.charCodeAt(o++)), (f >= b || f > U((y - v) / s)) && i("overflow"), v += f * s, p = l <= _ ? T : l >= _ + x ? x : l - _, !(f < p); l += b) d = b - p, s > U(y / d) && i("overflow"), s *= d;
                        t = m.length + 1, _ = h(v - a, t, 0 == a), U(v / t) > y - w && i("overflow"), w += U(v / t), v %= t, m.splice(v++, 0, w)
                    }
                    return u(m)
                }

                function p(e) {
                    var t, n, r, o, a, u, c, f, p, d, m, g, v, w, _, E = [];
                    for (e = s(e), g = e.length, t = O, n = 0, a = F, u = 0; u < g; ++u) m = e[u], m < 128 && E.push(S(m));
                    for (r = o = E.length, o && E.push(I); r < g;) {
                        for (c = y, u = 0; u < g; ++u) m = e[u], m >= t && m < c && (c = m);
                        for (v = r + 1, c - t > U((y - n) / v) && i("overflow"), n += (c - t) * v, t = c, u = 0; u < g; ++u) if (m = e[u], m < t && ++n > y && i("overflow"), m == t) {
                            for (f = n, p = b; d = p <= a ? T : p >= a + x ? x : p - a, !(f < d); p += b) _ = f - d, w = b - d, E.push(S(l(d + _ % w, 0))), f = U(_ / w);
                            E.push(S(l(f, 0))), a = h(n, v, r == o), n = 0, ++r
                        }
                        ++n, ++t
                    }
                    return E.join("")
                }

                function d(e) {
                    return a(e, function (e) {
                        return P.test(e) ? f(e.slice(4).toLowerCase()) : e
                    })
                }

                function m(e) {
                    return a(e, function (e) {
                        return j.test(e) ? "xn--" + p(e) : e
                    })
                }

                var g = "object" == typeof n && n && !n.nodeType && n,
                    v = "object" == typeof t && t && !t.nodeType && t, w = "object" == typeof e && e;
                w.global !== w && w.window !== w && w.self !== w || (r = w);
                var _, E, y = 2147483647, b = 36, T = 1, x = 26, A = 38, R = 700, F = 72, O = 128, I = "-", P = /^xn--/,
                    j = /[^\x20-\x7E]/, C = /[\x2E\u3002\uFF0E\uFF61]/g, M = {
                        overflow: "Overflow: input needs wider integers to process",
                        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                        "invalid-input": "Invalid input"
                    }, L = b - T, U = Math.floor, S = String.fromCharCode;
                if (_ = {
                        version: "1.4.1",
                        ucs2: {decode: s, encode: u},
                        decode: f,
                        encode: p,
                        toASCII: m,
                        toUnicode: d
                    }, "function" == typeof define && "object" == typeof define.amd && define.amd) define("punycode", function () {
                    return _
                }); else if (g && v) if (t.exports == g) v.exports = _; else for (E in _) _.hasOwnProperty(E) && (g[E] = _[E]); else r.punycode = _
            }(this)
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}], 19: [function (e, t, n) {
        "use strict";

        function r(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }

        t.exports = function (e, t, n, o) {
            t = t || "&", n = n || "=";
            var a = {};
            if ("string" != typeof e || 0 === e.length) return a;
            var s = /\+/g;
            e = e.split(t);
            var u = 1e3;
            o && "number" == typeof o.maxKeys && (u = o.maxKeys);
            var c = e.length;
            u > 0 && c > u && (c = u);
            for (var l = 0; l < c; ++l) {
                var h, f, p, d, m = e[l].replace(s, "%20"), g = m.indexOf(n);
                g >= 0 ? (h = m.substr(0, g), f = m.substr(g + 1)) : (h = m, f = ""), p = decodeURIComponent(h), d = decodeURIComponent(f), r(a, p) ? i(a[p]) ? a[p].push(d) : a[p] = [a[p], d] : a[p] = d
            }
            return a
        };
        var i = Array.isArray || function (e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
    }, {}], 20: [function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (e.map) return e.map(t);
            for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
            return n
        }

        var i = function (e) {
            switch (typeof e) {
                case"string":
                    return e;
                case"boolean":
                    return e ? "true" : "false";
                case"number":
                    return isFinite(e) ? e : "";
                default:
                    return ""
            }
        };
        t.exports = function (e, t, n, s) {
            return t = t || "&", n = n || "=", null === e && (e = void 0), "object" == typeof e ? r(a(e), function (a) {
                var s = encodeURIComponent(i(a)) + n;
                return o(e[a]) ? r(e[a], function (e) {
                    return s + encodeURIComponent(i(e))
                }).join(t) : s + encodeURIComponent(i(e[a]))
            }).join(t) : s ? encodeURIComponent(i(s)) + n + encodeURIComponent(i(e)) : ""
        };
        var o = Array.isArray || function (e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }, a = Object.keys || function (e) {
            var t = [];
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
            return t
        }
    }, {}], 21: [function (e, t, n) {
        "use strict";
        n.decode = n.parse = e("./decode"), n.encode = n.stringify = e("./encode")
    }, {"./decode": 19, "./encode": 20}], 22: [function (e, t, n) {
        "use strict";

        function r() {
            this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
        }

        function i(e, t, n) {
            if (e && c.isObject(e) && e instanceof r) return e;
            var i = new r;
            return i.parse(e, t, n), i
        }

        function o(e) {
            return c.isString(e) && (e = i(e)), e instanceof r ? e.format() : r.prototype.format.call(e)
        }

        function a(e, t) {
            return i(e, !1, !0).resolve(t)
        }

        function s(e, t) {
            return e ? i(e, !1, !0).resolveObject(t) : t
        }

        var u = e("punycode"), c = e("./util");
        n.parse = i, n.resolve = a, n.resolveObject = s, n.format = o, n.Url = r;
        var l = /^([a-z0-9.+-]+:)/i, h = /:[0-9]*$/, f = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
            p = ["<", ">", '"', "`", " ", "\r", "\n", "\t"], d = ["{", "}", "|", "\\", "^", "`"].concat(p),
            m = ["'"].concat(d), g = ["%", "/", "?", ";", "#"].concat(m), v = ["/", "?", "#"], w = 255,
            _ = /^[+a-z0-9A-Z_-]{0,63}$/, E = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, y = {javascript: !0, "javascript:": !0},
            b = {javascript: !0, "javascript:": !0}, T = {
                http: !0,
                https: !0,
                ftp: !0,
                gopher: !0,
                file: !0,
                "http:": !0,
                "https:": !0,
                "ftp:": !0,
                "gopher:": !0,
                "file:": !0
            }, x = e("querystring");
        r.prototype.parse = function (e, t, n) {
            if (!c.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
            var r = e.indexOf("?"), i = r !== -1 && r < e.indexOf("#") ? "?" : "#", o = e.split(i), a = /\\/g;
            o[0] = o[0].replace(a, "/"), e = o.join(i);
            var s = e;
            if (s = s.trim(), !n && 1 === e.split("#").length) {
                var h = f.exec(s);
                if (h) return this.path = s, this.href = s, this.pathname = h[1], h[2] ? (this.search = h[2], t ? this.query = x.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : t && (this.search = "", this.query = {}), this
            }
            var p = l.exec(s);
            if (p) {
                p = p[0];
                var d = p.toLowerCase();
                this.protocol = d, s = s.substr(p.length)
            }
            if (n || p || s.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                var A = "//" === s.substr(0, 2);
                !A || p && b[p] || (s = s.substr(2), this.slashes = !0)
            }
            if (!b[p] && (A || p && !T[p])) {
                for (var R = -1, F = 0; F < v.length; F++) {
                    var O = s.indexOf(v[F]);
                    O !== -1 && (R === -1 || O < R) && (R = O)
                }
                var I, P;
                P = R === -1 ? s.lastIndexOf("@") : s.lastIndexOf("@", R), P !== -1 && (I = s.slice(0, P), s = s.slice(P + 1), this.auth = decodeURIComponent(I)), R = -1;
                for (var F = 0; F < g.length; F++) {
                    var O = s.indexOf(g[F]);
                    O !== -1 && (R === -1 || O < R) && (R = O)
                }
                R === -1 && (R = s.length), this.host = s.slice(0, R), s = s.slice(R), this.parseHost(), this.hostname = this.hostname || "";
                var j = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                if (!j) for (var C = this.hostname.split(/\./), F = 0, M = C.length; F < M; F++) {
                    var L = C[F];
                    if (L && !L.match(_)) {
                        for (var U = "", S = 0, k = L.length; S < k; S++) U += L.charCodeAt(S) > 127 ? "x" : L[S];
                        if (!U.match(_)) {
                            var z = C.slice(0, F), V = C.slice(F + 1), D = L.match(E);
                            D && (z.push(D[1]), V.unshift(D[2])), V.length && (s = "/" + V.join(".") + s), this.hostname = z.join(".");
                            break
                        }
                    }
                }
                this.hostname.length > w ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), j || (this.hostname = u.toASCII(this.hostname));
                var q = this.port ? ":" + this.port : "", H = this.hostname || "";
                this.host = H + q, this.href += this.host, j && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== s[0] && (s = "/" + s))
            }
            if (!y[d]) for (var F = 0, M = m.length; F < M; F++) {
                var G = m[F];
                if (s.indexOf(G) !== -1) {
                    var N = encodeURIComponent(G);
                    N === G && (N = escape(G)), s = s.split(G).join(N)
                }
            }
            var X = s.indexOf("#");
            X !== -1 && (this.hash = s.substr(X), s = s.slice(0, X));
            var B = s.indexOf("?");
            if (B !== -1 ? (this.search = s.substr(B), this.query = s.substr(B + 1), t && (this.query = x.parse(this.query)), s = s.slice(0, B)) : t && (this.search = "", this.query = {}), s && (this.pathname = s), T[d] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                var q = this.pathname || "", Q = this.search || "";
                this.path = q + Q
            }
            return this.href = this.format(), this
        }, r.prototype.format = function () {
            var e = this.auth || "";
            e && (e = encodeURIComponent(e), e = e.replace(/%3A/i, ":"), e += "@");
            var t = this.protocol || "", n = this.pathname || "", r = this.hash || "", i = !1, o = "";
            this.host ? i = e + this.host : this.hostname && (i = e + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (i += ":" + this.port)), this.query && c.isObject(this.query) && Object.keys(this.query).length && (o = x.stringify(this.query));
            var a = this.search || o && "?" + o || "";
            return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || T[t]) && i !== !1 ? (i = "//" + (i || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : i || (i = ""), r && "#" !== r.charAt(0) && (r = "#" + r), a && "?" !== a.charAt(0) && (a = "?" + a), n = n.replace(/[?#]/g, function (e) {
                return encodeURIComponent(e)
            }), a = a.replace("#", "%23"), t + i + n + a + r
        }, r.prototype.resolve = function (e) {
            return this.resolveObject(i(e, !1, !0)).format()
        }, r.prototype.resolveObject = function (e) {
            if (c.isString(e)) {
                var t = new r;
                t.parse(e, !1, !0), e = t
            }
            for (var n = new r, i = Object.keys(this), o = 0; o < i.length; o++) {
                var a = i[o];
                n[a] = this[a]
            }
            if (n.hash = e.hash, "" === e.href) return n.href = n.format(), n;
            if (e.slashes && !e.protocol) {
                for (var s = Object.keys(e), u = 0; u < s.length; u++) {
                    var l = s[u];
                    "protocol" !== l && (n[l] = e[l])
                }
                return T[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n
            }
            if (e.protocol && e.protocol !== n.protocol) {
                if (!T[e.protocol]) {
                    for (var h = Object.keys(e), f = 0; f < h.length; f++) {
                        var p = h[f];
                        n[p] = e[p]
                    }
                    return n.href = n.format(), n
                }
                if (n.protocol = e.protocol, e.host || b[e.protocol]) n.pathname = e.pathname; else {
                    for (var d = (e.pathname || "").split("/"); d.length && !(e.host = d.shift());) ;
                    e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== d[0] && d.unshift(""), d.length < 2 && d.unshift(""), n.pathname = d.join("/")
                }
                if (n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth = e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname || n.search) {
                    var m = n.pathname || "", g = n.search || "";
                    n.path = m + g
                }
                return n.slashes = n.slashes || e.slashes, n.href = n.format(), n
            }
            var v = n.pathname && "/" === n.pathname.charAt(0),
                w = e.host || e.pathname && "/" === e.pathname.charAt(0), _ = w || v || n.host && e.pathname, E = _,
                y = n.pathname && n.pathname.split("/") || [], d = e.pathname && e.pathname.split("/") || [],
                x = n.protocol && !T[n.protocol];
            if (x && (n.hostname = "", n.port = null, n.host && ("" === y[0] ? y[0] = n.host : y.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === d[0] ? d[0] = e.host : d.unshift(e.host)), e.host = null), _ = _ && ("" === d[0] || "" === y[0])), w) n.host = e.host || "" === e.host ? e.host : n.host, n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, y = d; else if (d.length) y || (y = []), y.pop(), y = y.concat(d), n.search = e.search, n.query = e.query; else if (!c.isNullOrUndefined(e.search)) {
                if (x) {
                    n.hostname = n.host = y.shift();
                    var A = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
                    A && (n.auth = A.shift(), n.host = n.hostname = A.shift())
                }
                return n.search = e.search, n.query = e.query, c.isNull(n.pathname) && c.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n
            }
            if (!y.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
            for (var R = y.slice(-1)[0], F = (n.host || e.host || y.length > 1) && ("." === R || ".." === R) || "" === R, O = 0, I = y.length; I >= 0; I--) R = y[I], "." === R ? y.splice(I, 1) : ".." === R ? (y.splice(I, 1), O++) : O && (y.splice(I, 1), O--);
            if (!_ && !E) for (; O--; O) y.unshift("..");
            !_ || "" === y[0] || y[0] && "/" === y[0].charAt(0) || y.unshift(""), F && "/" !== y.join("/").substr(-1) && y.push("");
            var P = "" === y[0] || y[0] && "/" === y[0].charAt(0);
            if (x) {
                n.hostname = n.host = P ? "" : y.length ? y.shift() : "";
                var A = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
                A && (n.auth = A.shift(), n.host = n.hostname = A.shift())
            }
            return _ = _ || n.host && y.length, _ && !P && y.unshift(""), y.length ? n.pathname = y.join("/") : (n.pathname = null, n.path = null), c.isNull(n.pathname) && c.isNull(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(), n
        }, r.prototype.parseHost = function () {
            var e = this.host, t = h.exec(e);
            t && (t = t[0], ":" !== t && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
        }
    }, {"./util": 23, punycode: 18, querystring: 21}], 23: [function (e, t, n) {
        "use strict";
        t.exports = {
            isString: function (e) {
                return "string" == typeof e
            }, isObject: function (e) {
                return "object" == typeof e && null !== e
            }, isNull: function (e) {
                return null === e
            }, isNullOrUndefined: function (e) {
                return null == e
            }
        }
    }, {}]
}, {}, [7]);