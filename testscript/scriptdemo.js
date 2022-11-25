// const CreateElement = require("./package/Elements/CreateElement");
import CreateElement from "./Elements/CreateElement.js";
class RetainfulPopUp {
  data;
  constructor() {
    this.data = {
      id: 123,
      url: "http://localhost:5173/",
      component:
        '<div class="modal">\n        <p class="message">Look at this fancy pop-up</p>\n        <div class="options">\n          <button class="btn">Yes</button>\n          <button class="btn">No</button>\n        </div>\n      </div>',
      styles:
        "\n        .modal {\n          position: absolute;\n          left: 50%;\n          top: 50%;\n          transform: translate(-50%, -50%);\n          width: auto;\n          display: inline-flex;\n          flex-direction: column;\n          align-items: center;\n          padding: 1.6rem 3rem;\n          border: 3px solid black;\n          border-radius: 5px;\n          background: white;\n          box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.2);\n        }\n        .message {\n          font-size:1.1rem;\n          margin-bottom: 1.6rem;\n          margin-top: 0;\n        }\n        .btn {\n          color:inherit;\n            font-family:inherit;\n          font-size: inherit;\n          background: white;\n          padding: 0.3rem 3.4rem;\n          border: 3px solid black;\n          margin-right: 2.6rem;\n          box-shadow: 0 0 0 black;\n          transition: all 0.2s;\n        }\n        \n        .btn:last-child {\n          margin: 0;\n        }\n        \n        .btn:hover {\n          box-shadow: 0.4rem 0.4rem 0 black;\n          transform: translate(-0.4rem, -0.4rem);\n        }\n        \n        .btn:active {\n          box-shadow: 0 0 0 black;\n          transform: translate(0, 0);\n        }\n        \n        .options {\n          display: flex;\n          flex-direction: row;\n          justify-content: space-between;\n        }",
      events: [
        { id: 1, trigger: "exit-intent", rules: [] },
        {
          id: 2,
          trigger: "selector",
          rules: [{ type: "selector", activity: "body" }],
        },
      ],
      final:
        '<div class="modal" style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); width: auto; display: inline-flex; flex-direction: column; align-items: center; padding: 1.6rem 3rem; border: 3px solid black; border-radius: 5px; background: white; box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.2);">\n        <p class="message" style="font-size: 1.1rem; margin-bottom: 1.6rem; margin-top: 0;">Look at this fancy pop-up</p>\n        <div class="options" style="display: flex; flex-direction: row; justify-content: space-between;">\n          <button class="btn" style="color: inherit; font-family: inherit; font-size: inherit; background: white; padding: 0.3rem 3.4rem; border: 3px solid black; margin-right: 2.6rem; box-shadow: 0 0 0 black; transition: all 0.2s;">Yes</button>\n          <button class="btn" style="color: inherit; font-family: inherit; font-size: inherit; background: white; padding: 0.3rem 3.4rem; border: 3px solid black; margin-right: 2.6rem; box-shadow: 0 0 0 black; transition: all 0.2s; margin: 0;">No</button>\n        </div>\n      </div>',
    };
  }

  dataget() {
    return this.data;
  }

  init(data) {
    let linkfirst = new CreateElement("link", data.final, {
      href: "http://localhost:8080/static/style.css",
      rel: "stylesheet",
      type: "text/css",
    });
    if (linkfirst.typeinstance.nodeName === "LINK") {
      const link = linkfirst.typeinstance;
      link.onload = function () {
        const divThird = new CreateElement("div", data.final, {
          data: data.final,
          type: "div",
          id: "retainful-popup",
        });
      };
    }
  }
}

// Loads 2 times without this if
(window.onload = function () {
  if (document.readyState === "complete") {
    let d = new RetainfulPopUp();
    d.init(d.data);
  }
})();

// Loads once with error
// document.addEventListener("DOMContentLoaded", function () {
//   let d = new RetainfulPopUp();
//   d.init();
// });
