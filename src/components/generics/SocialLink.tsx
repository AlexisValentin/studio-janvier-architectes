import Link from "next/link";

type SocialPlatform = "instagram" | "tiktok";

interface SocialLinkProps {
	platform: SocialPlatform;
	href: string;
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
	tiktok: (
		<svg
			width="20"
			height="20"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="1.5"
		>
			<title>TikTok logo</title>
			<path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
		</svg>
	),
};

const SOCIAL_LABELS: Record<SocialPlatform, string> = {
	instagram: "Instagram",
	tiktok: "TikTok",
};

const SocialLink: React.FC<SocialLinkProps> = ({ platform, href }) => (
	<Link
		href={href}
		target="_blank"
		rel="noopener noreferrer"
		className="link-hover inline-flex items-center gap-2"
		aria-label={SOCIAL_LABELS[platform]}
	>
		{SOCIAL_ICONS[platform]}
		<span className="text-sm font-light">{SOCIAL_LABELS[platform]}</span>
	</Link>
);

export default SocialLink;
