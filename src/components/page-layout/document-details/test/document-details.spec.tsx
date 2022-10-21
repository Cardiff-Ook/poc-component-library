import { newSpecPage } from '@stencil/core/testing';
import { DocumentDetails } from '../document-details';

describe('document-details', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DocumentDetails],
      html: `<document-details></document-details>`,
    });
    expect(page.root).toEqualHtml(`
      <document-details>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </document-details>
    `);
  });
});
