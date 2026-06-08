import { motion } from "framer-motion";

const LINES = ["ONE SLOT.", "ONE CITY TO START.", "ONE COUNTRY TO CONQUER.", "ARE YOU IN?"];

export default function TheAsk() {
  return (
    <section
      data-testid="ask-section"
      className="relative w-full bg-[#FF6B00] text-white py-32 md:py-48 lg:py-56 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <p className="text-[11px] tracking-[0.4em] uppercase text-white/80 mb-16 text-center">
        The ask
      </p>

      <div className="text-center max-w-6xl mx-auto">
        {LINES.map((l, i) => (
          <div key={l} className="overflow-hidden">
            <motion.h2
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
              className={`font-display leading-[0.9] ${
                i === LINES.length - 1
                  ? "text-[16vw] md:text-[12vw] lg:text-[10vw] text-white mt-6"
                  : "text-[10vw] md:text-[7.5vw] lg:text-[6vw] text-white"
              }`}
            >
              {l}
            </motion.h2>
          </div>
        ))}
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay: 0.8 }}
        className="origin-center h-[2px] bg-white/50 mt-24 max-w-3xl mx-auto"
      />
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.7 }}
        className="text-center mt-8 text-white/90 text-base md:text-lg font-semibold tracking-wide"
      >
        Habeeb Ali · Founder & CEO, Hanfim Foods LLP
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.15, duration: 0.7 }}
        className="text-center mt-2 text-white/80 text-sm md:text-base"
      >
        +91 93539 94283 · habeeb@grandfoodfest.com · grandfoodfest.com
      </motion.p>
    </section>
  );
}
