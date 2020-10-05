// Disabling these rules due to being a node file
/* eslint-disable no-console,compat/compat */

const { run } = require('@stencil/core/cli');
const { createNodeSys, createNodeLogger } = require('@stencil/core/sys/node');
const { prompt } = require('inquirer');
const {
  outputFile,
  exists,
  move,
  readFile,
  writeFile,
  existsSync,
} = require('fs-extra');
const beautify = require('js-beautify').js;
const czConfig = require('../.cz-config.js');

const { extenderArr } = (existsSync('./component-config.js') ? require('../component-config.js') : []);

const componentRegex = RegExp(/^([a-z0-9_]+-)+[a-z0-9_]+$/);

const getStoriesContent = (name, hasSpec, hasE2E) => `${`
import readme from './readme.md';

// eslint-disable-next-line import/no-default-export
export default {
  title: '${name}',
  parameters: {
    docs: { description: { component: readme } },
    jest: [${hasSpec ? `\n      '${name}.spec.tsx',` : ''}${hasE2E ? `\n      '${name}.e2e.ts',` : ''}
    ],
  },
};

export const empty = (): string => \`
  <${name}></${name}>
\`;
`.trim()}\n`;

const extendGenerator = (componentName, arr) => {
  const filesArr = arr.map((x) => x(componentName)).flat();
  filesArr.forEach((fileConfig) => {
    writeFile(`./src/components/${componentName}/${fileConfig.fileName}`, `${fileConfig.content}`);
  });
};

(async () => {
  const { name } = await prompt([
    {
      name: 'name',
      message: 'What\'s the components name?',
      validate: (input) => {
        if (!componentRegex.test(input)) {
          return 'Please give me a valid component name according to the web component naming rules!';
        }
        return true;
      },
    },
  ]);

  await run({
    args: [
      'generate',
      name,
    ],
    logger: createNodeLogger({ process }),
    sys: createNodeSys({ process }),
  });

  const [hasSpec, hasE2E] = await Promise.all([
    exists(`./src/components/${name}/test/${name}.spec.tsx`),
    exists(`./src/components/${name}/test/${name}.e2e.ts`),
  ]);

  // Generate stories file
  await outputFile(`./src/components/${name}/${name}.stories.ts`, getStoriesContent(name, hasSpec, hasE2E));

  // Change CSS file to SCSS
  await Promise.all([
    move(`./src/components/${name}/${name}.css`, `./src/components/${name}/${name}.scss`),
    writeFile(
      `./src/components/${name}/${name}.tsx`,
      (await readFile(`./src/components/${name}/${name}.tsx`)).toString().replace(`${name}.css`, `${name}.scss`),
    ),
  ]);
  
  // Add component to commitizen scopes

  const camelizedName = name.replace(/-./g, (x) => x.toUpperCase()[1]);

  if (!czConfig.scopes.find((scope) => scope === camelizedName)) {
    const newCzConfig = {};
    Object.assign(newCzConfig, czConfig);
    newCzConfig.scopes = [...newCzConfig.scopes, camelizedName];
    await writeFile('./.cz-config.js', beautify(`module.exports = ${JSON.stringify(newCzConfig)}`));
  }

  console.log(`  - ./src/components/${name}/${name}.stories.ts`);

  // Generate custom files
  if (existsSync('./component-config.js')) {
    await extendGenerator(name, extenderArr);
    console.log('  - custom files');
  }
})();
