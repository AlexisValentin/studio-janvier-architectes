import { createClient } from "contentful";

if (!process.env.CONTENTFUL_SPACE_ID) {
	throw new Error("CONTENTFUL_SPACE_ID environment variable is required");
}

if (!process.env.CONTENTFUL_ACCESS_TOKEN) {
	throw new Error("CONTENTFUL_ACCESS_TOKEN environment variable is required");
}

export const contentfulClient = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
	environment: process.env.CONTENTFUL_ENVIRONMENT || "master",
});

export const contentfulPreviewClient = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken:
		process.env.CONTENTFUL_PREVIEW_TOKEN || process.env.CONTENTFUL_ACCESS_TOKEN,
	host: "preview.contentful.com",
	environment: process.env.CONTENTFUL_ENVIRONMENT || "master",
});

export const getContentfulClient = (preview = false) => {
	return preview ? contentfulPreviewClient : contentfulClient;
};
