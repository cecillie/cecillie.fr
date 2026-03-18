# cecillie.fr

Portfolio de Cécile Ricordeau, graphiste et illustratrice à Montreuil.

## Installation

Ce site web est construit avec [Cecil](https://cecil.app/), un générateur de site statique en PHP, et utilise Tailwind CSS pour le style.

```bash
curl -LO https://cecil.app/cecil.phar
composer install
npm install
```

## Aperçu local

```bash
npm run css:watch
php cecil.phar serve -v
```

## Générer le site pour la production

```bash
npm run css:build
php cecil.phar build
```

## Ajouter un billet de blog

### 1. Créer le fichier Markdown

Créer un fichier `pages/blog/<slug-du-billet>.md` (le nom du fichier sera utilisé comme URL).

Structure du front matter :

```yaml
---
title: "Titre du billet"
description: "Description courte du billet."
date: AAAA-MM-JJ
image: /images/<slug-du-billet>/image-principale.png
---
```

Puis rédiger le contenu en Markdown après le front matter.

### 2. Ajouter les images

Placer les images dans `assets/images/<slug-du-billet>/` (le nom du dossier doit correspondre au nom du fichier Markdown).

Référencer une image dans le contenu :

```markdown
![Texte alternatif](images/<slug-du-billet>/nom-image.png "Légende"){loading=eager}
```

> `{loading=eager}` est recommandé pour l'image principale (au-dessus de la ligne de flottaison).

## Ajouter une illustration

### 1. Créer le fichier Markdown

Créer un fichier `pages/illustrations/<slug-de-lillustration>.md`.

Structure du front matter :

```yaml
---
title: Titre de l'illustration
description: "Description de l'illustration."
date: AAAA-MM-JJ
images:
  - file: 01.png
    alt: Description de l'image 1
  - file: 02.png
    alt: Description de l'image 2
---
```

Puis rédiger le texte d'accompagnement en Markdown après le front matter.

### 2. Ajouter les images

Placer les images dans `assets/images/illustrations/<slug-de-lillustration>/`.

Les nommer de manière séquentielle (`01.png`, `02.png`, etc.) et les lister dans le front matter `images`.
