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
				duration: 1000,
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
							<path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.94 3.23 9.12 7.71 10.6.56.1.77-.24.77-.54 0-.27-.01-1-.02-1.96-3.14.68-3.8-1.51-3.8-1.51-.51-1.31-1.25-1.66-1.25-1.66-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 . 1.63.73 2.03.56.06-.44.39-.73.71-.9-2.51-.29-5.15-1.26-5.15-5.6 0-1.24.44-2.25 1.16-3.04-.12-.29-.5-1.45.11-3.02 0 0 .95-.3 3.12 1.16a10.86 10.86 0 012.84-.38c.96.01 1.93.13 2.84.38 2.17-1.46 3.12-1.16 3.12-1.16.61 1.57.23 2.73.11 3.02.72.79 1.16 1.8 1.16 3.04 0 4.35-2.65 5.3-5.17 5.59.4.34.75 1.03.75 2.07 0 1.5-.01 2.72-.01 3.09 0 .3.2.65.78.54 4.47-1.48 7.7-5.66 7.7-10.6C23.25 5.48 18.27.5 12 .5z"/>
						</svg>
						View GitHub
					</a>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					{projects.map((p) => (
						<div key={p.id} className="p-4 bg-card rounded-lg shadow-sm hover:shadow-md transform hover:scale-[1.02] transition-all duration-200">
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
									>
										{/* GitHub Icon */}
										<svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
											<path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.94 3.23 9.12 7.71 10.6.56.1.77-.24.77-.54 0-.27-.01-1-.02-1.96-3.14.68-3.8-1.51-3.8-1.51-.51-1.31-1.25-1.66-1.25-1.66-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 . 1.63.73 2.03.56.06-.44.39-.73.71-.9-2.51-.29-5.15-1.26-5.15-5.6 0-1.24.44-2.25 1.16-3.04-.12-.29-.5-1.45.11-3.02 0 0 .95-.3 3.12 1.16a10.86 10.86 0 012.84-.38c.96.01 1.93.13 2.84.38 2.17-1.46 3.12-1.16 3.12-1.16.61 1.57.23 2.73.11 3.02.72.79 1.16 1.8 1.16 3.04 0 4.35-2.65 5.3-5.17 5.59.4.34.75 1.03.75 2.07 0 1.5-.01 2.72-.01 3.09 0 .3.2.65.78.54 4.47-1.48 7.7-5.66 7.7-10.6C23.25 5.48 18.27.5 12 .5z"/>
										</svg>
										<span className="text-sm">Repo</span>
									</a>
									<a href={p.path} className="inline-flex items-center px-3 py-1 rounded bg-primary text-background text-sm hover:opacity-90">
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