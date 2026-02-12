"use client"

import { motion } from "framer-motion"

export default function SpinIcon() {
  return (
    <motion.svg
      width={10}
      height={10}
      viewBox="0 0 10 10"
      style={{ transformOrigin: "center" }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1.2,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      <circle
        cx={5}
        cy={5}
        r={4}
        fill="none"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth={1.5}
        strokeDasharray="19 6.3"
        strokeLinecap="round"
      />
    </motion.svg>
  )
}
