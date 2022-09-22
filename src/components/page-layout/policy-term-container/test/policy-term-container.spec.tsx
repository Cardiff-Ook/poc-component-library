import { newSpecPage } from '@stencil/core/testing';
import { PolicyTermContainer } from '../policy-term-container';

describe('policy-term-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PolicyTermContainer],
      html: `<policy-term-container></policy-term-container>`,
    });
    expect(page.root).toEqualHtml(`
      <policy-term-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </policy-term-container>
    `);
  });
});
