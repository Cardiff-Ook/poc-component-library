import { h } from '@stencil/core';
export class PageHeaderBar {
  render() {
    return (h("div", { id: "headerMessage", class: "HeaderMessageComponent_headerMessage__1KWJA" }, h("div", { id: "headerMessageSaluteContainer", class: "headerMessageSaluteContainer HeaderMessageComponent_hader-message-salute__2dK9B", "data-cs-mask": "" }, "Hi ", this.name), h("div", { id: "headerMessagePageContainer", class: "headerMessagePageContainer HeaderMessageComponent_hader-message-page__RxyvD" }, h("slot", { name: "message" }))));
  }
  static get is() { return "page-header-bar"; }
  static get originalStyleUrls() {
    return {
      "$": ["page-header-bar.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["page-header-bar.css"]
    };
  }
  static get properties() {
    return {
      "name": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Prop: name: string\nThe user name being displayed"
        },
        "attribute": "name",
        "reflect": false
      }
    };
  }
}
