#!/usr/bin/env node

import { execSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync, copyFileSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();

/**
 * Post-install script to:
 * 1. Install peer dependencies defined in package.json.
 * 2. Merge `.vscode/settings.json` and `extensions.json` from the config package into the current project.
 * 3. Copy `.yarnrc.yml` from the config package to the current project.
 */

// Step 1: Merge `.vscode/settings.json` and `extensions.json`
const sourceVscodeDir = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../.vscode');
const targetVscodeDir = path.resolve(root, '.vscode');

// Create target dir if it doesn't exist
if (!existsSync(targetVscodeDir)) mkdirSync(targetVscodeDir, { recursive: true });

/**
 * Merges a JSON configuration file from a source directory into a target directory.
 * For 'extensions.json', it merges and deduplicates the 'recommendations' array.
 *
 * @param {string} filename - The name of the JSON file to merge (e.g., 'settings.json', 'extensions.json').
 */
const mergeJson = (filename) => {
  const targetPath = path.join(targetVscodeDir, filename);
  const sourcePath = path.join(sourceVscodeDir, filename);

  if (!existsSync(sourcePath)) return;

  const source = JSON.parse(readFileSync(sourcePath, 'utf8'));
  const target = existsSync(targetPath) ? JSON.parse(readFileSync(targetPath, 'utf8')) : {};

  const merged = {
    ...target,
    ...source,
    ...(filename === 'extensions.json' && {
      recommendations: Array.from(
        new Set([...(target.recommendations || []), ...(source.recommendations || [])])
      ),
    }),
  };

  writeFileSync(targetPath, JSON.stringify(merged, null, 2));
  console.log(`Merged .vscode/${filename}`);
};

const sourceYarnrc = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../.yarnrc.yml')
const targetYarnrc = path.resolve(root, '.yarnrc.yml')

if (existsSync(sourceYarnrc)) {
  copyFileSync(sourceYarnrc, targetYarnrc)
  console.log('📦 .yarnrc.yml replaced from shared config.')
}

mergeJson('settings.json');
mergeJson('extensions.json');

// Step 2: Read peer dependencies from package.json
const configPkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));

const deps = {
  ...configPkg.peerDependencies,
};

// Step 3: Build install command
const toInstall = Object.entries(deps).map(([name, version]) => `${name}@${version}`);

if (toInstall.length > 0) {
  console.log('Installing required peer dependencies...');
  execSync(`yarn add -D ${toInstall.join(' ')}`, { stdio: 'inherit' });
} else {
  console.log('No peer dependencies to install.');
}

console.log('Postinstall completed.');
