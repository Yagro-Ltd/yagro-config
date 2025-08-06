import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['scripts/yagro-init.ts'],
  format: ['cjs'],
  outDir: 'dist/scripts',
  target: 'node16',
  dts: false,
  clean: true
});