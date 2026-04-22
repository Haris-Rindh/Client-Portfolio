"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let lastUpdateTime = 0;
    const throttleDelay = 16; // ~60fps

    const updateMousePosition = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastUpdateTime >= throttleDelay) {
        setMousePosition({ x: e.clientX, y: e.clientY });
        lastUpdateTime = now;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 bg-green rounded-full pointer-events-none z-[9999] will-change-transform"
        animate={{
          x: mousePosition.x - (isHovering ? 6 : 4),
          y: mousePosition.y - (isHovering ? 6 : 4),
          width: isHovering ? 12 : 8,
          height: isHovering ? 12 : 8,
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.05 }}
      />
      <motion.div
        className="fixed top-0 left-0 border border-green rounded-full pointer-events-none z-[9998] will-change-transform"
        animate={{
          x: mousePosition.x - (isHovering ? 26 : 18),
          y: mousePosition.y - (isHovering ? 26 : 18),
          width: isHovering ? 52 : 36,
          height: isHovering ? 52 : 36,
          borderColor: isHovering ? "rgba(1, 218, 94, 1)" : "rgba(1, 218, 94, 0.5)",
        }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.08 }}
      />
    </>
  );
}
