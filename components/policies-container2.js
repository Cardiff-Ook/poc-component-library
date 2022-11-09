import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const policiesContainerCss = ":host{display:block}";

const PoliciesContainer = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h("div", { id: "policyContainer" }, h("div", null), h("slot", { name: "page-title" }), h("slot", { name: "account-details" }), h("slot", { name: "policy-details" })));
  }
  static get style() { return policiesContainerCss; }
}, [4, "policies-container"]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["policies-container"];
  components.forEach(tagName => { switch (tagName) {
    case "policies-container":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, PoliciesContainer);
      }
      break;
  } });
}

export { PoliciesContainer as P, defineCustomElement as d };
