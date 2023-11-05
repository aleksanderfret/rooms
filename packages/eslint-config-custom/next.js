const { resolve } = require('node:path');

const project = resolve(process.cwd(), 'tsconfig.json');

module.exports = {
  extends: [
    '@vercel/style-guide/eslint/node',
    '@vercel/style-guide/eslint/browser',
    '@vercel/style-guide/eslint/typescript',
    '@vercel/style-guide/eslint/react',
    '@vercel/style-guide/eslint/next',
    'eslint-config-turbo',
    './base',
    './react',
  ].map(require.resolve),
  parserOptions: {
    project,
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ['node_modules/', 'dist/'],
  plugins: ['check-file'],
  rules: {
    'check-file/filename-naming-convention': [
      'error',
      {
        'src/app/**/*.{jsx,tsx,js,ts}': 'KEBAB_CASE',
        'src/components/**/*.{jsx,tsx}': 'PASCAL_CASE',
        'src/components/**/*.{js,ts}': 'CAMEL_CASE',
        '**/index.{js,ts}': 'FLAT_CASE',
      },
    ],
  },
};
