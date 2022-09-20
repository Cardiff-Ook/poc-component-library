import { newSpecPage } from '@stencil/core/testing';
import { LoginTitleWrapper } from '../login-title-wrapper';

describe('login-title-wrapper', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LoginTitleWrapper],
      html: `<login-title-wrapper></login-title-wrapper>`,
    });
    expect(page.root).toEqualHtml(`
      <login-title-wrapper>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </login-title-wrapper>
    `);
  });
});
