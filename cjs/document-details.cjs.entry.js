'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5ebe992a.js');

const documentDetailsCss = ":host{display:block}#policyContainer{grid-template-columns:3fr 2fr}#policyListComponent{grid-template-columns:3fr 2fr}#policyDetails{grid-template-columns:28px auto}#policyType{text-transform:capitalize}#selectedSpan{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}#renewalBannerContainer{grid-column:1 / -1}";

const DocumentDetails = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
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
      return (index.h("div", { id: "policyCoverMainContainer", class: "MyPoliciesPage_policyCoverMainContainer__3bkpG" }, index.h("div", { id: "policyCoverContainerIterables" }, this._arrayData.map((policy = {}, index$1) => index.h("documents-tile", { policydetails: policy, policyindex: index$1 })))));
    }
    else {
      return (index.h("div", { id: "policyCoverMainContainer", class: "MyPoliciesPage_policyCoverMainContainer__3bkpG" }, index.h("sub-section-title", { pagetitle: "You have no policies" })));
    }
  }
  static get watchers() { return {
    "policies": ["arrayDataWatcher"]
  }; }
};
DocumentDetails.style = documentDetailsCss;

exports.document_details = DocumentDetails;
