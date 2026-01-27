import ImageGallery from "@/components/generics/ImageGallery";
import ProjectMetadata from "@/components/generics/ProjectMetadata";
import ProjectNavigation from "@/components/generics/ProjectNavigation";

interface ProjectLink {
	slug: string;
	title: string;
	number: string;
}

interface ProjectDetailProps {
	number: string;
	title: string;
	location?: string;
	surface?: string;
	year: string;
	client?: string;
	budget?: string;
	photographer?: string;
	description?: string;
	images: string[];
	previousProject?: ProjectLink;
	nextProject?: ProjectLink;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
	number,
	title,
	location,
	surface,
	year,
	client,
	budget,
	photographer,
	description,
	images,
	previousProject,
	nextProject,
}) => {
	const metadataItems = [
		{ label: "Lieu", value: location ?? "-" },
		{ label: "Surface", value: surface ? `${surface} m²` : "- m²" },
		{ label: "Année", value: year },
		{ label: "Client", value: client ?? "Privé" },
		{ label: "Budget", value: budget ? `${budget} €` : "- €" },
	];

	const galleryImages = images.map((src, index) => ({
		src,
		alt: `${title} - Image ${index + 1}`,
	}));

	return (
		<article>
			<header className="mb-8 md:mb-12">
				<div className="flex items-baseline gap-3 mb-6">
					<span className="text-2xl font-light tracking-wider md:text-3xl">
						{number}
					</span>
					<h1 className="text-2xl font-light md:text-3xl">{title}</h1>
				</div>
				<ProjectMetadata items={metadataItems} />
				{description && (
					<p className="max-w-5xl text-base font-light leading-relaxed text-gray-700 mt-8">
						{description}
					</p>
				)}
			</header>
			<ImageGallery images={galleryImages} />
			{photographer && (
				<p className="text-sm font-light opacity-50 mb-8">
					Photographies : {photographer}
				</p>
			)}
			<ProjectNavigation
				previousProject={previousProject}
				nextProject={nextProject}
			/>
		</article>
	);
};

export default ProjectDetail;
