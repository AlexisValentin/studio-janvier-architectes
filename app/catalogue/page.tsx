import type { Metadata } from "next";

import ProjectList from "@/components/domains/projects/ProjectList";
import { getProjectsForList } from "@/data/projects.mock";

export const metadata: Metadata = {
	title: "Index - Studio Janvier Architectes",
	description: "Index complet de tous nos projets d'architecture.",
};

const Catalogue = () => {
	const projects = getProjectsForList();

	return (
		<main className="min-h-screen bg-white pt-20 md:pt-24">
			<section className="container-rf py-12 md:py-16">
				<ProjectList projects={projects} />
			</section>
		</main>
	);
};

export default Catalogue;
