"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 bg-surface relative overflow-hidden">
      {/* Floating decorative shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute w-[80px] sm:w-[120px] h-[80px] sm:h-[120px] rounded-full border border-green opacity-10 top-[8%] right-[3%]"
        />
        <motion.div
          animate={{ y: [0, 18, 0], rotate: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute w-[40px] sm:w-[60px] h-[40px] sm:h-[60px] rounded-full bg-green opacity-10 bottom-[18%] left-[2%]"
        />
        <motion.div
          animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="hidden sm:block absolute w-[80px] h-[80px] rounded-xl border border-green opacity-10 top-[60%] right-[6%]"
        />
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
        {/* Bio card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass p-5 sm:p-8 md:p-10"
        >
          <div className="text-[0.65rem] sm:text-xs font-semibold tracking-widest uppercase text-green mb-3 sm:mb-4">
            Senior Product Designer · SE Student
          </div>
          <h2 className="font-display text-[clamp(1.6rem,5vw,2.6rem)] font-extrabold tracking-tight mb-3 sm:mb-5 leading-[1.1]">
            Waliha Idrees
          </h2>
          <p className="text-sm leading-relaxed text-body-secondary mb-5 sm:mb-7">
            As Senior Product Designer at Sobria Marketing, I lead product planning, research, branding, and mockup creation — delivering innovative, client-focused visual solutions that merge beauty with function. Currently in 6th semester of Software Engineering at Islamia University Bahawalpur, I bridge the gap between aesthetics and engineering.
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2.5">
            {['Figma', 'Illustrator', 'Photoshop', 'UI/UX', 'Branding', 'Product Design', 'HTML/CSS'].map((skill) => (
              <button
                key={skill}
                className="px-3 py-1.5 text-[0.65rem] sm:text-xs font-medium rounded-full bg-white/5 border border-white/10 text-white/70 hover:border-green hover:text-white hover:bg-green/10 hover:shadow-[0_0_12px_rgba(1,218,94,0.3)] transition-all focus-ring-subtle"
              >
                {skill}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          {[
            { num: '50+', label: 'Projects Delivered', className: 'glass' },
            { num: '30+', label: 'Happy Clients',       className: 'glass' },
            { num: '2+',  label: 'Years Experience',    className: 'glass' },
            { num: '7',   label: 'Core Services',       className: 'glass-green' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
              className={`${stat.className} p-4 sm:p-6 md:p-8 text-center`}
            >
              <div className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-green leading-none mb-1.5">
                {stat.num}
              </div>
              <div className="text-[0.65rem] sm:text-xs md:text-sm text-body-tertiary font-medium tracking-wide leading-tight">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
