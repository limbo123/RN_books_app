module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.ios.ts',
          '.ios.tsx',
          '.android.ts',
          '.android.tsx',
          '.es',
          '.es6',
          '.mjs',
          '.json',
        ],
        root: ['.'],
        alias: {
          src: './src',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
