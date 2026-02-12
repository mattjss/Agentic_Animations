"use client"

import { motion } from "framer-motion"

export default function FadeIcon() {
  return (
    <div className="relative flex items-center justify-center" style={{ width: 12, height: 12 }}>
      <motion.div
        className="absolute rounded-full bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: 5, height: 5 }}
        animate={{ opacity: [1, 0, 1] }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute rounded-full bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: 5, height: 5 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 0.75,
        }}
      />
    </div>
  )
}
