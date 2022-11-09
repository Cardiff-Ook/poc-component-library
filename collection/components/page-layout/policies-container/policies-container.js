import { h } from '@stencil/core';
export class PoliciesContainer {
  render() {
    return (h("div", { id: "policyContainer" }, h("div", null), h("slot", { name: "page-title" }), h("slot", { name: "account-details" }), h("slot", { name: "policy-details" })));
  }
  static get is() { return "policies-container"; }
  static get originalStyleUrls() {
    return {
      "$": ["policies-container.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["policies-container.css"]
    };
  }
}
