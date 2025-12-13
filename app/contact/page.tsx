import type { Metadata } from "next";
import ContactForm from "@/components/domains/contact/ContactForm";
import ContactInfo from "@/components/domains/contact/ContactInfo";

export const metadata: Metadata = {
	title: "Contact - Studio Janvier Architectes",
	description:
		"Contactez Studio Janvier Architectes pour vos projets d'architecture. Nous sommes à votre écoute pour répondre à vos questions et discuter de vos besoins.",
	keywords:
		"contact, architecte, Paris, Studio Janvier, devis, projet architecture",
	openGraph: {
		title: "Contact - Studio Janvier Architectes",
		description:
			"Contactez-nous pour vos projets d'architecture résidentiels et commerciaux.",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Contact - Studio Janvier Architectes",
		description:
			"Contactez-nous pour vos projets d'architecture résidentiels et commerciaux.",
	},
};

const ContactPage = () => {
	return (
		<main className="min-h-screen bg-white pt-20 md:pt-24">
			<div className="container-rf py-12 md:py-16">
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
					<div className="animate-fade-in">
						<ContactInfo />
					</div>
					<div className="animate-fade-in-up">
						<ContactForm />
					</div>
				</div>
			</div>
		</main>
	);
};

export default ContactPage;
