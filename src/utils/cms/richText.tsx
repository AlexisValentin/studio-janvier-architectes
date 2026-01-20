import {
	documentToReactComponents,
	type Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, type Document, INLINES } from "@contentful/rich-text-types";
import type { ReactNode } from "react";

const RICH_TEXT_OPTIONS: Options = {
	renderNode: {
		[BLOCKS.PARAGRAPH]: (_, children) => (
			<p className="mb-4 leading-relaxed">{children}</p>
		),
		[BLOCKS.HEADING_1]: (_, children) => (
			<h1 className="text-3xl font-light mb-6 md:text-4xl">{children}</h1>
		),
		[BLOCKS.HEADING_2]: (_, children) => (
			<h2 className="text-2xl font-light mb-4 md:text-3xl">{children}</h2>
		),
		[BLOCKS.HEADING_3]: (_, children) => (
			<h3 className="text-xl font-light mb-3 md:text-2xl">{children}</h3>
		),
		[BLOCKS.UL_LIST]: (_, children) => (
			<ul className="list-none space-y-1 mb-4">{children}</ul>
		),
		[BLOCKS.OL_LIST]: (_, children) => (
			<ol className="list-decimal list-inside space-y-1 mb-4 ml-4">
				{children}
			</ol>
		),
		[BLOCKS.LIST_ITEM]: (_, children) => (
			<li className="leading-relaxed">{children}</li>
		),
		[BLOCKS.QUOTE]: (_, children) => (
			<blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">
				{children}
			</blockquote>
		),
		[BLOCKS.HR]: () => <hr className="my-8 border-gray-200" />,
		[INLINES.HYPERLINK]: (node, children) => {
			const uri = node.data.uri as string;
			return (
				<a
					href={uri}
					className="link-hover underline"
					target={uri.startsWith("http") ? "_blank" : undefined}
					rel={uri.startsWith("http") ? "noopener noreferrer" : undefined}
				>
					{children}
				</a>
			);
		},
	},
	renderText: (text) => {
		return text
			.split("\n")
			.reduce<ReactNode[]>((children, textSegment, index) => {
				return [...children, index > 0 && <br key={textSegment} />, textSegment];
			}, []);
	},
};

export const renderRichText = (document: Document | undefined): ReactNode => {
	if (!document) return null;

	return documentToReactComponents(document, RICH_TEXT_OPTIONS);
};
