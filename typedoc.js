module.exports = {
  name: 'component--library',
  mode: 'file',
  out: 'dist/docs',
  exclude: [
    '**/node_modules/**',
    '**/*.scss',
  ],
  ignoreCompilerErrors: true,
  excludeProtected: true,
  excludePrivate: true,
  excludeNotExported: true,
  theme: 'minimal',
  includeVersion: true,
  disableSources: true,
  hideGenerator: true,
};
