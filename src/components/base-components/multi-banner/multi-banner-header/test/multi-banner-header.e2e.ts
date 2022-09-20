import { newE2EPage } from '@stencil/core/testing';

describe('multi-banner-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<multi-banner-header></multi-banner-header>');

    const element = await page.find('multi-banner-header');
    expect(element).toHaveClass('hydrated');
  });
});
