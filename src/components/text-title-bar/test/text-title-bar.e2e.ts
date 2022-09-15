import { newE2EPage } from '@stencil/core/testing';

describe('text-title-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<text-title-bar></text-title-bar>');

    const element = await page.find('text-title-bar');
    expect(element).toHaveClass('hydrated');
  });
});
