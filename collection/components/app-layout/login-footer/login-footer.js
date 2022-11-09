import { Host, h } from '@stencil/core';
export class LoginFooter {
  render() {
    return (h(Host, { class: "containerBlock" }, h("div", { id: "loginFooterWrapper", class: "containerBlock" }, h("slot", { name: "footer-title" }), h("slot", { name: "products" }))));
  }
  static get is() { return "login-footer"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["login-footer.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["login-footer.css"]
    };
  }
}
