"use client";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const navItems = ['About', 'Services', 'Work', 'Education', 'Skills', 'Contact'];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-[100] px-4 sm:px-6 md:px-12 transition-all duration-500 flex items-center justify-between ${
        scrolled ? "py-3 sm:py-4 bg-black/70 backdrop-blur-xl border-b border-white/10" : "py-4 sm:py-6 bg-transparent"
      }`}
    >
      <div className="font-display text-lg sm:text-xl font-extrabold tracking-tight">
        W<span className="text-green">.</span>Idrees
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6 lg:gap-9">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase() === 'work' ? 'portfolio' : item.toLowerCase()}`}
              className="text-xs md:text-sm font-medium tracking-wide text-white/70 hover:text-white focus-ring-subtle transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-green transition-all duration-300 group-hover:w-full group-focus-within:w-full" />
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <a
          href="https://www.linkedin.com/in/graphicdesignlogodesignpostdesignbannerdesign0987/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:block px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-semibold tracking-wide text-black bg-green rounded-full hover:shadow-[0_0_24px_rgba(1,218,94,0.4)] hover:-translate-y-0.5 transition-all duration-300 focus-ring"
        >
          LinkedIn ↗
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-[5px] hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <motion.span
            animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="w-5 h-0.5 bg-white/80 rounded-full"
          />
          <motion.span
            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-5 h-0.5 bg-white/80 rounded-full"
          />
          <motion.span
            animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="w-5 h-0.5 bg-white/80 rounded-full"
          />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? { opacity: 1, y: 0, pointerEvents: 'auto' } : { opacity: 0, y: -10, pointerEvents: 'none' }}
        transition={{ duration: 0.25 }}
        className="absolute top-full left-0 right-0 md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10"
      >
        <div className="flex flex-col px-5 py-5 gap-1">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase() === 'work' ? 'portfolio' : item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-white/70 hover:text-green transition-colors py-3 border-b border-white/5 last:border-0"
            >
              {item}
            </a>
          ))}
          <div className="pt-4">
            <a
              href="https://www.linkedin.com/in/graphicdesignlogodesignpostdesignbannerdesign0987/"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 text-xs font-semibold text-black bg-green rounded-xl text-center hover:shadow-[0_0_24px_rgba(1,218,94,0.4)] transition-all"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
