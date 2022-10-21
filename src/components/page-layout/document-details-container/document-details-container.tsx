import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'document-details-container',
  styleUrl: 'document-details-container.css',
  shadow: true,
})
export class DocumentDetailsContainer {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
