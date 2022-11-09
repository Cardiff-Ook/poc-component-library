import readme from './readme.md';
import { PageLogo } from '../../../../dist/collection/components/base-components/page-logo/page-logo';
import React from 'react';
import { useEffect } from '@storybook/addons';

export default {
    title: 'base components/Page Logo',
    component: PageLogo,
    argTypes: {
      brand: {
        control: 'text',
        description: 'The brand',
        table: {
          category: 'content'
        }
      },
    },
    parameters: {
      notes: readme
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
    brand: 'admiral',
  };

  const Template = args => {
    return <page-logo {...defaultArgs}></page-logo>;
  };


  export const Default = Template.bind({});
  Default.args = {...defaultArgs};

  Default.decorators = [
  (Story) => (
    <div id="headerContainer" className="storybook AdmPageHeaderComponent_headerContainer__3MnMe">
      <header className="jut__Header__header jut__Header__large jut__ApplicationHeader__applicationHeader appheader">
        <div className="jut__Header__headerContainer jut__Header__headerContent">
          <Story />
        </div>
      </header>      
    </div>
  ),
];