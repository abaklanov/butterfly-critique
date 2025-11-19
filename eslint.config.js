import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";
import mapbox from "@mapbox/eslint-config-mapbox/node20.js";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js, tseslint, prettier },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node },
  },
  // tseslint.configs.recommended,
]);
