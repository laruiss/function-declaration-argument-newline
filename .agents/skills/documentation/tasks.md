# Tâches - Documentation

## 📄 Documenter une règle ESLint

> Mets à jour la documentation d’une règle ESLint.
> Décris son objectif, ses options, les cas valides et invalides, l’autofix éventuel et un exemple de configuration flat config.

## 📖 Mettre à jour le README

> Mets à jour `README.md` pour refléter la surface publique actuelle du package.
> Inclue l’installation si nécessaire, l’usage avec flat config, la liste des règles et les commandes de développement pertinentes.

## ✅ Vérifier la liste des règles

> Analyse `src/index.ts` et `src/rules/`, puis vérifie que toutes les règles publiques sont documentées dans `README.md`.
> Indique les règles manquantes et propose une mise à jour.

## 📚 Synthèse de veille technique

**Objectif :** Rester à jour sur les dépendances et outils utilisés.

> Génère une courte note de veille technique à partir des dépendances du projet :
>
> - changements récents dans ESLint, TypeScript et les APIs de règles
> - compatibilité ESLint 9/10
> - pratiques de test avec `RuleTester`
> - impacts potentiels sur le packaging ESM publié sur le registre npm
>
> Résume les tendances pertinentes et les risques de migration.

*Fréquence recommandée : mensuelle.*
