import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      data-testid="top-bar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-black/10 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="px-4 md:px-8 lg:px-12 flex items-center justify-between gap-4">
        {/* BKC logo */}
        <a
          href="#top"
          className="flex items-center gap-3 group"
          data-testid="topbar-bkc-logo"
        >
          <div
            className={`relative overflow-hidden bg-white border border-black/10 transition-all duration-300 ${
              scrolled ? "p-1.5" : "p-2"
            }`}
          >
            <img
              src="https://i.ibb.co/Z1tZ2tMt/bhai-ki-chai-header-logo-png.webp"
              alt="Bhai Ki Chai"
              className={`object-contain transition-all duration-300 ${
                scrolled ? "h-8 md:h-9" : "h-10 md:h-12"
              }`}
            />
          </div>
        </a>

        {/* Center collab marker */}
        <div className="hidden md:flex items-center gap-3 flex-1 justify-center">
          <span className="h-px w-10 bg-black/30" />
          <span className="font-display text-[#FF6B00] text-base md:text-lg tracking-tight">
            × Collaboration Proposal
          </span>
          <span className="h-px w-10 bg-black/30" />
        </div>

        {/* GFF logo */}
        <a
          href="#footer"
          className="flex items-center gap-3"
          data-testid="topbar-gff-logo"
        >
          <div
            className={`relative overflow-hidden bg-white border border-black/10 transition-all duration-300 ${
              scrolled ? "p-1.5" : "p-2"
            }`}
          >
            <img
              src="https://i.ibb.co/GvzRF0fC/Gff-2-6.png"
              alt="Grand Food Fest"
              className={`object-contain transition-all duration-300 ${
                scrolled ? "h-8 md:h-9" : "h-10 md:h-12"
              }`}
            />
          </div>
        </a>
      </div>
    </motion.header>
  );
}
