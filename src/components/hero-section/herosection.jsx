import React from "react";

export const Herosection = () => {
	return (
		<section id="home" className="py-24 px-4">
			<div className="container max-w-4xl mx-auto text-center">
				<h1 className="text-4xl sm:text-5xl font-bold mb-4">Hi, I'm Santhosh</h1>
				<p className="text-lg text-muted-foreground mb-6">
					AI engineer • Web developer • System designer — I build intelligent, scalable applications.
				</p>
				<div className="flex justify-center gap-4">
					<a href="#projects" className="cosmic-button">View Projects</a>
					<a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10">Contact</a>
				</div>
			</div>
		</section>
	);
};

export default Herosection;
