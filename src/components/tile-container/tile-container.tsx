import { Component, h } from '@stencil/core';

@Component({
  tag: 'tile-container',
  styleUrl: 'tile-container.css',
  shadow: false,
})
export class TileContainer {

  render() {
    return (
      <div class="tileContainer">
        <slot></slot>
      </div>
    );
  }

}
