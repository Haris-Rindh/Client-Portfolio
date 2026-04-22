"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  { icon: '🎨', title: 'Logo Design', desc: 'Distinctive marks that capture brand essence — from wordmarks to emblems, crafted with precision.' },
  { icon: '🏢', title: 'Brand Identity', desc: 'Cohesive visual systems — color palettes, typography, guidelines — that tell your brand story.' },
  { icon: '📱', title: 'Social Media Posts', desc: 'Scroll-stopping content designs for Instagram, Facebook, LinkedIn, and beyond.' },
  { icon: '📢', title: 'Banner Design', desc: 'High-impact banners for digital campaigns, events, and out-of-home placements.' },
  { icon: '🖥️', title: 'UI/UX Mockups', desc: 'Intuitive interface designs and high-fidelity prototypes that users love to navigate.' },
  { icon: '📦', title: 'Product Design', desc: 'End-to-end product visual strategy — from ideation and research to polished final assets.' },
  { icon: '🎬', title: 'Motion Graphics', desc: 'Animated visuals that bring brands to life — for reels, intros, ads, and digital campaigns.' },
];

interface ServiceData {
  icon: string;
  title: string;
  desc: string;
}

function ServiceCard({ svc, index }: { svc: ServiceData; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  // 3D Card Hover Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (typeof window !== "undefined" && window.innerWidth < 768) return;
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: (index % 4) * 0.1, type: "spring" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="glass p-9 relative overflow-hidden group cursor-none hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(1,218,94,0.2)] hover:border-green/40 transition-shadow duration-500 w-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-green/15 via-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

      <motion.div
        style={{ translateZ: 50 }}
        className="w-12 h-12 mb-6 flex justify-center items-center text-2xl bg-green/10 border border-green/30 rounded-xl group-hover:bg-green/20 group-hover:shadow-[0_0_25px_rgba(1,218,94,0.4)] transition-all duration-300 relative z-10"
      >
        {svc.icon}
      </motion.div>
      <motion.h3 style={{ translateZ: 40 }} className="font-display text-lg font-bold mb-3 relative z-10 text-white">{svc.title}</motion.h3>
      <motion.p style={{ translateZ: 30 }} className="text-sm text-body-secondary leading-relaxed mb-6 relative z-10">{svc.desc}</motion.p>

      <motion.div style={{ translateZ: 40 }} className="text-xs font-semibold text-green tracking-wide flex items-center gap-1.5 group-hover:gap-3 transition-all relative z-10">
        Get This Service <span className="group-hover:translate-x-1 transition-transform">→</span>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 px-5 sm:px-8 md:px-12 lg:px-16 bg-black relative">
      <div className="absolute top-1/4 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-green/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-green/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 flex flex-col items-center text-center sm:items-start sm:text-left"
        >
          <div className="section-label">What I Do</div>
          <h2 className="section-title text-[clamp(2rem,6vw,3.5rem)]">Services &amp; <br className="hidden sm:block" /><span>Expertise</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8" style={{ perspective: 1000 }}>
          {services.map((svc, i) => (
            <ServiceCard key={svc.title} svc={svc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
