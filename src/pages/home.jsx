import React, { useEffect } from "react";
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
		<div className="min-h-screen bg-transparent text-foreground overflow-x-hidden">
			{/* background effect */}
			<StarBackground />

			{/* navbar */}
			<Navbar />

			{/* main content */}
			<main className="relative z-10 bg-transparent ">
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