import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const myComponentCss = ":host{display:block}";

const MyComponent$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    /**
     * If true, the button is displayed as disabled
     */
    this.disabled = false;
    /**
     * Define the available options in the drop-down list
     */
    this.options = [];
  }
  render() {
    return (h("div", null, h("label", { htmlFor: this.name }, this.label), h("select", { name: this.name, id: this.name, disabled: this.disabled }, this.options.map(o => (h("option", { value: o.value }, o.displayText))))));
  }
  static get style() { return myComponentCss; }
}, [1, "my-component", {
    "label": [1],
    "name": [513],
    "disabled": [516],
    "options": [16]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["my-component"];
  components.forEach(tagName => { switch (tagName) {
    case "my-component":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyComponent$1);
      }
      break;
  } });
}

const MyComponent = MyComponent$1;
const defineCustomElement = defineCustomElement$1;

export { MyComponent, defineCustomElement };
