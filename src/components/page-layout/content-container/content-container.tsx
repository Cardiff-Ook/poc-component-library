import { Component, h } from '@stencil/core';

@Component({
  tag: 'content-container',
  styleUrl: 'content-container.css',
  shadow: false,
})
export class ContentContainer {

  render() {
    return (
      <div id="contentContainer">
        <div id="contentWrapper">
          <div id="content">
            <slot></slot>
          </div>
        </div>
      </div>
    );
  }

}
