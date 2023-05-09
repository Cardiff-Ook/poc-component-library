import { Host, h } from '@stencil/core';
export class NewNavBarImg {
  render() {
    return (h(Host, null, h("img", { src: this.src, alt: this.alt })));
  }
  static get is() { return "new-nav-bar-img"; }
  static get originalStyleUrls() {
    return {
      "$": ["new-nav-bar-img.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["new-nav-bar-img.css"]
    };
  }
  static get properties() {
    return {
      "src": {
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
          "text": "Prop: src: string\nThe image source"
        },
        "attribute": "src",
        "reflect": false
      },
      "alt": {
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
          "text": "Prop: alt: string\nThe alternative text for the imafe"
        },
        "attribute": "alt",
        "reflect": false
      }
    };
  }
}
