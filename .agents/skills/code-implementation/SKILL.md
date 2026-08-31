---
name: code-implementation
description: 'Code implementation, refactoring, and bugfixes for this ESLint plugin. USE FOR: implementing rules; refactoring TypeScript; fixing plugin behavior; modifying exports. DO NOT USE FOR: writing tests (separate skill); documentation (separate skill); commit conventions (separate skill).'
---

# Implémentation et Refactoring

## Procédure

1. Lire `../../instructions.md`, puis `tasks.md`.
2. Inspecter les fichiers voisins avant de modifier une règle ou l’export du plugin.
3. Préserver l’API publique sauf demande explicite de changement incompatible.
4. Mettre à jour `src/index.ts` quand la liste des règles ou les métadonnées publiques changent.
5. Ne pas modifier les artefacts générés (`dist/`) sauf demande explicite.
6. Vérifier avec les commandes ciblées pertinentes : `pnpm build`, puis `pnpm pack --dry-run` pour les changements de packaging.

## Documentation associée

- [`../../instructions.md`](../../instructions.md) — règles de codage communes
- [`tasks.md`](tasks.md) — tâches courantes pour l’implémentation
