"use strict";
// @ts-check

/**
 * ESLint Config for Vitest
 *
 * @type {import('eslint').ESLint.ConfigData}
 * @see GitHub: {@link https://github.com/veritem/eslint-plugin-vitest/ | eslint-plugin-vitest}
 * - Rule1: {@link https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-it.md | consistent-test-it}
 * - Rule2: {@link https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-top-level-describe.md | require-top-level-describe}
 * */
module.exports = {
  plugins: ["vitest"],
  extends: ["plugin:vitest/recommended"],
  rules: {
    "vitest/consistent-test-it": ["error", { fn: "it", withinDescribe: "it" }],
    "vitest/require-top-level-describe": "error",
  },
};
