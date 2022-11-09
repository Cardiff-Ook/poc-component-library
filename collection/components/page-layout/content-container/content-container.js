import { Host, h } from '@stencil/core';
export class ContentContainer {
  render() {
    return (h(Host, { class: "containerBlock" }, h("div", { id: "contentContainer" }, h("div", { id: "contentWrapper" }, h("div", { id: "content" }, h("slot", null))))));
  }
  static get is() { return "content-container"; }
  static get originalStyleUrls() {
    return {
      "$": ["content-container.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["content-container.css"]
    };
  }
}
