const alloyPrettierConfig = require('eslint-config-alloy/.prettierrc');

module.exports = {
  ...alloyPrettierConfig,
  plugins: ['prettier-plugin-tailwindcss'],
};
