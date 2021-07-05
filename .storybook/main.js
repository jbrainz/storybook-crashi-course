module.exports = {
  stories: [
    "../components/**/*.components.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss",
    "storybook-css-modules-preset",
    "storybook-addon-styled-component-theme/dist/preset",
  ],
}
