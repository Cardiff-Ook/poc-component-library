import { newSpecPage } from '@stencil/core/testing';
import { CoverDetailsTile } from '../cover-details-tile';

describe('cover-details-tile', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CoverDetailsTile],
      html: `<cover-details-tile></cover-details-tile>`,
    });
    expect(page.root).toEqualHtml(`
      <cover-details-tile>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cover-details-tile>
    `);
  });
});
