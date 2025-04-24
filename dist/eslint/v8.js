const config = {
    extends: [
        '@nuxt/eslint-config',
        'eslint:recommended',
        'prettier',
        'plugin:storybook/recommended',
    ],
    globals: {
        ComputedRef: 'readonly',
        computed: 'readonly',
        defineComponent: 'readonly',
        definePageMeta: 'readonly',
        onMounted: 'readonly',
        useNuxtApp: 'readonly',
    },
    ignorePatterns: ['node_modules/**'],
    overrides: [
        {
            files: ['pages/**', 'layouts/**'],
            rules: {
                'vue/multi-word-component-names': 'off',
            },
        },
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: ['sort-keys-fix', 'prettier'],
    root: true,
    rules: {
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    // Node.js built-ins and external packages
                    ['^node:', '^\\w'],
                    [''],
                    // @ alias (e.g. @/composables)
                    ['^@/'],
                    [''],
                    // ~ alias (user space)
                    ['^~/'],
                    // Nuxt root alias
                    ['^~~/'],
                    [''],
                    // Workspace/special alias
                    ['^#/'],
                    // Relative imports
                    ['^\\u0000', '^\\.', '^\\.\\./'],
                    [''],
                    // Types last
                    ['^.+\\.d\\.ts$'],
                ],
            },
        ],
    },
};
export default config;
