import { Host, h } from '@stencil/core';
export class MainHeader {
  componentWillLoad() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add(`${this.brand}`);
    body.classList.add('themeRoot');
    body.classList.add('digitalRoot');
  }
  render() {
    return (h(Host, null, h("div", { id: "headerContainer", class: "AdmPageHeaderComponent_headerContainer__3MnMe" }, h("section", { class: "jut__ApplicationHeader__applicationHeaderWrapper appheader" }, h("header", { class: "jut__Header__header jut__Header__large jut__ApplicationHeader__applicationHeader appheader" }, h("div", { class: "jut__Header__headerContainer jut__Header__headerContent" }, h("slot", { name: "page-logo" }))), h("slot", { name: "nav-bar" }), h("slot", { name: "header-bar" })))));
  }
  static get is() { return "main-header"; }
  static get originalStyleUrls() {
    return {
      "$": ["main-header.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["main-header.css"]
    };
  }
  static get properties() {
    return {
      "brand": {
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
          "text": "Prop: brand: string\nThe brand currently being browsed"
        },
        "attribute": "brand",
        "reflect": false
      }
    };
  }
}
