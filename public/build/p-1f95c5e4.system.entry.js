System.register(["./p-96f6b329.system.js"],(function(t){"use strict";var e,o,n;return{setters:[function(t){e=t.r;o=t.h;n=t.c}],execute:function(){var i=":host{display:block}.jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapNone{grid-template-columns:1fr 5fr}.jut__TabBar__heading.active{width:170px}";var a=t("documents_list",function(){function t(t){e(this,t)}t.prototype.arrayDataWatcher=function(t){if(typeof t==="string"){this._coverDetails=JSON.parse(t);this._coverDetails=this._coverDetails[0]}else{this._coverDetails=this.coverdetails}this._docsList=this._coverDetails.documents};t.prototype.convertDate=function(t){var e=["January","February","March","April","May","June","July","August","September","October","November","December"];var o=new Date(parseInt(t,10)*1e3);return" ".concat(o.getDay()," ").concat(e[o.getMonth()]," ").concat(o.getFullYear())};t.prototype.componentWillLoad=function(){this.arrayDataWatcher(this.coverdetails)};t.prototype.render=function(){if(this._docsList&&this._docsList.length>0){return o("div",{id:"documentDetailsContainerDiv",class:"YourDocumentDetails_documentDetailsContainerDiv__3QGVF"},o("div",{id:"yourDocumentsHeadingDiv",class:"YourDocumentDetails_yourDocumentsHeadingDivHeading__1jenA"},o("h3",{id:"yourDocumentCoverHeading",class:"YourDocumentDetails_title__OP-fp"},"Your Documents"),o("p",{id:"yourDocumentCoverSubtitle",class:"YourDocumentDetails_subtitle__37vIr"},"Download your desired documents from the list below.")),o("div",{id:"activeDocumentdDivContainer",class:"YourDocumentDetails_policyDocumentsContainer__2ceG0"},o("div",{id:"activeDocumentsContainer"},o("div",{class:"jut__TabSet__tabSet YourDocumentDetails_documentsTabsContainer__2jjpz"},o("div",{id:"tabBarContainer",class:"jut__TabBar__tabBarContainer"},o("div",{id:"tabs_93506702",class:"jut__TabBar__tabBar",role:"tablist"},o("button",{type:"button",class:"jut__TabBar__heading active",id:"activeTab_50508372","data-tab":"activeTab",role:"tab","aria-controls":"activeTab","aria-selected":"true","data-collapsible":"false",tabindex:"0"},"Active"))),o("hr",{class:"jut__TabSet__divider"}),o("div",{id:"tabs_407108748",class:"jut__TabSet__content",role:"region"},o("div",{id:"activeTab","aria-labelledby":"activeTab_50508372",role:"tabpanel","aria-hidden":"false",tabindex:"0"}),o("div",{id:"activeDocumentCard"},o("div",{id:"activeDocumentDetails"},o("div",{id:"activeDocumentsDetailsHead",class:"YourDocumentDetails_activeDocumentsDetailsHead__2Ntyt"},o("p",{id:"activeDocumentsDetailsHeadDate"},"Date Issued"),o("p",{id:"activeDocumentsDetailsHeadName"},"Document Name")),o("div",{class:"jut__Accordion__accordion",role:"menu","aria-disabled":"false","aria-haspopup":"true"},o("div",{id:"activeDocumentContainerIterables"},this._docsList.map((function(t,e){if(t===void 0){t={}}return o("documents-list-item",{document:t,"document-index":e})})))))))))),o("div",{id:"bookletIpidsContainer",class:"YourDocumentDetails_buttonContainer__2_Yfk"},o("div",{id:"bookletIpidsInfoContaier",class:"jut__InlineNotification__inlineNotification jut__InlineNotification__inlineNotificationInfo InfoComponent_admInlineNotification__3BzWU InfoComponent_admInlineNotificationInlineBlock__vbaoC InfoComponent_admInlineNotificationInlineInfo__YounC",role:"alert","aria-hidden":"false"},o("span",{class:"jut__InlineNotification__iconWrapper","aria-hidden":"true"},o("i",{class:"mir mi-info"})),o("span",{class:"jut__InlineNotification__message"},o("span",{class:"jut__InlineNotification__messageDefault"},o("p",{id:"statementContent"},"Please click below to view your Policy Booklets and Insurance Product Information Documents (IPIDs). Details of your cover can be found on the Policy Schedule(s), please refer to it to select the relevant IPIDs.")),o("span",null)))),o("div",{id:"expiredDocumentButtonDivContainer",class:"YourDocumentDetails_buttonContainer__2_Yfk"},o("div",{id:"documentButtonGrid"},o("div",{class:"jut__Grid__grid jut__Grid__vgapNone jut__Grid__hgapMedium YourDocumentDetails_documentButtonClass__-5Q9N"},o("button",{type:"button",class:"digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary YourDocumentDetails_documentButton__1VhMI",id:"documentViewIpidsButton"},o("span",null,o("span",null,"View IPIDs"))),o("button",{type:"button",class:"digitalButton__button jut__Button__button digitalButton__primary jut__Button__primary YourDocumentDetails_documentButton__1VhMI",id:"documentViewPolicyBookletButton"},o("span",null,o("span",null,"View Policy Booklets")))))))}else{return o("div",null,o("h3",null,"No Documents Found"))}};Object.defineProperty(t,"watchers",{get:function(){return{coverdetails:["arrayDataWatcher"]}},enumerable:false,configurable:true});return t}());a.style=i;var c=":host{display:block}";var r=t("documents_list_item",function(){function t(t){e(this,t);this.downloadDocument=n(this,"downloadDocument",7);this.collapsed=true}t.prototype.arrayDataWatcher=function(t){if(typeof t==="string"){this._document=JSON.parse(t)}else{this._document=t}};t.prototype.componentWillLoad=function(){this.arrayDataWatcher(this.document);this._documentIndex="currentDocumentPolicy".concat(this.documentIndex);this._accordianCardIndex="currentDocumentAccordionCard".concat(this.documentIndex)};t.prototype.downloadDocumentClick=function(){console.log("Downloading: ",this._document.publicID);this.downloadDocument.emit({index:this.documentIndex,publicID:this._document.publicID})};t.prototype.toggle=function(){this.collapsed=!this.collapsed;if(this.documentData){if(this.collapsed){this.documentData.classList.remove("jut__Collapse__show");this.chevron.classList.remove("jut__Chevron__open");this.accordian.classList.remove("jut__Accordion__isOpen")}else{this.documentData.classList.add("jut__Collapse__show");this.chevron.classList.add("jut__Chevron__open");this.accordian.classList.add("jut__Accordion__isOpen")}}};t.prototype.convertDate=function(t){var e=new Date(parseInt(t,10)*1e3);var o=e.getMonth()+1;var n=e.getDay();var i=o<10?"0"+o:o;var a=n<10?"0"+n:n;return" ".concat(a,"/").concat(i,"/").concat(e.getFullYear())};t.prototype.render=function(){var t=this;return o("div",{id:"currentDocumentAccordionCard0",ref:function(e){return t.accordian=e},class:"YourDocumentDetails_policydocument__1cDz5"},o("div",{id:"currentDocumentAccordionCard0_209711427",class:"jut__Accordion__cardHeading YourDocumentDetails_cardHeading__3MARG",role:"menuitem",tabindex:"0","aria-controls":"currentDocumentAccordionCard0_407108748","aria-expanded":"false"},o("div",{class:"jut__Accordion__cardTitle jut__Accordion__accordionToggle",onClick:this.toggle.bind(this)},o("i",{ref:function(e){return t.chevron=e},class:"mir mi-chevron-right jut__Chevron__chevronRight jut__Chevron__chevron jut__Chevron__chevronDefault",role:"button","aria-label":"Label"}),o("span",{class:"jut__Accordion__header"},o("p",null,this.convertDate(this._document.issueDate)),o("p",null,this._document.documentName)))),o("div",{role:"region",class:"jut__Collapse__collapse jut__Collapse__collapsed","aria-expanded":"false",id:this._accordianCardIndex,ref:function(e){return t.documentData=e},"aria-labelledby":"currentDocumentAccordionCard0_209711427","aria-live":"assertive"},o("div",{class:"jut__Accordion__cardBody"},o("div",{class:"jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapMedium",id:"activeDocumentGrid0"},o("div",{class:"jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapNone"},o("div",{id:this._documentIndex}),o("div",{id:"activeDocSupportingInfoContainer0",class:"YourDocumentDetails_docSupportingInfoContainer__1ltGe"},o("p",{id:"activeDocSupportingInfo0"},"This document includes:"),o("ul",{id:"activeDocSupportingInfoElements0",class:"activeDocSupportingInfoElements"},this._document.documentDetails.map((function(t){if(t===void 0){t={}}return o("li",null,t)}))),o("div",{id:"documentPolicydownloadContainer0",class:"YourDocumentDetails_downloadContainer__JtW_r"},o("button",{type:"button",class:"digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary YourDocumentDetails_imageDisplay__30Emt",id:"currentDocumentPolicyDownloadButton0",onClick:function(){t.downloadDocumentClick()}},o("span",null,o("span",null,"Download"))))))))))};Object.defineProperty(t,"watchers",{get:function(){return{document:["arrayDataWatcher"]}},enumerable:false,configurable:true});return t}());r.style=c}}}));