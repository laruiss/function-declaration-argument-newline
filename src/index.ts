import type { ESLint } from 'eslint'
import functionDeclarationArgumentNewline from './rules/function-declaration-argument-newline.js'

const meta = {
  name: '@laruiss/eslint-plugin-newline',
  version: '0.1.0',
}

const plugin: ESLint.Plugin = {
  meta,
  rules: {
    'function-declaration-argument-newline': functionDeclarationArgumentNewline,
  },
}

export default plugin
