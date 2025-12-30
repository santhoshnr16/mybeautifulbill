import React from "react";
import {
	FaJs, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDocker, FaAws, FaGitAlt, FaPython
} from "react-icons/fa";
import {
	SiTypescript, SiNextdotjs, SiTailwindcss, SiExpress, SiGraphql, SiMongodb, SiPostgresql
} from "react-icons/si";

const skills = [
	{ name: "JavaScript", icon: <FaJs />, category: "frontend" },
	{ name: "TypeScript", icon: <SiTypescript />, category: "frontend" },
	{ name: "React", icon: <FaReact />, category: "frontend" },
	{ name: "Next.js", icon: <SiNextdotjs />, category: "frontend" },
	{ name: "HTML5", icon: <FaHtml5 />, category: "frontend" },
	{ name: "CSS3", icon: <FaCss3Alt />, category: "frontend" },
	{ name: "Tailwind CSS", icon: <SiTailwindcss />, category: "frontend" },
	{ name: "Node.js", icon: <FaNodeJs />, category: "backend" },
	{ name: "Express", icon: <SiExpress />, category: "backend" },
	{ name: "GraphQL", icon: <SiGraphql />, category: "backend" },
	{ name: "Python", icon: <FaPython />, category: "backend" },
	{ name: "MongoDB", icon: <SiMongodb />, category: "database" },
	{ name: "PostgreSQL", icon: <SiPostgresql />, category: "database" },
	{ name: "Docker", icon: <FaDocker />, category: "devops" },
	{ name: "AWS", icon: <FaAws />, category: "devops" },
	{ name: "Git", icon: <FaGitAlt />, category: "devops" },
];

const skillCategories = {
	frontend: "Frontend",
	backend: "Backend",
	database: "Database",
	devops: "DevOps",
	tools: "Tools",
};

export const SkillSection = () => {
	const groupedSkills = skills.reduce((acc, skill) => {
		if (!acc[skill.category]) {
			acc[skill.category] = [];
		}
		acc[skill.category].push(skill);
		return acc;
	}, {});

	return (
		<section id="skills" className="py-12 px-4">
			<div className="container max-w-4xl mx-auto">
				<h2 className="text-2xl font-bold mb-6 text-center">Skills</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{Object.entries(groupedSkills).map(([category, skills]) => (
						<div key={category} className="bg-transparent/50 p-6 rounded-lg shadow-md">
							<h3 className="text-xl font-semibold mb-4 text-center">{skillCategories[category]}</h3>
							<div className="flex flex-wrap justify-center gap-4">
								{skills.map((skill) => (
									<div key={skill.name} className="flex flex-col items-center gap-2">
										<div className="text-4xl text-primary">{skill.icon}</div>
										<span className="text-sm font-medium">{skill.name}</span>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SkillSection;