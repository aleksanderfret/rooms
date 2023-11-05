module.exports = {
  plugins: {
    'postcss-preset-mantine': {},
    'postcss-simple-vars': {
      variables: {
        'mantine-breakpoint-xs': '22.5em', // 360
        'mantine-breakpoint-sm': '36em', // 576
        'mantine-breakpoint-md': '48em', // 768
        'mantine-breakpoint-lg': '62em', // 992
        'mantine-breakpoint-xl': '75em', // 1200
        'mantine-breakpoint-xxl': '90em', // 1440
      },
    },
  },
};
