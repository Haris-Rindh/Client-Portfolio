"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-5 sm:px-8 md:px-12 lg:px-16 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute w-[120px] h-[120px] rounded-full border border-green opacity-15 top-[10%] right-[3%]" 
        />
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute w-[60px] h-[60px] rounded-full bg-green opacity-15 bottom-[20%] left-[3%]" 
        />
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute w-[80px] h-[80px] rounded-xl border border-green opacity-15 top-[60%] right-[5%]" 
        />
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass p-6 sm:p-8 md:p-10"
        >
          <div className="text-xs md:text-xs font-semibold tracking-widest uppercase text-green mb-4">Senior Product Designer · SE Student</div>
          <h2 className="font-display text-[clamp(1.8rem,5vw,2.6rem)] font-extrabold tracking-tight mb-4 md:mb-5 leading-[1.1]">Waliha<br className="hidden sm:block" /> Idrees</h2>
          <p className="text-sm md:text-base leading-relaxed md:leading-relaxed text-body-secondary mb-6 md:mb-7">
            As Senior Product Designer at Sobria Marketing, I lead product planning, research, branding, and mockup creation — delivering innovative, client-focused visual solutions that merge beauty with function. Currently in 6th semester of Software Engineering at Islamia University Bahawalpur, I bridge the gap between aesthetics and engineering.
          </p>
          <div className="flex flex-wrap gap-2 md:gap-2.5">
            {['Figma', 'Illustrator', 'Photoshop', 'UI/UX', 'Branding', 'Product Design', 'HTML/CSS'].map((skill) => (
              <button key={skill} className="px-3.5 py-1.5 md:px-4 text-xs md:text-xs font-medium rounded-full bg-white/5 border border-white/10 text-white/70 hover:border-green hover:text-white hover:bg-green/10 hover:shadow-[0_0_12px_rgba(1,218,94,0.4)] transition-all focus-ring-subtle">
                {skill}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 sm:gap-5">
          {[
            { num: '50', label: 'Projects Delivered', className: 'glass' },
            { num: '30', label: 'Happy Clients', className: 'glass' },
            { num: '2', label: 'Years Experience', className: 'glass' },
            { num: '7', label: 'Core Services', className: 'glass-green' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
              className={`${stat.className} p-5 md:p-7 text-center`}
            >
              <div className="font-display text-4xl md:text-5xl font-extrabold text-green leading-none mb-1.5 md:mb-2">{stat.num}</div>
              <div className="text-xs md:text-sm text-body-tertiary font-medium tracking-wide leading-tight">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
