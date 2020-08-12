/* istanbul ignore file */
import { newSpecPage } from '@stencil/core/testing';
import { ComponentInterface } from '@stencil/core';

export const createSpecComponent = async <T>(
  componentTag: string,
  component: ComponentInterface | ComponentInterface[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: Record<string, any> = {},
): Promise<T> => {
  const components = Array.isArray(component) ? component : [component];
  const page = await newSpecPage({
    components,
    html: `<${componentTag}${Object.keys(props).map((prop) => ` ${prop}="${props[prop]}"`).join('')}></${componentTag}>`,
  });
  return page.root as ComponentInterface as T;
};

export const getChild = (component: HTMLElement): HTMLElement => (component.shadowRoot
  // eslint-disable-next-line compat/compat
  ? Array.from(component.shadowRoot.childNodes as NodeListOf<HTMLElement>)[0]
  // eslint-disable-next-line compat/compat
  : Array.from(component.childNodes as NodeListOf<HTMLElement>)[0]);

export const getAttributes = (component: HTMLElement): Record<string, string> => {
  const html = component.outerHTML.trim();
  const firstSpace = html.indexOf(' ');
  const lastChar = html.lastIndexOf('><');
  if (firstSpace < 0 || firstSpace > lastChar) {
    return {};
  }
  return html.substr(firstSpace, lastChar - firstSpace)
    .split('=')
    .map((item) => {
      const quote = Math.max(item.lastIndexOf('"'), item.lastIndexOf('\''));
      const split = item.substr(Math.max(0, quote)).split(' ');
      return split.length > 1 ? split.pop() : undefined;
    })
    .filter((attribute) => !!attribute)
    .reduce((accumulator, key) => ({
      ...accumulator,
      [key]: component.getAttribute(key),
    }), {});
};
