import { addDecorator } from '@storybook/html';
import { withTests } from '@storybook/addon-jest';
import { defineCustomElements } from '../dist/esm/loader';
import results from '../.jest-test-results.json';

defineCustomElements();

addDecorator(
  withTests({
    results,
  }),
);
