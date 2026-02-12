"use client"

import { motion } from "framer-motion"

export default function PulseIcon() {
  return (
    <motion.div
      className="rounded-full bg-white flex-shrink-0"
      style={{
        width: 6,
        height: 6,
        boxShadow: "0 0 2px rgba(255,255,255,0.3)",
      }}
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    />
  )
}
