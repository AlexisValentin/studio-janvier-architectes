import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
	title: "Index - Studio Janvier Architectes",
	description: "Liste alphabétique de tous nos projets.",
};

// Données de démonstration - triées alphabétiquement
const demoProjects = [
	{
		title: "Appartement Haussmannien",
		slug: "appartement-haussmannien",
		number: "007",
	},
	{ title: "Fauconnerie", slug: "fauconnerie", number: "011" },
	{
		title: "Loft Industriel",
		slug: "loft-industriel",
		number: "006",
		status: "wip",
	},
	{ title: "Marcadet", slug: "marcadet", number: "009" },
	{ title: "Sadi Carnot", slug: "sadi-carnot", number: "010", status: "wip" },
	{ title: "Villa Contemporaine", slug: "villa-contemporaine", number: "008" },
].sort((a, b) => a.title.localeCompare(b.title));

export default function IndexProjetsPage() {
	return (
		<>
			<Navigation />
			<main className="min-h-screen bg-white pt-24">
				<section className="container-custom py-16">
					<div className="max-w-4xl mx-auto">
						<h1 className="text-4xl mb-12 text-gray-900">Index des projets</h1>

						<ul className="space-y-4">
							{demoProjects.map((project) => (
								<li key={project.slug} className="border-b border-gray-200 pb-4">
									<Link
										href={`/projets/${project.slug}`}
										className="flex items-baseline justify-between group hover:opacity-60 transition-opacity"
									>
										<span className="text-lg font-light">
											{project.title}
											{project.status === "wip" && (
												<span className="ml-2 text-xs opacity-50">wip</span>
											)}
										</span>
										<span className="text-sm opacity-60 ml-4">
											{project.number}
										</span>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</section>
			</main>
		</>
	);
}
