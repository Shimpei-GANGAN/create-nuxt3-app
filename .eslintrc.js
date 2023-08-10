// @ts-check
/**
 * @type {import('eslint').ESLint.ConfigData}
 * @see GitHub: {@link https://github.com/nuxt/eslint-config/ | nuxt/eslint-config}
 * @see ESLint Rules: {@link https://typescript-eslint.io/rules/explicit-function-return-type/ | explicit-function-return-type}
 * - NOTE: Return Typesの明示を必須にする
 */
module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: ["@nuxt/eslint-config", "prettier"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
  },
  overrides: [
    {
      files: ["*.ts", "*.vue"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "error",
      },
    },
  ],
};
