const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

module.exports = {
  extends: [
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:playwright/playwright-test',
    'plugin:import/typescript',
    './base',
  ],
  plugins: ['@typescript-eslint', 'import', , 'check-file', 'playwright'],
  parserOptions: {
    project: [project, './packages/web-e2e-tests/tsconfig.json'],
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: [project, './packages/web-e2e-tests/tsconfig.json'],
      },
    },
  },
  rules: {
    'check-file/filename-naming-convention': [
      'error',
      {
        'tests/**/*(.test)?.{js,ts}': 'KEBAB_CASE',
        '**/index.{js,ts}': 'FLAT_CASE',
      },
    ],
  },
};
