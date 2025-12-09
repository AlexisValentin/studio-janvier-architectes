import Image from "next/image";
import Link from "next/link";

interface LogoProps {
	href?: string;
	imageSrc?: string;
	alt?: string;
	className?: string;
}

const Logo: React.FC<LogoProps> = ({
	href = "/",
	imageSrc,
	alt = "Logo Studio Janvier",
	className = "",
}) => {
	const logoContent = imageSrc ? (
		<Image
			src={imageSrc}
			alt={alt}
			width={120}
			height={20}
			className="h-5 w-auto object-contain"
			priority
		/>
	) : (
		<span className="text-base font-light tracking-wider">{alt}</span>
	);

	return (
		<Link href={href} className={`link-hover block ${className}`}>
			{logoContent}
		</Link>
	);
};

export default Logo;
