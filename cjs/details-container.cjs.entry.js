'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5ebe992a.js');

const detailsContainerCss = ":host{display:block}";

const DetailsContainer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  arrayDataWatcher(newValue) {
    if (typeof newValue === 'string') {
      this._coverDetails = JSON.parse(newValue);
      this._coverDetails = this._coverDetails[0];
    }
    else {
      this._coverDetails = this.coverdetails;
    }
    switch (this.detailstype) {
      case "policy":
        if (this._coverDetails !== undefined)
          this._coverDetails.imageSrc = `/assets/claim-cover-${this._coverDetails.policytype}.svg`;
        break;
      case "car":
        this._car = this._coverDetails.coverList[0].vehicleData;
        break;
    }
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
      return (index.h("div", { id: "policyOverviewContainer", class: "policyOverviewContainer RiskCoverDetails_sectionContainer___g21v" }, index.h("div", { id: "sectionTitleContainer", class: "SectionTitle_sectionTitleContainer__3C1nl sectionTitleWrapper" }, index.h("h3", { id: "sectionTitleText", class: "SectionTitle_sectionTitle__3ZORY" }, "Policy Overview")), index.h("div", { class: "jut__FieldComponent__fieldComponent jut__FieldComponent__left" }, index.h("div", { class: "jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left" }, index.h("label", { id: "startDateInputField_63202513", class: "digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly" }, index.h("span", { class: "jut__FieldLabel__primaryLabel" }, "Start Date"))), index.h("div", { class: "jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, index.h("div", { id: "startDateInputField", "data-read-only": "true", class: "digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, this.convertDate(this._coverDetails.startDate)), index.h("div", { id: "startDateInputField_1440013438", class: "jut__FieldMessage__fieldMessage", role: "alert", "aria-hidden": "true" }))), index.h("div", { class: "jut__FieldComponent__fieldComponent jut__FieldComponent__left" }, index.h("div", { class: "jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left" }, index.h("label", { id: "endDateInputField_63202513", class: "digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly" }, index.h("span", { class: "jut__FieldLabel__primaryLabel" }, "Renewal Date"))), index.h("div", { class: "jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, index.h("div", { id: "endDateInputField", "data-read-only": "true", class: "digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, this.convertDate(this._coverDetails.endDate)), index.h("div", { id: "endDateInputField_1440013438", class: "jut__FieldMessage__fieldMessage", role: "alert", "aria-hidden": "true" })))));
    }
    else if (this.detailstype === "car") {
      return (index.h("div", { id: "policyOverviewContainer", class: "policyOverviewContainer RiskCoverDetails_sectionContainer___g21v" }, index.h("div", { id: "sectionTitleContainer", class: "SectionTitle_sectionTitleContainer__3C1nl sectionTitleWrapper" }, index.h("h3", { id: "sectionTitleText", class: "SectionTitle_sectionTitle__3ZORY" }, "Vehicle")), index.h("div", { class: "jut__FieldComponent__fieldComponent jut__FieldComponent__left" }, index.h("div", { class: "jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left" }, index.h("label", { id: "startDateInputField_63202513", class: "digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly" }, index.h("span", { class: "jut__FieldLabel__primaryLabel" }, "Registration"))), index.h("div", { class: "jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, index.h("div", { id: "startDateInputField", "data-read-only": "true", class: "digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, this._car.vehicleReg), index.h("div", { id: "startDateInputField_1440013438", class: "jut__FieldMessage__fieldMessage", role: "alert", "aria-hidden": "true" }))), index.h("div", { class: "jut__FieldComponent__fieldComponent jut__FieldComponent__left" }, index.h("div", { class: "jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left" }, index.h("label", { id: "endDateInputField_63202513", class: "digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly" }, index.h("span", { class: "jut__FieldLabel__primaryLabel" }, "Make"))), index.h("div", { class: "jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, index.h("div", { id: "endDateInputField", "data-read-only": "true", class: "digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, this._car.vehicleMake), index.h("div", { id: "endDateInputField_1440013438", class: "jut__FieldMessage__fieldMessage", role: "alert", "aria-hidden": "true" }))), index.h("div", { class: "jut__FieldComponent__fieldComponent jut__FieldComponent__left" }, index.h("div", { class: "jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left" }, index.h("label", { id: "endDateInputField_63202513", class: "digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly" }, index.h("span", { class: "jut__FieldLabel__primaryLabel" }, "Model"))), index.h("div", { class: "jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, index.h("div", { id: "endDateInputField", "data-read-only": "true", class: "digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, this._car.vehicleModel), index.h("div", { id: "endDateInputField_1440013438", class: "jut__FieldMessage__fieldMessage", role: "alert", "aria-hidden": "true" }))), index.h("div", { class: "jut__FieldComponent__fieldComponent jut__FieldComponent__left" }, index.h("div", { class: "jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left" }, index.h("label", { id: "endDateInputField_63202513", class: "digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly" }, index.h("span", { class: "jut__FieldLabel__primaryLabel" }, "Cover Level"))), index.h("div", { class: "jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, index.h("div", { id: "endDateInputField", "data-read-only": "true", class: "digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, this._car.coverLevel), index.h("div", { id: "endDateInputField_1440013438", class: "jut__FieldMessage__fieldMessage", role: "alert", "aria-hidden": "true" }))), index.h("div", { class: "jut__FieldComponent__fieldComponent jut__FieldComponent__left" }, index.h("div", { class: "jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left" }, index.h("label", { id: "endDateInputField_63202513", class: "digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly" }, index.h("span", { class: "jut__FieldLabel__primaryLabel" }, "Modifications"))), index.h("div", { class: "jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, index.h("div", { id: "endDateInputField", "data-read-only": "true", class: "digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, this._car.modifications), index.h("div", { id: "endDateInputField_1440013438", class: "jut__FieldMessage__fieldMessage", role: "alert", "aria-hidden": "true" }))), index.h("div", { class: "jut__FieldComponent__fieldComponent jut__FieldComponent__left" }, index.h("div", { class: "jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left" }, index.h("label", { id: "endDateInputField_63202513", class: "digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly" }, index.h("span", { class: "jut__FieldLabel__primaryLabel" }, "Other Vehicles"))), index.h("div", { class: "jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, index.h("div", { id: "endDateInputField", "data-read-only": "true", class: "digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, this._car.otherVehicles, index.h("button", { type: "button", class: "jut__IconButton__iconButton jut__IconButton__medium RiskCoverDetails_helpButton__3tEpc", "aria-label": "Button", tabindex: "0", id: "helpButton" }, index.h("i", { class: "mir mi-info jut__IconButton__icon jut__IconButton__dark", "aria-hidden": "true" }))), index.h("div", { id: "endDateInputField_1440013438", class: "jut__FieldMessage__fieldMessage", role: "alert", "aria-hidden": "true" })))));
    }
  }
  static get watchers() { return {
    "coverdetails": ["arrayDataWatcher"]
  }; }
};
DetailsContainer.style = detailsContainerCss;

exports.details_container = DetailsContainer;
