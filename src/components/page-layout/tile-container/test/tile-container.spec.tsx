import { newSpecPage } from '@stencil/core/testing';
import { TileContainer } from '../tile-container';

describe('tile-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TileContainer],
      html: `<tile-container></tile-container>`,
    });
    expect(page.root).toEqualHtml(`
      <tile-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tile-container>
    `);
  });
});
