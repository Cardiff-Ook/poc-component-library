import React from 'react';
import { AccountDetails } from '../../dist/collection/components/page-layout/account-details/account-details';

export default {
    title: 'page-structures/Page Header',
    component: AccountDetails,

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
          <main-header brand="admiral">
          <page-logo brand="admiral" slot="page-logo"></page-logo>
          <page-header-bar name="Biff" slot="header-bar">
            <span slot="message">HERE’S YOUR ACCOUNT SETTINGS</span>
          </page-header-bar>
          <nav-bar slot="nav-bar" buttons='
            [
              { "name":"My Policies", "isActive": false, "link": "./index.html" }, 
              { "name":"Documents", "isActive": false, "link": "./documents.html" }, 
              { "name":"Make A Change", "isActive": false, "link": "#" }, 
              { "name":"Claims", "isActive": false, "link": "#" }, 
              { "name":"Add to Policy", "isActive": false, "link": "#" }, 
              { "name":"Payments", "isActive": false, "link": "#" }, 
              { "name":"Help", "isActive": false, "link": "#" }, 
              { "name":"", "isActive": false, "link": "#" }, 
              { "name":"MyAccount", "isActive": true, "link": "./account.html" }
            ]'>
          </nav-bar>
        </main-header>
    )
];