import Link from "next/link";

interface ProjectListItemProps {
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

const ProjectListItem: React.FC<ProjectListItemProps> = ({
	slug,
	number,
	title,
	location,
	surface,
	year,
	client,
	budget,
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
					{surface && <span>{surface} m²</span>}
					{year && <span>{year}</span>}
					{client && <span>{client}</span>}
					{budget && <span>{budget} €</span>}
				</div>

				{photographer && (
					<div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-sm font-light opacity-50">
						<span>Photos : {photographer}</span>
					</div>
				)}
			</article>
		</Link>
	);
};

export default ProjectListItem;
