import React, { useEffect } from "react";
import "./index.css";
import Home from "./pages/home";
import ErrorBoundary from "./components/error-boundary";

export const App = () => {
	// No-op Toaster (install react-hot-toast and re-enable dynamic import if needed)
	const Toaster = () => null;

	useEffect(() => {
		console.log("App mounted");
	}, []);

	const DebugOverlay = () => (
		<div style={{ position: "fixed", right: 12, top: 12, zIndex: 9999, background: "rgba(0,0,0,0.6)", color: "#fff", padding: "6px 8px", borderRadius: 6, fontSize: 12 }}>
			<div>App mounted</div>
			<div style={{ fontSize: 11, opacity: 0.9 }}>triggerMeteor: {typeof window !== "undefined" && typeof window.triggerMeteor === "function" ? "yes" : "no"}</div>
		</div>
	);

	return (
		<ErrorBoundary>
			<DebugOverlay />
			<Home />
			<Toaster />
		</ErrorBoundary>
	);
};

export default App;
