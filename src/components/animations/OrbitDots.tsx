"use client"

import { motion } from "framer-motion"

interface OrbitDotsProps {
  className?: string
}

export default function OrbitDots({ className = "" }: OrbitDotsProps) {
  return (
    <div className={`w-5 h-5 flex items-center justify-center relative ${className}`}>
      <motion.div
        className="absolute w-full h-full"
        style={{ transformOrigin: "center" }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.8,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <div
          className="absolute rounded-full bg-white left-1/2 -translate-x-1/2"
          style={{
            width: 4,
            height: 4,
            top: 0,
            marginTop: -2,
            boxShadow: "0 0 2px rgba(255,255,255,0.4)",
          }}
        />
        <div
          className="absolute rounded-full bg-white left-1/2 -translate-x-1/2"
          style={{
            width: 4,
            height: 4,
            bottom: 0,
            marginBottom: -2,
            boxShadow: "0 0 2px rgba(255,255,255,0.4)",
          }}
        />
      </motion.div>
    </div>
  )
}
