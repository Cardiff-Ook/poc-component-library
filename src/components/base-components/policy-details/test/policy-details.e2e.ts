import { newE2EPage } from '@stencil/core/testing';

describe('policy-details', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<policy-details></policy-details>');

    const element = await page.find('policy-details');
    expect(element).toHaveClass('hydrated');
  });
});
