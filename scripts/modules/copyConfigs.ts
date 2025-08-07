import { existsSync, mkdirSync, readFileSync, writeFileSync, copyFileSync } from 'node:fs';
import path from 'node:path';
import { root, resolvePath } from './utils';

import ora from 'ora';

export const copyYarnrc = () => {
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

export const copyNvmrc = () => {
  const spinner = ora('Copying .nvmrc').start();

  try {
    const sourceNvmrc = resolvePath('.nvmrc.yml');
    const targetNvmrc = path.resolve(root, '.nvmrc.yml');

    if (existsSync(sourceNvmrc)) {
      copyFileSync(sourceNvmrc, targetNvmrc);
    }

    spinner.succeed('Copied .nvmrc.yml');
  } catch (e) {
    spinner.fail('Failed to copy .nvmrc.yml');
    throw e;
  }
};

export const mergeVscodeSettings = () => {
  const spinner = ora('Merging VSCode settings').start();

  // Resolve the .vscode directory relative to the current working directory
  const resolveVscodeDir = () => {
    let dir = process.cwd();

    while (true) {
      const candidate = path.join(dir, '.vscode');
      if (existsSync(candidate)) return candidate;

      const parent = path.dirname(dir);
      if (parent === dir) break;
      dir = parent;
    }

    return path.join(process.cwd(), '.vscode');
  };

  try {
    const mergeJson = (filename: string) => {
      const sourcePath = resolvePath('.vscode', filename);
      const targetDir = resolveVscodeDir();
      const targetPath = path.join(targetDir, filename);

      if (!existsSync(sourcePath)) return;
      if (!existsSync(targetDir)) mkdirSync(targetDir, { recursive: true });

      const source = JSON.parse(readFileSync(sourcePath, 'utf8'));
      const target = existsSync(targetPath) ? JSON.parse(readFileSync(targetPath, 'utf8')) : {};

      const merged = { ...target };

      for (const [key, value] of Object.entries(source)) {
        if (filename === 'extensions.json' && key === 'recommendations' && Array.isArray(value)) {
          merged.recommendations = Array.from(
            new Set([...(target.recommendations || []), ...value])
          );
        } else if (!(key in target)) {
          merged[key] = value;
        }
      }

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
