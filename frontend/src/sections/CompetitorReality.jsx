import { motion } from "framer-motion";

export default function CompetitorReality() {
  return (
    <section
      data-testid="competitor-section"
      className="relative w-full bg-white py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t-2 border-black"
    >
      <p className="text-[11px] tracking-[0.4em] uppercase text-black/60 mb-14">
        The competitor reality
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0">
        {/* LEFT — grey faded */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 md:p-12 bg-black/5 md:border-r-2 md:border-black/10"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-black/40 mb-6">
            Every other chai brand at Grand Food Fest
          </p>
          <h3 className="font-display text-black/30 text-5xl md:text-6xl leading-[0.95]">
            None of them.
          </h3>
          <div className="mt-6 space-y-3 text-black/40 text-base md:text-lg font-medium">
            <p>There is no other chai brand.</p>
            <p>The exclusive chai partner slot is empty.</p>
            <p>Right now.</p>
            <p className="line-through">For approximately the next 48 hours.</p>
          </div>
        </motion.div>

        {/* RIGHT — bold orange */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 md:p-12 bg-white border-2 border-[#FF6B00] shadow-[8px_8px_0_0_#FF6B00]"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#FF6B00] mb-6">
            Bhai Ki Chai at Grand Food Fest
          </p>
          <h3 className="font-display text-[#0A0A0A] text-5xl md:text-6xl leading-[0.95]">
            The only <span className="text-[#FF6B00]">chai brand.</span>
          </h3>
          <div className="mt-6 space-y-3 text-[#0A0A0A] text-base md:text-lg font-semibold">
            <p>75,000 people.</p>
            <p>Zero competition.</p>
            <p>Every cup is a brand impression.</p>
            <p>Every sip is a franchise conversation.</p>
            <p>
              Every morning after the festival someone wakes up and thinks about investing in
              Bhai Ki Chai.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-display text-[#0A0A0A] text-center mt-20 text-4xl md:text-6xl lg:text-7xl leading-[0.9]"
      >
        The slot is empty.
        <br />
        <span className="text-[#FF6B00]">It will not stay that way.</span>
      </motion.h3>
    </section>
  );
}
