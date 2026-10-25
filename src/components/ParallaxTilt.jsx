import { useCallback, useRef } from "react";
import { cn } from "../lib/utils";

export const ParallaxTilt = ({ children, className, intensity = 8, glare = true }) => {
  const ref = useRef(null);

  const handleMouseMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const rotateX = (0.5 - y) * intensity;
      const rotateY = (x - 0.5) * intensity;
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.018, 1.018, 1.018)`;

      // Set CSS variables for Apple spotlight border and ambient illumination
      el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);

      if (glare) {
        const shine = el.querySelector(".tilt-shine");
        if (shine) {
          shine.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, hsl(var(--primary) / 0.14), transparent 60%)`;
          shine.style.opacity = "1";
        }
      }
    },
    [intensity, glare]
  );

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    el.style.setProperty("--mouse-x", "-999px");
    el.style.setProperty("--mouse-y", "-999px");
    const shine = el.querySelector(".tilt-shine");
    if (shine) {
      shine.style.opacity = "0";
    }
  }, []);

  return (
    <div
      ref={ref}
      className={cn("tilt-card", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {glare && <div className="tilt-shine" aria-hidden="true" />}
      {children}
    </div>
  );
};
