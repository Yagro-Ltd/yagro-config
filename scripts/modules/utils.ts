import path from 'node:path';

export const log = console.log;

export const root = process.cwd();

export const resolvePath = (...segments: string[]) =>
  path.resolve(__dirname, '..', ...segments);

