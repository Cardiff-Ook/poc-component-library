import { newSpecPage } from '@stencil/core/testing';
import { PageLogo } from '../page-logo';

describe('page-logo', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PageLogo],
      html: `<page-logo></page-logo>`,
    });
    expect(page.root).toEqualHtml(`
      <page-logo>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </page-logo>
    `);
  });
});
