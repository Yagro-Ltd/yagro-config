# @yagro/config

Shared configuration package for Yagro projects, designed to standardize and simplify setup for:

- ESLint (with support for Vue 3, TypeScript, JSON, and Prettier)
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

### In your consuming project

yarn add @yagro-ltd/config@latest

### Then run the binary script:

yarn yagro:configure

## Publishing a new version

To publish a new version of the package:

* Update the version number in package.json
* Go to Releases > Draft New Release
* Create a new tag with the next version you want to publish (e.g. v1.2.5)
* Publish release
