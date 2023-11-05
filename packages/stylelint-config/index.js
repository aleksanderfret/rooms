module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended'],
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
  rules: {
    'at-rule-no-unknown': null,
    'color-hex-length': 'long',
    'declaration-block-no-duplicate-properties': true,
    'declaration-colon-newline-after': null,
    indentation: null,
    'no-descending-specificity': null,
    'no-duplicate-selectors': true,
    'selector-combinator-space-before': null,
    'selector-descendant-combinator-no-non-space': null,
    'selector-max-compound-selectors': 6,
    'value-keyword-case': null,
    'value-list-comma-newline-after': null,
  },
};
