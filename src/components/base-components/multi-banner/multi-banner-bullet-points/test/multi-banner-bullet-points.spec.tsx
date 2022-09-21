import { newSpecPage } from '@stencil/core/testing';
import { MultiBannerBulletPoints } from '../multi-banner-bullet-points';

describe('multi-banner-bullet-points', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MultiBannerBulletPoints],
      html: `<multi-banner-bullet-points></multi-banner-bullet-points>`,
    });
    expect(page.root).toEqualHtml(`
      <multi-banner-bullet-points>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </multi-banner-bullet-points>
    `);
  });
});
