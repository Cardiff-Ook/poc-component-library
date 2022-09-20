import { newSpecPage } from '@stencil/core/testing';
import { LoginFooter } from '../login-footer';

describe('login-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LoginFooter],
      html: `<login-footer></login-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <login-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </login-footer>
    `);
  });
});
