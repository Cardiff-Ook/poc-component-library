import { h } from '@stencil/core';
export class MyComponent {
  constructor() {
    /**
     * If true, the button is displayed as disabled
     */
    this.disabled = false;
    /**
     * Define the available options in the drop-down list
     */
    this.options = [];
  }
  render() {
    return (h("div", null, h("label", { htmlFor: this.name }, this.label), h("select", { name: this.name, id: this.name, disabled: this.disabled }, this.options.map(o => (h("option", { value: o.value }, o.displayText))))));
  }
  static get is() { return "my-component"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["my-component.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["my-component.css"]
    };
  }
  static get properties() {
    return {
      "label": {
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
          "text": "The text which is shown as label"
        },
        "attribute": "label",
        "reflect": false
      },
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
          "text": "Is needed to reference the form data after the form is submitted"
        },
        "attribute": "name",
        "reflect": true
      },
      "disabled": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If true, the button is displayed as disabled"
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      },
      "options": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "CompOption[]",
          "resolved": "CompOption[]",
          "references": {
            "CompOption": {
              "location": "local"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Define the available options in the drop-down list"
        },
        "defaultValue": "[]"
      }
    };
  }
}
