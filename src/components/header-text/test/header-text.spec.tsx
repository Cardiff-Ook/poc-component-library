import { newSpecPage } from '@stencil/core/testing';
import { HeaderText } from '../header-text';

describe('header-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeaderText],
      html: `<header-text></header-text>`,
    });
    expect(page.root).toEqualHtml(`
      <header-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </header-text>
    `);
  });
});
