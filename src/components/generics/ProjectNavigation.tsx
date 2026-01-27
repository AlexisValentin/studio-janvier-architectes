"use client";

import Link from "next/link";

interface ProjectLink {
	slug: string;
	title: string;
	number: string;
}

interface ProjectNavigationProps {
	previousProject?: ProjectLink;
	nextProject?: ProjectLink;
}

const ProjectNavigation: React.FC<ProjectNavigationProps> = ({
	previousProject,
	nextProject,
}) => {
	if (!previousProject && !nextProject) return null;

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<nav
			className="flex justify-between border-t border-gray-200 pt-8"
			aria-label="Navigation entre les projets"
		>
			{previousProject && (
				<Link
					href={`/projets/${previousProject.slug}`}
					className="group link-hover"
					onClick={scrollToTop}
				>
					<span className="block text-xs font-light tracking-wider opacity-50">
						Précédent
					</span>
					<span className="block text-sm font-light mt-1">
						{previousProject.number} {previousProject.title}
					</span>
				</Link>
			)}
			{nextProject && (
				<Link
					href={`/projets/${nextProject.slug}`}
					className="group link-hover text-right ml-auto"
					onClick={scrollToTop}
				>
					<span className="block text-xs font-light tracking-wider opacity-50 uppercase">
						Suivant
					</span>
					<span className="block text-sm font-light mt-1">
						{nextProject.number} {nextProject.title}
					</span>
				</Link>
			)}
		</nav>
	);
};

export default ProjectNavigation;
