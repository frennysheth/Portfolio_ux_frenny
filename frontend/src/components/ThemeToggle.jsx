import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

// Light/Dark theme toggle. Persists to localStorage and toggles the `dark`
// class on <html>. The initial class is set by an inline script in index.html
// to avoid a flash of the wrong theme.
export default function ThemeToggle({ testId = "theme-toggle" }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch (e) {}
  };

  return (
    <button
      onClick={toggle}
      data-testid={testId}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative inline-flex h-8 w-14 items-center rounded-full border border-wine/30 bg-paper/60 px-1 transition-colors hover:border-wine"
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
        className="flex h-6 w-6 items-center justify-center rounded-full bg-wine text-paper"
        style={{ marginLeft: dark ? "auto" : 0 }}
      >
        {dark ? <Moon size={13} /> : <Sun size={13} />}
      </motion.span>
    </button>
  );
}
