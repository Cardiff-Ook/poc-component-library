import { Component, h } from '@stencil/core';

@Component({
  tag: 'multi-banner-title',
  styleUrl: 'multi-banner-title.css',
  shadow: false,
})
export class MultiBannerTitle {

  render() {
    return (
      <div>
        <span id="multiBannerCarRightTitle" class="MultiBannerCarComponent_multibanner-righttitle__36BKC">
          <slot></slot>
        </span>
      </div>
    );
  }

}
