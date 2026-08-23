import { useEffect, useRef, useState } from "react";

export const OrbitingSkills = ({ skills }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const innerSkills = skills.slice(0, Math.ceil(skills.length / 2));
  const outerSkills = skills.slice(Math.ceil(skills.length / 2));

  return (
    <div ref={containerRef} className="orbit-container" style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.8s ease" }}>
      {/* Center node */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-24 h-24 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center backdrop-blur-sm">
          <div className="w-16 h-16 rounded-full bg-primary/25 border border-primary/40 flex items-center justify-center">
            <span className="text-sm font-black text-primary tracking-tight">STACK</span>
          </div>
        </div>
      </div>

      {/* Inner orbit ring */}
      <div className="absolute inset-[20%] rounded-full border border-border/50" />

      {/* Outer orbit ring */}
      <div className="absolute inset-[5%] rounded-full border border-border/30" />

      {/* Inner orbit items */}
      {innerSkills.map((skill, index) => {
        const angle = (360 / innerSkills.length) * index;
        const duration = 25 + index * 2;
        return (
          <div
            key={skill}
            className="orbit-item"
            style={{
              "--orbit-r": "30%",
              "--orbit-duration": `${duration}s`,
              animationDelay: `${-duration * (angle / 360)}s`,
              opacity: isVisible ? 1 : 0,
              transition: `opacity 0.5s ease ${index * 100}ms`,
            }}
          >
            <div className="orbit-item-inner text-xs">
              {skill}
            </div>
          </div>
        );
      })}

      {/* Outer orbit items */}
      {outerSkills.map((skill, index) => {
        const angle = (360 / outerSkills.length) * index;
        const duration = 35 + index * 2;
        return (
          <div
            key={skill}
            className="orbit-item"
            style={{
              "--orbit-r": "45%",
              "--orbit-duration": `${duration}s`,
              animationDelay: `${-duration * (angle / 360)}s`,
              animationDirection: "reverse",
              opacity: isVisible ? 1 : 0,
              transition: `opacity 0.5s ease ${(innerSkills.length + index) * 100}ms`,
            }}
          >
            <div
              className="orbit-item-inner text-xs"
              style={{ animationDirection: "normal" }}
            >
              {skill}
            </div>
          </div>
        );
      })}
    </div>
  );
};
