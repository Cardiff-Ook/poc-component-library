import { Component, Prop, Watch, h, State, Element } from '@stencil/core';

export interface CoverDetailsInterface {
  id: string;
  policytype: string;
  imageSrc?: string;
}

@Component({
  tag: 'cover-details-container',
  styleUrl: 'cover-details-container.css',
  shadow: false,
})
export class CoverDetailsContainer {

  @Prop() coverdetails: Array<CoverDetailsInterface> | string;
  private _arrayData: Array<CoverDetailsInterface>;
  @State() collapsed: boolean;

  @Element() private element: HTMLElement;

@Watch('coverdetails')
  arrayDataWatcher(newValue: any[] | string) {
    if (typeof newValue === 'string') {
       this._arrayData = JSON.parse(newValue);
    }
    else {
      this._arrayData = newValue;
    }
    if (this._arrayData !== undefined && this._arrayData.length > 0) {
      this._arrayData.forEach(obj => (
        obj.imageSrc =  `/assets/claim-cover-${obj.policytype}.svg`
      ));
    }
  }

  toggle() {
    var btn = this.element.querySelectorAll('button');
    this.collapsed = !this.collapsed;

    if (!!btn[0])
      btn[0].textContent = (this.collapsed) ? "View Summary" : "Hide Summary";
  }

  componentDidLoad() {
    console.log(this.element); // outputs HTMLElement <my-component ...
  }

  componentWillLoad() {
    this.arrayDataWatcher(this.coverdetails);
    this.collapsed = true;
  }

  render() {
    if (this._arrayData !== undefined && this._arrayData.length > 0) {
      return (
        <div id="coverContainerIterable" class="coverContainerGrid">
          <div id="riskcoverList0">
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
                        <span id="coverDetail" class="CoverList_coverDetailText__1uT1F" data-cs-mask="">FIAT 500</span>
                      </div>
                      <div id="coverRegPostCodeDiv" class="CoverList_coverRegPostCodeDiv__1RZPc">
                        <span id="coverRegPostCode" class="CoverList_coverRegPostCodeText__LkqLE" data-cs-mask="">Reg No: G15FGY</span>
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
              <div id="content" hidden={this.collapsed}>
                hello
                    <slot />
                </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div id="policyCoverMainContainer" class="MyPoliciesPage_policyCoverMainContainer__3bkpG">
          <sub-section-title pagetitle="You have no policies"></sub-section-title>     
        </div>
      )
    }
  }

}
