module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "camelcase": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    "import/prefer-default-export":"off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "next"}],
    "global-require": "off",
    "react-native/no-raw-text": "off",
    "no-param-reassign": "off",
    "react/prop-types": "off",
    "no-unreachable": "off",
    "no-underscore-dangle": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading" : "off",
    camelcase: "off",
    "react/no-unescaped-entities": "off",
    "react-hooks/rules-of-hooks": "off",
    "react-hooks/exhaustive-deps": "off"
  }
};
