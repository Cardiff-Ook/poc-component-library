import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const detailsContainerCss = ":host{display:block}";

const DetailsContainer = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
      return (h("div", { id: "policyOverviewContainer", class: "policyOverviewContainer RiskCoverDetails_sectionContainer___g21v" }, h("div", { id: "sectionTitleContainer", class: "SectionTitle_sectionTitleContainer__3C1nl sectionTitleWrapper" }, h("h3", { id: "sectionTitleText", class: "SectionTitle_sectionTitle__3ZORY" }, "Policy Overview")), h("div", { class: "jut__FieldComponent__fieldComponent jut__FieldComponent__left" }, h("div", { class: "jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left" }, h("label", { id: "startDateInputField_63202513", class: "digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly" }, h("span", { class: "jut__FieldLabel__primaryLabel" }, "Start Date"))), h("div", { class: "jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, h("div", { id: "startDateInputField", "data-read-only": "true", class: "digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, this.convertDate(this._coverDetails.startDate)), h("div", { id: "startDateInputField_1440013438", class: "jut__FieldMessage__fieldMessage", role: "alert", "aria-hidden": "true" }))), h("div", { class: "jut__FieldComponent__fieldComponent jut__FieldComponent__left" }, h("div", { class: "jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left" }, h("label", { id: "endDateInputField_63202513", class: "digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly" }, h("span", { class: "jut__FieldLabel__primaryLabel" }, "Renewal Date"))), h("div", { class: "jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, h("div", { id: "endDateInputField", "data-read-only": "true", class: "digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, this.convertDate(this._coverDetails.endDate)), h("div", { id: "endDateInputField_1440013438", class: "jut__FieldMessage__fieldMessage", role: "alert", "aria-hidden": "true" })))));
    }
    else if (this.detailstype === "car") {
      return (h("div", { id: "policyOverviewContainer", class: "policyOverviewContainer RiskCoverDetails_sectionContainer___g21v" }, h("div", { id: "sectionTitleContainer", class: "SectionTitle_sectionTitleContainer__3C1nl sectionTitleWrapper" }, h("h3", { id: "sectionTitleText", class: "SectionTitle_sectionTitle__3ZORY" }, "Vehicle")), h("div", { class: "jut__FieldComponent__fieldComponent jut__FieldComponent__left" }, h("div", { class: "jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left" }, h("label", { id: "startDateInputField_63202513", class: "digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly" }, h("span", { class: "jut__FieldLabel__primaryLabel" }, "Registration"))), h("div", { class: "jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, h("div", { id: "startDateInputField", "data-read-only": "true", class: "digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, this._car.vehicleReg), h("div", { id: "startDateInputField_1440013438", class: "jut__FieldMessage__fieldMessage", role: "alert", "aria-hidden": "true" }))), h("div", { class: "jut__FieldComponent__fieldComponent jut__FieldComponent__left" }, h("div", { class: "jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left" }, h("label", { id: "endDateInputField_63202513", class: "digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly" }, h("span", { class: "jut__FieldLabel__primaryLabel" }, "Make"))), h("div", { class: "jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, h("div", { id: "endDateInputField", "data-read-only": "true", class: "digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, this._car.vehicleMake), h("div", { id: "endDateInputField_1440013438", class: "jut__FieldMessage__fieldMessage", role: "alert", "aria-hidden": "true" }))), h("div", { class: "jut__FieldComponent__fieldComponent jut__FieldComponent__left" }, h("div", { class: "jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left" }, h("label", { id: "endDateInputField_63202513", class: "digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly" }, h("span", { class: "jut__FieldLabel__primaryLabel" }, "Model"))), h("div", { class: "jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, h("div", { id: "endDateInputField", "data-read-only": "true", class: "digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, this._car.vehicleModel), h("div", { id: "endDateInputField_1440013438", class: "jut__FieldMessage__fieldMessage", role: "alert", "aria-hidden": "true" }))), h("div", { class: "jut__FieldComponent__fieldComponent jut__FieldComponent__left" }, h("div", { class: "jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left" }, h("label", { id: "endDateInputField_63202513", class: "digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly" }, h("span", { class: "jut__FieldLabel__primaryLabel" }, "Cover Level"))), h("div", { class: "jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, h("div", { id: "endDateInputField", "data-read-only": "true", class: "digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, this._car.coverLevel), h("div", { id: "endDateInputField_1440013438", class: "jut__FieldMessage__fieldMessage", role: "alert", "aria-hidden": "true" }))), h("div", { class: "jut__FieldComponent__fieldComponent jut__FieldComponent__left" }, h("div", { class: "jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left" }, h("label", { id: "endDateInputField_63202513", class: "digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly" }, h("span", { class: "jut__FieldLabel__primaryLabel" }, "Modifications"))), h("div", { class: "jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, h("div", { id: "endDateInputField", "data-read-only": "true", class: "digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, this._car.modifications), h("div", { id: "endDateInputField_1440013438", class: "jut__FieldMessage__fieldMessage", role: "alert", "aria-hidden": "true" }))), h("div", { class: "jut__FieldComponent__fieldComponent jut__FieldComponent__left" }, h("div", { class: "jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left" }, h("label", { id: "endDateInputField_63202513", class: "digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly" }, h("span", { class: "jut__FieldLabel__primaryLabel" }, "Other Vehicles"))), h("div", { class: "jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, h("div", { id: "endDateInputField", "data-read-only": "true", class: "digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, this._car.otherVehicles, h("button", { type: "button", class: "jut__IconButton__iconButton jut__IconButton__medium RiskCoverDetails_helpButton__3tEpc", "aria-label": "Button", tabindex: "0", id: "helpButton" }, h("i", { class: "mir mi-info jut__IconButton__icon jut__IconButton__dark", "aria-hidden": "true" }))), h("div", { id: "endDateInputField_1440013438", class: "jut__FieldMessage__fieldMessage", role: "alert", "aria-hidden": "true" })))));
    }
  }
  static get watchers() { return {
    "coverdetails": ["arrayDataWatcher"]
  }; }
  static get style() { return detailsContainerCss; }
}, [0, "details-container", {
    "detailstype": [1],
    "coverdetails": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["details-container"];
  components.forEach(tagName => { switch (tagName) {
    case "details-container":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DetailsContainer);
      }
      break;
  } });
}

export { DetailsContainer as D, defineCustomElement as d };
