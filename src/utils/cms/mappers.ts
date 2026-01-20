"use server";

import type { Asset } from "contentful";
import type {
	AboutPageContent,
	AboutPageEntry,
	ContentfulImage,
	HeroImage,
	HeroImageEntry,
	Project,
	ProjectEntry,
	ProjectGridItem,
	SiteSettings,
	SiteSettingsEntry,
} from "./types";


export const getImageUrl = async (asset: Asset | undefined): Promise<string> => {
	if (!asset?.fields?.file?.url) return "";
	
	const url = asset.fields.file.url;
	const urlString = typeof url === "string" ? url : url.toString();
	
	return urlString.startsWith("//") ? `https:${urlString}` : urlString;
};

export const getImageDimensions = async (asset: Asset | undefined) => {
	const details = asset?.fields?.file?.details;
	const image = details && "image" in details ? details.image : undefined;
	
	return {
		width: image?.width || 0,
		height: image?.height || 0,
	};
};

export const mapAssetToContentfulImage = async (
	asset: Asset | undefined,
): Promise<ContentfulImage | null> => {
	if (!asset) return null;

	const url = await getImageUrl(asset);

	if (!url) return null;

	const { width, height } = await getImageDimensions(asset);

	const title = asset.fields.title;
	const description = asset.fields.description;
	const alt =
		(typeof title === "string" ? title : "") ||
		(typeof description === "string" ? description : "") ||
		"";

	return {
		url,
		alt,
		width,
		height,
	};
};


export const mapProjectEntryToProject = async (entry: ProjectEntry): Promise<Project> => {
	const { fields } = entry;

	const galleryUrls = await Promise.all(
		(fields.gallery ?? []).map(getImageUrl)
	);
	const filteredGalleryUrls = galleryUrls.filter(Boolean);

	const mainImageUrl = await getImageUrl(fields.mainImage);
	const images =
		mainImageUrl && !filteredGalleryUrls.includes(mainImageUrl)
			? [mainImageUrl, ...filteredGalleryUrls]
			: filteredGalleryUrls;

	return {
		slug: fields.slug,
		number: fields.number,
		title: fields.title,
		location: fields.location,
		surface: fields.surface,
		year: fields.year ? String(fields.year) : "",
		program: fields.program,
		client: fields.client,
		budget: fields.budget,
		status: fields.status ?? "completed",
		team: fields.team,
		contractor: fields.contractor,
		photographer: fields.photographer,
		description: fields.description,
		content: fields.content,
		images,
		mainImageUrl,
		featured: fields.featured,
	};
};

export const mapProjectEntryToGridItem = async (
	entry: ProjectEntry,
): Promise<ProjectGridItem> => {
	const { fields } = entry;
	const imageUrl =
		await getImageUrl(fields.mainImage) || await getImageUrl(fields.gallery?.[0]) || "";

	return {
		slug: fields.slug,
		number: fields.number,
		title: fields.title,
		imageUrl,
		status: fields.status ?? "completed",
	};
};

export const mapAboutPageEntryToContent = async (
	entry: AboutPageEntry,
): Promise<AboutPageContent> => {
	const { fields } = entry;

	return {
		heroImageUrl: await getImageUrl(entry.fields.heroImage),
		introText: fields.introText,
		description: fields.description,
		parcours: {
			title: fields.parcoursTitle ?? "Parcours",
			content: fields.parcoursContent ?? null,
		},
		awards: {
			title: fields.awardsTitle ?? "Prix et Publications",
			items: fields.awards ?? [],
		},
		publications: {
			title: fields.publicationsTitle ?? "Publications",
			items: fields.publications ?? [],
		},
		contact: {
			address: fields.address ?? [],
			email: fields.email ?? "",
			phone: fields.phone,
		},
	};
};

export const mapHeroImageEntryToHeroImage = async (
	entry: HeroImageEntry,
): Promise<HeroImage> => {
	const { fields } = entry;

	return {
		imageUrl: await getImageUrl(fields.image),
		altText: fields.altText,
		linkUrl: fields.linkUrl,
	};
};

export const mapSiteSettingsEntryToSettings = async (
	entry: SiteSettingsEntry,
): Promise<SiteSettings> => {
	const { fields } = entry;

	return {
		siteName: fields.siteName,
		siteDescription: fields.siteDescription,
		contact: {
			name: fields.contactName,
			address: fields.contactAddress ?? [],
			email: fields.contactEmail,
			phone: fields.contactPhone,
		},
		socials: {
			instagram: fields.socialInstagram,
			linkedin: fields.socialLinkedin,
			pinterest: fields.socialPinterest,
		},
		metadata: {
			keywords: fields.metaKeywords ?? [],
			copyright: fields.footerCopyright,
		},
	};
};
