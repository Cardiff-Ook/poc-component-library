import readme from './readme.md';

export default {
    title: 'base components/Error Message',
    parameters: {
      notes: readme
    }
  };

  export const Default = () => `<error-message errorMessage="Error Message Goes Here"></error-message>`;