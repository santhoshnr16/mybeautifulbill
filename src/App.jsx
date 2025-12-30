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
		null
	);

	return (
		<ErrorBoundary>
			<Home />
			<Toaster />
		</ErrorBoundary>
	);
};

export default App;
