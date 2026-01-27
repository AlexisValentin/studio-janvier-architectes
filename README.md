# Studio Janvier Architectes - Site Web

Site web officiel du cabinet d'architecture Studio Janvier Architectes, développé avec Next.js, React, TailwindCSS et Contentful.

## Stack Technique

- **Framework**: [Next.js](https://nextjs.org) 16.x - Framework React moderne pour applications web performantes
- **UI Library**: [React](https://react.dev) 19.x - Bibliothèque UI déclarative
- **Styling**: [TailwindCSS](https://tailwindcss.com) v4 - Framework CSS utility-first
- **CMS**: [Contentful](https://www.contentful.com) - Headless CMS pour la gestion du contenu
- **Package Manager**: [pnpm](https://pnpm.io) - Gestionnaire de paquets rapide et efficace
- **Déploiement**: [Vercel](https://vercel.com) - Plateforme de déploiement optimisée

## Fonctionnalités

- ✅ **SSG/SSR** - Génération statique et rendu côté serveur pour d'excellentes performances
- ✅ **Optimisation d'images** - Compression et conversion automatique via Next.js Image
- ✅ **SEO optimisé** - Meta tags, sitemap, robots.txt
- ✅ **Contentful CMS** - Gestion du contenu découplée
- ✅ **TypeScript** - Typage strict pour une meilleure qualité de code
- ✅ **Responsive Design** - Compatible mobile, tablette et desktop

## Structure du Projet

```text
/
├── public/              # Assets statiques (favicon, robots.txt)
├── app/                 # App Router Next.js
│   ├── api/             # Routes API
│   │   └── contact/     # API de contact
│   ├── a-propos/        # Page À propos
│   ├── contact/         # Page Contact
│   ├── projets/         # Pages Projets
│   │   └── [slug]/      # Page projet dynamique
│   ├── globals.css      # Styles globaux
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Page d'accueil
├── src/
│   ├── components/      # Composants React réutilisables
│   │   ├── domains/     # Composants métier
│   │   └── generics/    # Composants génériques
│   ├── styles/          # Styles additionnels
│   ├── types/           # Types TypeScript
│   └── utils/           # Utilitaires et helpers
│       ├── cms/         # Client et API Contentful
│       ├── email/       # Service d'envoi d'emails
│       └── validation/  # Validation des formulaires
├── .env                 # Variables d'environnement (local)
├── .env.example         # Template des variables d'environnement
├── next.config.ts       # Configuration Next.js
├── postcss.config.mjs   # Configuration PostCSS
├── tsconfig.json        # Configuration TypeScript
└── vercel.json          # Configuration Vercel
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
| `pnpm dev` | Lance le serveur de développement sur `localhost:3000` |
| `pnpm build` | Construit le site pour la production dans `.next/` |
| `pnpm start` | Lance le serveur de production |
| `pnpm lint` | Exécute le linter ESLint |

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
3. Vercel détectera automatiquement Next.js et déploiera votre site

### Configuration manuelle

Si nécessaire, vous pouvez personnaliser le déploiement dans `vercel.json`.

## Optimisation des Images

Le projet utilise le composant `<Image />` natif de Next.js pour :
- Conversion automatique en WebP/AVIF
- Génération de srcset responsive
- Lazy loading
- Optimisation de la qualité

Exemple d'utilisation :
```tsx
import Image from 'next/image';

<Image
  src={imageUrl}
  alt="Description"
  width={1200}
  height={800}
  quality={80}
/>
```

## SEO

Le site inclut plusieurs optimisations SEO :
- **Meta tags** : Configurés via les métadonnées Next.js
- **Sitemap** : Généré automatiquement
- **Robots.txt** : Configuré pour autoriser tous les crawlers
- **Canonical URLs** : Définis automatiquement
- **Open Graph** : Meta tags pour les réseaux sociaux
- **Twitter Cards** : Support des cartes Twitter

## Développement

### Ajouter une nouvelle page

Créez simplement un dossier avec un fichier `page.tsx` dans `app/` :

```tsx
// app/nouvelle-page/page.tsx
export default function NouvellePage() {
  return (
    <main>
      <h1>Contenu de la page</h1>
    </main>
  );
}
```

### Créer un composant React

```tsx
// src/components/generics/MonComposant.tsx
interface Props {
  title: string;
}

export function MonComposant({ title }: Props) {
  return <div>{title}</div>;
}
```

### Récupérer du contenu depuis Contentful

```tsx
// app/page.tsx
import { getAllProjects } from '@/utils/cms/api';

export default async function Home() {
  const projects = await getAllProjects();

  return (
    <main>
      {projects.map(project => (
        <div key={project.slug}>{project.title}</div>
      ))}
    </main>
  );
}
```

## Support

Pour toute question ou problème :
- Documentation Next.js : [nextjs.org/docs](https://nextjs.org/docs)
- Documentation Contentful : [contentful.com/developers/docs](https://www.contentful.com/developers/docs/)
- Documentation TailwindCSS : [tailwindcss.com/docs](https://tailwindcss.com/docs)

## Licence

Projet propriétaire - Studio Janvier Architectes © 2024
