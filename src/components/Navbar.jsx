import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navItems, profile } from "../data/portfolio";
import { cn } from "../lib/utils";

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const menuContainerRef = useRef(null);
  const wasMenuOpenRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

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

  useEffect(() => {
    if (!isMenuOpen) {
      if (wasMenuOpenRef.current) {
        menuButtonRef.current?.focus();
      }
      wasMenuOpenRef.current = false;
      return;
    }

    wasMenuOpenRef.current = true;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const firstFocusableElement = menuContainerRef.current?.querySelector(
      'a[href]:not([disabled]), button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    firstFocusableElement?.focus();

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed inset-x-0 top-0 z-40 px-4 py-4" aria-label="Main navigation">
      <div
        className={cn(
          "container mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300",
          isScrolled ? "border-border bg-background/85 shadow-lg backdrop-blur-xl" : "border-transparent bg-background/35 backdrop-blur-sm"
        )}
      >
        <a href="#hero" className="flex items-center gap-3 text-left font-black tracking-tight" aria-label="Go to home section">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20">RB</span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm text-muted-foreground">{profile.role}</span>
            <span className="block">{profile.shortName}</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-border bg-card/65 p-1 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              {item.name}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden rounded-full bg-foreground px-5 py-2.5 text-sm font-bold text-background transition-transform hover:-translate-y-0.5 md:inline-flex">
          Let&apos;s talk
        </a>

        <button
          type="button"
          ref={menuButtonRef}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="z-50 rounded-full p-2 text-foreground transition-colors hover:bg-primary/10 md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        ref={menuContainerRef}
        className={cn(
          "fixed inset-0 z-30 flex flex-col items-center justify-center bg-background/95 backdrop-blur-xl transition-opacity duration-300 md:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center gap-6 text-3xl font-black">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-primary" onClick={() => setIsMenuOpen(false)}>
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
