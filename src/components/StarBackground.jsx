import { useEffect, useRef, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const generateStars = () => {
      const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);
      setStars(
        Array.from({ length: numberOfStars }, (_, id) => ({
          id,
          size: Math.random() * 3 + 1,
          x: Math.random() * 100,
          y: Math.random() * 100,
          opacity: Math.random() * 0.5 + 0.5,
          animationDuration: Math.random() * 4 + 2,
        }))
      );
    };

    const generateMeteors = () => {
      if (prefersReducedMotion()) {
        setMeteors([]);
        return;
      }

      setMeteors(
        Array.from({ length: 6 }, (_, id) => ({
          id,
          size: Math.random() * 2 + 1,
          x: Math.random() * 100,
          y: Math.random() * 20 + 10,
          delay: Math.random() * 15,
          animationDuration: Math.random() * 3 + 3,
          color: id % 3 === 0 ? "from-primary/60" : id % 3 === 1 ? "from-amber-200/50" : "from-white",
        }))
      );
    };

    generateStars();
    generateMeteors();

    let resizeTimeout;
    const handleResize = () => {
      window.clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(generateStars, 150);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Mouse parallax for stars
  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };

    const animate = () => {
      if (containerRef.current) {
        const { x, y } = mouseRef.current;
        containerRef.current.style.transform = `translate(${x * -8}px, ${y * -8}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Nebula clouds */}
      <div className="nebula w-96 h-96 bg-primary/6 top-[10%] left-[15%]" style={{ animationDelay: "0s" }} />
      <div className="nebula w-80 h-80 bg-amber-400/5 top-[50%] right-[10%]" style={{ animationDelay: "8s" }} />
      <div className="nebula w-72 h-72 bg-yellow-600/4 bottom-[15%] left-[40%]" style={{ animationDelay: "16s" }} />

      <div ref={containerRef} className="absolute inset-0" style={{ transition: "transform 0.15s ease-out" }}>
        {stars.map((star) => (
          <div
            key={star.id}
            className="star animate-pulse-subtle"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.x}%`,
              top: `${star.y}%`,
              opacity: star.opacity,
              animationDuration: `${star.animationDuration}s`,
            }}
          />
        ))}
      </div>

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className={`meteor animate-meteor bg-linear-to-r ${meteor.color} via-white/80 to-transparent`}
          style={{
            width: `${meteor.size * 40}px`,
            height: `${meteor.size}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};
