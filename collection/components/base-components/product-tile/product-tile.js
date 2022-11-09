import { h, getAssetPath } from '@stencil/core';
export class ProductTile {
  render() {
    const imageSrc = getAssetPath(`/assets/${this.productImage}`);
    return (h("div", null, h("div", { class: "productTile" }, h("a", { href: this.linkText }, h("img", { src: imageSrc })))));
  }
  static get is() { return "product-tile"; }
  static get originalStyleUrls() {
    return {
      "$": ["product-tile.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["product-tile.css"]
    };
  }
  static get properties() {
    return {
      "linkText": {
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
          "text": "The link for the product"
        },
        "attribute": "link-text",
        "reflect": false
      },
      "productImage": {
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
          "text": "The image to display"
        },
        "attribute": "product-image",
        "reflect": false
      }
    };
  }
}
