import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ora from 'ora';

import { resolvePath, root } from './utils';

export const copyRootConfig = (filename: string) => {
  const spinner = ora(`Copying ${filename}`).start();

  try {
    const sourceFile = resolvePath(filename);
    const targetFile = path.resolve(root, filename);

    if (!existsSync(sourceFile)) {
      spinner.fail(`Source not found: ${sourceFile}`);
      throw new Error(`Missing source: ${sourceFile}`);
    }

    mkdirSync(path.dirname(targetFile), { recursive: true });
    copyFileSync(sourceFile, targetFile);

    spinner.succeed(`Copied ${filename} -> ${targetFile}`);
    return targetFile;
  } catch (e) {
    spinner.fail(`Failed to copy ${filename}: ${(e as Error).message}`);
    throw e;
  }
};

export const mergeVscodeSettings = () => {
  const spinner = ora('Merging VSCode settings').start();

  const resolveVscodeDir = () => {
    let dir = process.cwd();

    while (true) {
      const candidate = path.join(dir, '.vscode');

      if (existsSync(candidate)) {
        ora().succeed(`Found existing .vscode directory at: ${candidate}`);
        return candidate;
      }

      const parent = path.dirname(dir);
      if (parent === dir) break;
      dir = parent;
    }

    const fallback = path.join(process.cwd(), '.vscode');
    return fallback;
  };

  try {
    const mergeJson = (filename: string) => {
      const scriptDir = path.dirname(fileURLToPath(import.meta.url));
      const packageRoot = path.resolve(scriptDir, '..', '..');
      const sourcePath = path.resolve(packageRoot, '.vscode', filename);
      const targetDir = resolveVscodeDir();
      const targetPath = path.join(targetDir, filename);

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

      writeFileSync(targetPath, JSON.stringify(merged, null, 2));
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
