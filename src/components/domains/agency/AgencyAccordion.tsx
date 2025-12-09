"use client";

import Accordion from "@/components/generics/Accordion";
import type { ReactNode } from "react";

interface AccordionSection {
	id: string;
	title: string;
	content: ReactNode;
}

interface AgencyAccordionProps {
	sections: AccordionSection[];
	defaultOpenId?: string;
	className?: string;
}

const AgencyAccordion: React.FC<AgencyAccordionProps> = ({
	sections,
	defaultOpenId,
	className = "",
}) => {
	return (
		<Accordion
			items={sections}
			defaultOpenId={defaultOpenId}
			className={className}
		/>
	);
};

export default AgencyAccordion;
