module.exports = {
  rules: {
    'import/no-default-export': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': [2, { ignoreRestSiblings: true }],
    '@typescript-eslint/no-use-before-define': ['error'],
    'array-bracket-spacing': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'block-spacing': ['warn'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'check-file/filename-naming-convention': [
      'error',
      {
        'src/**/*.{jsx,tsx}': 'PASCAL_CASE',
        'src/**/*(.test)?.{js,ts}': 'CAMEL_CASE',
        '**/index.{js,ts}': 'FLAT_CASE',
      },
    ],
    'comma-dangle': [
      'error',
      {
        functions: 'never',
        objects: 'always-multiline',
        arrays: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
      },
    ],
    'comma-spacing': ['warn'],
    'computed-property-spacing': ['error', 'never'],
    eqeqeq: ['error', 'smart'],
    'func-call-spacing': ['error', 'never'],
    'func-names': ['error', 'never'],
    'import/default': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/first': 'error',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-cycle': 'error',
    'import/no-extraneous-dependencies': ['error'],
    'import/no-named-default': 'error',
    'import/no-self-import': 'error',
    'import/no-unresolved': 'error',
    'import/no-useless-path-segments': 'error',
    'import/order': [
      'error',
      {
        groups: [
          ['builtin'],
          ['external'],
          ['internal'],
          ['parent'],
          ['sibling', 'index'],
        ],
        pathGroups: [
          {
            pattern: '~/**',
            group: 'external',
          },
        ],
        distinctGroup: true,
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
      },
    ],
    'key-spacing': 'error',
    'keyword-spacing': ['error', { before: true, after: true }],
    'newline-before-return': ['error'],
    'max-depth': ['error', 4],
    'no-console': [2, { allow: ['warn', 'error'] }],
    'no-debugger': ['warn'],
    'no-else-return': 'error',
    'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
    'no-multi-spaces': ['error', { ignoreEOLComments: false }],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-plusplus': 'error',
    'no-unused-vars': [
      'warn',
      { vars: 'local', args: 'none', ignoreRestSiblings: true },
    ],
    'no-use-before-define': 0,
    'no-var': 'error',
    'object-curly-spacing': ['error', 'always'],
    'prefer-arrow-callback': 'error',
    'prefer-const': ['error', { destructuring: 'all' }],
    'prefer-destructuring': 'error',
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['warn', 'always'],
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'unicorn/filename-case': 0,
  },
};
