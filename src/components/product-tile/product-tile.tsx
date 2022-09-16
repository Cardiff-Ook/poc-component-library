import { Component, Prop, h, getAssetPath } from '@stencil/core';

@Component({
  tag: 'product-tile',
  styleUrl: 'product-tile.css',
  shadow: false,
})
export class ProductTile {

  /**
   * The link for the product 
   */
   @Prop() linkText: string;

  /**
   * The image to display 
   */
   @Prop() productImage: string;


  render() {
    const imageSrc = getAssetPath(`/assets/${this.productImage}`);
    return (
      <div>
      <div class="productTile">
        <a href={this.linkText}>
          <img src={imageSrc}/>
        </a>
      </div></div>
    );
  }

}
