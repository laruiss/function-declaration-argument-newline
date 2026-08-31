# Tâches - Implémentation et Refactoring

## 🔍 Analyser le code

> Analyse ce fichier et résume sa structure et sa logique principale.
> Indique les parties complexes ou redondantes, puis propose des simplifications adaptées à un plugin ESLint TypeScript.

## 🧠 Explication pédagogique

> Explique ce code comme si tu parlais à un développeur junior TypeScript qui découvre l’API de règles ESLint.
> Précise les concepts clés : visiteurs AST, `context.report`, tokens, ranges, autofix et options de règle.

## 🧩 Nouvelle règle ESLint

> Crée une nouvelle règle ESLint dans `src/rules/`.
> Définis ses métadonnées (`type`, `docs`, `schema`, `messages`, `fixable` si nécessaire), implémente les visiteurs AST et exporte la règle depuis `src/index.ts`.
> Mets à jour le README avec le nom public, les options et un exemple de configuration.

## ✏️ Refactorisation générale

> Refactorise ce code selon nos conventions : TypeScript strict, ESM, fonctions explicites et surface publique stable.
> Garde le même comportement, sauf demande explicite.
> Vérifie que l’autofix reste déterministe et que les commentaires ne sont pas déplacés de manière risquée.

## 🙏 Revue de code

> Fais une revue technique de ce fichier : lisibilité, typage, conformité à l’API ESLint, complexité, cohérence des options et robustesse de l’autofix.
> Donne des recommandations concrètes et priorisées.

## 🧰 Vérification des types

> Analyse ce fichier et indique les zones où le typage est faible ou implicite.
> Propose une version plus robuste en limitant `any` aux endroits où les types ESLint disponibles ne suffisent pas.

## 📚 Résumé de projet

> Analyse la base de code et produis un résumé technique clair : stack, conventions, modules principaux, dépendances critiques et surface publique du package.

## 🧰 Détection de code mort / redondant

> Analyse `src/` et identifie :
>
> - les fonctions jamais utilisées
> - les règles non exportées
> - les helpers redondants
> - les doublons de logique entre règles
>
> Suggère les fichiers ou helpers à supprimer, fusionner ou clarifier.

*Fréquence recommandée : avant release.*
