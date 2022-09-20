import { newE2EPage } from '@stencil/core/testing';

describe('multi-car-banner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<multi-car-banner></multi-car-banner>');

    const element = await page.find('multi-car-banner');
    expect(element).toHaveClass('hydrated');
  });
});
