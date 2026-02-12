"use client"

import { motion } from "framer-motion"

// Pattern: short, short, long (rhythmic Morse-like)
// Keyframes: 0% on, 20% off, 25% on, 45% off, 50% on, 100% off
export default function BlinkIcon() {
  return (
    <motion.div
      className="rounded-full bg-white flex-shrink-0"
      style={{ width: 6, height: 6 }}
      animate={{
        opacity: [1, 0, 1, 0, 1, 0],
      }}
      transition={{
        duration: 1.6,
        times: [0, 0.2, 0.25, 0.45, 0.5, 1],
        repeat: Infinity,
      }}
    />
  )
}
