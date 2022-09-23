import { r as registerInstance, h, e as Host } from './index-0240b1cc.js';

const loginFooterCss = ":host{display:block}";

const LoginFooter = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, { class: "containerBlock" }, h("div", { id: "loginFooterWrapper", class: "containerBlock" }, h("slot", { name: "footer-title" }), h("slot", { name: "products" }))));
  }
};
LoginFooter.style = loginFooterCss;

export { LoginFooter as login_footer };
