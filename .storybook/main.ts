import type { StorybookConfig } from "@storybook-vue/nuxt";

const config: StorybookConfig = {
  stories: [
    "../src/components/**/*.stories.@(ts|tsx|mdx)",
    "../src/layouts/**/*.stories.@(ts|tsx|mdx)",
    "../src/pages/**/*.stories.@(ts|tsx|mdx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook-vue/nuxt",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
