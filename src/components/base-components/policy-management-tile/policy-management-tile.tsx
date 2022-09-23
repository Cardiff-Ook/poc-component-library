import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'policy-management-tile',
  styleUrl: 'policy-management-tile.css',
  shadow: false,
})
export class PolicyManagementTile {

  /**
   * The link for the product 
   */
   @Prop() linkText: string;

  /**
   * The image to display 
   */
   @Prop() productImage: string;


  /**
   * The title for the tile 
   */
   @Prop() titleText: string;

  render() {
    const imageSrc = `fa fa-${this.productImage} icon`;

    return (
      <div>
        <div class="managementTile">
          <a href={this.linkText}>
            <i id="statusIcon" class={imageSrc}></i>
            <h2 class="option">{this.titleText}</h2>
          </a>
          <slot></slot>
        </div>
      </div>
    );
  }


}
