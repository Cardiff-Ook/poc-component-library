import { r as registerInstance, h } from './index-998450d5.js';

const headerTextCss = ".title{margin-top:0;text-align:left;margin-bottom:24px;color:#4A4643!important;font-size:16px;font-style:normal;font-family:jaf-facitweb, Helvetica, Arial;font-weight:600;line-height:24px;word-wrap:break-word}";

const HeaderText = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("h1", { class: "title", title: "" }, h("div", { class: "markdownWrapper" }, h("span", { class: "markdownParagraph" }, h("span", { class: "markdownText" }, h("slot", null))))));
  }
};
HeaderText.style = headerTextCss;

export { HeaderText as header_text };
