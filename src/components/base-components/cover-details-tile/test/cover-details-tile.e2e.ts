import { newE2EPage } from '@stencil/core/testing';

describe('cover-details-tile', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cover-details-tile></cover-details-tile>');

    const element = await page.find('cover-details-tile');
    expect(element).toHaveClass('hydrated');
  });
});
