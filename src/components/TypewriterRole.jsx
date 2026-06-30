import { useEffect, useRef, useState, useCallback } from "react";

export const TypewriterRole = ({ roles, className }) => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);

  const currentRole = roles[roleIndex];

  const tick = useCallback(() => {
    if (isPaused) {
      timeoutRef.current = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000);
      return;
    }

    if (isDeleting) {
      setText((prev) => prev.slice(0, -1));
      if (text.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    } else {
      setText(currentRole.slice(0, text.length + 1));
      if (text.length === currentRole.length) {
        setIsPaused(true);
      }
    }
  }, [text, isDeleting, isPaused, currentRole, roles.length]);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setText(roles[0]);
      return undefined;
    }

    const speed = isDeleting ? 40 : isPaused ? 2000 : 80;
    timeoutRef.current = setTimeout(tick, speed);

    return () => clearTimeout(timeoutRef.current);
  }, [tick, isDeleting, isPaused, roles]);

  return (
    <span className={className} aria-label={roles.join(", ")}>
      {text}
      <span className="typewriter-cursor" aria-hidden="true" />
    </span>
  );
};
