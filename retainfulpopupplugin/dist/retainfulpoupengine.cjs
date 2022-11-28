"use strict";
var s = Object.defineProperty;
var r = (n, e, t) =>
  e in n
    ? s(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (n[e] = t);
var i = (n, e, t) => (r(n, typeof e != "symbol" ? e + "" : e, t), t);
class l {
  constructor(e) {
    i(this, "selectorClicks");
    this.clickEvent(e), (this.selectorClicks = { name: "", time: 0 });
  }
  clickEvent(e) {
    let t = {};
    switch (this.checkSelector(e)) {
      case e.startsWith("."):
        (t.type = "Collection"),
          (t.nodeElement = document.getElementsByClassName(e.replace(".", "")));
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
        ? Array.from(t.nodeElement).map((o) => {
            this.eventListener(o);
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
class a {
  constructor() {
    i(this, "watch", !1);
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
class d {
  constructor(e) {
    i(this, "percentage");
    i(this, "currentPercentage");
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
class u {
  constructor(e) {
    i(this, "seconds");
    i(this, "secondsactive");
    i(this, "timeid");
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
function h() {
  return {
    SpecificClickEvents: l,
    MouseEventExitIntent: a,
    ScrollEvent: d,
    InSecondEvent: u,
  };
}
const {
  SpecificClickEvents: m,
  MouseEventExitIntent: g,
  ScrollEvent: w,
  InSecondEvent: E,
} = h();
class p {
  constructor(e, t) {
    i(this, "data");
    i(this, "instance");
    (this.instance = t), (this.data = e);
  }
  validateRules() {
    this.data.id &&
      this.data.events.map((e) => {
        e.trigger === "exit-intent" && new g(),
          e.trigger === "selector" && new m(e.rules.activity),
          e.trigger === "scroll-event" && new w(20),
          e.trigger === "inseconds-event" && new E(2);
      });
  }
}
const f = document.addEventListener("DOMContentLoaded", async (n) => {
  let e;
  function t() {
    return new Promise((o) => {
      if (window.RetainfulPopUp !== void 0)
        return o((e = window.RetainfulPopUp));
      const c = new MutationObserver(() => {
        window.RetainfulPopUp !== void 0 &&
          (o((e = window.RetainfulPopUp)), c.disconnect());
      });
      c.observe(document.body, { childList: !0 });
    });
  }
  await t(),
    typeof e == "object"
      ? ((e = new p(e.data, e)), e.validateRules())
      : console.warn("Popup not initialized");
});
module.exports = f;
