import { Component, h } from '@stencil/core';

@Component({
  tag: 'text-title-bar',
  styleUrl: 'text-title-bar.css',
  shadow: false,
})
export class TextTitleBar {
   render() {
     return (
       <div class="tagTitle">
            <p><slot /></p>
        </div>
     );
   }

}
