import type { ESLint } from 'eslint'
import functionDeclarationArgumentNewline from './rules/function-declaration-argument-newline.js'
import importSpecifierNewline from './rules/import-specifier-newline.js'
import objectPatternPropertyNewline from './rules/object-pattern-property-newline.js'

const meta = {
  name: '@laruiss/function-declaration-argument-newline',
  version: '0.3.0',
}

const plugin: ESLint.Plugin = {
  meta,
  rules: {
    'function-declaration-argument-newline': functionDeclarationArgumentNewline,
    'import-specifier-newline': importSpecifierNewline,
    'object-pattern-property-newline': objectPatternPropertyNewline,
  },
}

export default plugin
