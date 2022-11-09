module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-notes/register",
    "@storybook/addon-knobs"
  ],
  "framework": "@storybook/html",
  staticDirs: ['../dist', '../public/assets'],
  webpackFinal: async (config) => {
      const rules = config.module?.rules || [];

          rules.push({
              test: /.tsx$/,
              loader: 'string-replace-loader',
              options: {
                  search: /\/assets\//g,
                  replace: '/poc-component-library/assets/',
              },
          });

      config.module.rules = rules;
      return config;
  },
}