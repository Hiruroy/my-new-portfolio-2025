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
