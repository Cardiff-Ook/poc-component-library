import { h } from '@stencil/core';
export class TextTitleBar {
  render() {
    return (h("div", { class: "tagTitle" }, h("p", null, h("slot", null))));
  }
  static get is() { return "text-title-bar"; }
  static get originalStyleUrls() {
    return {
      "$": ["text-title-bar.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["text-title-bar.css"]
    };
  }
}
