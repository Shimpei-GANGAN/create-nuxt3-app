// @ts-check

import { FlatCompat } from "@eslint/eslintrc";
import eslintConfig from "@eslint/js";
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import tsEslintParser from "@typescript-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier";
import vitest from "eslint-plugin-vitest";
import globals from "globals";
import { fileURLToPath } from "node:url";
import { dirname } from "pathe";

const eslintrc = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url))
});

/**
 * ESLint Config for Vitest
 *
 * @type {import('eslint').Linter.FlatConfig}
 * @see GitHub: {@link https://github.com/veritem/eslint-plugin-vitest/ | eslint-plugin-vitest}
 * - Rule1: {@link https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-it.md | consistent-test-it}
 * - Rule2: {@link https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-top-level-describe.md | require-top-level-describe}
 */
const vitestEslintConfig = {
  plugins: {
    vitest,
  },
  rules: {
    ...vitest.configs.recommended.rules,
    "vitest/consistent-test-it": ["error", { fn: "it", withinDescribe: "it" }],
    "vitest/require-top-level-describe": "error",
  },
};

/**
 * ESLint Config for TypeScript
 *
 * @type {import('eslint').Linter.FlatConfig}
 * @see GitHub: {@link https://typescript-eslint.io/rules/ | @typescript-eslint/eslint-plugin}
 * - Rule1: {@link https://typescript-eslint.io/rules/explicit-function-return-type/ | explicit-function-return-type} - Return Typesの明示を必須にする
 * - Rule2: {@link https://typescript-eslint.io/rules/consistent-type-imports/ | consistent-type-imports} - 型のimportを必須にする
 * - RUle3: {@link https://typescript-eslint.io/rules/no-import-type-side-effects/ | no-import-type-side-effects} - 型のimportで副作用を禁止する
 */
const tsEslintConfig = {
  plugins: {
    "@typescript-eslint": tsEslintPlugin,
  },
  files: ["**/*.ts", "**/*.mts", "**/*.vue"],
  languageOptions: {
    parser: tsEslintParser,

  },
  rules: {
    ...tsEslintPlugin.configs["eslint-recommended"].overrides[0].rules,
    ...tsEslintPlugin.configs["recommended-type-checked"].rules,
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-import-type-side-effects": "error",
  },
};

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  {
    ignores: [
      "**/dist/**/*",
      "**/node_modules/**/*",
      "**/.nuxt/**/*",
      "!./storybook/*",
    ],
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
  },
  // {
  //   rules: {
  //     "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
  //     "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
  //   },
  // },
  eslintConfig.configs.recommended,
  tsEslintConfig,
  ...eslintrc.extends("plugin:storybook/recommended"),
  vitestEslintConfig,
  eslintConfigPrettier,
];
