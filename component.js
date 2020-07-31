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
  await fs.outputFile(`${__dirname}/src/components/${component}/${component}.stories.ts`, `import readme from './readme.md'
export default {
    title: '${component}',
    parameters: {
      notes: { Docs: readme },
    }
  };
export const empty = () => '<${component}></${component}>';`);
  console.log(`  - src/components/${component}/${component}.stories.ts`);
})()