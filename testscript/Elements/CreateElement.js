export default class CreateElement {
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
      default:
        break;
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
