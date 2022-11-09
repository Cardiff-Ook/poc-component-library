import { h } from '@stencil/core';
export class PolicyManagementTile {
  render() {
    const imageSrc = `fa fa-${this.productImage} icon`;
    return (h("div", null, h("div", { class: "managementTile" }, h("a", { href: this.linkText }, h("i", { id: "statusIcon", class: imageSrc }), h("h2", { class: "option" }, this.titleText)), h("slot", null))));
  }
  static get is() { return "policy-management-tile"; }
  static get originalStyleUrls() {
    return {
      "$": ["policy-management-tile.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["policy-management-tile.css"]
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
      },
      "titleText": {
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
          "text": "The title for the tile"
        },
        "attribute": "title-text",
        "reflect": false
      }
    };
  }
}
