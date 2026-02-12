"use client"

import { motion } from "framer-motion"

interface BreatheSquareProps {
  className?: string
}

export default function BreatheSquare({ className = "" }: BreatheSquareProps) {
  return (
    <div className={`w-5 h-5 flex items-center justify-center ${className}`}>
      <motion.div
        className="bg-white"
        style={{
          width: 10,
          height: 10,
          borderRadius: 2,
          boxShadow: "0 0 2px rgba(255,255,255,0.4), 0 0 4px rgba(255,255,255,0.2)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2.5,
          ease: [0.4, 0, 0.2, 1],
          repeat: Infinity,
        }}
      />
    </div>
  )
}
