# AI Coding Instructions for function-declaration-argument-newline

## Project overview

`function-declaration-argument-newline` is a TypeScript package published on the npm registry that provides an ESLint plugin.

The plugin exposes layout rules that enforce the presence, absence, or consistency of line breaks between the items of a construct that `@stylistic/eslint-plugin` doesn't fully cover — starting with `function-declaration-argument-newline`, which handles line breaks between the parameters of a function definition. It complements `@stylistic/function-call-argument-newline`, which applies to call arguments, and `@stylistic/function-paren-newline`, which doesn't control the separators between parameters.

**Nature of the project**: ESM package for ESLint, compiled with TypeScript and managed with pnpm.

## For requested tasks

See [`tasks.md`](tasks.md) for cross-cutting instructions.
Before making any change, identify the relevant skill in `skills/` and read its `SKILL.md` and `tasks.md`.

## Architecture and file structure

### Main files

- **`src/index.ts`**: ESLint plugin entry point, exports the metadata and the list of rules.
- **`src/rules/*.ts`**: ESLint rule implementations.
- **`package.json`**: package manifest, public exports, scripts, and dependencies.
- **`tsconfig.json`**: TypeScript compilation configuration.
- **`README.md`**: user-facing documentation for the package and its rules.

### Public surface

The package only exposes `./dist/index.js` via `exports`.

Public rules are available under the following names:

```text
@laruiss/newline/function-declaration-argument-newline
@laruiss/newline/import-specifier-newline
```

Any change to the public surface must be reflected in:

- `src/index.ts`
- `README.md`
- the rule metadata (`meta.docs`, `schema`, `messages`)
- tests, where they exist

## Development workflow

### Install and build

```bash
pnpm install
pnpm build
```

`pnpm build` compiles `src/` to `dist/` with TypeScript.

### Recommended checks

```bash
pnpm build
pnpm pack --dry-run
```

Use `pnpm pack --dry-run` before publishing or changing packaging, to verify that only the expected files are included.

### Developing ESLint rules

When modifying a rule:

1. Read the full implementation of the rule in question.
2. Verify the expected behavior for the `"always"`, `"never"`, and `"consistent"` options.
3. Preserve autofix wherever possible.
4. Don't offer an automatic fix when a line comment would make the correction ambiguous.
5. Keep error messages stable unless a change is explicitly documented.
6. Update the user-facing documentation if the behavior, options, or examples change.

## Code quality

- **Module system**: ESM (`"type": "module"`).
- **Language**: TypeScript.
- **Style**: short functions, explicit names, readable local logic.
- **ESLint API**: use the available ESLint types when they're precise enough.
- **Compatibility**: respect the `peerDependencies` ESLint range `^9.0.0 || ^10.0.0`.
- **Build artifacts**: don't edit `dist/` by hand.
- **Package manager**: use pnpm and keep `pnpm-lock.yaml` up to date.

## General rules

- Preserve the public API unless an incompatible change is explicitly requested.
- Avoid unnecessary runtime dependencies: a simple ESLint rule should stay lightweight.
- Favor local helpers only when they genuinely clarify the algorithm.
- Don't weaken typing without a documented reason.
- Keep comments rare and useful, especially to explain non-obvious ESLint or autofix cases.

## Tests and validation

If a test suite is added or already present, prefer ESLint's `RuleTester` to cover:

- `FunctionDeclaration`
- `FunctionExpression`
- `ArrowFunctionExpression`
- `"always"`, `"never"`, and `"consistent"` options
- autofix
- parameters/specifiers with comments
- common TypeScript cases when the configured parser allows it

Without a dedicated test suite, `pnpm build` remains the mandatory minimum check after any TypeScript code change.

## GitHub workflow: issues and Pull Requests

- **Issues recommended**: any functional PR should be linked to a GitHub issue.
- **Issue creation**: use `gh issue create` with a title and description in English.
- **Branch naming**: `{type}/{kebab-case-description}-{issue-number}`.
  - Example: `fix/preserve-line-comments-autofix-23`
- **Pull Requests**:
  - title aligned with the main commit
  - body with a `closes #<issue-number>` reference where applicable
  - target branch: `main`, unless the maintainer says otherwise

## Language and communication

Project exchanges, issues, PRs, and commit messages are written in English.

Technical elements naturally stay in their usual form:

- branch names
- variable, function, type, and file names
- ESLint rule identifiers
- code examples
- public error messages, matching the package's existing English-language API
