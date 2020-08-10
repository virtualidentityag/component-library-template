import { text } from '@storybook/addon-knobs';
import faker from 'faker';
import readme from './readme.md';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'example-component',
  parameters: {
    docs: { description: { component: readme } },
  },
};

export const empty = ({ content }: { content?: string } = {
  content: text('This is a text knob', faker.name.findName()),
}): string => `
  <example-component>${content}</example-component>
`;
