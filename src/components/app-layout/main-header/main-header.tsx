import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'main-header',
  styleUrl: 'main-header.css',
  shadow: false,
})
export class MainHeader {
  /**
   * Prop: brand: string
   * The brand currently being browsed
   */
  @Prop() brand: string;

  componentWillLoad() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add(`${this.brand}`);
    body.classList.add('themeRoot');
    body.classList.add('digitalRoot');
  }
  
  render() {
    return (
      <Host>
        <div id="headerContainer" class="AdmPageHeaderComponent_headerContainer__3MnMe">
          <section class="jut__ApplicationHeader__applicationHeaderWrapper appheader">
            <header class="jut__Header__header jut__Header__large jut__ApplicationHeader__applicationHeader appheader">
              <div class="jut__Header__headerContainer jut__Header__headerContent">
                <slot name="page-logo" />
              </div>
            </header>
            <slot name="nav-bar" />
            <slot name="header-bar" />
          </section>
        </div>
      </Host>
    );
  }

}
