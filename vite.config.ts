/// <reference types="vitest" />

import Vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    Vue(),
    AutoImport({
      imports: ["vue", "vue-router", "pinia"],
    }),
  ],
  resolve: {
    alias: {
      "@": "./src",
    },
  },
  define: {
    "import.meta.vitest": false,
  },
  test: {
    includeSource: [
      "src/**/*.{js,ts,vue}",
      /**
       * NOTE: 基本的には同一ファイルにテストを書く
       * ただし、テスト対象のファイルが複数ある場合は、
       * テスト対象のファイルと同じディレクトリにテストファイルを置く
       * @see {@link https://vitest.dev/guide/features.html#in-source-testing | Vitest#In-source testing}
       */
      "src/**/*.{test,spec}.{js,ts,vue}",
    ],
  },
});
