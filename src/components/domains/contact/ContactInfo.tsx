import SocialLink from "@/components/generics/SocialLink";
import ContactSection from "./ContactSection";

const ContactInfo: React.FC = () => {
	return (
		<div className="space-y-8">
			<ContactSection>
				<h2 className="mb-6 text-lg font-light tracking-wider">
					Informations de contact
				</h2>
				<div className="space-y-6">
					<div>
						<p className="mb-2 text-sm font-light tracking-wider opacity-50">
							ADRESSE
						</p>
						<address className="not-italic">
							<p className="text-sm font-light leading-relaxed">
								123 Rue de l'Architecture
							</p>
							<p className="text-sm font-light leading-relaxed">
								75001 Paris, France
							</p>
						</address>
					</div>

					<div>
						<p className="mb-2 text-sm font-light tracking-wider opacity-50">
							EMAIL
						</p>
						<p>
							<a
								href="mailto:contact@studio-janvier-architectes.fr"
								className="link-hover text-sm font-light"
							>
								contact@studio-janvier-architectes.fr
							</a>
						</p>
					</div>

					<div>
						<p className="mb-2 text-sm font-light tracking-wider opacity-50">
							TÉLÉPHONE
						</p>
						<p>
							<a
								href="tel:+33123456789"
								className="link-hover text-sm font-light"
							>
								+33 1 23 45 67 89
							</a>
						</p>
					</div>
				</div>
			</ContactSection>

			<ContactSection>
				<h2 className="mb-6 text-lg font-light tracking-wider">
					Réseaux sociaux
				</h2>
				<div className="flex flex-col gap-3">
					<SocialLink platform="instagram" href="https://instagram.com" />
				</div>
			</ContactSection>
		</div>
	);
};

export default ContactInfo;
