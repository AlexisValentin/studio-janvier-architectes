import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { FC } from "react";

import ProjectDetail from "@/components/domains/projects/ProjectDetail";
import {
	getAdjacentProjects,
	getProjectBySlug,
	MOCK_PROJECTS,
} from "@/data/projects.mock";

interface ProjectPageProps {
	params: Promise<{ slug: string }>;
}

export const generateStaticParams = () => {
	return MOCK_PROJECTS.map((project) => ({
		slug: project.slug,
	}));
};

export const generateMetadata = async ({
	params,
}: ProjectPageProps): Promise<Metadata> => {
	const { slug } = await params;
	const project = getProjectBySlug(slug);

	if (!project) {
		return {
			title: "Projet non trouvé - Studio Janvier Architectes",
		};
	}

	return {
		title: `${project.number} ${project.title} - Studio Janvier Architectes`,
		description: project.description,
	};
};

const ProjetPage: FC<ProjectPageProps> = async ({ params }) => {
	const { slug } = await params;
	const project = getProjectBySlug(slug);

	if (!project) {
		notFound();
	}

	const { previous, next } = getAdjacentProjects(slug);

	const previousProject = previous
		? { slug: previous.slug, title: previous.title, number: previous.number }
		: undefined;

	const nextProject = next
		? { slug: next.slug, title: next.title, number: next.number }
		: undefined;

	return (
		<main className="min-h-screen bg-white pt-20 md:pt-24">
			<div className="container-rf py-12 md:py-16">
				<ProjectDetail
					{...project}
					previousProject={previousProject}
					nextProject={nextProject}
				/>
			</div>
		</main>
	);
};

export default ProjetPage;
