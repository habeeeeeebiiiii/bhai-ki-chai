import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [tipped, setTipped] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const start = performance.now();
    const dur = 2200;
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      setProgress(p);
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTipped(true);
        setTimeout(() => {
          setVisible(false);
          onDone && onDone();
        }, 750);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          data-testid="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
          className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center px-6"
        >
          <div className="relative w-40 h-40 mb-10">
            {/* steam */}
            {!tipped && (
              <div className="absolute inset-x-0 -top-4 flex justify-center gap-2">
                {[0, 0.4, 0.8].map((d, i) => (
                  <span
                    key={i}
                    className="steam-puff block w-2 h-6 rounded-full"
                    style={{ background: "rgba(255,107,0,0.45)", animationDelay: `${d}s` }}
                  />
                ))}
              </div>
            )}
            <motion.div
              animate={tipped ? { rotate: 95, x: 30, y: 10 } : { rotate: 0 }}
              transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
              className="w-full h-full origin-bottom"
            >
              <svg viewBox="0 0 120 120" width="100%" height="100%">
                <path
                  d="M20 36 L100 36 L92 102 Q92 110 84 110 L36 110 Q28 110 28 102 Z"
                  fill="#FF6B00"
                  stroke="#0A0A0A"
                  strokeWidth="3"
                />
                <ellipse cx="60" cy="36" rx="40" ry="5" fill="#B8960A" />
                <path d="M100 50 Q118 56 118 72 Q118 88 100 88" fill="none" stroke="#0A0A0A" strokeWidth="3" />
              </svg>
            </motion.div>
          </div>

          <h1
            data-testid="loading-tagline"
            className="font-display text-2xl sm:text-3xl md:text-4xl text-[#FF6B00] text-center leading-[0.95]"
          >
            Brewing the hottest proposal
            <br />
            <span className="text-[#0A0A0A]">Bhai Ki Chai has ever tasted.</span>
          </h1>

          <div className="mt-12 w-64 h-[3px] bg-black/10 overflow-hidden">
            <div
              className="h-full bg-[#FF6B00]"
              style={{ width: `${progress * 100}%`, transition: "width 0.06s linear" }}
            />
          </div>
          <p className="mt-3 text-[11px] tracking-[0.4em] text-black/50">
            {Math.round(progress * 100)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
