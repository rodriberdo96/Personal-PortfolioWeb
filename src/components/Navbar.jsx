import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 z-40 w-full transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
      aria-label="Main navigation"
    >
      <div className="container flex items-center justify-between pr-16">
        <a href="#hero" className="flex items-center text-xl font-bold text-primary">
          <span className="relative z-10">
            <span className="text-glow text-foreground">Rodri Berdomas</span> Portfolio
          </span>
        </a>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              {item.name}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>

        <div
          id="mobile-menu"
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center z-40",
            "transition-opacity duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col text-xl items-center space-y-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
