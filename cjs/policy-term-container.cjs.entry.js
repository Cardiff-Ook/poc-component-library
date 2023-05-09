'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5ebe992a.js');

const policyTermContainerCss = ":host{display:block}.jut__GenericSelectControl__singleValue.css-1uccc91-singleValue{margin-top:12px}";

const PolicyTermContainer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { id: "termListContainer", class: "RiskCover_termListStyle__3UoLq" }, index.h("div", { class: "jut__FieldComponent__fieldComponent jut__FieldComponent__left RiskCover_termDropDown__5mG_B" }, index.h("div", { class: "jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left" }, index.h("label", { id: "termDropDown_63202513", class: "digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel RiskCover_termDropDownLabel__zAuFc" }, index.h("span", { class: "jut__FieldLabel__primaryLabel" }, "Select Term:"))), index.h("div", { class: "jut__FieldComponent__contentContainer jut__FieldComponent__controls" }, index.h("div", { role: "presentation" }, index.h("div", { class: "jut__GenericSelectControl__genericSelect jut__DropdownSelectField__dropdownSelect jut__DropdownSelectField__sizeableDropdown RiskCover_termDropDown__5mG_B css-2b097c-container", id: "termDropDown-wrapper" }, index.h("div", { class: "jut__GenericSelectControl__control" }, index.h("div", { class: " css-1hwfws3" }, index.h("div", { class: "jut__GenericSelectControl__singleValue css-1uccc91-singleValue" }, "Current Term")))))))));
  }
};
PolicyTermContainer.style = policyTermContainerCss;

exports.policy_term_container = PolicyTermContainer;
