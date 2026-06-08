import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ to, format, duration = 2.2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - p, 4);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {format ? format(val) : val.toLocaleString("en-IN")}
    </span>
  );
}

export default function AudienceTruth() {
  return (
    <section
      data-testid="audience-truth-section"
      className="relative w-full bg-white py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 border-t-2 border-black"
    >
      <p className="text-[11px] tracking-[0.4em] uppercase text-black/60 mb-12">
        The audience truth
      </p>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5"
        >
          <div
            data-testid="audience-counter"
            className="font-display text-[#FF6B00] leading-[0.82] text-[28vw] md:text-[14vw] lg:text-[12vw]"
          >
            <Counter to={75000} />
            <span>+</span>
          </div>
          <p className="font-display text-[#0A0A0A] text-2xl md:text-3xl mt-4">
            Visitors. Three Days.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-7 md:pl-8 md:border-l-2 md:border-[#0A0A0A]"
        >
          <p className="text-lg md:text-xl leading-relaxed font-semibold text-[#0A0A0A] space-y-1">
            Visitors at Grand Food Fest Hyderabad.<br />
            Not random people.<br />
            <span className="text-black/70 font-medium">IT professionals.</span>
            <br />
            <span className="text-black/70 font-medium">Corporate employees.</span>
            <br />
            <span className="font-display text-[#0A0A0A] text-2xl md:text-3xl block mt-3">
              Google. Microsoft. IBM. Amazon. TCS. Infosys.
            </span>
            <span className="block mt-3 text-black/80 font-medium">
              People earning Rs 8 lakh to Rs 50 lakh annually.
            </span>
            <span className="block text-black/80 font-medium">People with money.</span>
            <span className="block text-black/80 font-medium">
              People with zero time to build a business from scratch.
            </span>
            <span className="block text-black/80 font-medium">
              People who have been waiting for something plug and play.
            </span>
          </p>

          <p className="mt-6 font-display text-2xl md:text-4xl text-[#FF6B00] leading-[0.95]">
            People who are your perfect FOCO franchise investor.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="origin-left h-[2px] bg-[#FF6B00] my-14"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <p className="font-display text-[#0A0A0A] text-3xl md:text-5xl leading-[0.95]">
          They do not need a business idea.<br />
          They need <span className="text-[#FF6B00]">Bhai Ki Chai.</span>
        </p>
        <p className="mt-6 text-base md:text-lg text-black/70 max-w-xl font-medium">
          And Grand Food Fest puts you in the same room as all of them — for three days straight.
        </p>
      </motion.div>
    </section>
  );
}
