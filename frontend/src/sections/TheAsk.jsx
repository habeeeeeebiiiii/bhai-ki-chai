import { motion } from "framer-motion";

const LINES = ["ONE SLOT.", "ONE CITY TO START.", "ONE COUNTRY TO CONQUER."];

const CHECKLIST = [
  "Exclusive chai partner at Grand Food Fest Hyderabad 2026",
  "75,000+ live festival impressions over 3 nights",
  "10M+ online reach. ₹1Cr+ brand visibility",
  "A dedicated FOCO franchise discovery counter",
  "Stage announcements on all 3 nights",
  "The launchpad for Bhai Ki Chai across India",
];

const MARQUEE = [
  "HYDERABAD",
  "BANGALORE",
  "CHENNAI",
  "MUMBAI",
  "DELHI",
  "PUNE",
  "KOLKATA",
  "AHMEDABAD",
];

export default function TheAsk() {
  return (
    <section
      data-testid="ask-section"
      id="the-ask"
      className="relative w-full bg-[#FF6B00] text-white overflow-hidden border-t-4 border-black"
    >
      {/* Big bg numerals */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] select-none">
        <div className="absolute -top-10 -left-6 font-display text-[40vw] leading-none">
          75K
        </div>
        <div className="absolute -bottom-24 -right-10 font-display text-[40vw] leading-none">
          OCT
        </div>
      </div>

      {/* Top tag + meta strip */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-24 md:pt-32">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <p className="text-[11px] tracking-[0.4em] uppercase text-white/90">
            The Ask · Closing the deal
          </p>
          <p className="text-[11px] tracking-[0.4em] uppercase text-white/80">
            October 9 · 10 · 11 · 2026 — Gachibowli, Hyderabad
          </p>
        </div>
        <div className="mt-4 h-[2px] bg-white/30" />
      </div>

      {/* Main grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 px-6 md:px-12 lg:px-20 py-20 md:py-28">
        {/* LEFT — the lines */}
        <div className="lg:col-span-8">
          {LINES.map((l, i) => (
            <div key={l} className="overflow-hidden">
              <motion.h2
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-white leading-[0.92] text-[12vw] md:text-[9vw] lg:text-[7vw]"
              >
                {l}
              </motion.h2>
            </div>
          ))}

          <div className="overflow-hidden mt-4">
            <motion.h2
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-display leading-[0.88] text-[18vw] md:text-[14vw] lg:text-[12vw]"
              style={{
                color: "transparent",
                WebkitTextStroke: "3px #FFFFFF",
              }}
            >
              ARE YOU IN?
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-10 max-w-xl text-white/90 text-base md:text-lg font-medium leading-relaxed"
          >
            The exclusive chai partner slot at Grand Food Fest is a one-time door. Once
            opened, it stays open across every city we go to next. One decision in
            Hyderabad. A national chai franchise empire after.
          </motion.p>
        </div>

        {/* RIGHT — saying yes means + seal */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          {/* rotating seal */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-44 h-44 md:w-52 md:h-52 self-start"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 22, ease: "linear", repeat: Infinity }}
              className="absolute inset-0"
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <path
                    id="circlePath"
                    d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
                  />
                </defs>
                <text fill="#FFFFFF" fontFamily="Anton, sans-serif" fontSize="16" letterSpacing="6">
                  <textPath href="#circlePath">
                    BHAI KI CHAI × GRAND FOOD FEST · HYDERABAD 2026 · BHAI KI CHAI × GFF ·
                  </textPath>
                </text>
              </svg>
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 md:w-28 md:h-28 bg-white text-[#FF6B00] flex items-center justify-center font-display text-3xl md:text-4xl border-4 border-[#0A0A0A]">
                YES.
              </div>
            </div>
          </motion.div>

          {/* saying yes means */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-white text-[#0A0A0A] border-4 border-[#0A0A0A] p-6 md:p-8"
          >
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#FF6B00] mb-3">
              Saying yes gets you
            </p>
            <ul className="space-y-3">
              {CHECKLIST.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm md:text-base font-semibold">
                  <span className="mt-[6px] block w-3 h-3 bg-[#FF6B00] flex-shrink-0 rotate-45" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Contact strip */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 pb-8">
        <div className="bg-[#0A0A0A] text-white p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-[#FF6B00] mb-2">
              Who to call
            </p>
            <p className="font-display text-2xl md:text-3xl">Habeeb Ali</p>
            <p className="text-xs text-white/60">Founder & CEO · Hanfim Foods LLP</p>
          </div>
          <div className="md:text-center">
            <p className="text-[10px] tracking-[0.4em] uppercase text-white/60 mb-2">
              Direct
            </p>
            <a href="tel:+919353994283" className="block font-display text-2xl text-[#FF6B00]">
              +91 93539 94283
            </a>
          </div>
          <div className="md:text-right">
            <p className="text-[10px] tracking-[0.4em] uppercase text-white/60 mb-2">
              Email
            </p>
            <a
              href="mailto:habeeb@grandfoodfest.com"
              className="block text-base md:text-lg text-white font-semibold break-all"
            >
              habeeb@grandfoodfest.com
            </a>
            <p className="text-xs text-white/50 mt-1">grandfoodfest.com</p>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="relative z-10 border-y-4 border-black bg-[#FF6B00] overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, ease: "linear", repeat: Infinity }}
        >
          {[...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE].map((c, i) => (
            <span
              key={i}
              className="font-display text-3xl md:text-5xl text-white mx-8 flex items-center gap-8"
            >
              {c}
              <span className="inline-block w-2 h-2 bg-[#B8960A] rounded-full" />
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
