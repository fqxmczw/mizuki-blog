// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "CAD" | "Revit" | "GTJ" | "GQI" | "GCCP";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	// Frontend Skills
	{
		id: "cad",
		name: "CAD",
		description:
			"CAD is the application of computer technology to engineering, construction and other fields to assist in drawing two-dimensional and three-dimensional models.",
		icon: "logos:javascript",
		category: "CAD",
		level: "advanced",
		experience: { years: 3, months: 6 },
		projects: [
		],
		color: "#F7DF1E",
	},
	{
		id: "revit",
		name: "Revit",
		description:
			"Mainly used for architectural design and structural analysis.",
		icon: "logos:typescript-icon",
		category: "Revit",
		level: "beginner",
		experience: { years: 0, months: 8 },
		projects: [],
		color: "#3178C6",
	},
	{
		id: "gtj",
		name: "GTJ",
		description:
			"Through big data, BIM, cloud technology, etc., it provides refined calculation services for the domestic cost field such as estimation, bidding budget, construction process, the whole process of completion and settlement, the whole scene, and the whole process (calculation, quantity, inspection, audit).",
		icon: "logos:react",
		category: "GTJ",
		level: "advanced",
		experience: { years: 2, months: 10 },
		projects: [],
		color: "#61DAFB",
	},
	{
		id: "gqi",
		name: "GQI",
		description:
			"GQI is the most mainstream software for BIM calculation of installation projects.",
		icon: "logos:vue",
		category: "GQI",
		level: "advanced",
		experience: { years: 2, months: 8 },
		projects: [],
		color: "#4FC08D",
	},
	{
		id: "gccp",
		name: "GCCP",
		description:
			"Provide pricing tools + data integrated cost services for cost preparation and audit of the whole process of the project.",
		icon: "logos:angular-icon",
		category: "GCCP",
		level: "intermediate",
		experience: { years: 1, months: 9 },
		projects: [],
		color: "#DD0031",
	},
];
