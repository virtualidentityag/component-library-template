import { Component, h } from '@stencil/core';

@Component({
  tag: 'example-component',
  styleUrl: 'example-component.scss',
  shadow: true,
})
export class ExampleComponent {

  render() {
    return (
      <div><h1>A little component to show you cool stuff</h1>
      <p>Here we use a Knob to play with this component in the preview.</p>
      <p>And here we use Faker to generate some content:</p></div>
    );
  }

}
