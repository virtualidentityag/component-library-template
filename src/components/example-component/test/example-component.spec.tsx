import { newSpecPage } from '@stencil/core/testing';
import { ExampleComponent } from '../example-component';

describe('name-comp', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ExampleComponent],
      html: `<exampel-component></exampel-component>`,
    });
    expect(page.root).toEqualHtml(`
      <exampel-component></exampel-component>
    `);
  });
});
