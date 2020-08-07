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
  await fs.outputFile(`${__dirname}/src/components/${component}/${component}.stories.ts`, `// @ts-ignore: md file and not a module
import readme from './readme.md'
// @ts-ignore: json file and not a module
// import results from '../../../.jest-test-results.json';
// import { withTests } from '@storybook/addon-jest';

export default {
    title: '${component}',
    // decorators: [withTests({ results })],
    parameters: {
      docs: { description: {component: readme} },
    }
  };
export const empty = () => '<${component}></${component}>';
// empty.parameters = {
//   jest: ['${component}.spec.tsx'],
// };`);
  console.log(`  - src/components/${component}/${component}.stories.ts`);
})()