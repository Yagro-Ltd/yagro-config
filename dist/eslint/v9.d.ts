import * as tsParser from '@typescript-eslint/parser';
import vueParser from 'vue-eslint-parser';
declare const _default: {
    files: string[];
    languageOptions: {
        parser: typeof vueParser;
        parserOptions: {
            parser: typeof tsParser;
            sourceType: string;
        };
        globals: {
            ComputedRef: string;
            computed: string;
            defineComponent: string;
            definePageMeta: string;
            onMounted: string;
            useNuxtApp: string;
        };
    };
    plugins: {
        vue: {
            meta: any;
            configs: {
                base: import("eslint").Linter.LegacyConfig;
                "vue2-essential": import("eslint").Linter.LegacyConfig;
                "vue2-strongly-recommended": import("eslint").Linter.LegacyConfig;
                "vue2-recommended": import("eslint").Linter.LegacyConfig;
                "vue3-essential": import("eslint").Linter.LegacyConfig;
                "vue3-strongly-recommended": import("eslint").Linter.LegacyConfig;
                "vue3-recommended": import("eslint").Linter.LegacyConfig;
                "flat/base": import("eslint").Linter.FlatConfig[];
                "flat/vue2-essential": import("eslint").Linter.FlatConfig[];
                "flat/vue2-strongly-recommended": import("eslint").Linter.FlatConfig[];
                "flat/vue2-recommended": import("eslint").Linter.FlatConfig[];
                "flat/essential": import("eslint").Linter.FlatConfig[];
                "flat/strongly-recommended": import("eslint").Linter.FlatConfig[];
                "flat/recommended": import("eslint").Linter.FlatConfig[];
                "no-layout-rules": import("eslint").Linter.LegacyConfig;
            };
            rules: Record<string, any>;
            processors: {
                ".vue": any;
                vue: any;
            };
        };
        prettier: import("eslint").ESLint.Plugin;
        'sort-keys-fix': any;
        storybook: {
            configs: {
                csf: {
                    plugins: string[];
                    overrides: ({
                        files: string[];
                        rules: {
                            readonly "react-hooks/rules-of-hooks": "off";
                            readonly "import/no-anonymous-default-export": "off";
                            readonly "storybook/csf-component": "warn";
                            readonly "storybook/default-exports": "error";
                            readonly "storybook/hierarchy-separator": "warn";
                            readonly "storybook/no-redundant-story-name": "warn";
                            readonly "storybook/story-exports": "error";
                            readonly "storybook/no-uninstalled-addons"?: undefined;
                        };
                    } | {
                        files: string[];
                        rules: {
                            readonly "storybook/no-uninstalled-addons": "error";
                            readonly "react-hooks/rules-of-hooks"?: undefined;
                            readonly "import/no-anonymous-default-export"?: undefined;
                            readonly "storybook/csf-component"?: undefined;
                            readonly "storybook/default-exports"?: undefined;
                            readonly "storybook/hierarchy-separator"?: undefined;
                            readonly "storybook/no-redundant-story-name"?: undefined;
                            readonly "storybook/story-exports"?: undefined;
                        };
                    })[];
                };
                "csf-strict": {
                    extends: string;
                    rules: {
                        readonly "react-hooks/rules-of-hooks": "off";
                        readonly "import/no-anonymous-default-export": "off";
                        readonly "storybook/no-stories-of": "error";
                        readonly "storybook/no-title-property-in-meta": "error";
                    };
                };
                "addon-interactions": {
                    plugins: string[];
                    overrides: ({
                        files: string[];
                        rules: {
                            readonly "react-hooks/rules-of-hooks": "off";
                            readonly "import/no-anonymous-default-export": "off";
                            readonly "storybook/await-interactions": "error";
                            readonly "storybook/context-in-play-function": "error";
                            readonly "storybook/use-storybook-expect": "error";
                            readonly "storybook/use-storybook-testing-library": "error";
                            readonly "storybook/no-uninstalled-addons"?: undefined;
                        };
                    } | {
                        files: string[];
                        rules: {
                            readonly "storybook/no-uninstalled-addons": "error";
                            readonly "react-hooks/rules-of-hooks"?: undefined;
                            readonly "import/no-anonymous-default-export"?: undefined;
                            readonly "storybook/await-interactions"?: undefined;
                            readonly "storybook/context-in-play-function"?: undefined;
                            readonly "storybook/use-storybook-expect"?: undefined;
                            readonly "storybook/use-storybook-testing-library"?: undefined;
                        };
                    })[];
                };
                recommended: {
                    plugins: string[];
                    overrides: ({
                        files: string[];
                        rules: {
                            readonly "react-hooks/rules-of-hooks": "off";
                            readonly "import/no-anonymous-default-export": "off";
                            readonly "storybook/await-interactions": "error";
                            readonly "storybook/context-in-play-function": "error";
                            readonly "storybook/default-exports": "error";
                            readonly "storybook/hierarchy-separator": "warn";
                            readonly "storybook/no-redundant-story-name": "warn";
                            readonly "storybook/prefer-pascal-case": "warn";
                            readonly "storybook/story-exports": "error";
                            readonly "storybook/use-storybook-expect": "error";
                            readonly "storybook/use-storybook-testing-library": "error";
                            readonly "storybook/no-uninstalled-addons"?: undefined;
                        };
                    } | {
                        files: string[];
                        rules: {
                            readonly "storybook/no-uninstalled-addons": "error";
                            readonly "react-hooks/rules-of-hooks"?: undefined;
                            readonly "import/no-anonymous-default-export"?: undefined;
                            readonly "storybook/await-interactions"?: undefined;
                            readonly "storybook/context-in-play-function"?: undefined;
                            readonly "storybook/default-exports"?: undefined;
                            readonly "storybook/hierarchy-separator"?: undefined;
                            readonly "storybook/no-redundant-story-name"?: undefined;
                            readonly "storybook/prefer-pascal-case"?: undefined;
                            readonly "storybook/story-exports"?: undefined;
                            readonly "storybook/use-storybook-expect"?: undefined;
                            readonly "storybook/use-storybook-testing-library"?: undefined;
                        };
                    })[];
                };
                "flat/csf": ({
                    name: string;
                    plugins: {
                        readonly storybook: any;
                    };
                    files?: undefined;
                    rules?: undefined;
                } | {
                    name: string;
                    files: string[];
                    rules: {
                        readonly "react-hooks/rules-of-hooks": "off";
                        readonly "import/no-anonymous-default-export": "off";
                        readonly "storybook/csf-component": "warn";
                        readonly "storybook/default-exports": "error";
                        readonly "storybook/hierarchy-separator": "warn";
                        readonly "storybook/no-redundant-story-name": "warn";
                        readonly "storybook/story-exports": "error";
                        readonly "storybook/no-uninstalled-addons"?: undefined;
                    };
                    plugins?: undefined;
                } | {
                    name: string;
                    files: string[];
                    rules: {
                        readonly "storybook/no-uninstalled-addons": "error";
                        readonly "react-hooks/rules-of-hooks"?: undefined;
                        readonly "import/no-anonymous-default-export"?: undefined;
                        readonly "storybook/csf-component"?: undefined;
                        readonly "storybook/default-exports"?: undefined;
                        readonly "storybook/hierarchy-separator"?: undefined;
                        readonly "storybook/no-redundant-story-name"?: undefined;
                        readonly "storybook/story-exports"?: undefined;
                    };
                    plugins?: undefined;
                })[];
                "flat/csf-strict": ({
                    name: string;
                    plugins: {
                        readonly storybook: any;
                    };
                    files?: undefined;
                    rules?: undefined;
                } | {
                    name: string;
                    files: string[];
                    rules: {
                        readonly "react-hooks/rules-of-hooks": "off";
                        readonly "import/no-anonymous-default-export": "off";
                        readonly "storybook/csf-component": "warn";
                        readonly "storybook/default-exports": "error";
                        readonly "storybook/hierarchy-separator": "warn";
                        readonly "storybook/no-redundant-story-name": "warn";
                        readonly "storybook/story-exports": "error";
                        readonly "storybook/no-uninstalled-addons"?: undefined;
                    };
                    plugins?: undefined;
                } | {
                    name: string;
                    files: string[];
                    rules: {
                        readonly "storybook/no-uninstalled-addons": "error";
                        readonly "react-hooks/rules-of-hooks"?: undefined;
                        readonly "import/no-anonymous-default-export"?: undefined;
                        readonly "storybook/csf-component"?: undefined;
                        readonly "storybook/default-exports"?: undefined;
                        readonly "storybook/hierarchy-separator"?: undefined;
                        readonly "storybook/no-redundant-story-name"?: undefined;
                        readonly "storybook/story-exports"?: undefined;
                    };
                    plugins?: undefined;
                } | {
                    name: string;
                    rules: {
                        readonly "react-hooks/rules-of-hooks": "off";
                        readonly "import/no-anonymous-default-export": "off";
                        readonly "storybook/no-stories-of": "error";
                        readonly "storybook/no-title-property-in-meta": "error";
                    };
                })[];
                "flat/addon-interactions": ({
                    name: string;
                    plugins: {
                        readonly storybook: any;
                    };
                    files?: undefined;
                    rules?: undefined;
                } | {
                    name: string;
                    files: string[];
                    rules: {
                        readonly "react-hooks/rules-of-hooks": "off";
                        readonly "import/no-anonymous-default-export": "off";
                        readonly "storybook/await-interactions": "error";
                        readonly "storybook/context-in-play-function": "error";
                        readonly "storybook/use-storybook-expect": "error";
                        readonly "storybook/use-storybook-testing-library": "error";
                        readonly "storybook/no-uninstalled-addons"?: undefined;
                    };
                    plugins?: undefined;
                } | {
                    name: string;
                    files: string[];
                    rules: {
                        readonly "storybook/no-uninstalled-addons": "error";
                        readonly "react-hooks/rules-of-hooks"?: undefined;
                        readonly "import/no-anonymous-default-export"?: undefined;
                        readonly "storybook/await-interactions"?: undefined;
                        readonly "storybook/context-in-play-function"?: undefined;
                        readonly "storybook/use-storybook-expect"?: undefined;
                        readonly "storybook/use-storybook-testing-library"?: undefined;
                    };
                    plugins?: undefined;
                })[];
                "flat/recommended": ({
                    name: string;
                    plugins: {
                        readonly storybook: any;
                    };
                    files?: undefined;
                    rules?: undefined;
                } | {
                    name: string;
                    files: string[];
                    rules: {
                        readonly "react-hooks/rules-of-hooks": "off";
                        readonly "import/no-anonymous-default-export": "off";
                        readonly "storybook/await-interactions": "error";
                        readonly "storybook/context-in-play-function": "error";
                        readonly "storybook/default-exports": "error";
                        readonly "storybook/hierarchy-separator": "warn";
                        readonly "storybook/no-redundant-story-name": "warn";
                        readonly "storybook/prefer-pascal-case": "warn";
                        readonly "storybook/story-exports": "error";
                        readonly "storybook/use-storybook-expect": "error";
                        readonly "storybook/use-storybook-testing-library": "error";
                        readonly "storybook/no-uninstalled-addons"?: undefined;
                    };
                    plugins?: undefined;
                } | {
                    name: string;
                    files: string[];
                    rules: {
                        readonly "storybook/no-uninstalled-addons": "error";
                        readonly "react-hooks/rules-of-hooks"?: undefined;
                        readonly "import/no-anonymous-default-export"?: undefined;
                        readonly "storybook/await-interactions"?: undefined;
                        readonly "storybook/context-in-play-function"?: undefined;
                        readonly "storybook/default-exports"?: undefined;
                        readonly "storybook/hierarchy-separator"?: undefined;
                        readonly "storybook/no-redundant-story-name"?: undefined;
                        readonly "storybook/prefer-pascal-case"?: undefined;
                        readonly "storybook/story-exports"?: undefined;
                        readonly "storybook/use-storybook-expect"?: undefined;
                        readonly "storybook/use-storybook-testing-library"?: undefined;
                    };
                    plugins?: undefined;
                })[];
            };
            rules: {
                "await-interactions": import("@typescript-eslint/utils/ts-eslint").RuleModule<"interactionShouldBeAwaited" | "fixSuggestion", [], import("eslint-plugin-storybook/dist/types").StorybookRuleMetaDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "context-in-play-function": import("@typescript-eslint/utils/ts-eslint").RuleModule<"passContextToPlayFunction", [], import("eslint-plugin-storybook/dist/types").StorybookRuleMetaDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "csf-component": import("@typescript-eslint/utils/ts-eslint").RuleModule<"missingComponentProperty", [], import("eslint-plugin-storybook/dist/types").StorybookRuleMetaDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "default-exports": import("@typescript-eslint/utils/ts-eslint").RuleModule<"fixSuggestion" | "shouldHaveDefaultExport", [], import("eslint-plugin-storybook/dist/types").StorybookRuleMetaDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "hierarchy-separator": import("@typescript-eslint/utils/ts-eslint").RuleModule<"useCorrectSeparators" | "deprecatedHierarchySeparator", [], import("eslint-plugin-storybook/dist/types").StorybookRuleMetaDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "meta-inline-properties": import("@typescript-eslint/utils/ts-eslint").RuleModule<"metaShouldHaveInlineProperties", [{
                    csfVersion: number;
                }], import("eslint-plugin-storybook/dist/types").StorybookRuleMetaDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "meta-satisfies-type": import("@typescript-eslint/utils/ts-eslint").RuleModule<"metaShouldSatisfyType", [], import("eslint-plugin-storybook/dist/types").StorybookRuleMetaDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "no-redundant-story-name": import("@typescript-eslint/utils/ts-eslint").RuleModule<"removeRedundantName" | "storyNameIsRedundant", [], import("eslint-plugin-storybook/dist/types").StorybookRuleMetaDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "no-stories-of": import("@typescript-eslint/utils/ts-eslint").RuleModule<"doNotUseStoriesOf", [], import("eslint-plugin-storybook/dist/types").StorybookRuleMetaDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "no-title-property-in-meta": import("@typescript-eslint/utils/ts-eslint").RuleModule<"removeTitleInMeta" | "noTitleInMeta", [], import("eslint-plugin-storybook/dist/types").StorybookRuleMetaDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "no-uninstalled-addons": import("@typescript-eslint/utils/ts-eslint").RuleModule<"addonIsNotInstalled", [{
                    packageJsonLocation: string;
                    ignore: string[];
                }], import("eslint-plugin-storybook/dist/types").StorybookRuleMetaDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "prefer-pascal-case": import("@typescript-eslint/utils/ts-eslint").RuleModule<"convertToPascalCase" | "usePascalCase", [], import("eslint-plugin-storybook/dist/types").StorybookRuleMetaDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "story-exports": import("@typescript-eslint/utils/ts-eslint").RuleModule<"shouldHaveStoryExport" | "shouldHaveStoryExportWithFilters" | "addStoryExport", [], import("eslint-plugin-storybook/dist/types").StorybookRuleMetaDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "use-storybook-expect": import("@typescript-eslint/utils/ts-eslint").RuleModule<string, {
                    storybookJestPath?: string;
                }[], import("eslint-plugin-storybook/dist/types").StorybookRuleMetaDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
                "use-storybook-testing-library": import("@typescript-eslint/utils/ts-eslint").RuleModule<"updateImports" | "dontUseTestingLibraryDirectly", [], import("eslint-plugin-storybook/dist/types").StorybookRuleMetaDocs, import("@typescript-eslint/utils/ts-eslint").RuleListener>;
            };
        };
        'simple-import-sort': import("eslint").ESLint.Plugin;
    };
    rules: {
        'comma-dangle': string[];
        'comma-spacing': (string | {
            after: boolean;
            before: boolean;
        })[];
        eqeqeq: string;
        'import/no-absolute-path': string;
        'require-await': string;
        'sort-imports': string;
        'sort-keys-fix/sort-keys-fix': string;
        'sort-vars': string;
        'space-infix-ops': string;
        'vue/this-in-template': string;
        'no-undef': string;
        'no-unused-vars': string;
        '@typescript-eslint/no-unused-vars': string;
        'vue/no-reserved-component-names': string;
        'vue/no-multiple-template-root': string;
        'simple-import-sort/imports': (string | {
            groups: string[][];
        })[];
        'simple-import-sort/exports': string;
        'prettier/prettier': string;
    };
    ignores: string[];
}[];
export default _default;
