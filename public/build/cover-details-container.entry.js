import { r as registerInstance, h, g as getElement } from './index-e3478a0e.js';

const coverDetailsContainerCss = ":host{display:block}#coverContainerDiv{grid-template-columns:3fr 2fr}";

const CoverDetailsContainer = class {
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
  toggle() {
    var btn = this.element.querySelectorAll('button');
    this.collapsed = !this.collapsed;
    if (!!btn[0])
      btn[0].textContent = (this.collapsed) ? "View Summary" : "Hide Summary";
  }
  componentWillLoad() {
    console.log(this.coverdetails);
    this.arrayDataWatcher(this.coverdetails);
    this.collapsed = true;
  }
  render() {
    if (this._arrayData !== undefined && this._arrayData.length > 0) {
      return (h("div", { id: "coverContainerIterable", class: "coverContainerGrid" }, this._arrayData.map((cover = {}, index) => h("cover-details-tile", { coverdetails: cover, coverindex: index }))));
    }
    else {
      return (h("div", { id: "policyCoverMainContainer", class: "MyPoliciesPage_policyCoverMainContainer__3bkpG" }, h("sub-section-title", { pagetitle: "You have no policies" })));
    }
  }
  get element() { return getElement(this); }
  static get watchers() { return {
    "coverdetails": ["arrayDataWatcher"]
  }; }
};
CoverDetailsContainer.style = coverDetailsContainerCss;

export { CoverDetailsContainer as cover_details_container };
