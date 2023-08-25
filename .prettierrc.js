const alloyPrettierConfig = require('eslint-config-alloy/.prettierrc');

module.exports = {
  ...alloyPrettierConfig,
  endOfLine: 'auto',
  plugins: ['prettier-plugin-tailwindcss'],
};
