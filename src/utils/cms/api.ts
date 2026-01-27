"use server";

import type { EntryCollection } from "contentful";
import { unstable_cache } from "next/cache";
import { CACHE_CONFIG } from "./cache";
import { getContentfulClient } from "./client";
import {
	mapAboutPageEntryToContent,
	mapContactInformationEntryToContactInformation,
	mapHeroImageEntryToHeroImage,
	mapProjectEntryToGridItem,
	mapProjectEntryToProject,
} from "./mappers";
import type {
	AboutPageContent,
	AboutPageSkeleton,
	ContactInformation,
	ContactInformationSkeleton,
	FetchOptions,
	HeroImage,
	HeroImageSkeleton,
	Project,
	ProjectEntry,
	ProjectGridItem,
	ProjectSkeleton,
} from "./types";

const getProjectEntries = async (
	options: FetchOptions = {},
): Promise<EntryCollection<ProjectSkeleton, undefined, string>> => {
	const client = getContentfulClient(options.preview);

	return client.getEntries<ProjectSkeleton>({
		content_type: "project",
		order: ["sys.createdAt"] as any,
		limit: options.limit,
		skip: options.skip,
	});
};

const getProjectEntryBySlug = async (
	slug: string,
	preview = false,
): Promise<ProjectEntry | null> => {
	const client = getContentfulClient(preview);

	const response = await client.getEntries<ProjectSkeleton>({
		content_type: "project",
		"fields.slug": slug,
		limit: 1,
	} as any);

	return response.items[0] || null;
};

export const fetchAllProjects = async (
	options: FetchOptions = {},
): Promise<Project[]> => {
	return unstable_cache(
		async () => {
			const response = await getProjectEntries(options);
			return Promise.all(
				response.items.map((entry, index) =>
					mapProjectEntryToProject(entry, index),
				),
			);
		},
		["projects", "all"],
		{
			tags: [CACHE_CONFIG.PROJECTS.TAG, CACHE_CONFIG.ALL.TAG],
			revalidate: CACHE_CONFIG.PROJECTS.DURATION,
		},
	)();
};

export const fetchProjectBySlug = async (
	slug: string,
	preview = false,
): Promise<Project | null> => {
	return unstable_cache(
		async () => {
			const allEntries = await getProjectEntries();
			const index = allEntries.items.findIndex(
				(item) => item.fields.slug === slug,
			);

			if (index === -1) {
				const entry = await getProjectEntryBySlug(slug, preview);
				return entry ? mapProjectEntryToProject(entry, 0) : null;
			}

			return mapProjectEntryToProject(allEntries.items[index], index);
		},
		["project", slug],
		{
			tags: [CACHE_CONFIG.PROJECTS.TAG, CACHE_CONFIG.ALL.TAG],
			revalidate: CACHE_CONFIG.PROJECTS.DURATION,
		},
	)();
};

export const fetchProjectsForGrid = async (
	options: FetchOptions = {},
): Promise<ProjectGridItem[]> => {
	return unstable_cache(
		async () => {
			const response = await getProjectEntries(options);
			return Promise.all(
				response.items.map((entry, index) =>
					mapProjectEntryToGridItem(entry, index),
				),
			);
		},
		["projects", "grid"],
		{
			tags: [CACHE_CONFIG.PROJECTS.TAG, CACHE_CONFIG.ALL.TAG],
			revalidate: CACHE_CONFIG.PROJECTS.DURATION,
		},
	)();
};

export const fetchAdjacentProjects = async (
	slug: string,
): Promise<{ previous?: Project; next?: Project }> => {
	const allProjects = await fetchAllProjects();
	const index = allProjects.findIndex((p) => p.slug === slug);

	if (index === -1) return {};

	return {
		previous: index > 0 ? allProjects[index - 1] : undefined,
		next: index < allProjects.length - 1 ? allProjects[index + 1] : undefined,
	};
};

export const fetchProjectSlugs = async (): Promise<string[]> => {
	return unstable_cache(
		async () => {
			const client = getContentfulClient();
			const response = await client.getEntries<ProjectSkeleton>({
				content_type: "project",
				select: ["fields.slug"],
			} as any);
			return response.items.map((item) => item.fields.slug);
		},
		["projects", "slugs"],
		{
			tags: [CACHE_CONFIG.PROJECTS.TAG, CACHE_CONFIG.ALL.TAG],
			revalidate: CACHE_CONFIG.PROJECTS.DURATION,
		},
	)();
};

export const fetchAboutPageContent = async (
	preview = false,
): Promise<AboutPageContent | null> => {
	return unstable_cache(
		async () => {
			const client = getContentfulClient(preview);
			const response = await client.getEntries<AboutPageSkeleton>({
				content_type: "aboutPage",
				limit: 1,
			});

			const entry = response.items[0];
			return entry ? mapAboutPageEntryToContent(entry) : null;
		},
		["about", "content"],
		{
			tags: [CACHE_CONFIG.ABOUT.TAG, CACHE_CONFIG.ALL.TAG],
			revalidate: CACHE_CONFIG.ABOUT.DURATION,
		},
	)();
};

export const fetchHeroImage = async (
	preview = false,
): Promise<HeroImage | null> => {
	return unstable_cache(
		async () => {
			const client = getContentfulClient(preview);
			const response = await client.getEntries<HeroImageSkeleton>({
				content_type: "heroImage",
				limit: 1,
			});

			const entry = response.items[0];
			return entry ? mapHeroImageEntryToHeroImage(entry) : null;
		},
		["hero", "image"],
		{
			tags: [CACHE_CONFIG.HERO.TAG, CACHE_CONFIG.ALL.TAG],
			revalidate: CACHE_CONFIG.HERO.DURATION,
		},
	)();
};

export const fetchContactInformation = async (
	preview = false,
): Promise<ContactInformation | null> => {
	return unstable_cache(
		async () => {
			const client = getContentfulClient(preview);
			const response = await client.getEntries<ContactInformationSkeleton>({
				content_type: "siteSettings",
				limit: 1,
			});

			const entry = response.items[0];
			return entry
				? mapContactInformationEntryToContactInformation(entry)
				: null;
		},
		["contact", "information"],
		{
			tags: [CACHE_CONFIG.SETTINGS.TAG, CACHE_CONFIG.ALL.TAG],
			revalidate: CACHE_CONFIG.SETTINGS.DURATION,
		},
	)();
};
