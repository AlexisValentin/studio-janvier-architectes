import type { MetadataRoute } from "next";
import { fetchProjectSlugs } from "@/utils/cms/api";

const BASE_URL = "https://studio-janvier-architectes.com";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
	const projectSlugs = await fetchProjectSlugs();

	const staticPages: MetadataRoute.Sitemap = [
		{
			url: BASE_URL,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.5,
		},
		{
			url: `${BASE_URL}/a-propos`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${BASE_URL}/projets`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: `${BASE_URL}/contact`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.7,
		},
	];

	const projectPages: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
		url: `${BASE_URL}/projets/${slug}`,
		lastModified: new Date(),
		changeFrequency: "monthly" as const,
		priority: 1,
	}));

	return [...staticPages, ...projectPages];
};

export default sitemap;
