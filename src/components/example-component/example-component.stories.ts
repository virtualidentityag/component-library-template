// @ts-ignore: md file and not a module
import readme from './readme.md';
export default {
  title: 'example-component',
  parameters: {
    notes: { Docs: readme },
  },
};
export const empty = () => '<example-component></example-component>';
