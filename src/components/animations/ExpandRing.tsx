"use client"

import { motion } from "framer-motion"

interface ExpandRingProps {
  className?: string
}

export default function ExpandRing({ className = "" }: ExpandRingProps) {
  return (
    <div className={`w-5 h-5 flex items-center justify-center ${className}`}>
      <motion.svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        style={{ transformOrigin: "center" }}
      >
        <motion.circle
          cx={8}
          cy={8}
          r={6}
          fill="none"
          stroke="rgba(255,255,255,0.9)"
          strokeWidth={2}
          style={{ filter: "drop-shadow(0 0 2px rgba(255,255,255,0.4))" }}
          animate={{
            r: [3, 9],
            opacity: [1, 0],
            strokeWidth: [2, 1],
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
