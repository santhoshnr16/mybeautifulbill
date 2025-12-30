import React from "react";

const randomLevel = () => `${Math.floor(Math.random() * 61) + 40}%`; // 40% - 100%

const skills = [
	{ name: "JavaScript", level: randomLevel(), category: "frontend" },
	{ name: "TypeScript", level: randomLevel(), category: "frontend" },
	{ name: "React", level: randomLevel(), category: "frontend" },
	{ name: "Next.js", level: randomLevel(), category: "frontend" },
	{ name: "HTML & CSS", level: randomLevel(), category: "frontend" },
	{ name: "Tailwind CSS", level: randomLevel(), category: "frontend" },
	{ name: "Node.js", level: randomLevel(), category: "backend" },
	{ name: "Express", level: randomLevel(), category: "backend" },
	{ name: "GraphQL", level: randomLevel(), category: "backend" },
	{ name: "MongoDB", level: randomLevel(), category: "database" },
	{ name: "PostgreSQL", level: randomLevel(), category: "database" },
	{ name: "Python", level: randomLevel(), category: "backend" },
	{ name: "Docker", level: randomLevel(), category: "devops" },
	{ name: "AWS", level: randomLevel(), category: "devops" },
	{ name: "Git", level: randomLevel(), category: "tools" },
];

export const SkillSection = () => {
	return (
		<section id="skills" className="py-12 px-4">
			<div className="container max-w-4xl mx-auto">
				<h2 className="text-2xl font-bold mb-6">Skills</h2>

				<div className="grid gap-4">
					{skills.map((s) => (
						<div key={s.name} className="flex flex-col">
							<div className="flex justify-between mb-1">
								<span className="font-medium">{s.name}</span>
								<span className="text-sm text-muted-foreground">{s.level}</span>
							</div>
							<div className="w-full bg-background/30 rounded-full h-2">
								<div
									className="bg-primary h-2 rounded-full"
									style={{ width: s.level }}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SkillSection;