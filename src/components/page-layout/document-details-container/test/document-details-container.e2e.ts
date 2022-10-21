import { newE2EPage } from '@stencil/core/testing';

describe('document-details-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<document-details-container></document-details-container>');

    const element = await page.find('document-details-container');
    expect(element).toHaveClass('hydrated');
  });
});
