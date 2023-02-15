import { newSpecPage } from '@stencil/core/testing';
import { NewNavBarImg } from '../new-nav-bar-img';

describe('new-nav-bar-img', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NewNavBarImg],
      html: `<new-nav-bar-img></new-nav-bar-img>`,
    });
    expect(page.root).toEqualHtml(`
      <new-nav-bar-img>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </new-nav-bar-img>
    `);
  });
});
