import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const pageLogoCss = ":host{display:block}#title_image{height:58px !important}";

const PageLogo$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    const imageSrc = `/assets/${this.brand}logo.svg`;
    return (h(Host, null, h("a", { class: "jut__ApplicationHeader__applicationLogoTitleLink active", href: "../index.html" }, h("span", { class: "jut__LogoTitle__logoTitle" }, h("img", { id: "title_image", class: "jut__LogoTitle__logo jut__ApplicationHeader__applicationLogo", alt: "logo", src: imageSrc })))));
  }
  static get style() { return pageLogoCss; }
}, [0, "page-logo", {
    "brand": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["page-logo"];
  components.forEach(tagName => { switch (tagName) {
    case "page-logo":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, PageLogo$1);
      }
      break;
  } });
}

const PageLogo = PageLogo$1;
const defineCustomElement = defineCustomElement$1;

export { PageLogo, defineCustomElement };
