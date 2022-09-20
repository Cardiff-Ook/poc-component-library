import { newE2EPage } from '@stencil/core/testing';

describe('multi-banner-title', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<multi-banner-title></multi-banner-title>');

    const element = await page.find('multi-banner-title');
    expect(element).toHaveClass('hydrated');
  });
});
