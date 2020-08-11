import { defineCustomElements } from '../dist/esm/loader';
import { addDecorator } from '@storybook/html';
import { withTests } from '@storybook/addon-jest';
import results from '../.jest-test-results.json';

defineCustomElements();

addDecorator(
  withTests({
    results,
  }),
);
