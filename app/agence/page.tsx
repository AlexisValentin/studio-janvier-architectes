import type { Metadata } from "next";
import Image from "next/image";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
	title: "Agence - Studio Janvier Architectes",
	description: "À propos de notre cabinet d'architecture contemporaine.",
};

export default function AgencePage() {
	return (
		<>
			<Navigation />
			<main className="min-h-screen bg-white pt-24">
				<section className="container-custom py-16">
					<div className="max-w-3xl mx-auto">
						{/* Image de l'agence */}
						<div className="mb-16">
							<Image
								src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
								alt="Studio Janvier Architectes"
								width={1200}
								height={675}
								className="w-full aspect-[16/9] object-cover"
							/>
						</div>

						{/* Description de l'agence */}
						<div className="space-y-8 text-gray-700 font-light leading-relaxed">
							<div>
								<h1 className="text-4xl mb-8 text-gray-900">L'Agence</h1>
								<p className="text-lg mb-6">
									Studio Janvier Architectes est un cabinet d'architecture
									contemporaine fondé en 2010, spécialisé dans la conception de
									projets résidentiels et commerciaux d'exception.
								</p>
								<p className="text-lg mb-6">
									Notre approche se caractérise par une attention particulière
									portée à la lumière, aux matériaux et à l'intégration
									harmonieuse des espaces dans leur environnement.
								</p>
								<p className="text-lg">
									Chaque projet est conçu comme une réponse unique aux besoins de
									nos clients, en alliant esthétique contemporaine et
									fonctionnalité.
								</p>
							</div>

							<div className="pt-8 border-t border-gray-200">
								<h2 className="text-2xl mb-6 text-gray-900">Contact</h2>
								<div className="space-y-2">
									<p>Studio Janvier Architectes</p>
									<p>123 Rue de l'Architecture</p>
									<p>75001 Paris, France</p>
									<p className="pt-4">
										<a
											href="mailto:contact@studio-janvier.fr"
											className="link-minimal underline"
										>
											contact@studio-janvier.fr
										</a>
									</p>
									<p>
										<a
											href="tel:+33123456789"
											className="link-minimal underline"
										>
											+33 1 23 45 67 89
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
