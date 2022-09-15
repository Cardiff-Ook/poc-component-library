import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'text-title-bar',
  styleUrl: 'text-title-bar.css',
  shadow: false,
})
export class TextTitleBar {

  /**
   * The text to display 
   */
   @Prop() titleText: string;

   render() {
     return (
       <div class="tagTitle">
            <p>{this.titleText}</p>
        </div>
     );
   }

}
