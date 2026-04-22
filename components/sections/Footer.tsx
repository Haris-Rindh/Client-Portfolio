export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/10 p-12">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center flex-wrap gap-6">
        <div className="font-display text-[1.3rem] font-extrabold tracking-[-0.03em]">
          Waliha<span className="text-green">.</span>
        </div>
        <ul className="flex gap-7 list-none">
          {['LinkedIn', 'Instagram', 'Dribbble'].map((link) => (
            <li key={link}>
              <a href="#" className="text-[0.82rem] text-white/50 hover:text-green transition-colors">
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div className="w-full text-center text-[0.78rem] text-white/30 pt-6 border-t border-white/10 mt-2">
          © {new Date().getFullYear()} Waliha Idrees. Designed by <span className="text-green">Waliha</span>.
        </div>
      </div>
    </footer>
  );
}
