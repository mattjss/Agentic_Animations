"use client"

import { motion } from "framer-motion"

interface PendulumProps {
  className?: string
}

export default function Pendulum({ className = "" }: PendulumProps) {
  return (
    <div className={`w-5 h-5 flex items-center justify-center ${className}`}>
      <motion.div
        className="rounded-full bg-white absolute"
        style={{
          width: 6,
          height: 6,
          left: "50%",
          top: "50%",
          marginLeft: -3,
          marginTop: -3,
          boxShadow: "0 0 2px rgba(255,255,255,0.4), 0 0 4px rgba(255,255,255,0.2)",
        }}
        animate={{
          x: [-6, 0, 6, 0, -6],
          y: [0, 2, 0, 2, 0],
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
