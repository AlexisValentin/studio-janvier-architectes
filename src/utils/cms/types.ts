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
}

export interface HeroImageSkeleton extends EntrySkeletonType {
	contentTypeId: "heroImage";
	fields: HeroImageFields;
}

export type HeroImageEntry = Entry<HeroImageSkeleton, undefined, string>;

export interface ContactInformationFields {
	contactName: string;
	contactAddress: string[];
	contactEmail: string;
	contactPhone?: string;
	socialInstagram?: string;
	socialTikTok?: string;
	footerCopyright?: string;
}

export interface ContactInformationSkeleton extends EntrySkeletonType {
	contentTypeId: "siteSettings";
	fields: ContactInformationFields;
}

export type ContactInformationEntry = Entry<
	ContactInformationSkeleton,
	undefined,
	string
>;

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
}

export interface HeroImage {
	imageUrl: string;
	altText: string;
}

export interface ContactInformation {
	name: string;
	address: string[];
	email: string;
	phone?: string;
	socials: {
		instagram?: string;
		tiktok?: string;
	};
	footerCopyright?: string;
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
