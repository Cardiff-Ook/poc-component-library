import { newSpecPage } from '@stencil/core/testing';
import { PageHeader } from './login-header';

describe('login-header', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [PageHeader],
      html: '<login-header></login-header>',
    });
    expect(root).toEqualHtml(`
      <login-header>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </login-header>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [PageHeader],
      html: `<login-header first="Stencil" last="'Don't call me a framework' JS"></login-header>`,
    });
    expect(root).toEqualHtml(`
      <login-header first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </login-header>
    `);
  });
});
