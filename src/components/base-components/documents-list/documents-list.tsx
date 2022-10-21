import { Component, Prop, h, Watch } from '@stencil/core';
import { DocumentDataInterface } from '../../../interfaces/documentDataInterface';
import { PolicyDataInterface } from '../../../interfaces/policyDataInterface';
@Component({
  tag: 'documents-list',
  styleUrl: 'documents-list.css',
  shadow: false,
})
export class DocumentsList {

  @Prop() coverdetails: PolicyDataInterface | string;
  private _coverDetails: PolicyDataInterface;
  private _docsList: Array<DocumentDataInterface>;

  @Watch('coverdetails')
  arrayDataWatcher(newValue: any | string) {
    if (typeof newValue === 'string') {
       this._coverDetails = JSON.parse(newValue);
       this._coverDetails = this._coverDetails[0] as PolicyDataInterface;
    } else {
      this._coverDetails = this.coverdetails as PolicyDataInterface;
    }
    this._docsList = this._coverDetails.documents;

  }

  convertDate(inDate: string) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dateVal = new Date(parseInt(inDate,10)*1000);

    return ` ${dateVal.getDay()} ${monthNames[dateVal.getMonth()]} ${dateVal.getFullYear()}`
  }

  componentWillLoad() {
    this.arrayDataWatcher(this.coverdetails);
  }
  render() {
    if (this._docsList && this._docsList.length > 0) {
      return (
          <div id="documentDetailsContainerDiv" class="YourDocumentDetails_documentDetailsContainerDiv__3QGVF">
            <div id="yourDocumentsHeadingDiv" class="YourDocumentDetails_yourDocumentsHeadingDivHeading__1jenA">
              <h3 id="yourDocumentCoverHeading" class="YourDocumentDetails_title__OP-fp">Your Documents</h3>
              <p id="yourDocumentCoverSubtitle" class="YourDocumentDetails_subtitle__37vIr">Download your desired documents from the list below.</p>
            </div>
            <div id="activeDocumentdDivContainer" class="YourDocumentDetails_policyDocumentsContainer__2ceG0">
              <div id="activeDocumentsContainer">
                <div class="jut__TabSet__tabSet YourDocumentDetails_documentsTabsContainer__2jjpz">
                  <div id="tabBarContainer" class="jut__TabBar__tabBarContainer">
                    <div id="tabs_93506702" class="jut__TabBar__tabBar" role="tablist">
                      <button type="button" class="jut__TabBar__heading active" id="activeTab_50508372" data-tab="activeTab" role="tab" aria-controls="activeTab" aria-selected="true" data-collapsible="false" tabindex="0">Active</button>
                    </div>
                  </div>
                  <hr class="jut__TabSet__divider"></hr>
                  <div id="tabs_407108748" class="jut__TabSet__content" role="region">
                    <div id="activeTab" aria-labelledby="activeTab_50508372" role="tabpanel" aria-hidden="false" tabindex="0" />
                      <div id="activeDocumentCard">
                        <div id="activeDocumentDetails">
                          <div id="activeDocumentsDetailsHead" class="YourDocumentDetails_activeDocumentsDetailsHead__2Ntyt">
                            <p id="activeDocumentsDetailsHeadDate">Date Issued</p>
                            <p id="activeDocumentsDetailsHeadName">Document Name</p>
                          </div>
                          <div class="jut__Accordion__accordion" role="menu" aria-disabled="false" aria-haspopup="true">
                            <div id="activeDocumentContainerIterables">
                              <div id="currentDocumentAccordionCard0" class="YourDocumentDetails_policydocument__1cDz5"><div id="currentDocumentAccordionCard0_209711427" class="jut__Accordion__cardHeading YourDocumentDetails_cardHeading__3MARG" role="menuitem" tabindex="0" aria-controls="currentDocumentAccordionCard0_407108748" aria-expanded="false">
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
      } else {
        return (
          <div>
            <h3>No Documents Found</h3>
          </div>
        )
      }
  }

}
