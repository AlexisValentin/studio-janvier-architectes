import type { Metadata } from "next";
import Image from "next/image";

import AgencyAccordion from "@/components/domains/agency/AgencyAccordion";
import AgencySection from "@/components/domains/agency/AgencySection";
import { fetchAboutPageContent, fetchContactInformation } from "@/utils/cms/api";
import { renderRichText } from "@/utils/cms/richText";

export const metadata: Metadata = {
	title: "Agence - Studio Janvier Architectes",
	description: "À propos de notre cabinet d'architecture contemporaine.",
};

const AboutPage = async () => {
	const [aboutContent, contactInfo] = await Promise.all([
		fetchAboutPageContent(),
		fetchContactInformation(),
	]);

	const accordionSections = [
		...(aboutContent?.parcours.content
			? [
					{
						id: "parcours",
						title: aboutContent.parcours.title,
						content: (
							<div className="space-y-4">
								{renderRichText(aboutContent.parcours.content)}
							</div>
						),
					},
				]
			: []),
		...(aboutContent?.awards.items.length || aboutContent?.publications.items.length
			? [
					{
						id: "prix-publications",
						title: aboutContent?.awards.title || "Prix et Publications",
						content: (
							<div className="space-y-4">
								{aboutContent?.awards.items.length > 0 && (
									<>
										<p className="font-medium">Prix</p>
										<ul className="list-none space-y-1">
											{aboutContent.awards.items.map((award) => (
												<li key={award}>{award}</li>
											))}
										</ul>
									</>
								)}
								{aboutContent?.publications.items.length > 0 && (
									<>
										<p className="font-medium mt-6">
											{aboutContent.publications.title}
										</p>
										<ul className="list-none space-y-1">
											{aboutContent.publications.items.map((pub) => (
												<li key={pub}>{pub}</li>
											))}
										</ul>
									</>
								)}
							</div>
						),
					},
				]
			: []),
		...(contactInfo
			? [
					{
						id: "infos",
						title: "Infos",
						content: (
							<div className="space-y-4">
								<p>
									<span className="opacity-50">Adresse</span>
									<br />
									{contactInfo.address.map((line, index) => (
										<span key={line}>
											{line}
											{index < contactInfo.address.length - 1 && <br />}
										</span>
									))}
								</p>
								<p>
									<span className="opacity-50">Contact</span>
									<br />
									<a
										href={`mailto:${contactInfo.email}`}
										className="link-hover"
									>
										{contactInfo.email}
									</a>
									{contactInfo.phone && (
										<>
											<br />
											<a
												href={`tel:${contactInfo.phone.replaceAll(" ", "")}`}
												className="link-hover"
											>
												{contactInfo.phone}
											</a>
										</>
									)}
								</p>
							</div>
						),
					},
				]
			: []),
	];

	return (
		<main className="min-h-screen bg-white pt-20 md:pt-24">
			<div className="container-rf py-12 md:py-16">
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
					<div className="animate-fade-in">
						{aboutContent?.heroImageUrl && (
							<Image
								src={aboutContent.heroImageUrl}
								alt="Studio Janvier Architectes"
								width={1200}
								height={800}
								className="w-full h-auto"
								priority
							/>
						)}
					</div>
					<div className="animate-fade-in-up">
						<AgencySection>
							{aboutContent?.introText && (
								<p className="text-lg leading-relaxed mb-6">
									{aboutContent.introText}
								</p>
							)}
							{aboutContent?.description && (
								<div className="leading-relaxed">
									{renderRichText(aboutContent.description)}
								</div>
							)}
						</AgencySection>
						{accordionSections.length > 0 && (
							<AgencyAccordion
								sections={accordionSections}
								defaultOpenId={accordionSections[0]?.id}
							/>
						)}
					</div>
				</div>
			</div>
		</main>
	);
};

export default AboutPage;
