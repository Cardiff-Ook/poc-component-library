import { newE2EPage } from '@stencil/core/testing';

describe('documents-list-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<documents-list-item></documents-list-item>');

    const element = await page.find('documents-list-item');
    expect(element).toHaveClass('hydrated');
  });
});
