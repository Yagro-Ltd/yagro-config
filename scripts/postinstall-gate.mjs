// Run only when this pkg is being installed inside another project
// Skip when running in this repo, in CI, or when scripts are disabled.

const isCI = !!process.env.CI;
const scriptsDisabled =
  process.env.YARN_ENABLE_SCRIPTS === 'false' ||
  process.env.npm_config_ignore_scripts === 'true';

// When installed as a dependency, cwd === .../node_modules/@yagro-ltd/config
// In this repo, cwd === repo root (no node_modules in path).
const inNodeModules = /[\\/]node_modules[\\/]/.test(process.cwd());

// INIT_CWD is the app root that triggered the install; useful but not required here.

if (isCI || scriptsDisabled || !inNodeModules) {
  process.exit(0); // do nothing
}

// Call your TS CLI (uses tsx shebang)
const { spawnSync } = require('node:child_process');
const exe = process.platform === 'win32' ? 'yagro-init.cmd' : 'yagro-init';

const result = spawnSync(exe, { stdio: 'inherit', shell: true });
process.exit(result.status ?? 0);
