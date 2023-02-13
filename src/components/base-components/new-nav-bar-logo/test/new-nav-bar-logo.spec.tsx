import { newSpecPage } from '@stencil/core/testing';
import { NewNavBarLogo } from '../new-nav-bar-logo';

describe('new-nav-bar-logo', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NewNavBarLogo],
      html: `<new-nav-bar-logo></new-nav-bar-logo>`,
    });
    expect(page.root).toEqualHtml(`
      <new-nav-bar-logo>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </new-nav-bar-logo>
    `);
  });
});
