import { newE2EPage } from '@stencil/core/testing';

describe('error-message', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<error-message></error-message>');

    const element = await page.find('error-message');
    expect(element).toHaveClass('hydrated');
  });
});
