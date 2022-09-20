import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'login-footer',
  styleUrl: 'login-footer.css',
  shadow: true,
})
export class LoginFooter {

  render() {
    return (
      <Host class="containerBlock">
        <div id="loginFooterWrapper" class="containerBlock">
          <slot name="footer-title" />
          <slot name="products" />
        </div>
      </Host>
    );
  }

}
