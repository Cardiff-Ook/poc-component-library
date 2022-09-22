import { Component, h } from '@stencil/core';

@Component({
  tag: 'policies-container',
  styleUrl: 'policies-container.css',
  shadow: false,
})
export class PoliciesContainer {

  render() {
    return (
      <div id="policyContainer">
        <div id="myAccountContainer" class="MyPoliciesPage_myAccountContainer__1sTDe"></div>
        <div></div>
        <slot name="page-title"></slot>
        <slot name="policy-details"></slot>
      </div>
    );
  }

}
