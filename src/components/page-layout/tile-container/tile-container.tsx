import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'tile-container',
  styleUrl: 'tile-container.css',
  shadow: false,
})
export class TileContainer {
  /**
   * Prop: type: tring
   * Sets the tyle according to the received type (options / products)
   */
  @Prop() type: string;
  private _containerStyle: string;

  componentWillLoad() {
    this._containerStyle = `tileContainer ${this.type}`
  }

  render() {

    return (
      <div class={this._containerStyle}>
        <slot></slot>
      </div>
    );
  }

}
