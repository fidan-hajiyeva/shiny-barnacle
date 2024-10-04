module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "plugin:prettier/recommended",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    "no-fallthrough": "error",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        args: "all",
        argsIgnorePattern: "^_",
        caughtErrors: "all",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],
    "@typescript-eslint/no-explicit-any": "warn",
    "prettier/prettier": [
      "warn",
      {
        endOfLine: "auto",
      },
    ],
    "vue/multi-word-component-names": "off",
    "no-restricted-imports": [
      "warn",
      {
        patterns: [
          {
            group: ["@vue/*", "vue"],
            importNames: ["defineProps", "defineEmits"],
            message:
              "'defineProps' and 'defineEmits' can be used within <script setup> without importing.",
          },
        ],
      },
    ],
  },
};
