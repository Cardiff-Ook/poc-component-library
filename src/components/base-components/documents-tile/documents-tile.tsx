import { Component, Prop, h, Element, State } from '@stencil/core';
import { PolicyDataInterface } from '../../../interfaces/policyDataInterface';

@Component({
  tag: 'documents-tile',
  styleUrl: 'documents-tile.css',
  shadow: false,
})
export class DocumentsTile {
  @Prop() policydetails: PolicyDataInterface;
  @Prop() policyindex: number;
  private _policyIndex: string;
  @State() collapsed: boolean;

  @Element() private element: HTMLElement;

  componentWillLoad() {
    console.log("A", this.policydetails);
    this._policyIndex = `policyCovers${this.policyindex}`;
  }

  toggle() {
    var btn = this.element.querySelectorAll('button');
    this.collapsed = !this.collapsed;

    if (!!btn[0])
      if (this.collapsed) {
        btn[0].innerHTML = '<span id="selectedSpan"><span>View Documents</span></span>';
        btn[0].classList.remove("SelectButton_selectButton__2EnMv");
        btn[0].classList.remove("jut__Button__materialIcon");
       } else {
        btn[0].innerHTML = '<span id="selectedSpan"><span>Selected</span><i class="mir mi-done jut__Button__icon jut__Button__rightIcon"></i></span>';
        btn[0].classList.add("SelectButton_selectButton__2EnMv");
        btn[0].classList.add("jut__Button__materialIcon");
       }
  }

  render() {
    return (
      <div id={this._policyIndex} key={this.policydetails.id} class="MyPoliciesPage_tileContainer__CASCC MyPoliciesPage_policyCovers__3cFyO">
        <div>
          <div class="jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapMedium">
            <div class="jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapNone PolicyListComponent_policyContainer__23NJ9" id="policyContainer" data-testid="policyListComponent">
              <div class="jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapSmall PolicyListComponent_policyDetails__GSIKK" id="policyDetails">
                <img src={this.policydetails.imageSrc} id="policyTypeIcon" class="PolicyListComponent_policyIcon__1QzmW" />
                <div id="policyInfo" class="gwAlertContent PolicyListComponent_policyInfo__VwAiN">
                  <span id="policyType" class="PolicyListComponent_policyType__15t3J">{this.policydetails.policytype} Insurance</span>
                  <div class="jut__Flex__gwFlex jut__Flex__gwGapMedium jut__Flex__gwWrap jut__Flex__gwDirectionRow PolicyListComponent_policyNumberContainer__WNSvc" id="policyNumberContainer">
                    <span id="policyNumberLabel" class="gwEmphasis">Policy Number:</span><span id="policyNumber" class="PolicyListComponent_policyNumber__2_S94" data-cs-mask="">{this.policydetails.id}</span>
                  </div>
                </div>
              </div>
              <div id="policyButtonContainer" class="PolicyListComponent_policyButtonContainer__1Q9M1">
              <button type="button" class="digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary" id="viewButton" data-testid="viewButton" onClick={this.toggle.bind(this)}>
                <span id="selectedSpan">
                  <span>Selected</span>
                  <i class="mir mi-done jut__Button__icon jut__Button__rightIcon"></i></span>
              </button>
              </div>
              <div class="renewalBannerContainer" id="renewalBannerContainer"></div>
            </div>
            <policy-term-container></policy-term-container>
            <cover-details-container coverdetails={[this.policydetails]}></cover-details-container>
          </div> 
        </div> 
      </div>
    );
  }

}
