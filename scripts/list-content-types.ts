import "dotenv/config";
import contentful from "contentful-management";

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const MANAGEMENT_TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
const ENVIRONMENT_ID = process.env.CONTENTFUL_ENVIRONMENT || "master";

if (!SPACE_ID || !MANAGEMENT_TOKEN) {
	console.error("Missing required environment variables");
	process.exit(1);
}

const client = contentful.createClient({
	accessToken: MANAGEMENT_TOKEN,
});

const listContentTypes = async () => {
	const space = await client.getSpace(SPACE_ID);
	const environment = await space.getEnvironment(ENVIRONMENT_ID);
	const contentTypes = await environment.getContentTypes();

	console.log("Content Types in your Contentful space:\n");
	for (const ct of contentTypes.items) {
		console.log(`- ID: "${ct.sys.id}" | Name: "${ct.name}"`);
	}
};

listContentTypes();
