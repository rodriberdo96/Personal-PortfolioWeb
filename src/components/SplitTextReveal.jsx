import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";

export const SplitTextReveal = ({ text, className, as: Component = "h2", delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const words = text.split(" ");

  return (
    <Component ref={ref} className={cn(className)} aria-label={text} style={{ perspective: "600px" }}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.3em]">
          {word.split("").map((char, charIndex) => {
            const totalIndex = words.slice(0, wordIndex).join("").length + charIndex;
            return (
              <span
                key={`${wordIndex}-${charIndex}`}
                className={cn("split-char", isVisible && "is-revealed")}
                style={{ transitionDelay: `${totalIndex * 30}ms` }}
                aria-hidden="true"
              >
                {char}
              </span>
            );
          })}
        </span>
      ))}
    </Component>
  );
};
