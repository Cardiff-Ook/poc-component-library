'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5ebe992a.js');

const documentDetailsContainerCss = ":host{display:block}#coverContainerDiv{grid-template-columns:3fr 2fr}";

const DocumentDetailsContainer = class {
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
      return (index.h("div", { id: "coverContainerIterable", class: "coverContainerGrid" }, this._arrayData.map((cover = {}, index$1) => index.h("document-details-tile", { coverdetails: cover, coverindex: index$1 }))));
    }
    else {
      return (index.h("div", { id: "policyCoverMainContainer", class: "MyPoliciesPage_policyCoverMainContainer__3bkpG" }, index.h("sub-section-title", { pagetitle: "You have no documents" })));
    }
  }
  get element() { return index.getElement(this); }
  static get watchers() { return {
    "coverdetails": ["arrayDataWatcher"]
  }; }
};
DocumentDetailsContainer.style = documentDetailsContainerCss;

const documentDetailsTileCss = ":host{display:block}";

const DocumentDetailsTile = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h("div", { id: this._tileId }, index.h("div", null, index.h("div", { class: "jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapMedium CoverList_coverContainerDiv__3qiY1", id: "coverContainerDiv" }, index.h("div", { id: "detailsContainerDiv" }, index.h("div", { id: "detailsAndIconContainer", class: "CoverList_detailsAndIconContainer__1UIZA" }, index.h("div", { id: "coverIconLabelDiv", class: "CoverList_coverIconLabelDiv__v-dgX" }, index.h("img", { src: "/assets/claim-cover-car.svg", id: "coverIconImg", class: "CoverList_coverIconImg__2T5IO" })), index.h("div", { id: "coverDetails", class: "CoverList_coverDetails__6uRwg" }, index.h("div", { id: "coverLabelDiv", class: "CoverList_coverLabelDiv__R-tnB" }, index.h("div", { id: "coverTitleContainer", class: "" }, index.h("span", { id: "coverLabel" }, "COVER"), index.h("span", { id: "statusWithDate" }, index.h("span", { id: "coverStatusText", class: "CoverList_coverStatusText__1iTUz" }), index.h("span", { id: "coverStatusDate" })))), index.h("div", { id: "coverDetailDiv", class: "CoverList_coverDetailDiv__2a8_A" }, index.h("span", { id: "coverDetail", class: "CoverList_coverDetailText__1uT1F", "data-cs-mask": "" }, this._coverDetails.coverList[0].vehicleData.vehicleMake, " ", this._coverDetails.coverList[0].vehicleData.vehicleModel)), index.h("div", { id: "coverRegPostCodeDiv", class: "CoverList_coverRegPostCodeDiv__1RZPc" }, index.h("span", { id: "coverRegPostCode", class: "CoverList_coverRegPostCodeText__LkqLE", "data-cs-mask": "" }, "Reg No: ", this._coverDetails.coverList[0].vehicleData.vehicleReg))))), index.h("button", { type: "button", class: "digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary", id: "viewButton", "data-testid": "viewButton", onClick: this.toggle.bind(this) }, index.h("span", { id: "selectedSpan" }, index.h("span", null, "View Documents"))))), index.h("div", { id: "content", hidden: this.collapsed }, index.h("div", { id: "documentDetailsContainerDiv", class: "YourDocumentDetails_documentDetailsContainerDiv__3QGVF" }, index.h("div", { id: "yourDocumentsHeadingDiv", class: "YourDocumentDetails_yourDocumentsHeadingDivHeading__1jenA" }, index.h("h3", { id: "yourDocumentCoverHeading", class: "YourDocumentDetails_title__OP-fp" }, "Your Documents"), index.h("p", { id: "yourDocumentCoverSubtitle", class: "YourDocumentDetails_subtitle__37vIr" }, "Download your desired documents from the list below.")), index.h("div", { id: "riskCoverDetailsContainer", class: "RiskCoverDetails_riskCoverDetailsContainer__2_wY7 RiskCoverDetails_sectionContainer___g21v" }, index.h("documents-list", { coverdetails: this.coverdetails }))))));
  }
  get element() { return index.getElement(this); }
  static get watchers() { return {
    "coverdetails": ["arrayDataWatcher"]
  }; }
};
DocumentDetailsTile.style = documentDetailsTileCss;

exports.document_details_container = DocumentDetailsContainer;
exports.document_details_tile = DocumentDetailsTile;
