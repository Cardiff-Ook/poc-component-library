import { newE2EPage } from '@stencil/core/testing';

describe('new-nav-bar-img', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<new-nav-bar-img></new-nav-bar-img>');

    const element = await page.find('new-nav-bar-img');
    expect(element).toHaveClass('hydrated');
  });
});
