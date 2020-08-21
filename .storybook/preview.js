import { addDecorator } from '@storybook/html';
import { withTests } from '@storybook/addon-jest';
// eslint-disable-next-line import/extensions,import/namespace,import/named
import { defineCustomElements } from '../dist/esm/loader';
import results from '../.jest-test-results.json';

defineCustomElements();

addDecorator(
  withTests({
    results,
  }),
);
