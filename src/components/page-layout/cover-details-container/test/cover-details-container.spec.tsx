import { newSpecPage } from '@stencil/core/testing';
import { CoverDetailsContainer } from '../cover-details-container';

describe('cover-details-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CoverDetailsContainer],
      html: `<cover-details-container></cover-details-container>`,
    });
    expect(page.root).toEqualHtml(`
      <cover-details-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cover-details-container>
    `);
  });
});
