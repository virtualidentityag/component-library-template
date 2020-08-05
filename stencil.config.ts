import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

// https://stenciljs.com/docs/config

export const config: Config = {
  namespace: 'component--library',
  hashFileNames: false,
  globalStyle: 'src/global/styles/styles.scss',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
      footer: '<style>.sbdocs-h1{display: none;}</style>',
    },
    {
      type: 'www',
      baseUrl: 'https://myapp.local/',
      copy: [{ src: 'components/**/*.html' }],
    },
  ],
  plugins: [sass()],
};
