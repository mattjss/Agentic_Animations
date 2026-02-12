"use client"

import { motion } from "framer-motion"

interface WaveProps {
  className?: string
}

export default function Wave({ className = "" }: WaveProps) {
  const dots = [0, 150, 300]

  return (
    <div className={`w-5 h-5 flex items-center justify-center gap-0.5 ${className}`}>
      {dots.map((delay, i) => (
        <motion.div
          key={i}
          className="rounded-full bg-white flex-shrink-0"
          style={{
            width: 4,
            height: 4,
            boxShadow: "0 0 2px rgba(255,255,255,0.4)",
          }}
          animate={{
            y: [-4, 0, 4, 0],
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            repeat: Infinity,
            delay: delay / 1000,
          }}
        />
      ))}
    </div>
  )
}
