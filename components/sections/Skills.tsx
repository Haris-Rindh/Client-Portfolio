"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    group: 'Design Tools', items: [
      { name: 'Figma', pct: 95 },
      { name: 'Adobe Illustrator', pct: 92 },
      { name: 'Photoshop', pct: 88 }
    ]
  },
  {
    group: 'Industry Expertise', items: [
      { name: 'Brand Identity', pct: 96 },
      { name: 'UI/UX Design', pct: 90 },
      { name: 'Social Media', pct: 94 }
    ]
  },
  {
    group: 'Technical Skills', items: [
      { name: 'Motion Graphics', pct: 75 },
      { name: 'Video Editing', pct: 70 },
      { name: 'HTML/CSS', pct: 80 }
    ]
  }
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <div className="overflow-hidden bg-green py-3.5 relative">
        <div className="flex whitespace-nowrap animate-[marquee_18s_linear_infinite]">
          {[...Array(12)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-4 px-6 font-display text-[0.85rem] font-bold text-black uppercase tracking-[0.08em]">
              {['Logo Design', 'Brand Identity', 'UI/UX Design', 'Social Media', 'Product Design', 'Motion Graphics'][i % 6]}
              <span className="w-1.5 h-1.5 bg-black/40 rounded-full" />
            </span>
          ))}
        </div>
      </div>

      <section id="skills" className="py-16 md:py-24 px-5 sm:px-8 md:px-12 lg:px-16 bg-black">
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 md:mb-14"
          >
            <div className="section-label">Arsenal</div>
            <h2 className="section-title text-[clamp(2rem,6vw,3.5rem)]">Skills &amp; <span>Tools</span></h2>
          </motion.div>

          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-14">
            {skills.map((group, i) => (
              <motion.div
                key={group.group}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="glass p-6 sm:p-8"
              >
                <div className="font-display text-sm sm:text-base font-bold mb-5 md:mb-6 flex items-center gap-2.5 text-white before:content-[''] before:block before:w-4 sm:before:w-5 before:h-0.5 before:bg-green">
                  {group.group}
                </div>
                {group.items.map(item => (
                  <div key={item.name} className="mb-4">
                    <div className="flex justify-between text-xs sm:text-sm text-body-secondary mb-2">
                      <span>{item.name}</span>
                      <span>{item.pct}%</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${item.pct}%` } : {}}
                        transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
                        className="h-full rounded-full shadow-elevation-green will-change-transform"
                        style={{ background: 'linear-gradient(90deg, var(--color-green), rgba(1,218,94,0.6))' }}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}} />
    </>
  );
}
