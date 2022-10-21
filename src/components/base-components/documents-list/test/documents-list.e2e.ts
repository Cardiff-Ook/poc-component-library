import { newE2EPage } from '@stencil/core/testing';

describe('documents-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<documents-list></documents-list>');

    const element = await page.find('documents-list');
    expect(element).toHaveClass('hydrated');
  });
});
