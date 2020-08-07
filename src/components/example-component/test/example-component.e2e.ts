import { screenshotStories } from './../../../../test/screenshot-stories';
import { newE2EPage } from '@stencil/core/testing';
import * as stories from '../example-component.stories';

describe('example-component', () => {
  jest.mock('./readme.md');
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<example-component></example-component>');

    const element = await page.find('example-component');
    expect(element).toHaveClass('hydrated');
  });

  screenshotStories(stories);
});
