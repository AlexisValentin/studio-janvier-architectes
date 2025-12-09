import Link from "next/link";

type ProjectStatus = "completed" | "construction" | "studies" | "feasibility";

interface ProjectListItemProps {
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

const STATUS_LABELS: Record<ProjectStatus, string> = {
	completed: "livré",
	construction: "chantier",
	studies: "études",
	feasibility: "faisabilité",
};

const ProjectListItem: React.FC<ProjectListItemProps> = ({
	slug,
	number,
	title,
	location,
	surface,
	year,
	program,
	client,
	budget,
	status,
	team,
	contractor,
	photographer,
}) => {
	return (
		<Link
			href={`/projets/${slug}`}
			className="block border-b border-gray-200 py-6 link-hover"
		>
			<article>
				<div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
					<span className="text-base font-medium tracking-wider">{number}</span>
					<h3 className="text-base font-light">{title}</h3>
					{location && (
						<span className="text-sm font-light italic opacity-70">
							{location}
						</span>
					)}
				</div>

				<div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-sm font-light opacity-70">
					{surface && <span>{surface}</span>}
					{year && <span>{year}</span>}
					{program && <span>{program}</span>}
					{client && <span>{client}</span>}
					{budget && <span>{budget}</span>}
					{status && <span>{STATUS_LABELS[status]}</span>}
				</div>

				{(team?.length || contractor || photographer) && (
					<div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-sm font-light opacity-50">
						{team && team.length > 0 && <span>Équipe : {team.join(", ")}</span>}
						{contractor && <span>Entreprise : {contractor}</span>}
						{photographer && <span>Photo : {photographer}</span>}
					</div>
				)}
			</article>
		</Link>
	);
};

export default ProjectListItem;
