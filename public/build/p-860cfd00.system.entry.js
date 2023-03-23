System.register(["./p-96f6b329.system.js"],(function(t){"use strict";var e,i,a;return{setters:[function(t){e=t.r;i=t.h;a=t.g}],execute:function(){var o=":host{display:block}#coverContainerDiv{grid-template-columns:3fr 2fr}";var r=t("cover_details_container",function(){function t(t){e(this,t)}t.prototype.arrayDataWatcher=function(t){if(typeof t==="string"){this._arrayData=JSON.parse(t)}else{this._arrayData=t}if(this._arrayData!==undefined&&this._arrayData.length>0){this._arrayData.forEach((function(t){return t.imageSrc="/assets/claim-cover-".concat(t.policytype,".svg")}))}};t.prototype.toggle=function(){var t=this.element.querySelectorAll("button");this.collapsed=!this.collapsed;if(!!t[0])t[0].textContent=this.collapsed?"View Summary":"Hide Summary"};t.prototype.componentWillLoad=function(){this.arrayDataWatcher(this.coverdetails);this.collapsed=true};t.prototype.render=function(){if(this._arrayData!==undefined&&this._arrayData.length>0){return i("div",{id:"coverContainerIterable",class:"coverContainerGrid"},this._arrayData.map((function(t,e){if(t===void 0){t={}}return i("cover-details-tile",{coverdetails:t,coverindex:e})})))}else{return i("div",{id:"policyCoverMainContainer",class:"MyPoliciesPage_policyCoverMainContainer__3bkpG"},i("sub-section-title",{pagetitle:"You have no policies"}))}};Object.defineProperty(t.prototype,"element",{get:function(){return a(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{coverdetails:["arrayDataWatcher"]}},enumerable:false,configurable:true});return t}());r.style=o;var n=":host{display:block}";var s=t("cover_details_tile",function(){function t(t){e(this,t)}t.prototype.arrayDataWatcher=function(t){if(typeof t==="string"){this._coverDetails=JSON.parse(t)}else{this._coverDetails=t}if(this._coverDetails!==undefined)this._coverDetails.imageSrc="/assets/claim-cover-".concat(this._coverDetails.policytype,".svg")};t.prototype.toggle=function(){var t=this.element.querySelectorAll("button");this.collapsed=!this.collapsed;if(!!t[0])if(this.collapsed){t[0].innerHTML='<span id="selectedSpan"><span>View Summary</span></span>';t[0].classList.remove("SelectButton_selectButton__2EnMv");t[0].classList.remove("jut__Button__materialIcon")}else{t[0].innerHTML='<span id="selectedSpan"><span>Selected</span><i class="mir mi-done jut__Button__icon jut__Button__rightIcon"></i></span>';t[0].classList.add("SelectButton_selectButton__2EnMv");t[0].classList.add("jut__Button__materialIcon")}};t.prototype.componentWillLoad=function(){this.arrayDataWatcher(this.coverdetails);this.collapsed=true;this._tileId="riskcoverList".concat(this.coverindex)};t.prototype.render=function(){return i("div",{id:this._tileId},i("div",null,i("div",{class:"jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapMedium CoverList_coverContainerDiv__3qiY1",id:"coverContainerDiv"},i("div",{id:"detailsContainerDiv"},i("div",{id:"detailsAndIconContainer",class:"CoverList_detailsAndIconContainer__1UIZA"},i("div",{id:"coverIconLabelDiv",class:"CoverList_coverIconLabelDiv__v-dgX"},i("img",{src:"/assets/claim-cover-car.svg",id:"coverIconImg",class:"CoverList_coverIconImg__2T5IO"})),i("div",{id:"coverDetails",class:"CoverList_coverDetails__6uRwg"},i("div",{id:"coverLabelDiv",class:"CoverList_coverLabelDiv__R-tnB"},i("div",{id:"coverTitleContainer",class:""},i("span",{id:"coverLabel"},"COVER"),i("span",{id:"statusWithDate"},i("span",{id:"coverStatusText",class:"CoverList_coverStatusText__1iTUz"}),i("span",{id:"coverStatusDate"})))),i("div",{id:"coverDetailDiv",class:"CoverList_coverDetailDiv__2a8_A"},i("span",{id:"coverDetail",class:"CoverList_coverDetailText__1uT1F","data-cs-mask":""},this._coverDetails.coverList[0].vehicleData.vehicleMake," ",this._coverDetails.coverList[0].vehicleData.vehicleModel)),i("div",{id:"coverRegPostCodeDiv",class:"CoverList_coverRegPostCodeDiv__1RZPc"},i("span",{id:"coverRegPostCode",class:"CoverList_coverRegPostCodeText__LkqLE","data-cs-mask":""},"Reg No: ",this._coverDetails.coverList[0].vehicleData.vehicleReg))))),i("button",{type:"button",class:"digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary",id:"viewButton","data-testid":"viewButton",onClick:this.toggle.bind(this)},i("span",{id:"selectedSpan"},i("span",null,"View Summary"))))),i("div",{id:"content",hidden:this.collapsed},i("div",{id:"riskTitleContainer",class:"RiskCoverDetails_riskTitleContainer__2FfQl"},i("h3",{id:"riskTitle",class:"RiskCoverDetails_title__30skA"},"Your Cover Details")),i("div",{id:"riskCoverDetailsContainer",class:"RiskCoverDetails_riskCoverDetailsContainer__2_wY7 RiskCoverDetails_sectionContainer___g21v"},i("details-container",{detailstype:"policy",coverdetails:this.coverdetails}),i("details-container",{detailstype:"car",coverdetails:this.coverdetails}))))};Object.defineProperty(t.prototype,"element",{get:function(){return a(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{coverdetails:["arrayDataWatcher"]}},enumerable:false,configurable:true});return t}());s.style=n;var l=".managementTile{background-color:#FFF;border-radius:8px;border:1px solid #E9E9EF;width:206px;height:148px;text-align:center;color:#4A4643;font-weight:normal;background-repeat:no-repeat;background-position:center;background-size:contain}.icon{margin:10px;font-size:x-large;color:#4A4643}h2.option{width:100%;display:block;color:var(--adm-generic-select-control-single-value-color) !important;font-size:var(--ADM-FONT-SIZE-20) !important;font-weight:var(--GW-FONT-WEIGHT-SEMI-BOLD) !important;letter-spacing:var(--global-letter-spacing-minus-point-one) !important;line-height:var(--global-line-height-24) !important}";var c=t("policy_management_tile",function(){function t(t){e(this,t)}t.prototype.render=function(){var t="fa fa-".concat(this.productImage," icon");return i("div",null,i("div",{class:"managementTile"},i("a",{href:this.linkText},i("i",{id:"statusIcon",class:t}),i("h2",{class:"option"},this.titleText)),i("slot",null)))};return t}());c.style=l;var d=":host{display:block}.nobg{background-color:var(--gw-grey-light-63-color) !important}h1{width:512px}.subsectionText{margin-top:0;text-align:left;margin-bottom:24px;color:#4A4643!important;font-size:20px;font-style:normal;font-family:jaf-facitweb, Helvetica, Arial;font-weight:800;line-height:24px;word-wrap:break-word}";var _=t("policy_subsection_header",function(){function t(t){e(this,t)}t.prototype.render=function(){return i("div",{class:"jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapNone PolicyListComponent_policyContainer__23NJ9 nobg",id:"policyContainer","data-testid":"policyListComponent"},i("div",{class:"jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapSmall PolicyListComponent_policyDetails__GSIKK",id:"policyDetails"},i("h1",{class:"subsection",title:""},i("div",{class:"markdownWrapper"},i("span",{class:"markdownParagraph"},i("span",{class:"subsectionText"},i("slot",null)))))))};return t}());_.style=d;var v=".tileContainer{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;gap:16px;-ms-flex-pack:center;justify-content:center;margin-left:auto;margin-right:auto;max-width:636px;padding:0}.products{max-width:636px}.options{max-width:656px}";var p=t("tile_container",function(){function t(t){e(this,t)}t.prototype.componentWillLoad=function(){this._containerStyle="tileContainer ".concat(this.type)};t.prototype.render=function(){return i("div",{class:this._containerStyle},i("slot",null))};return t}());p.style=v}}}));