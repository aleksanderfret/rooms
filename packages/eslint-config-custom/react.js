module.exports = {
  rules: {
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['function-declaration', 'arrow-function'],
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/jsx-sort-props': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
