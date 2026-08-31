# AI Tasks

## 🧭 Goal

This file organizes tasks useful for conversational AI agents, grouped by the project's **skills**.

Each skill has its own task list:

- **Code Implementation** → [`skills/code-implementation/tasks.md`](skills/code-implementation/tasks.md)
- **Test Writing** → [`skills/test-writing/tasks.md`](skills/test-writing/tasks.md)
- **Documentation** → [`skills/documentation/tasks.md`](skills/documentation/tasks.md)
- **Commit Conventions** → [`skills/commit-conventions/tasks.md`](skills/commit-conventions/tasks.md)

All tasks follow the conventions defined in [`instructions.md`](instructions.md).

---

## 🔄 Cross-cutting tasks

These tasks span multiple areas or the whole project.

### 🧩 Codebase analysis

**Goal:** get an overview of the project.

> Analyze all the code in `src/` and produce a clear technical summary:
>
> - stack used: ESLint, TypeScript, ESM, pnpm
> - module organization
> - the plugin's public surface
> - strengths and weaknesses: clarity, duplication, typing, autofix robustness
> - refactoring recommendations
> - critical files to watch

*Recommended frequency: before a release or a major change.*

---

### 🧩 Type generation

> From a rule option, an ESLint JSON schema, or a configuration object, generate precise TypeScript types.
> Follow the project's conventions and avoid exposing unnecessary public types.

---

### 💡 Migration / Modernization

> Propose a migration plan to move this code to a more modern approach.
> Evaluate recent ESLint APIs, TypeScript typing, ESM compatibility, and the impact on the package published to the npm registry.
> Note the risks, benefits, and validation steps.

---

### 🧰 Dependency audit

**Goal:** watch for outdated or risky dependencies.

> Read `package.json` and check:
>
> - outdated versions
> - dependencies flagged as risky by `pnpm audit`
> - unused packages
> - consistency between `peerDependencies` and `devDependencies`
> - compatibility with ESLint 9/10 and TypeScript
>
> Produce a clear summary and propose the highest-priority updates.

*Recommended frequency: monthly, or before publishing to the npm registry.*

---

### 🧠 AI review of recent code

**Goal:** automatically check recent changes.

> For files changed since the last commit, review:
>
> - style and typing consistency
> - convention compliance
> - robustness of the ESLint rules and their autofix
> - compatibility with the public surface
> - associated tests, present or missing
>
> Generate a Markdown report in `.ai-review.md` if explicitly requested.

*Recommended frequency: before a PR.*
