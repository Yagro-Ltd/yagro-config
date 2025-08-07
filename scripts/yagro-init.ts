#!/usr/bin/env tsx

import { checkAndInstallNvm, checkEngines, updateEnginesInPackage, ensureTsxInstalled } from './modules/nodeEngines';
import { mergeVscodeSettings, copyYarnrc } from './modules/copyConfigs';
import { installDeps } from './modules/dependencies';
import { log } from './modules/utils';

const run = () => {
  // Check and install nvm if not found
  checkAndInstallNvm();

  // Ensure tsx is installed globally
  ensureTsxInstalled();

  // Check Node, npm, and Yarn versions
  checkEngines();

  // Update engines field in package.json
  updateEnginesInPackage();

  // Merge VSCode settings
  mergeVscodeSettings();

  // Copy .yarnrc.yml
  copyYarnrc();

  // Step 6: Install runtime + dev dependencies from config package
  installDeps();

  log('\n🎉 Postinstall script completed successfully.');
};

run();
