# @yagro/config

Shared configuration package for Yagro projects, designed to standardize and simplify setup for:

- ESLint (with support for Vue 3, TypeScript, JSON, and Prettier)
- Prettier formatting
- TypeScript compiler options
- UnoCSS presets

This package centralizes common configuration logic to reduce duplication and ensure consistency across Nuxt, Vue 3, and TypeScript-based projects.

## Features

- Flat ESLint config for ESLint v9+
- Prettier formatting support (including JSON files)
- Custom import sorting via `simple-import-sort`
- Vue attribute order linting (with autofix)
- JSON key sorting in `package.json` and related files
- Shared `tsconfig` base for Nuxt and non-Nuxt projects

## Why Peer Dependencies?

This package declares its tooling (like ESLint plugins and Prettier) as **peer dependencies**. This ensures:

- **Consistency:** The consuming project controls exact versions of ESLint, Prettier, TypeScript, etc.
- **Transparency:** Tools like ESLint resolve plugins from the root `node_modules` — so dependencies must be installed there.
- **Avoiding conflicts:** Prevents version mismatches across multiple projects using the same shared config.

## Installation

Since the package is not yet in the NPM registry, you may need to install the peer dependencies manually for now. If using a local file: reference, install the peer deps manually in your consuming project (see below).

```json
    "@yagro/config": "file:../../../configs",
```

```bash
yarn add -D eslint@9.25.1 \
 eslint-plugin-vue@10.0.0 \
 eslint-plugin-prettier@5.2.6 \
 eslint-plugin-simple-import-sort@12.1.1 \
 eslint-plugin-sort-keys-fix@1.1.2 \
 eslint-plugin-storybook@0.12.0 \
 eslint-config-prettier@10.1.2 \
 vue-eslint-parser@10.1.3 \
 @typescript-eslint/eslint-plugin@8.31.0 \
 @typescript-eslint/parser@8.31.0 \
 typescript@5.8.3 \
 prettier@3.5.3 \
 eslint-plugin-jsonc \
 @eslint/json
```

After it becomes an NPM package you can use:

### In your consuming project

yarn add -D @yagro/config

### Then install peer dependencies:

npx install-peerdeps @yagro/config --dev

## Usage

#### ESLint (ESLint v9 / Flat config)

Create eslint.config.js:

```js
import config from '@yagro/config/eslint/v9';

export default config;
```

#### Prettier

Create .prettierrc.js:

```js
import config from '@yagro/config/prettier';

export default {
  ...config,
};
```

#### TypeScript

In your tsconfig.json:

```js
{
  "extends": "@yagro/config/tsconfig",
  "compilerOptions": {
    "types": ["nuxt", "vue"]
  },
  "references": [
    { "path": "./.nuxt/tsconfig.json" }
  ]
}
```
