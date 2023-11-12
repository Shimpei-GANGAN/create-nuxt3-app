// @ts-check
/**
 * @type {import('eslint').ESLint.ConfigData}
 * @see GitHub: {@link https://github.com/nuxt/eslint-config/ | nuxt/eslint-config}
 *
 * @see GitHub: {@link https://typescript-eslint.io/rules/ | @typescript-eslint/eslint-plugin}
 * - Rule1: {@link https://typescript-eslint.io/rules/explicit-function-return-type/ | explicit-function-return-type} - Return Typesの明示を必須にする
 * - Rule2: {@link https://typescript-eslint.io/rules/consistent-type-imports/ | consistent-type-imports} - 型のimportを必須にする
 * - RUle3: {@link https://typescript-eslint.io/rules/no-import-type-side-effects/ | no-import-type-side-effects} - 型のimportで副作用を禁止する
 */
module.exports = {
  root: true,
  env: {
    browser: true,
  },
  ignorePatterns: [
    ".eslintrc.js",
    "!./storybook/*",
    "dist",
    "**/node_modules/**/*",
    "src/.nuxt/**/*",
    ".vscode/",
    ".github/",
  ],
  extends: [
    require.resolve("./configs/eslint/ts-base"),
    "@nuxt/eslint-config",
    require.resolve("./configs/eslint/sb"),
    require.resolve("./configs/eslint/vitest"),
    "prettier",
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/no-import-type-side-effects": "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
  },
  overrides: [
    {
      files: ["*.ts", "*.mts", "*.vue"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/no-import-type-side-effects": "error",
      },
    },
  ],
};
