import { newE2EPage } from '@stencil/core/testing';

describe('sub-section-title', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sub-section-title></sub-section-title>');

    const element = await page.find('sub-section-title');
    expect(element).toHaveClass('hydrated');
  });
});
