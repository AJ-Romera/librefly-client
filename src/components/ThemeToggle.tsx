import React, { useState, useEffect } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  /* Optional: */
  /* useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []); */

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button className="p-2" onClick={handleThemeSwitch}>
      {theme === "dark" ? (
        <HiOutlineSun size={18} />
      ) : (
        <HiOutlineMoon size={18} />
      )}
    </button>
  );
};

export default ThemeToggle;
