import React from "react";
import ThemeToggle from "@/components/theme-toggle";
import StarBackground from "@/components/starbackground";
import Herosection from "@/components/hero-section/herosection";
import Navbar from "@/components/navbar";
import AboutSection from "@/components/aboutme"; // default export from aboutme.jsx
import SkillSection from "@/components/skillsection"; // default export from skillsection.jsx
import ProjectSection from "@/components/projectsection"; // default export (ensure file exists)

export const Home = () => {
	return (
		<div className="min-h-screen bg-background text-foreground overflow-x-hidden">
			{/* theme toggle */}
			<ThemeToggle />

			{/* background effect */}
			<StarBackground />

			{/* navbar */}
			<Navbar />

			{/* main content */}
			<main>
				<Herosection />
				<AboutSection />
				<SkillSection />
				<ProjectSection />
			</main>
		</div>
	);
};

export default Home;