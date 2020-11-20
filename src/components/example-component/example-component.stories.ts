import { text } from '@storybook/addon-knobs';
import faker from 'faker';
import { jsxDecorator } from 'storybook-addon-jsx';
import readme from './readme.md';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'example-component',
  parameters: {
    docs: { description: { component: readme } },
    jest: [
      'example-component.spec.tsx',
      'example-component.e2e.ts',
    ],
  },
  decorators: [jsxDecorator],
};

export const empty = ({
  content = text('This is a text knob', faker.name.findName()),
}: { content?: string } = {}): string => `
  <example-component example-prop="Propmagic">${content}</example-component>
`;
