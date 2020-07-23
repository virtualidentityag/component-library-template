import { Component, h } from '@stencil/core';

@Component({
  tag: 'preview-root',
})
export class PreviewRoot {
  render() {
    return (
      <article class="content">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/preview/:name' component='component-detail' />
              <stencil-route url='/' component='app-home' />
            </stencil-route-switch>
          </stencil-router>
      </article>
    );
  }
}
