# cecillie.fr

Portfolio de Cécile Ricordeau, graphiste et illustratrice.

## Installation

Ce site web est construit avec [Cecil](https://cecil.app/), un générateur de site statique en PHP, et utilise Tailwind CSS pour le style.

```bash
curl -LO https://cecil.app/cecil.phar
composer install
```

## Aperçu local

```bash
composer css:watch
php cecil.phar serve -v
```

## Générer le site pour la production

```bash
composer css:build
php cecil.phar build
```

## Ajouter un billet de blog

### 1. Créer le fichier Markdown

Créer un fichier `pages/blog/<slug-du-billet>.md` (le nom du fichier sera utilisé comme URL).

Structure du front matter :

```yaml
---
title: "Titre du billet"
description: "Description du billet (idéalement 120 à 160 caractères)."
date: AAAA-MM-JJ
image: /images/blog/<slug-du-billet>/image-principale.png
---
```

Puis rédiger le contenu en Markdown après le front matter.

### 2. Ajouter les images

Placer les images dans `assets/images/blog/<slug-du-billet>/` (le nom du dossier doit correspondre au nom du fichier Markdown).

Référencer une image dans le contenu :

```markdown
![Texte alternatif](images/blog/<slug-du-billet>/nom-image.png "Légende"){loading=eager}
```

> `{loading=eager}` est recommandé pour l'image principale (au-dessus de la ligne de flottaison).

## Ajouter une illustration

### 1. Créer le fichier Markdown

Créer un fichier `pages/illustrations/<slug-de-l-illustration>.md`.

Structure du front matter :

```yaml
---
title: Titre de l'illustration
description: "Description de l’illustration (idéalement 120 à 160 caractères)."
date: AAAA-MM-JJ
images:
  - file: 01.png
    alt: Ce que montre l’image 1 (personnages, décor, action…)
  - file: 02.png
    alt: Ce que montre l’image 2
---
```

Puis rédiger le texte d'accompagnement en Markdown après le front matter.

### 2. Ajouter les images

Placer les images dans `assets/images/illustrations/<slug-de-l-illustration>/`.

Les nommer de manière séquentielle (`01.png`, `02.png`, etc.) et les lister dans le front matter `images`.

> Le texte alternatif (`alt`) décrit ce que l’on voit sur l’image, pour les personnes qui ne la voient pas (lecteurs d’écran) et pour les moteurs de recherche : éviter « Titre 1 », « Titre 2 »…

## Traduire une page en anglais

Créer, à côté de la page française, un fichier avec le suffixe `.en` (ex. `pages/illustrations/kissaten.en.md`), avec le même front matter traduit (`title`, `description`, `alt` des images).

La page traduite est publiée sous `/en/` et liée automatiquement à la version française. Pour qu'une rubrique apparaisse dans le menu anglais, ajouter son entrée dans `languages.en.config.menus.main` de `cecil.yml`.
