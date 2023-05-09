'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5ebe992a.js');

const documentsListCss = ":host{display:block}.jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapNone{grid-template-columns:1fr 5fr}.jut__TabBar__heading.active{width:170px}";

const DocumentsList = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  arrayDataWatcher(newValue) {
    if (typeof newValue === 'string') {
      this._coverDetails = JSON.parse(newValue);
      this._coverDetails = this._coverDetails[0];
    }
    else {
      this._coverDetails = this.coverdetails;
    }
    this._docsList = this._coverDetails.documents;
  }
  convertDate(inDate) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dateVal = new Date(parseInt(inDate, 10) * 1000);
    return ` ${dateVal.getDay()} ${monthNames[dateVal.getMonth()]} ${dateVal.getFullYear()}`;
  }
  componentWillLoad() {
    this.arrayDataWatcher(this.coverdetails);
  }
  render() {
    if (this._docsList && this._docsList.length > 0) {
      return (index.h("div", { id: "documentDetailsContainerDiv", class: "YourDocumentDetails_documentDetailsContainerDiv__3QGVF" }, index.h("div", { id: "yourDocumentsHeadingDiv", class: "YourDocumentDetails_yourDocumentsHeadingDivHeading__1jenA" }, index.h("h3", { id: "yourDocumentCoverHeading", class: "YourDocumentDetails_title__OP-fp" }, "Your Documents"), index.h("p", { id: "yourDocumentCoverSubtitle", class: "YourDocumentDetails_subtitle__37vIr" }, "Download your desired documents from the list below.")), index.h("div", { id: "activeDocumentdDivContainer", class: "YourDocumentDetails_policyDocumentsContainer__2ceG0" }, index.h("div", { id: "activeDocumentsContainer" }, index.h("div", { class: "jut__TabSet__tabSet YourDocumentDetails_documentsTabsContainer__2jjpz" }, index.h("div", { id: "tabBarContainer", class: "jut__TabBar__tabBarContainer" }, index.h("div", { id: "tabs_93506702", class: "jut__TabBar__tabBar", role: "tablist" }, index.h("button", { type: "button", class: "jut__TabBar__heading active", id: "activeTab_50508372", "data-tab": "activeTab", role: "tab", "aria-controls": "activeTab", "aria-selected": "true", "data-collapsible": "false", tabindex: "0" }, "Active"))), index.h("hr", { class: "jut__TabSet__divider" }), index.h("div", { id: "tabs_407108748", class: "jut__TabSet__content", role: "region" }, index.h("div", { id: "activeTab", "aria-labelledby": "activeTab_50508372", role: "tabpanel", "aria-hidden": "false", tabindex: "0" }), index.h("div", { id: "activeDocumentCard" }, index.h("div", { id: "activeDocumentDetails" }, index.h("div", { id: "activeDocumentsDetailsHead", class: "YourDocumentDetails_activeDocumentsDetailsHead__2Ntyt" }, index.h("p", { id: "activeDocumentsDetailsHeadDate" }, "Date Issued"), index.h("p", { id: "activeDocumentsDetailsHeadName" }, "Document Name")), index.h("div", { class: "jut__Accordion__accordion", role: "menu", "aria-disabled": "false", "aria-haspopup": "true" }, index.h("div", { id: "activeDocumentContainerIterables" }, this._docsList.map((document = {}, index$1) => index.h("documents-list-item", { document: document, "document-index": index$1 })))))))))), index.h("div", { id: "bookletIpidsContainer", class: "YourDocumentDetails_buttonContainer__2_Yfk" }, index.h("div", { id: "bookletIpidsInfoContaier", class: "jut__InlineNotification__inlineNotification jut__InlineNotification__inlineNotificationInfo InfoComponent_admInlineNotification__3BzWU InfoComponent_admInlineNotificationInlineBlock__vbaoC InfoComponent_admInlineNotificationInlineInfo__YounC", role: "alert", "aria-hidden": "false" }, index.h("span", { class: "jut__InlineNotification__iconWrapper", "aria-hidden": "true" }, index.h("i", { class: "mir mi-info" })), index.h("span", { class: "jut__InlineNotification__message" }, index.h("span", { class: "jut__InlineNotification__messageDefault" }, index.h("p", { id: "statementContent" }, "Please click below to view your Policy Booklets and Insurance Product Information Documents (IPIDs). Details of your cover can be found on the Policy Schedule(s), please refer to it to select the relevant IPIDs.")), index.h("span", null)))), index.h("div", { id: "expiredDocumentButtonDivContainer", class: "YourDocumentDetails_buttonContainer__2_Yfk" }, index.h("div", { id: "documentButtonGrid" }, index.h("div", { class: "jut__Grid__grid jut__Grid__vgapNone jut__Grid__hgapMedium YourDocumentDetails_documentButtonClass__-5Q9N" }, index.h("button", { type: "button", class: "digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary YourDocumentDetails_documentButton__1VhMI", id: "documentViewIpidsButton" }, index.h("span", null, index.h("span", null, "View IPIDs"))), index.h("button", { type: "button", class: "digitalButton__button jut__Button__button digitalButton__primary jut__Button__primary YourDocumentDetails_documentButton__1VhMI", id: "documentViewPolicyBookletButton" }, index.h("span", null, index.h("span", null, "View Policy Booklets"))))))));
    }
    else {
      return (index.h("div", null, index.h("h3", null, "No Documents Found")));
    }
  }
  static get watchers() { return {
    "coverdetails": ["arrayDataWatcher"]
  }; }
};
DocumentsList.style = documentsListCss;

