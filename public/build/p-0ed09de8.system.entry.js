System.register(["./p-96f6b329.system.js"],(function(e){"use strict";var t,n,i,o;return{setters:[function(e){t=e.r;n=e.c;i=e.h;o=e.H}],execute:function(){var l=":host{display:block}";var a=e("account_details",function(){function e(e){t(this,e);this.editUserDetails=n(this,"editUserDetails",7)}e.prototype.dataWatcher=function(e){if(typeof e==="string"){this._user=JSON.parse(e)}};e.prototype.editAccount=function(){console.log("Want to edit please");this.editUserDetails.emit()};e.prototype.componentWillLoad=function(){this.dataWatcher(this.user)};e.prototype.render=function(){var e=this;return i(o,null,i("div",{id:"coverDetailsBuildingsCoverWrapperDiv",class:"UsersProfile_accountInfoContainer__3XXAI"},i("div",{id:"sectionTitleContainer",class:"SectionTitle_sectionTitleContainer__3C1nl sectionTitleWrapper"},i("h3",{id:"sectionTitleText",class:"SectionTitle_sectionTitle__3ZORY"},"Account Details")),i("div",{id:"firstNameContainer",class:"UsersProfile_firstNameContainer__XKtf7"},i("span",{id:"firstNameLabel",class:"UsersProfile_firstNameLabel__3xGNV"},"First Name"),i("div",{class:"jut__FieldComponent__fieldComponent jut__FieldComponent__left jut__FieldComponent__fullWidth UsersProfile_inputFieldfName__25XP5"},i("div",{class:"jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},i("div",{id:"firstNameInputField","data-read-only":"true",class:"digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly UsersProfile_inputFieldfName__25XP5"},i("span",{"data-cs-mask":""},this._user.firstName)),i("div",{id:"firstNameInputField_1440013438",class:"jut__FieldMessage__fieldMessage",role:"alert","aria-hidden":"true"})))),i("div",{id:"lastNameContainer",class:"UsersProfile_lastNameContainer__1jSzK"},i("span",{id:"lastNameLabel",class:"UsersProfile_lastNameLabel__14Jxt"},"Last Name"),i("div",{class:"jut__FieldComponent__fieldComponent jut__FieldComponent__left jut__FieldComponent__fullWidth UsersProfile_inputFieldlName__26xOi"},i("div",{class:"jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},i("div",{id:"lastNameInputField","data-read-only":"true",class:"digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly UsersProfile_inputFieldlName__26xOi"},i("span",{"data-cs-mask":""},this._user.lastName)),i("div",{id:"lastNameInputField_1440013438",class:"jut__FieldMessage__fieldMessage",role:"alert","aria-hidden":"true"})))),i("div",{id:"userEmailContainer",class:"UsersProfile_userCommonView__11T0Y","data-cs-mask":""},i("span",{id:"emailLabel",class:"UsersProfile_emailLabel__Vmki-"},"Email"),i("div",{class:"jut__FieldComponent__fieldComponent jut__FieldComponent__left"},i("div",{class:"jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},i("div",{id:"emailInputField","data-read-only":"true",class:"digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},this._user.emailAddress),i("div",{id:"emailInputField_1440013438",class:"jut__FieldMessage__fieldMessage",role:"alert","aria-hidden":"true"}))),i("div",{id:"tooltipContainerEmail",class:"toolTipContainerEmail"})),i("div",{id:"userContactContainer",class:"UsersProfile_userCommonViewContact__3THiJ","data-cs-mask":""},i("span",{id:"userContactLabel",class:"UsersProfile_userContactLabel__2AKZ0"},"Contact Number"),i("div",{class:"jut__FieldComponent__fieldComponent jut__FieldComponent__left jut__FieldComponent__fullWidth"},i("div",{class:"jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},i("div",{id:"contactNoInputFieldCellNumber","data-read-only":"true",class:"digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},this._user.contactNumber),i("div",{id:"contactNoInputFieldCellNumber_1440013438",class:"jut__FieldMessage__fieldMessage",role:"alert","aria-hidden":"true"}))),i("div",{id:"tooltipContainerContact",class:"toolTipContainerContact"})),i("div",{id:"editAccountDetailsButtonContainer",class:"UsersProfile_editAccountDetailsButtonContainer__277lU"},i("button",{type:"button",class:"digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary",id:"selectButton","data-testid":"selectButton",onClick:function(){e.editAccount()}},i("span",{class:"buttonLabel"},"Edit account details")))))};Object.defineProperty(e,"watchers",{get:function(){return{user:["dataWatcher"]}},enumerable:false,configurable:true});return e}());a.style=l;var _=":host{display:block}";var s=e("main_page_contents",function(){function e(e){t(this,e)}e.prototype.render=function(){return i("main",{class:"jut__Main__main admMain"},i("div",{class:"jut__Container__container jut__Main__container"},i("div",{id:"pageContainer",class:"page MyPoliciesPage_claimHomePage__3e-L3"},i("slot",{name:"page-contents"}))))};return e}());s.style=_;var d=":host{display:block}";var r=e("policies_container",function(){function e(e){t(this,e)}e.prototype.render=function(){return i("div",{id:"policyContainer"},i("div",null),i("slot",{name:"page-title"}),i("slot",{name:"account-details"}),i("slot",{name:"policy-details"}))};return e}());r.style=d}}}));