import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

// https://stenciljs.com/docs/config

export const config: Config = {
  namespace: 'component--library',
  hashFileNames: false,
  globalStyle: 'src/global/styles/styles.scss',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  testing: {
    // moduleFileExtensions: ['js', 'jsx', 'json', 'png', 'md', 'html', 'ts', 'tsx'],
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|md)$':
        '<rootDir>/test/__mocks__/fileMock.js',
      '\\.(css|sass)$': '<rootDir>/test/__mocks__/styleMock.js',
    },
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      baseUrl: 'https://myapp.local/',
      copy: [{ src: 'components/**/*.html' }],
    },
  ],
  plugins: [sass()],
};
