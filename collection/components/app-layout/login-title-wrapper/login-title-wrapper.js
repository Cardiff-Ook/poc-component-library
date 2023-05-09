import { Host, h } from '@stencil/core';
export class LoginTitleWrapper {
  render() {
    return (h(Host, { class: "containerBlock" }, h("div", { id: "loginTitleWrapper", class: "tagDiv" }, h("div", { id: "tagIcons" }), h("slot", null))));
  }
  static get is() { return "login-title-wrapper"; }
  static get originalStyleUrls() {
    return {
      "$": ["login-title-wrapper.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["login-title-wrapper.css"]
    };
  }
}
