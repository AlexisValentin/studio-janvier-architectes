import type { Metadata } from "next";
import "./globals.css";

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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
			</head>
			<body className="bg-white text-gray-900">{children}</body>
		</html>
	);
}
