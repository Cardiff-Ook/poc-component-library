import { newSpecPage } from '@stencil/core/testing';
import { SubSectionTitle } from '../sub-section-title';

describe('sub-section-title', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SubSectionTitle],
      html: `<sub-section-title></sub-section-title>`,
    });
    expect(page.root).toEqualHtml(`
      <sub-section-title>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sub-section-title>
    `);
  });
});
