import { newSpecPage } from '@stencil/core/testing';
import { ExampleComponent } from '../example-component';

describe('example-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ExampleComponent],
      html: `<example-component></example-component>`,
    });
    expect(page.root).toEqualHtml(`
      <example-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </example-component>
    `);
  });
});
