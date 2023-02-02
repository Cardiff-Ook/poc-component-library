import React from 'react';
import { PageHeaderBar } from '../../dist/collection/components/page-layout/page-header-bar/page-header-bar';
import { useEffect } from '@storybook/addons';

export default {
    title: 'Page Structures/Page Header',
    component: PageHeaderBar,
    argTypes: {
      name: {
        control: 'text',
        description: 'The name to be displayed',
        table: {
          category: 'content'
        }
      },
      buttons: {
        control: 'object',
        description: 'The buttons shown in the nav bar and their states',
        table: {
            category: 'navigation'
        }
      }
    },
    decorators: [
      (Story) => {
        useEffect(() => {
          const script = document.createElement('script');
          let scriptSrc = document.createTextNode("function updateURL() {var element = document.getElementsByClassName('jut__LogoTitle__logo')[0];element.src = element.src.indexOf('cardiff-ook') > -1 ? element.src.replace('/assets', '/poc-component-library/assets') : element.src;}");
          script.appendChild(scriptSrc);
          scriptSrc = document.createTextNode("timeout = setTimeout(updateURL, 500);");
          script.appendChild(scriptSrc);
          document.body.appendChild(script);
        }, []);
  
        return <Story />;
      },
    ],
  };

  const defaultArgs = {
    name: 'Biff'
  }

  const navBarArgs = {
    buttons: '[{ "name":"My Policies", "isActive": false, "link": "./index.html" }, { "name":"Documents", "isActive": false, "link": "./documents.html" }, { "name":"Make A Change", "isActive": false, "link": "#" },{ "name":"Claims", "isActive": false, "link": "#" }, { "name":"Add to Policy", "isActive": false, "link": "#" },{ "name":"Payments", "isActive": false, "link": "#" }, { "name":"Help", "isActive": false, "link": "#" }, { "name":"", "isActive": false, "link": "#" }, { "name":"MyAccount", "isActive": true, "link": "./account.html" }]'
  }

  const Template = args => {
    return (
          <page-header {...defaultArgs} slot="header-bar">
            <span slot="message">HERE’S YOUR ACCOUNT SETTINGS</span>
          </page-header>
    )
  };

  export const Default = Template.bind({});
  Default.args = {...defaultArgs};

  Default.decorators = [
    (Story) => (
          <main-header brand="admiral">
          <page-logo brand="admiral" slot="page-logo"></page-logo>
          <page-header-bar {...defaultArgs} slot="header-bar">
            <span slot="message">HERE’S YOUR ACCOUNT SETTINGS</span>
          </page-header-bar>
          <nav-bar {...navBarArgs} slot="nav-bar">
          </nav-bar>
        </main-header>
    )
];