import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './quote-button2.js';

const multiCarBannerCss = ":host{display:block}";

const MultiCarBanner$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h("div", { id: "multiBannerAdmiralCarContainer" }, h("div", { id: "multiBannerCar", class: "MultiBannerCarComponent_multibanner-wrapper-car__2iSip MultiBannerCarComponent_multibanner-wrapper-common__2KzMl", "data-testid": "multiBannerCarComponent" }, h("img", { id: "multiBannerCarLeftBox", class: "MultiBannerCarComponent_multibanner-leftbox__B3O_F" }), h("div", { id: "multiBannerCarRightBoxContainer", class: "MultiBannerCarComponent_multibanner-rightbox-container__2iYZc" }, h("div", { id: "multiBannerCarRightBox", class: "MultiBannerCarComponent_multibanner-rightbox__20ogs" }, h("slot", { name: "banner-title" }), h("slot", { name: "banner-header" }), h("slot", { name: "bullet-points" })), h("quote-button", null, "Get A Quote")))));
  }
  static get style() { return multiCarBannerCss; }
}, [4, "multi-car-banner"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["multi-car-banner", "quote-button"];
  components.forEach(tagName => { switch (tagName) {
    case "multi-car-banner":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MultiCarBanner$1);
      }
      break;
    case "quote-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const MultiCarBanner = MultiCarBanner$1;
const defineCustomElement = defineCustomElement$1;

export { MultiCarBanner, defineCustomElement };
