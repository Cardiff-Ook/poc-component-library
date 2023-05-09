import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const multiBannerTitleCss = ":host{display:block}";

const MultiBannerTitle$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h("div", null, h("span", { id: "multiBannerCarRightTitle", class: "MultiBannerCarComponent_multibanner-righttitle__36BKC" }, h("slot", null))));
  }
  static get style() { return multiBannerTitleCss; }
}, [4, "multi-banner-title"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["multi-banner-title"];
  components.forEach(tagName => { switch (tagName) {
    case "multi-banner-title":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MultiBannerTitle$1);
      }
      break;
  } });
}

const MultiBannerTitle = MultiBannerTitle$1;
const defineCustomElement = defineCustomElement$1;

export { MultiBannerTitle, defineCustomElement };
