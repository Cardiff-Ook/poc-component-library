'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5ebe992a.js');

const headerTextCss = ".title{margin-top:0;text-align:left;margin-bottom:24px;color:#4A4643!important;font-size:16px;font-style:normal;font-family:jaf-facitweb, Helvetica, Arial;font-weight:600;line-height:24px;word-wrap:break-word}";

const HeaderText = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("h1", { class: "title", title: "" }, index.h("div", { class: "markdownWrapper" }, index.h("span", { class: "markdownParagraph" }, index.h("span", { class: "markdownText" }, index.h("slot", null))))));
  }
};
HeaderText.style = headerTextCss;

exports.header_text = HeaderText;
