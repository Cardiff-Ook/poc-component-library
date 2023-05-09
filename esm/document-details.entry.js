import { r as registerInstance, h } from './index-76cd28ee.js';

const documentDetailsCss = ":host{display:block}#policyContainer{grid-template-columns:3fr 2fr}#policyListComponent{grid-template-columns:3fr 2fr}#policyDetails{grid-template-columns:28px auto}#policyType{text-transform:capitalize}#selectedSpan{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}#renewalBannerContainer{grid-column:1 / -1}";

const DocumentDetails = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
      return (h("div", { id: "policyCoverMainContainer", class: "MyPoliciesPage_policyCoverMainContainer__3bkpG" }, h("div", { id: "policyCoverContainerIterables" }, this._arrayData.map((policy = {}, index) => h("documents-tile", { policydetails: policy, policyindex: index })))));
    }
    else {
      return (h("div", { id: "policyCoverMainContainer", class: "MyPoliciesPage_policyCoverMainContainer__3bkpG" }, h("sub-section-title", { pagetitle: "You have no policies" })));
    }
  }
  static get watchers() { return {
    "policies": ["arrayDataWatcher"]
  }; }
};
DocumentDetails.style = documentDetailsCss;

export { DocumentDetails as document_details };
