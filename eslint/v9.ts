import jsoncPlugin from 'eslint-plugin-jsonc';
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import pluginSortKeysFix from 'eslint-plugin-sort-keys-fix';
import pluginStorybook from 'eslint-plugin-storybook';
import pluginVue from 'eslint-plugin-vue';
import jsoncParser from 'jsonc-eslint-parser';
import vueParser from 'vue-eslint-parser';

import * as tsParser from '@typescript-eslint/parser';

const vueFlatRecommended = pluginVue.configs['flat/recommended'];

export default [
  // Vue + TS
  {
    ...vueFlatRecommended,
    files: ['**/*.{ts,vue}'],
    ignores: ['node_modules/**', '**/package.json'],
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
      parserOptions: { parser: tsParser, sourceType: 'module' },
    },
    plugins: {
      'simple-import-sort': pluginSimpleImportSort,
      'sort-keys-fix': pluginSortKeysFix,
      storybook: pluginStorybook,
      vue: pluginVue,
    },
    rules: {
      'eol-last': ['error', 'always'],
      'max-len': ['error', {
        code: 100,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        tabWidth: 2,
      }],
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': ['error', {
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
      }],
      'sort-keys-fix/sort-keys-fix': 'warn',
      'vue/attributes-order': ['error', {
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
      }],
    },
  },

  // Vue file indentation specifics
  {
    files: ['**/*.vue'],
    rules: {
      indent: 'off',
      'vue/html-indent': ['error', 2, { baseIndent: 1, ignores: [], switchCase: 1 }],
      'vue/script-indent': ['error', 2, { baseIndent: 1, ignores: [], switchCase: 1 }],
    },
  },

  // TS indentation
  {
    files: ['**/*.ts'],
    rules: { indent: ['error', 2] },
  },

  // JSON
  {
    files: ['**/*.json'],
    ignores: ['**/package.json'],
    languageOptions: { parser: jsoncParser },
    plugins: { jsonc: jsoncPlugin, 'sort-keys-fix': pluginSortKeysFix },
    rules: {
      'eol-last': ['error', 'always'],
      'jsonc/indent': ['error', 2],
      'jsonc/sort-keys': [
        'error',
        { order: ['name', 'version', 'description', 'license'], pathPattern: '^$' },
        { order: { type: 'asc' }, pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$' },
      ],
      'sort-keys-fix/sort-keys-fix': ['warn', 'asc', { caseSensitive: false, natural: true }],
    },
  },

  // JSONC
  {
    files: ['**/*.jsonc'],
    languageOptions: { parser: jsoncParser },
    plugins: { jsonc: jsoncPlugin },
    rules: {
      'eol-last': ['error', 'always'],
      'jsonc/indent': ['error', 2],
    },
  },
];
