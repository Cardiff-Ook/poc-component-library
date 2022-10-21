import { newE2EPage } from '@stencil/core/testing';

describe('account-settings', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<account-settings></account-settings>');

    const element = await page.find('account-settings');
    expect(element).toHaveClass('hydrated');
  });
});
