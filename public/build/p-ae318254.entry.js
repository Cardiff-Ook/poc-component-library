import{r as t,c as e,h as n,H as i}from"./p-4abcca95.js";const o=class{constructor(n){t(this,n),this.editUserDetails=e(this,"editUserDetails",7)}dataWatcher(t){"string"==typeof t&&(this._user=JSON.parse(t))}editAccount(){console.log("Want to edit please"),this.editUserDetails.emit()}componentWillLoad(){this.dataWatcher(this.user)}render(){return n(i,null,n("div",{id:"coverDetailsBuildingsCoverWrapperDiv",class:"UsersProfile_accountInfoContainer__3XXAI"},n("div",{id:"sectionTitleContainer",class:"SectionTitle_sectionTitleContainer__3C1nl sectionTitleWrapper"},n("h3",{id:"sectionTitleText",class:"SectionTitle_sectionTitle__3ZORY"},"Account Details")),n("div",{id:"firstNameContainer",class:"UsersProfile_firstNameContainer__XKtf7"},n("span",{id:"firstNameLabel",class:"UsersProfile_firstNameLabel__3xGNV"},"First Name"),n("div",{class:"jut__FieldComponent__fieldComponent jut__FieldComponent__left jut__FieldComponent__fullWidth UsersProfile_inputFieldfName__25XP5"},n("div",{class:"jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},n("div",{id:"firstNameInputField","data-read-only":"true",class:"digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly UsersProfile_inputFieldfName__25XP5"},n("span",{"data-cs-mask":""},this._user.firstName)),n("div",{id:"firstNameInputField_1440013438",class:"jut__FieldMessage__fieldMessage",role:"alert","aria-hidden":"true"})))),n("div",{id:"lastNameContainer",class:"UsersProfile_lastNameContainer__1jSzK"},n("span",{id:"lastNameLabel",class:"UsersProfile_lastNameLabel__14Jxt"},"Last Name"),n("div",{class:"jut__FieldComponent__fieldComponent jut__FieldComponent__left jut__FieldComponent__fullWidth UsersProfile_inputFieldlName__26xOi"},n("div",{class:"jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},n("div",{id:"lastNameInputField","data-read-only":"true",class:"digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly UsersProfile_inputFieldlName__26xOi"},n("span",{"data-cs-mask":""},this._user.lastName)),n("div",{id:"lastNameInputField_1440013438",class:"jut__FieldMessage__fieldMessage",role:"alert","aria-hidden":"true"})))),n("div",{id:"userEmailContainer",class:"UsersProfile_userCommonView__11T0Y","data-cs-mask":""},n("span",{id:"emailLabel",class:"UsersProfile_emailLabel__Vmki-"},"Email"),n("div",{class:"jut__FieldComponent__fieldComponent jut__FieldComponent__left"},n("div",{class:"jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},n("div",{id:"emailInputField","data-read-only":"true",class:"digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},this._user.emailAddress),n("div",{id:"emailInputField_1440013438",class:"jut__FieldMessage__fieldMessage",role:"alert","aria-hidden":"true"}))),n("div",{id:"tooltipContainerEmail",class:"toolTipContainerEmail"})),n("div",{id:"userContactContainer",class:"UsersProfile_userCommonViewContact__3THiJ","data-cs-mask":""},n("span",{id:"userContactLabel",class:"UsersProfile_userContactLabel__2AKZ0"},"Contact Number"),n("div",{class:"jut__FieldComponent__fieldComponent jut__FieldComponent__left jut__FieldComponent__fullWidth"},n("div",{class:"jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},n("div",{id:"contactNoInputFieldCellNumber","data-read-only":"true",class:"digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},this._user.contactNumber),n("div",{id:"contactNoInputFieldCellNumber_1440013438",class:"jut__FieldMessage__fieldMessage",role:"alert","aria-hidden":"true"}))),n("div",{id:"tooltipContainerContact",class:"toolTipContainerContact"})),n("div",{id:"editAccountDetailsButtonContainer",class:"UsersProfile_editAccountDetailsButtonContainer__277lU"},n("button",{type:"button",class:"digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary",id:"selectButton","data-testid":"selectButton",onClick:()=>{this.editAccount()}},n("span",{class:"buttonLabel"},"Edit account details")))))}static get watchers(){return{user:["dataWatcher"]}}};o.style=":host{display:block}";const l=class{constructor(e){t(this,e)}render(){return n("main",{class:"jut__Main__main admMain"},n("div",{class:"jut__Container__container jut__Main__container"},n("div",{id:"pageContainer",class:"page MyPoliciesPage_claimHomePage__3e-L3"},n("slot",{name:"page-contents"}))))}};l.style=":host{display:block}";const a=class{constructor(e){t(this,e)}render(){return n("div",{id:"policyContainer"},n("div",null),n("slot",{name:"page-title"}),n("slot",{name:"account-details"}),n("slot",{name:"policy-details"}))}};a.style=":host{display:block}";export{o as account_details,l as main_page_contents,a as policies_container}