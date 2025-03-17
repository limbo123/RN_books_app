module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  ignorePatterns: ['ios/', 'android/', 'node_modules/', '*.config.js', '*.d.ts'],
  plugins: ['react', 'react-native', 'react-hooks'],
  extends: ['airbnb-typescript', 'prettier'],

  rules: {
    // 2 - error
    // 1 - warning
    // 0 - off

    'no-console': [
      1,
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
    // 'prettier/prettier': 1,
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'import/extensions': 0,
    'no-unused-vars': 1,
    'import/no-extraneous-dependencies': 0,
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'indent': 'off',
    '@typescript-eslint/indent': ['off'],

    // React Hooks
    // https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks#custom-configuration
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,

    // Do not define components during render.
    'react/no-unstable-nested-components': 2,

    // React-Native specific
    // https://github.com/intellicode/eslint-plugin-react-native#list-of-supported-rules
    // 'react-native/no-unused-styles': 2,
    // 'react-native/no-inline-styles': 2,
    // TODO: turn 2
    // 'react-native/no-color-literals': 0,
    // 'react-native/no-raw-text': 0, // disabled because of https://github.com/Intellicode/eslint-plugin-react-native/issues/270
    // 'react-native/no-single-element-style-arrays': 2,
    // 'react-native/sort-styles': [
    //   2,
    //   'asc',
    //   {
    //     ignoreClassNames: true,
    //   },
    // ],

    '@typescript-eslint/naming-convention': [
      2,
      // variables convention
      {
        selector: ['variable', 'function'],
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
      },
      // allow destructured properties to retain their original name
      {
        selector: 'variable',
        modifiers: ['destructured'],
        format: null,
      },
      // boolean variables are prefixed with an allowed verb
      // TODO: enable after discussion
      // {
      //   selector: 'variable',
      //   types: ['boolean'],
      //   format: ['PascalCase'],
      //   prefix: ['is', 'should', 'has', 'can', 'did', 'will', 'show'],
      // },
      // interface names do not begin with an I
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
      // PascalCase convention for all types definitions
      {
        selector: ['typeLike'],
        format: ['PascalCase'],
      },
      // UPPER_CASE convention for enums (as constants)
      {
        selector: ['enum'],
        format: ['PascalCase', 'UPPER_CASE'],
      },
    ],
  },
};
