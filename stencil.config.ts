import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

// https://stenciljs.com/docs/config

export const config: Config = {
  namespace: 'component--library',
  hashFileNames: false,
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.scss',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
  ],
  plugins: [sass()],
};
