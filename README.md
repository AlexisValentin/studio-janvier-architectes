# Studio Janvier Architectes - Site Web

Site web officiel du cabinet d'architecture Studio Janvier Architectes, développé avec Astro, Preact, TailwindCSS et Contentful.

## Stack Technique

- **Framework**: [Astro](https://astro.build) 5.x - Framework moderne pour sites web statiques performants
- **UI Library**: [Preact](https://preactjs.com) - Alternative légère à React (3kB)
- **Styling**: [TailwindCSS](https://tailwindcss.com) v4 - Framework CSS utility-first
- **CMS**: [Contentful](https://www.contentful.com) - Headless CMS pour la gestion du contenu
- **Package Manager**: [pnpm](https://pnpm.io) - Gestionnaire de paquets rapide et efficace
- **Déploiement**: [Vercel](https://vercel.com) - Plateforme de déploiement optimisée

## Fonctionnalités

- ✅ **SSG (Static Site Generation)** - Génération de site statique pour d'excellentes performances
- ✅ **Optimisation d'images** - Compression et conversion automatique en WebP/AVIF
- ✅ **SEO optimisé** - Meta tags, sitemap, robots.txt
- ✅ **Contentful CMS** - Gestion du contenu découplée
- ✅ **TypeScript** - Typage strict pour une meilleure qualité de code
- ✅ **Responsive Design** - Compatible mobile, tablette et desktop

## Structure du Projet

```text
/
├── public/              # Assets statiques (favicon, robots.txt)
├── src/
│   ├── components/      # Composants Preact réutilisables
│   │   ├── ProjectCard.tsx
│   │   └── OptimizedImage.astro
│   ├── layouts/         # Layouts Astro
│   │   └── BaseLayout.astro
│   ├── lib/            # Utilitaires et helpers
│   │   └── contentful/ # Client et API Contentful
│   │       ├── client.ts
│   │       ├── types.ts
│   │       ├── api.ts
│   │       └── index.ts
│   ├── pages/          # Pages du site (routing automatique)
│   │   └── index.astro
│   ├── styles/         # Styles globaux
│   │   └── global.css
│   └── env.d.ts        # Types TypeScript pour env
├── .env                # Variables d'environnement (local)
├── .env.example        # Template des variables d'environnement
├── astro.config.mjs    # Configuration Astro
├── tailwind.config.mjs # Configuration TailwindCSS
├── tsconfig.json       # Configuration TypeScript
└── vercel.json         # Configuration Vercel
```

## Installation et Démarrage

### Prérequis

- Node.js 18+ ou 20+
- pnpm (si non installé : `npm install -g pnpm`)

### Installation

1. Clonez le repository ou naviguez dans le dossier du projet

2. Installez les dépendances :
```bash
pnpm install
```

3. Copiez le fichier `.env.example` vers `.env` et remplissez les variables d'environnement :
```bash
cp .env.example .env
```

4. Configurez vos clés API Contentful dans `.env` :
```env
CONTENTFUL_SPACE_ID=votre_space_id
CONTENTFUL_ACCESS_TOKEN=votre_access_token
CONTENTFUL_PREVIEW_TOKEN=votre_preview_token
CONTENTFUL_ENVIRONMENT=master
```

### Commandes

| Commande | Action |
|----------|--------|
| `pnpm install` | Installe les dépendances |
| `pnpm dev` | Lance le serveur de développement sur `localhost:4321` |
| `pnpm build` | Construit le site pour la production dans `./dist/` |
| `pnpm preview` | Prévisualise le build en local |
| `pnpm astro ...` | Exécute des commandes Astro CLI |

## Configuration Contentful

### 1. Créer un Space Contentful

1. Créez un compte sur [contentful.com](https://www.contentful.com)
2. Créez un nouveau Space pour votre projet
3. Notez votre **Space ID** dans Settings > General settings

### 2. Créer un Content Type "Project"

Dans votre Space Contentful, créez un Content Type avec les champs suivants :

| Champ | Type | Description |
|-------|------|-------------|
| `title` | Short text | Titre du projet |
| `slug` | Short text | URL-friendly identifier |
| `description` | Long text | Description courte |
| `mainImage` | Media | Image principale |
| `gallery` | Media (multiple) | Galerie d'images |
| `location` | Short text | Lieu du projet |
| `year` | Number | Année de réalisation |
| `category` | Short text (list) | Catégories |
| `content` | Rich text | Contenu détaillé |
| `featured` | Boolean | Projet mis en avant |
| `publishDate` | Date | Date de publication |

### 3. Obtenir les clés API

1. Allez dans Settings > API keys
2. Créez une nouvelle clé API
3. Récupérez :
   - **Space ID**
   - **Content Delivery API - access token** (pour le contenu publié)
   - **Content Preview API - access token** (pour le mode preview)

### 4. Configurer les variables d'environnement

Ajoutez vos clés dans le fichier `.env` :

```env
CONTENTFUL_SPACE_ID=votre_space_id
CONTENTFUL_ACCESS_TOKEN=votre_delivery_token
CONTENTFUL_PREVIEW_TOKEN=votre_preview_token
CONTENTFUL_ENVIRONMENT=master
```

## Déploiement sur Vercel

### Déploiement automatique

1. Connectez votre repository GitHub/GitLab à Vercel
2. Configurez les variables d'environnement dans Vercel :
   - `CONTENTFUL_SPACE_ID`
   - `CONTENTFUL_ACCESS_TOKEN`
   - `CONTENTFUL_PREVIEW_TOKEN`
   - `CONTENTFUL_ENVIRONMENT`
3. Vercel détectera automatiquement Astro et déploiera votre site

### Configuration manuelle

Si nécessaire, vous pouvez personnaliser le déploiement dans `vercel.json`.

## Optimisation des Images

Le projet utilise le composant `<Image />` natif d'Astro avec le service Sharp pour :
- Conversion automatique en WebP/AVIF
- Génération de srcset responsive
- Lazy loading
- Optimisation de la qualité

Exemple d'utilisation :
```astro
---
import { Image } from 'astro:assets';
---

<Image
  src={imageUrl}
  alt="Description"
  width={1200}
  height={800}
  format="webp"
  quality={80}
/>
```

## SEO

Le site inclut plusieurs optimisations SEO :
- **Meta tags** : Configurés dans `BaseLayout.astro`
- **Sitemap** : Généré automatiquement à chaque build
- **Robots.txt** : Configuré pour autoriser tous les crawlers
- **Canonical URLs** : Définis automatiquement
- **Open Graph** : Meta tags pour les réseaux sociaux
- **Twitter Cards** : Support des cartes Twitter

## Développement

### Ajouter une nouvelle page

Créez simplement un fichier `.astro` dans `src/pages/` :

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
---

<BaseLayout title="Nouvelle Page">
  <h1>Contenu de la page</h1>
</BaseLayout>
```

### Créer un composant Preact

```tsx
// src/components/MonComposant.tsx
import type { FunctionalComponent } from 'preact';

interface Props {
  title: string;
}

export const MonComposant: FunctionalComponent<Props> = ({ title }) => {
  return <div>{title}</div>;
};
```

### Récupérer du contenu depuis Contentful

```astro
---
import { getAllProjects } from '@/lib/contentful';

const projects = await getAllProjects();
---

{projects.map(project => (
  <div>{project.fields.title}</div>
))}
```

## Support

Pour toute question ou problème :
- Documentation Astro : [docs.astro.build](https://docs.astro.build)
- Documentation Contentful : [contentful.com/developers/docs](https://www.contentful.com/developers/docs/)
- Documentation TailwindCSS : [tailwindcss.com/docs](https://tailwindcss.com/docs)

## Licence

Projet propriétaire - Studio Janvier Architectes © 2024
