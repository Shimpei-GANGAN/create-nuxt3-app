// @ts-check
/**
 * @type {import('eslint').ESLint.ConfigData}
 * @see GitHub: {@link https://github.com/nuxt/eslint-config/ | nuxt/eslint-config}
 * @see ESLint Rules: {@link https://typescript-eslint.io/rules/explicit-function-return-type/ | explicit-function-return-type}
 * - NOTE: Return Typesの明示を必須にする
 * @see ESLint Rules: {@link https://typescript-eslint.io/rules/consistent-type-imports/ | consistent-type-imports}
 * - NOTE: 型のimportを必須にする
 * @see ESLint Rules: {@link https://typescript-eslint.io/rules/no-import-type-side-effects/ | no-import-type-side-effects}
 * - NOTE: 型のimportで副作用を禁止する
 */
module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: ["@nuxt/eslint-config", "prettier"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/no-import-side-effects": "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
  },
  overrides: [
    {
      files: ["*.ts", "*.mts", "*.vue"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/no-import-side-effects": "error",
      },
    },
  ],
};
