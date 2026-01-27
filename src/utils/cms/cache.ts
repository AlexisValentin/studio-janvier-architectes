import { revalidateTag } from "next/cache";

export const CACHE_TAGS = {
	ALL: "all",
	PROJECTS: "projects",
	ABOUT: "about",
	SETTINGS: "settings",
	HERO: "hero",
} as const;

export const CACHE_DURATIONS = {
	PROJECTS: 86400,
	ABOUT: 604800,
	SETTINGS: 604800,
	HERO: 86400,
} as const;

export const CACHE_CONFIG = {
	PROJECTS: {
		TAG: CACHE_TAGS.PROJECTS,
		DURATION: CACHE_DURATIONS.PROJECTS,
	},
	ABOUT: {
		TAG: CACHE_TAGS.ABOUT,
		DURATION: CACHE_DURATIONS.ABOUT,
	},
	SETTINGS: {
		TAG: CACHE_TAGS.SETTINGS,
		DURATION: CACHE_DURATIONS.SETTINGS,
	},
	HERO: {
		TAG: CACHE_TAGS.HERO,
		DURATION: CACHE_DURATIONS.HERO,
	},
	ALL: {
		TAG: CACHE_TAGS.ALL,
		DURATION: 86400,
	},
} as const;

export type CacheType = keyof typeof CACHE_TAGS;

export const revalidateAllCache = () => {
	revalidateTag(CACHE_TAGS.ALL, "max");
	return { success: true, message: "Global cache has been revalidated!" };
};

export const revalidateProjectsCache = () => {
	revalidateTag(CACHE_TAGS.PROJECTS, "max");
	return { success: true, message: "Projects cache has been revalidated!" };
};

export const revalidateAboutCache = () => {
	revalidateTag(CACHE_TAGS.ABOUT, "max");
	return { success: true, message: "About cache has been revalidated!" };
};

export const revalidateSettingsCache = () => {
	revalidateTag(CACHE_TAGS.SETTINGS, "max");
	return { success: true, message: "Settings cache has been revalidated!" };
};

export const revalidateHeroCache = () => {
	revalidateTag(CACHE_TAGS.HERO, "max");
	return { success: true, message: "Hero cache has been revalidated!" };
};
