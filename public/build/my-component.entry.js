import { r as registerInstance, h } from './index-bbb3174a.js';

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
MyComponent.style = myComponentCss;

export { MyComponent as my_component };
