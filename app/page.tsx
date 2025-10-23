import Image from "next/image";
import Navigation from "@/components/Navigation";
import HeroImage from "@/../public/images/heroImage.jpg";

export default function Home() {
	return (
		<>
			<Navigation />
			<main className="min-h-screen bg-white pt-24">
				<section>
					<h1 className="text-amber-900">Coucou</h1>
					<Image
						src={HeroImage}
						alt="Studio Janvier Architectes"
						className="border-2 border-amber-200"
						priority
					/>
				</section>
			</main>
		</>
	);
}
