import { newE2EPage } from '@stencil/core/testing';

describe('login-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<login-footer></login-footer>');

    const element = await page.find('login-footer');
    expect(element).toHaveClass('hydrated');
  });
});
