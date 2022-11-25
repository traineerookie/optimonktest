export default class ComponentElement {
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
