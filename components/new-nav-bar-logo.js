import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const newNavBarLogoCss = "new-nav-bar-logo{-ms-flex:1 1 auto;flex:1 1 auto}";

const NewNavBarLogo$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h(Host, null, h("ng-content", null, h("slot", null))));
  }
  static get style() { return newNavBarLogoCss; }
}, [4, "new-nav-bar-logo"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["new-nav-bar-logo"];
  components.forEach(tagName => { switch (tagName) {
    case "new-nav-bar-logo":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, NewNavBarLogo$1);
      }
      break;
  } });
}

const NewNavBarLogo = NewNavBarLogo$1;
const defineCustomElement = defineCustomElement$1;

export { NewNavBarLogo, defineCustomElement };
