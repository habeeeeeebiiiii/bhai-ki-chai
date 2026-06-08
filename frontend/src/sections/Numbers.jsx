import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCount({ to, suffix = "", prefix = "", formatter }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (typeof to !== "number") return;
    const start = performance.now();
    const dur = 2000;
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 4);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {prefix}
      {formatter ? formatter(val) : Math.round(val).toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

const STATS = [
  {
    id: 1,
    big: <AnimatedCount to={75000} suffix="+" />,
    label: "Live visitors at Grand Food Fest Hyderabad",
  },
  {
    id: 2,
    big: <AnimatedCount to={10} suffix="M+" />,
    label: "Online reach before, during, and after",
  },
  {
    id: 3,
    big: (
      <>
        ₹<AnimatedCount to={1} suffix="Cr+" />
      </>
    ),
    label: "Worth of brand visibility",
  },
  {
    id: 4,
    big: <AnimatedCount to={3} />,
    label: "Nights of non-stop Bhai Ki Chai presence",
  },
  {
    id: 5,
    big: <AnimatedCount to={1} />,
    label: "Exclusive chai partner slot — once gone, forever",
  },
  {
    id: 6,
    big: <span>∞</span>,
    label: "Franchise enquiries from your perfect investor audience",
  },
];

export default function Numbers() {
  return (
    <section
      data-testid="numbers-section"
      className="relative w-full bg-white py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t-2 border-black"
    >
      <p className="text-[11px] tracking-[0.4em] uppercase text-[#FF6B00] mb-14">
        The numbers don&apos;t lie
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 md:gap-y-24 gap-x-10">
        {STATS.map((s, i) => (
          <motion.div
            key={s.id}
            data-testid={`stat-${s.id}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: i * 0.06 }}
            className="flex flex-col"
          >
            <div className="font-display text-[#FF6B00] text-7xl md:text-8xl lg:text-[7rem] leading-none">
              {s.big}
            </div>
            <div className="mt-4 h-[2px] w-12 bg-[#0A0A0A]" />
            <p className="mt-4 text-sm md:text-base text-black/80 font-semibold max-w-xs">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-display text-3xl md:text-5xl lg:text-6xl text-[#0A0A0A] mt-20 text-center leading-[0.95]"
      >
        This is not sponsorship.
        <br />
        <span className="text-[#FF6B00]">This is your national franchise launch.</span>
      </motion.p>
    </section>
  );
}
