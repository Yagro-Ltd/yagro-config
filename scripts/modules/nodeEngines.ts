import { execSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';

import semver from 'semver';
import chalk from 'chalk';
import path from 'node:path';
import ora from 'ora';

const root = process.cwd();

const requiredNode = '20.11.0';
const requiredNpm = '10.2.4';
const requiredYarn = '4.9.2';

export const checkEngines = () => {
  const currentNode = process.version;
  const currentNpm = execSync('npm -v').toString().trim();
  const currentYarn = execSync('yarn -v').toString().trim();

  const errors: string[] = [];

  if (!semver.satisfies(currentNode, requiredNode)) {
    errors.push(`Node ${currentNode} does not satisfy required version ${requiredNode}`);
  }

  if (!semver.satisfies(currentNpm, requiredNpm)) {
    errors.push(`npm ${currentNpm} does not satisfy required version ${requiredNpm}`);
  }

  if (!semver.satisfies(currentYarn, requiredYarn)) {
    errors.push(`Yarn ${currentYarn} does not satisfy required version ${requiredYarn}`);
  }

  if (errors.length > 0) {
    console.log(chalk.red('❌ Engine version mismatch:'));
    errors.forEach(e => console.log(chalk.red(`  - ${e}`)));
    console.log(chalk.blue('💡 You can fix this by running:'));
    console.log(chalk.cyan(`  nvm install 22 && nvm use 22`));
    console.log(chalk.cyan(`  corepack enable && corepack prepare yarn@4.1.1 --activate`));
    process.exit(1);
  }

  console.log(chalk.green('✅ Node, npm, and Yarn versions are valid.'));
}

export const updateEnginesInPackage = () => {
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

const isTsxInstalled = (): boolean => {
  try {
    execSync('tsx --version', { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
};

export const ensureTsxInstalled = () => {
  const spinner = ora('Checking for tsx...').start();

  if (isTsxInstalled()) {
    spinner.succeed('tsx is already installed globally');
    return;
  }

  spinner.text = 'Installing tsx globally...';

  try {
    execSync('yarn global add tsx', { stdio: 'inherit' });
    spinner.succeed('Installed tsx globally');
  } catch (err) {
    spinner.fail('Failed to install tsx');
    console.error(err);
    process.exit(1);
  }
};
