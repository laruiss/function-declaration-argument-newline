# AI Instruction Governance

This document defines how to maintain uniform instructions for all AI agents (agnostic to agent type: Copilot, Claude, Codex, etc.).

## Goal

- guarantee a single common rule set for all agents
- allow limited extensions for agent-specific capabilities
- avoid duplicating instructions
- make important workflows discoverable by LLMs via short, targeted skills

## Document hierarchy

### Level 1: Common base (agnostic)

1. **`instructions.md`**: common coding rules
2. **`tasks.md`**: common expectations per task type
3. **`commit-message.md`**: common commit conventions
4. **`skills/`**: specialized workflows discoverable by context
5. **Command adapters**: `.codex/commands/`, `.claude/commands/`, `.github/prompts/`

### Level 2: Agent adapters

- **`.github/copilot-instructions.md`**: Copilot-specific additions (if needed)
- **`.github/prompts/*`**: GitHub Copilot custom commands pointing to the common instructions
- **`CLAUDE.md`**: Claude-specific additions (if needed)
- **`.claude/commands/*`**: Claude Code custom commands pointing to the common instructions
- **`.codex/skills/*`**: Codex wrappers pointing to the common skills
- **`.codex/commands/*`**: Codex custom commands pointing to the common instructions
- etc.

## The `skills/` folder

This folder contains **agnostic, specialized workflows**, automatically discoverable by agents based on context.

**Structure**:
```
skills/
├── code-implementation/
│   ├── SKILL.md
│   └── tasks.md
├── test-writing/
│   ├── SKILL.md
│   └── tasks.md
├── documentation/
│   ├── SKILL.md
│   └── tasks.md
└── commit-conventions/
    ├── SKILL.md
    └── tasks.md
```

Each skill has:
- **SKILL.md**: description, usage context, associated documentation
- **tasks.md**: common tasks for this skill

**Loading**: each agent must read the selected `SKILL.md` in full, then the files it references (`tasks.md`, `instructions.md`, `commit-message.md`, etc.).

See [`../AGENTS.md`](../AGENTS.md) for the skill selection guide.

## Maintenance rules

- Common rules live only in `.agents/*` (including `.agents/skills/`).
- Agent adapters must not duplicate common rules.
- A new common workflow must be added under `.agents/skills/<name>/`.
- A Codex wrapper must stay minimal: frontmatter, short description, pointer to the common skill.
- A custom agent command (`.codex/commands/*`, `.claude/commands/*`, `.github/prompts/*`) must stay minimal and point back to the corresponding common command or instruction.
- A rule specific to one agent must be marked `Agent-only (AgentName)`.

## Adding a new instruction

1. Determine the scope of the instruction.
   - **Common**: applies to all agents → edit `.agents/*` (including `.agents/skills/`)
   - **Specific**: applies to a single agent → edit only the adapter file
2. Document the reason, the impact, and the fallback if agent-specific.

Required format for an agent-specific instruction:

```md
## Agent-only (AgentName)
- Reason: ...
- Impact: ...
- Fallback: ...
```

## Maintainers and contributors

- **Maintainers**: `.agents/*` (including `.agents/skills/`) are authoritative
- **Contributors**: check `AGENTS.md` to use the skills at the right time
- **To fix an AI bug**: edit the relevant file in `.agents/*`, not the adapters