const documentsListItemCss = ":host{display:block}";

const DocumentsListItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.downloadDocument = index.createEvent(this, "downloadDocument", 7);
    /**
     * State: collapsed: boolean
     * Indicator of wether the accordian is collapsed or not
     */
    this.collapsed = true;
  }
  arrayDataWatcher(newValue) {
    if (typeof newValue === 'string') {
      this._document = JSON.parse(newValue);
    }
    else {
      this._document = newValue;
    }
  }
  componentWillLoad() {
    this.arrayDataWatcher(this.document);
    this._documentIndex = `currentDocumentPolicy${this.documentIndex}`;
    this._accordianCardIndex = `currentDocumentAccordionCard${this.documentIndex}`;
  }
  downloadDocumentClick() {
    console.log("Downloading: ", this._document.publicID);
    this.downloadDocument.emit({
      index: this.documentIndex,
      publicID: this._document.publicID
    });
  }
  toggle() {
    this.collapsed = !this.collapsed;
    if (this.documentData) {
      if (this.collapsed) {
        this.documentData.classList.remove('jut__Collapse__show');
        this.chevron.classList.remove('jut__Chevron__open');
        this.accordian.classList.remove('jut__Accordion__isOpen');
      }
      else {
        this.documentData.classList.add('jut__Collapse__show');
        this.chevron.classList.add('jut__Chevron__open');
        this.accordian.classList.add('jut__Accordion__isOpen');
      }
    }
  }
  convertDate(inDate) {
    const dateVal = new Date(parseInt(inDate, 10) * 1000);
    let monthVal = dateVal.getMonth() + 1;
    let dayVal = dateVal.getDay();
    let monthStr = (monthVal < 10) ? '0' + monthVal : monthVal;
    let dayStr = (dayVal < 10) ? '0' + dayVal : dayVal;
    return ` ${dayStr}/${monthStr}/${dateVal.getFullYear()}`;
  }
  render() {
    return (index.h("div", { id: "currentDocumentAccordionCard0", ref: (el) => this.accordian = el, class: "YourDocumentDetails_policydocument__1cDz5" }, index.h("div", { id: "currentDocumentAccordionCard0_209711427", class: "jut__Accordion__cardHeading YourDocumentDetails_cardHeading__3MARG", role: "menuitem", tabindex: "0", "aria-controls": "currentDocumentAccordionCard0_407108748", "aria-expanded": "false" }, index.h("div", { class: "jut__Accordion__cardTitle jut__Accordion__accordionToggle", onClick: this.toggle.bind(this) }, index.h("i", { ref: (el) => this.chevron = el, class: "mir mi-chevron-right jut__Chevron__chevronRight jut__Chevron__chevron jut__Chevron__chevronDefault", role: "button", "aria-label": "Label" }), index.h("span", { class: "jut__Accordion__header" }, index.h("p", null, this.convertDate(this._document.issueDate)), index.h("p", null, this._document.documentName)))), index.h("div", { role: "region", class: "jut__Collapse__collapse jut__Collapse__collapsed", "aria-expanded": "false", id: this._accordianCardIndex, ref: (el) => this.documentData = el, "aria-labelledby": "currentDocumentAccordionCard0_209711427", "aria-live": "assertive" }, index.h("div", { class: "jut__Accordion__cardBody" }, index.h("div", { class: "jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapMedium", id: "activeDocumentGrid0" }, index.h("div", { class: "jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapNone" }, index.h("div", { id: this._documentIndex }), index.h("div", { id: "activeDocSupportingInfoContainer0", class: "YourDocumentDetails_docSupportingInfoContainer__1ltGe" }, index.h("p", { id: "activeDocSupportingInfo0" }, "This document includes:"), index.h("ul", { id: "activeDocSupportingInfoElements0", class: "activeDocSupportingInfoElements" }, this._document.documentDetails.map((detail = {}) => index.h("li", null, detail))), index.h("div", { id: "documentPolicydownloadContainer0", class: "YourDocumentDetails_downloadContainer__JtW_r" }, index.h("button", { type: "button", class: "digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary YourDocumentDetails_imageDisplay__30Emt", id: "currentDocumentPolicyDownloadButton0", onClick: () => { this.downloadDocumentClick(); } }, index.h("span", null, index.h("span", null, "Download")))))))))));
  }
  static get watchers() { return {
    "document": ["arrayDataWatcher"]
  }; }
};
DocumentsListItem.style = documentsListItemCss;

exports.documents_list = DocumentsList;
exports.documents_list_item = DocumentsListItem;
