// https://docs.expo.dev/guides/using-eslint/

export default {
  extends: [
    'expo',
    'plugin:prettier/recommended'
  ],
  ignorePatterns: ['/dist/*'],
  rules: {
    'prettier/prettier': 'error'
  }
};
