# @yagro/config

Shared configuration package for Yagro projects, designed to standardize and simplify setup for:

- ESLint (with support for Vue 3, TypeScript, and JSON)
- UnoCSS presets

This package centralizes common configuration logic to reduce duplication and ensure consistency across Nuxt, Vue 3, and TypeScript-based projects.

In addition a bin script has been written to align Node engines, Yarn configs, .vscode settings, and package dependencies.

## Features

- Flat ESLint config for ESLint v9+
- Custom import sorting via `simple-import-sort`
- Vue attribute order linting (with autofix)
- JSON key sorting
- Shared `tsconfig` base for Nuxt and non-Nuxt projects

## Installation

### Option 1: Automatic Setup (Recommended)

```bash
# Install the config package first
yarn add @yagro-ltd/config@latest

# Then import the plugin using absolute path
yarn plugin import $(pwd)/node_modules/@yagro-ltd/config/yarn-plugin/plugin-yagro-config.js
```

Now `yarn install` will automatically run the configuration script whenever dependencies are installed.

### Option 2: Manual Setup

```bash
# Install the package
yarn add @yagro-ltd/config@latest

# Run configuration manually
yarn dlx yagro-init
# or add to package.json scripts:
# "yagro:configure": "npx --package=@yagro-ltd/config@latest yagro-init"
```

## Publishing a new version

To publish a new version of the package:

* Update the version number in package.json
* Go to Releases > Draft New Release
* Create a new tag with the next version you want to publish (e.g. v1.2.5)
* Publish release
