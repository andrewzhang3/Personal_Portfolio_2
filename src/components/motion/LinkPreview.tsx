import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from 'motion/react';
import type { Project } from "./Project";

export default function LinkPreview({ project, children }: { project: Project; children: React.ReactNode }) {
  const [hover, setHover] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const linkRef = useRef<HTMLAnchorElement>(null);

  // calculate screen position on hover
  const handleEnter = () => {
    if (linkRef.current) {
      const rect = linkRef.current.getBoundingClientRect();
      setCoords({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
      setHover(true);
    }
  };

  // hide card on scroll (optional, keeps alignment consistent)
  useEffect(() => {
    if (!hover) return;
    const handleScroll = () => setHover(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hover]);

  return (
    <>
      <motion.a
        aria-label={`Find out more at ${project.title} website.`}
        ref={linkRef}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-secondary hover:text-accent transition-colors"
        href={project.demo}
        onMouseEnter={handleEnter}
        onMouseLeave={() => setHover(false)}
      >
        {children}
      </motion.a>

      {hover &&
        createPortal(
          <div
            className="absolute z-[9999] w-64 rounded-xl bg-white shadow-lg border p-3 animate-fadeIn"
            style={{
              top: coords.top,
              left: coords.left,
            }}
          >
            <img src={project.image} alt={project.title} className="rounded-md mb-2" />
            <div className="font-semibold">{project.title}</div>
            <div className="text-sm text-gray-600">{project.description}</div>
            <div className="text-xs text-gray-400 mt-2 truncate">{project.demo}</div>
          </div>,
          document.body
        )}
    </>
  );
}