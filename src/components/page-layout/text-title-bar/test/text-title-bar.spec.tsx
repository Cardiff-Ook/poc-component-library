import { newSpecPage } from '@stencil/core/testing';
import { TextTitleBar } from '../text-title-bar';

describe('text-title-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TextTitleBar],
      html: `<text-title-bar></text-title-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <text-title-bar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </text-title-bar>
    `);
  });
});
