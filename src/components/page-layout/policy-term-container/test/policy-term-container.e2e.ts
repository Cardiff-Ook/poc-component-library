import { newE2EPage } from '@stencil/core/testing';

describe('policy-term-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<policy-term-container></policy-term-container>');

    const element = await page.find('policy-term-container');
    expect(element).toHaveClass('hydrated');
  });
});
