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
        }
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
        { src: 'components/assets', dest: 'components/assets' },
        { src: 'components/webfonts', dest: 'components/webfonts' },
        { src: 'components/assets', dest: 'assets' },
      ],
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [sass()]
};
