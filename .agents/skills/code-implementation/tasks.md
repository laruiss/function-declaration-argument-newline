# Tasks - Implementation and Refactoring

## 🔍 Analyze the code

> Analyze this file and summarize its structure and main logic.
> Point out complex or redundant parts, then propose simplifications suited to a TypeScript ESLint plugin.

## 🧠 Pedagogical explanation

> Explain this code as if talking to a junior TypeScript developer discovering the ESLint rule API.
> Cover the key concepts: AST visitors, `context.report`, tokens, ranges, autofix, and rule options.

## 🧩 New ESLint rule

> Create a new ESLint rule under `src/rules/`.
> Define its metadata (`type`, `docs`, `schema`, `messages`, `fixable` if needed), implement the AST visitors, and export the rule from `src/index.ts`.
> Update the README with the public name, the options, and a configuration example.

## ✏️ General refactoring

> Refactor this code according to our conventions: strict TypeScript, ESM, explicit functions, and a stable public surface.
> Keep the same behavior unless explicitly requested otherwise.
> Verify that autofix stays deterministic and that comments aren't moved in a risky way.

## 🙏 Code review

> Do a technical review of this file: readability, typing, compliance with the ESLint API, complexity, option consistency, and autofix robustness.
> Give concrete, prioritized recommendations.

## 🧰 Type check

> Analyze this file and point out where typing is weak or implicit.
> Propose a more robust version, limiting `any` to places where the available ESLint types aren't sufficient.

## 📚 Project summary

> Analyze the codebase and produce a clear technical summary: stack, conventions, main modules, critical dependencies, and the package's public surface.

## 🧰 Dead / redundant code detection

> Analyze `src/` and identify:
>
> - functions that are never used
> - rules that aren't exported
> - redundant helpers
> - duplicated logic between rules
>
> Suggest files or helpers to remove, merge, or clarify.

*Recommended frequency: before a release.*
