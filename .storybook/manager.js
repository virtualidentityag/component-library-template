import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',
    appBg: 'rgba(67,102,154,0.2)',
    colorPrimary: 'rgba(67,102,154,0.6)',
    colorSecondary: 'rgba(67,102,154,1)',
    brandTitle: 'Virtual Identity AG',
    brandUrl: 'https://www.virtual-identity.com/',
    brandImage: 'https://www.virtual-identity.com/frontend/v0.20.7/images/vi-logo.svg',
  }),
});
