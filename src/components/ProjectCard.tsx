import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
	title: string;
	slug: string;
	imageUrl?: string;
	number?: string;
	status?: "wip" | "completed";
}

/**
 * Composant de carte minimaliste pour afficher un projet dans une grille
 */
export function ProjectCard({
	title,
	slug,
	imageUrl,
	number,
	status,
}: ProjectCardProps) {
	return (
		<Link
			href={`/projets/${slug}`}
			className="group block relative overflow-hidden transition-opacity hover:opacity-60"
			style={{ marginBottom: "11px" }}
		>
			{imageUrl && (
				<div className="aspect-square overflow-hidden bg-gray-100">
					<Image
						src={imageUrl}
						alt={title}
						width={800}
						height={800}
						className="h-full w-full object-cover"
					/>
				</div>
			)}
			<div className="mt-3">
				<h3 className="text-sm font-light tracking-wide">
					{number && <span className="opacity-60">{number} </span>}
					{title}
					{status === "wip" && <span className="ml-2 text-xs opacity-50">wip</span>}
				</h3>
			</div>
		</Link>
	);
}
