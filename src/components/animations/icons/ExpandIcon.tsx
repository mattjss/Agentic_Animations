"use client"

import { motion } from "framer-motion"

export default function ExpandIcon() {
  return (
    <div className="flex items-center justify-center" style={{ width: 12, height: 12 }}>
      <motion.svg
        width={10}
        height={10}
        viewBox="0 0 10 10"
        style={{ transformOrigin: "center" }}
      >
        <motion.circle
          cx={5}
          cy={5}
          r={4}
          fill="none"
          stroke="rgba(255,255,255,0.9)"
          strokeWidth={1.5}
          animate={{
            r: [2, 6],
            opacity: [1, 0],
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            repeat: Infinity,
          }}
        />
      </motion.svg>
    </div>
  )
}
