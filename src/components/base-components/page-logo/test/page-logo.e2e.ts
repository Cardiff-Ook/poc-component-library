import { newE2EPage } from '@stencil/core/testing';

describe('page-logo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<page-logo></page-logo>');

    const element = await page.find('page-logo');
    expect(element).toHaveClass('hydrated');
  });
});
