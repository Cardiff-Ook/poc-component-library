'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5ebe992a.js');

const mainHeaderCss = ":host{display:block}";

const MainHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentWillLoad() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add(`${this.brand}`);
    body.classList.add('themeRoot');
    body.classList.add('digitalRoot');
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { id: "headerContainer", class: "AdmPageHeaderComponent_headerContainer__3MnMe" }, index.h("section", { class: "jut__ApplicationHeader__applicationHeaderWrapper appheader" }, index.h("header", { class: "jut__Header__header jut__Header__large jut__ApplicationHeader__applicationHeader appheader" }, index.h("div", { class: "jut__Header__headerContainer jut__Header__headerContent" }, index.h("slot", { name: "page-logo" }))), index.h("slot", { name: "nav-bar" }), index.h("slot", { name: "header-bar" })))));
  }
};
MainHeader.style = mainHeaderCss;

exports.main_header = MainHeader;
