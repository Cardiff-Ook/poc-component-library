import { newSpecPage } from '@stencil/core/testing';
import { LoginForm } from '../login-form';

describe('login-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LoginForm],
      html: `<login-form></login-form>`,
    });
    expect(page.root).toEqualHtml(`
      <login-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </login-form>
    `);
  });
});
