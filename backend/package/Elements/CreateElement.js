module.exports = class CreateElement {
  constructor(tagname, data, props) {
    this.tagname = tagname;
    this.data = data;
    this.createElement(props);
  }

  checkElementType(props) {
    switch (true) {
      case this.tagname === "link":
        return new LinkElement(props.href, props.rel, props.type, this.tagname);
      case this.tagname === "div":
        return new ComponentElement(this.data, props.type, props.id);
      default:
        break;
    }
  }

  createElement(props) {
    let type = this.checkElementType(props);
    let typeinstance;
    if (type.componenttype === "link") {
      typeinstance = type.addElementLink();
      console.log(typeinstance);
    }
    // let link = document.createElement(this.tagname);
    // link.href = "http://localhost:8080/static/style.css";
    // link.rel = "stylesheet";
    // link.type = "text/css";
    // document.head.appendChild(link);
    // link.addEventListener("load", () => {
    //   let div = document.createElement("div");
    //   div.innerHTML = this.#data.final;
    //   div.id = "retainful-popup";
    //   document.body.appendChild(div);
    // });
  }
};

class LinkElement {
  constructor(href, rel, type, componenttype) {
    this.href = href;
    this.rel = rel;
    this.type = type;
    this.componenttype = componenttype;
  }

  addElementLink() {
    let link = global.document.createElement(this.tagname);
    link.href = this.href;
    link.rel = this.rel;
    link.type = this.type;
    document.head.appendChild(link);
    return link;
  }
}

class ComponentElement {
  constructor(component, type, id) {
    this.component = component;
    this.type = type;
    this.id = id;
  }

  addElementComponent() {
    let div = document.createElement("div");
    div.innerHTML = this.component;
    div.id = this.id;
    document.body.appendChild(div);
    return div;
  }
}
