import { h, Host, getAssetPath } from '@stencil/core';
export class PageHeader {
  componentWillLoad() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add(`${this.brand}`);
  }
  render() {
    const imageSrc = getAssetPath(`/assets/${this.brand}logo.svg`);
    const imageAltText = `${this.brand} logo placeholder`;
    return (h(Host, { class: "containerBlock" }, h("header", null, h("div", { class: "logoContainer" }, h("a", { href: "/myaccount/login/" }, h("div", { id: "loginHeaderLogo", class: "jss591" }, h("img", { id: "loginLogo", src: imageSrc, alt: imageAltText })))))));
  }
  static get is() { return "login-header"; }
  static get originalStyleUrls() {
    return {
      "$": ["login-header.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["login-header.css"]
    };
  }
  static get assetsDirs() { return ["./assets"]; }
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
          "text": "The brand"
        },
        "attribute": "brand",
        "reflect": false
      }
    };
  }
}
