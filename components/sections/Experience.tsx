"use client";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 px-5 sm:px-8 md:px-12 lg:px-16 bg-surface">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-14"
        >
          <div className="section-label">Career</div>
          <h2 className="section-title text-[clamp(2rem,6vw,3.5rem)]">Professional <br className="hidden sm:block" /><span>Experience</span></h2>
        </motion.div>

        {[
          { icon: '⚡', name: 'Sobria Marketing', time: '2023 — Present', role: 'Senior Product Designer', desc: 'Leading end-to-end product visual strategy — from initial research and client briefs through wireframing, mockup creation, and final asset delivery. I collaborate with strategists and developers to ensure every design decision is both aesthetically intentional and functionally purposeful. Key responsibilities include brand identity development, UI/UX mockup creation, social media design systems, and onboarding new design team members.', tools: ['Figma', 'Adobe Illustrator', 'Photoshop', 'After Effects', 'Premiere Pro', 'Canva Pro', 'HTML/CSS'] },
          { icon: '🎨', name: 'Freelance Design', time: '2022 — Present', role: 'Graphic Designer & Brand Consultant', desc: 'Independent design practice serving local businesses, startups, and entrepreneurs across Pakistan. Services include logo design, brand identity packages, social media content systems, and print design. Developed a client-first approach to understanding briefs and iterating rapidly to deliver high-quality results on tight timelines.', tools: ['Adobe Illustrator', 'Photoshop', 'Figma', 'Canva'] }
        ].map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="glass p-6 sm:p-8 md:p-10 mb-6 relative overflow-hidden group"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-green to-transparent" />

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-3">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-green/15 border border-green/30 rounded-full w-max">
                <span className="text-base">{exp.icon}</span>
                <span className="font-display text-xs md:text-sm font-bold text-green">{exp.name}</span>
              </div>
              <span className="text-xs md:text-sm text-body-tertiary px-3.5 py-1.5 border border-white/10 rounded-full w-max">{exp.time}</span>
            </div>

            <div className="font-display text-lg md:text-xl font-extrabold mb-3 tracking-tight text-white">{exp.role}</div>
            <div className="text-sm md:text-base text-body-secondary leading-relaxed md:leading-relaxed mb-5">{exp.desc}</div>

            <div className="flex flex-wrap gap-2">
              {exp.tools.map(tool => (
                <span key={tool} className="px-3 py-1.5 text-xs md:text-xs font-medium rounded-full border border-white/10 text-white/60 bg-white/5 hover:border-green/50 hover:text-white/80 transition-all">{tool}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
