!function (e, t, a) {
    "use strict";

    function n(t, h, m) {
        function H(a) {
            var n = 0, i = Ee.length;
            if (Ce.old = e.extend({}, Ce), Ie = we ? 0 : be[ge.horizontal ? "width" : "height"](), ke = Be[ge.horizontal ? "width" : "height"](), ze = we ? t : Pe[ge.horizontal ? "outerWidth" : "outerHeight"](), Ee.length = 0, Ce.start = 0, Ce.end = q(ze - Ie, 0), Re) {
                n = Ne.length, qe = Pe.children(ge.itemSelector), Ne.length = 0;
                var r, s = c(Pe, ge.horizontal ? "paddingLeft" : "paddingTop"),
                    o = c(Pe, ge.horizontal ? "paddingRight" : "paddingBottom"),
                    l = "border-box" === e(qe).css("boxSizing"), u = "none" !== qe.css("float"), f = 0,
                    v = qe.length - 1;
                ze = 0, qe.each(function (t, a) {
                    var n = e(a), i = a.getBoundingClientRect(),
                        l = E(ge.horizontal ? i.width || i.right - i.left : i.height || i.bottom - i.top),
                        d = c(n, ge.horizontal ? "marginLeft" : "marginTop"),
                        p = c(n, ge.horizontal ? "marginRight" : "marginBottom"), h = l + d + p, m = !d || !p, g = {};
                    g.el = a, g.size = m ? l : h, g.half = g.size / 2, g.start = ze + (m ? d : 0), g.center = g.start - E(Ie / 2 - g.size / 2), g.end = g.start - Ie + g.size, t || (ze += s), ze += h, ge.horizontal || u || p && d && t > 0 && (ze -= N(d, p)), t === v && (g.end += o, ze += o, f = m ? p : 0), Ne.push(g), r = g
                }), Pe[0].style[ge.horizontal ? "width" : "height"] = (l ? ze : ze - s - o) + "px", ze -= f, Ne.length ? (Ce.start = Ne[0][Me ? "center" : "start"], Ce.end = Me ? r.center : ze > Ie ? r.end : Ce.start) : Ce.start = Ce.end = 0
            }
            if (Ce.center = E(Ce.end / 2 + Ce.start / 2), Q(), Se.length && ke > 0 && (ge.dynamicHandle ? (Te = Ce.start === Ce.end ? ke : E(ke * Ie / ze), Te = d(Te, ge.minHandleSize, ke), Se[0].style[ge.horizontal ? "width" : "height"] = Te + "px") : Te = Se[ge.horizontal ? "outerWidth" : "outerHeight"](), xe.end = ke - Te, it || j()), !we && Ie > 0) {
                var p = Ce.start, h = "";
                if (Re) e.each(Ne, function (e, t) {
                    Me ? Ee.push(t.center) : t.start + t.size > p && p <= Ce.end && (p = t.start, Ee.push(p), p += Ie, p > Ce.end && p < Ce.end + Ie && Ee.push(Ce.end))
                }); else for (; p - Ie < Ce.end;) Ee.push(p), p += Ie;
                if (De[0] && i !== Ee.length) {
                    for (var m = 0; m < Ee.length; m++) h += ge.pageBuilder.call(ye, m);
                    Ae = De.html(h).children(), Ae.eq(Oe.activePage).addClass(ge.activeClass)
                }
            }
            if (Oe.slideeSize = ze, Oe.frameSize = Ie, Oe.sbSize = ke, Oe.handleSize = Te, Re) {
                a && null != ge.startAt && (W(ge.startAt), ye[Le ? "toCenter" : "toStart"](ge.startAt));
                var g = Ne[Oe.activeItem];
                X(Le && g ? g.center : d(Ce.dest, Ce.start, Ce.end))
            } else a ? null != ge.startAt && X(ge.startAt, 1) : X(d(Ce.dest, Ce.start, Ce.end));
            pe("load")
        }

        function X(e, t, a) {
            if (Re && at.released && !a) {
                var n = $(e), i = e > Ce.start && e < Ce.end;
                Le ? (i && (e = Ne[n.centerItem].center), Me && ge.activateMiddle && W(n.centerItem)) : i && (e = Ne[n.firstItem].start)
            }
            at.init && at.slidee && ge.elasticBounds ? e > Ce.end ? e = Ce.end + (e - Ce.end) / 6 : e < Ce.start && (e = Ce.start + (e - Ce.start) / 6) : e = d(e, Ce.start, Ce.end), et.start = +new Date, et.time = 0, et.from = Ce.cur, et.to = e, et.delta = e - Ce.cur, et.tweesing = at.tweese || at.init && !at.slidee, et.immediate = !et.tweesing && (t || at.init && at.slidee || !ge.speed), at.tweese = 0, e !== Ce.dest && (Ce.dest = e, pe("change"), it || Y()), K(), Q(), Z(), F()
        }

        function Y() {
            if (ye.initialized) {
                if (!it) return it = w(Y), void(at.released && pe("moveStart"));
                et.immediate ? Ce.cur = et.to : et.tweesing ? (et.tweeseDelta = et.to - Ce.cur, x(et.tweeseDelta) < .1 ? Ce.cur = et.to : Ce.cur += et.tweeseDelta * (at.released ? ge.swingSpeed : ge.syncSpeed)) : (et.time = N(+new Date - et.start, ge.speed), Ce.cur = et.from + et.delta * e.easing[ge.easing](et.time / ge.speed, et.time, 0, 1, ge.speed)), et.to === Ce.cur ? (Ce.cur = et.to, at.tweese = it = 0) : it = w(Y), pe("move"), we || (f ? Pe[0].style[f] = v + (ge.horizontal ? "translateX" : "translateY") + "(" + -Ce.cur + "px)" : Pe[0].style[ge.horizontal ? "left" : "top"] = -E(Ce.cur) + "px"), !it && at.released && pe("moveEnd"), j()
            }
        }

        function j() {
            Se.length && (xe.cur = Ce.start === Ce.end ? 0 : ((at.init && !at.slidee ? Ce.dest : Ce.cur) - Ce.start) / (Ce.end - Ce.start) * xe.end, xe.cur = d(E(xe.cur), xe.start, xe.end), _e.hPos !== xe.cur && (_e.hPos = xe.cur, f ? Se[0].style[f] = v + (ge.horizontal ? "translateX" : "translateY") + "(" + xe.cur + "px)" : Se[0].style[ge.horizontal ? "left" : "top"] = xe.cur + "px"))
        }

        function F() {
            Ae[0] && _e.page !== Oe.activePage && (_e.page = Oe.activePage, Ae.removeClass(ge.activeClass).eq(Oe.activePage).addClass(ge.activeClass), pe("activePage", _e.page))
        }

        function M() {
            tt.speed && Ce.cur !== (tt.speed > 0 ? Ce.end : Ce.start) || ye.stop(), ot = at.init ? w(M) : 0, tt.now = +new Date, tt.pos = Ce.cur + (tt.now - tt.lastTime) / 1e3 * tt.speed, X(at.init ? tt.pos : E(tt.pos)), at.init || Ce.cur !== Ce.dest || pe("moveEnd"), tt.lastTime = tt.now
        }

        function L(e, t, n) {
            if ("boolean" === i(t) && (n = t, t = a), t === a) X(Ce[e], n); else {
                if (Le && "center" !== e) return;
                var r = ye.getPos(t);
                r && X(r[e], n, !Le)
            }
        }

        function R(e) {
            return null != e ? l(e) ? e >= 0 && e < Ne.length ? e : -1 : qe.index(e) : -1
        }

        function U(e) {
            return R(l(e) && 0 > e ? e + Ne.length : e)
        }

        function W(e, t) {
            var a = R(e);
            return !(!Re || 0 > a) && ((_e.active !== a || t) && (qe.eq(Oe.activeItem).removeClass(ge.activeClass), qe.eq(a).addClass(ge.activeClass), _e.active = Oe.activeItem = a, Z(), pe("active", a)), a)
        }

        function $(e) {
            e = d(l(e) ? e : Ce.dest, Ce.start, Ce.end);
            var t = {}, a = Me ? 0 : Ie / 2;
            if (!we) for (var n = 0, i = Ee.length; i > n; n++) {
                if (e >= Ce.end || n === Ee.length - 1) {
                    t.activePage = Ee.length - 1;
                    break
                }
                if (e <= Ee[n] + a) {
                    t.activePage = n;
                    break
                }
            }
            if (Re) {
                for (var r = !1, s = !1, o = !1, c = 0, u = Ne.length; u > c; c++) if (r === !1 && e <= Ne[c].start + Ne[c].half && (r = c), o === !1 && e <= Ne[c].center + Ne[c].half && (o = c), c === u - 1 || e <= Ne[c].end + Ne[c].half) {
                    s = c;
                    break
                }
                t.firstItem = l(r) ? r : 0, t.centerItem = l(o) ? o : t.firstItem, t.lastItem = l(s) ? s : t.centerItem
            }
            return t
        }

        function Q(t) {
            e.extend(Oe, $(t))
        }

        function Z() {
            var e = Ce.dest <= Ce.start, t = Ce.dest >= Ce.end, a = (e ? 1 : 0) | (t ? 2 : 0);
            if (_e.slideePosState !== a && (_e.slideePosState = a, Je.is("button,input") && Je.prop("disabled", e), Ke.is("button,input") && Ke.prop("disabled", t), Je.add(Qe)[e ? "addClass" : "removeClass"](ge.disabledClass), Ke.add($e)[t ? "addClass" : "removeClass"](ge.disabledClass)), _e.fwdbwdState !== a && at.released && (_e.fwdbwdState = a, Qe.is("button,input") && Qe.prop("disabled", e), $e.is("button,input") && $e.prop("disabled", t)), Re && null != Oe.activeItem) {
                var n = 0 === Oe.activeItem, i = Oe.activeItem >= Ne.length - 1, r = (n ? 1 : 0) | (i ? 2 : 0);
                _e.itemsButtonState !== r && (_e.itemsButtonState = r, Ze.is("button,input") && Ze.prop("disabled", n), Ge.is("button,input") && Ge.prop("disabled", i), Ze[n ? "addClass" : "removeClass"](ge.disabledClass), Ge[i ? "addClass" : "removeClass"](ge.disabledClass))
            }
        }

        function G(e, t, a) {
            if (e = U(e), t = U(t), e > -1 && t > -1 && e !== t && (!a || t !== e - 1) && (a || t !== e + 1)) {
                qe.eq(e)[a ? "insertAfter" : "insertBefore"](Ne[t].el);
                var n = t > e ? e : a ? t : t - 1, i = e > t ? e : a ? t + 1 : t, r = e > t;
                null != Oe.activeItem && (e === Oe.activeItem ? _e.active = Oe.activeItem = a ? r ? t + 1 : t : r ? t : t - 1 : Oe.activeItem > n && Oe.activeItem < i && (_e.active = Oe.activeItem += r ? 1 : -1)), H()
            }
        }

        function J(e, t) {
            for (var a = 0, n = Ve[e].length; n > a; a++) if (Ve[e][a] === t) return a;
            return -1
        }

        function K() {
            at.released && !ye.isPaused && ye.resume()
        }

        function V(e) {
            return E(d(e, xe.start, xe.end) / xe.end * (Ce.end - Ce.start)) + Ce.start
        }

        function _() {
            at.history[0] = at.history[1], at.history[1] = at.history[2], at.history[2] = at.history[3], at.history[3] = at.delta
        }

        function ee(e) {
            at.released = 0, at.source = e, at.slidee = "slidee" === e
        }

        function te(t) {
            var a = "touchstart" === t.type, n = t.data.source, i = "slidee" === n;
            at.init || !a && ie(t.target) || ("handle" !== n || ge.dragHandle && xe.start !== xe.end) && (!i || (a ? ge.touchDragging : ge.mouseDragging && t.which < 2)) && (a || r(t), ee(n), at.init = 0, at.$source = e(t.target), at.touch = a, at.pointer = a ? t.originalEvent.touches[0] : t, at.initX = at.pointer.pageX, at.initY = at.pointer.pageY, at.initPos = i ? Ce.cur : xe.cur, at.start = +new Date, at.time = 0, at.path = 0, at.delta = 0, at.locked = 0, at.history = [0, 0, 0, 0], at.pathToLock = i ? a ? 30 : 10 : 0, b.on(a ? z : I, ae), ye.pause(1), (i ? Pe : Se).addClass(ge.draggedClass), pe("moveStart"), i && (rt = setInterval(_, 10)))
        }

        function ae(e) {
            if (at.released = "mouseup" === e.type || "touchend" === e.type, at.pointer = at.touch ? e.originalEvent[at.released ? "changedTouches" : "touches"][0] : e, at.pathX = at.pointer.pageX - at.initX, at.pathY = at.pointer.pageY - at.initY, at.path = D(A(at.pathX, 2) + A(at.pathY, 2)), at.delta = ge.horizontal ? at.pathX : at.pathY, at.released || !(at.path < 1)) {
                if (!at.init) {
                    if (!(ge.horizontal ? x(at.pathX) > x(at.pathY) : x(at.pathX) < x(at.pathY))) return ne();
                    at.init = 1
                }
                r(e), !at.locked && at.path > at.pathToLock && at.slidee && (at.locked = 1, at.$source.on(B, s)), at.released && (ne(), ge.releaseSwing && at.slidee && (at.swing = (at.delta - at.history[0]) / 40 * 300, at.delta += at.swing, at.tweese = x(at.swing) > 10)), X(at.slidee ? E(at.initPos - at.delta) : V(at.initPos + at.delta))
            }
        }

        function ne() {
            clearInterval(rt), at.released = !0, b.off(at.touch ? z : I, ae), (at.slidee ? Pe : Se).removeClass(ge.draggedClass), setTimeout(function () {
                at.$source.off(B, s)
            }), Ce.cur === Ce.dest && at.init && pe("moveEnd"), ye.resume(1), at.init = 0
        }

        function ie(t) {
            return ~e.inArray(t.nodeName, k) || e(t).is(ge.interactive)
        }

        function re() {
            ye.stop(), b.off("mouseup", re)
        }

        function se(e) {
            switch (r(e), this) {
                case $e[0]:
                case Qe[0]:
                    ye.moveBy($e.is(this) ? ge.moveBy : -ge.moveBy), b.on("mouseup", re);
                    break;
                case Ze[0]:
                    ye.prev();
                    break;
                case Ge[0]:
                    ye.next();
                    break;
                case Je[0]:
                    ye.prevPage();
                    break;
                case Ke[0]:
                    ye.nextPage()
            }
        }

        function oe(e) {
            return nt.curDelta = (ge.horizontal ? e.deltaY || e.deltaX : e.deltaY) || -e.wheelDelta, nt.curDelta /= 1 === e.deltaMode ? 3 : 100, Re ? (p = +new Date, nt.last < p - nt.resetTime && (nt.delta = 0), nt.last = p, nt.delta += nt.curDelta, x(nt.delta) < 1 ? nt.finalDelta = 0 : (nt.finalDelta = E(nt.delta / 1), nt.delta %= 1), nt.finalDelta) : nt.curDelta
        }

        function le(e) {
            e.originalEvent[g] = ye;
            var t = +new Date;
            if (O + ge.scrollHijack > t && Ue[0] !== document && Ue[0] !== window) return void(O = t);
            if (ge.scrollBy && Ce.start !== Ce.end) {
                var a = oe(e.originalEvent);
                (ge.scrollTrap || a > 0 && Ce.dest < Ce.end || 0 > a && Ce.dest > Ce.start) && r(e, 1), ye.slideBy(ge.scrollBy * a)
            }
        }

        function ce(e) {
            ge.clickBar && e.target === Be[0] && (r(e), X(V((ge.horizontal ? e.pageX - Be.offset().left : e.pageY - Be.offset().top) - Te / 2)))
        }

        function de(e) {
            if (ge.keyboardNavBy) switch (e.which) {
                case ge.horizontal ? 37 : 38:
                    r(e), ye["pages" === ge.keyboardNavBy ? "prevPage" : "prev"]();
                    break;
                case ge.horizontal ? 39 : 40:
                    r(e), ye["pages" === ge.keyboardNavBy ? "nextPage" : "next"]()
            }
        }

        function ue(e) {
            return ie(this) ? void(e.originalEvent[g + "ignore"] = !0) : void(this.parentNode !== Pe[0] || e.originalEvent[g + "ignore"] || ye.activate(this))
        }

        function fe() {
            this.parentNode === De[0] && ye.activatePage(Ae.index(this))
        }

        function ve(e) {
            ge.pauseOnHover && ye["mouseenter" === e.type ? "pause" : "resume"](2)
        }

        function pe(e, t) {
            if (Ve[e]) {
                for (me = Ve[e].length, T.length = 0, he = 0; me > he; he++) T.push(Ve[e][he]);
                for (he = 0; me > he; he++) T[he].call(ye, e, t)
            }
        }

        var he, me, ge = e.extend({}, n.defaults, h), ye = this, we = l(t), be = e(t),
            Pe = ge.slidee ? e(ge.slidee).eq(0) : be.children().eq(0), Ie = 0, ze = 0,
            Ce = {start: 0, center: 0, end: 0, cur: 0, dest: 0}, Be = e(ge.scrollBar).eq(0), Se = Be.children().eq(0),
            ke = 0, Te = 0, xe = {start: 0, end: 0, cur: 0}, De = e(ge.pagesBar), Ae = 0, Ee = [], qe = 0, Ne = [],
            Oe = {firstItem: 0, lastItem: 0, centerItem: 0, activeItem: null, activePage: 0}, He = new u(be[0]),
            Xe = new u(Pe[0]), Ye = new u(Be[0]), je = new u(Se[0]), Fe = "basic" === ge.itemNav,
            Me = "forceCentered" === ge.itemNav, Le = "centered" === ge.itemNav || Me, Re = !we && (Fe || Le || Me),
            Ue = ge.scrollSource ? e(ge.scrollSource) : be, We = ge.dragSource ? e(ge.dragSource) : be,
            $e = e(ge.forward), Qe = e(ge.backward), Ze = e(ge.prev), Ge = e(ge.next), Je = e(ge.prevPage),
            Ke = e(ge.nextPage), Ve = {}, _e = {}, et = {}, tt = {}, at = {released: 1},
            nt = {last: 0, delta: 0, resetTime: 200}, it = 0, rt = 0, st = 0, ot = 0;
        we || (t = be[0]), ye.initialized = 0, ye.frame = t, ye.slidee = Pe[0], ye.pos = Ce, ye.rel = Oe, ye.items = Ne, ye.pages = Ee, ye.isPaused = 0, ye.options = ge, ye.dragging = at, ye.reload = function () {
            H()
        }, ye.getPos = function (e) {
            if (Re) {
                var t = R(e);
                return -1 !== t && Ne[t]
            }
            var a = Pe.find(e).eq(0);
            if (a[0]) {
                var n = ge.horizontal ? a.offset().left - Pe.offset().left : a.offset().top - Pe.offset().top,
                    i = a[ge.horizontal ? "outerWidth" : "outerHeight"]();
                return {start: n, center: n - Ie / 2 + i / 2, end: n - Ie + i, size: i}
            }
            return !1
        }, ye.moveBy = function (e) {
            tt.speed = e, !at.init && tt.speed && Ce.cur !== (tt.speed > 0 ? Ce.end : Ce.start) && (tt.lastTime = +new Date, tt.startPos = Ce.cur, ee("button"), at.init = 1, pe("moveStart"), y(ot), M())
        }, ye.stop = function () {
            "button" === at.source && (at.init = 0, at.released = 1)
        }, ye.prev = function () {
            ye.activate(null == Oe.activeItem ? 0 : Oe.activeItem - 1)
        }, ye.next = function () {
            ye.activate(null == Oe.activeItem ? 0 : Oe.activeItem + 1)
        }, ye.prevPage = function () {
            ye.activatePage(Oe.activePage - 1)
        }, ye.nextPage = function () {
            ye.activatePage(Oe.activePage + 1)
        }, ye.slideBy = function (e, t) {
            e && (Re ? ye[Le ? "toCenter" : "toStart"](d((Le ? Oe.centerItem : Oe.firstItem) + ge.scrollBy * e, 0, Ne.length)) : X(Ce.dest + e, t))
        }, ye.slideTo = function (e, t) {
            X(e, t)
        }, ye.toStart = function (e, t) {
            L("start", e, t)
        }, ye.toEnd = function (e, t) {
            L("end", e, t)
        }, ye.toCenter = function (e, t) {
            L("center", e, t)
        }, ye.getIndex = R, ye.activate = function (e, t) {
            var a = W(e);
            ge.smart && a !== !1 && (Le ? ye.toCenter(a, t) : a >= Oe.lastItem ? ye.toStart(a, t) : a <= Oe.firstItem ? ye.toEnd(a, t) : K())
        }, ye.activatePage = function (e, t) {
            l(e) && X(Ee[d(e, 0, Ee.length - 1)], t)
        }, ye.resume = function (e) {
            ge.cycleBy && ge.cycleInterval && ("items" !== ge.cycleBy || Ne[0] && null != Oe.activeItem) && !(e < ye.isPaused) && (ye.isPaused = 0, st ? st = clearTimeout(st) : pe("resume"), st = setTimeout(function () {
                switch (pe("cycle"), ge.cycleBy) {
                    case"items":
                        ye.activate(Oe.activeItem >= Ne.length - 1 ? 0 : Oe.activeItem + 1);
                        break;
                    case"pages":
                        ye.activatePage(Oe.activePage >= Ee.length - 1 ? 0 : Oe.activePage + 1)
                }
            }, ge.cycleInterval))
        }, ye.pause = function (e) {
            e < ye.isPaused || (ye.isPaused = e || 100, st && (st = clearTimeout(st), pe("pause")))
        }, ye.toggle = function () {
            ye[st ? "pause" : "resume"]()
        }, ye.set = function (t, a) {
            e.isPlainObject(t) ? e.extend(ge, t) : ge.hasOwnProperty(t) && (ge[t] = a)
        }, ye.add = function (t, a) {
            var n = e(t);
            Re ? (null == a || !Ne[0] || a >= Ne.length ? n.appendTo(Pe) : Ne.length && n.insertBefore(Ne[a].el), null != Oe.activeItem && a <= Oe.activeItem && (_e.active = Oe.activeItem += n.length)) : Pe.append(n), H()
        }, ye.remove = function (t) {
            if (Re) {
                var a = U(t);
                if (a > -1) {
                    qe.eq(a).remove();
                    var n = a === Oe.activeItem;
                    null != Oe.activeItem && a < Oe.activeItem && (_e.active = --Oe.activeItem), H(), n && (_e.active = null, ye.activate(Oe.activeItem))
                }
            } else e(t).remove(), H()
        }, ye.moveAfter = function (e, t) {
            G(e, t, 1)
        }, ye.moveBefore = function (e, t) {
            G(e, t)
        }, ye.on = function (e, t) {
            if ("object" === i(e)) for (var a in e) e.hasOwnProperty(a) && ye.on(a, e[a]); else if ("function" === i(t)) for (var n = e.split(" "), r = 0, s = n.length; s > r; r++) Ve[n[r]] = Ve[n[r]] || [], -1 === J(n[r], t) && Ve[n[r]].push(t); else if ("array" === i(t)) for (var o = 0, l = t.length; l > o; o++) ye.on(e, t[o])
        }, ye.one = function (e, t) {
            function a() {
                t.apply(ye, arguments), ye.off(e, a)
            }

            ye.on(e, a)
        }, ye.off = function (e, t) {
            if (t instanceof Array) for (var a = 0, n = t.length; n > a; a++) ye.off(e, t[a]); else for (var i = e.split(" "), r = 0, s = i.length; s > r; r++) if (Ve[i[r]] = Ve[i[r]] || [], null == t) Ve[i[r]].length = 0; else {
                var o = J(i[r], t);
                -1 !== o && Ve[i[r]].splice(o, 1)
            }
        }, ye.destroy = function () {
            return Ue.add(Se).add(Be).add(De).add($e).add(Qe).add(Ze).add(Ge).add(Je).add(Ke).off("." + g), b.off("keydown", de), Ze.add(Ge).add(Je).add(Ke).removeClass(ge.disabledClass), qe && null != Oe.activeItem && qe.eq(Oe.activeItem).removeClass(ge.activeClass), De.empty(), we || (be.off("." + g), He.restore(), Xe.restore(), Ye.restore(), je.restore(), e.removeData(t, g)), Ne.length = Ee.length = 0, _e = {}, ye.initialized = 0, ye
        }, ye.init = function () {
            if (!ye.initialized) {
                ye.on(m);
                var e = ["overflow", "position"],
                    t = ["position", "webkitTransform", "msTransform", "transform", "left", "top", "width", "height"];
                He.save.apply(He, e), Ye.save.apply(Ye, e), Xe.save.apply(Xe, t), je.save.apply(je, t);
                var a = Se;
                return we || (a = a.add(Pe), be.css("overflow", "hidden"), f || "static" !== be.css("position") || be.css("position", "relative")), f ? v && a.css(f, v) : ("static" === Be.css("position") && Be.css("position", "relative"), a.css({position: "absolute"})), ge.forward && $e.on(S, se), ge.backward && Qe.on(S, se), ge.prev && Ze.on(B, se), ge.next && Ge.on(B, se), ge.prevPage && Je.on(B, se), ge.nextPage && Ke.on(B, se), Ue.on(C, le), Be[0] && Be.on(B, ce), Re && ge.activateOn && be.on(ge.activateOn + "." + g, "*", ue), De[0] && ge.activatePageOn && De.on(ge.activatePageOn + "." + g, "*", fe), We.on(P, {source: "slidee"}, te), Se && Se.on(P, {source: "handle"}, te), b.on("keydown", de), we || (be.on("mouseenter." + g + " mouseleave." + g, ve), be.on("scroll." + g, o)), ye.initialized = 1, H(!0), ge.cycleBy && !we && ye[ge.startPaused ? "pause" : "resume"](), ye
            }
        }
    }

    function i(e) {
        return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase() || "object" : typeof e
    }

    function r(e, t) {
        e.preventDefault(), t && e.stopPropagation()
    }

    function s(t) {
        r(t, 1), e(this).off(t.type, s)
    }

    function o() {
        this.scrollLeft = 0, this.scrollTop = 0
    }

    function l(e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
    }

    function c(e, t) {
        return 0 | E(String(e.css(t)).replace(/[^\-0-9.]/g, ""))
    }

    function d(e, t, a) {
        return t > e ? t : e > a ? a : e
    }

    function u(e) {
        var t = {};
        return t.style = {}, t.save = function () {
            if (e && e.nodeType) {
                for (var a = 0; a < arguments.length; a++) t.style[arguments[a]] = e.style[arguments[a]];
                return t
            }
        }, t.restore = function () {
            if (e && e.nodeType) {
                for (var a in t.style) t.style.hasOwnProperty(a) && (e.style[a] = t.style[a]);
                return t
            }
        }, t
    }

    var f, v, p, h = "sly", m = "Sly", g = h, y = t.cancelAnimationFrame || t.cancelRequestAnimationFrame,
        w = t.requestAnimationFrame, b = e(document), P = "touchstart." + g + " mousedown." + g,
        I = "mousemove." + g + " mouseup." + g, z = "touchmove." + g + " touchend." + g,
        C = (document.implementation.hasFeature("Event.wheel", "3.0") ? "wheel." : "mousewheel.") + g, B = "click." + g,
        S = "mousedown." + g, k = ["INPUT", "SELECT", "BUTTON", "TEXTAREA"], T = [], x = Math.abs, D = Math.sqrt,
        A = Math.pow, E = Math.round, q = Math.max, N = Math.min, O = 0;
    b.on(C, function (e) {
        var t = e.originalEvent[g], a = +new Date;
        (!t || t.options.scrollHijack < a - O) && (O = a)
    }), function (e) {
        function t(e) {
            var t = (new Date).getTime(), n = Math.max(0, 16 - (t - a)), i = setTimeout(e, n);
            return a = t, i
        }

        w = e.requestAnimationFrame || e.webkitRequestAnimationFrame || t;
        var a = (new Date).getTime(), n = e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.clearTimeout;
        y = function (t) {
            n.call(e, t)
        }
    }(window), function () {
        function e(e) {
            for (var n = 0, i = t.length; i > n; n++) {
                var r = t[n] ? t[n] + e.charAt(0).toUpperCase() + e.slice(1) : e;
                if (null != a.style[r]) return r
            }
        }

        var t = ["", "webkit", "moz", "ms", "o"], a = document.createElement("div");
        f = e("transform"), v = e("perspective") ? "translateZ(0) " : ""
    }(), t[m] = n, e.fn[h] = function (t, a) {
        var r, s;
        return e.isPlainObject(t) || (("string" === i(t) || t === !1) && (r = t === !1 ? "destroy" : t, s = Array.prototype.slice.call(arguments, 1)), t = {}), this.each(function (i, o) {
            var l = e.data(o, g);
            l || r ? l && r && l[r] && l[r].apply(l, s) : l = e.data(o, g, new n(o, t, a).init())
        })
    }, n.defaults = {
        slidee: null,
        horizontal: !1,
        itemNav: null,
        itemSelector: null,
        smart: !1,
        activateOn: null,
        activateMiddle: !1,
        scrollSource: null,
        scrollBy: 0,
        scrollHijack: 300,
        scrollTrap: !1,
        dragSource: null,
        mouseDragging: !1,
        touchDragging: !1,
        releaseSwing: !1,
        swingSpeed: .2,
        elasticBounds: !1,
        interactive: null,
        scrollBar: null,
        dragHandle: !1,
        dynamicHandle: !1,
        minHandleSize: 50,
        clickBar: !1,
        syncSpeed: .5,
        pagesBar: null,
        activatePageOn: null,
        pageBuilder: function (e) {
            return "<li>" + (e + 1) + "</li>"
        },
        forward: null,
        backward: null,
        prev: null,
        next: null,
        prevPage: null,
        nextPage: null,
        cycleBy: null,
        cycleInterval: 5e3,
        pauseOnHover: !1,
        startPaused: !1,
        moveBy: 300,
        speed: 0,
        easing: "swing",
        startAt: null,
        keyboardNavBy: null,
        draggedClass: "dragged",
        activeClass: "active",
        disabledClass: "disabled"
    }
}(jQuery, window);