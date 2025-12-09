interface MetadataItem {
	label: string;
	value: string | string[];
}

interface ProjectMetadataProps {
	items: MetadataItem[];
	className?: string;
	layout?: "vertical" | "horizontal";
}

const ProjectMetadata: React.FC<ProjectMetadataProps> = ({ items }) => {
	const filteredItems = items.filter(
		(item) =>
			item.value &&
			(Array.isArray(item.value) ? item.value.length > 0 : item.value !== ""),
	);

	if (filteredItems.length === 0) return null;

	return (
		<dl className="space-y-2 md:space-y-0 md:flex md:flex-wrap md:gap-x-8 md:gap-y-2">
			{filteredItems.map((item) => (
				<div key={item.label} className={"vertical md:horizontal flex gap-2"}>
					<dt className="text-sm font-light opacity-50">{item.label}</dt>
					<dd className="text-sm font-light">
						{Array.isArray(item.value) ? item.value.join(", ") : item.value}
					</dd>
				</div>
			))}
		</dl>
	);
};

export default ProjectMetadata;
