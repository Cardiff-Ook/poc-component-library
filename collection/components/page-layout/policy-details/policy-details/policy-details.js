import { h } from '@stencil/core';
export class PolicyDetails {
  arrayDataWatcher(newValue) {
    if (typeof newValue === 'string') {
      this._arrayData = JSON.parse(newValue);
    }
    else {
      this._arrayData = newValue;
    }
    if (this._arrayData !== undefined && this._arrayData.length > 0) {
      this._arrayData.forEach(obj => (obj.imageSrc = `/assets/claim-cover-${obj.policytype}.svg`));
    }
  }
  componentWillLoad() {
    this.arrayDataWatcher(this.policies);
  }
  render() {
    if (this._arrayData !== undefined && this._arrayData.length > 0) {
      return (h("div", { id: "policyCoverMainContainer", class: "MyPoliciesPage_policyCoverMainContainer__3bkpG" }, h("div", { id: "policyCoverContainerIterables" }, this._arrayData.map((policy = {}, index) => h("policy-tile", { policydetails: policy, policyindex: index })))));
    }
    else {
      return (h("div", { id: "policyCoverMainContainer", class: "MyPoliciesPage_policyCoverMainContainer__3bkpG" }, h("sub-section-title", { pagetitle: "You have no policies" })));
    }
  }
  static get is() { return "policy-details"; }
  static get originalStyleUrls() {
    return {
      "$": ["policy-details.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["policy-details.css"]
    };
  }
  static get properties() {
    return {
      "policies": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Array<PolicyDataInterface> | string",
          "resolved": "PolicyDataInterface[] | string",
          "references": {
            "Array": {
              "location": "global"
            },
            "PolicyDataInterface": {
              "location": "import",
              "path": "../../../../interfaces/policyDataInterface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Prop: policies: Array<PolicyDataInterface>\nArray containing all the Policy Data"
        },
        "attribute": "policies",
        "reflect": false
      }
    };
  }
  static get watchers() {
    return [{
        "propName": "policies",
        "methodName": "arrayDataWatcher"
      }];
  }
}
