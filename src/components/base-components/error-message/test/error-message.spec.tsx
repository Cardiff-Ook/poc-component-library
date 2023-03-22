import { newSpecPage } from '@stencil/core/testing';
import { ErrorMessage } from '../error-message';

describe('error-message', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ErrorMessage],
      html: `<error-message></error-message>`,
    });
    expect(page.root).toEqualHtml(`
      <error-message>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </error-message>
    `);
  });
});
