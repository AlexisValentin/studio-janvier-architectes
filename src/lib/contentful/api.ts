import { getContentfulClient } from "./client";
import type { ProjectEntry } from "./types";

/**
 * Récupère tous les projets depuis Contentful
 * @param preview - Si true, utilise l'API de preview
 * @returns Liste des projets
 */
export async function getAllProjects(preview = false): Promise<ProjectEntry[]> {
	const client = getContentfulClient(preview);

	try {
		const response = await client.getEntries<any>({
			content_type: "project", // À adapter selon votre content type dans Contentful
			order: ["-fields.publishDate"],
		});

		return response.items;
	} catch (error) {
		console.error("Erreur lors de la récupération des projets:", error);
		return [];
	}
}

/**
 * Récupère un projet par son slug
 * @param slug - Le slug du projet
 * @param preview - Si true, utilise l'API de preview
 * @returns Le projet ou undefined
 */
export async function getProjectBySlug(
	slug: string,
	preview = false,
): Promise<ProjectEntry | undefined> {
	const client = getContentfulClient(preview);

	try {
		const response = await client.getEntries<any>({
			content_type: "project",
			"fields.slug": slug,
			limit: 1,
		});

		return response.items[0];
	} catch (error) {
		console.error(`Erreur lors de la récupération du projet ${slug}:`, error);
		return undefined;
	}
}

/**
 * Récupère les projets mis en avant
 * @param limit - Nombre de projets à récupérer
 * @param preview - Si true, utilise l'API de preview
 * @returns Liste des projets mis en avant
 */
export async function getFeaturedProjects(
	limit = 6,
	preview = false,
): Promise<ProjectEntry[]> {
	const client = getContentfulClient(preview);

	try {
		const response = await client.getEntries<any>({
			content_type: "project",
			"fields.featured": true,
			order: ["-fields.publishDate"],
			limit,
		});

		return response.items;
	} catch (error) {
		console.error(
			"Erreur lors de la récupération des projets mis en avant:",
			error,
		);
		return [];
	}
}

/**
 * Récupère les projets par catégorie
 * @param category - La catégorie des projets
 * @param preview - Si true, utilise l'API de preview
 * @returns Liste des projets de la catégorie
 */
export async function getProjectsByCategory(
	category: string,
	preview = false,
): Promise<ProjectEntry[]> {
	const client = getContentfulClient(preview);

	try {
		const response = await client.getEntries<any>({
			content_type: "project",
			"fields.category[in]": category,
			order: ["-fields.publishDate"],
		});

		return response.items;
	} catch (error) {
		console.error(
			`Erreur lors de la récupération des projets de la catégorie ${category}:`,
			error,
		);
		return [];
	}
}
