import { motion } from "framer-motion";

const words = [
  "YOUR",
  "NEXT",
  "1000",
  "FRANCHISE",
  "ENQUIRIES",
  "ARE",
  "SITTING",
  "IN",
  "ONE",
  "STADIUM.",
  "THIS",
  "OCTOBER.",
];

export default function OneLine() {
  return (
    <section
      data-testid="one-line-section"
      className="relative w-full bg-white py-32 md:py-48 lg:py-56 px-6 md:px-12 lg:px-20 border-t-2 border-black"
    >
      <p className="text-[11px] tracking-[0.4em] uppercase text-[#FF6B00] mb-12">
        The one line that changes everything
      </p>

      <h2 className="font-display text-[#0A0A0A] leading-[0.88] text-[10vw] md:text-[7.5vw] lg:text-[6vw]">
        {words.map((w, i) => {
          const isOrange = ["1000", "STADIUM.", "OCTOBER."].includes(w);
          return (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className={`inline-block mr-[0.18em] ${isOrange ? "text-[#FF6B00]" : ""}`}
            >
              {w}
            </motion.span>
          );
        })}
      </h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="origin-left h-[2px] bg-[#0A0A0A] mt-16 w-full"
      />
    </section>
  );
}
