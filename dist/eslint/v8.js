const config = {
    root: true,
    extends: [
        "@nuxt/eslint-config",
        "eslint:recommended",
        "prettier",
        "plugin:storybook/recommended",
    ],
    globals: {
        ComputedRef: "readonly",
        computed: "readonly",
        defineComponent: "readonly",
        definePageMeta: "readonly",
        onMounted: "readonly",
        useNuxtApp: "readonly",
    },
    overrides: [
        {
            files: ["pages/**", "layouts/**"],
            rules: {
                "vue/multi-word-component-names": "off",
            },
        },
    ],
    ignorePatterns: ["node_modules/**"],
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
        sourceType: "module",
    },
    plugins: ["sort-keys-fix", "prettier"],
    rules: {
        "comma-dangle": ["error", "only-multiline"],
        "comma-spacing": [
            "error",
            {
                after: true,
                before: false,
            },
        ],
        eqeqeq: "off",
        "import/no-absolute-path": "off",
        "require-await": "warn",
        "sort-imports": "off",
        "sort-keys-fix/sort-keys-fix": "off", // warn only because --fixed
        "sort-vars": "warn", // warn only because --fixed
        "space-infix-ops": "error",
        "vue/this-in-template": "error",
        // Rules to be re-enabled after build has been fixed
        "no-undef": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "vue/no-reserved-component-names": "off",
        "vue/no-multiple-template-root": "off",
        "simple-import-sort/imports": [
            "error",
            {
                groups: [
                    // Node.js built-ins and external packages
                    ["^node:", "^\\w"],
                    [""],
                    // @ alias (e.g. @/composables)
                    ["^@/"],
                    [""],
                    // ~ alias (user space)
                    ["^~/"],
                    // Nuxt root alias
                    ["^~~/"],
                    [""],
                    // Workspace/special alias
                    ["^#/"],
                    // Relative imports
                    ["^\\u0000", "^\\.", "^\\.\\./"],
                    [""],
                    // Types last
                    ["^.+\\.d\\.ts$"],
                ],
            },
        ],
        "simple-import-sort/exports": "error",
    },
};
export default config;
