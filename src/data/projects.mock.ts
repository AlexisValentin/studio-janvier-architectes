export type ProjectStatus =
	| "completed"
	| "construction"
	| "studies"
	| "feasibility";

export interface Project {
	slug: string;
	number: string;
	title: string;
	location: string;
	surface?: string;
	year: string;
	program?: string;
	client?: string;
	budget?: string;
	status: ProjectStatus;
	team?: string[];
	contractor?: string;
	photographer?: string;
	description?: string;
	images: string[];
}

export const MOCK_PROJECTS: Project[] = [
	{
		slug: "fauconnerie",
		number: "011",
		title: "Fauconnerie",
		location: "Paris (75018)",
		surface: "85 m²",
		year: "2024",
		program: "Architecture / Intérieur",
		client: "Privé",
		budget: "N.C",
		status: "completed",
		contractor: "Artisans Réunis",
		photographer: "Camille Huguenot",
		description:
			"Rénovation complète d'un appartement dans le quartier de la Fauconnerie, avec une attention particulière portée à la lumière naturelle et à l'optimisation des espaces de vie.",
		images: [
			"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
			"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
			"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80",
		],
	},
	{
		slug: "sadi-carnot",
		number: "010",
		title: "Sadi Carnot",
		location: "Lyon (69003)",
		surface: "120 m²",
		year: "2024",
		program: "Architecture / Intérieur",
		client: "Privé",
		budget: "N.C",
		status: "construction",
		team: ["Marie Dupont"],
		description:
			"Rénovation d'un immeuble historique dans le quartier de Sadi Carnot, alliant respect du patrimoine et modernité contemporaine.",
		images: [
			"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80",
			"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
		],
	},
	{
		slug: "marcadet",
		number: "009",
		title: "Marcadet",
		location: "Paris (75018)",
		surface: "95 m²",
		year: "2024",
		program: "Architecture / Intérieur",
		client: "Privé",
		budget: "150 000 €",
		status: "completed",
		photographer: "Camille Huguenot",
		description:
			"Création d'espaces de vie ouverts et lumineux dans un ancien atelier du quartier Marcadet.",
		images: [
			"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80",
			"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
		],
	},
	{
		slug: "villa-contemporaine",
		number: "008",
		title: "Villa Contemporaine",
		location: "Bordeaux (33000)",
		surface: "300 m²",
		year: "2023",
		program: "Architecture",
		client: "Privé",
		budget: "N.C",
		status: "completed",
		photographer: "Studio Erick Saillet",
		description:
			"Villa contemporaine intégrant des solutions écologiques innovantes et des matériaux durables.",
		images: [
			"https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80",
			"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80",
		],
	},
	{
		slug: "appartement-haussmannien",
		number: "007",
		title: "Appartement Haussmannien",
		location: "Paris (75008)",
		surface: "180 m²",
		year: "2022",
		program: "Architecture / Intérieur",
		client: "Privé",
		budget: "N.C",
		status: "completed",
		contractor: "Maison Parisienne",
		photographer: "Camille Huguenot",
		description:
			"Rénovation complète d'un appartement haussmannien préservant les éléments d'origine tout en apportant une touche contemporaine.",
		images: [
			"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80",
			"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
		],
	},
	{
		slug: "loft-industriel",
		number: "006",
		title: "Loft Industriel",
		location: "Marseille (13002)",
		surface: "250 m²",
		year: "2024",
		program: "Architecture / Intérieur",
		client: "Privé",
		budget: "280 000 €",
		status: "studies",
		team: ["Pierre Martin", "Sophie Leblanc"],
		description:
			"Transformation d'un ancien entrepôt industriel en loft lumineux et spacieux conservant le caractère brut du lieu.",
		images: [
			"https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1600&q=80",
			"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80",
		],
	},
];

export const getProjectBySlug = (slug: string): Project | undefined => {
	return MOCK_PROJECTS.find((project) => project.slug === slug);
};

export const getAdjacentProjects = (
	slug: string,
): { previous?: Project; next?: Project } => {
	const index = MOCK_PROJECTS.findIndex((project) => project.slug === slug);
	if (index === -1) return {};

	return {
		previous: index > 0 ? MOCK_PROJECTS[index - 1] : undefined,
		next:
			index < MOCK_PROJECTS.length - 1 ? MOCK_PROJECTS[index + 1] : undefined,
	};
};

export const getProjectsForGrid = () => {
	return MOCK_PROJECTS.map(({ slug, number, title, images, status }) => ({
		slug,
		number,
		title,
		imageUrl: images[0],
		status,
	}));
};

export const getProjectsForList = () => {
	return [...MOCK_PROJECTS].sort((a, b) => b.number.localeCompare(a.number));
};
