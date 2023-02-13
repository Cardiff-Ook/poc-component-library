import { newE2EPage } from '@stencil/core/testing';

describe('new-nav-bar-logo', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<new-nav-bar-logo></new-nav-bar-logo>');

    const element = await page.find('new-nav-bar-logo');
    expect(element).toHaveClass('hydrated');
  });
});
