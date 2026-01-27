import ProjectListItem from "./ProjectListItem";

interface Project {
	slug: string;
	number: string;
	title: string;
	location?: string;
	surface?: string;
	year: string;
	client?: string;
	budget?: string;
	photographer?: string;
}

interface ProjectListProps {
	projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => (
	<div>
		{projects.map((project, index) => (
			<div
				key={project.slug}
				className="animate-fade-in-up"
				style={{ animationDelay: `${index * 0.03}s` }}
			>
				<ProjectListItem {...project} />
			</div>
		))}
	</div>
);

export default ProjectList;
