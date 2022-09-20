import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'content-container',
  styleUrl: 'content-container.css',
  shadow: false,
})
export class ContentContainer {

  render() {
    return (
      <Host class="containerBlock">
        <div id="contentContainer">
          <div id="contentWrapper">
            <div id="content">
              <slot></slot>
            </div>
          </div>
        </div>
      </Host>
    );
  }

}
