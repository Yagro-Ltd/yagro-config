import vueParser from 'vue-eslint-parser';
import json from '@eslint/json';
import * as tsParser from '@typescript-eslint/parser';
declare const _default: ({
    plugins: {
        readonly jsonc: import("eslint").ESLint.Plugin;
    };
    files?: undefined;
    languageOptions?: undefined;
    rules?: undefined;
} | {
    files: string[];
    languageOptions: {
        parser: typeof import("jsonc-eslint-parser");
    };
    rules: {
        strict: "off";
        "no-unused-expressions": "off";
        "no-unused-vars": "off";
    };
    plugins?: undefined;
} | {
    rules: {
        "jsonc/no-bigint-literals": "error";
        "jsonc/no-binary-expression": "error";
        "jsonc/no-binary-numeric-literals": "error";
        "jsonc/no-dupe-keys": "error";
        "jsonc/no-escape-sequence-in-identifier": "error";
        "jsonc/no-floating-decimal": "error";
        "jsonc/no-hexadecimal-numeric-literals": "error";
        "jsonc/no-infinity": "error";
        "jsonc/no-multi-str": "error";
        "jsonc/no-nan": "error";
        "jsonc/no-number-props": "error";
        "jsonc/no-numeric-separators": "error";
        "jsonc/no-octal-numeric-literals": "error";
        "jsonc/no-octal": "error";
        "jsonc/no-parenthesized": "error";
        "jsonc/no-plus-sign": "error";
        "jsonc/no-regexp-literals": "error";
        "jsonc/no-sparse-arrays": "error";
        "jsonc/no-template-literals": "error";
        "jsonc/no-undefined-value": "error";
        "jsonc/no-unicode-codepoint-escapes": "error";
        "jsonc/no-useless-escape": "error";
        "jsonc/quote-props": "error";
        "jsonc/quotes": "error";
        "jsonc/space-unary-ops": "error";
        "jsonc/valid-json-number": "error";
        "jsonc/vue-custom-block/no-parsing-error": "error";
    };
} | {
    files: string[];
    ignores: string[];
    languageOptions: {
        globals: {
            ComputedRef: string;
            computed: string;
            defineComponent: string;
            definePageMeta: string;
            onMounted: string;
            useNuxtApp: string;
        };
        parser: typeof vueParser;
        parserOptions: {
            parser: typeof tsParser;
            sourceType: string;
        };
    };
    plugins: {
        json: typeof json;
        prettier: import("eslint").ESLint.Plugin;
        'simple-import-sort': import("eslint").ESLint.Plugin;
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
    };
    rules: {
        'prettier/prettier': string;
        'simple-import-sort/exports': string;
        'simple-import-sort/imports': (string | {
            groups: string[][];
        })[];
        'sort-keys-fix/sort-keys-fix': string;
        'jsonc/sort-keys'?: undefined;
    };
} | {
    files: string[];
    plugins: {
        json: typeof json;
        prettier: import("eslint").ESLint.Plugin;
        'sort-keys-fix': any;
        'simple-import-sort'?: undefined;
        storybook?: undefined;
        vue?: undefined;
    };
    rules: {
        'jsonc/sort-keys': (string | {
            order: string[];
            pathPattern: string;
        } | {
            order: {
                type: string;
            };
            pathPattern: string;
        })[];
        'prettier/prettier': string;
        'sort-keys-fix/sort-keys-fix': (string | {
            caseSensitive: boolean;
            natural: boolean;
        })[];
        'simple-import-sort/exports'?: undefined;
        'simple-import-sort/imports'?: undefined;
    };
    ignores?: undefined;
    languageOptions?: undefined;
})[];
export default _default;
