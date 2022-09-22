import { newSpecPage } from '@stencil/core/testing';
import { PoliciesContainer } from '../policies-container';

describe('policies-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PoliciesContainer],
      html: `<policies-container></policies-container>`,
    });
    expect(page.root).toEqualHtml(`
      <policies-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </policies-container>
    `);
  });
});
