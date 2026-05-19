import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "../lib/utils";

const getInitialTheme = () => {
  if (typeof window === "undefined") {
    return true;
  }

  const storedTheme = window.localStorage.getItem("theme");
  if (storedTheme) {
    return storedTheme === "dark";
  }

  return true;
};

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    window.localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => setIsDarkMode((current) => !current)}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "fixed right-5 z-50 rounded-full p-2 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary max-sm:hidden",
        isScrolled
          ? "top-[8px] bg-background/80 shadow-xs backdrop-blur-md"
          : "top-[15px] bg-transparent"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" aria-hidden="true" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" aria-hidden="true" />
      )}
    </button>
  );
};
