import ProjectCard from "./ProjectCard";

interface Project {
	slug: string;
	number: string;
	title: string;
	imageUrl?: string;
}

interface ProjectGridProps {
	projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
	if (projects.length === 0) {
		return (
			<div className="flex flex-col items-center justify-center py-16 text-center">
				<p className="text-lg font-light text-gray-500 mb-2">
					Aucun projet disponible pour le moment
				</p>
				<p className="text-sm font-light text-gray-400">
					Nos projets seront bientôt disponibles.
				</p>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
			{projects.map((project, index) => (
				<div
					key={project.slug}
					className="animate-fade-in-up"
					style={{ animationDelay: `${index * 0.05}s` }}
				>
					<ProjectCard {...project} />
				</div>
			))}
		</div>
	);
};

export default ProjectGrid;
