"use client"

import { motion } from "framer-motion"

export default function MorphIcon() {
  return (
    <motion.div
      className="bg-white flex-shrink-0"
      style={{ width: 8, height: 8 }}
      animate={{
        borderRadius: ["50%", "10%", "50%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    />
  )
}
