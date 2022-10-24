import { Component, h, Prop, Watch } from '@stencil/core';
import { DocumentDataInterface } from '../../../interfaces/documentDataInterface';

@Component({
  tag: 'documents-list-item',
  styleUrl: 'documents-list-item.css',
  shadow: false,
})
export class DocumentsListItem {
  @Prop() document: DocumentDataInterface | string;
  private _document: DocumentDataInterface;

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
  }
  render() {
    return (
      <div id="currentDocumentAccordionCard0" class="YourDocumentDetails_policydocument__1cDz5">
        <div id="currentDocumentAccordionCard0_209711427" class="jut__Accordion__cardHeading YourDocumentDetails_cardHeading__3MARG" role="menuitem" tabindex="0" aria-controls="currentDocumentAccordionCard0_407108748" aria-expanded="false">
          <div class="jut__Accordion__cardTitle jut__Accordion__accordionToggle">
            <i class="mir mi-chevron-right jut__Chevron__chevronRight jut__Chevron__chevron jut__Chevron__chevronDefault" role="button" aria-label="Label"></i>
            <span class="jut__Accordion__header"><p>16/11/21</p><p>Renewal Invitation</p></span>
          </div>
        </div>
        <div role="region" class="jut__Collapse__collapse jut__Collapse__collapsed" aria-expanded="false" id="currentDocumentAccordionCard0_407108748" aria-labelledby="currentDocumentAccordionCard0_209711427" aria-live="assertive">
          <div class="jut__Accordion__cardBody"><div class="jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapMedium" id="activeDocumentGrid0">
            <div class="jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapNone">
              <div id="currentDocumentPolicy0"></div>
                <div id="activeDocSupportingInfoContainer0" class="YourDocumentDetails_docSupportingInfoContainer__1ltGe">
                  <p id="activeDocSupportingInfo0">This document includes:</p>
                  <ul id="activeDocSupportingInfoElements0" class="activeDocSupportingInfoElements">
                    <li>This displays key information about your renewal offer and your upcoming renewal date.</li>
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
