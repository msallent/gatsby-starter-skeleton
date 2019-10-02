module.exports = {
  root: true,
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'no-console': 'warn',
    'prettier/prettier': 'error',
  },
};
