import { newSpecPage } from '@stencil/core/testing';
import { PolicyTile } from '../policy-tile';

describe('policy-tile', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PolicyTile],
      html: `<policy-tile></policy-tile>`,
    });
    expect(page.root).toEqualHtml(`
      <policy-tile>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </policy-tile>
    `);
  });
});
