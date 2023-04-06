System.register(["./p-96f6b329.system.js"],(function(e){"use strict";var t,l;return{setters:[function(e){t=e.r;l=e.h}],execute:function(){var _=":host{display:block}";var i=e("details_container",function(){function e(e){t(this,e)}e.prototype.arrayDataWatcher=function(e){if(typeof e==="string"){this._coverDetails=JSON.parse(e);this._coverDetails=this._coverDetails[0]}else{this._coverDetails=this.coverdetails}switch(this.detailstype){case"policy":if(this._coverDetails!==undefined)this._coverDetails.imageSrc="/assets/claim-cover-".concat(this._coverDetails.policytype,".svg");break;case"car":this._car=this._coverDetails.coverList[0].vehicleData;break}};e.prototype.convertDate=function(e){var t=["January","February","March","April","May","June","July","August","September","October","November","December"];var l=new Date(parseInt(e,10)*1e3);return" ".concat(l.getDay()," ").concat(t[l.getMonth()]," ").concat(l.getFullYear())};e.prototype.componentWillLoad=function(){this.arrayDataWatcher(this.coverdetails)};e.prototype.render=function(){if(this.detailstype==="policy"){return l("div",{id:"policyOverviewContainer",class:"policyOverviewContainer RiskCoverDetails_sectionContainer___g21v"},l("div",{id:"sectionTitleContainer",class:"SectionTitle_sectionTitleContainer__3C1nl sectionTitleWrapper"},l("h3",{id:"sectionTitleText",class:"SectionTitle_sectionTitle__3ZORY"},"Policy Overview")),l("div",{class:"jut__FieldComponent__fieldComponent jut__FieldComponent__left"},l("div",{class:"jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left"},l("label",{id:"startDateInputField_63202513",class:"digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly"},l("span",{class:"jut__FieldLabel__primaryLabel"},"Start Date"))),l("div",{class:"jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},l("div",{id:"startDateInputField","data-read-only":"true",class:"digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},this.convertDate(this._coverDetails.startDate)),l("div",{id:"startDateInputField_1440013438",class:"jut__FieldMessage__fieldMessage",role:"alert","aria-hidden":"true"}))),l("div",{class:"jut__FieldComponent__fieldComponent jut__FieldComponent__left"},l("div",{class:"jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left"},l("label",{id:"endDateInputField_63202513",class:"digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly"},l("span",{class:"jut__FieldLabel__primaryLabel"},"Renewal Date"))),l("div",{class:"jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},l("div",{id:"endDateInputField","data-read-only":"true",class:"digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},this.convertDate(this._coverDetails.endDate)),l("div",{id:"endDateInputField_1440013438",class:"jut__FieldMessage__fieldMessage",role:"alert","aria-hidden":"true"}))))}else if(this.detailstype==="car"){return l("div",{id:"policyOverviewContainer",class:"policyOverviewContainer RiskCoverDetails_sectionContainer___g21v"},l("div",{id:"sectionTitleContainer",class:"SectionTitle_sectionTitleContainer__3C1nl sectionTitleWrapper"},l("h3",{id:"sectionTitleText",class:"SectionTitle_sectionTitle__3ZORY"},"Vehicle")),l("div",{class:"jut__FieldComponent__fieldComponent jut__FieldComponent__left"},l("div",{class:"jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left"},l("label",{id:"startDateInputField_63202513",class:"digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly"},l("span",{class:"jut__FieldLabel__primaryLabel"},"Registration"))),l("div",{class:"jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},l("div",{id:"startDateInputField","data-read-only":"true",class:"digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},this._car.vehicleReg),l("div",{id:"startDateInputField_1440013438",class:"jut__FieldMessage__fieldMessage",role:"alert","aria-hidden":"true"}))),l("div",{class:"jut__FieldComponent__fieldComponent jut__FieldComponent__left"},l("div",{class:"jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left"},l("label",{id:"endDateInputField_63202513",class:"digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly"},l("span",{class:"jut__FieldLabel__primaryLabel"},"Make"))),l("div",{class:"jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},l("div",{id:"endDateInputField","data-read-only":"true",class:"digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},this._car.vehicleMake),l("div",{id:"endDateInputField_1440013438",class:"jut__FieldMessage__fieldMessage",role:"alert","aria-hidden":"true"}))),l("div",{class:"jut__FieldComponent__fieldComponent jut__FieldComponent__left"},l("div",{class:"jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left"},l("label",{id:"endDateInputField_63202513",class:"digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly"},l("span",{class:"jut__FieldLabel__primaryLabel"},"Model"))),l("div",{class:"jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},l("div",{id:"endDateInputField","data-read-only":"true",class:"digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},this._car.vehicleModel),l("div",{id:"endDateInputField_1440013438",class:"jut__FieldMessage__fieldMessage",role:"alert","aria-hidden":"true"}))),l("div",{class:"jut__FieldComponent__fieldComponent jut__FieldComponent__left"},l("div",{class:"jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left"},l("label",{id:"endDateInputField_63202513",class:"digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly"},l("span",{class:"jut__FieldLabel__primaryLabel"},"Cover Level"))),l("div",{class:"jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},l("div",{id:"endDateInputField","data-read-only":"true",class:"digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},this._car.coverLevel),l("div",{id:"endDateInputField_1440013438",class:"jut__FieldMessage__fieldMessage",role:"alert","aria-hidden":"true"}))),l("div",{class:"jut__FieldComponent__fieldComponent jut__FieldComponent__left"},l("div",{class:"jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left"},l("label",{id:"endDateInputField_63202513",class:"digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly"},l("span",{class:"jut__FieldLabel__primaryLabel"},"Modifications"))),l("div",{class:"jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},l("div",{id:"endDateInputField","data-read-only":"true",class:"digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},this._car.modifications),l("div",{id:"endDateInputField_1440013438",class:"jut__FieldMessage__fieldMessage",role:"alert","aria-hidden":"true"}))),l("div",{class:"jut__FieldComponent__fieldComponent jut__FieldComponent__left"},l("div",{class:"jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left"},l("label",{id:"endDateInputField_63202513",class:"digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly"},l("span",{class:"jut__FieldLabel__primaryLabel"},"Other Vehicles"))),l("div",{class:"jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},l("div",{id:"endDateInputField","data-read-only":"true",class:"digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},this._car.otherVehicles,l("button",{type:"button",class:"jut__IconButton__iconButton jut__IconButton__medium RiskCoverDetails_helpButton__3tEpc","aria-label":"Button",tabindex:"0",id:"helpButton"},l("i",{class:"mir mi-info jut__IconButton__icon jut__IconButton__dark","aria-hidden":"true"}))),l("div",{id:"endDateInputField_1440013438",class:"jut__FieldMessage__fieldMessage",role:"alert","aria-hidden":"true"}))))}};Object.defineProperty(e,"watchers",{get:function(){return{coverdetails:["arrayDataWatcher"]}},enumerable:false,configurable:true});return e}());i.style=_}}}));