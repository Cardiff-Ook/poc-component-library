import { r as registerInstance, h } from './index-e3478a0e.js';

const detailsContainerCss = ":host{display:block}";

const DetailsContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  arrayDataWatcher(newValue) {
    if (typeof newValue === 'string') {
      this._coverDetails = JSON.parse(newValue);
      this._coverDetails = this._coverDetails[0];
    }
    else {
      this._coverDetails = this.coverdetails;
    }
    if (this._coverDetails !== undefined)
      this._coverDetails.imageSrc = `/assets/claim-cover-${this._coverDetails.policytype}.svg`;
  }
  convertDate(inDate) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dateVal = new Date(parseInt(inDate, 10) * 1000);
    return ` ${dateVal.getDay()} ${monthNames[dateVal.getMonth()]} ${dateVal.getFullYear()}`;
  }
  componentWillLoad() {
    this.arrayDataWatcher(this.coverdetails);
  }
  render() {
    if (this.detailstype === "policy") {
      return (h("div", { id: "policyOverviewContainer", class: "policyOverviewContainer RiskCoverDetails_sectionContainer___g21v" }, h("div", { id: "sectionTitleContainer", class: "SectionTitle_sectionTitleContainer__3C1nl sectionTitleWrapper" }, h("h3", { id: "sectionTitleText", class: "SectionTitle_sectionTitle__3ZORY" }, "Policy Overview")), h("div", { class: "jut__FieldComponent__fieldComponent jut__FieldComponent__left" }, h("div", { class: "jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left" }, h("label", { id: "startDateInputField_63202513", class: "digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly" }, h("span", { class: "jut__FieldLabel__primaryLabel" }, "Start Date"))), h("div", { class: "jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, h("div", { id: "startDateInputField", "data-read-only": "true", class: "digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, this.convertDate(this._coverDetails.startDate)), h("div", { id: "startDateInputField_1440013438", class: "jut__FieldMessage__fieldMessage", role: "alert", "aria-hidden": "true" }))), h("div", { class: "jut__FieldComponent__fieldComponent jut__FieldComponent__left" }, h("div", { class: "jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left" }, h("label", { id: "endDateInputField_63202513", class: "digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly" }, h("span", { class: "jut__FieldLabel__primaryLabel" }, "Renewal Date"))), h("div", { class: "jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, h("div", { id: "endDateInputField", "data-read-only": "true", class: "digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, this.convertDate(this._coverDetails.endDate)), h("div", { id: "endDateInputField_1440013438", class: "jut__FieldMessage__fieldMessage", role: "alert", "aria-hidden": "true" })))));
    }
  }
  static get watchers() { return {
    "coverdetails": ["arrayDataWatcher"]
  }; }
};
DetailsContainer.style = detailsContainerCss;

export { DetailsContainer as details_container };
