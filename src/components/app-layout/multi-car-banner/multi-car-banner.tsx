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
          <img id="multiBannerCarLeftBox" class="MultiBannerCarComponent_multibanner-leftbox__B3O_F" />
          <div id="multiBannerCarRightBoxContainer" class="MultiBannerCarComponent_multibanner-rightbox-container__2iYZc">
            <div id="multiBannerCarRightBox" class="MultiBannerCarComponent_multibanner-rightbox__20ogs">
              <slot name="banner-title"></slot>
              <slot name="banner-header"></slot>
              <slot name="bullet-points"></slot>
            </div>
            <quote-button>Get A Quote</quote-button>
          </div>
        </div>
      </div>
    );
  }

}
