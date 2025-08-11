import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const log = console.log;

export const root = process.cwd();

export const resolvePath = (...segments: string[]) =>
  path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..', ...segments);
