import Image from "next/image";
import Link from "next/link";
import { fetchHeroImage } from "@/utils/cms/api";

const HomePage = async () => {
	const heroImage = await fetchHeroImage();

	return (
		<main className="flex flex-col items-center justify-center px-6 md:px-12">
			<Link
				href="/projets"
				className="relative group block w-full max-w-4xl aspect-21/9 overflow-hidden mt-24"
			>
				{heroImage && (
					<Image
						src={heroImage.imageUrl}
						alt={heroImage.altText}
						fill
						className="object-cover transition-transform duration-500"
						priority
					/>
				)}
			</Link>
			<nav className="flex flex-col items-center md:flex-row gap-12 md:gap-24 mt-24 md:mt-12">
				<Link
					href="/a-propos"
					className="text-xl nav-link nav-link-inactive uppercase font-extrabold hover:text-black"
				>
					A propos
				</Link>
				<Link
					href="/projets"
					className="text-xl nav-link nav-link-inactive uppercase font-extrabold hover:text-black"
				>
					Projets
				</Link>
				<Link
					href="/contact"
					className="text-xl nav-link nav-link-inactive uppercase font-extrabold hover:text-black"
				>
					Contact
				</Link>
			</nav>
		</main>
	);
};

export default HomePage;
