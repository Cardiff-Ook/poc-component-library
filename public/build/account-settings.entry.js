import { r as registerInstance, h } from './index-cd495fd3.js';

const accountSettingsCss = ":host{display:block}";

const AccountSettings = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("main-page-contents", null, h("policies-container", { slot: "page-contents" }, h("sub-section-title", { pagetitle: "Your Account Information", slot: "page-title" }), h("account-details", { slot: "account-details", user: this.user }))));
  }
};
AccountSettings.style = accountSettingsCss;

export { AccountSettings as account_settings };
