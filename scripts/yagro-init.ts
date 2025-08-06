#!/usr/bin/env node

import { execSync } from 'node:child_process';
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import chalk from 'chalk';
import { Presets, SingleBar } from 'cli-progress';

const root = process.cwd();
const log = console.log;

const steps = [
  'Merge VSCode settings',
  'Copy .yarnrc.yml',
  'Update engines field in package.json',
  'Install runtime dependencies',
  'Install dev dependencies',
];

const bar = new SingleBar(
  {
    barCompleteChar: '█',
    barIncompleteChar: '░',
    format: `${chalk.blueBright('{bar}')} {percentage}% | {step}`,
    hideCursor: true,
  },
  Presets.shades_classic
);

let currentStep = 0;
bar.start(steps.length, 0, { step: steps[0] });

const advance = (msg?: string) => {
  if (msg) log(chalk.green(`✔ ${msg}`));
  currentStep++;
  bar.update(currentStep, { step: steps[currentStep] || 'Done' });
};

const resolvePath = (...segments: string[]) =>
  path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', ...segments);

// Step 1: Merge VSCode settings
const mergeJson = (filename: string) => {
  const sourcePath = resolvePath('.vscode', filename);
  const targetDir = path.resolve(root, '.vscode');
  const targetPath = path.join(targetDir, filename);

  if (!existsSync(sourcePath)) return;

  if (!existsSync(targetDir)) mkdirSync(targetDir, { recursive: true });

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
};

mergeJson('settings.json');
mergeJson('extensions.json');
advance('Merged .vscode settings and extensions');

// Step 2: Copy .yarnrc.yml
const sourceYarnrc = resolvePath('.yarnrc.yml');
const targetYarnrc = path.resolve(root, '.yarnrc.yml');
if (existsSync(sourceYarnrc)) {
  copyFileSync(sourceYarnrc, targetYarnrc);
}
advance('Copied .yarnrc.yml');

// Step 3: Update engines field
const targetPkgPath = path.resolve(root, 'package.json');
if (existsSync(targetPkgPath)) {
  const pkg = JSON.parse(readFileSync(targetPkgPath, 'utf8'));
  pkg.engines = {
    node: '>=22 <23',
    npm: '>=10 <11',
    yarn: '>=4 <5',
  };
  writeFileSync(targetPkgPath, JSON.stringify(pkg, null, 2));
}
advance('Updated engines in package.json');

// Step 4: Install peer deps
const configPkg = JSON.parse(readFileSync(resolvePath('package.json'), 'utf8'));
const runtimeDeps = configPkg.dependencies || {};
const devDeps = configPkg.devDependencies || {};

const toInstall = (deps: Record<string, string>) =>
  Object.entries(deps).map(([name, version]) => `${name}@${version}`);

const runtimeList = toInstall(runtimeDeps);
const devList = toInstall(devDeps);

if (runtimeList.length > 0) {
  try {
    execSync(`yarn add ${runtimeList.join(' ')}`, { stdio: 'inherit' });
    advance('Installed runtime dependencies');
  } catch {
    log(chalk.red('❌ Failed to install runtime dependencies'));
  }
} else {
  advance('No runtime dependencies to install');
}

if (devList.length > 0) {
  try {
    execSync(`yarn add -D ${devList.join(' ')}`, { stdio: 'inherit' });
    advance('Installed dev dependencies');
  } catch {
    log(chalk.red('❌ Failed to install dev dependencies'));
  }
} else {
  advance('No dev dependencies to install');
}

bar.stop();
log(chalk.bold.green('\n🎉 Postinstall script completed successfully.'));
