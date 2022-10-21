import { newE2EPage } from '@stencil/core/testing';

describe('documents-tile', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<documents-tile></documents-tile>');

    const element = await page.find('documents-tile');
    expect(element).toHaveClass('hydrated');
  });
});
