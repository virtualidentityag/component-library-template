// Disabling these rules due to being a node file
/* eslint-disable no-console */

const { prompt } = require('inquirer');
const { readFile, writeFile, unlink } = require('fs-extra');
const replace = require('replace');

(async () => {
  const { projectName } = await prompt([
    {
      type: 'string',
      name: 'projectName',
      message: "What's the project's name?",
    },
  ]);

  console.log('Initializing...');
  replace({
    regex: 'component-library-template',
    replacement: projectName,
    paths: ['./package-lock.json', './package.json', './stencil.config.ts'],
    recursive: false,
    silent: true,
  });
  replace({
    regex: 'component-library-template',
    replacement: projectName,
    paths: ['./.storybook', './loader', './src', './testing'],
    recursive: true,
    silent: true,
  });

  // Re-write "init" script
  const packageJson = JSON.parse(await readFile('./package.json', 'utf-8'));
  packageJson.scripts.init = 'echo "Already initialized!"';
  await writeFile('./package.json', JSON.stringify(packageJson, undefined, 2));

  // Remove "init.js" helper
  await unlink('./.scripts/init.js');

  console.log('Initialization done');
})();
