"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      service: formData.get('service'),
      message: formData.get('message')
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
    setLoading(false);
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-5 sm:px-8 md:px-12 lg:px-16 bg-black">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">Get in Touch</div>
          <h2 className="section-title text-[clamp(2rem,6vw,3.5rem)]">Let&apos;s <span>Talk</span></h2>
          <p className="text-[0.85rem] md:text-[0.9rem] text-white/50 leading-[1.7] md:leading-[1.8] my-4 md:my-5 mb-8">
            Ready to elevate your brand&apos;s visual presence? Drop a message and let&apos;s discuss how we can bring your ideas to life.
          </p>

          <div className="flex items-center gap-3 md:gap-3.5 mb-4 text-sm md:text-base text-body-secondary">
            <div className="w-8 h-8 md:w-9 md:h-9 bg-green/15 border border-green/30 rounded-lg flex items-center justify-center text-sm md:text-base">📧</div>
            <span>waliha.idrees@example.com</span>
          </div>
          <div className="flex items-center gap-3 md:gap-3.5 mb-4 text-sm md:text-base text-body-secondary">
            <div className="w-8 h-8 md:w-9 md:h-9 bg-green/15 border border-green/30 rounded-lg flex items-center justify-center text-sm md:text-base">📍</div>
            <span>Bahawalpur, Pakistan</span>
          </div>
          <div className="flex items-center gap-3 md:gap-3.5 mb-4 text-sm md:text-base text-body-secondary">
            <div className="w-8 h-8 md:w-9 md:h-9 bg-green/15 border border-green/30 rounded-lg flex items-center justify-center text-sm md:text-base">🔗</div>
            <span><a href="https://www.linkedin.com/in/graphicdesignlogodesignpostdesignbannerdesign0987/" target="_blank" rel="noreferrer" className="hover:text-green transition-colors">LinkedIn Profile</a></span>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="space-y-4 md:space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs md:text-xs font-medium text-white/70 mb-2 tracking-wide">Name</label>
              <input required name="name" type="text" disabled={loading} className="form-input-base w-full" />
            </div>
            <div>
              <label className="block text-xs md:text-xs font-medium text-white/70 mb-2 tracking-wide">Email</label>
              <input required name="email" type="email" disabled={loading} className="form-input-base w-full" />
            </div>
          </div>
          <div>
            <label className="block text-xs md:text-xs font-medium text-white/70 mb-2 tracking-wide">Looking For</label>
            <select name="service" disabled={loading} className="form-input-base w-full appearance-none">
              <option value="logo">Logo / Branding</option>
              <option value="social">Social Media Design</option>
              <option value="uiux">UI/UX Design</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-xs md:text-xs font-medium text-white/70 mb-2 tracking-wide">Message</label>
            <textarea required name="message" disabled={loading} className="form-input-base w-full resize-y min-h-[100px] md:min-h-[120px]" />
          </div>

          {/* Reserved space for feedback messages */}
          <div className="h-12 flex items-center">
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-sm font-medium text-error"
              >
                ✕ Error sending message. Please try again.
              </motion.p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3.5 md:py-4 text-sm md:text-base font-semibold rounded-xl border-none relative overflow-hidden transition-all duration-300 focus-ring ${success ? 'bg-success text-black' : loading ? 'bg-green/60' : 'bg-green text-black hover:shadow-elevation-green hover:-translate-y-0.5'}`}
          >
            <motion.div
              className="flex items-center justify-center gap-2"
              animate={{ opacity: 1 }}
              key={loading ? 'loading' : success ? 'success' : 'default'}
            >
              {loading && (
                <>
                  <svg className="spinner w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" opacity="0.2" />
                    <path d="M12 2a10 10 0 0 1 10 10" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  Sending...
                </>
              )}
              {success && (
                <>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Message Sent!
                </>
              )}
              {!loading && !success && 'Send Message'}
            </motion.div>
          </button>
        </motion.form>
      </div>
    </section>
  );
}
