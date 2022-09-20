import { newSpecPage } from '@stencil/core/testing';
import { QuoteButton } from '../quote-button';

describe('quote-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [QuoteButton],
      html: `<quote-button></quote-button>`,
    });
    expect(page.root).toEqualHtml(`
      <quote-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </quote-button>
    `);
  });
});
