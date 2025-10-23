import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
	title: "Projets - Studio Janvier Architectes",
	description: "Portfolio de nos projets d'architecture contemporaine.",
};

// Données de démonstration - style RF Architectures
const demoProjects = [
	{
		title: "Fauconnerie",
		slug: "fauconnerie",
		imageUrl:
			"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
		number: "011",
	},
	{
		title: "Sadi Carnot",
		slug: "sadi-carnot",
		imageUrl:
			"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
		number: "010",
		status: "wip" as const,
	},
	{
		title: "Marcadet",
		slug: "marcadet",
		imageUrl:
			"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
		number: "009",
	},
	{
		title: "Villa Contemporaine",
		slug: "villa-contemporaine",
		imageUrl:
			"https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
		number: "008",
	},
	{
		title: "Appartement Haussmannien",
		slug: "appartement-haussmannien",
		imageUrl:
			"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
		number: "007",
	},
	{
		title: "Loft Industriel",
		slug: "loft-industriel",
		imageUrl:
			"https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80",
		number: "006",
		status: "wip" as const,
	},
];

export default function ProjetsPage() {
	return (
		<>
			<Navigation />
			<main className="min-h-screen bg-white pt-24">
				<section className="container-custom py-16">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-8">
						{demoProjects.map((project) => (
							<ProjectCard key={project.slug} {...project} />
						))}
					</div>
				</section>
			</main>
		</>
	);
}
