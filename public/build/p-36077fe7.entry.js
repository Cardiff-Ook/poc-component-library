import{r as t,h as i}from"./p-a4af608c.js";const e=class{constructor(i){t(this,i)}componentWillLoad(){this._policyIndex=`policyCovers${this.policyindex}`}render(){return i("div",{id:this._policyIndex,key:this.policydetails.id,class:"MyPoliciesPage_tileContainer__CASCC MyPoliciesPage_policyCovers__3cFyO"},i("div",null,i("div",{class:"jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapMedium"},i("div",{class:"jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapNone PolicyListComponent_policyContainer__23NJ9",id:"policyContainer","data-testid":"policyListComponent"},i("div",{class:"jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapSmall PolicyListComponent_policyDetails__GSIKK",id:"policyDetails"},i("img",{src:this.policydetails.imageSrc,id:"policyTypeIcon",class:"PolicyListComponent_policyIcon__1QzmW"}),i("div",{id:"policyInfo",class:"gwAlertContent PolicyListComponent_policyInfo__VwAiN"},i("span",{id:"policyType",class:"PolicyListComponent_policyType__15t3J"},this.policydetails.policytype," Insurance"),i("div",{class:"jut__Flex__gwFlex jut__Flex__gwGapMedium jut__Flex__gwWrap jut__Flex__gwDirectionRow PolicyListComponent_policyNumberContainer__WNSvc",id:"policyNumberContainer"},i("span",{id:"policyNumberLabel",class:"gwEmphasis"},"Policy Number:"),i("span",{id:"policyNumber",class:"PolicyListComponent_policyNumber__2_S94","data-cs-mask":""},this.policydetails.id)))),i("div",{id:"policyButtonContainer",class:"PolicyListComponent_policyButtonContainer__1Q9M1"},this.policydetails.selected?i("button",{type:"button",class:"digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary jut__Button__materialIcon SelectButton_selectButton__2EnMv",id:"selectButton","data-testid":"selectButton"},i("span",{id:"selectedSpan"},i("span",null,"Selected"),i("i",{class:"mir mi-done jut__Button__icon jut__Button__rightIcon"}))):i("button",{type:"button",class:"digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary",id:"selectButton","data-testid":"selectButton"},i("span",{id:"selectedSpan"},i("span",null,"Select"),i("i",{class:"mir mi-done jut__Button__icon jut__Button__rightIcon"})))),i("div",{class:"renewalBannerContainer",id:"renewalBannerContainer"})),i("policy-subsection-header",null,"Manage and View Your Policy"),i("tile-container",{type:"options"},i("policy-management-tile",{"product-image":"file-invoice","link-text":"#","title-text":"Policy Summary"},"See your cover details, Renewal Data etc."),i("policy-management-tile",{"product-image":"file","link-text":"#","title-text":"Documents"},"View or Download your documents"),i("policy-management-tile",{"product-image":"edit","link-text":"#","title-text":"Make A Change"},"To drivers, addresses, vehicles"),i("policy-management-tile",{"product-image":"plus","link-text":"#","title-text":"Add to Policy"},"Add a Car, Home or Van to your policy"),i("policy-management-tile",{"product-image":"credit-card","link-text":"#","title-text":"Payments"},"View or edit payment details"),i("policy-management-tile",{"product-image":"money-check","link-text":"#","title-text":"Claims"},"Make a claim or see existing claims")),i("policy-term-container",null),i("cover-details-container",{coverdetails:[this.policydetails]}))))}};e.style=":host{display:block}";export{e as policy_tile}