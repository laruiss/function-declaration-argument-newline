# Tasks - Commit and PR Conventions

## Mandatory commit format

```text
type: gitmoji short description in English
type(scope): gitmoji short description in English

## Why:
- Context and reasoning
- Problem solved or need addressed

## What:
- Detailed description of the changes
- Impact on the architecture, the ESLint rule, or the packaging

closes #1234
```

**Allowed types**:

- `feat` ✨ — new feature or new rule
- `fix` 🐛 — bug fix
- `refactor` ♻️ — refactoring with no behavior change
- `style` 💄 — formatting with no logic change
- `test` ✅ — adding or fixing tests
- `docs` 📝 — documentation, comments
- `chore` 🔧 — configuration, tooling, maintenance
- `build` 📦️ — build, packaging, or dependencies
- `ci` 👷 — continuous integration

**Useful scopes**:

- `function-declaration-argument-newline` for that rule
- `import-specifier-newline` for that rule
- `rules` for multiple rules
- `plugin` for the plugin's export or metadata
- `build`, `ci`, `docs`, `types`, `release`

The scope isn't mandatory. Use it when it adds useful context.

**Applied guidelines**:

- all text in English
- third-person singular, present tense for the short description
- no capital letter at the start of the short description
- gitmoji required, matching the type
- "Why" and "What" sections present and meaningful
- issue footer `closes #1234` or `fixes #1234` where applicable
- branch in the format `type/kebab-case-description-issue-number` when an issue exists

### Full example

```text
fix(function-declaration-argument-newline): 🐛 preserve line comments during autofix

## Why:
- Autofix must not move a line comment placed between two parameters
- The current behavior can produce an ambiguous fix for ESLint

## What:
- Detects line comments before offering a fix
- Keeps the report without auto-fixing the risky case
- Adds test coverage for this scenario

closes #1337
```

## ✍️ Write a commit message

> Propose a commit message that follows the project's standard, based on the changed files.
> Follow the Conventional Commit + gitmoji format. The scope is optional.
> Use a scope tied to the rule, the plugin, or the packaging when it clarifies the change.

## ✅ Check a commit message

> Check that a commit message follows the project's conventions:
>
> - valid Conventional Commit type
> - gitmoji consistent with the intent
> - short description in the correct format
> - correct scope, if present
> - "Why" and "What" sections present and meaningful
> - text in English
> - issue footer where applicable
>
> If the message doesn't comply, propose a fully corrected version.

## 🌿 Check the branch name

> Check that the branch follows the project's conventions:
>
> - prefixed with the type and a slash
> - description in English, kebab-case
> - suffixed with the GitHub issue number if the branch is linked to one
> - hyphens instead of underscores
>
> Propose a corrected branch name if needed.

## 🧾 Write a Pull Request title

> Propose a Pull Request title aligned with the main commit.
> Ensure consistency between the type, the optional scope, and the short description.

## 🎯 Check the Pull Request target

> Check that the Pull Request targets the expected branch of the repository.
> Default to `main`, unless the maintainer says otherwise.

## 🧭 Decide on a commit type

> When hesitating between several types (`fix`, `feat`, `refactor`, `docs`, etc.), apply the project's priority rules and briefly justify the choice.
>
> **Rules**:
>
> - `fix`: fixing incorrect behavior
> - `feat`: new rule or new public behavior
> - `refactor`: technical change with no behavioral impact
> - `test`: adding or fixing tests
> - `docs`: documentation only
> - `build`: build, packaging, or dependencies
> - `ci`: continuous integration
> - `chore`: maintenance outside build and CI
