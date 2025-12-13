import type { ReactNode } from "react";

interface ContactSectionProps {
	children: ReactNode;
	className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
	children,
	className = "",
}) => {
	return <div className={`py-8 ${className}`}>{children}</div>;
};

export default ContactSection;
