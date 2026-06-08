import { motion } from "framer-motion";
import IndiaMap from "../components/IndiaMap";

export default function MapSection() {
  return (
    <section
      data-testid="map-section"
      className="relative w-full bg-white py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t-2 border-black"
    >
      <p className="text-[11px] tracking-[0.4em] uppercase text-[#FF6B00] mb-10">
        Where we are going
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <IndiaMap />
        </div>

        <div className="lg:col-span-5">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-[#0A0A0A] text-5xl md:text-6xl lg:text-7xl leading-[0.9]"
          >
            Born in Hyderabad.
            <br />
            <span className="text-[#FF6B00]">Built for India.</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="origin-left h-[2px] bg-black my-8"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="font-display text-[#FF6B00] text-2xl md:text-3xl leading-tight"
          >
            Every city we enter is a new market for Bhai Ki Chai.
            <br />
            Every festival is a franchise launch event.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-6 text-lg md:text-xl text-black/80 font-semibold"
          >
            This is not one partnership.
            <br />
            <span className="font-display text-[#0A0A0A] text-3xl md:text-4xl block mt-2">
              This is a national expansion strategy.
            </span>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
