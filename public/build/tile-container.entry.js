import { r as registerInstance, h } from './index-e3478a0e.js';

const tileContainerCss = ".tileContainer{display:flex;flex-flow:row wrap;gap:16px;justify-content:center;margin-left:auto;margin-right:auto;max-width:636px;padding:0}.products{max-width:636px}.options{max-width:656px}";

const TileContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    this._containerStyle = `tileContainer ${this.type}`;
  }
  render() {
    return (h("div", { class: this._containerStyle }, h("slot", null)));
  }
};
TileContainer.style = tileContainerCss;

export { TileContainer as tile_container };
