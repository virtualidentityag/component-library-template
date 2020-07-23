import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
  components: string[];

  componentWillLoad() {
    return fetch(`components/components.json`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        
        this.components = Object.keys(data);
      });
  }

  render() {
    return (
      <section class='row'>
        <div class="xs-12 md-8">
        <p>
          Welcome to the auto preview list. This list of components is being generated from a json file listing all the available components previews.
        </p>
        <ul>
          {this.components.map(component => <li><stencil-route-link url={`/preview/${component}`} exact={true}>{component}</stencil-route-link></li>)}
        </ul>
      </div>
      </section>
    );
  }
}
