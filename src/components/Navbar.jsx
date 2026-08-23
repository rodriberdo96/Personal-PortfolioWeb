import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { navItems, profile } from "../data/portfolio";
import { cn } from "../lib/utils";

import { ThemeToggle } from "./ThemeToggle";

export const NavBar = () => {
  const { lang, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const menuButtonRef = useRef(null);
  const menuContainerRef = useRef(null);
  const wasMenuOpenRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const handleScrollActive = () => {
      const scrollPos = window.scrollY + 200;
      const sectionIds = navItems.map((item) => item.href.replace("#", ""));
      
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(`#${id}`);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollActive, { passive: true });
    handleScrollActive();
    return () => window.removeEventListener("scroll", handleScrollActive);
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

  const getNavName = (name) => {
    const map = {
      Home: t.nav.home,
      About: t.nav.about,
      Skills: t.nav.skills,
      Work: t.nav.work,
      Contact: t.nav.contact,
    };
    return map[name] || name;
  };

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-40 w-full transition-all duration-300 nav-slide-down border-b",
        isScrolled
          ? "border-border bg-background/80 shadow-lg backdrop-blur-xl"
          : "border-transparent bg-background/20 backdrop-blur-xs"
      )}
      aria-label="Main navigation"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center gap-3 text-left font-black tracking-tight" aria-label="Go to home section">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20">RB</span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm text-muted-foreground">{profile.role}</span>
            <span className="block">{profile.shortName}</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-semibold transition-colors duration-200 hover:text-primary relative py-1",
                activeSection === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {getNavName(item.name)}
              {activeSection === item.href && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-full p-2 text-xs font-black transition-colors duration-200 hover:bg-primary/10 text-foreground"
            aria-label={lang === "en" ? "Cambiar a Español" : "Switch to English"}
            title={lang === "en" ? "Cambiar a Español" : "Switch to English"}
          >
            {lang === "en" ? "ES" : "EN"}
          </button>

          <ThemeToggle />

          <a href="#contact" className="hidden rounded-full bg-foreground px-5 py-2.5 text-sm font-bold text-background transition-colors duration-200 hover:shadow-lg hover:shadow-primary/15 md:inline-flex">
            {t.nav.letsTalk}
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
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "transition-colors hover:text-primary",
                activeSection === item.href && "text-primary"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {getNavName(item.name)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
