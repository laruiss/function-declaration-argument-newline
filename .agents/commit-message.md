# 🎯 Conventions Git & Commits

Ce fichier contient les instructions pour créer des messages de commit respectant les conventions du projet.

## Format des commits

Le projet utilise le format Conventional Commit avec des gitmojis.

## Structure des messages de commit

```text
type: gitmoji description courte
type(scope): gitmoji description courte

## Pourquoi les changements ont été faits :
- Explication du contexte et des raisons
- Problème résolu ou besoin adressé

## Quelles modifications ont été apportées :
- Description détaillée des modifications
- Impact sur la règle ESLint, l’export du plugin, les tests ou le packaging

closes #1234
```

Pas de majuscule au début de la description courte.

Utilise la troisième personne du singulier au présent de l’indicatif pour la description courte.

Le scope est optionnel. Utilise-le lorsqu’il apporte un contexte utile au titre du commit.

Scopes recommandés pour ce dépôt :

- `function-declaration-argument-newline` : règle actuelle
- `rules` : plusieurs règles
- `plugin` : export, métadonnées ou surface publique
- `types` : typage TypeScript
- `docs` : documentation
- `build` : packaging, compilation ou dépendances
- `ci` : intégration continue

Exemple :

```text
fix(function-declaration-argument-newline): 🐛 préserve les commentaires de ligne pendant l’autofix

## Pourquoi les changements ont été faits :
- L’autofix ne doit pas déplacer un commentaire de ligne placé entre deux paramètres
- Un fix automatique ambigu peut produire un résultat inattendu pour l’utilisateur

## Quelles modifications ont été apportées :
- Détecte les commentaires de ligne avant de proposer une correction automatique
- Conserve le signalement ESLint pour le cas invalide
- Ajoute une couverture de test dédiée

closes #1170
```

## Gitmojis et types de commits principaux

Ces gitmojis couvrent les cas d’usage courants dans le projet.

### Règles liées au contexte

1. Si le changement corrige un comportement observé incorrect, le type est `fix`.
2. Cette règle prime sur les autres intentions.
3. Utiliser `feat` uniquement si le comportement ajouté n’existait pas auparavant et n’est pas la correction d’un bug.
4. En cas de doute entre `fix` et un autre type, choisir `fix`.

Test rapide :

- « Avant le changement, quelque chose fonctionnait mal ? » → `fix`
- « Avant le changement, tout fonctionnait, on ajoute une capacité ? » → type non-`fix`, souvent `feat`

### Développement quotidien

| Intention | code gitmoji | gitmoji | type |
| --- | --- | --- | --- |
| Nouvelle règle ou nouveau comportement public | `:sparkles:` | ✨ | `feat` |
| Correction de bug | `:bug:` | 🐛 | `fix` |
| Refactoring sans changement de comportement | `:recycle:` | ♻️ | `refactor` |
| Formatage sans changement de logique | `:lipstick:` | 💄 | `style` |

### Documentation et maintenance

| Intention | code gitmoji | gitmoji | type |
| --- | --- | --- | --- |
| Documentation | `:memo:` | 📝 | `docs` |
| Tests | `:white_check_mark:` | ✅ | `test` |
| Maintenance générale | `:wrench:` | 🔧 | `chore` |

### Build et publication

| Intention | code gitmoji | gitmoji | type |
| --- | --- | --- | --- |
| Build, packaging ou dépendances externes | `:package:` | 📦️ | `build` |
| CI/CD, GitHub Actions | `:construction_worker:` | 👷 | `ci` |

### Corrections spécialisées

| Intention | code gitmoji | gitmoji | type |
| --- | --- | --- | --- |
| Annulation de commit | `:rewind:` | ⏪ | `revert` |
| Breaking change | `:boom:` | 💥 | `feat!` ou `fix!` |
| Sécurité | `:lock:` | 🔒️ | `fix` |
| Faute de frappe | `:pencil2:` | ✏️ | `docs` |
| Warnings linter ou compilateur | `:rotating_light:` | 🚨 | `style` ou `fix` selon le contexte |
| Performance | `:zap:` | ⚡ | `perf` |

Pour les breaking changes, ajouter obligatoirement un footer `BREAKING CHANGE:` avec l’impact et la migration.

## Exemples pratiques

```text
feat(rules): ✨ ajoute une règle pour les retours à la ligne des paramètres

## Pourquoi les changements ont été faits :
- Les règles stylistiques existantes ne couvrent pas ce cas précis
- Le package doit fournir une règle complémentaire à `function-call-argument-newline`

## Quelles modifications ont été apportées :
- Ajout d’une règle ESLint dans `src/rules`
- Export de la règle depuis le plugin
- Documentation de l’option par défaut

closes #1098
```

```text
docs: 📝 documente l’usage avec flat config

## Pourquoi les changements ont été faits :
- Les utilisateurs d’ESLint 9 configurent principalement les plugins avec flat config
- Le README doit montrer le nom public de la règle

## Quelles modifications ont été apportées :
- Ajout d’un exemple `eslint.config.ts`
- Clarification des options disponibles

closes #1234
```

```text
build: 📦️ ajuste les fichiers publiés sur le registre npm

## Pourquoi les changements ont été faits :
- Le package publié doit contenir uniquement les artefacts nécessaires
- La configuration doit rester cohérente avec `exports`

## Quelles modifications ont été apportées :
- Mise à jour du champ `files`
- Vérification du contenu avec `pnpm pack --dry-run`

closes #678
```

## Anti-patterns à éviter

```text
❌ feat: ajoute une règle
✅ feat(rules): ✨ ajoute une règle pour les paramètres de fonctions

❌ fix: Bug autofix
✅ fix(function-declaration-argument-newline): 🐛 corrige l’autofix avec commentaires

❌ update: Change des trucs
✅ refactor(plugin): ♻️ simplifie l’export des règles

❌ docs: Update README
✅ docs: 📝 documente l’usage avec flat config
```
