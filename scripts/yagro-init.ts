#!/usr/bin/env tsx

import { checkEngines, updateEnginesInPackage, ensureTsxInstalled } from './modules/nodeEngines';
import { mergeVscodeSettings, copyRootConfig } from './modules/copyConfigs';
import { installDeps } from './modules/dependencies';
import { log } from './modules/utils';

const run = () => {
  // Ensure tsx is installed globally
  ensureTsxInstalled();

  // Copy .yarnrc.yml
  copyRootConfig('.yarnrc.yml');

  // Copy .nvmrc
  copyRootConfig('.nvmrc');

  // Copy .npmrc
  copyRootConfig('.npmrc');

  // Check Node, npm, and Yarn versions
  checkEngines();

  // Update engines field in package.json
  updateEnginesInPackage();

  // Merge VSCode settings
  mergeVscodeSettings();

  // Step 6: Install runtime + dev dependencies from config package
  installDeps();

  log('\n🎉 Postinstall script completed successfully.');
};

run();
