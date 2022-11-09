import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './cover-details-tile2.js';
import { d as defineCustomElement$2 } from './details-container2.js';
import { d as defineCustomElement$1 } from './sub-section-title2.js';

const coverDetailsContainerCss = ":host{display:block}#coverContainerDiv{grid-template-columns:3fr 2fr}";

const CoverDetailsContainer = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
  get element() { return this; }
  static get watchers() { return {
    "coverdetails": ["arrayDataWatcher"]
  }; }
  static get style() { return coverDetailsContainerCss; }
}, [0, "cover-details-container", {
    "coverdetails": [1],
    "collapsed": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["cover-details-container", "cover-details-tile", "details-container", "sub-section-title"];
  components.forEach(tagName => { switch (tagName) {
    case "cover-details-container":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, CoverDetailsContainer);
      }
      break;
    case "cover-details-tile":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "details-container":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "sub-section-title":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { CoverDetailsContainer as C, defineCustomElement as d };
