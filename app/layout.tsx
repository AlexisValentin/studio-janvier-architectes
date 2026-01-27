import type { Metadata } from "next";
import Menu from "@/components/domains/navigation/Menu";
import "./globals.css";
import Footer from "@/components/domains/footer/Footer";
import { fetchContactInformation } from "@/utils/cms/api";

export const metadata: Metadata = {
	metadataBase: new URL("https://studio-janvier-architectes.com"),
	title: "Studio Janvier Architectes",
	description:
		"Cabinet d'architecture contemporaine spécialisé dans la conception de projets résidentiels et commerciaux.",
	openGraph: {
		title: "Studio Janvier Architectes",
		description:
			"Cabinet d'architecture contemporaine spécialisé dans la conception de projets résidentiels et commerciaux.",
		type: "website",
		siteName: "Studio Janvier Architectes",
		locale: "fr_FR",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "Studio Janvier Architectes",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Studio Janvier Architectes",
		description:
			"Cabinet d'architecture contemporaine spécialisé dans la conception de projets résidentiels et commerciaux.",
		images: ["/og-image.png"],
	},
};

type RootLayoutProps = Readonly<{
	children: React.ReactNode;
}>;

const organizationJsonLd = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: "Studio Janvier Architectes",
	url: "https://studio-janvier-architectes.com",
	logo: "https://studio-janvier-architectes.com/images/studioJanvierLogo.png",
	description:
		"Cabinet d'architecture contemporaine spécialisé dans la conception de projets résidentiels et commerciaux.",
	address: {
		"@type": "PostalAddress",
		addressLocality: "Paris",
		addressCountry: "FR",
	},
	sameAs: [
		"https://www.instagram.com/studiojanvier",
		"https://www.tiktok.com/@studiojanvier",
	],
};

const RootLayout = async ({ children }: RootLayoutProps) => {
	const contactInfo = await fetchContactInformation();

	return (
		<html lang="fr">
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(organizationJsonLd),
					}}
				/>
			</head>
			<body className="bg-white text-gray-900">
				<div className="flex min-h-screen flex-col">
					<Menu />
					<div className="flex-1">{children}</div>
					{contactInfo && (
						<Footer
							contact={{
								name: contactInfo.name,
								address: contactInfo.address,
								email: contactInfo.email,
								phone: contactInfo.phone,
							}}
							socials={contactInfo.socials}
						/>
					)}
				</div>
			</body>
		</html>
	);
};

export default RootLayout;
