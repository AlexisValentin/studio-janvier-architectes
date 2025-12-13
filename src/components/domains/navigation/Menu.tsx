"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/components/generics/Logo";
import MobileMenu from "./MobileMenu";

interface NavLink {
	href: string;
	label: string;
}

const NAV_LINKS: NavLink[] = [
	{ href: "/a-propos", label: "A propos" },
	{ href: "/projets", label: "Projets" },
	{ href: "/contact", label: "Contact" },
];

const Menu: React.FC = () => {
	const pathname = usePathname();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	if (pathname === "/") {
		return null;
	}

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<>
			<header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
				<div className="container-rf py-4 md:py-[1.6vw]">
					<div className="flex items-center justify-between">
						<Logo imageSrc="/images/studioJanvierLogo.png" alt="Studio Janvier" />
						<nav className="hidden md:block">
							<ul className="flex gap-8">
								{NAV_LINKS.map((link) => (
									<li key={link.href}>
										<Link
											href={link.href}
											className={`nav-link uppercase ${
												pathname === link.href ||
												(link.href !== "/" && pathname.startsWith(link.href))
													? "nav-link-active"
													: "nav-link-inactive"
											}`}
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</nav>
						<button
							type="button"
							onClick={toggleMobileMenu}
							className="md:hidden p-2 -mr-2 link-hover"
							aria-label={
								isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"
							}
							aria-expanded={isMobileMenuOpen}
						>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.5"
								className="transition-transform duration-200"
								aria-hidden="true"
							>
								<title>Menu</title>
								{isMobileMenuOpen ? (
									<path d="M6 6L18 18M6 18L18 6" />
								) : (
									<path d="M4 6h16M4 12h16M4 18h16" />
								)}
							</svg>
						</button>
					</div>
				</div>
			</header>
			<MobileMenu
				links={[{ href: "/", label: "ACCUEIL" }, ...NAV_LINKS]}
				isOpen={isMobileMenuOpen}
				onClose={closeMobileMenu}
				currentPath={pathname}
			/>
		</>
	);
};

export default Menu;
