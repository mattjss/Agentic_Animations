"use client"

import { motion } from "framer-motion"

export default function BreatheIcon() {
  return (
    <motion.div
      className="bg-white flex-shrink-0"
      style={{
        width: 8,
        height: 8,
        borderRadius: 1,
      }}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 2.5,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    />
  )
}
