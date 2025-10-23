import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";

interface Project {
	title: string;
	slug: string;
	number: string;
	year: string;
	location: string;
	description: string;
	images: string[];
}

const demoProjectsData: Project[] = [
	{
		title: "Fauconnerie",
		slug: "fauconnerie",
		number: "011",
		year: "2024",
		location: "Paris",
		description:
			"Projet de rénovation d'un appartement situé dans le quartier de la Fauconnerie. Une attention particulière a été portée à la lumière naturelle et aux espaces de vie.",
		images: [
			"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
			"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
			"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80",
		],
	},
	{
		title: "Sadi Carnot",
		slug: "sadi-carnot",
		number: "010",
		year: "2023",
		location: "Lyon",
		description:
			"Rénovation d'un immeuble historique dans le quartier de Sadi Carnot. Le projet allie respect du patrimoine et modernité.",
		images: [
			"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
			"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
		],
	},
	{
		title: "Marcadet",
		slug: "marcadet",
		number: "009",
		year: "2024",
		location: "Paris",
		description:
			"Création d'espaces de vie ouverts dans un ancien atelier du quartier Marcadet.",
		images: [
			"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80",
			"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
		],
	},
	{
		title: "Villa Contemporaine",
		slug: "villa-contemporaine",
		number: "008",
		year: "2023",
		location: "Bordeaux",
		description:
			"Villa contemporaine de 300m² intégrant des solutions écologiques et des matériaux durables.",
		images: [
			"https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80",
			"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80",
		],
	},
	{
		title: "Appartement Haussmannien",
		slug: "appartement-haussmannien",
		number: "007",
		year: "2022",
		location: "Paris",
		description:
			"Rénovation complète d'un appartement haussmannien préservant les éléments d'origine.",
		images: [
			"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80",
			"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
		],
	},
	{
		title: "Loft Industriel",
		slug: "loft-industriel",
		number: "006",
		year: "2024",
		location: "Marseille",
		description:
			"Transformation d'un ancien entrepôt industriel en loft lumineux et spacieux.",
		images: [
			"https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1600&q=80",
			"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80",
		],
	},
];

export async function generateStaticParams() {
	return demoProjectsData.map((project) => ({
		slug: project.slug,
	}));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const project = demoProjectsData.find((p) => p.slug === slug);

	if (!project) {
		return {
			title: "Projet non trouvé",
		};
	}

	return {
		title: `${project.title} - Studio Janvier Architectes`,
		description: project.description,
	};
}

export default async function ProjetPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const project = demoProjectsData.find((p) => p.slug === slug);

	if (!project) {
		return <div>Projet non trouvé</div>;
	}

	return (
		<>
			<Navigation />
			<main className="min-h-screen bg-white pt-24">
				<article className="container-custom py-16">
					{/* En-tête du projet */}
					<header className="mb-16 max-w-3xl">
						<h1 className="text-4xl md:text-5xl mb-6 text-gray-900">
							<span className="opacity-60">{project.number}</span>{" "}
							{project.title}
						</h1>

						<div className="flex gap-6 text-sm font-light text-gray-600 mb-8">
							{project.location && <span>{project.location}</span>}
							{project.year && <span>{project.year}</span>}
						</div>

						<p className="text-lg font-light leading-relaxed text-gray-700">
							{project.description}
						</p>
					</header>

					{/* Galerie d'images */}
					<div className="space-y-16">
						{project.images.map((image, index) => (
							<div key={index} className="w-full">
								<Image
									src={image}
									alt={`${project.title} - Image ${index + 1}`}
									width={1600}
									height={900}
									className="w-full h-auto"
									priority={index === 0}
								/>
							</div>
						))}
					</div>

					{/* Navigation projet précédent/suivant */}
					<nav className="mt-20 pt-12 border-t border-gray-200">
						<div className="flex justify-between items-center">
							<Link
								href="/projets"
								className="text-sm font-light tracking-wider hover:opacity-60 transition-opacity"
							>
								← RETOUR AUX PROJETS
							</Link>
						</div>
					</nav>
				</article>
			</main>
		</>
	);
}
