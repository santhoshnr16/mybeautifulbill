import React, { useState, useEffect } from "react";
import { cn } from '@/lib/utlis';

const navItems = [
	{ label: "home", href: "#hero" },
	{ label: "about", href: "#about" },
	{ label: "contact", href: "#contact" },
	{ label: "projects", href: "#projects" },
	{ label: "contact", href: "#contact" },
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
			className={cn(
				"fixed w-full z-40 transition-all duration-300",
				isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
			)}
		>
			<div className="container flex items-center justify-between">
				<a className="text-xl font-bold text-primary flex items-center">
					<span className="text-glow text-foreground">NR santhosh</span>
					<span className="ml-2">portfolio</span>
				</a>

				<ul className="hidden md:flex items-center gap-6">
					{navItems.map((item) => (
						<li key={item.href}>
							<a href={item.href} className="text- foreground hover:text-primary transition-colors duration-300">
								{item.label}
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
