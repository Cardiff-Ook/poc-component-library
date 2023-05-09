'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5ebe992a.js');

const accountSettingsCss = ":host{display:block}";

const AccountSettings = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("main-page-contents", null, index.h("policies-container", { slot: "page-contents" }, index.h("sub-section-title", { pagetitle: "Your Account Information", slot: "page-title" }), index.h("account-details", { slot: "account-details", user: this.user }))));
  }
};
AccountSettings.style = accountSettingsCss;

exports.account_settings = AccountSettings;
