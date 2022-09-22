import { newE2EPage } from '@stencil/core/testing';

describe('policy-tile', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<policy-tile></policy-tile>');

    const element = await page.find('policy-tile');
    expect(element).toHaveClass('hydrated');
  });
});
