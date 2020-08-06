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
    // eslint-disable-next-line no-console
    console.log('Initializing...');
    replace({
      regex: 'component--library',
      replacement: answers.projectName,
      paths: ['.'],
      recursive: true,
      silent: true,
    });
    // eslint-disable-next-line no-console
    console.log('Initilization done');
  })
  .catch(() => {
    // eslint-disable-next-line no-console
    console.log('Ooops...something went wrong?!');
  });
