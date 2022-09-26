import { newE2EPage } from '@stencil/core/testing';

describe('details-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<details-container></details-container>');

    const element = await page.find('details-container');
    expect(element).toHaveClass('hydrated');
  });
});
