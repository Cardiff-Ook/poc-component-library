import { Component, h } from '@stencil/core';

@Component({
  tag: 'multi-car-banner',
  styleUrl: 'multi-car-banner.css',
  shadow: false,
})
export class MultiCarBanner {

  render() {
    return (
      <div id="multiBannerAdmiralCarContainer">
        <div id="multiBannerCar" class="MultiBannerCarComponent_multibanner-wrapper-car__2iSip MultiBannerCarComponent_multibanner-wrapper-common__2KzMl" data-testid="multiBannerCarComponent">
          <img src="/undefined" id="multiBannerCarLeftBox" class="MultiBannerCarComponent_multibanner-leftbox__B3O_F" />
          <div id="multiBannerCarRightBoxContainer" class="MultiBannerCarComponent_multibanner-rightbox-container__2iYZc">
            <div id="multiBannerCarRightBox" class="MultiBannerCarComponent_multibanner-rightbox__20ogs">
              <multi-banner-title>Save when you add another car</multi-banner-title>
              <multi-banner-header>Get a no obligation quote today to see how much you could save.</multi-banner-header>
              <div id="multiBannerCarBenefitList" class="MultiBannerCarComponent_multibanner-list__list__nKEEq">
                <div id="multiBannerCarBenefitListOne" class="MultiBannerCarComponent_multibanner-list_item__9dH9u">
                  <i id="statusIcon" class="fa fa-check adm-icon"></i>
                  <span id="multiCoverNoCancelBenefit">
                    <span>
                      <strong>No need to cancel your existing cover:</strong> You can schedule your car to join at a later date
                    </span>
                  </span>
                </div>
                <div id="multiBannerCarBenefitListTwo" class="MultiBannerCarComponent_multibanner-list_item__9dH9u">
                  <i id="statusIcon" class="fa fa-check adm-icon"></i>
                  <span id="multiCoverDiscountBenefit">
                    <span>
                      <strong>Get your discounts immediately:</strong> You only pay for the additional car when its cover starts
                    </span>
                  </span>
                </div>
                <div id="multiBannerCarBenefitListThree" class="MultiBannerCarComponent_multibanner-list_item__9dH9u">
                  <i id="statusIcon" class="fa fa-check adm-icon"></i>
                  <span id="multiCoverFamilyBenefit">
                    <span><strong>Insure family cars:</strong> Even at different addresses</span>
                  </span>
                </div>
              </div>
            </div>
            <quote-button></quote-button>
          </div>
        </div>
      </div>
    );
  }

}
