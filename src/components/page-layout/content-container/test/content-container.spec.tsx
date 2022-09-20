import { newSpecPage } from '@stencil/core/testing';
import { ContentContainer } from '../content-container';

describe('content-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ContentContainer],
      html: `<content-container></content-container>`,
    });
    expect(page.root).toEqualHtml(`
      <content-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </content-container>
    `);
  });
});
