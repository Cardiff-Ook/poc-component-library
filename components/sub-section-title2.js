import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const subSectionTitleCss = ":host{display:block}";

const SubSectionTitle = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h("h4", { id: "pageTitle", class: "adm-page-title" }, this.pagetitle));
  }
  static get style() { return subSectionTitleCss; }
}, [0, "sub-section-title", {
    "pagetitle": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["sub-section-title"];
  components.forEach(tagName => { switch (tagName) {
    case "sub-section-title":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, SubSectionTitle);
      }
      break;
  } });
}

export { SubSectionTitle as S, defineCustomElement as d };
