import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const mainHeaderCss = ":host{display:block}";

const MainHeader$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  componentWillLoad() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add(`${this.brand}`);
    body.classList.add('themeRoot');
    body.classList.add('digitalRoot');
  }
  render() {
    return (h(Host, null, h("div", { id: "headerContainer", class: "AdmPageHeaderComponent_headerContainer__3MnMe" }, h("section", { class: "jut__ApplicationHeader__applicationHeaderWrapper appheader" }, h("header", { class: "jut__Header__header jut__Header__large jut__ApplicationHeader__applicationHeader appheader" }, h("div", { class: "jut__Header__headerContainer jut__Header__headerContent" }, h("slot", { name: "page-logo" }))), h("slot", { name: "nav-bar" }), h("slot", { name: "header-bar" })))));
  }
  static get style() { return mainHeaderCss; }
}, [4, "main-header", {
    "brand": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["main-header"];
  components.forEach(tagName => { switch (tagName) {
    case "main-header":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MainHeader$1);
      }
      break;
  } });
}

const MainHeader = MainHeader$1;
const defineCustomElement = defineCustomElement$1;

export { MainHeader, defineCustomElement };
