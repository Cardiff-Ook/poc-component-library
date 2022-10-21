import { newSpecPage } from '@stencil/core/testing';
import { DocumentsTile } from '../documents-tile';

describe('documents-tile', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DocumentsTile],
      html: `<documents-tile></documents-tile>`,
    });
    expect(page.root).toEqualHtml(`
      <documents-tile>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </documents-tile>
    `);
  });
});
