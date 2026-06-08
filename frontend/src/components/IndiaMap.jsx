import { motion } from "framer-motion";

// City pins with approximate viewBox-relative coordinates (0-500 width, 0-560 height).
const CITIES = [
  { id: "hyd", name: "Hyderabad", x: 252, y: 360, gold: true, label: "GRAND FOOD FEST 2026" },
  { id: "blr", name: "Bangalore", x: 240, y: 415 },
  { id: "che", name: "Chennai", x: 290, y: 430 },
  { id: "mum", name: "Mumbai", x: 165, y: 320 },
  { id: "pun", name: "Pune", x: 190, y: 330 },
  { id: "del", name: "Delhi", x: 215, y: 145 },
  { id: "kol", name: "Kolkata", x: 360, y: 250 },
  { id: "ahm", name: "Ahmedabad", x: 155, y: 250 },
];

// Stylised India outline (simplified path). Not geo-accurate; visually evocative.
const INDIA_PATH =
  "M210 50 Q260 60 270 90 Q290 110 280 135 Q310 140 320 170 Q360 175 380 205 Q400 230 380 260 Q400 280 380 310 Q360 320 360 345 Q380 360 360 380 Q340 395 320 380 Q300 400 320 425 Q300 470 270 480 Q260 510 240 495 Q230 470 245 450 Q225 425 210 420 Q190 395 200 365 Q170 355 165 330 Q140 320 145 290 Q120 280 125 250 Q105 235 130 215 Q140 195 165 195 Q175 165 200 155 Q185 130 195 100 Q190 75 210 50 Z";

export default function IndiaMap() {
  return (
    <div className="relative w-full max-w-3xl mx-auto aspect-[5/6]">
      <svg
        viewBox="0 0 500 560"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* dotted grid */}
        <defs>
          <pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.7" fill="#0A0A0A" opacity="0.08" />
          </pattern>
        </defs>
        <rect width="500" height="560" fill="url(#dots)" />

        {/* outline */}
        <motion.path
          d={INDIA_PATH}
          stroke="#0A0A0A"
          strokeWidth="2"
          fill="#FFFFFF"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
        />

        {/* fill (revealed after path draws) */}
        <motion.path
          d={INDIA_PATH}
          fill="#0A0A0A"
          fillOpacity="0.02"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.6 }}
        />

        {/* pins */}
        {CITIES.map((c, i) => {
          const color = c.gold ? "#B8960A" : "#FF6B00";
          const r = c.gold ? 11 : 7;
          const delay = 1.8 + i * 0.18;
          return (
            <g key={c.id}>
              <motion.circle
                cx={c.x}
                cy={c.y}
                r={r}
                fill={color}
                initial={{ scale: 0, y: -30, opacity: 0 }}
                whileInView={{ scale: 1, y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay, ease: [0.22, 1.6, 0.4, 1] }}
                style={{ transformOrigin: `${c.x}px ${c.y}px` }}
              />
              {/* ripple */}
              <motion.circle
                cx={c.x}
                cy={c.y}
                r={r}
                fill="none"
                stroke={color}
                strokeWidth="1.5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: delay + 0.3 }}
              >
                <animate
                  attributeName="r"
                  from={r}
                  to={r * 4}
                  dur="2.2s"
                  begin={`${delay + 0.3}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.6"
                  to="0"
                  dur="2.2s"
                  begin={`${delay + 0.3}s`}
                  repeatCount="indefinite"
                />
              </motion.circle>

              {/* label */}
              <motion.text
                x={c.x + r + 8}
                y={c.y + 4}
                fontFamily="Anton, sans-serif"
                fontSize={c.gold ? 16 : 12}
                fill="#0A0A0A"
                initial={{ opacity: 0, x: c.x }}
                whileInView={{ opacity: 1, x: c.x + r + 8 }}
                viewport={{ once: true }}
                transition={{ delay: delay + 0.2, duration: 0.5 }}
              >
                {c.name.toUpperCase()}
              </motion.text>
              {c.gold && (
                <motion.text
                  x={c.x + r + 8}
                  y={c.y + 22}
                  fontFamily="Manrope, sans-serif"
                  fontSize={9}
                  letterSpacing="3"
                  fill="#B8960A"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: delay + 0.4 }}
                >
                  WHERE IT ALL BEGINS
                </motion.text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
