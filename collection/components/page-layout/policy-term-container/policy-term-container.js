import { h } from '@stencil/core';
export class PolicyTermContainer {
  render() {
    return (h("div", { id: "termListContainer", class: "RiskCover_termListStyle__3UoLq" }, h("div", { class: "jut__FieldComponent__fieldComponent jut__FieldComponent__left RiskCover_termDropDown__5mG_B" }, h("div", { class: "jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left" }, h("label", { id: "termDropDown_63202513", class: "digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel RiskCover_termDropDownLabel__zAuFc" }, h("span", { class: "jut__FieldLabel__primaryLabel" }, "Select Term:"))), h("div", { class: "jut__FieldComponent__contentContainer jut__FieldComponent__controls" }, h("div", { role: "presentation" }, h("div", { class: "jut__GenericSelectControl__genericSelect jut__DropdownSelectField__dropdownSelect jut__DropdownSelectField__sizeableDropdown RiskCover_termDropDown__5mG_B css-2b097c-container", id: "termDropDown-wrapper" }, h("div", { class: "jut__GenericSelectControl__control" }, h("div", { class: " css-1hwfws3" }, h("div", { class: "jut__GenericSelectControl__singleValue css-1uccc91-singleValue" }, "Current Term")))))))));
  }
  static get is() { return "policy-term-container"; }
  static get originalStyleUrls() {
    return {
      "$": ["policy-term-container.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["policy-term-container.css"]
    };
  }
}
