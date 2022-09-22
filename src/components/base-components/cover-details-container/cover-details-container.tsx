import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cover-details-container',
  styleUrl: 'cover-details-container.css',
  shadow: false,
})
export class CoverDetailsContainer {

  render() {
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
                <button type="button" class="digitalButton__button jut__Button__button digitalButton__secondary jut__Button__secondary" id="viewButton" data-testid="viewButton">
                  <span id="selectedSpan">
                    <span>View Summary</span>
                  </span>
                </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
