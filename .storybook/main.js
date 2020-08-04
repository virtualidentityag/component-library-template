module.exports = {
  stories: ['../src/components/**/*.stories.ts'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@storybook/addon-storysource',
    '@storybook/addon-notes',
    '@storybook/addon-jest',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
