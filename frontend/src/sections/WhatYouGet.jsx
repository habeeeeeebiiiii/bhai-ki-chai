import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    n: "01",
    title: "The Exclusive Chai Experience Zone",
    body: "The only chai brand at Grand Food Fest. A premium Bhai Ki Chai branded experience zone in the heart of the festival. Serving chai to 75,000 people over 3 days. Every cup is a brand impression. Every cup is a franchise conversation starter.",
  },
  {
    n: "02",
    title: "The Franchise Discovery Counter",
    body: "A dedicated Bhai Ki Chai franchise enquiry counter inside the experience zone. Trained franchise team on the ground. QR code linking directly to the FOCO franchise application page. Every IT professional who picks up a cup of chai and asks how to invest gets an answer on the spot.",
  },
  {
    n: "03",
    title: "LED Screen Domination",
    body: "Bhai Ki Chai branding on every large format LED screen across 4 acres of festival ground. Continuous display. Every corner. Every minute. All 3 days and nights.",
  },
  {
    n: "04",
    title: "Entry Gate & Wristband Branding",
    body: "Your logo is the first thing 75,000 people see every day and the last thing they see as they leave. Your brand on every wristband going home with every visitor.",
  },
  {
    n: "05",
    title: "10M+ Online Reach",
    body: "Co-branded social media campaign before the festival. Daily reels and content from the Bhai Ki Chai zone during. Premium post-event highlight reel after. 10 million+ impressions total.",
  },
  {
    n: "06",
    title: "The Franchise Enquiry Database",
    body: "Post-event WhatsApp campaign to every registered festival attendee specifically about the Bhai Ki Chai FOCO franchise model. Warm verified high-income Hyderabadis who already experienced your brand in person. The most qualified franchise leads Bhai Ki Chai has ever received.",
  },
  {
    n: "07",
    title: "Stage Announcements",
    body: "Bhai Ki Chai announced from the main stage on all 3 nights in front of the live crowd before every performance.",
  },
  {
    n: "08",
    title: "The National Expansion Launchpad",
    body: "Grand Food Fest is going national. Every city we enter is a new Bhai Ki Chai market. This Hyderabad partnership is the template for Bangalore, Chennai, Mumbai, Delhi, and beyond.",
  },
];

export default function WhatYouGet() {
  const wrapRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const track = trackRef.current;
      const wrap = wrapRef.current;
      if (!track || !wrap) return;
      const totalScroll = track.scrollWidth - window.innerWidth + 64;

      const ctx = gsap.context(() => {
        gsap.to(track, {
          x: () => -totalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top top",
            end: () => `+=${totalScroll}`,
            scrub: 0.8,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }, wrap);
      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  useEffect(() => {
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section
      data-testid="what-you-get-section"
      ref={wrapRef}
      className="relative w-full bg-white border-t-2 border-black lg:h-screen lg:overflow-hidden"
    >
      <div className="lg:absolute lg:top-10 lg:left-12 px-6 md:px-12 lg:px-0 pt-16 lg:pt-0 z-10">
        <p className="text-[11px] tracking-[0.4em] uppercase text-[#FF6B00]">
          What Bhai Ki Chai gets
        </p>
        <h2 className="font-display text-[#0A0A0A] text-5xl md:text-6xl lg:text-7xl leading-[0.9] mt-3">
          Eight assets.
          <br />
          One slot.
        </h2>
      </div>

      <div
        ref={trackRef}
        className="flex flex-col lg:flex-row gap-6 lg:gap-8 px-6 md:px-12 lg:pl-[40vw] lg:pr-24 py-16 lg:py-0 lg:h-screen lg:items-center lg:w-max"
      >
        {CARDS.map((c) => (
          <article
            key={c.n}
            data-testid={`benefit-card-${c.n}`}
            className="bg-white border-2 border-[#0A0A0A] border-l-[6px] border-l-[#FF6B00] p-7 md:p-9 w-full lg:w-[420px] lg:min-h-[440px] flex flex-col flex-shrink-0 transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#FF6B00]"
          >
            <div className="flex items-start justify-between mb-6">
              <span className="font-display text-[#FF6B00] text-3xl">{c.n}</span>
              <span className="w-10 h-[2px] bg-[#0A0A0A] mt-4" />
            </div>
            <h3 className="font-display text-[#0A0A0A] text-2xl md:text-3xl leading-[0.95]">
              {c.title}
            </h3>
            <p className="mt-5 text-sm md:text-base text-black/75 font-medium leading-relaxed">
              {c.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
