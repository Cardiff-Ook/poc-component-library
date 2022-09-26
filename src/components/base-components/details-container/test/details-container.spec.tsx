import { newSpecPage } from '@stencil/core/testing';
import { DetailsContainer } from '../details-container';

describe('details-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DetailsContainer],
      html: `<details-container></details-container>`,
    });
    expect(page.root).toEqualHtml(`
      <details-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </details-container>
    `);
  });
});
