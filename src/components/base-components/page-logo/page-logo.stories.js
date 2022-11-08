import readme from './readme.md';
import PageLogo from '../../../../dist/collection/components/base-components/page-logo/page-logo';
import React from 'react';

import { withKnobs, text } from '@storybook/addon-knobs';

export default {
    title: 'base components/Page Logo',
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
    }
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
    <div id="headerContainer" class="storybook AdmPageHeaderComponent_headerContainer__3MnMe">
      <header class="jut__Header__header jut__Header__large jut__ApplicationHeader__applicationHeader appheader">
        <div class="jut__Header__headerContainer jut__Header__headerContent">
          <Story style="height: 64px"/>
        </div>
      </header>      
    </div>
  ),
];