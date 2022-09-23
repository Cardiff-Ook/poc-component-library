import { newSpecPage } from '@stencil/core/testing';
import { PolicyManagementTile } from '../policy-management-tile';

describe('policy-management-tile', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PolicyManagementTile],
      html: `<policy-management-tile></policy-management-tile>`,
    });
    expect(page.root).toEqualHtml(`
      <policy-management-tile>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </policy-management-tile>
    `);
  });
});
