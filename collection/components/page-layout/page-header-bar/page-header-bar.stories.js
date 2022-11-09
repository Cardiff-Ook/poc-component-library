import readme from './readme.md';
import { PageHeaderBar } from '../../../../dist/collection/components/page-layout/page-header-bar/page-header-bar';
import React from 'react';

import CustomMDXDocumentation from './Custom-MDX-Documentation.mdx';

export default {
    title: 'page layout/page-header-bar',
    component: PageHeaderBar,
    argTypes: {
      name: {
        control: 'text',
        description: 'The name to be displayed',
        table: {
          category: 'content'
        }
      },
    },
    parameters: {
      notes: readme,
      docs: {
        page: CustomMDXDocumentation,
      },
    }
  };

  const defaultArgs = {
    name: 'Biff',
  };

  const Template = args => {
    return <page-header-bar {...defaultArgs}></page-header-bar>;
  };


  export const Default = Template.bind({});
  Default.args = {...defaultArgs};
