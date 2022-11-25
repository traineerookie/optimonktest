import ComponentElement from "./ComponentElement";
import LinkElement from "./LinkElement";

export class CreateElement {
  typeinstance;
  constructor(tagname, data, props) {
    this.tagname = tagname;
    this.data = data;
    this.initElement(props);
  }

  #checkElementType(props) {
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
