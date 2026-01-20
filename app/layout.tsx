import type { Metadata } from "next";
import Menu from "@/components/domains/navigation/Menu";
import "./globals.css";
import Footer from "@/components/domains/footer/Footer";
import { fetchContactInformation } from "@/utils/cms/api";

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

type RootLayoutProps = Readonly<{
	children: React.ReactNode;
}>;

const RootLayout = async ({ children }: RootLayoutProps) => {
	const contactInfo = await fetchContactInformation();

	return (
		<html lang="fr">
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
