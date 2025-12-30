import React, { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import ThemeToggle from "./ui/ThemeToggle";

const navItems = [
	{ label: "home", href: "#home" },
	{ label: "about", href: "#about" },
	{ label: "projects", href: "#projects" },
	{ label: "contact", href: "#contact" }, // single contact entry (unique)
];

export const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 10);
		handleScroll(); // set initial value
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"}`}
		>
			<div className="container flex items-center justify-between">
				<div className="flex items-center gap-6">
					<ul className="hidden md:flex items-center gap-6">
						{navItems.map((item) => (
							<li key={item.label}>
								<a
									href={item.href}
									className="capitalize text-sm"
									onClick={(e) => {
										e.preventDefault();
										const el = document.querySelector(item.href);
										if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
										else window.location.href = item.href;
									}}
								>
									{item.label}
								</a>
							</li>
						))}
					</ul>
					<ThemeToggle />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
