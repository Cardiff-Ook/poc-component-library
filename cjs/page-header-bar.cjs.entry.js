'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5ebe992a.js');

const pageHeaderBarCss = ":host{display:block}";

const PageHeaderBar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { id: "headerMessage", class: "HeaderMessageComponent_headerMessage__1KWJA" }, index.h("div", { id: "headerMessageSaluteContainer", class: "headerMessageSaluteContainer HeaderMessageComponent_hader-message-salute__2dK9B", "data-cs-mask": "" }, "Hi ", this.name), index.h("div", { id: "headerMessagePageContainer", class: "headerMessagePageContainer HeaderMessageComponent_hader-message-page__RxyvD" }, index.h("slot", { name: "message" }))));
  }
};
PageHeaderBar.style = pageHeaderBarCss;

exports.page_header_bar = PageHeaderBar;
