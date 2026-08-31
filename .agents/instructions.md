# Instructions de codage IA pour function-declaration-argument-newline

## Vue d’ensemble du projet

`function-declaration-argument-newline` est un package TypeScript publiable sur le registre npm qui fournit un plugin ESLint.

Le plugin expose une règle de layout, `function-declaration-argument-newline`, qui impose la présence, l’absence ou la cohérence des retours à la ligne entre les paramètres des définitions de fonctions. Elle complète `@stylistic/function-call-argument-newline`, qui s’applique aux arguments d’appel, et `@stylistic/function-paren-newline`, qui ne contrôle pas les séparateurs entre paramètres.

**Nature du projet** : package ESM pour ESLint, compilé avec TypeScript et géré avec pnpm.

## Pour les tâches demandées

Voir le fichier [`tasks.md`](tasks.md) pour les instructions transversales.
Avant toute modification, identifier la skill pertinente dans `skills/` et lire son `SKILL.md` ainsi que son `tasks.md`.

## Architecture et structure des fichiers

### Fichiers principaux

- **`src/index.ts`** : point d’entrée du plugin ESLint, exporte les métadonnées et la liste des règles.
- **`src/rules/function-declaration-argument-newline.ts`** : implémentation de la règle ESLint.
- **`package.json`** : manifeste du package, exports publics, scripts et dépendances.
- **`tsconfig.json`** : configuration de compilation TypeScript.
- **`README.md`** : documentation utilisateur du package et de la règle.

### Surface publique

Le package expose uniquement `./dist/index.js` via `exports`.

La règle publique est disponible sous le nom :

```text
@laruiss/newline/function-declaration-argument-newline
```

Toute modification de la surface publique doit être reflétée dans :

- `src/index.ts`
- `README.md`
- les métadonnées de règle (`meta.docs`, `schema`, `messages`)
- les tests, lorsqu’ils existent

## Workflow de développement

### Installation et build

```bash
pnpm install
pnpm build
```

`pnpm build` compile `src/` vers `dist/` avec TypeScript.

### Vérifications recommandées

```bash
pnpm build
pnpm pack --dry-run
```

Utiliser `pnpm pack --dry-run` avant publication ou modification de packaging pour vérifier que seuls les fichiers attendus sont inclus.

### Développement de règles ESLint

Lors de la modification d’une règle :

1. Lire l’implémentation complète de la règle concernée.
2. Vérifier le comportement attendu pour les options `"always"`, `"never"` et `"consistent"`.
3. Préserver l’autofix lorsque c’est possible.
4. Ne pas proposer de fix automatique lorsqu’un commentaire de ligne rend la correction ambiguë.
5. Conserver des messages d’erreur stables, sauf changement explicitement documenté.
6. Mettre à jour la documentation utilisateur si le comportement, les options ou les exemples changent.

## Qualité du code

- **Module system** : ESM (`"type": "module"`).
- **Langage** : TypeScript.
- **Style** : fonctions courtes, noms explicites, logique locale lisible.
- **API ESLint** : utiliser les types ESLint disponibles quand ils sont suffisamment précis.
- **Compatibilité** : respecter le `peerDependencies` ESLint `^9.0.0 || ^10.0.0`.
- **Build artifacts** : ne pas modifier `dist/` manuellement.
- **Gestionnaire de paquets** : utiliser pnpm et conserver `pnpm-lock.yaml`.

## Règles générales

- Préserver l’API publique sauf demande explicite de changement incompatible.
- Éviter les dépendances runtime inutiles : une règle ESLint simple doit rester légère.
- Favoriser les helpers locaux lorsqu’ils clarifient réellement l’algorithme.
- Ne pas affaiblir le typage sans raison documentée.
- Garder les commentaires rares et utiles, notamment pour expliquer les cas ESLint ou autofix non évidents.

## Tests et validation

Si une suite de tests est ajoutée ou présente, privilégier `RuleTester` d’ESLint pour couvrir :

- `FunctionDeclaration`
- `FunctionExpression`
- `ArrowFunctionExpression`
- options `"always"`, `"never"` et `"consistent"`
- autofix
- paramètres avec commentaires
- cas TypeScript courants lorsque le parser configuré le permet

Sans suite de tests dédiée, `pnpm build` reste la vérification minimale obligatoire après modification du code TypeScript.

## Workflow GitHub : issues et Pull Requests

- **Issues recommandées** : toute PR fonctionnelle doit être liée à une issue GitHub.
- **Création d’issue** : utiliser `gh issue create` avec un titre et une description en français.
- **Nommage des branches** : `{type}/{description-kebab-case}-{numéro-issue}`.
  - Exemple : `fix/preserve-line-comments-autofix-23`
- **Pull Requests** :
  - titre aligné avec le commit principal
  - corps avec référence `closes #<numéro-issue>` si applicable
  - branche cible : `main`, sauf consigne contraire du mainteneur

## Langue et communication

Les échanges projet, issues, PR et messages de commit sont rédigés en français.

Les éléments techniques restent en anglais lorsque c’est l’usage attendu :

- noms de branches
- noms de variables, fonctions, types et fichiers
- identifiants de règles ESLint
- exemples de code
- messages d’erreur publics si l’API du package les expose déjà en anglais

## Typographie française

Dans les textes rédigés en français, appliquer les règles suivantes :

- apostrophe française `’` dans les phrases
- guillemets français « » avec espaces
- point de suspension `…`
- espace insécable avant `:`
- espace fine insécable avant `;`, `!` et `?` lorsque le contexte le permet

Les commandes, chemins, identifiants, chaînes techniques et exemples de code peuvent conserver la typographie ASCII attendue par les outils.
