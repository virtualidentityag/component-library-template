import { text } from '@storybook/addon-knobs';
import faker from 'faker';
import readme from './readme.md';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'example-component',
  parameters: {
    notes: { Docs: readme },
  },
};

export const empty = ({
  content = text('This is a text knob', faker.name.findName()),
}: { content: string }): string => `
  <example-component>${content}</example-component>
`;
