import ProjectListItem from "./ProjectListItem";

type ProjectStatus = "completed" | "construction" | "studies" | "feasibility";

interface Project {
	slug: string;
	number: string;
	title: string;
	location?: string;
	surface?: string;
	year: string;
	program?: string;
	client?: string;
	budget?: string;
	status?: ProjectStatus;
	team?: string[];
	contractor?: string;
	photographer?: string;
}

interface ProjectListProps {
	projects: Project[];
	className?: string;
}

const ProjectList: React.FC<ProjectListProps> = ({
	projects,
	className = "",
}) => {
	return (
		<div className={className}>
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
};

export default ProjectList;
