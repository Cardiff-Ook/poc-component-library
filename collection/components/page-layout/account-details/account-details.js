import { Host, h } from '@stencil/core';
export class AccountDetails {
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
    return (h(Host, null, h("div", { id: "coverDetailsBuildingsCoverWrapperDiv", class: "UsersProfile_accountInfoContainer__3XXAI" }, h("div", { id: "sectionTitleContainer", class: "SectionTitle_sectionTitleContainer__3C1nl sectionTitleWrapper" }, h("h3", { id: "sectionTitleText", class: "SectionTitle_sectionTitle__3ZORY" }, "Account Details")), h("div", { id: "firstNameContainer", class: "UsersProfile_firstNameContainer__XKtf7" }, h("span", { id: "firstNameLabel", class: "UsersProfile_firstNameLabel__3xGNV" }, "First Name"), h("div", { class: "jut__FieldComponent__fieldComponent jut__FieldComponent__left jut__FieldComponent__fullWidth UsersProfile_inputFieldfName__25XP5" }, h("div", { class: "jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, h("div", { id: "firstNameInputField", "data-read-only": "true", class: "digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly UsersProfile_inputFieldfName__25XP5" }, h("span", { "data-cs-mask": "" }, this._user.firstName)), h("div", { id: "firstNameInputField_1440013438", class: "jut__FieldMessage__fieldMessage", role: "alert", "aria-hidden": "true" })))), h("div", { id: "lastNameContainer", class: "UsersProfile_lastNameContainer__1jSzK" }, h("span", { id: "lastNameLabel", class: "UsersProfile_lastNameLabel__14Jxt" }, "Last Name"), h("div", { class: "jut__FieldComponent__fieldComponent jut__FieldComponent__left jut__FieldComponent__fullWidth UsersProfile_inputFieldlName__26xOi" }, h("div", { class: "jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, h("div", { id: "lastNameInputField", "data-read-only": "true", class: "digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly UsersProfile_inputFieldlName__26xOi" }, h("span", { "data-cs-mask": "" }, this._user.lastName)), h("div", { id: "lastNameInputField_1440013438", class: "jut__FieldMessage__fieldMessage", role: "alert", "aria-hidden": "true" })))), h("div", { id: "userEmailContainer", class: "UsersProfile_userCommonView__11T0Y", "data-cs-mask": "" }, h("span", { id: "emailLabel", class: "UsersProfile_emailLabel__Vmki-" }, "Email"), h("div", { class: "jut__FieldComponent__fieldComponent jut__FieldComponent__left" }, h("div", { class: "jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, h("div", { id: "emailInputField", "data-read-only": "true", class: "digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, this._user.emailAddress), h("div", { id: "emailInputField_1440013438", class: "jut__FieldMessage__fieldMessage", role: "alert", "aria-hidden": "true" }))), h("div", { id: "tooltipContainerEmail", class: "toolTipContainerEmail" })), h("div", { id: "userContactContainer", class: "UsersProfile_userCommonViewContact__3THiJ", "data-cs-mask": "" }, h("span", { id: "userContactLabel", class: "UsersProfile_userContactLabel__2AKZ0" }, "Contact Number"), h("div", { class: "jut__FieldComponent__fieldComponent jut__FieldComponent__left jut__FieldComponent__fullWidth" }, h("div", { class: "jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, h("div", { id: "contactNoInputFieldCellNumber", "data-read-only": "true", class: "digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly" }, this._user.contactNumber), h("div", { id: "contactNoInputFieldCellNumber_1440013438", class: "jut__FieldMessage__fieldMessage", role: "alert", "aria-hidden": "true" }))), h("div", { id: "tooltipContainerContact", class: "toolTipContainerContact" })), h("div", { id: "editAccountDetailsButtonContainer", class: "UsersProfile_editAccountDetailsButtonContainer__277lU" }, h("button", { type: "button", class: "digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary", id: "selectButton", "data-testid": "selectButton", onClick: () => { this.editAccount(); } }, h("span", { class: "buttonLabel" }, "Edit account details"))))));
  }
  static get is() { return "account-details"; }
  static get originalStyleUrls() {
    return {
      "$": ["account-details.css"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["account-details.css"]
    };
  }
  static get properties() {
    return {
      "user": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Array<UserDataInterface> | string",
          "resolved": "UserDataInterface[] | string",
          "references": {
            "Array": {
              "location": "global"
            },
            "UserDataInterface": {
              "location": "import",
              "path": "../../../interfaces/userDataInterface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Prop: user: object\nUser Account details object"
        },
        "attribute": "user",
        "reflect": false
      }
    };
  }
  static get events() {
    return [{
        "method": "editUserDetails",
        "name": "editUserDetails",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Event: loginShouldOccur: EventEmitter\nEvent to fire if data validates"
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get watchers() {
    return [{
        "propName": "user",
        "methodName": "dataWatcher"
      }];
  }
}
