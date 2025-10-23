import type { Asset, Entry } from "contentful";

// Interface de base pour tous les contenus Contentful
export interface ContentfulFields {
	[key: string]: any;
}

// Type pour les images Contentful
export interface ContentfulImage {
	fields: {
		title: string;
		description?: string;
		file: {
			url: string;
			details: {
				size: number;
				image?: {
					width: number;
					height: number;
				};
			};
			fileName: string;
			contentType: string;
		};
	};
}

// Exemple de type pour un projet d'architecture
// À personnaliser selon votre modèle de contenu dans Contentful
export interface ProjectFields {
	title: string;
	slug: string;
	description: string;
	mainImage?: Asset;
	gallery?: Asset[];
	location?: string;
	year?: number;
	category?: string[];
	content?: any; // Rich text de Contentful
	featured?: boolean;
	publishDate?: string;
}

export type ProjectEntry = Entry<ProjectFields>;

// Exemple de type pour la page d'accueil
export interface HomePageFields {
	title: string;
	subtitle?: string;
	heroImage?: Asset;
	description?: any; // Rich text
}

export type HomePageEntry = Entry<HomePageFields>;

// Helper pour extraire l'URL d'une image Contentful
export function getImageUrl(asset?: Asset): string | undefined {
	if (!asset?.fields?.file) return undefined;
	const url = asset.fields.file.url;
	return url.startsWith("//") ? `https:${url}` : url;
}

// Helper pour obtenir les dimensions d'une image
export function getImageDimensions(
	asset?: Asset,
): { width: number; height: number } | undefined {
	if (!asset?.fields?.file?.details?.image) return undefined;
	return {
		width: asset.fields.file.details.image.width,
		height: asset.fields.file.details.image.height,
	};
}
