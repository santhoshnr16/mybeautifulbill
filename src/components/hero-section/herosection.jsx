import React from "react";

export const Herosection = () => {
	const professions = ["AI engineer", "Web developer", "System designer"];
	const neonColors = ["neon-cyan", "neon-pink", "neon-lime"];

	return (
		<section id="home" className="mt-32 mb-2">
			<div className="container max-w-4xl mx-auto text-center">
				<h1 className="text-4xl sm:text-5xl font-bold mb-4">
					<span className="text-[#f8fafc]">Hi</span>, I'm Santhosh
				</h1>
				<div className="text-slider-container">
					{professions.map((prof, index) => (
						<span
							key={prof}
							className={`neon-text ${neonColors[index]}`}
							style={{
								animationDelay: `${index * 4}s`,
								animationDuration: `${professions.length * 4}s`,
							}}
						>
							{prof}
						</span>
					))}
				</div>

				<div
					className="flex justify-center gap-4 animate-fade-in"
					style={{ animationDelay: "1.5s", opacity: 0 }}
				>
					<button className="cosmic-button">Contact Me</button>
					<button
						className="cosmic-button"
						style={{
							background: "transparent",
							border: "1px solid var(--color-primary)",
						}}
					>
						View Work
					</button>
				</div>
			</div>
		</section>
	);
};

export default Herosection;