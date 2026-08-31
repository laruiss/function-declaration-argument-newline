# 🎯 Git & Commit Conventions

This file documents how to write commit messages that follow this project's conventions.

## Commit format

The project uses the Conventional Commits format with gitmojis.

## Commit message structure

```text
type: gitmoji short description
type(scope): gitmoji short description

## Why the change was made:
- Context and reasoning
- Problem solved or need addressed

## What was changed:
- Detailed description of the changes
- Impact on the ESLint rule, the plugin export, tests, or packaging

closes #1234
```

No capital letter at the start of the short description.

Use the third-person singular, present tense for the short description.

The scope is optional. Use it when it adds useful context to the commit title.

Recommended scopes for this repository:

- `function-declaration-argument-newline`: the original rule
- `import-specifier-newline`: the import/export specifier rule
- `rules`: multiple rules
- `plugin`: export, metadata, or public surface
- `types`: TypeScript typing
- `docs`: documentation
- `build`: packaging, compilation, or dependencies
- `ci`: continuous integration

Example:

```text
fix(function-declaration-argument-newline): 🐛 preserve line comments during autofix

## Why the change was made:
- Autofix must not move a line comment placed between two parameters
- An ambiguous automatic fix can produce an unexpected result for the user

## What was changed:
- Detects line comments before offering an automatic fix
- Keeps the ESLint report for the invalid case
- Adds dedicated test coverage

closes #1170
```

## Gitmojis and main commit types

These gitmojis cover the common use cases in this project.

### Context-driven rules

1. If the change fixes observed incorrect behavior, the type is `fix`.
2. This rule takes priority over other intents.
3. Use `feat` only when the added behavior didn't exist before and isn't a bug fix.
4. When in doubt between `fix` and another type, choose `fix`.

Quick test:

- "Before the change, did something work incorrectly?" → `fix`
- "Before the change, everything worked, and we're adding a capability?" → a non-`fix` type, usually `feat`

### Everyday development

| Intent | gitmoji code | gitmoji | type |
| --- | --- | --- | --- |
| New rule or new public behavior | `:sparkles:` | ✨ | `feat` |
| Bug fix | `:bug:` | 🐛 | `fix` |
| Refactoring with no behavior change | `:recycle:` | ♻️ | `refactor` |
| Formatting with no logic change | `:lipstick:` | 💄 | `style` |

### Documentation and maintenance

| Intent | gitmoji code | gitmoji | type |
| --- | --- | --- | --- |
| Documentation | `:memo:` | 📝 | `docs` |
| Tests | `:white_check_mark:` | ✅ | `test` |
| General maintenance | `:wrench:` | 🔧 | `chore` |

### Build and publishing

| Intent | gitmoji code | gitmoji | type |
| --- | --- | --- | --- |
| Build, packaging, or external dependencies | `:package:` | 📦️ | `build` |
| CI/CD, GitHub Actions | `:construction_worker:` | 👷 | `ci` |

### Specialized fixes

| Intent | gitmoji code | gitmoji | type |
| --- | --- | --- | --- |
| Commit revert | `:rewind:` | ⏪ | `revert` |
| Breaking change | `:boom:` | 💥 | `feat!` or `fix!` |
| Security | `:lock:` | 🔒️ | `fix` |
| Typo | `:pencil2:` | ✏️ | `docs` |
| Linter or compiler warnings | `:rotating_light:` | 🚨 | `style` or `fix` depending on context |
| Performance | `:zap:` | ⚡ | `perf` |

For breaking changes, always add a `BREAKING CHANGE:` footer describing the impact and the migration path.

## Practical examples

```text
feat(rules): ✨ add a rule for line breaks between function parameters

## Why the change was made:
- The existing stylistic rules don't cover this specific case
- The package must provide a rule that complements `function-call-argument-newline`

## What was changed:
- Added an ESLint rule under `src/rules`
- Exported the rule from the plugin
- Documented the default option

closes #1098
```

```text
docs: 📝 document flat config usage

## Why the change was made:
- ESLint 9 users mostly configure plugins with flat config
- The README must show the rule's public name

## What was changed:
- Added an `eslint.config.ts` example
- Clarified the available options

closes #1234
```

```text
build: 📦️ adjust the files published to the npm registry

## Why the change was made:
- The published package must contain only the necessary artifacts
- The configuration must stay consistent with `exports`

## What was changed:
- Updated the `files` field
- Verified the content with `pnpm pack --dry-run`

closes #678
```

## Anti-patterns to avoid

```text
❌ feat: add a rule
✅ feat(rules): ✨ add a rule for function parameters

❌ fix: Bug autofix
✅ fix(function-declaration-argument-newline): 🐛 fix autofix with comments

❌ update: Change stuff
✅ refactor(plugin): ♻️ simplify the rules export

❌ docs: Update README
✅ docs: 📝 document flat config usage
```
