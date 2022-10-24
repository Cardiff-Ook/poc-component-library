import { newSpecPage } from '@stencil/core/testing';
import { DocumentsListItem } from '../documents-list-item';

describe('documents-list-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DocumentsListItem],
      html: `<documents-list-item></documents-list-item>`,
    });
    expect(page.root).toEqualHtml(`
      <documents-list-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </documents-list-item>
    `);
  });
});
