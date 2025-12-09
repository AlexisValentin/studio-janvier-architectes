"use client";

import { type ReactNode, useState } from "react";

interface AccordionItem {
	id: string;
	title: string;
	content: ReactNode;
}

interface AccordionProps {
	items: AccordionItem[];
	defaultOpenId?: string;
}

const Accordion: React.FC<AccordionProps> = ({ items, defaultOpenId }) => {
	const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

	const toggleItem = (id: string) => {
		setOpenId(openId === id ? null : id);
	};

	return (
		<div className="divide-y divide-gray-200">
			{items.map((item) => {
				const isOpen = openId === item.id;

				return (
					<div key={item.id} className="py-4">
						<button
							type="button"
							onClick={() => toggleItem(item.id)}
							className="flex w-full items-center justify-between text-left link-hover"
							aria-expanded={isOpen}
							aria-controls={`accordion-content-${item.id}`}
						>
							<span className="text-lg font-light tracking-wider">
								{item.title}
							</span>
							<svg
								width="16"
								height="16"
								viewBox="0 0 16 16"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.5"
								className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
								aria-hidden="true"
							>
								<title>Toggle</title>
								<path d="M4 6l4 4 4-4" />
							</svg>
						</button>
						<section
							id={`accordion-content-${item.id}`}
							className={`overflow-hidden transition-all duration-300 ${
								isOpen ? "mt-4 max-h-250 opacity-100" : "max-h-0 opacity-0"
							}`}
							aria-labelledby={`accordion-button-${item.id}`}
						>
							<div className="text-sm font-light leading-relaxed text-gray-700">
								{item.content}
							</div>
						</section>
					</div>
				);
			})}
		</div>
	);
};

export default Accordion;
