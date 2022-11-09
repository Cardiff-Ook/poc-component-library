import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const documentsListItemCss = ":host{display:block}";

const DocumentsListItem = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.downloadDocument = createEvent(this, "downloadDocument", 7);
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
    return (h("div", { id: "currentDocumentAccordionCard0", ref: (el) => this.accordian = el, class: "YourDocumentDetails_policydocument__1cDz5" }, h("div", { id: "currentDocumentAccordionCard0_209711427", class: "jut__Accordion__cardHeading YourDocumentDetails_cardHeading__3MARG", role: "menuitem", tabindex: "0", "aria-controls": "currentDocumentAccordionCard0_407108748", "aria-expanded": "false" }, h("div", { class: "jut__Accordion__cardTitle jut__Accordion__accordionToggle", onClick: this.toggle.bind(this) }, h("i", { ref: (el) => this.chevron = el, class: "mir mi-chevron-right jut__Chevron__chevronRight jut__Chevron__chevron jut__Chevron__chevronDefault", role: "button", "aria-label": "Label" }), h("span", { class: "jut__Accordion__header" }, h("p", null, this.convertDate(this._document.issueDate)), h("p", null, this._document.documentName)))), h("div", { role: "region", class: "jut__Collapse__collapse jut__Collapse__collapsed", "aria-expanded": "false", id: this._accordianCardIndex, ref: (el) => this.documentData = el, "aria-labelledby": "currentDocumentAccordionCard0_209711427", "aria-live": "assertive" }, h("div", { class: "jut__Accordion__cardBody" }, h("div", { class: "jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapMedium", id: "activeDocumentGrid0" }, h("div", { class: "jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapNone" }, h("div", { id: this._documentIndex }), h("div", { id: "activeDocSupportingInfoContainer0", class: "YourDocumentDetails_docSupportingInfoContainer__1ltGe" }, h("p", { id: "activeDocSupportingInfo0" }, "This document includes:"), h("ul", { id: "activeDocSupportingInfoElements0", class: "activeDocSupportingInfoElements" }, this._document.documentDetails.map((detail = {}) => h("li", null, detail))), h("div", { id: "documentPolicydownloadContainer0", class: "YourDocumentDetails_downloadContainer__JtW_r" }, h("button", { type: "button", class: "digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary YourDocumentDetails_imageDisplay__30Emt", id: "currentDocumentPolicyDownloadButton0", onClick: () => { this.downloadDocumentClick(); } }, h("span", null, h("span", null, "Download")))))))))));
  }
  static get watchers() { return {
    "document": ["arrayDataWatcher"]
  }; }
  static get style() { return documentsListItemCss; }
}, [0, "documents-list-item", {
    "document": [1],
    "documentIndex": [2, "document-index"],
    "collapsed": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["documents-list-item"];
  components.forEach(tagName => { switch (tagName) {
    case "documents-list-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, DocumentsListItem);
      }
      break;
  } });
}

export { DocumentsListItem as D, defineCustomElement as d };
