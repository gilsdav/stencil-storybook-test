import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'ui-components',
  taskQueue: 'async',

  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../../dist/libs/ui-components/dist',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      dir: '../../dist/libs/ui-components/www',
      serviceWorker: null, // disable service workers
    },
  ],

  plugins: [sass()],
};
