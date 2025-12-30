import React from "react";

export class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: null, info: null };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true, error };
	}

	componentDidCatch(error, info) {
		this.setState({ error, info });
		// keep console trace for debugging
		console.error("ErrorBoundary caught:", error, info);
	}

	render() {
		if (!this.state.hasError) {
			return this.props.children;
		}

		const { error, info } = this.state;
		return (
			<div style={{ padding: 20, maxWidth: 800, margin: "40px auto", background: "#fff6", borderRadius: 8 }}>
				<h2 style={{ margin: 0 }}>Something went wrong</h2>
				<p style={{ marginTop: 8, color: "#b00" }}>{error && String(error)}</p>
				<pre style={{ whiteSpace: "pre-wrap", fontSize: 12, color: "#333" }}>{info && info.componentStack}</pre>
				<div style={{ marginTop: 12 }}>
					<button onClick={() => window.location.reload()} style={{ marginRight: 8 }}>
						Reload page
					</button>
				</div>
			</div>
		);
	}
}

export default ErrorBoundary;