'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5ebe992a.js');

const loginFooterCss = ":host{display:block}";

const LoginFooter = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, { class: "containerBlock" }, index.h("div", { id: "loginFooterWrapper", class: "containerBlock" }, index.h("slot", { name: "footer-title" }), index.h("slot", { name: "products" }))));
  }
};
LoginFooter.style = loginFooterCss;

exports.login_footer = LoginFooter;
