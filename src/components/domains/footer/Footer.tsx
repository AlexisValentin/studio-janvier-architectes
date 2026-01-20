"use client";

import { usePathname } from "next/navigation";
import SocialLink from "@/components/generics/SocialLink";

interface ContactInfo {
	name: string;
	address: string[];
	email: string;
	phone?: string;
}

interface SocialLinks {
	instagram?: string;
	tiktok?: string;
}

interface FooterProps {
	contact: ContactInfo;
	socials?: SocialLinks;
}

const Footer: React.FC<FooterProps> = ({ contact, socials }) => {
	const pathname = usePathname();

	if (pathname === "/") {
		return null;
	}

	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t border-gray-200 bg-white">
			<div className="container-rf py-12 md:py-16">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
					<div>
						<h3 className="mb-4 text-sm font-light tracking-wider opacity-50">
							CONTACT
						</h3>
						<address className="not-italic">
							<p className="text-sm font-light leading-relaxed">
								{contact.name}
							</p>
							{contact.address.map((line) => (
								<p key={line} className="text-sm font-light leading-relaxed">
									{line}
								</p>
							))}
							<p className="mt-4">
								<a
									href={`mailto:${contact.email}`}
									className="link-hover text-sm font-light"
								>
									{contact.email}
								</a>
							</p>
							{contact.phone && (
								<p>
									<a
										href={`tel:${contact.phone.replace(/\s/g, "")}`}
										className="link-hover text-sm font-light"
									>
										{contact.phone}
									</a>
								</p>
							)}
						</address>
					</div>

					{socials && (
						<div>
							<h3 className="mb-4 text-sm font-light tracking-wider opacity-50">
								SUIVEZ-NOUS
							</h3>
							<div className="flex flex-col gap-3">
								{socials.instagram && (
									<SocialLink platform="instagram" href={socials.instagram} />
								)}
								{socials.tiktok && (
									<SocialLink platform="tiktok" href={socials.tiktok} />
								)}
							</div>
						</div>
					)}

					<div className="md:text-right">
						<p className="text-xs font-light opacity-50">
							&copy; {currentYear} {contact.name}
						</p>
						<p className="mt-1 text-xs font-light opacity-50">
							Tous droits réservés
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
