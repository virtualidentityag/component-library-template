const cli = require('@stencil/core/cli');
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
  process.argv.push('generate')
  process.argv.push(component)
  await cli.run({
    process: process,
    logger: cli.createNodeLogger(process),
    sys: cli.createNodeSystem(process)
  });
  await fs.outputFile(`${__dirname}/src/components/${component}/index.html`, `<${component}></${component}>`);
  console.log(`  - src/components/${component}/index.html`);
  // await storybook configuration
})()