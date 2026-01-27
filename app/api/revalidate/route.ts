import { type NextRequest, NextResponse } from "next/server";
import {
	revalidateAboutCache,
	revalidateAllCache,
	revalidateHeroCache,
	revalidateProjectsCache,
	revalidateSettingsCache,
} from "../../../src/utils/cms/cache";

const revalidateCache = (request: NextRequest) => {
	try {
		const searchParams = request.nextUrl.searchParams;
		const secret = searchParams.get("secret");
		const type = searchParams.get("type");

		if (secret !== process.env.REVALIDATION_SECRET) {
			return NextResponse.json({ message: "Invalid token." }, { status: 403 });
		}

		let result: { success: boolean; message: string };

		switch (type) {
			case "projects":
				result = revalidateProjectsCache();
				break;
			case "about":
				result = revalidateAboutCache();
				break;
			case "settings":
				result = revalidateSettingsCache();
				break;
			case "hero":
				result = revalidateHeroCache();
				break;
			default:
				result = revalidateAllCache();
				break;
		}

		return NextResponse.json(result, { status: 200 });
	} catch (error) {
		console.error("Something went wrong during cache invalidation => ", error);
		return NextResponse.json(
			{ message: "Something went wrong during cache invalidation" },
			{ status: 500 },
		);
	}
};

export const GET = (request: NextRequest) => revalidateCache(request);
export const POST = (request: NextRequest) => revalidateCache(request);
