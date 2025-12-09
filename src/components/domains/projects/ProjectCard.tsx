import Image from "next/image";
import Link from "next/link";

type ProjectStatus = "completed" | "construction" | "studies" | "feasibility";

interface ProjectCardProps {
	slug: string;
	number: string;
	title: string;
	imageUrl?: string;
	status?: ProjectStatus;
}

const STATUS_LABELS: Record<ProjectStatus, string> = {
	completed: "",
	construction: "chantier",
	studies: "études",
	feasibility: "faisabilité",
};

const ProjectCard: React.FC<ProjectCardProps> = ({
	slug,
	number,
	title,
	imageUrl,
	status,
}) => {
	const statusLabel =
		status && status !== "completed" ? STATUS_LABELS[status] : null;

	return (
		<Link href={`/projets/${slug}`} className="group block link-hover">
			<article>
				{imageUrl && (
					<div className="aspect-4/3 overflow-hidden bg-gray-100 mb-3">
						<Image
							src={imageUrl}
							alt={title}
							width={800}
							height={600}
							className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
				)}
				<div className="flex items-baseline gap-2">
					<span className="text-sm font-light tracking-wider">{number}</span>
					<h3 className="text-sm font-light">{title}</h3>
					{statusLabel && (
						<span className="text-xs font-light opacity-50">
							({statusLabel})
						</span>
					)}
				</div>
			</article>
		</Link>
	);
};

export default ProjectCard;
