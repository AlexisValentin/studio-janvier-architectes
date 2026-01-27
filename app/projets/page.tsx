import type { Metadata } from "next";

import ProjectGrid from "@/components/domains/projects/ProjectGrid";
import { fetchProjectsForGrid } from "@/utils/cms/api";
import type { ProjectGridItem } from "@/utils/cms/types";

export const metadata: Metadata = {
	title: "Projets - Studio Janvier Architectes",
	description: "Portfolio de nos projets d'architecture contemporaine.",
	openGraph: {
		title: "Projets - Studio Janvier Architectes",
		description: "Portfolio de nos projets d'architecture contemporaine.",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Projets - Studio Janvier Architectes",
		description: "Portfolio de nos projets d'architecture contemporaine.",
	},
};

const ProjetsPage = async () => {
	let projects: ProjectGridItem[] = [];
	let error = null;

	try {
		projects = await fetchProjectsForGrid();
	} catch (err) {
		error = err instanceof Error ? err.message : "Une erreur est survenue";
		console.error("[ProjetsPage] Error fetching projects:", err);
	}

	return (
		<main className="min-h-screen bg-white pt-20 md:pt-24">
			<section className="container-rf py-12 md:py-16">
				{error ? (
					<div className="flex flex-col items-center justify-center py-16 text-center">
						<p className="text-lg font-light text-red-600 mb-2">
							Erreur de chargement
						</p>
						<p className="text-sm font-light text-gray-500">{error}</p>
					</div>
				) : (
					<ProjectGrid projects={projects} />
				)}
			</section>
		</main>
	);
};

export default ProjetsPage;
