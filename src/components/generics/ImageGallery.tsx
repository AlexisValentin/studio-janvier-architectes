import Image from "next/image";

interface GalleryImage {
	src: string;
	alt: string;
}

interface ImageGalleryProps {
	images: GalleryImage[];
	className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
	images,
	className = "",
}) => {
	if (images.length === 0) return null;

	return (
		<div className={`space-y-4 md:space-y-6 ${className}`}>
			{images.map((image, index) => (
				<div
					key={image.src}
					className="animate-fade-in-up"
					style={{ animationDelay: `${index * 0.1}s` }}
				>
					<Image
						src={image.src}
						alt={image.alt}
						width={1600}
						height={1000}
						className="w-full h-auto"
						loading={index === 0 ? "eager" : "lazy"}
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
					/>
				</div>
			))}
		</div>
	);
};

export default ImageGallery;
