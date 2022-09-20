import { newE2EPage } from '@stencil/core/testing';

describe('header-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<header-text></header-text>');

    const element = await page.find('header-text');
    expect(element).toHaveClass('hydrated');
  });
});
