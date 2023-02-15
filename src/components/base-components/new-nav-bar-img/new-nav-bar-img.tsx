import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'new-nav-bar-img',
  styleUrl: 'new-nav-bar-img.css',
  shadow: false,
})
export class NewNavBarImg {

  /**
   * Prop: src: string
   * The image source
   */  
  @Prop() src: string;

  /**
   * Prop: alt: string
   * The alternative text for the imafe
   */  
  @Prop() alt: string;

  render() {
    return (
      <Host>
        <img src={this.src} alt = {this.alt} />
      </Host>
    );
  }

}
