const cli = require('@stencil/core/cli');
const { createNodeSys, createNodeLogger } = require('@stencil/core/sys/node');
const fs = require('fs-extra');
var inquirer = require('inquirer');

(async () => {
  const answers = await inquirer
    .prompt([
      {
        name: 'name',
        message: 'What\'s the components name?'
      }
    ]);
  const component = answers.name;
  await cli.run({
    args: [
      'generate',
      component
    ],
    logger: createNodeLogger({process}),
    sys: createNodeSys({process}),
  });
  console.log('DONE GEN');
  await fs.outputFile(`${__dirname}/src/components/${component}/index.html`, `<${component}></${component}>`);
  console.log(`  - src/components/${component}/index.html`);
  await fs.outputFile(`${__dirname}/src/components/${component}/index.stories.js`, ``);
  console.log(`  - src/components/${component}/stories.js`);
})()