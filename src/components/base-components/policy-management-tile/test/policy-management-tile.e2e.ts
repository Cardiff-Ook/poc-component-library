import { newE2EPage } from '@stencil/core/testing';

describe('policy-management-tile', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<policy-management-tile></policy-management-tile>');

    const element = await page.find('policy-management-tile');
    expect(element).toHaveClass('hydrated');
  });
});
