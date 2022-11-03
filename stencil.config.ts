import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget as angular } from '@stencil/angular-output-target';
import { reactOutputTarget as react } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'poc-adm-components',
  globalStyle: 'src/global/global.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      copy: [
        {
          src: '**/*.{jpg,png,svg}',
          dest: 'dist/components/assets',
          warn: true,
        },
        {
          src: 'components/webfonts/*',
          dest: 'dist/components/webfonts',
          warn: true,
        },
        {
          src: 'components/webfonts/*',
          dest: 'dist/webfonts',
          warn: true,
        },
        {
          src: '**/*.{jpg,png,svg}',
          dest: 'dist/assets',
          warn: true,
        },
      ]
    },
    {
      type: 'docs-json',
      file: 'docs/docs.json'
    },
    { 
        type: 'docs-vscode',
        file: 'vscode-data.json',
    },
    {
      type: 'docs-readme',
      footer: '*ACME documents Inc!*',
      strict: true
    },
    angular({
      componentCorePackage: 'poc-adm-components',
      directivesProxyFile: '../angular-workspace/projects/poc-adm-components/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-workspace/projects/poc-adm-components/src/lib/stencil-generated/index.ts',
    }),
    react({
      // name of the Stencil Component Library
      componentCorePackage: 'poc-adm-components',
      // This file gets generated by React wrapper function and contains definitions of all Wrapper components
      proxiesFile: '../poc-component-library-react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'stats',
    },
    {
      type: 'www',
      dir: 'public',
      copy: [
        { src: 'demo', dest: 'demo' },
        { src: 'components/assets', dest: 'components/assets' },
        { src: 'components/webfonts', dest: 'components/webfonts' },
        { src: 'components/assets', dest: 'assets' },
        { src: 'components/webfonts', dest: 'webfonts' },
      ],
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [sass()],
  buildEs5: 'prod',
  extras: {
    cssVarsShim: true,
    dynamicImportShim: true,
    shadowDomShim: true,
    safari10: true,
    scriptDataOpts: true,
    appendChildSlotFix: false,
    cloneNodeFix: false,
    slotChildNodesFix: true,
  }
};
