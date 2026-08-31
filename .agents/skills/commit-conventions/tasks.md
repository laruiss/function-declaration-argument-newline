# Tâches - Conventions de Commit et PR

## Format obligatoire du commit

```text
type: gitmoji description courte en français
type(scope): gitmoji description courte en français

## Pourquoi :
- Explication du contexte et des raisons
- Problème résolu ou besoin adressé

## Quoi :
- Description détaillée des modifications
- Impact sur l’architecture, la règle ESLint ou le packaging

closes #1234
```

**Types autorisés** :

- `feat` ✨ — nouvelle fonctionnalité ou nouvelle règle
- `fix` 🐛 — correction de bug
- `refactor` ♻️ — refactorisation sans changement de comportement
- `style` 💄 — formatage sans changement logique
- `test` ✅ — ajout ou correction de tests
- `docs` 📝 — documentation, commentaires
- `chore` 🔧 — configuration, tooling, maintenance
- `build` 📦️ — build, packaging ou dépendances
- `ci` 👷 — intégration continue

**Scopes utiles** :

- `function-declaration-argument-newline` pour la règle actuelle
- `rules` pour plusieurs règles
- `plugin` pour l’export ou les métadonnées du plugin
- `build`, `ci`, `docs`, `types`, `release`

Le scope n’est pas obligatoire. Utilise-le lorsqu’il apporte un contexte utile.

**Directives appliquées** :

- tous les textes en français
- typographie française dans les phrases rédigées
- troisième personne du singulier présent pour la description courte
- pas de majuscule au début de la description courte
- gitmoji obligatoire correspondant au type
- sections « Pourquoi » et « Quoi » présentes et significatives
- footer d’issue `closes #1234` ou `fixes #1234` si applicable
- branche au format `type/description-kebab-case-numéro-issue` lorsqu’une issue existe

### Exemple complet

```text
fix(function-declaration-argument-newline): 🐛 préserve les commentaires de ligne pendant l’autofix

## Pourquoi :
- L’autofix ne doit pas déplacer un commentaire de ligne placé entre deux paramètres
- Le comportement actuel peut produire une correction ambiguë pour ESLint

## Quoi :
- Détecte les commentaires de ligne avant de proposer un fix
- Conserve le signalement sans fixer automatiquement le cas risqué
- Ajoute une couverture de test pour ce scénario

closes #1337
```

## ✍️ Créer un message de commit

> Propose un message de commit conforme au standard du projet à partir des fichiers modifiés.
> Respecte le format Conventional Commit + gitmoji. Le scope est optionnel.
> Utilise un scope lié à la règle, au plugin ou au packaging lorsqu’il clarifie le changement.

## ✅ Vérifier un message de commit

> Vérifie qu’un message de commit respecte les conventions du projet :
>
> - type Conventional Commit valide
> - gitmoji cohérent avec l’intention
> - description courte au bon format
> - scope correct s’il est présent
> - sections « Pourquoi » et « Quoi » présentes et significatives
> - textes en français
> - footer d’issue si applicable
>
> Si le message n’est pas conforme, propose une version corrigée complète.

## 🌿 Vérifier le nom de branche

> Vérifie que la branche respecte les conventions du projet :
>
> - préfixe par le type et un slash
> - description en anglais et en kebab-case
> - suffixe par le numéro d’issue GitHub si la branche est liée à une issue
> - tirets au lieu d’underscores
>
> Propose un nom de branche corrigé si nécessaire.

## 🧾 Rédiger un titre de Pull Request

> Propose un titre de Pull Request aligné avec le commit principal.
> Assure la cohérence entre le type, le scope optionnel et la description courte.

## 🎯 Vérifier la cible de Pull Request

> Vérifie que la Pull Request cible la branche attendue du dépôt.
> Par défaut, utiliser `main`, sauf consigne contraire du mainteneur.

## 🧭 Arbitrer le type de commit

> En cas d’hésitation entre plusieurs types (`fix`, `feat`, `refactor`, `docs`, etc.), applique les règles de priorité du projet et justifie brièvement le choix.
>
> **Règles** :
>
> - `fix` : correction d’un comportement incorrect
> - `feat` : nouvelle règle ou nouveau comportement public
> - `refactor` : changement technique sans impact comportemental
> - `test` : ajout ou correction de tests
> - `docs` : documentation uniquement
> - `build` : build, packaging ou dépendances
> - `ci` : intégration continue
> - `chore` : maintenance hors build et CI
