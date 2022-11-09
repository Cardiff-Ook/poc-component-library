import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const loginFooterCss = ":host{display:block}";

const LoginFooter$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h(Host, { class: "containerBlock" }, h("div", { id: "loginFooterWrapper", class: "containerBlock" }, h("slot", { name: "footer-title" }), h("slot", { name: "products" }))));
  }
  static get style() { return loginFooterCss; }
}, [1, "login-footer"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["login-footer"];
  components.forEach(tagName => { switch (tagName) {
    case "login-footer":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, LoginFooter$1);
      }
      break;
  } });
}

const LoginFooter = LoginFooter$1;
const defineCustomElement = defineCustomElement$1;

export { LoginFooter, defineCustomElement };
