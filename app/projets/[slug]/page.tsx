import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { FC } from "react";

import ProjectDetail from "@/components/domains/projects/ProjectDetail";
import {
	fetchAdjacentProjects,
	fetchProjectBySlug,
	fetchProjectSlugs,
} from "@/utils/cms/api";

interface ProjectPageProps {
	params: Promise<{ slug: string }>;
}

export const generateStaticParams = async () => {
	const slugs = await fetchProjectSlugs();
	return slugs.map((slug) => ({
		slug,
	}));
};

export const generateMetadata = async ({
	params,
}: ProjectPageProps): Promise<Metadata> => {
	const { slug } = await params;
	const project = await fetchProjectBySlug(slug);

	if (!project) {
		return {
			title: "Projet non trouvé - Studio Janvier Architectes",
		};
	}

	const title = `${project.number} ${project.title} - Studio Janvier Architectes`;
	const description =
		project.description ||
		`Découvrez le projet ${project.title} par Studio Janvier Architectes.`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: "website",
			images: project.mainImageUrl
				? [
						{
							url: project.mainImageUrl,
							width: 1200,
							height: 630,
							alt: project.title,
						},
					]
				: undefined,
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: project.mainImageUrl ? [project.mainImageUrl] : undefined,
		},
	};
};

const ProjectPage: FC<ProjectPageProps> = async ({ params }) => {
	const { slug } = await params;
	const project = await fetchProjectBySlug(slug);

	if (!project) {
		notFound();
	}

	const { previous, next } = await fetchAdjacentProjects(slug);

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

export default ProjectPage;
