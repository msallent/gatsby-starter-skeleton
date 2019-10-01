module.exports = {
  root: true,
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'no-console': 'warn',
    'prettier/prettier': 'error',
  },
};
