"use strict";
!(function (e) {
  var t = {
    direction: "prev",
    mode: "horizontal",
    speed: 1,
    delay: 30,
    onCarouselTickerLoad: function () {},
  };
  e.fn.carouselTicker = function (i) {
    if (0 == this.length) return this;
    if (this.length > 1)
      return (
        this.each(function () {
          e(this).carouselTicker(i);
        }),
        this
      );
    var s = {},
      n = this,
      o = e(this),
      r = function () {
        (s.settings = e.extend({}, t, i)),
          (s.intervalPointer = null),
          (s.directionSwitcher = "prev" === s.settings.direction ? -1 : 1),
          (s.itemsWidth = 0),
          (s.childsWidth = 0),
          (s.itemsHeight = 0),
          (s.childsHeight = 0),
          (s.$list = o.children("ul")),
          (s.$items = s.$list.children("li")),
          (s.isInitialize = !1),
          (s.isMousemove = !1),
          (s.$parent = o.parent()),
          (s.wrapCls = "carouselTicker__wrap"),
          (s.listCls = "carouselTicker__list"),
          (s.loaderCls = "carouselTicker__loader"),
          (s.cloneCls = "carouselTicker__clone"),
          (s.touch = "ontouchstart" in document.documentElement),
          (s.eventTypes = {
            mousedown: s.touch ? "touchstart" : "mousedown",
            mousemove: s.touch ? "touchmove" : "mousemove",
            mouseup: s.touch ? "touchend" : "mouseup",
          }),
          c();
      },
      c = function () {
        function t() {
          o.children().hasClass(s.wrapCls) ||
            (e("<div class='" + s.loaderCls + "'></div>").appendTo(o),
            o.find("." + s.wrapCls).css({ position: "relative" }),
            s.$list.wrap(
              "<div class='carouselTicker__wrap' style='position: relative; overflow: hidden; user-select: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none;'></div>"
            ),
            s.$items.clone().addClass(s.cloneCls).appendTo(s.$list),
            s.$list.css({ position: "relative" }),
            (s.isInitialize = !0),
            s.settings.onCarouselTickerLoad(),
            l());
        }
        "horizontal" === s.settings.mode
          ? (h(),
            s.itemsWidth > s.$parent.width() &&
              (o.find("." + s.wrapCls).css({ width: s.$parent.width() + "px" }),
              s.$list.css({ width: 2 * s.itemsWidth, left: 0 }),
              t()))
          : "vertical" === s.settings.mode &&
            ((s.itemsHeight = 0),
            s.$items.each(function () {
              var t = e(this);
              t.hasClass(s.cloneCls) || (s.itemsHeight += t.outerHeight(!0));
            }),
            s.itemsHeight > s.$parent.height() &&
              (o
                .find("." + s.wrapCls)
                .css({ height: s.$parent.height() + "px" }),
              s.$list.css({ height: 2 * s.itemsHeight, top: 0 }),
              t())),
          s.isInitialize &&
            o.on("dragstart", function (e) {
              if (
                "IMG" == e.target.nodeName.toUpperCase() ||
                "A" == e.target.nodeName.toUpperCase()
              )
                return !1;
            });
      },
      l = function () {
        var t;
        o.find("." + s.loaderCls).length && o.find("." + s.loaderCls).remove(),
          (s.intervalPointer = setInterval(function () {
            a();
          }, s.settings.delay)),
          o.on("mouseover", u),
          o.on("mouseleave", d),
          (t = !1),
          s.$list.on(s.eventTypes.mousedown, function (i) {
            var n = i.clientX || event.touches[0].pageX,
              o = i.clientY || event.touches[0].pageY,
              r = e(this),
              c = parseFloat(e(this).css("left")),
              l = parseFloat(e(this).css("top"));
            e(i.target).off("click"),
              clearInterval(s.intervalPointer),
              (s.intervalPointer = !1),
              (t = !0),
              r.on(s.eventTypes.mousemove, function (i) {
                var a = i.clientX || event.touches[0].pageX,
                  h = i.clientY || event.touches[0].pageY,
                  u = n - a,
                  d = o - h;
                s.touch &&
                  e(document).on("touchmove", function (e) {
                    e.preventDefault();
                  }),
                  "horizontal" === s.settings.mode
                    ? (s.directionSwitcher = u >= 0 ? -1 : 1)
                    : "vertical" === s.settings.mode &&
                      (s.directionSwitcher = d >= 0 ? -1 : 1),
                  (s.isMousemove = !0),
                  t &&
                    ("horizontal" === s.settings.mode
                      ? (c - u >= 0 &&
                          1 === s.directionSwitcher &&
                          (r.css("left", "-=" + s.itemsWidth),
                          (c = -s.itemsWidth),
                          (n = i.clientX || event.touches[0].pageX),
                          (u = 0)),
                        c - u <= -s.itemsWidth &&
                          -1 === s.directionSwitcher &&
                          (r.css("left", 0),
                          (c = 0),
                          (u = 0),
                          (n = i.clientX || event.touches[0].pageX)),
                        r.css("left", c - u + "px"))
                      : "vertical" === s.settings.mode &&
                        (l - d >= 0 &&
                          1 === s.directionSwitcher &&
                          (r.css("top", "-=" + s.itemsHeight),
                          (l = -s.itemsHeight),
                          (o = i.clientY || event.touches[0].pageY),
                          (d = 0)),
                        l - d <= -s.itemsHeight &&
                          -1 === s.directionSwitcher &&
                          (r.css("top", 0),
                          (l = 0),
                          (d = 0),
                          (o = i.clientY || event.touches[0].pageY)),
                        r.css("top", l - d + "px")));
              });
          }),
          s.$list.on(s.eventTypes.mouseup, function (i) {
            var n = e(i.target);
            (n.attr("href") || (n.parents().attr("href") && s.isMousemove)) &&
              (i.preventDefault(),
              n.on("click", function (e) {
                e.preventDefault();
              })),
              (t = !1),
              (s.isMousemove = !1),
              (s.settings.direction =
                1 === s.directionSwitcher ? "next" : "prev"),
              e(this).off(s.eventTypes.mousemove),
              s.touch && e(document).off("touchmove"),
              s.intervalPointer && clearInterval(s.intervalPointer),
              s.touch &&
                (s.intervalPointer = setInterval(function () {
                  a();
                }, s.settings.delay));
          });
      },
      a = function () {
        var e = "horizontal" === s.settings.mode ? "left" : "top",
          t = "horizontal" === s.settings.mode ? s.itemsWidth : s.itemsHeight;
        s.$list.css(e, "+=" + s.directionSwitcher * s.settings.speed + "px"),
          "prev" === s.settings.direction &&
            Math.abs(parseInt(s.$list.css(e))) >= t &&
            s.$list.css(e, 0),
          "next" === s.settings.direction &&
            parseInt(s.$list.css(e)) >= 0 &&
            s.$list.css(e, -t + "px");
      };
    function h() {
      (s.itemsWidth = 0),
        s.$items.each(function () {
          var t = e(this),
            i = this.currentStyle || window.getComputedStyle(this),
            n = parseFloat(i.marginLeft) + parseFloat(i.marginRight);
          t.hasClass(s.cloneCls) ||
            (s.itemsWidth += this.getBoundingClientRect().width + n);
        });
    }
    function u() {
      ("horizontal" === s.settings.mode
        ? s.itemsWidth > s.$parent.width()
        : s.itemsHeight > s.$parent.height()) &&
        (clearInterval(s.intervalPointer), (s.intervalPointer = !1));
    }
    function d() {
      var e =
        "horizontal" === s.settings.mode
          ? s.itemsWidth > s.$parent.width()
          : s.itemsHeight > s.$parent.height();
      if (
        (s.isMousemove &&
          (s.$list.off(s.eventTypes.mousemove),
          s.$list.trigger(s.eventTypes.mouseup)),
        e)
      ) {
        if (s.intervalPointer) return;
        s.intervalPointer = setInterval(function () {
          a();
        }, s.settings.delay);
      }
    }
    return (
      (n.resizeTicker = function () {
        h(),
          s.itemsWidth > s.$parent.width()
            ? s.isInitialize || r()
            : s.isInitialize && n.destructor();
      }),
      (n.stop = function () {
        o.off("mouseover", u),
          o.off("mouseleave", d),
          clearInterval(s.intervalPointer),
          (s.intervalPointer = !1);
      }),
      (n.run = function () {
        l();
      }),
      (n.destructor = function () {
        if (
          (o.find("." + s.cloneCls).remove(), o.find("." + s.wrapCls).length)
        ) {
          var e = o.find("." + s.listCls);
          e.unwrap(),
            e.css({ left: "auto", position: "static", width: "auto" }),
            o.css({ width: "auto", position: "static" });
        }
        n.stop(), (s.isInitialize = !1);
      }),
      (n.reloadCarouselTicker = function (e) {
        null != e && (i = e), n.destructor(), r();
      }),
      (n.next = function () {
        n.stop(),
          (s.settings.direction = "next"),
          (s.directionSwitcher = "prev" === s.settings.direction ? -1 : 1),
          n.run();
      }),
      (n.prev = function () {
        n.stop(),
          (s.settings.direction = "prev"),
          (s.directionSwitcher = "prev" === s.settings.direction ? -1 : 1),
          n.run();
      }),
      "loading" === document.readyState
        ? e(window).on("load", function () {
            r();
          })
        : r(),
      this
    );
  };
})(jQuery);
