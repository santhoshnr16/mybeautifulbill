import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx"; // import the canonical App with exact casing

const root = createRoot(document.getElementById("root"));
root.render(<App />);
