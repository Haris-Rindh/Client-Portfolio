"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion";

const projects = [
  { id: 1, cat: 'branding', title: 'Noor Cosmetics — Brand Identity', desc: 'A complete brand identity for a luxury cosmetics line...', icon: '💄', code: 'NOOR\nCOSMETICS', colors: ['#0a0a0a', '#1a1a1a'] },
  { id: 2, cat: 'uiux', title: 'EduTrack — Mobile App UI', desc: 'A clean, modern mobile application...', icon: '📲', colors: ['#050f08', '#0d1f12'] },
  { id: 3, cat: 'social', title: 'Ramadan Campaign Series', desc: 'A 30-piece Ramadan social media content series...', icon: '🌙', colors: ['#0d0d00', '#1a1a05'] },
  { id: 4, cat: 'branding', title: 'Sobria Marketing — Rebrand', desc: 'Led the internal rebranding...', icon: '⚡', colors: ['#000d05', '#011a0a'] },
  { id: 5, cat: 'print', title: 'Event Banners & Collateral', desc: 'Large-format banners, flex boards...', icon: '🏛️', colors: ['#0a050d', '#150a1f'] },
  { id: 6, cat: 'uiux', title: 'Marketplace Dashboard UI', desc: 'A comprehensive admin dashboard...', icon: '📊', colors: ['#050a0d', '#0a1520'] },
];

interface ProjectData {
  id: number;
  cat: string;
  title: string;
  desc: string;
  icon: string;
  code?: string;
  colors: string[];
}

function ProjectCard({ p, isLarge }: { p: ProjectData; isLarge: boolean }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const maskImage = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(1,218,94,0.15), transparent 80%)`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -40 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`rounded-3xl overflow-hidden relative cursor-none bg-surface-3 group border border-white/5 ${isLarge ? 'md:col-span-2 aspect-[16/7]' : 'col-span-1 aspect-[4/3]'} shadow-2xl will-change-transform`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 z-20"
        style={{ background: maskImage }}
      />

      <div
        className="w-full h-full flex items-center justify-center text-5xl transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 relative overflow-hidden will-change-transform"
        style={{ background: `linear-gradient(135deg, ${p.colors[0]}, ${p.colors[1]})` }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(1,218,94,0.1)_0%,transparent_60%)] pointer-events-none" />
        <motion.div animate={{ scale: isHovered ? 1.2 : 1, rotate: isHovered ? 5 : 0 }} className="opacity-70 z-10 will-change-transform">{p.icon}</motion.div>
        {p.code && (
          <motion.div
            animate={{ x: isHovered ? -10 : 0, opacity: isHovered ? 0.3 : 0.15 }}
            className="absolute bottom-6 left-6 font-display text-2xl whitespace-pre-line font-extrabold tracking-[-0.02em] leading-[0.9] uppercase transition-all duration-700"
          >
            {p.code}
          </motion.div>
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent flex flex-col items-start justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-[0.7rem] font-bold tracking-widest uppercase text-green mb-2"
        >
          {p.cat}
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="font-display text-[1.4rem] font-extrabold mb-5 text-white"
        >
          {p.title}
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="px-6 py-2.5 text-[0.8rem] font-bold text-black bg-white rounded-full hover:bg-green shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(1,218,94,0.5)] transition-all duration-300"
        >
          View Project →
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const yParallax = useTransform(scrollYProgress, [0, 1], [30, -50]);

  const filteredProjects = projects.filter(p => filter === 'all' || p.cat === filter);

  return (
    <section ref={sectionRef} id="portfolio" className="py-16 md:py-32 px-5 sm:px-8 md:px-12 lg:px-16 bg-surface relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-green/5 blur-[100px] rounded-full pointer-events-none z-0" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 md:gap-8 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="section-label">Selected Work</div>
            <h2 className="section-title text-[clamp(2rem,6vw,3.5rem)]">My <br className="hidden sm:block" /><span>Portfolio</span></h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="flex flex-wrap gap-2 sm:gap-3"
          >
            {['all', 'branding', 'social', 'uiux', 'print'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold tracking-wide rounded-full border cursor-none transition-all duration-300 capitalize ${filter === f ? 'border-green text-green bg-green/15 shadow-[0_0_20px_rgba(1,218,94,0.3)] scale-105' : 'border-white/10 text-white/50 bg-surface-2 hover:border-green/50 hover:text-white hover:bg-white/5 hover:scale-105'}`}
              >
                {f === 'uiux' ? 'UI/UX' : f === 'social' ? 'Social Media' : f}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, index) => {
              const isLarge = index === 0 || index === 3;
              return (
                <motion.div 
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 40 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 20 }}
                  style={!isLarge ? { y: yParallax } : {}}
                  className={`relative ${isLarge ? 'md:col-span-2' : 'col-span-1'}`}
                >
                  <ProjectCard p={p} isLarge={isLarge} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
