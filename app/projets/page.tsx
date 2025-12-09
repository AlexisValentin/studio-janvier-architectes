import type { Metadata } from "next";

import ProjectGrid from "@/components/domains/projects/ProjectGrid";
import { getProjectsForGrid } from "@/data/projects.mock";

export const metadata: Metadata = {
	title: "Projets - Studio Janvier Architectes",
	description: "Portfolio de nos projets d'architecture contemporaine.",
};

const ProjetsPage = () => {
	const projects = getProjectsForGrid();

	return (
		<main className="min-h-screen bg-white pt-20 md:pt-24">
			<section className="container-rf py-12 md:py-16">
				<ProjectGrid projects={projects} />
			</section>
		</main>
	);
};

export default ProjetsPage;
