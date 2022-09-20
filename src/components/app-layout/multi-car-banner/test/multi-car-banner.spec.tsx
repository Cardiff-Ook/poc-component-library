import { newSpecPage } from '@stencil/core/testing';
import { MultiCarBanner } from '../multi-car-banner';

describe('multi-car-banner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MultiCarBanner],
      html: `<multi-car-banner></multi-car-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <multi-car-banner>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </multi-car-banner>
    `);
  });
});
