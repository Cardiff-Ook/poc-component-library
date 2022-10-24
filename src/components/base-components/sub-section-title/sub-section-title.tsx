import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'sub-section-title',
  styleUrl: 'sub-section-title.css',
  shadow: false,
})
export class SubSectionTitle {

  /**
   * Prop: pagetitle: string
   * The Page Title to display
   */
  @Prop() pagetitle: string;

  render() {
    return (
      <h4 id="pageTitle" class="adm-page-title">{this.pagetitle}</h4>
    );
  }

}
