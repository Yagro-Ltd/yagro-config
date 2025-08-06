#!/usr/bin/env node

import { execSync } from 'node:child_process';
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import chalk from 'chalk';
import ora from 'ora';

const root = process.cwd();

const log = console.log;

const resolvePath = (...segments: string[]) =>
  path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', ...segments);

// Step 1: Merge VSCode settings
const mergeVscodeSettings = () => {
  const spinner = ora('Merging VSCode settings').start();

  try {
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
    spinner.succeed('Merged .vscode settings and extensions');
  } catch (e) {
    spinner.fail('Failed to merge VSCode settings');
    throw e;
  }
};

// Step 2: Copy .yarnrc.yml
const copyYarnrc = () => {
  const spinner = ora('Copying .yarnrc.yml').start();

  try {
    const sourceYarnrc = resolvePath('.yarnrc.yml');
    const targetYarnrc = path.resolve(root, '.yarnrc.yml');
    if (existsSync(sourceYarnrc)) {
      copyFileSync(sourceYarnrc, targetYarnrc);
    }
    spinner.succeed('Copied .yarnrc.yml');
  } catch (e) {
    spinner.fail('Failed to copy .yarnrc.yml');
    throw e;
  }
};

// Step 3: Update engines field in package.json
const updateEngines = () => {
  const spinner = ora('Updating engines in package.json').start();

  try {
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
    spinner.succeed('Updated engines in package.json');
  } catch (e) {
    spinner.fail('Failed to update engines');
    throw e;
  }
};

// Step 4: Install runtime + dev dependencies from config package
const installPeerDeps = () => {
  const configPkg = JSON.parse(readFileSync(resolvePath('package.json'), 'utf8'));
  const runtimeDeps = configPkg.dependencies || {};
  const devDeps = configPkg.devDependencies || {};

  const toInstall = (deps: Record<string, string>) =>
    Object.entries(deps).map(([name, version]) => `${name}@${version}`);

  const runtimeList = toInstall(runtimeDeps);
  const devList = toInstall(devDeps);

  if (runtimeList.length > 0) {
    const spinner = ora('Installing runtime dependencies').start();
    try {
      execSync(`yarn add ${runtimeList.join(' ')}`, { stdio: 'inherit' });
      spinner.succeed('Installed runtime dependencies');
    } catch {
      spinner.fail('Failed to install runtime dependencies');
    }
  } else {
    ora().info('No runtime dependencies to install');
  }

  if (devList.length > 0) {
    const spinner = ora('Installing dev dependencies').start();
    try {
      execSync(`yarn add -D ${devList.join(' ')}`, { stdio: 'inherit' });
      spinner.succeed('Installed dev dependencies');
    } catch {
      spinner.fail('Failed to install dev dependencies');
    }
  } else {
    ora().info('No dev dependencies to install');
  }
};

// Run all steps
const run = () => {
  mergeVscodeSettings();
  copyYarnrc();
  updateEngines();
  installPeerDeps();
  log(chalk.bold.green('\n🎉 Postinstall script completed successfully.'));
};

run();
