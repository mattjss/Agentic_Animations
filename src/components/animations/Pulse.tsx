"use client"

import { motion } from "framer-motion"

interface PulseProps {
  className?: string
}

export default function Pulse({ className = "" }: PulseProps) {
  return (
    <div className={`w-5 h-5 flex items-center justify-center ${className}`}>
      <motion.div
        className="rounded-full bg-white"
        style={{
          width: 8,
          height: 8,
          boxShadow: "0 0 4px rgba(255,255,255,0.5)",
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 1, 0.4],
          boxShadow: [
            "0 0 0px rgba(255,255,255,0.5)",
            "0 0 4px rgba(255,255,255,0.5)",
            "0 0 0px rgba(255,255,255,0.5)",
          ],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </div>
  )
}
