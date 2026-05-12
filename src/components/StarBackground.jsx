import { useEffect, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

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
        Array.from({ length: 4 }, (_, id) => ({
          id,
          size: Math.random() * 2 + 1,
          x: Math.random() * 100,
          y: Math.random() * 10 + 20,
          delay: Math.random() * 15,
          animationDuration: Math.random() * 3 + 3,
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

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
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

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
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
