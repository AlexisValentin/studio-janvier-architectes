import type { Metadata } from "next";
import type { FC } from "react";
import Menu from "@/components/domains/navigation/Menu";
import "./globals.css";
import Footer from "@/components/domains/footer/Footer";

export const metadata: Metadata = {
	title: "Studio Janvier Architectes",
	description:
		"Cabinet d'architecture contemporaine spécialisé dans la conception de projets résidentiels et commerciaux.",
	keywords: "architecture, architecte, design, construction, rénovation",
	openGraph: {
		title: "Studio Janvier Architectes",
		description:
			"Cabinet d'architecture contemporaine spécialisé dans la conception de projets résidentiels et commerciaux.",
		type: "website",
		siteName: "Studio Janvier Architectes",
	},
	twitter: {
		card: "summary_large_image",
		title: "Studio Janvier Architectes",
		description:
			"Cabinet d'architecture contemporaine spécialisé dans la conception de projets résidentiels et commerciaux.",
	},
};

const CONTACT_INFO = {
	name: "Studio Janvier Architectes",
	address: ["123 Rue de l'Architecture", "75001 Paris, France"],
	email: "contact@studio-janvier.fr",
	phone: "+33 1 23 45 67 89",
};

const SOCIAL_LINKS = {
	instagram: "https://instagram.com",
	linkedin: "https://linkedin.com",
	pinterest: "https://pinterest.com",
};

type RootLayoutProps = Readonly<{
	children: React.ReactNode;
}>;

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
	return (
		<html lang="fr">
			<body className="bg-white text-gray-900">
				<div className="flex min-h-screen flex-col">
					<Menu />
					<div className="flex-1">{children}</div>
					<Footer contact={CONTACT_INFO} socials={SOCIAL_LINKS} />
				</div>
			</body>
		</html>
	);
};

export default RootLayout;
