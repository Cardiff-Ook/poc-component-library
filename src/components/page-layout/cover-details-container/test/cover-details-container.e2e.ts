import { newE2EPage } from '@stencil/core/testing';

describe('cover-details-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cover-details-container></cover-details-container>');

    const element = await page.find('cover-details-container');
    expect(element).toHaveClass('hydrated');
  });
});
