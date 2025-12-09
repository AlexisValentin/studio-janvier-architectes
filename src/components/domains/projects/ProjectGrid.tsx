import ProjectCard from "./ProjectCard";

type ProjectStatus = "completed" | "construction" | "studies" | "feasibility";

interface Project {
	slug: string;
	number: string;
	title: string;
	imageUrl?: string;
	status?: ProjectStatus;
}

interface ProjectGridProps {
	projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => (
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
)

export default ProjectGrid;
