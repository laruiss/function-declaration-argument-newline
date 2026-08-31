# Copilot Adapter

Copilot-specific extensions for the `function-declaration-argument-newline` project.

## Common rules

See [`AGENTS.md`](../AGENTS.md) for the central, agnostic guide.

The project's **Skills** apply automatically:
- `.agents/skills/code-implementation/` — implementation & refactoring
- `.agents/skills/test-writing/` — tests
- `.agents/skills/documentation/` — documentation
- `.agents/skills/commit-conventions/` — commits & PR (absolute priority)

## Custom commands

Common workflows live in `.agents/*` and the adapted commands in `.github/prompts/*`.

Copilot commands are exposed as prompt files in `.github/prompts/*.prompt.md`:
- `/commit-staged`
- `/create-branch`
- `/create-issue`
- `/create-pr`

## Agent-only (Copilot)

- Reason: GitHub Copilot exposes reusable workflows via prompt files.
- Impact: Copilot uses the common skills and the custom commands from `.github/prompts/*`.
- Fallback: see `.agents/*` and `AGENTS.md`
