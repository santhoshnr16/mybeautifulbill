import React, { useState, useEffect } from "react";

export const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem("theme") === "dark"; } catch { return false; }
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(d => !d)}
      aria-pressed={dark}
      style={{ position: "fixed", right: 12, top: 12, zIndex: 60, padding: "6px 10px", borderRadius: 999, background: "var(--color-card)" }}
    >
      {dark ? "Light" : "Dark"}
    </button>
  );
};

export default ThemeToggle;
