---
name: code-implementation
description: 'Code implementation, refactoring, and bugfixes for this ESLint plugin. USE FOR: implementing rules; refactoring TypeScript; fixing plugin behavior; modifying exports. DO NOT USE FOR: writing tests (separate skill); documentation (separate skill); commit conventions (separate skill).'
---

# Implementation and Refactoring

## Procedure

1. Read `../../instructions.md`, then `tasks.md`.
2. Inspect neighboring files before modifying a rule or the plugin's export.
3. Preserve the public API unless an incompatible change is explicitly requested.
4. Update `src/index.ts` whenever the rule list or the public metadata changes.
5. Don't edit generated artifacts (`dist/`) unless explicitly requested.
6. Verify with the relevant targeted commands: `pnpm build`, then `pnpm pack --dry-run` for packaging changes.

## Associated documentation

- [`../../instructions.md`](../../instructions.md) — common coding rules
- [`tasks.md`](tasks.md) — common implementation tasks
