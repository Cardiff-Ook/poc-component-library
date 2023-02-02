import { r as registerInstance, h } from './index-cd495fd3.js';

const documentsListCss = ":host{display:block}.jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapNone{grid-template-columns:1fr 5fr}.jut__TabBar__heading.active{width:170px}";

const DocumentsList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
      return (h("div", { id: "documentDetailsContainerDiv", class: "YourDocumentDetails_documentDetailsContainerDiv__3QGVF" }, h("div", { id: "yourDocumentsHeadingDiv", class: "YourDocumentDetails_yourDocumentsHeadingDivHeading__1jenA" }, h("h3", { id: "yourDocumentCoverHeading", class: "YourDocumentDetails_title__OP-fp" }, "Your Documents"), h("p", { id: "yourDocumentCoverSubtitle", class: "YourDocumentDetails_subtitle__37vIr" }, "Download your desired documents from the list below.")), h("div", { id: "activeDocumentdDivContainer", class: "YourDocumentDetails_policyDocumentsContainer__2ceG0" }, h("div", { id: "activeDocumentsContainer" }, h("div", { class: "jut__TabSet__tabSet YourDocumentDetails_documentsTabsContainer__2jjpz" }, h("div", { id: "tabBarContainer", class: "jut__TabBar__tabBarContainer" }, h("div", { id: "tabs_93506702", class: "jut__TabBar__tabBar", role: "tablist" }, h("button", { type: "button", class: "jut__TabBar__heading active", id: "activeTab_50508372", "data-tab": "activeTab", role: "tab", "aria-controls": "activeTab", "aria-selected": "true", "data-collapsible": "false", tabindex: "0" }, "Active"))), h("hr", { class: "jut__TabSet__divider" }), h("div", { id: "tabs_407108748", class: "jut__TabSet__content", role: "region" }, h("div", { id: "activeTab", "aria-labelledby": "activeTab_50508372", role: "tabpanel", "aria-hidden": "false", tabindex: "0" }), h("div", { id: "activeDocumentCard" }, h("div", { id: "activeDocumentDetails" }, h("div", { id: "activeDocumentsDetailsHead", class: "YourDocumentDetails_activeDocumentsDetailsHead__2Ntyt" }, h("p", { id: "activeDocumentsDetailsHeadDate" }, "Date Issued"), h("p", { id: "activeDocumentsDetailsHeadName" }, "Document Name")), h("div", { class: "jut__Accordion__accordion", role: "menu", "aria-disabled": "false", "aria-haspopup": "true" }, h("div", { id: "activeDocumentContainerIterables" }, this._docsList.map((document = {}, index) => h("documents-list-item", { document: document, "document-index": index })))))))))), h("div", { id: "bookletIpidsContainer", class: "YourDocumentDetails_buttonContainer__2_Yfk" }, h("div", { id: "bookletIpidsInfoContaier", class: "jut__InlineNotification__inlineNotification jut__InlineNotification__inlineNotificationInfo InfoComponent_admInlineNotification__3BzWU InfoComponent_admInlineNotificationInlineBlock__vbaoC InfoComponent_admInlineNotificationInlineInfo__YounC", role: "alert", "aria-hidden": "false" }, h("span", { class: "jut__InlineNotification__iconWrapper", "aria-hidden": "true" }, h("i", { class: "mir mi-info" })), h("span", { class: "jut__InlineNotification__message" }, h("span", { class: "jut__InlineNotification__messageDefault" }, h("p", { id: "statementContent" }, "Please click below to view your Policy Booklets and Insurance Product Information Documents (IPIDs). Details of your cover can be found on the Policy Schedule(s), please refer to it to select the relevant IPIDs.")), h("span", null)))), h("div", { id: "expiredDocumentButtonDivContainer", class: "YourDocumentDetails_buttonContainer__2_Yfk" }, h("div", { id: "documentButtonGrid" }, h("div", { class: "jut__Grid__grid jut__Grid__vgapNone jut__Grid__hgapMedium YourDocumentDetails_documentButtonClass__-5Q9N" }, h("button", { type: "button", class: "digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary YourDocumentDetails_documentButton__1VhMI", id: "documentViewIpidsButton" }, h("span", null, h("span", null, "View IPIDs"))), h("button", { type: "button", class: "digitalButton__button jut__Button__button digitalButton__primary jut__Button__primary YourDocumentDetails_documentButton__1VhMI", id: "documentViewPolicyBookletButton" }, h("span", null, h("span", null, "View Policy Booklets"))))))));
    }
    else {
      return (h("div", null, h("h3", null, "No Documents Found")));
    }
  }
  static get watchers() { return {
    "coverdetails": ["arrayDataWatcher"]
  }; }
};
DocumentsList.style = documentsListCss;

export { DocumentsList as documents_list };
