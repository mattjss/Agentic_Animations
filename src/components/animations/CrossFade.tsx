"use client"

import { motion } from "framer-motion"

interface CrossFadeProps {
  className?: string
}

export default function CrossFade({ className = "" }: CrossFadeProps) {
  return (
    <div className={`w-5 h-5 flex items-center justify-center relative ${className}`}>
      <motion.div
        className="absolute bg-white"
        style={{
          width: 12,
          height: 2,
          left: "50%",
          top: "50%",
          marginLeft: -6,
          marginTop: -1,
          boxShadow: "0 0 2px rgba(255,255,255,0.4)",
        }}
        animate={{
          rotate: [0, 90, 0],
          opacity: [1, 0.3, 1],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bg-white"
        style={{
          width: 2,
          height: 12,
          left: "50%",
          top: "50%",
          marginLeft: -1,
          marginTop: -6,
          boxShadow: "0 0 2px rgba(255,255,255,0.4)",
        }}
        animate={{
          rotate: [0, 90, 0],
          opacity: [1, 0.3, 1],
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
