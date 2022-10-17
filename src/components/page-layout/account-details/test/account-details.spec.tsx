import { newSpecPage } from '@stencil/core/testing';
import { AccountDetails } from '../account-details';

describe('account-details', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AccountDetails],
      html: `<account-details></account-details>`,
    });
    expect(page.root).toEqualHtml(`
      <account-details>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </account-details>
    `);
  });
});
