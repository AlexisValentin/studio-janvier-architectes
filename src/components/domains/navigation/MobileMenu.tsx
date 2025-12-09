"use client";

import Link from "next/link";
import { useEffect } from "react";

interface NavLink {
	href: string;
	label: string;
}

interface MobileMenuProps {
	links: NavLink[];
	isOpen: boolean;
	onClose: () => void;
	currentPath: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
	links,
	isOpen,
	onClose,
	currentPath,
}) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 z-40 bg-white animate-fade-in"
			role="dialog"
			aria-modal="true"
			aria-label="Menu de navigation"
		>
			<div className="container-rf flex h-full flex-col justify-center">
				<nav>
					<ul className="space-y-8">
						{links.map((link) => (
							<li key={link.href}>
								<Link
									href={link.href}
									onClick={onClose}
									className={`block text-3xl font-light tracking-wider transition-opacity hover:opacity-60 ${
										currentPath === link.href ? "opacity-100" : "opacity-50"
									}`}
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default MobileMenu;
