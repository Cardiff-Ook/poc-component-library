import { newSpecPage } from '@stencil/core/testing';
import { AccountSettings } from '../account-settings';

describe('account-settings', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AccountSettings],
      html: `<account-settings></account-settings>`,
    });
    expect(page.root).toEqualHtml(`
      <account-settings>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </account-settings>
    `);
  });
});
