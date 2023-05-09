import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const newNavBarImgCss = "new-nav-bar-img{display:block;height:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:6.25em}img{display:block;width:100%}";

const NewNavBarImg$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h(Host, null, h("img", { src: this.src, alt: this.alt })));
  }
  static get style() { return newNavBarImgCss; }
}, [0, "new-nav-bar-img", {
    "src": [1],
    "alt": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["new-nav-bar-img"];
  components.forEach(tagName => { switch (tagName) {
    case "new-nav-bar-img":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NewNavBarImg$1);
      }
      break;
  } });
}

const NewNavBarImg = NewNavBarImg$1;
const defineCustomElement = defineCustomElement$1;

export { NewNavBarImg, defineCustomElement };
