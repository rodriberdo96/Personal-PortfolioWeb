import { useCallback, useRef } from "react";
import { cn } from "../lib/utils";

export const MagneticButton = ({ children, className, as: Component = "button", strength = 0.3, ...props }) => {
  const ref = useRef(null);

  const handleMouseMove = useCallback(
    (e) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform = "translate(0, 0)";
    }
  }, []);

  return (
    <Component
      ref={ref}
      className={cn("magnetic-btn", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </Component>
  );
};
