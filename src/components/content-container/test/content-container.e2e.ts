import { newE2EPage } from '@stencil/core/testing';

describe('content-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<content-container></content-container>');

    const element = await page.find('content-container');
    expect(element).toHaveClass('hydrated');
  });
});
