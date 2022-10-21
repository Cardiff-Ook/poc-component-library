import { newSpecPage } from '@stencil/core/testing';
import { DocumentDetailsContainer } from '../document-details-container';

describe('document-details-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DocumentDetailsContainer],
      html: `<document-details-container></document-details-container>`,
    });
    expect(page.root).toEqualHtml(`
      <document-details-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </document-details-container>
    `);
  });
});
