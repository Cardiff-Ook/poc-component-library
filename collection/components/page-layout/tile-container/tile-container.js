import { h } from '@stencil/core';
export class TileContainer {
  componentWillLoad() {
    this._containerStyle = `tileContainer ${this.type}`;
  }
  render() {
    return (h("div", { class: this._containerStyle }, h("slot", null)));
  }
  static get is() { return "tile-container"; }
  static get originalStyleUrls() {
    return {
      "$": ["tile-container.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["tile-container.css"]
    };
  }
  static get properties() {
    return {
      "type": {
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
          "text": "Prop: type: tring\nSets the tyle according to the received type (options / products)"
        },
        "attribute": "type",
        "reflect": false
      }
    };
  }
}
