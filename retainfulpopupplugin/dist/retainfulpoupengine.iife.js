var retainfulpoupengine = (function () {
  "use strict";
  var f = Object.defineProperty;
  var p = (o, i, c) =>
    i in o
      ? f(o, i, { enumerable: !0, configurable: !0, writable: !0, value: c })
      : (o[i] = c);
  var n = (o, i, c) => (p(o, typeof i != "symbol" ? i + "" : i, c), c);
  class o {
    constructor(e) {
      n(this, "selectorClicks");
      this.clickEvent(e), (this.selectorClicks = { name: "", time: 0 });
    }
    clickEvent(e) {
      let t = {};
      switch (this.checkSelector(e)) {
        case e.startsWith("."):
          (t.type = "Collection"),
            (t.nodeElement = document.getElementsByClassName(
              e.replace(".", "")
            ));
          break;
        case e.startsWith("#"):
          (t.type = "Element"),
            (t.nodeElement = document.getElementById(e.replace("#", "")));
          break;
        default:
          (t.type = "Collection"),
            (t.nodeElement = document.getElementsByTagName(e));
          break;
      }
      this.checkSelector(e) &&
        (t.type === "Collection"
          ? Array.from(t.nodeElement).map((r) => {
              this.eventListener(r);
            })
          : t.type === "Element" && this.eventListener(t.nodeElement));
    }
    eventListener(e) {
      e.addEventListener("pointerdown", (t) => {
        (this.selectorClicks.name = e.nodeName),
          ++this.selectorClicks.time,
          console.log(this.selectorClicks);
      });
    }
    checkSelector(e) {
      return document.querySelectorAll(e).length > 0;
    }
  }
  class i {
    constructor() {
      n(this, "watch", !1);
      this.watchMouseCursorOut(), this.watchMouseCursorIn();
    }
    watchMouseCursorOut() {
      document.addEventListener("pointerout", (e) => {
        console.log("out"), this.updatAlert(!0);
      });
    }
    watchMouseCursorIn() {
      document.addEventListener("pointermove", (e) => {
        console.log("in"), this.updatAlert(!1);
      });
    }
    updatAlert(e) {
      this.watch = e;
    }
  }
  class c {
    constructor(e) {
      n(this, "percentage");
      n(this, "currentPercentage");
      this.scroll(), (this.percentage = e);
    }
    percentageStatus() {
      return Number(this.calPrecentage) === Number(this.percentage);
    }
    scroll() {
      window.addEventListener("scroll", (e) => {
        this.calPrecentage();
      });
    }
    calPrecentage() {
      this.currentPercentage = Math.floor(
        ((this._get_window_Yscroll() + this._get_window_height()) /
          this._get_doc_height()) *
          100
      );
    }
    _get_window_height() {
      return (
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight ||
        0
      );
    }
    _get_window_Yscroll() {
      return (
        window.pageYOffset ||
        document.body.scrollTop ||
        document.documentElement.scrollTop ||
        0
      );
    }
    _get_doc_height() {
      return Math.max(
        document.body.scrollHeight || 0,
        document.documentElement.scrollHeight || 0,
        document.body.offsetHeight || 0,
        document.documentElement.offsetHeight || 0,
        document.body.clientHeight || 0,
        document.documentElement.clientHeight || 0
      );
    }
  }
  class a {
    constructor(e) {
      n(this, "seconds");
      n(this, "secondsactive");
      n(this, "timeid");
      (this.seconds = e), (this.secondsactive = !1), this.calSeconds();
    }
    calSeconds() {
      this.timeid = setTimeout(() => {
        this.secondsactive = !0;
      }, Number(this.seconds.toString().padEnd(4, "0000")));
    }
    closeTimeid() {
      this.timeid ? clearTimeout(this.timeid) : console.warn("No Time id");
    }
  }
  function d() {
    return {
      SpecificClickEvents: o,
      MouseEventExitIntent: i,
      ScrollEvent: c,
      InSecondEvent: a,
    };
  }
  const {
    SpecificClickEvents: u,
    MouseEventExitIntent: h,
    ScrollEvent: m,
    InSecondEvent: g,
  } = d();
  class w {
    constructor(e, t) {
      n(this, "data");
      n(this, "instance");
      (this.instance = t), (this.data = e);
    }
    validateRules() {
      this.data.id &&
        this.data.events.map((e) => {
          e.trigger === "exit-intent" && new h(),
            e.trigger === "selector" && new u(e.rules.activity),
            e.trigger === "scroll-event" && new m(20),
            e.trigger === "inseconds-event" && new g(2);
        });
    }
  }
  return document.addEventListener("DOMContentLoaded", async (s) => {
    let e;
    function t() {
      return new Promise((r) => {
        if (window.RetainfulPopUp !== void 0)
          return r((e = window.RetainfulPopUp));
        const l = new MutationObserver(() => {
          window.RetainfulPopUp !== void 0 &&
            (r((e = window.RetainfulPopUp)), l.disconnect());
        });
        l.observe(document.body, { childList: !0 });
      });
    }
    await t(),
      typeof e == "object"
        ? ((e = new w(e.data, e)), e.validateRules())
        : console.warn("Popup not initialized");
  });
})();
