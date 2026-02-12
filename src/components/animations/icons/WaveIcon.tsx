"use client"

import { motion } from "framer-motion"

const delays = [0, 0.15, 0.3]

export default function WaveIcon() {
  return (
    <div className="flex items-end gap-[2px]" style={{ height: 8 }}>
      {delays.map((delay, i) => (
        <motion.div
          key={i}
          className="bg-white flex-shrink-0"
          style={{
            width: 2,
            height: 8,
            borderRadius: 1,
          }}
          animate={{ height: [2, 8, 2] }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            delay,
          }}
        />
      ))}
    </div>
  )
}
