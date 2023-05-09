import { h } from '@stencil/core';
export class HeaderText {
  render() {
    return (h("h1", { class: "title", title: "" }, h("div", { class: "markdownWrapper" }, h("span", { class: "markdownParagraph" }, h("span", { class: "markdownText" }, h("slot", null))))));
  }
  static get is() { return "header-text"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["header-text.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["header-text.css"]
    };
  }
}
