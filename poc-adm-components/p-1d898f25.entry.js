import{r as t,h as a}from"./p-a4af608c.js";const e=class{constructor(a){t(this,a)}arrayDataWatcher(t){this._arrayData="string"==typeof t?JSON.parse(t):t}componentWillLoad(){this.arrayDataWatcher(this.buttons)}isActive(t){return t?"jut__NavBarItem__navBarItem jut__NavBarItem__topNavBarItem jut__NavBarItem__activeTopNavBarItem jut__ApplicationHeader__navItem jut__NavBarItem__activeTopNavBarItem jut__ApplicationHeader__activeNavItem":"jut__NavBarItem__navBarItem jut__NavBarItem__topNavBarItem jut__ApplicationHeader__navItem"}menuItemClick(t,a){console.log(`Selected link: ${t.currentTarget.href}`),a.isActive&&t.preventDefault()}render(){return a("nav",{class:"jut__ApplicationHeader__subApplicationHeader"},a("ul",{class:"jut__NavigationContent__navigationContent jut__TopNavigation__topNavigation",role:"menubar",tabindex:"0"},this._arrayData.map(((t={})=>a("li",{class:"jut__NavigationContent__topNavigationItem",role:"none"},a("a",{"aria-current":"page",class:this.isActive(t.isActive),tabindex:"0",role:"menuitem",onClick:a=>this.menuItemClick(a,t),href:t.path},a("div",{class:"jut__NavBarItem__titleWrapper inlineOverride"},a("span",{class:"jut__NavBarItem__title"},t.name)))))),a("li",{class:"jut__NavigationContent__topNavigationItem",role:"none"})))}};e.style=":host{display:block}.inlineOverride{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.jut__NavigationContent__navigationContent li:nth-last-child(3){right:7rem !important}";export{e as nav_bar}