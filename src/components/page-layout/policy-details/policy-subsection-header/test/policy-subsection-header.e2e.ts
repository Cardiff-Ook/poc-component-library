import { newE2EPage } from '@stencil/core/testing';

describe('policy-subsection-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<policy-subsection-header></policy-subsection-header>');

    const element = await page.find('policy-subsection-header');
    expect(element).toHaveClass('hydrated');
  });
});
