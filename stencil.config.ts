import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget } from '@stencil/angular-output-target';

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
      type: 'docs-readme',
      footer: '*ACME documents Inc!*',
      dir: 'docs',
      strict: true
    },
    angularOutputTarget({
      componentCorePackage: 'poc-adm-components',
      directivesProxyFile: '../angular-workspace/projects/poc-adm-components/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-workspace/projects/poc-adm-components/src/lib/stencil-generated/index.ts',
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
  plugins: [sass()]
};
