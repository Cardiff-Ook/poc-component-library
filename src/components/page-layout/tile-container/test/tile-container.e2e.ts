import { newE2EPage } from '@stencil/core/testing';

describe('tile-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tile-container></tile-container>');

    const element = await page.find('tile-container');
    expect(element).toHaveClass('hydrated');
  });
});
