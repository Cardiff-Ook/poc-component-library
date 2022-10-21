import { newE2EPage } from '@stencil/core/testing';

describe('document-details', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<document-details></document-details>');

    const element = await page.find('document-details');
    expect(element).toHaveClass('hydrated');
  });
});
