export default [
  {
    files: ["src/**/*.js", "spec/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: {
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
        Item: "readonly",
        update_quality: "readonly",
        items: "writable"
      }
    },
    rules: {
      semi: ["warn", "always"],
      quotes: ["warn", "single"],
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "no-multi-spaces": "warn",
      "no-trailing-spaces": "warn",
      indent: ["warn", 2],
      eqeqeq: "warn",
      "prefer-const": "warn",
      "no-self-assign": "warn",
      "camelcase": "off"
    }
  }
];