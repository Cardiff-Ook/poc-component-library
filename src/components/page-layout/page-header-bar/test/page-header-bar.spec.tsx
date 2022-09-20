import { newSpecPage } from '@stencil/core/testing';
import { PageHeaderBar } from '../page-header-bar';

describe('page-header-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PageHeaderBar],
      html: `<page-header-bar></page-header-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <page-header-bar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </page-header-bar>
    `);
  });
});
