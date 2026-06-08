import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.4 },
  transition: { duration: 0.9, delay },
});

export default function ChaiConversation() {
  return (
    <section
      data-testid="chai-conversation-section"
      className="relative w-full py-32 md:py-48 px-6 md:px-12 lg:px-20"
      style={{ background: "#FFF8F0" }}
    >
      <p className="text-[11px] tracking-[0.4em] uppercase text-[#B8960A] mb-14 text-center">
        The chai conversation
      </p>

      <div className="max-w-4xl mx-auto">
        <motion.p {...fadeUp(0)} className="font-serif-italic text-3xl md:text-5xl lg:text-6xl text-[#0A0A0A] leading-tight">
          Every great business deal in India
          <br />
          started over a cup of chai.
        </motion.p>

        <motion.div className="space-y-3 mt-10 font-serif-italic text-xl md:text-3xl text-black/70 leading-snug">
          <motion.p {...fadeUp(0.1)}>Not in a boardroom.</motion.p>
          <motion.p {...fadeUp(0.2)}>Not on a Zoom call.</motion.p>
          <motion.p {...fadeUp(0.3)}>Not on LinkedIn.</motion.p>
        </motion.div>

        <motion.div className="space-y-3 mt-10 font-serif-italic text-2xl md:text-4xl text-[#0A0A0A] leading-snug">
          <motion.p {...fadeUp(0.4)}>Over chai.</motion.p>
          <motion.p {...fadeUp(0.5)}>Between two people.</motion.p>
          <motion.p {...fadeUp(0.6)}>In a moment of warmth.</motion.p>
        </motion.div>

        <motion.div
          {...fadeUp(0.7)}
          className="mt-20 font-display text-[#0A0A0A] text-5xl md:text-7xl lg:text-[7vw] leading-[0.88]"
        >
          Grand food fest is
          <br />
          <span className="text-[#FF6B00]">that moment.</span>
          <br />
          75,000 times over.
          <br />
          3 nights in a row.
        </motion.div>

        <motion.p
          {...fadeUp(0.8)}
          className="mt-14 text-base md:text-lg text-black/75 max-w-3xl font-medium leading-relaxed"
        >
          The IT professional who invests in a Bhai Ki Chai FOCO franchise does not make that
          decision because of a brochure. They make it because they had a cup of your chai at the
          best evening of their year, felt something warm, looked at the franchise counter behind
          it, and thought — <em className="font-serif-italic text-[#FF6B00]">I want a piece of this.</em>{" "}
          That is the moment Grand Food Fest creates for Bhai Ki Chai. Not once. 75,000 times.
        </motion.p>
      </div>
    </section>
  );
}
