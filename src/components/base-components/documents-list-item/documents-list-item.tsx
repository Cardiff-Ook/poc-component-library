import { Component, h, Prop, Watch, State } from '@stencil/core';
import { DocumentDataInterface } from '../../../interfaces/documentDataInterface';

@Component({
  tag: 'documents-list-item',
  styleUrl: 'documents-list-item.css',
  shadow: false,
})
export class DocumentsListItem {
  @Prop() document: DocumentDataInterface | string;
  @Prop() documentindex: number;
  private _document: DocumentDataInterface;
  private _documentIndex: string;
  private _accordianCardIndex: string;
  documentData!: HTMLElement;
  chevron!: HTMLElement;
  accordian!: HTMLElement
  @State() collapsed: boolean = true;

  @Watch('document')

  arrayDataWatcher(newValue: any | string) {
    if (typeof newValue === 'string') {
       this._document = JSON.parse(newValue);
    }
    else {
      this._document = newValue;
    }
  }

  componentWillLoad() {
    console.log(this.document);
    this.arrayDataWatcher(this.document);
    console.log("D ", this._document);
    this._documentIndex = `currentDocumentPolicy${this.documentindex}`;
    this._accordianCardIndex = `currentDocumentAccordionCard${this.documentindex}`;
  }

  toggle() {
    console.log("clicked");
    console.log(this.documentData);
    this.collapsed = !this.collapsed;

    if (this.documentData) {
      if (this.collapsed) {
        this.documentData.classList.remove('jut__Collapse__show');
        this.chevron.classList.remove('jut__Chevron__open');
        this.accordian.classList.remove('jut__Accordion__isOpen');
      } else {
        this.documentData.classList.add('jut__Collapse__show');
        this.chevron.classList.add('jut__Chevron__open');
        this.accordian.classList.add('jut__Accordion__isOpen');
      }
    }
    
  }

  convertDate(inDate: string) {
    const dateVal = new Date(parseInt(inDate,10)*1000);
    let monthVal = dateVal.getMonth() + 1;
    let dayVal = dateVal.getDay();

    let monthStr = (monthVal < 10) ? '0'+monthVal : monthVal;
    let dayStr = (dayVal < 10) ? '0'+dayVal : dayVal;

    return ` ${dayStr}/${monthStr}/${dateVal.getFullYear()}`
  }

  render() {
    return (
      <div id="currentDocumentAccordionCard0" ref={(el) => this.accordian = el as HTMLElement} class="YourDocumentDetails_policydocument__1cDz5">
        <div id="currentDocumentAccordionCard0_209711427" class="jut__Accordion__cardHeading YourDocumentDetails_cardHeading__3MARG" role="menuitem" tabindex="0" aria-controls="currentDocumentAccordionCard0_407108748" aria-expanded="false">
          <div class="jut__Accordion__cardTitle jut__Accordion__accordionToggle"  onClick={this.toggle.bind(this)}>
            <i ref={(el) => this.chevron = el as HTMLElement} class="mir mi-chevron-right jut__Chevron__chevronRight jut__Chevron__chevron jut__Chevron__chevronDefault" role="button" aria-label="Label"></i>
            <span class="jut__Accordion__header"><p>{this.convertDate(this._document.issueDate)}</p><p>{this._document.documentName}</p></span>
          </div>
        </div>
        <div role="region" class="jut__Collapse__collapse jut__Collapse__collapsed" aria-expanded="false" id={this._accordianCardIndex} ref={(el) => this.documentData = el as HTMLElement} aria-labelledby="currentDocumentAccordionCard0_209711427" aria-live="assertive">
          <div class="jut__Accordion__cardBody"><div class="jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapMedium" id="activeDocumentGrid0">
            <div class="jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapNone">
              <div id={this._documentIndex}></div>
                <div id="activeDocSupportingInfoContainer0" class="YourDocumentDetails_docSupportingInfoContainer__1ltGe">
                  <p id="activeDocSupportingInfo0">This document includes:</p>
                  <ul id="activeDocSupportingInfoElements0" class="activeDocSupportingInfoElements">
                            {
                              this._document.documentDetails.map((detail:any={}) =>
                              <li>{detail}</li>
                            )}
                  </ul>
                  <div id="documentPolicydownloadContainer0" class="YourDocumentDetails_downloadContainer__JtW_r">
                    <button type="button" class="digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary YourDocumentDetails_imageDisplay__30Emt" id="currentDocumentPolicyDownloadButton0">
                      <span>
                        <span>Download</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
