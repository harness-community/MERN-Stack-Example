module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['prettier', 'standard'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: { 'prettier/prettier': 'error' },
};
