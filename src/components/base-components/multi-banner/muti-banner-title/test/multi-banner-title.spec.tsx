import { newSpecPage } from '@stencil/core/testing';
import { MultiBannerTitle } from '../multi-banner-title';

describe('multi-banner-title', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MultiBannerTitle],
      html: `<multi-banner-title></multi-banner-title>`,
    });
    expect(page.root).toEqualHtml(`
      <multi-banner-title>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </multi-banner-title>
    `);
  });
});
