import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './documents-list2.js';
import { d as defineCustomElement$1 } from './documents-list-item2.js';

const documentDetailsTileCss = ":host{display:block}";

const DocumentDetailsTile = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  arrayDataWatcher(newValue) {
    if (typeof newValue === 'string') {
      this._coverDetails = JSON.parse(newValue);
    }
    else {
      this._coverDetails = newValue;
    }
    if (this._coverDetails !== undefined)
      this._coverDetails.imageSrc = `/assets/claim-cover-${this._coverDetails.policytype}.svg`;
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
    this._tileId = `riskcoverList${this.coverindex}`;
  }
  render() {
    return (h("div", { id: this._tileId }, h("div", null, h("div", { class: "jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapMedium CoverList_coverContainerDiv__3qiY1", id: "coverContainerDiv" }, h("div", { id: "detailsContainerDiv" }, h("div", { id: "detailsAndIconContainer", class: "CoverList_detailsAndIconContainer__1UIZA" }, h("div", { id: "coverIconLabelDiv", class: "CoverList_coverIconLabelDiv__v-dgX" }, h("img", { src: "/assets/claim-cover-car.svg", id: "coverIconImg", class: "CoverList_coverIconImg__2T5IO" })), h("div", { id: "coverDetails", class: "CoverList_coverDetails__6uRwg" }, h("div", { id: "coverLabelDiv", class: "CoverList_coverLabelDiv__R-tnB" }, h("div", { id: "coverTitleContainer", class: "" }, h("span", { id: "coverLabel" }, "COVER"), h("span", { id: "statusWithDate" }, h("span", { id: "coverStatusText", class: "CoverList_coverStatusText__1iTUz" }), h("span", { id: "coverStatusDate" })))), h("div", { id: "coverDetailDiv", class: "CoverList_coverDetailDiv__2a8_A" }, h("span", { id: "coverDetail", class: "CoverList_coverDetailText__1uT1F", "data-cs-mask": "" }, this._coverDetails.coverList[0].vehicleData.vehicleMake, " ", this._coverDetails.coverList[0].vehicleData.vehicleModel)), h("div", { id: "coverRegPostCodeDiv", class: "CoverList_coverRegPostCodeDiv__1RZPc" }, h("span", { id: "coverRegPostCode", class: "CoverList_coverRegPostCodeText__LkqLE", "data-cs-mask": "" }, "Reg No: ", this._coverDetails.coverList[0].vehicleData.vehicleReg))))), h("button", { type: "button", class: "digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary", id: "viewButton", "data-testid": "viewButton", onClick: this.toggle.bind(this) }, h("span", { id: "selectedSpan" }, h("span", null, "View Documents"))))), h("div", { id: "content", hidden: this.collapsed }, h("div", { id: "documentDetailsContainerDiv", class: "YourDocumentDetails_documentDetailsContainerDiv__3QGVF" }, h("div", { id: "yourDocumentsHeadingDiv", class: "YourDocumentDetails_yourDocumentsHeadingDivHeading__1jenA" }, h("h3", { id: "yourDocumentCoverHeading", class: "YourDocumentDetails_title__OP-fp" }, "Your Documents"), h("p", { id: "yourDocumentCoverSubtitle", class: "YourDocumentDetails_subtitle__37vIr" }, "Download your desired documents from the list below.")), h("div", { id: "riskCoverDetailsContainer", class: "RiskCoverDetails_riskCoverDetailsContainer__2_wY7 RiskCoverDetails_sectionContainer___g21v" }, h("documents-list", { coverdetails: this.coverdetails }))))));
  }
  get element() { return this; }
  static get watchers() { return {
    "coverdetails": ["arrayDataWatcher"]
  }; }
  static get style() { return documentDetailsTileCss; }
}, [0, "document-details-tile", {
    "coverdetails": [1],
    "coverindex": [2],
    "collapsed": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["document-details-tile", "documents-list", "documents-list-item"];
  components.forEach(tagName => { switch (tagName) {
    case "document-details-tile":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DocumentDetailsTile);
      }
      break;
    case "documents-list":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "documents-list-item":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { DocumentDetailsTile as D, defineCustomElement as d };
