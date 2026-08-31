import type { ESLint } from 'eslint'
import functionDeclarationArgumentNewline from './rules/function-declaration-argument-newline.js'
import importSpecifierNewline from './rules/import-specifier-newline.js'

const meta = {
  name: '@laruiss/function-declaration-argument-newline',
  version: '0.2.0',
}

const plugin: ESLint.Plugin = {
  meta,
  rules: {
    'function-declaration-argument-newline': functionDeclarationArgumentNewline,
    'import-specifier-newline': importSpecifierNewline,
  },
}

export default plugin
