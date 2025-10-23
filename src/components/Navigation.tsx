"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{ href: "/", label: "ACCUEIL" },
	{ href: "/projets", label: "PROJETS" },
	{ href: "/index-projets", label: "INDEX" },
	{ href: "/agence", label: "AGENCE" },
];

export default function Navigation() {
	const pathname = usePathname();

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
			<div className="container-custom py-6">
				<div className="flex items-center justify-between">
					<Link
						href="/"
						className="text-xl font-light tracking-wider hover:opacity-60 transition-opacity"
					>
						STUDIO JANVIER
					</Link>

					<ul className="flex gap-8">
						{links.map((link) => (
							<li key={link.href}>
								<Link
									href={link.href}
									className={`text-sm font-light tracking-wider transition-opacity hover:opacity-60 ${
										pathname === link.href ? "opacity-100" : "opacity-50"
									}`}
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
}
