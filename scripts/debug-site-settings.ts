import "dotenv/config";
import { createClient } from "contentful";

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID!;
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN!;
const ENVIRONMENT_ID = process.env.CONTENTFUL_ENVIRONMENT || "master";

const client = createClient({
	space: SPACE_ID,
	accessToken: ACCESS_TOKEN,
	environment: ENVIRONMENT_ID,
});

const debug = async () => {
	console.log("Fetching siteSettings entries...\n");

	const response = await client.getEntries({
		content_type: "siteSettings",
		limit: 10,
	});

	console.log(`Found ${response.items.length} entries:\n`);

	for (const item of response.items) {
		console.log("Entry ID:", item.sys.id);
		console.log("Fields:", JSON.stringify(item.fields, null, 2));
		console.log("---");
	}
};

debug().catch(console.error);
