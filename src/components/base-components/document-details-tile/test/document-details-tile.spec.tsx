import { newSpecPage } from '@stencil/core/testing';
import { DocumentDetailsTile } from '../document-details-tile';

describe('document-details-tile', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DocumentDetailsTile],
      html: `<document-details-tile></document-details-tile>`,
    });
    expect(page.root).toEqualHtml(`
      <document-details-tile>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </document-details-tile>
    `);
  });
});
