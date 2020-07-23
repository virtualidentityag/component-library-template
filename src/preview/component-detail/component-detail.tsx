import { Component, h, Prop, Host } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'component-detail',
})
export class ComponentDetail {
  content: string;

  @Prop() match: MatchResults;

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }

  components: string[];


  async componentWillLoad() {
    const components = await fetch(`/components/components.json`).then(response => response.json());
    const componentPath = components[this.match.params.name].replace('src', '');
    return fetch(componentPath)
      .then(response => response.text())
      .then(data => {
        this.content = data;
      });
  }

  render() {
    if (this.match?.params.name) {
      return (
          <Host innerHTML={this.content}>
          </Host>
        );

    }
  }
}
