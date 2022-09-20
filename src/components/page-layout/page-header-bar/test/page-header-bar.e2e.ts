import { newE2EPage } from '@stencil/core/testing';

describe('page-header-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<page-header-bar></page-header-bar>');

    const element = await page.find('page-header-bar');
    expect(element).toHaveClass('hydrated');
  });
});
