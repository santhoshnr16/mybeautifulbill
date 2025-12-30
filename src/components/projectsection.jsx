import React from "react";

const GITHUB = "https://github.com/santhoshnr16";

const projects = [
	{
		id: "p1",
		title: "Project Alpha",
		description: "A demo web app showcasing feature X and Y.",
		img: "/projects/alpha.png",
		repo: `${GITHUB}/project-alpha`,
		path: "/projects/alpha",
	},
	{
		id: "p2",
		title: "Project Beta",
		description: "Service for handling Z with a scalable design.",
		img: "/projects/beta.png",
		repo: `${GITHUB}/project-beta`,
		path: "/projects/beta",
	},
	{
		id: "p3",
		title: "Project Gamma",
		description: "Tooling and scripts for developer productivity.",
		img: "/projects/gamma.png",
		repo: `${GITHUB}/project-gamma`,
		path: "/projects/gamma",
	},
];

export const ProjectSection = () => {
	const handleLaunch = (project) => {
		if (typeof window.triggerMeteor === "function") {
			window.triggerMeteor({
				title: project.title,
				imgPath: project.img,
				duration: 1200,
				path: project.repo || project.path, // include repo/path so meteor carries it
			});
		}
	};

	return (
		<section id="projects" className="py-12 px-4">
			<div className="container max-w-5xl mx-auto">
				<div className="flex items-center justify-between mb-6">
					<h2 className="text-2xl font-bold">Projects</h2>
					<a
						href={GITHUB}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
						aria-label="View my GitHub profile"
					>
						<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
							<path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.82-.26.82-.577 0-.285-.01-1-.02-1.962-3.338.725-4.042-1.611-4.042-1.611-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.998.108-.775.418-1.305.76-1.605-2.665-.304-5.467-1.334-5.467-5.931 0-1.31.467-2.381 1.235-3.22-.124-.303-.54-1.524.116-3.176 0 0 1.005-.322 3.3 1.23.957-.266 1.98-.399 3-.405 1.02.006 2.043.139 3 .405 2.285-1.552 3.29-1.23 3.29-1.23.657 1.652.241 2.873.118 3.176.77.839 1.235 1.91 1.235 3.22 0 4.61-2.807 5.627-5.48 5.931.43.372.815 1.103.815 2.222 0 1.605-.014 2.896-.014 3.286 0 .32.216.697.824.577C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
						</svg>
						View GitHub
					</a>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					{projects.map((p) => (
						<div
							key={p.id}
							className="p-4 bg-card rounded-lg shadow-sm transform hover:scale-[1.02] transition-all duration-200 cursor-pointer"
							onClick={() => handleLaunch(p)}
						>
							<img src={p.img} alt={p.title} className="w-full h-36 object-cover rounded-lg mb-3" />
							<h3 className="font-semibold text-lg">{p.title}</h3>
							<p className="text-sm text-muted-foreground mb-4">{p.description}</p>

							<div className="flex items-center justify-between">
								<div className="flex gap-2">
									<a
										href={p.repo || GITHUB}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center gap-2 px-3 py-1 rounded border border-muted-foreground text-muted-foreground hover:bg-muted-foreground/10"
										aria-label={`View ${p.title} on GitHub`}
										onClick={(e) => e.stopPropagation()}
									>
										{/* GitHub Icon */}
										<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
											<path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.82-.26.82-.577 0-.285-.01-1-.02-1.962-3.338.725-4.042-1.611-4.042-1.611-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.998.108-.775.418-1.305.76-1.605-2.665-.304-5.467-1.334-5.467-5.931 0-1.31.467-2.381 1.235-3.22-.124-.303-.54-1.524.116-3.176 0 0 1.005-.322 3.3 1.23.957-.266 1.98-.399 3-.405 1.02.006 2.043.139 3 .405 2.285-1.552 3.29-1.23 3.29-1.23.657 1.652.241 2.873.118 3.176.77.839 1.235 1.91 1.235 3.22 0 4.61-2.807 5.627-5.48 5.931.43.372.815 1.103.815 2.222 0 1.605-.014 2.896-.014 3.286 0 .32.216.697.824.577C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
										</svg>
										<span className="text-sm">Repo</span>
									</a>
									<a href={p.path} className="inline-flex items-center px-3 py-1 rounded bg-primary text-background text-sm hover:opacity-90" onClick={(e) => e.stopPropagation()}>
										View
									</a>
								</div>

								<button
									onClick={() => handleLaunch(p)}
									className="px-3 py-1 bg-primary/90 text-background rounded text-sm hover:opacity-95"
									aria-label={`Launch ${p.title} meteor`}
								>
									Launch
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectSection;