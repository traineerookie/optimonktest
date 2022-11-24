class RetainfulPopUp {
  #data;
  constructor() {
    this.#data = {{ data }};
  }

  #dataget() {
    return this.#data;
  }

  createElementRetainful() {
    if (document.readyState === "complete") {
      let link = document.createElement("link");
      link.href = "http://localhost:8080/static/style.css";
      link.rel = "stylesheet";
      link.type = "text/css";
      document.head.appendChild(link)
      link.addEventListener('load',()=>{
        let div = document.createElement("div");
                div.innerHTML = this.#data.final;
                div.id = "retainful-popup";
                document.body.appendChild(div);
      })
    }
  }
};

(window.onload = function () {
  if (document.readyState === 'complete') {
    let d = new RetainfulPopUp();
    d.createElementRetainful();
  }
})();


