'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5ebe992a.js');

const textTitleBarCss = ".tagTitle{font-size:22px;line-height:32px;font-weight:600;text-align:center;color:#0045A0;margin:0 auto;max-width:584px !important;margin-left:auto;margin-right:auto;padding:0 10px}.tagTitle>p{margin-top:15px}";

const TextTitleBar = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { class: "tagTitle" }, index.h("p", null, index.h("slot", null))));
  }
};
TextTitleBar.style = textTitleBarCss;

exports.text_title_bar = TextTitleBar;
