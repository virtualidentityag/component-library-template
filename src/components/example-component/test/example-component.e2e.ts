import { newE2EPage } from '@stencil/core/testing';
import { screenshotStories } from '../../../../testing';
import * as stories from '../example-component.stories';

jest.mock('./readme.md');

describe('example-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<example-component></example-component>');

    const element = await page.find('example-component');
    expect(element).toHaveClass('hydrated');
  });

  screenshotStories(stories);
});
