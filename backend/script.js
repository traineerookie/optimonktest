class RetainfulPopUp {
    #data;
  constructor() {
    this.#data = {{data}};
  }

  static get #dataget() {
    return this.#data;
  }

  createElementRetainful() {
    if (document.readyState === "complete") {
     let div = document.createElement('div')
     div.innerHTML=this.#data.final;
     document.body.appendChild(div)
     div.style.display='none'
    }
  }
};

(window.onload = function () {
    if (document.readyState==='complete') {
        let d = new RetainfulPopUp();
        d.createElementRetainful();
    }
})();


