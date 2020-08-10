import { newSpecPage } from '@stencil/core/testing';
import { ExampleComponent } from '../example-component';

describe('name-comp', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ExampleComponent],
      html: '<example-component></example-component>',
    });
    expect(page.root).toEqualHtml(`
      <example-component></example-component>
    `);
  });
});
