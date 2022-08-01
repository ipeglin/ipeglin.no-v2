/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  "root": true,
  "parser": "vue-eslint-parser",
  "extends": [
    "plugin:vue/vue3-essential",
    "plugin:json/recommended-with-comments",
    "plugin:markdown/recommended",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
    "prettier",
  ],
  "rules": {
    "no-console": [
      "error",
      {
        "allow": ["info", "warn", "error"],
      }
    ],
    "@typescript-eslint/no-unused-vars": "on",
    "vue/multi-word-component-names": [
      "error",
      {
        "ignores": ["index", "default"],
      }
    ]
  }
}
