import { createElement, useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";

export const SectionReveal = ({ as = "div", className, children, delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref,
      className: cn("reveal-up", isVisible && "is-visible", className),
      style: { transitionDelay: `${delay}ms` },
    },
    children
  );
};
