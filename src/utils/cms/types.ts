import type { Document } from "@contentful/rich-text-types";
import type { Asset, Entry, EntrySkeletonType } from "contentful";

export interface ContentfulAsset {
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
	sys: {
		id: string;
		type: "Asset";
	};
}

export type ProjectStatus =
	| "completed"
	| "construction"
	| "studies"
	| "feasibility";

export interface ProjectFields {
	title: string;
	slug: string;
	number: string;
	location?: string;
	surface?: string;
	year?: number;
	program?: string;
	client?: string;
	budget?: string;
	status?: ProjectStatus;
	team?: string[];
	contractor?: string;
	photographer?: string;
	description?: string;
	content?: Document;
	mainImage?: Asset;
	gallery?: Asset[];
	featured?: boolean;
	publishDate?: string;
	category?: string[];
}

export interface ProjectSkeleton extends EntrySkeletonType {
	contentTypeId: "project";
	fields: ProjectFields;
}

export type ProjectEntry = Entry<ProjectSkeleton, undefined, string>;

export interface AboutPageFields {
	title: string;
	slug: string;
	heroImage?: Asset;
	introText?: string;
	description?: Document;
	parcoursTitle?: string;
	parcoursContent?: Document;
	awardsTitle?: string;
	awards?: string[];
	publicationsTitle?: string;
	publications?: string[];
	address?: string[];
	email?: string;
	phone?: string;
}

export interface AboutPageSkeleton extends EntrySkeletonType {
	contentTypeId: "aboutPage";
	fields: AboutPageFields;
}

export type AboutPageEntry = Entry<AboutPageSkeleton, undefined, string>;

export interface HeroImageFields {
	title: string;
	image: Asset;
	altText: string;
	linkUrl?: string;
	priority: number;
	isActive: boolean;
}

export interface HeroImageSkeleton extends EntrySkeletonType {
	contentTypeId: "heroImage";
	fields: HeroImageFields;
}

export type HeroImageEntry = Entry<HeroImageSkeleton, undefined, string>;

export interface SiteSettingsFields {
	title: string;
	siteName: string;
	siteDescription: string;
	contactName: string;
	contactAddress: string[];
	contactEmail: string;
	contactPhone?: string;
	socialInstagram?: string;
	socialLinkedin?: string;
	socialPinterest?: string;
	metaKeywords?: string[];
	footerCopyright?: string;
}

export interface SiteSettingsSkeleton extends EntrySkeletonType {
	contentTypeId: "siteSettings";
	fields: SiteSettingsFields;
}

export type SiteSettingsEntry = Entry<SiteSettingsSkeleton, undefined, string>;

export interface Project {
	slug: string;
	number: string;
	title: string;
	location?: string;
	surface?: string;
	year: string;
	program?: string;
	client?: string;
	budget?: string;
	status: ProjectStatus;
	team?: string[];
	contractor?: string;
	photographer?: string;
	description?: string;
	content?: Document;
	images: string[];
	mainImageUrl?: string;
	featured?: boolean;
}

export interface ProjectGridItem {
	slug: string;
	number: string;
	title: string;
	imageUrl: string;
	status: ProjectStatus;
}

export interface AboutPageContent {
	heroImageUrl?: string;
	introText?: string;
	description?: Document;
	parcours: {
		title: string;
		content: Document | null;
	};
	awards: {
		title: string;
		items: string[];
	};
	publications: {
		title: string;
		items: string[];
	};
	contact: {
		address: string[];
		email: string;
		phone?: string;
	};
}

export interface HeroImage {
	imageUrl: string;
	altText: string;
	linkUrl?: string;
}

export interface SiteSettings {
	siteName: string;
	siteDescription: string;
	contact: {
		name: string;
		address: string[];
		email: string;
		phone?: string;
	};
	socials: {
		instagram?: string;
		linkedin?: string;
		pinterest?: string;
	};
	metadata: {
		keywords: string[];
		copyright?: string;
	};
}

export interface ContentfulImage {
	url: string;
	alt: string;
	width: number;
	height: number;
}

export interface FetchOptions {
	preview?: boolean;
	limit?: number;
	skip?: number;
}
