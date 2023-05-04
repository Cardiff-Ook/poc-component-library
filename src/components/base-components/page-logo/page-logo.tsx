import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'page-logo',
  styleUrl: 'page-logo.css',
  shadow: false,
})
export class PageLogo {

  /**
   * Prop: brand: string
   * Whichever brand currently being browsed
   */
  @Prop() brand: string;

  render() {
    const imageSrc = `/assets/${this.brand}logo.svg`;
  
    return (
      <Host>
        <a class="jut__ApplicationHeader__applicationLogoTitleLink active" href="../index.html">
          <span class="jut__LogoTitle__logoTitle">
            <img id="title_image" class="jut__LogoTitle__logo jut__ApplicationHeader__applicationLogo" alt="logo" src={imageSrc} />
          </span>
        </a>
      </Host>
    );
  }

}
