(function () {
  'use strict';

  class CreateElement {
    typeinstance;
    constructor(tagname, data, props) {
      this.tagname = tagname;
      this.data = data;
      this.initElement(props);
    }

    checkElementType(props) {
      switch (true) {
        case this.tagname === "link":
          return new LinkElement(props.href, props.rel, props.type, this.tagname);
        case this.tagname === "div":
          return new ComponentElement(
            this.data,
            props.type,
            props.id,
            this.tagname
          );
      }
    }

    initElement(props) {
      let type = this.checkElementType(props);
      // let typeinstance;
      if (type.componenttype === "link") {
        this.typeinstance = type.addElementLink();
        return this.typeinstance;
      }

      if (type.componenttype === "div") {
        this.typeinstance = type.addElementComponent();
        return this.typeinstance;
      }
    }
  }

  class LinkElement {
    constructor(href, rel, type, componenttype) {
      this.href = href;
      this.rel = rel;
      this.type = type;
      this.componenttype = componenttype;
    }

    addElementLink() {
      const link = document.createElement(this.componenttype);
      link.href = this.href;
      link.rel = this.rel;
      link.type = this.type;
      document.head.appendChild(link);
      return link;
    }
  }

  class ComponentElement {
    constructor(component, type, id, componenttype) {
      this.component = component;
      this.type = type;
      this.id = id;
      this.componenttype = componenttype;
    }

    addElementComponent() {
      let div = document.createElement(this.type);
      div.innerHTML = this.component;
      div.id = this.id;
      document.body.appendChild(div);
      return div;
    }
  }

  // const CreateElement = require("./package/Elements/CreateElement");
  class RetainfulPopUp {
    data;
    constructor(data) {
      this.data = data;
    }

    dataget() {
      return this.data;
    }

    init(data) {
      let linkfirst = new CreateElement("link", data.final, {
        href: "http://localhost:8082/static/style.css",
        rel: "stylesheet",
        type: "text/css",
      });
      if (linkfirst.typeinstance.nodeName === "LINK") {
        const link = linkfirst.typeinstance;
        link.onload = function () {
          new CreateElement("div", data.final, {
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
      let d = new RetainfulPopUp({{data}});
      d.init(d.data);
    }
  })();

  // Loads once with error
  // document.addEventListener("DOMContentLoaded", function () {
  //   let d = new RetainfulPopUp();
  //   d.init();
  // });

})();

