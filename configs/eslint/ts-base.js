"use strict";
// @ts-check

/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/stylistic",
  ],
  parser: "@typescript-eslint/parser",
  rules: {
    /**
     * This rules is set up to use the same rules as '@typescript-eslint/recommended' in v5.
     * https://typescript-eslint.io/blog/announcing-typescript-eslint-v6/#updated-configuration-rules
     */

    // This rules removed from recommended in v6.
    "no-extra-semi": "off",
    "@typescript-eslint/no-extra-semi": "error",

    // This rule moved from recommended to strict in v6.
    "@typescript-eslint/no-non-null-assertion": "warn",

    // v6でrecommendedへ追加されたルール
    "@typescript-eslint/no-duplicate-enum-values": "off",
    "@typescript-eslint/no-unsafe-declaration-merging": "off",

    // This rule moved from recommended to stylistic in v6.
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/ban-tslint-comment": "off",
    "@typescript-eslint/class-literal-property-style": "off",
    "@typescript-eslint/consistent-generic-constructors": "off",
    "@typescript-eslint/consistent-indexed-object-style": "off",
    "@typescript-eslint/consistent-type-assertions": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/no-confusing-non-null-assertion": "off",
    "@typescript-eslint/prefer-for-of": "off",
    "@typescript-eslint/prefer-function-type": "off",
  },
};
