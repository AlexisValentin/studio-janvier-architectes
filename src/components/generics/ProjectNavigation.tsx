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

	return (
		<nav
			className="flex justify-between border-t border-gray-200 pt-8 ${className}"
			aria-label="Navigation entre les projets"
		>
			{previousProject && (
				<Link
					href={`/projets/${previousProject.slug}`}
					className="group link-hover"
				>
					<span className="block text-xs font-light tracking-wider opacity-50">
						PRÉCÉDENT
					</span>
					<span className="block text-sm font-light mt-1">
						{previousProject.number} {previousProject.title}
					</span>
				</Link>
			)}

			{nextProject && (
				<Link
					href={`/projets/${nextProject.slug}`}
					className="group link-hover text-right"
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
