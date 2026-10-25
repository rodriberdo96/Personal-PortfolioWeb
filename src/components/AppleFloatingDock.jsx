import { ArrowUp, MessageSquare, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { cn } from "../lib/utils";

export const AppleFloatingDock = () => {
  const { lang, t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100));
        setScrollProgress(progress);
      }
      setIsVisible(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Circular progress calculations for the Apple Watch-like ring
  const radius = 14;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        isVisible ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" : "opacity-0 translate-y-6 scale-95 pointer-events-none"
      )}
      aria-label="Quick navigation dock"
    >
      <div className="flex items-center gap-2 rounded-full border border-border/80 bg-background/85 p-1.5 shadow-2xl backdrop-blur-2xl ring-1 ring-primary/20 hover:ring-primary/40 transition-all duration-300">
        {/* Quick Contact Button */}
        <a
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-primary/10 hover:bg-primary px-3.5 py-1.5 text-xs font-bold text-primary hover:text-primary-foreground transition-all duration-300"
          title={lang === "es" ? "Contactar a Rodrigo" : "Contact Rodrigo"}
        >
          <Sparkles className="h-3.5 w-3.5 text-primary group-hover:text-primary-foreground transition-colors animate-pulse" />
          <span className="hidden sm:inline">{lang === "es" ? "Hablemos" : "Let's Talk"}</span>
        </a>

        {/* Circular Progress & Scroll-to-Top Button */}
        <button
          type="button"
          onClick={scrollToTop}
          className="relative grid h-9 w-9 place-items-center rounded-full bg-secondary/80 hover:bg-primary/20 text-foreground transition-transform hover:scale-105 active:scale-95"
          aria-label={lang === "es" ? "Volver arriba" : "Scroll to top"}
          title={lang === "es" ? "Volver arriba" : "Scroll to top"}
        >
          <svg className="absolute inset-0 -rotate-90 h-9 w-9" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r={radius}
              className="text-border stroke-current"
              strokeWidth="2.5"
              fill="none"
            />
            <circle
              cx="18"
              cy="18"
              r={radius}
              className="text-primary stroke-current transition-all duration-150"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          <ArrowUp className="h-4 w-4 relative z-10 text-primary" />
        </button>
      </div>
    </div>
  );
};
