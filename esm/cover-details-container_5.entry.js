import { r as registerInstance, h, g as getElement } from './index-76cd28ee.js';

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

const coverDetailsTileCss = ":host{display:block}";

const CoverDetailsTile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
        btn[0].innerHTML = '<span id="selectedSpan"><span>View Summary</span></span>';
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
    return (h("div", { id: this._tileId }, h("div", null, h("div", { class: "jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapMedium CoverList_coverContainerDiv__3qiY1", id: "coverContainerDiv" }, h("div", { id: "detailsContainerDiv" }, h("div", { id: "detailsAndIconContainer", class: "CoverList_detailsAndIconContainer__1UIZA" }, h("div", { id: "coverIconLabelDiv", class: "CoverList_coverIconLabelDiv__v-dgX" }, h("img", { src: "/assets/claim-cover-car.svg", id: "coverIconImg", class: "CoverList_coverIconImg__2T5IO" })), h("div", { id: "coverDetails", class: "CoverList_coverDetails__6uRwg" }, h("div", { id: "coverLabelDiv", class: "CoverList_coverLabelDiv__R-tnB" }, h("div", { id: "coverTitleContainer", class: "" }, h("span", { id: "coverLabel" }, "COVER"), h("span", { id: "statusWithDate" }, h("span", { id: "coverStatusText", class: "CoverList_coverStatusText__1iTUz" }), h("span", { id: "coverStatusDate" })))), h("div", { id: "coverDetailDiv", class: "CoverList_coverDetailDiv__2a8_A" }, h("span", { id: "coverDetail", class: "CoverList_coverDetailText__1uT1F", "data-cs-mask": "" }, this._coverDetails.coverList[0].vehicleData.vehicleMake, " ", this._coverDetails.coverList[0].vehicleData.vehicleModel)), h("div", { id: "coverRegPostCodeDiv", class: "CoverList_coverRegPostCodeDiv__1RZPc" }, h("span", { id: "coverRegPostCode", class: "CoverList_coverRegPostCodeText__LkqLE", "data-cs-mask": "" }, "Reg No: ", this._coverDetails.coverList[0].vehicleData.vehicleReg))))), h("button", { type: "button", class: "digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary", id: "viewButton", "data-testid": "viewButton", onClick: this.toggle.bind(this) }, h("span", { id: "selectedSpan" }, h("span", null, "View Summary"))))), h("div", { id: "content", hidden: this.collapsed }, h("div", { id: "riskTitleContainer", class: "RiskCoverDetails_riskTitleContainer__2FfQl" }, h("h3", { id: "riskTitle", class: "RiskCoverDetails_title__30skA" }, "Your Cover Details")), h("div", { id: "riskCoverDetailsContainer", class: "RiskCoverDetails_riskCoverDetailsContainer__2_wY7 RiskCoverDetails_sectionContainer___g21v" }, h("details-container", { detailstype: "policy", coverdetails: this.coverdetails }), h("details-container", { detailstype: "car", coverdetails: this.coverdetails })))));
  }
  get element() { return getElement(this); }
  static get watchers() { return {
    "coverdetails": ["arrayDataWatcher"]
  }; }
};
CoverDetailsTile.style = coverDetailsTileCss;

const policyManagementTileCss = ".managementTile{background-color:#FFF;border-radius:8px;border:1px solid #E9E9EF;width:206px;height:148px;text-align:center;color:#4A4643;font-weight:normal;background-repeat:no-repeat;background-position:center;background-size:contain}.icon{margin:10px;font-size:x-large;color:#4A4643}h2.option{width:100%;display:block;color:var(--adm-generic-select-control-single-value-color) !important;font-size:var(--ADM-FONT-SIZE-20) !important;font-weight:var(--GW-FONT-WEIGHT-SEMI-BOLD) !important;letter-spacing:var(--global-letter-spacing-minus-point-one) !important;line-height:var(--global-line-height-24) !important}";

const PolicyManagementTile = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const imageSrc = `fa fa-${this.productImage} icon`;
    return (h("div", null, h("div", { class: "managementTile" }, h("a", { href: this.linkText }, h("i", { id: "statusIcon", class: imageSrc }), h("h2", { class: "option" }, this.titleText)), h("slot", null))));
  }
};
PolicyManagementTile.style = policyManagementTileCss;

const policySubsectionHeaderCss = ":host{display:block}.nobg{background-color:var(--gw-grey-light-63-color) !important}h1{width:512px}.subsectionText{margin-top:0;text-align:left;margin-bottom:24px;color:#4A4643!important;font-size:20px;font-style:normal;font-family:jaf-facitweb, Helvetica, Arial;font-weight:800;line-height:24px;word-wrap:break-word}";

const PolicySubsectionHeader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapNone PolicyListComponent_policyContainer__23NJ9 nobg", id: "policyContainer", "data-testid": "policyListComponent" }, h("div", { class: "jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapSmall PolicyListComponent_policyDetails__GSIKK", id: "policyDetails" }, h("h1", { class: "subsection", title: "" }, h("div", { class: "markdownWrapper" }, h("span", { class: "markdownParagraph" }, h("span", { class: "subsectionText" }, h("slot", null))))))));
  }
};
PolicySubsectionHeader.style = policySubsectionHeaderCss;

const tileContainerCss = ".tileContainer{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;gap:16px;-ms-flex-pack:center;justify-content:center;margin-left:auto;margin-right:auto;max-width:636px;padding:0}.products{max-width:636px}.options{max-width:656px}";

const TileContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    this._containerStyle = `tileContainer ${this.type}`;
  }
  render() {
    return (h("div", { class: this._containerStyle }, h("slot", null)));
  }
};
TileContainer.style = tileContainerCss;

export { CoverDetailsContainer as cover_details_container, CoverDetailsTile as cover_details_tile, PolicyManagementTile as policy_management_tile, PolicySubsectionHeader as policy_subsection_header, TileContainer as tile_container };
