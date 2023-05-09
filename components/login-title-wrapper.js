import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const loginTitleWrapperCss = ":host{display:block}#loginTitleWrapper{margin-top:30px}#tagIcons{background-image:url(/assets/icon-strip.png);background-repeat:no-repeat;background-position:center;background-size:auto;height:40px;width:185px}";

const LoginTitleWrapper$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h(Host, { class: "containerBlock" }, h("div", { id: "loginTitleWrapper", class: "tagDiv" }, h("div", { id: "tagIcons" }), h("slot", null))));
  }
  static get style() { return loginTitleWrapperCss; }
}, [4, "login-title-wrapper"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["login-title-wrapper"];
  components.forEach(tagName => { switch (tagName) {
    case "login-title-wrapper":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, LoginTitleWrapper$1);
      }
      break;
  } });
}

const LoginTitleWrapper = LoginTitleWrapper$1;
const defineCustomElement = defineCustomElement$1;

export { LoginTitleWrapper, defineCustomElement };
