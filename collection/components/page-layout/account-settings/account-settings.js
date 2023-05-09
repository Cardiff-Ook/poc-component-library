import { h } from '@stencil/core';
export class AccountSettings {
  render() {
    return (h("main-page-contents", null, h("policies-container", { slot: "page-contents" }, h("sub-section-title", { pagetitle: "Your Account Information", slot: "page-title" }), h("account-details", { slot: "account-details", user: this.user }))));
  }
  static get is() { return "account-settings"; }
  static get originalStyleUrls() {
    return {
      "$": ["account-settings.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["account-settings.css"]
    };
  }
  static get properties() {
    return {
      "user": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Array<UserDataInterface> | string",
          "resolved": "UserDataInterface[] | string",
          "references": {
            "Array": {
              "location": "global"
            },
            "UserDataInterface": {
              "location": "import",
              "path": "../../../interfaces/userDataInterface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Prop: user: object\nUser Account details object"
        },
        "attribute": "user",
        "reflect": false
      }
    };
  }
}
