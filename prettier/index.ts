import type { Options } from 'prettier';

const config: Options = {
  semi: true,
  trailingComma: 'es5',
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  arrowParens: 'always',
  proseWrap: 'preserve',
  vueIndentScriptAndStyle: true,
};

export default config;
