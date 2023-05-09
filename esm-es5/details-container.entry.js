import{r as registerInstance,h}from"./index-76cd28ee.js";var detailsContainerCss=":host{display:block}";var DetailsContainer=function(){function e(e){registerInstance(this,e)}e.prototype.arrayDataWatcher=function(e){if(typeof e==="string"){this._coverDetails=JSON.parse(e);this._coverDetails=this._coverDetails[0]}else{this._coverDetails=this.coverdetails}switch(this.detailstype){case"policy":if(this._coverDetails!==undefined)this._coverDetails.imageSrc="/assets/claim-cover-".concat(this._coverDetails.policytype,".svg");break;case"car":this._car=this._coverDetails.coverList[0].vehicleData;break}};e.prototype.convertDate=function(e){var t=["January","February","March","April","May","June","July","August","September","October","November","December"];var l=new Date(parseInt(e,10)*1e3);return" ".concat(l.getDay()," ").concat(t[l.getMonth()]," ").concat(l.getFullYear())};e.prototype.componentWillLoad=function(){this.arrayDataWatcher(this.coverdetails)};e.prototype.render=function(){if(this.detailstype==="policy"){return h("div",{id:"policyOverviewContainer",class:"policyOverviewContainer RiskCoverDetails_sectionContainer___g21v"},h("div",{id:"sectionTitleContainer",class:"SectionTitle_sectionTitleContainer__3C1nl sectionTitleWrapper"},h("h3",{id:"sectionTitleText",class:"SectionTitle_sectionTitle__3ZORY"},"Policy Overview")),h("div",{class:"jut__FieldComponent__fieldComponent jut__FieldComponent__left"},h("div",{class:"jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left"},h("label",{id:"startDateInputField_63202513",class:"digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly"},h("span",{class:"jut__FieldLabel__primaryLabel"},"Start Date"))),h("div",{class:"jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},h("div",{id:"startDateInputField","data-read-only":"true",class:"digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},this.convertDate(this._coverDetails.startDate)),h("div",{id:"startDateInputField_1440013438",class:"jut__FieldMessage__fieldMessage",role:"alert","aria-hidden":"true"}))),h("div",{class:"jut__FieldComponent__fieldComponent jut__FieldComponent__left"},h("div",{class:"jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left"},h("label",{id:"endDateInputField_63202513",class:"digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly"},h("span",{class:"jut__FieldLabel__primaryLabel"},"Renewal Date"))),h("div",{class:"jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},h("div",{id:"endDateInputField","data-read-only":"true",class:"digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},this.convertDate(this._coverDetails.endDate)),h("div",{id:"endDateInputField_1440013438",class:"jut__FieldMessage__fieldMessage",role:"alert","aria-hidden":"true"}))))}else if(this.detailstype==="car"){return h("div",{id:"policyOverviewContainer",class:"policyOverviewContainer RiskCoverDetails_sectionContainer___g21v"},h("div",{id:"sectionTitleContainer",class:"SectionTitle_sectionTitleContainer__3C1nl sectionTitleWrapper"},h("h3",{id:"sectionTitleText",class:"SectionTitle_sectionTitle__3ZORY"},"Vehicle")),h("div",{class:"jut__FieldComponent__fieldComponent jut__FieldComponent__left"},h("div",{class:"jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left"},h("label",{id:"startDateInputField_63202513",class:"digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly"},h("span",{class:"jut__FieldLabel__primaryLabel"},"Registration"))),h("div",{class:"jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},h("div",{id:"startDateInputField","data-read-only":"true",class:"digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},this._car.vehicleReg),h("div",{id:"startDateInputField_1440013438",class:"jut__FieldMessage__fieldMessage",role:"alert","aria-hidden":"true"}))),h("div",{class:"jut__FieldComponent__fieldComponent jut__FieldComponent__left"},h("div",{class:"jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left"},h("label",{id:"endDateInputField_63202513",class:"digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly"},h("span",{class:"jut__FieldLabel__primaryLabel"},"Make"))),h("div",{class:"jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},h("div",{id:"endDateInputField","data-read-only":"true",class:"digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},this._car.vehicleMake),h("div",{id:"endDateInputField_1440013438",class:"jut__FieldMessage__fieldMessage",role:"alert","aria-hidden":"true"}))),h("div",{class:"jut__FieldComponent__fieldComponent jut__FieldComponent__left"},h("div",{class:"jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left"},h("label",{id:"endDateInputField_63202513",class:"digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly"},h("span",{class:"jut__FieldLabel__primaryLabel"},"Model"))),h("div",{class:"jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},h("div",{id:"endDateInputField","data-read-only":"true",class:"digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},this._car.vehicleModel),h("div",{id:"endDateInputField_1440013438",class:"jut__FieldMessage__fieldMessage",role:"alert","aria-hidden":"true"}))),h("div",{class:"jut__FieldComponent__fieldComponent jut__FieldComponent__left"},h("div",{class:"jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left"},h("label",{id:"endDateInputField_63202513",class:"digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly"},h("span",{class:"jut__FieldLabel__primaryLabel"},"Cover Level"))),h("div",{class:"jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},h("div",{id:"endDateInputField","data-read-only":"true",class:"digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},this._car.coverLevel),h("div",{id:"endDateInputField_1440013438",class:"jut__FieldMessage__fieldMessage",role:"alert","aria-hidden":"true"}))),h("div",{class:"jut__FieldComponent__fieldComponent jut__FieldComponent__left"},h("div",{class:"jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left"},h("label",{id:"endDateInputField_63202513",class:"digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly"},h("span",{class:"jut__FieldLabel__primaryLabel"},"Modifications"))),h("div",{class:"jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},h("div",{id:"endDateInputField","data-read-only":"true",class:"digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},this._car.modifications),h("div",{id:"endDateInputField_1440013438",class:"jut__FieldMessage__fieldMessage",role:"alert","aria-hidden":"true"}))),h("div",{class:"jut__FieldComponent__fieldComponent jut__FieldComponent__left"},h("div",{class:"jut__FieldLabel__fieldLabelContainer jut__FieldLabel__left"},h("label",{id:"endDateInputField_63202513",class:"digitalFieldLabel__fieldLabel jut__FieldLabel__fieldLabel jut__FieldLabel__readOnly"},h("span",{class:"jut__FieldLabel__primaryLabel"},"Other Vehicles"))),h("div",{class:"jut__FieldComponent__contentContainer jut__FieldComponent__controls digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},h("div",{id:"endDateInputField","data-read-only":"true",class:"digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly digitalFieldComponent__controlReadOnly jut__FieldComponent__controlReadOnly"},this._car.otherVehicles,h("button",{type:"button",class:"jut__IconButton__iconButton jut__IconButton__medium RiskCoverDetails_helpButton__3tEpc","aria-label":"Button",tabindex:"0",id:"helpButton"},h("i",{class:"mir mi-info jut__IconButton__icon jut__IconButton__dark","aria-hidden":"true"}))),h("div",{id:"endDateInputField_1440013438",class:"jut__FieldMessage__fieldMessage",role:"alert","aria-hidden":"true"}))))}};Object.defineProperty(e,"watchers",{get:function(){return{coverdetails:["arrayDataWatcher"]}},enumerable:false,configurable:true});return e}();DetailsContainer.style=detailsContainerCss;export{DetailsContainer as details_container};