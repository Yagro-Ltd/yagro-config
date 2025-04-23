import pluginPrettier from 'eslint-plugin-prettier';
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import pluginSortKeysFix from 'eslint-plugin-sort-keys-fix';
import pluginStorybook from 'eslint-plugin-storybook';
import pluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

import * as tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.{ts,vue}'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        sourceType: 'module',
      },
      globals: {
        ComputedRef: 'readonly',
        computed: 'readonly',
        defineComponent: 'readonly',
        definePageMeta: 'readonly',
        onMounted: 'readonly',
        useNuxtApp: 'readonly',
      },
    },
    plugins: {
      vue: pluginVue,
      prettier: pluginPrettier,
      'sort-keys-fix': pluginSortKeysFix,
      storybook: pluginStorybook,
      'simple-import-sort': pluginSimpleImportSort,
    },
    rules: {
      'comma-dangle': ['error', 'only-multiline'],
      'comma-spacing': ['error', { after: true, before: false }],
      eqeqeq: 'off',
      'import/no-absolute-path': 'off',
      'require-await': 'warn',
      'sort-imports': 'off',
      'sort-keys-fix/sort-keys-fix': 'off',
      'sort-vars': 'warn',
      'space-infix-ops': 'error',
      'vue/this-in-template': 'error',
      'no-undef': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'vue/no-reserved-component-names': 'off',
      'vue/no-multiple-template-root': 'off',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^node:', '^\\w'],
            [''],
            ['^@/'],
            [''],
            ['^~/'],
            ['^~~/'],
            [''],
            ['^#/'],
            ['^\\u0000', '^\\.', '^\\.\\./'],
            [''],
            ['^.+\\.d\\.ts$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
      'prettier/prettier': 'error',
    },
    ignores: ['node_modules/**'],
  },
];
