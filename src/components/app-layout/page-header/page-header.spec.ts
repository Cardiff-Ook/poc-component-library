import { newSpecPage } from '@stencil/core/testing';
import { PageHeader } from './page-header';

describe('page-header', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [PageHeader],
      html: '<page-header></page-header>',
    });
    expect(root).toEqualHtml(`
      <page-header>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </page-header>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [PageHeader],
      html: `<page-header first="Stencil" last="'Don't call me a framework' JS"></page-header>`,
    });
    expect(root).toEqualHtml(`
      <page-header first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </page-header>
    `);
  });
});
