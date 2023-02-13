import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'new-nav-bar-logo',
  styleUrl: 'new-nav-bar-logo.css',
  shadow: false,
})
export class NewNavBarLogo {

  render() {
    return (
      <Host>
        <ng-content>
          <slot></slot>
        </ng-content>
      </Host>
    );
  }

}
