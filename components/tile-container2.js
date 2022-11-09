import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const tileContainerCss = ".tileContainer{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;gap:16px;-ms-flex-pack:center;justify-content:center;margin-left:auto;margin-right:auto;max-width:636px;padding:0}.products{max-width:636px}.options{max-width:656px}";

const TileContainer = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  componentWillLoad() {
    this._containerStyle = `tileContainer ${this.type}`;
  }
  render() {
    return (h("div", { class: this._containerStyle }, h("slot", null)));
  }
  static get style() { return tileContainerCss; }
}, [4, "tile-container", {
    "type": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["tile-container"];
  components.forEach(tagName => { switch (tagName) {
    case "tile-container":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, TileContainer);
      }
      break;
  } });
}

export { TileContainer as T, defineCustomElement as d };
