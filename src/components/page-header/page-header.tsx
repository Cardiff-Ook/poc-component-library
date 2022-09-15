import { Component, Prop, h, getAssetPath } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'page-header',
  styleUrl: 'page-header.css',
  assetsDirs: ['./assets']
})
export class PageHeader {

  /**
   * The Image to display
   */
  @Prop() image = "admiral.png";
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    const imageSrc = getAssetPath(`./assets/${this.image}`);
    console.log(imageSrc);
    return (
      <div>
        <div>Hello, World! I'm <span class="person">{this.getText()}</span></div>
        <div><img src={imageSrc} /></div>
      </div>
    );
  }
}
