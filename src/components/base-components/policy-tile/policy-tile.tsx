import { Component, Prop, h } from '@stencil/core';
import { PolicyDetailsInterface } from '../../policy-details/policy-details/policy-details'

@Component({
  tag: 'policy-tile',
  styleUrl: 'policy-tile.css',
  shadow: false,
})



export class PolicyTile {

  @Prop() policydetails: PolicyDetailsInterface;
  @Prop() policyindex: number;
  private _policyIndex: string;

  componentWillLoad() {
    this._policyIndex = `policyCovers${this.policyindex}`;
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
              {
                this.policydetails.selected ? 
                <button type="button" class="digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary jut__Button__materialIcon SelectButton_selectButton__2EnMv" id="selectButton" data-testid="selectButton">
                  <span id="selectedSpan">
                    <span>Selected</span>
                    <i class="mir mi-done jut__Button__icon jut__Button__rightIcon"></i>
                  </span>
                </button> :
                <button type="button" class="digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary" id="selectButton" data-testid="selectButton">
                  <span id="selectedSpan">
                    <span>Select</span>
                    <i class="mir mi-done jut__Button__icon jut__Button__rightIcon"></i>
                  </span>
                </button>
              }
              </div>
              <div class="renewalBannerContainer" id="renewalBannerContainer"></div>
            </div>
            <policy-subsection-header>Manage and View Your Policy</policy-subsection-header>
            <policy-term-container></policy-term-container>
            <cover-details-container></cover-details-container>
          </div> 
        </div>
      </div>
    );
  }

}