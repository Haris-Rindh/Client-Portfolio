"use client";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 px-5 sm:px-8 md:px-12 lg:px-16 bg-black">
      <div className="max-w-[800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-14"
        >
          <div className="section-label">Background</div>
          <h2 className="section-title text-[clamp(2rem,6vw,3.5rem)]">Education &amp;<br /><span>Training</span></h2>
        </motion.div>

        <div className="relative mt-10 md:mt-14">
          <div className="absolute left-[20px] sm:left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-green to-green/10" />

          {[
            { delay: 0, icon: '🎓', year: '2022 — Present · 6th Semester', title: 'BSc Software Engineering', sub: 'Islamia University Bahawalpur', desc: 'Studying core computer science fundamentals alongside software development practices — gaining the engineering perspective that powers every design decision I make.' },
            { delay: 0.2, icon: '🏢', year: '2023 — Present', title: 'Product Design Training & Practice', sub: 'Sobria Marketing, Bahawalpur', desc: 'Hands-on product design leadership — from brief to delivery — across branding, UI/UX, social media, and motion graphics for real clients across multiple industries.' },
            { delay: 0.3, icon: '🎨', year: '2022', title: 'Graphic Design Foundations', sub: 'Self-directed · Adobe Suite + Figma', desc: 'Self-taught mastery of Adobe Illustrator, Photoshop, and Figma — building a portfolio from ground up through freelance projects, online coursework, and obsessive iteration.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: item.delay }}
              className="grid grid-cols-[40px_1fr] sm:grid-cols-[64px_1fr] gap-4 sm:gap-6 mb-8 md:mb-10 relative"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green/15 border-2 border-green rounded-full flex items-center justify-center text-lg sm:text-xl shadow-elevation-green relative z-10">
                {item.icon}
              </div>
              <div className="glass p-5 sm:p-6 md:p-7">
                <div className="text-xs sm:text-sm font-semibold tracking-widest text-green mb-1.5">{item.year}</div>
                <div className="font-display text-base sm:text-lg font-bold mb-1 text-white">{item.title}</div>
                <div className="text-sm sm:text-base text-body-tertiary mb-2.5">{item.sub}</div>
                <div className="text-sm sm:text-base text-body-tertiary leading-relaxed sm:leading-relaxed">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
