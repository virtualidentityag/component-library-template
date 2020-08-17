import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import nodeSassPackageImporter from 'node-sass-package-importer';

// https://stenciljs.com/docs/config

export const config: Config = {
  namespace: 'component--library',
  hashFileNames: false,
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.scss',
  taskQueue: 'async',
  testing: {
    // moduleFileExtensions: ['js', 'jsx', 'json', 'png', 'md', 'html', 'ts', 'tsx'],
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|md)$':
        '<rootDir>/testing/mocks/file-mock.js',
      '\\.(css|sass)$': '<rootDir>/testing/mocks/style-mock.js',
    },
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
      footer: '<style>.sbdocs-h1{display: none;}</style>',
    },
  ],
  plugins: [
    sass({ importer: nodeSassPackageImporter() }),
  ],
};
