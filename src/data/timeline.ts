import type { TimelineItem } from "../components/features/timeline/types";

export const timelineData: TimelineItem[] = [
	{
		id: "current-study",
		title: "Studying Transportation Planning and Management",
		description:
			"Graduated from engineering cost major, specializing in cost estimation in the pre-planning stage of civil construction and decoration projects, cost control in the design stage, cost management in the construction stage, settlement review in the completion acceptance stage, and cost control in the operation and maintenance stage. He has obtained a bachelor's degree in management.",
		type: "education",
		startDate: "2021-09-01",
		endDate: "2025-08-31", 
		location: "JiangXi",
		organization: "Jiangxi University of Technology",
		skills: ["CAD", "Revit", "GTJ", "GQI", "GCCP"],
		achievements: [
			"Current GPA: 3.63/5.0",
			"Third Prize of the 9th and 10th BIM Graduation Design Competition",
			"Provincial first prize in the National Mathematical Modeling Competition for College Students",
			"During his sophomore year, he served as the president of the school Mathematics Association, and won the backbone award of the association once and the advanced individual of the association twice.",
			"Five academic scholarships, three times five good students",
		],
		icon: "material-symbols:school",
		color: "#059669",
		featured: true,
	},
];
