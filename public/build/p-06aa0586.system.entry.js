System.register(["./p-ba861e62.system.js"],(function(t){"use strict";var a,e;return{setters:[function(t){a=t.r;e=t.h}],execute:function(){var n=":host{display:block}.inlineOverride{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}";var i=t("nav_bar",function(){function t(t){a(this,t)}t.prototype.arrayDataWatcher=function(t){if(typeof t==="string"){this._arrayData=JSON.parse(t)}else{this._arrayData=t}};t.prototype.componentWillLoad=function(){this.arrayDataWatcher(this.buttons)};t.prototype.isActive=function(t){return t?"jut__NavBarItem__navBarItem jut__NavBarItem__topNavBarItem jut__NavBarItem__activeTopNavBarItem jut__ApplicationHeader__navItem jut__NavBarItem__activeTopNavBarItem jut__ApplicationHeader__activeNavItem":"jut__NavBarItem__navBarItem jut__NavBarItem__topNavBarItem jut__ApplicationHeader__navItem"};t.prototype.menuToggle=function(t){console.log(t)};t.prototype.render=function(){var t=this;return e("nav",{class:"jut__ApplicationHeader__subApplicationHeader"},e("ul",{class:"jut__NavigationContent__navigationContent jut__TopNavigation__topNavigation",role:"menubar",tabindex:"0"},this._arrayData.map((function(a){if(a===void 0){a={}}return e("li",{class:"jut__NavigationContent__topNavigationItem",role:"none"},e("a",{"aria-current":"page",class:t.isActive(a.isActive),tabindex:"0",role:"menuitem",onClick:function(a){return t.menuToggle(a)}},e("div",{class:"jut__NavBarItem__titleWrapper inlineOverride"},e("span",{class:"jut__NavBarItem__title"},a.name))))})),e("li",{class:"jut__NavigationContent__topNavigationItem",role:"none"})))};return t}());i.style=n}}}));