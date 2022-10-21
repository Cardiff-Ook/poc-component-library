import { newE2EPage } from '@stencil/core/testing';

describe('document-details-tile', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<document-details-tile></document-details-tile>');

    const element = await page.find('document-details-tile');
    expect(element).toHaveClass('hydrated');
  });
});
