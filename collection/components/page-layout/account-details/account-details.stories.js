import readme from './readme.md';
import React from 'react';
import { AccountDetails } from '../../../../dist/collection/components/page-layout/account-details/account-details';

export default {
    title: 'page layout/Account Details',
    component: AccountDetails,
    parameters: {
      notes: readme
    },

    argTypes: {
      user: {
        control: 'object',
        description: 'User Details',
        table: {
          category: 'content'
        }
      },
    }
  };

  const defaultArgs = {
    user: '{"firstName": "Biff","lastName": "Biffyson","emailAddress": "biff@biffy.com","contactNumber": "555-2433"}'
  }

  const Template = args => {
    return (
          <account-details {...defaultArgs} slot="account-details"></account-details>
    )
  };

  export const Default = Template.bind({});
  Default.args = {...defaultArgs};

  Default.decorators = [
    (Story) => (
      <div className="admRoot">
          <main-page-contents>
            <policies-container slot="page-contents">
              <Story />
            </policies-container>
          </main-page-contents>
      </div>
    ),
  ];