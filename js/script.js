!(function (e) {
  "use strict";
  e(".change-price-plan li a").on("click", function (t) {
    t.preventDefault(),
      e(".change-price-plan li a").removeClass("active"),
      e(this).addClass("active"),
      "monthly" == e(this).attr("data-type")
        ? (e(".text-price-standard").html("49"),
          e(".text-type-standard").html("/ month"),
          e(".text-price-business").html("69"),
          e(".text-type-business").html("/ month"),
          e(".text-price-enterprise").html("99"),
          e(".text-type-enterprise").html("/ month"))
        : (e(".text-price-standard").html("441"),
          e(".text-type-standard").html("/ year"),
          e(".text-price-business").html("621"),
          e(".text-type-business").html("/ year"),
          e(".text-price-enterprise").html("891"),
          e(".text-type-enterprise").html("/ year"));
  }),
    e(window).on("load", function () {
      var t, s, n, i, o;
      e("#preloader").delay(0).fadeOut(),
        (function () {
          var e = document.querySelector(".btn-scroll-top");
          if (null != e) {
            var t = document.querySelector(".btn-scroll-top path"),
              s = t.getTotalLength();
            (t.style.transition = t.style.WebkitTransition = "none"),
              (t.style.strokeDasharray = s + " " + s),
              (t.style.strokeDashoffset = s),
              t.getBoundingClientRect(),
              (t.style.transition = t.style.WebkitTransition =
                "stroke-dashoffset 10ms linear"),
              window.addEventListener("scroll", function (n) {
                var i =
                    document.body.scrollTop ||
                    document.documentElement.scrollTop,
                  o =
                    document.documentElement.scrollHeight -
                    document.documentElement.clientHeight,
                  l = s - (i * s) / o;
                (t.style.strokeDashoffset = l),
                  (document.body.scrollTop ||
                    document.documentElement.scrollTop) >= 50
                    ? e.classList.add("active-progress")
                    : e.classList.remove("active-progress");
              }),
              e.addEventListener("click", function (e) {
                e.preventDefault(),
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
              });
          }
        })(),
        e(".menu-tigger").on("click", function () {
          return (
            e(".offCanvas__info, .offCanvas__overly").addClass("active"), !1
          );
        }),
        e(".menu-close, .offCanvas__overly").on("click", function () {
          e(".offCanvas__info, .offCanvas__overly").removeClass("active");
        }),
        AOS.init({
          duration: 1e3,
          mirror: !0,
          once: !0,
          disable: "mobile",
        }),
        e(".popup-image").magnificPopup({
          type: "image",
          gallery: {
            enabled: !0,
          },
        }),
        e(".popup-video").magnificPopup({
          type: "iframe",
        }),
        new WOW({
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: !1,
          live: !0,
        }).init(),
        e("input")
          .focus(function () {
            e(this).closest("div.input-group").addClass("focus");
          })
          .blur(function () {
            e(this).closest("div.input-group").removeClass("focus");
          }),
        e("textarea")
          .focus(function () {
            e(this).closest("div.input-group").addClass("focus");
          })
          .blur(function () {
            e(this).closest("div.input-group").removeClass("focus");
          }),
        e("select")
          .focus(function () {
            e(this).closest("div.input-group").addClass("focus");
          })
          .blur(function () {
            e(this).closest("div.input-group").removeClass("focus");
          }),
        (function () {
          var t = e(".burger-icon"),
            s =
              (e(".burger-icon-2"),
              e(".close-canvas"),
              e(".mobile-menu-close")),
            n = e(".mobile-header-active"),
            i = (e(".sidebar-canvas-wrapper"), e("body"));
          i.prepend('<div class="body-overlay-1"></div>'),
            t.on("click", function (e) {
              t.toggleClass("burger-close"),
                e.preventDefault(),
                n.toggleClass("sidebar-visible"),
                i.toggleClass("mobile-menu-active");
            }),
            s.on("click", function () {
              n.removeClass("sidebar-visible"),
                i.removeClass("mobile-menu-active");
            });
          var o = e(".mobile-menu"),
            l = o.find(".sub-menu");
          l
            .parent()
            .prepend(
              '<span class="menu-expand"><i class="arrow-small-down"></i></span>'
            ),
            l.slideUp(),
            o.on("click", "li a, li .menu-expand", function (t) {
              var s = e(this);
              s
                .parent()
                .attr("class")
                .match(
                  /\b(menu-item-has-children|has-children|has-sub-menu)\b/
                ) &&
                ("#" === s.attr("href") || s.hasClass("menu-expand")) &&
                (t.preventDefault(),
                s.siblings("ul:visible").length
                  ? (s.parent("li").removeClass("active"),
                    s.siblings("ul").slideUp())
                  : (s.parent("li").addClass("active"),
                    s
                      .closest("li")
                      .siblings("li")
                      .removeClass("active")
                      .find("li")
                      .removeClass("active"),
                    s.closest("li").siblings("li").find("ul:visible").slideUp(),
                    s.siblings("ul").slideDown()));
            });
        })(),
        (t = aat),
        (s = t.ScrollObserver),
        (n = t.valueAtPercentage),
        (i = document.querySelector(".cards")),
        (o = document.querySelectorAll(".card-custom")),
        i &&
          o.length &&
          (i.style.setProperty("--cards-count", o.length),
          i.style.setProperty(
            "--card-height",
            "".concat(o[0].clientHeight, "px")
          ),
          Array.from(o).forEach(function (e, t) {
            var i = 20 + 20 * t;
            if (
              ((e.style.paddingTop = "".concat(i, "px")), t !== o.length - 1)
            ) {
              var l = 1 - 0.1 * (o.length - 1 - t),
                a = o[t + 1],
                r = e.querySelector(".card__inner");
              s.Element(a, {
                offsetTop: i,
                offsetBottom: window.innerHeight - e.clientHeight,
              }).onScroll(function (e) {
                var t = e.percentageY;
                (r.style.scale = n({
                  from: 1,
                  to: l,
                  percentage: t,
                })),
                  (r.style.filter = "brightness(".concat(
                    n({
                      from: 1,
                      to: 0.6,
                      percentage: t,
                    }),
                    ")"
                  ));
              });
            }
          }));
    });
})(jQuery);