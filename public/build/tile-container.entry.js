import { r as registerInstance, h } from './index-998450d5.js';

const tileContainerCss = ".tileContainer{display:flex;flex-flow:row wrap;gap:16px;justify-content:center;margin-left:auto;margin-right:auto;max-width:636px;padding:0}";

const TileContainer = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "tileContainer" }, h("slot", null)));
  }
};
TileContainer.style = tileContainerCss;

export { TileContainer as tile_container };
