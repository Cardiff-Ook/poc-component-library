import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$5 } from './account-details2.js';
import { d as defineCustomElement$4 } from './main-page-contents2.js';
import { d as defineCustomElement$3 } from './policies-container2.js';
import { d as defineCustomElement$2 } from './sub-section-title2.js';

const accountSettingsCss = ":host{display:block}";

const AccountSettings$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h("main-page-contents", null, h("policies-container", { slot: "page-contents" }, h("sub-section-title", { pagetitle: "Your Account Information", slot: "page-title" }), h("account-details", { slot: "account-details", user: this.user }))));
  }
  static get style() { return accountSettingsCss; }
}, [0, "account-settings", {
    "user": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["account-settings", "account-details", "main-page-contents", "policies-container", "sub-section-title"];
  components.forEach(tagName => { switch (tagName) {
    case "account-settings":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, AccountSettings$1);
      }
      break;
    case "account-details":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "main-page-contents":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "policies-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "sub-section-title":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const AccountSettings = AccountSettings$1;
const defineCustomElement = defineCustomElement$1;

export { AccountSettings, defineCustomElement };
