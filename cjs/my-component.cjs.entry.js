'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-304b1e43.js');

const myComponentCss = ":host{display:block}";

const MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h("div", null, index.h("label", { htmlFor: this.name }, this.label), index.h("select", { name: this.name, id: this.name, disabled: this.disabled }, this.options.map(o => (index.h("option", { value: o.value }, o.displayText))))));
  }
};
MyComponent.style = myComponentCss;

exports.my_component = MyComponent;
