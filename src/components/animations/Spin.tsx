"use client"

import { motion } from "framer-motion"

interface SpinProps {
  className?: string
}

export default function Spin({ className = "" }: SpinProps) {
  return (
    <div className={`w-5 h-5 flex items-center justify-center ${className}`}>
      <motion.svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        style={{ transformOrigin: "center" }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.2,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <circle
          cx={8}
          cy={8}
          r={6}
          fill="none"
          stroke="rgba(255,255,255,0.9)"
          strokeWidth={2}
          strokeDasharray="28 9.5"
          strokeLinecap="round"
          style={{ filter: "drop-shadow(0 0 2px rgba(255,255,255,0.4))" }}
        />
      </motion.svg>
    </div>
  )
}
