import type { ReactNode } from "react";

interface AgencySectionProps {
	title?: string;
	children: ReactNode;
	className?: string;
}

const AgencySection: React.FC<AgencySectionProps> = ({
	title,
	children,
	className = "",
}) => {
	return (
		<section className={`py-8 ${className}`}>
			{title && (
				<h2 className="mb-6 text-lg font-light tracking-wider">{title}</h2>
			)}
			<div className="text-base font-light leading-relaxed text-gray-700">
				{children}
			</div>
		</section>
	);
};

export default AgencySection;
