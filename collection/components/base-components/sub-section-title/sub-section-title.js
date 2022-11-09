import { h } from '@stencil/core';
export class SubSectionTitle {
  render() {
    return (h("h4", { id: "pageTitle", class: "adm-page-title" }, this.pagetitle));
  }
  static get is() { return "sub-section-title"; }
  static get originalStyleUrls() {
    return {
      "$": ["sub-section-title.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["sub-section-title.css"]
    };
  }
  static get properties() {
    return {
      "pagetitle": {
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
          "text": "The Page Title to display"
        },
        "attribute": "pagetitle",
        "reflect": false
      }
    };
  }
}
