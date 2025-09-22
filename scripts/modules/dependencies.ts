import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ora from 'ora';

export const installDeps = () => {
  const spinner = ora('🔄 Syncing dependencies from config package').start();

  try {
    const root = process.cwd();
    const targetPkgPath = path.resolve(root, 'package.json');
    const sourcePkgPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../package.json');

    const configPkg = JSON.parse(readFileSync(sourcePkgPath, 'utf8'));
    const targetPkg = JSON.parse(readFileSync(targetPkgPath, 'utf8'));

    const syncSection = (section: 'dependencies' | 'devDependencies') => {
      const source = configPkg[section] || {};
      const target = targetPkg[section] || {};

      for (const [name, version] of Object.entries(source)) {
        if (target[name] !== version) {
          target[name] = version;
        }
      }

      targetPkg[section] = target;
    };

    syncSection('dependencies');
    syncSection('devDependencies');

    writeFileSync(targetPkgPath, JSON.stringify(targetPkg, null, 2));
    spinner.succeed('Synced package.json dependencies');

    execSync('yarn add @yagro-ltd/config@latest', { stdio: 'inherit' });
    execSync('yarn install', { stdio: 'inherit' });
  } catch (err) {
    spinner.fail('❌ Failed to sync dependencies');
    spinner.fail(`Error: ${err}`);
    process.exit(1);
  }
};
