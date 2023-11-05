const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

module.exports = {
  extends: [
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:playwright/playwright-test',
    'plugin:import/typescript',
    './base-rules',
  ],
  plugins: ['@typescript-eslint', 'import', , 'check-file'],
  parserOptions: {
    project: [project, './packages/**/tsconfig.json'],
  },
  globals: {
    React: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: [project, './packages/**/tsconfig.json'],
      },
    },
  },
  ignorePatterns: ['node_modules/', 'dist/'],
};
