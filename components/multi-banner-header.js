import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const multiBannerHeaderCss = ":host{display:block}";

const MultiBannerHeader$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h("div", null, h("span", { class: "MultiBannerCarComponent_caveat__3TayJ", id: "multiBannerCarRightHeader" }, h("slot", null))));
  }
  static get style() { return multiBannerHeaderCss; }
}, [4, "multi-banner-header"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["multi-banner-header"];
  components.forEach(tagName => { switch (tagName) {
    case "multi-banner-header":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MultiBannerHeader$1);
      }
      break;
  } });
}

const MultiBannerHeader = MultiBannerHeader$1;
const defineCustomElement = defineCustomElement$1;

export { MultiBannerHeader, defineCustomElement };
