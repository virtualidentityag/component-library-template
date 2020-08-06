const cli = require('@stencil/core/cli');
const { createNodeSys, createNodeLogger } = require('@stencil/core/sys/node');
const fs = require('fs-extra');
const inquirer = require('inquirer');

(async () => {
  const answers = await inquirer
    .prompt([
      {
        name: 'name',
        message: 'What\'s the components name?',
      },
    ]);
  const component = answers.name;
  await cli.run({
    args: [
      'generate',
      component,
    ],
    logger: createNodeLogger({ process }),
    sys: createNodeSys({ process }),
  });
  await fs.outputFile(`${__dirname}/src/components/${component}/${component}.stories.ts`, `import readme from './readme.md';

// eslint-disable-next-line import/no-default-export
export default {
  title: '${component}',
  parameters: {
    docs: { description: { component: readme } },
  },
};

export const empty = (): string => \`
  <${component}></${component}>
\`;
`);
  // eslint-disable-next-line no-console
  console.log(`  - src/components/${component}/${component}.stories.ts`);
})();
