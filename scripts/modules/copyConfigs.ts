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

export const mergeVscodeSettings = () => {
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