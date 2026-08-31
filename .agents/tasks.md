# Tâches IA

## 🧭 Objectif

Ce fichier organise les tâches utiles à utiliser avec des agents IA conversationnels selon les **skills** du projet.

Chaque skill dispose de sa propre liste de tâches :

- **Code Implementation** → [`skills/code-implementation/tasks.md`](skills/code-implementation/tasks.md)
- **Test Writing** → [`skills/test-writing/tasks.md`](skills/test-writing/tasks.md)
- **Documentation** → [`skills/documentation/tasks.md`](skills/documentation/tasks.md)
- **Commit Conventions** → [`skills/commit-conventions/tasks.md`](skills/commit-conventions/tasks.md)

Toutes les tâches respectent les conventions définies dans [`instructions.md`](instructions.md).

---

## 🔄 Tâches transversales

Ces tâches concernent plusieurs domaines ou l’ensemble du projet.

### 🧩 Analyse de la base de code

**Objectif :** obtenir une vue d’ensemble du projet.

> Analyse l’ensemble du code dans `src/` et produis un résumé technique clair :
>
> - stack utilisée : ESLint, TypeScript, ESM, pnpm
> - organisation des modules
> - surface publique du plugin
> - points forts et points faibles : clarté, duplication, typage, robustesse de l’autofix
> - recommandations de refactorisation
> - fichiers critiques à surveiller

*Fréquence recommandée : avant release ou changement important.*

---

### 🧩 Génération de types

> À partir d’une option de règle, d’un schéma JSON ESLint ou d’un objet de configuration, génère des types TypeScript précis.
> Respecte les conventions du projet et évite d’exposer des types publics inutiles.

---

### 💡 Migration / Modernisation

> Propose un plan de migration de ce code vers une approche plus moderne.
> Évalue notamment les APIs ESLint récentes, le typage TypeScript, la compatibilité ESM et les impacts sur le packaging publié sur le registre npm.
> Indique les risques, bénéfices et étapes de validation.

---

### 🧰 Audit des dépendances

**Objectif :** surveiller les dépendances obsolètes ou à risque.

> Lis le `package.json` et vérifie :
>
> - les versions non à jour
> - les dépendances à risque d’après `pnpm audit`
> - les packages inutilisés
> - la cohérence entre `peerDependencies` et `devDependencies`
> - la compatibilité avec ESLint 9/10 et TypeScript
>
> Génère un résumé clair et propose les mises à jour prioritaires.

*Fréquence recommandée : mensuelle ou avant publication sur le registre npm.*

---

### 🧠 Revue IA du code récent

**Objectif :** vérifier automatiquement les changements récents.

> Pour les fichiers modifiés depuis le dernier commit, fais une revue :
>
> - cohérence de style et typage
> - respect des conventions
> - robustesse des règles ESLint et de l’autofix
> - compatibilité avec la surface publique
> - tests associés présents ou manquants
>
> Génère un rapport Markdown dans `.ai-review.md` si demandé explicitement.

*Fréquence recommandée : avant PR.*
