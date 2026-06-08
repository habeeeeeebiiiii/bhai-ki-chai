import { motion } from "framer-motion";

const lines = ["FRANCHISE OWNED.", "COMPANY OPERATED.", "ZERO HEADACHE.", "PURE RETURNS."];
const punch = [
  "THE BEST FRANCHISE PITCH",
  "IS NOT IN A BOARDROOM.",
  "IT IS AT A FOOD FESTIVAL.",
  "WITH CHAI IN HAND.",
];

export default function FocoMoment() {
  return (
    <section
      data-testid="foco-section"
      className="relative w-full bg-[#FF6B00] text-white py-28 md:py-40 lg:py-48 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <p className="text-[11px] tracking-[0.4em] uppercase text-white/80 mb-14">
        The franchise opportunity
      </p>

      <div className="text-center">
        {lines.map((l, i) => (
          <div key={l} className="overflow-hidden">
            <motion.h2
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-white leading-[0.88] text-[12vw] md:text-[9vw] lg:text-[7.5vw]"
            >
              {l}
            </motion.h2>
          </div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center mt-16 text-base md:text-lg text-white/90 font-medium leading-relaxed"
      >
        The HITEC City IT professional earns well. Saves well. And lies awake at night wondering how to make their money work without quitting their job. They are not looking for a startup idea. They are looking for a plug and play investment that runs itself while they sleep. Bhai Ki Chai&apos;s FOCO model is exactly that answer. And Grand Food Fest puts you face to face with 75,000 of them at the moment they are most relaxed, most inspired, and most open to saying yes.
      </motion.p>

      <div className="mt-24 text-center">
        {punch.map((l, i) => (
          <div key={l} className="overflow-hidden">
            <motion.h3
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-white leading-[0.92] text-[8vw] md:text-[5vw] lg:text-[4vw]"
            >
              {l}
            </motion.h3>
          </div>
        ))}
      </div>
    </section>
  );
}
