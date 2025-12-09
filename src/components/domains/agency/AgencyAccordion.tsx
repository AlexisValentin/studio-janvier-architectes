"use client";

import type { ReactNode } from "react";
import Accordion from "@/components/generics/Accordion";

interface AccordionSection {
	id: string;
	title: string;
	content: ReactNode;
}

interface AgencyAccordionProps {
	sections: AccordionSection[];
	defaultOpenId?: string;
}

const AgencyAccordion: React.FC<AgencyAccordionProps> = ({
	sections,
	defaultOpenId,
}) => <Accordion items={sections} defaultOpenId={defaultOpenId} />;

export default AgencyAccordion;
