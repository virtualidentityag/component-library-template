const { existsSync, createFileSync, writeFileSync } = require('fs-extra');

if (!existsSync('./.jest-test-results.json')) {
  createFileSync('./.jest-test-results.json');
  writeFileSync('./.jest-test-results.json', '{}');
  // eslint-disable-next-line no-console
  console.log('wrote jest-test-results.json');
} else {
  // eslint-disable-next-line no-console
  console.log('.jest-test-results.json exists');
}
