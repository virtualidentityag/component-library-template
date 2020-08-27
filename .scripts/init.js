// Disabling these rules due to being a node file
/* eslint-disable no-console */

const { prompt } = require('inquirer');
const { readFile, writeFile, unlink } = require('fs-extra');
const replace = require('replace');
const packageNameRegex = require('package-name-regex');

(async () => {
  const { projectName } = await prompt([
    {
      type: 'string',
      name: 'projectName',
      message: "What's the project's name?",
      validate: (input) => {
        if (!packageNameRegex.test(input)) {
          return 'Please give me a valid project name according to the npm package naming rules!';
        }

        return true;
      },
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
    paths: ['./.storybook', './src', './testing'],
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
