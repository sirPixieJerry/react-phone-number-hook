import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';
import noOnlyTests from 'eslint-plugin-no-only-tests';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
  allConfig: pluginJs.configs.all,
});

const config = [
  ...compat.extends(
    'prettier',
    'plugin:react/recommended',
    'plugin:storybook/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ),
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: { globals: globals.browser },
    plugins: {
      'no-only-tests': noOnlyTests,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      'react/prop-types': 'off',
      'react/no-unknown-property': ['error', { ignore: ['jsx'] }],
      'no-only-tests/no-only-tests': 'error',
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-use-before-define': 'off',
      'no-const-assign': 'error',
      'prefer-const': 'error',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      eqeqeq: ['error', 'always'],
      'no-shadow': 'error',
      '@typescript-eslint/no-use-before-define': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
    },
  },
];

export default config;
