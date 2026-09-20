"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("digify-theme");

    if (savedTheme === "light") {
      document.documentElement.classList.add("light");
      setDark(false);
    } else {
      document.documentElement.classList.remove("light");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const isLight =
      document.documentElement.classList.toggle("light");

    setDark(!isLight);

    localStorage.setItem(
      "digify-theme",
      isLight ? "light" : "dark"
    );
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {dark ? "☀" : "☾"}
    </button>
  );
}