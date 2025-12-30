import React, { useEffect } from "react";
import ThemeToggle from "../components/theme-toggle";
import StarBackground from "../components/starbackground";
import Herosection from "../components/hero-section/herosection.jsx";
import Navbar from "../components/navbar";
import AboutSection from "../components/aboutme";
import SkillSection from "../components/skillsection";
import ProjectSection from "../components/projectsection";
import ContactSection from "../components/contactsection";

export const Home = () => {
	useEffect(() => {
		// enable smooth scrolling for anchor navigation
		const prev = document.documentElement.style.scrollBehavior;
		document.documentElement.style.scrollBehavior = "smooth";
		return () => {
			document.documentElement.style.scrollBehavior = prev || "";
		};
	}, []);

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
				<ContactSection />
			</main>
		</div>
	);
};

export default Home;