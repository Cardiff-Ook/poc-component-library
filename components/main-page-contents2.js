import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const mainPageContentsCss = ":host{display:block}";

const MainPageContents = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h("main", { class: "jut__Main__main admMain" }, h("div", { class: "jut__Container__container jut__Main__container" }, h("div", { id: "pageContainer", class: "page MyPoliciesPage_claimHomePage__3e-L3" }, h("slot", { name: "page-contents" })))));
  }
  static get style() { return mainPageContentsCss; }
}, [4, "main-page-contents"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["main-page-contents"];
  components.forEach(tagName => { switch (tagName) {
    case "main-page-contents":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MainPageContents);
      }
      break;
  } });
}

export { MainPageContents as M, defineCustomElement as d };
