import{r as t,h as e}from"./p-363bb2cb.js";const i=class{constructor(e){t(this,e)}arrayDataWatcher(t){"string"==typeof t?(this._coverDetails=JSON.parse(t),this._coverDetails=this._coverDetails[0]):this._coverDetails=this.coverdetails,console.log(this._coverDetails),this._docsList=this._coverDetails.documents}convertDate(t){const e=new Date(1e3*parseInt(t,10));return` ${e.getDay()} ${["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]} ${e.getFullYear()}`}componentWillLoad(){this.arrayDataWatcher(this.coverdetails)}render(){return this._docsList&&this._docsList.length>0?e("div",{id:"documentDetailsContainerDiv",class:"YourDocumentDetails_documentDetailsContainerDiv__3QGVF"},e("div",{id:"yourDocumentsHeadingDiv",class:"YourDocumentDetails_yourDocumentsHeadingDivHeading__1jenA"},e("h3",{id:"yourDocumentCoverHeading",class:"YourDocumentDetails_title__OP-fp"},"Your Documents"),e("p",{id:"yourDocumentCoverSubtitle",class:"YourDocumentDetails_subtitle__37vIr"},"Download your desired documents from the list below.")),e("div",{id:"activeDocumentdDivContainer",class:"YourDocumentDetails_policyDocumentsContainer__2ceG0"},e("div",{id:"activeDocumentsContainer"},e("div",{class:"jut__TabSet__tabSet YourDocumentDetails_documentsTabsContainer__2jjpz"},e("div",{id:"tabBarContainer",class:"jut__TabBar__tabBarContainer"},e("div",{id:"tabs_93506702",class:"jut__TabBar__tabBar",role:"tablist"},e("button",{type:"button",class:"jut__TabBar__heading active",id:"activeTab_50508372","data-tab":"activeTab",role:"tab","aria-controls":"activeTab","aria-selected":"true","data-collapsible":"false",tabindex:"0"},"Active"))),e("hr",{class:"jut__TabSet__divider"}),e("div",{id:"tabs_407108748",class:"jut__TabSet__content",role:"region"},e("div",{id:"activeTab","aria-labelledby":"activeTab_50508372",role:"tabpanel","aria-hidden":"false",tabindex:"0"}),e("div",{id:"activeDocumentCard"},e("div",{id:"activeDocumentDetails"},e("div",{id:"activeDocumentsDetailsHead",class:"YourDocumentDetails_activeDocumentsDetailsHead__2Ntyt"},e("p",{id:"activeDocumentsDetailsHeadDate"},"Date Issued"),e("p",{id:"activeDocumentsDetailsHeadName"},"Document Name")),e("div",{class:"jut__Accordion__accordion",role:"menu","aria-disabled":"false","aria-haspopup":"true"},e("div",{id:"activeDocumentContainerIterables"},this._docsList.map(((t={},i)=>e("documents-list-item",{document:t,documentindex:i})))))))))))):e("div",null,e("h3",null,"No Documents Found"))}static get watchers(){return{coverdetails:["arrayDataWatcher"]}}};i.style=":host{display:block}.jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapNone{grid-template-columns:1fr 5fr}.jut__TabBar__heading.active{width:170px}";const a=class{constructor(e){t(this,e),this.collapsed=!0}arrayDataWatcher(t){this._document="string"==typeof t?JSON.parse(t):t}componentWillLoad(){console.log(this.document),this.arrayDataWatcher(this.document),console.log("D ",this._document),this._documentIndex=`currentDocumentPolicy${this.documentindex}`,this._accordianCardIndex=`currentDocumentAccordionCard${this.documentindex}`}toggle(){console.log("clicked"),console.log(this.documentData),this.collapsed=!this.collapsed,this.documentData&&(this.collapsed?(this.documentData.classList.remove("jut__Collapse__show"),this.chevron.classList.remove("jut__Chevron__open"),this.accordian.classList.remove("jut__Accordion__isOpen")):(this.documentData.classList.add("jut__Collapse__show"),this.chevron.classList.add("jut__Chevron__open"),this.accordian.classList.add("jut__Accordion__isOpen")))}convertDate(t){const e=new Date(1e3*parseInt(t,10));let i=e.getMonth()+1,a=e.getDay();return` ${a<10?"0"+a:a}/${i<10?"0"+i:i}/${e.getFullYear()}`}render(){return e("div",{id:"currentDocumentAccordionCard0",ref:t=>this.accordian=t,class:"YourDocumentDetails_policydocument__1cDz5"},e("div",{id:"currentDocumentAccordionCard0_209711427",class:"jut__Accordion__cardHeading YourDocumentDetails_cardHeading__3MARG",role:"menuitem",tabindex:"0","aria-controls":"currentDocumentAccordionCard0_407108748","aria-expanded":"false"},e("div",{class:"jut__Accordion__cardTitle jut__Accordion__accordionToggle",onClick:this.toggle.bind(this)},e("i",{ref:t=>this.chevron=t,class:"mir mi-chevron-right jut__Chevron__chevronRight jut__Chevron__chevron jut__Chevron__chevronDefault",role:"button","aria-label":"Label"}),e("span",{class:"jut__Accordion__header"},e("p",null,this.convertDate(this._document.issueDate)),e("p",null,this._document.documentName)))),e("div",{role:"region",class:"jut__Collapse__collapse jut__Collapse__collapsed","aria-expanded":"false",id:this._accordianCardIndex,ref:t=>this.documentData=t,"aria-labelledby":"currentDocumentAccordionCard0_209711427","aria-live":"assertive"},e("div",{class:"jut__Accordion__cardBody"},e("div",{class:"jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapMedium",id:"activeDocumentGrid0"},e("div",{class:"jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapNone"},e("div",{id:this._documentIndex}),e("div",{id:"activeDocSupportingInfoContainer0",class:"YourDocumentDetails_docSupportingInfoContainer__1ltGe"},e("p",{id:"activeDocSupportingInfo0"},"This document includes:"),e("ul",{id:"activeDocSupportingInfoElements0",class:"activeDocSupportingInfoElements"},this._document.documentDetails.map(((t={})=>e("li",null,t)))),e("div",{id:"documentPolicydownloadContainer0",class:"YourDocumentDetails_downloadContainer__JtW_r"},e("button",{type:"button",class:"digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary YourDocumentDetails_imageDisplay__30Emt",id:"currentDocumentPolicyDownloadButton0"},e("span",null,e("span",null,"Download"))))))))))}static get watchers(){return{document:["arrayDataWatcher"]}}};a.style=":host{display:block}";export{i as documents_list,a as documents_list_item}