import { Component, Host, Prop, Watch, h, EventEmitter, Event } from '@stencil/core';
import { UserDataInterface } from '../../../interfaces/userDataInterface';

@Component({
  tag: 'account-details',
  styleUrl: 'account-details.css',
  shadow: false,
})
export class AccountDetails {

  /**
   * Prop: user: object
   * User Account details object
   */
  @Prop() user: Array<UserDataInterface> | string;
  private _user: UserDataInterface;

  /**
   * Event: loginShouldOccur: EventEmitter
   * Event to fire if data validates
   */
   @Event() editUserDetails: EventEmitter;

  @Watch('user')
  dataWatcher(newValue: any | string) {
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
    return (
      <Host>
        <div id="coverDetailsBuildingsCoverWrapperDiv" class="UsersProfile_accountInfoContainer__3XXAI">
          <div id="sectionTitleContainer" class="SectionTitle_sectionTitleContainer__3C1nl sectionTitleWrapper">
            <h3 id="sectionTitleText" class="SectionTitle_sectionTitle__3ZORY">Account Details</h3></div>
            <div id="firstNameContainer" class="UsersProfile_firstNameContainer__XKtf7">
              <span id="firstNameLabel" class="UsersProfile_firstNameLabel__3xGNV">First Name</span>
              <div class="jut__FieldComponent__fieldComponent jut__FieldComponent__left jut__FieldComponent__fullWidth UsersProfile_inputFieldfName__25XP5">
                <div class="jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly">
                  <div id="firstNameInputField" data-read-only="true" class="digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly UsersProfile_inputFieldfName__25XP5">
                    <span data-cs-mask="">{this._user.firstName}</span>
                  </div>
                <div id="firstNameInputField_1440013438" class="jut__FieldMessage__fieldMessage" role="alert" aria-hidden="true"></div>
              </div>
            </div>
          </div>
          <div id="lastNameContainer" class="UsersProfile_lastNameContainer__1jSzK">
            <span id="lastNameLabel" class="UsersProfile_lastNameLabel__14Jxt">Last Name</span>
            <div class="jut__FieldComponent__fieldComponent jut__FieldComponent__left jut__FieldComponent__fullWidth UsersProfile_inputFieldlName__26xOi">
              <div class="jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly">
                <div id="lastNameInputField" data-read-only="true" class="digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly UsersProfile_inputFieldlName__26xOi">
                  <span data-cs-mask="">{this._user.lastName}</span>
                </div>
                <div id="lastNameInputField_1440013438" class="jut__FieldMessage__fieldMessage" role="alert" aria-hidden="true"></div>
              </div>
            </div>
          </div>
          <div id="userEmailContainer" class="UsersProfile_userCommonView__11T0Y" data-cs-mask="">
            <span id="emailLabel" class="UsersProfile_emailLabel__Vmki-">Email</span>
            <div class="jut__FieldComponent__fieldComponent jut__FieldComponent__left">
              <div class="jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly">
                <div id="emailInputField" data-read-only="true" class="digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly">{this._user.emailAddress}</div>
                <div id="emailInputField_1440013438" class="jut__FieldMessage__fieldMessage" role="alert" aria-hidden="true"></div>
              </div>
            </div>
            <div id="tooltipContainerEmail" class="toolTipContainerEmail"></div>
          </div>
          <div id="userContactContainer" class="UsersProfile_userCommonViewContact__3THiJ" data-cs-mask="">
            <span id="userContactLabel" class="UsersProfile_userContactLabel__2AKZ0">Contact Number</span>
            <div class="jut__FieldComponent__fieldComponent jut__FieldComponent__left jut__FieldComponent__fullWidth">
              <div class="jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly">
                <div id="contactNoInputFieldCellNumber" data-read-only="true" class="digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly">{this._user.contactNumber}</div>
                <div id="contactNoInputFieldCellNumber_1440013438" class="jut__FieldMessage__fieldMessage" role="alert" aria-hidden="true"></div>
              </div>
            </div>
            <div id="tooltipContainerContact" class="toolTipContainerContact"></div>
          </div>
          <div id="editAccountDetailsButtonContainer" class="UsersProfile_editAccountDetailsButtonContainer__277lU">
          <button type="button" class="digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary" id="selectButton" data-testid="selectButton" onClick={() => { this.editAccount(); }}>
              <span class="buttonLabel">Edit account details</span>
            </button>
          </div>
        </div>
      </Host>
    );
  }

}
