import { Component, Prop, h, getAssetPath } from '@stencil/core';

@Component({
  tag: 'page-header',
  styleUrl: 'page-header.css',
  assetsDirs: ['./assets'],
  shadow: false,
})
export class PageHeader {
  /**
   * The brand
   */
  @Prop() brand: string;

  componentWillLoad() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add(`${this.brand}`);
  }

  render() {
    const imageSrc = getAssetPath(`./assets/${this.brand}logo.svg`);
    const imageAltText = `${this.brand} logo placeholder`
    console.log(imageSrc);
    return (
        <header>
          <div class="logoContainer">
            <a href="/myaccount/login/">
              <div id="loginHeaderLogo" class="jss591">
                <img id="loginLogo" src={imageSrc} alt={imageAltText}/>
              </div>
            </a>
          </div>
        </header>
    );
  }
}
