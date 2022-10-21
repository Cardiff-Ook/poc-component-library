import { newSpecPage } from '@stencil/core/testing';
import { DocumentsList } from '../documents-list';

describe('documents-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DocumentsList],
      html: `<documents-list></documents-list>`,
    });
    expect(page.root).toEqualHtml(`
      <documents-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </documents-list>
    `);
  });
});
