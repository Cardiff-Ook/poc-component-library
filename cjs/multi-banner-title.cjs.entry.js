'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5ebe992a.js');

const multiBannerTitleCss = ":host{display:block}";

const MultiBannerTitle = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", null, index.h("span", { id: "multiBannerCarRightTitle", class: "MultiBannerCarComponent_multibanner-righttitle__36BKC" }, index.h("slot", null))));
  }
};
MultiBannerTitle.style = multiBannerTitleCss;

exports.multi_banner_title = MultiBannerTitle;
