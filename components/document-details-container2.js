import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$4 } from './document-details-tile2.js';
import { d as defineCustomElement$3 } from './documents-list2.js';
import { d as defineCustomElement$2 } from './documents-list-item2.js';
import { d as defineCustomElement$1 } from './sub-section-title2.js';

const documentDetailsContainerCss = ":host{display:block}#coverContainerDiv{grid-template-columns:3fr 2fr}";

const DocumentDetailsContainer = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
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
  }
  toggle() {
    var btn = this.element.querySelectorAll('button');
    this.collapsed = !this.collapsed;
    if (!!btn[0])
      if (this.collapsed) {
        btn[0].innerHTML = '<span id="selectedSpan"><span>View Documents</span></span>';
        btn[0].classList.remove("SelectButton_selectButton__2EnMv");
        btn[0].classList.remove("jut__Button__materialIcon");
      }
      else {
        btn[0].innerHTML = '<span id="selectedSpan"><span>Selected</span><i class="mir mi-done jut__Button__icon jut__Button__rightIcon"></i></span>';
        btn[0].classList.add("SelectButton_selectButton__2EnMv");
        btn[0].classList.add("jut__Button__materialIcon");
      }
  }
  componentWillLoad() {
    this.arrayDataWatcher(this.coverdetails);
    this.collapsed = true;
  }
  render() {
    if (this._arrayData !== undefined && this._arrayData.length > 0) {
      return (h("div", { id: "coverContainerIterable", class: "coverContainerGrid" }, this._arrayData.map((cover = {}, index) => h("document-details-tile", { coverdetails: cover, coverindex: index }))));
    }
    else {
      return (h("div", { id: "policyCoverMainContainer", class: "MyPoliciesPage_policyCoverMainContainer__3bkpG" }, h("sub-section-title", { pagetitle: "You have no documents" })));
    }
  }
  get element() { return this; }
  static get watchers() { return {
    "coverdetails": ["arrayDataWatcher"]
  }; }
  static get style() { return documentDetailsContainerCss; }
}, [0, "document-details-container", {
    "coverdetails": [1],
    "collapsed": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["document-details-container", "document-details-tile", "documents-list", "documents-list-item", "sub-section-title"];
  components.forEach(tagName => { switch (tagName) {
    case "document-details-container":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DocumentDetailsContainer);
      }
      break;
    case "document-details-tile":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "documents-list":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "documents-list-item":
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

export { DocumentDetailsContainer as D, defineCustomElement as d };
