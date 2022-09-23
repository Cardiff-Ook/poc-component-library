import { newSpecPage } from '@stencil/core/testing';
import { PolicySubsectionHeader } from '../policy-subsection-header';

describe('policy-subsection-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PolicySubsectionHeader],
      html: `<policy-subsection-header></policy-subsection-header>`,
    });
    expect(page.root).toEqualHtml(`
      <policy-subsection-header>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </policy-subsection-header>
    `);
  });
});
