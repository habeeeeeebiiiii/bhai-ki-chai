import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Animated chai cup cursor with a trail of steam puffs.
export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springConfig = { damping: 24, stiffness: 320, mass: 0.4 };
  const cx = useSpring(x, springConfig);
  const cy = useSpring(y, springConfig);

  const [trail, setTrail] = useState([]);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 768px)").matches) {
      setEnabled(false);
      return;
    }

    let last = 0;
    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const now = performance.now();
      if (now - last > 70) {
        last = now;
        const id = now + Math.random();
        setTrail((t) => [...t.slice(-6), { id, x: e.clientX, y: e.clientY }]);
        setTimeout(() => {
          setTrail((t) => t.filter((p) => p.id !== id));
        }, 900);
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {trail.map((p) => (
        <motion.span
          key={p.id}
          initial={{ opacity: 0.6, scale: 0.6 }}
          animate={{ opacity: 0, scale: 1.8, y: -28 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{
            position: "fixed",
            left: p.x - 4,
            top: p.y - 18,
            width: 8,
            height: 8,
            borderRadius: 999,
            background: "rgba(255,107,0,0.35)",
            pointerEvents: "none",
            zIndex: 9998,
            filter: "blur(2px)",
          }}
        />
      ))}
      <motion.div
        style={{
          translateX: cx,
          translateY: cy,
          position: "fixed",
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          marginLeft: -18,
          marginTop: -18,
          pointerEvents: "none",
          zIndex: 9999,
        }}
      >
        <svg viewBox="0 0 40 40" width="36" height="36">
          {/* steam */}
          <g stroke="#FF6B00" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.9">
            <path d="M14 6 Q16 4 14 2" />
            <path d="M20 7 Q22 5 20 3" />
            <path d="M26 6 Q28 4 26 2" />
          </g>
          {/* cup */}
          <path
            d="M8 14 L32 14 L29 34 Q29 36 27 36 L13 36 Q11 36 11 34 Z"
            fill="#FF6B00"
            stroke="#0A0A0A"
            strokeWidth="2"
          />
          {/* handle */}
          <path d="M32 18 Q38 20 38 25 Q38 30 32 30" fill="none" stroke="#0A0A0A" strokeWidth="2" />
          {/* chai surface */}
          <ellipse cx="20" cy="14" rx="12" ry="2" fill="#B8960A" />
        </svg>
      </motion.div>
    </>
  );
}
