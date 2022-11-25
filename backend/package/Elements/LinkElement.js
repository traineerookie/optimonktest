export default class LinkElement {
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
