import contentful from "contentful";

// Vérification des variables d'environnement
const {
	CONTENTFUL_SPACE_ID,
	CONTENTFUL_ACCESS_TOKEN,
	CONTENTFUL_PREVIEW_TOKEN,
	CONTENTFUL_ENVIRONMENT = "master",
} = import.meta.env;

if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
	throw new Error(
		"Les variables d'environnement Contentful sont manquantes. Veuillez configurer CONTENTFUL_SPACE_ID et CONTENTFUL_ACCESS_TOKEN dans votre fichier .env",
	);
}

// Client pour le contenu publié (production)
export const contentfulClient = contentful.createClient({
	space: CONTENTFUL_SPACE_ID,
	accessToken: CONTENTFUL_ACCESS_TOKEN,
	environment: CONTENTFUL_ENVIRONMENT,
});

// Client pour le contenu en preview (mode développement)
export const previewClient = contentful.createClient({
	space: CONTENTFUL_SPACE_ID,
	accessToken: CONTENTFUL_PREVIEW_TOKEN || CONTENTFUL_ACCESS_TOKEN,
	environment: CONTENTFUL_ENVIRONMENT,
	host: "preview.contentful.com",
});

// Fonction helper pour obtenir le bon client selon l'environnement
export const getContentfulClient = (preview = false) => {
	return preview ? previewClient : contentfulClient;
};
