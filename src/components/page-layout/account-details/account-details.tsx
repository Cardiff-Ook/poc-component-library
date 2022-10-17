import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'account-details',
  styleUrl: 'account-details.css',
  shadow: true,
})
export class AccountDetails {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
