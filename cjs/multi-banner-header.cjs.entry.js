'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5ebe992a.js');

const multiBannerHeaderCss = ":host{display:block}";

const MultiBannerHeader = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", null, index.h("span", { class: "MultiBannerCarComponent_caveat__3TayJ", id: "multiBannerCarRightHeader" }, index.h("slot", null))));
  }
};
MultiBannerHeader.style = multiBannerHeaderCss;

exports.multi_banner_header = MultiBannerHeader;
