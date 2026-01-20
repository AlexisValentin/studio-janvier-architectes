import "dotenv/config";
import contentful from "contentful-management";
import * as fs from "node:fs";
import * as path from "node:path";

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const MANAGEMENT_TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
const ENVIRONMENT_ID = process.env.CONTENTFUL_ENVIRONMENT || "master";

if (!SPACE_ID || !MANAGEMENT_TOKEN) {
	console.error(
		"Missing required environment variables: CONTENTFUL_SPACE_ID, CONTENTFUL_MANAGEMENT_TOKEN",
	);
	process.exit(1);
}

const client = contentful.createClient({
	accessToken: MANAGEMENT_TOKEN,
});

const CONTENT_TYPE_ID = "siteSettings";


const createContentType = async (
	environment: contentful.Environment,
): Promise<contentful.ContentType> => {
	const modelPath = path.join(
		process.cwd(),
		"contentful-models",
		"site-settings.json",
	);
	const modelDefinition = JSON.parse(fs.readFileSync(modelPath, "utf-8"));

	console.log(`Creating content type: ${CONTENT_TYPE_ID}...`);

	try {
		const existingContentType =
			await environment.getContentType(CONTENT_TYPE_ID);
		console.log(`Content type ${CONTENT_TYPE_ID} already exists, updating...`);

		existingContentType.name = modelDefinition.name;
		existingContentType.description = modelDefinition.description;
		existingContentType.displayField = modelDefinition.displayField;
		existingContentType.fields = modelDefinition.fields;

		const updatedContentType = await existingContentType.update();
		await updatedContentType.publish();
		console.log(`Content type ${CONTENT_TYPE_ID} updated and published.`);
		return updatedContentType;
	} catch {
		const contentType = await environment.createContentTypeWithId(
			CONTENT_TYPE_ID,
			{
				name: modelDefinition.name,
				description: modelDefinition.description,
				displayField: modelDefinition.displayField,
				fields: modelDefinition.fields,
			},
		);

		await contentType.publish();
		console.log(`Content type ${CONTENT_TYPE_ID} created and published.`);
		return contentType;
	}
};


const seed = async (): Promise<void> => {
	try {
		console.log("Starting Contentful seed for Site Settings...\n");

		const space = await client.getSpace(SPACE_ID);
		const environment = await space.getEnvironment(ENVIRONMENT_ID);

		await createContentType(environment);

		console.log("\nSeed completed successfully!");
		console.log(
			"Note: Please create your Site Settings entry manually in Contentful.",
		);
	} catch (error) {
		console.error("Seed failed:", error);
		process.exit(1);
	}
};

seed();
