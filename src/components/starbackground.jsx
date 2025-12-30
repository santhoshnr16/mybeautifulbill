import React, { useState, useEffect, useRef } from "react";

export const StarBackground = () => {
	const [stars, setStars] = useState([]);
	const [meteors, setMeteors] = useState([]);
	const meteorTimeouts = useRef([]);

	const generateStars = () => {
		const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 100000);
		const newStars = [];

		for (let i = 0; i < numberOfStars; i++) {
			newStars.push({
				id: i,
				size: Math.random() * 4 + 2,
				x: Math.random() * 100,
				y: Math.random() * 100,
				speed: Math.random() * 0.5 + 0.1,
				opacity: Math.random() * 0.5 + 0.5,
				animationDuration: Math.random() * 4 + 2
			});
		}

		setStars(newStars);
	};

	useEffect(() => {
		generateStars();
		window.addEventListener("resize", generateStars);
		return () => {
			window.removeEventListener("resize", generateStars);
			// clear any pending meteor timeouts on unmount
			meteorTimeouts.current.forEach(t => clearTimeout(t));
			meteorTimeouts.current = [];
		};
	}, []);
	const meteor = (opts = {}) => {
		const id = Date.now() + Math.random();
		const startX = Math.random() * 100; // percent from left
		const startY = Math.random() * 30;  // percent from top
		const length = Math.random() * 120 + 40; // px
		const duration = opts.duration ?? (Math.random() * 800 + 700); // ms
		const title = opts.title ?? "Shooting Star";
		const imgPath = opts.imgPath ?? null;
		const path = opts.path ?? null;
		const createdAt = Date.now();
		const temporal = opts.temporal ?? duration;

		const m = { id, startX, startY, length, duration, title, imgPath, path, createdAt, temporal };

		setMeteors(prev => [...prev, m]);

		const t = setTimeout(() => {
			setMeteors(prev => prev.filter(x => x.id !== id));
		}, duration + 200);
		meteorTimeouts.current.push(t);
	};
	useEffect(() => {
		// keep a callable trigger to launch meteors with optional data (title, imgPath, duration)
		window.triggerMeteor = (opts = {}) => meteor(opts);
		return () => { delete window.triggerMeteor; };
	}, []);

	return (
		<div style={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
			<style>{`
				@keyframes twinkle {
					0%,100% { opacity: 0.6; transform: scale(1); filter: drop-shadow(0 0 0 rgba(255,255,255,0)) }
					50%     { opacity: 1; transform: scale(1.15); filter: drop-shadow(0 0 6px rgba(255,255,255,0.9)) }
				}
				@keyframes drift {
					from { transform: translateY(0) }
					to   { transform: translateY(-120vh) }
				}
				@keyframes meteorMove {
					to {
						transform: translate(200vw, -200vh) rotate(-45deg) scale(1.1);
						opacity: 0;
						filter: blur(2px) drop-shadow(0 0 10px rgba(255,255,255,0.9));
					}
				}
				/* utility classes kept in JS styles for performance, but keyframes control glow/blur */
			`}</style>

			{stars.map((s) => (
				<div
					key={s.id}
					style={{
						position: "absolute",
						left: `${s.x}%`,
						top: `${s.y}%`,
						width: `${s.size}px`,
						height: `${s.size}px`,
						background: "white",
						borderRadius: "50%",
						opacity: s.opacity,
						boxShadow: `0 0 ${Math.max(4, s.size * 2)}px rgba(255,255,255,${Math.min(1, s.opacity + 0.2)})`,
						animation: `twinkle ${s.animationDuration}s ease-in-out ${Math.random() * 2}s infinite`,
						transform: `translateY(0)`,
						willChange: "transform, opacity, filter",
					}}
				/>
			))}

			{/* meteors (shooting stars) */}
			{meteors.map((m) => (
				<div
					key={m.id}
					id={`meteor-${m.id}`}
					title={m.title}
					data-temporal={m.temporal}
					data-path={m.path}
					style={{
						position: "absolute",
						left: `${m.startX}%`,
						top: `${m.startY}%`,
						width: `${m.length * 2}px`,
						height: "6px",
						transform: "rotate(-45deg)",
						animation: `meteorMove ${m.duration}ms cubic-bezier(.2,.9,.2,1) forwards`,
						pointerEvents: "none",
						overflow: "visible",
						willChange: "transform, opacity, filter",
						mixBlendMode: "screen",
					}}
				>
					{m.imgPath ? (
						<img
							src={m.imgPath}
							alt={m.title}
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
								display: "block",
								transform: "rotate(45deg)",
								filter: "drop-shadow(0 0 10px rgba(255,255,255,0.9))",
								borderRadius: 4,
							}}
						/>
					) : (
						<div
							style={{
								width: "100%",
								height: "3px",
								background: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.2) 40%, rgba(255,255,255,0) 100%)",
								filter: "blur(0.8px)",
								boxShadow: "0 0 8px rgba(255,255,255,0.9)",
								borderRadius: 2,
							}}
						/>
					)}
				</div>
			))}
		</div>
	);
};

export default StarBackground;
