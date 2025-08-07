import { existsSync, mkdirSync, readFileSync, writeFileSync, copyFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

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

  const resolveVscodeDir = () => {
    let dir = process.cwd();
    console.log(`🔍 Starting search for .vscode from: ${dir}`);

    while (true) {
      const candidate = path.join(dir, '.vscode');
      console.log(`🔍 Checking: ${candidate}`);

      if (existsSync(candidate)) {
        console.log(`✅ Found existing .vscode directory at: ${candidate}`);
        return candidate;
      }

      const parent = path.dirname(dir);
      if (parent === dir) break;
      dir = parent;
    }

    const fallback = path.join(process.cwd(), '.vscode');
    console.log(`⚠️ No .vscode directory found up the tree, falling back to: ${fallback}`);
    return fallback;
  };

  try {
    const mergeJson = (filename: string) => {
      const sourcePath = path.resolve(path.dirname(fileURLToPath(import.meta.url), '..', '.vscode', filename);
      const targetDir = resolveVscodeDir();
      const targetPath = path.join(targetDir, filename);

      console.log(`📄 Source path: ${sourcePath}`);
      console.log(`📄 Target path: ${targetPath}`);

      if (!existsSync(sourcePath)) {
        console.log(`❌ Source file does not exist: ${sourcePath}`);
        return;
      }

      if (!existsSync(targetDir)) {
        console.log(`📁 Creating missing target directory: ${targetDir}`);
        mkdirSync(targetDir, { recursive: true });
      }

      const source = JSON.parse(readFileSync(sourcePath, 'utf8'));
      const target = existsSync(targetPath) ? JSON.parse(readFileSync(targetPath, 'utf8')) : {};

      console.log(`📦 Source JSON (${filename}):`, JSON.stringify(source, null, 2));
      console.log(`📦 Target JSON (${filename}):`, JSON.stringify(target, null, 2));

      const deepMerge = (a: any, b: any): any => {
        if (Array.isArray(a) && Array.isArray(b)) {
          return Array.from(new Set([...a, ...b]));
        }
        if (a && b && typeof a === 'object' && typeof b === 'object') {
          const result: any = { ...a };
          for (const key of Object.keys(b)) {
            result[key] = deepMerge(a[key], b[key]);
          }
          return result;
        }
        return b;
      };

      const merged =
        filename === 'extensions.json'
          ? {
              ...target,
              recommendations: Array.from(
                new Set([...(target.recommendations || []), ...(source.recommendations || [])])
              ),
            }
          : deepMerge(target, source);

      console.log(`🧩 Merged result (${filename}):`, JSON.stringify(merged, null, 2));

      writeFileSync(targetPath, JSON.stringify(merged, null, 2));
      console.log(`💾 Wrote merged ${filename} to ${targetPath}`);
    };

    mergeJson('settings.json');
    mergeJson('extensions.json');

    spinner.succeed('Merged .vscode settings and extensions');
  } catch (e) {
    spinner.fail('Failed to merge VSCode settings');
    console.error(e);
    throw e;
  }
};
