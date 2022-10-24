import { Component, h, Prop } from '@stencil/core';

export interface ButtonInterface {
  namr: string;
  isActive: string;
  link: string;
}

@Component({
  tag: 'nav-bar',
  styleUrl: 'nav-bar.css',
  shadow: false,
})
export class NavBar {
  
  /**
   * Prop: buttons: Array<ButtonInterface>
   * Array containing all the buttons to display
   */

  @Prop() buttons: Array<ButtonInterface> | string;
  private _arrayData: Array<ButtonInterface>;

  arrayDataWatcher(newValue: any[] | string) {
    if (typeof newValue === 'string') {
       this._arrayData = JSON.parse(newValue);
    }
    else {
      this._arrayData = newValue;
    }
  }

  componentWillLoad() {
    this.arrayDataWatcher(this.buttons);
  }
  isActive(val: boolean): string {
    return (val) ? 
      'jut__NavBarItem__navBarItem jut__NavBarItem__topNavBarItem jut__NavBarItem__activeTopNavBarItem jut__ApplicationHeader__navItem jut__NavBarItem__activeTopNavBarItem jut__ApplicationHeader__activeNavItem' : 
      'jut__NavBarItem__navBarItem jut__NavBarItem__topNavBarItem jut__ApplicationHeader__navItem';

  }

  menuToggle(e) {
    console.log(e)
  }

  render() {
    return (
      <nav class="jut__ApplicationHeader__subApplicationHeader">
        <ul class="jut__NavigationContent__navigationContent jut__TopNavigation__topNavigation" role="menubar" tabindex="0">
          {
            this._arrayData.map((item:any={})=>
              <li class="jut__NavigationContent__topNavigationItem" role="none">
                <a aria-current="page" class={this.isActive(item.isActive)} tabindex="0" role="menuitem"  onClick={(e) => this.menuToggle(e)}>
                  <div class="jut__NavBarItem__titleWrapper inlineOverride" >
                    <span class="jut__NavBarItem__title">{item.name}</span>
                  </div>
                </a>
              </li>
            )
          }
          <li class="jut__NavigationContent__topNavigationItem" role="none"></li>
        </ul>
      </nav>
    );
  }

}
