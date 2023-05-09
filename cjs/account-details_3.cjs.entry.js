'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5ebe992a.js');

const accountDetailsCss = ":host{display:block}";

const AccountDetails = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.editUserDetails = index.createEvent(this, "editUserDetails", 7);
  }
  dataWatcher(newValue) {
    if (typeof newValue === 'string') {
      this._user = JSON.parse(newValue);
    }
  }
  editAccount() {
    console.log("Want to edit please");
    this.editUserDetails.emit();
  }
  componentWillLoad() {
    this.dataWatcher(this.user);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { id: "coverDetailsBuildingsCoverWrapperDiv", class: "UsersProfile_accountInfoContainer__3XXAI" }, index.h("div", { id: "sectionTitleContainer", class: "SectionTitle_sectionTitleContainer__3C1nl sectionTitleWrapper" }, index.h("h3", { id: "sectionTitleText", class: "SectionTitle_sectionTitle__3ZORY" }, "Account Details")), index.h("div", { id: "firstNameContainer", class: "UsersProfile_firstNameContainer__XKtf7" }, index.h("span", { id: "firstNameLabel", class: "UsersProfile_firstNameLabel__3xGNV" }, "First Name"), index.h("div", { class: "jut__FieldComponent__fieldComponent jut__FieldComponent__left jut__FieldComponent__fullWidth UsersProfile_inputFieldfName__25XP5" }, index.h("div", { class: "jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, index.h("div", { id: "firstNameInputField", "data-read-only": "true", class: "digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly UsersProfile_inputFieldfName__25XP5" }, index.h("span", { "data-cs-mask": "" }, this._user.firstName)), index.h("div", { id: "firstNameInputField_1440013438", class: "jut__FieldMessage__fieldMessage", role: "alert", "aria-hidden": "true" })))), index.h("div", { id: "lastNameContainer", class: "UsersProfile_lastNameContainer__1jSzK" }, index.h("span", { id: "lastNameLabel", class: "UsersProfile_lastNameLabel__14Jxt" }, "Last Name"), index.h("div", { class: "jut__FieldComponent__fieldComponent jut__FieldComponent__left jut__FieldComponent__fullWidth UsersProfile_inputFieldlName__26xOi" }, index.h("div", { class: "jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, index.h("div", { id: "lastNameInputField", "data-read-only": "true", class: "digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly UsersProfile_inputFieldlName__26xOi" }, index.h("span", { "data-cs-mask": "" }, this._user.lastName)), index.h("div", { id: "lastNameInputField_1440013438", class: "jut__FieldMessage__fieldMessage", role: "alert", "aria-hidden": "true" })))), index.h("div", { id: "userEmailContainer", class: "UsersProfile_userCommonView__11T0Y", "data-cs-mask": "" }, index.h("span", { id: "emailLabel", class: "UsersProfile_emailLabel__Vmki-" }, "Email"), index.h("div", { class: "jut__FieldComponent__fieldComponent jut__FieldComponent__left" }, index.h("div", { class: "jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, index.h("div", { id: "emailInputField", "data-read-only": "true", class: "digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, this._user.emailAddress), index.h("div", { id: "emailInputField_1440013438", class: "jut__FieldMessage__fieldMessage", role: "alert", "aria-hidden": "true" }))), index.h("div", { id: "tooltipContainerEmail", class: "toolTipContainerEmail" })), index.h("div", { id: "userContactContainer", class: "UsersProfile_userCommonViewContact__3THiJ", "data-cs-mask": "" }, index.h("span", { id: "userContactLabel", class: "UsersProfile_userContactLabel__2AKZ0" }, "Contact Number"), index.h("div", { class: "jut__FieldComponent__fieldComponent jut__FieldComponent__left jut__FieldComponent__fullWidth" }, index.h("div", { class: "jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, index.h("div", { id: "contactNoInputFieldCellNumber", "data-read-only": "true", class: "digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, this._user.contactNumber), index.h("div", { id: "contactNoInputFieldCellNumber_1440013438", class: "jut__FieldMessage__fieldMessage", role: "alert", "aria-hidden": "true" }))), index.h("div", { id: "tooltipContainerContact", class: "toolTipContainerContact" })), index.h("div", { id: "editAccountDetailsButtonContainer", class: "UsersProfile_editAccountDetailsButtonContainer__277lU" }, index.h("button", { type: "button", class: "digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary", id: "selectButton", "data-testid": "selectButton", onClick: () => { this.editAccount(); } }, index.h("span", { class: "buttonLabel" }, "Edit account details"))))));
  }
  static get watchers() { return {
    "user": ["dataWatcher"]
  }; }
};
AccountDetails.style = accountDetailsCss;

const mainPageContentsCss = ":host{display:block}";

const MainPageContents = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("main", { class: "jut__Main__main admMain" }, index.h("div", { class: "jut__Container__container jut__Main__container" }, index.h("div", { id: "pageContainer", class: "page MyPoliciesPage_claimHomePage__3e-L3" }, index.h("slot", { name: "page-contents" })))));
  }
};
MainPageContents.style = mainPageContentsCss;

const policiesContainerCss = ":host{display:block}";

const PoliciesContainer = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("div", { id: "policyContainer" }, index.h("div", null), index.h("slot", { name: "page-title" }), index.h("slot", { name: "account-details" }), index.h("slot", { name: "policy-details" })));
  }
};
PoliciesContainer.style = policiesContainerCss;

exports.account_details = AccountDetails;
exports.main_page_contents = MainPageContents;
exports.policies_container = PoliciesContainer;
