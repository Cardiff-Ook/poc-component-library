import { newSpecPage } from '@stencil/core/testing';
import { PolicyDetails } from '../policy-details';

describe('policy-details', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PolicyDetails],
      html: `<policy-details></policy-details>`,
    });
    expect(page.root).toEqualHtml(`
      <policy-details>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </policy-details>
    `);
  });
});
