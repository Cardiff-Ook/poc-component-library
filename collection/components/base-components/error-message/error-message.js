import { Host, h } from '@stencil/core';
export class ErrorMessage {
  constructor() {
    /**
     * Prop: errorMessage: string
     * The error message to display
     */
    this.errorMessage = '';
  }
  dataWatcher(newValue) {
    console.log("Watching: ", newValue);
    this._errorMessage = newValue;
  }
  componentWillLoad() {
    this.dataWatcher(this.errorMessage);
  }
  render() {
    return (h(Host, null, h("div", { "aria-live": "polite", id: "loginErrorMessage", class: "jss1098" }, h("div", { class: "markdownWrapper" }, h("span", { class: "markdownParagraph" }, h("span", { class: "markdownText" }, this._errorMessage))))));
  }
  static get is() { return "error-message"; }
  static get originalStyleUrls() {
    return {
      "$": ["error-message.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["error-message.css"]
    };
  }
  static get properties() {
    return {
      "errorMessage": {
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
          "text": "Prop: errorMessage: string\nThe error message to display"
        },
        "attribute": "error-message",
        "reflect": false,
        "defaultValue": "''"
      }
    };
  }
  static get watchers() {
    return [{
        "propName": "errorMessage",
        "methodName": "dataWatcher"
      }];
  }
}
