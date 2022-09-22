import { newE2EPage } from '@stencil/core/testing';

describe('policies-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<policies-container></policies-container>');

    const element = await page.find('policies-container');
    expect(element).toHaveClass('hydrated');
  });
});
