import { newSpecPage } from '@stencil/core/testing';
import { ExampleComponent } from '../example-component';

describe('example-component', () => {
  let element: HTMLExampleComponentElement;

  beforeEach(async () => {
    element = (await newSpecPage({
      components: [ExampleComponent],
      html: '<example-component></example-component>',
    })).root as HTMLExampleComponentElement;
  });

  it('renders', async () => {
    expect(element.shadowRoot).toBeTruthy();
    expect(element.shadowRoot.childNodes.length).toBeTruthy();
  });
});
