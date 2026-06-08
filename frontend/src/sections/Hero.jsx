import { motion } from "framer-motion";

const drop = (delay = 0) => ({
  initial: { y: "120%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Hero() {
  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen w-full bg-white flex flex-col justify-between pt-32 md:pt-36 pb-12 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="flex items-center justify-between">
        <div className="text-[11px] tracking-[0.4em] uppercase text-black/60">
          Sponsorship & Franchise Proposal
        </div>
        <div className="text-[11px] tracking-[0.4em] uppercase text-black/60 hidden md:block">
          Hyderabad · October 2026
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center mt-12">
        <div className="overflow-hidden">
          <motion.h1
            {...drop(0)}
            data-testid="hero-line-1"
            className="font-display text-[#FF6B00] text-[22vw] md:text-[18vw] lg:text-[15vw] leading-[0.82]"
          >
            75,000
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            {...drop(0.15)}
            data-testid="hero-line-2"
            className="font-display text-[#0A0A0A] text-[22vw] md:text-[18vw] lg:text-[15vw] leading-[0.82]"
          >
            Chai
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            {...drop(0.3)}
            data-testid="hero-line-3"
            className="font-display text-[#0A0A0A] text-[22vw] md:text-[18vw] lg:text-[15vw] leading-[0.82]"
          >
            Lovers.
          </motion.h1>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="origin-left h-[2px] bg-[#FF6B00] w-full mt-10"
        />

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.6 }}
            className="font-bold text-lg md:text-2xl text-[#0A0A0A] max-w-md"
          >
            One festival. Three nights. Hyderabad.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.85 }}
            className="font-serif-italic text-xl md:text-2xl text-[#FF6B00]"
          >
            And this is just the beginning.
          </motion.p>
        </div>
      </div>

      <div className="flex items-end justify-between mt-10">
        <div className="text-[11px] tracking-[0.4em] uppercase text-black/40">
          Scroll · See why ↓
        </div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-12 bg-[#FF6B00]"
        />
      </div>
    </section>
  );
}
