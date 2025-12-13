import type { Metadata } from "next";
import Image from "next/image";

import AgencyAccordion from "@/components/domains/agency/AgencyAccordion";
import AgencySection from "@/components/domains/agency/AgencySection";

export const metadata: Metadata = {
	title: "Agence - Studio Janvier Architectes",
	description: "À propos de notre cabinet d'architecture contemporaine.",
};

const ACCORDION_SECTIONS = [
	{
		id: "parcours",
		title: "Parcours",
		content: (
			<div className="space-y-4">
				<p>
					Studio Janvier Architectes est fondé en 2010 par Jean Janvier, diplômé
					de l'ENSA Paris-Belleville avec mention.
				</p>
				<p>
					Après plusieurs années d'expérience au sein d'agences renommées telles
					que Studio Muoto et Lacaton & Vassal, Jean Janvier développe une
					approche singulière de l'architecture, alliant rigueur conceptuelle et
					pragmatisme technique.
				</p>
				<p>
					L'agence intervient sur des projets de différentes échelles, de la
					rénovation d'appartements à la conception de bâtiments publics,
					toujours avec la même exigence de qualité.
				</p>
			</div>
		),
	},
	{
		id: "prix-publications",
		title: "Prix et Publications",
		content: (
			<div className="space-y-4">
				<p className="font-medium">Prix</p>
				<ul className="list-none space-y-1">
					<li>2023 - Mention spéciale, Prix d'Architecture Contemporaine</li>
					<li>2021 - Lauréat, Concours Jeunes Architectes</li>
					<li>2019 - Nominé, Équerre d'Argent</li>
				</ul>
				<p className="font-medium mt-6">Publications</p>
				<ul className="list-none space-y-1">
					<li>AMC Architecture, n°298, 2024</li>
					<li>d'architectures, n°285, 2023</li>
					<li>Archistorm, n°112, 2022</li>
				</ul>
			</div>
		),
	},
	{
		id: "infos",
		title: "Infos",
		content: (
			<div className="space-y-4">
				<p>
					<span className="opacity-50">Adresse</span>
					<br />
					123 Rue de l'Architecture
					<br />
					75001 Paris, France
				</p>
				<p>
					<span className="opacity-50">Contact</span>
					<br />
					<a href="mailto:contact@studio-janvier.fr" className="link-hover">
						contact@studio-janvier.fr
					</a>
					<br />
					<a href="tel:+33123456789" className="link-hover">
						+33 1 23 45 67 89
					</a>
				</p>
			</div>
		),
	},
];

const AboutPage = () => {
	return (
		<main className="min-h-screen bg-white pt-20 md:pt-24">
			<div className="container-rf py-12 md:py-16">
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
					<div className="animate-fade-in">
						<Image
							src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
							alt="Studio Janvier Architectes"
							width={1200}
							height={800}
							className="w-full h-auto"
							priority
						/>
					</div>
					<div className="animate-fade-in-up">
						<AgencySection>
							<p className="text-lg leading-relaxed mb-6">
								Studio Janvier Architectes développe une approche
								pluridisciplinaire de l'architecture, fondée sur une réflexion
								conceptuelle rigoureuse et un pragmatisme technique affirmé.
							</p>
							<p className="leading-relaxed">
								Chaque projet est envisagé comme une réponse singulière à un
								contexte donné, intégrant les dimensions spatiales,
								environnementales et humaines. L'agence accorde une attention
								particulière à la lumière, aux matériaux et à la qualité des
								espaces de vie.
							</p>
						</AgencySection>
						<AgencyAccordion
							sections={ACCORDION_SECTIONS}
							defaultOpenId="parcours"
						/>
					</div>
				</div>
			</div>
		</main>
	);
};

export default AboutPage;
