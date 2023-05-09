'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5ebe992a.js');

const newNavBarLogoCss = "new-nav-bar-logo{-ms-flex:1 1 auto;flex:1 1 auto}";

const NewNavBarLogo = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(index.Host, null, index.h("ng-content", null, index.h("slot", null))));
  }
};
NewNavBarLogo.style = newNavBarLogoCss;

exports.new_nav_bar_logo = NewNavBarLogo;
