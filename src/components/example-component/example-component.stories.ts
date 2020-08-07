import { text } from '@storybook/addon-knobs';
import faker from 'faker';
// @ts-ignore: md file and not a module
import readme from './readme.md';

export default {
  title: 'example-component',
  parameters: {
    docs: { description: { component: readme } },
  },
};
export const empty = ({
  content = text('This is a text knob', faker.name.findName()),
} = {}) => `<example-component>${content}</example-component>`;
empty.parameters = {
  jest: { disable: true },
};
