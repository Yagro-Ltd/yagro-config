module.exports = {
  name: '@yagro-ltd/plugin-config',
  factory: (require) => {
    const { execSync } = require('child_process');
    const { existsSync } = require('fs');
    const path = require('path');

    return {
      hooks: {
        afterAllInstalled: async (project, options) => {
          // Check if @yagro-ltd/config is installed
          const yagroConfigPath = path.join(project.cwd, 'node_modules', '@yagro-ltd', 'config');

          if (existsSync(yagroConfigPath)) {
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
            } catch (error) {
              console.warn(`⚠️ Yagro configuration failed: ${error.message}`);
            }
          }
        }
      }
    };
  },
};
