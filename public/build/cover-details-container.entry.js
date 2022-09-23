import { r as registerInstance, h, g as getElement } from './index-0240b1cc.js';

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
  componentDidLoad() {
    console.log(this.element); // outputs HTMLElement <my-component ...
  }
  componentWillLoad() {
    this.arrayDataWatcher(this.coverdetails);
    this.collapsed = true;
  }
  render() {
    if (this._arrayData !== undefined && this._arrayData.length > 0) {
      return (h("div", { id: "coverContainerIterable", class: "coverContainerGrid" }, h("div", { id: "riskcoverList0" }, h("div", null, h("div", { class: "jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapMedium CoverList_coverContainerDiv__3qiY1", id: "coverContainerDiv" }, h("div", { id: "detailsContainerDiv" }, h("div", { id: "detailsAndIconContainer", class: "CoverList_detailsAndIconContainer__1UIZA" }, h("div", { id: "coverIconLabelDiv", class: "CoverList_coverIconLabelDiv__v-dgX" }, h("img", { src: "/assets/claim-cover-car.svg", id: "coverIconImg", class: "CoverList_coverIconImg__2T5IO" })), h("div", { id: "coverDetails", class: "CoverList_coverDetails__6uRwg" }, h("div", { id: "coverLabelDiv", class: "CoverList_coverLabelDiv__R-tnB" }, h("div", { id: "coverTitleContainer", class: "" }, h("span", { id: "coverLabel" }, "COVER"), h("span", { id: "statusWithDate" }, h("span", { id: "coverStatusText", class: "CoverList_coverStatusText__1iTUz" }), h("span", { id: "coverStatusDate" })))), h("div", { id: "coverDetailDiv", class: "CoverList_coverDetailDiv__2a8_A" }, h("span", { id: "coverDetail", class: "CoverList_coverDetailText__1uT1F", "data-cs-mask": "" }, "FIAT 500")), h("div", { id: "coverRegPostCodeDiv", class: "CoverList_coverRegPostCodeDiv__1RZPc" }, h("span", { id: "coverRegPostCode", class: "CoverList_coverRegPostCodeText__LkqLE", "data-cs-mask": "" }, "Reg No: G15FGY"))))), h("button", { type: "button", class: "digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary", id: "viewButton", "data-testid": "viewButton", onClick: this.toggle.bind(this) }, h("span", { id: "selectedSpan" }, h("span", null, "View Summary")))), h("div", { id: "content", hidden: this.collapsed }, "hello", h("slot", null))))));
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
