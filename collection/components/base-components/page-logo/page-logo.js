import { Host, h } from '@stencil/core';
export class PageLogo {
  render() {
    const imageSrc = `/assets/${this.brand}logo.svg`;
    return (h(Host, null, h("a", { class: "jut__ApplicationHeader__applicationLogoTitleLink active", href: "../index.html" }, h("span", { class: "jut__LogoTitle__logoTitle" }, h("img", { id: "title_image", class: "jut__LogoTitle__logo jut__ApplicationHeader__applicationLogo", alt: "logo", src: imageSrc })))));
  }
  static get is() { return "page-logo"; }
  static get originalStyleUrls() {
    return {
      "$": ["page-logo.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["page-logo.css"]
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
          "text": "Prop: brand: string\nWhichever brand currently being browsed"
        },
        "attribute": "brand",
        "reflect": false
      }
    };
  }
}
