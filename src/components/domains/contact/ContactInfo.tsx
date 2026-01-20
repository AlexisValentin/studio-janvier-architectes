import SocialLink from "@/components/generics/SocialLink";
import type { ContactInformation } from "@/utils/cms/types";
import ContactSection from "./ContactSection";

interface ContactInfoProps {
	contactInfo: ContactInformation;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ contactInfo }) => {
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
							{contactInfo.address.map((line) => (
								<p key={line} className="text-sm font-light leading-relaxed">
									{line}
								</p>
							))}
						</address>
					</div>

					<div>
						<p className="mb-2 text-sm font-light tracking-wider opacity-50">
							EMAIL
						</p>
						<p>
							<a
								href={`mailto:${contactInfo.email}`}
								className="link-hover text-sm font-light"
							>
								{contactInfo.email}
							</a>
						</p>
					</div>

					{contactInfo.phone && (
						<div>
							<p className="mb-2 text-sm font-light tracking-wider opacity-50">
								TÉLÉPHONE
							</p>
							<p>
								<a
									href={`tel:${contactInfo.phone.replaceAll(" ", "")}`}
									className="link-hover text-sm font-light"
								>
									{contactInfo.phone}
								</a>
							</p>
						</div>
					)}
				</div>
			</ContactSection>

			{(contactInfo.socials.instagram || contactInfo.socials.tiktok) && (
				<ContactSection>
					<h2 className="mb-6 text-lg font-light tracking-wider">
						Réseaux sociaux
					</h2>
					<div className="flex flex-col gap-3">
						{contactInfo.socials.instagram && (
							<SocialLink
								platform="instagram"
								href={contactInfo.socials.instagram}
							/>
						)}
						{contactInfo.socials.tiktok && (
							<SocialLink platform="tiktok" href={contactInfo.socials.tiktok} />
						)}
					</div>
				</ContactSection>
			)}
		</div>
	);
};

export default ContactInfo;
