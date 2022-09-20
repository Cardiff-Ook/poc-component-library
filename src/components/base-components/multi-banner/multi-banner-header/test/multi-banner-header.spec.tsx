import { newSpecPage } from '@stencil/core/testing';
import { MultiBannerHeader } from '../multi-banner-header';

describe('multi-banner-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MultiBannerHeader],
      html: `<multi-banner-header></multi-banner-header>`,
    });
    expect(page.root).toEqualHtml(`
      <multi-banner-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </multi-banner-header>
    `);
  });
});
