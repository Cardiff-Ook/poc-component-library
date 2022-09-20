import { newE2EPage } from '@stencil/core/testing';

describe('quote-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<quote-button></quote-button>');

    const element = await page.find('quote-button');
    expect(element).toHaveClass('hydrated');
  });
});
