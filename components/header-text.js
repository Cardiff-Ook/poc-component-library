import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const headerTextCss = ".title{margin-top:0;text-align:left;margin-bottom:24px;color:#4A4643!important;font-size:16px;font-style:normal;font-family:jaf-facitweb, Helvetica, Arial;font-weight:600;line-height:24px;word-wrap:break-word}";

const HeaderText$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    return (h("h1", { class: "title", title: "" }, h("div", { class: "markdownWrapper" }, h("span", { class: "markdownParagraph" }, h("span", { class: "markdownText" }, h("slot", null))))));
  }
  static get style() { return headerTextCss; }
}, [1, "header-text"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["header-text"];
  components.forEach(tagName => { switch (tagName) {
    case "header-text":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, HeaderText$1);
      }
      break;
  } });
}

const HeaderText = HeaderText$1;
const defineCustomElement = defineCustomElement$1;

export { HeaderText, defineCustomElement };
