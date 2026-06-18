const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = defineConfig([
  expoConfig,
  eslintPluginPrettierRecommended,
  {
    ignores: [
      'node_modules/',
      'dist/',
      'web-build/',
      'coverage/',
      'playwright-report/',
      'test-results/',
      'jest.setup.ts',
      'e2e/**',
    ],
  },
]);
