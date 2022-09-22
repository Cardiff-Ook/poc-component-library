import { newE2EPage } from '@stencil/core/testing';

describe('main-page-contents', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<main-page-contents></main-page-contents>');

    const element = await page.find('main-page-contents');
    expect(element).toHaveClass('hydrated');
  });
});
