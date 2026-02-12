"use client"

import { motion } from "framer-motion"

interface MorphProps {
  className?: string
}

export default function Morph({ className = "" }: MorphProps) {
  return (
    <div className={`w-5 h-5 flex items-center justify-center ${className}`}>
      <motion.div
        className="bg-white"
        style={{
          width: 10,
          height: 10,
          boxShadow: "0 0 2px rgba(255,255,255,0.4), 0 0 4px rgba(255,255,255,0.2)",
        }}
        animate={{
          borderRadius: ["50%", "10%", "50%"],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2.4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </div>
  )
}
