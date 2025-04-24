import eslintPluginJsonc from 'eslint-plugin-jsonc';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import pluginSortKeysFix from 'eslint-plugin-sort-keys-fix';
import pluginStorybook from 'eslint-plugin-storybook';
import pluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

import json from '@eslint/json';
import * as tsParser from '@typescript-eslint/parser';

export default [
  {
    ...pluginVue.configs['flat/recommended+typescript+setup' as keyof typeof pluginVue.configs],
    files: ['**/*.{ts,vue}'],
    ignores: ['node_modules/**'],
    languageOptions: {
      globals: {
        ComputedRef: 'readonly',
        computed: 'readonly',
        defineComponent: 'readonly',
        definePageMeta: 'readonly',
        onMounted: 'readonly',
        useNuxtApp: 'readonly',
      },
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        sourceType: 'module',
      },
    },
    plugins: {
      json,
      prettier: pluginPrettier,
      'simple-import-sort': pluginSimpleImportSort,
      'sort-keys-fix': pluginSortKeysFix,
      storybook: pluginStorybook,
      vue: pluginVue,
    },
    rules: {
      'prettier/prettier': 'error',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^node:', '^\\w'],
            [''],
            ['^@/components'],
            [''],
            ['^@/composables'],
            [''],
            ['^@/stores'],
            [''],
            ['^@/'],
            [''],
            ['^~/'],
            ['^~~/'],
            [''],
            ['^#ui/'],
            [''],
            ['^#/'],
            [''],
            ['^\\u0000', '^\\.', '^\\.\\./'],
            [''],
            ['^.+\\.d\\.ts$'],
          ],
        },
      ],
      'sort-keys-fix/sort-keys-fix': 'warn',
      'vue/attributes-order': [
        'error',
        {
          alphabetical: false,
          order: [
            'CONDITIONALS',
            'GLOBAL',
            'UNIQUE',
            'DEFINITION',
            'LIST_RENDERING',
            'RENDER_MODIFIERS',
            'TWO_WAY_BINDING',
            'OTHER_DIRECTIVES',
            'CONTENT',
            'ATTR_STATIC',
            'ATTR_DYNAMIC',
            'ATTR_SHORTHAND_BOOL',
            'EVENTS',
          ],
        },
      ],
    },
  },
  ...eslintPluginJsonc.configs['flat/recommended-with-jsonc'],
  {
    files: ['**/*.json'],
    plugins: {
      json,
      prettier: pluginPrettier,
      'sort-keys-fix': pluginSortKeysFix,
    },
    rules: {
      'jsonc/sort-keys': [
        'error',
        {
          order: ['name', 'version', 'description', 'license'],
          pathPattern: '^$',
        },
        {
          order: { type: 'asc' },
          pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
        },
      ],
      'prettier/prettier': 'error',
      'sort-keys-fix/sort-keys-fix': [
        'warn',
        'asc',
        {
          caseSensitive: false,
          natural: true,
        },
      ],
    },
  },
];
