import readme from './readme.md';
import React from 'react';
import { AccountSettings } from '../../../../dist/collection/components/page-layout/account-settings/account-settings';

export default {
    title: 'page layout/Account Settings',
    component: AccountSettings,
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
          <account-settings {...defaultArgs}></account-settings>
    )
  };

  export const Default = Template.bind({});
  Default.args = {...defaultArgs};

  Default.decorators = [
    (Story) => (
      <main-page-contents>
        <policies-container slot="page-contents">
            <Story />
        </policies-container>
      </main-page-contents>
    ),
  ];