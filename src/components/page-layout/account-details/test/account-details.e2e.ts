import { newE2EPage } from '@stencil/core/testing';

describe('account-details', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<account-details></account-details>');

    const element = await page.find('account-details');
    expect(element).toHaveClass('hydrated');
  });
});
