import { Component, Prop, h } from '@stencil/core';
import { UserDataInterface } from '../../../interfaces/userDataInterface';

@Component({
  tag: 'account-settings',
  styleUrl: 'account-settings.css',
  shadow: false,
})
export class AccountSettings {

  /**
   * Prop: user: object
   * User Account details object
   */
   @Prop() user: Array<UserDataInterface> | string;

  render() {
    return (
      <main-page-contents>
        <policies-container slot="page-contents">
          <sub-section-title pagetitle="Your Account Information" slot="page-title"></sub-section-title>
          <account-details slot="account-details" user={this.user}></account-details>
        </policies-container>
      </main-page-contents>
    );
  }

}
