import { Component, h } from '@stencil/core';

@Component({
  tag: 'multi-banner-header',
  styleUrl: 'multi-banner-header.css',
  shadow: false,
})
export class MultiBannerHeader {

  render() {
    return (
      <div>
        <span class="MultiBannerCarComponent_caveat__3TayJ" id="multiBannerCarRightHeader">
          <slot></slot>
        </span>
        </div>
    );
  }

}
