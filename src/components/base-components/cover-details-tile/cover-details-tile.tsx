import { Component, Prop, Watch, h, State, Element } from '@stencil/core';
import { PolicyDataInterface } from '../../../interfaces/policyDataInterface';

@Component({
  tag: 'cover-details-tile',
  styleUrl: 'cover-details-tile.css',
  shadow: false,
})
export class CoverDetailsTile {

  @Prop() coverdetails: PolicyDataInterface | string;
  @Prop() coverindex: number;
  @State() collapsed: boolean;
  private _coverDetails: PolicyDataInterface;
  private _tileId: string;

  @Element() private element: HTMLElement;

@Watch('coverdetails')
  arrayDataWatcher(newValue: any | string) {
    if (typeof newValue === 'string') {
       this._coverDetails = JSON.parse(newValue);
    }
    else {
      this._coverDetails = newValue;
    }

    if (this._coverDetails !== undefined)
      this._coverDetails.imageSrc =  `/assets/claim-cover-${this._coverDetails.policytype}.svg`;
  }

  toggle() {
    var btn = this.element.querySelectorAll('button');
    this.collapsed = !this.collapsed;

    if (!!btn[0])
      if (this.collapsed) {
        btn[0].innerHTML = '<span id="selectedSpan"><span>View Summary</span></span>';
        btn[0].classList.remove("SelectButton_selectButton__2EnMv");
        btn[0].classList.remove("jut__Button__materialIcon");
       } else {
        btn[0].innerHTML = '<span id="selectedSpan"><span>Selected</span><i class="mir mi-done jut__Button__icon jut__Button__rightIcon"></i></span>';
        btn[0].classList.add("SelectButton_selectButton__2EnMv");
        btn[0].classList.add("jut__Button__materialIcon");
       }
  }

  componentWillLoad() {
    this.arrayDataWatcher(this.coverdetails);
    this.collapsed = true;
    this._tileId = `riskcoverList${this.coverindex}`;
  }

  render() {
    return (
      <div id={this._tileId}>
        <div>
          <div class="jut__Grid__grid jut__Grid__vgapMedium jut__Grid__hgapMedium CoverList_coverContainerDiv__3qiY1" id="coverContainerDiv">
            <div id="detailsContainerDiv"><div id="detailsAndIconContainer" class="CoverList_detailsAndIconContainer__1UIZA">
              <div id="coverIconLabelDiv" class="CoverList_coverIconLabelDiv__v-dgX">
                <img src="/assets/claim-cover-car.svg" id="coverIconImg" class="CoverList_coverIconImg__2T5IO" /></div>
                <div id="coverDetails" class="CoverList_coverDetails__6uRwg">
                  <div id="coverLabelDiv" class="CoverList_coverLabelDiv__R-tnB">
                    <div id="coverTitleContainer" class="">
                      <span id="coverLabel">COVER</span>
                      <span id="statusWithDate">
                        <span id="coverStatusText" class="CoverList_coverStatusText__1iTUz"></span>
                        <span id="coverStatusDate"></span>
                      </span>
                    </div>
                  </div>
                  <div id="coverDetailDiv" class="CoverList_coverDetailDiv__2a8_A">
                    <span id="coverDetail" class="CoverList_coverDetailText__1uT1F" data-cs-mask="">{this._coverDetails.coverList[0].vehicleData.vehicleMake} {this._coverDetails.coverList[0].vehicleData.vehicleModel}</span>
                  </div>
                  <div id="coverRegPostCodeDiv" class="CoverList_coverRegPostCodeDiv__1RZPc">
                    <span id="coverRegPostCode" class="CoverList_coverRegPostCodeText__LkqLE" data-cs-mask="">Reg No: {this._coverDetails.coverList[0].vehicleData.vehicleReg}</span>
                  </div>
                </div>
              </div>
            </div>
              <button type="button" class="digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary" id="viewButton" data-testid="viewButton" onClick={this.toggle.bind(this)}>
                <span id="selectedSpan">
                  <span>View Summary</span>
                </span>
                
              </button>
          </div>
        </div>
        <div id="content" hidden={this.collapsed}>
          <div id="riskTitleContainer" class="RiskCoverDetails_riskTitleContainer__2FfQl">
            <h3 id="riskTitle" class="RiskCoverDetails_title__30skA">Your Cover Details</h3>
          </div>
          <div id="riskCoverDetailsContainer" class="RiskCoverDetails_riskCoverDetailsContainer__2_wY7 RiskCoverDetails_sectionContainer___g21v">
            <details-container detailstype="policy" coverdetails={this.coverdetails}></details-container>
            <details-container detailstype="car" coverdetails={this.coverdetails}></details-container>
          </div>
        </div>
      </div>
    );
  }

}
