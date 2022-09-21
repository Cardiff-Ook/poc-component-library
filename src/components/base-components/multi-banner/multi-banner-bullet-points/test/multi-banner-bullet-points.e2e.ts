import { newE2EPage } from '@stencil/core/testing';

describe('multi-banner-bullet-points', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<multi-banner-bullet-points></multi-banner-bullet-points>');

    const element = await page.find('multi-banner-bullet-points');
    expect(element).toHaveClass('hydrated');
  });
});
