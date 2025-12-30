import React, { useState } from "react";

export const ContactSection = () => {
	const EMAIL = "santhoshsanthuvirat1603@gmail.com";
	const PHONE = "+91 9789840084";
	const LOCATION = "Chennai, India";
	const MAP_LINK = "https://www.google.com/maps/search/?api=1&query=Chennai+India";
	const LINKEDIN = "https://www.linkedin.com/in/santhosh-n-r-b9144130a/";

	// appointment form state
	const [name, setName] = useState("");
	const [visitorEmail, setVisitorEmail] = useState("");
	const [message, setMessage] = useState("");
	const [status, setStatus] = useState(null); // { type: 'success'|'error', title?, description?, text? }

	const validateEmail = (e) => /^\S+@\S+\.\S+$/.test(e);

	const handleSubmit = (e) => {
		e && e.preventDefault();
		// simple validation
		if (!name.trim() || !visitorEmail.trim() || !message.trim()) {
			setStatus({ type: "error", text: "Please fill name, your email and a short message." });
			return;
		}
		if (!validateEmail(visitorEmail)) {
			setStatus({ type: "error", text: "Please enter a valid email address." });
			return;
		}

		const subj = `Appointment request from ${name}`;
		const bodyLines = [
			`Name: ${name}`,
			`Email: ${visitorEmail}`,
			`Preferred time: ${datetime || "Not specified"}`,
			"",
			"Message:",
			message
		];
		const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

		window.location.href = mailto;

		setStatus({
			type: "success",
			title: "Thank you for your submission",
			description: "Your appointment request has been prepared in your mail client. Please send the email to complete booking. I will respond as soon as possible."
		});

		// clear fields
		setName("");
		setVisitorEmail("");
		setDatetime("");
		setMessage("");
	};

	const closeStatus = () => setStatus(null);

	return (
		<section id="contact" className="py-12 px-4">
			<div className="container max-w-4xl mx-auto bg-card/60 rounded-lg p-6 shadow-sm flex flex-col items-center">
				<h2 className="text-2xl font-bold mb-4 text-center">Contact</h2>
				<p className="text-muted-foreground mb-6 text-center">
					Feel free to reach out — I&apos;m available for projects and collaborations.
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
					<a
						href={`mailto:${EMAIL}`}
						className="flex items-center gap-3 p-4 rounded-md hover:bg-primary/5 transition"
						aria-label={`Send email to ${EMAIL}`}
					>
						{/* mail icon */}
						<svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12l-4-3-4 3m8 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v6z" />
						</svg>
						<div>
							<div className="font-medium">Email</div>
							<div className="text-sm text-muted-foreground">{EMAIL}</div>
						</div>
					</a>

					<a
						href={`tel:+919789840084`}
						className="flex items-center gap-3 p-4 rounded-md hover:bg-primary/5 transition"
						aria-label={`Call ${PHONE}`}
					>
						{/* phone icon */}
						<svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h2l2 5 3-1 3 6 4 2 2-2v-3l-3-1" />
						</svg>
						<div>
							<div className="font-medium">Phone</div>
							<div className="text-sm text-muted-foreground">{PHONE}</div>
						</div>
					</a>

					<a
						href={MAP_LINK}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-3 p-4 rounded-md hover:bg-primary/5 transition"
						aria-label={`Open ${LOCATION} on map`}
					>
						{/* location icon */}
						<svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z" />
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s7-4.5 7-10a7 7 0 10-14 0c0 5.5 7 10 7 10z" />
						</svg>
						<div>
							<div className="font-medium">Location</div>
							<div className="text-sm text-muted-foreground">{LOCATION}</div>
						</div>
					</a>

					<a
						href={LINKEDIN}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-3 p-4 rounded-md hover:bg-primary/5 transition"
						aria-label="View LinkedIn profile"
					>
						{/* LinkedIn icon */}
						<svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
							<path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V7H0v17zM8 7h4.7v2.3h.1c.7-1.3 2.4-2.6 4.9-2.6C23.3 6.7 24 10 24 14.8V24h-5v-8c0-2-1-3.3-2.8-3.3-1.5 0-2.4 1-2.8 2v9.3H8V7z"/>
						</svg>
						<div>
							<div className="font-medium">LinkedIn</div>
							<div className="text-sm text-muted-foreground">Santhosh</div>
						</div>
					</a>
				</div>

				<div className="mt-6 w-full">
					<h3 className="text-lg font-semibold mb-3 text-center">Get in touch / Book an appointment</h3>
					<form onSubmit={handleSubmit} className="grid gap-3">
						<div className="grid sm:grid-cols-2 gap-3">
							<input
								value={name}
								onChange={(e) => setName(e.target.value)}
								placeholder="Your name"
								className="w-full p-3 rounded border bg-transparent"
								required
								aria-label="Your name"
							/>
							<input
								value={visitorEmail}
								onChange={(e) => setVisitorEmail(e.target.value)}
								placeholder="Your email"
								className="w-full p-3 rounded border bg-transparent"
								required
								aria-label="Your email"
								type="email"
							/>
						</div>

						<textarea
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							placeholder="Short message or notes (what you'd like to discuss)"
							className="w-full p-3 rounded border bg-transparent min-h-[120px]"
							required
							aria-label="Message"
						/>

						<div className="flex items-center justify-center gap-3">
							<button type="submit" className="px-4 py-2 bg-primary text-background rounded">
								Send appointment email
							</button>
							<button
								type="button"
								className="px-4 py-2 border rounded"
								onClick={() => {
									setName("");
									setVisitorEmail("");
									setMessage("");
									setStatus(null);
								}}
							>
								Clear
							</button>

							{status && status.type === "success" && (
								<div className="p-3 rounded-md bg-green-50 border border-green-200 text-green-800 max-w-lg" role="status" aria-live="polite">
									<div className="flex items-start justify-between gap-4">
										<div>
											<h4 className="font-semibold">{status.title}</h4>
											<p className="text-sm text-green-700 mt-1">{status.description}</p>
										</div>
										<button aria-label="Dismiss message" onClick={closeStatus} className="text-green-600 hover:text-green-800">
											✕
										</button>
									</div>
								</div>
							)}

							{status && status.type === "error" && (
								<span className="text-sm text-red-500" role="status" aria-live="polite">
									{status.text}
								</span>
							)}
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
