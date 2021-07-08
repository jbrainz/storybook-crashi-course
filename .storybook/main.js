module.exports = {
  stories: ["../components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss",
    "storybook-css-modules-preset",
    "storybook-addon-styled-component-theme/dist/preset",
    "@storybook/addon-actions/register",
    "@storybook/addon-knobs",
    "storybook-addon-designs",
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
        transcludeMarkdown: true,
      },
    },
  ],
}
