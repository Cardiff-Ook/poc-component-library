import { newSpecPage } from '@stencil/core/testing';
import { MainPageContents } from '../main-page-contents';

describe('main-page-contents', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MainPageContents],
      html: `<main-page-contents></main-page-contents>`,
    });
    expect(page.root).toEqualHtml(`
      <main-page-contents>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </main-page-contents>
    `);
  });
});
