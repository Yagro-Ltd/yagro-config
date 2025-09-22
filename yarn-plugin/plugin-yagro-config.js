const { execSync } = require('child_process');
const { existsSync } = require('fs');
const path = require('path');

module.exports = {
  name: '@yagro-ltd/plugin-config',
  factory: (require) => {
    const { BaseCommand } = require('@yarnpkg/cli');
    const { Configuration, Project, MessageName } = require('@yarnpkg/core');

    return {
      hooks: {
        afterAllInstalled: async (project, options) => {
          // Check if @yagro-ltd/config is installed
          const yagroConfigPath = path.join(project.cwd, 'node_modules', '@yagro-ltd', 'config');

          if (existsSync(yagroConfigPath)) {
            project.configuration.reportInfo(MessageName.UNNAMED, '🔧 Running Yagro configuration...');

            try {
              // Execute the yagro-init script
              const yagroInitPath = path.join(yagroConfigPath, 'scripts', 'yagro-init.ts');
              if (existsSync(yagroInitPath)) {
                execSync(`npx tsx "${yagroInitPath}"`, {
                  stdio: 'inherit',
                  cwd: project.cwd
                });
              } else {
                // Fallback to using the bin command
                execSync('npx yagro-init', {
                  stdio: 'inherit',
                  cwd: project.cwd
                });
              }

              project.configuration.reportInfo(MessageName.UNNAMED, '✅ Yagro configuration completed');
            } catch (error) {
              project.configuration.reportWarning(MessageName.UNNAMED, `⚠️ Yagro configuration failed: ${error.message}`);
            }
          }
        }
      }
    };
  },
};