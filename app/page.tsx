import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
	return (
		<main className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-6 md:px-12">
			<Link
				href="/projets"
				className="relative group block w-full max-w-4xl aspect-4/3 overflow-hidden"
			>
				<Image
					src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80"
					alt="Découvrir les projets"
					fill
					className="object-cover transition-transform duration-500 group-hover:scale-105"
					priority
				/>
				<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
			</Link>

			<nav className="flex gap-8 mt-8 md:mt-12">
				<Link href="/a-propos" className="nav-link nav-link-inactive uppercase font-extrabold hover:text-black">
					A propos
				</Link>
				<Link href="/projets" className="nav-link nav-link-inactive uppercase font-extrabold hover:text-black">
					Projets
				</Link>
				<Link href="/contact" className="nav-link nav-link-inactive uppercase font-extrabold hover:text-black">
					Contact
				</Link>
			</nav>
		</main>
	);
};

export default HomePage;
