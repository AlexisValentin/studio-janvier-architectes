import Link from "next/link";

type SocialPlatform = "instagram" | "linkedin" | "pinterest";

interface SocialLinkProps {
	platform: SocialPlatform;
	href: string;
	className?: string;
}

const SOCIAL_ICONS: Record<SocialPlatform, React.ReactNode> = {
	instagram: (
		<svg
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
		>
			<title>Instagram logo</title>
			<rect x="2" y="2" width="20" height="20" rx="5" />
			<circle cx="12" cy="12" r="4" />
			<circle cx="18" cy="6" r="1" fill="currentColor" />
		</svg>
	),
	linkedin: (
		<svg
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
		>
			<title>LinkedIn logo</title>
			<rect x="2" y="2" width="20" height="20" rx="2" />
			<path d="M7 11v6M7 7v.01M11 11v6m0-3c0-2 1.5-3 3-3s3 1 3 3v3" />
		</svg>
	),
	pinterest: (
		<svg
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
		>
			<title>Pinterest logo</title>
			<circle cx="12" cy="12" r="10" />
			<path d="M12 6c-2.5 0-5 2-5 5 0 2 1 3 2 3 .5 0 .8-.5.6-1l-.3-1c-.2-.5 0-2.5 2.7-2.5 2 0 3 1.5 3 3 0 2-1 4-2.5 4-1 0-1.5-1-1.2-2l.5-2c.2-.8-.2-1.5-1-1.5-1 0-1.8 1-1.8 2.3 0 .8.3 1.4.3 1.4l-1.2 5c-.3 1.2 0 3 0 3" />
		</svg>
	),
};

const SOCIAL_LABELS: Record<SocialPlatform, string> = {
	instagram: "Instagram",
	linkedin: "LinkedIn",
	pinterest: "Pinterest",
};

const SocialLink: React.FC<SocialLinkProps> = ({
	platform,
	href,
	className = "",
}) => {
	return (
		<Link
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={`link-hover inline-flex items-center gap-2 ${className}`}
			aria-label={SOCIAL_LABELS[platform]}
		>
			{SOCIAL_ICONS[platform]}
			<span className="text-sm font-light">{SOCIAL_LABELS[platform]}</span>
		</Link>
	);
};

export default SocialLink;
