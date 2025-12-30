
export const AboutMe = () => {
	return (
		<section id="about" className="py-2 px-4 relative">
			<div className="container max-w-4xl mx-auto text-center mb-12">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<div className="text-lg leading-relaxed text-left">
						<h3 className="font-semibold text-xl mb-4">
							Passionate about AI engineering and systems
						</h3>

						<p className="text-muted-foreground mb-4">
							With a strong foundation in machine learning algorithms and data
							analysis techniques, I build intelligent systems that learn from data
							and make informed decisions.
						</p>

						<p className="text-muted-foreground mb-4">
							Beyond technical skills, I'm a collaborative team player who thrives
							in dynamic environments and enjoys designing scalable systems.
						</p>

						<div className="flex flex-wrap gap-2 justify-start mb-4">
							<span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
								Web Development
							</span>
							<span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
								System Design
							</span>
							<span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
								Data Analysis
							</span>
							<span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
								Machine Learning
							</span>
						</div>

						<div className="flex gap-4">
							<a
								href="#contact"
								className="cosmic-button"
							>
								Contact me
							</a>
							<a
								href="#projects"
								className="cosmic-button"
							>
								View projects
							</a>
						</div>
					</div>

					<div className="grid place-items-center">
						<img
							src="https://raw.githubusercontent.com/santhoshnr16/mybeautifulbill/refs/heads/main/public/projects/dp.jpeg"
							alt="avatar"
							className="w-80 h-90 rounded-full object-cover shadow-md"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;