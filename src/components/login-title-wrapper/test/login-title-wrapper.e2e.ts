import { newE2EPage } from '@stencil/core/testing';

describe('login-title-wrapper', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<login-title-wrapper></login-title-wrapper>');

    const element = await page.find('login-title-wrapper');
    expect(element).toHaveClass('hydrated');
  });
});
