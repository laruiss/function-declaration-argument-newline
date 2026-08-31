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

## Usage

Flat config (`eslint.config.js` / `eslint.config.ts`):

```ts
import newline from '@laruiss/eslint-plugin-newline'

export default [
  {
    plugins: {
      '@laruiss/newline': newline,
    },
    rules: {
      '@laruiss/newline/function-declaration-argument-newline': ['error', 'always'],
    },
  },
]
```

## Development

```sh
pnpm install
pnpm build   # compiles src/ -> dist/
```
