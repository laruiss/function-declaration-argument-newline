# @laruiss/function-declaration-argument-newline

ESLint rules for line-break placement in places the core `@stylistic/eslint-plugin`
rule set doesn't cover yet.

## Rules

### `function-declaration-argument-newline`

The definition-side counterpart to `@stylistic/function-call-argument-newline`.
That rule only controls line breaks between the *arguments of a call*
(`foo(a, b, c)`); this rule controls line breaks between the *parameters of a
function definition* (`function foo(a, b, c) {}`, function expressions, and
arrow functions).

`@stylistic/function-paren-newline` is the closest existing rule, but it only
requires a break right after `(` and right before `)` — the parameters
themselves can still all sit on one line between those breaks. This rule adds
the missing per-parameter behavior, mirroring `function-call-argument-newline`
option-for-option.

Options: `"always"` (default) | `"never"` | `"consistent"`.

```js
'@laruiss/newline/function-declaration-argument-newline': ['error', 'always']
```

```ts
// always
const createNumericRule = (
  isInvalid: (value: number) => boolean,
  getErrorMessage: () => string,
) => { /* ... */ }
```

### `import-specifier-newline`

`@stylistic/object-curly-newline` already treats the braces of `import { ... }`
and `export { ... }` the same way it treats object literal braces — so with a
config like `{ multiline: true, minProperties: 2 }`, the `{` and `}` correctly
end up on their own line once there are 2+ named specifiers.

But `@stylistic/object-property-newline`, the rule that puts each *item* on
its own line, only listens to `ObjectExpression`, `TSTypeLiteral` and
`TSInterfaceBody` — it doesn't cover `ImportDeclaration` or
`ExportNamedDeclaration`. So the specifiers themselves can still end up packed
onto a single line between the braces:

```ts
import {
  describe, expect, it, beforeEach, vi,
} from 'vitest'
```

This rule adds the missing per-specifier behavior for named imports and
exports, mirroring `function-declaration-argument-newline` option-for-option.
Default and namespace specifiers (`import Foo from`, `import * as ns from`)
aren't part of the `{ }` group and are left untouched.

Options: `"always"` (default) | `"never"` | `"consistent"`.

```js
'@laruiss/newline/import-specifier-newline': ['error', 'always']
```

```ts
// always
import {
  describe,
  expect,
  it,
  beforeEach,
  vi,
} from 'vitest'
```

### `object-pattern-property-newline`

`@stylistic/object-curly-newline` covers `ObjectPattern` for the braces too —
so the `{` and `}` of a destructured parameter, variable, or catch binding
correctly end up on their own line once there are 2+ properties.

But `@stylistic/object-property-newline` only listens to `ObjectExpression`,
`TSTypeLiteral` and `TSInterfaceBody` — it doesn't cover `ObjectPattern`. So a
destructured pattern's properties can still end up packed together between
the braces:

```ts
const usePrefixedErrorState = ({
  prefix, errorProps = useInjectedErrorProps(), tabKeyTransform,
}: Options) => { /* ... */ }
```

This rule adds the missing per-property behavior for destructured object
patterns (function parameters, variable declarations, catch clauses),
mirroring the other two rules option-for-option.

Options: `"always"` (default) | `"never"` | `"consistent"`.

```js
'@laruiss/newline/object-pattern-property-newline': ['error', 'always']
```

```ts
// always
const usePrefixedErrorState = ({
  prefix,
  errorProps = useInjectedErrorProps(),
  tabKeyTransform,
}: Options) => { /* ... */ }
```

## Usage

Flat config (`eslint.config.js` / `eslint.config.ts`):

```ts
import newline from '@laruiss/function-declaration-argument-newline'

export default [
  {
    plugins: {
      '@laruiss/newline': newline,
    },
    rules: {
      '@laruiss/newline/function-declaration-argument-newline': ['error', 'always'],
      '@laruiss/newline/import-specifier-newline': ['error', 'always'],
      '@laruiss/newline/object-pattern-property-newline': ['error', 'always'],
    },
  },
]
```

## Development

```sh
pnpm install
pnpm build   # compiles src/ -> dist/
```
