const replace = require('replace');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'string',
      name: 'projectName',
      message: "What's the project's name?",
    },
  ])
  .then((answers) => {
    console.log("Initializing...");
    replace({
      regex: 'component--library',
      replacement: answers.projectName,
      paths: ['./package-lock.json', './package.json', './stencil-readme.config.ts', './stencil.config.ts', './typedoc.js'],
      recursive: false,
      silent: true,
    });
    replace({
      regex: 'component--library',
      replacement: answers.projectName,
      paths: ['./.storybook','./loader','./src'],
      recursive: true,
      silent: true,
    });
    console.log('Initilization done');
  })
  .catch((error) => {
    console.log('Ooops...something went wrong?!');
  });
